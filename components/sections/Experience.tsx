"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Milestone {
  id: string;
  date: string;
  title: string;
  shortTitle: string;
  roleOrCourse: string;
  links?: { label: string; url: string }[];
  bullets: string[];
  skills: string[];
}

const milestones: Milestone[] = [
  {
    id: 'udemy',
    date: 'June 12, 2025',
    title: 'The Complete Full-Stack Web Development Bootcamp',
    shortTitle: 'Full-Stack Web Dev Bootcamp',
    roleOrCourse: 'Dr. Angela Yu • Udemy Certified',
    links: [{ label: '📄 Verify Certificate', url: 'https://ude.my/UC-d1447dbe-4e4c-4cae-b9cc-f5a80ce68070' }],
    bullets: [
      'Engineered full-stack applications with React.js, modern JS, and CSS.',
      'Designed RESTful APIs and asynchronous backends with Node.js & Express.',
      'Implemented data modeling with MongoDB and PostgreSQL.'
    ],
    skills: ['React.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs']
  },
  {
    id: 'dignified',
    date: 'Jan 27, 2026 – Sep 7, 2026',
    title: 'Product Engineer Intern',
    shortTitle: 'Product Engineer Intern @ Dignified Technology',
    roleOrCourse: 'Dignified Technology Pvt. Ltd. (accelix.ai) • Vadodara',
    links: [
      { label: '🔗 DignifiedMe', url: 'https://dignifiedme.com/' },
      { label: '🔗 Accelix Beta', url: 'https://beta.accelix.ai/' }
    ],
    bullets: [
      'Engineered scalable backend APIs with Node.js & Express for an AI SaaS platform.',
      'Implemented JWT, MFA, Google SSO, and RBAC authentication pipelines.',
      'Designed PostgreSQL schemas via Prisma, Redis rate limiting, and MinIO storage.',
      'Built FastAPI (Python) endpoints alongside Node.js microservices.'
    ],
    skills: ['Python', 'Node.js', 'FastAPI', 'PostgreSQL', 'Prisma', 'Redis', 'Docker', 'MinIO']
  }
];

function getSkillColors(skill: string) {
  const s = skill.toLowerCase();
  if (['react.js', 'react', 'css', 'html'].includes(s)) return 'text-cyan-300 bg-cyan-950/50 border-cyan-800/50';
  if (['node.js', 'express', 'fastapi', 'python'].includes(s)) return 'text-emerald-300 bg-emerald-950/50 border-emerald-800/50';
  if (['mongodb', 'postgresql', 'redis'].includes(s)) return 'text-violet-300 bg-violet-950/50 border-violet-800/50';
  return 'text-amber-300 bg-amber-950/50 border-amber-800/50';
}

