import ScrollReveal from "./ScrollReveal";

const LOGOS = ["NORTHBEAM", "VERTEX", "IONARA", "ORBITAL", "CLEARPATH", "MERIDIAN"];

export default function LogoBar() {
  return (
    <section className="border-y border-panel-border bg-black py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <p className="mb-8 text-center text-xs font-medium tracking-[0.2em] text-slate-500">
            TRUSTED BY ENGINEERING TEAMS AT
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70">
            {LOGOS.map((logo) => (
              <span
                key={logo}
                className="text-lg font-semibold tracking-wide text-slate-400 transition-colors hover:text-blue-light"
              >
                {logo}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
