"use client";

import React, { useState } from "react";

const socialLinks = [
  {
    name: "Email",
    href: "mailto:mandalavijeet12@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/avajit-kumar-kewrat-884543267/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
      </svg>
    )
  },
  {
    name: "GitHub",
    href: "https://github.com/avajit",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    )
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/avajitkumarkewrat",
    icon: (
      <img src="/leetcode-icon.png" alt="LeetCode" className="w-5 h-5 object-contain" />
    )
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "db403a6f-47a7-4f6b-bd77-63382ccd1c7d",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      e.preventDefault();
      window.open("https://mail.google.com/mail/?view=cm&fs=1&to=mandalavijeet12@gmail.com", "_blank");
    }
  };

  return (
    <section className="bg-transparent w-full px-6 sm:px-10 py-6 font-sans text-left">
      <div className="mb-10 w-full flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div className="w-full sm:w-auto">
          {/* Code syntax tag */}
          <div className="font-mono text-xs select-none mb-3 flex items-center gap-2">
            <span className="text-zinc-500">//</span>
            <span className="text-fuchsia-400 font-medium">const</span>
            <span className="text-sky-300">collaborate</span>
            <span className="text-zinc-500">=</span>
            <span className="text-amber-300">"build_software"</span>
            <span className="text-zinc-500">;</span>
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-3 mb-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              Have an idea or need custom software built? Open to freelance projects, collaborations, and full-time engineering roles.
            </p>
          </div>

          {/* Top Status Badge - clean wrap on mobile, inline on sm+ */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-xl sm:rounded-full bg-emerald-950/30 border border-emerald-800/40 text-emerald-300 font-mono text-[11px] sm:text-xs mb-6 max-w-full leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span>Available for full-time roles & freelance</span>
            <span className="hidden sm:inline text-zinc-600">•</span>
            <span className="text-emerald-400/80 sm:text-emerald-300">Open to relocation</span>
          </div>
        </div>

        {/* Social Links Dock - centered/left aligned, touch-friendly tap targets */}
        <div className="flex items-center gap-2 mb-8">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={item.name === "Email" ? handleEmailClick : undefined}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={item.name}
                className="p-2.5 sm:p-2 rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800/60 transition-all duration-150"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

      {/* Modern Card Form Container */}
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-zinc-800/80 bg-[#090d14]/80 backdrop-blur-sm p-6 sm:p-8 space-y-6 shadow-xl"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-2">
              Name
            </label>
            <input
              type="text"
              required
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg bg-zinc-900/40 border border-zinc-800 text-zinc-100 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/50 transition-all placeholder:text-zinc-600"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="name@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg bg-zinc-900/40 border border-zinc-800 text-zinc-100 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/50 transition-all placeholder:text-zinc-600"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono text-zinc-400 mb-2">
            Message
          </label>
          <textarea
            rows={5}
            required
            placeholder="Tell me about the software you want to build, project scope, or role details..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-zinc-900/40 border border-zinc-800 text-zinc-100 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/50 transition-all placeholder:text-zinc-600 resize-none"
          />
        </div>

        {/* Form Footer - stacks naturally on small screens, flex-row on desktop */}
        <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            <span className="text-[11px] sm:text-xs font-mono text-zinc-400">
              Response time: within 24 hours
            </span>
          </div>

          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-zinc-950 font-mono text-xs font-semibold tracking-wide transition-all shadow-lg shadow-sky-500/10 disabled:opacity-70 disabled:cursor-not-allowed text-center"
          >
            {status === "loading" ? "Sending..." : status === "success" ? "Message Sent ✓" : status === "error" ? "Error! Try Again" : "Send Message ↗"}
          </button>
        </div>
      </form>

      {/* Footer Attribution Note */}
      <div className="mt-12 pt-6 border-t border-zinc-800/60 font-mono text-xs text-zinc-500 flex flex-col gap-4 text-center sm:text-left leading-relaxed">
        <div>
          This portfolio — including its design, layout, interactive terminal, and VS Code theme engine — was crafted with care by{" "}
          <span className="text-zinc-300 font-medium">Avajit Kumar Kewrat</span>. Based in Vadodara, India • Originally from Rangeli, Nepal • Open to relocation.
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between pt-2">
          <div>
            © {new Date().getFullYear()} Avajit Kumar Kewrat.
          </div>
          <div className="mt-2 sm:mt-0">
            Made with <span className="text-rose-500 inline-block animate-pulse">❤️</span> & React
          </div>
        </div>
      </div>
    </section>
  );
}
