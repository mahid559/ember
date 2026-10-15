'use client';

import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  /** How far (in %) the content drifts across the scroll range. Keep small. */
  yPercent?: number;
};

/**
 * Subtle GSAP ScrollTrigger parallax. Transform-only, disabled entirely when the
 * visitor prefers reduced motion. Used sparingly (hero + experience media).
 */
export function Parallax({ children, className, yPercent = 10 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    // Dynamic import keeps GSAP out of the initial bundle and off the server.
    import('gsap').then(({ gsap }) =>
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
          gsap.fromTo(
            el,
            { yPercent: -yPercent },
            {
              yPercent: yPercent,
              ease: 'none',
              scrollTrigger: {
                trigger: el.parentElement ?? el,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            },
          );
        });
        cleanup = () => ctx.revert();
        ScrollTrigger.refresh();
      }),
    );

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [yPercent]);

  return (
    <div ref={ref} className={cn('will-change-transform', className)}>
      {children}
    </div>
  );
}
