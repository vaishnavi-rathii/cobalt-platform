"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Solutions", dropdown: ["Automotive", "Aerospace", "Robotics", "Energy"] },
  { label: "Platform", dropdown: null },
  { label: "Case studies", dropdown: null },
  { label: "Company", dropdown: ["About", "Careers", "Newsroom"] },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-panel-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <span className="text-white">Cobalt</span>
          <span className="inline-block h-2 w-2 rounded-full bg-blue-electric shadow-[0_0_12px_2px_rgba(47,107,255,0.8)]" />
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="group relative">
              <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm text-slate-300 transition-colors hover:text-white">
                {link.label}
                {link.dropdown && <ChevronDown className="h-3.5 w-3.5" />}
              </button>
              {link.dropdown && (
                <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="w-48 rounded-xl border border-panel-border bg-panel p-2 shadow-xl">
                    {link.dropdown.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block rounded-lg px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#" className="text-sm text-slate-300 transition-colors hover:text-white">
            Sign in
          </a>
          <a
            href="#cta"
            className="btn-gradient rounded-full px-5 py-2.5 text-sm font-medium text-black transition-transform hover:scale-[1.03]"
          >
            Request a demo
          </a>
        </div>

        <button
          className="text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-panel-border bg-black lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href="#"
                  className="rounded-lg px-3 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta"
                className="btn-gradient mt-2 rounded-full px-5 py-2.5 text-center text-sm font-medium text-black"
              >
                Request a demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
