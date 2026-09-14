"use client";

import { useRef, useState, useEffect } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const WELCOME = "Welcome! Type 'help' to see available commands.";

const COMMANDS: Record<string, string> = {
  help: "Commands: help · whoami · skills · projects · contact · clear",
  whoami:
    "Avajit Kumar Kewrat — Full-Stack Developer, Backend Engineer, Published Researcher @ IEEE ICCCA 2025",
  skills:
    "React.js · Node.js · Express · FastAPI · PostgreSQL · MongoDB · Docker · Redis · JWT/MFA/SSO/RBAC",
  projects:
    "AKMart (e-commerce) · WorldAtlas (country explorer) · LuxVault (storefront) · Live Attendance (IEEE)",
  contact:
    "mandalavijeet12@gmail.com | +91-8235717668 | github.com/avajit | linkedin.com/in/avajitkumar-kewrat",
};

interface Line {
  type: "output" | "prompt";
  text: string;
}

export default function Terminal({ open, onClose }: Props) {
  const [lines, setLines] = useState<Line[]>([{ type: "output", text: WELCOME }]);
  const [input, setInput] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  const scrollBottom = () => {
    setTimeout(() => {
      if (bodyRef.current)
        bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }, 10);
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    const cmd = input.trim().toLowerCase();
    const raw = input;
    setInput("");

    if (!cmd) return;

    if (cmd === "clear") {
      setLines([{ type: "output", text: WELCOME }]);
      return;
    }

    const response = COMMANDS[cmd] ?? `command not found: ${cmd}`;
    setLines((prev) => [
      ...prev,
      { type: "prompt", text: raw },
      { type: "output", text: response },
    ]);
    scrollBottom();
  };

  if (!open) return null;

  return (
    <div
      className="flex shrink-0 flex-col border-t border-vsc-line bg-vsc-titlebar"
      style={{ height: 190 }}
    >
      {/* Terminal tab bar */}
      <div className="flex shrink-0 items-center justify-between border-b border-vsc-line px-3.5">
        <div className="flex gap-[18px] text-[11.5px] text-vsc-muted">
          <span className="border-b-2 border-vsc-blue pb-1 pt-1.5 text-vsc-white">
            TERMINAL
          </span>
          <span className="py-1.5">PROBLEMS</span>
          <span className="py-1.5">OUTPUT</span>
        </div>
        <button
          onClick={onClose}
          className="px-2 py-1 text-[14px] text-vsc-muted hover:text-white"
        >
          ✕
        </button>
      </div>

      {/* Terminal body */}
      <div
        ref={bodyRef}
        className="flex-1 overflow-y-auto px-4 py-2.5 text-[12.5px] text-vsc-text"
        onClick={() => inputRef.current?.focus()}
      >
        {lines.map((line, i) =>
          line.type === "prompt" ? (
            <div key={i}>
              <span style={{ color: "var(--vsc-comment)" }}>
                avajit@portfolio
              </span>{" "}
              ~ $ {line.text}
            </div>
          ) : (
            <div key={i} className="text-vsc-text">
              {line.text}
            </div>
          )
        )}

        {/* Live input line */}
        <div className="mt-2 flex items-center">
          <span style={{ color: "var(--vsc-comment)" }}>avajit@portfolio</span>
          <span className="mr-1 text-vsc-text"> ~ $ </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            className="flex-1 bg-transparent text-vsc-text outline-none"
            spellCheck={false}
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
}
