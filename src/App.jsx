import { useEffect, useMemo, useState } from "react";
import { EXPERIENCE_CONTENT, PAPERS_CONTENT, PROJECTS_CONTENT } from "./content";
import heatmapConfig from "./heatmap";

const LANGUAGE_OPTIONS = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "fr", label: "FR" },
  { code: "de", label: "DE" },
];

const translations = {
  en: {
  nav: { home: "Home", projects: "Projects", papers: "Papers", experience: "Experience", whoami: "Who Am I" },
  heroTagline: "16 year-old developer",
  heroSub: "Focused on practical solutions that solve real problems.",
  aboutTitle: "Who I am",
  aboutBlurb:
    "Student developer studying in Spain with a passion for maths. Started programming recently by learning web design, moving onto more data-science oriented programming.",
  languagesTitle: "Languages",
  languagesList: [
    "Hungarian (native)",
    "English (fluent)",
    "Spanish (fluent)",
    "French (fluent)",
    "Catalan (learning)",
  ],
  stackTitle: "What I use",
  stackCoreLabel: "Core",
  stackLearningLabel: "Learning",
  passionsTitle: "Interests",
  passionsList: [
    "Automation",
    "Classical art",
    "Books",
    "Pure mathematics",
    "Programming and algorithms",
    "Sports",
  ],
  githubTitle: "GitHub heatmap",
  projectsTitle: "Projects",
  papersTitle: "Papers",
  experienceTitle: "Experience",
  whoAmITitle: "Who Am I",
  sportsAchievementsTitle: "Canoe sprint achievements",
  links: { live: "Live", github: "GitHub" },
},

es: {
  nav: { home: "Inicio", projects: "Proyectos", papers: "Papers", experience: "Experiencia", whoami: "Quien soy" },
  heroTagline: "Desarrollador de 16 años",
  heroSub: "Enfocado en soluciones prácticas que resuelven problemas reales.",
  aboutTitle: "Quién soy",
  aboutBlurb:
    "Estudiante desarrollador que estudia en España con pasión por las matemáticas. Empezó a programar recientemente aprendiendo diseño web y pasando luego a programación más orientada a ciencia de datos.",
  languagesTitle: "Idiomas",
  languagesList: [
    "Húngaro (nativo)",
    "Inglés (fluido)",
    "Español (fluido)",
    "Francés (fluido)",
    "Catalán (en aprendizaje)",
  ],
  stackTitle: "Qué uso",
  stackCoreLabel: "Núcleo",
  stackLearningLabel: "Aprendiendo",
  passionsTitle: "Intereses",
  passionsList: [
    "Automatización",
    "Arte clásico",
    "Libros",
    "Matemáticas puras",
    "Programación y algoritmos",
    "Deporte",
  ],
  githubTitle: "Heatmap de GitHub",
  projectsTitle: "Proyectos",
  papersTitle: "Papers",
  experienceTitle: "Experiencia",
  whoAmITitle: "Quien soy",
  sportsAchievementsTitle: "Logros en piraguismo de velocidad",
  links: { live: "Live", github: "GitHub" },
},

fr: {
  nav: { home: "Accueil", projects: "Projets", papers: "Papiers", experience: "Expérience", whoami: "Qui je suis" },
  heroTagline: "Développeur de 16 ans",
  heroSub: "Axé sur des solutions pratiques qui résolvent de vrais problèmes.",
  aboutTitle: "Qui je suis",
  aboutBlurb:
    "Étudiant développeur étudiant en Espagne avec une passion pour les mathématiques. A commencé la programmation récemment par le design web, puis s’est orienté vers une programmation plus axée sur la science des données.",
  languagesTitle: "Langues",
  languagesList: [
    "Hongrois (natif)",
    "Anglais (courant)",
    "Espagnol (courant)",
    "Français (courant)",
    "Catalan (en apprentissage)",
  ],
  stackTitle: "Ce que j’utilise",
  stackCoreLabel: "Noyau",
  stackLearningLabel: "Apprentissage",
  passionsTitle: "Intérêts",
  passionsList: [
    "Automatisation",
    "Art classique",
    "Livres",
    "Mathématiques pures",
    "Programmation et algorithmes",
    "Sport",
  ],
  githubTitle: "Heatmap GitHub",
  projectsTitle: "Projets",
  papersTitle: "Papiers",
  experienceTitle: "Expérience",
  whoAmITitle: "Qui je suis",
  sportsAchievementsTitle: "Palmares en canoe sprint",
  links: { live: "Live", github: "GitHub" },
},

de: {
  nav: { home: "Start", projects: "Projekte", papers: "Papers", experience: "Erfahrung", whoami: "Wer ich bin" },
  heroTagline: "16-jähriger Entwickler",
  heroSub: "Fokus auf praktische Lösungen, die reale Probleme lösen.",
  aboutTitle: "Wer ich bin",
  aboutBlurb:
    "Schüler-Entwickler, der in Spanien studiert und eine Leidenschaft für Mathematik hat. Hat kürzlich mit dem Programmieren begonnen, zunächst mit Webdesign und später mit stärker datenwissenschaftlich orientierter Programmierung.",
  languagesTitle: "Sprachen",
  languagesList: [
    "Ungarisch (Muttersprache)",
    "Englisch (fließend)",
    "Spanisch (fließend)",
    "Französisch (fließend)",
    "Katalanisch (lernend)",
  ],
  stackTitle: "Was ich nutze",
  stackCoreLabel: "Kern",
  stackLearningLabel: "Lernen",
  passionsTitle: "Interessen",
  passionsList: [
    "Automatisierung",
    "Klassische Kunst",
    "Bücher",
    "Reine Mathematik",
    "Programmierung und Algorithmen",
    "Sport",
  ],
  githubTitle: "GitHub-Heatmap",
  projectsTitle: "Projekte",
  papersTitle: "Papers",
  experienceTitle: "Erfahrung",
  whoAmITitle: "Wer ich bin",
  sportsAchievementsTitle: "Erfolge im Kanusprint",
  links: { live: "Live", github: "GitHub" },
},


};

