import { ArrowRight } from 'lucide-react';
import { signatureDishes } from '@/lib/data/menu';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { DishCard } from '@/components/ui/DishCard';

export function SignatureDishes() {
  return (
    <section id="signature" className="section relative bg-ink-gradient">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Signature Dishes"
            title={
              <>
                Our <span className="italic text-gold-gradient">signature</span> Bangladeshi creations.
              </>
            }
          />
          <Reveal delay={0.1} className="shrink-0">
            <Button
              href="/menu"
              variant="ghost"
              className="px-0"
              icon={<ArrowRight className="h-4 w-4" aria-hidden />}
            >
              View the full menu
            </Button>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {signatureDishes.map((dish, index) => (
            <Reveal
              as="li"
              key={dish.id}
              delay={index * 0.08}
              className={index % 2 === 1 ? 'lg:mt-16' : undefined}
            >
              <DishCard dish={dish} aspect="aspect-[3/4]" priority={index < 2} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
