"use client";

import { fileMeta, type SectionId } from "@/lib/fileMeta";

export default function Tabs({
  openTabs,
  activeTab,
  onSelect,
  onClose,
}: {
  openTabs: SectionId[];
  activeTab: SectionId | null;
  onSelect: (id: SectionId) => void;
  onClose: (id: SectionId) => void;
}) {
  return (
    <div className="flex overflow-x-auto no-scrollbar border-b border-vsc-line bg-vsc-tab-inactive">
      {openTabs.map((id) => {
        const meta = fileMeta[id];
        const active = id === activeTab;
        return (
          <button
            key={id}
            onClick={() => onSelect(id)}
            className={`flex items-center gap-2 whitespace-nowrap border-r border-vsc-line py-2 pl-4 pr-2.5 text-[13px] ${
              active ? "bg-vsc-tab-active text-vsc-text" : "text-vsc-muted"
            }`}
          >
            <span className="text-[10px] font-bold" style={{ color: meta.iconColorVar }}>{meta.ext}</span>
            {meta.name}
            <span
              onClick={(e) => {
                e.stopPropagation();
                onClose(id);
              }}
              className="rounded px-1 text-[13px] leading-none text-vsc-muted hover:bg-[#4a4a4a] hover:text-white"
            >
              ✕
            </span>
          </button>
        );
      })}
    </div>
  );
}
