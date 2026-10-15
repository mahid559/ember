import { experience } from '@/lib/data/experience';
import { Reveal } from '@/components/ui/Reveal';
import { SmartImage } from '@/components/ui/SmartImage';
import { Parallax } from '@/components/ui/Parallax';

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Media collage */}
        <Reveal className="order-2 lg:order-1" y={36}>
          <div className="grid gap-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-ash-700/60 sm:aspect-[5/4] lg:aspect-[4/5]">
              <Parallax className="absolute inset-[-7%]" yPercent={6}>
                <SmartImage
                  src={experience.images.dining}
                  alt="Guests dining in the low-lit EMBER room"
                  aspect="h-full w-full"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="absolute inset-0 h-full w-full"
                />
              </Parallax>
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <SmartImage
                src={experience.images.room}
                alt="The full EMBER dining room before service"
                aspect="aspect-[4/3]"
                sizes="(max-width: 1024px) 45vw, 22vw"
                className="rounded-sm border border-ash-700/60"
              />
              <SmartImage
                src={experience.images.table}
                alt="A table laid with wine glasses and linen"
                aspect="aspect-[4/3]"
                sizes="(max-width: 1024px) 45vw, 22vw"
                className="rounded-sm border border-ash-700/60"
              />
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal className="eyebrow">
            <span aria-hidden className="h-px w-10 bg-current opacity-70" />
            The Experience
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-lg mt-6 text-cream-50">
              Modern Bangladeshi dining in Dhaka.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-6 max-w-lg text-[0.95rem] leading-relaxed text-ash-200">
            <p>
              EMBER blends authentic Bengali flavours with contemporary design, elegant ambience, and thoughtful service — creating the perfect setting for family dinners, business lunches, and special celebrations in Dhaka.
            </p>
          </Reveal>

          <dl className="mt-10 divide-y divide-ash-700/60 border-y border-ash-700/60">
            {experience.features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.06}>
                <div className="grid gap-2 py-6 sm:grid-cols-[9rem_1fr] sm:gap-6">
                  <dt className="font-display text-lg text-gold-300">{feature.title}</dt>
                  <dd className="text-sm leading-relaxed text-ash-300">{feature.body}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
