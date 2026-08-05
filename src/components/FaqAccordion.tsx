import { useId, useState } from 'react'

export interface FaqItem {
  q: string
  a: string
}

interface FaqAccordionProps {
  items: FaqItem[]
  /** Index of the item open on first paint (default: first item). Pass -1 for all closed. */
  defaultOpen?: number
  className?: string
}

/**
 * Site-wide FAQ accordion. One cool, on-brand design used everywhere FAQs appear
 * (service/occasion/dietary pages, the FAQ hub, SEO blocks). Accessible
 * (button + region, aria-expanded/controls), animated with a grid-rows reveal
 * (no magic max-height), and tuned for both mobile and desktop.
 */
export default function FaqAccordion({ items, defaultOpen = 0, className = '' }: FaqAccordionProps) {
  const [open, setOpen] = useState<number>(defaultOpen)
  const baseId = useId()

  if (!items || items.length === 0) return null

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {items.map((item, i) => {
        const isOpen = open === i
        const btnId = `${baseId}-btn-${i}`
        const panelId = `${baseId}-panel-${i}`
        return (
          <div
            key={i}
            className={`group relative overflow-hidden rounded-2xl border bg-white transition-all duration-300
              ${isOpen
                ? 'border-gold/60 shadow-[0_10px_40px_-12px_rgba(200,164,92,0.35)]'
                : 'border-black/10 hover:border-gold/40 hover:shadow-[0_8px_30px_-16px_rgba(0,0,0,0.35)]'}`}
          >
            {/* Gold accent bar that grows when open */}
            <span
              aria-hidden="true"
              className={`absolute left-0 top-0 h-full w-[3px] origin-top bg-gold transition-transform duration-300 ease-out
                ${isOpen ? 'scale-y-100' : 'scale-y-0'}`}
            />

            <h3 className="m-0">
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5
                  min-h-[3.5rem] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset"
              >
                <span
                  className={`font-inter text-[0.95rem] md:text-base font-medium leading-snug transition-colors duration-200
                    ${isOpen ? 'text-gold-dark' : 'text-black group-hover:text-gold-dark'}`}
                >
                  {item.q}
                </span>

                {/* Gold circular +/× toggle */}
                <span
                  aria-hidden="true"
                  className={`relative flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300
                    ${isOpen ? 'border-gold bg-gold text-black rotate-45' : 'border-gold/40 text-gold group-hover:border-gold'}`}
                >
                  <span className="absolute h-[2px] w-3.5 rounded bg-current" />
                  <span className="absolute h-3.5 w-[2px] rounded bg-current" />
                </span>
              </button>
            </h3>

            {/* Answer — grid-rows reveal for smooth height animation without magic numbers */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 md:px-6 md:pb-6 font-inter text-[0.9rem] md:text-body-sm leading-relaxed text-gray-500">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
