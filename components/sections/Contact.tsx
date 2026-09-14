"use client";

import { useState } from "react";
import { contactContent } from "@/lib/content";
import { useToast } from "@/lib/ToastContext";

export default function Contact() {
  const { showToast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const set = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast("Message sent — thanks for reaching out!");
    setForm({ name: "", email: "", message: "" });
  };

  const inputCls =
    "w-full rounded-[5px] border border-vsc-line bg-vsc-panel px-3 py-2.5 text-[13px] text-vsc-text placeholder:text-vsc-muted focus:border-vsc-blue focus:outline-none transition-colors";
  const labelCls = "mb-1.5 block text-[11.5px] tracking-[.04em]";

  return (
    <div>
      <h2
        className="mb-6 font-extrabold text-vsc-white"
        style={{ fontSize: "clamp(20px, 4vw, 26px)" }}
      >
        Contact
      </h2>

      <div className="grid max-w-[900px] grid-cols-1 gap-8 sm:grid-cols-2">
        {/* ── Find Me On ── */}
        <div className="min-w-0">
          <div
            className="mb-3.5 text-[12px] tracking-[.06em]"
            style={{ color: "var(--vsc-comment)" }}
          >
            // FIND ME ON
          </div>
          <div className="flex flex-col gap-2.5">
            {contactContent.findMe.map((item) => (
              <div
                key={item.value}
                className="flex items-center gap-3 min-w-0 rounded-md border border-vsc-line bg-vsc-panel px-3.5 py-2.5 transition-all duration-200 hover:border-vsc-blue hover:translate-x-1"
              >
                <span className="text-[18px] shrink-0">{item.icon}</span>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-[12.5px] xs:text-[13px] text-vsc-text no-underline transition-colors hover:text-vsc-blue font-medium break-all min-w-0"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-[12.5px] xs:text-[13px] text-vsc-text font-medium break-all min-w-0">{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Send a Message ── */}
        <div>
          <div
            className="mb-3.5 text-[12px] tracking-[.06em]"
            style={{ color: "var(--vsc-comment)" }}
          >
            // SEND A MESSAGE
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className={labelCls} style={{ color: "var(--vsc-comment)" }}>
                YOUR_NAME *
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={set("name")}
                placeholder="string"
                className={inputCls}
              />
            </div>
            <div>
              <label className={labelCls} style={{ color: "var(--vsc-comment)" }}>
                YOUR_EMAIL *
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={set("email")}
                placeholder="string"
                className={inputCls}
              />
            </div>
            <div>
              <label className={labelCls} style={{ color: "var(--vsc-comment)" }}>
                MESSAGE *
              </label>
              <textarea
                required
                value={form.message}
                onChange={set("message")}
                placeholder="'your message'"
                rows={4}
                className={`${inputCls} resize-y`}
              />
            </div>
            <button
              type="submit"
              className="self-start rounded-[5px] bg-vsc-blue px-5 py-2.5 text-[13px] font-medium text-white transition-all duration-200 hover:shadow-[0_4px_15px_rgba(59,142,234,0.4)] hover:-translate-y-0.5 active:translate-y-0"
            >
              → send_message()
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
