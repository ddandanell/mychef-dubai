import { useEffect, useRef, useState } from 'react'
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
    if (!hasSeoContent(pathname) || FULLPAGE_ROUTES.has(pathname) || SKIP_SEO_BODY_ROUTES.has(pathname)) return
    getSeoContent(pathname).then((loaded) => {
      if (active) setData(loaded)
    })
    return () => {
      active = false
    }
  }, [pathname])

  if (!data) return null

  const blocks: RenderedBlock[] = [
    ...(data.replace_in_block ?? []).map((b) => ({ heading: b.new_heading, paragraphs: b.new_paragraphs })),
    ...(data.add_block ?? []).map((b) => ({ heading: b.new_heading, paragraphs: b.new_paragraphs })),
  ].filter((b) => Boolean(b.heading) && Array.isArray(b.paragraphs) && b.paragraphs.length > 0)

  const opening = data.opening_paragraph?.[0]

  if (!opening && blocks.length === 0) return null

  const slug = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

  return (
    <div className="seo-content">
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.36fr)_minmax(0,0.64fr)] lg:gap-16">
            {/* Rail: what this digest covers. Sticky on desktop so the reader keeps their place. */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <p className="font-inter text-caption font-medium uppercase tracking-[0.14em] text-gold-ink mb-4">
                <span aria-hidden className="mr-3 inline-block h-px w-6 bg-current align-middle opacity-70" />
                The details
              </p>
              {opening && (
                <p className="font-inter text-body text-gray-600 leading-relaxed mb-8">{opening}</p>
              )}
              {blocks.length > 1 && (
                <nav aria-label="On this page">
                  <ol className="border-t border-gray-200">
                    {blocks.map((block, bi) => (
                      <li key={`${block.heading}-${bi}`} className="border-b border-gray-200">
                        <a
                          href={`#seo-${slug(block.heading)}`}
                          className="flex items-baseline gap-3 py-2.5 font-inter text-body-sm text-gray-600 hover:text-gold-ink transition-colors"
                        >
                          <span className="font-playfair text-gold-ink select-none">{String(bi + 1).padStart(2, '0')}</span>
                          <span>{block.heading}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}
            </div>

            {/* Blocks: native <details> — indexable, accessible, zero JS. First one open. */}
            <div className="border-t border-gray-200">
              {blocks.map((block, bi) => (
                <details
                  key={`${block.heading}-${bi}`}
                  id={`seo-${slug(block.heading)}`}
                  open={bi === 0}
                  className="group border-b border-gray-200 scroll-mt-24"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                    <h3 className="font-playfair text-h4 text-black group-open:text-gold-ink transition-colors">{block.heading}</h3>
                    <span
                      aria-hidden
                      className="flex h-8 w-8 flex-shrink-0 items-center justify-center border border-gold/35 text-gold-ink transition-transform duration-300 group-open:rotate-45"
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 1v10M1 6h10" /></svg>
                    </span>
                  </summary>
                  <div className="pb-7 max-w-[680px]">
                    {block.paragraphs.map((p, i) => (
                      <p key={i} className="font-inter text-body text-gray-600 leading-relaxed mb-4 last:mb-0">
                        {p}
                      </p>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
