const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const svgPath = path.join(process.cwd(), 'public', 'favicon.svg');
const pngPath = path.join(process.cwd(), 'public', 'favicon.png');
const icoPath = path.join(process.cwd(), 'public', 'favicon.ico');

async function convert() {
    console.log('Converting SVG to PNG/ICO...');

    // Create 32x32 PNG
    await sharp(svgPath)
        .resize(32, 32)
        .png()
        .toFile(pngPath);

    console.log('Created favicon.png');

    // Create 32x32 ICO (technically just a PNG named .ico often works for modern browsers, 
    // but proper ICO is better. Sharp doesn't output ICO natively easily without plugins, 
    // but we can try to output a png and rename it for now or use a larger png).
    // Let's stick to using the PNG as the primary source for "icon".

    // We will just copy the PNG to favicon.ico for basic compatibility 
    // (most modern browsers accept PNG inside ICO or just PNG referenced as ICO).
    fs.copyFileSync(pngPath, icoPath);
    console.log('Created favicon.ico fallback');
}

convert().catch(console.error);
