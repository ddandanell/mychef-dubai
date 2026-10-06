import { NonCateringVisual } from '@/components/catering/CateringEditorial'
import { Link, useLocation } from 'react-router'
import { Phone } from 'lucide-react'
import SEO from '../../components/SEO'
import PageHero from '../../components/PageHero'
import TrustSignalStrip from '../../components/TrustSignalStrip'
import BlogRelated from '@/components/BlogRelated'
import { prepareBlogHtml, privateChefBodyLinkCount, PRIVATE_CHEF_PATH } from '@/lib/blogEditorial'
import media from '@/content/blogMedia.json'
import { blogImageDimensions, blogImageSrcSet } from '@/lib/blogImages'
import { articlePhotography, withArticlePhotography } from '@/lib/blogPhotography'
import { blogServiceFor } from '@/content/blogServiceTargets'

export interface RyzeArticle {
  slug: string
  title: string
  body_html: string
  body_markdown: string
  meta_title: string
  meta_description: string
  excerpt: string
  primary_keyword: string | null
  image: { url: string; alt: string; caption?: string } | null
  published_at: string | null
  updated_at: string | null
  status: 'published'
}

const SITE = 'https://www.mychef.ae'
const FALLBACK_IMAGE = '/images/mychef-dubai-blog-hero.webp'

function displayDate(value: string | null): string {
  if (!value) return ''
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ''
  return new Intl.DateTimeFormat('en', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date)
}

export default function RyzeArticlePage({ article }: { article: RyzeArticle }) {
  const { pathname } = useLocation()
  const canonical = `/blog/${article.slug}`
  const service = blogServiceFor(article.slug)
  const serviceHref = service.href
  const serviceLabel = service.label
  const enquiryHref = `/inquiry?from=${encodeURIComponent(serviceHref)}`
  const whatsappHref = `https://wa.me/971551744849?text=${encodeURIComponent(`Hi myCHEF Dubai, I am reading ${article.title} and would like to ask about ${serviceLabel}. Date or schedule: __, Guests or household size: __, Dubai area: __. (via mychef.ae${canonical})`)}`
  const local = (media.pages as Record<string, { hero: { src: string; alt: string } }>)[canonical]
  const hero = local?.hero.src || article.image?.url || FALLBACK_IMAGE
  const heroAlt = local?.hero.alt || article.image?.alt || article.title
  const heroDimensions = blogImageDimensions(hero)
  const photographs = articlePhotography(canonical)
  let body = article.body_html
  for (const [source, destination] of Object.entries(media.sources)) body = body.replaceAll(source, destination)
  body = withArticlePhotography(body, canonical)
  const content = prepareBlogHtml(body, canonical)
  const readingMinutes = Math.max(1, Math.ceil(article.body_html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<[^>]*>/g, ' ').trim().split(/\s+/).length / 220))
  const chefOverviewInBody = serviceHref === PRIVATE_CHEF_PATH && privateChefBodyLinkCount(content.html) > 0
  const published = displayDate(article.published_at)
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.meta_description,
    image: [hero.startsWith('/') ? SITE + hero : hero, ...(photographs?.inline.map(photo => SITE + photo.src) || [])],
    author: { '@id': `${SITE}/#organization` },
    publisher: { '@id': `${SITE}/#organization` },
    datePublished: article.published_at || undefined,
    dateModified: article.updated_at || article.published_at || undefined,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}${canonical}` },
  }

  return (
    <div>
      <SEO
        title={article.meta_title || article.title}
        description={article.meta_description || article.excerpt}
        canonicalPath={canonical}
        ogImage={hero}
        schema={schema}
      />

      <NonCateringVisual><PageHero
        eyebrow="myCHEF Guide"
        title={article.title}
        subtitle={article.excerpt}
        image={hero}
        imageSrcSet={blogImageSrcSet(hero)}
        imageAlt={heroAlt}
        imageWidth={heroDimensions?.width}
        imageHeight={heroDimensions?.height}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: article.title },
        ]}
        minHeight="medium"
        overlay="dark"
      /></NonCateringVisual>

      <TrustSignalStrip />

      <article className="bg-white section-padding">
        <div className="container-custom max-w-[820px]">
          {published && (
            <p className="mb-8 font-inter text-sm text-gray-400">
              By <strong className="font-medium text-black">myCHEF Dubai Team</strong>
              <span className="mx-3">|</span>
              <time dateTime={article.published_at || undefined}>{published}</time>
              <span className="mx-3" aria-hidden="true">·</span>
              <span>{readingMinutes} min read</span>
            </p>
          )}

          {article.image?.caption && <p className="mb-6 text-xs font-inter text-gray-500">{article.image.caption}</p>}
          {!chefOverviewInBody && <aside className="mb-8 border-l-2 border-gold bg-cream p-5 font-inter text-body-sm text-gray-700" data-blog-service-link>
            Ready to plan your own service? Explore <Link to={serviceHref} className="font-medium text-gold-ink underline underline-offset-4">{service.anchor}</Link> for the options and next steps. When you are ready, <Link to={enquiryHref} className="font-medium text-gold-ink underline underline-offset-4">share your requirements</Link> so we can review your brief and prepare a written proposal.
          </aside>}
          {content.headings.length >= 4 && <nav className="blog-article-toc" aria-label="Table of contents">
            <p>On this page</p>
            <ol>{content.headings.map(heading => <li key={heading.id}><a href={`#${heading.id}`}>{heading.title}</a></li>)}</ol>
          </nav>}
          <div
            className="blog-rich-body font-inter text-body-lg leading-relaxed text-gray-500 [&_h2]:mt-12 [&_h2]:mb-5 [&_h2]:font-playfair [&_h2]:text-h2 [&_h2]:font-semibold [&_h2]:text-black [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:font-playfair [&_h3]:text-h3 [&_h3]:text-black [&_h4]:mt-6 [&_h4]:mb-2 [&_h4]:font-playfair [&_h4]:text-h4 [&_h4]:text-black [&_p]:mb-5 [&_a]:text-gold [&_a]:underline [&_a]:underline-offset-4 [&_strong]:font-semibold [&_strong]:text-black [&_ul]:mb-6 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ol]:mb-6 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_blockquote]:my-8 [&_blockquote]:border-l-4 [&_blockquote]:border-gold [&_blockquote]:bg-cream [&_blockquote]:p-6 [&_img]:my-8 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-sm [&_table]:my-8 [&_table]:w-full [&_table]:border-collapse [&_th]:border [&_th]:border-gray-200 [&_th]:bg-cream [&_th]:p-3 [&_th]:text-left [&_td]:border [&_td]:border-gray-200 [&_td]:p-3"
            dangerouslySetInnerHTML={{ __html: content.html }}
          />
        </div>
      </article>

      <BlogRelated currentSlug={pathname}/>

      <section className="bg-gradient-to-b from-charcoal to-black section-padding">
        <div className="container-custom max-w-[720px] text-center">
          <h2 className="font-playfair text-h2 text-white mb-4">Plan {serviceLabel} with myCHEF</h2>
          <p className="font-inter text-body-lg text-gray-400 mb-8">
            Tell us your date or preferred schedule, the number of people and your Dubai area. We will confirm what is possible before preparing a written proposal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {!chefOverviewInBody && <Link to={serviceHref} className="btn-primary">Explore {serviceLabel}</Link>}
            <Link to={enquiryHref} className="btn-secondary">Discuss your requirements</Link>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
