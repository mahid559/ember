import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'outline' | 'ghost' | 'light';
type Size = 'sm' | 'md' | 'lg';

type CommonProps = {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  iconLeft?: ReactNode;
  className?: string;
  fullWidth?: boolean;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  'group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full font-sans font-medium uppercase tracking-[0.16em] transition-all duration-300 ease-out will-change-transform select-none whitespace-nowrap active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50';

const variants: Record<Variant, string> = {
  primary:
    'bg-gold-gradient text-ink-950 shadow-gold hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(206,175,102,0.6),0_26px_60px_-24px_rgba(206,175,102,0.7)]',
  outline:
    'border border-ash-600 bg-transparent text-cream-100 hover:-translate-y-0.5 hover:border-gold-500 hover:text-gold-300',
  ghost: 'bg-transparent text-cream-100 hover:text-gold-300',
  light: 'bg-cream-100 text-ink-950 hover:-translate-y-0.5 hover:bg-white',
};

const sizes: Record<Size, string> = {
  sm: 'h-10 px-5 text-[0.66rem]',
  md: 'h-12 px-7 text-xs',
  lg: 'h-14 px-9 text-xs',
};

function Sheen({ variant }: { variant: Variant }) {
  if (variant !== 'primary') return null;
  return (
    <span
      aria-hidden
      className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-cream-50/50 opacity-0 blur-md transition-all duration-700 ease-out group-hover:left-[120%] group-hover:opacity-100"
    />
  );
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconLeft,
  fullWidth,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], fullWidth && 'w-full', className);

  const inner = (
    <>
      <Sheen variant={variant} />
      {iconLeft}
      <span>{children}</span>
      {icon && (
        <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </>
  );

  if ('href' in rest && rest.href) {
    const { href, ...anchorRest } = rest;
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {inner}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {inner}
    </button>
  );
}
