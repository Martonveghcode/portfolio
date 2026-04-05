import { PAPERS_CONTENT, PROJECTS_CONTENT } from "./content.js";
import { PROFILE, STACK } from "./siteData.js";
import { WHO_AM_I_CONTENT } from "./WHO_AM_I_CONTENT.js";

export const DEFAULT_SITE_URL = "https://martonveghcode.github.io/portfolio";

export const PRIMARY_PAGE_PATHS = {
  home: "/",
  projects: "/projects/",
  experience: "/experience/",
  whoami: "/who-am-i/",
};

const observerPaper = PAPERS_CONTENT.find((entry) => entry.id === "paper-1") ?? PAPERS_CONTENT[0];
const projectById = Object.fromEntries(PROJECTS_CONTENT.map((project) => [project.id, project]));

const BASE_PERSON_SCHEMA = {
  "@type": "Person",
  name: PROFILE.name,
  email: PROFILE.email,
  jobTitle: "Student developer",
  image: "/profile/marton-vegh-portrait.jpg",
  homeLocation: {
    "@type": "Place",
    name: PROFILE.location,
  },
  knowsAbout: [
    ...STACK.core,
    ...STACK.learning,
    "Automation",
    "Quantitative finance",
    "Education software",
    "Portfolio analysis",
  ],
  sameAs: [
    PROFILE.githubUrl,
    PROFILE.instagramUrl,
    "https://orcid.org/0009-0004-2687-8812",
  ],
};

function getProjectTitle(projectId) {
  return projectById[projectId]?.translations?.en?.title ?? projectId;
}

function getProjectSummary(projectId) {
  return projectById[projectId]?.translations?.en?.summary ?? "";
}

function getProjectRepo(projectId) {
  return projectById[projectId]?.links?.github ?? "";
}

function getProjectTech(projectId) {
  return projectById[projectId]?.tech ?? [];
}

