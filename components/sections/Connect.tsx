"use client";

export default function Connect() {
  return (
    <div>
      <h2
        className="mb-6 font-extrabold text-vsc-white"
        style={{ fontSize: "clamp(20px, 4vw, 26px)" }}
      >
        Connect
      </h2>

      <div className="max-w-[760px] rounded-lg border border-vsc-line bg-vsc-titlebar p-6 text-[13px] leading-[1.8] text-vsc-text shadow-md transition-all duration-200 hover:border-vsc-blue/50">
        <div className="mb-4 flex items-center gap-2 border-b border-vsc-line pb-3 text-vsc-muted text-[12px]">
          <span>📖</span>
          <span className="font-semibold text-vsc-white">README.md</span>
          <span className="ml-auto text-[11px] bg-vsc-panel px-2 py-0.5 rounded text-vsc-comment">// preview</span>
        </div>

        <div className="space-y-2.5">
          <div className="flex items-center gap-2">
            <span className="w-24 shrink-0 font-bold text-vsc-white">✉️ Email:</span>
            <a
              href="mailto:mandalavijeet12@gmail.com"
              className="text-vsc-text no-underline hover:text-vsc-blue transition-colors hover:underline"
            >
              mandalavijeet12@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-24 shrink-0 font-bold text-vsc-white">📱 Phone:</span>
            <span>+91-8235717668</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-24 shrink-0 font-bold text-vsc-white">🐙 GitHub:</span>
            <a
              href="https://github.com/avajit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-vsc-text no-underline hover:text-vsc-blue transition-colors hover:underline"
            >
              @avajit
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-24 shrink-0 font-bold text-vsc-white">💼 LinkedIn:</span>
            <a
              href="https://linkedin.com/in/avajitkumar-kewrat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-vsc-text no-underline hover:text-vsc-blue transition-colors hover:underline"
            >
              in/avajitkumar-kewrat
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-24 shrink-0 font-bold text-vsc-white">⚡ LeetCode:</span>
            <a
              href="https://leetcode.com/u/avajitkumarkewrat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-vsc-text no-underline hover:text-vsc-blue transition-colors hover:underline"
            >
              u/avajitkumarkewrat
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-vsc-line pt-4 text-[12.5px] text-vsc-muted">
          This portfolio — including its design, layout, interactive terminal, and VS Code theme engine — was
          crafted with care by <b className="text-vsc-white font-bold">Avajit Kumar Kewrat</b>. Open to opportunities and willing to relocate · based in Vadodara, India.
        </div>
      </div>

      <div className="mt-5 flex max-w-[760px] items-center justify-between text-[12px] text-vsc-muted">
        <span>© 2026 Avajit Kumar Kewrat — All rights reserved</span>
        <span className="flex items-center gap-1">Made with <span className="text-vsc-pink animate-pulse">♥</span> & React</span>
      </div>
    </div>
  );
}
