/**
 * Places myCHEF drives to. Defined once. Homepage owns the nodes;
 * every other URL points at the @id. Not LocalBusiness pins.
 */
const SITE_URL = 'https://www.mychef.ae'

export const DUBAI_PLACE_ID = `${SITE_URL}/#place-dubai`

export const SERVICE_COMMUNITIES = [
  { slug: 'palm-jumeirah', name: 'Palm Jumeirah' },
  { slug: 'dubai-marina', name: 'Dubai Marina' },
  { slug: 'downtown-dubai', name: 'Downtown Dubai' },
  { slug: 'jumeirah', name: 'Jumeirah' },
  { slug: 'jbr', name: 'JBR' },
  { slug: 'business-bay', name: 'Business Bay' },
  { slug: 'difc', name: 'DIFC' },
  { slug: 'emirates-hills', name: 'Emirates Hills' },
  { slug: 'arabian-ranches', name: 'Arabian Ranches' },
  { slug: 'dubai-hills', name: 'Dubai Hills' },
  { slug: 'jvc', name: 'Jumeirah Village Circle' },
  { slug: 'jlt', name: 'Jumeirah Lake Towers' },
  { slug: 'bluewaters-island', name: 'Bluewaters Island' },
  { slug: 'umm-suqeim', name: 'Umm Suqeim' },
  { slug: 'al-barsha', name: 'Al Barsha' },
] as const

export type CommunitySlug = (typeof SERVICE_COMMUNITIES)[number]['slug']

const SLUGS = new Set(SERVICE_COMMUNITIES.map((c) => c.slug))

export function isCommunitySlug(slug: string): slug is CommunitySlug {
  return SLUGS.has(slug as CommunitySlug)
}

export function placeId(slug: string): string {
  return `${SITE_URL}/#place-${slug}`
}

export const DUBAI_PLACE = {
  '@type': 'AdministrativeArea',
  '@id': DUBAI_PLACE_ID,
  name: 'Dubai',
}

export const COMMUNITY_PLACES = SERVICE_COMMUNITIES.map((c) => ({
  '@type': 'AdministrativeArea',
  '@id': placeId(c.slug),
  name: c.name,
  containedInPlace: { '@id': DUBAI_PLACE_ID },
}))

/** Full set — homepage graph only. */
export const PLACE_NODES = [DUBAI_PLACE, ...COMMUNITY_PLACES]

export const ALL_AREA_REFS = [
  { '@id': DUBAI_PLACE_ID },
  ...SERVICE_COMMUNITIES.map((c) => ({ '@id': placeId(c.slug) })),
]

export function placeRef(slug: string): { '@id': string } {
  return { '@id': slug === 'dubai' ? DUBAI_PLACE_ID : placeId(slug) }
}

/** Dubai + up to three silo areas. Service pages, not the homepage. */
export function serviceAreaRefs(areaUrls: { url: string }[] = []): { '@id': string }[] {
  const refs: { '@id': string }[] = [{ '@id': DUBAI_PLACE_ID }]
  const seen = new Set([DUBAI_PLACE_ID])
  for (const area of areaUrls.slice(0, 3)) {
    const slug = area.url.replace(/^\/locations\//, '')
    if (!isCommunitySlug(slug)) continue
    const id = placeId(slug)
    if (seen.has(id)) continue
    seen.add(id)
    refs.push({ '@id': id })
  }
  return refs
}
