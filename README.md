# Mohammed Adnan P — Portfolio v2

A high-performance developer portfolio built with React, Vite, Tailwind CSS v4, and Framer Motion. Designed with an engineering blueprint & modern dark aesthetic.

## 🚀 Live Demo & Deployment
- **Live Vercel URL**: Auto-deployed via Vercel
- **GitHub**: [@Adn2805](https://github.com/Adn2805)

## 🛠️ Tech Stack
- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & Lucide / React Icons
- **Deployment**: [Vercel](https://vercel.com/)

## 📂 Project Structure
```
src/
├── components/
│   ├── Background/    # Interactive dot-grid background
│   ├── Layout/        # Navbar (desktop sidebar + mobile drawer) & Footer
│   └── UI/            # PolaroidFrame, StickyNote, FlipCard, TiltCard, ScrollReveal
├── sections/
│   ├── Hero.jsx       # Interactive developer card & terminal
│   ├── About.jsx      # Bio, Polaroid photo, & Engineering Principles
│   ├── Skills.jsx     # Official SVG brand badges across 5 categories
│   ├── Experience.jsx # Research & Freelance timeline
│   ├── Projects.jsx   # ADAS, NexusIntel, VisualDebate, BCC Football '26
│   ├── Certifications.jsx # Google Cloud GenAI, Power BI, Qiskit Quantum
│   ├── Education.jsx  # VIT Vellore Integrated M.Tech
│   └── Contact.jsx    # Email, GitHub, LinkedIn, Instagram
└── index.css          # Tailwind CSS v4 & custom design tokens
```

## 💻 Local Development
```bash
npm install
npm run dev
```

## 🏗️ Production Build
```bash
npm run build
```


This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
