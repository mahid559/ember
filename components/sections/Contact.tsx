import { ArrowUpRight, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { hours, site } from '@/lib/data/site';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Visit Us"
          title={
            <>
              Visit <span className="italic text-gold-gradient">EMBER</span> in Dhaka.
            </>
          }
          description="Banani, Dhaka — reservations recommended. Reach us by phone or email for bookings and enquiries."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Address */}
          <Reveal className="flex h-full flex-col rounded-sm border border-ash-700/70 bg-ink-850/60 p-8">
            <MapPin className="h-5 w-5 text-gold-400" aria-hidden />
            <h3 className="mt-6 font-display text-xl text-cream-50">Address</h3>
            <address className="mt-3 not-italic text-sm leading-relaxed text-ash-300">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.city}
            </address>
            <a
              href={site.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-auto inline-flex items-center gap-2 pt-6 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-gold-400 transition-colors hover:text-gold-300"
            >
              Open in Maps
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
          </Reveal>

          {/* Contact */}
          <Reveal delay={0.06} className="flex h-full flex-col rounded-sm border border-ash-700/70 bg-ink-850/60 p-8">
            <Phone className="h-5 w-5 text-gold-400" aria-hidden />
            <h3 className="mt-6 font-display text-xl text-cream-50">Contact</h3>
            <ul className="mt-3 space-y-3 text-sm">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-3 text-ash-300 transition-colors hover:text-gold-300"
                >
                  <Phone className="h-4 w-4 text-gold-500" aria-hidden />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="flex items-start gap-3 break-all text-ash-300 transition-colors hover:text-gold-300"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" aria-hidden />
                  {site.email}
                </a>
              </li>
            </ul>
            <p className="mt-auto pt-6 text-xs leading-relaxed text-ash-400">
              Reservations: {site.phoneDisplay} | {site.email}
            </p>
          </Reveal>

          {/* Hours */}
          <Reveal delay={0.12} className="flex h-full flex-col rounded-sm border border-ash-700/70 bg-ink-850/60 p-8 sm:col-span-2 lg:col-span-1">
            <Clock className="h-5 w-5 text-gold-400" aria-hidden />
            <h3 className="mt-6 font-display text-xl text-cream-50">Opening hours</h3>
            <ul className="mt-3 space-y-2.5 text-sm">
              {hours.map((entry) => (
                <li key={entry.days} className="flex items-baseline justify-between gap-4">
                  <span className="text-ash-300">{entry.days}</span>
                  <span className={entry.hours === 'Closed' ? 'text-ash-500' : 'text-cream-100'}>
                    {entry.hours}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
