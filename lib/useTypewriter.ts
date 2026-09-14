"use client";

import { useEffect, useState } from "react";

export function useTypewriter(lines: string[]): string {
  const [text, setText] = useState(lines[0] ?? "");

  useEffect(() => {
    if (lines.length === 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // initial state already renders lines[0]; skip the animation entirely
      return;
    }

    let lineIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const full = lines[lineIndex];
      if (!deleting) {
        charIndex++;
        setText(full.slice(0, charIndex));
        if (charIndex === full.length) {
          deleting = true;
          timeoutId = setTimeout(tick, 1600);
          return;
        }
      } else {
        charIndex--;
        setText(full.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          lineIndex = (lineIndex + 1) % lines.length;
        }
      }
      timeoutId = setTimeout(tick, deleting ? 25 : 45);
    };

    timeoutId = setTimeout(tick, deleting ? 25 : 45);
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return text;
}
