"use client";

import { fileMeta, type SectionId } from "@/lib/fileMeta";
import { FileIcon } from "./FileIcon";

export default function Tabs({
  openTabs,
  activeTab,
  isMobile = false,
  onSelect,
  onClose,
  onOpenCmdk,
  onToggleCopilot,
  onToggleTerminal,
}: {
  openTabs: SectionId[];
  activeTab: SectionId | null;
  isMobile?: boolean;
  onSelect: (id: SectionId) => void;
  onClose: (id: SectionId) => void;
  onOpenCmdk?: () => void;
  onToggleCopilot?: () => void;
  onToggleTerminal?: () => void;
}) {
  return (
    <div className="flex items-center justify-between border-b border-vsc-line bg-vsc-tab-inactive font-mono select-none">
      {/* Left: Scrollable Tabs */}
      <div className="flex flex-1 overflow-x-auto no-scrollbar">
        {openTabs.map((id) => {
          const meta = fileMeta[id];
          const active = id === activeTab;
          return (
            <button
              key={id}
              onClick={() => onSelect(id)}
              className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap border-r border-vsc-line py-2 px-3 text-[12.5px] phone:text-[13px] transition-colors ${
                active
                  ? "bg-vsc-tab-active text-vsc-text font-medium border-t-2 border-t-vsc-blue"
                  : "text-vsc-muted hover:bg-vsc-hover"
              }`}
            >
              <FileIcon name={meta.name} className="w-[14px] h-[14px] shrink-0" />
              <span>{meta.name}</span>
              {!isMobile && (
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose(id);
                  }}
                  className="hidden sm:inline-block rounded px-1 text-[12px] leading-none text-vsc-muted hover:bg-[#4a4a4a] hover:text-white"
                >
                  ✕
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Right: Action Buttons (Search 🔍, Copilot ✨, Terminal 💻) */}
      <div className="flex items-center gap-1 px-2 shrink-0 border-l border-vsc-line bg-vsc-tab-inactive">
        {onOpenCmdk && (
          <button
            onClick={onOpenCmdk}
            title="Search / Command Palette (Ctrl+K)"
            className="flex items-center gap-1 rounded px-2 py-1 text-xs text-vsc-muted hover:bg-vsc-hover hover:text-vsc-text transition-colors"
          >
            <span className="text-sm">🔍</span>
            <span className="hidden md:inline text-[11px]">Search</span>
          </button>
        )}

        {onToggleTerminal && (
          <button
            onClick={onToggleTerminal}
            title="Toggle Terminal (Ctrl+`)"
            className="flex items-center gap-1 rounded px-2 py-1 text-xs text-vsc-muted hover:bg-vsc-hover hover:text-vsc-text transition-colors"
          >
            <span className="text-sm">💻</span>
            <span className="hidden md:inline text-[11px]">Terminal</span>
          </button>
        )}
      </div>
    </div>
  );
}
