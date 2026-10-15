'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, UtensilsCrossed } from 'lucide-react';
import { IMAGES } from '@/lib/images';
import { Button } from '@/components/ui/Button';
import { SmartImage } from '@/components/ui/SmartImage';
import { Parallax } from '@/components/ui/Parallax';

const EASE = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const meta = ['Banani, Dhaka', 'Modern Bangladeshi Cuisine', 'Family & Corporate Dining'];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      aria-label="Welcome to EMBER"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Cinematic backdrop */}
      <Parallax className="absolute inset-[-8%]" yPercent={6}>
        <SmartImage
          src={IMAGES.hero.primary}
          alt="The EMBER dining room at dusk, lit by low amber light"
          aspect="h-full w-full"
          priority
          quality={82}
          sizes="100vw"
          className="absolute inset-0 h-full w-full"
          objectPosition="center 55%"
        />
      </Parallax>

      <div aria-hidden className="absolute inset-0 scrim-side" />
      <div aria-hidden className="absolute inset-0 bloom" />
      <div className="lattice-overlay" aria-hidden />

      <div className="container relative z-10 pt-32 pb-28 sm:pt-36 lg:pt-40 lg:pb-32">
        <motion.div
          variants={container}
          initial={reduce ? false : 'hidden'}
          animate={reduce ? undefined : 'visible'}
          className="max-w-3xl"
        >
          <motion.p variants={item} className="eyebrow">
            <span aria-hidden className="h-px w-10 bg-current opacity-70" />
            Banani, Dhaka &middot; Modern Bangladeshi Dining
          </motion.p>

          <motion.h1
            variants={item}
            className="display-xl mt-6 text-cream-50"
          >
            Cooked over fire,
            <br />
            served with <span className="italic text-gold-gradient">intent</span>.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-base leading-relaxed text-cream-100/75 sm:text-lg"
          >
            EMBER is Dhaka’s premium contemporary Bangladeshi restaurant. We celebrate time-honoured recipes with refined presentation, elegant ambience, and warm hospitality.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/#reserve" size="lg" icon={<ArrowRight className="h-4 w-4" aria-hidden />}>
              Reserve a Table
            </Button>
            <Button href="/menu" size="lg" variant="outline" iconLeft={<UtensilsCrossed className="h-4 w-4" aria-hidden />}>
              Explore Our Menu
            </Button>
          </motion.div>

          <motion.ul variants={item} className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4">
            {meta.map((entry) => (
              <li key={entry} className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-cream-100/60">
                <span aria-hidden className="h-1 w-1 rotate-45 bg-gold-gradient" />
                {entry}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      {/* Art-directed signature plate card */}
      <motion.div
        initial={reduce ? false : { opacity: 0, x: 30 }}
        animate={reduce ? undefined : { opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.9, ease: EASE }}
        className="pointer-events-none absolute bottom-24 right-8 hidden w-56 xl:block 2xl:right-16"
      >
        <div className="border border-cream-100/15 bg-ink-950/50 p-3 backdrop-blur-sm">
          <SmartImage
            src={IMAGES.hero.plate}
            alt="A signature main course plated at EMBER"
            aspect="aspect-[4/5]"
            sizes="224px"
            className="rounded-sm"
          />
          <div className="mt-3 flex items-center justify-between px-1 pb-1">
            <span className="text-[0.6rem] uppercase tracking-[0.24em] text-cream-100/70">
              Kacchi Biryani — Our Signature
            </span>
            <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-gold-gradient" />
          </div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        aria-hidden
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.4em] text-cream-100/50">Scroll</span>
        <span className="relative h-14 w-px overflow-hidden bg-cream-100/15">
          <span className="absolute inset-x-0 top-0 h-5 animate-float bg-gold-gradient" />
        </span>
      </motion.div>
    </section>
  );
}
