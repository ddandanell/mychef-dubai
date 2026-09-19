import { useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import {
  Section,
  Container,
  SectionLabel,
  DisplayHeading,
  BodyCopy,
} from '../system'
import { YACHT_WORK, YACHT_WORK_PHOTOS } from '@/content/yachtPage'

const PHOTOS = YACHT_WORK_PHOTOS

export default function YachtWorkGallery() {
  const [active, setActive] = useState(0)
  const [open, setOpen] = useState(false)
  const titleId = useId()
  const photo = PHOTOS[active]
  const count = PHOTOS.length

  const go = (next: number) => {
    setActive((next + count) % count)
  }

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
      if (event.key === 'ArrowRight') setActive((index) => (index + 1) % count)
      if (event.key === 'ArrowLeft') setActive((index) => (index - 1 + count) % count)
    }
    window.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [open, count])

  return (
    <Section id="previous-work" tone="ivory" rhythm="chapter">
      <Container>
        <SectionLabel>{YACHT_WORK.label}</SectionLabel>
        <DisplayHeading className="text-[#1B2A4A] mb-4">{YACHT_WORK.h2}</DisplayHeading>
        <BodyCopy className="mb-10 max-w-[62ch]">{YACHT_WORK.intro}</BodyCopy>

        <div className="grid sm:grid-cols-3 gap-6 md:gap-8 mb-10">
          {YACHT_WORK.how.map((item) => (
            <article key={item.title}>
              <h3 className="font-playfair text-h4 text-[#1B2A4A] mb-2">{item.title}</h3>
              <p className="font-inter text-body-sm text-gray-600 leading-relaxed">{item.body}</p>
            </article>
          ))}
        </div>

        <div className="max-w-3xl">
          <figure className="overflow-hidden bg-gray-100">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="group relative block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-label={`Open larger view: ${photo.caption}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                width={1280}
                height={800}
                loading="lazy"
                decoding="async"
                className="w-full aspect-[16/10] object-cover"
              />
              <span className="absolute bottom-3 right-3 font-inter text-caption uppercase tracking-[0.1em] bg-black/55 text-white px-2.5 py-1">
                Open
              </span>
            </button>
            <figcaption className="flex items-center justify-between gap-4 pt-3">
              <span className="font-inter text-body-sm text-gray-600">{photo.caption}</span>
              <span className="font-inter text-body-xs text-gray-500 tabular-nums">
                {active + 1} / {count}
              </span>
            </figcaption>
          </figure>

          <div className="mt-3 flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(active - 1)}
              className="inline-flex h-9 w-9 items-center justify-center border border-[#1B2A4A]/20 text-[#1B2A4A] hover:border-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-label="Previous photograph"
            >
              <ChevronLeft size={18} aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => go(active + 1)}
              className="inline-flex h-9 w-9 items-center justify-center border border-[#1B2A4A]/20 text-[#1B2A4A] hover:border-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-label="Next photograph"
            >
              <ChevronRight size={18} aria-hidden />
            </button>
          </div>

          <ul className="mt-4 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 gap-1.5" aria-label="Yacht catering photographs">
            {PHOTOS.map((item, index) => {
              const selected = index === active
              return (
                <li key={item.src}>
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    aria-current={selected ? 'true' : undefined}
                    aria-label={`Show ${item.caption}`}
                    className={`block w-full overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                      selected ? 'ring-2 ring-gold' : 'ring-1 ring-black/10 hover:ring-gold/60'
                    }`}
                  >
                    <img
                      src={item.src}
                      alt=""
                      width={240}
                      height={240}
                      loading="lazy"
                      decoding="async"
                      className="aspect-square w-full object-cover bg-gray-200"
                    />
                  </button>
                </li>
              )
            })}
          </ul>
        </div>

        <p className="mt-6 font-inter text-body-xs text-gray-500 max-w-[62ch]">{YACHT_WORK.note}</p>
        <p className="mt-4">
          <a
            href="#yacht-quote"
            className="font-inter text-body-sm text-gold-ink underline underline-offset-4 hover:text-gold"
            data-track="inquiry_form"
            data-cta-location="previous-work"
          >
            {YACHT_WORK.cta}
          </a>
        </p>
      </Container>

      {open && photo
        ? createPortal(
        <div
          className="fixed inset-0 z-[200] bg-black flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center text-white border border-white/30 hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label="Close photograph"
          >
            <X size={18} aria-hidden />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              go(active - 1)
            }}
            className="absolute left-3 md:left-6 inline-flex h-10 w-10 items-center justify-center text-white border border-white/30 hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label="Previous photograph"
          >
            <ChevronLeft size={20} aria-hidden />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              go(active + 1)
            }}
            className="absolute right-3 md:right-6 inline-flex h-10 w-10 items-center justify-center text-white border border-white/30 hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label="Next photograph"
          >
            <ChevronRight size={20} aria-hidden />
          </button>
          <figure
            className="max-w-5xl w-full"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="max-h-[78vh] w-full object-contain"
            />
            <figcaption id={titleId} className="mt-3 text-center font-inter text-body-sm text-white/80">
              {photo.caption}
              <span className="text-white/50"> · {active + 1} / {count}</span>
            </figcaption>
          </figure>
        </div>,
            document.body,
          )
        : null}
    </Section>
  )
}