const ROUTE_DEFINITIONS = [
  {
    id: "home",
    path: "/",
    page: "home",
    type: "website",
    title: "Portfolio Marton | Frontend Developer, Python, Quant Projects",
    description:
      "Portfolio Marton showcases Marton Vegh's React, Python, education software, and quantitative finance projects with focused case-study routes and technical project context.",
    image: "/profile/marton-vegh-portrait.jpg",
    hiddenHeading: "Portfolio Marton: frontend, Python, and quantitative project portfolio",
    hiddenParagraphs: [
      "Portfolio Marton is the personal portfolio site of Marton Vegh, a student developer based in Mallorca, Spain. The work shown here focuses on practical software projects in React, JavaScript, Python, automation, and quantitative analysis.",
      "The site brings together project case studies, background information, and experience across student-facing tools, handwriting and document pipelines, and finance-oriented analytics projects. It is designed to make each major project easier to understand through route-level context, structured data, and crawlable page metadata.",
    ],
    relatedPaths: [
      "/services/frontend-react-development/",
      "/services/python-automation-analysis/",
      "/services/education-software-tools/",
      "/projects/homework-calendar/",
      "/projects/portfolio-analytics-tool/",
      "/about/marton-vegh/",
    ],
  },
  {
    id: "projects",
    path: "/projects/",
    page: "projects",
    type: "collection",
    title: "Project Portfolio | React, Python, Automation Case Studies | Portfolio Marton",
    description:
      "Browse selected software projects by Marton Vegh, including React education tools, Python analysis workflows, and automation-focused experiments.",
    image: "/projects/homework-calendar-dashboard.png",
    hiddenHeading: "Selected software projects and case studies by Marton Vegh",
    hiddenParagraphs: [
      "This project portfolio groups together software work spanning frontend development, automation, data analysis, and education-focused tooling. The visible gallery provides the quick overview, while dedicated route-level case-study pages provide additional technical and contextual detail.",
      "The main project themes are React interfaces, Python pipelines, analytics tooling, and applications that turn repeated manual work into structured workflows. Each major project has supporting metadata, internal links, and case-study pages to make the work more indexable and easier to evaluate.",
    ],
    relatedPaths: [
      "/projects/homework-calendar/",
      "/projects/handwriting-formatting-pipeline/",
      "/projects/portfolio-analytics-tool/",
      "/projects/grammar-trainer/",
    ],
  },
  {
    id: "experience",
    path: "/experience/",
    page: "experience",
    type: "webpage",
    title: "Experience | Operations, Coordination, Team Support | Portfolio Marton",
    description:
      "Experience timeline for Marton Vegh, including internship work in client coordination, event logistics, administrative workflows, and on-site team support.",
    image: "/profile/marton-vegh-canoe-sprint.jpg",
    hiddenHeading: "Experience background in coordination, logistics, and operational support",
    hiddenParagraphs: [
      "The experience page documents hands-on work in client coordination, event logistics, team support, and operational workflow contexts. These roles complement the project work by showing experience with practical execution, communication, and organization.",
      "The timeline includes internships at Budapest Design Apartments and Real Club Nautico de Palma, covering administrative workflows, client-facing coordination, racing-team support, and on-site logistics.",
    ],
    relatedPaths: ["/about/marton-vegh/", "/projects/", "/"],
  },
  {
    id: "whoami",
    path: "/who-am-i/",
    page: "whoami",
    type: "profile",
    title: "Who Is Marton Vegh | Student Developer Profile | Portfolio Marton",
    description:
      "Profile page for Marton Vegh covering education, languages, sports achievements, interests, and personal background behind the portfolio.",
    image: "/profile/marton-vegh-portrait.jpg",
    hiddenHeading: "Background profile for Marton Vegh",
    hiddenParagraphs: [
      "This profile page covers the person behind Portfolio Marton: education history, languages, interests, reading and art preferences, and long-term sports background. It gives context for the portfolio by connecting the work to firsthand interests in mathematics, finance, programming, sports, books, and politics.",
      "Marton Vegh is a multilingual student developer based in Mallorca, Spain. The background shown here includes formal study, practical experimentation with software, and competitive canoe sprint experience with regional and national results.",
    ],
    relatedPaths: ["/about/marton-vegh/", "/experience/", "/projects/"],
  },
  {
    id: "profile",
    path: "/about/marton-vegh/",
    page: "whoami",
    type: "profile",
    title: "About Marton Vegh | Multilingual Student Developer Portfolio",
    description:
      "About Marton Vegh: multilingual student developer in Mallorca with interests in React, Python, finance, mathematics, books, sports, and practical software projects.",
    image: "/profile/marton-vegh-portrait.jpg",
    hiddenHeading: "About Marton Vegh",
    hiddenParagraphs: [
      "Marton Vegh is a student developer living in Mallorca, Spain, with a working focus on practical projects in React, Python, automation, and quantitative finance topics. The portfolio combines technical work with broader interests in mathematics, books, art, politics, and sport.",
      "The background presented on this site reflects firsthand experience across multilingual study, independent software building, and long-term canoe sprint training. It also highlights fluency in Hungarian, English, Spanish, French, and Catalan.",
      "This profile route exists to give search engines and visitors a dedicated page about the author and owner of the site, supported by profile-oriented structured data and related links to project and experience pages.",
    ],
    relatedPaths: ["/who-am-i/", "/projects/", "/experience/"],
  },
  {
    id: "service-frontend",
    path: "/services/frontend-react-development/",
    page: "home",
    type: "service",
    title: "Frontend Developer Portfolio | React, JavaScript, Performance | Portfolio Marton",
    description:
      "Frontend development portfolio page focused on React and JavaScript projects by Marton Vegh, with work in responsive UI, practical tooling, and performance-aware implementation.",
    image: "/projects/homework-calendar-dashboard.png",
    hiddenHeading: "Frontend developer portfolio for React and JavaScript projects",
    hiddenParagraphs: [
      "This service-focused portfolio page groups the frontend work on the site under a single search-targeted route. The emphasis is on React and JavaScript projects built around practical interfaces, responsive layouts, and utility-first problem solving rather than visual polish alone.",
      "The strongest example on this route is Homework Calendar, a student-focused React application that helps manage recurring lessons and send class, test, and homework events to Google Calendar. It shows a mix of interface design, stateful behavior, and a workflow tied to a real recurring problem.",
      "Across the portfolio, frontend work is connected to concrete outcomes: making information easier to manage, reducing repeated manual steps, and turning ideas into usable browser-based tools. Related case-study pages provide additional detail about role, problem framing, tools, and implementation choices.",
    ],
    relatedPaths: ["/projects/homework-calendar/", "/projects/", "/services/education-software-tools/"],
  },
  {
    id: "service-python",
    path: "/services/python-automation-analysis/",
    page: "home",
    type: "service",
    title: "Python Developer Portfolio | Automation, Analysis, Workflow Tools | Portfolio Marton",
    description:
      "Python portfolio page featuring automation workflows, document pipelines, portfolio analytics, and data-focused project work by Marton Vegh.",
    image: "/projects/portfolio-analytics-tool.png",
    hiddenHeading: "Python automation and analytics portfolio",
    hiddenParagraphs: [
      "This route focuses on Python-based work across automation, analysis, and workflow tooling. The projects selected here are less about generic scripts and more about building reusable tools that structure data, reduce repetitive processing, or help interpret technical output.",
      "The Handwriting Formatting Pipeline extends an existing handwriting-generation workflow with formatting, print preparation, limited Unicode-to-ASCII support, and training-data utilities. Portfolio Analytics Tool focuses on financial analysis, using market data and portfolio metrics to examine performance, drawdowns, and efficient-frontier scenarios.",
      "Together, these projects show two sides of the same Python skill set: operational tooling for documents and training workflows, and analytical tooling for finance and decision support. Each related case-study page adds context about the constraints, process, and technical stack involved.",
    ],
    relatedPaths: [
      "/projects/handwriting-formatting-pipeline/",
      "/projects/portfolio-analytics-tool/",
      "/projects/",
    ],
  },
  {
    id: "service-education",
    path: "/services/education-software-tools/",
    page: "home",
    type: "service",
    title: "Education Software Portfolio | Student Tools and Language Learning | Portfolio Marton",
    description:
      "Education software portfolio route featuring student planning and language-learning tools built with React, Python, SQLite, and LLM-assisted workflows.",
    image: "/projects/grammar-trainer.png",
    hiddenHeading: "Education software and student tool portfolio",
    hiddenParagraphs: [
      "This education-focused route brings together projects built around student use cases, planning workflows, and language-learning support. The portfolio examples are designed to solve concrete problems: organizing recurring lessons, exporting schedules, or generating adaptive practice for grammar work.",
      "Homework Calendar helps students manage recurring school structures in a browser-based interface and push the output into Google Calendar. Grammar Trainer uses Python, SQLite, and LLM-generated Spanish sentences to support grammar practice with instant feedback and adaptive questioning.",
      "For search and indexing purposes, this page groups the education software angle of the portfolio into its own route while linking directly to the relevant case studies. That makes it easier to understand the niche the work serves without changing the visible homepage layout.",
    ],
    relatedPaths: ["/projects/homework-calendar/", "/projects/grammar-trainer/", "/projects/"],
  },
  {
    id: "case-study-homework-calendar",
    path: "/projects/homework-calendar/",
    page: "projects",
    type: "case-study",
    title: "Homework Calendar Case Study | React Student Scheduling App | Portfolio Marton",
    description:
      "Case study for Homework Calendar, a React app by Marton Vegh that helps students manage recurring lessons and push class, test, and homework events to Google Calendar.",
    image: "/projects/homework-calendar-dashboard.png",
    hiddenHeading: `Case study: ${getProjectTitle("calendar")}`,
    hiddenParagraphs: [
      `${getProjectTitle("calendar")} is a self-directed React project built around a clear student planning problem: recurring lessons, changing deadlines, and the friction of manually transferring school information into a usable calendar workflow.`,
      "The project focuses on browser-based scheduling with repeated lesson structures and event export to Google Calendar. That makes it less of a generic to-do interface and more of a practical education tool aimed at turning class schedules, tests, and homework into an organized repeatable system.",
      `Technically, the project is positioned as a Vite + React application with an automation angle. The work reflects frontend development, state-driven UI decisions, and a problem frame that is grounded in day-to-day student use rather than abstract design exercises. Summary: ${getProjectSummary("calendar")}`,
      "As a case study, this route exists to give the project a dedicated search destination with project-specific text, metadata, image references, and structured data while leaving the visible portfolio grid unchanged.",
    ],
    relatedPaths: [
      "/services/frontend-react-development/",
      "/services/education-software-tools/",
      "/projects/",
    ],
    repo: getProjectRepo("calendar"),
    tech: getProjectTech("calendar"),
  },
  {
    id: "case-study-handwriting",
    path: "/projects/handwriting-formatting-pipeline/",
    page: "projects",
    type: "case-study",
    title: "Handwriting Formatting Pipeline Case Study | Python Workflow Tool | Portfolio Marton",
    description:
      "Case study for the Handwriting Formatting Pipeline, a Python-based extension and workflow tool for handwriting generation, print formatting, and training-data preparation.",
    image: "/projects/handwriting-formatting-pipeline.png",
    hiddenHeading: `Case study: ${getProjectTitle("handwriting-pipeline")}`,
    hiddenParagraphs: [
      `${getProjectTitle("handwriting-pipeline")} extends the existing "My Text in Your Handwriting" project by Thaines with supporting workflow pieces that make the output more usable in practice.`,
      "The problem here is not just handwriting generation itself but everything around it: text formatting, printable layout, limited Unicode-to-ASCII handling, and preparing training materials in a way that is easier to repeat and maintain.",
      `The project is implemented as a Python pipeline with macros and utilities for formatting and training-data preparation. It shows an automation mindset: instead of treating each output as a one-off manual process, the work tries to standardize the surrounding steps into a repeatable pipeline. Summary: ${getProjectSummary("handwriting-pipeline")}`,
      "This case-study route adds project-level textual context for search while keeping the main portfolio presentation intact. It also links the project into a broader Python automation and workflow narrative across the site.",
    ],
    relatedPaths: [
      "/services/python-automation-analysis/",
      "/projects/portfolio-analytics-tool/",
      "/projects/",
    ],
    repo: getProjectRepo("handwriting-pipeline"),
    tech: getProjectTech("handwriting-pipeline"),
  },
  {
    id: "case-study-portfolio-analytics",
    path: "/projects/portfolio-analytics-tool/",
    page: "projects",
    type: "case-study",
    title: "Portfolio Analytics Tool Case Study | Python Finance Project | Portfolio Marton",
    description:
      "Case study for Portfolio Analytics Tool, a Python finance project by Marton Vegh for portfolio construction, Sharpe and Sortino analysis, efficient frontier modeling, and visualization.",
    image: "/projects/portfolio-analytics-tool.png",
    hiddenHeading: `Case study: ${getProjectTitle("portfolio-analytics-tool")}`,
    hiddenParagraphs: [
      `${getProjectTitle("portfolio-analytics-tool")} is a quantitative finance project built around a common investor problem: holdings data is easy to collect, but it is much harder to turn that into structured analysis of risk, return, and portfolio construction choices.`,
      "The project uses Python libraries such as yfinance, NumPy, Pandas, SciPy, and Matplotlib to build portfolios from share holdings and analyze them using measures like Sharpe ratio, Sortino ratio, maximum drawdown, efficient-frontier comparisons, and optimized portfolio scenarios.",
      `This is one of the clearest examples of the portfolio's finance and mathematics angle because it combines technical implementation with a decision-making use case. The project summary already reports a current best portfolio at 1.74 Sharpe and 2.52 Sortino, which gives the case study a concrete analytical reference point. Summary: ${getProjectSummary("portfolio-analytics-tool")}`,
      "On this route, the project is framed as a case study so it can target finance, analytics, and Python search intent more directly than a simple project-card description allows.",
    ],
    relatedPaths: [
      "/services/python-automation-analysis/",
      "/projects/handwriting-formatting-pipeline/",
      "/projects/",
    ],
    tech: getProjectTech("portfolio-analytics-tool"),
  },
  {
    id: "case-study-grammar-trainer",
    path: "/projects/grammar-trainer/",
    page: "projects",
    type: "case-study",
    title: "Grammar Trainer Case Study | Python, SQLite, LLM Education App | Portfolio Marton",
    description:
      "Case study for Grammar Trainer, a Python and SQLite grammar-learning app that uses LLM-generated Spanish sentences for adaptive student practice.",
    image: "/projects/grammar-trainer.png",
    hiddenHeading: `Case study: ${getProjectTitle("grammar-trainer")}`,
    hiddenParagraphs: [
      `${getProjectTitle("grammar-trainer")} is an education software project built to support grammar practice through generated Spanish sentences, immediate feedback, and adaptive repetition.`,
      "The core problem it addresses is that grammar exercises often become static and repetitive. By combining Python, SQLite, and LLM-assisted sentence generation, the app can tailor practice more closely to student performance and provide a feedback loop that goes beyond fixed worksheets.",
      `The project sits at the intersection of education, language learning, and practical AI-assisted tooling. It uses persistent performance tracking and personalized question generation to make practice more responsive over time. Summary: ${getProjectSummary("grammar-trainer")}`,
      "This route gives the project its own search-targeted case-study page and connects it to the portfolio's broader education-software niche without changing the visible structure of the projects page.",
    ],
    relatedPaths: [
      "/services/education-software-tools/",
      "/services/python-automation-analysis/",
      "/projects/",
    ],
    tech: getProjectTech("grammar-trainer"),
  },
  {
    id: "paper-observer-receiver-model",
    path: "/papers/observer-receiver-model/",
    page: "projects",
    type: "paper",
    title: "Observer-Receiver Model | Draft Consciousness Paper | Portfolio Marton",
    description:
      "Draft paper route for Observer-Receiver Model, a theory of consciousness by Marton Vegh described as an external observer dependent on the brain.",
    image: "/profile/marton-vegh-portrait.jpg",
    hiddenHeading: observerPaper.translations.en.title,
    hiddenParagraphs: [
      `${observerPaper.translations.en.title} is a draft paper presented on the portfolio as written research work alongside the software projects.`,
      `The paper summary on the site describes it as "${observerPaper.translations.en.summary}". This dedicated route provides clearer page-level context for search and indexing while linking back to the main portfolio projects and papers section.`,
      "Because the paper is hosted in an external Google Doc, this page also functions as a stable summary destination on the main site with structured metadata and an internal hierarchy.",
    ],
    relatedPaths: ["/projects/", "/about/marton-vegh/", "/"],
    externalLink: observerPaper.translations.en.link,
  },
];

