import { useEffect, useMemo, useState } from "react";
import { ColorUtils } from "react-color-palette-generator/src/utils/colorUtils";
import { HARMONY_LABELS, HARMONY_TYPES, PALETTE_ROLES } from "react-color-palette-generator/src/utils/constants";
import { EXPERIENCE_CONTENT, PAPERS_CONTENT, PROJECTS_CONTENT } from "./content";
import { WHO_AM_I_CONTENT } from "./WHO_AM_I_CONTENT";
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
    "Student developer studying in Spain with a passion for maths. Based in Mallorca. Started programming recently by learning web design, moving onto more data-science oriented programming.",
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
  favoriteBooksTitle: "My top 15 favourite books",
  worstBooksTitle: "Top 3 worst books",
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
  favoriteBooksTitle: "Mis 15 libros favoritos",
  worstBooksTitle: "Top 3 peores libros",
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
  favoriteBooksTitle: "Mes 15 livres preferes",
  worstBooksTitle: "Top 3 pires livres",
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
  favoriteBooksTitle: "Meine Top 15 Lieblingsbucher",
  worstBooksTitle: "Top 3 schlechteste Bucher",
  sportsAchievementsTitle: "Erfolge im Kanusprint",
  links: { live: "Live", github: "GitHub" },
},


};

const HEATMAP_COLORS = {
  blue: ["#0d152c", "#1d4ed8", "#2563eb", "#38bdf8", "#7dd3fc"],
  green: ["#0b2f26", "#1f6f43", "#22c55e", "#4ade80", "#86efac"],
};

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const ROLE_LABELS = {
  [PALETTE_ROLES.PRIMARY]: "Primary",
  [PALETTE_ROLES.SECONDARY]: "Secondary",
  [PALETTE_ROLES.ACCENT]: "Accent",
  [PALETTE_ROLES.TEXT]: "Text",
  [PALETTE_ROLES.BACKGROUND]: "Background",
  [PALETTE_ROLES.SURFACE]: "Surface",
};

const DEFAULT_THEME_PALETTE = {
  [PALETTE_ROLES.PRIMARY]: "#38bdf8",
  [PALETTE_ROLES.SECONDARY]: "#7dd3fc",
  [PALETTE_ROLES.ACCENT]: "#f1f2f4",
  [PALETTE_ROLES.BACKGROUND]: "#0f1013",
  [PALETTE_ROLES.SURFACE]: "#16181d",
  [PALETTE_ROLES.TEXT]: "#f1f2f4",
};

const PATTERN_OPTIONS = [
  { value: "none", label: "Solid" },
  { value: "stripes", label: "Diagonal stripes" },
  { value: "dots", label: "Soft dots" },
  { value: "grid", label: "Grid" },
  { value: "blobs", label: "Blurred blobs" },
  { value: "hypnotic-2", label: "Hypnotic 2" },
  { value: "waves", label: "Waves" },
  { value: "spaghetti", label: "Spaghetti" },
];

const DEFAULT_BACKGROUND_PATTERN = {
  pattern: "blobs",
  colorA: "#5200f5",
  colorB: "#000000",
};

function blend(color, other, amount) {
  return ColorUtils.blendColors(color, other, amount);
}

function patternPalette(background, fallbackBg, primary) {
  const baseBg = fallbackBg;
  const isBlobs = background?.pattern === "blobs";

  const main = ColorUtils.isValidColor(background?.colorA)
    ? background.colorA
    : isBlobs
      ? blend(primary ?? baseBg, "#000000", 0.45)
      : blend(baseBg, primary ?? baseBg, 0.22);

  const accent = ColorUtils.isValidColor(background?.colorB)
    ? background.colorB
    : isBlobs
      ? blend(baseBg, "#ffffff", 0.3)
      : blend(baseBg, "#ffffff", 0.14);

  const light = isBlobs ? blend(main, "#ffffff", 0.2) : blend(baseBg, "#ffffff", 0.32);
  const white = "#ffffff";
  const withAlpha = (color, alpha) => `color-mix(in srgb, ${color} ${Math.round(alpha * 100)}%, transparent)`;

  return {
    pattern: background?.pattern ?? "none",
    main,
    accent,
    light,
    white,
    main50: withAlpha(main, 0.5),
    main75: withAlpha(main, 0.75),
    main30: withAlpha(main, 0.3),
    main20: withAlpha(main, 0.2),
    accent30: withAlpha(accent, 0.3),
    accent50: withAlpha(accent, 0.5),
    baseBg,
  };
}

