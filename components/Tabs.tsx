"use client";

import { fileMeta, type SectionId } from "@/lib/fileMeta";

export default function Tabs({
  openTabs,
  activeTab,
  isMobile = false,
  onSelect,
  onClose,
}: {
  openTabs: SectionId[];
  activeTab: SectionId | null;
  isMobile?: boolean;
  onSelect: (id: SectionId) => void;
  onClose: (id: SectionId) => void;
}) {
  return (
    <div className="flex overflow-x-auto no-scrollbar border-b border-vsc-line bg-vsc-tab-inactive font-mono">
      {openTabs.map((id) => {
        const meta = fileMeta[id];
        const active = id === activeTab;
        return (
          <button
            key={id}
            onClick={() => onSelect(id)}
            className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap border-r border-vsc-line py-2 px-3 text-[12.5px] phone:text-[13px] phone:pl-4 phone:pr-2.5 transition-colors ${
              active ? "bg-vsc-tab-active text-vsc-text font-medium" : "text-vsc-muted hover:bg-vsc-hover"
            }`}
          >
            <span className="text-[10px] font-bold" style={{ color: meta.iconColorVar }}>{meta.ext}</span>
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
  );
}
