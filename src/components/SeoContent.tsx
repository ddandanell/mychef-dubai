import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLocation } from 'react-router'
import { getSeoContent, hasSeoContent, FULLPAGE_ROUTES, SKIP_SEO_BODY_ROUTES, type SeoPage } from '../content/seo'

interface RenderedBlock {
  heading: string
  paragraphs: string[]
}

declare global {
  interface Window {
    __SEO__?: { path: string; data: SeoPage }
  }
}

/**
 * The prerender inlines this route's SEO payload as `window.__SEO__` (see
 * scripts/prerender.ts). Reading it synchronously lets the first client render
 * match the prerendered HTML, so hydrateRoot adopts the copy instead of
 * clearing it and refetching (which would flash/rebuild the bottom of the page).
 */
function readInlineSeo(pathname: string): SeoPage | null {
  if (typeof window === 'undefined') return null
  const inline = window.__SEO__
  return inline && inline.path === pathname ? inline.data : null
}

/**
 * Appends the researched SEO copy (opening paragraph, reworded blocks and approved
 * new blocks) to the bottom of a page's main content as ONE compact digest: a sticky
 * contents rail plus native <details> blocks (first open). All text stays in the DOM
 * for crawlers; the reader gets a scannable index instead of a wall of sections.
 * Headings remain <h3> so every page's <h2> structure is untouched.
 */
