import { useRef } from 'react'
import { Link, useLocation } from 'react-router'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import { WORK_CATEGORIES, type WorkPhoto } from '@/content/previousWork'
import { trackEvent } from '@/lib/analytics'

export default function WorkLightbox({ photos, photo, onChange, onClose }: { photos: WorkPhoto[]; photo: WorkPhoto | null; onChange: (photo: WorkPhoto) => void; onClose: () => void }) {
  const { pathname } = useLocation()
  const focusReturn = useRef<HTMLElement | null>(null)
  const closeButton = useRef<HTMLButtonElement | null>(null)
  const index = photo ? photos.findIndex(item => item.id === photo.id) : -1
  const move = (direction: number) => {
    if (photos.length < 2) return
    const next = photos[(index + direction + photos.length) % photos.length]
    trackEvent('previous_work_photo_view', { photo_id: next.id, page_path: pathname, source: 'lightbox' })
    onChange(next)
  }
  return <Dialog.Root open={Boolean(photo)} onOpenChange={open => { if (!open) onClose() }}>
    <Dialog.Portal><Dialog.Overlay className="pw-lightbox-overlay" />
      <Dialog.Content className="pw-lightbox" onOpenAutoFocus={event => { focusReturn.current = document.activeElement as HTMLElement; event.preventDefault(); closeButton.current?.focus() }} onCloseAutoFocus={event => { event.preventDefault(); focusReturn.current?.focus() }} onKeyDown={event => {
        if (event.key === 'ArrowRight') { event.preventDefault(); move(1) }
        if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1) }
      }}>
        {photo && <>
          <div className="pw-lightbox-top"><span>{WORK_CATEGORIES[photo.category]} · {index + 1} / {photos.length}</span><Dialog.Close ref={closeButton} className="pw-icon-button" data-work-close aria-label="Close photo"><X size={22} /></Dialog.Close></div>
          <div className="pw-lightbox-stage"><img src={photo.src} width={photo.width} height={photo.height} alt={photo.alt} decoding="async" />{photos.length > 1 && <><button className="pw-icon-button pw-prev" aria-label="Previous photo" onClick={() => move(-1)}><ArrowLeft size={22} /></button><button className="pw-icon-button pw-next" aria-label="Next photo" onClick={() => move(1)}><ArrowRight size={22} /></button></>}</div>
          <div className="pw-lightbox-copy"><Dialog.Title>{photo.title}</Dialog.Title><Dialog.Description>From our previous myCHEF work. The menu, staffing and any table styling for your booking are agreed in your written proposal.</Dialog.Description><div className="pw-lightbox-bottom"><div className="pw-card-tags">{photo.tags.map(tag => <span key={tag}>{tag}</span>)}</div><Dialog.Close asChild><Link className="pw-text-link" to={photo.serviceHref} data-track="service_card" data-cta-location="previous-work-lightbox">{photo.serviceLabel}<ArrowRight size={17} /></Link></Dialog.Close></div></div>
        </>}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
}
