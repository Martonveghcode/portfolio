import { PROJECTS_CONTENT } from "./content.js";
import { PROFILE, STACK } from "./siteData.js";
import { WHO_AM_I_CONTENT } from "./WHO_AM_I_CONTENT.js";

export const DEFAULT_SITE_URL = "https://marton.top";

export const PRIMARY_PAGE_PATHS = {
  home: "/",
  projects: "/projects/",
  experience: "/experience/",
  whoami: "/who-am-i/",
};

export const SITE_FOOTER_LINKS = [
  { href: "/projects/", label: "Projects" },
  { href: "/about/marton-vegh/", label: "About" },
  { href: "/experience/", label: "Experience" },
];

const projectById = Object.fromEntries(PROJECTS_CONTENT.map((project) => [project.id, project]));

const BASE_PERSON_SCHEMA = {
  "@type": "Person",
  name: PROFILE.name,
  email: PROFILE.email,
  jobTitle: "Student developer",
  image: "/profile/marton-vegh-portrait.jpg",
  homeLocation: {
    "@type": "Place",
    name: PROFILE.location,
  },
  knowsAbout: [
    ...STACK.core,
    ...STACK.learning,
    "Automation",
    "Quantitative finance",
    "Education software",
    "Portfolio analysis",
  ],
  sameAs: [
    PROFILE.githubUrl,
    PROFILE.instagramUrl,
    "https://orcid.org/0009-0004-2687-8812",
  ],
};

function getProjectTitle(projectId) {
  return projectById[projectId]?.translations?.en?.title ?? projectId;
}

function getProjectRepo(projectId) {
  return projectById[projectId]?.links?.github ?? "";
}

function getProjectTech(projectId) {
  return projectById[projectId]?.tech ?? [];
}

