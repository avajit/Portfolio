"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Titlebar from "@/components/Titlebar";
import ActivityBar, { type PanelId } from "@/components/ActivityBar";
import Sidebar from "@/components/Sidebar";
import Tabs from "@/components/Tabs";
import StatusBar from "@/components/StatusBar";
import Terminal from "@/components/Terminal";
import CopilotPanel from "@/components/CopilotPanel";
import CommandPalette from "@/components/CommandPalette";
import DinoGame from "@/components/DinoGame";
import ToastStack from "@/components/ToastStack";
import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Connect from "@/components/sections/Connect";
import { sectionOrder, type SectionId } from "@/lib/fileMeta";
import { useViewport } from "@/lib/useViewport";
import { NavigationProvider } from "@/lib/NavigationContext";
import { ToastProvider } from "@/lib/ToastContext";

const sectionComponents: Record<SectionId, React.ComponentType> = {
  home: Home,
  about: About,
  skills: Skills,
  education: Education,
  experience: Experience,
  projects: Projects,
  contact: Contact,
  connect: Connect,
};

function PortfolioApp() {
  const viewport = useViewport();

  // ── Sidebar / panel state ────────────────────────────────────────────────
  const [activePanel, setActivePanel] = useState<PanelId>("explorer");
  const [sidebarOverride, setSidebarOverride] = useState<boolean | null>(null);
  const sidebarHidden = sidebarOverride ?? viewport.isNarrow;

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // ── Tabs ─────────────────────────────────────────────────────────────────
  const [openTabs, setOpenTabs] = useState<SectionId[]>(["home"]);
  const [activeTab, setActiveTab] = useState<SectionId | null>("home");

  // ── Overlays & panels ────────────────────────────────────────────────────
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [copilotOpen, setCopilotOpen] = useState(false);
  const [cmdkOpen, setCmdkOpen] = useState(false);
  const [dinoOpen, setDinoOpen] = useState(false);

  // ── Zoom ─────────────────────────────────────────────────────────────────
  const zoomRef = useRef(0);
  const handleZoom = useCallback((dir: 1 | -1 | 0) => {
    if (dir === 0) {
      zoomRef.current = 0;
      document.documentElement.style.fontSize = "";
    } else {
      zoomRef.current = Math.max(-2, Math.min(4, zoomRef.current + dir));
      document.documentElement.style.fontSize =
        16 + zoomRef.current * 1.5 + "px";
    }
  }, []);

  // ── Refs ─────────────────────────────────────────────────────────────────
  const sectionRefs = useRef<Partial<Record<SectionId, HTMLElement | null>>>({});
  const contentRef = useRef<HTMLDivElement | null>(null);

  // ── Sidebar helpers ──────────────────────────────────────────────────────
  const toggleSidebar = useCallback(
    () => setSidebarOverride((prev) => !(prev ?? viewport.isNarrow)),
    [viewport.isNarrow]
  );

  const selectPanel = (panel: PanelId) => {
    if (panel === activePanel && !sidebarHidden) {
      setSidebarOverride(true);
      return;
    }
    setActivePanel(panel);
    setSidebarOverride(false);
  };

  // ── Tab / navigation helpers ─────────────────────────────────────────────
  const openAndScroll = useCallback((id: SectionId) => {
    setOpenTabs((prev) => (prev.includes(id) ? prev : [...prev, id]));
    setActiveTab(id);
    const target = sectionRefs.current[id];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const closeTab = useCallback((id: SectionId) => {
    setOpenTabs((prev) => {
      const next = prev.filter((t) => t !== id);
      if (next.length === 0) {
        setActiveTab(null);
      }
      return next;
    });
    // If we closed the active tab, pick the nearest remaining tab
    setActiveTab((prev) => {
      if (prev !== id) return prev;
      const remaining = openTabs.filter((t) => t !== id);
      return remaining.length > 0 ? remaining[0] : null;
    });
  }, [openTabs]);

  // ── IntersectionObserver for scroll-sync ─────────────────────────────────
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id as SectionId;
            setActiveTab((prev) => (prev === id ? prev : id));
          }
        });
      },
      { root: el, threshold: 0.3 }
    );

    sectionOrder.forEach((id) => {
      const target = sectionRefs.current[id];
      if (target) observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  // ── Global keyboard shortcuts ────────────────────────────────────────────
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const ctrl = e.ctrlKey || e.metaKey;

      if (ctrl && e.key.toLowerCase() === "b") {
        e.preventDefault();
        toggleSidebar();
      }
      if (ctrl && e.key.toLowerCase() === "p") {
        e.preventDefault();
        setCmdkOpen(true);
      }
      if (ctrl && e.key === "`") {
        e.preventDefault();
        setTerminalOpen((p) => !p);
      }
      if (ctrl && (e.key === "=" || e.key === "+")) {
        e.preventDefault();
        handleZoom(1);
      }
      if (ctrl && e.key === "-") {
        e.preventDefault();
        handleZoom(-1);
      }
      if (e.key === "Escape") {
        setCmdkOpen(false);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [toggleSidebar, handleZoom]);

  const isNarrow = viewport.isNarrow;
  const mainCols = isNarrow
    ? (sidebarHidden ? "1fr" : `${viewport.sidebarWidth}px 1fr`)
    : `${viewport.activityBarWidth}px ${
        sidebarHidden ? 0 : viewport.sidebarWidth
      }px 1fr${copilotOpen ? " 300px" : ""}`;

  if (!mounted) {
    return null; // Prevent hydration flicker
  }

  return (
    <div
      className="grid h-full select-none font-sans w-full overflow-hidden"
      style={{
        gridTemplateRows: isNarrow ? "38px 1fr" : "38px 1fr 22px",
      }}
    >
      <Titlebar
        isCompactMenu={viewport.isCompactMenu}
        onToggleSidebar={toggleSidebar}
        onCloseActiveTab={() => { if (activeTab) closeTab(activeTab); }}
        onToggleCopilot={() => setCopilotOpen((p) => !p)}
        onToggleTerminal={() => setTerminalOpen((p) => !p)}
        onOpenCmdk={() => setCmdkOpen(true)}
        onZoom={handleZoom}
        onDino={() => setDinoOpen(true)}
      />

      <div
        className="relative overflow-hidden"
        style={{
          display: "grid",
          gridTemplateColumns: mainCols,
          transition: "grid-template-columns 150ms ease",
        }}
      >
        {!isNarrow && (
          <ActivityBar
            width={viewport.activityBarWidth}
            activePanel={activePanel}
            sidebarHidden={sidebarHidden}
            onSelectPanel={selectPanel}
            onToggleSidebar={toggleSidebar}
            onToggleCopilot={() => setCopilotOpen((p) => !p)}
            onOpenCmdk={() => setCmdkOpen(true)}
            onToggleTerminal={() => setTerminalOpen((p) => !p)}
          />
        )}

        {(!isNarrow || !sidebarHidden) && (
          <Sidebar
            width={viewport.sidebarWidth}
            hidden={sidebarHidden}
            panel={activePanel}
            activeTab={activeTab}
            onOpenFile={openAndScroll}
          />
        )}

        {/* ── Main editor area ── */}
        <section className="flex flex-col flex-1 min-w-0 overflow-hidden">
          {!isNarrow && (
            <Tabs
              openTabs={openTabs}
              activeTab={activeTab}
              isMobile={isNarrow}
              onSelect={openAndScroll}
              onClose={closeTab}
              onOpenCmdk={() => setCmdkOpen(true)}
              onToggleCopilot={() => setCopilotOpen((p) => !p)}
              onToggleTerminal={() => setTerminalOpen((p) => !p)}
            />
          )}

          <div ref={contentRef} className="flex-1 overflow-y-auto scroll-smooth bg-[#121214]">
            <NavigationProvider navigate={openAndScroll}>
              {sectionOrder.map((id, i) => {
                const Component = sectionComponents[id];
                return (
                  <section
                    key={id}
                    id={id}
                    ref={(el) => { sectionRefs.current[id] = el; }}
                    style={{ padding: (id === "home" || id === "experience") ? 0 : viewport.sectionPadding }}
                    className="min-h-[60vh]"
                  >
                    <Component />
                  </section>
                );
              })}
            </NavigationProvider>
          </div>
        </section>

        {/* Copilot panel */}
        {!isNarrow && copilotOpen && (
          <div className="border-l border-vsc-line bg-vsc-sidebar">
            <CopilotPanel onClose={() => setCopilotOpen(false)} />
          </div>
        )}
      </div>

      {!isNarrow && (
        <StatusBar activeTab={activeTab} />
      )}

      <Terminal
        open={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      {isNarrow && copilotOpen && (
        <div className="fixed inset-y-0 right-0 z-50 w-full max-w-[320px] border-l border-vsc-line bg-vsc-sidebar shadow-2xl">
          <CopilotPanel onClose={() => setCopilotOpen(false)} />
        </div>
      )}

      <CommandPalette
        open={cmdkOpen}
        onClose={() => setCmdkOpen(false)}
        onNavigate={openAndScroll}
        onDino={() => setDinoOpen(true)}
      />

      <DinoGame open={dinoOpen} onClose={() => setDinoOpen(false)} />
      <ToastStack />
    </div>
  );
}

export default function HomeApp() {
  return (
    <ToastProvider>
      <PortfolioApp />
    </ToastProvider>
  );
}