export default function SeoContent() {
  const { pathname } = useLocation()
  // Seed from the inlined payload so the hydration render matches the prerendered
  // DOM. Guarded by the same eligibility check used below (FULLPAGE routes are
  // owned by HandoffPage, so SeoContent must render nothing for them).
  const [data, setData] = useState<SeoPage | null>(() =>
    hasSeoContent(pathname) && !FULLPAGE_ROUTES.has(pathname) && !SKIP_SEO_BODY_ROUTES.has(pathname)
      ? readInlineSeo(pathname)
      : null,
  )
  const [active, setActive] = useState(0)
  const firstRun = useRef(true)

  useEffect(() => {
    let active = true
    // On the initial route we already hold the inlined copy — keep it, don't
    // blank and refetch (that would rebuild the section right after hydration).
    if (firstRun.current) {
      firstRun.current = false
      if (readInlineSeo(pathname)) return
    }
    setData(null)
    setActive(0)
    if (!hasSeoContent(pathname) || FULLPAGE_ROUTES.has(pathname) || SKIP_SEO_BODY_ROUTES.has(pathname)) return
    getSeoContent(pathname).then((loaded) => {
      if (active) setData(loaded)
    })
    return () => {
      active = false
    }
  }, [pathname])


  const blocks: RenderedBlock[] = useMemo(() => {
    if (!data) return []
    return [
      ...(data.replace_in_block ?? []).map((b) => ({ heading: b.new_heading, paragraphs: b.new_paragraphs })),
      ...(data.add_block ?? []).map((b) => ({ heading: b.new_heading, paragraphs: b.new_paragraphs })),
    ].filter((b) => Boolean(b.heading) && Array.isArray(b.paragraphs) && b.paragraphs.length > 0)
  }, [data])

  if (!data) return null

  const opening = data.opening_paragraph?.[0]
  if (!opening && blocks.length === 0) return null

  const slug = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  const total = blocks.length
  const num = (i: number) => String(i + 1).padStart(2, '0')

  return (
    <div className="seo-content">
      <section className="bg-cream section-padding" aria-labelledby="seo-details-lead">
        <div className="container-custom">

          {/* Lead reads at full measure instead of being squeezed into a rail. */}
          <div className="max-w-[62ch] border-t border-gold/30 pt-8">
            <p className="mb-4 font-inter text-caption font-medium uppercase tracking-[0.14em] text-gold-ink">
              The details
            </p>
            {opening && (
              <p id="seo-details-lead" className="font-playfair text-[clamp(20px,2.1vw,27px)] leading-[1.45] text-black">
                {opening}
              </p>
            )}
          </div>

          {total > 0 && (
            <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[minmax(0,272px)_minmax(0,1fr)] lg:gap-14">

              {/* Desktop navigation. Compact, so a 22-section page stays a list
                  instead of becoming a second wall of headings. */}
              <nav aria-label="On this page" className="hidden lg:block">
                <div className="lg:sticky lg:top-28">
                  <p className="mb-4 font-inter text-[11px] font-medium uppercase tracking-[0.16em] text-gray-400">
                    {total} sections
                  </p>
                  <ol className="max-h-[62vh] overflow-y-auto pr-2">
                    {blocks.map((block, i) => {
                      const on = i === active
                      return (
                        <li key={`nav-${i}`}>
                          <button
                            type="button"
                            onClick={() => setActive(i)}
                            aria-current={on ? 'true' : undefined}
                            className={cn(
                              'flex w-full items-baseline gap-3 border-l-2 py-2 pl-3 pr-2 text-left transition-colors',
                              on
                                ? 'border-gold text-black'
                                : 'border-transparent text-gray-500 hover:border-gold/40 hover:text-black',
                            )}
                          >
                            <span className={cn('font-playfair text-[13px] tabular-nums', on ? 'text-gold-ink' : 'text-gray-300')}>
                              {num(i)}
                            </span>
                            <span className="font-inter text-[14px] leading-snug">{block.heading}</span>
                          </button>
                        </li>
                      )
                    })}
                  </ol>
                </div>
              </nav>

              <div className="min-w-0">
                {blocks.map((block, i) => {
                  const on = i === active
                  return (
                    <article key={`sec-${i}`} id={`seo-${slug(block.heading)}`} className="scroll-mt-28">
                      {/* Mobile: each section keeps its place in the order and
                          opens where it sits. Desktop hides these rows and the
                          rail does the navigating. */}
                      <button
                        type="button"
                        onClick={() => setActive(on ? -1 : i)}
                        aria-expanded={on}
                        aria-controls={`seo-body-${i}`}
                        className="flex w-full items-baseline justify-between gap-4 border-t border-gray-200 py-4 text-left lg:hidden"
                      >
                        <span className={cn('font-playfair text-h4', on ? 'text-black' : 'text-gray-500')}>
                          {block.heading}
                        </span>
                        <span className="font-playfair text-[13px] tabular-nums text-gray-300">{num(i)}</span>
                      </button>

                      {on && (
                        <div className="hidden items-baseline gap-4 lg:flex">
                          <span aria-hidden className="font-playfair text-[44px] leading-none text-gold/25 tabular-nums">
                            {num(i)}
                          </span>
                          <h3 className="font-playfair text-[clamp(22px,2.3vw,30px)] leading-tight text-black">
                            {block.heading}
                          </h3>
                        </div>
                      )}

                      {/* Closed sections stay in the DOM, so the copy is still in
                          the HTML source for crawlers. */}
                      <div
                        id={`seo-body-${i}`}
                        className={cn('max-w-[68ch] pb-8 pt-5 lg:pt-7', on ? 'block' : 'hidden')}
                      >
                        {block.paragraphs.map((para, pi) => (
                          <p
                            key={pi}
                            className={cn(
                              'font-inter text-gray-600 leading-relaxed mb-4 last:mb-0',
                              pi === 0 ? 'text-[17px]' : 'text-body',
                            )}
                          >
                            {para}
                          </p>
                        ))}
                      </div>
                    </article>
                  )
                })}

                {/* Turns a stack of disclosures into something you move through. */}
                {total > 1 && (
                  <div className="hidden items-center justify-between border-t border-gray-200 pt-5 lg:flex">
                    <button
                      type="button"
                      onClick={() => setActive((i) => Math.max(0, i - 1))}
                      disabled={active <= 0}
                      className="group inline-flex items-center gap-2 font-inter text-body-sm text-gray-500 transition-colors hover:text-gold-ink disabled:pointer-events-none disabled:opacity-30"
                    >
                      <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-0.5" aria-hidden />
                      Previous
                    </button>
                    <span className="font-inter text-[12px] tracking-[0.14em] text-gray-400 tabular-nums">
                      {num(Math.max(active, 0))} / {num(total - 1)}
                    </span>
                    <button
                      type="button"
                      onClick={() => setActive((i) => Math.min(total - 1, i + 1))}
                      disabled={active >= total - 1}
                      className="group inline-flex items-center gap-2 font-inter text-body-sm text-gray-500 transition-colors hover:text-gold-ink disabled:pointer-events-none disabled:opacity-30"
                    >
                      Next
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
