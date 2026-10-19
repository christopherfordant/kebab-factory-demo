import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

// Deployment-only optimization: preserve the generated visual assets and dimensions.
const directory = fileURLToPath(new URL('../dist/assets/', import.meta.url));
let before = 0;
let after = 0;
for (const file of await readdir(directory)) {
  if (!/\.jpe?g$/i.test(file)) continue;
  const path = join(directory, file);
  const input = await readFile(path);
  const output = await sharp(input).jpeg({ quality: 78, mozjpeg: true, progressive: true }).toBuffer();
  before += input.length;
  if (output.length < input.length) {
    await writeFile(path, output);
    after += output.length;
  } else {
    after += input.length;
  }
}
console.log(`JPEG assets: ${before} -> ${after} bytes (${Math.round((1 - after / before) * 100)}% smaller)`);
