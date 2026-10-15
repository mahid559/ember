'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { dishes, menuCategories, type MenuCategory } from '@/lib/data/menu';
import { cn } from '@/lib/utils';
import { DishCard } from './DishCard';
import { Reveal } from './Reveal';

type Filter = 'all' | MenuCategory;

type MenuExplorerProps = {
  /** Which category is active on first render. */
  initialFilter?: Filter;
  /** Restrict the number of dishes rendered per view (used by the home preview). */
  limit?: number;
  className?: string;
};

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'Full Menu' },
  ...menuCategories.map((category) => ({ id: category.id, label: category.label })),
];

export function MenuExplorer({ initialFilter = 'all', limit, className }: MenuExplorerProps) {
  const [active, setActive] = useState<Filter>(initialFilter);
  const reduce = useReducedMotion();

  const visible = useMemo(() => {
    const list = active === 'all' ? dishes : dishes.filter((dish) => dish.category === active);
    return limit ? list.slice(0, limit) : list;
  }, [active, limit]);

  const activeBlurb = menuCategories.find((category) => category.id === active)?.blurb;

  return (
    <div className={className}>
      {/* Category filter */}
      <Reveal className="flex flex-col items-center gap-6">
        <div
          role="group"
          aria-label="Filter the menu by course"
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {filters.map((filter) => {
            const isActive = filter.id === active;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActive(filter.id)}
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
        </div>

        <p
          className="min-h-[1.25rem] max-w-xl text-center text-sm italic text-ash-300"
          aria-live="polite"
        >
          {activeBlurb ?? 'Twenty-four plates across four courses, changing with the season.'}
        </p>
      </Reveal>

      {/* Dishes */}
      <div className="mt-12">
        <AnimatePresence mode="wait" initial={false}>
          {visible.length > 0 ? (
            <motion.div
              key={active}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -14 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <ul className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {visible.map((dish, index) => (
                  <motion.li
                    key={dish.id}
                    initial={reduce ? false : { opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: reduce ? 0 : Math.min(index * 0.05, 0.25),
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <DishCard dish={dish} />
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ) : (
            <motion.p
              key="empty"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-20 text-center font-display text-2xl text-ash-300"
            >
              Nothing on this course just yet — please ask our team.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
