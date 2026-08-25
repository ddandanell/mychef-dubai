import { useEffect, useId, useState, type ReactNode } from 'react'
import { Link, useLocation } from 'react-router'

export interface FaqItem {
  q: string
  /** Plain text, optionally with markdown-style links: "see our [prices](/private-chef-prices-dubai)". */
  a: string
}

interface FaqAccordionProps {
  items: FaqItem[]
  /** Index open on first paint (default: first). Pass -1 for all closed. */
  defaultOpen?: number
  /** Render a "Jump to" list of anchor links above the accordion (Step 5). */
  showJumpNav?: boolean
  className?: string
}

/** Stable, readable anchor id from a question (Step 6). */
function slugify(q: string): string {
  return q
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 60)
}

/** Render an answer, turning [text](/path) into internal links and [text](https://…) into external ones (Step 7). */
function renderAnswer(a: string): ReactNode {
  const parts: ReactNode[] = []
  const re = /\[([^\]]+)\]\(([^)]+)\)/g
  let last = 0
  let m: RegExpExecArray | null
  let k = 0
  while ((m = re.exec(a)) !== null) {
    if (m.index > last) parts.push(a.slice(last, m.index))
    const [, text, href] = m
    if (href.startsWith('/')) {
      parts.push(
        <Link key={k++} to={href} className="text-gold-dark underline decoration-gold/40 underline-offset-2 hover:decoration-gold">
          {text}
        </Link>,
      )
    } else {
      parts.push(
        <a key={k++} href={href} target="_blank" rel="noopener noreferrer" className="text-gold-dark underline decoration-gold/40 underline-offset-2 hover:decoration-gold">
          {text}
        </a>,
      )
    }
    last = m.index + m[0].length
  }
  if (last < a.length) parts.push(a.slice(last))
  return parts
}

/**
 * Site-wide FAQ accordion. One cool, on-brand design used everywhere FAQs appear.
 * Accessible (button + region, aria-expanded/controls), animated with a grid-rows
 * reveal, per-question anchor ids for deep-linking + AI citations, optional
 * in-answer internal links, and an optional jump-nav. Mobile + desktop tuned.
 */
export default function FaqAccordion({ items, defaultOpen = 0, showJumpNav = false, className = '' }: FaqAccordionProps) {
  const [open, setOpen] = useState<number>(defaultOpen)
  const baseId = useId()
  const { hash } = useLocation()

  const slugs = items ? items.map((it) => slugify(it.q)) : []

  // Deep-link: if the URL hash matches a question, open it and scroll to it.
  useEffect(() => {
    if (!hash) return
    const target = hash.replace(/^#/, '')
    const i = slugs.indexOf(target)
    if (i >= 0) {
      setOpen(i)
      const el = document.getElementById(target)
      if (el) el.scrollIntoView({ block: 'center' })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash])

  if (!items || items.length === 0) return null

  return (
    <div className={className}>
      {showJumpNav && items.length > 4 && (
        <nav aria-label="Jump to a question" className="mb-8 rounded-2xl border border-black/10 bg-cream/60 p-5">
          <p className="font-inter text-xs font-semibold uppercase tracking-wider text-gold-dark mb-3">Jump to a question</p>
          <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
            {items.map((it, i) => (
              <li key={i}>
                <a
                  href={`#${slugs[i]}`}
                  onClick={() => setOpen(i)}
                  className="font-inter text-sm text-gray-600 hover:text-gold-dark transition-colors"
                >
                  {it.q}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <div className="flex flex-col gap-3">
        {items.map((item, i) => {
          const isOpen = open === i
          const btnId = `${baseId}-btn-${i}`
          const panelId = `${baseId}-panel-${i}`
          return (
            <div
              key={i}
              id={slugs[i]}
              className={`group relative scroll-mt-24 overflow-hidden rounded-2xl border bg-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                ${isOpen
                  ? 'border-gold/60 shadow-[0_10px_40px_-12px_rgba(200,164,92,0.35)]'
                  : 'border-black/10 hover:border-gold/40 hover:shadow-[0_8px_30px_-16px_rgba(0,0,0,0.35)]'}`}
            >
              <span
                aria-hidden="true"
                className={`absolute left-0 top-0 h-full w-[3px] origin-top bg-gold transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
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

                  <span
                    aria-hidden="true"
                    className={`relative flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${isOpen ? 'border-gold bg-gold text-black rotate-45' : 'border-gold/40 text-gold group-hover:border-gold'}`}
                  >
                    <span className="absolute h-[2px] w-3.5 rounded bg-current" />
                    <span className="absolute h-3.5 w-[2px] rounded bg-current" />
                  </span>
                </button>
              </h3>

              <div
                id={panelId}
                role="region"
                aria-labelledby={btnId}
                className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 md:px-6 md:pb-6 font-inter text-[0.9rem] md:text-body-sm leading-relaxed text-gray-500">
                    {renderAnswer(item.a)}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
