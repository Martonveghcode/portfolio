# SEO Audit Report for marton.top

Research date: July 5, 2026
Website audited: https://marton.top
Primary audience from brief: recruiters, academics, general public
Target market: Europe, United States, global

## A. Executive Summary

Overall condition: the site has a promising SEO foundation, but it is not yet a strong search asset. The strongest pieces are the custom domain, HTTPS, clean route structure, crawlable static HTML for 13 pages, unique page titles/descriptions, project screenshots with alt text, Person/Profile/Article/SoftwareSourceCode schema, and good enough Lighthouse lab scores. The biggest problem is not lack of metadata. It is that the search-facing version and user-facing version are misaligned.

The most serious verified issue is that the raw HTML, `robots.txt`, `sitemap.xml`, Open Graph tags, Twitter image tags, and JSON-LD emitted by the static build still reference `https://martonveghcode.github.io/portfolio`. The old GitHub Pages URLs tested during the audit returned 404. JavaScript hydration rewrites the canonical and schema to `https://marton.top`, but crawlers and social parsers that rely on raw HTML receive dead-domain signals.

The second serious issue is content quality and intent alignment. The site creates indexable service and case-study URLs, but the rendered user-visible React app shows generic grouped pages: service URLs render the homepage, and case-study/paper URLs render the project gallery. The unique route text exists in a `visually-hidden` block. That helps crawler discovery, but it is weak for users, recruiters, academics, and Google's people-first content expectations.

The three to five actions most likely to produce meaningful results:

1. Fix canonical domain signals immediately: build and deploy with `VITE_SITE_URL=https://marton.top`, update `DEFAULT_SITE_URL`, regenerate `robots.txt` and `sitemap.xml`, and verify raw HTML points only to `marton.top`.
2. Turn service and case-study routes into visible pages, not hidden SEO-only pages.
3. Make the project pages real case studies with problem, role, process, tools, outcome, screenshots, GitHub/demo links, and limitations.
4. Improve trust signals: add a clear professional About page, a privacy/cookie policy, verifiable claims, and consistent external profiles.
5. Build a small topical content program around actual strengths: React student tools, Python automation, portfolio analytics, quantitative finance learning, and math/programming notes.

## B. SEO Scorecard

Scores are directional, not false-precision measurements.

| Category | Score | Evidence |
|---|---:|---|
| Technical SEO | 5/10 | HTTPS works, `marton.top` and `www`/HTTP redirect behavior is clean, and all inspected routes returned 200. Major deduction for sitemap/robots/raw canonical pointing to dead GitHub Pages URLs. |
| On-page SEO | 5/10 | Titles/descriptions/H1s exist, but many visible H1s do not match the indexable route intent. Service pages visibly show `Marton Vegh`; case-study pages visibly show `Projects`. |
| Content quality | 5/10 | The visible homepage/profile/projects have useful personal context, but service/case-study content is mostly hidden and lacks detailed outcomes. |
| Search-intent alignment | 4/10 | The site targets "frontend developer portfolio", "Python automation", "education software", and case-study terms, but the visible route content does not satisfy those intents yet. |
| Site architecture | 5/10 | Routes are clean and shallow. However, visible navigation uses buttons for internal page changes, and important internal route links mainly exist in hidden SEO sections. |
| Performance | 7/10 | Lighthouse mobile lab scores: homepage 86, who-am-I 85. LCP was 3.2s and 3.4s, above the 2.5s good threshold. |
| Mobile usability | 7/10 | Lighthouse did not show catastrophic mobile issues, but homepage touch targets failed because heatmap day buttons are too small/close. Requires manual device verification. |
| Structured data | 6/10 | Good schema intent exists, including Person, WebSite, BreadcrumbList, ProfilePage, Article, and SoftwareSourceCode. Deducted because raw JSON-LD uses dead GitHub URLs and schema should match visible content. |
| E-E-A-T and trust | 6/10 | Strong identity signals: name, location, email, ORCID, GitHub, CV. Gaps: no privacy/legal page despite cookie/contact data, limited proof/outcomes, possible unverifiable Microsoft/logo claim on live homepage. |
| Internal linking | 5/10 | Crawlable hidden links connect routes, but visible project cards do not strongly link to dedicated case-study pages. Internal anchors should be visible and user-facing. |
| Portfolio/case-study quality | 4/10 | Projects are present, but dedicated case-study URLs do not render dedicated visible case studies. |
| Conversion experience | 6/10 | Contact, CV, GitHub, ORCID are present. Recruiter/academic paths need clearer CTAs, a direct `mailto:` fallback, and more proof before asking for contact. |

## C. Critical Findings