const ROUTE_DEFINITIONS = [
  {
    id: "home",
    path: "/",
    page: "home",
    type: "website",
    title: "Portfolio Marton | Frontend Developer, Python, Quant Projects",
    description:
      "Portfolio Marton showcases Marton Vegh's React, Python, education software, and quantitative finance projects through detailed case studies and technical context.",
    image: "/profile/marton-vegh-portrait.jpg",
    hiddenHeading: "Portfolio Marton: frontend, Python, and quantitative project portfolio",
    hiddenParagraphs: [
      "Portfolio Marton is the personal portfolio site of Marton Vegh, a student developer based in Mallorca, Spain. The work shown here focuses on practical software projects in React, JavaScript, Python, automation, and quantitative analysis.",
      "The project case studies explain the problems behind each build, the tools used, and the decisions that shaped the result. They range from student planning and daily learning tools to document automation and portfolio analysis.",
    ],
    relatedPaths: [
      "/services/frontend-react-development/",
      "/services/python-automation-analysis/",
      "/services/education-software-tools/",
      "/projects/homework-calendar/",
      "/projects/portfolio-analytics-tool/",
      "/about/marton-vegh/",
    ],
  },
  {
    id: "projects",
    path: "/projects/",
    page: "projects",
    type: "collection",
    title: "Project Portfolio | React, Python, Automation Case Studies | Portfolio Marton",
    description:
      "Browse selected software projects by Marton Vegh, including React education tools, Python analysis workflows, and automation-focused experiments.",
    image: "/projects/homework-calendar-dashboard.png",
    hiddenHeading: "Selected software projects and case studies by Marton Vegh",
    hiddenParagraphs: [
      "This collection spans frontend development, automation, data analysis, and education-focused tooling. Each case study expands on the problem, implementation choices, and practical use of the project beyond the summary shown in the gallery.",
      "The React work concentrates on clear, state-driven interfaces for recurring tasks. The Python projects cover document pipelines, individualized learning records, and quantitative portfolio analysis, with an emphasis on replacing repetitive work with maintainable workflows.",
    ],
    relatedPaths: [
      "/projects/ti-nspire-keyboard-remap/",
      "/projects/macro-recorder-plus/",
      "/projects/homework-calendar/",
      "/projects/handwriting-formatting-pipeline/",
      "/projects/portfolio-analytics-tool/",
      "/projects/habitro/",
    ],
  },
  {
    id: "experience",
    path: "/experience/",
    page: "experience",
    type: "webpage",
    title: "Experience | Operations, Coordination, Team Support | Portfolio Marton",
    description:
      "Experience timeline for Marton Vegh, including internships, volunteer support, client coordination, event logistics, administrative workflows, and on-site team support.",
    image: "/profile/marton-vegh-canoe-sprint.jpg",
    hiddenHeading: "Experience background in coordination, logistics, and operational support",
    hiddenParagraphs: [
      "The experience page documents hands-on work in client coordination, event logistics, volunteer support, team support, and operational workflow contexts. These roles complement the project work by showing experience with practical execution, communication, and organization.",
      "The timeline includes volunteer work at Casal de s'Escorxador supporting older adults with dementia, plus internships at Budapest Design Apartments and Real Club Nautico de Palma covering administrative workflows, client-facing coordination, racing-team support, and on-site logistics.",
    ],
    relatedPaths: ["/about/marton-vegh/", "/projects/", "/"],
  },
  {
    id: "whoami",
    path: "/who-am-i/",
    page: "whoami",
    type: "profile",
    title: "Who Is Marton Vegh | Student Developer Profile | Portfolio Marton",
    description:
      "Profile page for Marton Vegh covering education, languages, sports achievements, interests, and personal background behind the portfolio.",
    image: "/profile/marton-vegh-portrait.jpg",
    hiddenHeading: "Background profile for Marton Vegh",
    hiddenParagraphs: [
      "This profile page covers the person behind Portfolio Marton: education history, languages, interests, reading and art preferences, and long-term sports background. It gives context for the portfolio by connecting the work to firsthand interests in mathematics, finance, programming, sports, books, and politics.",
      "Marton Vegh is a multilingual student developer based in Mallorca, Spain. The background shown here includes formal study, practical experimentation with software, and competitive canoe sprint experience with regional and national results.",
    ],
    relatedPaths: ["/about/marton-vegh/", "/experience/", "/projects/"],
  },
  {
    id: "profile",
    path: "/about/marton-vegh/",
    page: "profile",
    type: "profile",
    title: "About Marton Vegh | Multilingual Student Developer Portfolio",
    description:
      "Professional profile of Marton Vegh, a multilingual student developer in Mallorca building practical software with React, Python, JavaScript, C, and C++.",
    image: "/profile/marton-vegh-portrait.jpg",
    hiddenHeading: "About Marton Vegh",
    hiddenParagraphs: [
      "Marton Vegh is a student developer based in Mallorca, Spain. He builds practical software with React, JavaScript, Python, C, and C++, focusing on automation, education tools, and quantitative finance.",
      "His independent work includes a student calendar, an individualized learning system, a handwriting-formatting pipeline, and a portfolio analytics tool. Across these projects he handles problem definition, implementation, testing, and documentation.",
      "He studies in an international environment and works across Hungarian, English, Spanish, French, and Catalan. GitHub, project case studies, and the experience timeline provide the supporting record for this professional profile.",
    ],
    relatedPaths: ["/who-am-i/", "/projects/", "/experience/"],
  },
  {
    id: "privacy",
    path: "/privacy/",
    page: "privacy",
    type: "webpage",
    title: "Privacy and Cookies | Portfolio Marton",
    description:
      "Privacy and cookie information for Portfolio Marton, including contact form data, cookie consent records, local preferences, and external profile links.",
    image: "/profile/marton-vegh-portrait.jpg",
    hiddenHeading: "Privacy and cookie information for Portfolio Marton",
    hiddenParagraphs: [
      "Portfolio Marton uses a small amount of data to keep the site functional, remember basic preferences, and receive messages through the contact form.",
      "The cookie preference banner records whether a visitor accepted or declined preferences, along with basic browser and page context needed to store that choice. The contact form collects the name, email address, and message a visitor submits.",
      "The site also links to external services such as GitHub, ORCID, Google Docs, Gmail, and project repositories. Those services have their own privacy practices when opened.",
    ],
    relatedPaths: ["/about/marton-vegh/", "/projects/", "/"],
  },
  {
    id: "service-frontend",
    path: "/services/frontend-react-development/",
    page: "service",
    type: "collection",
    title: "Frontend Projects | React and JavaScript Portfolio | Marton Vegh",
    description:
      "Browse frontend projects by Marton Vegh, including Homework Calendar, a responsive React app for moving recurring school events into Google Calendar.",
    image: "/projects/homework-calendar-dashboard.png",
    hiddenHeading: "Frontend projects built with React and JavaScript",
    hiddenParagraphs: [
      "I build interfaces around tasks I actually need to complete. Homework Calendar is the main React example: it turns a recurring school timetable into class, test, and homework events for Google Calendar.",
      "Start with the case study for the interface and workflow decisions, or browse the full projects page for desktop automation, Python tooling, education software, and more.",
    ],
    relatedPaths: ["/projects/", "/projects/homework-calendar/"],
  },
  {
    id: "service-python",
    path: "/services/python-automation-analysis/",
    page: "service",
    type: "service",
    title: "Python Developer Portfolio | Automation, Analysis, Workflow Tools | Portfolio Marton",
    description:
      "Python portfolio page featuring automation workflows, document pipelines, portfolio analytics, and data-focused project work by Marton Vegh.",
    image: "/projects/portfolio-analytics-tool.png",
    hiddenHeading: "Python automation and analytics portfolio",
    hiddenParagraphs: [
      "The Python work covers automation, analysis, and workflow tooling. These projects use reusable components to structure data, reduce repetitive processing, and turn technical output into information that is easier to act on.",
      "The Handwriting Formatting Pipeline extends an existing handwriting-generation workflow with formatting, print preparation, limited Unicode-to-ASCII support, and training-data utilities. Portfolio Analytics Tool focuses on financial analysis, using market data and portfolio metrics to examine performance, drawdowns, and efficient-frontier scenarios.",
      "Together, these projects show two sides of the same Python skill set: operational tooling for documents and training workflows, and analytical tooling for finance and decision support. Each related case-study page adds context about the constraints, process, and technical stack involved.",
    ],
    relatedPaths: [
      "/projects/handwriting-formatting-pipeline/",
      "/projects/portfolio-analytics-tool/",
      "/projects/",
    ],
  },
  {
    id: "service-education",
    path: "/services/education-software-tools/",
    page: "service",
    type: "service",
    title: "Education Software Portfolio | Student Tools and Language Learning | Portfolio Marton",
    description:
      "Education software portfolio featuring student planning and language-learning tools built with React, Python, SQLite, and LLM-assisted workflows.",
    image: "/projects/habitro.png",
    hiddenHeading: "Education software and student tool portfolio",
    hiddenParagraphs: [
      "The education projects address student planning, daily practice, and language-learning workflows. They are built around concrete tasks such as organizing recurring lessons, exporting schedules, and adapting exercises to an individual learning record.",
      "Homework Calendar helps students manage recurring school structures in a browser-based interface and push the output into Google Calendar. Habitro uses SQLite-based performance tracking and a daily workflow to support retained learning across school material.",
      "Together, the projects explore two connected needs: keeping school commitments organized and making daily practice responsive to past performance. Their case studies explain the different technology choices behind the browser-based planner and the SQLite-backed learning system.",
    ],
    relatedPaths: ["/projects/homework-calendar/", "/projects/habitro/", "/projects/"],
  },
  {
    id: "case-study-keyboard-remap",
    path: "/projects/ti-nspire-keyboard-remap/",
    page: "case-study",
    type: "case-study",
    title: "TI-Nspire QWERTY Keyboard Remap | Ndless C Project | Marton Vegh",
    description:
      "A C and Ndless project that gives the TI-Nspire CX II CAS a QWERTY-style alphabet layout by rewriting selected OS key events in memory.",
    image: "/projects/ti-nspire-cxii-keyboard-remap.gif",
    media: [
      {
        src: "/projects/ti-nspire-cxii-keyboard-remap.gif",
        alt: "QWERTY keyboard remap typing in the TI-Nspire CX II emulator",
        width: 892,
        height: 652,
        caption: "The remap running in the calculator emulator: the physical alpha keys now produce a QWERTY-style sequence.",
      },
      {
        src: "/projects/ti-nspire-remap-terminal.png",
        alt: "TI-Nspire keyboard remap probe and install menu",
        width: 950,
        height: 1092,
        caption: "The probe and install screen checks the target OS before attaching the hook.",
      },
    ],
    hiddenHeading: getProjectTitle("ti-nspire-cxii-custom-keyboard-remap"),
    hiddenParagraphs: [
      "The TI-Nspire CX II CAS arranges its alphabet keys alphabetically, which is awkward for anyone who types by muscle memory on QWERTY. This project changes the characters delivered by those keys without changing the calculator's other input behavior.",
      "A resident Ndless hook intercepts the operating system event queue and rewrites only A-Z and a-z key events. Modifier combinations and non-letter keys pass through unchanged, and installation is gated by checks for the supported calculator OS and function fingerprint.",
      "The current build deliberately targets TI-Nspire CX II CAS OS 6.2.0.333. A probe mode prints the mapping on-device before installation, keeping the experiment testable and its compatibility limits explicit.",
    ],
    relatedPaths: ["/projects/", "/services/education-software-tools/"],
    repo: getProjectRepo("ti-nspire-cxii-custom-keyboard-remap"),
    tech: getProjectTech("ti-nspire-cxii-custom-keyboard-remap"),
    caseStudy: {
      facts: [
        { label: "Device", value: "TI-Nspire CX II CAS" },
        { label: "Target", value: "OS 6.2.0.333 with Ndless" },
        { label: "Scope", value: "Alphabetic key events only" },
      ],
      sections: [
        {
          title: "Remapping alphabetic input to QWERTY",
          paragraphs: [
            "The calculator's stock alpha layout follows its physical key order, not the keyboard layout most people already know. That is manageable for short variable names, but it becomes noticeably slow when entering commands or longer text.",
            "The remap keeps the hardware exactly as it is and changes the letter delivered to the active input field. The result feels familiar without replacing the rest of the calculator keyboard.",
          ],
        },
        {
          title: "Rewriting only letter events in the OS queue",
          paragraphs: [
            "The app attaches a resident hook to the OS event queue. It inspects alphabetic events, swaps the low ASCII byte through a small mapping table, and then hands control back to the operating system. Modifiers, non-letter keys, and the event's other data are left alone.",
            "Before installing, the app checks the calculator model, OS signature, and the expected first instructions at the hook location. Those checks keep a low-level edit tied to the one layout it was built and tested against.",
          ],
        },
        {
          title: "Limiting installation to OS 6.2.0.333",
          paragraphs: [
            "This is intentionally not advertised as a universal TI-Nspire patch. The current build supports the CX II CAS on OS 6.2.0.333, and a probe mode lets the mapping be checked on-screen before the hook is installed.",
          ],
        },
      ],
    },
  },
  {
    id: "case-study-macro-recorder",
    path: "/projects/macro-recorder-plus/",
    page: "case-study",
    type: "case-study",
    title: "Macro Recorder Plus | Editable Python Desktop Automation | Marton Vegh",
    description:
      "A Windows desktop macro editor built with Python and PySide6 for recording, refining, replaying, and exporting keyboard and mouse workflows.",
    image: "/projects/macro-recorder-plus.png",
    media: [
      {
        src: "/projects/macro-recorder-plus.png",
        alt: "Macro Recorder Plus editor showing a structured automation workflow",
        width: 1600,
        height: 950,
        caption: "Recorded and manual actions remain editable before playback or export.",
      },
    ],
    hiddenHeading: getProjectTitle("macro-recorder-plus"),
    hiddenParagraphs: [
      "Macro Recorder Plus records desktop keyboard and mouse input, but its main focus is what happens after recording: each event becomes an editable action in a structured workflow.",
      "The PySide6 interface supports recorded input alongside manual steps such as opening a URL, typing text, waiting, clicking an image, launching a program, and adding comments. Workflows can be replayed in the app or exported as Python scripts and optional Windows executables.",
      "Exported scripts include their runtime requirements and launcher files. Secret actions store an environment-variable name rather than a password, keeping credentials out of saved macro files.",
    ],
    relatedPaths: ["/projects/", "/services/python-automation-analysis/"],
    repo: getProjectRepo("macro-recorder-plus"),
    tech: getProjectTech("macro-recorder-plus"),
    caseStudy: {
      facts: [
        { label: "Platform", value: "Windows desktop" },
        { label: "Workflow", value: "Record, edit, replay, export" },
        { label: "Exports", value: "Python script or optional EXE" },
      ],
      sections: [
        {
          title: "Turning recorded input into editable actions",
          paragraphs: [
            "Raw mouse and keyboard events are rarely a finished automation. Timing needs adjustment, noisy actions need removing, and useful steps often need to be added by hand.",
            "Macro Recorder Plus turns the recording into a table of structured actions. Each row can be enabled, labelled, reordered, and edited; manual actions cover URLs, files, programs, typed text, waits, image clicks, and comments.",
          ],
        },
        {
          title: "Exporting workflows as Python scripts or executables",
          paragraphs: [
            "A workflow can be exported as a standalone Python script with its dependency list, asset folder, launcher, and run notes. An optional PyInstaller flow builds a Windows executable from the same export when a single-file handoff is more practical.",
            "The generated runner also accepts useful command-line controls such as playback speed, dry-run mode, and a starting action, so exported macros remain inspectable rather than becoming a black box.",
          ],
        },
        {
          title: "Keeping credentials out of saved macros",
          paragraphs: [
            "The Type Secret action saves only the name of an environment variable. The value is read at runtime, which avoids writing passwords directly into the macro file or generated script.",
          ],
        },
      ],
    },
  },
  {
    id: "case-study-homework-calendar",
    path: "/projects/homework-calendar/",
    page: "case-study",
    type: "case-study",
    title: "Homework Calendar | React and Google Calendar Project | Marton Vegh",
    description:
      "A React scheduling tool that turns recurring lessons, tests, and homework into Google Calendar events without maintaining a second isolated planner.",
    image: "/projects/homework-calendar-dashboard.png",
    media: [
      {
        src: "/projects/homework-calendar-dashboard.png",
        alt: "Homework Calendar dashboard with recurring lessons and event controls",
        width: 1505,
        height: 940,
        caption: "A lesson, weekly slot, event type, and notes come together in one calendar-export flow.",
      },
    ],
    hiddenHeading: getProjectTitle("calendar"),
    hiddenParagraphs: [
      "Homework Calendar treats recurring lessons as the stable part of a student's schedule. Each lesson keeps its weekly slots, so a class, test, or homework item can be created from information that is already structured.",
      "The React interface combines the selected lesson, date, event type, topic, and notes in one view, then sends the finished event to Google Calendar. It uses an existing calendar as the destination instead of asking the student to maintain another planner.",
      "Google Calendar access is configured explicitly through a user's own OAuth client and API key. Appearance settings are stored separately, keeping the scheduling workflow focused while still allowing the interface to be personalized.",
    ],
    relatedPaths: [
      "/services/frontend-react-development/",
      "/services/education-software-tools/",
      "/projects/",
    ],
    repo: getProjectRepo("calendar"),
    tech: getProjectTech("calendar"),
    caseStudy: {
      facts: [
        { label: "Interface", value: "React single-page app" },
        { label: "Calendar", value: "Google Calendar API" },
        { label: "Event types", value: "Class, test, homework" },
      ],
      sections: [
        {
          title: "Using Google Calendar as the final destination",
          paragraphs: [
            "Schoolwork often ends up split between a timetable, a homework list, and a calendar. Homework Calendar keeps the recurring timetable as its source material, then uses Google Calendar as the final place for dated events.",
            "That choice keeps the app focused: it prepares a well-structured event rather than trying to replace the rest of a student's planning system.",
          ],
        },
        {
          title: "Building events from recurring lesson data",
          paragraphs: [
            "Lessons store their regular weekly slots. To create an event, the student chooses a lesson and date, marks it as a class, test, or homework item, and adds the topic and notes. The relevant context stays visible beside the lesson list before anything is sent.",
            "The interface is state-driven, so changing the lesson or event type updates the same compact workflow instead of opening a chain of separate forms.",
          ],
        },
        {
          title: "Handling OAuth and saved preferences",
          paragraphs: [
            "Calendar access uses the student's own Google Cloud OAuth client and API key. Setup is a deliberate first-run step, while connection details and appearance preferences can be remembered for later sessions.",
          ],
        },
      ],
    },
  },
  {
    id: "case-study-handwriting",
    path: "/projects/handwriting-formatting-pipeline/",
    page: "case-study",
    type: "case-study",
    title: "Handwriting Formatting Pipeline | Python Print Workflow | Marton Vegh",
    description:
      "A Python and desktop-tool pipeline that prepares handwriting training data, formats synthesis input, and turns generated handwriting into printable pages.",
    image: "/projects/handwriting-formatting-pipeline.png",
    media: [
      {
        src: "/projects/handwriting-before.png",
        alt: "Generated handwriting before printable page formatting",
        width: 1326,
        height: 984,
        caption: "Synthesis output before page formatting: the handwriting is present, but it is not yet laid out as a printable sheet.",
      },
      {
        src: "/projects/handwriting-after.png",
        alt: "Generated handwriting arranged on a lined printable page",
        width: 901,
        height: 1266,
        caption: "The same text after spacing, line placement, and printable-page formatting.",
      },
    ],
    hiddenHeading: getProjectTitle("handwriting-pipeline"),
    hiddenParagraphs: [
      "The Handwriting Formatting Pipeline extends Thaines's My Text in Your Handwriting project with the surrounding tools needed to move from scanned samples to a printable result.",
      "The repository groups training-sheet preparation, scan cleanup, sample splitting, text formatting, limited Unicode-to-ASCII mapping, synthesis handoff, and printable-page layout. It also collects the compatibility notes needed to run the older upstream Python 2 and GTK tooling.",
      "The project does not replace the upstream synthesis engine. It packages the preparation and print workflow around it while keeping responsible personal, educational, and research use explicit.",
    ],
    relatedPaths: [
      "/services/python-automation-analysis/",
      "/projects/portfolio-analytics-tool/",
      "/projects/",
    ],
    repo: getProjectRepo("handwriting-pipeline"),
    tech: getProjectTech("handwriting-pipeline"),
    caseStudy: {
      facts: [
        { label: "Upstream", value: "My Text in Your Handwriting" },
        { label: "Project type", value: "Workflow extension and desktop tools" },
        { label: "Use", value: "Personal, educational, and research" },
      ],
      sections: [
        {
          title: "Preparing samples and input text for synthesis",
          paragraphs: [
            "Scanned handwriting samples need cleaning and splitting before they can be used for training. The target text also has to stay within the character set represented by those samples.",
            "The repository keeps the sample-preparation and text-compatibility tools alongside the formatting pipeline so the same steps can be repeated for later documents.",
          ],
        },
        {
          title: "Formatting generated lines for print",
          paragraphs: [
            "The synthesis output contains the generated handwriting, but it is not yet a printable sheet. The formatting stage places those lines on a page and applies the spacing shown in the finished example.",
            "Text formatting also includes a limited mapping for accented characters that the ASCII-only upstream pipeline cannot represent directly. It is a practical compatibility layer, not full Unicode support.",
          ],
        },
        {
          title: "Extending the workflow around the upstream model",
          paragraphs: [
            "The handwriting model and core synthesis work remain in the upstream project. This repository handles data preparation, text compatibility, repeatable formatting, printable output, and the environment notes required to keep the older Python 2 tooling running.",
          ],
        },
      ],
    },
  },
  {
    id: "case-study-portfolio-analytics",
    path: "/projects/portfolio-analytics-tool/",
    page: "case-study",
    type: "case-study",
    title: "Portfolio Analytics Tool | Python Risk and Optimization Project | Marton Vegh",
    description:
      "A Python research tool for comparing real holdings with risk-adjusted performance, drawdown, efficient-frontier, and optimized portfolio scenarios.",
    image: "/projects/portfolio-analytics-tool.png",
    media: [
      {
        src: "/projects/portfolio-analytics-tool.png",
        alt: "Efficient-frontier simulation with maximum-Sharpe and minimum-volatility portfolios marked",
        width: 1250,
        height: 750,
        caption: "Simulated portfolios make the return, volatility, and Sharpe trade-off visible; the two reference portfolios are called out directly.",
      },
    ],
    hiddenHeading: getProjectTitle("portfolio-analytics-tool"),
    hiddenParagraphs: [
      "Portfolio Analytics Tool turns share holdings and market data into a comparable set of return, volatility, drawdown, Sharpe, and Sortino measures.",
      "The Python workflow uses yfinance, NumPy, Pandas, SciPy, and Matplotlib to evaluate the current allocation beside simulated and optimized portfolios. The efficient-frontier plot highlights maximum-Sharpe and minimum-volatility reference points without hiding the rest of the distribution.",
      "The output is designed for research rather than automatic investment advice. Data windows, market assumptions, and optimization constraints remain part of the interpretation; one current analyzed portfolio records a 1.74 Sharpe ratio and 2.52 Sortino ratio.",
    ],
    relatedPaths: [
      "/services/python-automation-analysis/",
      "/projects/handwriting-formatting-pipeline/",
      "/projects/",
    ],
    tech: getProjectTech("portfolio-analytics-tool"),
    caseStudy: {
      facts: [
        { label: "Input", value: "Share holdings and market history" },
        { label: "Measures", value: "Sharpe, Sortino, drawdown" },
        { label: "Output", value: "Efficient-frontier comparisons" },
      ],
      sections: [
        {
          title: "Calculating risk-adjusted performance from holdings",
          paragraphs: [
            "A holdings list can show what is owned, but it says little about how the positions behave together. This tool pulls price history, rebuilds the weighted portfolio, and places return beside volatility, downside risk, and maximum drawdown.",
            "Sharpe and Sortino ratios provide two different views of risk-adjusted performance: one counts all volatility, while the other concentrates on harmful downside variation.",
          ],
        },
        {
          title: "Comparing allocations on the efficient frontier",
          paragraphs: [
            "The efficient-frontier view plots thousands of candidate allocations rather than presenting a single optimized answer without context. Color encodes Sharpe ratio, while the maximum-Sharpe and minimum-volatility portfolios are marked as reference points.",
            "That makes the current allocation easier to discuss in terms of trade-offs. One portfolio analyzed with the tool currently records a Sharpe ratio of 1.74 and a Sortino ratio of 2.52.",
          ],
        },
        {
          title: "Keeping optimized portfolios in research context",
          paragraphs: [
            "Optimization is sensitive to its historical window, assumptions, and constraints. The generated portfolios are comparison cases for further research, not instructions to trade.",
          ],
        },
      ],
    },
  },
  {
    id: "case-study-habitro",
    path: "/projects/habitro/",
    page: "case-study",
    type: "case-study",
    title: "Habitro | SQLite Learning and Practice System | Marton Vegh",
    description:
      "A daily learning system that uses SQLite performance history to organize Spanish, Catalan, and mathematics practice around previous attempts.",
    image: "/projects/habitro.png",
    media: [
      {
        src: "/projects/habitro.png",
        alt: "Habitro derivative practice screen with exercise controls and answer reveal",
        width: 1379,
        height: 776,
        caption: "The derivative module keeps batch controls, the current problem, answer reveal, and practice history in one view.",
      },
    ],
    hiddenHeading: getProjectTitle("habitro"),
    hiddenParagraphs: [
      "Habitro is a daily practice system for Spanish grammar, Catalan, syntax, morphology, mathematics, and derivatives. It keeps exercise-level performance and previous attempts in SQLite rather than treating each session as a blank slate.",
      "The main React and Vite interface builds short practice batches, reveals answers on demand, and keeps history available for review. Question banks can be maintained manually, while generated practice remains optional where configured.",
      "An older Streamlit workflow remains in the repository for local experimentation, but the web app is the primary interface. The system can still run with local examples and imported decks when no API key is present.",
    ],
    relatedPaths: [
      "/services/education-software-tools/",
      "/services/python-automation-analysis/",
      "/projects/",
    ],
    repo: getProjectRepo("habitro"),
    tech: getProjectTech("habitro"),
    caseStudy: {
      facts: [
        { label: "Subjects", value: "Languages and mathematics" },
        { label: "History", value: "SQLite per-exercise tracking" },
        { label: "Primary UI", value: "React and Vite web app" },
      ],
      sections: [
        {
          title: "Using SQLite history to shape later practice",
          paragraphs: [
            "A static worksheet can tell you whether today's answer is right, but it cannot show the mistakes that keep returning. Habitro stores results and previous attempts per exercise type, so later sessions have a useful memory.",
            "The daily workflow spans Spanish grammar, Catalan, syntax, morphology, mathematics, and derivatives. Local question banks and examples remain usable even when generated practice is not configured.",
          ],
        },
        {
          title: "Keeping derivative practice in one view",
          paragraphs: [
            "The derivative module generates a small batch, can shuffle pending questions, and reveals the worked answer only when requested. Batch size and order sit beside the current expression instead of being buried in a separate settings screen.",
            "A history tab keeps the exercise connected to earlier work. The goal is not more dashboard chrome; it is a short loop of attempt, check, record, and revisit.",
          ],
        },
        {
          title: "Moving the primary interface from Streamlit to React",
          paragraphs: [
            "The React and Vite app is the current interface. An earlier Streamlit version remains in the repository as a local experimentation path, sharing the broader idea of structured daily practice and stored progress.",
          ],
        },
      ],
    },
  },
];

