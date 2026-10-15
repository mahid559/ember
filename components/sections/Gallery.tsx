import { SectionHeading } from '@/components/ui/SectionHeading';
import { GalleryLightbox } from '@/components/ui/GalleryLightbox';

export function Gallery() {
  return (
    <section id="gallery" className="section bg-ink-gradient">
      <div className="container">
        <SectionHeading
          eyebrow="Gallery"
          title={
            <>
              A glimpse into <span className="italic text-gold-gradient">EMBER</span>.
            </>
          }
          description="Curated moments from our contemporary Bangladeshi restaurant in Dhaka — elegant interiors, refined presentations, and culinary artistry."
        />
        <div className="mt-12">
          <GalleryLightbox />
        </div>
      </div>
    </section>
  );
}
