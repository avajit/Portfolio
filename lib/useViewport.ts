"use client";

import { useSyncExternalStore } from "react";

export interface ViewportInfo {
  sidebarWidth: number;
  activityBarWidth: number;
  isCompactMenu: boolean; // <=900px: hamburger menu instead of full menubar, search hidden
  isNarrow: boolean; // <=900px: sidebar should start collapsed
  sectionPadding: string; // padding shorthand for section.page-equivalent content blocks
}

const DESKTOP: ViewportInfo = {
  sidebarWidth: 260,
  activityBarWidth: 48,
  isCompactMenu: false,
  isNarrow: false,
  sectionPadding: "46px 60px 70px",
};

function computeViewport(width: number): ViewportInfo {
  if (width <= 480) {
    return {
      sidebarWidth: 180,
      activityBarWidth: 40,
      isCompactMenu: true,
      isNarrow: true,
      sectionPadding: "20px 14px 40px",
    };
  }
  if (width <= 600) {
    return {
      sidebarWidth: 180,
      activityBarWidth: 44,
      isCompactMenu: true,
      isNarrow: true,
      sectionPadding: "24px 18px 46px",
    };
  }
  if (width <= 900) {
    return {
      sidebarWidth: 200,
      activityBarWidth: 48,
      isCompactMenu: true,
      isNarrow: true,
      sectionPadding: "34px 26px 55px",
    };
  }
  if (width <= 1024) {
    return {
      sidebarWidth: 220,
      activityBarWidth: 48,
      isCompactMenu: false,
      isNarrow: false,
      sectionPadding: "40px 36px 60px",
    };
  }
  return DESKTOP;
}

let cachedWidth: number | null = null;
let cachedSnapshot: ViewportInfo = DESKTOP;

function subscribe(onChange: () => void) {
  window.addEventListener("resize", onChange);
  return () => window.removeEventListener("resize", onChange);
}

function getSnapshot(): ViewportInfo {
  const width = window.innerWidth;
  if (cachedWidth !== width) {
    cachedWidth = width;
    cachedSnapshot = computeViewport(width);
  }
  return cachedSnapshot;
}

function getServerSnapshot(): ViewportInfo {
  return DESKTOP;
}

export function useViewport(): ViewportInfo {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
