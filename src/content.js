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
      src: "https://i.ibb.co/PvjTz00Q/image-2026-04-01-130833486.png",
      alt: "Preview of Homework Calendar",
    },
    translations: {
      en: {
        title: "Homework Calendar",
        summary:
          "Lesson Calendar is a Vite + React + Tailwind single-page app that helps students manage recurring lessons and push Class/Test/Homework events to Google Calendar.",
      },
      es: {
        title: "Homework Calendar",
        summary:
          "Lesson Calendar es una aplicacion de una sola pagina hecha con Vite, React y Tailwind que ayuda a los estudiantes a gestionar clases recurrentes y enviar eventos de Clase/Examen/Deberes a Google Calendar.",
      },
      fr: {
        title: "Homework Calendar",
        summary:
          "Lesson Calendar est une application monopage en Vite, React et Tailwind qui aide les eleves a gerer des cours recurrents et a envoyer des evenements Cours/Controle/Devoirs vers Google Calendar.",
      },
      de: {
        title: "Homework Calendar",
        summary:
          "Lesson Calendar ist eine Single-Page-App mit Vite, React und Tailwind, die Schulerinnen und Schulern hilft, wiederkehrende Stunden zu verwalten und Unterrichts-, Test- und Hausaufgaben-Ereignisse in Google Calendar zu ubertragen.",
      },
      hu: {
        title: "Homework Calendar",
        summary:
          "A Lesson Calendar egy Vite + React + Tailwind alapu egyoldalas alkalmazas, amely segit a diakoknak az ismetlodo orak kezeleseben, es Ora/Dolgozat/Hazi feladat esemenyeket kuld a Google Calendarba.",
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
      es: {
        title: "Handwriting Formatting Pipeline",
        summary:
          'Una extension/pipeline para "My Text in Your Handwriting" de Thaines. Incluye formateo de texto, soporte limitado de Unicode->ASCII, un pipeline de formateo para impresion y macros/utilidades para procesar datos de entrenamiento, ademas de una hoja de entrenamiento recomendada.',
      },
      fr: {
        title: "Handwriting Formatting Pipeline",
        summary:
          'Une extension/pipeline pour "My Text in Your Handwriting" de Thaines. Elle comprend le formatage du texte, une prise en charge limitee de Unicode->ASCII, un pipeline de mise en page pour l\'impression, ainsi que des macros/outils de traitement des donnees d\'entrainement, plus une feuille d\'entrainement recommandee.',
      },
      de: {
        title: "Handwriting Formatting Pipeline",
        summary:
          'Eine Erweiterung/Pipeline fur "My Text in Your Handwriting" von Thaines. Enthalt Textformatierung, begrenzte Unicode->ASCII-Unterstutzung, eine Druckformatierungs-Pipeline sowie Makros/Tools zur Verarbeitung von Trainingsdaten plus ein empfohlenes Trainingsblatt.',
      },
      hu: {
        title: "Handwriting Formatting Pipeline",
        summary:
          'Egy kiegeszites/pipeline a Thaines-fele "My Text in Your Handwriting" projekthez. Tartalmaz szovegformazast, korlatozott Unicode->ASCII tamogatast, egy nyomtatasra optimalizalt formazasi pipeline-t, valamint tanitoadat-feldolgozo makrokat/eszkozoket, plusz egy ajanlott gyakorlolapot.',
      },
    },
  },
  {
    id: "portfolio-analytics-tool",
    tech: ["Python", "yfinance", "NumPy", "Pandas", "SciPy", "Matplotlib"],
    links: {},
    image: {
      src: "https://i.ibb.co/rhhQhcj/python-CEp-LD2-TERt.png",
      alt: "Preview of Portfolio Analytics Tool",
    },
    translations: {
      en: {
        title: "Portfolio Analytics Tool",
        summary:
          "Portfolio Analytics Tool is a Python script using yfinance, NumPy, Pandas, and SciPy that builds portfolios from share holdings and analyzes performance with Sharpe, Sortino, max drawdown etc., while also generating an efficient frontier and optimized portfolios with matplotlib visualizations. My current best portfolio is 1.74 Sharpe and 2.52 Sortino.",
      },
      es: {
        title: "Portfolio Analytics Tool",
        summary:
          "Portfolio Analytics Tool es un script en Python con yfinance, NumPy, Pandas y SciPy que construye carteras a partir de posiciones en acciones y analiza el rendimiento con Sharpe, Sortino, maximo drawdown, etc., ademas de generar una frontera eficiente y carteras optimizadas con visualizaciones en matplotlib. Mi mejor cartera actual tiene 1.74 de Sharpe y 2.52 de Sortino.",
      },
      fr: {
        title: "Portfolio Analytics Tool",
        summary:
          "Portfolio Analytics Tool est un script Python utilisant yfinance, NumPy, Pandas et SciPy qui construit des portefeuilles a partir de positions en actions et analyse la performance avec Sharpe, Sortino, drawdown maximal, etc., tout en generant une frontiere efficiente et des portefeuilles optimises avec des visualisations matplotlib. Mon meilleur portefeuille actuel affiche un Sharpe de 1.74 et un Sortino de 2.52.",
      },
      de: {
        title: "Portfolio Analytics Tool",
        summary:
          "Portfolio Analytics Tool ist ein Python-Skript mit yfinance, NumPy, Pandas und SciPy, das Portfolios aus Aktienbestanden aufbaut und die Performance mit Sharpe, Sortino, maximalem Drawdown usw. analysiert, wahrend es zugleich eine effiziente Frontier und optimierte Portfolios mit matplotlib-Visualisierungen erzeugt. Mein aktuell bestes Portfolio hat 1.74 Sharpe und 2.52 Sortino.",
      },
      hu: {
        title: "Portfolio Analytics Tool",
        summary:
          "Portfolio Analytics Tool egy Python szkript yfinance, NumPy, Pandas es SciPy csomagokkal, amely reszvenyallomanybol epiti fel a portfoliokat, majd Sharpe, Sortino, maximalis visszaeses stb. mutatokkal elemzi a teljesitmenyt, mikozben hatekony hatarvonalat es optimalizalt portfoliokat general matplotlib vizualizaciokkal. A jelenlegi legjobb portfoliom 1.74 Sharpe es 2.52 Sortino.",
      },
    },
  },
  {
    id: "grammar-trainer",
    tech: ["Python", "Streamlit", "SQLite", "LLM"],
    links: {},
    image: {
      src: "https://i.ibb.co/qL6yXtff/opera-Wsc-Rf-KREz-I.png",
      alt: "Preview of Grammar Trainer",
    },
    translations: {
      en: {
        title: "Grammar Trainer",
        summary:
          "A multifunctional grammar app that generates Spanish sentences with LLMs to help students practice identifying the different grammatical functions, providing instant feedback, explanations, and adaptive practice using SQLite-based performance tracking and personalized question generation.",
      },
      es: {
        title: "Grammar Trainer",
        summary:
          "Aplicacion gramatical multifuncion en Python que genera frases en espanol con LLM para ayudar a los estudiantes a practicar la identificacion de distintas funciones gramaticales, con feedback instantaneo, explicaciones y practica adaptativa mediante seguimiento del rendimiento en SQLite y generacion personalizada de preguntas.",
      },
      fr: {
        title: "Grammar Trainer",
        summary:
          "Application grammaticale multifonction en Python qui genere des phrases espagnoles via des LLM pour aider les eleves a pratiquer l'identification de differentes fonctions grammaticales, avec feedback immediat, explications et pratique adaptative basee sur un suivi des performances dans SQLite et une generation personnalisee de questions.",
      },
      de: {
        title: "Grammar Trainer",
        summary:
          "Eine multifunktionale Grammatik-App in Python, die mit LLM spanische Satze erzeugt, damit Schulerinnen und Schuler verschiedene grammatische Funktionen erkennen uben konnen, mit sofortigem Feedback, Erklarungen und adaptivem Training auf Basis von SQLite-Leistungstracking und personalisierter Fragengenerierung.",
      },
      hu: {
        title: "Grammar Trainer",
        summary:
          "Egy tobbfunkcios nyelvtani alkalmazas Pythonban, amely LLM-ekkel spanyol mondatokat general, hogy segitse a diakokat a kulonbozo nyelvtani funkciok felismeresenek gyakorlasaban, azonnali visszajelzessel, magyarazatokkal, SQLite-alapu teljesitmenykovetessel es szemelyre szabott feladatgeneralassal.",
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
        summary: "A Theory of Consciousness as an External Observer Dependent on the Brain",
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
