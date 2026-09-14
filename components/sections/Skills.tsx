"use client";

import { useEffect, useRef, useState } from "react";
import { skillsContent } from "@/lib/content";

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      <h2
        className="mb-6 font-extrabold text-vsc-white"
        style={{ fontSize: "clamp(20px, 4vw, 26px)" }}
      >
        Skills
      </h2>

      <div className="grid max-w-[820px] grid-cols-1 gap-5 sm-tablet:grid-cols-2">
        {skillsContent.map((block) => (
          <div
            key={block.title}
            className="rounded-md border border-vsc-line bg-vsc-titlebar px-5 py-[18px] transition-all duration-200 hover:border-vsc-blue/60"
          >
            <h3 className="mb-3.5 text-[12px] uppercase tracking-wider text-vsc-muted font-semibold">
              {block.title}
            </h3>
            {block.skills.map((skill) => (
              <div
                key={skill.label}
                className="group mb-2.5 flex items-center gap-2.5 text-[12.5px]"
              >
                <span className="w-[110px] shrink-0 text-vsc-text group-hover:text-vsc-white transition-colors">
                  {skill.label}
                </span>
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-vsc-hover">
                  <div
                    className="h-full rounded-full transition-all duration-[1000ms] ease-out group-hover:brightness-125"
                    style={{
                      width: animated ? `${skill.width}%` : "0%",
                      background: skill.pink
                        ? "linear-gradient(90deg, var(--vsc-pink), #ff77d4)"
                        : "linear-gradient(90deg, var(--vsc-blue), #60a5fa)",
                      boxShadow: animated
                        ? skill.pink
                          ? "0 0 8px rgba(233,60,172,0.4)"
                          : "0 0 8px rgba(59,142,234,0.4)"
                        : "none",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
