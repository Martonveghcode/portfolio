// Data hub for projects, papers, and experience with per-language fields.
// Add/edit items here: each entry has translations for en, es, fr, de, hu.

export const PROJECTS_CONTENT = [
  {
    id: "calendar",
    tech: ["React", "Automation"],
    links: {
      github: "https://github.com/Martonveghcode/calendar",
    },
    image: {
      src: "https://i.ibb.co/V0PxFhQq/opera-Jdvu-X5-W9z5.png",
      alt: "Placeholder preview for Homework Calendar",
    },
    translations: {
      en: {
        title: "Homework Calendar",
        summary:
          "Lesson Calendar is a Vite + React + Tailwind single-page app that helps students manage recurring lessons and push Class/Test/Homework events to Google Calendar.",
      },
      es: { title: "Homework Calendar", summary: "Asigna tareas a fechas de clase para evitar retrasos." },
      fr: { title: "Homework Calendar", summary: "Assigne les devoirs aux dates de cours pour eviter les retards." },
      de: { title: "Homework Calendar", summary: "Ordnet Hausaufgaben automatisch Kurstagen zu, um Verzug zu vermeiden." },
      hu: {
        title: "Homework Calendar",
        summary:
          "A Lesson Calendar egy Vite + React + Tailwind alapú egyoldalas alkalmazas, amely segit a diakoknak az ismetlodo orak kezeleseben, es az Ora/Dolgozat/Hazi esemenyek Google Calendarba kuldeseben.",
      },
    },
  },
  {
    id: "handwriting-pipeline",
    tech: ["Python", "Imaging"],
    links: {
      github: "https://github.com/Martonveghcode/Handwriting-formatting-pipeline",
    },
    image: {
      src: "https://i.ibb.co/4Rft0dM5/opera-a3d1-Myeaym.png",
      alt: "Placeholder preview for Handwriting Formatting Pipeline",
    },
    translations: {
      en: {
        title: "Handwriting Formatting Pipeline",
        summary:
          'An extension/pipeline to "My Text in Your Handwriting" by Thaines. Includes text formatting, limited Unicode->ASCII support, a print-formatting pipeline, and training-data processing macros/utils, plus a recommended training sheet.',
      },
      es: { title: "Handwriting Formatting Pipeline", summary: "Limpia notas escaneadas, quita lineas y maqueta paginas." },
      fr: { title: "Handwriting Formatting Pipeline", summary: "Nettoie des notes scannees, retire les lignes et met en page." },
      de: { title: "Handwriting Formatting Pipeline", summary: "Reinigt gescannte Notizen, entfernt Linien und formatiert Seiten." },
      hu: {
        title: "Handwriting Formatting Pipeline",
        summary:
          'Egy kiegeszites/pipeline a Thaines fele "My Text in Your Handwriting" projekthez. Tartalmaz szovegformazast, korlatozott Unicode->ASCII tamogatast, nyomtatasra optimalizalt torzset, valamint tanitoadat-feldolgozo makrokat es eszkozoket, plusz egy ajanlott gyakorlolapot.',
      },
    },
  },
  {
    id: "portfolio-analytics-tool",
    tech: ["Python", "yfinance", "NumPy", "Pandas", "SciPy", "Matplotlib"],
    links: {},
    translations: {
      en: {
        title: "Portfolio Analytics Tool",
        summary:
          "Portfolio Analytics Tool is a Python script using yfinance, NumPy, Pandas, and SciPy that builds portfolios from share holdings and analyzes performance with Sharpe, Sortino, max drawdown, and beta vs SPY, while also generating an efficient frontier and optimized portfolios (max-Sharpe and minimum-variance) with matplotlib visualizations.",
      },
      es: {
        title: "Portfolio Analytics Tool",
        summary:
          "Script en Python con yfinance, NumPy, Pandas y SciPy para construir carteras, analizar su rendimiento y generar frontera eficiente con optimizacion max-Sharpe y minima varianza.",
      },
      fr: {
        title: "Portfolio Analytics Tool",
        summary:
          "Script Python avec yfinance, NumPy, Pandas et SciPy pour construire des portefeuilles, analyser les performances et tracer une frontiere efficiente avec optimisation max-Sharpe et variance minimale.",
      },
      de: {
        title: "Portfolio Analytics Tool",
        summary:
          "Python-Skript mit yfinance, NumPy, Pandas und SciPy, das Portfolios aufbaut, Performance analysiert und eine effiziente Frontier mit Max-Sharpe- und Minimum-Varianz-Optimierung visualisiert.",
      },
      hu: {
        title: "Portfolio Analytics Tool",
        summary:
          "Python szkript yfinance, NumPy, Pandas es SciPy csomagokkal, amely reszvenyallomanybol portfoliokat epit, elemez Sharpe, Sortino, maximalis visszaeses es SPY-hoz viszonyitott beta mutatokkal, valamint hatekony hatarvonalat es optimalizalt portfoliokat general matplotlib vizualizaciokkal.",
      },
    },
  },
  {
    id: "grammar-trainer",
    tech: ["Python", "Streamlit", "SQLite", "LLM"],
    links: {},
    translations: {
      en: {
        title: "Grammar Trainer",
        summary:
          "Valores del \"Se\" Trainer is a Streamlit (Python) app that generates Spanish sentences with LLMs to help students practice identifying the function and value of \"se\", providing instant feedback, explanations, and adaptive practice using SQLite-based performance tracking and personalized question generation.",
      },
      es: {
        title: "Grammar Trainer",
        summary:
          "App en Streamlit (Python) que genera frases en espanol con LLM para practicar la funcion y el valor de \"se\", con feedback instantaneo, explicaciones y practica adaptativa con seguimiento en SQLite.",
      },
      fr: {
        title: "Grammar Trainer",
        summary:
          "Application Streamlit (Python) qui genere des phrases espagnoles via LLM pour pratiquer la fonction et la valeur de \"se\", avec feedback immediat, explications et suivi adapte base sur SQLite.",
      },
      de: {
        title: "Grammar Trainer",
        summary:
          "Streamlit-App (Python), die mit LLM spanische Satze fur das Uben von Funktion und Wert von \"se\" erzeugt, mit sofortigem Feedback, Erklarungen und adaptivem Training via SQLite-Tracking.",
      },
      hu: {
        title: "Grammar Trainer",
        summary:
          "Egy Streamlit (Python) alkalmazas, amely LLM-ekkel spanyol mondatokat general a \"se\" szerepenek es ertekenek gyakorlasahoz, azonnali visszajelzessel, magyarazatokkal es SQLite-alapu teljesitmenykovetessel tamogatott adaptiv feladatokkal.",
      },
    },
  },
];

