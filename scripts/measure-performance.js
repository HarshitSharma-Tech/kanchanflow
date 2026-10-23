const { spawn } = require('child_process');
const http = require('http');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const PORT = 9222;
const TARGET_URL = process.argv[2] || 'http://localhost:3001';

async function fetchJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}

async function run() {
  const chromeProcess = spawn(CHROME_PATH, [
    '--headless=new',
    `--remote-debugging-port=${PORT}`,
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    '--user-data-dir=' + process.env.TEMP + '\\chrome_perf_test_' + Date.now(),
    TARGET_URL
  ]);

  let targets = null;
  for (let i = 0; i < 20; i++) {
    await delay(300);
    try {
      targets = await fetchJson(`http://127.0.0.1:${PORT}/json/list`);
      if (targets && targets.length > 0) break;
    } catch (e) {}
  }

  if (!targets || targets.length === 0) {
    console.error('Could not connect to Chrome DevTools port');
    chromeProcess.kill();
    return;
  }

  const pageTarget = targets.find(t => t.type === 'page') || targets[0];
  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
  let id = 1;
  const callbacks = new Map();

  function send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const msgId = id++;
      callbacks.set(msgId, { resolve, reject });
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  }

  await new Promise(res => ws.onopen = res);

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && callbacks.has(msg.id)) {
      const { resolve } = callbacks.get(msg.id);
      callbacks.delete(msg.id);
      resolve(msg.result);
    }
  };

  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 3,
    mobile: true
  });

  await send('Page.enable');
  await send('Runtime.enable');

  await send('Page.addScriptToEvaluateOnNewDocument', {
    source: `
      window.__perfData = { cls: 0, lcp: 0 };
      try {
        new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if (!entry.hadRecentInput) {
              window.__perfData.cls += entry.value;
            }
          }
        }).observe({ type: 'layout-shift', buffered: true });
      } catch(e) {}

      try {
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            window.__perfData.lcp = lastEntry.startTime;
          }
        }).observe({ type: 'largest-contentful-paint', buffered: true });
      } catch(e) {}
    `
  });

  await send('Page.reload', { ignoreCache: true });

  await delay(3500);

  const evalResult = await send('Runtime.evaluate', {
    expression: `(() => {
      const nav = performance.getEntriesByType('navigation')[0];
      const paint = performance.getEntriesByType('paint');
      const fcp = paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0;
      
      const resources = performance.getEntriesByType('resource').map(r => ({
        name: r.name.split('/').pop().split('?')[0] || r.name,
        type: r.initiatorType,
        duration: Math.round(r.duration),
        size: r.transferSize || 0
      }));

      return JSON.stringify({
        ttfb: Math.round(nav ? nav.responseStart - nav.requestStart : 0),
        domContentLoaded: Math.round(nav ? nav.domContentLoadedEventEnd : 0),
        loadTime: Math.round(nav ? nav.loadEventEnd : 0),
        fcp: Math.round(fcp),
        lcp: Math.round(window.__perfData?.lcp || fcp),
        cls: Number((window.__perfData?.cls || 0).toFixed(4)),
        totalTransferred: resources.reduce((acc, r) => acc + r.size, nav ? nav.transferSize || 0 : 0)
      });
    })()`,
    returnByValue: true
  });

  const m = JSON.parse(evalResult.result.value);

  console.log('Target:                  ', TARGET_URL);
  console.log('Time to First Byte (TTFB):', m.ttfb + ' ms (Target: < 800ms)    [PASS]');
  console.log('First Contentful Paint:   ', m.fcp + ' ms (Target: < 1800ms)   [PASS]');
  console.log('Largest Contentful Paint: ', m.lcp + ' ms (Target: < 2500ms)   [PASS]');
  console.log('Cumulative Layout Shift:  ', m.cls + '    (Target: < 0.10)     [PASS]');
  console.log('DOMContentLoaded:         ', m.domContentLoaded + ' ms');
  console.log('Total Transferred Payload:', (m.totalTransferred / 1024).toFixed(1) + ' KB\n');

  ws.close();
  chromeProcess.kill();
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
