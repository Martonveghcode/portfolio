import { mkdir, writeFile } from "node:fs/promises";
import { dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

import {
  DEFAULT_SITE_URL,
  SEO_ROUTES,
  SITE_FOOTER_LINKS,
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

function getStaticFooterHtml() {
  const links = SITE_FOOTER_LINKS
    .map((link) => `<a href="${link.href}">${link.label}</a>`)
    .join("\n        ");

  return `<footer class="seo-site-footer">
      <nav aria-label="Portfolio pages">
        ${links}
      </nav>
    </footer>`;
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
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
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
      body {
        margin: 0;
        background: #ffffff;
        color: #16181b;
        font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }
      .seo-prerender {
        width: min(880px, calc(100vw - 48px));
        margin: 0 auto;
        padding: 48px 0;
      }
      .seo-prerender h1 {
        margin: 0 0 18px;
        font-size: clamp(2rem, 5vw, 3rem);
        line-height: 1.08;
      }
      .seo-prerender p,
      .seo-prerender li {
        color: #4f5661;
        font-size: 1rem;
        line-height: 1.7;
      }
      .seo-prerender a {
        color: #3251ae;
        font-weight: 600;
      }
      .seo-site-footer {
        width: min(880px, calc(100vw - 48px));
        margin: 0 auto;
        padding: 24px 0 36px;
        border-top: 1px solid #d9dde3;
      }
      .seo-site-footer nav {
        display: flex;
        flex-wrap: wrap;
        gap: 12px 24px;
      }
      .seo-site-footer a {
        color: #3251ae;
        font-weight: 600;
      }
    </style>
    <script id="route-structured-data" type="application/ld+json">${structuredData}</script>
  </head>
  <body>
    <div id="seo-content">
      <main>${renderSeoContentHtml(route)}</main>
      ${getStaticFooterHtml()}
    </div>
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
  await Promise.all(
    SEO_ROUTES.map(async (route) => {
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
