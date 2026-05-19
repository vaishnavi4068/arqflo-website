"use client";

import { motion } from "framer-motion";

export function TheSolution() {
  return (
    <section className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(55% 45% at 50% 50%, rgba(34,211,238,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="mb-4 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-cyan-400/70">
            The solution
          </p>
          <h2 className="mx-auto max-w-3xl text-balance text-[32px] font-semibold leading-[1.1] tracking-tight text-white sm:text-[42px]">
            A decision-intelligence layer built for the built world.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-white/55 sm:text-[16px]">
            ArqFlo's AI agents ingest site data, parse jurisdictional codes,
            and generate compliance-aware schemes, with citation-level
            provenance at every step. Teams get answers in hours, not weeks,
            with a full audit trail they can stand behind.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-14 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02]"
        >
          <div className="grid divide-y divide-white/[0.05] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              {
                label: "Ingest",
                text: "Site data, zoning envelopes, and permit history are pulled and structured automatically.",
              },
              {
                label: "Reason",
                text: "Specialist agents apply jurisdictional rules, flag constraints, and surface precedent.",
              },
              {
                label: "Deliver",
                text: "Compliance-aware schemes with provenance links, ready for design development.",
              },
            ].map((item) => (
              <div key={item.label} className="p-7">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300/60">
                  {item.label}
                </p>
                <p className="text-[14px] leading-relaxed text-white/60">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
