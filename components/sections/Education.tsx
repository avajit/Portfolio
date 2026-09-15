import React from "react";

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreType: string;
}

export const educationData: EducationItem[] = [
  {
    degree: "B.Tech Computer Science & Engineering",
    institution: "Parul University (PIET)",
    location: "Vadodara, India",
    period: "2022 — 2026",
    score: "8.01 / 10",
    scoreType: "CGPA"
  },
  {
    degree: "Higher Secondary (12th Grade)",
    institution: "Kantipur Secondary School",
    location: "Biratnagar, Nepal",
    period: "2020 — 2022",
    score: "81.75%",
    scoreType: "Score"
  },
  {
    degree: "Secondary Education (10th Grade)",
    institution: "Mt Makalu English Boarding School",
    location: "Rangeli, Nepal",
    period: "2020",
    score: "80.00%",
    scoreType: "Score"
  }
];

export default function Education() {
  return (
    <section className="bg-transparent w-full px-6 sm:px-10 py-6 font-sans text-left">
      {/* Title */}
      <div className="mb-10 text-left flex flex-col items-start">
        <div className="font-mono text-xs select-none mb-1.5 flex flex-wrap items-center gap-1.5">
          <span className="text-zinc-500">//</span>
          <span className="text-fuchsia-400 font-medium">const</span>
          <span className="text-sky-300">academic</span>
          <span className="text-zinc-500">=</span>
          <span className="flex items-center">
            <span className="text-amber-300">"background"</span>
            <span className="text-zinc-500">;</span>
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
          Education
        </h2>
      </div>

      {/* Cards Container */}
      <div className="space-y-6">
        {educationData.map((edu, idx) => (
          <div
            key={idx}
            className="group rounded-xl bg-[#0b0f17] border border-zinc-800/80 hover:border-zinc-700/80 p-5 sm:p-6 transition-all duration-200"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              {/* Left Column: Degree & Institution */}
              <div className="space-y-1">
                {/* Degree Title with consistent crisp color */}
                <h3 className="text-base sm:text-lg font-semibold text-zinc-100">
                  {edu.degree}
                </h3>

                {/* Subtitle: School & Location */}
                <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-1">
                  <span>{edu.institution}</span>
                  <span className="mx-2 text-zinc-600">•</span>
                  <span className="text-zinc-500">{edu.location}</span>
                </p>
              </div>

              {/* Right Column: Badges for Period and Score */}
              <div className="flex items-center gap-2 pl-4 sm:pl-0 shrink-0">
                <span className="text-xs font-mono px-2.5 py-1 rounded-md border border-zinc-800 bg-zinc-900/60 text-zinc-400">
                  {edu.period}
                </span>

                <span className="text-xs font-mono px-2.5 py-1 rounded-md border border-teal-800/50 bg-teal-950/30 text-teal-300">
                  <span className="text-[10px] text-teal-400/70 mr-1">{edu.scoreType}:</span>
                  {edu.score}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
