import { useEffect, useState } from 'react'

// Headings that are not real article sections (FAQ block, CTA, etc.).
const SKIP = /frequently asked|get your|book (a|your)|plan it with|ready to|related reading/i

interface TocItem {
  id: string
  text: string
}

/**
 * Auto Table of Contents for the hand-built (.tsx) blog posts. Reads the article's
 * H2 headings after mount, assigns stable ids (for #anchor links) plus scroll-margin,
 * and renders a linked list. The prerenderer runs this effect in a real browser, so
 * the ToC and the heading ids are captured in the static HTML (View Page Source).
 */
export default function ArticleToc({ minItems = 4 }: { minItems?: number }) {
  const [items, setItems] = useState<TocItem[]>([])

  useEffect(() => {
    // Read the ids rendered into the H2s (set in each post's JSX), so the anchor
    // links always resolve and nothing is mutated outside React.
    const headings = Array.from(document.querySelectorAll('article h2[id]')) as HTMLElement[]
    const list = headings
      .map((h) => ({ id: h.id, text: (h.textContent || '').trim() }))
      .filter((it) => it.id && it.text && !SKIP.test(it.text))
    setItems(list)
  }, [])

  if (items.length < minItems) return null

  return (
    <nav aria-label="Table of contents" className="mb-12 rounded-2xl border border-gray-200 bg-cream p-6">
      <span className="font-inter text-caption uppercase tracking-wider text-gold mb-4 block">
        On this page
      </span>
      <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-2 list-none">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="font-inter text-body-sm text-gray-600 hover:text-gold transition-colors"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
