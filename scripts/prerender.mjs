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
const { render, routeTitles } = await import(`../${SSR_OUT}/entry-server.js`);

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
for (const [path, title] of Object.entries(routeTitles)) {
  const base = path === '/' ? template : template.replace(HERO_PRELOAD, '');
  const html = base
    .replace(ROOT, `<div id="root">${render(path)}</div>`)
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(/(<link rel="canonical" href="https:\/\/www\.yimpiyachon\.com)\/"/, `$1${path === '/' ? '/' : path}"`)
    .replace(/(<meta property="og:url" content="https:\/\/www\.yimpiyachon\.com)\/"/, `$1${path === '/' ? '/' : path}"`);

  const file = path === '/' ? join(DIST, 'index.html') : join(DIST, path.slice(1), 'index.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  written += 1;
}

rmSync(SSR_OUT, { recursive: true, force: true });
console.log(`[prerender] ${written} routes written as static HTML, ${(inlined / 1024).toFixed(1)} KiB CSS inlined`);