function enrichRoute(route) {
  return {
    ...route,
    canonicalPath: normalizePath(route.path),
  };
}

export const SEO_ROUTES = ROUTE_DEFINITIONS.map(enrichRoute);

export function normalizePath(pathname = "/") {
  if (!pathname) return "/";

  const withoutQuery = pathname.split("?")[0].split("#")[0].trim();
  if (!withoutQuery || withoutQuery === "/") return "/";

  const normalized = withoutQuery.replace(/\/{2,}/g, "/");
  return normalized.endsWith("/") ? normalized : `${normalized}/`;
}

export function resolveRoute(pathname = "/") {
  const normalized = normalizePath(pathname);
  return SEO_ROUTES.find((route) => route.canonicalPath === normalized) ?? SEO_ROUTES[0];
}

export function getSiteUrl(explicitSiteUrl) {
  return `${(explicitSiteUrl || DEFAULT_SITE_URL).trim().replace(/\/$/, "")}`;
}

export function getRuntimeSiteUrl() {
  if (typeof window === "undefined") return getSiteUrl(DEFAULT_SITE_URL);

  const basePath = typeof import.meta !== "undefined" && import.meta.env?.BASE_URL && import.meta.env.BASE_URL !== "/"
    ? import.meta.env.BASE_URL.replace(/\/$/, "")
    : "";

  return `${window.location.origin}${basePath}`;
}

