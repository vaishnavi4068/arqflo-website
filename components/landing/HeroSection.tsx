"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Sparkles,
  MapPin,
} from "lucide-react";

const CITIES = ["Miami", "Miami Beach", "New York"];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 sm:pt-36 sm:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 motion-reduce:hidden"
        style={{
          backgroundImage: `
            radial-gradient(60% 55% at 20% 18%, rgba(34,211,238,0.12) 0%, transparent 65%),
            radial-gradient(45% 45% at 80% 72%, rgba(45,212,191,0.10) 0%, transparent 70%),
            radial-gradient(40% 40% at 50% 110%, rgba(16,185,129,0.08) 0%, transparent 70%)
          `,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1 text-[11.5px] font-medium text-white/70 backdrop-blur-sm">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
            Agentic preconstruction
            <span className="text-white/25">·</span>
            <span className="text-cyan-200/90">Now in public preview</span>
          </div>

          <div className="mb-5 inline-flex items-center gap-2.5 text-white/90">
            <Building2 className="h-5 w-5 text-cyan-300/80" />
            <span className="text-[13px] font-semibold uppercase tracking-[0.28em]">
              ArqFlo
            </span>
          </div>

          <h1 className="max-w-4xl text-balance text-[40px] font-semibold leading-[1.05] tracking-tight text-white sm:text-[56px] md:text-[64px]">
            Preconstruction, resolved by{" "}
            <span className="bg-gradient-to-br from-cyan-200 via-teal-200 to-emerald-300 bg-clip-text text-transparent">
              a team of agents
            </span>
            .
          </h1>

          <p className="mt-6 max-w-2xl text-balance text-[15px] leading-relaxed text-white/60 sm:text-[17px]">
            Site intake, zoning envelope, code compliance, and scheme generation —
            orchestrated by specialist AI, grounded in jurisdictional adapters and
            citation-level provenance.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="/signup"
              className="group inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/15 px-5 py-2.5 text-[13.5px] font-medium text-cyan-50 shadow-[0_10px_40px_-10px_rgba(34,211,238,0.4)] transition-all hover:bg-cyan-300/20 hover:shadow-[0_15px_50px_-10px_rgba(34,211,238,0.55)]"
            >
              Start your first project
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/signin"
              className="group inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-2.5 text-[13.5px] font-medium text-white/75 transition-colors hover:bg-white/[0.05] hover:text-white"
            >
              <Sparkles className="h-3.5 w-3.5 text-emerald-300/80" />
              Live demo — Site Intake
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-2">
            <span className="mr-1 inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-white/40">
              <MapPin className="h-3 w-3" />
              Jurisdictions live
            </span>
            {CITIES.map((city) => (
              <span
                key={city}
                className="inline-flex items-center rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 text-[11.5px] font-medium text-white/75"
              >
                {city}
              </span>
            ))}
            <span className="inline-flex items-center rounded-full border border-white/[0.04] px-3 py-1 text-[11.5px] font-medium text-white/40">
              + more every month
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
