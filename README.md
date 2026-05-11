# isaacmcdowell.dev

Personal portfolio site. Terminal-aesthetic, built with React + Vite.

## Stack

- React + Vite
- CSS Modules + CSS custom properties
- Deployed on Vercel

## Project structure

```
src/
  components/
    layout/       Navbar, Footer
    sections/     Hero, Projects, About, Skills, Contact
    ui/           Prompt, SectionHead
  constants/      theme.js (JS color/font tokens)
  data/           portfolio.js — all site content lives here
  App.jsx
  index.css       global reset + CSS custom properties
```

## Updating content

Everything is in `src/data/portfolio.js` — name, projects, skills, bio, socials, etc. No need to touch any component files for content changes.

## Dev

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
