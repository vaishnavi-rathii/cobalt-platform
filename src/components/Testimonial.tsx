import { Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Testimonial() {
  return (
    <section className="bg-black py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <ScrollReveal className="relative rounded-3xl border border-panel-border bg-panel p-10 text-center sm:p-16">
          <Quote className="mx-auto h-10 w-10 text-blue-electric/50" />
          <p className="mt-8 text-2xl font-medium leading-relaxed tracking-tight text-white sm:text-3xl">
            Cobalt gave us the power of an entire simulation team overnight. What used to take
            our engineers three weeks of back-and-forth now takes an afternoon.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-electric to-blue-cyan text-sm font-semibold text-black">
              JR
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-white">Jordan Reyes</p>
              <p className="text-sm text-text-muted">VP of Engineering, NorthBeam</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
