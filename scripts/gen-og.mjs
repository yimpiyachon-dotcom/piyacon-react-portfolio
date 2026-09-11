#!/usr/bin/env node
/**
 * Writes public/og/<id>.jpg — one 1200x630 share card per case study.
 *
 * The covers cannot be used directly for og:image. They are WebP, which
 * Facebook and LINE unfurl unreliably, and they are 3:2 or square, so a
 * 1.91:1 unfurl crops them wherever it likes. Each is letterboxed onto the
 * site's own background instead: nothing is cropped, the bars read as the
 * brand rather than as a mistake, and JPEG is what every unfurler accepts.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';

const OUT = 'public/og';
const BG = { r: 0x0a, g: 0x0b, b: 0x0d };
const [W, H] = [1200, 630];

// Read the ids and covers straight from the data files: importing the .ts
// would need a TypeScript loader, and the shape here is stable and regular.
const entries = [];
for (const file of ['src/data/projects.ts', 'src/data/webProjects.ts']) {
  const src = readFileSync(file, 'utf8');
  const ids = [...src.matchAll(/^ {4}id: "([^"]+)"/gm)].map((m) => m[1]);
  const images = [...src.matchAll(/^ {4}image: "([^"]+)"/gm)].map((m) => m[1]);
  if (ids.length !== images.length) throw new Error(`${file}: ${ids.length} ids but ${images.length} images`);
  entries.push(...ids.map((id, i) => [id, images[i]]));
}

mkdirSync(OUT, { recursive: true });
let written = 0;
for (const [id, image] of entries) {
  const source = join('public', image.slice(1));
  if (!existsSync(source)) throw new Error(`cover missing for ${id}: ${source}`);
  const out = join(OUT, `${id}.jpg`);
  const buf = await sharp(source)
    .resize({ width: W, height: H, fit: 'contain', background: BG })
    .flatten({ background: BG })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();
  // Only rewrite on change so a no-op build leaves git clean.
  if (!existsSync(out) || !readFileSync(out).equals(buf)) {
    writeFileSync(out, buf);
    written += 1;
  }
}

console.log(`[og]     ${entries.length} share cards (${written} rewritten) at ${W}x${H}`);
