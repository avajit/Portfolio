"use client";

import { useEffect, useState } from "react";
import { useToast } from "@/lib/ToastContext";

interface MenuItem {
  label: string;
  shortcut?: string;
  action?: () => void;
  divider?: boolean;
}

export default function Titlebar({
  isCompactMenu,
  onToggleSidebar,
  onCloseActiveTab,
  onToggleCopilot,
  onToggleTerminal,
  onOpenCmdk,
  onZoom,
}: {
  isCompactMenu: boolean;
  onToggleSidebar: () => void;
  onCloseActiveTab: () => void;
  onToggleCopilot: () => void;
  onToggleTerminal: () => void;
  onOpenCmdk: () => void;
  onZoom: (dir: 1 | -1 | 0) => void;
}) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const { showToast } = useToast();

  useEffect(() => {
    if (!openMenu) return;
    const close = () => setOpenMenu(null);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [openMenu]);

  const menus: Record<string, MenuItem[]> = {
    File: [
      { label: "New File", shortcut: "Ctrl+N" },
      { label: "Open Folder..." },
      { label: "Save", shortcut: "Ctrl+S" },
      { label: "Close Editor", shortcut: "Ctrl+W", action: onCloseActiveTab },
      { label: "", divider: true },
      { label: "Exit" },
    ],
    Edit: [
      { label: "Undo", shortcut: "Ctrl+Z" },
      { label: "Redo", shortcut: "Ctrl+Y" },
      { label: "", divider: true },
      { label: "Cut" },
      { label: "Copy" },
      { label: "Paste" },
      { label: "", divider: true },
      { label: "Find", shortcut: "Ctrl+F", action: onOpenCmdk },
    ],
    Selection: [
      { label: "Select All", shortcut: "Ctrl+A" },
      { label: "Expand Selection" },
      { label: "Copy Line Up" },
      { label: "Copy Line Down" },
    ],
    View: [
      { label: "Command Palette", shortcut: "Ctrl+P", action: onOpenCmdk },
      { label: "Toggle Sidebar", shortcut: "Ctrl+B", action: onToggleSidebar },
      { label: "Toggle Terminal", shortcut: "Ctrl+`", action: onToggleTerminal },
      { label: "", divider: true },
      { label: "Zoom In", shortcut: "Ctrl+=", action: () => onZoom(1) },
      { label: "Zoom Out", shortcut: "Ctrl+-", action: () => onZoom(-1) },
      { label: "Reset Zoom", action: () => onZoom(0) },
    ],
    Go: [
      { label: "Go to File...", shortcut: "Ctrl+P", action: onOpenCmdk },
      { label: "Go Back" },
      { label: "Go Forward" },
    ],
    Run: [
      { label: "Run Without Debugging", shortcut: "Ctrl+F5" },
      { label: "Start Debugging", shortcut: "F5" },
      { label: "Open Configurations" },
    ],
  };

  const runItem = (item: MenuItem) => {
    item.action?.();
    setOpenMenu(null);
  };

  const Dropdown = ({ items }: { items: MenuItem[] }) => (
    <div className="absolute left-0 top-[30px] z-50 min-w-[220px] rounded-md border border-vsc-line bg-vsc-elevated py-1.5 shadow-2xl">
      {items.map((item, i) =>
        item.divider ? (
          <hr key={i} className="my-1.5 border-vsc-line" />
        ) : (
          <button
            key={item.label + i}
            onClick={() => runItem(item)}
            className="flex w-full items-center justify-between px-4 py-1.5 text-left text-[12.5px] text-vsc-text hover:bg-vsc-blue hover:text-white"
          >
            {item.label}
            {item.shortcut && (
              <span className="text-[11px] text-vsc-muted">{item.shortcut}</span>
            )}
          </button>
        )
      )}
    </div>
  );

  return (
    <div
      className="relative z-30 flex items-center gap-1 border-b border-vsc-line bg-vsc-titlebar px-2.5"
      onClick={() => setOpenMenu(null)}
    >
      <div className="flex h-[22px] w-[22px] items-center justify-center text-base text-vsc-blue">
        ◆
      </div>

      {!isCompactMenu && (
        <div className="relative flex gap-0.5 text-[13px] text-vsc-muted">
          {Object.entries(menus).map(([name, items]) => (
            <div
              key={name}
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() =>
                  setOpenMenu((prev) => (prev === name ? null : name))
                }
                className={`rounded px-2.5 py-1.5 ${
                  openMenu === name
                    ? "bg-vsc-hover text-vsc-text"
                    : "hover:bg-vsc-hover hover:text-vsc-text"
                }`}
              >
                {name}
              </button>
              {openMenu === name && <Dropdown items={items} />}
            </div>
          ))}
        </div>
      )}

      {isCompactMenu && (
        <div className="relative" onClick={(e) => e.stopPropagation()}>
          <button
            title="Menu"
            onClick={() =>
              setOpenMenu((prev) => (prev === "mobile" ? null : "mobile"))
            }
            className="px-2 py-1.5 text-vsc-muted"
          >
            ☰
          </button>
          {openMenu === "mobile" && (
            <div className="absolute left-0 top-[30px] z-50 min-w-[220px] rounded-md border border-vsc-line bg-vsc-elevated py-1.5 shadow-2xl">
              <button onClick={() => { onOpenCmdk(); setOpenMenu(null); }} className="flex w-full items-center px-4 py-1.5 text-left text-[12.5px] text-vsc-text hover:bg-vsc-blue hover:text-white">🔍 Go to file / Command Palette</button>
              <button onClick={() => { onToggleSidebar(); setOpenMenu(null); }} className="flex w-full items-center px-4 py-1.5 text-left text-[12.5px] text-vsc-text hover:bg-vsc-blue hover:text-white">📁 Toggle Sidebar</button>
              <button onClick={() => { onToggleTerminal(); setOpenMenu(null); }} className="flex w-full items-center px-4 py-1.5 text-left text-[12.5px] text-vsc-text hover:bg-vsc-blue hover:text-white">⌨ Toggle Terminal</button>
              <hr className="my-1.5 border-vsc-line" />
              <button onClick={() => { onZoom(1); setOpenMenu(null); }} className="flex w-full items-center px-4 py-1.5 text-left text-[12.5px] text-vsc-text hover:bg-vsc-blue hover:text-white">Zoom In</button>
              <button onClick={() => { onZoom(-1); setOpenMenu(null); }} className="flex w-full items-center px-4 py-1.5 text-left text-[12.5px] text-vsc-text hover:bg-vsc-blue hover:text-white">Zoom Out</button>
            </div>
          )}
        </div>
      )}

      {!isCompactMenu && (
        <div className="flex flex-1 justify-center">
          <input
            type="text"
            readOnly
            value=""
            placeholder="portfolio"
            className="w-[260px] rounded border border-vsc-line bg-vsc-hover px-3 py-1 text-center text-xs text-vsc-text placeholder:text-vsc-muted"
          />
        </div>
      )}
      {isCompactMenu && <div className="flex-1" />}

      <div className="flex items-center gap-3">
        <button
          onClick={onToggleCopilot}
          className="rounded px-3 py-1 text-xs text-white"
          style={{
            background: "linear-gradient(135deg, var(--vsc-blue), var(--vsc-pink))",
          }}
        >
          ✨ Copilot
        </button>
        <span className="text-[13px] text-vsc-muted">⧉</span>
        <div className="ml-2 flex">
          <button
            title="Minimize"
            className="h-[38px] w-[42px] cursor-default text-sm text-vsc-muted hover:bg-vsc-hover"
          >
            —
          </button>
          <button
            title="Maximize"
            className="h-[38px] w-[42px] cursor-default text-sm text-vsc-muted hover:bg-vsc-hover"
          >
            ▢
          </button>
          <button
            title="Close"
            className="h-[38px] w-[42px] cursor-default text-sm text-vsc-muted hover:bg-[#e81123] hover:text-white"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
