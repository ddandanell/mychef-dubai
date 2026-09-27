// These files previously returned an empty 200 response with a 30-day cache.
// Version their URLs so returning visitors download the restored image bytes.
const restoredImages = new Set([
  '/images/private-chef-2026/meal-prep-1200.webp',
  '/images/private-chef-2026/villa-evening-1200.webp',
  '/images/private-chef-2026/craft-1536.webp',
  '/images/private-chef-2026/dessert-480.webp',
  '/images/private-chef-guides-2026/fresh-meal-prep-1536.webp',
])

export function imageAssetUrl(src: string): string {
  return restoredImages.has(src) ? `${src}?v=20260927` : src
}
