export const portfolio = {
  name: "Isaac McDowell",
  nameShort: "Isaac",
  initials: "IM",
  role: "Software Developer",
  location: "New Orleans, LA",
  intro:
    "Recent computer science graduate from Florida State University. I spend most of my time building side projects, learning by shipping, and sharpening the fundamentals. This site is a quick look at what I've been working on.",

  status: "Open to new-grad roles - graduated Spring 2026",

  projects: [
    // {
    //   id: "compass",
    //   name: "Compass",
    //   year: "2026",
    //   blurb:
    //     "Personal life dashboard for tracking habits, goals, and tasks with a unified interface. Features progress charts, calendar views, and structured reflection tools to help build consistency over time.",
    //   tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    //   role: "Solo",
    //   live: "",
    //   repo: "",
    //   accent: "#60a5fa",
    // },
    {
      id: "smart-fitness",
      name: "Smart Fitness App",
      year: "2025",
      blurb:
        "Full-stack fitness tracker with a rule-based coaching insight system, USDA FoodData API integration across 600k+ items, and a Chart.js analytics dashboard for weight and macro tracking.",
      tech: ["Flask", "PostgreSQL", "Python", "Chart.js"],
      role: "Solo",
      live: "smart-fitness-tracker-jc7l.onrender.com/",
      repo: "github.com/merleezy/smart-fitness-tracker",
      accent: "#7dd3a0",
    },
    {
      id: "tokyo-bloom",
      name: "Tokyo Bloom",
      year: "2025",
      blurb:
        "Restaurant web app with a reservation system, double-booking prevention, Google Maps integration, and security hardening — CSRF protection, input sanitization, and prepared statements.",
      tech: ["JavaScript", "PHP", "MySQL", "HTML/CSS"],
      role: "Team of 3",
      live: "",
      repo: "github.com/merleezy/tokyo-bloom",
      accent: "#f0abfc",
    },
    {
      id: "undead-alliance",
      name: "Undead Alliance",
      year: "2023",
      blurb:
        "Top-down zombie shooter built in Unity. Designed UI and character animation systems, implemented inventory and leveling in C#, and helped establish Git branching practices for the team.",
      tech: ["Unity", "C#", ".NET"],
      role: "Team of 4",
      live: "",
      repo: "",
      accent: "#fbbf24",
    },
  ],

  about: {
    body: "Outside of code I'm usually on a golf course, lifting heavy things, watching anime, or working through a stack of books. I'm a perpetual student of my own habits and care a lot about long-term compounding — in code and in life. I grew up in Japan, played sports through school, and only started writing software seriously about three years ago. Most of what I know I picked up by building things, breaking them, and figuring out why.",
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
    languages: ["JavaScript", "Python", "C++"],
    frontend: ["React", "HTML/CSS", "Chart.js"],
    backend: ["Node.js", "Express", "Flask", "MongoDB", "MySQL", "SQLite"],
    tools: ["Git", "Docker", "Linux", "Appwrite", "Vite", "Vercel"],
  },

  education: [
    {
      company: "Florida State University",
      location: "Tallahassee, FL",
      period: "2021 – 2026",
      role: "B.S. Computer Science",
      blurb:
        "Relevant coursework: Data Structures & Algorithms, Software Engineering, Database Systems, Object-Oriented Programming, AI / Machine Learning, Web Development, Offensive Computer Security.",
    },
  ],

  experience: [
    {
      company: "Association for Computing Machinery",
      location: "Tallahassee, FL",
      period: "2022 – 2025",
      role: "Member",
      blurb:
        "Participated in competitive programming competitions and workshops, practicing algorithm design and problem-solving under time constraints.",
    },
    {
      company: "Cybersecurity Club at FSU",
      location: "Tallahassee, FL",
      period: "2022 – 2024",
      role: "Member",
      blurb:
        "Competed in CTF events and attended workshops on web security, cryptography, and penetration testing.",
    },
    {
      company: "YMCA",
      location: "Yulee, FL",
      period: "2021",
      role: "Front Desk Staff",
      blurb:
        "Managed front desk operations including member check-ins, phone and in-person inquiries, and coordination with staff in a fast-paced environment.",
    },
  ],

  contact: {
    email: "isaac@isaacmcdowell.dev",
    socials: [
      { label: "GitHub", handle: "@merleezy", url: "github.com/merleezy" },
      { label: "X", handle: "@merleezy_", url: "x.com/merleezy_" },
      {
        label: "LinkedIn",
        handle: "in/isaac-mcdowell",
        url: "linkedin.com/in/isaac-mcdowell",
      },
      { label: "Resume", handle: "PDF ↓", url: "/Resume.pdf" },
    ],
  },
};
