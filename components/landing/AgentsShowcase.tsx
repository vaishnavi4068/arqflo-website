"use client";

import { motion } from "framer-motion";
import { MapPin, Box, ShieldCheck, LayoutGrid } from "lucide-react";

const AGENTS = [
  {
    icon: MapPin,
    name: "Site Intake Agent",
    tagline: "Parcel, jurisdiction, constraints.",
    bullets: [
      "Geometry extraction from GIS, DXF, LandXML, PDF",
      "Jurisdictional adapter registry (Miami-Dade, NYC, …)",
      "Provenanced field overrides with versioned history",
    ],
    tone: "from-cyan-400/20 to-sky-400/10",
    iconTone: "text-cyan-200",
  },
  {
    icon: Box,
    name: "Zoning Envelope Agent",
    tagline: "FAR, height, setbacks, uses.",
    bullets: [
      "Computes bulk under the adopted zoning code",
      "Live 3D mass with cite-back to the governing section",
      "Use-permission table by category with appeal notes",
    ],
    tone: "from-teal-400/20 to-emerald-400/10",
    iconTone: "text-teal-200",
  },
  {
    icon: ShieldCheck,
    name: "Code Compliance Agent",
    tagline: "IBC occupancy & feasibility.",
    bullets: [
      "Primary / secondary occupancy + special-use triggers",
      "Construction-type feasibility with cost sensitivity",
      "Height-area verdict with sprinkler & frontage bonuses",
    ],
    tone: "from-emerald-400/20 to-lime-400/10",
    iconTone: "text-emerald-200",
  },
  {
    icon: LayoutGrid,
    name: "Scheme Generation Agent",
    tagline: "Massing & residential yield.",
    bullets: [
      "Envelope-aware massing options with efficiency scoring",
      "Residential scheme generator with sanity filter",
      "Comparison grid against program targets",
    ],
    tone: "from-amber-300/20 to-orange-400/10",
    iconTone: "text-amber-200",
  },
];

export function AgentsShowcase() {
  return (
    <section className="relative border-t border-white/[0.05] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <div className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-emerald-300/80">
            Agents
          </div>
          <h2 className="text-balance text-[32px] font-semibold leading-tight tracking-tight text-white sm:text-[42px]">
            Specialists, not a generalist chatbot.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-white/55">
            Each agent owns a discipline, cites its sources, and hands off
            clean context. You stay in the loop at every review gate.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {AGENTS.map((agent, idx) => {
            const Icon = agent.icon;
            return (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6"
              >
                <div
                  aria-hidden
                  className={`pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-to-br opacity-60 blur-3xl transition-opacity group-hover:opacity-90 ${agent.tone}`}
                />
                <div className="relative flex items-start gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
                    <Icon className={`h-4 w-4 ${agent.iconTone}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-[15px] font-semibold tracking-tight text-white">
                        {agent.name}
                      </h3>
                    </div>
                    <div className="mt-0.5 text-[12px] text-white/50">
                      {agent.tagline}
                    </div>
                    <ul className="mt-4 space-y-1.5">
                      {agent.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-[12.5px] leading-relaxed text-white/70"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/30" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