| Issue | Evidence or affected URL | Why it matters | Severity | Recommended fix | Expected impact | Effort | Priority |
|---|---|---|---|---|---|---|---|
| Raw sitemap and robots point to old GitHub Pages URLs | `https://marton.top/robots.txt` lists `https://martonveghcode.github.io/portfolio/sitemap.xml`; `https://marton.top/sitemap.xml` lists GitHub URLs. Those GitHub URLs returned 404. | Sitemaps are discovery hints. Sending crawlers to dead URLs wastes crawl signals and can delay or confuse indexing of the real domain. | Critical | Set `VITE_SITE_URL=https://marton.top` in production, change `DEFAULT_SITE_URL`, regenerate, redeploy, and resubmit sitemap in GSC/Bing. | Faster and cleaner discovery of all real URLs. | Low | P0 |
| Raw canonical, OG, Twitter, and JSON-LD tags use dead GitHub URLs | Static crawl of all 13 inspected routes found canonical/OG/schema URLs under `martonveghcode.github.io/portfolio`. | Google may render JS and see corrected tags, but many crawlers and social parsers use raw HTML. Dead canonical targets are a serious trust/indexing signal problem. | Critical | Ensure generated static HTML uses `https://marton.top` before JS runs. Add a build check that fails if `dist` contains `martonveghcode.github.io/portfolio`. | Cleaner canonical consolidation, social previews, schema consistency. | Low | P0 |
| Service and case-study routes do not render dedicated visible content | Rendered Chrome check: `/services/*` visible H1 = `Marton Vegh`; `/projects/homework-calendar/`, `/projects/portfolio-analytics-tool/`, `/projects/habitro/`, paper route visible H1 = `Projects`; unique route H1 is hidden. | These pages target search intents that users cannot satisfy visually. This weakens relevance and can look like search-only content. | High | Build visible route templates for service and case-study pages, or deindex/merge routes until real content exists. | Stronger long-tail ranking ability and better recruiter evaluation. | Medium | P1 |
| Important internal navigation is not represented as crawlable visible links | Visible navigation uses buttons. Crawlable route links are mainly in `visually-hidden` SEO sections. | Google guidance emphasizes crawlable `href` links. Buttons work for users with JS but are weaker for link discovery and accessibility semantics. | High | Use anchors for internal navigation: `<a href="/projects/">Projects</a>` with client-side enhancement if needed. Add visible related links on project/service pages. | Better crawl paths, accessibility, and user orientation. | Medium | P1 |
| Case studies lack measurable proof and decision context | Project routes contain hidden summaries, while rendered pages show cards and external GitHub/Docs links. Little visible detail on problem, role, constraints, process, outcomes, screenshots, and limitations. | Portfolio SEO depends on experience proof, not generic project names. Recruiters need evidence of applied skill. | High | Create full visible case studies for Homework Calendar, Portfolio Analytics Tool, Handwriting Formatting Pipeline, Habitro, and top papers. | Higher relevance for long-tail searches and better conversion. | Medium/High | P1 |
| Duplicate visible experience for `/who-am-i/` and `/about/marton-vegh/` | Both rendered as the same `Who Am I` page, but have different hidden/metadata positioning. | Two URLs with near-identical visible content can split relevance and confuse users. | Medium | Differentiate: make `/about/marton-vegh/` a professional profile and `/who-am-i/` a broader personal background, or canonical/redirect one to the other. | Better content clarity and reduced duplication. | Low/Medium | P2 |
| Homepage trust claim/logo needs verification | Live homepage rendered "Contributor to industry leading projects for" with a Microsoft logo/link. The asset exists live but was not present in local `public`. | Trust signals help conversion only when clearly substantiated. Unexplained client/logo claims can damage credibility. | Medium | Add a short verifiable explanation, link to proof, or remove the logo/claim. | Stronger E-E-A-T and recruiter trust. | Low | P1 |
| No privacy/cookie policy found | Cookie banner and contact form are present; no inspected route provided a privacy policy/legal page. | Legal/compliance aside, transparent data handling is a trust signal. | Medium | Add `/privacy/` and optionally `/cookies/`, link them from footer/banner. | Better trust and lower conversion friction. | Low | P2 |
| Performance opportunities on mobile | Lighthouse mobile: homepage LCP 3.2s, FCP 2.7s, Speed Index 4.3s; who-am-I LCP 3.4s, total payload 1,668 KiB, image delivery savings about 1,098 KiB. | Core Web Vitals are user-experience signals; slow visible load hurts searchers and recruiters on mobile. | Medium | Optimize profile/book images, use WebP/AVIF, self-host or preconnect font, reduce unused JS, split heavy pages. | Better mobile UX and possibly better CWV status. | Medium | P2 |
| Homepage touch targets fail Lighthouse | `heatmap-day` buttons are the affected nodes. | Small touch targets affect mobile usability and accessibility. | Low/Medium | Make heatmap cells non-interactive on mobile or aggregate them into larger accessible controls. | Better mobile accessibility. | Low/Medium | P3 |

