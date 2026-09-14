"use client";

import { aboutContent } from "@/lib/content";

export default function Education() {
  return (
    <div>
      <h2
        className="mb-6 font-extrabold text-vsc-white"
        style={{ fontSize: "clamp(20px, 4vw, 26px)" }}
      >
        Education
      </h2>

      <div className="flex flex-col gap-5">
        {aboutContent.education.map((edu) => (
          <div
            key={edu.school}
            className="border-l-2 border-vsc-blue pl-4 py-1 transition-all duration-200 hover:border-vsc-pink hover:pl-5"
          >
            <div className="text-[14.5px] font-bold text-vsc-white">
              {edu.school}
            </div>
            <div className="mt-1 text-[12.5px] text-vsc-muted">{edu.period}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