function enrichRoute(route) {
  return {
    ...route,
    canonicalPath: normalizePath(route.path),
  };
}

export const SEO_ROUTES = ROUTE_DEFINITIONS.map(enrichRoute);

export function normalizePath(pathname = "/") {
  if (!pathname) return "/";

  const withoutQuery = pathname.split("?")[0].split("#")[0].trim();
  if (!withoutQuery || withoutQuery === "/") return "/";

  const normalized = withoutQuery.replace(/\/{2,}/g, "/");
  return normalized.endsWith("/") ? normalized : `${normalized}/`;
}

export function resolveRoute(pathname = "/") {
  const normalized = normalizePath(pathname);
  return SEO_ROUTES.find((route) => route.canonicalPath === normalized) ?? SEO_ROUTES[0];
}

export function getSiteUrl(explicitSiteUrl) {
  return `${(explicitSiteUrl || DEFAULT_SITE_URL).trim().replace(/\/$/, "")}`;
}

export function getRuntimeSiteUrl() {
  if (typeof window === "undefined") return getSiteUrl(DEFAULT_SITE_URL);

  const basePath = typeof import.meta !== "undefined" && import.meta.env?.BASE_URL && import.meta.env.BASE_URL !== "/"
    ? import.meta.env.BASE_URL.replace(/\/$/, "")
    : "";

  return `${window.location.origin}${basePath}`;
}

