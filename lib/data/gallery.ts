export type GalleryCategory = 'Interiors' | 'Cuisine' | 'Dhaka';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  span?: 'tall' | 'wide';
}

/**
 * Demonstration gallery. Images are royalty-free stock chosen to represent the
 * EMBER atmosphere; swap for commissioned photography at launch.
 */
export const galleryImages: GalleryImage[] = [
  {
    id: 'biryani',
    src: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Kacchi_Biryani.jpg',
    alt: 'Kacchi Biryani — EMBER signature dish',
    category: 'Cuisine',
    span: 'wide',
  },
  {
    id: 'interior-1',
    src: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Interior_decoration_of_a_restaurant_in_Dhaka.jpg',
    alt: 'Contemporary Bangladeshi restaurant interior at EMBER',
    category: 'Interiors',
    span: 'tall',
  },
  {
    id: 'biryani-2',
    src: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Kacchi_Biryani_Homemade1.jpg',
    alt: 'Plated premium Bangladeshi biryani at EMBER',
    category: 'Cuisine',
  },
  {
    id: 'borhani',
    src: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Kacchi_Biryani_and_Borhani.jpg',
    alt: 'House-made Borhani served in elegant glassware',
    category: 'Cuisine',
    span: 'tall',
  },
  {
    id: 'interior-2',
    src: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Interior_decoration_of_a_chinese_restaurant_in_Dhaka.jpeg',
    alt: 'Modern dining ambience at EMBER, Dhaka',
    category: 'Interiors',
  },
  {
    id: 'shorshe-ilish',
    src: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Shorshe_Ilish_Maach.jpg',
    alt: 'Shorshe Ilish — classic Bengali delicacy',
    category: 'Cuisine',
    span: 'wide',
  },
  {
    id: 'bhuna-khichuri',
    src: 'https://live.staticflickr.com/6080/6109603275_f43b368c86_b.jpg',
    alt: 'Signature Bhuna Khichuri — smoky and rich',
    category: 'Cuisine',
  },
  {
    id: 'mishti-doi',
    src: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Mishti_doi_%28Mitha_Dahi%29.jpg',
    alt: 'Mishti Doi — traditional Bengali dessert',
    category: 'Cuisine',
    span: 'tall',
  },
  {
    id: 'dhaka-street',
    src: 'https://live.staticflickr.com/3279/2514677329_48959c6c04_b.jpg',
    alt: 'Dhaka cityscape — modern urban energy',
    category: 'Dhaka',
  },
];

export const galleryCategories: GalleryCategory[] = ['Interiors', 'Cuisine', 'Dhaka'];
