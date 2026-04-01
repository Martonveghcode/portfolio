import { mkdir, writeFile } from "node:fs/promises";
import { dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

import {
  DEFAULT_SITE_URL,
  SEO_ROUTES,
  getAbsoluteUrl,
  getHtmlEntryPath,
  getImageUrl,
  getSiteUrl,
  getStructuredData,
  renderSeoContentHtml,
} from "../src/seo.js";

const siteUrl = getSiteUrl(process.env.VITE_SITE_URL || DEFAULT_SITE_URL);
const today = new Date().toISOString().slice(0, 10);

function getScriptPath(entryPath) {
  const scriptFile = `${relative(dirname(entryPath), "index.jsx").replaceAll("\\", "/")}`;
  return scriptFile.startsWith(".") ? scriptFile : `./${scriptFile}`;
}

function getOgType(route) {
  if (route.type === "case-study" || route.type === "paper") return "article";
  if (route.type === "profile") return "profile";
  return "website";
}

function getHtmlDocument(route) {
  const canonicalUrl = getAbsoluteUrl(siteUrl, route.path);
  const structuredData = JSON.stringify(getStructuredData(route, siteUrl));
  const scriptPath = getScriptPath(getHtmlEntryPath(route.path));

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/favicon.png?v=20260401" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${route.title}</title>
    <meta name="description" content="${route.description}" />
    <meta name="robots" content="index,follow,max-image-preview:large" />
    <meta name="author" content="Marton Vegh" />
    <link rel="canonical" href="${canonicalUrl}" />
    <meta property="og:site_name" content="Portfolio Marton" />
    <meta property="og:type" content="${getOgType(route)}" />
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.description}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:image" content="${getImageUrl(siteUrl, route.image)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${route.title}" />
    <meta name="twitter:description" content="${route.description}" />
    <meta name="twitter:image" content="${getImageUrl(siteUrl, route.image)}" />
    <style>
      .visually-hidden {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        padding: 0 !important;
        margin: -1px !important;
        overflow: hidden !important;
        clip: rect(0, 0, 0, 0) !important;
        white-space: nowrap !important;
        border: 0 !important;
      }
    </style>
    <script id="route-structured-data" type="application/ld+json">${structuredData}</script>
  </head>
  <body>
    <main id="seo-content">${renderSeoContentHtml(route)}</main>
    <div id="root"></div>
    <script type="module" src="${scriptPath}"></script>
  </body>
</html>
`;
}

async function ensureDirectoryFor(entryPath) {
  const targetDirectory = fileURLToPath(new URL(`../${dirname(entryPath)}`, import.meta.url));
  await mkdir(targetDirectory, { recursive: true });
}

async function writeRoutePages() {
  const nestedRoutes = SEO_ROUTES.filter((route) => route.path !== "/");

  await Promise.all(
    nestedRoutes.map(async (route) => {
      const entryPath = getHtmlEntryPath(route.path);
      const targetFile = new URL(`../${entryPath}`, import.meta.url);
      await ensureDirectoryFor(entryPath);
      await writeFile(targetFile, getHtmlDocument(route), "utf8");
    })
  );
}

async function writeSitemap() {
  const urls = SEO_ROUTES.map(
    (route) => `  <url>\n    <loc>${getAbsoluteUrl(siteUrl, route.path)}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`
  ).join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  await writeFile(new URL("../public/sitemap.xml", import.meta.url), sitemap, "utf8");
}

async function writeRobots() {
  const robots = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`;
  await writeFile(new URL("../public/robots.txt", import.meta.url), robots, "utf8");
}

await mkdir(new URL("../public", import.meta.url), { recursive: true });
await writeRoutePages();
await writeSitemap();
await writeRobots();
