import type { ImgHTMLAttributes } from 'react'
import { workPhotoSrcSet, type WorkPhoto } from '@/content/previousWork'

export default function WorkImage({ photo, sizes = '(min-width: 900px) 50vw, 100vw', ...props }: ImgHTMLAttributes<HTMLImageElement> & { photo: WorkPhoto }) {
  return <img {...props} src={photo.src} srcSet={workPhotoSrcSet(photo)} sizes={sizes} alt={photo.alt} width={photo.width} height={photo.height} decoding="async" data-work-source={photo.id} />
}
