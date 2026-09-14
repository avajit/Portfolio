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
  onDino,
}: {
  isCompactMenu: boolean;
  onToggleSidebar: () => void;
  onCloseActiveTab: () => void;
  onToggleCopilot: () => void;
  onToggleTerminal: () => void;
  onOpenCmdk: () => void;
  onZoom: (dir: 1 | -1 | 0) => void;
  onDino: () => void;
}) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const { showToast } = useToast();

  useEffect(() => {
    if (!openMenu) return;
    const close = () => setOpenMenu(null);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [openMenu]);

  // ── Actions ──────────────────────────────────────────────
  const handleResume = () => {
    showToast("Downloading resume...");
    const link = document.createElement("a");
    link.href = "/Avajit_Kumar_Kewrat_Resume.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
  };

  const handleEmail = () => {
    window.location.href = "mailto:avajitkumar@example.com"; // User can update this
  };

  const handleGithub = () => {
    window.open("https://github.com/accelix-ai", "_blank");
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    showToast("Portfolio URL copied to clipboard!");
  };

  const handleSelectAll = () => {
    const range = document.createRange();
    range.selectNode(document.body);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
  };

  const handleFakeDebug = () => {
    onToggleTerminal();
    setTimeout(() => {
      showToast("Running diagnostics in terminal...");
      // A more complex implementation could push real lines to the terminal
    }, 500);
  };

  const menus: Record<string, MenuItem[]> = {
    File: [
      { label: "New Email", shortcut: "Ctrl+N", action: handleEmail },
      { label: "Open GitHub Profile...", action: handleGithub },
      { label: "Download Resume", shortcut: "Ctrl+S", action: handleResume },
      { label: "", divider: true },
      { label: "Close Tab", shortcut: "Ctrl+W", action: onCloseActiveTab },
    ],
    Edit: [
      { label: "Copy URL", action: handleCopyUrl },
      { label: "", divider: true },
      { label: "Find (Command Palette)", shortcut: "Ctrl+F", action: onOpenCmdk },
    ],
    Selection: [
      { label: "Select All", shortcut: "Ctrl+A", action: handleSelectAll },
      { label: "Expand Selection", action: () => showToast("Selection features are for text editing only!") },
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
      { label: "Go to Section...", shortcut: "Ctrl+P", action: onOpenCmdk },
    ],
    Run: [
      { label: "Run Without Debugging", shortcut: "Ctrl+F5", action: onDino },
      { label: "Start Debugging", shortcut: "F5", action: handleFakeDebug },
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
      {!isCompactMenu && (
        <div className="flex h-[22px] w-[22px] items-center justify-center text-base text-vsc-blue">
          ◆
        </div>
      )}

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



      {!isCompactMenu && (
        <div className="flex flex-1 justify-center">
          {/* Search bar removed per user request */}
        </div>
      )}
      {isCompactMenu && <div className="flex-1" />}

      <div className="flex items-center gap-3">
        <button 
          onClick={onToggleCopilot} 
          title="Toggle Copilot"
          className="mr-2 flex items-center gap-1.5 rounded-md border border-vsc-blue/30 bg-vsc-blue/10 px-2.5 py-1 text-[12px] font-semibold text-vsc-blue transition-all hover:bg-vsc-blue/20 hover:border-vsc-blue/50"
        >
          <span className="text-[13px]">✨</span>
          {isCompactMenu ? <span>Ask AI</span> : <span>Copilot</span>}
        </button>

        {!isCompactMenu && (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}
