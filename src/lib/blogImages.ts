import media from '@/content/blogMedia.json'

/** Dimensions measured from the published image files, used to reserve space. */
export function blogImageDimensions(src: string) {
  return (media.dimensions as Record<string, { width: number; height: number }>)[src]
}

/** Responsive derivatives are published alongside each local blog master. */
export function blogImageSrcSet(src?: string) {
  const curated = src ? (media.srcsets as Record<string, string>)[src] : undefined
  if (curated) return curated
  const width = src ? (media.widths as Record<string, number>)[src] || 1536 : 1536
  return src?.startsWith('/images/blog-2026/')
    ? [480, 800, 1200].filter(size => size < width).map(size => `${src.replace('.webp', `-${size}.webp`)} ${size}w`).join(', ') + `, ${src} ${width}w`
    : undefined
}
