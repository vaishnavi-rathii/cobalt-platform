"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Car, Rocket, Bot, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const CASES = [
  {
    company: "NorthBeam",
    tag: "AUTOMOTIVE",
    icon: Car,
    title: "Fleet electrification for heavy-duty vehicles",
    body: "NorthBeam used Cobalt to accelerate electric powertrain design — balancing performance, weight, and sustainability before prototyping.",
  },
  {
    company: "Vertex Motors",
    tag: "AUTOMOTIVE",
    icon: Car,
    title: "Driveline collaboration at scale",
    body: "Vertex and Cobalt collaborated to accelerate electrified driveline development through rapid iteration between component and system level.",
  },
  {
    company: "Ionara Aerospace",
    tag: "AEROSPACE",
    icon: Rocket,
    title: "Validating propulsion systems in days, not months",
    body: "A full aerospace component library is now available in a dynamic simulation environment, enabling teams to validate efficiency in days instead of a year-long test process.",
  },
  {
    company: "Orbital Robotics",
    tag: "ROBOTICS",
    icon: Bot,
    title: "Faster actuator sizing for field robots",
    body: "Orbital's engineers cut actuator sizing time by more than half, letting them ship three new robot platforms in a single year.",
  },
  {
    company: "ClearPath Energy",
    tag: "ENERGY",
    icon: Zap,
    title: "Grid-scale storage, modeled end to end",
    body: "ClearPath used Cobalt to model battery storage systems across dozens of site configurations before committing to hardware.",
  },
];

const METRICS = [
  { value: "40%", label: "Faster time-to-prototype" },
  { value: "3.2x", label: "More design iterations explored" },
  { value: "$2.4M", label: "Average program cost savings" },
];

export default function CaseStudies() {
  const [active, setActive] = useState(0);
  const current = CASES[active];

  return (
    <section id="case-studies" className="bg-black py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-blue-light">CASE STUDIES</span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Our customer stories
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-14">
          <div className="flex flex-wrap justify-center gap-2 border-b border-panel-border pb-2 sm:justify-start">
            {CASES.map((c, i) => (
              <button
                key={c.company}
                onClick={() => setActive(i)}
                className={`rounded-t-lg px-4 py-3 text-sm font-medium transition-colors ${
                  active === i
                    ? "bg-panel text-white"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                {c.company}
              </button>
            ))}
          </div>

          <div className="overflow-hidden rounded-b-2xl rounded-tr-2xl border border-panel-border bg-blue-mist">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-2"
              >
                <div className="flex flex-col justify-center p-10 lg:p-14">
                  <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-blue-electric/10 px-3 py-1 text-xs font-semibold text-blue-cobalt">
                    <current.icon className="h-3.5 w-3.5" />
                    {current.tag}
                  </span>
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-900">{current.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-slate-600">{current.body}</p>
                  <a
                    href="#"
                    className="mt-8 flex w-fit items-center gap-2 text-sm font-medium text-blue-cobalt hover:underline"
                  >
                    Download case study
                    <Download className="h-4 w-4" />
                  </a>
                </div>
                <div className="flex min-h-[280px] items-center justify-center bg-gradient-to-br from-blue-electric/10 to-blue-cyan/10 p-10">
                  <current.icon className="h-28 w-28 text-blue-cobalt/40" strokeWidth={1} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {METRICS.map((m, i) => (
            <ScrollReveal key={m.label} delay={i * 0.1}>
              <div className="rounded-2xl border border-panel-border bg-panel p-8 text-center">
                <span className="text-gradient text-5xl font-semibold tracking-tight">{m.value}</span>
                <p className="mt-3 text-sm text-text-muted">{m.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
