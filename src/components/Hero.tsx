"use client";

import { motion } from "framer-motion";
import { Car, Rocket, Bot, Zap, ShieldHalf, Factory, ArrowRight, PlayCircle } from "lucide-react";

const INDUSTRIES = [
  { label: "Automotive", icon: Car },
  { label: "Off-Highway", icon: Factory },
  { label: "Defense", icon: ShieldHalf },
  { label: "Energy", icon: Zap },
  { label: "Aerospace", icon: Rocket },
  { label: "Robotics", icon: Bot },
];

const STAGES = [
  { label: "Market study,\nBenchmarking", active: false },
  { label: "Concept\nexploration", active: true },
  { label: "System\nspecification", active: false },
  { label: "Component\nspecification", active: false },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-black pt-20 pb-28">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)]" />
      <div className="glow-blue absolute -top-32 left-1/2 h-[560px] w-[900px] -translate-x-1/2" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-panel-border bg-panel px-4 py-1.5 text-xs font-medium tracking-wide text-blue-light">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-cyan" />
              ENGINEERING SIMULATION PLATFORM
            </div>
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
              Model and simulate <span className="text-gradient">complex systems</span> fast
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-text-muted">
              Generate application-specific insights and validate performance with
              unprecedented speed and precision — before a single prototype gets built.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#cta"
                className="btn-gradient group flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.03]"
              >
                Contact us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#how"
                className="flex items-center gap-2 rounded-full border border-panel-border px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
              >
                <PlayCircle className="h-4 w-4" />
                View demo
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-panel-border bg-panel p-6 shadow-2xl shadow-black/60">
              <div className="mb-6 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                {STAGES.map((stage, i) => (
                  <div key={stage.label} className="flex flex-1 items-center gap-2">
                    <div
                      className={`w-full rounded-lg border px-3 py-3 text-center text-xs font-medium leading-snug whitespace-pre-line transition-colors ${
                        stage.active
                          ? "border-blue-electric bg-blue-electric/15 text-white shadow-[0_0_20px_rgba(47,107,255,0.35)]"
                          : "border-panel-border text-slate-400"
                      }`}
                    >
                      {stage.label}
                    </div>
                    {i < STAGES.length - 1 && (
                      <ArrowRight className="hidden h-3.5 w-3.5 shrink-0 text-slate-600 sm:block" />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-6">
                {INDUSTRIES.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-2 rounded-xl border border-panel-border bg-black/40 px-2 py-4 text-center transition-colors hover:border-blue-electric/60"
                  >
                    <Icon className="h-5 w-5 text-blue-light" />
                    <span className="text-[11px] text-slate-400">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
