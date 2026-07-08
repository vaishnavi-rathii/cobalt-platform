"use client";

import { motion } from "framer-motion";
import { Check, TrendingUp, Users, Layers } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const FEATURES = [
  {
    tag: "REAL-TIME SIMULATION",
    icon: TrendingUp,
    title: "Watch performance curves update as you tune parameters",
    body: "Adjust component specs and see system-level KPIs recalculate instantly — no waiting on batch jobs or a simulation queue.",
    points: ["Live parameter sweeps", "Sub-second recompute", "Exportable results"],
    visual: "chart",
  },
  {
    tag: "COMPONENT INTELLIGENCE",
    icon: Layers,
    title: "Break every system down to validated, reusable components",
    body: "A growing library of field-proven components lets your team stop rebuilding models from scratch for every new program.",
    points: ["10,000+ validated parts", "Cross-program reuse", "Version-controlled specs"],
    visual: "stats",
  },
  {
    tag: "TEAM COLLABORATION",
    icon: Users,
    title: "Keep engineering, product, and leadership in the same view",
    body: "Share decision-ready evidence with non-technical stakeholders without exporting a single spreadsheet.",
    points: ["Shared workspaces", "Comment threads on results", "One-click stakeholder reports"],
    visual: "chat",
  },
];

function ChartVisual() {
  return (
    <div className="relative h-72 w-full overflow-hidden rounded-2xl border border-panel-border bg-panel p-6">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-medium text-slate-400">SYSTEM EFFICIENCY</span>
        <span className="rounded-full bg-blue-electric/15 px-2.5 py-1 text-[11px] font-medium text-blue-light">
          +18.4%
        </span>
      </div>
      <svg viewBox="0 0 320 160" className="h-48 w-full">
        <defs>
          <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2f6bff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#2f6bff" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3].map((i) => (
          <line key={i} x1="0" x2="320" y1={20 + i * 35} y2={20 + i * 35} stroke="#1b2130" strokeWidth="1" />
        ))}
        <motion.path
          d="M0,130 C40,120 60,60 100,55 C140,50 160,90 200,70 C240,50 260,20 320,15"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="2.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
        <path
          d="M0,130 C40,120 60,60 100,55 C140,50 160,90 200,70 C240,50 260,20 320,15 L320,160 L0,160 Z"
          fill="url(#areaFill)"
        />
      </svg>
    </div>
  );
}

function StatsVisual() {
  const stats = [
    { label: "Validated with OEMs", value: "Tier-1" },
    { label: "Years in production", value: "10+" },
    { label: "Reliability proven", value: "99.9%" },
    { label: "Global standards met", value: "ISO" },
  ];
  return (
    <div className="grid h-72 grid-cols-2 gap-3">
      {stats.map((s) => (
        <div
          key={s.label}
          className="flex flex-col justify-center rounded-2xl border border-panel-border bg-panel p-5 transition-colors hover:border-blue-electric/50"
        >
          <span className="text-3xl font-semibold text-white">{s.value}</span>
          <span className="mt-1 text-xs text-slate-400">{s.label}</span>
        </div>
      ))}
    </div>
  );
}

function ChatVisual() {
  const messages = [
    { name: "Priya · Systems Lead", text: "Battery pack sizing looks good for the new platform.", time: "2m" },
    { name: "Marcus · Product", text: "Can we get this into the exec deck by Friday?", time: "1m" },
  ];
  return (
    <div className="flex h-72 flex-col justify-center gap-3 rounded-2xl border border-panel-border bg-panel p-6">
      {messages.map((m) => (
        <div key={m.name} className="flex items-start gap-3 rounded-xl bg-black/40 p-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-electric to-blue-cyan text-xs font-semibold text-black">
            {m.name[0]}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-white">{m.name}</span>
              <span className="text-xs text-slate-500">{m.time}</span>
            </div>
            <p className="mt-0.5 text-sm text-slate-400">{m.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const VISUALS = { chart: ChartVisual, stats: StatsVisual, chat: ChatVisual };

export default function Features() {
  return (
    <section id="features" className="bg-black py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-blue-light">PLATFORM</span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Everything your engineering team needs, in one place
          </h2>
        </ScrollReveal>

        <div className="mt-24 flex flex-col gap-28">
          {FEATURES.map((f, i) => {
            const Visual = VISUALS[f.visual as keyof typeof VISUALS];
            const reverse = i % 2 === 1;
            return (
              <div
                key={f.title}
                className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <ScrollReveal delay={0.05}>
                  <div className="mb-5 flex items-center gap-2">
                    <f.icon className="h-4 w-4 text-blue-light" />
                    <span className="text-xs font-semibold tracking-[0.18em] text-blue-light">{f.tag}</span>
                  </div>
                  <h3 className="text-3xl font-semibold leading-tight tracking-tight text-white">{f.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-text-muted">{f.body}</p>
                  <ul className="mt-6 flex flex-col gap-3">
                    {f.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-sm text-slate-300">
                        <Check className="h-4 w-4 shrink-0 text-blue-cyan" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
                <ScrollReveal delay={0.15}>
                  <Visual />
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