export function getAbsoluteUrl(siteUrl, routePath) {
  return `${getSiteUrl(siteUrl)}${normalizePath(routePath) === "/" ? "" : normalizePath(routePath)}`;
}

export function getImageUrl(siteUrl, imagePath) {
  if (!imagePath) return `${getSiteUrl(siteUrl)}/favicon.png`;
  if (/^https?:\/\//i.test(imagePath)) return imagePath;
  return `${getSiteUrl(siteUrl)}${imagePath.startsWith("/") ? imagePath : `/${imagePath}`}`;
}

export function getHtmlEntryPath(routePath) {
  const normalized = normalizePath(routePath);
  return normalized === "/" ? "index.html" : `${normalized.slice(1)}index.html`;
}

export function getHtmlEntryPaths() {
  return SEO_ROUTES.map((route) => getHtmlEntryPath(route.path));
}

function buildBreadcrumbList(route, siteUrl) {
  const breadcrumbs = [{ name: "Home", path: "/" }];

  if (route.path.startsWith("/projects/") && route.path !== "/projects/") {
    breadcrumbs.push({ name: "Projects", path: "/projects/" });
  }

  if (route.id === "service-frontend") {
    breadcrumbs.push({ name: "Projects", path: "/projects/" });
  } else if (route.path.startsWith("/services/")) {
    breadcrumbs.push({ name: "Services", path: "/" });
  }

  if (route.path !== "/") {
    breadcrumbs.push({ name: route.hiddenHeading, path: route.path });
  }

  return {
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: getAbsoluteUrl(siteUrl, crumb.path),
    })),
  };
}