## D. Page-by-Page Audit

Inspected live URLs: `/`, `/projects/`, `/experience/`, `/who-am-i/`, `/about/marton-vegh/`, three `/services/` routes, four `/projects/` case-study routes, and `/papers/observer-receiver-model/`.

| URL | Purpose and intent | Current strengths | Current weaknesses | Recommended theme | Suggested title | Suggested meta description | Suggested H1 | Internal links/schema/priority |
|---|---|---|---|---|---|---|---|---|
| `/` | Brand homepage for recruiters/general search. | Clear identity, location, GitHub/CV/ORCID, good rendered H1. | Raw head points to old domain; Microsoft claim unclear; homepage can better route visitors by intent. | Student developer portfolio: React, Python, finance, math. | `Marton Vegh | Student Developer in React, Python and Finance` | `Portfolio of Marton Vegh, a Mallorca-based student developer building React tools, Python automation, and quantitative finance projects.` | `Marton Vegh` | Link visibly to About, Projects, React, Python, Finance case studies. Person/WebSite schema. P0 for canonical fix, P1 for content routing. |
| `/projects/` | Project collection. | Good project list, screenshots, GitHub/docs links, multiple project themes. | Does not visibly link strongly to dedicated case-study URLs; project cards need role/outcome summaries. | Software projects and case studies. | `Software Projects by Marton Vegh | React, Python and Finance` | `Selected software projects by Marton Vegh, including React student tools, Python automation workflows, and quantitative finance analysis projects.` | `Projects` | Add visible case-study links and filters by React/Python/finance/education. CollectionPage schema. P1. |
| `/experience/` | Work/volunteer/internship credibility. | Shows dated experiences and practical contexts. | Needs clearer skills and outcomes per entry; no external proof where possible. | Experience in operations, coordination, and software-adjacent work. | `Marton Vegh Experience | Operations, Student Tools and Finance` | `Experience profile for Marton Vegh, covering volunteer work, internships, client coordination, operations, and project-based software work.` | `Experience` | Link to About, CV, relevant projects. WebPage schema. P2. |
| `/who-am-i/` | Personal background page. | Rich personal context, languages, sports, books, art. | Broad content may dilute professional search intent; profile image alt is `IMG 8888(1)`. | Personal background and interests. | `Who Is Marton Vegh | Student Developer, Athlete and Researcher` | `Personal background for Marton Vegh: multilingual student developer in Mallorca with interests in mathematics, finance, programming, sports, books, and art.` | `Who Am I` | Improve image alt; link to professional About and projects. ProfilePage schema. P2. |
| `/about/marton-vegh/` | Professional profile. | Good target as a dedicated name/entity page. | Renders the same visible page as `/who-am-i/`. | Professional identity and credibility. | `About Marton Vegh | Student Developer in Mallorca` | `About Marton Vegh, a multilingual student developer based in Mallorca building React, Python, finance, and education software projects.` | `About Marton Vegh` | Make visible page distinct, include CV, GitHub, ORCID, contact, achievements. ProfilePage schema. P1. |
| `/services/frontend-react-development/` | Service/skill landing page. | Metadata and hidden text target React/frontend. | Visible page is homepage, not a React service/project page. | React frontend developer portfolio. | `React Frontend Developer Portfolio | Marton Vegh` | `React frontend portfolio by Marton Vegh, featuring student tools, responsive interfaces, JavaScript projects, and practical UI implementation.` | `React Frontend Developer Portfolio` | Add visible links to Homework Calendar, Macro Recorder, UI screenshots. WebPage schema. P1. |
| `/services/python-automation-analysis/` | Skill landing page. | Metadata targets Python automation and finance analysis. | Visible page is homepage. | Python automation and analysis portfolio. | `Python Automation and Finance Portfolio | Marton Vegh` | `Python portfolio by Marton Vegh, featuring automation workflows, document tools, portfolio analytics, and finance-oriented analysis projects.` | `Python Automation and Analysis Portfolio` | Link to Portfolio Analytics and Handwriting Pipeline. WebPage schema. P1. |
| `/services/education-software-tools/` | Niche landing page. | Strong niche around student tools and learning workflows. | Visible page is homepage. | Education software and student productivity tools. | `Education Software Portfolio | Student Tools by Marton Vegh` | `Education software portfolio by Marton Vegh, featuring student scheduling, learning workflows, and React/Python tools for school tasks.` | `Education Software and Student Tools` | Link to Homework Calendar and Habitro. WebPage schema. P1. |
| `/projects/homework-calendar/` | Case study. | Good idea, practical student problem, React/Google Calendar angle. | Visible page is project gallery; no dedicated problem/process/outcome page. | React student scheduling app case study. | `Homework Calendar Case Study | React Student Scheduling App` | `Case study for Homework Calendar, a React app that helps students manage recurring lessons and export class, test, and homework events to Google Calendar.` | `Homework Calendar Case Study` | Add screenshots, process, role, features, demo, GitHub, lessons learned. Article + SoftwareSourceCode schema. P1. |
| `/projects/handwriting-formatting-pipeline/` | Case study. | Distinct Python workflow topic, good long-tail potential. | Visible page is project gallery; no before/after examples. | Python handwriting formatting workflow. | `Python Handwriting Formatting Pipeline Case Study` | `Case study for a Python workflow that supports handwriting generation, print formatting, Unicode cleanup, and training-data preparation.` | `Handwriting Formatting Pipeline Case Study` | Add input/output examples, limitations, repo, technical steps. Article + SoftwareSourceCode schema. P1. |
| `/projects/portfolio-analytics-tool/` | Case study in finance/quant analysis. | Strong alignment with finance/math audience. | Visible page is project gallery; lacks methodology, data assumptions, charts, and limitations. | Python portfolio analytics and quantitative finance. | `Python Portfolio Analytics Tool Case Study | Marton Vegh` | `Case study for a Python finance project covering portfolio construction, risk metrics, Sharpe and Sortino analysis, efficient-frontier modeling, and visualization.` | `Portfolio Analytics Tool Case Study` | Add charts, formulas, data sources, caveats, GitHub, screenshots. Article + SoftwareSourceCode schema. P1. |
| `/projects/habitro/` | Education/learning tool case study. | Good student-learning niche; SQLite tracking differentiates it. | Visible page is project gallery; outcomes and screenshots need depth. | Daily learning system with tracking. | `Habitro Case Study | Daily Learning System with SQLite Tracking` | `Case study for Habitro, a daily learning system using individualized SQLite performance tracking for school material and study workflows.` | `Habitro Case Study` | Add user workflow, schema/data model, screenshots, lessons learned. Article + SoftwareSourceCode schema. P2. |
| `/papers/observer-receiver-model/` | Paper summary page. | Dedicated route for an external Google Doc. | Visible page is project gallery; paper text is not visible natively. | Draft paper summary and author context. | `Observer-Receiver Model | Draft Consciousness Paper by Marton Vegh` | `Summary page for Marton Vegh's Observer-Receiver Model draft paper, with context, abstract, author information, and link to the full document.` | `Observer-Receiver Model` | Add abstract, status, table of contents, citation/export link, related papers. Article schema. P2. |

