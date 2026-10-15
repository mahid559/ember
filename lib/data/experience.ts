import { IMAGES } from '@/lib/images';

export interface ExperienceFeature {
  title: string;
  body: string;
}

/** The EMBER dining experience — atmosphere and hospitality. */
export const experience = {
  features: [
    {
      title: 'Modern Bangladeshi Cuisine',
      body: 'Reimagined classics — Kacchi Biryani, Morog Polao, Shorshe Ilish — with refined presentation.',
    },
    {
      title: 'Elegant Ambience',
      body: 'Contemporary Dhaka interior with warm lighting, premium seating, and sophisticated table settings.',
    },
    {
      title: 'Warm Hospitality',
      body: 'Attentive, discreet service tailored for family dinners, business lunches, and celebrations.',
    },
    {
      title: 'Celebrations & Groups',
      body: 'Perfect for birthdays, anniversaries, corporate dinners, and special occasions in Dhaka.',
    },
  ] as ExperienceFeature[],
  images: IMAGES.experience,
  heroText: 'A contemporary Bangladeshi dining destination in Dhaka, blending heritage with international hospitality.',
} as const;