function buildPrimarySchema(route, siteUrl) {
  const personId = `${getAbsoluteUrl(siteUrl, "/about/marton-vegh/")}#person`;
  const baseWebPage = {
    "@type": route.type === "profile" ? "ProfilePage" : route.type === "collection" ? "CollectionPage" : "WebPage",
    name: route.hiddenHeading,
    description: route.description,
    url: getAbsoluteUrl(siteUrl, route.path),
    isPartOf: {
      "@type": "WebSite",
      name: "Portfolio Marton",
      url: getSiteUrl(siteUrl),
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: getImageUrl(siteUrl, route.image),
    },
    about: {
      "@type": "Person",
      "@id": personId,
      name: PROFILE.name,
      url: getAbsoluteUrl(siteUrl, "/about/marton-vegh/"),
    },
  };

  if (route.type === "profile") {
    baseWebPage.mainEntity = {
      "@type": "Person",
      "@id": personId,
      name: PROFILE.name,
      url: getAbsoluteUrl(siteUrl, "/about/marton-vegh/"),
      image: getImageUrl(siteUrl, BASE_PERSON_SCHEMA.image),
    };
  }

  if (route.type === "case-study") {
    return {
      "@type": "Article",
      headline: route.hiddenHeading,
      description: route.description,
      image: [getImageUrl(siteUrl, route.image)],
      author: {
        "@type": "Person",
        name: PROFILE.name,
        url: getAbsoluteUrl(siteUrl, "/about/marton-vegh/"),
      },
      mainEntityOfPage: getAbsoluteUrl(siteUrl, route.path),
      about: route.tech?.length
        ? route.tech.map((tech) => ({ "@type": "Thing", name: tech }))
        : undefined,
    };
  }


  return baseWebPage;
}

