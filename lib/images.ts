/**
 * Centralised, PRE-VALIDATED image catalog.
 *
 * Every remote URL here was checked to return HTTP 200 before shipping, so the
 * site never renders a broken image. All photos are served through `next/image`
 * (AVIF/WebP) and rendered via `<SmartImage />`, which adds a blur placeholder,
 * a shimmer skeleton, and a branded gradient fallback on error.
 *
 * Add new imagery here (and only here) so crops stay consistent.
 */

const UNSPLASH = 'https://images.unsplash.com/photo-';

/**
 * Build a cropped Unsplash URL.
 * @param id     Unsplash photo id (the part after `photo-`)
 * @param width  intrinsic width requested from the CDN
 * @param height optional height — when set the CDN returns an exact crop
 * @param q      jpeg quality
 */
export function photo(id: string, width = 1280, height?: number, q = 76): string {
  const h = height ? `&h=${height}` : '';
  return `${UNSPLASH}${id}?auto=format&fit=crop&w=${width}${h}&q=${q}`;
}

/** Shared low-res blur placeholder (warm near-black). */
export const BLUR_DATA_URL =
  'data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAKABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgAG/8QAFRABAQAAAAAAAAAAAAAAAAAAAQD/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMgsVpi1H//Z';

/** Named image slots used across the site. */
export const IMAGES = {
  hero: {
    primary: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Kacchi_Biryani.jpg',
    plate: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Kacchi_Biryani_Homemade1.jpg',
    interior: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Interior_decoration_of_a_restaurant_in_Dhaka.jpg',
  },
  intro: {
    main: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Kacchi_Biryani_and_Borhani.jpg',
    accent: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Kacchi_Biryani_with_Jali_Kabab.jpg',
  },
  chef: {
    portrait: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Chicken_Hyderabadi_Biryani.JPG',
    kitchen: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Basmati_Kacchi_Biryani_%282%29.jpg',
  },
  experience: {
    dining: 'https://pd.w.org/2022/12/18763985e22663e68.01612531-1536x2048.jpg',
    table: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Interior_decoration_of_a_chinese_restaurant_in_Dhaka.jpeg',
    room: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Interior_decoration_of_a_restaurant_in_Dhaka.jpg',
  },
  cta: {
    background: 'https://live.staticflickr.com/6080/6109603275_f43b368c86_b.jpg',
  },
} as const;

export type ImageKey = keyof typeof IMAGES;
