const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const sourceDir = path.join(process.cwd(), 'pictures may cake');
const targetDir = path.join(process.cwd(), 'public/images');
const manifestPath = path.join(process.cwd(), 'public/images-manifest.json');

// Ensure target directory exists
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

let manifest = {};

async function processDirectory(dir, relativePath = '') {
    const items = fs.readdirSync(dir);

    for (const item of items) {
        if (item === '.DS_Store') continue;

        const sourcePath = path.join(dir, item);
        const stat = fs.statSync(sourcePath);

        if (stat.isDirectory()) {
            const newRelativePath = path.join(relativePath, item);
            const targetSubDir = path.join(targetDir, newRelativePath);
            if (!fs.existsSync(targetSubDir)) {
                fs.mkdirSync(targetSubDir, { recursive: true });
            }
            // Initialize array for this category
            if (!manifest[item]) {
                manifest[item] = [];
            }
            await processDirectory(sourcePath, newRelativePath);
        } else {
            // It's a file
            const ext = path.extname(item).toLowerCase();
            if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
                const targetFile = path.join(targetDir, relativePath, path.basename(item, ext) + '.webp');

                // Add to manifest (web path)
                const category = relativePath.split(path.sep)[0];
                if (category && manifest[category]) {
                    // Clean web path
                    const webPath = `/images/${relativePath}/${path.basename(item, ext)}.webp`.replace(/\\/g, '/');
                    manifest[category].push(webPath);
                }

                // Only process if doesn't exist to save time on re-run
                if (!fs.existsSync(targetFile)) {
                    console.log(`Processing: ${sourcePath} -> ${targetFile}`);
                    await sharp(sourcePath)
                        .resize(1200, 1200, {
                            fit: 'inside',
                            withoutEnlargement: true
                        })
                        .webp({ quality: 80 })
                        .toFile(targetFile);
                }
            }
        }
    }
}

processDirectory(sourceDir).then(() => {
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
    console.log('Image optimization & manifest generation complete!');
}).catch(err => {
    console.error('Error processing images:', err);
});
