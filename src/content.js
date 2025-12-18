// Data hub for projects, papers, and experience with per-language fields.
// Add/edit items here: each entry has translations for en, es, fr, de.

export const PROJECTS_CONTENT = [
  {
    id: "calendar",
    tech: ["React", "Automation"],
    links: {
      github: "https://github.com/Martonveghcode/calendar",
      live: "https://glittery-blini-4c6ea4.netlify.app",
    },
    image: {
      src: "https://placehold.co/640x360?text=Homework+Calendar",
      alt: "Placeholder preview for Homework Calendar",
    },
    translations: {
      en: { title: "Homework Calendar", summary: "Auto-assigns homework to class dates to avoid missed deadlines." },
      es: { title: "Homework Calendar", summary: "Asigna tareas a fechas de clase para evitar retrasos." },
      fr: { title: "Homework Calendar", summary: "Assigne les devoirs aux dates de cours pour eviter les retards." },
      de: { title: "Homework Calendar", summary: "Ordnet Hausaufgaben automatisch Kurstagen zu, um Verzug zu vermeiden." },
    },
  },
  {
    id: "handwriting-pipeline",
    tech: ["Python", "Imaging"],
    links: {
      github: "https://github.com/Martonveghcode/Handwriting-formatting-pipeline",
    },
    image: {
      src: "https://placehold.co/640x360?text=Handwriting+Pipeline",
      alt: "Placeholder preview for Handwriting Formatting Pipeline",
    },
    translations: {
      en: { title: "Handwriting Formatting Pipeline", summary: "Cleans scanned notes, removes lines, and formats pages." },
      es: { title: "Handwriting Formatting Pipeline", summary: "Limpia notas escaneadas, quita lineas y maqueta paginas." },
      fr: { title: "Handwriting Formatting Pipeline", summary: "Nettoie des notes scannees, retire les lignes et met en page." },
      de: { title: "Handwriting Formatting Pipeline", summary: "Reinigt gescannte Notizen, entfernt Linien und formatiert Seiten." },
    },
  },
  {
    id: "chef-claude",
    tech: ["JavaScript", "APIs"],
    links: {
      github: "https://github.com/Martonveghcode/Projects/tree/main/chef-claude",
    },
    image: {
      src: "https://placehold.co/640x360?text=Chef+Claude",
      alt: "Placeholder preview for Chef-Claude",
    },
    translations: {
      en: { title: "Chef-Claude", summary: "Ingredient-based recipe generator using Google APIs." },
      es: { title: "Chef-Claude", summary: "Generador de recetas segun ingredientes con APIs de Google." },
      fr: { title: "Chef-Claude", summary: "Generateur de recettes selon les ingredients via les APIs Google." },
      de: { title: "Chef-Claude", summary: "Rezeptgenerator nach Zutaten mit Google-APIs." },
    },
  },
  {
    id: "react-blog",
    tech: ["React", "Content automation"],
    links: {
      github: "https://github.com/Martonveghcode/Projects/tree/main/react-blog",
    },
    image: {
      src: "https://placehold.co/640x360?text=React+Blog",
      alt: "Placeholder preview for React Blog",
    },
    translations: {
      en: { title: "React Blog", summary: "Blog that renders from data files without manual rebuilds." },
      es: { title: "React Blog", summary: "Blog que se renderiza desde datos sin reconstruccion manual." },
      fr: { title: "React Blog", summary: "Blog rendu depuis des donnees sans reconstruction manuelle." },
      de: { title: "React Blog", summary: "Blog rendert aus Daten ohne manuelles Neuaufbauen." },
    },
  },
];

export const PAPERS_CONTENT = [
  {
    id: "paper-1",
    translations: {
      en: { title: "Paper slot #1", summary: "Placeholder for a research paper or essay (add PDF soon).", status: "Placeholder" },
      es: { title: "Paper slot #1", summary: "Espacio reservado para un paper o ensayo (PDF pronto).", status: "Placeholder" },
      fr: { title: "Paper slot #1", summary: "Emplacement reserve pour un papier ou essai (PDF bientot).", status: "Placeholder" },
      de: { title: "Paper slot #1", summary: "Platzhalter fur Paper oder Essay (PDF bald).", status: "Placeholder" },
    },
  },
  {
    id: "paper-2",
    translations: {
      en: { title: "Paper slot #2", summary: "Reserved for a future publication or writeup.", status: "Placeholder" },
      es: { title: "Paper slot #2", summary: "Reservado para una futura publicacion o articulo.", status: "Placeholder" },
      fr: { title: "Paper slot #2", summary: "Reserve pour une future publication ou article.", status: "Placeholder" },
      de: { title: "Paper slot #2", summary: "Reserviert fur eine spateren Veroffentlichung.", status: "Placeholder" },
    },
  },
];

export const EXPERIENCE_CONTENT = [
  {
    id: "bda",
    period: "2025",
    translations: {
      en: { title: "Budapest Design Apartments - Intern", detail: "Client coordination and admin workflows." },
      es: { title: "Budapest Design Apartments - Practicas", detail: "Coordinacion de clientes y flujos administrativos." },
      fr: { title: "Budapest Design Apartments - Stage", detail: "Coordination clients et flux administratifs." },
      de: { title: "Budapest Design Apartments - Praktikum", detail: "Kundenkoordination und administrative Ablaufe." },
    },
  },
  {
    id: "rcnp",
    period: "2024",
    translations: {
      en: {
  title: "Real Club Nautico de Palma - Intern",
  detail: "Event logistics, on-site team support as well as monitoring of the racing team."
},
es: {
  title: "Real Club Nautico de Palma - Practicas",
  detail: "Logística de eventos, apoyo al equipo en sitio así como supervisión del equipo de regatas."
},
fr: {
  title: "Real Club Nautico de Palma - Stage",
  detail: "Logistique des événements, support de l’équipe sur site ainsi que le suivi de l’équipe de course."
},
de: {
  title: "Real Club Nautico de Palma - Praktikum",
  detail: "Eventlogistik, Unterstützung des Teams vor Ort sowie Überwachung des Rennteams."
},

    },
  },
];


