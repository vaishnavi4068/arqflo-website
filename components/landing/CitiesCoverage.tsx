"use client";

import { motion } from "framer-motion";
import { MapPin, Check } from "lucide-react";

const CITIES = [
  {
    name: "Miami",
    region: "Florida",
    code: "Miami 21",
    notes: [
      "T3 – T6 transect zones",
      "Historic & special districts",
      "Miami-Dade parcel adapter",
    ],
    accent: "from-cyan-400/20 to-teal-400/10",
  },
  {
    name: "Miami Beach",
    region: "Florida",
    code: "Miami Beach LDR",
    notes: [
      "RM-1/RM-2/RM-3 residential",
      "CD/MXE commercial",
      "Historic overlay handling",
    ],
    accent: "from-teal-400/20 to-emerald-400/10",
  },
  {
    name: "New York",
    region: "New York",
    code: "NYC Zoning Resolution",
    notes: [
      "R1 – R10 residence districts",
      "C & M mixed districts",
      "Inclusionary housing awareness",
    ],
    accent: "from-emerald-400/20 to-cyan-400/10",
  },
];

export function CitiesCoverage() {
  return (
    <section id="coverage" className="relative border-t border-white/[0.05] bg-[hsl(220_15%_4%)] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-2 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-300/80">
              <MapPin className="h-3 w-3" />
              Jurisdictional coverage
            </div>
            <h2 className="text-balance text-[32px] font-semibold leading-tight tracking-tight text-white sm:text-[42px]">
              Adapters built for real codes.
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-white/55">
              Each city ships with a curated zoning knowledge base, parcel
              adapter, and GIS integration. Everything cites back to the
              governing document.
            </p>
          </div>
          <div className="rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-1.5 text-[11.5px] font-medium text-white/65">
            <span className="tabular-nums text-white/90">3</span> cities live ·{" "}
            <span className="tabular-nums text-white/90">4</span> in evaluation
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {CITIES.map((city, idx) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.35,
                delay: idx * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6"
            >
              <div
                aria-hidden
                className={`pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gradient-to-br opacity-50 blur-3xl transition-opacity group-hover:opacity-80 ${city.accent}`}
              />
              <div className="relative">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-[20px] font-semibold tracking-tight text-white">
                    {city.name}
                  </h3>
                  <span className="text-[11px] font-medium uppercase tracking-wider text-white/40">
                    {city.region}
                  </span>
                </div>
                <div className="mt-1 text-[12px] text-cyan-200/80">
                  {city.code}
                </div>
                <ul className="mt-5 space-y-1.5">
                  {city.notes.map((n) => (
                    <li
                      key={n}
                      className="flex items-start gap-2 text-[12.5px] leading-relaxed text-white/70"
                    >
                      <Check className="mt-0.5 h-3 w-3 shrink-0 text-emerald-300/80" />
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
