"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

type Status = "idle" | "sending" | "sent" | "error";

export function RequestPreview({ open, onClose }: Props) {
  const [status, setStatus] = useState<Status>("idle");

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      const timer = setTimeout(() => setStatus("idle"), 300);
      return () => clearTimeout(timer);
    }
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      role: (form.elements.namedItem("role") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      projectType: (form.elements.namedItem("projectType") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/request-preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal panel */}
      <div className="relative w-full max-w-lg rounded-2xl border border-white/[0.08] bg-[hsl(220_15%_7%)] p-7 text-white shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-1.5 text-white/40 transition-colors hover:bg-white/[0.06] hover:text-white/80"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        {status === "sent" ? (
          <div className="flex flex-col items-center py-10 text-center">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10 text-2xl">
              ✓
            </div>
            <h2 className="text-[18px] font-semibold text-white">
              Request received
            </h2>
            <p className="mt-2 text-[14px] text-white/55">
              We&apos;ll be in touch within 1–2 business days.
            </p>
            <button
              onClick={onClose}
              className="mt-7 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2 text-[13px] font-medium text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-[18px] font-semibold text-white">
              Request a Preview
            </h2>
            <p className="mt-1.5 text-[13.5px] text-white/50">
              Tell us about your project and we&apos;ll set up a personalised demo.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-[12px] font-medium text-white/60">
                    Full name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-3.5 py-2.5 text-[13.5px] text-white placeholder:text-white/25 outline-none transition-colors focus:border-cyan-400/40 focus:bg-white/[0.06]"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-[12px] font-medium text-white/60">
                    Company <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    name="company"
                    type="text"
                    required
                    placeholder="Acme Development"
                    className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-3.5 py-2.5 text-[13.5px] text-white placeholder:text-white/25 outline-none transition-colors focus:border-cyan-400/40 focus:bg-white/[0.06]"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-[12px] font-medium text-white/60">
                    Role
                  </label>
                  <input
                    name="role"
                    type="text"
                    placeholder="Director of Preconstruction"
                    className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-3.5 py-2.5 text-[13.5px] text-white placeholder:text-white/25 outline-none transition-colors focus:border-cyan-400/40 focus:bg-white/[0.06]"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-[12px] font-medium text-white/60">
                    Work email <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-3.5 py-2.5 text-[13.5px] text-white placeholder:text-white/25 outline-none transition-colors focus:border-cyan-400/40 focus:bg-white/[0.06]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-[12px] font-medium text-white/60">
                  Project type
                </label>
                <select
                  name="projectType"
                  className="w-full rounded-xl border border-white/[0.08] bg-[hsl(220_15%_10%)] px-3.5 py-2.5 text-[13.5px] text-white/80 outline-none transition-colors focus:border-cyan-400/40"
                >
                  <option value="">Select a type…</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="mixed-use">Mixed-use</option>
                  <option value="hospitality">Hospitality</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-[12px] font-medium text-white/60">
                  Tell us about your project
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Brief description of your current preconstruction pain points or project scope…"
                  className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.04] px-3.5 py-2.5 text-[13.5px] text-white placeholder:text-white/25 outline-none transition-colors focus:border-cyan-400/40 focus:bg-white/[0.06]"
                />
              </div>

              {status === "error" && (
                <p className="text-[12.5px] text-red-400">
                  Something went wrong. Please email{" "}
                  <a href="mailto:eric@arqflo.ai" className="underline">
                    eric@arqflo.ai
                  </a>{" "}
                  directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-full border border-cyan-300/30 bg-cyan-300/15 py-2.5 text-[13.5px] font-medium text-cyan-50 shadow-[0_8px_30px_-8px_rgba(34,211,238,0.35)] transition-all hover:bg-cyan-300/20 disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Submit request"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
