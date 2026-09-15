import React from "react";

export interface SkillItem {
  name: string;
  isBasic?: boolean;
}

export interface SkillCategory {
  title: string;
  badgeStyle: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "PROGRAMMING LANGUAGES",
    badgeStyle: "text-amber-300 bg-amber-950/25 border-amber-800/40",
    skills: [
      { name: "C" },
      { name: "Java" },
      { name: "Python" },
      { name: "JavaScript (ES6+)" }
    ]
  },
  {
    title: "FRONTEND DEVELOPMENT",
    badgeStyle: "text-sky-300 bg-sky-950/25 border-sky-800/40",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Vite" }
    ]
  },
  {
    title: "BACKEND & APIS",
    badgeStyle: "text-emerald-300 bg-emerald-950/25 border-emerald-800/40",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "FastAPI" },
      { name: "RESTful APIs" },
      { name: "WebSockets" },
      { name: "Microservices" }
    ]
  },
  {
    title: "DATABASES & ORMS",
    badgeStyle: "text-purple-300 bg-purple-950/25 border-purple-800/40",
    skills: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "SQL" },
      { name: "Prisma ORM" },
      { name: "Redis" },
      { name: "SQLAlchemy" }
    ]
  },
  {
    title: "AUTH & SECURITY",
    badgeStyle: "text-rose-300 bg-rose-950/25 border-rose-800/40",
    skills: [
      { name: "JWT" },
      { name: "MFA" },
      { name: "RBAC" },
      { name: "Rate Limiting" },
      { name: "Google SSO / OAuth" }
    ]
  },
  {
    title: "DEVOPS, CLOUD & TOOLS",
    badgeStyle: "text-teal-300 bg-teal-950/25 border-teal-800/40",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Docker" },
      { name: "MinIO (S3)" },
      { name: "Postman" },
      { name: "Linux / WSL" },
      { name: "VS Code" },
      { name: "AWS", isBasic: true }
    ]
  }
];

export default function Skills() {
  return (
    <section className="bg-transparent w-full px-6 sm:px-10 py-6 font-sans text-left">
      {/* Title */}
      <div className="mb-10 text-left flex flex-col items-start">
        <div className="font-mono text-xs select-none mb-1.5 flex flex-wrap items-center gap-1.5">
          <span className="text-zinc-500">//</span>
          <span className="text-fuchsia-400 font-medium">const</span>
          <span className="text-sky-300">stack</span>
          <span className="text-zinc-500">=</span>
          <span className="flex items-center">
            <span className="text-amber-300">"technical_proficiency"</span>
            <span className="text-zinc-500">;</span>
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>
      </div>

      {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((cat) => (
          <div
            key={cat.title}
            className="rounded-xl bg-[#0b0f17] border border-zinc-800/80 p-4 sm:p-5 flex flex-col justify-between hover:border-zinc-700/80 transition-all duration-200"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60">
                <span className="text-[13px] font-mono font-bold tracking-wider text-zinc-300 uppercase">
                  {cat.title}
                </span>
                <span className="text-[10px] font-mono text-zinc-600">
                  {cat.skills.length} skills
                </span>
              </div>

              {/* Badges / Pill Shapes */}
              <div className="flex flex-wrap gap-2 mt-3.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`text-xs font-mono px-2.5 py-1 rounded-md border inline-flex items-center gap-1.5 transition-colors ${
                      skill.isBasic
                        ? "text-zinc-400 bg-zinc-900/60 border-zinc-700/60"
                        : cat.badgeStyle
                    }`}
                  >
                    <span>{skill.name}</span>
                    {skill.isBasic && (
                      <span className="text-[9px] text-zinc-500 font-sans tracking-tight">
                        (basics)
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
