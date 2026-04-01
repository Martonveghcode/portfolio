import { useEffect, useMemo, useState } from "react";
import ContributionHeatmap from "./ContributionHeatmap";
import { EXPERIENCE_CONTENT, PAPERS_CONTENT, PROJECTS_CONTENT } from "./content";
import { WHO_AM_I_CONTENT } from "./WHO_AM_I_CONTENT";
import heatmapConfig from "./heatmap";
import { CV_LINKS, LANGUAGE_OPTIONS, PAGES, PROFILE, translations } from "./siteData";

function SiteNav({ page, onNavigate, language, onLanguageChange, theme, onToggleTheme, cvLink, copy }) {
  return (
    <header className="site-nav">
      <div className="site-nav__inner">
        <button type="button" className="brand" onClick={() => onNavigate("home")}>
          <span className="brand__name">{PROFILE.name}</span>
          <span className="brand__meta">{PROFILE.location}</span>
        </button>

        <nav className="site-nav__links" aria-label="Primary">
          {PAGES.map((key) => (
            <button
              type="button"
              key={key}
              className={`nav-tab ${page === key ? "nav-tab--active" : ""}`}
              onClick={() => onNavigate(key)}
            >
              {copy.nav[key]}
            </button>
          ))}
        </nav>

        <div className="site-nav__actions">
          <a className="nav-action" href={PROFILE.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="nav-action" href={cvLink} target="_blank" rel="noreferrer">
            CV
          </a>
          <a className="nav-action" href="https://orcid.org/0009-0004-2687-8812" target="_blank" rel="noreferrer">
            ORCID
          </a>
          <button type="button" className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? "Dark" : "Light"}
          </button>
          <div className="language-switch" aria-label="Language">
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
          <img src={project.image.src} alt={project.image.alt || project.title} loading="lazy" />
        ) : (
          <div className="project-media__fallback">
            <span className="eyebrow">{project.tech[0] ?? copy.projectsTitle}</span>
            <strong>{project.title}</strong>
          </div>
        )}
      </div>

      <div className="project-card__body">
        {project.tech.length ? (
          <div className="tag-row">
            {project.tech.map((tech) => (
              <span key={`${project.id}-${tech}`} className="tag">
                {tech}
              </span>
            ))}
          </div>
        ) : null}

        <div className="card-copy">
          <h3>{project.title}</h3>
          <p className="muted">{project.summary}</p>
        </div>

        <div className="card-actions">
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

