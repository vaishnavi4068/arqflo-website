"use client";

import { motion } from "framer-motion";

const MILESTONES = [
  {
    period: "Now",
    status: "live",
    title: "Miami + Miami Beach + New York",
    description:
      "Full zoning envelope analysis, permit history, and compliance checking live for residential and commercial projects.",
  },
  {
    period: "Q3 2025",
    status: "soon",
    title: "Los Angeles + Chicago",
    description:
      "West Coast and Midwest expansion with updated jurisdictional adapters for complex mixed-use zoning.",
  },
  {
    period: "Q4 2025",
    status: "planned",
    title: "Houston + Austin + Denver",
    description:
      "Sun Belt coverage including Texas-specific municipal data feeds and Colorado building code integration.",
  },
  {
    period: "2026",
    status: "planned",
    title: "National coverage + API access",
    description:
      "Programmatic access to ArqFlo's intelligence layer for integration with your existing design and PM tools.",
  },
];

const STATUS_STYLES: Record<string, { dot: string; label: string; badge: string }> = {
  live: {
    dot: "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]",
    label: "Live",
    badge: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
  },
  soon: {
    dot: "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]",
    label: "Coming soon",
    badge: "border-amber-400/20 bg-amber-400/10 text-amber-300",
  },
  planned: {
    dot: "bg-white/20",
    label: "Planned",
    badge: "border-white/10 bg-white/5 text-white/40",
  },
};

export function Roadmap() {
  return (
    <section id="roadmap" className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-white/40">
            Roadmap
          </p>
          <h2 className="max-w-3xl text-balance text-[32px] font-semibold leading-[1.1] tracking-tight text-white sm:text-[42px]">
            Where we are and where we're going.
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/55 sm:text-[16px]">
            We expand jurisdiction by jurisdiction, deliberately, so the
            intelligence is right before we scale it.
          </p>
        </motion.div>

        <div className="relative mt-14">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 h-[calc(100%-16px)] w-px bg-white/[0.07] sm:left-[11px]" />

          <div className="space-y-8">
            {MILESTONES.map((milestone, i) => {
              const style = STATUS_STYLES[milestone.status];
              return (
                <motion.div
                  key={milestone.period}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="relative pl-8 sm:pl-10"
                >
                  {/* Dot */}
                  <span
                    className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border border-[hsl(220_15%_5%)] sm:h-[18px] sm:w-[18px] ${style.dot}`}
                  />

                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-[12px] font-semibold text-white/40">
                      {milestone.period}
                    </span>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${style.badge}`}
                    >
                      {style.label}
                    </span>
                  </div>
                  <h3 className="mt-1 text-[15px] font-semibold text-white">
                    {milestone.title}
                  </h3>
                  <p className="mt-1.5 max-w-xl text-[13.5px] leading-relaxed text-white/50">
                    {milestone.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
