"use client";

import { useState } from "react";
import { fileMeta, sectionOrder, type SectionId } from "@/lib/fileMeta";
import { useToast } from "@/lib/ToastContext";
import { FileIcon } from "./FileIcon";
import type { PanelId } from "./ActivityBar";

export default function Sidebar({
  width,
  hidden,
  panel,
  activeTab,
  onOpenFile,
}: {
  width: number;
  hidden: boolean;
  panel: PanelId;
  activeTab: SectionId | null;
  onOpenFile: (id: SectionId) => void;
}) {
  const [portfolioOpen, setPortfolioOpen] = useState(true);
  const [query, setQuery] = useState("");
  const { showToast } = useToast();

  const matches = sectionOrder.filter((id) =>
    fileMeta[id].name.toLowerCase().includes(query.trim().toLowerCase())
  );

  const handleResume = () => {
    showToast("Downloading resume...");
    const link = document.createElement("a");
    link.href = "/Avajit_Kumar_Kewrat_Resume.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
  };

  return (
    <aside
      style={{ width: hidden ? 0 : width }}
      className={`overflow-y-auto overflow-x-hidden border-r border-vsc-line bg-vsc-sidebar transition-[width] duration-150 ease-linear select-none ${
        hidden ? "border-transparent" : ""
      }`}
    >
      <div style={{ width }}>
        {panel === "explorer" && (
          <div className="py-2.5">
            <div className="px-4 py-1.5 text-[11px] font-semibold tracking-wider text-vsc-muted">
              EXPLORER
            </div>
            <button
              onClick={() => setPortfolioOpen((p) => !p)}
              className="flex w-full items-center gap-1.5 px-3 py-1.5 text-[12px] font-bold text-vsc-text hover:bg-vsc-hover transition-colors text-left"
            >
              <span className="w-3 text-center text-[10px]">
                {portfolioOpen ? "▾" : "▸"}
              </span>
              <span>PORTFOLIO</span>
            </button>

            {portfolioOpen && (
              <div className="mt-0.5">
                {sectionOrder.map((id) => {
                  const meta = fileMeta[id];
                  const selected = activeTab === id;
                  return (
                    <button
                      key={id}
                      onClick={() => onOpenFile(id)}
                      className={`flex w-full items-center gap-2 overflow-hidden py-1.5 pl-6 pr-4 text-left text-[13px] transition-colors ${
                        selected
                          ? "bg-vsc-selected text-vsc-white"
                          : "text-vsc-muted hover:bg-[#2a2d2e] hover:text-vsc-text"
                      }`}
                    >
                      <FileIcon name={meta.name} className="w-[14px] h-[14px] shrink-0" />
                      <span className="min-w-0 flex-1 truncate">
                        {meta.name}
                      </span>
                    </button>
                  );
                })}
                <button
                  onClick={handleResume}
                  className="flex w-full items-center gap-2 overflow-hidden py-1.5 pl-6 pr-4 text-left text-[13px] text-vsc-muted hover:bg-[#2a2d2e] hover:text-vsc-text transition-colors"
                >
                  <FileIcon
                    name="Avajit_Kumar_Kewrat_Resume.pdf"
                    className="w-[14px] h-[14px] shrink-0"
                  />
                  <span className="min-w-0 flex-1 truncate">
                    Avajit_Kumar_Kewrat_Resume.pdf
                  </span>
                </button>
              </div>
            )}
          </div>
        )}

        {panel === "search" && (
          <div className="py-3.5">
            <div className="mb-3.5 px-4">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search files..."
                className="w-full rounded border border-vsc-line bg-vsc-hover px-2.5 py-1.5 text-[12.5px] text-vsc-text placeholder:text-vsc-muted outline-none focus:border-vsc-blue"
              />
            </div>
            {query.trim() &&
              (matches.length === 0 ? (
                <div className="px-4 py-1.5 text-xs italic text-vsc-muted">
                  No results found
                </div>
              ) : (
                matches.map((id) => (
                  <div
                    key={id}
                    onClick={() => onOpenFile(id)}
                    className="cursor-pointer px-4 py-1.5 text-[12.5px] text-vsc-muted hover:bg-[#2a2d2e] hover:text-vsc-text"
                  >
                    <b className="text-vsc-text">{fileMeta[id].name}</b>
                  </div>
                ))
              ))}
          </div>
        )}

        {panel === "git" && (
          <div className="px-4 py-3.5">
            <div className="pb-2.5 text-[11px] tracking-wider text-vsc-muted">
              SOURCE CONTROL
            </div>
            <textarea
              rows={2}
              placeholder="Message (Ctrl+Enter to commit)"
              className="mb-2.5 w-full resize-none rounded border border-vsc-line bg-vsc-hover p-2 text-xs text-vsc-text placeholder:text-vsc-muted outline-none"
            />
            <button
              onClick={() => showToast("Commit message required ✓")}
              className="mb-3.5 w-full rounded bg-vsc-blue py-1.5 text-[12.5px] text-white"
            >
              ✓ Commit
            </button>
            <div className="pb-1.5 text-[10.5px] tracking-wider text-vsc-muted">
              CHANGES (2)
            </div>
            <div className="flex items-center justify-between py-1.5 text-[12.5px] text-vsc-text">
              <div className="flex items-center gap-2">
                <FileIcon name="home.tsx" className="w-[14px] h-[14px] shrink-0" />
                <span>home.tsx</span>
              </div>
              <span className="text-[11px] font-bold" style={{ color: "#e2c08d" }}>M</span>
            </div>
            <div className="flex items-center justify-between py-1.5 text-[12.5px] text-vsc-text">
              <div className="flex items-center gap-2">
                <FileIcon name="skills.json" className="w-[14px] h-[14px] shrink-0" />
                <span>skills.json</span>
              </div>
              <span className="text-[11px] font-bold" style={{ color: "#e2c08d" }}>M</span>
            </div>
          </div>
        )}

        {panel === "extensions" && (
          <div>
            <div className="px-4 pb-2.5 pt-3.5 text-[11px] tracking-wider text-vsc-muted">
              INSTALLED
            </div>
            {[
              { bg: "#3178c6", fg: "#fff", label: "TS", name: "Prettier", desc: "Code formatter" },
              { bg: "#e93cac", fg: "#fff", label: "◆", name: "Copilot", desc: "AI pair programmer" },
              { bg: "#4ec9b0", fg: "#1e1e1e", label: "JS", name: "ESLint", desc: "Linting utility" },
              { bg: "#e34c26", fg: "#fff", label: "►", name: "Live Server", desc: "Local dev server" },
            ].map((ext) => (
              <div key={ext.name} className="flex gap-2.5 border-b border-vsc-line px-4 py-2.5">
                <div
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded text-[13px]"
                  style={{ background: ext.bg, color: ext.fg }}
                >
                  {ext.label}
                </div>
                <div>
                  <div className="text-[12.5px] text-vsc-white">{ext.name}</div>
                  <div className="mt-0.5 text-[11px] text-vsc-muted">{ext.desc}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