const PATTERN_BUILDERS = {
  stripes: ({ main, accent }) => ({
    image: `repeating-linear-gradient(135deg, ${main} 0, ${main} 12px, ${accent} 12px, ${accent} 24px), linear-gradient(${accent}, ${accent})`,
    size: "auto",
  }),
  dots: ({ main, accent }) => ({
    image: `radial-gradient(circle at 10px 10px, ${main} 0, ${main} 4px, #0000 5px), linear-gradient(${accent}, ${accent})`,
    size: "28px 28px",
  }),
  grid: ({ main, accent }) => ({
    image: `linear-gradient(${main} 1px, #0000 1px), linear-gradient(90deg, ${main} 1px, #0000 1px), linear-gradient(${accent}, ${accent})`,
    size: "32px 32px",
  }),
  blobs: () => ({
    image: "none",
    size: "auto",
    position: "0 0",
    repeat: "repeat",
  }),
  "hypnotic-2": ({ main, accent }) => ({
    image: `radial-gradient(64px at 100% 0, ${accent} 6.25%, ${main} 6.3% 18.75%, ${accent} 18.8% 31.25%, ${main} 31.3% 43.75%, ${accent} 43.8% 56.25%, ${main} 56.3% 68.75%, #0000 0), radial-gradient(64px at 0 0, ${accent} 6.25%, ${main} 6.3% 18.75%, ${accent} 18.8% 31.25%, ${main} 31.3% 43.75%, ${accent} 43.8% 56.25%, ${main} 56.3% 68.75%, #0000 0), radial-gradient(64px at 0 100%, ${accent} 6.25%, ${main} 6.3% 18.75%, ${accent} 18.8% 31.25%, ${main} 31.3% 43.75%, ${accent} 43.8% 56.25%, ${main} 56.3% 68.75%, #0000 0), radial-gradient(64px at 100% 100%, ${accent} 6.25%, ${main} 6.3% 18.75%, ${accent} 18.8% 31.25%, ${main} 31.3% 43.75%, ${accent} 43.8% 56.25%, ${main} 56.3% 68.75%, #0000 0), linear-gradient(${accent}, ${accent})`,
    size: "64px 64px",
  }),
  waves: ({ main, accent }) => ({
    image: `repeating-radial-gradient(circle at 0 0, transparent 0, ${accent} 32px), repeating-linear-gradient(${main}, ${main}), linear-gradient(${accent}, ${accent})`,
    size: "auto",
  }),
  spaghetti: ({ main, main20, main30, main50, main75, accent, accent30 }) => ({
    image: `radial-gradient(at bottom right, ${main} 0, ${main} 8px, ${main20} 8px, ${main20} 16px, ${main75} 16px, ${main75} 24px, ${main30} 24px, ${main30} 32px, ${main30} 32px, ${main30} 40px, ${main75} 40px, ${main75} 48px, ${main20} 48px, ${main20} 56px, transparent 56px, transparent 64px), radial-gradient(at top left, transparent 0, transparent 8px, ${main20} 8px, ${main20} 16px, ${main75} 16px, ${main75} 24px, ${main30} 24px, ${main30} 32px, ${main30} 32px, ${main30} 40px, ${main75} 40px, ${main75} 48px, ${main20} 48px, ${main20} 56px, ${main} 56px, ${main} 64px, transparent 64px, transparent 160px), linear-gradient(${accent30}, ${accent30})`,
    size: "64px 64px, 64px 64px, auto",
    repeat: "repeat",
    blendMode: "multiply",
  }),
};

function buildPatternStyles(background, fallbackBg, primary) {
  const palette = patternPalette(background, fallbackBg, primary);
  const builder = PATTERN_BUILDERS[palette.pattern];
  if (!builder) return { image: "none", size: "auto", position: "0 0", repeat: "repeat" };
  const result = builder(palette);
  return {
    image: result.image ?? "none",
    size: result.size ?? "auto",
    position: result.position ?? "0 0",
    repeat: result.repeat ?? "repeat",
    blendMode: result.blendMode ?? result.backgroundBlendMode ?? "normal",
    colors: palette,
  };
}

