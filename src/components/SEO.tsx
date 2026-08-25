import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router'
import { assemblePageGraph } from '@/lib/jsonld'

interface SEOProps {
  title?: string
  description?: string
  canonicalPath?: string
  ogImage?: string
  noindex?: boolean
  hideSiteName?: boolean
  schema?: Record<string, unknown>
  preloadHero?: string
}

const SITE_NAME = 'myCHEF'
const DEFAULT_TITLE = 'myCHEF Dubai — Premium Private Chef & Luxury Dining Experiences'
const DEFAULT_DESCRIPTION = 'myCHEF Dubai designs private dining experiences and brings you professional, licensed chefs across Dubai. From villas to yachts — request your custom quote today.'
const DEFAULT_OG_IMAGE = '/images/home-hero.webp'
const SITE_URL = 'https://www.mychef.ae'

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonicalPath = '',
  ogImage = DEFAULT_OG_IMAGE,
  noindex = false,
  hideSiteName = false,
  schema,
  preloadHero,
}: SEOProps) {
  const { pathname } = useLocation()
  const path = canonicalPath || pathname
  const jsonLd = assemblePageGraph(path, schema)

  const fullTitle = title
    ? hideSiteName
      ? title
      : `${title} | ${SITE_NAME}`
    : DEFAULT_TITLE

  const canonicalUrl = `${SITE_URL}${canonicalPath}`

  // NOTE: there used to be a useEffect here that deleted duplicate <title>
  // elements from document.head. It was the cause of the "navigation needs two
  // clicks" bug, and it must not come back.
  //
  // React 19 hoists <title>/<meta>/<link> into <head> ITSELF and keeps a fiber
  // pointing at each hoisted node. Deleting one of those nodes by hand detaches
  // it behind React's back. On the next route change React unmounts this <SEO>
  // and runs its hoistable cleanup, which is effectively
  //
  //     instance.parentNode.removeChild(instance)
  //
  // and parentNode is now null:
  //
  //     TypeError: Cannot read properties of null (reading 'removeChild')
  //
  // That throws inside commitMutationEffects, the whole commit is abandoned, and
  // the incoming route never mounts — the URL changes but the page does not. A
  // second click then works because the damaged node is already gone.
  //
  // The duplicate <title> it was papering over is a separate, cosmetic issue:
  // the prerendered HTML ships a static <title> and createRoot adds React's own
  // on top. The correct cure is hydrateRoot (PROBLEMS.md P2/P3), which makes
  // React adopt the prerendered tag instead of appending a second one — not
  // hand-deleting nodes React owns.

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {preloadHero && (
        <link rel="preload" as="image" type="image/webp" href={`${SITE_URL}${preloadHero}`} imageSizes="100vw" />
      )}
      <html lang="en" />
      <meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow'} />

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

      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
      )}
    </Helmet>
  )
}
