import { cx } from "cva";

// Dark backgrounds for light content
const dark: Record<string, string> = {
  "Solid brand-blue 700 (#0E247E)": "bg-brand-700",
  "Solid brand-blue 800 (#061157)": "bg-brand-800",
  "Solid brand-blue 900 (#010533)": "bg-brand-900",
  "Horizontal gradient from brand-blue 900 (#010533) to brand-blue 700 (#0E247E)":
    "gradient-brand-h-dark-to-light",
  "Horizontal gradient from brand-blue 700 (#0E247E) to brand-blue 900 (#010533)":
    "gradient-brand-h-light-to-dark",
  "Vertical gradient from brand-blue 900 (#010533) to brand-blue 700 (#0E247E)":
    "gradient-brand-v-dark-to-light",
  "Vertical gradient from brand-blue 700 (#0E247E) to brand-blue 900 (#010533)":
    "gradient-brand-v-light-to-dark",
  "Vertical gradient from brand-blue 900 (#010533) to brand-blue 800 (#061157)":
    "gradient-brand-v-darker-to-dark",
  "Vertical gradient from brand-blue 800 (#061157) to brand-blue 900 (#010533)":
    "gradient-brand-v-dark-to-darker",
  "Horizontal gradient from gold-dark (#6A4406) to new-gold (#EDAE49)":
    "gradient-gold-h-dark-to-light",
};
// Light backgrounds for dark content
const light: Record<string, string> = {
  "Solid white (#FFFFFF)": "bg-white",
  "Solid white (#FFFFFF) with large background chevron": cx(
    "bg-white relative overflow-hidden [&>*]:relative [&>*]:z-10",
    "max-dsk:before:hidden before:content-[''] before:size-[1000px] before:bg-brand-300/5 before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-[750px] before:aspect-square before:rotate-45",
    "max-dsk:after:hidden after:content-[''] after:size-[1000px] after:bg-white after:absolute after:top-1/2 after:-translate-y-1/2 after:-left-[1100px] after:aspect-square after:rotate-45",
  ),
  "Diagonal gradient from neutral 100 (#EFEFF3) to white (#FFFFFF)":
    "gradient-primary-gray",
  "Horizontal gradient from white (#FFFFFF) to neutral 100 (#EFEFF3)":
    "gradient-primary-gray-h-light-to-dark",
  "Horizontal gradient from neutral 100 (#EFEFF3) to white (#FFFFFF)":
    "gradient-primary-gray-h-dark-to-light",
  "Horizontal gradient from white (#FFFFFF) to neutral 50 (#F7F7F8)":
    "gradient-secondary-gray-h-light-to-dark",
  "Horizontal gradient from neutral 50 (#F7F7F8) to white (#FFFFFF)":
    "gradient-secondary-gray-h-dark-to-light",
  "Vertical gradient from white (#FFFFFF) to neutral 50 (#F7F7F8)":
    "gradient-secondary-gray-v-light-to-dark",
  "Vertical gradient from neutral 50 (#F7F7F8) to white (#FFFFFF)":
    "gradient-secondary-gray-v-dark-to-light",
  "Vertical gradient from neutral 100 (#EFEFF3) to neutral 50 (#F7F7F8)":
    "gradient-tertiary-gray",
};

export const backgroundDescriptionMapToClass = {
  dark,
  light,
  all: { ...dark, ...light },
  resolveClass(moduleBackground: string | null): string | null {
    if (!moduleBackground) return null;
    return this.all[moduleBackground] ?? null;
  },
} as const;
