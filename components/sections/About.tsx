"use client";

import { aboutContent } from "@/lib/content";

export default function About() {
  return (
    <div>
      <h2
        className="mb-6 font-extrabold text-vsc-white"
        style={{ fontSize: "clamp(20px, 4vw, 26px)" }}
      >
        About Me
      </h2>

      <p className="mb-[30px] max-w-[640px] text-[14.5px] leading-[1.85] text-vsc-text">
        I&apos;m a{" "}
        <b className="text-vsc-pink">Full-Stack Developer</b> with production
        experience building scalable SaaS systems at an AI-powered startup,{" "}
        <b className="text-vsc-pink">accelix.ai</b>. Proficient across the
        entire stack — React.js frontends, Node.js/Express.js and FastAPI
        backends, PostgreSQL and MongoDB databases. Skilled in secure
        authentication (JWT, MFA, Google SSO, RBAC), REST API design, and Redis
        caching. Published researcher at IEEE ICCCA 2025, with work on real-time
        AI systems.
      </p>

      <div className="mb-[30px] grid max-w-[700px] grid-cols-1 gap-3 sm:grid-cols-2">
        {aboutContent.focusItems.map((item) => (
          <div
            key={item.text}
            className="flex items-center gap-2 min-w-0 rounded-md border border-vsc-line bg-vsc-panel px-3.5 py-3 text-[12.5px] xs:text-[13px] text-vsc-text transition-all duration-200 hover:border-vsc-pink hover:translate-x-1 cursor-default shadow-sm break-words"
          >
            <span>{item.icon}</span> <span>{item.text}</span>
          </div>
        ))}
      </div>

      <h2 className="mb-4 font-extrabold text-vsc-white" style={{ fontSize: "18px" }}>
        Education
      </h2>

      <div className="flex flex-col gap-4">
        {aboutContent.education.map((edu) => (
          <div
            key={edu.school}
            className="border-l-2 border-vsc-blue pl-4 py-1 transition-all duration-200 hover:border-vsc-pink hover:pl-5"
          >
            <div className="text-[14px] font-bold text-vsc-white">
              {edu.school}
            </div>
            <div className="mt-0.5 text-[12px] text-vsc-muted">{edu.period}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
