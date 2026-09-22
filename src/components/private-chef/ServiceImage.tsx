import type { ImgHTMLAttributes } from 'react'
import { chefImage, chefImageKey, chefImageSrcSet, chefImages, type ChefImageKey } from '@/content/privateChefDesign'

export default function ServiceImage({ src, alt, imageKey, className = '', style, sizes = '(min-width: 1024px) 50vw, 100vw', loading = 'lazy', ...rest }: ImgHTMLAttributes<HTMLImageElement> & { imageKey?: ChefImageKey }) {
  const key = src?.startsWith('/images/blog/') ? undefined : imageKey || chefImageKey(src)
  if (!key) return <img src={src} alt={alt ?? ''} className={className} style={style} loading={loading} {...rest} />
  return <span className={`pc-image ${className}`} style={style}>
    <picture>
      <source type="image/webp" srcSet={chefImageSrcSet(key)} sizes={sizes} />
      <img {...rest} src={chefImage(key)} alt={chefImages[key].alt} width={1536} height={1024} sizes={sizes}
        srcSet={chefImageSrcSet(key)} loading={loading} decoding="async" style={{ objectPosition: chefImages[key].position }} />
    </picture>
  </span>
}
