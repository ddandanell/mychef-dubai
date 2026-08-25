import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link, useLocation } from 'react-router'
import { Phone, ArrowRight } from 'lucide-react'
import SEO from './SEO'
import TrustSignalStrip from './TrustSignalStrip'
import BlogRelated from './BlogRelated'
import { getSeoContent, type SeoPage, type SeoImage } from '../content/seo'
import { CONTEXTUAL_LINKS, pillarsFor, getPost } from '../content/blogTaxonomy'
import BlogFigure from './BlogFigure'

const WHATSAPP_LINK = 'https://wa.me/971551744849'
const SITE = 'https://www.mychef.ae'
// Max in-body contextual links per page, so linking stays natural and un-spammy.
const LINK_BUDGET = 8

interface RenderedBlock {
  heading: string
  paragraphs: string[]
}

/** Heading-locked figures first; leftover images keep the old even-spacing so other posts do not move. */
function placeInlineImages(blocks: RenderedBlock[], inlineImages: SeoImage[]): Map<number, SeoImage> {
  const byIndex = new Map<number, SeoImage>()
  if (inlineImages.length === 0 || blocks.length === 0) return byIndex

  const headingIndex = new Map(blocks.map((b, i) => [b.heading, i]))
  const unplaced: SeoImage[] = []

  for (const image of inlineImages) {
    const locked = image.after_heading ? headingIndex.get(image.after_heading) : undefined
    if (locked !== undefined) byIndex.set(locked, image)
    else unplaced.push(image)
  }

  if (unplaced.length === 0) return byIndex

  const step = Math.max(1, Math.floor(blocks.length / (unplaced.length + 1)))
  let used = -1
  unplaced.forEach((image, i) => {
    let pos = Math.min(blocks.length - 1, (i + 1) * step - 1)
    while (pos < blocks.length && (pos <= used || byIndex.has(pos))) pos += 1
    if (pos >= blocks.length) return
    byIndex.set(pos, image)
    used = pos
  })

  return byIndex
}

const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

/** Stable heading id for in-page anchor links (Table of Contents). */
const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60)

// Show a Table of Contents once a post has enough sections to warrant one.
const TOC_MIN_SECTIONS = 4

interface LinkState {
  usedPhrases: Set<string>
  usedUrls: Set<string>
  budget: number
}

/**
 * Turn plain body text into React nodes, linking the FIRST occurrence of each known
 * phrase to its target page. Skips the current page, dedupes by phrase and URL, and
 * respects a page-wide budget so linking reads naturally.
 */
function linkify(text: string, currentPath: string, state: LinkState, keyBase: string): ReactNode[] {
  const nodes: ReactNode[] = []
  let remaining = text
  let part = 0

  while (remaining.length > 0) {
    let best: { index: number; length: number; url: string; phrase: string; matched: string } | null = null

    for (const { phrase, url } of CONTEXTUAL_LINKS) {
      if (state.budget <= 0) break
      if (url === currentPath) continue
      if (state.usedPhrases.has(phrase) || state.usedUrls.has(url)) continue
      const m = new RegExp(`\\b${escapeRegExp(phrase)}\\b`, 'i').exec(remaining)
      if (m && (best === null || m.index < best.index || (m.index === best.index && phrase.length > best.length))) {
        best = { index: m.index, length: phrase.length, url, phrase, matched: m[0] }
      }
    }

    if (!best) {
      nodes.push(remaining)
      break
    }

    if (best.index > 0) nodes.push(remaining.slice(0, best.index))
    nodes.push(
      <Link
        key={`${keyBase}-${part++}`}
        to={best.url}
        className="text-gold underline underline-offset-2 decoration-gold/40 hover:decoration-gold transition-colors"
      >
        {best.matched}
      </Link>,
    )
    state.usedPhrases.add(best.phrase)
    state.usedUrls.add(best.url)
    state.budget -= 1
    remaining = remaining.slice(best.index + best.matched.length)
  }

  return nodes
}

