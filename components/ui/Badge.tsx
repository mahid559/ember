import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type BadgeProps = {
  children: ReactNode;
  tone?: 'light' | 'dark' | 'gold';
  className?: string;
};

/** Small uppercase meta label used for dietary tags and categories. */
export function Badge({ children, tone = 'light', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-1 text-[0.6rem] font-medium uppercase tracking-[0.16em]',
        tone === 'light' && 'border-ash-600 text-ash-200',
        tone === 'dark' && 'border-ink-700/25 text-ash-500',
        tone === 'gold' && 'border-gold-500/50 text-gold-400',
        className,
      )}
    >
      {children}
    </span>
  );
}
