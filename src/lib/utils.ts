import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

/**
 * Custom font-size keys from tailwind.config.js. Without registering them,
 * tailwind-merge treats `text-fluid-h2` / `text-caption` as text COLOURS and
 * drops them whenever a colour class (`text-black`) follows in the same cn().
 */
const BRAND_FONT_SIZES = [
  "display",
  "display-mobile",
  "h1",
  "h2",
  "h3",
  "h4",
  "body",
  "body-lg",
  "body-sm",
  "caption",
  "nav",
  "button",
  "fluid-display",
  "fluid-h1",
  "fluid-h2",
  "fluid-h3",
]

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: BRAND_FONT_SIZES }],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
