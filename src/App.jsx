import { Fragment, startTransition, useEffect, useMemo, useRef, useState } from "react";
import ContributionHeatmap from "./ContributionHeatmap";
import ContactPanel from "./ContactPanel";
import { EXPERIENCE_CONTENT, PROJECTS_CONTENT } from "./content";
import CookieConsentBanner from "./CookieConsentBanner";
import { WHO_AM_I_CONTENT } from "./WHO_AM_I_CONTENT";
import heatmapConfig from "./heatmap";
import { PRIMARY_PAGE_PATHS, applyRouteMetadata, getRouteSeoContent, getRuntimeSiteUrl, normalizePath, resolveRoute } from "./seo";
import { CV_LINKS, LANGUAGE_OPTIONS, PAGES, PROFILE, translations } from "./siteData";

const PROJECT_DISPLAY_ORDER = ["ti-nspire-cxii-custom-keyboard-remap", "macro-recorder-plus", "portfolio-analytics-tool", "handwriting-pipeline", "habitro", "calendar"];
const PROJECT_DISPLAY_RANK = new Map(PROJECT_DISPLAY_ORDER.map((id, index) => [id, index]));
const CASE_STUDY_PATHS = {
  calendar: "/projects/homework-calendar/",
  "handwriting-pipeline": "/projects/handwriting-formatting-pipeline/",
  "portfolio-analytics-tool": "/projects/portfolio-analytics-tool/",
  habitro: "/projects/habitro/",
};
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PROFILE.email)}`;
const DEFAULT_HEATMAP_RANGE_DAYS = 365;

function getRollingHeatmapStartDate(maxDate, dayCount = DEFAULT_HEATMAP_RANGE_DAYS) {
  const startDate = new Date(maxDate);
  startDate.setHours(0, 0, 0, 0);
  startDate.setDate(startDate.getDate() - Math.max(0, dayCount - 1));
  return startDate;
}

function SiteNav({ page, onNavigate, onOpenContactPanel, language, onLanguageChange, theme, onToggleTheme, cvLink, copy, isMobile }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const ui = copy.ui ?? translations.en.ui;

  function handleNavClick(event, nextPage) {
    event.preventDefault();
    onNavigate(nextPage);
  }

  function handleMobileNavigate(event, nextPage) {
    handleNavClick(event, nextPage);
    setIsMobileMenuOpen(false);
  }

  function handleMobileContactOpen() {
    onOpenContactPanel();
    setIsMobileMenuOpen(false);
  }

  if (isMobile) {
    return (
      <header className="site-nav site-nav--mobile">
        <div className="site-nav__inner site-nav__inner--mobile">
          <div className="brand">
            <span className="brand__name">{PROFILE.name}</span>
            <span className="brand__meta">{PROFILE.location}</span>
          </div>

          <div className="site-nav__mobile-toolbar">
            <button type="button" className="nav-action" onClick={handleMobileContactOpen}>
              {copy.getInTouch}
            </button>
            <button
              type="button"
              className="nav-action"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-panel"
              onClick={() => setIsMobileMenuOpen((current) => !current)}
            >
              {isMobileMenuOpen ? ui.close : ui.menu}
            </button>
          </div>

          <div
            id="mobile-nav-panel"
            className={`site-nav__mobile-panel ${isMobileMenuOpen ? "is-open" : ""}`}
          >
            <nav className="site-nav__mobile-links" aria-label={ui.primaryNavLabel}>
              {PAGES.map((key) => (
                <a
                  href={PRIMARY_PAGE_PATHS[key] ?? "/"}
                  key={key}
                  className={`nav-tab ${page === key ? "nav-tab--active" : ""}`}
                  onClick={(event) => handleMobileNavigate(event, key)}
                >
                  {copy.nav[key]}
                </a>
              ))}
            </nav>

            <div className="site-nav__mobile-actions">
              <a className="nav-action" href={PROFILE.githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="nav-action" href={GMAIL_COMPOSE_URL} target="_blank" rel="noreferrer">
                Gmail
              </a>
              <a className="nav-action" href={cvLink} target="_blank" rel="noreferrer">
                CV
              </a>
              <a className="nav-action" href="https://orcid.org/0009-0004-2687-8812" target="_blank" rel="noreferrer">
                ORCID
              </a>
              <button type="button" className="theme-toggle" onClick={onToggleTheme} aria-label={ui.themeToggleLabel}>
                {theme === "dark" ? ui.themeDark : ui.themeLight}
              </button>
            </div>

            <div className="site-nav__mobile-meta">
              <div className="language-switch" aria-label={ui.languageLabel}>
                {LANGUAGE_OPTIONS.map((option) => (
                  <button
                    type="button"
                    key={option.code}
                    className={`language-chip ${language === option.code ? "language-chip--active" : ""}`}
                    onClick={() => onLanguageChange(option.code)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="site-nav">
      <div className="site-nav__inner">
        <div className="brand">
          <span className="brand__name">{PROFILE.name}</span>
          <span className="brand__meta">{PROFILE.location}</span>
        </div>

        <nav className="site-nav__links" aria-label={ui.primaryNavLabel}>
          {PAGES.map((key) => (
            <a
              href={PRIMARY_PAGE_PATHS[key] ?? "/"}
              key={key}
              className={`nav-tab ${page === key ? "nav-tab--active" : ""}`}
              onClick={(event) => handleNavClick(event, key)}
            >
              {copy.nav[key]}
            </a>
          ))}
          <button type="button" className="nav-tab" onClick={onOpenContactPanel}>
            {copy.getInTouch}
          </button>
        </nav>

        <div className="site-nav__actions">
          <a className="nav-action" href={PROFILE.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="nav-action" href={GMAIL_COMPOSE_URL} target="_blank" rel="noreferrer">
            Gmail
          </a>
          <a className="nav-action" href={cvLink} target="_blank" rel="noreferrer">
            CV
          </a>
          <a className="nav-action" href="https://orcid.org/0009-0004-2687-8812" target="_blank" rel="noreferrer">
            ORCID
          </a>
          <button type="button" className="theme-toggle" onClick={onToggleTheme} aria-label={ui.themeToggleLabel}>
            {theme === "dark" ? ui.themeDark : ui.themeLight}
          </button>
          <div className="language-switch" aria-label={ui.languageLabel}>
            {LANGUAGE_OPTIONS.map((option) => (
              <button
                type="button"
                key={option.code}
                className={`language-chip ${language === option.code ? "language-chip--active" : ""}`}
                onClick={() => onLanguageChange(option.code)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

function SectionHeader({ eyebrow, title, action }) {
  return (
    <div className="section-header">
      <div>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
      </div>
      {action ? <div className="section-header__action">{action}</div> : null}
    </div>
  );
}

function ProjectCard({ project, copy, compact = false }) {
  return (
    <article className={`project-card ${compact ? "project-card--compact" : ""}`}>
      <div className={`project-media ${project.image?.src ? "" : "project-media--empty"}`}>
        {project.image?.src ? (
          <img
            src={project.image.src}
            alt={project.image.alt || project.title}
            width={project.image.width}
            height={project.image.height}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />
        ) : (
          <div className="project-media__fallback">
            <span className="eyebrow">{project.tech[0] ?? copy.projectsTitle}</span>
            <strong>{project.title}</strong>
          </div>
        )}
      </div>

      <div className="project-card__body">
        <div className="card-copy">
          <h3>{project.title}</h3>
          <p className="muted">{project.summary}</p>
        </div>

        <div className="card-actions">
          {project.caseStudyPath ? (
            <a className="inline-link" href={project.caseStudyPath}>
              Case study
            </a>
          ) : null}
          {project.links.live ? (
            <a className="inline-link" href={project.links.live} target="_blank" rel="noreferrer">
              {copy.links.live}
            </a>
          ) : null}
          {project.links.github ? (
            <a className="inline-link" href={project.links.github} target="_blank" rel="noreferrer">
              {copy.links.github}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function ExperienceTimeline({ items, compact = false }) {
  return (
    <div className={`timeline ${compact ? "timeline--compact" : ""}`}>
      {items.map((item) => (
        <article key={item.id} className="timeline-item">
          <span className="timeline-item__period">{item.period}</span>
          <div className="timeline-item__card">
            <h3>{item.title}</h3>
            <p className="muted">{item.detail}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function MediaCard({ item, detailKey, mediaOrientation = "portrait" }) {
  const detail = item[detailKey];
  const imageSizes = mediaOrientation === "landscape"
    ? "(max-width: 760px) 100vw, 520px"
    : "(max-width: 760px) 100vw, 320px";

  return (
    <article className={`book-card ${mediaOrientation === "landscape" ? "book-card--landscape" : ""}`}>
      <div className={`book-card__cover ${mediaOrientation === "landscape" ? "book-card__cover--landscape" : ""}`}>
        {item.cover?.src ? (
          <img
            src={item.cover.src}
            srcSet={item.cover.srcSet}
            sizes={imageSizes}
            alt={item.cover.alt || item.title}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />
        ) : (
          <div className="book-card__fallback">{item.title}</div>
        )}
      </div>
      <div className="book-card__body">
        <p className="eyebrow">#{item.rank}</p>
        <h3>{item.title}</h3>
        {item.subtitle ? <p className="small muted">{item.subtitle}</p> : null}
        {detail ? <p className="muted">{detail}</p> : null}
      </div>
    </article>
  );
}

function FavoriteCollectionAccordion({ title, items, detailKey, mediaOrientation = "portrait" }) {
  const previewItems = items.slice(0, 3);
  const [isOpen, setIsOpen] = useState(false);
  const isLandscape = mediaOrientation === "landscape";
  const previewSizes = isLandscape
    ? "(max-width: 520px) 100vw, (max-width: 760px) 33vw, 280px"
    : "(max-width: 520px) 100vw, (max-width: 760px) 33vw, 220px";

  return (
    <section className={`favorite-books-module ${isOpen ? "is-open" : ""} ${isLandscape ? "favorite-books-module--landscape" : ""}`}>
      <button
        type="button"
        className="favorite-books-module__summary"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <div className="favorite-books-module__header">
          <h2>{title}</h2>
        </div>

        <div className="favorite-books-module__preview-shell">
          <div className="favorite-books-module__preview">
            {previewItems.map((item) => (
              <div key={item.id} className="favorite-books-module__preview-item">
                <div className={`favorite-books-module__preview-frame ${mediaOrientation === "landscape" ? "favorite-books-module__preview-frame--landscape" : ""}`}>
                  {item.cover?.src ? (
                    <img
                      src={item.cover.src}
                      srcSet={item.cover.srcSet}
                      sizes={previewSizes}
                      alt={item.cover.alt || item.title}
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                    />
                  ) : (
                    <div className="book-card__fallback">{item.title}</div>
                  )}
                  <span className="favorite-books-module__preview-rank">#{item.rank}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </button>

      <div className="favorite-books-module__content">
        <div className="favorite-books-module__inner">
          <div className={`books-grid books-grid--favorite ${mediaOrientation === "landscape" ? "books-grid--landscape" : ""}`}>
            {items.map((item) => (
              <MediaCard
                key={item.id}
                item={item}
                detailKey={detailKey}
                mediaOrientation={mediaOrientation}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfileTextAccordion({ title, paragraphs, quote, quoteSource, isOpen, onToggle }) {
  return (
    <section className={`favorite-books-module favorite-books-module--text ${isOpen ? "is-open" : ""}`}>
      <button
        type="button"
        className="favorite-books-module__summary favorite-books-module__summary--text"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <div className="favorite-books-module__header">
          <h3>{title}</h3>
        </div>
      </button>

      <div className="favorite-books-module__content favorite-books-module__content--text">
        <div className="favorite-books-module__inner favorite-books-module__inner--text">
          <div className="prose-card__accordion-copy">
            {paragraphs.map((paragraph, index) => (
              <Fragment key={`profile-story-${index}`}>
                <p className="muted">{paragraph}</p>
                {quote && index === 0 ? (
                  <blockquote className="prose-card__quote">
                    <p>{quote}</p>
                    {quoteSource ? <cite>{quoteSource}</cite> : null}
                  </blockquote>
                ) : null}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AppBackground() {
  return (
    <div className="app-background" aria-hidden="true">
      <div className="app-background__container" />
    </div>
  );
}

function IndustryContributions() {
  return (
    <section className="industry-contributions" aria-labelledby="industry-contributions-title">
      <h2 id="industry-contributions-title" className="industry-contributions__title">
        Contributor to industry leading projects for
      </h2>
      <div className="industry-contributions__logo-line" aria-label="Industry leading project logos">
        <a
          className="industry-contributions__logo-link"
          href="https://www.microsoft.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Microsoft"
        >
          <img src="/company-logos/microsoft.svg" alt="Microsoft" width="238" height="54" loading="lazy" decoding="async" />
        </a>
      </div>
    </section>
  );
}

function HomePage({ copy, heatmapProps }) {
  return (
    <main className="site-main site-main--home">
      <section className="hero">
        <div className="hero-card">
          <p className="eyebrow">{copy.heroTagline}</p>
          <h1>{PROFILE.name}</h1>
          <p className="hero-description">{copy.aboutBlurb}</p>
        </div>

        <div className="hero-rail">
          <article className="surface-card heatmap-card">
            <ContributionHeatmap
              {...heatmapProps}
              username={PROFILE.githubHandle}
              cellSize={16}
              minCellSize={10}
              fitToWidth
            />
          </article>
          <IndustryContributions />
        </div>
      </section>
    </main>
  );
}

function ProjectsPage({ copy, projects }) {
  return (
    <main className="site-main">
      <section className="page-intro page-intro--curved">
        <h1>{copy.projectsTitle}</h1>
      </section>

      <div className="project-grid project-grid--full">
        {projects.map((project) => <ProjectCard key={project.id} project={project} copy={copy} />)}
      </div>
    </main>
  );
}

function ExperiencePage({ copy, experience }) {
  return (
    <main className="site-main site-main--reading">
      <section className="page-intro"><h1>{copy.experienceTitle}</h1></section>
      <ExperienceTimeline items={experience} />
    </main>
  );
}

function WhoAmIPage({ copy, whoAmI }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [showProfileImage, setShowProfileImage] = useState(true);
  const hideProfileImageTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (hideProfileImageTimeoutRef.current) {
        window.clearTimeout(hideProfileImageTimeoutRef.current);
      }
    };
  }, []);

  function handleProfileToggle() {
    if (hideProfileImageTimeoutRef.current) {
      window.clearTimeout(hideProfileImageTimeoutRef.current);
      hideProfileImageTimeoutRef.current = null;
    }

    if (isProfileOpen) {
      setIsProfileOpen(false);
      hideProfileImageTimeoutRef.current = window.setTimeout(() => {
        setShowProfileImage(true);
        hideProfileImageTimeoutRef.current = null;
      }, 220);
      return;
    }

    setIsProfileOpen(true);
    hideProfileImageTimeoutRef.current = window.setTimeout(() => {
      setShowProfileImage(false);
      hideProfileImageTimeoutRef.current = null;
    }, 90);
  }

  return (
    <main className="site-main">
      <section className="page-intro"><h1>{copy.whoAmITitle}</h1></section>
      <section className={`whoami-grid ${isProfileOpen ? "whoami-grid--profile-open" : ""}`}>
        <article className={`surface-card prose-card ${isProfileOpen ? "prose-card--profile-open" : ""}`}>
          <div className="prose-card__body">
            <div className="prose-card__content">
              <SectionHeader title={copy.aboutTitle} />
              <ProfileTextAccordion
                title={whoAmI.bioAccordionTitle}
                paragraphs={whoAmI.bioParagraphs}
                quote={whoAmI.bioQuote}
                quoteSource={whoAmI.bioQuoteSource}
                isOpen={isProfileOpen}
                onToggle={handleProfileToggle}
              />
            </div>
            {showProfileImage ? (
              <div className="prose-card__media-shell">
                <div className="prose-media">
                  <img
                    src={PROFILE.profileImage}
                    alt="Portrait of Marton Vegh"
                    width="748"
                    height="1625"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                </div>
              </div>
            ) : null}
          </div>
        </article>
        <article className="surface-card achievement-card">
          <SectionHeader title={copy.sportsAchievementsTitle} />
          <div className="achievement-media">
            <img
              src={PROFILE.sportsImage}
              alt="Canoe sprint"
              width="1200"
              height="1600"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
          </div>
          <ul className="achievement-list">
            {whoAmI.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
          </ul>
        </article>
      </section>
      <section className="content-section">
        <FavoriteCollectionAccordion
          title={copy.favoriteBooksTitle}
          items={whoAmI.favoriteBooks}
          detailKey="note"
        />
      </section>
      <section className="content-section">
        <FavoriteCollectionAccordion
          title={copy.favoritePaintingsTitle}
          items={whoAmI.favoritePaintings}
          detailKey="note"
          mediaOrientation="landscape"
        />
      </section>
    </main>
  );
}

const ROUTE_TYPE_LABELS = {
  service: "Portfolio focus",
  "case-study": "Case study",
  profile: "Profile",
  webpage: "Site information",
};

function RelatedRouteLinks({ links }) {
  if (!links.length) return null;

  return (
    <section className="route-page__related" aria-label="Related pages">
      <h2>Related pages</h2>
      <div className="route-link-grid">
        {links.map((link) => (
          <a className="route-link-card" href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}

function RouteDetailPage({ route, copy }) {
  const content = getRouteSeoContent(route);
  const eyebrow = ROUTE_TYPE_LABELS[route.type] ?? "Portfolio page";
  const isCaseStudy = route.type === "case-study";
  const isPaper = route.type === "paper";
  const isProfile = route.type === "profile";
  const isPrivacy = route.id === "privacy";
  const externalLink = content.externalLink;

  return (
    <main className="site-main route-page">
      <section className="page-intro route-page__intro">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{content.heading}</h1>
        <p>{route.description}</p>
      </section>

      {route.image ? (
        <section className="route-page__media-shell" aria-label={`${content.heading} image`}>
          <img
            src={route.image}
            alt={content.heading}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />
        </section>
      ) : null}

      <section className="surface-card route-page__body">
        <div className="route-page__copy">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {route.tech?.length ? (
          <div className="chip-list" aria-label="Technologies used">
            {route.tech.map((tech) => (
              <span className="chip" key={tech}>{tech}</span>
            ))}
          </div>
        ) : null}

        {isCaseStudy ? (
          <div className="route-page__summary-grid">
            <article>
              <h2>Problem</h2>
              <p>The project is framed around a concrete workflow problem instead of a generic portfolio demo.</p>
            </article>
            <article>
              <h2>Role</h2>
              <p>Independent build by {PROFILE.name}, covering problem framing, implementation, testing, and documentation.</p>
            </article>
            <article>
              <h2>Evidence</h2>
              <p>The project links back to related services and, where available, the public repository for code review.</p>
            </article>
          </div>
        ) : null}

        {isPrivacy ? (
          <div className="route-page__summary-grid">
            <article>
              <h2>Contact form</h2>
              <p>Submitted name, email address, and message content are used to respond to the message.</p>
            </article>
            <article>
              <h2>Preferences</h2>
              <p>The cookie banner stores the selected preference locally and may save basic page/browser context with that choice.</p>
            </article>
            <article>
              <h2>External links</h2>
              <p>GitHub, ORCID, Google Docs, Gmail, and repository links open external services with separate privacy policies.</p>
            </article>
          </div>
        ) : null}

        <div className="card-actions">
          {route.repo ? (
            <a className="inline-link" href={route.repo} target="_blank" rel="noreferrer">
              {copy.links.github}
            </a>
          ) : null}
          {externalLink ? (
            <a className="inline-link" href={externalLink.href} target="_blank" rel="noreferrer">
              {isPaper ? copy.links.paper : externalLink.label}
            </a>
          ) : null}
          {isProfile ? (
            <>
              <a className="inline-link" href={PROFILE.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
              <a className="inline-link" href={CV_LINKS.en} target="_blank" rel="noreferrer">CV</a>
              <a className="inline-link" href={`mailto:${PROFILE.email}`}>Email</a>
            </>
          ) : null}
        </div>
      </section>

      <RelatedRouteLinks links={content.links} />
    </main>
  );
}

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  const savedTheme = window.localStorage.getItem("portfolio-theme");
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
  return "light";
}

function getInitialPathname() {
  if (typeof window === "undefined") return PRIMARY_PAGE_PATHS.home;
  return normalizePath(window.location.pathname);
}

function getInitialIsMobile() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 760px)").matches;
}

export default function App() {
  const [language, setLanguage] = useState("en");
  const [pathname, setPathname] = useState(getInitialPathname);
  const [theme, setTheme] = useState(getInitialTheme);
  const [isMobile, setIsMobile] = useState(getInitialIsMobile);
  const [contactPanelOpenSignal, setContactPanelOpenSignal] = useState(0);
  const route = useMemo(() => resolveRoute(pathname), [pathname]);
  const page = route.page;

  const copy = translations[language] ?? translations.en;
  const cvLink = CV_LINKS[language] ?? CV_LINKS.en;

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const runtimeSiteUrl = getRuntimeSiteUrl();
    applyRouteMetadata(route, runtimeSiteUrl);
  }, [route]);

  useEffect(() => {
    document.getElementById("seo-content")?.remove();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const handlePopState = () => {
      setPathname(normalizePath(window.location.pathname));
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const mediaQuery = window.matchMedia("(max-width: 760px)");
    const handleChange = (event) => {
      setIsMobile(event.matches);
    };

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [route.canonicalPath]);

  const heatmapProps = useMemo(() => {
    const maxDate = heatmapConfig.maxDate ?? new Date();
    const rangeDays = heatmapConfig.rangeDays ?? DEFAULT_HEATMAP_RANGE_DAYS;

    return {
      ...heatmapConfig,
      minDate: heatmapConfig.minDate ?? getRollingHeatmapStartDate(maxDate, rangeDays),
      maxDate,
    };
  }, []);

  const localizedProjects = useMemo(() => PROJECTS_CONTENT.map((project) => {
    const projectTranslations = project.translations ?? {};
    const locale = projectTranslations[language] ?? projectTranslations.en ?? {};
    return {
      id: project.id,
      image: project.image ?? { src: "", alt: "" },
      tech: project.tech ?? [],
      links: project.links ?? {},
      caseStudyPath: CASE_STUDY_PATHS[project.id],
      title: locale.title ?? projectTranslations.en?.title ?? project.title ?? "",
      summary: locale.summary ?? projectTranslations.en?.summary ?? project.summary ?? "",
    };
  }).sort((left, right) => {
    const leftRank = PROJECT_DISPLAY_RANK.get(left.id) ?? Number.MAX_SAFE_INTEGER;
    const rightRank = PROJECT_DISPLAY_RANK.get(right.id) ?? Number.MAX_SAFE_INTEGER;
    return leftRank - rightRank;
  }), [language]);

  const localizedExperience = useMemo(() => EXPERIENCE_CONTENT.map((item) => {
    const experienceTranslations = item.translations ?? {};
    const locale = experienceTranslations[language] ?? experienceTranslations.en ?? {};
    return {
      id: item.id,
      period: item.period,
      title: locale.title ?? experienceTranslations.en?.title ?? item.title ?? "",
      detail: locale.detail ?? experienceTranslations.en?.detail ?? item.detail ?? "",
    };
  }), [language]);

  const localizedWhoAmI = useMemo(() => {
    const whoAmITranslations = WHO_AM_I_CONTENT.translations ?? {};
    const locale = whoAmITranslations[language] ?? whoAmITranslations.en ?? {};
    const favoriteBooks = (WHO_AM_I_CONTENT.favoriteBooks ?? []).slice().sort((a, b) => (a.rank ?? 0) - (b.rank ?? 0)).map((book) => {
      const bookTranslations = book.translations ?? {};
      const bookLocale = bookTranslations[language] ?? bookTranslations.en ?? {};
      return {
        id: book.id,
        rank: book.rank,
        cover: book.cover ?? {},
        title: bookLocale.title ?? bookTranslations.en?.title ?? "",
        subtitle: bookLocale.author ?? bookTranslations.en?.author ?? "",
        note: bookLocale.note ?? bookTranslations.en?.note ?? "",
      };
    });
    const favoritePaintings = (WHO_AM_I_CONTENT.favoritePaintings ?? []).slice().sort((a, b) => (a.rank ?? 0) - (b.rank ?? 0)).map((painting) => {
      const paintingTranslations = painting.translations ?? {};
      const paintingLocale = paintingTranslations[language] ?? paintingTranslations.en ?? {};
      return {
        id: painting.id,
        rank: painting.rank,
        cover: painting.cover ?? {},
        title: paintingLocale.title ?? paintingTranslations.en?.title ?? "",
        subtitle: paintingLocale.artist ?? paintingTranslations.en?.artist ?? "",
        note: paintingLocale.note ?? paintingTranslations.en?.note ?? "",
      };
    });
    const worstBooks = (WHO_AM_I_CONTENT.worstBooks ?? []).slice().sort((a, b) => (a.rank ?? 0) - (b.rank ?? 0)).map((book) => {
      const bookTranslations = book.translations ?? {};
      const bookLocale = bookTranslations[language] ?? bookTranslations.en ?? {};
      return {
        id: book.id,
        rank: book.rank,
        cover: book.cover ?? {},
        title: bookLocale.title ?? bookTranslations.en?.title ?? "",
        author: bookLocale.author ?? bookTranslations.en?.author ?? "",
        reason: bookLocale.reason ?? bookTranslations.en?.reason ?? "",
      };
    });
    return {
      paragraphs: locale.paragraphs ?? whoAmITranslations.en?.paragraphs ?? [],
      bioAccordionTitle: locale.bioAccordionTitle ?? whoAmITranslations.en?.bioAccordionTitle ?? "Read the full profile",
      bioParagraphs: locale.bioParagraphs ?? whoAmITranslations.en?.bioParagraphs ?? [],
      bioQuote: locale.bioQuote ?? whoAmITranslations.en?.bioQuote ?? "",
      bioQuoteSource: locale.bioQuoteSource ?? whoAmITranslations.en?.bioQuoteSource ?? "",
      achievements: locale.achievements ?? whoAmITranslations.en?.achievements ?? [],
      favoriteBooks,
      favoritePaintings,
      worstBooks,
    };
  }, [language]);

  function navigateToPath(nextPath) {
    const normalizedPath = normalizePath(nextPath);

    if (typeof window !== "undefined" && normalizePath(window.location.pathname) !== normalizedPath) {
      window.history.pushState({}, "", normalizedPath);
    }

    startTransition(() => {
      setPathname(normalizedPath);
    });
  }

  function handlePrimaryPageNavigate(nextPage) {
    navigateToPath(PRIMARY_PAGE_PATHS[nextPage] ?? PRIMARY_PAGE_PATHS.home);
  }

  function handleLanguageChange(nextLanguage) {
    startTransition(() => {
      setLanguage(nextLanguage);
    });
  }

  let pageView = (
    <HomePage
      copy={copy}
      heatmapProps={heatmapProps}
    />
  );

  if (page === "projects") pageView = <ProjectsPage copy={copy} projects={localizedProjects} />;
  if (page === "experience") pageView = <ExperiencePage copy={copy} experience={localizedExperience} />;
  if (page === "whoami") pageView = <WhoAmIPage copy={copy} whoAmI={localizedWhoAmI} />;
  if (["service", "case-study", "profile", "privacy"].includes(page)) {
    pageView = <RouteDetailPage route={route} copy={copy} />;
  }

  return (
    <div className="page-shell">
      <AppBackground />
      <SiteNav
        page={page}
        onNavigate={handlePrimaryPageNavigate}
        onOpenContactPanel={() => setContactPanelOpenSignal((current) => current + 1)}
        language={language}
        onLanguageChange={handleLanguageChange}
        theme={theme}
        onToggleTheme={() => setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"))}
        cvLink={cvLink}
        copy={copy}
        isMobile={isMobile}
      />
      {pageView}
      <CookieConsentBanner language={language} page={page} />
      <ContactPanel language={language} page={page} openSignal={contactPanelOpenSignal} isMobile={isMobile} copy={copy} />
    </div>
  );
}
