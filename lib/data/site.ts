/**
 * Site-wide content. Everything a real client would need to swap lives here —
 * contact details, hours, navigation and social links.
 *
 * NOTE: The address, phone number and email below are DEMONSTRATION values for
 * this fictional venue. Replace them before any real deployment. No claim is
 * made that they are verified or belong to an operating business.
 */

export type NavLink = { label: string; href: string };

export const site = {
  name: 'EMBER',
  tagline: 'Modern Bangladeshi dining. Crafted with intention.',
  shortDescription:
    'A contemporary upscale Bangladeshi restaurant in Dhaka — celebrating heritage with modern hospitality.',
  address: {
    line1: 'House 45, Road 27',
    line2: 'Banani',
    city: 'Dhaka 1213, Bangladesh',
  },
  phoneDisplay: '+880 1700 000 000',
  phoneHref: 'tel:+8801700000000',
  email: 'reservations@emberdhaka.com',
  emailHref: 'mailto:reservations@emberdhaka.com',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Banani+Dhaka+Bangladesh',
} as const;

export type OpeningHour = { days: string; hours: string };

export const hours: OpeningHour[] = [
  { days: 'Monday – Thursday', hours: '12:00 PM – 10:00 PM' },
  { days: 'Friday – Saturday', hours: '12:00 PM – 11:00 PM' },
  { days: 'Sunday', hours: '11:00 AM – 09:00 PM' },
];

export type SocialLink = { label: string; href: string };

/**
 * Placeholder social destinations. They resolve to the platform home pages so
 * no link is broken; swap for real profiles at launch.
 */
export const social: SocialLink[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'Facebook', href: 'https://www.facebook.com/' },
  { label: 'Pinterest', href: 'https://www.pinterest.com/' },
];

export const navLinks: NavLink[] = [
  { label: 'Heritage', href: '/#story' },
  { label: 'Signature', href: '/#signature' },
  { label: 'Menu', href: '/menu' },
  { label: 'Dining', href: '/#dining' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Reservations', href: '/#reserve' },
  { label: 'Contact', href: '/#contact' },
];

/** Guest-count options for the reservation form. */
export const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8] as const;
