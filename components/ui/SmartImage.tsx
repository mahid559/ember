'use client';

import Image from 'next/image';
import { useState } from 'react';
import { BLUR_DATA_URL } from '@/lib/images';
import { cn } from '@/lib/utils';

type SmartImageProps = {
  src: string;
  alt: string;
  /** Tailwind aspect class controlling the box, e.g. `aspect-[4/5]`. */
  aspect?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  objectPosition?: string;
  quality?: number;
};

/**
 * Resilient image wrapper:
 *  - `next/image` optimisation (AVIF/WebP) with a shared blur placeholder
 *  - shimmer skeleton while decoding
 *  - branded gradient fallback on error — never a broken image
 */
export function SmartImage({
  src,
  alt,
  aspect = 'aspect-[4/3]',
  sizes,
  priority,
  className,
  imgClassName,
  objectPosition = 'center',
  quality = 78,
}: SmartImageProps) {
  const [state, setState] = useState<'loading' | 'loaded' | 'error'>('loading');

  return (
    <div className={cn('relative overflow-hidden bg-ink-850', aspect, className)}>
      {state === 'loading' && (
        <div aria-hidden className="absolute inset-0 overflow-hidden bg-ink-850">
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-cream-100/[0.05] to-transparent" />
          <div className="absolute inset-0 bg-lattice-lines bg-lattice opacity-40" />
        </div>
      )}

      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={quality}
        sizes={sizes ?? '(max-width: 768px) 100vw, 50vw'}
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        className={cn(
          'transition-opacity duration-700 ease-out',
          state === 'loaded' ? 'opacity-100' : 'opacity-0',
          imgClassName,
        )}
        style={{ objectFit: 'cover', objectPosition }}
        onLoad={() => setState('loaded')}
        onError={() => setState('error')}
      />

      {state === 'error' && (
        <div className="absolute inset-0 grid place-items-center bg-ink-900">
          <div className="flex flex-col items-center gap-2 text-gold-500/80">
            <span aria-hidden className="h-2 w-2 rotate-45 bg-gold-gradient" />
            <span className="font-display text-xs uppercase tracking-[0.4em]">Ember</span>
          </div>
        </div>
      )}
    </div>
  );
}