## E. Technical SEO Report

Verified positives:

- `https://marton.top/` returned 200.
- `https://www.marton.top/` returned 301 to `https://marton.top/`.
- `http://marton.top/` returned 301 to `https://marton.top/`.
- HTTPS was active and Netlify served HSTS.
- All 13 inspected `marton.top` routes returned 200.
- Internal links found in the static SEO sections resolved to 200.
- Visible external links checked from rendered pages resolved to 200, including GitHub profile, ORCID, CV Google Doc, project repos, and Google Docs paper links.

Verified problems:

- `robots.txt` and `sitemap.xml` currently advertise GitHub Pages URLs. The GitHub Pages URLs tested returned 404.
- Raw static HTML has GitHub Pages canonical, OG URL, Twitter image, and JSON-LD URLs.
- Rendered JavaScript fixes those tags to `marton.top`, but raw HTML remains wrong. This creates a split between no-JS crawlers/social parsers and Google-like rendered crawling.
- `DEFAULT_SITE_URL` in `src/seo.js` is `https://martonveghcode.github.io/portfolio`, and `scripts/generate-seo-files.mjs` uses `process.env.VITE_SITE_URL || DEFAULT_SITE_URL`.
- `src/SeoRouteContent.jsx` renders route-specific SEO copy inside `className="visually-hidden"`.
- `src/App.jsx` maps service routes to `page: "home"` and case-study/paper routes to `page: "projects"`, so the visible app is not route-specific.

Suggested implementation guidance:

```js
// src/seo.js
export const DEFAULT_SITE_URL = "https://marton.top";
```

Production build environment:

```bash
VITE_SITE_URL=https://marton.top npm run build
```

Add a deploy/build check:

```bash
rg "martonveghcode.github.io/portfolio" dist public index.html && exit 1
```

Better route strategy:

- Keep the current static route generation, but make the route content visible.
- Build explicit React views for service and case-study routes.
- Use normal anchors for visible internal navigation and enhance them with SPA navigation.
- If a route is not ready for visible content, either keep it out of the sitemap or apply `noindex` until it is useful.

