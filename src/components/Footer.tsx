const SOCIALS = [
  {
    name: "X",
    path: "M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-6.6L4.8 22H1.7l8.1-9.3L1 2h7.1l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 4H5.4l12.3 16Z",
  },
  {
    name: "LinkedIn",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.94-1.8-2.94-1.8 0-2.08 1.4-2.08 2.85V21h-4V9Z",
  },
  {
    name: "YouTube",
    path: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z",
  },
];

const COLUMNS = [
  {
    title: "Product",
    links: ["Platform", "Solutions", "Integrations", "Pricing", "Changelog"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Newsroom", "Contact"],
  },
  {
    title: "Resources",
    links: ["Case studies", "Documentation", "Blog", "Support"],
  },
  {
    title: "Legal",
    links: ["Privacy policy", "Terms of service", "Security"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-panel-border bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <a href="#top" className="flex items-center gap-2 text-lg font-semibold text-white">
              Cobalt
              <span className="inline-block h-2 w-2 rounded-full bg-blue-electric shadow-[0_0_12px_2px_rgba(47,107,255,0.8)]" />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-muted">
              The engineering simulation platform for teams building the next generation of
              electrified, autonomous, and connected systems.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-panel-border text-slate-400 transition-colors hover:border-blue-electric hover:text-blue-light"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white">{col.title}</h4>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-text-muted transition-colors hover:text-blue-light"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-panel-border pt-8 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Cobalt Engineering, Inc. All rights reserved.</p>
          <p>Built for engineering teams who move fast.</p>
        </div>
      </div>
    </footer>
  );
}
