#!/usr/bin/env node
/**
 * Downloads the font files into public/fonts/, inlines the @font-face rules
 * into index.html, and preloads the critical faces.
 *
 * A <link> to fonts.googleapis.com costs a stylesheet round trip before the
 * browser even learns which font files it needs. Loading it asynchronously fixed
 * the render blocking but moved the problem: the faces then arrived after first
 * paint and the swap reflowed the text, which Lighthouse measured as ~0.15
 * layout shift on every other run.
 *
 * Inlining the rules means the font files are discovered in the first HTML
 * chunk, and preloading the three faces the first screen uses gets them in
 * flight immediately.
 *
 * The files are also served from our own origin rather than Google's. A
 * third-party host costs a DNS lookup and a TLS handshake before the first byte
 * of a font can arrive, which on a throttled phone is most of a second that
 * preconnect only partly hides — and the text cannot settle until the faces
 * land, so that delay lands on Largest Contentful Paint. Same-origin files ride
 * the connection the HTML already opened. Downloads are skipped when the file
 * is already on disk, so the fonts are committed and the deploy does no
 * network work.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';

// Only the weights the components actually pair with each family. Every extra
// weight is another file competing for bandwidth before the text can settle.
const FAMILIES =
  'family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36';
const KEEP = new Set(['latin', 'latin-ext']);
// What the hero paints with: body copy, the display heading, the mono labels.
const CRITICAL = [
  ['Inter', '400', 'latin'],
  ['Plus Jakarta Sans', '800', 'latin'],
  ['JetBrains Mono', '600', 'latin'],
];

const css = await (
  await fetch(`https://fonts.googleapis.com/css2?${FAMILIES}&display=swap`, { headers: { 'User-Agent': UA } })
).text();

const OUT_DIR = 'public/fonts';
mkdirSync(OUT_DIR, { recursive: true });

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');
let fetched = 0;

const faces = [];
const preloads = [];
for (const [, subset, face] of css.matchAll(/\/\* ([\w-]+) \*\/\s*(@font-face \{[^}]+\})/g)) {
  if (!KEEP.has(subset)) continue;

  const family = face.match(/font-family: '([^']+)'/)[1];
  const weight = face.match(/font-weight: (\d+)/)[1];
  const remote = face.match(/url\((https:[^)]+)\)/)[1];

  // Inter, JetBrains Mono and Plus Jakarta Sans are variable fonts, so Google
  // hands back the SAME file for every weight in range — naming these per
  // weight made the browser fetch one 47 KiB file three times over. Keying the
  // name on Google's content-addressed basename collapses them back to one
  // request, taking 20 names down to 6 files.
  const name = `${slug(family)}-${subset}-${remote.split('/').pop().replace('.woff2', '').slice(0, 8)}.woff2`;
  const file = `${OUT_DIR}/${name}`;
  const href = `/fonts/${name}`;
  if (!existsSync(file)) {
    writeFileSync(file, Buffer.from(await (await fetch(remote, { headers: { 'User-Agent': UA } })).arrayBuffer()));
    fetched += 1;
  }

  faces.push(
    face.replace(remote, href).replace(/\s+/g, ' ').replace('{ ', '{').replace(' }', '}'),
  );
  if (CRITICAL.some(([f, w, s]) => f === family && w === weight && s === subset)) {
    preloads.push(`    <link rel="preload" as="font" type="font/woff2" crossorigin href="${href}" />`);
  }
}

// Metric-matched stand-ins for the three families, measured against the local
// fallback by sweeping size-adjust in a real browser and measuring rendered
// spans of the site's own copy (scripts/cal3 in the scratchpad). Measuring in
// the DOM rather than with canvas matters: the headings carry letter-spacing,
// which canvas does not apply, and the page's own H1 sat right on a wrap
// boundary — the fallback fitted on one line where the real face needed two,
// so every row below it moved by a full line when the font landed. Without these the text paints in Arial, then reflows when
// the real face lands — and that reflow is a fresh, larger paint, so Largest
// Contentful Paint was landing on the swap rather than on the first paint.
// Matching the metrics means the swap changes letterforms without moving
// anything, and LCP settles at first paint instead.
const FALLBACKS = [
  ["Inter Fallback", "Arial", "105.50%", "91.87%", "22.73%"],
  ["Plus Jakarta Fallback", "Arial", "108.50%", "101.36%", "21.44%"],
  ["JetBrains Fallback", "Courier New", "100%", "102.02%", "30.01%"],
].map(
  ([family, local, sizeAdjust, ascent, descent]) =>
    `@font-face {font-family: '${family}'; src: local('${local}'); size-adjust: ${sizeAdjust}; ` +
    `ascent-override: ${ascent}; descent-override: ${descent}; line-gap-override: 0%;}`,
);

const block = [
  '    <!-- fonts:start — generated by scripts/gen-fonts.mjs, do not edit -->',
  ...preloads,
  '    <style>',
  ...FALLBACKS.map((f) => `      ${f}`),
  ...faces.map((f) => `      ${f}`),
  '    </style>',
  '    <!-- fonts:end -->',
].join('\n');

const html = readFileSync('index.html', 'utf8');
const start = html.indexOf('    <!-- fonts:start');
const end = html.indexOf('<!-- fonts:end -->');
if (start === -1 || end === -1) throw new Error('index.html is missing the fonts:start / fonts:end markers');

writeFileSync('index.html', html.slice(0, start) + block + html.slice(end + '<!-- fonts:end -->'.length));
console.log(`[fonts]  ${faces.length} faces self-hosted (${fetched} downloaded), ${preloads.length} preloaded, ${FALLBACKS.length} metric-matched fallbacks`);
