"use client";

import { motion } from "framer-motion";

const CAUSES = [
  {
    number: "01",
    title: "Data is siloed",
    description:
      "Zoning records, permit history, and code documents live in separate municipal systems with no shared format or API.",
  },
  {
    number: "02",
    title: "Expertise is scarce",
    description:
      "Experienced preconstruction analysts are expensive and hard to retain. Knowledge walks out the door with every departure.",
  },
  {
    number: "03",
    title: "Iteration is manual",
    description:
      "Each design change triggers a new compliance review cycle, done by hand, prone to error, with no audit trail.",
  },
  {
    number: "04",
    title: "Decisions lack provenance",
    description:
      "Teams can't trace why a design constraint was applied. Disputes in construction often originate here.",
  },
];

export function RootCause() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-amber-400/70">
            Root cause
          </p>
          <h2 className="max-w-3xl text-balance text-[32px] font-semibold leading-[1.1] tracking-tight text-white sm:text-[42px]">
            It's not a people problem. It's an information architecture problem.
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/55 sm:text-[16px]">
            The construction industry runs on institutional knowledge passed
            person-to-person. There is no intelligence layer that aggregates,
            reasons, and applies that knowledge at scale.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {CAUSES.map((cause, i) => (
            <motion.div
              key={cause.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
            >
              <span className="mb-4 block text-[11px] font-semibold tracking-[0.18em] text-white/25">
                {cause.number}
              </span>
              <h3 className="mb-2 text-[15px] font-semibold text-white">
                {cause.title}
              </h3>
              <p className="text-[13.5px] leading-relaxed text-white/50">
                {cause.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