export default function Experience() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="bg-transparent w-full px-6 sm:px-10 py-6 font-sans text-left">
      {/* Title */}
      <div className="mb-10 text-left flex flex-col items-start">
        <div className="font-mono text-xs select-none mb-1.5 flex flex-wrap items-center gap-1.5">
          <span className="text-zinc-500">//</span>
          <span className="text-fuchsia-400 font-semibold">const</span>
          <span className="text-sky-300">experience</span>
          <span className="text-zinc-400">=</span>
          <span className="flex items-center">
            <span className="text-amber-300">"professional_journey"</span>
            <span className="text-zinc-500">;</span>
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
          Experience
        </h2>
      </div>

      {/* --- DESKTOP VIEW: Horizontal Winding S-Snake Curve --- */}
      <div className="hidden md:block relative w-full h-[320px] select-none mt-8">
        
        {/* Horizontal SVG Path */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="snakeGrad" x1="0" y1="0" x2="100" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="25%" stopColor="#2dd4bf" />
              <stop offset="50%" stopColor="#34d399" />
              <stop offset="60%" stopColor="rgba(52,211,153, 0)" />
            </linearGradient>
            <filter id="glowDesktop" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <path
            d="M 15 50 C 25 80, 40 20, 50 50 C 53 58, 57 58, 60 50"
            stroke="url(#snakeGrad)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            filter="url(#glowDesktop)"
          />
        </svg>

        {/* Nodes Grid for Desktop */}
        {milestones.map((item, idx) => {
          const isActive = activeId === item.id;
          const leftPercent = idx === 0 ? '15%' : '50%';
          const topPercent = '50%';

          return (
            <div
              key={item.id}
              className={`absolute z-20 ${isActive ? 'z-50' : 'z-20'} flex flex-col items-center`}
              style={{ left: leftPercent, top: topPercent, transform: 'translate(-50%, -50%)' }}
              onMouseEnter={() => setActiveId(item.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              {/* Flag Button */}
              <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
                isActive 
                  ? 'bg-sky-500/20 border-2 border-sky-400 shadow-[0_0_16px_rgba(56,189,248,0.5)] scale-105' 
                  : 'bg-zinc-950 border border-zinc-700 hover:border-sky-400/60 shadow-md'
              }`}>
                <span className="text-sm select-none">🚩</span>
              </div>
              
              {/* Minimal Label */}
              <div className="absolute top-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 mt-3 select-none pointer-events-none w-max">
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <span className={idx === 0 
                    ? "text-sky-300 bg-sky-950/60 border border-sky-800/60 font-mono text-[11px] px-3 py-0.5 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.15)] whitespace-nowrap"
                    : "text-emerald-300 bg-emerald-950/60 border border-emerald-800/60 font-mono text-[11px] px-3 py-0.5 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.15)] whitespace-nowrap"
                  }>
                    {item.date}
                  </span>
                </div>
                {(() => {
                  if (item.shortTitle.includes('@')) {
                    const [role, company] = item.shortTitle.split('@');
                    return (
                      <p className={`text-xs font-semibold tracking-wide transition-colors flex flex-wrap items-center justify-center gap-1 ${idx === 0 ? 'text-cyan-300' : 'text-emerald-300'}`}>
                        <span>{role.trim()}</span>
                        <span className="text-zinc-500">@</span>
                        <span className={idx === 0 ? 'text-cyan-200' : 'text-teal-300'}>{company.trim()}</span>
                      </p>
                    );
                  }
                  return (
                    <p className={`text-xs font-semibold tracking-wide transition-colors text-center ${idx === 0 ? 'text-cyan-300 hover:text-cyan-200' : 'text-emerald-300 hover:text-emerald-200'}`}>
                      {item.shortTitle}
                    </p>
                  );
                })()}
              </div>

              {/* Hover Popover */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className={`absolute bottom-full mb-3 w-80 rounded-2xl p-[1px] bg-gradient-to-br from-sky-500/40 via-violet-500/30 to-emerald-500/40 shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(56,189,248,0.15)] backdrop-blur-xl z-50 pointer-events-auto
                      ${idx === 0 ? 'left-0' : 'left-1/2 -translate-x-1/2'}`}
                  >
                    {/* Inner Body */}
                    <div className="rounded-[15px] bg-[#0d1117]/95 p-4 flex flex-col gap-2 relative h-full w-full">
                      
                      {/* Down-Arrow Pointer (Hiding outside the gradient border) */}
                      <div className={`absolute top-full ${idx === 0 ? 'left-6' : 'left-1/2 -translate-x-1/2'} -mt-[1px] border-[6px] border-transparent border-t-zinc-700`} />
                      <div className={`absolute top-full ${idx === 0 ? 'left-6' : 'left-1/2 -translate-x-1/2'} -mt-[2px] border-[5px] border-transparent border-t-[#0d1117]`} />
                      
                      <h4 className={`text-sm font-bold bg-clip-text text-transparent leading-snug ${
                        idx === 0 
                          ? 'bg-gradient-to-r from-sky-400 to-emerald-400' 
                          : 'bg-gradient-to-r from-sky-400 to-cyan-300'
                      }`}>
                        {item.title}
                      </h4>
                      <p className="text-[11px] font-mono text-fuchsia-400 mt-1 mb-2.5 whitespace-normal">
                        {item.roleOrCourse}
                      </p>

                      <ul className="space-y-1.5 mb-3">
                        {item.bullets.map((b, i) => (
                          <li key={i} className="text-[11px] text-zinc-200 leading-relaxed flex items-start gap-1.5 py-0.5">
                            <span className="text-amber-400 font-bold text-xs shrink-0 mt-[1px]">➜</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      {item.links && item.links.length > 0 && (
                        <div className="flex flex-wrap items-center gap-2 my-2.5">
                          {item.links.map((link, i) => (
                            <a
                              key={i}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/40 text-emerald-300 font-mono text-[11px] font-semibold hover:border-emerald-300 hover:shadow-[0_0_12px_rgba(52,211,153,0.3)] transition-all w-fit my-1"
                            >
                              <span>{link.label}</span>
                              <span>↗</span>
                            </a>
                          ))}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-800/80">
                        {item.skills.map((s) => (
                          <span
                            key={s}
                            className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-medium border shadow-sm ${getSkillColors(s)}`}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* --- MOBILE VIEW: Vertical Winding S-Snake Curve --- */}
      <div className="block md:hidden relative w-full h-[280px] select-none pl-2 mt-4 mb-4">
        
        {/* Vertical SVG Path */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="snakeGradMobile" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="40%" stopColor="#2dd4bf" />
              <stop offset="80%" stopColor="#34d399" />
              <stop offset="100%" stopColor="rgba(52,211,153, 0)" />
            </linearGradient>
            <filter id="glowMobile" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <path
            d="M 15 15 C 35 40, -5 60, 15 80 C 25 90, 5 95, 15 100"
            stroke="url(#snakeGradMobile)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            filter="url(#glowMobile)"
          />
        </svg>

        {/* Nodes Grid for Mobile */}
        {milestones.map((item, idx) => {
          const isActive = activeId === item.id;
          const leftPercent = '15%';
          const topPercent = idx === 0 ? '15%' : '80%';

          return (
            <div
              key={item.id}
              className={`absolute z-20 ${isActive ? 'z-50' : 'z-20'} flex flex-col items-center`}
              style={{ left: leftPercent, top: topPercent, transform: 'translate(-50%, -50%)' }}
              onMouseEnter={() => setActiveId(item.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              {/* Flag Button */}
              <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
                isActive 
                  ? 'bg-sky-500/20 border-2 border-sky-400 shadow-[0_0_16px_rgba(56,189,248,0.5)] scale-105' 
                  : 'bg-zinc-950 border border-zinc-700 hover:border-sky-400/60 shadow-md'
              }`}>
                <span className="text-sm select-none">🚩</span>
              </div>
              
              {/* Minimal Label */}
              <div className="absolute left-14 top-1/2 -translate-y-1/2 flex flex-col items-start gap-1.5 select-none pointer-events-none max-w-[240px] pr-2">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className={idx === 0 
                    ? "text-sky-300 bg-sky-950/60 border border-sky-800/60 font-mono text-[11px] px-3 py-0.5 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.15)] whitespace-nowrap"
                    : "text-emerald-300 bg-emerald-950/60 border border-emerald-800/60 font-mono text-[11px] px-3 py-0.5 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.15)] whitespace-nowrap"
                  }>
                    {item.date}
                  </span>
                </div>
                {(() => {
                  if (item.shortTitle.includes('@')) {
                    const [role, company] = item.shortTitle.split('@');
                    return (
                      <p className={`text-xs font-semibold tracking-wide transition-colors flex flex-wrap items-center gap-1 mt-0.5 leading-snug ${idx === 0 ? 'text-cyan-300' : 'text-emerald-300'}`}>
                        <span>{role.trim()}</span>
                        <span className="text-zinc-500">@</span>
                        <span className={idx === 0 ? 'text-cyan-200' : 'text-teal-300'}>{company.trim()}</span>
                      </p>
                    );
                  }
                  return (
                    <p className={`text-xs font-semibold tracking-wide transition-colors text-left mt-0.5 leading-snug ${idx === 0 ? 'text-cyan-300 hover:text-cyan-200' : 'text-emerald-300 hover:text-emerald-200'}`}>
                      {item.shortTitle}
                    </p>
                  );
                })()}
              </div>

              {/* Hover Popover */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: idx === 0 ? -10 : 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: idx === 0 ? -10 : 10, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className={`absolute ${idx === 0 ? 'top-full mt-3' : 'bottom-full mb-3'} left-0 w-[280px] rounded-2xl p-[1px] bg-gradient-to-br from-sky-500/40 via-violet-500/30 to-emerald-500/40 shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(56,189,248,0.15)] backdrop-blur-xl z-50 text-left pointer-events-auto`}
                  >
                    {/* Inner Body */}
                    <div className="rounded-[15px] bg-[#0d1117]/95 p-4 flex flex-col gap-2 relative h-full w-full">

                      {/* Arrow Pointer */}
                      {idx === 0 ? (
                        <>
                          <div className="absolute bottom-full left-6 -mb-[1px] border-[6px] border-transparent border-b-zinc-700" />
                          <div className="absolute bottom-full left-6 -mb-[2px] border-[5px] border-transparent border-b-[#0d1117]" />
                        </>
                      ) : (
                        <>
                          <div className="absolute top-full left-6 -mt-[1px] border-[6px] border-transparent border-t-zinc-700" />
                          <div className="absolute top-full left-6 -mt-[2px] border-[5px] border-transparent border-t-[#0d1117]" />
                        </>
                      )}

                      <h4 className={`text-sm font-bold bg-clip-text text-transparent leading-snug ${
                        idx === 0 
                          ? 'bg-gradient-to-r from-sky-400 to-emerald-400' 
                          : 'bg-gradient-to-r from-sky-400 to-cyan-300'
                      }`}>
                        {item.title}
                      </h4>
                      <p className="text-[11px] font-mono text-fuchsia-400 mt-1 mb-2.5 whitespace-normal">
                        {item.roleOrCourse}
                      </p>

                      <ul className="space-y-1.5 mb-3">
                        {item.bullets.map((b, i) => (
                          <li key={i} className="text-[11px] text-zinc-200 leading-relaxed flex items-start gap-1.5 py-0.5">
                            <span className="text-amber-400 font-bold text-xs shrink-0 mt-[1px]">➜</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      {item.links && item.links.length > 0 && (
                        <div className="flex flex-wrap items-center gap-2 my-2.5">
                          {item.links.map((link, i) => (
                            <a
                              key={i}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/40 text-emerald-300 font-mono text-[11px] font-semibold hover:border-emerald-300 hover:shadow-[0_0_12px_rgba(52,211,153,0.3)] transition-all w-fit my-1"
                            >
                              <span>{link.label}</span>
                              <span>↗</span>
                            </a>
                          ))}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-800/80">
                        {item.skills.map((s) => (
                          <span
                            key={s}
                            className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-medium border shadow-sm ${getSkillColors(s)}`}
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

    </section>
  );
}
