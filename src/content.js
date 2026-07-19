// Data hub for projects and experience with per-language fields.
// Add/edit items here: each entry has translations for en, es, fr, de, hu.

export const PROJECTS_CONTENT = [
  {
    id: "ti-nspire-cxii-custom-keyboard-remap",
    tech: ["C", "Ndless", "RAM Hooks"],
    links: {
      github: "https://github.com/Martonveghcode/tiNspire-CXii-keyboard-remap",
    },
    image: {
      src: "/projects/ti-nspire-cxii-keyboard-remap.gif",
      alt: "TI Nspire CX II keyboard remap demo",
      width: 892,
      height: 652,
    },
    translations: {
      en: {
        title: "TI-Nspire CX II Custom Keyboard Remap",
        summary:
          "A small Ndless app that rewrites alphabetic key events into a QWERTY-style layout on the TI-Nspire CX II CAS, while leaving modifiers and non-letter keys alone.",
      },
      es: {
        title: "TI-Nspire CX II Custom Keyboard Remap",
        summary:
          "Reasigna la entrada alfabética en la TI-Nspire CX II CAS a una distribución de estilo QWERTY mediante un hook de RAM de Ndless en la cola de eventos del sistema, haciendo la escritura más familiar mientras conserva el comportamiento nativo del teclado de la calculadora.",
      },
      fr: {
        title: "TI-Nspire CX II Custom Keyboard Remap",
        summary:
          "Remappe la saisie alphabétique sur la TI-Nspire CX II CAS en une disposition de type QWERTY grâce à un hook RAM Ndless sur la file d'événements du système, rendant la frappe plus familière tout en préservant le comportement natif du clavier de la calculatrice",
      },
      de: {
        title: "TI-Nspire CX II Custom Keyboard Remap",
        summary:
          "Ordnet die alphabetische Eingabe auf dem TI-Nspire CX II CAS mithilfe eines Ndless-RAM-Hooks in der Ereigniswarteschlange des Betriebssystems einem QWERTY-ähnlichen Layout zu, wodurch das Tippen vertrauter wird, während das native Tastaturverhalten des Rechners erhalten bleibt.",
      },
      hu: {
        title: "TI-Nspire CX II Custom Keyboard Remap",
        summary:
          "A TI-Nspire CX II CAS betűbevitelét QWERTY-stílusú kiosztásra alakítja egy Ndless RAM-hook segítségével az operációs rendszer eseménysorán, ismerősebbé téve a gépelést, miközben megőrzi a számológép natív billentyűzetműködését.",
      },
    },
  },
  {
    id: "macro-recorder-plus",
    tech: ["Python", "PySide6", "Automation"],
    links: {
      github: "https://github.com/Martonveghcode/macro-recorder-plus",
    },
    image: {
      src: "/projects/macro-recorder-plus.png",
      alt: "Preview of Macro Recorder Plus",
      width: 1600,
      height: 950,
    },
    translations: {
      en: {
        title: "Macro Recorder +",
        summary:
          "A Windows desktop app for recording keyboard and mouse input, editing each action, and exporting the finished workflow as a Python script or executable.",
      },
      es: {
        title: "Macro Recorder +",
        summary:
          "El grabador de macros que realmente funciona. App de escritorio para Windows hecha con Python y PySide6 para grabar, editar, reproducir y exportar flujos de teclado y raton. Exporta a .py y .exe para que tus macros se ejecuten sin esfuerzo. Totalmente de codigo abierto y gratis.",
      },
      fr: {
        title: "Macro Recorder +",
        summary:
          "L'enregistreur de macros qui fonctionne vraiment. App de bureau Windows construite avec Python et PySide6 pour enregistrer, modifier, rejouer et exporter des flux clavier-souris. Exporte en .py et .exe pour faire tourner vos macros sans effort. Entierement open source et gratuit.",
      },
      de: {
        title: "Macro Recorder +",
        summary:
          "Der Makrorekorder, der wirklich funktioniert. Windows-Desktop-App mit Python und PySide6 zum Aufzeichnen, Bearbeiten, Wiedergeben und Exportieren von Tastatur- und Mausablaufen. Exportiert nach .py und .exe, damit deine Makros reibungslos laufen. Vollstandig open source und kostenlos.",
      },
      hu: {
        title: "Macro Recorder +",
        summary:
          "A makrorogzito, ami tenyleg mukodik. Windows asztali app Python es PySide6 alapon, billentyuzet- es egerfolyamatok rogzitesehez, szerkesztesehez, lejatszasahoz es exportalasahoz. .py es .exe formatumba exportal, hogy a makroid konnyeden fussanak. Teljesen nyilt forraskodu es ingyenes.",
      },
    },
  },
  {
    id: "calendar",
    tech: ["React", "Automation"],
    links: {
      github: "https://github.com/Martonveghcode/calendar",
    },
    image: {
      src: "/projects/homework-calendar-dashboard.png",
      alt: "Preview of Homework Calendar",
      width: 1505,
      height: 940,
    },
    translations: {
      en: {
        title: "Homework Calendar",
        summary:
          "A student calendar built around recurring lessons, with a focused flow for turning classes, tests, and homework into Google Calendar events.",
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
      src: "/projects/handwriting-formatting-pipeline.png",
      alt: "Placeholder preview for Handwriting Formatting Pipeline",
      width: 759,
      height: 470,
    },
    translations: {
      en: {
        title: "Handwriting Formatting Pipeline",
        summary:
          "A set of Python and desktop tools that take handwriting-synthesis output through text cleanup, training-data preparation, and printable page formatting.",
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
      src: "/projects/portfolio-analytics-tool.png",
      alt: "Preview of Portfolio Analytics Tool",
      width: 1250,
      height: 750,
    },
    translations: {
      en: {
        title: "Portfolio Analytics Tool",
        summary:
          "A Python research tool for comparing a real portfolio with efficient-frontier scenarios through risk-adjusted returns, drawdown, and optimization plots.",
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
    id: "habitro",
    tech: ["Python", "SQLite", "Education"],
    links: {
      github: "https://github.com/Martonveghcode/Habitro",
    },
    image: {
      src: "/projects/habitro.png",
      alt: "Preview of Habitro",
      width: 1379,
      height: 776,
    },
    translations: {
      en: {
        title: "Habitro",
        summary:
          "A daily practice system that uses SQLite history to keep mistakes, previous attempts, and subject-specific exercises in one repeatable learning workflow.",
      },
      es: {
        title: "Habitro",
        summary:
          "Un sistema de aprendizaje diario optimizado para retener y aprender material escolar. Tiene seguimiento individualizado del rendimiento con SQLite y un flujo de estudio diario; en mi caso incluye gramatica espanola, catalan y ejercicios de matematicas que hago cada dia.",
      },
      fr: {
        title: "Habitro",
        summary:
          "Un systeme d'apprentissage quotidien optimise pour retenir et apprendre les matieres scolaires. Il inclut un suivi individualise des performances avec SQLite et un flux de travail quotidien; dans mon cas, il couvre la grammaire espagnole, le catalan et des exercices de mathematiques que je fais chaque jour.",
      },
      de: {
        title: "Habitro",
        summary:
          "Ein tagliches Lernsystem, optimiert zum Behalten und Lernen von Schulstoff. Es bietet individuelles SQLite-basiertes Leistungstracking und einen taglichen Lernablauf; in meinem Fall umfasst es spanische Grammatik, Katalanisch und Mathematikubungen, die ich jeden Tag mache.",
      },
      hu: {
        title: "Habitro",
        summary:
          "Napi tanulasi rendszer, amely az iskolai anyag megtartasara es megtanulasara van optimalizalva. Egyeni, SQLite-alapu teljesitmenykovetest es napi tanulasi workflow-t hasznal; az en esetemben spanyol nyelvtant, katalant es napi matematika feladatokat tartalmaz.",
      },
    },
  },
];

export const EXPERIENCE_CONTENT = [
  {
    id: "casal-escorxador",
    period: "2026",
    translations: {
      en: {
        title: "Casal de s'Escorxador - Volunteer",
        detail: "Volunteer support for older adults with dementia, helping with daily activities, companionship, and supervised care routines.",
      },
      es: {
        title: "Casal de s'Escorxador - Voluntariado",
        detail: "Apoyo voluntario a personas mayores con demencia, ayudando en actividades diarias, compania y rutinas supervisadas de cuidado.",
      },
      fr: {
        title: "Casal de s'Escorxador - Benevolat",
        detail: "Soutien benevole a des personnes agees atteintes de demence, avec aide aux activites quotidiennes, compagnie et routines de soin supervisees.",
      },
      de: {
        title: "Casal de s'Escorxador - Freiwilligenarbeit",
        detail: "Freiwillige Unterstutzung alterer Menschen mit Demenz, mit Hilfe bei Alltagsaktivitaten, Gesellschaft und betreuten Pflegeablaufen.",
      },
      hu: {
        title: "Casal de s'Escorxador - Onkentes munka",
        detail: "Onkentes tamogatas demenciaval elo idos embereknek, segitseggel a napi tevekenysegekben, tarsas jelenlettel es felugyelt gondozasi rutinokkal.",
      },
    },
  },
  {
    id: "bda",
    period: "2025",
    translations: {
      en: {
        title: "Budapest Design Apartments - Intern",
        detail:
          "Supported the remote management of short-term rental apartments by coordinating guest communications, monitoring bookings, updating listings, and assisting with administrative tasks through digital tools such as Booking.com and Hotelgram. Observed issue-resolution workflows involving maintenance, cleaning, and client support.",
      },
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
        detail:
          "Supported daily nautical operations by assisting with event and training logistics, preparing and maintaining kayak/canoe equipment, coordinating with coaches, and observing athlete development through structured sessions, safety routines, and on-site team support.",
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
