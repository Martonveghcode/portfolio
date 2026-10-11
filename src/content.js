// Data hub for projects and experience with per-language fields.
// Add/edit items here: each entry has translations for en, es, fr, de, hu.

export const PROJECTS_CONTENT = [
  {
    id: "dartvision",
    tech: ["Python", "OpenCV", "Computer Vision"],
    links: { github: "https://github.com/Martonveghcode/DartVision" },
    image: {
      src: "/projects/dartvision.png",
      alt: "DartVision scoring a three-dart visit: 3, 11 and 20, with 267 remaining",
      altTranslations: {
        es: "DartVision registra tres dardos: 3, 11 y 20, con 267 puntos restantes",
        fr: "DartVision compte trois fléchettes : 3, 11 et 20, avec 267 points restants",
        de: "DartVision erfasst drei Würfe: 3, 11 und 20, mit 267 Restpunkten",
        hu: "A DartVision három dobást rögzít: 3, 11 és 20, 267 maradék ponttal",
      },
      width: 1225,
      height: 825,
      fit: "contain",
    },
    translations: {
      en: {
        title: "DartVision",
        summary: "A Windows dart-scoring prototype that uses a camera and OpenCV to detect marked darts, track 301/501 visits, and let players correct individual scores.",
      },
      es: {
        title: "DartVision",
        summary: "Un prototipo para Windows que utiliza una cámara y OpenCV para detectar dardos marcados, registrar turnos de 301/501 y corregir puntuaciones individuales.",
      },
      fr: {
        title: "DartVision",
        summary: "Un prototype Windows qui utilise une caméra et OpenCV pour détecter des fléchettes marquées, suivre les volées en 301/501 et corriger chaque score.",
      },
      de: {
        title: "DartVision",
        summary: "Ein Windows-Prototyp, der mit einer Kamera und OpenCV markierte Darts erkennt, Aufnahmen in 301/501 erfasst und einzelne Punktzahlen korrigieren lässt.",
      },
      hu: {
        title: "DartVision",
        summary: "Windows-prototípus, amely kamerával és OpenCV-vel felismeri a megjelölt dartsokat, követi a 301/501-es köröket, és lehetővé teszi az egyes pontszámok javítását.",
      },
    },
  },
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
    id: "marvella-design",
    tech: ["React", "Vite", "Firebase"],
    links: {
      live: "https://marvela.design/#home",
      github: "https://github.com/Martonveghcode/Marvela-2",
    },
    image: {
      src: "/projects/marvella-design.png",
      alt: "Marvella Design multilingual website service",
      altTranslations: {
        es: "Servicio web multilingüe de Marvella Design",
        fr: "Service web multilingue Marvella Design",
        de: "Mehrsprachiger Webservice von Marvella Design",
        hu: "A Marvella Design többnyelvű webes szolgáltatása",
      },
      width: 1672,
      height: 941,
    },
    translations: {
      en: {
        title: "Marvella Design",
        summary:
          "My first startup idea: a multilingual web-design service with clear one-time packages, a client portal, and a responsive customer journey.",
      },
      es: {
        title: "Marvella Design",
        summary:
          "Mi primera idea de startup: un servicio multilingüe de diseño web con paquetes claros de pago único, un portal de clientes y una experiencia adaptable.",
      },
      fr: {
        title: "Marvella Design",
        summary:
          "Ma première idée de startup : un service multilingue de création de sites web avec des forfaits clairs à paiement unique, un portail client et une expérience adaptative.",
      },
      de: {
        title: "Marvella Design",
        summary:
          "Meine erste Startup-Idee: ein mehrsprachiger Webdesign-Service mit klaren Einmalpreis-Paketen, Kundenportal und responsiver Nutzerführung.",
      },
      hu: {
        title: "Marvella Design",
        summary:
          "Az első startupötletem: többnyelvű webdesign-szolgáltatás egyértelmű, egyszeri díjas csomagokkal, ügyfélportállal és reszponzív ügyfélúttal.",
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
      alt: "Preview of Handwriting generation pipeline",
      width: 759,
      height: 470,
    },
    translations: {
      en: {
        title: "Handwriting generation pipeline",
        summary:
          "A modernized Ubuntu 24.04/Python toolchain for faster handwriting synthesis, training-data preparation, and printable PDF export.",
      },
      es: {
        title: "Handwriting generation pipeline",
        summary:
          'Una extension/pipeline para "My Text in Your Handwriting" de Thaines. Incluye formateo de texto, soporte limitado de Unicode->ASCII, un pipeline de formateo para impresion y macros/utilidades para procesar datos de entrenamiento, ademas de una hoja de entrenamiento recomendada.',
      },
      fr: {
        title: "Handwriting generation pipeline",
        summary:
          'Une extension/pipeline pour "My Text in Your Handwriting" de Thaines. Elle comprend le formatage du texte, une prise en charge limitee de Unicode->ASCII, un pipeline de mise en page pour l\'impression, ainsi que des macros/outils de traitement des donnees d\'entrainement, plus une feuille d\'entrainement recommandee.',
      },
      de: {
        title: "Handwriting generation pipeline",
        summary:
          'Eine Erweiterung/Pipeline fur "My Text in Your Handwriting" von Thaines. Enthalt Textformatierung, begrenzte Unicode->ASCII-Unterstutzung, eine Druckformatierungs-Pipeline sowie Makros/Tools zur Verarbeitung von Trainingsdaten plus ein empfohlenes Trainingsblatt.',
      },
      hu: {
        title: "Handwriting generation pipeline",
        summary:
          'Egy kiegeszites/pipeline a Thaines-fele "My Text in Your Handwriting" projekthez. Tartalmaz szovegformazast, korlatozott Unicode->ASCII tamogatast, egy nyomtatasra optimalizalt formazasi pipeline-t, valamint tanitoadat-feldolgozo makrokat/eszkozoket, plusz egy ajanlott gyakorlolapot.',
      },
    },
  },
  {
    id: "chess-anki-maker",
    tech: ["React", "TypeScript", "Python", "Anki"],
    links: {
      github: "https://github.com/Martonveghcode/chess-anki-maker",
    },
    image: {
      src: "/projects/chess-anki-maker.png",
      alt: "Chess Anki Maker board editor",
      altTranslations: {
        es: "Editor de tablero de Chess Anki Maker",
        fr: "Éditeur d'échiquier de Chess Anki Maker",
        de: "Bretteditor von Chess Anki Maker",
        hu: "A Chess Anki Maker sakktábla-szerkesztője",
      },
      width: 1127,
      height: 1088,
    },
    translations: {
      en: {
        title: "Chess Anki Maker",
        summary:
          "A local editor for building normal or interactive chess cards, recording move sequences, and exporting ready-to-import Anki decks.",
      },
      es: {
        title: "Chess Anki Maker",
        summary:
          "Un editor local para crear tarjetas de ajedrez normales o interactivas, grabar secuencias de jugadas y exportar mazos listos para Anki.",
      },
      fr: {
        title: "Chess Anki Maker",
        summary:
          "Un éditeur local pour créer des cartes d'échecs classiques ou interactives, enregistrer des suites de coups et exporter des paquets prêts pour Anki.",
      },
      de: {
        title: "Chess Anki Maker",
        summary:
          "Ein lokaler Editor zum Erstellen normaler oder interaktiver Schachkarten, Aufzeichnen von Zugfolgen und Exportieren fertiger Anki-Decks.",
      },
      hu: {
        title: "Chess Anki Maker",
        summary:
          "Helyi szerkesztő hagyományos vagy interaktív sakk-kártyák készítéséhez, lépéssorok rögzítéséhez és Anki-importálásra kész paklik exportálásához.",
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
