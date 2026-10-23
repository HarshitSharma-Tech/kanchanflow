const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function optimizeImages() {
  const dir = path.join(process.cwd(), 'public', 'images');
  const files = [
    'capability-bom-costing.jpg',
    'capability-cad-drawing.jpg',
    'capability-mobile-approval.jpg',
    'capability-order-handoff.jpg',
    'capability-revision-audit.jpg',
    'capability-sales-pipeline.jpg',
    'hero-plant-engineer.jpg',
    'step-01-enquiry.jpg',
    'step-02-costing.jpg',
    'step-03-followup.jpg',
    'step-04-order.jpg',
  ];

  let totalOriginal = 0;
  let totalWebp = 0;
  let totalAvif = 0;
  let totalJpg = 0;

  console.log('Optimizing images...');

  for (const file of files) {
    const inputPath = path.join(dir, file);
    if (!fs.existsSync(inputPath)) continue;

    const baseName = file.replace(/\.(jpg|jpeg|png)$/, '');
    const inputBuffer = fs.readFileSync(inputPath);
    const originalSize = inputBuffer.length;
    totalOriginal += originalSize;

    const targetWidth = file.startsWith('step-') ? 600 : 800;

    // 1. Generate WebP
    const webpPath = path.join(dir, `${baseName}.webp`);
    const webpBuffer = await sharp(inputBuffer)
      .resize({ width: targetWidth, withoutEnlargement: true })
      .webp({ quality: 82, effort: 5 })
      .toBuffer();
    fs.writeFileSync(webpPath, webpBuffer);
    totalWebp += webpBuffer.length;

    // 2. Generate AVIF
    const avifPath = path.join(dir, `${baseName}.avif`);
    const avifBuffer = await sharp(inputBuffer)
      .resize({ width: targetWidth, withoutEnlargement: true })
      .avif({ quality: 78, effort: 5 })
      .toBuffer();
    fs.writeFileSync(avifPath, avifBuffer);
    totalAvif += avifBuffer.length;

    // 3. Recompress original JPEG
    const jpgBuffer = await sharp(inputBuffer)
      .resize({ width: targetWidth, withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true })
      .toBuffer();
    fs.writeFileSync(inputPath, jpgBuffer);
    totalJpg += jpgBuffer.length;

    console.log(
      `${file}: ${Math.round(originalSize / 1024)}KB -> JPG: ${Math.round(jpgBuffer.length / 1024)}KB | WebP: ${Math.round(webpBuffer.length / 1024)}KB | AVIF: ${Math.round(avifBuffer.length / 1024)}KB`
    );
  }

  // Clean up any temp file if created
  const tempFiles = fs.readdirSync(dir).filter(f => f.includes('-opt.'));
  for (const tf of tempFiles) fs.unlinkSync(path.join(dir, tf));

  console.log('\n--- Image Optimization Summary ---');
  console.log(`Original total: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Optimized JPG:  ${(totalJpg / 1024 / 1024).toFixed(2)} MB (${((1 - totalJpg / totalOriginal) * 100).toFixed(1)}% savings)`);
  console.log(`WebP total:     ${(totalWebp / 1024 / 1024).toFixed(2)} MB (${((1 - totalWebp / totalOriginal) * 100).toFixed(1)}% savings)`);
  console.log(`AVIF total:     ${(totalAvif / 1024 / 1024).toFixed(2)} MB (${((1 - totalAvif / totalOriginal) * 100).toFixed(1)}% savings)`);
}

optimizeImages().catch(console.error);
