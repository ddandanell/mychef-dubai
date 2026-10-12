import { Maximize2 } from 'lucide-react'
import { Link } from 'react-router'
import { WORK_CATEGORIES, workPhotoSrcSet, type WorkPhoto } from '@/content/previousWork'

export default function WorkPhotoCard({ photo, onOpen, compact = false }: { photo: WorkPhoto; onOpen: (photo: WorkPhoto) => void; compact?: boolean }) {
  return <figure className={`pw-card ${compact ? 'pw-card-compact' : ''}`} data-work-photo={photo.id}>
    <button className="pw-photo-button" type="button" onClick={() => onOpen(photo)} aria-label={`Enlarge photo: ${photo.title}`}>
      <img src={photo.thumbnail} srcSet={workPhotoSrcSet(photo)} sizes={compact ? '(min-width: 1000px) 370px, (min-width: 600px) 30vw, 46vw' : '(min-width: 1000px) 370px, (min-width: 600px) 45vw, 92vw'} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" decoding="async" data-work-source={photo.id} />
      <span className="pw-enlarge" aria-hidden="true"><Maximize2 size={16} /></span>
    </button>
    <figcaption><span className="pw-category">{WORK_CATEGORIES[photo.category]}</span><p>{photo.title}</p>{!compact && <><div className="pw-card-tags">{photo.tags.slice(0,3).map(tag => <span key={tag}>{tag}</span>)}</div><Link className="pw-card-service" to={photo.serviceHref} data-track="service_card" data-cta-location="previous-work-photo">{photo.serviceLabel} →</Link></>}</figcaption>
  </figure>
}
