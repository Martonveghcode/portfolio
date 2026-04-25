// Data hub for projects, papers, and experience with per-language fields.
// Add/edit items here: each entry has translations for en, es, fr, de, hu.

import { GOOGLE_DOC_DOCUMENTS } from "./paperDocuments.js";

const googleDocDocument = (document) => ({ ...document, displayMode: "google-doc-export" });

export const PROJECTS_CONTENT = [
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
      src: "/projects/handwriting-formatting-pipeline.png",
      alt: "Placeholder preview for Handwriting Formatting Pipeline",
      width: 759,
      height: 470,
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
      src: "/projects/portfolio-analytics-tool.png",
      alt: "Preview of Portfolio Analytics Tool",
      width: 1250,
      height: 750,
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
      src: "/projects/grammar-trainer.png",
      alt: "Preview of Grammar Trainer",
      width: 1617,
      height: 921,
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
    id: "paper-narrative-premium-market-discontinuity",
    translations: {
      en: {
        title: "Narrative Premium and the Discontinuity of Modern Markets",
        summary:
          "An argument that modern markets often turn headlines, policy hints, and early company results into broad conclusions before the underlying reality has changed.",
        status: "Draft",
        document: {
          title: "Narrative Premium and the Discontinuity of Modern Markets",
          sections: [
            {
              heading: "Abstract",
              paragraphs: [
                "Modern markets are increasingly willing to move before the underlying facts have actually changed at all. The clearest version of this is the Trump headline trade: a comment, post, tariff pause, ceasefire claim, or negotiation hint can move indexes, oil, and semiconductors up or down 10% long before the policy, war, trade route, or earnings reality is settled. This paper argues that recent moves in equities, oil, Intel, ASML, and Nvidia and in general show a market structure that is too quick to turn headlines into broad conclusions. The issue is that markets often treat comments, partial signals, and early company results as if they already prove the full economic outcome of the situation.",
              ],
            },
            {
              heading: "POINTS",
              paragraphs: [
                "The strongest example is Trump's ability to move markets almost instantly. In April 2025, after Trump announced a 90-day tariff pause, the S&P 500 jumped about 9.5%-9.6%, the Nasdaq rose 12.2%, and roughly $4 trillion was added to S&P 500 market value in one day, according to Reuters. (Reuters) That was not because factories, trade flows, or consumer demand changed in a few hours. It happened because investors quickly repriced what they thought the next version of policy might be. The same pattern appeared around the Iran conflict. Stocks rallied on ceasefire relief even while Reuters was still reporting ship seizures in the Strait of Hormuz and CEOs were warning about prolonged energy costs. (Reuters) That is the point: the market was trading Trump's signal before the underlying geopolitical and energy system had resolved. This matters more with Trump because his comments are often outright not true, tactical, contradictory, and designed to create leverage. The markets react to his posts on Truth-Social about the straight of Hormuz being reopened like if it were a message from God, except that we find out 2 hours later that ships are getting shot at while passing through.",
                "Oil shows the same problem in a more physical market. The Strait of Hormuz is not some abstract story: the IEA says around 20 million barrels per day of crude and oil products moved through it in 2025, about 25% of seaborne oil trade, and flows later plunged during the conflict. (IEA) That should move prices. But the speed of the moves is the issue. USO rose roughly 25% in four trading days, then dropped almost 10% in one day. The Guardian reported that oil plunged after Trump announced a \"Totally free and open straight of hormuz\" and conditional ceasefire. (The Guardian) But later we find out that this is not the case. Reopening \"under management\" is not the same thing as normal shipping, normal insurance, repaired infrastructure, or stable production. If the war risk fades, oil can easily settle much lower than panic levels. A move back toward the $100-110 area would not be surprising, and if the war actually ends and the shipping risk clears, a return closer to $85-90 is possible. The broader point is that oil prices have been moving faster than the actual energy system can adjust.",
                "The semiconductor reaction looks even more stretched. Intel had a strong report, and the move in Intel itself makes sense up to a point. Business Insider reported that Intel posted $13.58 billion in revenue versus $12.42 billion expected, EPS of $0.29 versus $0.01 expected, data-center revenue up 22%, and foundry revenue up 16%. (Business Insider) Reuters also reported that Intel's forecast helped send U.S. chip stocks to record highs. (Reuters) That is where the market goes too far. Intel beating expectations does not automatically prove that the entire semiconductor sector deserves to rerate at once. It does not prove that every AI infrastructure name, every chip stock, and every related supplier has the same upside. Intel's result may show CPU demand is better than expected, but it does not prove a full sector-wide acceleration.",
                "ASML is almost the reverse case: the market can punish a company for near-term policy risk while ignoring the long-term monopoly position of the business. Reuters reported that ASML fell after U.S. lawmakers proposed tighter China restrictions on DUV immersion lithography tools, with China expected to be about 20% of ASML's 2026 sales and JPMorgan estimating up to a 10% EPS impact. (Reuters) That is a real risk, but it does not erase ASML's strategic position. ASML is still one of the most important companies in the global semiconductor supply chain, and the market often seems to price the policy headline without fully considering the long-term bottleneck value of the company. The same applies to AI capital expenditure. Investors often treat announced spending as if it automatically becomes finished data centers, deployed GPUs, and future profit. But recent reporting says almost half of planned U.S. data centers for 2026 may be delayed or canceled because of power, transformers, switchgear, batteries, and other infrastructure limits. (Bloomberg) That makes the AI trade more fragile than the headline capex numbers suggest. Nvidia can still be a great company, and AI demand can still be huge, but capital expenditure is not revenue until the infrastructure is actually built, powered, and used profitably.",
              ],
            },
            {
              heading: "Conclusion",
              paragraphs: [
                "The modern market is too willing to trade the headline as if it already contains the outcome. Trump says something, and the market moves. Intel beats, and the whole semiconductor sector rallies. ASML gets hit by export-control risk, and investors compress a long-term monopoly-like position into a short-term policy trade. Oil spikes or collapses on ceasefire language even though shipping, production, insurance, and infrastructure take much longer to normalize.",
                "That is the discontinuity. Prices are moving on comments, hype, policy hints, and early interpretations faster than the underlying economy can change. Sometimes the move is directionally right. The problem is size and speed. The market is often too confident too early.",
              ],
            },
          ],
        },
      },
    },
  },
  {
    id: "paper-aldar-2q25-report",
    translations: {
      en: {
        title: "Revised ALDAR 2Q25 Report",
        summary:
          "A revised and improved upon version of the original report published by UAE Equity Research.",
        status: "Report",
        link: "https://docs.google.com/document/d/1GjpRo6A48ZVIfTBseMVwPqdbt_Gwc-6z-N1JFiroatE/edit?usp=sharing",
      },
      es: {
        title: "Revised ALDAR 2Q25 Report",
        summary:
          "Una version revisada y mejorada del informe original publicado por UAE Equity Research.",
        status: "Informe",
        link: "https://docs.google.com/document/d/1GjpRo6A48ZVIfTBseMVwPqdbt_Gwc-6z-N1JFiroatE/edit?usp=sharing",
      },
      fr: {
        title: "Revised ALDAR 2Q25 Report",
        summary:
          "Une version revisee et amelioree du rapport original publie par UAE Equity Research.",
        status: "Rapport",
        link: "https://docs.google.com/document/d/1GjpRo6A48ZVIfTBseMVwPqdbt_Gwc-6z-N1JFiroatE/edit?usp=sharing",
      },
      de: {
        title: "Revised ALDAR 2Q25 Report",
        summary:
          "Eine uberarbeitete und verbesserte Version des ursprunglichen Berichts, der von UAE Equity Research veroffentlicht wurde.",
        status: "Bericht",
        link: "https://docs.google.com/document/d/1GjpRo6A48ZVIfTBseMVwPqdbt_Gwc-6z-N1JFiroatE/edit?usp=sharing",
      },
      hu: {
        title: "Revised ALDAR 2Q25 Report",
        summary:
          "Az UAE Equity Research altal publikalt eredeti jelentes atdolgozott es tovabbfejlesztett valtozata.",
        status: "Jelentes",
        link: "https://docs.google.com/document/d/1GjpRo6A48ZVIfTBseMVwPqdbt_Gwc-6z-N1JFiroatE/edit?usp=sharing",
      },
    },
  },
  {
    id: "paper-3",
    document: googleDocDocument(GOOGLE_DOC_DOCUMENTS.singerCritique),
    translations: {
      en: {
        title: "A critique on Famine, Affluence and Morality",
        summary:
          "A critique of Peter Singer arguing that, while his demand for near-total charitable sacrifice may be morally compelling in theory, it is unrealistic because human motivation is built around relative improvement, status, and inequality rather than equality.",
        status: "Draft",
        link: "https://docs.google.com/document/d/1NyIs5iayQ69dcyUi4G92bpA0n4TWqpYGQI6upaur6Nc/edit?usp=sharing",
      },
      es: {
        title: "A critique on Famine, Affluence and Morality",
        summary:
          "A critique of Peter Singer arguing that, while his demand for near-total charitable sacrifice may be morally compelling in theory, it is unrealistic because human motivation is built around relative improvement, status, and inequality rather than equality.",
        status: "Borrador",
        link: "https://docs.google.com/document/d/1NyIs5iayQ69dcyUi4G92bpA0n4TWqpYGQI6upaur6Nc/edit?usp=sharing",
      },
      fr: {
        title: "A critique on Famine, Affluence and Morality",
        summary:
          "A critique of Peter Singer arguing that, while his demand for near-total charitable sacrifice may be morally compelling in theory, it is unrealistic because human motivation is built around relative improvement, status, and inequality rather than equality.",
        status: "Brouillon",
        link: "https://docs.google.com/document/d/1NyIs5iayQ69dcyUi4G92bpA0n4TWqpYGQI6upaur6Nc/edit?usp=sharing",
      },
      de: {
        title: "A critique on Famine, Affluence and Morality",
        summary:
          "A critique of Peter Singer arguing that, while his demand for near-total charitable sacrifice may be morally compelling in theory, it is unrealistic because human motivation is built around relative improvement, status, and inequality rather than equality.",
        status: "Entwurf",
        link: "https://docs.google.com/document/d/1NyIs5iayQ69dcyUi4G92bpA0n4TWqpYGQI6upaur6Nc/edit?usp=sharing",
      },
      hu: {
        title: "A critique on Famine, Affluence and Morality",
        summary:
          "A critique of Peter Singer arguing that, while his demand for near-total charitable sacrifice may be morally compelling in theory, it is unrealistic because human motivation is built around relative improvement, status, and inequality rather than equality.",
        status: "Piszkozat",
        link: "https://docs.google.com/document/d/1NyIs5iayQ69dcyUi4G92bpA0n4TWqpYGQI6upaur6Nc/edit?usp=sharing",
      },
    },
  },
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
  {
    id: "paper-2",
    translations: {
      en: {
        title: "Why a World Without Inequality and Suffering Cannot Exist",
        summary: "I wish to argue that a world without inequality and suffering cannot exist.",
        status: "Draft",
        link: "https://docs.google.com/document/d/1G5LHGuydF6bf-0t5e3wA29iCAavrqbhzfU-rm3onV2I/edit?usp=sharing",
      },
      es: {
        title: "Why a World Without Inequality and Suffering Cannot Exist",
        summary: "I wish to argue that a world without inequality and suffering cannot exist.",
        status: "Borrador",
        link: "https://docs.google.com/document/d/1G5LHGuydF6bf-0t5e3wA29iCAavrqbhzfU-rm3onV2I/edit?usp=sharing",
      },
      fr: {
        title: "Why a World Without Inequality and Suffering Cannot Exist",
        summary: "I wish to argue that a world without inequality and suffering cannot exist.",
        status: "Brouillon",
        link: "https://docs.google.com/document/d/1G5LHGuydF6bf-0t5e3wA29iCAavrqbhzfU-rm3onV2I/edit?usp=sharing",
      },
      de: {
        title: "Why a World Without Inequality and Suffering Cannot Exist",
        summary: "I wish to argue that a world without inequality and suffering cannot exist.",
        status: "Entwurf",
        link: "https://docs.google.com/document/d/1G5LHGuydF6bf-0t5e3wA29iCAavrqbhzfU-rm3onV2I/edit?usp=sharing",
      },
      hu: {
        title: "Why a World Without Inequality and Suffering Cannot Exist",
        summary: "I wish to argue that a world without inequality and suffering cannot exist.",
        status: "Piszkozat",
        link: "https://docs.google.com/document/d/1G5LHGuydF6bf-0t5e3wA29iCAavrqbhzfU-rm3onV2I/edit?usp=sharing",
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
