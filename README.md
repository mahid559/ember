# EMBER — Contemporary Fine Dining

A premium, custom-built luxury restaurant website for **EMBER** — a seasonal, fire-led fine
dining room. Designed and built to a $500-class standard: strong art direction, real
functionality, and responsive behavior.

## Stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion · GSAP (ScrollTrigger) · Lucide

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
```

## Scripts

| Command           | Purpose                     |
| ----------------- | --------------------------- |
| `npm run dev`     | Local development server    |
| `npm run build`   | Production build            |
| `npm run start`   | Serve the production build  |
| `npm run lint`    | ESLint (next/core-web-vitals) |
| `npm run typecheck` | `tsc --noEmit`            |

## Features

- Immersive cinematic hero with staggered entrance and GSAP-scrubbed parallax
- Editorial story, chef & philosophy (cream band), interaction-free experience section
- **Signature Dishes** editorial grid with hover treatments
- **Interactive menu** with working category filters on the home page **and** a dedicated
  `/menu` page (shared, data-driven `MenuExplorer`)
- Accessible **gallery** with category filters and a keyboard-navigable lightbox
- **Reservation form** with full validation, honest "demonstration — not connected to a
  booking system" feedback, and a clearly marked backend integration point
- Centralized, easy-to-replace content (`lib/data/`) and a pre-validated image catalog
  (`lib/images.ts`)
- Reduced-motion support, semantic HTML, visible focus states, and responsive layouts
  from mobile to wide desktop

## Content notes

The address, phone number, email, social links, hours and testimonials are **demonstration
values** for the fictional venue — nothing is presented as a verified real review or a real
business. See `skill.md` for exactly what to replace at launch.

## Docs

- `design.md` — design system, tokens and patterns
- `skill.md` — build & code guide, conventions, reservation integration point