export function getAbsoluteUrl(siteUrl, routePath) {
  return `${getSiteUrl(siteUrl)}${normalizePath(routePath) === "/" ? "" : normalizePath(routePath)}`;
}

export function getImageUrl(siteUrl, imagePath) {
  if (!imagePath) return `${getSiteUrl(siteUrl)}/favicon.png`;
  if (/^https?:\/\//i.test(imagePath)) return imagePath;
  return `${getSiteUrl(siteUrl)}${imagePath.startsWith("/") ? imagePath : `/${imagePath}`}`;
}

export function getHtmlEntryPath(routePath) {
  const normalized = normalizePath(routePath);
  return normalized === "/" ? "index.html" : `${normalized.slice(1)}index.html`;
}

export function getHtmlEntryPaths() {
  return SEO_ROUTES.map((route) => getHtmlEntryPath(route.path));
}

function buildBreadcrumbList(route, siteUrl) {
  const breadcrumbs = [{ name: "Home", path: "/" }];

  if (route.path.startsWith("/projects/") && route.path !== "/projects/") {
    breadcrumbs.push({ name: "Projects", path: "/projects/" });
  }

  if (route.path.startsWith("/papers/")) {
    breadcrumbs.push({ name: "Papers", path: "/projects/" });
  }

  if (route.path.startsWith("/services/")) {
    breadcrumbs.push({ name: "Services", path: "/" });
  }

  if (route.path.startsWith("/about/")) {
    breadcrumbs.push({ name: "About", path: "/who-am-i/" });
  }

  if (route.path !== "/") {
    breadcrumbs.push({ name: route.hiddenHeading, path: route.path });
  }

  return {
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: getAbsoluteUrl(siteUrl, crumb.path),
    })),
  };
}