function buildSecondarySchema(route, siteUrl) {
  if (route.type !== "case-study") return null;

  return {
    "@type": "SoftwareSourceCode",
    name: route.hiddenHeading,
    codeRepository: route.repo || undefined,
    programmingLanguage: route.tech?.join(", ") || undefined,
    author: {
      "@type": "Person",
      name: PROFILE.name,
      url: getAbsoluteUrl(siteUrl, "/about/marton-vegh/"),
    },
    url: getAbsoluteUrl(siteUrl, route.path),
    image: getImageUrl(siteUrl, route.image),
    description: route.description,
  };
}

export function getStructuredData(route, siteUrl) {
  const personId = `${getAbsoluteUrl(siteUrl, "/about/marton-vegh/")}#person`;
  const graph = [
    {
      "@context": "https://schema.org",
      ...BASE_PERSON_SCHEMA,
      "@id": personId,
      url: getAbsoluteUrl(siteUrl, "/about/marton-vegh/"),
      image: getImageUrl(siteUrl, BASE_PERSON_SCHEMA.image),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Portfolio Marton",
      url: getSiteUrl(siteUrl),
      author: {
        "@type": "Person",
        "@id": personId,
        name: PROFILE.name,
      },
    },
    {
      "@context": "https://schema.org",
      ...buildBreadcrumbList(route, siteUrl),
    },
    {
      "@context": "https://schema.org",
      ...buildPrimarySchema(route, siteUrl),
    },
  ];

  const secondarySchema = buildSecondarySchema(route, siteUrl);
  if (secondarySchema) {
    graph.push({
      "@context": "https://schema.org",
      ...secondarySchema,
    });
  }

  return graph;
}

