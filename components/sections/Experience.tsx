"use client";

import { experienceContent } from "@/lib/content";

export default function Experience() {
  return (
    <div>
      <h2
        className="mb-6 font-extrabold text-vsc-white"
        style={{ fontSize: "clamp(20px, 4vw, 26px)" }}
      >
        Experience
      </h2>

      <div className="max-w-[700px]">
        {experienceContent.map((item, i) => (
          <div
            key={item.role}
            className={`group relative pl-[30px] transition-all duration-200 ${
              i < experienceContent.length - 1
                ? "border-l-2 border-vsc-line pb-[30px]"
                : "border-l-2 border-transparent pb-0"
            }`}
          >
            {/* timeline dot with pulse */}
            <span
              className="absolute -left-[6px] top-[4px] block h-[12px] w-[12px] rounded-full bg-vsc-blue ring-4 ring-vsc-bg transition-all duration-200 group-hover:scale-125 group-hover:bg-vsc-pink group-hover:shadow-[0_0_10px_rgba(233,60,172,0.6)]"
            />

            <div className="rounded-lg p-3 -ml-3 transition-colors duration-200 group-hover:bg-vsc-panel/50">
              <div className="text-[15px] font-bold text-vsc-white group-hover:text-vsc-blue transition-colors">
                {item.role}
              </div>
              <div className="mb-2 mt-0.5 text-[12px] text-vsc-muted">
                {item.meta}
              </div>
              <p className="max-w-[600px] text-[13.5px] leading-[1.7] text-vsc-text">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