Performance observations:

- Lighthouse homepage mobile: Performance 86, Accessibility 95, Best Practices 100, SEO 100. FCP 2.7s, LCP 3.2s, CLS 0.006, TBT 0ms, Speed Index 4.3s.
- Lighthouse `/who-am-i/` mobile: Performance 85, Accessibility 100, Best Practices 100, SEO 100. FCP 2.8s, LCP 3.4s, CLS 0, TBT 0ms, Speed Index 4.4s.
- Lighthouse estimated about 1.1s savings from render-blocking CSS/Google Fonts on both sampled pages.
- `/who-am-i/` had about 1,098 KiB estimated image-delivery savings, mainly from `divine-comedy.png`, profile JPGs, and external book-cover JPGs.
- Homepage touch-target failure came from many small `heatmap-day` buttons.

## F. Keyword and Content Opportunity Map

Do not treat these as exact search-volume recommendations. No paid keyword-volume or difficulty tool was available, so difficulty is qualitative.

| Keyword/topic | Intent group | Recommended target page | Current targeting | Funnel stage | Relative difficulty | Relevance | Priority |
|---|---|---|---|---|---|---|---|
| `Marton Vegh` | Branded | `/about/marton-vegh/`, `/` | Yes | Branded | Low | High | P0 |
| `Marton Vegh developer` | Branded/professional | `/about/marton-vegh/` | Partial | Branded | Low | High | P0 |
| `student developer portfolio` | Portfolio | `/` and `/projects/` | Partial | Awareness | Medium | High | P1 |
| `React frontend developer portfolio` | Service | `/services/frontend-react-development/` | Metadata only | Awareness/commercial | Medium/High | High | P1 |
| `React student scheduling app` | Case-study/problem | `/projects/homework-calendar/` | Metadata only | Evaluation | Low/Medium | High | P1 |
| `homework calendar React app` | Case-study/problem | `/projects/homework-calendar/` | Partial | Evaluation | Low/Medium | High | P1 |
| `Python automation portfolio` | Service | `/services/python-automation-analysis/` | Metadata only | Awareness | Medium | High | P1 |
| `Python portfolio analytics project` | Case-study | `/projects/portfolio-analytics-tool/` | Metadata only | Evaluation | Medium | High | P1 |
| `quantitative finance Python project` | Industry/informational | Portfolio Analytics case study plus article | Partial | Awareness/evaluation | High | High | P1 |
| `portfolio optimization Python project` | Informational/project | Proposed article + Portfolio Analytics | Partial | Awareness | High | High | P2 |
| `Python handwriting formatting tool` | Problem | `/projects/handwriting-formatting-pipeline/` | Metadata only | Evaluation | Low/Medium | Medium | P2 |
| `education software student tools` | Industry/niche | `/services/education-software-tools/` | Metadata only | Awareness | Medium | High | P1 |
| `daily learning system SQLite` | Case-study/problem | `/projects/habitro/` | Metadata only | Evaluation | Low | Medium | P2 |
| `math programming portfolio` | Niche | Proposed math/programming notes hub | Weak | Awareness | Medium | Medium | P3 |
| `math portfolio` | Broad/ambiguous | Not a primary target | Weak | Awareness | High and mismatched | Low/Medium | P3 |
| `Mallorca student developer` | Local/entity | `/about/marton-vegh/` | Partial | Branded/local | Low | Medium | P2 |
| `multilingual student developer` | Entity/professional | `/about/marton-vegh/` | Partial | Awareness | Low | Medium | P2 |
| `good portfolio example` | Broad informational | Proposed article: how this portfolio is built | None | Awareness | Very high | Low | P4 |

Content strategy recommendations:

| Proposed page/article | Search intent | Audience | Keyword theme | Supporting subtopics | Recommended internal links | Business value | Priority |
|---|---|---|---|---|---|---|---|
| `About Marton Vegh` professional profile | Branded/entity | Recruiters, academics | Marton Vegh developer | Location, languages, CV, ORCID, GitHub, focus areas | Home, Projects, Experience, CV | High trust | P0 |
| `Homework Calendar Case Study` | Problem/case study | Students, recruiters | React scheduling app | recurring lessons, Google Calendar export, state management, screenshots | React service, Education service, Projects | High proof | P1 |
| `Portfolio Analytics Tool Case Study` | Finance case study | Finance/quant audience | Python portfolio analytics | Sharpe, Sortino, efficient frontier, assumptions, charts | Python service, Projects | High strategic relevance | P1 |
| `Handwriting Formatting Pipeline Case Study` | Automation case study | Technical reviewers | Python workflow automation | pipeline steps, Unicode handling, output examples | Python service, Projects | Medium proof | P1 |
| `Education Software and Student Tools` | Service/niche | Recruiters, students | education software portfolio | scheduling, habit tracking, learning workflows | Homework, Habitro, React service | High differentiation | P1 |
| `What I Learned Building a Portfolio Analytics Tool in Python` | Informational | Finance learners/recruiters | portfolio optimization Python | data limitations, risk metrics, visualization | Portfolio Analytics case study | High expertise | P2 |
| `How I Built a React Homework Calendar` | Informational/case study | Developers/students | React calendar app | UX decisions, exports, recurrence, constraints | Homework case study | Medium/high | P2 |
| `Math and Programming Notes` hub | Topical authority | Academics, peers | math programming | probability, algorithms, finance math, proofs | Home, Finance pages | Medium long-term | P3 |
| `Reading and Research Papers` hub | Academic credibility | Academics/general public | student research papers | abstracts, status, citations, Google Doc links | Paper pages, About | Medium | P3 |
| `Privacy and Cookies` | Trust/legal | All visitors | privacy policy portfolio | cookies, Firebase/contact data, analytics | Footer, cookie banner | Trust/compliance | P1 |