function buildPrimarySchema(route, siteUrl) {
  const baseWebPage = {
    "@type": route.type === "profile" ? "ProfilePage" : route.type === "collection" ? "CollectionPage" : "WebPage",
    name: route.hiddenHeading,
    description: route.description,
    url: getAbsoluteUrl(siteUrl, route.path),
    isPartOf: {
      "@type": "WebSite",
      name: "Portfolio Marton",
      url: getSiteUrl(siteUrl),
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: getImageUrl(siteUrl, route.image),
    },
    about: {
      "@type": "Person",
      name: PROFILE.name,
      url: getAbsoluteUrl(siteUrl, "/about/marton-vegh/"),
    },
  };

  if (route.type === "case-study") {
    return {
      "@type": "Article",
      headline: route.hiddenHeading,
      description: route.description,
      image: [getImageUrl(siteUrl, route.image)],
      author: {
        "@type": "Person",
        name: PROFILE.name,
        url: getAbsoluteUrl(siteUrl, "/about/marton-vegh/"),
      },
      mainEntityOfPage: getAbsoluteUrl(siteUrl, route.path),
      about: route.tech?.length
        ? route.tech.map((tech) => ({ "@type": "Thing", name: tech }))
        : undefined,
    };
  }

  if (route.type === "paper") {
    return {
      "@type": "Article",
      headline: route.hiddenHeading,
      description: route.description,
      author: {
        "@type": "Person",
        name: PROFILE.name,
        url: getAbsoluteUrl(siteUrl, "/about/marton-vegh/"),
      },
      mainEntityOfPage: getAbsoluteUrl(siteUrl, route.path),
    };
  }

  return baseWebPage;
}

