#!/usr/bin/env node
/**
 * Writes public/sitemap.xml and public/robots.txt from the project data.
 *
 * Every case study has its own URL but nothing links to all of them from a
 * crawlable static file, so generating the sitemap from the same arrays the
 * router reads keeps the two from drifting as projects are added.
 */
import { readFileSync, writeFileSync } from 'node:fs';

const ORIGIN = 'https://www.yimpiyachon.com';

const ids = (file) =>
  [...readFileSync(file, 'utf8').matchAll(/\n {4}id: "([\w-]+)"/g)].map((m) => m[1]);

const paths = [
  '/',
  '/projects',
  '/about',
  '/stack',
  ...[...ids('src/data/projects.ts'), ...ids('src/data/webProjects.ts')].map((id) => `/case/${id}`),
];

const today = new Date().toISOString().slice(0, 10);
const urls = paths
  .map(
    (path) =>
      `  <url>\n    <loc>${ORIGIN}${path}</loc>\n    <lastmod>${today}</lastmod>\n` +
      `    <priority>${path === '/' ? '1.0' : path.startsWith('/case/') ? '0.8' : '0.6'}</priority>\n  </url>`,
  )
  .join('\n');

writeFileSync(
  'public/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
writeFileSync('public/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${ORIGIN}/sitemap.xml\n`);
console.log(`[seo]    sitemap.xml with ${paths.length} URLs, robots.txt`);