## G. Competitor and Gap Analysis

Comparable sites and resources inspected through web search:

| Comparable | What they do better | What they do poorly or less relevant | Adaptable idea |
|---|---|---|---|
| Brittany Chiang portfolio | Very clear H1/positioning, visible About/Experience/Projects, strong external profile links, concise project proof. | One-page style can limit long-tail content depth. | Keep your visual personality, but make each skill and project obvious in visible sections. |
| Josh Comeau | Strong topical authority through long-form, useful content; clear audience focus for developers. | Less like a traditional student portfolio. | Turn your strongest projects into explanatory posts and case studies, not just cards. |
| Jeremy Kun, Math & Programming | Deep math/programming topical authority with posts, primers, and author identity. | Much more mature content footprint; not a recruiter portfolio template. | If math is a target, publish real math/programming notes rather than trying to rank for generic "math portfolio". |
| Patrick Mineault / xcorr | Clear researcher identity, about page, blog archive, publications/external profile consistency. | Researcher site, not a student developer portfolio. | For academic credibility, add native abstracts, paper status, author profile, and publication-style metadata. |
| Developer portfolio inspiration lists | They show market expectations: clear hero, 3-5 strong projects, professional proof, fast contact paths. | Many are design-inspiration lists, not SEO competitors. | Use them as conversion benchmarks, not keyword targets. |

Search opportunity notes:

- Broad searches like `math portfolio` are dominated by educational assessment/materials, not personal developer sites. This is a weak primary keyword unless you create math learning or proof-writing content.
- `good portfolio example` is very broad and dominated by large inspiration/list sites. It is not a realistic near-term ranking target for a small portfolio.
- Better opportunities are long-tail and proof-based: `React student scheduling app`, `Python portfolio analytics project`, `student developer portfolio finance`, `education software student tools`, and branded queries around `Marton Vegh`.

## H. Prioritized Action Plan

### Immediate fixes: first 7 days

| Task | Specific action | Relevant URL | Impact | Effort | Role | Dependencies | Success metric |
|---|---|---|---|---|---|---|---|
| Fix production site URL | Set `VITE_SITE_URL=https://marton.top`; update `DEFAULT_SITE_URL`; rebuild and redeploy. | All | Critical | Low | Developer | Netlify/build env access | Raw HTML, sitemap, robots contain only `https://marton.top`. |
| Resubmit sitemap | Submit `https://marton.top/sitemap.xml` in Google Search Console and Bing Webmaster Tools. | `/sitemap.xml` | High | Low | Owner | GSC/Bing verification | Sitemap accepted, indexed URL count starts rising. |
| Add build guard | Fail CI/build if old GitHub domain appears in `dist` or `public`. | Repo | High | Low | Developer | Build script | `rg old-domain dist` returns no matches. |
| Decide About duplication | Differentiate `/about/marton-vegh/` or redirect/canonical it to `/who-am-i/`. | About/profile | Medium | Low/Medium | Content/dev | Content decision | No near-duplicate visible pages. |
| Fix questionable trust claim | Explain or remove Microsoft logo/claim. | `/` | Medium | Low | Owner | Proof decision | Homepage claim is verifiable or removed. |
| Add privacy page | Add privacy/cookie policy and link from footer/banner. | `/privacy/` | Medium | Low | Owner/dev | Policy text | Page live and linked. |

### Short-term improvements: first 30 days

