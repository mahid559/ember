import { IMAGES } from '@/lib/images';
import { Reveal } from '@/components/ui/Reveal';
import { SmartImage } from '@/components/ui/SmartImage';

const markers = ['Authentic Bangladeshi cuisine', 'Modern, elegant presentation', 'Warm, attentive hospitality'];

export function Intro() {
  return (
    <section id="story" className="section overflow-hidden">
      <div className="container grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Media */}
        <Reveal className="relative order-2 lg:order-1" y={36}>
          <div className="relative mx-auto max-w-md lg:mx-0 lg:max-w-none">
            <div
              aria-hidden
              className="absolute -left-5 -top-5 hidden h-40 w-40 border border-gold-500/30 sm:block"
            />
            <SmartImage
              src={IMAGES.intro.main}
              alt="Guests at a candle-lit table in the EMBER dining room"
              aspect="aspect-[4/5]"
              sizes="(max-width: 1024px) 80vw, 45vw"
              className="rounded-sm"
            />
            <div className="absolute -bottom-8 -right-2 hidden w-44 border border-ash-700 bg-ink-950 p-2 sm:block lg:-right-8 lg:w-52">
              <SmartImage
                src={IMAGES.intro.accent}
                alt="Detail of the dining room's pendant lighting"
                aspect="aspect-square"
                sizes="208px"
                className="rounded-[2px]"
              />
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal className="eyebrow">
            <span aria-hidden className="h-px w-10 bg-current opacity-70" />
            Our Story
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="display-lg mt-6 text-cream-50">
              Where heritage meets
              <br className="hidden sm:block" /> contemporary elegance.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-7 space-y-5 text-[0.95rem] leading-relaxed text-ash-200">
            <p>
              EMBER is a sophisticated contemporary Bangladeshi restaurant in Dhaka, where we honour the rich
              tapestry of Bengali cuisine while presenting it with modern refinement and international hospitality.
            </p>
            <p>
              From iconic dishes like Kacchi Biryani and Shorshe Ilish to our signature Bhuna Khichuri, every plate
              celebrates authenticity with elegant presentation. The result is a dining experience designed for
              family dinners, business lunches, celebrations, and special occasions.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-9">
            <ul className="flex flex-col gap-3 border-t border-ash-700/60 pt-6">
              {markers.map((marker) => (
                <li key={marker} className="flex items-center gap-3 text-sm text-cream-100/85">
                  <span aria-hidden className="h-1 w-1 rotate-45 bg-gold-gradient" />
                  {marker}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="mt-9">
            <p className="font-display text-2xl italic text-gold-300">
              &ldquo;Honouring our roots. Elevating every plate.&rdquo;
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.28em] text-ash-400">
              Chef Ashraful Hasan &middot; Executive Chef
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
