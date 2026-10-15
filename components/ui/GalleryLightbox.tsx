'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import {
  galleryCategories,
  galleryImages,
  type GalleryCategory,
  type GalleryImage,
} from '@/lib/data/gallery';
import { cn } from '@/lib/utils';
import { SmartImage } from './SmartImage';
import { Reveal } from './Reveal';

type Filter = 'all' | GalleryCategory;

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  ...galleryCategories.map((category) => ({ id: category, label: category })),
];

function aspectFor(image: GalleryImage) {
  if (image.span === 'tall') return 'aspect-[3/4]';
  if (image.span === 'wide') return 'aspect-[4/3]';
  return 'aspect-square';
}

export function GalleryLightbox() {
  const [active, setActive] = useState<Filter>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const triggerRef = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const visible = useMemo(
    () => (active === 'all' ? galleryImages : galleryImages.filter((i) => i.category === active)),
    [active],
  );

  const close = useCallback(() => {
    setOpenIndex(null);
    triggerRef.current?.focus();
  }, []);

  const step = useCallback(
    (dir: 1 | -1) => {
      setOpenIndex((current) => {
        if (current === null) return current;
        return (current + dir + visible.length) % visible.length;
      });
    },
    [visible.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowRight') step(1);
      if (event.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [openIndex, close, step]);

  const current = openIndex !== null ? visible[openIndex] : null;

  return (
    <div>
      <Reveal className="flex flex-wrap items-center justify-center gap-2">
        {filters.map((filter) => {
          const isActive = filter.id === active;
          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => {
                setActive(filter.id);
                setOpenIndex(null);
              }}
              aria-pressed={isActive}
              className={cn(
                'rounded-full border px-5 py-2.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] transition-all duration-300 ease-out',
                isActive
                  ? 'border-gold-500 bg-gold-gradient text-ink-950'
                  : 'border-ash-700 text-ash-200 hover:border-gold-500/60 hover:text-gold-300',
              )}
            >
              {filter.label}
            </button>
          );
        })}
      </Reveal>

      <div className="mt-10 columns-2 gap-4 [column-fill:_balance] lg:columns-3">
        {visible.map((image, index) => (
          <Reveal
            key={image.id}
            className="mb-4 break-inside-avoid"
            delay={Math.min(index * 0.04, 0.24)}
          >
            <button
              type="button"
              onClick={(event) => {
                triggerRef.current = event.currentTarget;
                setOpenIndex(index);
              }}
              aria-label={`View larger: ${image.alt}`}
              className="group block w-full overflow-hidden rounded-sm border border-ash-700/70 transition-colors duration-300 hover:border-gold-500/60"
            >
              <span className="relative block">
                <SmartImage
                  src={image.src}
                  alt={image.alt}
                  aspect={aspectFor(image)}
                  sizes="(max-width: 640px) 46vw, (max-width: 1024px) 31vw, 30vw"
                  imgClassName="transition-transform duration-[1100ms] ease-out-expo group-hover:scale-[1.05]"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/5 to-transparent opacity-80"
                />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
                  <span className="text-[0.62rem] font-medium uppercase tracking-[0.24em] text-cream-100/90">
                    {image.category}
                  </span>
                  <span className="grid h-8 w-8 translate-y-2 place-items-center rounded-full border border-cream-100/40 text-cream-100/90 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    +
                  </span>
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {current && openIndex !== null && (
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label={current.alt}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/95 px-4 py-16 backdrop-blur-sm sm:px-8"
            onClick={close}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Close image viewer"
              className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-ash-700 text-cream-100 transition-colors hover:border-gold-500 hover:text-gold-300 sm:right-8 sm:top-8"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                step(-1);
              }}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-ash-700 bg-ink-950/60 text-cream-100 transition-colors hover:border-gold-500 hover:text-gold-300 sm:left-6"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden />
            </button>

            <motion.figure
              key={current.id}
              initial={reduce ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-4xl"
            >
              <SmartImage
                src={current.src}
                alt={current.alt}
                aspect="aspect-[3/2]"
                sizes="90vw"
                quality={82}
                className="rounded-sm"
              />
              <figcaption className="mt-4 flex items-center justify-between gap-4">
                <span className="text-sm text-ash-200">{current.alt}</span>
                <span className="shrink-0 text-[0.62rem] font-medium uppercase tracking-[0.24em] text-gold-400">
                  {openIndex + 1} / {visible.length}
                </span>
              </figcaption>
            </motion.figure>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                step(1);
              }}
              aria-label="Next image"
              className="absolute right-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-ash-700 bg-ink-950/60 text-cream-100 transition-colors hover:border-gold-500 hover:text-gold-300 sm:right-6"
            >
              <ChevronRight className="h-6 w-6" aria-hidden />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