| Task | Specific action | Relevant URL | Impact | Effort | Role | Dependencies | Success metric |
|---|---|---|---|---|---|---|---|
| Visible service pages | Build real visible pages for React, Python, Education. | `/services/*` | High | Medium | Developer/content | Page templates | Rendered H1/content matches route intent. |
| Visible case-study pages | Build case-study templates for top 4 projects. | `/projects/*` | High | Medium/High | Developer/content | Screenshots/details | Each case study has problem, role, process, outcome, links. |
| Convert nav buttons to anchors | Use crawlable internal `<a href>` for visible navigation. | Global nav | Medium | Medium | Developer | Routing implementation | Rendered DOM has internal anchors for major pages. |
| Improve image delivery | Convert large JPG/PNG to WebP/AVIF, set sizes/dimensions, localize critical external images. | `/who-am-i/` | Medium | Medium | Developer | Image processing | Lighthouse image savings reduced materially. |
| Rewrite key metadata | Shorten long titles and align descriptions to visible content. | All top routes | Medium | Low | SEO/content | Route content decisions | Titles/descriptions are unique and accurate. |

### Medium-term work: 2-3 months

| Task | Specific action | Relevant URL | Impact | Effort | Role | Dependencies | Success metric |
|---|---|---|---|---|---|---|---|
| Add finance/math content cluster | Publish 3-5 articles tied to portfolio analytics, probability, and quant learning. | Proposed `/notes/` or `/articles/` | Medium/High | High | Content | Time/research | Search Console impressions for finance/math topics. |
| Native paper summaries | Create native abstracts/status pages for Google Docs papers. | `/papers/*` | Medium | Medium | Content/dev | Paper summaries | Paper pages receive impressions and external clicks. |
| Add project proof | Add charts, screenshots, code excerpts, limitations, and measurable outcomes. | Case studies | High | Medium | Content/dev | Project data | Recruiter session engagement and case-study clicks improve. |
| Improve trust profile | Add LinkedIn if appropriate, CV PDF export, consistent bio across GitHub/ORCID/site. | About/global | Medium | Low/Medium | Owner | Profiles | Branded search result looks consistent. |

### Longer-term strategy: 3-6 months

| Task | Specific action | Relevant URL | Impact | Effort | Role | Dependencies | Success metric |
|---|---|---|---|---|---|---|---|
| Build topical authority | Publish one high-quality note/case study per month. | Articles/projects | High long-term | High | Owner/content | Editorial calendar | Growth in non-branded impressions and backlinks. |
| Add real analytics loop | Track contact clicks, CV clicks, GitHub clicks, case-study reads. | All | High | Medium | Developer | Analytics choice/privacy | Monthly SEO report includes traffic and conversions. |
| Earn external citations | Link portfolio from GitHub READMEs, ORCID, LinkedIn, project docs, academic profiles where appropriate. | External | High | Medium | Owner | Profile updates | More referring pages and stronger branded search. |
| Consider localized URLs | Only if maintaining real translations, create `/es/`, `/fr/`, etc. with hreflang. | Future language pages | Medium | High | Dev/content | Translation quality | Separate language URLs indexed correctly. |

## I. Measurement Plan

Baseline to establish now:

- Google Search Console: indexed pages, submitted sitemap status, Pages report, Queries, Countries, Devices, Discover if present, Core Web Vitals if enough field data exists.
- Bing Webmaster Tools: sitemap status, crawl/index coverage, SEO reports.
- Lighthouse/PageSpeed Insights: homepage, `/projects/`, `/about/marton-vegh/`, `/who-am-i/`, and each major case study after fixes.
- Crawl check: all sitemap URLs return 200, self-canonicalize to `marton.top`, and contain matching title/H1/description.
- Analytics: sessions, engaged sessions, case-study views, CV clicks, GitHub clicks, ORCID clicks, contact form opens/submits, mailto/Gmail clicks.
- Conversion events: `contact_open`, `contact_submit_success`, `cv_click`, `github_profile_click`, `project_repo_click`, `case_study_view`, `paper_click`.

Search Console reports to monitor:

- Pages: "Indexed", "Crawled - currently not indexed", "Alternate page with proper canonical tag", "Duplicate without user-selected canonical".
- Sitemaps: submitted URL count and discovered URLs.
- Performance: branded vs non-branded queries, country/device mix, top pages, CTR.
- Core Web Vitals: LCP, INP, CLS URL groups when field data becomes available.

Reporting frequency:

- First month after fixes: weekly technical/indexing check.
- Months 2-3: biweekly content/performance review.
- After stable baseline: monthly SEO report.

Indicators the work is succeeding:

- `site:marton.top` shows the intended subpages with `marton.top` URLs, not old GitHub URLs.
- Search Console impressions increase for branded, project, React, Python, and finance long-tail queries.
- Case-study pages receive impressions and clicks.
- CV/GitHub/contact clicks rise from relevant pages.
- Lighthouse LCP improves closer to or below 2.5s on mobile lab runs.
- No old-domain URLs appear in raw HTML, sitemap, robots, or schema.

