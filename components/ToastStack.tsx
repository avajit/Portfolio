"use client";

import { useToast } from "@/lib/ToastContext";

export default function ToastStack() {
  const { toasts, dismiss } = useToast();

  return (
    <div className="fixed bottom-8 right-5 z-[200] flex flex-col gap-2 pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          onClick={() => dismiss(toast.id)}
          className="toast-item pointer-events-auto max-w-[280px] cursor-pointer rounded-[5px] bg-vsc-elevated text-[12.5px] text-vsc-text shadow-2xl"
          style={{
            border: "1px solid var(--vsc-line)",
            borderLeft: "3px solid var(--vsc-blue)",
            padding: "10px 16px",
          }}
        >
          {toast.msg}
        </div>
      ))}
    </div>
  );
}