const WHO_AM_I_CONTENT = {
  paragraphs: [
    "Marton Vegh (born 2009-04-04). Born in Budapest and lived there for seven years before moving to Mallorca nine years ago.",
    "Education: BIC (2016-2020), Lycee Francais de Palma (2020-2025), Aixa Llaut (2025-current). Lifelong into sports like swimming and football; started canoe sprint in 2018 for seven years and now training short- to medium-distance running (5k to 10k) without competing officially yet.",
  ],
  achievements: [
    "23x Mallorca champion",
    "8x Balearic champion",
    "Champion of Spain east zone",
    "1x 3rd in Spain (C1)",
    "2x 3rd in Spain (C2)",
  ],
};

const HEATMAP_COLORS = {
  blue: ["#0d152c", "#1d4ed8", "#2563eb", "#38bdf8", "#7dd3fc"],
  green: ["#0b2f26", "#1f6f43", "#22c55e", "#4ade80", "#86efac"],
};

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatDateKey(date) {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function alignToStartOfWeek(date, startWeekday = 1) {
  const jsStart = startWeekday === 7 ? 0 : startWeekday; // JS Date: Sunday = 0
  const jsDay = date.getDay();
  const diff = (jsDay - jsStart + 7) % 7;
  const aligned = new Date(date);
  aligned.setHours(0, 0, 0, 0);
  aligned.setDate(aligned.getDate() - diff);
  return aligned;
}

function computeLevel(count, maxCount) {
  if (!maxCount) return 0;
  const ratio = count / maxCount;
  if (ratio === 0) return 0;
  if (ratio < 0.25) return 1;
  if (ratio < 0.5) return 2;
  if (ratio < 0.75) return 3;
  return 4;
}

function normalizeEntries(rawEntries = [], minDate, maxDate) {
  if (!minDate || !maxDate) return [];
  const rangeMin = new Date(minDate);
  rangeMin.setHours(0, 0, 0, 0);
  const rangeMax = new Date(maxDate);
  rangeMax.setHours(0, 0, 0, 0);

  const parsed = rawEntries
    .map((entry) => ({
      date: entry.date instanceof Date ? entry.date : new Date(entry.date),
      count: entry.count ?? entry.value ?? 0,
      level: entry.level,
    }))
    .filter((entry) => entry.date >= rangeMin && entry.date <= rangeMax);

  const maxCount = parsed.reduce((max, entry) => Math.max(max, entry.count), 0);
  return parsed.map((entry) => ({
    ...entry,
    level: entry.level ?? computeLevel(entry.count, maxCount),
  }));
}

function buildWeeks(entries, minDate, maxDate, startWeekday) {
  if (!minDate || !maxDate) return [];

  const rangeMin = new Date(minDate);
  rangeMin.setHours(0, 0, 0, 0);
  const rangeMax = new Date(maxDate);
  rangeMax.setHours(0, 0, 0, 0);

  const entryMap = new Map();
  entries.forEach((entry) => {
    entryMap.set(formatDateKey(entry.date), entry);
  });

  const weeks = [];
  let cursor = alignToStartOfWeek(rangeMin, startWeekday);

  while (cursor <= rangeMax) {
    const week = [];
    for (let i = 0; i < 7; i += 1) {
      const day = new Date(cursor);
      day.setDate(cursor.getDate() + i);
      day.setHours(0, 0, 0, 0);
      const key = formatDateKey(day);
      const entry = entryMap.get(key);
      week.push({
        date: day,
        count: entry?.count ?? 0,
        level: entry?.level ?? 0,
        inRange: day >= rangeMin && day <= rangeMax,
      });
    }
    weeks.push(week);
    cursor = new Date(cursor);
    cursor.setDate(cursor.getDate() + 7);
  }

  return weeks;
}

function ContributionHeatmap({
  username,
  entries: providedEntries,
  heatmapColor = "blue",
  showMonthLabels = true,
  weekdayLabel = "none", // reserved for future use
  splittedMonthView = false, // kept for API parity
  showCellDate = false,
  startWeekday = 1,
  cellRadius = 0,
  cellSize = 18,
  minDate,
  maxDate = new Date(),
  onCellTap,
}) {
  const [entries, setEntries] = useState(() => normalizeEntries(providedEntries ?? [], minDate, maxDate));
  const [status, setStatus] = useState(providedEntries?.length ? "ready" : "loading");

  useEffect(() => {
    if (providedEntries?.length) {
      setEntries(normalizeEntries(providedEntries, minDate, maxDate));
      setStatus("ready");
      return;
    }

    if (!username) return;

    let cancelled = false;
    const controller = new AbortController();

    const load = async () => {
      setStatus("loading");
      try {
        const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`, {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error(`Failed to load contributions (${response.status})`);
        const payload = await response.json();
        const normalized = normalizeEntries(payload.contributions ?? [], minDate, maxDate);
        if (!cancelled) {
          setEntries(normalized);
          setStatus("ready");
        }
      } catch (error) {
        if (cancelled || error.name === "AbortError") return;
        console.error("Failed to load contributions", error);
        setEntries([]);
        setStatus("error");
      }
    };

    load();
    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [providedEntries, username, minDate, maxDate]);

  const colorScale = HEATMAP_COLORS[heatmapColor] ?? HEATMAP_COLORS.blue;
  const columnGap = 4;

  const weeks = useMemo(
    () => buildWeeks(entries, minDate, maxDate, startWeekday),
    [entries, minDate, maxDate, startWeekday]
  );

  const total = entries.reduce((sum, entry) => sum + entry.count, 0);
  const startLabel = minDate
    ? minDate.toLocaleDateString("en", { month: "short", day: "numeric", year: "numeric" })
    : "";

  const statusLabel =
    status === "loading"
      ? "Loading contributions..."
      : status === "error"
        ? "Could not load contributions"
        : `${total} contributions since ${startLabel}`;

  return (
    <div
      className="heatmap-shell"
      data-weekday-label={weekdayLabel}
      data-splitted-month-view={splittedMonthView ? "true" : "false"}
      style={{
        "--heatmap-cell-size": `${cellSize}px`,
        "--heatmap-cell-radius": `${cellRadius}px`,
      }}
    >
      {showMonthLabels && weeks.length ? (
        <div
          className="heatmap-months"
          style={{
            gridTemplateColumns: `repeat(${weeks.length}, ${cellSize}px)`,
            columnGap: `${columnGap}px`,
          }}
        >
          {weeks.map((week, idx) => {
            const weekStartDate = week[0]?.date;
            const prevStartDate = weeks[idx - 1]?.[0]?.date;
            const shouldLabel =
              weekStartDate && (!prevStartDate || weekStartDate.getMonth() !== prevStartDate.getMonth());
            return shouldLabel ? (
              <span key={`month-${idx}`} style={{ gridColumnStart: idx + 1 }}>
                {MONTH_NAMES[weekStartDate.getMonth()]}
              </span>
            ) : null;
          })}
        </div>
      ) : null}
      <div className="heatmap-grid" style={{ columnGap: `${columnGap}px` }}>
        {weeks.map((week, weekIdx) => (
          <div key={`week-${weekIdx}`} className="heatmap-week" style={{ rowGap: `${columnGap}px` }}>
            {week.map((day, dayIdx) => {
              const color = day.inRange ? colorScale[Math.min(colorScale.length - 1, day.level)] : "transparent";
              const label = `${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date.toLocaleDateString()}`;
              return (
                <button
                  type="button"
                  key={`day-${weekIdx}-${dayIdx}`}
                  className={`heatmap-day ${day.inRange ? "" : "heatmap-day--outside"}`}
                  style={{
                    backgroundColor: day.inRange ? color : "transparent",
                    borderColor: day.inRange && day.level > 0 ? color : "var(--border)",
                    color: showCellDate ? "#0f172a" : "transparent",
                  }}
                  aria-label={label}
                  title={label}
                  onClick={() => {
                    if (onCellTap) onCellTap(day.date, day.count);
                  }}
                >
                  {showCellDate && day.inRange ? day.date.getDate() : null}
                </button>
              );
            })}
          </div>
        ))}
      </div>
      <div className="heatmap-meta">
        <span className="muted small">{statusLabel}</span>
      </div>
    </div>
  );
}

const PAGES = ["home", "projects", "papers", "experience", "whoami"];

function Nav({ language, onLanguageChange, page, onNavigate, copy }) {
  return (
    <header className="topbar">
      <div className="identity">
        <div className="initials">MV</div>
        <div>
          <p className="name">Marton Vegh</p>
        </div>
      </div>
      <nav className="nav-links">
        {PAGES.map((key) => (
          <button
            key={key}
            className={`nav-btn ${page === key ? "active" : ""}`}
            onClick={() => onNavigate(key)}
          >
            {copy.nav[key]}
          </button>
        ))}
      </nav>
      <div className="lang-switch">
        {LANGUAGE_OPTIONS.map((option) => (
          <button
            key={option.code}
            className={`chip ${language === option.code ? "chip-active" : ""}`}
            onClick={() => onLanguageChange(option.code)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </header>
  );
}

function Section({ title, children }) {
  return (
    <section className="section">
      <div className="section-head">
        <h2>{title}</h2>
        <div className="divider" />
      </div>
      {children}
    </section>
  );
}

export default function App() {
  const [language, setLanguage] = useState("en");
  const [page, setPage] = useState("home");
  const copy = translations[language] ?? translations.en;

  const heatmapProps = useMemo(
    () => ({
      ...heatmapConfig,
      minDate: heatmapConfig.minDate ?? new Date(2025, 5, 14),
      maxDate: heatmapConfig.maxDate ?? new Date(),
    }),
    []
  );

  const localizedProjects = PROJECTS_CONTENT.map((project) => {
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
  });

  const localizedPapers = PAPERS_CONTENT.map((paper) => {
    const paperTranslations = paper.translations ?? {};
    const locale = paperTranslations[language] ?? paperTranslations.en ?? {};
    return {
      id: paper.id,
      status: locale.status ?? paperTranslations.en?.status ?? paper.status ?? "",
      title: locale.title ?? paperTranslations.en?.title ?? paper.title ?? "",
      summary: locale.summary ?? paperTranslations.en?.summary ?? paper.summary ?? "",
    };
  });

  const localizedExperience = EXPERIENCE_CONTENT.map((item) => {
    const experienceTranslations = item.translations ?? {};
    const locale = experienceTranslations[language] ?? experienceTranslations.en ?? {};
    return {
      id: item.id,
      period: item.period,
      title: locale.title ?? experienceTranslations.en?.title ?? item.title ?? "",
      detail: locale.detail ?? experienceTranslations.en?.detail ?? item.detail ?? "",
    };
  });

  const renderHome = () => (
    <main className="layout">
      <section className="hero">
        <div className="hero-text">
          <p className="muted">{copy.heroTagline}</p>
          <h1>Marton Vegh</h1>
          <p className="lede">{copy.heroSub}</p>
        </div>
        <div className="hero-aside">
          <p className="muted">{copy.githubTitle}</p>
          <ContributionHeatmap
            {...heatmapProps}
            username="Martonveghcode"
            onCellTap={(date, value) => {
              if (typeof heatmapProps.onCellTap === "function") {
                heatmapProps.onCellTap(date, value);
              }
            }}
          />
        </div>
      </section>

      <Section title={copy.aboutTitle}>
        <p className="muted">{copy.aboutBlurb}</p>
      </Section>

      <Section title={copy.languagesTitle}>
        <div className="menu">
          {copy.languagesList.map((item) => (
            <div key={item} className="menu-item">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section title={copy.stackTitle}>
        <div className="grid two">
          <div>
            <h3>{copy.stackCoreLabel}</h3>
            <p className="muted">React | JavaScript | HTML/CSS</p>
          </div>
          <div>
            <h3>{copy.stackLearningLabel}</h3>
            <p className="muted">Python | C++</p>
          </div>
        </div>
      </Section>

      <Section title={copy.passionsTitle}>
        <div className="menu">
          {copy.passionsList.map((item) => (
            <div key={item} className="menu-item">
              {item}
            </div>
          ))}
        </div>
      </Section>
    </main>
  );

  const renderProjects = () => (
    <main className="layout single">
      <Section title={copy.projectsTitle}>
        <div className="list">
          {localizedProjects.map((project) => (
            <article key={project.id} className="list-row project-row">
              {project.image?.src ? (
                <div className="project-thumb">
                  <img src={project.image.src} alt={project.image.alt || project.title} loading="lazy" />
                </div>
              ) : null}
              <div className="project-body">
                <p className="muted small">{project.tech.join(" / ")}</p>
                <h3>{project.title}</h3>
                <p className="muted">{project.summary}</p>
              </div>
              <div className="links">
                {project.links.live ? (
                  <a href={project.links.live} target="_blank" rel="noreferrer">
                    {copy.links.live}
                  </a>
                ) : null}
                {project.links.github ? (
                  <a href={project.links.github} target="_blank" rel="noreferrer">
                    {copy.links.github}
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );

  const renderPapers = () => (
    <main className="layout single">
      <Section title={copy.papersTitle}>
        <div className="list">
          {localizedPapers.map((paper) => (
            <article key={paper.id} className="list-row">
              <div>
                <p className="muted small">{paper.status}</p>
                <h3>{paper.title}</h3>
                <p className="muted">{paper.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );

  const renderExperience = () => (
    <main className="layout single">
      <Section title={copy.experienceTitle}>
        <div className="list">
          {localizedExperience.map((item) => (
            <article key={item.id} className="list-row">
              <div>
                <p className="muted small">{item.period}</p>
                <h3>{item.title}</h3>
                <p className="muted">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );

  const renderWhoAmI = () => (
    <main className="layout single">
      <Section title={copy.whoAmITitle ?? translations.en.whoAmITitle}>
        <div className="grid two">
          <div>
            {WHO_AM_I_CONTENT.paragraphs.map((text, idx) => (
              <p key={`whoami-text-${idx}`} className="muted">
                {text}
              </p>
            ))}
          </div>
          <div>
            <h3>{copy.sportsAchievementsTitle ?? translations.en.sportsAchievementsTitle}</h3>
            <ul className="muted">
              {WHO_AM_I_CONTENT.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </main>
  );

  const renderPage = () => {
    if (page === "projects") return renderProjects();
    if (page === "papers") return renderPapers();
    if (page === "experience") return renderExperience();
    if (page === "whoami") return renderWhoAmI();
    return renderHome();
  };

  return (
    <div className="page">
      <Nav language={language} onLanguageChange={setLanguage} page={page} onNavigate={setPage} copy={copy} />
      {renderPage()}
      <footer className="footer">
        <div className="footer-info">
          <span>Marton Vegh</span>
          <span>Mallorca, Spain</span>
          <span>
            Email: <a href="mailto:martonvegh2009@gmail.com">martonvegh2009@gmail.com</a>
          </span>
          <span>
            GitHub:{" "}
            <a href="https://github.com/Martonveghcode" target="_blank" rel="noreferrer">
              github.com/Martonveghcode
            </a>
          </span>
        </div>
        <div className="footer-social">
          <a href="https://www.instagram.com/marton.alt" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://github.com/Martonveghcode" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
