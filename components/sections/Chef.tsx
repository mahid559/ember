import { chef } from '@/lib/data/chef';
import { Reveal } from '@/components/ui/Reveal';
import { SmartImage } from '@/components/ui/SmartImage';

export function Chef() {
  return (
    <section id="chef" className="section bg-cream-100 text-ink-900">
      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Media */}
          <Reveal className="relative" y={36}>
            <div className="relative mx-auto max-w-md lg:mx-0 lg:max-w-none">
              <SmartImage
                src={chef.portrait}
                alt={`${chef.name}, ${chef.role}, in the EMBER kitchen`}
                aspect="aspect-[4/5]"
                sizes="(max-width: 1024px) 80vw, 45vw"
                className="rounded-sm"
              />
              <div className="absolute -bottom-10 -right-2 hidden w-40 border border-ink-900/15 bg-ink-950 p-2 sm:block lg:-right-10 lg:w-48">
                <SmartImage
                  src={chef.kitchen}
                  alt="A chef working at the pass during service"
                  aspect="aspect-[4/5]"
                  sizes="192px"
                  className="rounded-[2px]"
                />
              </div>
              <span
                aria-hidden
                className="absolute -left-4 -top-4 hidden h-24 w-24 border border-gold-500/40 lg:block"
              />
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal className="eyebrow text-gold-600">
              <span aria-hidden className="h-px w-10 bg-current opacity-70" />
              The Chef &amp; Philosophy
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-lg mt-6 text-ink-900">
                Heritage honoured.
                <br className="hidden sm:block" /> Flavours elevated.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="mt-7 space-y-5 text-[0.95rem] leading-relaxed text-ash-500">
              <p className="font-display text-xl italic text-ink-800">{chef.short}</p>
              {chef.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </Reveal>
            <Reveal delay={0.15} className="mt-8">
              <p className="font-display text-2xl text-ink-900">{chef.name}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.28em] text-gold-600">{chef.role}</p>
            </Reveal>
          </div>
        </div>

        {/* Principles */}
        <ul className="mt-20 grid gap-x-8 gap-y-10 border-t border-ink-900/10 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {chef.principles.map((principle, index) => (
            <Reveal as="li" key={principle.title} delay={index * 0.08}>
              <span className="font-display text-sm text-gold-600">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-display text-xl text-ink-900">{principle.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ash-500">{principle.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
