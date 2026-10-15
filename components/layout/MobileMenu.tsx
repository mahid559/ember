'use client';

import { useEffect, useRef } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, X } from 'lucide-react';
import { hours, navLinks, site } from '@/lib/data/site';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const reduce = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'Tab' && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  const tonight = hours.find((h) => h.hours !== 'Closed');

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={panelRef}
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[90] bg-ink-950/97 backdrop-blur-md lg:hidden"
        >
          <div className="lattice-overlay" aria-hidden />
          <div className="container relative flex h-full flex-col">
            <div className="flex h-[var(--nav-height)] items-center justify-between">
              <Logo />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center rounded-full border border-ash-700 text-cream-100 transition-colors hover:border-gold-500 hover:text-gold-300"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>

            <nav aria-label="Mobile" className="mt-6 flex-1 overflow-y-auto pb-10">
              <ul className="flex flex-col">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={reduce ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * index + 0.05, duration: 0.4 }}
                    className="border-b border-ash-700/50"
                  >
                    <a
                      href={link.href}
                      onClick={onClose}
                      className="group flex items-center justify-between py-4 font-display text-3xl text-cream-100 transition-colors hover:text-gold-300"
                    >
                      {link.label}
                      <ArrowUpRight
                        className="h-5 w-5 text-gold-500 opacity-0 transition-opacity group-hover:opacity-100"
                        aria-hidden
                      />
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3">
                <Button href="/#reserve" size="lg" fullWidth onClick={onClose}>
                  Reserve a Table
                </Button>
              </div>

              <div className="mt-10 space-y-4 text-sm text-ash-200">
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-3 transition-colors hover:text-gold-300"
                >
                  <Phone className="h-4 w-4 text-gold-500" aria-hidden />
                  {site.phoneDisplay}
                </a>
                <a
                  href={site.emailHref}
                  className="flex items-center gap-3 transition-colors hover:text-gold-300"
                >
                  <Mail className="h-4 w-4 text-gold-500" aria-hidden />
                  {site.email}
                </a>
                {tonight && (
                  <p className="flex items-center gap-3">
                    <span aria-hidden className="h-1 w-1 rotate-45 bg-gold-gradient" />
                    Today &middot; {tonight.hours}
                  </p>
                )}
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
