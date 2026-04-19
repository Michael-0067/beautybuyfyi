export const VACUUM_CATEGORIES = [
  "Robot Vacuums",
  "Upright Vacuums",
  "Canister Vacuums",
  "Stick Vacuums",
  "Handheld Vacuums",
  "Wet-Dry Vacuums",
  "Central Vacuum Systems",
  "Backpack Vacuums",
  "Vacuum Accessories",
  "Other",
] as const;

export type VacuumCategory = (typeof VACUUM_CATEGORIES)[number];

export function categoryToSlug(cat: string): string {
  return cat.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function slugToCategory(slug: string): VacuumCategory | undefined {
  return VACUUM_CATEGORIES.find((c) => categoryToSlug(c) === slug);
}