export function getRouteLinkLabel(path) {
  return resolveRoute(path).hiddenHeading;
}

export function getRouteSeoContent(route) {
  return {
    heading: route.hiddenHeading,
    paragraphs: route.hiddenParagraphs,
    links: (route.relatedPaths ?? []).map((path) => ({
      href: normalizePath(path),
      label: getRouteLinkLabel(path),
    })),
    externalLink: route.externalLink
      ? {
          href: route.externalLink,
          label: "Open the full external document",
        }
      : null,
  };
}

export function escapeHtml(value = "") {
  return `${value}`
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function renderSeoContentHtml(route) {
  const content = getRouteSeoContent(route);
  const links = content.links.length
    ? `<nav aria-label="Related pages"><ul>${content.links
        .map((link) => `<li><a href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a></li>`)
        .join("")}</ul></nav>`
    : "";
  const externalLink = content.externalLink
    ? `<p><a href="${escapeHtml(content.externalLink.href)}">${escapeHtml(content.externalLink.label)}</a></p>`
    : "";

  return `<section class="seo-prerender" data-seo-route="${escapeHtml(route.id)}"><article><h1>${escapeHtml(content.heading)}</h1>${content.paragraphs
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("")}${externalLink}${links}</article></section>`;
}

export function getDefaultStructuredData(siteUrl) {
  return JSON.stringify(getStructuredData(resolveRoute("/"), siteUrl));
}

export function getLanguageProfileSummary() {
  return WHO_AM_I_CONTENT.translations.en.paragraphs.join(" ");
}

function upsertMetaTag({ name, property, content }) {
  if (typeof document === "undefined") return;

  const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    if (name) element.setAttribute("name", name);
    if (property) element.setAttribute("property", property);
    document.head.append(element);
  }

  element.setAttribute("content", content);
}