function applyPaletteToDocument(palette, backgroundPattern = DEFAULT_BACKGROUND_PATTERN) {
  if (typeof document === "undefined") return;

  const merged = { ...DEFAULT_THEME_PALETTE, ...palette };
  const patternBaseColor =
    ColorUtils.isValidColor(backgroundPattern?.colorB) && backgroundPattern?.colorB
      ? backgroundPattern.colorB
      : merged[PALETTE_ROLES.BACKGROUND];
  const rawBackground = patternBaseColor ?? merged[PALETTE_ROLES.BACKGROUND];
  const backgroundColor = blend(rawBackground, "#000000", 0.3);
  const surface =
    merged[PALETTE_ROLES.SURFACE] ?? ColorUtils.blendColors(backgroundColor, merged[PALETTE_ROLES.PRIMARY], 0.15);
  const primary = merged[PALETTE_ROLES.PRIMARY];
  const accent = merged[PALETTE_ROLES.ACCENT] ?? primary;
  const text = merged[PALETTE_ROLES.TEXT] ?? ColorUtils.getContrastColor(backgroundColor, true);
  const border = ColorUtils.blendColors(text, backgroundColor, 0.8);
  const muted = ColorUtils.blendColors(text, backgroundColor, 0.6);
  const strongPanel = ColorUtils.blendColors(surface, primary, 0.25);

  const patternStyles = buildPatternStyles(backgroundPattern, backgroundColor, primary);
  const patternActive = backgroundPattern?.pattern && backgroundPattern.pattern !== "none";
  const overlayOpacity =
    patternActive && backgroundPattern?.pattern === "blobs"
      ? 0.06
      : patternActive
        ? 0.35
        : 0.14;
  const overlay = overlayOpacity > 0 ? `linear-gradient(rgba(0,0,0,${overlayOpacity}), rgba(0,0,0,${overlayOpacity}))` : "none";

  const root = document.documentElement;
  if (typeof document !== "undefined" && document.body) {
    document.body.setAttribute("data-bg-pattern", backgroundPattern?.pattern ?? "none");
  }

  const blobMainComputed = patternStyles.colors?.main ?? primary ?? backgroundColor;
  const blobAccentComputed = patternStyles.colors?.accent ?? accent;
  const blobLightComputed = patternStyles.colors?.light ?? muted;

  root.style.setProperty("--bg", backgroundColor);
  root.style.setProperty("--panel", surface);
  root.style.setProperty("--panel-strong", strongPanel);
  root.style.setProperty("--text", text);
  root.style.setProperty("--muted", muted);
  root.style.setProperty("--accent", accent);
  root.style.setProperty("--border", border);
  root.style.setProperty("--bg-overlay-image", overlay);
  root.style.setProperty("--bg-pattern-image", patternStyles.image ?? "none");
  root.style.setProperty("--bg-pattern-size", patternStyles.size ?? "auto");
  root.style.setProperty("--bg-pattern-position", patternStyles.position ?? "0 0");
  root.style.setProperty("--bg-pattern-repeat", patternStyles.repeat ?? "repeat");
  root.style.setProperty("--bg-pattern-blend", patternStyles.blendMode ?? "normal");
  root.style.setProperty("--blob-main", blobMainComputed);
  root.style.setProperty("--blob-accent", blobAccentComputed);
  root.style.setProperty("--blob-light", blobLightComputed);
}

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

function Nav({ language, onLanguageChange, page, onNavigate, copy, paletteControl }) {
  return (
    <header className="topbar">
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
        {paletteControl ? <div className="theme-slot">{paletteControl}</div> : null}
      </div>
    </header>
  );
}

function Section({ title, children, aside, className }) {
  const sectionClass = className ? `section ${className}` : "section";
  return (
    <section className={sectionClass}>
      <div className="section-head">
        <h2>{title}</h2>
        {aside ? <div className="section-aside">{aside}</div> : null}
        <div className="divider" />
      </div>
      {children}
    </section>
  );
}

