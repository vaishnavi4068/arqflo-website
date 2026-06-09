"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { RequestPreview } from "@/components/landing/RequestPreview";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "";

const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Pillars", href: "#pillars" },
  { label: "Coverage", href: "#coverage" },
  { label: "Roadmap", href: "#roadmap" },
];

export function MarketingHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[999] flex justify-center bg-[hsl(220_15%_5%)] px-5 pt-5">
        <div
          className={cn(
            "flex w-full max-w-5xl items-center justify-between rounded-full px-6 py-4 transition-all duration-300",
            scrolled
              ? "border border-white/[0.12] bg-[#0e1117] shadow-[0_8px_40px_rgba(0,0,0,0.6)]"
              : "border border-white/[0.10] bg-[#0e1117] shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            className="inline-flex items-center text-white transition-opacity hover:opacity-80"
          >
            <span className="text-[16px] font-bold uppercase tracking-[0.28em] text-white">
              ArqFlo
            </span>
          </Link>

          {/* Nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-2 text-[14px] font-medium text-white/60 transition-colors hover:bg-white/[0.06] hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-2.5">
            <Link
              href={`${APP_URL}/signin`}
              className="rounded-full px-4 py-2 text-[14px] font-medium text-white/65 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              Sign in
            </Link>
            <button
              onClick={() => setPreviewOpen(true)}
              className="inline-flex items-center rounded-full border border-cyan-400/35 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 px-5 py-2 text-[14px] font-semibold text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.2)] transition-all hover:from-cyan-500/30 hover:to-teal-500/30 hover:shadow-[0_0_32px_rgba(34,211,238,0.3)]"
            >
              Request preview
            </button>
          </div>
        </div>
      </header>

      <RequestPreview open={previewOpen} onClose={() => setPreviewOpen(false)} />
    </>
  );
}
