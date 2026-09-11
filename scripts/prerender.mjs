#!/usr/bin/env node
/**
 * Renders every route to a static HTML file inside dist/.
 *
 * Without this the served HTML is an empty <div id="root">, so nothing can paint
 * until the JS bundle has downloaded, parsed and run — Lighthouse measured 87%
 * of Largest Contentful Paint as pure render delay. Shipping the markup means
 * the first paint costs one request, and crawlers see real content and a real
 * per-page <title> instead of an empty shell.
 *
 * The client then hydrates this markup rather than building it from scratch.
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { installDomStubs } from './dom-stubs.mjs';

const SSR_OUT = 'node_modules/.prerender';
const DIST = 'dist';

execFileSync('npx', ['vite', 'build', '--ssr', 'src/entry-server.tsx', '--outDir', SSR_OUT, '--logLevel', 'error'], {
  stdio: ['ignore', 'ignore', 'inherit'],
});

installDomStubs();
const { render, routes } = await import(`../${SSR_OUT}/entry-server.js`);

const SITE = 'https://www.yimpiyachon.com';
/** HTML-escapes a value being written into an attribute. */
const attr = (v) => v.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

/**
 * Rewrites one meta tag's content. Throws rather than silently doing nothing:
 * a renamed attribute in index.html would otherwise ship 33 pages that all
 * unfurl as the template default, which is the bug this replaces.
 */
function setMeta(html, key, value) {
  // index.html wraps the longer tags across lines, so attributes may be
  // separated by a newline rather than a single space.
  const tag = new RegExp(`(<meta\\s+(?:property|name)="${key}"\\s+content=")[^"]*(")`);
  if (!tag.test(html)) throw new Error(`index.html has no ${key} meta tag to fill`);
  return html.replace(tag, `$1${attr(value)}$2`);
}

let template = readFileSync(join(DIST, 'index.html'), 'utf8');

// Vite emits the stylesheet as its own file, which the browser must fetch and
// parse before it paints anything — PageSpeed measured 150 ms of render
// blocking for 4.8 KiB. At this size the round trip costs more than the bytes,
// so the CSS is folded into every page and the <link> dropped.
let inlined = 0;
template = template.replace(
  /<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/g,
  (tag, href) => {
    const css = readFileSync(join(DIST, href.slice(1)), 'utf8');
    inlined += css.length;
    return `<style>${css}</style>`;
  },
);
if (inlined === 0) console.warn('[prerender] no stylesheet link found to inline');

const ROOT = '<div id="root"></div>';
if (!template.includes(ROOT)) throw new Error('dist/index.html has no empty root div to fill');

// The hero portrait is preloaded at high priority in index.html, but that
// template backs all 33 routes — so every case page was spending 57 KiB of
// early bandwidth on an image it never paints, delaying the cover that is
// actually its Largest Contentful Paint element.
const HERO_PRELOAD = /\s*<link\s+rel="preload"\s+as="image"[\s\S]*?\/>/;
if (!HERO_PRELOAD.test(template)) console.warn('[prerender] hero preload not found');

let written = 0;
for (const [path, meta] of Object.entries(routes)) {
  const base = path === '/' ? template : template.replace(HERO_PRELOAD, '');
  const url = SITE + path;
  let html = base
    .replace(ROOT, `<div id="root">${render(path)}</div>`)
    .replace(/<title>[^<]*<\/title>/, `<title>${attr(meta.title)}</title>`)
    .replace(/(<link rel="canonical" href="https:\/\/www\.yimpiyachon\.com)\/"/, `$1${path === '/' ? '/' : path}"`);

  // Crawlers and link unfurlers never run the JS, so whatever these say in the
  // static file is final. Every route stamps its own.
  for (const [key, value] of [
    ['description', meta.description],
    ['og:url', url],
    ['og:title', meta.shareTitle],
    ['og:description', meta.description],
    ['og:image', SITE + meta.image],
    ['og:image:alt', meta.shareTitle],
    ['twitter:title', meta.shareTitle],
    ['twitter:description', meta.description],
    ['twitter:image', SITE + meta.image],
  ]) {
    html = setMeta(html, key, value);
  }

  const file = path === '/' ? join(DIST, 'index.html') : join(DIST, path.slice(1), 'index.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  written += 1;
}

rmSync(SSR_OUT, { recursive: true, force: true });
console.log(`[prerender] ${written} routes written as static HTML, ${(inlined / 1024).toFixed(1)} KiB CSS inlined`);
