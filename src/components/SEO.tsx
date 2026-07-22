import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  canonicalPath?: string
  ogImage?: string
  noindex?: boolean
  schema?: Record<string, unknown>
}

const SITE_NAME = 'myCHEF Dubai'
const DEFAULT_TITLE = 'myCHEF Dubai — Premium Private Chef & Luxury Dining Experiences'
const DEFAULT_DESCRIPTION = 'myCHEF Dubai designs private dining experiences and connects you with handpicked, licensed chefs across Dubai. From villas to yachts — request your custom quote today.'
const DEFAULT_OG_IMAGE = '/images/home-hero.webp'
const SITE_URL = 'https://www.mychef.ae'

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonicalPath = '',
  ogImage = DEFAULT_OG_IMAGE,
  noindex = false,
  schema,
}: SEOProps) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE

  const canonicalUrl = `${SITE_URL}${canonicalPath}`

  // React 19 natively hoists <title> to document.head; react-helmet-async can
  // leave a duplicate after hydration on a prerendered page. Keep only the
  // most-recently-rendered title so the audit sees exactly one <title>.
  useEffect(() => {
    const titles = document.head.querySelectorAll('title')
    if (titles.length > 1) {
      for (let i = 0; i < titles.length - 1; i += 1) {
        titles[i].remove()
      }
    }
  }, [fullTitle])

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <html lang="en" />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${SITE_URL}${ogImage}`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_AE" />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}${ogImage}`} />

      {/* hreflang */}
      <link rel="alternate" hrefLang="en-ae" href={canonicalUrl} />

      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  )
}