function ThemeLab({ palette, background, onApply }) {
  const baseSeed = palette?.[PALETTE_ROLES.PRIMARY] ?? DEFAULT_THEME_PALETTE[PALETTE_ROLES.PRIMARY];
  const [open, setOpen] = useState(false);
  const [baseColor, setBaseColor] = useState(baseSeed);
  const [baseInput, setBaseInput] = useState(baseSeed);
  const [harmony, setHarmony] = useState(HARMONY_TYPES.TRIADIC);
  const [pattern, setPattern] = useState(background?.pattern ?? DEFAULT_BACKGROUND_PATTERN.pattern);
  const [patternColorA, setPatternColorA] = useState(background?.colorA ?? DEFAULT_BACKGROUND_PATTERN.colorA);
  const [patternColorB, setPatternColorB] = useState(background?.colorB ?? DEFAULT_BACKGROUND_PATTERN.colorB);
  const [patternDirty, setPatternDirty] = useState(false);

  useEffect(() => {
    if (palette?.[PALETTE_ROLES.PRIMARY]) {
      setBaseColor(palette[PALETTE_ROLES.PRIMARY]);
      setBaseInput(palette[PALETTE_ROLES.PRIMARY]);
      setPatternDirty(false);
    }
  }, [palette]);

  useEffect(() => {
    if (background) {
      setPattern(background.pattern ?? DEFAULT_BACKGROUND_PATTERN.pattern);
      setPatternColorA(background.colorA ?? DEFAULT_BACKGROUND_PATTERN.colorA);
      setPatternColorB(background.colorB ?? DEFAULT_BACKGROUND_PATTERN.colorB);
      setPatternDirty(false);
    }
  }, [background]);

  const draftPalette = useMemo(() => {
    try {
      return ColorUtils.generateHarmony(baseColor, harmony, true);
    } catch {
      return ColorUtils.getFallbackPalette(true);
    }
  }, [baseColor, harmony]);

  const softenedPalette = useMemo(() => {
    const backgroundColor =
      draftPalette?.[PALETTE_ROLES.BACKGROUND] ?? DEFAULT_THEME_PALETTE[PALETTE_ROLES.BACKGROUND];
    const primaryColor = draftPalette?.[PALETTE_ROLES.PRIMARY] ?? DEFAULT_THEME_PALETTE[PALETTE_ROLES.PRIMARY];
    const accentColor = draftPalette?.[PALETTE_ROLES.ACCENT] ?? primaryColor;
    const tonedBackground = blend(backgroundColor, "#000000", 0.25);
    const tonedSurface = blend(tonedBackground, primaryColor, 0.1);
    const tonedAccent = blend(accentColor, "#ffffff", 0.12);
    return {
      ...draftPalette,
      [PALETTE_ROLES.BACKGROUND]: tonedBackground,
      [PALETTE_ROLES.SURFACE]: tonedSurface,
      [PALETTE_ROLES.ACCENT]: tonedAccent,
      [PALETTE_ROLES.TEXT]:
        draftPalette?.[PALETTE_ROLES.TEXT] ?? ColorUtils.getContrastColor(tonedBackground, true),
    };
  }, [draftPalette]);

  const derivedPatternColors = useMemo(() => {
    const bg = softenedPalette?.[PALETTE_ROLES.BACKGROUND] ?? DEFAULT_THEME_PALETTE[PALETTE_ROLES.BACKGROUND];
    const primary = softenedPalette?.[PALETTE_ROLES.PRIMARY] ?? DEFAULT_THEME_PALETTE[PALETTE_ROLES.PRIMARY];
    return {
      colorA: blend(bg, primary, 0.18),
      colorB: blend(bg, "#000000", 0.12),
    };
  }, [softenedPalette]);

  useEffect(() => {
    if (patternDirty) return;
    setPatternColorA(derivedPatternColors.colorA);
    setPatternColorB(derivedPatternColors.colorB);
  }, [derivedPatternColors, patternDirty]);

  const paletteEntries = useMemo(
    () =>
      [
        PALETTE_ROLES.PRIMARY,
        PALETTE_ROLES.SECONDARY,
        PALETTE_ROLES.ACCENT,
        PALETTE_ROLES.SURFACE,
        PALETTE_ROLES.BACKGROUND,
        PALETTE_ROLES.TEXT,
      ]
        .map((role) => ({ role, color: softenedPalette?.[role] }))
        .filter((entry) => entry.color),
    [softenedPalette]
  );

  const handleBaseInput = (value) => {
    setBaseInput(value);
    setPatternDirty(false);
    if (ColorUtils.isValidColor(value)) {
      setBaseColor(value);
    }
  };

  const handleApply = () => {
    const resolvedPatternA = patternDirty ? patternColorA : derivedPatternColors.colorA;
    const resolvedPatternB = patternDirty ? patternColorB : derivedPatternColors.colorB;
    const safePatternA = ColorUtils.isValidColor(resolvedPatternA) ? resolvedPatternA : derivedPatternColors.colorA;
    const safePatternB = ColorUtils.isValidColor(resolvedPatternB) ? resolvedPatternB : derivedPatternColors.colorB;

    const backgroundPayload = {
      pattern,
      colorA: safePatternA,
      colorB: safePatternB,
    };
    if (onApply) onApply({ palette: softenedPalette, background: backgroundPayload });
    setOpen(false);
  };

  const handleRandomize = () => {
    const randomSeed = ColorUtils.generateRandomColor();
    setBaseInput(randomSeed);
    setBaseColor(randomSeed);
    setPatternDirty(false);
  };

  const handleRandomizePattern = () => {
    const available = PATTERN_OPTIONS.map((option) => option.value);
    const next = available[Math.floor(Math.random() * available.length)];
    setPattern(next);
  };

  const handleRandomizePatternColors = () => {
    setPatternColorA(ColorUtils.generateRandomColor());
    setPatternColorB(ColorUtils.generateRandomColor());
    setPatternDirty(true);
  };

  const handleRandomizeEverything = () => {
    handleRandomize();
    handleRandomizePattern();
    handleRandomizePatternColors();
  };

  const safeColorValue = ColorUtils.isValidColor(baseInput)
    ? baseInput
    : DEFAULT_THEME_PALETTE[PALETTE_ROLES.PRIMARY];

  return (
    <div className="theme-lab">
      <button
        type="button"
        className="theme-lab__toggle"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="theme-lab-panel"
        title="Open palette generator"
      >
        Palette
      </button>

      {open ? (
        <>
          <button
            type="button"
            className="theme-lab__backdrop"
            aria-label="Close theme lab"
            onClick={() => setOpen(false)}
          />
          <div className="theme-lab__panel" id="theme-lab-panel">
            <div className="theme-lab__header">
              <div>
                <p className="small muted">Powered by react-color-palette-generator</p>
                <h4 className="theme-lab__title">Theme lab</h4>
              </div>
              <button type="button" className="chip" onClick={() => setOpen(false)}>
                Close
              </button>
            </div>

            <div className="theme-lab__controls">
              <label className="theme-lab__field">
                <span>Base color</span>
                <div className="theme-lab__inputs">
                  <input
                    type="color"
                    value={safeColorValue}
                    onChange={(event) => handleBaseInput(event.target.value)}
                    aria-label="Pick base color"
                  />
                  <input
                    type="text"
                    value={baseInput}
                    onChange={(event) => handleBaseInput(event.target.value)}
                    className="theme-lab__text-input"
                    spellCheck="false"
                  />
                </div>
              </label>

              <label className="theme-lab__field">
                <span>Harmony</span>
                <select
                  value={harmony}
                  onChange={(event) => setHarmony(event.target.value)}
                  className="theme-lab__select"
                >
                  {Object.entries(HARMONY_LABELS).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </label>

              <div className="theme-lab__background">
                <div className="theme-lab__background-head">
                  <span>Background pattern</span>
                  <div className="theme-lab__mini-actions">
                    <button type="button" className="chip" onClick={handleRandomizePattern}>
                      Shuffle pattern
                    </button>
                    <button type="button" className="chip" onClick={handleRandomizePatternColors}>
                      Shuffle colors
                    </button>
                  </div>
                </div>

                <label className="theme-lab__field">
                  <span>Pattern style</span>
                  <select
                    value={pattern}
                    onChange={(event) => setPattern(event.target.value)}
                    className="theme-lab__select"
                  >
                    {PATTERN_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>

                <div className="theme-lab__background-grid">
                  <label className="theme-lab__field">
                    <span>Foreground</span>
                    <div className="theme-lab__inputs">
                      <input
                        type="color"
                        value={ColorUtils.isValidColor(patternColorA) ? patternColorA : DEFAULT_BACKGROUND_PATTERN.colorA}
                        onChange={(event) => {
                          setPatternDirty(true);
                          setPatternColorA(event.target.value);
                        }}
                        aria-label="Pick pattern foreground color"
                      />
                      <input
                        type="text"
                        value={patternColorA}
                        onChange={(event) => {
                          setPatternDirty(true);
                          setPatternColorA(event.target.value);
                        }}
                        className="theme-lab__text-input"
                        spellCheck="false"
                      />
                    </div>
                  </label>

                  <label className="theme-lab__field">
                    <span>Background</span>
                    <div className="theme-lab__inputs">
                      <input
                        type="color"
                        value={ColorUtils.isValidColor(patternColorB) ? patternColorB : DEFAULT_BACKGROUND_PATTERN.colorB}
                        onChange={(event) => {
                          setPatternDirty(true);
                          setPatternColorB(event.target.value);
                        }}
                        aria-label="Pick pattern background color"
                      />
                      <input
                        type="text"
                        value={patternColorB}
                        onChange={(event) => {
                          setPatternDirty(true);
                          setPatternColorB(event.target.value);
                        }}
                        className="theme-lab__text-input"
                        spellCheck="false"
                      />
                    </div>
                  </label>
                </div>
              </div>

              <div className="theme-lab__actions">
                <button type="button" className="chip" onClick={handleRandomize}>
                  Shuffle palette
                </button>
                <button type="button" className="chip" onClick={handleRandomizeEverything}>
                  Shuffle all
                </button>
                <button type="button" className="chip chip-active" onClick={handleApply}>
                  Apply theme
                </button>
              </div>
            </div>

            <div className="theme-lab__swatches">
              {paletteEntries.map(({ role, color }) => (
                <div key={role} className="theme-lab__swatch">
                  <div className="theme-lab__swatch-color" style={{ backgroundColor: color }} />
                  <div className="theme-lab__swatch-meta">
                    <span>{ROLE_LABELS[role] ?? role}</span>
                    <span className="small muted">{color}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="theme-lab__footer muted small">
              Applies primary, surface, background, border, muted and accent variables across the site.
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default function App() {
  const [language, setLanguage] = useState("en");
  const [page, setPage] = useState("home");
  const [themePalette, setThemePalette] = useState(DEFAULT_THEME_PALETTE);
  const [backgroundPattern, setBackgroundPattern] = useState(DEFAULT_BACKGROUND_PATTERN);
  const copy = translations[language] ?? translations.en;

  useEffect(() => {
    applyPaletteToDocument(themePalette, backgroundPattern);
  }, [themePalette, backgroundPattern]);

  const handleApplyTheme = (payload) => {
    const palette = payload?.palette ?? payload;
    const background = payload?.background ?? backgroundPattern;
    const mergedPalette = {
      ...DEFAULT_THEME_PALETTE,
      ...palette,
      [PALETTE_ROLES.ACCENT]:
        palette?.[PALETTE_ROLES.ACCENT] ??
        palette?.[PALETTE_ROLES.PRIMARY] ??
        DEFAULT_THEME_PALETTE[PALETTE_ROLES.ACCENT],
    };
    const baseBg = mergedPalette[PALETTE_ROLES.BACKGROUND] ?? DEFAULT_THEME_PALETTE[PALETTE_ROLES.BACKGROUND];
    const basePrimary = mergedPalette[PALETTE_ROLES.PRIMARY] ?? DEFAULT_THEME_PALETTE[PALETTE_ROLES.PRIMARY];
    const derivedColorA =
      background?.colorA && ColorUtils.isValidColor(background.colorA)
        ? background.colorA
        : blend(baseBg, basePrimary, 0.18);
    const derivedColorB =
      background?.colorB && ColorUtils.isValidColor(background.colorB)
        ? background.colorB
        : blend(baseBg, "#000000", 0.12);
    setThemePalette(mergedPalette);
    setBackgroundPattern({
      ...DEFAULT_BACKGROUND_PATTERN,
      ...background,
      colorA: derivedColorA,
      colorB: derivedColorB,
    });
  };

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
      link: locale.link ?? paperTranslations.en?.link ?? paper.link ?? "",
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

  const localizedWhoAmI = useMemo(() => {
    const whoAmITranslations = WHO_AM_I_CONTENT.translations ?? {};
    const locale = whoAmITranslations[language] ?? whoAmITranslations.en ?? {};
    const favoriteBooks = (WHO_AM_I_CONTENT.favoriteBooks ?? [])
      .slice()
      .sort((a, b) => (a.rank ?? 0) - (b.rank ?? 0))
      .map((book) => {
        const bookTranslations = book.translations ?? {};
        const bookLocale = bookTranslations[language] ?? bookTranslations.en ?? {};
        return {
          id: book.id,
          rank: book.rank,
          cover: book.cover ?? {},
          title: bookLocale.title ?? bookTranslations.en?.title ?? "",
          author: bookLocale.author ?? bookTranslations.en?.author ?? "",
          note: bookLocale.note ?? bookTranslations.en?.note ?? "",
        };
      });
    const worstBooks = (WHO_AM_I_CONTENT.worstBooks ?? [])
      .slice()
      .sort((a, b) => (a.rank ?? 0) - (b.rank ?? 0))
      .map((book) => {
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
      worstBooks,
    };
  }, [language]);

  const renderHome = () => (
    <main className="layout">
      <div className="hero-stack">
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

        <Section title={copy.aboutTitle} className="section-box about-section">
          <p className="muted">{copy.aboutBlurb}</p>
        </Section>
      </div>

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
        <div className="list projects-list">
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
                {paper.link ? (
                  <p className="muted small">
                    <a href={paper.link} target="_blank" rel="noreferrer">
                      View paper
                    </a>
                  </p>
                ) : null}
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
    <main className="layout single books-layout">
      <div className="whoami-pair">
        <Section title={copy.whoAmITitle ?? translations.en.whoAmITitle}>
          {localizedWhoAmI.paragraphs.map((text, idx) => (
            <p key={`whoami-text-${idx}`} className="muted">
              {text}
            </p>
          ))}
        </Section>

        <Section title={copy.sportsAchievementsTitle ?? translations.en.sportsAchievementsTitle}>
          <div className="achievements-block">
            <div className="achievement-visual">
              <img
                src="https://i.ibb.co/PZmb2gTS/Whats-App-Image-2025-12-19-at-10-48-27.jpg"
                alt="Canoe sprint placeholder"
                loading="lazy"
              />
            </div>
            <ul className="muted">
              {localizedWhoAmI.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </div>
        </Section>
      </div>

      <Section title={copy.favoriteBooksTitle ?? translations.en.favoriteBooksTitle}>
        <div className="list books-grid">
          {localizedWhoAmI.favoriteBooks.map((book) => (
            <article key={book.id} className="list-row book-row">
              {book.cover?.src ? (
                <div className="book-thumb">
                  <img src={book.cover.src} alt={book.cover.alt || book.title} loading="lazy" />
                </div>
              ) : null}
              <div className="book-body">
                <p className="muted small">#{book.rank ?? ""}</p>
                <h3>{book.title}</h3>
                {book.author ? <p className="muted">{book.author}</p> : null}
                {book.note ? <p className="muted small">{book.note}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section title={copy.worstBooksTitle ?? translations.en.worstBooksTitle}>
        
        <div className="list books-grid">
          {localizedWhoAmI.worstBooks.map((book) => (
            <article key={book.id} className="list-row book-row">
              {book.cover?.src ? (
                <div className="book-thumb">
                  <img src={book.cover.src} alt={book.cover.alt || book.title} loading="lazy" />
                </div>
              ) : null}
              <div className="book-body">
                <p className="muted small">#{book.rank ?? ""}</p>
                <h3>{book.title}</h3>
                {book.author ? <p className="muted">{book.author}</p> : null}
                {book.reason ? <p className="muted small">{book.reason}</p> : null}
              </div>
            </article>
          ))}
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
      <Nav
        language={language}
        onLanguageChange={setLanguage}
        page={page}
        onNavigate={setPage}
        copy={copy}
        paletteControl={<ThemeLab palette={themePalette} background={backgroundPattern} onApply={handleApplyTheme} />}
      />
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
        </div>
      </footer>
    </div>
  );
}
