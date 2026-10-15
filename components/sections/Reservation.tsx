import { Clock, MapPin, Phone } from 'lucide-react';
import { IMAGES } from '@/lib/images';
import { hours, site } from '@/lib/data/site';
import { SmartImage } from '@/components/ui/SmartImage';
import { ReservationForm } from '@/components/ui/ReservationForm';

export function Reservation() {
  return (
    <section id="reserve" className="section">
      <div className="container">
        <div className="grid overflow-hidden rounded-sm border border-ash-700/60 lg:grid-cols-2">
          {/* Media / info panel */}
          <div className="relative min-h-[340px] lg:min-h-full">
            <SmartImage
              src={IMAGES.experience.table}
              alt="A table set for dinner at EMBER"
              aspect="h-full w-full"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="absolute inset-0 h-full w-full"
            />
            <div aria-hidden className="absolute inset-0 bg-ink-950/70" />
            <div className="relative flex h-full flex-col justify-end gap-6 p-8 sm:p-10">
              <div>
                <span className="eyebrow">
                  <span aria-hidden className="h-px w-8 bg-current opacity-70" />
                  Reservations
                </span>
                <p className="mt-5 max-w-sm font-display text-3xl leading-snug text-cream-50">
                  Reserve your table at EMBER Dhaka.
                </p>
              </div>

              <ul className="space-y-4 text-sm text-cream-100/85">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden />
                  <span>
                    {site.address.line1}, {site.address.line2}
                    <br />
                    {site.address.city}
                  </span>
                </li>
                <li>
                  <a
                    href={site.phoneHref}
                    className="flex items-center gap-3 transition-colors hover:text-gold-300"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-gold-400" aria-hidden />
                    {site.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden />
                  <span className="space-y-1">
                    {hours.map((entry) => (
                      <span key={entry.days} className="flex flex-wrap gap-x-2">
                        <span className="text-cream-100/60">{entry.days}</span>
                        <span>{entry.hours}</span>
                      </span>
                    ))}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form panel */}
          <div className="bg-cream-100 p-8 sm:p-10 lg:p-12">
            <h2 className="font-display text-3xl text-ink-900 sm:text-4xl">Reserve a table</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ash-500">
              Tell us when you&rsquo;d like to join us. For parties larger than eight or same-day bookings,
              please call our team directly.
            </p>
            <div className="mt-8">
              <ReservationForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
