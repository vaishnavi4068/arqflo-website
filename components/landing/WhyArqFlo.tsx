"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const COMPARISONS = [
  {
    dimension: "Data freshness",
    others: "Manual research, often outdated",
    arqflo: "Live municipal feeds + structured ingestion",
  },
  {
    dimension: "Compliance checking",
    others: "Senior analyst review, 1–3 weeks",
    arqflo: "Automated agents, hours",
  },
  {
    dimension: "Scheme iteration",
    others: "Architect redlines each version",
    arqflo: "Constraint-aware generation on demand",
  },
  {
    dimension: "Audit trail",
    others: "Email threads and meeting notes",
    arqflo: "Citation-level provenance, every decision",
  },
  {
    dimension: "Knowledge retention",
    others: "Leaves with the analyst",
    arqflo: "Encoded in adapters and agent memory",
  },
];

export function WhyArqFlo() {
  return (
    <section className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(45% 35% at 80% 50%, rgba(34,211,238,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-cyan-400/70">
            Why ArqFlo
          </p>
          <h2 className="max-w-3xl text-balance text-[32px] font-semibold leading-[1.1] tracking-tight text-white sm:text-[42px]">
            Built for the complexity of real projects, not demos.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 overflow-hidden rounded-2xl border border-white/[0.07]"
        >
          {/* Header row */}
          <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-white/[0.07] bg-white/[0.02] px-5 py-3 text-[11.5px] font-semibold uppercase tracking-[0.15em] text-white/35">
            <span>Dimension</span>
            <span>Others</span>
            <span className="text-cyan-300/70">ArqFlo</span>
          </div>

          {COMPARISONS.map((row, i) => (
            <div
              key={row.dimension}
              className={`grid grid-cols-[1fr_1fr_1fr] px-5 py-4 text-[13.5px] ${
                i % 2 === 0 ? "bg-white/[0.01]" : "bg-transparent"
              } border-b border-white/[0.04] last:border-0`}
            >
              <span className="font-medium text-white/80">{row.dimension}</span>
              <span className="flex items-start gap-2 text-white/40">
                <XCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-400/50" />
                {row.others}
              </span>
              <span className="flex items-start gap-2 text-white/70">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400/80" />
                {row.arqflo}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