/**
 * The prerender inlines this route's payload as `window.__SEO__` (see
 * scripts/prerender.ts). Reading it synchronously lets the first client render
 * match the prerendered HTML so hydrateRoot adopts it without clearing/rebuilding.
 */
function readInlineSeo(pathname: string): SeoPage | null {
  if (typeof window === 'undefined') return null
  const inline = window.__SEO__
  return inline && inline.path === pathname ? inline.data : null
}

/**
 * Renders a full, on-brand page from the MYCHEF-BLOCK-MAP handoff for routes that have
 * no bespoke component (the David blog set and the best-catering-companies page). Uses
 * existing design tokens plus the blog imagery, contextual internal links, a related
 * module and Article/FAQ schema. Because these routes are in FULLPAGE_ROUTES, the shared
 * SeoContent/SeoHead injectors skip them, so this component owns the whole page.
 */
export default function HandoffPage() {
  const { pathname } = useLocation()
  const [data, setData] = useState<SeoPage | null>(() => readInlineSeo(pathname))
  const firstRun = useRef(true)

  useEffect(() => {
    let active = true
    // Keep the inlined copy on the initial route instead of blanking + refetching.
    if (firstRun.current) {
      firstRun.current = false
      if (readInlineSeo(pathname)) return
    }
    setData(null)
    getSeoContent(pathname).then((loaded) => {
      if (active) setData(loaded)
    })
    return () => {
      active = false
    }
  }, [pathname])

  if (!data) return null

  const head = data.head ?? {}
  const heading = head.h1 || head.title || ''
  const opening = data.opening_paragraph?.[0]
  const isBlog = pathname.startsWith('/blog/')

  // SEO title: strip the handoff's trailing brand so the shared <SEO> suffix isn't doubled.
  const seoTitle = (head.title || heading).replace(/\s*\|\s*myCHEF(?:\s+Dubai)?\s*$/i, '')

  const blocks: RenderedBlock[] = [
    ...(data.replace_in_block ?? []).map((b) => ({ heading: b.new_heading, paragraphs: b.new_paragraphs })),
    ...(data.add_block ?? []).map((b) => ({ heading: b.new_heading, paragraphs: b.new_paragraphs })),
  ].filter((b) => Boolean(b.heading) && Array.isArray(b.paragraphs) && b.paragraphs.length > 0)

  // Blog imagery: a hero figure at the top of the article; inline figures follow after_heading when set.
  const images = data.images ?? []
  const heroImage = images.find((im) => im.role === 'hero') ?? null
  const inlineImages = images.filter((im) => im.role !== 'hero')
  const imageAfterBlock = placeInlineImages(blocks, inlineImages)

  // Internal linking: contextual body links share one page-wide budget/state.
  const linkState: LinkState = { usedPhrases: new Set(), usedUrls: new Set(), budget: LINK_BUDGET }
  const pillars = isBlog ? pillarsFor(pathname) : []

  // Table of contents from the H2 headings (unique ids, dedupe collisions).
  const usedIds = new Set<string>()
  const toc = blocks.map((b) => {
    let id = slugify(b.heading) || 'section'
    let n = 2
    while (usedIds.has(id)) id = `${slugify(b.heading)}-${n++}`
    usedIds.add(id)
    return { id, heading: b.heading }
  })
  const showToc = isBlog && toc.length >= TOC_MIN_SECTIONS

  // Structured data: Article + BreadcrumbList (+ FAQPage when the post carries an FAQ).
  const canonical = `${SITE}${pathname}`
  const graph: Record<string, unknown>[] = []
  if (isBlog) {
    graph.push({
      '@type': 'BlogPosting',
      headline: seoTitle,
      description: head.meta_description,
      image: heroImage ? [`${SITE}${heroImage.src}`] : undefined,
      author: { '@id': 'https://www.mychef.ae/#organization' },
      publisher: { '@id': 'https://www.mychef.ae/#organization' },
      mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
      datePublished: '2026-08-01',
      dateModified: '2026-08-24',
    })
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
        { '@type': 'ListItem', position: 3, name: seoTitle, item: canonical },
      ],
    })
  }
  if ((data.faq ?? []).length > 0) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: (data.faq ?? []).map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: (f.answer ?? []).join(' ') },
      })),
    })
  }
  const schema = graph.length > 0 ? { '@context': 'https://schema.org', '@graph': graph } : undefined

  return (
    <div>
      <SEO title={seoTitle} description={head.meta_description} canonicalPath={pathname} schema={schema} />

      {/* Hero */}
      <section className="relative bg-black overflow-hidden section-padding pt-32 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(200,164,92,0.12)_0%,transparent_60%)]" />
        <div className="relative z-10 container-custom max-w-[900px]">
          <nav className="mb-6">
            <ol className="flex items-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              {isBlog && (
                <>
                  <li><Link to="/blog" className="text-gray-400 hover:text-gold transition-colors">Blog</Link></li>
                  <li className="text-gray-400">/</li>
                </>
              )}
              <li><span className="text-gold">{heading}</span></li>
            </ol>
          </nav>
          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6">
            {heading}
          </h1>
          {opening && (
            <p className="font-inter text-body-lg text-gray-400 leading-relaxed max-w-[760px]">
              {opening}
            </p>
          )}
        </div>
      </section>

      <TrustSignalStrip />

      {/* Body */}
      <article className="bg-white section-padding">
        <div className="article-body container-custom max-w-[820px]">
          {heroImage && <BlogFigure image={heroImage} priority />}

          {showToc && (
            <nav aria-label="Table of contents" className="mb-12 rounded-2xl border border-gray-200 bg-cream p-6">
              <span className="font-inter text-caption uppercase tracking-wider text-gold mb-4 block">
                On this page
              </span>
              <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-2 list-none">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="font-inter text-body-sm text-gray-600 hover:text-gold transition-colors"
                    >
                      {item.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {blocks.map((block, bi) => {
            const inline = imageAfterBlock.get(bi)
            return (
              <section key={`${block.heading}-${bi}`} className="mb-12">
                <h2 id={toc[bi].id} className="font-playfair text-h2 text-black mb-5 scroll-mt-28">{block.heading}</h2>
                {block.paragraphs.map((p, i) => (
                  <p key={i} className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
                    {linkify(p, pathname, linkState, `${bi}-${i}`)}
                  </p>
                ))}
                {inline && <BlogFigure image={inline} />}
              </section>
            )
          })}

          {/* Money-page / pillar links for this topic */}
          {pillars.length > 0 && (
            <div className="mt-4 border-t border-gray-200 pt-8">
              <span className="font-inter text-caption uppercase tracking-wider text-gold mb-4 block">
                Explore the service
              </span>
              <ul className="flex flex-wrap gap-3">
                {pillars.map((p) => (
                  <li key={p.url}>
                    <Link
                      to={p.url}
                      className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-cream px-4 py-2 font-inter text-body-sm text-black hover:border-gold hover:text-gold transition-colors"
                    >
                      {p.label} <ArrowRight size={14} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>

      {/* Related reading (topic-aware) */}
      {isBlog && getPost(pathname) && <BlogRelated currentSlug={pathname} />}

      {/* CTA */}
      <section className="bg-gradient-to-b from-charcoal to-black section-padding">
        <div className="container-custom max-w-[720px] text-center">
          <h2 className="font-playfair text-h2 text-white mb-4">Plan it with myCHEF</h2>
          <p className="font-inter text-body-lg text-gray-400 mb-8">
            Tell us the date, the guest count and the venue — you&apos;ll have a written proposal back promptly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary">Request a Proposal</Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
