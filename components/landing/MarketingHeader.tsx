"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

// Set NEXT_PUBLIC_APP_URL in .env.local to point sign-in/up links at the
// platform app (e.g. https://app.arqflo.ai). Defaults to same origin
// so local dev works without config.
const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "";

export function MarketingHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-200",
        scrolled
          ? "border-b border-white/[0.06] bg-[hsl(220_15%_5%)]/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/90 transition-opacity hover:opacity-85"
        >
          <Building2 className="h-4 w-4 text-cyan-300/80" />
          <span className="text-[12.5px] font-semibold uppercase tracking-[0.22em]">
            ArqFlo
          </span>
        </Link>

        <div className="flex items-center gap-1.5">
          <Link
            href={`${APP_URL}/signin`}
            className="rounded-full px-3.5 py-1.5 text-[12.5px] font-medium text-white/70 transition-colors hover:bg-white/[0.04] hover:text-white"
          >
            Sign in
          </Link>
          <Link
            href={`${APP_URL}/signup`}
            className="inline-flex items-center rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3.5 py-1.5 text-[12.5px] font-medium text-cyan-100 transition-colors hover:bg-cyan-300/15"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
