"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Building2 } from "lucide-react";
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
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-200",
          scrolled
            ? "border-b border-white/[0.06] bg-[hsl(220_15%_5%)]/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-8" style={{ height: "72px" }}>
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 text-white/90 transition-opacity hover:opacity-85"
          >
            <Building2 className="h-5 w-5 text-cyan-300/80" />
            <span className="text-[15px] font-semibold uppercase tracking-[0.22em]">
              ArqFlo
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-2 text-[13.5px] font-medium text-white/60 transition-colors hover:bg-white/[0.04] hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={`${APP_URL}/signin`}
              className="rounded-full px-4 py-2 text-[13.5px] font-medium text-white/70 transition-colors hover:bg-white/[0.04] hover:text-white"
            >
              Sign in
            </Link>
            <button
              onClick={() => setPreviewOpen(true)}
              className="inline-flex items-center rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-[13.5px] font-medium text-cyan-100 transition-colors hover:bg-cyan-300/15"
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
