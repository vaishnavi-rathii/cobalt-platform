import { FileInput, Cpu, LineChart, Rocket } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const STEPS = [
  {
    icon: FileInput,
    title: "Define parameters",
    body: "Input application requirements, constraints, and target KPIs — or import an existing system spec.",
  },
  {
    icon: Cpu,
    title: "Run simulation",
    body: "Cobalt's solver models component and system-level behavior across thousands of configurations.",
  },
  {
    icon: LineChart,
    title: "Analyze results",
    body: "Compare tradeoffs across efficiency, cost, and packaging with decision-ready visualizations.",
  },
  {
    icon: Rocket,
    title: "Deploy with confidence",
    body: "Hand off validated specs to your team, or iterate again before a single prototype is built.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative overflow-hidden bg-black py-28">
      <div className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black_30%,transparent_100%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-blue-light">HOW IT WORKS</span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            From spec to validated system in four steps
          </h2>
        </ScrollReveal>

        <div className="relative mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute top-8 left-0 right-0 hidden h-px bg-gradient-to-r from-transparent via-panel-border to-transparent lg:block" />
          {STEPS.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.1}>
              <div className="relative flex flex-col items-start">
                <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-panel-border bg-panel">
                  <step.icon className="h-6 w-6 text-blue-light" />
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-blue-electric to-blue-cyan text-[11px] font-semibold text-black">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{step.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
