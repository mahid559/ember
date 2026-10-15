export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}

/** Format price in Bangladeshi Taka, e.g. 2450 -> "৳2,450". */
export function formatPrice(value: number): string {
  return new Intl.NumberFormat('en-BD', {
    style: 'currency',
    currency: 'BDT',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

/** Turn a category id into a human label, e.g. "mains" -> "Main Courses". */
export function titleCase(value: string): string {
  return value
    .split(/[\s-_]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