function PaperCard({ paper, copy }) {
  return (
    <article className="text-card">
      <div className="status-row">
        {paper.status ? <span className="status-pill">{paper.status}</span> : null}
      </div>
      <div className="card-copy">
        <h3>{paper.title}</h3>
        <p className="muted">{paper.summary}</p>
      </div>
      {paper.link ? (
        <div className="card-actions">
          <a className="inline-link" href={paper.link} target="_blank" rel="noreferrer">
            {copy.links.paper}
          </a>
        </div>
      ) : null}
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

  return (
    <article className={`book-card ${mediaOrientation === "landscape" ? "book-card--landscape" : ""}`}>
      <div className={`book-card__cover ${mediaOrientation === "landscape" ? "book-card__cover--landscape" : ""}`}>
        {item.cover?.src ? (
          <img src={item.cover.src} alt={item.cover.alt || item.title} loading="lazy" />
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

  return (
    <section className={`favorite-books-module ${isOpen ? "is-open" : ""}`}>
      <button
        type="button"
        className="favorite-books-module__summary"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <div className="favorite-books-module__header">
          <h2>{title}</h2>
        </div>

        <div className="favorite-books-module__preview">
          {previewItems.map((item) => (
            <div key={item.id} className="favorite-books-module__preview-item">
              <div className={`favorite-books-module__preview-frame ${mediaOrientation === "landscape" ? "favorite-books-module__preview-frame--landscape" : ""}`}>
                {item.cover?.src ? (
                  <img src={item.cover.src} alt={item.cover.alt || item.title} loading="lazy" />
                ) : (
                  <div className="book-card__fallback">{item.title}</div>
                )}
                <span className="favorite-books-module__preview-rank">#{item.rank}</span>
              </div>
            </div>
          ))}
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

function AppBackground() {
  return (
    <div className="app-background" aria-hidden="true">
      <div className="app-background__container" />
    </div>
  );
}

function HomePage({ copy, heatmapProps }) {
  return (
    <main className="site-main site-main--home">
      <section className="hero">
        <div className="hero-card">
          <p className="eyebrow">{copy.heroTagline}</p>
          <h1>{PROFILE.name}</h1>
          <p className="hero-subtitle">{copy.heroSub}</p>
          <p className="hero-description">{copy.aboutBlurb}</p>
        </div>

        <div className="hero-rail">
          <article className="surface-card heatmap-card">
            <ContributionHeatmap
              {...heatmapProps}
              username={PROFILE.githubHandle}
              cellSize={12}
              onCellTap={(date, value) => {
                if (typeof heatmapProps.onCellTap === "function") heatmapProps.onCellTap(date, value);
              }}
            />
          </article>
        </div>
      </section>
    </main>
  );
}

function ProjectsPage({ copy, projects, papers }) {
  return (
    <main className="site-main">
      <section className="page-intro page-intro--curved">
        <h1>{copy.projectsTitle}</h1>
      </section>

      <div className="projects-stack">
        <details className="surface-card dropdown-card">
          <summary className="dropdown-summary">
            <span>{copy.papersTitle}</span>
          </summary>
          <div className="dropdown-panel">
            <div className="text-card-list">
              {papers.map((paper) => <PaperCard key={paper.id} paper={paper} copy={copy} />)}
            </div>
          </div>
        </details>

        <div className="project-grid project-grid--full">
          {projects.map((project) => <ProjectCard key={project.id} project={project} copy={copy} />)}
        </div>
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
  return (
    <main className="site-main">
      <section className="page-intro"><h1>{copy.whoAmITitle}</h1></section>
      <section className="whoami-grid">
        <article className="surface-card prose-card">
          <SectionHeader title={copy.aboutTitle} />
          <div className="prose">
            {whoAmI.paragraphs.map((paragraph, index) => <p key={`whoami-${index}`} className="muted">{paragraph}</p>)}
          </div>
          <div className="prose-media">
            <img src="https://i.ibb.co/v4NqTbzz/IMG-8888-1.jpg" alt="IMG 8888(1)" loading="lazy" />
          </div>
        </article>
        <article className="surface-card achievement-card">
          <SectionHeader title={copy.sportsAchievementsTitle} />
          <div className="achievement-media"><img src={PROFILE.sportsImage} alt="Canoe sprint" loading="lazy" /></div>
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

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  const savedTheme = window.localStorage.getItem("portfolio-theme");
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [language, setLanguage] = useState("en");
  const [page, setPage] = useState("home");
  const [theme, setTheme] = useState(getInitialTheme);

  const copy = translations[language] ?? translations.en;
  const cvLink = CV_LINKS[language] ?? CV_LINKS.en;

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [page]);

  const heatmapProps = useMemo(() => ({
    ...heatmapConfig,
    minDate: heatmapConfig.minDate ?? new Date(2025, 5, 14),
    maxDate: heatmapConfig.maxDate ?? new Date(),
  }), []);

  const localizedProjects = useMemo(() => PROJECTS_CONTENT.map((project) => {
    const projectTranslations = project.translations ?? {};
    const locale = projectTranslations[language] ?? projectTranslations.en ?? {};
    return {
      id: project.id,
      image: project.image ?? { src: "", alt: "" },
      tech: project.tech ?? [],
      links: project.links ?? {},
      title: locale.title ?? projectTranslations.en?.title ?? project.title ?? "",
      summary: locale.summary ?? projectTranslations.en?.summary ?? project.summary ?? "",
    };
  }), [language]);

  const localizedPapers = useMemo(() => PAPERS_CONTENT.map((paper) => {
    const paperTranslations = paper.translations ?? {};
    const locale = paperTranslations[language] ?? paperTranslations.en ?? {};
    return {
      id: paper.id,
      status: locale.status ?? paperTranslations.en?.status ?? paper.status ?? "",
      title: locale.title ?? paperTranslations.en?.title ?? paper.title ?? "",
      summary: locale.summary ?? paperTranslations.en?.summary ?? paper.summary ?? "",
      link: locale.link ?? paperTranslations.en?.link ?? paper.link ?? "",
    };
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
      achievements: locale.achievements ?? whoAmITranslations.en?.achievements ?? [],
      favoriteBooks,
      favoritePaintings,
      worstBooks,
    };
  }, [language]);

  let pageView = (
    <HomePage
      copy={copy}
      heatmapProps={heatmapProps}
    />
  );

  if (page === "projects") pageView = <ProjectsPage copy={copy} projects={localizedProjects} papers={localizedPapers} />;
  if (page === "papers") pageView = <ProjectsPage copy={copy} projects={localizedProjects} papers={localizedPapers} />;
  if (page === "experience") pageView = <ExperiencePage copy={copy} experience={localizedExperience} />;
  if (page === "whoami") pageView = <WhoAmIPage copy={copy} whoAmI={localizedWhoAmI} />;

  return (
    <div className="page-shell">
      <AppBackground />
      <SiteNav
        page={page}
        onNavigate={setPage}
        language={language}
        onLanguageChange={setLanguage}
        theme={theme}
        onToggleTheme={() => setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"))}
        cvLink={cvLink}
        copy={copy}
      />
      {pageView}
    </div>
  );
}
