export const portfolio = {
  name: "Isaac McDowell",
  nameShort: "Isaac",
  initials: "IM",
  role: "Software Developer",
  location: "New Orleans, LA",
  intro:
    "CS grad from Florida State. I build things, break them, and learn more from the second part than the first.",

  status: "Open to new-grad roles - graduated Spring 2026",

  projects: [
    {
      id: "draftsmith",
      name: "Draftsmith",
      year: "2026",
      blurb:
        "A requirements gathering agent harness that turns rough product ideas into structured PRDs through interactive clarifying questions and automated defect critique.",
      tech: ["TypeScript", "React", "Node.js", "Express", "TailwindCSS"],
      role: "Solo",
      live: "requirements-agent.vercel.app",
      repo: "github.com/merleezy/compass",
      accent: "#67e8f9",
      wip: false,
    },
    {
      id: "compass",
      name: "Compass",
      year: "2026",
      blurb:
        "Personal life dashboard for tracking habits, goals, and tasks in one place. Features progress charts and structured reflection tools to help build consistency over time.",
      tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      role: "Solo",
      live: "compass-seven-psi.vercel.app/habits",
      repo: "github.com/merleezy/compass",
      accent: "#607afaff",
      wip: true,
    },
    {
      id: "smart-fitness",
      name: "Smart Fitness App",
      year: "2025",
      blurb:
        "Full-stack fitness tracker with a rule-based coaching insight system, USDA FoodData API integration across 600k+ items, and a Chart.js analytics dashboard for weight and macro tracking.",
      tech: ["Flask", "PostgreSQL", "Python", "Chart.js"],
      role: "Solo",
      live: "smart-fitness-app.up.railway.app",
      repo: "github.com/merleezy/smart-fitness-tracker",
      accent: "#7dd3a0",
    },
    {
      id: "tokyo-bloom",
      name: "Tokyo Bloom",
      year: "2025",
      blurb:
        "Restaurant web app with a full reservation system, double-booking prevention, Google Maps integration, and a custom animated UI. Led the frontend and worked across the full stack with a team of three.",
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
    body: "I was born in Japan and grew up there through high school. It's still the place I love most in the world. I'm not sure I can articulate exactly why, but it just feels like home in a way nowhere else does. Programming started with Minecraft mods as a kid, but it didn't really take off until I got disciplined about everything: lifting, habits, and how I spend my time. Reading Atomic Habits was a turning point. It sounds cliché, but it genuinely changed how I approach things, and that compound mindset shows up in how I work. Outside of code, I'm usually in the gym, working on my golf game, reading, or watching some anime.",
    interests: [
      { label: "Golf", note: "New and obsessed. Chasing that first sub-100" },
      {
        label: "Reading",
        note: "Nonfiction mostly, fiction when the right one finds me",
      },
      { label: "Lifting", note: "5 days a week, currently cutting" },
      {
        label: "Anime",
        note: "One piece loyalist. Always looking for new recs",
      },
      { label: "Japan", note: "Born and raised there, miss it every day" },
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
      { label: "Resume", handle: "PDF ↓", url: "/Isaac_McDowell_Resume.pdf" },
    ],
  },
};
