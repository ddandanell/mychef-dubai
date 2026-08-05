import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router'
import { getSeoContent, hasSeoContent, FULLPAGE_ROUTES, type SeoPage } from '../content/seo'

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
 * new blocks) to the bottom of a page's main content. Text only — it reuses the
 * page's existing design tokens (section-padding, container-custom, font + colour
 * classes) and never adds an image, component or new styling. Headings use <h3> so
 * the original <h2> structure of every page is left completely untouched.
 */
export default function SeoContent() {
  const { pathname } = useLocation()
  // Seed from the inlined payload so the hydration render matches the prerendered
  // DOM. Guarded by the same eligibility check used below (FULLPAGE routes are
  // owned by HandoffPage, so SeoContent must render nothing for them).
  const [data, setData] = useState<SeoPage | null>(() =>
    hasSeoContent(pathname) && !FULLPAGE_ROUTES.has(pathname) ? readInlineSeo(pathname) : null,
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
    if (!hasSeoContent(pathname) || FULLPAGE_ROUTES.has(pathname)) return
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

  return (
    <div className="seo-content">
      {opening && (
        <section className="bg-cream section-padding">
          <div className="container-custom max-w-[820px]">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">{opening}</p>
          </div>
        </section>
      )}

      {blocks.map((block, bi) => (
        <section
          key={`${block.heading}-${bi}`}
          className={bi % 2 === 0 ? 'bg-white section-padding' : 'bg-cream section-padding'}
        >
          <div className="container-custom max-w-[820px]">
            <h3 className="font-playfair text-h2 text-black mb-6">{block.heading}</h3>
            {block.paragraphs.map((p, i) => (
              <p key={i} className="font-inter text-body-lg text-gray-500 leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
