// Regenerates app-source/src/photos/*.jpg from the built photo-*.js chunks
// that live at the repository root (the deployed site files).
// Run from the REPO ROOT:  node app-source/tools/extract-photos.mjs
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const repoRoot = process.cwd();
const outDir = join(repoRoot, 'app-source', 'src', 'photos');
mkdirSync(outDir, { recursive: true });

const chunks = readdirSync(repoRoot).filter((f) => /^photo-[\w-]+\.js$/.test(f));
if (chunks.length === 0) {
  console.error('No photo-*.js chunks found in', repoRoot);
  process.exit(1);
}
for (const file of chunks) {
  const src = readFileSync(join(repoRoot, file), 'utf8');
  const m = src.match(/data:image\/jpeg;base64,([A-Za-z0-9+/=]+)/);
  if (!m) { console.error('No base64 payload in', file); process.exit(1); }
  const name = file.replace(/^photo-([\w-]+?)-[\w-]+\.js$/, '$1') + '.jpg';
  writeFileSync(join(outDir, name), Buffer.from(m[1], 'base64'));
  console.log('wrote', join('app-source', 'src', 'photos', name));
}
console.log('Done. You can now run: cd app-source && npm install && npx vite build');
