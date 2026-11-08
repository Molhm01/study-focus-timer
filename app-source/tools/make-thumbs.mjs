// Generates src/thumbs/*.jpg picker thumbnails from src/photos/*.jpg.
// Run after tools/extract-photos.mjs (needs devDependency "sharp").
import { mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const here = path.dirname(fileURLToPath(import.meta.url));
const photosDir = path.join(here, '..', 'src', 'photos');
const thumbsDir = path.join(here, '..', 'src', 'thumbs');
await mkdir(thumbsDir, { recursive: true });
for (const f of await readdir(photosDir)) {
    if (!f.endsWith('.jpg')) continue;
    const out = path.join(thumbsDir, f);
    await sharp(path.join(photosDir, f)).resize(160, 160, { fit: 'cover' }).jpeg({ quality: 50 }).toFile(out);
    console.log('wrote', path.relative(process.cwd(), out));
}
