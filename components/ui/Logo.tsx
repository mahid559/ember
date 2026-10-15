import Link from 'next/link';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
  /** Use the light wordmark on cream backgrounds. */
  tone?: 'light' | 'dark';
  href?: string;
};

/** EMBER wordmark with a rotating ember diamond. */
export function Logo({ className, tone = 'light', href = '/' }: LogoProps) {
  return (
    <Link
      href={href}
      aria-label="EMBER — home"
      className={cn('group inline-flex items-center gap-3', className)}
    >
      <span className="relative grid h-9 w-9 shrink-0 place-items-center">
        <span
          aria-hidden
          className="absolute inset-1 rotate-45 border border-gold-500/70 transition-transform duration-500 ease-out-expo group-hover:rotate-[135deg]"
        />
        <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-gold-gradient" />
      </span>
      <span
        className={cn(
          'font-display text-xl leading-none tracking-[0.34em] transition-colors sm:text-2xl',
          tone === 'light' ? 'text-cream-100' : 'text-ink-900',
        )}
      >
        EMBER
      </span>
    </Link>
  );
}
