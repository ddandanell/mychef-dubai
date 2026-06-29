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
const DEFAULT_DESCRIPTION = 'myCHEF Dubai delivers premium private chef services, luxury catering, and bespoke dining experiences across Dubai. From villas to yachts — request your custom quote today.'
const DEFAULT_OG_IMAGE = '/hero-home.jpg'
const SITE_URL = 'https://mychefdubai.com'

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonicalPath = '',
  ogImage = DEFAULT_OG_IMAGE,
  noindex = false,
  schema,
}: SEOProps) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME} — Premium Private Chef & Catering`
    : `${SITE_NAME} — Premium Private Chef & Luxury Catering Dubai`

  const canonicalUrl = `${SITE_URL}${canonicalPath}`

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
