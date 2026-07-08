import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function FinalCTA() {
  return (
    <section id="cta" className="bg-black px-6 py-20 lg:px-8">
      <ScrollReveal className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-blue-navy via-blue-cobalt to-blue-electric px-8 py-20 text-center sm:px-16">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" />
        <div className="glow-blue pointer-events-none absolute -bottom-24 left-1/2 h-[400px] w-[700px] -translate-x-1/2" />
        <div className="relative">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Ready to simulate what&apos;s next?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-blue-mist/90">
            See how Cobalt can compress your validation timeline from months to days. Talk to
            our engineering team today.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-blue-navy transition-transform hover:scale-[1.03]"
            >
              Request a quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Talk to sales
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
