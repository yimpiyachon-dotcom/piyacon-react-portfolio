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

const template = readFileSync(join(DIST, 'index.html'), 'utf8');
const ROOT = '<div id="root"></div>';
if (!template.includes(ROOT)) throw new Error('dist/index.html has no empty root div to fill');

let written = 0;
for (const [path, title] of Object.entries(routeTitles)) {
  const html = template
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
console.log(`[prerender] ${written} routes written as static HTML`);
