# Portfolio Project — Claude Instructions

## Project Overview
Terminal-aesthetic personal portfolio site for Isaac McDowell. Built with React + Vite.
The design is CLI/terminal inspired — monospace fonts, dark background, minimal color.

## Tech Stack
- React + Vite
- Framer Motion (animations)
- CSS Modules (per component) + CSS custom properties (global tokens)
- No Tailwind, no inline styles

---

## Rules — Follow These Without Being Asked

### Styling
- **Never use inline styles.** All styles go in `.module.css` files colocated with their component.
- **Always use CSS custom properties** for colors, fonts, and spacing. These are defined in `src/index.css` under `:root`. Never hardcode hex values or font strings in components.
- CSS variable names: `--bg`, `--bg-el`, `--border`, `--border-hi`, `--text`, `--dim`, `--dimmer`, `--accent`, `--accent2`, `--accent3`, `--mono`

### Data
- **Never hardcode content in JSX.** All text, projects, skills, links, etc. live in `src/data/portfolio.js` and are imported where needed.

### Components
- Keep components small and single-purpose.
- Shared/reusable UI goes in `src/components/ui/`.
- Section components go in `src/components/sections/`.
- Layout components (Navbar, Footer) go in `src/components/layout/`.

### General
- Ask before making structural decisions that weren't explicitly requested.
- Don't refactor files that weren't part of the current task.
- Don't install new packages without asking first.
- One task at a time. Finish and confirm before moving to the next.

---

## File Structure
```
src/
  components/
    layout/
      Navbar.jsx + Navbar.module.css
    sections/
      Hero.jsx + Hero.module.css
      Projects.jsx + Projects.module.css
      About.jsx + About.module.css
      Skills.jsx + Skills.module.css
      Contact.jsx + Contact.module.css
    ui/
      Prompt.jsx + Prompt.module.css
      SectionHead.jsx + SectionHead.module.css
  constants/
    theme.js          ← JS color/font values (for any JS that needs them)
  data/
    portfolio.js      ← all site content
  App.jsx
  index.css           ← resets + :root CSS custom properties
```

---

## Build Order (follow this sequence)
1. `src/index.css` — resets + `:root` CSS variables
2. `src/constants/theme.js` — JS color/font exports
3. `src/data/portfolio.js` — all content
4. `src/components/ui/Prompt.jsx` — shared prompt line component
5. `src/components/ui/SectionHead.jsx` — shared section header component
6. `src/components/layout/Navbar.jsx` — sticky terminal top bar
7. Sections one at a time: Hero → Projects → About → Skills → Contact
8. `src/components/layout/Footer.jsx`
9. Wire everything in `App.jsx`

Do not skip ahead or build out of order without asking.

---

## Reference
The original design file is `terminal.jsx` in the project root.
Use it as a visual/structural reference only — do not copy its inline styles or hardcoded data.