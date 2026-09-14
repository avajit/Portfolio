"use client";

import { projectsContent } from "@/lib/content";

export default function Projects() {
  return (
    <div>
      <h2
        className="mb-6 font-extrabold text-vsc-white"
        style={{ fontSize: "clamp(20px, 4vw, 26px)" }}
      >
        Projects
      </h2>

      <div className="grid max-w-[900px] grid-cols-1 gap-5 sm-tablet:grid-cols-2">
        {projectsContent.map((proj) => (
          <div
            key={proj.title}
            className="group relative flex flex-col justify-between rounded-md border border-vsc-line bg-vsc-panel p-5 transition-all duration-300 hover:-translate-y-1 hover:border-vsc-blue hover:shadow-[0_8px_25px_rgba(59,142,234,0.12)]"
          >
            <div>
              <div className="mb-2 text-[15px] font-bold text-vsc-white group-hover:text-vsc-blue transition-colors">
                {proj.title}
              </div>
              <p className="mb-4 text-[12.5px] leading-[1.6] text-vsc-muted">
                {proj.desc}
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-vsc-line px-2 py-0.5 text-[10.5px] text-vsc-text transition-colors duration-200 group-hover:border-vsc-blue/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11.5px] text-vsc-muted no-underline transition-colors hover:text-vsc-blue"
                >
                  🐙 GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
