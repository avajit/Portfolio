"use client";

import { createContext, useContext } from "react";
import type { SectionId } from "./fileMeta";

interface NavigationContextValue {
  navigate: (id: SectionId) => void;
}

const NavigationContext = createContext<NavigationContextValue | null>(null);

export function NavigationProvider({
  navigate,
  children,
}: {
  navigate: (id: SectionId) => void;
  children: React.ReactNode;
}) {
  return <NavigationContext.Provider value={{ navigate }}>{children}</NavigationContext.Provider>;
}

export function useNavigation(): NavigationContextValue {
  const ctx = useContext(NavigationContext);
  if (!ctx) throw new Error("useNavigation must be used within a NavigationProvider");
  return ctx;
}
