#!/usr/bin/env node
/**
 * Validates the data modules against each other.
 *
 * The process walkthroughs are loaded by filename (see src/data/processSteps.ts),
 * which makes adding one effortless but also means a typo in a filename yields a
 * walkthrough that loads fine and attaches to nothing. Nothing else would notice.
 */
import { readdirSync, readFileSync } from 'node:fs';

const ids = (file) =>
  [...readFileSync(file, 'utf8').matchAll(/\n {4}id: "([\w-]+)"/g)].map((m) => m[1]);

const projectIds = new Set([...ids('src/data/projects.ts'), ...ids('src/data/webProjects.ts')]);
const processFiles = readdirSync('src/data/process').filter((f) => f.endsWith('.ts'));

const orphans = processFiles.map((f) => f.replace(/\.ts$/, '')).filter((id) => !projectIds.has(id));
for (const id of orphans) {
  console.error(`  ERROR  src/data/process/${id}.ts — "${id}" is not a project id, so this walkthrough is unreachable`);
}

const summary = `[data]   ${projectIds.size} projects · ${processFiles.length} walkthroughs · ${orphans.length} unreachable`;
if (orphans.length) {
  console.error(summary);
  process.exit(1);
}
console.log(summary);
