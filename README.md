# Cobalt — Engineering Simulation Platform

A modern, animated marketing landing page for **Cobalt**, a fictional engineering
simulation SaaS platform. Dark, blue-accented design with scroll-reveal
animations and hover microinteractions, fully responsive from mobile to
desktop.

Sections: sticky navbar, hero with animated product mockup, trusted-by logo
bar, alternating feature rows, a 4-step "how it works" flow, tabbed case
studies with metrics, a testimonial, a gradient call-to-action banner, and a
footer.

## Tech stack

- [Next.js 15](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for animations
- [lucide-react](https://lucide.dev) for icons

## Running locally

Requires Node.js 18.18+ (or any current LTS).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page
hot-reloads as you edit files under `src/`.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build locally
npm run lint     # run ESLint
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in values as needed:

```bash
cp .env.example .env.local
```

| Variable | Description | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public base URL used for absolute Open Graph/Twitter image URLs and canonical metadata. Set to your production domain once deployed. | `http://localhost:3000` |

`.env*` files are gitignored (except `.env.example`) — never commit real
secrets.

## Deploying to Vercel

This project builds with the standard Next.js build command and requires no
special configuration.

1. Push this repository to GitHub (see below).
2. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
3. Vercel auto-detects the Next.js framework preset:
   - **Build command:** `next build`
   - **Output:** managed automatically by the Next.js framework preset (no
     manual output directory needed)
   - **Install command:** `npm install`
4. Under **Environment Variables**, add `NEXT_PUBLIC_SITE_URL` set to your
   production URL (e.g. `https://your-project.vercel.app` or a custom
   domain). You can update this later once you know your final domain.
5. Click **Deploy**. Vercel will build and host the site, giving you a live
   URL.

For subsequent changes, just push to the connected GitHub branch — Vercel
redeploys automatically.
