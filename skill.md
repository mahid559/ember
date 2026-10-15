# EMBER — Build & Code Guide (`skill.md`)

How this project is structured and how to extend it safely. Read alongside `design.md`.

## Stack

- **Next.js 15** (App Router, RSC by default) + **TypeScript** (strict)
- **Tailwind CSS** with tokens in `tailwind.config.ts`
- **Framer Motion** for entrances, reveals, filters, lightbox
- **GSAP + ScrollTrigger** (dynamic import) for hero + experience parallax
- **Lucide React** for all icons

## Commands

```bash
npm run dev        # local dev server
npm run build      # production build
npm run start      # serve production build
npm run lint       # eslint (next/core-web-vitals)
npm run typecheck  # tsc --noEmit
```

## Directory map

```
app/
  layout.tsx          # fonts, metadata, global chrome (nav/footer, scroll progress)
  page.tsx            # composes all sections in order
  menu/page.tsx       # full menu page (reuses <MenuExplorer />)
  not-found.tsx       # branded 404
  globals.css         # tokens, base styles, utilities
components/
  layout/             # Navbar, MobileMenu, Footer, ScrollProgress, BackToTop
  sections/           # one file per page section
  ui/                 # Button, SectionHeading, Reveal, SmartImage, DishCard,
                      # MenuExplorer, GalleryLightbox, ReservationForm, Parallax, ...
lib/
  images.ts           # validated image catalog + helpers (photo(), BLUR)
  data/               # typed content: site, menu, testimonials, gallery, chef,
                      # experience
  utils.ts            # cn(), formatPrice()
  motion.ts           # shared Framer Motion variants
```

## Conventions

- **Components** are named exports; only pages default-export. Client components declare
  `'use client'` at the very top and stay leaf-ward so pages remain server-rendered.
- **Content is data-driven.** Never hardcode copy in components — add it to `lib/data/*` with a
  TypeScript type/interface.
- **Images** always go through `SmartImage` and `lib/images.ts`. Add new photos as IDs in the
  catalog so sizing, blur, and fallbacks stay centralized (and validate new URLs return 200).
- **Styling** uses Tailwind utilities plus a small set of semantic classes in `globals.css`
  (`.section`, `.eyebrow`, `.card`, `.scrim`, `.label`, `.text-gold-gradient`).
- **Classnames** are composed with `cn()` from `lib/utils.ts`.
- **Motion** variants live in `lib/motion.ts`; reuse `fadeUp`, `stagger`, `revealProps`.
  Guard heavy motion behind `useReducedMotion`.
- **Icons**: Lucide only, sized via `className`, always `aria-hidden` when decorative.

## Adding a section

1. Add types + data to `lib/data/`.
2. Create `components/sections/MySection.tsx` (server component by default).
3. Compose primitives (`SectionHeading`, `Reveal`, `Button`, `SmartImage`).
4. Import into `app/page.tsx` in order, with an `id` for anchor navigation.
5. Add the anchor to `lib/data/site.ts` (`navLinks`) if it belongs in the navbar.

## Reservation integration

`components/ui/ReservationForm.tsx` contains a clearly marked `submitReservation()` stub.
It currently resolves without sending anything and the UI **never claims a table has been
stored or confirmed**. To go live:
1. Replace `submitReservation` with a call to your booking provider (Resy, SevenRooms, OpenTable,
   or a custom endpoint).
2. Keep the same success/error states; optionally add a confirmation-email send on success.

## Content to replace at launch

Everything demo-specific lives in `lib/data/site.ts` (address, phone, email, social, hours) and
`lib/data/testimonials.ts` (fictional reviews), plus the Unsplash images in `lib/images.ts`.
Human-written testimonials should be replaced with genuine, attributable ones (with permission).

## Performance budget

- Hero image is the only `priority` image; everything else lazy-loads with explicit aspect ratios.
- Animations use transform/opacity only; no layout-property animation.
- GSAP is dynamically imported inside `Parallax`, keeping it out of the initial bundle.
- Respect `prefers-reduced-motion` everywhere.