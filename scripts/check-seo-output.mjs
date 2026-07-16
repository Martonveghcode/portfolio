import { readFile, stat } from "node:fs/promises";
import { join } from "node:path";

import {
  DEFAULT_SITE_URL,
  SEO_ROUTES,
  SITE_FOOTER_LINKS,
  getHtmlEntryPath,
  getHtmlEntryPaths,
  getStructuredData,
} from "../src/seo.js";

const BLOCKED_STRINGS = ["martonveghcode.github.io/portfolio"];
const VISITOR_HOSTILE_COPY = [
  "for search and indexing purposes",
  "search-targeted route",
  "search-targeted case-study page",
  "dedicated search destination",
  "textual context for search",
  "target finance, analytics, and python search intent",
  "this profile route exists to give search engines",
];
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

  const lowerContent = content.toLowerCase();
  for (const phrase of VISITOR_HOSTILE_COPY) {
    if (lowerContent.includes(phrase)) {
      failures.push(`${file} contains visitor-hostile SEO copy: ${phrase}`);
    }
  }
}

for (const route of SEO_ROUTES) {
  const entryPath = getHtmlEntryPath(route.path);
  const content = await readFile(entryPath, "utf8");

  for (const link of SITE_FOOTER_LINKS) {
    if (!content.includes(`href="${link.href}"`)) {
      failures.push(`${entryPath} is missing the permanent ${link.label} link (${link.href})`);
    }
  }

  if (route.type === "profile") {
    const primarySchema = getStructuredData(route, DEFAULT_SITE_URL)
      .find((item) => item["@type"] === "ProfilePage");

    if (primarySchema?.mainEntity?.["@type"] !== "Person") {
      failures.push(`${entryPath} ProfilePage is missing mainEntity Person structured data`);
    }
  }
}

if (failures.length) {
  console.error("SEO output check failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`SEO output check passed for ${filesToCheck.length} files.`);
