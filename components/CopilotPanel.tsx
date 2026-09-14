"use client";

import { useState } from "react";

interface Props {
  onClose: () => void;
}

const ANSWERS: Record<string, string> = {
  about:
    "Avajit is a Full-Stack Developer with production experience building scalable SaaS systems at accelix.ai, an AI-powered startup. He's also a published researcher at IEEE ICCCA 2025.",
  projects:
    "Highlights include AKMart (e-commerce), WorldAtlas (250+ countries explorer), LuxVault (storefront), and a real-time face recognition attendance system published at IEEE ICCCA 2025.",
  experience:
    "Currently a Product Engineer Intern at Dignified Technology (accelix.ai) since February 2026, building backend APIs, JWT/MFA/SSO/RBAC auth, and containerized services with Docker.",
  stack:
    "React.js frontend; Node.js, Express.js, and FastAPI backend; PostgreSQL & MongoDB for data; Prisma & SQLAlchemy as ORMs; Docker, Redis, and MinIO for infrastructure.",
  contact:
    "You can reach Avajit at mandalavijeet12@gmail.com, +91-8235717668, or through the Contact section further down the page.",
};

const CHIPS = [
  { label: "Tell me about Avajit?", q: "about" },
  { label: "What projects has he built?", q: "projects" },
  { label: "Tell me about his experience?", q: "experience" },
  { label: "What's his tech stack?", q: "stack" },
  { label: "How can I contact him?", q: "contact" },
];

interface Msg {
  who: "user" | "bot";
  text: string;
}

export default function CopilotPanel({ onClose }: Props) {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");

  const push = (text: string, who: Msg["who"]) =>
    setMessages((prev) => [...prev, { text, who }]);

  const handleChip = (chip: (typeof CHIPS)[0]) => {
    push(chip.label, "user");
    setTimeout(() => push(ANSWERS[chip.q], "bot"), 480);
  };

  const handleSend = () => {
    const val = input.trim();
    if (!val) return;
    push(val, "user");
    setInput("");
    setTimeout(
      () =>
        push(
          "Thanks for asking! For a detailed answer, reach out directly at mandalavijeet12@gmail.com.",
          "bot"
        ),
      480
    );
  };

  return (
    <div className="flex h-full w-[300px] max-w-[85vw] shrink-0 flex-col border-l border-vsc-line bg-vsc-sidebar overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="flex shrink-0 items-center justify-between border-b border-vsc-line px-3.5 py-3">
        <div className="flex items-center gap-2 text-[12.5px] font-bold text-vsc-white">
          <span
            style={{
              background:
                "linear-gradient(135deg, var(--vsc-blue), var(--vsc-pink))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ✨
          </span>
          Avajit&apos;s Copilot
        </div>
        <button
          onClick={onClose}
          className="text-[14px] text-vsc-muted hover:text-white"
        >
          ✕
        </button>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.length === 0 && (
          <>
            <div
              className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full text-xl"
              style={{
                background:
                  "linear-gradient(135deg, var(--vsc-blue), var(--vsc-pink))",
              }}
            >
              🤖
            </div>
            <div className="mb-1.5 text-center text-[13px] font-bold text-vsc-white">
              Hi! I&apos;m Avajit&apos;s Copilot 👋
            </div>
            <div className="mb-4 text-center text-[11.5px] leading-[1.6] text-vsc-muted">
              Ask me anything about his projects, skills, experience, or
              achievements.
            </div>
            {CHIPS.map((chip) => (
              <button
                key={chip.q}
                onClick={() => handleChip(chip)}
                className="mb-2 block w-full rounded-md border border-vsc-line bg-vsc-panel px-3 py-2 text-left text-[11.5px] text-vsc-text transition-colors hover:border-vsc-blue"
              >
                {chip.label}
              </button>
            ))}
          </>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-2.5 max-w-[95%] rounded-md px-3 py-2 text-[12px] leading-[1.6] ${
              msg.who === "user"
                ? "ml-auto bg-vsc-blue text-white"
                : "border border-vsc-line bg-vsc-panel text-vsc-text"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="shrink-0 border-t border-vsc-line px-3 py-2.5">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Ask about projects, experience, skills..."
          className="mb-1.5 w-full rounded-[5px] border border-vsc-line bg-vsc-panel px-2.5 py-2 text-[12px] text-vsc-text placeholder:text-vsc-muted outline-none focus:border-vsc-blue"
        />
        <div className="flex justify-between text-[10px] text-vsc-muted">
          <span>Avajit&apos;s AI assistant</span>
          <span>AI can make mistakes</span>
        </div>
      </div>
    </div>
  );
}
