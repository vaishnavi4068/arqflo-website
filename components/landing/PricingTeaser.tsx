"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const PERKS = [
  "Unlimited site intake runs during preview",
  "Full zoning + code agent access",
  "Provenance-tracked revision history",
  "Priority support from the ArqFlo team",
];

export function PricingTeaser() {
  return (
    <section className="relative border-t border-white/[0.05] py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(50% 60% at 50% 50%, rgba(34,211,238,0.08) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-xl sm:p-12"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-400/25 to-emerald-400/10 blur-3xl"
          />
          <div className="relative grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_1fr]">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/[0.06] px-2.5 py-1 text-[10.5px] font-medium uppercase tracking-wider text-emerald-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
                Public preview
              </div>
              <h2 className="text-balance text-[30px] font-semibold leading-tight tracking-tight text-white sm:text-[38px]">
                Free during preview.
                <br />
                Get ahead of your competitors.
              </h2>
              <p className="mt-3 text-[14.5px] leading-relaxed text-white/60">
                Teams onboarded during preview keep early pricing when we move
                to general availability. No credit card required.
              </p>
              <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
                <Link
                  href="/signup"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/15 px-5 py-2.5 text-[13.5px] font-medium text-cyan-50 transition-colors hover:bg-cyan-300/20"
                >
                  Create free account
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/signin"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-2.5 text-[13.5px] font-medium text-white/75 transition-colors hover:bg-white/[0.05] hover:text-white"
                >
                  I already have an account
                </Link>
              </div>
            </div>

            <ul className="grid content-center gap-2.5 rounded-2xl border border-white/[0.05] bg-white/[0.015] p-5">
              {PERKS.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-2.5 text-[13px] leading-relaxed text-white/80"
                >
                  <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-emerald-400/15 text-emerald-300">
                    <Check className="h-2.5 w-2.5" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
