"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Box,
  ShieldCheck,
  LayoutGrid,
  FileCheck2,
} from "lucide-react";

const PHASES = [
  {
    step: "01",
    icon: MapPin,
    title: "Site Intake",
    body: "Parcel geometry, jurisdiction, zoning district, and constraints resolved from public GIS, uploads, and jurisdictional adapters.",
  },
  {
    step: "02",
    icon: Box,
    title: "Zoning Envelope",
    body: "FAR, height, setbacks, parking minimums, and use permissions computed against the adopted zoning code with full citations.",
  },
  {
    step: "03",
    icon: ShieldCheck,
    title: "Code Compliance",
    body: "IBC occupancy, construction type feasibility, height-area allowances, and special-use triggers — with rule-card-level reasoning.",
  },
  {
    step: "04",
    icon: LayoutGrid,
    title: "Scheme Generation",
    body: "Massing options and residential unit schemes generated against the envelope, with sanity-filtered efficiency and yield metrics.",
  },
  {
    step: "05",
    icon: FileCheck2,
    title: "Decision-Ready Report",
    body: "Export a reviewer-ready dossier: provenance chips, citations, disciplinary impacts, and a reversible revision history.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative border-t border-white/[0.05] bg-[hsl(220_15%_4%)] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <div className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-300/75">
            How it works
          </div>
          <h2 className="text-balance text-[32px] font-semibold leading-tight tracking-tight text-white sm:text-[42px]">
            Five phases, one continuous context.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-white/55">
            Every agent shares provenance and writes back to a single project
            graph. No re-entering data. No lost context between disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-5">
          {PHASES.map((phase, idx) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.35,
                  delay: idx * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative flex flex-col rounded-2xl border border-white/[0.05] bg-white/[0.015] p-5 transition-colors hover:border-white/[0.1] hover:bg-white/[0.03]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/[0.06] bg-white/[0.03] text-cyan-200/90">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-[11px] font-medium tabular-nums text-white/25">
                    {phase.step}
                  </span>
                </div>
                <h3 className="text-[14.5px] font-semibold tracking-tight text-white">
                  {phase.title}
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-white/55">
                  {phase.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
