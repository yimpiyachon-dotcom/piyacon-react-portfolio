#!/usr/bin/env node
/**
 * Cross-checks the asset references in source against the files in public/.
 *
 * Two failure modes this catches, both of which have actually happened here:
 *   - a path in the code that no file backs (a renamed or mistyped file), which
 *     otherwise shows up only as a broken image in the browser;
 *   - a file in public/ that nothing references. This is also the tripwire for
 *     a deletion gone wrong: removing a case study or walkthrough by mistake
 *     strands its images, and stranded images fail the build rather than
 *     quietly shipping a site with a section missing.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, extname } from 'node:path';

const PUBLIC_DIR = 'public';
const SOURCE_DIRS = ['src'];
const SOURCE_FILES = ['index.html'];
const ASSET_EXT = new Set(['.webp', '.avif', '.png', '.jpg', '.jpeg', '.svg', '.gif', '.ico']);

function walk(dir, hits = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) walk(path, hits);
    else hits.push(path);
  }
  return hits;
}

const publicFiles = walk(PUBLIC_DIR)
  .filter((f) => ASSET_EXT.has(extname(f).toLowerCase()))
  .map((f) => '/' + relative(PUBLIC_DIR, f).split(/[\\/]/).join('/'));

const sourceText = [
  ...SOURCE_DIRS.flatMap((d) => walk(d)).filter((f) => /\.(tsx?|css)$/.test(f)),
  ...SOURCE_FILES,
]
  .map((f) => readFileSync(f, 'utf8'))
  .join('\n')
  // Meta tags need absolute URLs; normalise them so they match disk paths.
  .replaceAll(/https?:\/\/(?:www\.)?yimpiyachon\.com/g, '');

// Absolute asset paths only: relative URLs are resolved by the bundler and
// would already fail the build.
const referenced = new Set(
  [...sourceText.matchAll(/["'(](\/[\w\-./]+\.(?:webp|avif|png|jpe?g|svg|gif|ico))/gi)].map((m) => m[1]),
);

// The narrow srcset siblings are generated from their originals and referenced
// only through a template literal, so they count as referenced whenever the
// original is.
const VARIANT = /-\d+w(\.\w+)$/;
const isLiveVariant = (file) => {
  const original = file.replace(VARIANT, '$1');
  return original !== file && referenced.has(original);
};

const missing = [...referenced].filter((r) => !publicFiles.includes(r)).sort();
const orphans = publicFiles.filter((f) => !referenced.has(f) && !isLiveVariant(f)).sort();

for (const path of missing) console.error(`  ERROR  ${path} — referenced in source, no such file in ${PUBLIC_DIR}/`);
for (const path of orphans) {
  console.error(`  ERROR  ${PUBLIC_DIR}${path} — file exists, nothing references it`);
}

const summary = `[assets] ${referenced.size} referenced · ${publicFiles.length} on disk · ${missing.length} missing · ${orphans.length} unreferenced`;
if (missing.length || orphans.length) {
  console.error(summary);
  process.exit(1);
}
console.log(summary);
