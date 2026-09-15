import React from "react";

const quickStats = [
  { label: "Experience", value: "Ex-Backend Intern @ Dignified", href: "https://dignifiedme.com/" },
  { label: "Research", value: "IEEE ICCCA 2025 Author", href: "https://ieeexplore.ieee.org/" },
  { label: "DSA", value: "200+ LeetCode Solved" },
  { label: "Certifications", value: "IIT NPTEL (Networks & IoT)" }
];

export default function About() {
  return (
    <section id="about" className="py-12 w-full px-6 sm:px-10 text-left">
      {/* Syntax indicator */}
      <div className="font-mono text-xs select-none mb-2 flex items-center gap-1.5">
        <span className="text-zinc-500">//</span>
        <span className="text-fuchsia-400 font-medium">const</span>
        <span className="text-sky-300">about</span>
        <span className="text-zinc-500">=</span>
        <div>
          <span className="text-amber-300">"tldr"</span>
          <span className="text-zinc-500">;</span>
        </div>
      </div>

      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent mb-4">
        About Me
      </h2>

      {/* 2-sentence bio: Completed internship + current availability */}
      <p className="text-[13px] sm:text-[14px] text-zinc-300/90 leading-[1.75] mb-6">
        I am a <span className="text-sky-300 font-medium">Full-Stack & Backend Developer</span> with production experience engineering SaaS architectures, secure auth systems (JWT/MFA/OAuth), and microservices with Node.js, FastAPI, and PostgreSQL. Former Backend Developer Intern at <a href="https://dignifiedme.com/" target="_blank" rel="noopener noreferrer" className="text-zinc-100 font-medium hover:text-sky-300 transition-colors hover:underline underline-offset-4">Dignified Technology</a> (<a href="https://beta.accelix.ai/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-300 transition-colors hover:underline underline-offset-4">Accelix.ai</a>) and published researcher at <a href="https://ieeexplore.ieee.org/" target="_blank" rel="noopener noreferrer" className="text-teal-300 font-mono text-xs hover:text-teal-200 transition-colors hover:underline underline-offset-4">IEEE ICCCA 2025</a>—currently open to full-time engineering roles and freelance software projects. Originally from Rangeli, Nepal, currently based in Vadodara, India, with a B.Tech in CSE from <span className="text-amber-300/90 font-medium">Parul University</span>.
      </p>

      {/* 4 Single-line stats in a clean grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {quickStats.map((stat, i) => {
          const Card = stat.href ? "a" : "div";
          return (
            <Card
              key={i}
              href={stat.href}
              target={stat.href ? "_blank" : undefined}
              rel={stat.href ? "noopener noreferrer" : undefined}
              className={`p-3 rounded-lg bg-[#0b0f17] border border-zinc-800/80 font-mono ${stat.href ? 'hover:border-sky-500/50 hover:bg-zinc-900/40 transition-all cursor-pointer' : ''}`}
            >
              <span className="block text-[10px] text-zinc-500 uppercase tracking-wider mb-1">
                {stat.label}
              </span>
              <span className="block text-xs text-zinc-200 font-medium leading-relaxed">
                {stat.value}
              </span>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
