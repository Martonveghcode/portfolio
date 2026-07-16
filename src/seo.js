import { PROJECTS_CONTENT } from "./content.js";
import { PROFILE, STACK } from "./siteData.js";
import { WHO_AM_I_CONTENT } from "./WHO_AM_I_CONTENT.js";

export const DEFAULT_SITE_URL = "https://marton.top";

export const PRIMARY_PAGE_PATHS = {
  home: "/",
  projects: "/projects/",
  experience: "/experience/",
  whoami: "/who-am-i/",
};

export const SITE_FOOTER_LINKS = [
  { href: "/projects/", label: "Projects" },
  { href: "/about/marton-vegh/", label: "About" },
  { href: "/experience/", label: "Experience" },
];

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
      "Portfolio Marton showcases Marton Vegh's React, Python, education software, and quantitative finance projects through detailed case studies and technical context.",
    image: "/profile/marton-vegh-portrait.jpg",
    hiddenHeading: "Portfolio Marton: frontend, Python, and quantitative project portfolio",
    hiddenParagraphs: [
      "Portfolio Marton is the personal portfolio site of Marton Vegh, a student developer based in Mallorca, Spain. The work shown here focuses on practical software projects in React, JavaScript, Python, automation, and quantitative analysis.",
      "The project case studies explain the problems behind each build, the tools used, and the decisions that shaped the result. They range from student planning and daily learning tools to document automation and portfolio analysis.",
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
      "This collection spans frontend development, automation, data analysis, and education-focused tooling. Each case study expands on the problem, implementation choices, and practical use of the project beyond the summary shown in the gallery.",
      "The React work concentrates on clear, state-driven interfaces for recurring tasks. The Python projects cover document pipelines, individualized learning records, and quantitative portfolio analysis, with an emphasis on replacing repetitive work with maintainable workflows.",
    ],
    relatedPaths: [
      "/projects/homework-calendar/",
      "/projects/handwriting-formatting-pipeline/",
      "/projects/portfolio-analytics-tool/",
      "/projects/habitro/",
    ],
  },
  {
    id: "experience",
    path: "/experience/",
    page: "experience",
    type: "webpage",
    title: "Experience | Operations, Coordination, Team Support | Portfolio Marton",
    description:
      "Experience timeline for Marton Vegh, including internships, volunteer support, client coordination, event logistics, administrative workflows, and on-site team support.",
    image: "/profile/marton-vegh-canoe-sprint.jpg",
    hiddenHeading: "Experience background in coordination, logistics, and operational support",
    hiddenParagraphs: [
      "The experience page documents hands-on work in client coordination, event logistics, volunteer support, team support, and operational workflow contexts. These roles complement the project work by showing experience with practical execution, communication, and organization.",
      "The timeline includes volunteer work at Casal de s'Escorxador supporting older adults with dementia, plus internships at Budapest Design Apartments and Real Club Nautico de Palma covering administrative workflows, client-facing coordination, racing-team support, and on-site logistics.",
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
    page: "profile",
    type: "profile",
    title: "About Marton Vegh | Multilingual Student Developer Portfolio",
    description:
      "Professional profile of Marton Vegh, a multilingual student developer in Mallorca building practical software with React, Python, JavaScript, C, and C++.",
    image: "/profile/marton-vegh-portrait.jpg",
    hiddenHeading: "About Marton Vegh",
    hiddenParagraphs: [
      "Marton Vegh is a student developer based in Mallorca, Spain. He builds practical software with React, JavaScript, Python, C, and C++, focusing on automation, education tools, and quantitative finance.",
      "His independent work includes a student calendar, an individualized learning system, a handwriting-formatting pipeline, and a portfolio analytics tool. Across these projects he handles problem definition, implementation, testing, and documentation.",
      "He studies in an international environment and works across Hungarian, English, Spanish, French, and Catalan. GitHub, project case studies, and the experience timeline provide the supporting record for this professional profile.",
    ],
    relatedPaths: ["/who-am-i/", "/projects/", "/experience/"],
  },
  {
    id: "privacy",
    path: "/privacy/",
    page: "privacy",
    type: "webpage",
    title: "Privacy and Cookies | Portfolio Marton",
    description:
      "Privacy and cookie information for Portfolio Marton, including contact form data, cookie consent records, local preferences, and external profile links.",
    image: "/profile/marton-vegh-portrait.jpg",
    hiddenHeading: "Privacy and cookie information for Portfolio Marton",
    hiddenParagraphs: [
      "Portfolio Marton uses a small amount of data to keep the site functional, remember basic preferences, and receive messages through the contact form.",
      "The cookie preference banner records whether a visitor accepted or declined preferences, along with basic browser and page context needed to store that choice. The contact form collects the name, email address, and message a visitor submits.",
      "The site also links to external services such as GitHub, ORCID, Google Docs, Gmail, and project repositories. Those services have their own privacy practices when opened.",
    ],
    relatedPaths: ["/about/marton-vegh/", "/projects/", "/"],
  },
  {
    id: "service-frontend",
    path: "/services/frontend-react-development/",
    page: "service",
    type: "service",
    title: "Frontend Developer Portfolio | React, JavaScript, Performance | Portfolio Marton",
    description:
      "Frontend development portfolio page focused on React and JavaScript projects by Marton Vegh, with work in responsive UI, practical tooling, and performance-aware implementation.",
    image: "/projects/homework-calendar-dashboard.png",
    hiddenHeading: "Frontend developer portfolio for React and JavaScript projects",
    hiddenParagraphs: [
      "The frontend work in this portfolio uses React and JavaScript to turn recurring tasks into clear, responsive interfaces. The priority is practical interaction design: understandable states, efficient workflows, and layouts that remain usable across screen sizes.",
      "Homework Calendar is the main example. It helps students organize recurring lessons and send class, test, and homework events to Google Calendar, combining stateful interface behavior with a workflow grounded in day-to-day school planning.",
      "Other interface work follows the same approach: structure information clearly, reduce repeated manual steps, and make the primary action obvious. The linked case studies describe the problem framing, tools, and implementation decisions behind each build.",
    ],
    relatedPaths: ["/projects/homework-calendar/", "/projects/", "/services/education-software-tools/"],
  },
  {
    id: "service-python",
    path: "/services/python-automation-analysis/",
    page: "service",
    type: "service",
    title: "Python Developer Portfolio | Automation, Analysis, Workflow Tools | Portfolio Marton",
    description:
      "Python portfolio page featuring automation workflows, document pipelines, portfolio analytics, and data-focused project work by Marton Vegh.",
    image: "/projects/portfolio-analytics-tool.png",
    hiddenHeading: "Python automation and analytics portfolio",
    hiddenParagraphs: [
      "The Python work covers automation, analysis, and workflow tooling. These projects use reusable components to structure data, reduce repetitive processing, and turn technical output into information that is easier to act on.",
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
    page: "service",
    type: "service",
    title: "Education Software Portfolio | Student Tools and Language Learning | Portfolio Marton",
    description:
      "Education software portfolio featuring student planning and language-learning tools built with React, Python, SQLite, and LLM-assisted workflows.",
    image: "/projects/habitro.png",
    hiddenHeading: "Education software and student tool portfolio",
    hiddenParagraphs: [
      "The education projects address student planning, daily practice, and language-learning workflows. They are built around concrete tasks such as organizing recurring lessons, exporting schedules, and adapting exercises to an individual learning record.",
      "Homework Calendar helps students manage recurring school structures in a browser-based interface and push the output into Google Calendar. Habitro uses SQLite-based performance tracking and a daily workflow to support retained learning across school material.",
      "Together, the projects explore two connected needs: keeping school commitments organized and making daily practice responsive to past performance. Their case studies explain the different technology choices behind the browser-based planner and the SQLite-backed learning system.",
    ],
    relatedPaths: ["/projects/homework-calendar/", "/projects/habitro/", "/projects/"],
  },
  {
    id: "case-study-homework-calendar",
    path: "/projects/homework-calendar/",
    page: "case-study",
    type: "case-study",
    title: "Homework Calendar Case Study | React Student Scheduling App | Portfolio Marton",
    description:
      "Case study for Homework Calendar, a React app by Marton Vegh that helps students manage recurring lessons and push class, test, and homework events to Google Calendar.",
    image: "/projects/homework-calendar-dashboard.png",
    hiddenHeading: `Case study: ${getProjectTitle("calendar")}`,
    hiddenParagraphs: [
      `${getProjectTitle("calendar")} is a self-directed React project built around a clear student planning problem: recurring lessons, changing deadlines, and the friction of manually transferring school information into a usable calendar workflow.`,
      "The project focuses on browser-based scheduling with repeated lesson structures and event export to Google Calendar. That makes it less of a generic to-do interface and more of a practical education tool aimed at turning class schedules, tests, and homework into an organized repeatable system.",
      "The Vite, React, and Tailwind implementation uses state-driven UI decisions to keep repeated lesson structures manageable. Calendar export connects the planning interface to the calendar students already use instead of creating another isolated schedule.",
      "The result is a focused workflow for entering school information once, reviewing it in context, and transferring class, test, and homework events without recreating them manually.",
    ],
    relatedPaths: [
      "/services/frontend-react-development/",
      "/services/education-software-tools/",
      "/projects/",
    ],
    repo: getProjectRepo("calendar"),
    tech: getProjectTech("calendar"),
    caseStudy: {
      problem: "Recurring lessons, tests, and homework are tedious to copy into a calendar and easy to enter inconsistently.",
      role: "Independent design and frontend implementation with React, Vite, Tailwind, and Google Calendar export.",
      evidence: "The working interface supports repeated lesson structures and distinct class, test, and homework events.",
    },
  },
  {
    id: "case-study-handwriting",
    path: "/projects/handwriting-formatting-pipeline/",
    page: "case-study",
    type: "case-study",
    title: "Handwriting Formatting Pipeline Case Study | Python Workflow Tool | Portfolio Marton",
    description:
      "Case study for the Handwriting Formatting Pipeline, a Python-based extension and workflow tool for handwriting generation, print formatting, and training-data preparation.",
    image: "/projects/handwriting-formatting-pipeline.png",
    hiddenHeading: `Case study: ${getProjectTitle("handwriting-pipeline")}`,
    hiddenParagraphs: [
      `${getProjectTitle("handwriting-pipeline")} extends the existing "My Text in Your Handwriting" project by Thaines with supporting workflow pieces that make the output more usable in practice.`,
      "The problem here is not just handwriting generation itself but everything around it: text formatting, printable layout, limited Unicode-to-ASCII handling, and preparing training materials in a way that is easier to repeat and maintain.",
      "The Python pipeline combines formatting utilities, print preparation, limited Unicode-to-ASCII conversion, and macros for training-data processing. Standardizing these supporting steps makes the handwriting workflow easier to repeat and maintain.",
      "A recommended training sheet completes the workflow by giving data preparation and output formatting a shared starting point, reducing the manual cleanup required around generated handwriting.",
    ],
    relatedPaths: [
      "/services/python-automation-analysis/",
      "/projects/portfolio-analytics-tool/",
      "/projects/",
    ],
    repo: getProjectRepo("handwriting-pipeline"),
    tech: getProjectTech("handwriting-pipeline"),
    caseStudy: {
      problem: "Generated handwriting still required manual text cleanup, print formatting, and repetitive training-data preparation.",
      role: "Extended the upstream project with a Python pipeline, formatting utilities, processing macros, and training guidance.",
      evidence: "The public repository documents Unicode conversion, printable output, training-data utilities, and the recommended sheet.",
    },
  },
  {
    id: "case-study-portfolio-analytics",
    path: "/projects/portfolio-analytics-tool/",
    page: "case-study",
    type: "case-study",
    title: "Portfolio Analytics Tool Case Study | Python Finance Project | Portfolio Marton",
    description:
      "Case study for Portfolio Analytics Tool, a Python finance project by Marton Vegh for portfolio construction, Sharpe and Sortino analysis, efficient frontier modeling, and visualization.",
    image: "/projects/portfolio-analytics-tool.png",
    hiddenHeading: `Case study: ${getProjectTitle("portfolio-analytics-tool")}`,
    hiddenParagraphs: [
      `${getProjectTitle("portfolio-analytics-tool")} is a quantitative finance project built around a common investor problem: holdings data is easy to collect, but it is much harder to turn that into structured analysis of risk, return, and portfolio construction choices.`,
      "The project uses Python libraries such as yfinance, NumPy, Pandas, SciPy, and Matplotlib to build portfolios from share holdings and analyze them using measures like Sharpe ratio, Sortino ratio, maximum drawdown, efficient-frontier comparisons, and optimized portfolio scenarios.",
      "The analysis combines risk-adjusted return measures with drawdown and efficient-frontier visualizations, so a portfolio can be compared from several perspectives instead of by headline return alone. One analyzed portfolio currently records a 1.74 Sharpe ratio and 2.52 Sortino ratio.",
      "Optimized scenarios provide reference points rather than automatic investment decisions. The tool is designed to make assumptions, trade-offs, and the relationship between holdings and portfolio-level results easier to inspect.",
    ],
    relatedPaths: [
      "/services/python-automation-analysis/",
      "/projects/handwriting-formatting-pipeline/",
      "/projects/",
    ],
    tech: getProjectTech("portfolio-analytics-tool"),
    caseStudy: {
      problem: "A list of share holdings does not by itself explain risk-adjusted performance, drawdowns, or diversification trade-offs.",
      role: "Built the Python analysis workflow and visualizations using market data, numerical, optimization, and plotting libraries.",
      evidence: "Outputs include Sharpe and Sortino ratios, maximum drawdown, efficient-frontier comparisons, and optimized scenarios.",
    },
  },
  {
    id: "case-study-habitro",
    path: "/projects/habitro/",
    page: "case-study",
    type: "case-study",
    title: "Habitro Case Study | Daily Learning System with SQLite Tracking | Portfolio Marton",
    description:
      "Case study for Habitro, a daily learning system with individualized SQLite-based performance tracking for school material.",
    image: "/projects/habitro.png",
    hiddenHeading: `Case study: ${getProjectTitle("habitro")}`,
    hiddenParagraphs: [
      `${getProjectTitle("habitro")} is an education software project built around a daily learning workflow for retaining and learning school material.`,
      "The app uses individualized SQLite-based performance tracking so exercises can be reviewed through a more personal record of progress instead of a static worksheet flow.",
      "In daily use, the system covers Spanish grammar, Catalan, and maths exercises. The stored performance history allows the learning workflow to respond to the individual student rather than presenting the same sequence every day.",
      "Habitro connects practice content with a consistent daily routine: complete the exercises, record performance, and use that history to guide later review. SQLite keeps the progress data local and structured.",
    ],
    relatedPaths: [
      "/services/education-software-tools/",
      "/services/python-automation-analysis/",
      "/projects/",
    ],
    repo: getProjectRepo("habitro"),
    tech: getProjectTech("habitro"),
    caseStudy: {
      problem: "Static worksheets do not adapt to past performance or provide a consistent record across daily practice sessions.",
      role: "Designed and built the learning workflow, exercise handling, and individualized SQLite performance tracking.",
      evidence: "The system is used for daily Spanish grammar, Catalan, and mathematics practice with per-user progress data.",
    },
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

  if (route.path.startsWith("/services/")) {
    breadcrumbs.push({ name: "Services", path: "/" });
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
  const personId = `${getAbsoluteUrl(siteUrl, "/about/marton-vegh/")}#person`;
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
      "@id": personId,
      name: PROFILE.name,
      url: getAbsoluteUrl(siteUrl, "/about/marton-vegh/"),
    },
  };

  if (route.type === "profile") {
    baseWebPage.mainEntity = {
      "@type": "Person",
      "@id": personId,
      name: PROFILE.name,
      url: getAbsoluteUrl(siteUrl, "/about/marton-vegh/"),
      image: getImageUrl(siteUrl, BASE_PERSON_SCHEMA.image),
    };
  }

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
  const personId = `${getAbsoluteUrl(siteUrl, "/about/marton-vegh/")}#person`;
  const graph = [
    {
      "@context": "https://schema.org",
      ...BASE_PERSON_SCHEMA,
      "@id": personId,
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
        "@id": personId,
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

  return `<section class="seo-prerender" data-seo-route="${escapeHtml(route.id)}"><article><h1>${escapeHtml(content.heading)}</h1>${content.paragraphs
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
