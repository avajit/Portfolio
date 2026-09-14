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
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Connect from "@/components/sections/Connect";
import { fileMeta, sectionOrder, type SectionId } from "@/lib/fileMeta";
import { useViewport } from "@/lib/useViewport";
import { NavigationProvider } from "@/lib/NavigationContext";
import { ToastProvider } from "@/lib/ToastContext";

const sectionComponents: Record<SectionId, React.ComponentType> = {
  home: Home,
  about: About,
  skills: Skills,
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

  // ── Tabs ─────────────────────────────────────────────────────────────────
  const [openTabs, setOpenTabs] = useState<SectionId[]>([...sectionOrder]);
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
    setOpenTabs((prev) => {
      if (prev.includes(id)) return prev;
      const insertAt = sectionOrder.indexOf(id);
      const next = [...prev];
      const idx = next.findIndex((t) => sectionOrder.indexOf(t) > insertAt);
      if (idx === -1) next.push(id);
      else next.splice(idx, 0, id);
      return next;
    });
    setActiveTab(id);
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const closeTab = useCallback(
    (id: SectionId) => {
      setOpenTabs((prev) => {
        const idx = prev.indexOf(id);
        if (idx === -1) return prev;
        const next = prev.filter((t) => t !== id);
        if (next.length === 0) {
          setActiveTab(null);
        } else if (activeTab === id) {
          const nextId = next[Math.min(idx, next.length - 1)];
          setActiveTab(nextId);
          sectionRefs.current[nextId]?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
        return next;
      });
    },
    [activeTab]
  );

  // ── IntersectionObserver for scroll-sync ────────────────────────────────
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id as SectionId;
          if (entry.isIntersecting && openTabs.includes(id)) {
            setActiveTab((prev) => (prev === id ? prev : id));
          }
        });
      },
      { root: el, threshold: 0.55 }
    );
    sectionOrder.forEach((id) => {
      const target = sectionRefs.current[id];
      if (target) observer.observe(target);
    });
    return () => observer.disconnect();
  }, [openTabs]);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewport.isNarrow]);

  // ── Copilot & Mobile layout ───────────────────────────────────────────────
  const isMobile = viewport.isNarrow;
  const mainCols = isMobile
    ? "1fr"
    : `${viewport.activityBarWidth}px ${
        sidebarHidden ? 0 : viewport.sidebarWidth
      }px 1fr${copilotOpen ? " 300px" : ""}`;

  return (
    <div
      className="grid h-screen"
      style={{ gridTemplateRows: isMobile ? "1fr" : "38px 1fr 22px" }}
    >
      {!isMobile && (
        <Titlebar
          isCompactMenu={viewport.isCompactMenu}
          onToggleSidebar={toggleSidebar}
          onCloseActiveTab={() => { if (activeTab) closeTab(activeTab); }}
          onToggleCopilot={() => setCopilotOpen((p) => !p)}
          onToggleTerminal={() => setTerminalOpen((p) => !p)}
          onOpenCmdk={() => setCmdkOpen(true)}
          onZoom={handleZoom}
        />
      )}

      <div
        className="relative overflow-hidden"
        style={{
          display: "grid",
          gridTemplateColumns: mainCols,
          transition: "grid-template-columns 150ms ease",
        }}
      >
        {!isMobile && (
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

        {!isMobile && (
          <Sidebar
            width={viewport.sidebarWidth}
            hidden={sidebarHidden}
            panel={activePanel}
            activeTab={activeTab}
            onOpenFile={openAndScroll}
          />
        )}

        {/* ── Main editor area ── */}
        <section className="flex flex-col overflow-hidden">
          <Tabs
            openTabs={openTabs}
            activeTab={activeTab}
            isMobile={isMobile}
            onSelect={openAndScroll}
            onClose={closeTab}
          />
          <div className="flex items-center justify-between border-b border-vsc-line px-4 py-1.5 text-xs text-vsc-muted">
            <div>
              portfolio &gt; src &gt;{" "}
              <span className="text-vsc-text font-medium">
                {activeTab ? fileMeta[activeTab].name : ""}
              </span>
            </div>
            {isMobile && (
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setCmdkOpen(true)}
                  className="rounded border border-vsc-line bg-vsc-panel px-2 py-0.5 text-[11px] text-vsc-text hover:border-vsc-blue"
                >
                  🔍 Search
                </button>
                <button
                  onClick={() => setCopilotOpen((p) => !p)}
                  className="rounded px-2 py-0.5 text-[11px] font-medium text-white shadow-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--vsc-blue), var(--vsc-pink))",
                  }}
                >
                  ✨ Copilot
                </button>
              </div>
            )}
          </div>

          <div ref={contentRef} className="flex-1 overflow-y-auto scroll-smooth">
            <NavigationProvider navigate={openAndScroll}>
              {sectionOrder.map((id, i) => {
                const Component = sectionComponents[id];
                return (
                  <section
                    key={id}
                    id={id}
                    ref={(el) => { sectionRefs.current[id] = el; }}
                    style={{ padding: viewport.sectionPadding }}
                    className={`min-h-[60vh] ${
                      i !== sectionOrder.length - 1
                        ? "border-b border-dashed border-vsc-line"
                        : ""
                    }`}
                  >
                    <Component />
                  </section>
                );
              })}
            </NavigationProvider>

            {openTabs.length === 0 && (
              <div className="flex h-full flex-col items-center justify-center gap-2.5 text-vsc-muted">
                <div className="text-4xl opacity-50">◆</div>
                <div>No editor open</div>
                <div className="text-xs">
                  Select a file from the sidebar to continue
                </div>
              </div>
            )}
          </div>

          {/* Terminal panel — sits inside editor column above statusbar */}
          <Terminal
            open={terminalOpen}
            onClose={() => setTerminalOpen(false)}
          />
        </section>

        {/* Copilot panel — column on desktop, fixed drawer on mobile */}
        {copilotOpen && (
          isMobile ? (
            <div className="fixed inset-y-0 right-0 z-50 shadow-2xl">
              <CopilotPanel onClose={() => setCopilotOpen(false)} />
            </div>
          ) : (
            <CopilotPanel onClose={() => setCopilotOpen(false)} />
          )
        )}
      </div>

      {!isMobile && <StatusBar activeTab={activeTab} />}

      {/* ── Overlays (fixed) ── */}
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

export default function Page() {
  return (
    <ToastProvider>
      <PortfolioApp />
    </ToastProvider>
  );
}
