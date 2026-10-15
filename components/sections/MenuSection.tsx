import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { MenuExplorer } from '@/components/ui/MenuExplorer';

export function MenuSection() {
  return (
    <section id="menu" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="The Menu"
          title={
            <>
              Contemporary <span className="italic text-gold-gradient">Bangladeshi</span> cuisine.
            </>
          }
          description="Explore our curated selection of reimagined classics — Kacchi Biryani, Morog Polao, Shorshe Ilish, and more."
        />

        <div className="mt-14">
          <MenuExplorer />
        </div>

        <Reveal delay={0.05} className="mt-16 flex justify-center">
          <Button href="/menu" variant="outline" icon={<ArrowRight className="h-4 w-4" aria-hidden />}>
            Open the full menu
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
