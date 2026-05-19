"use client";

import { motion } from "framer-motion";
import { Database, Scale, Cpu, FileSearch } from "lucide-react";

const PILLARS = [
  {
    icon: Database,
    title: "Jurisdictional adapters",
    description:
      "Purpose-built connectors for municipal zoning databases, building codes, and permit systems across every supported jurisdiction.",
    color: "text-cyan-300/80",
    bg: "bg-cyan-300/10",
    border: "border-cyan-300/15",
  },
  {
    icon: Scale,
    title: "Compliance reasoning",
    description:
      "Agents that apply zoning envelopes, use tables, and setback rules, then flag conflicts before they reach design development.",
    color: "text-teal-300/80",
    bg: "bg-teal-300/10",
    border: "border-teal-300/15",
  },
  {
    icon: Cpu,
    title: "Scheme generation",
    description:
      "From validated parameters to buildable massing schemes, generated in minutes, with constraints baked in from the start.",
    color: "text-emerald-300/80",
    bg: "bg-emerald-300/10",
    border: "border-emerald-300/15",
  },
  {
    icon: FileSearch,
    title: "Citation-level provenance",
    description:
      "Every constraint, every recommendation traces back to a specific code section or data source. Full audit trail by design.",
    color: "text-violet-300/80",
    bg: "bg-violet-300/10",
    border: "border-violet-300/15",
  },
];

export function IntelligencePillars() {
  return (
    <section id="pillars" className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-violet-400/70">
            Intelligence pillars
          </p>
          <h2 className="max-w-3xl text-balance text-[32px] font-semibold leading-[1.1] tracking-tight text-white sm:text-[42px]">
            Four layers that make preconstruction defensible.
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/55 sm:text-[16px]">
            Each pillar is a distinct capability. Together they form a system
            that replaces guesswork with grounded intelligence.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.09 }}
              className={`rounded-2xl border ${pillar.border} bg-white/[0.02] p-6`}
            >
              <div
                className={`mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl ${pillar.bg} border ${pillar.border}`}
              >
                <pillar.icon className={`h-4 w-4 ${pillar.color}`} />
              </div>
              <h3 className="mb-2 text-[15px] font-semibold text-white">
                {pillar.title}
              </h3>
              <p className="text-[13.5px] leading-relaxed text-white/50">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
