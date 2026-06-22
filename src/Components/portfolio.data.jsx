// ── Projects ──────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "Chonasync",
    tech: ["ReactJS", "Supabase"],
    desc: "A POS system that could organize sari-sari store products, track sales, suppliers, and maintain the sari-sari store inventory.",
    status: "Completed",
    link: "https://chonasync.netlify.app/",
  },
  {
    id: 2,
    title: "SmartFit",
    tech: ["React Native", "Supabase"],
    desc: "An AI-assisted exercise that maintains the users of their intakes, burned calories, and workout routines.",
    status: "Completed",
    link: "#",
  },
  {
    id: 3,
    title: "Inventory System",
    tech: ["Java", "MySQL Workbench"],
    desc: "A responsible inventory system that could manage the inventory of a business, track sales, and generate reports.",
    status: "Completed",
    link: "#",
  },
];

// ── Skills ────────────────────────────────────────────────
export const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
  { category: "Backend",  items: ["Node.js", "PHP", "Java", "Javascript"] },
  { category: "Database", items: ["MySQL", "Supabase"] },
  { category: "Tools",    items: ["Git", "Figma", "VS Code", "Java", "Photoshop"] },
];

// ── Roles ─────────────────────────────────────────────────
export const roles = [
  {
    label: "Full-Stack Developer",
    desc: "Building end-to-end web applications from database to UI.",
  },
  {
    label: "UI/UX Designer",
    desc: "Crafting intuitive interfaces grounded in user research.",
  },
  {
    label: "Open Source Contributor",
    desc: "Improving community tools and learning through collaboration.",
  },
  {
    label: "Research Assistant",
    desc: "Supporting research progress through data collection and analysis.",
  },
];

// ── About Meta ────────────────────────────────────────────
export const aboutMeta = [
  { label: "Program",    value: "BS Information Technology" },
  { label: "School", value: "Bestlink College of the Philippines" },
  { label: "Year Level", value: "4th Year · 1st Semester" },
];

// ── Socials ───────────────────────────────────────────────
export const socials = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="https://github.com/dashboard" />
      </svg>
    ),
  },
  {
    name: "Email",
    url: "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWstwPBLTxxChLPlKmWGNMgNjPDGrCNvCqcVnxRNdqTrJWtsrJqlsZTCHMPPBwvJXJGRKPHfQ",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>  
    ),
  },
];