function buildSecondarySchema(route, siteUrl) {
  if (route.type !== "case-study") return null;

  return {
    "@type": "SoftwareSourceCode",
    name: route.hiddenHeading,
    codeRepository: route.repo || undefined,
    programmingLanguage: route.tech?.join(", ") || undefined,
    author: {
      "@type": "Person",
      name: PROFILE.name,
      url: getAbsoluteUrl(siteUrl, "/about/marton-vegh/"),
    },
    url: getAbsoluteUrl(siteUrl, route.path),
    image: getImageUrl(siteUrl, route.image),
    description: route.description,
  };
}

export function getStructuredData(route, siteUrl) {
  const graph = [
    {
      "@context": "https://schema.org",
      ...BASE_PERSON_SCHEMA,
      url: getAbsoluteUrl(siteUrl, "/about/marton-vegh/"),
      image: getImageUrl(siteUrl, BASE_PERSON_SCHEMA.image),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Portfolio Marton",
      url: getSiteUrl(siteUrl),
      author: {
        "@type": "Person",
        name: PROFILE.name,
      },
    },
    {
      "@context": "https://schema.org",
      ...buildBreadcrumbList(route, siteUrl),
    },
    {
      "@context": "https://schema.org",
      ...buildPrimarySchema(route, siteUrl),
    },
  ];

  const secondarySchema = buildSecondarySchema(route, siteUrl);
  if (secondarySchema) {
    graph.push({
      "@context": "https://schema.org",
      ...secondarySchema,
    });
  }

  return graph;
}

