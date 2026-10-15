import { IMAGES } from '@/lib/images';

/**
 * Chef & culinary philosophy. Fictional brand content — no awards or credentials
 * are claimed for any real person.
 */
export const chef = {
  name: 'Chef Ashraful Hasan',
  role: 'Executive Chef & Culinary Director',
  portrait: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Chicken_Hyderabadi_Biryani.JPG',
  kitchen: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Basmati_Kacchi_Biryani_%282%29.jpg',
  short:
    'Rooted in Bangladeshi culinary heritage, EMBER reimagines time-honoured recipes with contemporary finesse.',
  bio: [
    'EMBER is a contemporary Bangladeshi restaurant in Dhaka that honours the depth of Bengali cuisine while embracing modern techniques and presentation.',
    'Led by Chef Ashraful Hasan, our kitchen celebrates iconic dishes like Kacchi Biryani, Shorshe Ilish and Bhuna Khichuri — refined for a premium dining experience without losing their soulful authenticity.',
  ],
  principles: [
    {
      title: 'Heritage First',
      body: 'Preserving the authentic flavours of Bangladeshi cuisine with utmost respect.',
    },
    {
      title: 'Modern Refinement',
      body: 'Elegant plating and contemporary techniques to elevate every dish.',
    },
    {
      title: 'Seasonal Ingredients',
      body: 'Sourcing the finest local ingredients to ensure peak freshness and flavour.',
    },
    {
      title: 'Unhurried Hospitality',
      body: 'Every meal is crafted and served with intention, warmth and care.',
    },
  ],
} as const;
