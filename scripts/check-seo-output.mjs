import { readFile, stat } from "node:fs/promises";
import { join } from "node:path";

import { getHtmlEntryPaths } from "../src/seo.js";

const BLOCKED_STRINGS = ["martonveghcode.github.io/portfolio"];
const CANDIDATE_PATHS = [
  "index.html",
  "public/robots.txt",
  "public/sitemap.xml",
  ...getHtmlEntryPaths(),
];

async function fileExists(path) {
  try {
    return (await stat(path)).isFile();
  } catch {
    return false;
  }
}

async function getDistFiles(directory) {
  const { readdir } = await import("node:fs/promises");
  const entries = await readdir(directory, { withFileTypes: true }).catch(() => []);
  const files = [];

  for (const entry of entries) {
    const nextPath = join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await getDistFiles(nextPath));
    } else if (entry.isFile() && /\.(html|xml|txt|js|css)$/i.test(entry.name)) {
      files.push(nextPath);
    }
  }

  return files;
}

const filesToCheck = [
  ...new Set([
    ...(await Promise.all(CANDIDATE_PATHS.map(async (path) => (await fileExists(path) ? path : null)))).filter(Boolean),
    ...await getDistFiles("dist"),
  ]),
];

const failures = [];

for (const file of filesToCheck) {
  const content = await readFile(file, "utf8");
  for (const blockedString of BLOCKED_STRINGS) {
    if (content.includes(blockedString)) {
      failures.push(`${file} contains ${blockedString}`);
    }
  }
}

if (failures.length) {
  console.error("SEO output check failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`SEO output check passed for ${filesToCheck.length} files.`);
