import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import { previewWorkPhotos, workContextFor, workGalleryHref, type WorkPhoto } from '@/content/previousWork'
import { trackEvent } from '@/lib/analytics'
import WorkPhotoCard from './WorkPhotoCard'
import WorkLightbox from './WorkLightbox'
import '@/styles/previous-work.css'

export default function PreviousWorkPreview() {
  const { pathname } = useLocation()
  const [selected, setSelected] = useState<WorkPhoto | null>(null)
  if (pathname === '/gallery') return null
  const context = workContextFor(pathname)
  const photos = previewWorkPhotos(pathname)
  return <section className="pw-preview" data-previous-work-preview aria-labelledby="pw-preview-heading">
    <div className="pw-wrap"><div className="pw-preview-heading"><div><p className="pw-eyebrow">Previous Work · myCHEF</p><h2 id="pw-preview-heading">{context.title}</h2><p className="pw-intro">{context.intro}</p></div><Link className="pw-text-link" to={workGalleryHref(context)} onClick={() => trackEvent('previous_work_gallery_click', { page_path: pathname, collection: context.collection })}>View Previous Work<ArrowUpRight size={18} /></Link></div>
      <div className="pw-preview-grid">{photos.map(photo => <WorkPhotoCard key={photo.id} photo={photo} compact onOpen={item => { setSelected(item); trackEvent('previous_work_photo_view', { photo_id: item.id, page_path: pathname, source: 'preview' }) }} />)}</div>
      <div className="pw-preview-footer"><p>Photographs from our previous work. Menus, staffing and styling are tailored to each booking.</p><Link className="pw-button" to={workGalleryHref(context)}>Explore the full gallery<ArrowUpRight size={17} /></Link></div>
    </div><WorkLightbox photos={photos} photo={selected} onChange={setSelected} onClose={() => setSelected(null)} />
  </section>
}
