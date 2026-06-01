"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export function PlatformVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  function togglePlay() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }

  function toggleMute() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }

  return (
    <section className="relative py-16 sm:py-20">
      {/* Glow behind video */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(55% 40% at 50% 60%, rgba(34,211,238,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-cyan-400/70">
            See it in action
          </p>
          <h2 className="text-balance text-[28px] font-semibold leading-[1.1] tracking-tight text-white sm:text-[36px]">
            From site intake to decision-ready report.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[14.5px] leading-relaxed text-white/50">
            Watch how ArqFlo resolves preconstruction in a single platform pass.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[hsl(220_15%_4%)] shadow-[0_0_80px_-20px_rgba(34,211,238,0.15)]"
        >
          {/* Top bar — fake chrome */}
          <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />
            <span className="mx-auto text-[11px] font-medium text-white/25">
              arqflo.ai — platform demo
            </span>
          </div>

          {/* Video */}
          <div className="relative aspect-video w-full bg-[hsl(220_15%_3%)]">
            <video
              ref={videoRef}
              src="/media/platform-demo.mp4"
              className="h-full w-full object-cover"
              autoPlay
              muted
              playsInline
              loop
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
            />

            {/* Controls bar */}
            <div className="absolute bottom-0 inset-x-0 flex items-center justify-between px-4 py-3 opacity-0 transition-opacity group-hover:opacity-100 bg-gradient-to-t from-black/60 to-transparent">
              <button
                onClick={togglePlay}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[12px] font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                {playing ? (
                  <Pause className="h-3.5 w-3.5" />
                ) : (
                  <Play className="h-3.5 w-3.5" />
                )}
                {playing ? "Pause" : "Play"}
              </button>

              <button
                onClick={toggleMute}
                className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[12px] font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                {muted ? (
                  <VolumeX className="h-3.5 w-3.5" />
                ) : (
                  <Volume2 className="h-3.5 w-3.5" />
                )}
                {muted ? "Unmute" : "Mute"}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Caption row */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] text-white/35">
          {["Site intake", "Zoning envelope", "Code compliance", "Scheme generation"].map((step) => (
            <span key={step} className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-cyan-400/50" />
              {step}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
