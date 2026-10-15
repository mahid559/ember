import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '@/lib/images';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { SmartImage } from '@/components/ui/SmartImage';
import { MenuExplorer } from '@/components/ui/MenuExplorer';

export const metadata: Metadata = {
  title: 'Menu',
  description:
    'Full menu at EMBER Dhaka — contemporary Bangladeshi cuisine including Kacchi Biryani, Morog Polao, Shorshe Ilish, Bhuna Khichuri, and more.',
};

const notes = [
  {
    title: 'Dietary Information',
    body: 'We accommodate dietary preferences where possible. Please inform us of any allergies or restrictions when making your reservation.',
  },
  {
    title: 'Celebrations',
    body: 'Special occasions deserve to be celebrated. Let us know the occasion when booking and we’ll help create the perfect experience.',
  },
  {
    title: 'Group Dining',
    body: 'Ideal for family gatherings, corporate dinners, and group celebrations in Dhaka. Contact us for tailored arrangements.',
  },
];

export default function MenuPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden pt-36 pb-20 sm:pt-40 lg:pt-48 lg:pb-24">
        <SmartImage
          src={IMAGES.experience.room}
          alt="The EMBER dining room, set for evening service"
          aspect="h-full w-full"
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full"
        />
        <div aria-hidden className="absolute inset-0 scrim" />
        <div aria-hidden className="absolute inset-0 bloom" />
        <div className="lattice-overlay" aria-hidden />
        <div className="container relative">
          <Reveal className="eyebrow">
            <span aria-hidden className="h-px w-10 bg-current opacity-70" />
            The Menu
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-xl mt-6 max-w-3xl text-cream-50">
              Contemporary Bangladeshi
              <br className="hidden sm:block" /> cuisine at EMBER.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream-100/75">
              Explore our refined selection of reimagined Bangladeshi classics — curated with care and presented with elegance. Use filters to browse by category.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Explorer */}
      <section className="section pt-16">
        <div className="container">
          <MenuExplorer />
        </div>
      </section>

      {/* Notes */}
      <section className="border-t border-ash-700/60 bg-ink-gradient">
        <div className="container py-20 lg:py-24">
          <ul className="grid gap-10 sm:grid-cols-3">
            {notes.map((note, index) => (
              <Reveal as="li" key={note.title} delay={index * 0.08}>
                <span className="font-display text-sm text-gold-500">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="mt-4 font-display text-xl text-cream-50">{note.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ash-300">{note.body}</p>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.1} className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-ash-700/60 pt-10 sm:flex-row sm:items-center">
            <p className="max-w-md font-display text-2xl text-cream-50">
              Ready to join us for dinner?
            </p>
            <Button href="/#reserve" size="lg" icon={<ArrowRight className="h-4 w-4" aria-hidden />}>
              Reserve a Table
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
