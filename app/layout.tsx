import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { site } from '@/lib/data/site';
import { IMAGES } from '@/lib/images';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { BackToTop } from '@/components/layout/BackToTop';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ember-dining.example.com'),
  title: {
    default: `${site.name} — Modern Bangladeshi Dining in Dhaka`,
    template: `%s | ${site.name}`,
  },
  description:
    'EMBER is a contemporary upscale Bangladeshi restaurant in Dhaka. Authentic Bangladeshi cuisine reimagined with elegance and warm hospitality. Reserve a table.',
  keywords: [
    'Bangladeshi restaurant',
    'Dhaka restaurant',
    'biryani',
    'kacchi biryani',
    'Bangladeshi food',
    'fine dining Dhaka',
    'contemporary Bangladeshi cuisine',
    'EMBER restaurant',
    'family dining Dhaka',
    'business lunch Dhaka',
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ember-dining.example.com',
    siteName: site.name,
    title: 'EMBER — Modern Bangladeshi Dining in Dhaka',
    description:
      'Contemporary Bangladeshi restaurant in Dhaka serving reimagined classics with elegance and warm hospitality.',
    images: [{ url: IMAGES.hero.primary, width: 1600, height: 1120, alt: 'EMBER Dhaka Restaurant Interior' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EMBER — Modern Bangladeshi Dining in Dhaka',
    description: 'Premium contemporary Bangladeshi cuisine in Dhaka.',
    images: [IMAGES.hero.primary],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b0a08',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn('dark', inter.variable, cormorant.variable)}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-cream-100 focus:px-5 focus:py-3 focus:text-xs focus:font-medium focus:uppercase focus:tracking-[0.2em] focus:text-ink-950"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