## J. Sources and Methodology

### Pages inspected

- `https://marton.top/`
- `https://marton.top/projects/`
- `https://marton.top/experience/`
- `https://marton.top/who-am-i/`
- `https://marton.top/about/marton-vegh/`
- `https://marton.top/services/frontend-react-development/`
- `https://marton.top/services/python-automation-analysis/`
- `https://marton.top/services/education-software-tools/`
- `https://marton.top/projects/homework-calendar/`
- `https://marton.top/projects/handwriting-formatting-pipeline/`
- `https://marton.top/projects/portfolio-analytics-tool/`
- `https://marton.top/projects/habitro/`
- `https://marton.top/papers/observer-receiver-model/`
- `https://marton.top/robots.txt`
- `https://marton.top/sitemap.xml`

### Tools and methods used

- PDF extraction of the supplied guide with `pypdf`.
- HTTP status checks with `curl.exe`.
- Static crawl with Python `requests` and `BeautifulSoup`.
- Rendered DOM checks with headless Chrome `--dump-dom`.
- Lighthouse mobile lab reports saved to `.codex/lighthouse-home.json` and `.codex/lighthouse-who-am-i.json`.
- Local source inspection with `rg`.
- Web search for current official guidance, research sources, comparable portfolio sites, and search-intent patterns.

### Important limitations

- No access to Google Search Console, Bing Webmaster Tools, analytics, backlink data, or paid keyword tools.
- No precise search-volume or keyword-difficulty numbers were used.
- Lighthouse data is lab data, not real-user CrUX field data.
- The live deployed bundle contains at least one asset/content item not present in this checkout (`/company-logos/microsoft.svg` and the Microsoft logo section), so implementation recommendations should be verified against the actual deployment source.
- Manual device testing, screen reader testing, and legal review of privacy/cookie text are still required.

### Sources consulted

Official search-engine and web platform guidance:

- Google SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google Search Essentials: https://developers.google.com/search/docs/essentials
- Google helpful, reliable, people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google canonical URL guidance: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- Google JavaScript SEO basics: https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- Google title links: https://developers.google.com/search/docs/appearance/title-link
- Google snippets/meta descriptions: https://developers.google.com/search/docs/appearance/snippet
- Google image SEO: https://developers.google.com/search/docs/appearance/google-images
- Google structured data intro: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- Google ProfilePage structured data: https://developers.google.com/search/docs/appearance/structured-data/profile-page
- Bing Webmaster Guidelines: https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a
- Bing sitemap guidance: https://blogs.bing.com/webmaster/May-2016/Sitemaps-%E2%80%93-4-Basics-to-Get-You-Started
- Web Vitals overview: https://web.dev/articles/vitals
- Largest Contentful Paint: https://web.dev/articles/lcp
- Google Core Web Vitals and Search: https://developers.google.com/search/docs/appearance/core-web-vitals
- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- WAI headings tutorial: https://www.w3.org/WAI/tutorials/page-structure/headings/
- W3C writing for accessibility: https://www.w3.org/WAI/tips/writing/
- MDN heading elements: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements
- Schema.org WebPage: https://schema.org/WebPage
- Schema.org Person: https://schema.org/Person
- Schema.org BreadcrumbList: https://schema.org/BreadcrumbList
- Schema.org ProfilePage: https://schema.org/ProfilePage
- Schema.org SoftwareSourceCode: https://schema.org/SoftwareSourceCode

Research and industry evidence:

- Website design and user engagement literature review: https://pmc.ncbi.nlm.nih.gov/articles/PMC4974011/
- Web site usability, design, and performance metrics: https://pubsonline.informs.org/doi/10.1287/isre.13.2.151.88
- Information scent and web navigation research: https://dl.acm.org/doi/10.1145/3077136.3080817
- NN/g information foraging: https://www.nngroup.com/articles/information-foraging/
- NN/g trustworthy design: https://www.nngroup.com/articles/trustworthy-design/
- Trust and credibility in web-based information review: https://www.jmir.org/2017/6/e218/
- Baymard usability research overview: https://baymard.com/learn/website-usability

Comparable portfolio/reference sites:

- Brittany Chiang: https://brittanychiang.com/
- Josh Comeau effective portfolio: https://www.joshwcomeau.com/effective-portfolio/
- Josh Comeau about page: https://www.joshwcomeau.com/about-josh/
- Jeremy Kun Math and Programming: https://www.jeremykun.com/
- Jeremy Kun about page: https://www.jeremykun.com/about/
- Patrick Mineault about page: https://xcorr.net/about/
- Developer portfolio inspiration list: https://github.com/emmabostian/developer-portfolios
- Student portfolio examples: https://colorlib.com/wp/student-portfolios/
