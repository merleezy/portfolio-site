export const portfolio = {
  name: "Isaac McDowell",
  nameShort: "Isaac",
  initials: "IM",
  role: "Software Developer",
  location: "New Orleans, LA",
  tagline: "Recent CS grad. I build clean, fast interfaces for the web.",
  intro:
    "Recent computer science graduate from Florida State University. I spend most of my time building side projects, learning by shipping, and sharpening the fundamentals. This site is a quick look at what I've been working on.",

  status: "Open to new-grad roles — graduating Spring 2026",

  projects: [
    {
      id: "compass",
      name: "Compass",
      year: "2024",
      blurb: "YOUR DESCRIPTION",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      role: "Solo",
      live: "",
      repo: "",
      accent: "#7dd3a0",
    },
    {
      id: "teesheet",
      name: "Tee Sheet",
      year: "2024",
      blurb:
        "Tee-time finder for FSU students. Scrapes the local muni courses every few minutes and surfaces openings before they hit the official site. ~200 weekly users.",
      tech: ["React Native", "Supabase", "Expo", "Playwright"],
      role: "Side project",
      live: "teesheet.app",
      repo: "github.com/imcd/teesheet",
      accent: "#fbbf24",
    },
    // Tokyo Bloom, Fitness Tracker...
  ],

  about: {
    body: "Outside of code I'm usually on a golf course, lifting heavy things, watching anime, or working through a stack of books. I'm a perpetual student of my own habits and care a lot about long-term compounding — in code and in life. I grew up in Florida, played sports through school, and only started writing software seriously about three years ago. Most of what I know I picked up by building things, breaking them, and figuring out why.",
    interests: [
      { label: "Golf", note: "New to it — chasing my first sub-100 round" },
      {
        label: "Reading",
        note: "Mostly nonfiction — systems, history, biographies",
      },
      { label: "Lifting", note: "5 days a week, currently bulking" },
      { label: "Anime", note: "Currently rewatching Frieren and Vinland Saga" },
    ],
  },

  skills: {
    languages: ["JavaScript", "Python", "SQL"],
    frontend: ["React", "HTML", "CSS"],
    backend: ["Node.js", "Express", "MongoDB"],
    tools: ["Docker", "Linux", "Git", "Vite", "Vercel"],
  },

  education: [
    {
      company: "Florida State University",
      period: "2022 – 2026",
      role: "B.S. Computer Science",
      blurb: "Coursework in deep learning, systems, and algorithms.",
    },
  ],

  contact: {
    email: "isaacmcd03@gmail.com",
    socials: [
      { label: "GitHub", handle: "@merleezy", url: "github.com/merleezy" },
      { label: "X", handle: "@merleezy_", url: "x.com/merleezy_" },
      {
        label: "LinkedIn",
        handle: "in/isaac-mcdowell",
        url: "linkedin.com/in/isaac-mcdowell",
      },
      { label: "Resume", handle: "PDF ↓", url: "isaacmcd.dev/resume.pdf" },
    ],
  },
};
