import { isCateringDesignPage, cateringImage } from './catering/CateringEditorial'
import { isParked } from '@/content/parkedUrls'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router'
import { assemblePageGraph } from '@/lib/jsonld'
import { chefPageImages, chefImage } from '@/content/privateChefDesign'
import { SEO_AUDIT_OVERRIDES } from '@/content/seoAuditOverrides'

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
const BRAND_SUFFIX_RE = /\|\s*myCHEF(?:\s+Dubai)?\s*$/i
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
  // A parked URL is one the site keeps and Google is asked to forget. The decision lives in
  // docs/seo/parked-urls.json so a page cannot disagree with the list.
  const hidden = noindex || isParked(canonicalPath ?? '')
  const { pathname } = useLocation()
  const path = canonicalPath || pathname
  const designImage = chefPageImages[pathname]
  if (designImage && !pathname.startsWith('/blog/')) ogImage = chefImage(designImage)
  // Responsive HTML image owns loading priority; do not preload the superseded hero.
  if (designImage) preloadHero = undefined
  if (pathname !== "/yachts" && pathname !== "/canape-catering-dubai" && isCateringDesignPage(pathname)) { ogImage = cateringImage(pathname); preloadHero = undefined }
  const jsonLd = assemblePageGraph(path, schema)
  // Nested cluster pages (e.g. /private-chef-dubai/our-chefs) pass the parent URL as
  // canonicalPath, so a canonicalPath-keyed lookup served them the parent's title and
  // description — the duplicate-title / duplicate-description audit failure. The page's
  // own pathname wins when it has its own override entry.
  const auditOverride = SEO_AUDIT_OVERRIDES[pathname] ?? SEO_AUDIT_OVERRIDES[path]
  const effectiveTitle = auditOverride?.title || title
  const effectiveDescription = auditOverride?.description || description

  // Pages that already end in the brand (contract titles are written as
  // "… | myCHEF") must not get a second suffix.
  const endsWithSiteName = effectiveTitle ? BRAND_SUFFIX_RE.test(effectiveTitle) : false
  const fullTitle = effectiveTitle
    ? hideSiteName || endsWithSiteName
      ? effectiveTitle
      : `${effectiveTitle} | ${SITE_NAME}`
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
      <meta name="description" content={effectiveDescription} />
      <link rel="canonical" href={canonicalUrl} />
      {preloadHero && (
        <link rel="preload" as="image" type="image/webp" href={`${SITE_URL}${preloadHero}`} imageSizes="100vw" fetchPriority="high" />
      )}
      <html lang="en-AE" />
      <meta name="robots" content={hidden ? 'noindex, follow' : 'index, follow'} />
      <meta name="application-name" content={SITE_NAME} />
      <meta name="apple-mobile-web-app-title" content={SITE_NAME} />
      <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
      <link rel="icon" href="/favicon.ico" sizes="48x48" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={effectiveDescription} />
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`} />
      <meta property="og:type" content={schema?.['@type'] === 'Article' || schema?.['@type'] === 'BlogPosting' ? 'article' : 'website'} />
      <meta property="og:locale" content="en_AE" />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mychefdubai" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={effectiveDescription} />
      <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`} />

      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
      )}
    </Helmet>
  )
}
