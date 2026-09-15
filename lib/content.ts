import type { SectionId } from "./fileMeta";

export interface BioSegment {
  text: string;
  bold?: boolean;
  color?: "blue" | "pink";
}

export interface Tag {
  label: string;
  variant: "bk" | "ai" | "ds" | "co";
}

export interface Stat {
  value: string;
  label: string;
}

export interface LinkChip {
  label: string;
  href: string;
}

export interface CtaButton {
  label: string;
  icon: string;
  target: SectionId;
  primary?: boolean;
}

export const homeContent = {
  comment: "// hello world !! Welcome to my portfolio",
  firstName: "Avajit Kumar",
  lastName: "Kewrat",
  tags: [
    { label: "Full-Stack Developer", variant: "bk" },
    { label: "Backend Engineer", variant: "ai" },
    { label: "Published Researcher", variant: "ds" },
    { label: "@accelix.ai", variant: "co" },
  ] as Tag[],
  typewriterLines: [
    "Building scalable SaaS systems @ accelix.ai 🚀",
    "Published researcher — IEEE ICCCA 2025 📄",
    "Secure auth systems: JWT · MFA · SSO · RBAC 🔐",
  ],
  bio: [
    { text: "I live at the crossroads of " },
    { text: "full-stack engineering", bold: true, color: "blue" },
    { text: ", " },
    { text: "secure authentication systems", bold: true, color: "pink" },
    { text: ", and " },
    { text: "scalable backend architecture", bold: true, color: "blue" },
    { text: ". I build SaaS systems that are genuinely fast, secure, and production-ready." },
  ] as BioSegment[],
  ctaButtons: [
    { label: "Projects", icon: "📁", target: "projects", primary: true },
    { label: "About Me", icon: "👤", target: "about" },
    { label: "Contact", icon: "✉", target: "contact" },
  ] as CtaButton[],
  stats: [
    { value: "4+", label: "PROJECTS" },
    { value: "200+", label: "DSA SOLVED" },
    { value: "1", label: "IEEE PUBLICATION" },
    { value: "8.01", label: "CGPA" },
  ] as Stat[],
  links: [
    { label: "GitHub", href: "https://github.com/avajit" },
    { label: "LinkedIn", href: "https://linkedin.com/in/avajitkumar-kewrat" },
    { label: "LeetCode", href: "https://leetcode.com/u/avajitkumarkewrat" },
    { label: "Email", href: "mailto:mandalavijeet12@gmail.com" },
  ] as LinkChip[],
};

// ─── ABOUT ───────────────────────────────────────────────────────────────────

export interface FocusItem {
  icon: string;
  text: string;
}

export interface EducationEntry {
  school: string;
  period: string;
}

export const aboutContent = {
  focusItems: [
    { icon: "🎯", text: "Currently: Product Engineer Intern @ accelix.ai" },
    { icon: "📄", text: "Published: IEEE ICCCA 2025 (real-time AI systems)" },
    { icon: "🛠", text: "Recently shipped: JWT/MFA/SSO auth + RBAC system" },
    { icon: "🧩", text: "200+ DSA problems solved on LeetCode" },
  ] as FocusItem[],
  education: [
    {
      school:
        "Parul University – PIET, Vadodara — B.Tech, Computer Science & Engineering",
      period: "2022 – 2026 · CGPA 8.01/10",
    },
    {
      school:
        "Kantipur Secondary School, Biratnagar, Nepal — Higher Secondary (12th Grade)",
      period: "2022 · 81.75%",
    },
    {
      school:
        "Mount Makalu English Boarding School, Nepal — Secondary Education (10th Grade)",
      period: "80%",
    },
  ] as EducationEntry[],
};

// ─── SKILLS ──────────────────────────────────────────────────────────────────

export interface SkillBar {
  label: string;
  width: number; // 0–100 percentage
  pink?: boolean;
}

export interface SkillBlock {
  title: string;
  skills: SkillBar[];
}

