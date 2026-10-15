import { cn, formatPrice } from '@/lib/utils';
import type { Dish } from '@/lib/data/menu';
import { SmartImage } from './SmartImage';
import { Badge } from './Badge';

type DishCardProps = {
  dish: Dish;
  tone?: 'light' | 'dark';
  /** First few cards can load eagerly. */
  priority?: boolean;
  className?: string;
  /** Tailwind aspect class for the image box. */
  aspect?: string;
};

export function DishCard({
  dish,
  tone = 'light',
  priority,
  className,
  aspect = 'aspect-[4/3]',
}: DishCardProps) {
  const dark = tone === 'dark';

  return (
    <article
      className={cn(
        'group/card flex flex-col overflow-hidden',
        dark ? 'text-ink-900' : 'text-cream-100',
        className,
      )}
    >
      <div className="relative">
        <SmartImage
          src={dish.image}
          alt={dish.name}
          aspect={aspect}
          priority={priority}
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 30vw"
          className="rounded-sm"
          imgClassName="transition-transform duration-[900ms] ease-out-expo group-hover/card:scale-[1.06]"
        />
        <div
          aria-hidden
          className={cn(
            'pointer-events-none absolute inset-0 rounded-sm bg-gradient-to-t opacity-70',
            dark
              ? 'from-ink-950/40 via-transparent to-transparent'
              : 'from-ink-950/60 via-transparent to-transparent',
          )}
        />
        {dish.signature && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-ink-950/80 px-3 py-1.5 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-gold-300 backdrop-blur-sm">
            <span aria-hidden className="h-1 w-1 rotate-45 bg-gold-gradient" />
            Signature
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col pt-5">
        <div className="flex items-baseline gap-3">
          <h3
            className={cn(
              'font-display text-xl leading-snug',
              dark ? 'text-ink-900' : 'text-cream-50',
            )}
          >
            {dish.name}
          </h3>
          <span
            aria-hidden
            className={cn(
              'mb-1 h-px flex-1',
              dark ? 'bg-ink-700/20' : 'bg-ash-700/70',
            )}
          />
          <span className={cn('font-display text-lg', dark ? 'text-gold-700' : 'text-gold-400')}>
            {formatPrice(dish.price)}
          </span>
        </div>

        <p className={cn('mt-2 text-sm leading-relaxed', dark ? 'text-ash-500' : 'text-ash-300')}>
          {dish.description}
        </p>

        {dish.tags && dish.tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {dish.tags.map((tag) => (
              <li key={tag}>
                <Badge tone={dark ? 'dark' : 'light'}>{tag}</Badge>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
