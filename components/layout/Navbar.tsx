'use client';

import { useEffect, useState } from 'react';
import { Menu, Phone } from 'lucide-react';
import { navLinks, site } from '@/lib/data/site';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        {/* Slim information strip — collapses on scroll */}
        <div
          className={cn(
            'hidden overflow-hidden border-b transition-all duration-500 ease-out-expo lg:block',
            scrolled
              ? 'max-h-0 border-transparent opacity-0'
              : 'max-h-10 border-cream-100/10 opacity-100',
          )}
        >
          <div className="container flex items-center justify-between py-3 text-[0.66rem] uppercase tracking-[0.28em] text-cream-100/70">
            <span>{site.address.line2}, {site.address.city}</span>
            <span className="text-gold-400">Contemporary Bangladeshi Dining &middot; Reserve your table</span>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 transition-colors hover:text-gold-300"
            >
              <Phone className="h-3 w-3" aria-hidden />
              {site.phoneDisplay}
            </a>
          </div>
        </div>

        <div
          className={cn(
            'transition-all duration-500 ease-out-expo',
            scrolled
              ? 'border-b border-ash-700/60 bg-ink-950/85 backdrop-blur-xl'
              : 'border-b border-transparent bg-transparent',
          )}
        >
          <nav
            aria-label="Primary"
            className={cn(
              'container flex items-center justify-between gap-6 transition-all duration-500 ease-out-expo',
              scrolled ? 'h-[var(--nav-height)]' : 'h-[var(--nav-height)] lg:h-24',
            )}
          >
            <Logo />

            <ul className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group relative py-2 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-cream-100/80 transition-colors hover:text-cream-50"
                  >
                    {link.label}
                    <span
                      aria-hidden
                      className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gold-gradient transition-transform duration-300 ease-out-expo group-hover:scale-x-100"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <Button href="/#reserve" size="sm" className="hidden sm:inline-flex">
                Reserve a Table
              </Button>
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={menuOpen}
                className="grid h-11 w-11 place-items-center rounded-full border border-ash-700 text-cream-100 transition-colors hover:border-gold-500 hover:text-gold-300 lg:hidden"
              >
                <Menu className="h-5 w-5" aria-hidden />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