export const skillsContent: SkillBlock[] = [
  {
    title: "Frontend",
    skills: [
      { label: "React.js", width: 85 },
      { label: "JavaScript ES6+", width: 88 },
      { label: "HTML5 / CSS3", width: 85 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { label: "Node.js / Express", width: 90, pink: true },
      { label: "FastAPI (Python)", width: 82, pink: true },
      { label: "JWT / MFA / SSO / RBAC", width: 88, pink: true },
      { label: "Redis", width: 78, pink: true },
    ],
  },
  {
    title: "Databases & ORMs",
    skills: [
      { label: "PostgreSQL", width: 85 },
      { label: "MongoDB", width: 78 },
      { label: "Prisma / SQLAlchemy", width: 82 },
    ],
  },
  {
    title: "Tools & Cloud",
    skills: [
      { label: "Docker", width: 80, pink: true },
      { label: "Git / GitHub", width: 88, pink: true },
      { label: "MinIO (S3-compatible)", width: 75, pink: true },
    ],
  },
];

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────

export interface TimelineItem {
  role: string;
  meta: string;
  desc: string;
}

export const experienceContent: TimelineItem[] = [
  {
    role: "Product Engineer Intern — Dignified Technology Pvt. Ltd. (accelix.ai)",
    meta: "Vadodara, India · February 2026 – Present",
    desc: "Built scalable backend APIs with Node.js and Express.js for an AI-powered hardware validation SaaS platform. Implemented JWT, MFA, Google SSO, and RBAC for secure authentication. Designed PostgreSQL schemas with Prisma ORM, added Redis-based rate limiting, integrated MinIO object storage, and containerized services with Docker. Also built FastAPI (Python) REST APIs using SQLAlchemy alongside the Node.js backend.",
  },
  {
    role: "Published Researcher — IEEE ICCCA 2025",
    meta: "Greater Noida, India · November 2025",
    desc: 'Co-authored "Live Attendance System Using Face Recognition," a real-time facial recognition system built with Python, OpenCV, and FaceNet, logging attendance to MongoDB via a Tkinter GUI. Published on IEEE Xplore, January 2026.',
  },
  {
    role: "Full-Stack Web Development — Self-directed & Udemy Certification",
    meta: "2022 – 2025",
    desc: "Built and shipped multiple independent projects (React.js, Node.js, REST APIs, SQL & NoSQL) while solving 200+ DSA problems on LeetCode and completing NPTEL courses in Computer Networks and IoT.",
  },
];

// ─── PROJECTS ─────────────────────────────────────────────────────────────────

export interface Project {
  title: string;
  desc: string;
  tags: string[];
  github?: string;
  live?: string;
}

export const projectsContent: Project[] = [
  {
    title: "AKMart — E-Commerce Website",
    desc: "Responsive e-commerce app with product listing, dynamic cart, and client-side routing, built with a component-based React architecture.",
    tags: ["React.js", "Routing", "Responsive UI"],
    github: "https://github.com/avajit",
  },
  {
    title: "WorldAtlas — Country Explorer",
    desc: "REST API-based explorer covering 250+ countries with real-time search and region filtering, built for speed with Vite.",
    tags: ["React.js", "Vite", "REST API"],
    github: "https://github.com/avajit",
  },
  {
    title: "LuxVault — E-Commerce Storefront",
    desc: "Storefront with product filtering, category browsing, and a persistent cart using LocalStorage — pure HTML, CSS & JS.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/avajit",
  },
  {
    title: "Live Attendance System — Face Recognition",
    desc: "Real-time facial recognition attendance system using OpenCV and FaceNet, logging to MongoDB via a Tkinter GUI. Published at IEEE ICCCA 2025.",
    tags: ["Python", "OpenCV", "FaceNet", "MongoDB"],
    github: "https://github.com/avajit",
  },
];

// ─── CONTACT ─────────────────────────────────────────────────────────────────

export interface FindMeItem {
  icon: string;
  value: string;
  href: string | null;
}

export const contactContent = {
  findMe: [
    {
      icon: "📧",
      value: "mandalavijeet12@gmail.com",
      href: "mailto:mandalavijeet12@gmail.com",
    },
    { icon: "📱", value: "+91-8235717668", href: "tel:+918235717668" },
    { icon: "📍", value: "Vadodara, India", href: null },
    {
      icon: "🔗",
      value: "linkedin.com/in/avajitkumar-kewrat",
      href: "https://linkedin.com/in/avajitkumar-kewrat",
    },
    {
      icon: "🐙",
      value: "github.com/avajit",
      href: "https://github.com/avajit",
    },
    {
      icon: "💻",
      value: "leetcode.com/u/avajitkumarkewrat",
      href: "https://leetcode.com/u/avajitkumarkewrat",
    },
  ] as FindMeItem[],
};
