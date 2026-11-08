import { readFile, stat } from "node:fs/promises";
import { join } from "node:path";

import {
  DEFAULT_SITE_URL,
  SEO_ROUTES,
  SITE_FOOTER_LINKS,
  getAbsoluteUrl,
  getHtmlEntryPath,
  getHtmlEntryPaths,
  getLanguageAlternates,
  getLocalizedPath,
  getSiteUrl,
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
const siteUrl = getSiteUrl(process.env.VITE_SITE_URL || DEFAULT_SITE_URL);

function checkLanguageMetadata(file, content, route) {
  const head = content.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? "";
  const links = [...head.matchAll(/<link\b[^>]*>/gi)].map(([tag]) =>
    Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value]))
  );
  const alternates = links.filter((link) => link.rel === "alternate" && link.hreflang);
  const expected = getLanguageAlternates(route, siteUrl);
  const canonicalUrl = getAbsoluteUrl(siteUrl, route.path);

  if (!content.includes(`<html lang="${route.language}">`)) {
    failures.push(`${file} has an incorrect document language (expected ${route.language})`);
  }
  const canonicals = links.filter((link) => link.rel === "canonical");
  if (canonicals.length !== 1 || canonicals[0].href !== canonicalUrl) {
    failures.push(`${file} must have exactly one self-referencing canonical (${canonicalUrl})`);
  }
  if (alternates.length !== expected.length) {
    failures.push(`${file} has ${alternates.length} hreflang links; expected ${expected.length}`);
  }
  for (const alternate of expected) {
    const matching = alternates.filter((link) => link.hreflang === alternate.language && link.href === alternate.href);
    if (matching.length !== 1) {
      failures.push(`${file} must have exactly one hreflang=${alternate.language} link to ${alternate.href}`);
    }
  }
}

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
  checkLanguageMetadata(entryPath, content, route);

  const builtPath = join("dist", entryPath);
  if (await fileExists(builtPath)) {
    checkLanguageMetadata(builtPath, await readFile(builtPath, "utf8"), route);
  } else {
    failures.push(`${builtPath} is missing from the production build`);
  }

  for (const link of SITE_FOOTER_LINKS) {
    if (!content.includes(`href="${getLocalizedPath(link.href, route.language)}"`)) {
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

for (const sitemapPath of ["public/sitemap.xml", "dist/sitemap.xml"]) {
  const sitemap = await readFile(sitemapPath, "utf8");
  const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, location]) => location);
  for (const route of SEO_ROUTES) {
    const url = getAbsoluteUrl(siteUrl, route.path);
    if (locations.filter((location) => location === url).length !== 1) {
      failures.push(`${sitemapPath} must list ${url} exactly once`);
    }
  }
}

if (failures.length) {
  console.error("SEO output check failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`SEO output check passed for ${filesToCheck.length} files.`);
