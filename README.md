# Marton Vegh — Portfolio

My personal portfolio of practical software projects in React, JavaScript, Python and C/C++.

Visit [marton.top](https://marton.top/) for project case studies, technical decisions and more about my work.

## Selected projects

- [DartVision](https://marton.top/projects/dartvision/) — camera-assisted dart scoring.
- [TI-Nspire keyboard remap](https://marton.top/projects/ti-nspire-keyboard-remap/) — a QWERTY-style calculator layout.
- [Macro Recorder +](https://marton.top/projects/macro-recorder-plus/) — desktop workflow automation.
- [Marvela Design](https://marvela.design/) — custom web design.
- [Homework Calendar](https://marton.top/projects/homework-calendar/) — Google Calendar scheduling for lessons and homework.
- [Handwriting formatting pipeline](https://marton.top/projects/handwriting-formatting-pipeline/) — text formatting and printable handwriting workflows.
- [Chess Anki Maker](https://marton.top/projects/chess-anki-maker/) — interactive chess study cards.
- [Habitro](https://marton.top/projects/habitro/) — daily language and maths practice.

## Development

```sh
npm install
npm run dev
```

```sh
npm run build
```

The production build generates the static SEO pages and checks their output automatically. Run `npm run check:seo` to check an existing build.

Translated pages use `/es/`, `/fr/`, `/de/`, and `/hu/` prefixes; English keeps the original URLs. The language selector, navigation, and browser history preserve the selected language. Each static page includes reciprocal `hreflang` links, a self-referencing canonical, and an English `x-default` fallback. Pages without translated main content advertise only English. The SEO check validates language annotations in both source HTML and production output.

---

Created by [Marton Vegh](https://marton.top/).
