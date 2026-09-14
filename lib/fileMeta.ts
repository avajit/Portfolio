export type SectionId =
  | "home"
  | "about"
  | "skills"
  | "experience"
  | "projects"
  | "contact"
  | "connect";

export interface FileMetaEntry {
  id: SectionId;
  name: string;
  ext: string;
  iconColorVar: string;
  lang: string;
}

export const fileMeta: Record<SectionId, FileMetaEntry> = {
  home: { id: "home", name: "home.tsx", ext: "◆", iconColorVar: "var(--vsc-icon-ts)", lang: "TypeScript React" },
  about: { id: "about", name: "about.html", ext: "◆", iconColorVar: "var(--vsc-icon-html)", lang: "HTML" },
  skills: { id: "skills", name: "skills.json", ext: "◆", iconColorVar: "var(--vsc-icon-json)", lang: "JSON" },
  experience: { id: "experience", name: "experience.ts", ext: "◆", iconColorVar: "var(--vsc-icon-ts)", lang: "TypeScript" },
  projects: { id: "projects", name: "projects.js", ext: "◆", iconColorVar: "var(--vsc-icon-js)", lang: "JavaScript" },
  contact: { id: "contact", name: "contact.css", ext: "◆", iconColorVar: "var(--vsc-icon-css)", lang: "CSS" },
  connect: { id: "connect", name: "README.md", ext: "◆", iconColorVar: "var(--vsc-icon-md)", lang: "Markdown" },
};

export const sectionOrder: SectionId[] = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "contact",
  "connect",
];
