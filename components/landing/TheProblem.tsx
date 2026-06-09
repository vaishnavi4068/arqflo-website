"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "30%", label: "of construction costs lost to rework from coordination failures" },
  { value: "80%", label: "of clashes between structural and MEP systems go undetected before site" },
  { value: "6–12 wks", label: "typical delay when structural and MEP scopes aren't aligned at design stage" },
];

export function TheProblem() {
  return (
    <section className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(50% 40% at 50% 0%, rgba(239,68,68,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-red-400/70">
            The problem
          </p>
          <h2 className="max-w-3xl text-balance text-[32px] font-semibold leading-[1.1] tracking-tight text-white sm:text-[42px]">
            Structural and MEP decisions are made in silos, and projects pay the price downstream.
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/55 sm:text-[16px]">
            Architects, structural engineers, and MEP consultants work from disconnected data sets. Load paths, system routes, and code constraints are never reconciled until construction — when changes cost ten times more to fix.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
            >
              <p className="text-[36px] font-semibold leading-none tracking-tight text-white">
                {stat.value}
              </p>
              <p className="mt-3 text-[13.5px] leading-snug text-white/50">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
