# EMBER — Design System

> A contemporary luxury restaurant. Deep black, warm cream, muted gold — fire-led, unhurried, precise.
> This document is the single source of truth for EMBER's visual language, tokens, and patterns.

---

## 1. Brand direction

**Positioning:** An exclusive, contemporary fine-dining room built around an open hearth.
**Personality:** Refined, deliberate, warm, quietly confident — never flashy.
**Promise:** _"Cooked over fire, served with intent."_

The site should feel like a $500 custom build: cinematic photography, generous negative space,
confident serif typography, restrained motion, and a tight, consistent design system.

## 2. Color

A warm near-black base with a single muted gold accent. Restraint keeps it premium.

| Token | Hex | Use |
| --- | --- | --- |
| `ink-950` | `#0B0A08` | Page background |
| `ink-850` | `#16130F` | Cards, elevated surfaces |
| `cream-100` | `#F5EFE3` | Readable content areas (text + the chef/reservation bands) |
| `gold-500` | `#BC9848` | Primary accent — buttons, active states |
| `gold-600` | `#9A7A36` | Accent on light/cream backgrounds |
| `ash-200` | `#CCC5B8` | Secondary text on dark |
| `ash-400` | `#827A6A` | Muted meta text, hints |

**Gradients**
- Gold gradient: `linear-gradient(100deg,#9A7A36,#CEAF66 45%,#E1C989)` — buttons, text highlights.
- Ink gradient: `linear-gradient(180deg,#16130F,#0B0A08)` — section bands.
- Hairline: 1px gold at 55% opacity fading to transparent — dividers.
- Warm scrims over photography guarantee text contrast (`.scrim`, `.scrim-side`).

**Rules**
- One accent (gold) only. No second hue.
- Text on imagery always sits on a scrim, never raw.
- Cards use `rounded-sm` (refined), never oversized rounded panels.
- Gold is used ~10–15% of the surface; the rest is ink, cream, and ash.

## 3. Typography

- **Display:** `Cormorant Garamond` (400–700, normal + italic). Headlines, dish names, big quotes.
- **Body / UI:** `Inter` (400–700). Paragraphs, labels, inputs, buttons.
- Loaded via `next/font/google` with `display: swap`; no layout shift.

| Style | Class | Notes |
| --- | --- | --- |
| Display XL | `display-xl` | Hero H1; italic gold accent on a key word |
| Display L | `display-lg` | Section H2 |
| Eyebrow | `.eyebrow` | 0.7rem, gold, tracking 0.4em, hairline rule |
| Dish title | `font-display text-xl` | Card H3 |
| Menu price | `font-display text-lg text-gold-400` | Right-aligned with a dotted rule |
| Body | `text-[0.95rem] text-ash-200` | Copy on dark |
| Label | `.label` | 0.68rem caps for inputs & meta |

Line length capped at ~65ch for paragraphs (`text-pretty`); headings are balanced (`text-balance`).

## 4. Spacing & layout

- Section rhythm: `py-20 sm:py-24 lg:py-32`.
- Container: centered, max `1360px`, responsive gutters (1.25rem → 3.5rem).
- Grid gaps: `gap-6/8` cards, `gap-16/20` columns.
- Radii: `rounded-sm` cards/images (2px), `rounded-full` pills/buttons.
- Borders: 1px `ash-700`; hover turns gold on interactive surfaces.
- Section identity bands: Signature + Gallery use `bg-ink-gradient`; Chef + form panel use `bg-cream-100`.

## 5. Components

- **Button** — variants `primary` (gold gradient), `outline`, `ghost`, `light`. Sizes `sm|md|lg`. Sheen sweep + lift on hover, scale-down on press, disabled state.
- **SectionHeading** — eyebrow + H2 + optional description, left or centered, light/dark tone.
- **Reveal** — Framer Motion scroll reveal (fade/up) with optional stagger; respects reduced motion; `as` prop for semantic `<li>`.
- **SmartImage** — `next/image` wrapper with blur placeholder, shimmer skeleton, and a branded EMBER fallback on error. Never a broken image.
- **DishCard** — image (configurable aspect), dotted price rule, dietary badges, signature badge, hover zoom.
- **MenuExplorer** — client-side category filtering with animated grid transitions and an empty state.
- **GalleryLightbox** — category filters, masonry columns, keyboard-navigable dialog lightbox.
- **Parallax** — GSAP ScrollTrigger drift (≤6%), dynamic-imported, disabled for reduced motion.
- **ReservationForm** — validated fields, honest "not connected to a booking system" feedback, mailto hand-off.

## 6. Motion

Purposeful, subtle, GPU-only (transform/opacity).

- **Entrance:** hero uses a Framer Motion stagger (eyebrow → headline → copy → CTAs → meta), 0.8s, `cubic-bezier(0.16,1,0.3,1)`.
- **Scroll reveal:** `Reveal` `whileInView`, `y: 28`, 0.7s, stagger 0.06–0.09s.
- **Hover:** image zoom 1.05–1.06 over 700–1100ms `ease-out-expo`; card lift otherwise minimal.
- **Filters/lightbox:** Framer `AnimatePresence` fades; grid remounts per filter (300–500ms).
- **Parallax:** GSAP `yPercent ±6`, scrubbed, on hero + experience media only.
- Durations never exceed 1.1s outside hero. Reduced motion disables transforms everywhere.

## 7. Imagery

- Source: Unsplash CDN; every URL pre-validated (HTTP 200) in `lib/images.ts`.
- Always cropped via `?fit=crop` with explicit dimensions; served through `next/image` (AVIF/WebP).
- Warm scrims + a subtle gold bloom unify mixed photography into one palette.
- Categories: Interiors, Cuisine, Kitchen, Cellar.

## 8. Accessibility & performance

- Semantic landmarks, skip-to-content link, `aria-label` on icon buttons, focus rings in gold, keyboard-operable menu/lightbox/filters.
- Contrast: body text ≥ 4.5:1 on dark (cream/ash on ink); light sections keep ink-on-cream.
- `next/image` lazy-loads below the fold; hero is the only `priority` image; explicit aspect ratios prevent CLS.
- Fonts via `next/font` (no layout-blocking); GSAP dynamically imported; animations GPU-only.
- `prefers-reduced-motion` disables scroll reveals, parallax and marquees.

## 9. Site map

Nav → Hero → Story → Signature Dishes → Menu (interactive) → Chef & Philosophy → Experience →
Gallery → Testimonials → Reservation → Contact → Footer (+ dedicated `/menu` page).