"use client";

import { useEffect, useState } from "react";
import { useToast } from "@/lib/ToastContext";

export type PanelId = "explorer" | "search" | "git" | "extensions";

const THEMES = [
  { key: "dark", label: "Portfolio Dark", dot: "#3b8eea", blue: "#3b8eea", pink: "#e93cac" },
  { key: "rose", label: "Rosé Pine", dot: "#ea9a97", blue: "#c4a7e7", pink: "#ea9a97" },
  { key: "tokyo", label: "Tokyo Night", dot: "#7aa2f7", blue: "#7aa2f7", pink: "#bb9af7" },
  { key: "nord", label: "Nord", dot: "#88c0d0", blue: "#88c0d0", pink: "#b48ead" },
  { key: "gruvbox", label: "Gruvbox", dot: "#fe8019", blue: "#fabd2f", pink: "#fe8019" },
] as const;

type ThemeKey = (typeof THEMES)[number]["key"];

function applyTheme(key: ThemeKey) {
  const t = THEMES.find((th) => th.key === key);
  if (!t) return;
  document.documentElement.style.setProperty("--vsc-blue", t.blue);
  document.documentElement.style.setProperty("--vsc-pink", t.pink);
}

function IconBtn({
  title,
  active,
  onClick,
  children,
  badge,
}: {
  title: string;
  active?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  children: React.ReactNode;
  badge?: string;
}) {
  return (
    <button
      title={title}
      onClick={onClick}
      className={`relative flex h-[26px] w-[26px] shrink-0 items-center justify-center ${active
          ? "text-vsc-white before:absolute before:-left-3 before:-top-1 before:-bottom-1 before:w-[2px] before:bg-vsc-white"
          : "text-vsc-muted hover:text-vsc-text"
        }`}
    >
      <span className="[&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-none [&>svg]:stroke-current [&>svg]:stroke-[1.4] [&>svg]:[stroke-linecap:round] [&>svg]:[stroke-linejoin:round]">
        {children}
      </span>
      {badge && (
        <span className="absolute -right-2 -top-1.5 rounded-full bg-vsc-blue px-1 text-[9px] text-white">
          {badge}
        </span>
      )}
    </button>
  );
}

