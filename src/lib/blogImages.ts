import media from '@/content/blogMedia.json'

/** Responsive derivatives are published alongside each local blog master. */
export function blogImageSrcSet(src?: string) {
  const width = src ? (media.widths as Record<string, number>)[src] || 1536 : 1536
  return src?.startsWith('/images/blog-2026/')
    ? [480, 800, 1200].filter(size => size < width).map(size => `${src.replace('.webp', `-${size}.webp`)} ${size}w`).join(', ') + `, ${src} ${width}w`
    : undefined
}
