import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { hours, navLinks, site, social } from '@/lib/data/site';
import { Logo } from '@/components/ui/Logo';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-ash-700/60 bg-ink-950">
      <div className="container grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1.2fr] lg:py-20">
        <div className="max-w-sm">
          <Logo tone="light" />
          <p className="mt-6 text-sm leading-relaxed text-ash-300">{site.shortDescription}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-ash-700 px-4 py-2 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-ash-200 transition-colors hover:border-gold-500 hover:text-gold-300"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-lg text-cream-100">Explore</h2>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ash-300 transition-colors hover:text-gold-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
          <div>
            <h2 className="font-display text-lg text-cream-100">Visit</h2>
            <ul className="mt-5 space-y-3 text-sm text-ash-300">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" aria-hidden />
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
                  <Phone className="h-4 w-4 shrink-0 text-gold-500" aria-hidden />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="flex items-center gap-3 break-all transition-colors hover:text-gold-300"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold-500" aria-hidden />
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="flex items-center gap-2 font-display text-lg text-cream-100">
              <Clock className="h-4 w-4 text-gold-500" aria-hidden />
              Hours
            </h2>
            <ul className="mt-5 space-y-2.5 text-sm">
              {hours.map((entry) => (
                <li key={entry.days} className="flex items-baseline justify-between gap-4">
                  <span className="text-ash-300">{entry.days}</span>
                  <span className={entry.hours === 'Closed' ? 'text-ash-500' : 'text-cream-100'}>
                    {entry.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-ash-700/50">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-ash-400 sm:flex-row">
          <p>&copy; {year} {site.name}. All rights reserved.</p>
          <p className="text-ash-500">
            Contemporary Bangladeshi Dining in Dhaka &middot; Proudly showcasing Bengali flavours with modern hospitality.
          </p>
        </div>
      </div>
    </footer>
  );
}