export default function ActivityBar({
  width,
  activePanel,
  sidebarHidden,
  onSelectPanel,
  onToggleSidebar,
  onToggleCopilot,
  onOpenCmdk,
  onToggleTerminal,
}: {
  width: number;
  activePanel: PanelId;
  sidebarHidden: boolean;
  onSelectPanel: (panel: PanelId) => void;
  onToggleSidebar: () => void;
  onToggleCopilot: () => void;
  onOpenCmdk: () => void;
  onToggleTerminal: () => void;
}) {
  const { showToast } = useToast();
  const [popup, setPopup] = useState<"account" | "settings" | "more" | null>(null);
  const [activeTheme, setActiveTheme] = useState<ThemeKey>("dark");

  const togglePopup = (name: "account" | "settings" | "more") => (e: React.MouseEvent) => {
    e.stopPropagation();
    setPopup((prev) => (prev === name ? null : name));
  };

  useEffect(() => {
    if (!popup) return;
    const close = () => setPopup(null);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [popup]);

  const handleTheme = (key: ThemeKey) => {
    applyTheme(key);
    setActiveTheme(key);
    const label = THEMES.find((t) => t.key === key)?.label ?? key;
    showToast(`Theme switched to ${label}`);
    setPopup(null);
  };

  const panelBtn = (panel: PanelId) => () => onSelectPanel(panel);

  return (
    <div
      style={{ width }}
      className="no-scrollbar relative flex shrink-0 flex-col items-center gap-3.5 overflow-y-auto overflow-x-hidden border-r border-vsc-line bg-vsc-titlebar py-2.5"
      onClick={() => setPopup(null)}
    >
      <IconBtn title="Explorer" active={activePanel === "explorer" && !sidebarHidden} onClick={panelBtn("explorer")}>
        <svg viewBox="0 0 24 24"><path d="M4 4h9l4 4v12H4z" /><path d="M13 4v4h4" /></svg>
      </IconBtn>
      <IconBtn title="Search" active={activePanel === "search" && !sidebarHidden} onClick={panelBtn("search")}>
        <svg viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5" /><path d="M20 20l-4.8-4.8" /></svg>
      </IconBtn>
      <IconBtn title="Source Control" active={activePanel === "git" && !sidebarHidden} onClick={panelBtn("git")}>
        <svg viewBox="0 0 24 24"><circle cx="6" cy="5" r="2" /><circle cx="6" cy="19" r="2" /><circle cx="18" cy="7" r="2" /><path d="M6 7v10" /><path d="M6 12c0-3 3-3 6-3h4" /></svg>
      </IconBtn>
      <IconBtn title="Run and Debug" onClick={() => showToast("Run & Debug isn't wired up in this preview")}>
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M10 8.5l6 3.5-6 3.5z" /></svg>
      </IconBtn>
      <IconBtn title="Extensions" active={activePanel === "extensions" && !sidebarHidden} onClick={panelBtn("extensions")}>
        <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7.5" height="7.5" rx="1" /><rect x="13.5" y="3" width="7.5" height="7.5" rx="1" /><rect x="3" y="13.5" width="7.5" height="7.5" rx="1" /><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1" /></svg>
      </IconBtn>
      <IconBtn title="Remote Explorer" onClick={() => showToast("Remote Explorer isn't wired up in this preview")}>
        <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" rx="1.5" /><path d="M8 20h8M12 16v4" /></svg>
      </IconBtn>
      <IconBtn title="Live Share" onClick={() => showToast("Live Share isn't wired up in this preview")}>
        <svg viewBox="0 0 24 24"><path d="M12 3c3 4 6 8 6 11.5A6 6 0 0 1 6 14.5C6 11 9 7 12 3z" /></svg>
      </IconBtn>
      <IconBtn title="Testing" onClick={() => showToast("Testing isn't wired up in this preview")}>
        <svg viewBox="0 0 24 24"><path d="M9 2v6.5L3.5 19a1.5 1.5 0 0 0 1.3 2.2h14.4A1.5 1.5 0 0 0 20.5 19L15 8.5V2" /><path d="M9 2h6" /><path d="M7.5 15h9" /></svg>
      </IconBtn>
      <IconBtn title="Python" onClick={() => showToast("Python isn't wired up in this preview")}>
        <svg viewBox="0 0 24 24"><path d="M8 2.5h5A2.5 2.5 0 0 1 15.5 5v3.5H8A2.5 2.5 0 0 0 5.5 11v2H2.5V7A4.5 4.5 0 0 1 7 2.5z" /><path d="M16 21.5h-5A2.5 2.5 0 0 1 8.5 19v-3.5H16a2.5 2.5 0 0 0 2.5-2.5v-2h3V17a4.5 4.5 0 0 1-4.5 4.5z" /></svg>
      </IconBtn>
      <IconBtn title="Database" onClick={() => showToast("Database isn't wired up in this preview")}>
        <svg viewBox="0 0 24 24"><ellipse cx="12" cy="5.5" rx="8" ry="3" /><path d="M4 5.5v13c0 1.6 3.6 3 8 3s8-1.4 8-3v-13" /><path d="M4 12c0 1.6 3.6 3 8 3s8-1.4 8-3" /></svg>
      </IconBtn>
      <IconBtn title="Copilot Chat" onClick={(e) => { e.stopPropagation(); onToggleCopilot(); }}>
        <svg viewBox="0 0 24 24"><path d="M20 14.5a2 2 0 0 1-2 2H8l-4.5 3.5V6a2 2 0 0 1 2-2h12.5a2 2 0 0 1 2 2z" /></svg>
      </IconBtn>
      <IconBtn title="Runner" onClick={() => showToast("Runner isn't wired up in this preview")}>
        <svg viewBox="0 0 24 24"><path d="M13 2 5 14h5.5L9.5 22 19 9h-6z" /></svg>
      </IconBtn>
      <IconBtn title="More" onClick={togglePopup("more")}>
        <svg viewBox="0 0 24 24"><circle cx="12" cy="5" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="12" cy="19" r="1.6" /></svg>
      </IconBtn>

      <div className="flex-1" />

      <IconBtn title="Account" onClick={togglePopup("account")}>
        <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M4.5 21a7.5 7.5 0 0 1 15 0" /></svg>
      </IconBtn>
      <IconBtn title="Settings" onClick={togglePopup("settings")} badge="1">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M19 13.5a7.4 7.4 0 0 0 0-3l2-1.3-1.5-2.6-2.3.8a7.3 7.3 0 0 0-2.6-1.5L14.2 3.5h-3l-.4 2.4a7.3 7.3 0 0 0-2.6 1.5l-2.3-.8L4.4 9.2l2 1.3a7.4 7.4 0 0 0 0 3l-2 1.3 1.5 2.6 2.3-.8a7.3 7.3 0 0 0 2.6 1.5l.4 2.4h3l.4-2.4a7.3 7.3 0 0 0 2.6-1.5l2.3.8 1.5-2.6z" /></svg>
      </IconBtn>

      {/* ── Account popup ── */}
      {popup === "account" && (
        <div
          className="absolute bottom-2.5 left-11 z-[60] w-[170px] rounded-md border border-vsc-line bg-vsc-elevated py-2 text-[12.5px] shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-3.5 py-1.5 text-[10.5px] tracking-wider text-vsc-muted">SIGNED IN AS</div>
          <button className="flex w-full items-center gap-2 px-3.5 py-1.5 text-left text-vsc-text hover:bg-vsc-blue hover:text-white">👤 Avajit Kumar Kewrat</button>
          <hr className="my-1.5 border-vsc-line" />
          <button className="flex w-full items-center gap-2 px-3.5 py-1.5 text-left text-vsc-text hover:bg-vsc-blue hover:text-white">Account Settings</button>
          <button className="flex w-full items-center gap-2 px-3.5 py-1.5 text-left text-vsc-text hover:bg-vsc-blue hover:text-white">Sign Out</button>
        </div>
      )}

      {/* ── More popup ── */}
      {popup === "more" && (
        <div
          className="absolute bottom-2.5 left-11 z-[60] w-[190px] rounded-md border border-vsc-line bg-vsc-elevated py-2 text-[12.5px] shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-3.5 py-1.5 text-[10.5px] tracking-wider text-vsc-muted">VIEWS</div>
          <button onClick={() => { onToggleTerminal(); setPopup(null); }} className="flex w-full items-center gap-2 px-3.5 py-1.5 text-left text-vsc-text hover:bg-vsc-blue hover:text-white">Terminal</button>
          <button onClick={() => { onOpenCmdk(); setPopup(null); }} className="flex w-full items-center gap-2 px-3.5 py-1.5 text-left text-vsc-text hover:bg-vsc-blue hover:text-white">Command Palette</button>
          <hr className="my-1.5 border-vsc-line" />
          <div className="px-3.5 py-1.5 text-[10.5px] tracking-wider text-vsc-muted">CUSTOMIZE</div>
          <button onClick={() => { onToggleSidebar(); setPopup(null); }} className="flex w-full items-center gap-2 px-3.5 py-1.5 text-left text-vsc-text hover:bg-vsc-blue hover:text-white">Layout Control</button>
        </div>
      )}

      {/* ── Settings popup ── */}
      {popup === "settings" && (
        <div
          className="absolute bottom-2.5 left-11 z-[60] w-[250px] rounded-md border border-vsc-line bg-vsc-elevated py-2.5 text-[12.5px] shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-3.5 py-1.5 text-[10.5px] tracking-wider text-vsc-muted">COLOR THEME</div>
          {THEMES.map((t) => (
            <button
              key={t.key}
              onClick={() => handleTheme(t.key)}
              className="flex w-full items-center gap-2 px-3.5 py-1.5 text-left text-vsc-text hover:bg-vsc-blue hover:text-white"
            >
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: t.dot }} />
              {t.label}
              {activeTheme === t.key && " ✓"}
            </button>
          ))}
          <hr className="my-1.5 border-vsc-line" />
          <div className="px-3.5 py-1.5 text-[10.5px] tracking-wider text-vsc-muted">QUICK ACTIONS</div>
          <button onClick={() => { onOpenCmdk(); setPopup(null); }} className="flex w-full items-center gap-2 px-3.5 py-1.5 text-left text-vsc-text hover:bg-vsc-blue hover:text-white">Command Palette</button>
          <button onClick={() => { onToggleTerminal(); setPopup(null); }} className="flex w-full items-center gap-2 px-3.5 py-1.5 text-left text-vsc-text hover:bg-vsc-blue hover:text-white">Toggle Terminal</button>
          <button onClick={() => { onToggleSidebar(); setPopup(null); }} className="flex w-full items-center gap-2 px-3.5 py-1.5 text-left text-vsc-text hover:bg-vsc-blue hover:text-white">Toggle Sidebar</button>
        </div>
      )}
    </div>
  );
}