export function getRouteLinkLabel(path) {
  return resolveRoute(path).hiddenHeading;
}

export function getRouteSeoContent(route) {
  return {
    heading: route.hiddenHeading,
    paragraphs: route.hiddenParagraphs,
    links: (route.relatedPaths ?? []).map((path) => ({
      href: normalizePath(path),
      label: getRouteLinkLabel(path),
    })),
    externalLink: route.externalLink
      ? {
          href: route.externalLink,
          label: "Open the full external document",
        }
      : null,
  };
}

export function escapeHtml(value = "") {
  return `${value}`
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function renderSeoContentHtml(route) {
  const content = getRouteSeoContent(route);
  const links = content.links.length
    ? `<nav aria-label="Related pages"><ul>${content.links
        .map((link) => `<li><a href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a></li>`)
        .join("")}</ul></nav>`
    : "";
  const externalLink = content.externalLink
    ? `<p><a href="${escapeHtml(content.externalLink.href)}">${escapeHtml(content.externalLink.label)}</a></p>`
    : "";

  return `<section class="visually-hidden" data-seo-route="${escapeHtml(route.id)}"><article><h1>${escapeHtml(content.heading)}</h1>${content.paragraphs
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("")}${externalLink}${links}</article></section>`;
}

export function getDefaultStructuredData(siteUrl) {
  return JSON.stringify(getStructuredData(resolveRoute("/"), siteUrl));
}

export function getLanguageProfileSummary() {
  return WHO_AM_I_CONTENT.translations.en.paragraphs.join(" ");
}

function upsertMetaTag({ name, property, content }) {
  if (typeof document === "undefined") return;

  const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    if (name) element.setAttribute("name", name);
    if (property) element.setAttribute("property", property);
    document.head.append(element);
  }

  element.setAttribute("content", content);
}

function upsertCanonicalLink(href) {
  if (typeof document === "undefined") return;

  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.append(link);
  }

  link.setAttribute("href", href);
}

function upsertStructuredData(scriptContent) {
  if (typeof document === "undefined") return;

  let script = document.getElementById("route-structured-data");
  if (!script) {
    script = document.createElement("script");
    script.id = "route-structured-data";
    script.type = "application/ld+json";
    document.head.append(script);
  }

  script.textContent = scriptContent;
}

export function applyRouteMetadata(route, siteUrl) {
  if (typeof document === "undefined") return;

  const resolvedSiteUrl = getSiteUrl(siteUrl);
  const canonicalUrl = getAbsoluteUrl(resolvedSiteUrl, route.path);
  const imageUrl = getImageUrl(resolvedSiteUrl, route.image);

  document.title = route.title;
  upsertCanonicalLink(canonicalUrl);
  upsertMetaTag({ name: "description", content: route.description });
  upsertMetaTag({ name: "robots", content: "index,follow,max-image-preview:large" });
  upsertMetaTag({ name: "author", content: PROFILE.name });
  upsertMetaTag({ property: "og:site_name", content: "Portfolio Marton" });
  upsertMetaTag({
    property: "og:type",
    content: route.type === "case-study" || route.type === "paper" ? "article" : route.type === "profile" ? "profile" : "website",
  });
  upsertMetaTag({ property: "og:title", content: route.title });
  upsertMetaTag({ property: "og:description", content: route.description });
  upsertMetaTag({ property: "og:url", content: canonicalUrl });
  upsertMetaTag({ property: "og:image", content: imageUrl });
  upsertMetaTag({ name: "twitter:card", content: "summary_large_image" });
  upsertMetaTag({ name: "twitter:title", content: route.title });
  upsertMetaTag({ name: "twitter:description", content: route.description });
  upsertMetaTag({ name: "twitter:image", content: imageUrl });
  upsertStructuredData(JSON.stringify(getStructuredData(route, resolvedSiteUrl)));
}
