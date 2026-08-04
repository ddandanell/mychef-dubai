import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { getSeoContent, hasSeoContent, type SeoPage } from '../content/seo'

interface RenderedBlock {
  heading: string
  paragraphs: string[]
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
  const [data, setData] = useState<SeoPage | null>(null)

  useEffect(() => {
    let active = true
    setData(null)
    if (!hasSeoContent(pathname)) return
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
