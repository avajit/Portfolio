"use client";

import { homeContent } from "@/lib/content";
import { useTypewriter } from "@/lib/useTypewriter";
import { useNavigation } from "@/lib/NavigationContext";

const TAG_DOT: Record<string, string> = {
  bk: "#4ec9b0",
  ai: "#c586c0",
  ds: "var(--vsc-blue)",
};

export default function Home() {
  const { navigate } = useNavigation();
  const tagline = useTypewriter(homeContent.typewriterLines);

  return (
    <div>
      <div className="mb-6 text-sm" style={{ color: "var(--vsc-comment)" }}>
        {homeContent.comment}
      </div>

      <h1
        className="m-0 font-extrabold text-vsc-white"
        style={{ fontSize: "clamp(30px, 8vw, 52px)", lineHeight: 1.08, letterSpacing: "-0.01em" }}
      >
        {homeContent.firstName}
      </h1>
      <h1
        className="m-0 mb-[22px] font-extrabold"
        style={{
          fontSize: "clamp(30px, 8vw, 52px)",
          lineHeight: 1.08,
          letterSpacing: "-0.01em",
          color: "var(--vsc-pink)",
        }}
      >
        {homeContent.lastName}
        <span className="blink-cursor ml-1 inline-block h-4 w-[2px] align-middle bg-vsc-white" />
      </h1>

      <div className="mb-[22px] h-[3px] w-16" style={{ background: "var(--vsc-pink)" }} />

      <div className="mb-[22px] flex flex-wrap gap-2 phone:gap-2.5">
        {homeContent.tags.map((tag) =>
          tag.variant === "co" ? (
            <span
              key={tag.label}
              className="flex items-center gap-1.5 rounded-[5px] border px-[9px] py-1 text-[11px] xs:px-3 xs:py-1.5 xs:text-xs transition-all duration-200 hover:scale-105 hover:shadow-[0_0_12px_rgba(233,60,172,0.3)] cursor-default"
              style={{ color: "var(--vsc-pink)", borderColor: "rgba(233,60,172,0.4)" }}
            >
              {tag.label}
            </span>
          ) : (
            <span
              key={tag.label}
              className="flex items-center gap-1.5 rounded-[5px] border border-vsc-line bg-vsc-panel px-[9px] py-1 text-[11px] text-vsc-text xs:px-3 xs:py-1.5 xs:text-xs transition-all duration-200 hover:border-vsc-blue hover:scale-105 cursor-default"
            >
              <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: TAG_DOT[tag.variant] }} />
              {tag.label}
            </span>
          )
        )}
      </div>

      <div className="mb-6 min-h-[1em] text-[13px] font-medium text-vsc-muted">{tagline}</div>

      <p className="mb-[30px] max-w-[560px] text-[14.5px] leading-[1.8] text-vsc-text">
        {homeContent.bio.map((seg, i) =>
          seg.bold ? (
            <b key={i} style={{ color: seg.color === "pink" ? "var(--vsc-pink)" : "var(--vsc-blue)" }}>
              {seg.text}
            </b>
          ) : (
            <span key={i}>{seg.text}</span>
          )
        )}
      </p>

      <div className="mb-10 flex flex-wrap gap-2 phone:gap-3">
        {homeContent.ctaButtons.map((btn) => (
          <button
            key={btn.label}
            onClick={() => navigate(btn.target)}
            className={`flex items-center gap-2 rounded-[5px] border px-[14px] py-2 text-[12.5px] phone:px-[18px] phone:py-[9px] phone:text-[13px] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${
              btn.primary
                ? "border-vsc-blue bg-vsc-blue font-semibold text-white hover:shadow-[0_4px_15px_rgba(59,142,234,0.4)]"
                : "border-vsc-line text-vsc-text hover:border-vsc-text hover:bg-vsc-hover"
            }`}
          >
            {btn.icon} {btn.label}
          </button>
        ))}
      </div>

      <div className="mb-[26px] grid max-w-[820px] grid-cols-1 overflow-hidden rounded-md border border-vsc-line sm-tablet:grid-cols-4 shadow-sm">
        {homeContent.stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`bg-vsc-panel px-2 py-[14px] text-center xs:px-5 xs:py-5 transition-colors duration-200 hover:bg-vsc-hover ${
              i !== homeContent.stats.length - 1 ? "border-b border-vsc-line sm-tablet:border-b-0 sm-tablet:border-r" : ""
            }`}
          >
            <div className="text-[18px] font-extrabold text-vsc-white xs:text-[22px]">{stat.value}</div>
            <div className="mt-1 text-[10.5px] tracking-wider text-vsc-muted uppercase">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 phone:gap-2.5">
        {homeContent.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener" : undefined}
            className="flex items-center gap-1.5 rounded-[5px] border border-vsc-line px-[13px] py-[7px] text-[12.5px] text-vsc-text no-underline transition-all duration-200 hover:border-vsc-blue hover:text-vsc-white hover:bg-vsc-hover hover:-translate-y-0.5"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
