export const BEAUTY_CATEGORIES = [
  "Makeup",
  "Skin Care",
  "Fragrance",
  "Hair Care",
  "Body Care",
  "Eye Care",
  "Nail Care",
  "Tools & Accessories",
  "Sun Care",
  "Other",
] as const;

export type BeautyCategory = (typeof BEAUTY_CATEGORIES)[number];

export function categoryToSlug(cat: string): string {
  return cat.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function slugToCategory(slug: string): BeautyCategory | undefined {
  return BEAUTY_CATEGORIES.find((c) => categoryToSlug(c) === slug);
}