export const PAPERS_CONTENT = [
  {
    id: "paper-1",
    translations: {
      en: {
        title: "Observer-Receiver Model",
        summary: "Draft paper; full text available in the linked Google Doc.",
        status: "Draft",
        link: "https://docs.google.com/document/d/1WhN38fEUqHaLmpaMrAETql27EopbL355gEz_t12w-0Y/edit?usp=sharing",
      },
      es: {
        title: "Observer-Receiver Model",
        summary: "Borrador; texto completo en el Google Doc enlazado.",
        status: "Borrador",
        link: "https://docs.google.com/document/d/1WhN38fEUqHaLmpaMrAETql27EopbL355gEz_t12w-0Y/edit?usp=sharing",
      },
      fr: {
        title: "Observer-Receiver Model",
        summary: "Brouillon; texte complet dans le Google Doc lie.",
        status: "Brouillon",
        link: "https://docs.google.com/document/d/1WhN38fEUqHaLmpaMrAETql27EopbL355gEz_t12w-0Y/edit?usp=sharing",
      },
      de: {
        title: "Observer-Receiver Model",
        summary: "Entwurf; Volltext im verlinkten Google-Dokument.",
        status: "Entwurf",
        link: "https://docs.google.com/document/d/1WhN38fEUqHaLmpaMrAETql27EopbL355gEz_t12w-0Y/edit?usp=sharing",
      },
      hu: {
        title: "Observer-Receiver Model",
        summary: "Piszkozat; a teljes szoveg az alabb linkelt Google Dokumentumban erheto el.",
        status: "Piszkozat",
        link: "https://docs.google.com/document/d/1WhN38fEUqHaLmpaMrAETql27EopbL355gEz_t12w-0Y/edit?usp=sharing",
      },
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
      hu: { title: "Budapest Design Apartments - Gyakornok", detail: "Ugyfelkoordinacio es adminisztrativ workflow-k." },
    },
  },
  {
    id: "rcnp",
    period: "2024",
    translations: {
      en: {
        title: "Real Club Nautico de Palma - Intern",
        detail: "Event logistics, on-site team support as well as monitoring of the racing team.",
      },
      es: {
        title: "Real Club Nautico de Palma - Practicas",
        detail: "Logistica de eventos, apoyo al equipo en sitio asi como supervision del equipo de regatas.",
      },
      fr: {
        title: "Real Club Nautico de Palma - Stage",
        detail: "Logistique des evenements, support de l'equipe sur site ainsi que le suivi de l'equipe de course.",
      },
      de: {
        title: "Real Club Nautico de Palma - Praktikum",
        detail: "Eventlogistik, Unterstutzung des Teams vor Ort sowie Uberwachung des Rennteams.",
      },
      hu: {
        title: "Real Club Nautico de Palma - Gyakornok",
        detail: "Rendezvenylogisztika, helyszini csapattamogatas, valamint a versenycsapat munkajanak kovetese.",
      },
    },
  },
];
