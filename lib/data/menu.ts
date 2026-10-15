import { IMAGES } from '@/lib/images';

export type MenuCategory = 'starters' | 'mains' | 'desserts' | 'drinks';

export type DietaryTag =
  | 'Vegetarian'
  | 'Vegan'
  | 'Gluten-Free'
  | 'Contains Nuts'
  | 'Spicy';

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string;
  tags?: DietaryTag[];
  signature?: boolean;
}

export interface MenuSection {
  id: MenuCategory;
  label: string;
  blurb: string;
}

export const menuCategories: MenuSection[] = [
  {
    id: 'starters',
    label: 'Starters',
    blurb: 'Thoughtfully crafted nibbles to awaken your palate.',
  },
  {
    id: 'mains',
    label: 'Mains',
    blurb: 'Our contemporary take on beloved Bangladeshi classics.',
  },
  {
    id: 'desserts',
    label: 'Desserts & Mishti',
    blurb: 'Sweet endings, modern and traditional alike.',
  },
  {
    id: 'drinks',
    label: 'Drinks & Borhani',
    blurb: 'Refreshing house-made beverages to complement your meal.',
  },
];

export const dishes: Dish[] = [
  /* ---------------------------------- Starters --------------------------------- */
  {
    id: 'kacchi-biryani-lite',
    name: 'Kacchi Biryani (Family Style)',
    description: 'Fragrant basmati layered with spiced mutton, saffron & fried onions — EMBER’s signature.',
    price: 2450,
    category: 'mains',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Kacchi_Biryani.jpg',
    tags: ['Spicy'],
    signature: true,
  },
  {
    id: 'morog-polao',
    name: 'Morog Polao',
    description: 'Classic Bangladeshi chicken pilaf infused with cardamom, cinnamon & bay leaf.',
    price: 1450,
    category: 'mains',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Hyderabadi_egg_biryani.jpg',
    tags: ['Spicy'],
  },
  {
    id: 'beef-tehari',
    name: 'Beef Tehari',
    description: 'Slow-cooked beef tehari with aromatic rice, whole spices & green chilies.',
    price: 1850,
    category: 'mains',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Basmati_Kacchi_Biryani_%282%29.jpg',
    tags: ['Spicy'],
  },
  {
    id: 'bhuna-khichuri',
    name: 'Signature Bhuna Khichuri',
    description: 'Smoky bhuna khichuri with masala — comfort food elevated.',
    price: 1250,
    category: 'mains',
    image: 'https://live.staticflickr.com/6080/6109603275_f43b368c86_b.jpg',
    tags: ['Spicy'],
    signature: true,
  },
  {
    id: 'shorshe-ilish',
    name: 'Shorshe Ilish',
    description: 'Hilsa in mustard gravy — quintessential Bengali delicacy.',
    price: 1950,
    category: 'mains',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Shorshe_Ilish_Maach.jpg',
    tags: ['Spicy'],
  },
  {
    id: 'borhani',
    name: 'House Borhani',
    description: 'Crisp, creamy yogurt drink with mint & roasted cumin.',
    price: 350,
    category: 'drinks',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Kacchi_Biryani_and_Borhani.jpg',
    tags: ['Vegan'],
  },
  {
    id: 'mishti-doi',
    name: 'Mishti Doi',
    description: 'Traditional caramelized yogurt dessert — creamy and subtly sweet.',
    price: 450,
    category: 'desserts',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Mishti_doi_%28Mitha_Dahi%29.jpg',
    tags: ['Vegetarian'],
    signature: true,
  },
];

export const signatureDishes: Dish[] = dishes.filter((dish) => dish.signature);

export function getDishesByCategory(category: MenuCategory): Dish[] {
  return dishes.filter((dish) => dish.category === category);
}