function upsertCanonicalLink(href) {
  if (typeof document === "undefined") return;

  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.append(link);
  }

  link.setAttribute("href", href);
}

function upsertStructuredData(scriptContent) {
  if (typeof document === "undefined") return;

  let script = document.getElementById("route-structured-data");
  if (!script) {
    script = document.createElement("script");
    script.id = "route-structured-data";
    script.type = "application/ld+json";
    document.head.append(script);
  }

  script.textContent = scriptContent;
}

export function applyRouteMetadata(route, siteUrl) {
  if (typeof document === "undefined") return;

  const resolvedSiteUrl = getSiteUrl(siteUrl);
  const canonicalUrl = getAbsoluteUrl(resolvedSiteUrl, route.path);
  const imageUrl = getImageUrl(resolvedSiteUrl, route.image);

  document.title = route.title;
  upsertCanonicalLink(canonicalUrl);
  upsertMetaTag({ name: "description", content: route.description });
  upsertMetaTag({ name: "robots", content: "index,follow,max-image-preview:large" });
  upsertMetaTag({ name: "author", content: PROFILE.name });
  upsertMetaTag({ property: "og:site_name", content: "Portfolio Marton" });
  upsertMetaTag({
    property: "og:type",
    content: route.type === "case-study" || route.type === "paper" ? "article" : route.type === "profile" ? "profile" : "website",
  });
  upsertMetaTag({ property: "og:title", content: route.title });
  upsertMetaTag({ property: "og:description", content: route.description });
  upsertMetaTag({ property: "og:url", content: canonicalUrl });
  upsertMetaTag({ property: "og:image", content: imageUrl });
  upsertMetaTag({ name: "twitter:card", content: "summary_large_image" });
  upsertMetaTag({ name: "twitter:title", content: route.title });
  upsertMetaTag({ name: "twitter:description", content: route.description });
  upsertMetaTag({ name: "twitter:image", content: imageUrl });
  upsertStructuredData(JSON.stringify(getStructuredData(route, resolvedSiteUrl)));
}
