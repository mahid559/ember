import { Hero } from '@/components/sections/Hero';
import { Intro } from '@/components/sections/Intro';
import { SignatureDishes } from '@/components/sections/SignatureDishes';
import { MenuSection } from '@/components/sections/MenuSection';
import { Chef } from '@/components/sections/Chef';
import { Experience } from '@/components/sections/Experience';
import { Gallery } from '@/components/sections/Gallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { Reservation } from '@/components/sections/Reservation';
import { Contact } from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <SignatureDishes />
      <MenuSection />
      <Chef />
      <Experience />
      <Gallery />
      <Testimonials />
      <Reservation />
      <Contact />
    </>
  );
}
