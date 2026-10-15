import type { Variants } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: EASE } },
};

export const stagger = (staggerChildren = 0.09, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});

/** Consistent viewport trigger so reveals fire just before fully in view. */
export const viewportOnce = { once: true, amount: 0.2 } as const;

export const revealProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: viewportOnce,
} as const;

export const EASE_OUT_EXPO = EASE;
