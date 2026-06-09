"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { RequestPreview } from "@/components/landing/RequestPreview";

export function HeroSection() {
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-28 sm:pt-40 sm:pb-36">
        {/* Background glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 motion-reduce:hidden"
          style={{
            backgroundImage: `
              radial-gradient(60% 55% at 20% 18%, rgba(34,211,238,0.10) 0%, transparent 65%),
              radial-gradient(45% 45% at 80% 72%, rgba(45,212,191,0.08) 0%, transparent 70%),
              radial-gradient(40% 40% at 50% 110%, rgba(16,185,129,0.07) 0%, transparent 70%)
            `,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />

        <div className="relative mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center"
          >
            {/* Eyebrow badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1 text-[11.5px] font-medium text-white/70 backdrop-blur-sm">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
              Structural + MEP Intelligence for the Built World
            </div>

            {/* Headline */}
            <h1 className="max-w-4xl text-balance text-[40px] font-semibold leading-[1.06] tracking-tight text-white sm:text-[56px] md:text-[64px]">
              Where structural and MEP knowledge{" "}
              <span className="bg-gradient-to-br from-cyan-200 via-teal-200 to-emerald-300 bg-clip-text text-transparent">
                work as one.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-7 max-w-2xl text-balance text-[15px] leading-relaxed text-white/60 sm:text-[17px]">
              ArqFlo unifies structural and MEP intelligence into a single decision layer. AI agents that reason across disciplines — zoning, code compliance, structural feasibility, and MEP coordination — so your team moves from brief to buildable scheme without the gaps.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
              <button
                onClick={() => setPreviewOpen(true)}
                className="group inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/15 px-5 py-2.5 text-[13.5px] font-medium text-cyan-50 shadow-[0_10px_40px_-10px_rgba(34,211,238,0.4)] transition-all hover:bg-cyan-300/20 hover:shadow-[0_15px_50px_-10px_rgba(34,211,238,0.55)]"
              >
                Request Preview
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
              <a
                href="#how-it-works"
                className="group inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-2.5 text-[13.5px] font-medium text-white/75 transition-colors hover:bg-white/[0.05] hover:text-white"
              >
                See how it works
                <ChevronDown className="h-3.5 w-3.5 text-white/40 transition-transform group-hover:translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <RequestPreview open={previewOpen} onClose={() => setPreviewOpen(false)} />
    </>
  );
}
