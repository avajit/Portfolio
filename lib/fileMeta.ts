export type SectionId =
  | "home"
  | "about"
  | "skills"
  | "education"
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
  home: { id: "home", name: "Home.tsx", ext: "◆", iconColorVar: "var(--vsc-icon-ts)", lang: "TypeScript React" },
  about: { id: "about", name: "About.html", ext: "◆", iconColorVar: "var(--vsc-icon-html)", lang: "HTML" },
  skills: { id: "skills", name: "Skills.json", ext: "◆", iconColorVar: "var(--vsc-icon-json)", lang: "JSON" },
  education: { id: "education", name: "Education.md", ext: "◆", iconColorVar: "var(--vsc-icon-md)", lang: "Markdown" },
  experience: { id: "experience", name: "Experience.ts", ext: "◆", iconColorVar: "var(--vsc-icon-ts)", lang: "TypeScript" },
  projects: { id: "projects", name: "Projects.js", ext: "◆", iconColorVar: "var(--vsc-icon-js)", lang: "JavaScript" },
  contact: { id: "contact", name: "Contact.css", ext: "◆", iconColorVar: "var(--vsc-icon-css)", lang: "CSS" },
  connect: { id: "connect", name: "README.md", ext: "◆", iconColorVar: "var(--vsc-icon-md)", lang: "Markdown" },
};

export const sectionOrder: SectionId[] = [
  "home",
  "experience",
  "projects",
  "about",
  "skills",
  "education",
  "contact",
  "connect",
];
