export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  context: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

/**
 * DEMONSTRATION CONTENT.
 * These quotes are written samples for layout purposes and do not represent
 * verified reviews from real diners. Replace with genuine, attributable
 * testimonials (with permission) before launch.
 */
export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'EMBER is redefining modern Bangladeshi cuisine in Dhaka. The Kacchi Biryani is exquisite and the service is impeccable.',
    name: 'Rahim Khan',
    context: 'Family dinner',
    rating: 5,
  },
  {
    id: 't2',
    quote:
      'Perfect for business lunches and client meetings. Sophisticated ambience without losing our Bangladeshi roots.',
    name: 'Farhana Islam',
    context: 'Business lunch',
    rating: 5,
  },
  {
    id: 't3',
    quote:
      'Celebrated my anniversary here — every detail was flawless. Shorshe Ilish brought back childhood memories with a modern twist.',
    name: 'Tanvir Ahmed',
    context: 'Anniversary celebration',
    rating: 5,
  },
  {
    id: 't4',
    quote:
      'Bhuna Khichuri at EMBER is pure comfort elevated. Beautifully plated, warm service, and stunning interior.',
    name: 'Nusrat Jahan',
    context: 'Casual dining',
    rating: 5,
  },
  {
    id: 't5',
    quote:
      'Finally, a Dhaka restaurant that feels international while proudly showcasing Bengali flavours. Highly recommended.',
    name: 'Sajid Hasan',
    context: 'Special occasion',
    rating: 5,
  },
];
