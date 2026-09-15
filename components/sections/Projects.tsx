"use client";

import React from 'react';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  liveLabel: string;
  isPrivate?: boolean;
}

export const projects: ProjectItem[] = [
  // 1. AKMart — from your AKMart README
  {
    id: "akmart",
    title: "AKMart — E-Commerce Platform",
    category: "Full-Stack Web Dev",
    badge: "MERN Platform",
    description:
      "Production-grade full-stack e-commerce engine featuring instant auto-suggest search, dynamic multi-tier catalog filtering, persistent Context API cart state, and an end-to-end checkout pipeline.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Context API",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose"
    ],
    liveUrl: "https://akmart-ecommerce.netlify.app/",
    liveLabel: "Live Demo",
    isPrivate: true
  },

  // 2. Live Attendance System — from your Face Recognition README
  {
    id: "face-attendance",
    title: "Live Attendance — Face Recognition",
    category: "AI & Computer Vision",
    badge: "IEEE ICCCA 2025",
    description:
      "Biometric vision system for enterprise premise access control and institutional attendance via webcams or CCTV streams. Leverages FaceNet deep embeddings for sub-second multi-face identification, flags unauthorized personnel, blocks duplicate entries, and syncs timestamped logs to MongoDB and CSV. Published at IEEE ICCCA 2025.",
    tech: [
      "Python",
      "OpenCV",
      "FaceNet",
      "TensorFlow",
      "Tkinter",
      "MongoDB",
      "scikit-learn"
    ],
    liveUrl: "https://ieeexplore.ieee.org/document/11325461",
    liveLabel: "IEEE Paper",
    isPrivate: true
  },

  // 3. Team Task Manager — from your teammanagement README
  {
    id: "team-management",
    title: "SyncSphere — Team Task Manager",
    category: "Full-Stack Monorepo",
    badge: "Full-Stack SaaS",
    description:
      "Enterprise team workspace secured with JWT auth, bcrypt password hashing, OTP-based account recovery, API rate limiting, and role-based access control (Admin/Member). Features priority task tracking (TODO/IN_PROGRESS/DONE), relational data modeling via Prisma, and automated Nodemailer updates.",
    tech: [
      "Next.js",
      "TypeScript",
      "Express.js",
      "Prisma ORM",
      "PostgreSQL",
      "JWT",
      "Nodemailer"
    ],
    githubUrl: "https://github.com/avajit/teammanagement",
    liveUrl: "https://teammanagement-roan.vercel.app/dashboard",
    liveLabel: "Live Demo",
    isPrivate: false
  },

  // 4. WorldAtlas — from your WorldAtlas repo & README
  {
    id: "worldatlas",
    title: "WorldAtlas — Country Explorer",
    category: "Frontend Web Dev",
    badge: "Frontend API",
    description:
      "High-performance geographic intelligence web app delivering real-time demographic, economic, and regional analytics across 250+ nations. Built with Vite for sub-second client-side routing, instant query searching, and dynamic API data caching.",
    tech: [
      "React.js",
      "Vite",
      "JavaScript",
      "REST Countries API",
      "Tailwind CSS"
    ],
    githubUrl: "https://github.com/avajit/WorldAtlas",
    liveUrl: "https://radiant-tartufo-36bbca.netlify.app/",
    liveLabel: "Live Demo",
    isPrivate: false
  }
];

const getTechBadgeStyle = (tech: string) => {
  const t = tech.toLowerCase();
  // Frontend / Frameworks (Cyan / Sky)
  if (t.includes("react") || t.includes("next") || t.includes("vite") || t.includes("tailwind") || t.includes("shadcn") || t.includes("css")) {
    return "text-sky-300/90 bg-sky-950/30 border-sky-800/30";
  }
  // Backend / Runtimes (Emerald / Green)
  if (t.includes("node") || t.includes("express") || t.includes("api") || t.includes("nodemailer")) {
    return "text-emerald-300/90 bg-emerald-950/30 border-emerald-800/30";
  }
  // Databases / ORMs (Violet / Purple)
  if (t.includes("mongo") || t.includes("postgres") || t.includes("prisma")) {
    return "text-purple-300/90 bg-purple-950/30 border-purple-800/30";
  }
  // Python / AI / CV (Amber / Orange)
  if (t.includes("python") || t.includes("opencv") || t.includes("face") || t.includes("tensor") || t.includes("scikit") || t.includes("dlib")) {
    return "text-amber-300/90 bg-amber-950/30 border-amber-800/30";
  }
  // TypeScript / JavaScript / Core Languages (Blue / Slate)
  return "text-zinc-300 bg-zinc-900/80 border-zinc-800";
};

export default function Projects() {
  return (
    <section className="bg-transparent w-full px-6 sm:px-10 py-6 font-sans text-left">
      {/* Title */}
      <div className="mb-10 text-left flex flex-col items-start">
        <div className="font-mono text-xs select-none mb-1.5 flex flex-wrap items-center gap-1.5">
          <span className="text-zinc-500">//</span>
          <span className="text-fuchsia-400 font-semibold">const</span>
          <span className="text-sky-300">projects</span>
          <span className="text-zinc-400">=</span>
          <span className="flex items-center">
            <span className="text-amber-300">"production_deployments"</span>
            <span className="text-zinc-500">;</span>
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative rounded-xl bg-[#0b0f17]/90 border border-zinc-800/80 hover:border-zinc-700 p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
          >
            <div>
              {/* Top Bar: Consistent Title + Subtle Mono Badge */}
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-bold tracking-tight bg-gradient-to-r from-sky-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent drop-shadow-sm group-hover:brightness-125 transition-all duration-200">
                  {project.title}
                </h3>
                <span className="shrink-0 text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 select-none">
                  {project.badge}
                </span>
              </div>

              {/* Crisp Description */}
              <p className="text-[13px] text-zinc-400 mt-2.5 leading-relaxed font-sans">
                {project.description}
              </p>

              {/* Syntax-Themed Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[10px] font-mono px-2 py-0.5 rounded border transition-colors ${getTechBadgeStyle(tag)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links: Refined Minimalist Buttons */}
            <div className="flex items-center gap-2.5 pt-4 mt-5 border-t border-zinc-800/60">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white px-3 py-1.5 rounded-md bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all duration-150"
                >
                  <span>Code</span>
                  <span className="text-[10px] text-zinc-500 group-hover:text-zinc-400">↗</span>
                </a>
              ) : project.isPrivate ? (
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500 px-3 py-1.5 rounded-md bg-zinc-900/40 border border-zinc-900 select-none cursor-default">
                  <span>🔒 Proprietary</span>
                </span>
              ) : null}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 px-3 py-1.5 rounded-md bg-emerald-950/20 hover:bg-emerald-950/40 border border-emerald-800/40 hover:border-emerald-700/60 transition-all duration-150"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{project.liveLabel === "IEEE Paper" ? "IEEE Publication" : "Live Demo"}</span>
                  <span className="text-[10px]">↗</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
