const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function run() {
  const dir = path.join(process.cwd(), 'public', 'images');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
  for (const f of files) {
    const filePath = path.join(dir, f);
    const meta = await sharp(filePath).metadata();
    const stat = fs.statSync(filePath);
    console.log(f + ' -> ' + meta.width + 'x' + meta.height + ' (' + Math.round(stat.size / 1024) + ' KB)');
  }
}

run();
