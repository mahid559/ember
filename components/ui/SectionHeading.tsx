import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Reveal } from './Reveal';

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  className?: string;
  as?: 'h2' | 'h3';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'light',
  className,
  as: Heading = 'h2',
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-5',
        align === 'center' && 'mx-auto max-w-2xl items-center text-center',
        align === 'left' && 'max-w-2xl items-start',
        className,
      )}
    >
      <span className={cn('eyebrow', tone === 'dark' && 'text-gold-600')}>
        <span aria-hidden className="h-px w-8 bg-current opacity-70" />
        {eyebrow}
        {align === 'center' && <span aria-hidden className="h-px w-8 bg-current opacity-70" />}
      </span>
      <Heading className={cn('display-lg', tone === 'dark' ? 'text-ink-900' : 'text-cream-100')}>
        {title}
      </Heading>
      {description && (
        <p
          className={cn(
            'max-w-xl text-[0.95rem] leading-relaxed',
            tone === 'dark' ? 'text-ash-500' : 'text-ash-200',
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
