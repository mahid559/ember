import { Star } from 'lucide-react';
import { testimonials } from '@/lib/data/testimonials';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

export function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Guest Impressions"
          title={
            <>
              What our guests say about <span className="italic text-gold-gradient">EMBER</span>.
            </>
          }
          description="Experiences from our valued diners across Dhaka."
        />

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.id}
              delay={Math.min(index * 0.06, 0.3)}
              className="mb-6 break-inside-avoid"
            >
              <figure className="relative flex h-full flex-col gap-5 rounded-sm border border-ash-700/70 bg-ink-850/70 p-7">
                <span
                  aria-hidden
                  className="font-display text-5xl leading-none text-gold-500/40"
                >
                  &ldquo;
                </span>
                <div className="flex items-center gap-1" aria-label={`${testimonial.rating} out of 5`}>
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      aria-hidden
                      className={cn(
                        'h-3.5 w-3.5',
                        starIndex < testimonial.rating
                          ? 'fill-gold-500 text-gold-500'
                          : 'text-ash-600',
                      )}
                    />
                  ))}
                </div>
                <blockquote className="text-[0.95rem] leading-relaxed text-cream-100/85">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-auto pt-2">
                  <span className="block font-display text-lg text-cream-50">{testimonial.name}</span>
                  <span className="mt-1 block text-[0.62rem] uppercase tracking-[0.24em] text-ash-400">
                    {testimonial.context}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
