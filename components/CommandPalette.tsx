"use client";

import { useEffect, useRef, useState } from "react";
import { fileMeta, sectionOrder, type SectionId } from "@/lib/fileMeta";

interface Props {
  open: boolean;
  onClose: () => void;
  onNavigate: (id: SectionId) => void;
  onDino: () => void;
}

type CmdItem =
  | { type: "file"; id: SectionId }
  | { type: "dino" };

export default function CommandPalette({ open, onClose, onNavigate, onDino }: Props) {
  const [query, setQuery] = useState("");
  const [hiIdx, setHiIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const q = query.toLowerCase();

  const filteredSections = sectionOrder.filter((id) =>
    fileMeta[id].name.toLowerCase().includes(q)
  );

  const showDino =
    !query || "play dino game".includes(q) || "dino".includes(q);

  const items: CmdItem[] = [
    ...filteredSections.map((id): CmdItem => ({ type: "file", id })),
    ...(showDino ? [{ type: "dino" } as CmdItem] : []),
  ];

  useEffect(() => {
    if (open) {
      setQuery("");
      setHiIdx(0);
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  useEffect(() => {
    setHiIdx(0);
  }, [query]);

  const activate = (item: CmdItem) => {
    if (item.type === "file") {
      onNavigate(item.id);
    } else {
      onDino();
    }
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") { onClose(); return; }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHiIdx((p) => Math.min(p + 1, items.length - 1));
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setHiIdx((p) => Math.max(p - 1, 0));
    }
    if (e.key === "Enter" && items[hiIdx]) {
      activate(items[hiIdx]);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/40 pt-[90px]"
      onClick={onClose}
    >
      <div
        className="w-[480px] max-w-[90vw] overflow-hidden rounded-md border border-vsc-line bg-vsc-elevated shadow-2xl font-mono"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Go to file, or run a command..."
          className="w-full border-b border-vsc-line bg-vsc-hover px-4 py-3 text-[14px] text-vsc-text placeholder:text-vsc-muted outline-none"
        />
        <div className="max-h-[280px] overflow-y-auto">
          {items.length === 0 && (
            <div className="px-4 py-3 text-[12.5px] italic text-vsc-muted">
              No results found
            </div>
          )}
          {items.map((item, i) => {
            const active = i === hiIdx;
            return (
              <div
                key={item.type === "file" ? item.id : "dino"}
                onClick={() => activate(item)}
                onMouseEnter={() => setHiIdx(i)}
                className={`flex cursor-pointer items-center gap-2.5 px-4 py-2.5 text-[13px] ${
                  active ? "bg-vsc-blue text-white" : "text-vsc-text hover:bg-vsc-blue hover:text-white"
                }`}
              >
                {item.type === "file" ? (
                  <>
                    <span
                      style={{
                        color: active ? "#fff" : fileMeta[item.id].iconColorVar,
                      }}
                    >
                      ◆
                    </span>
                    {fileMeta[item.id].name}
                  </>
                ) : (
                  <span>🦖 Play Dino Game</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
