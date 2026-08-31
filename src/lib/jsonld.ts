import { getSiloPage } from '@/content/siloMap'
import {
  ORGANIZATION_ID,
  ORGANIZATION_SCHEMA,
  WEBSITE_SCHEMA,
} from '@/lib/organizationSchema'
import {
  DUBAI_PLACE_ID,
  PLACE_NODES,
  isCommunitySlug,
  placeId,
  serviceAreaRefs,
} from '@/lib/serviceAreas'

const SITE = 'https://www.mychef.ae'

const BANNED_TYPES = new Set([
  'Event',
  'HowTo',
  'Restaurant',
  'FoodEstablishment',
  'LocalBusiness',
])

function typeList(node: Record<string, unknown>): string[] {
  const t = node['@type']
  if (Array.isArray(t)) return t.filter((x): x is string => typeof x === 'string')
  return typeof t === 'string' ? [t] : []
}

function isFullOrg(node: Record<string, unknown>): boolean {
  const types = typeList(node)
  const orgLike = types.some((t) => t === 'Organization' || t === 'ProfessionalService' || t === 'FoodService')
  return orgLike && Boolean(node.legalName || node.logo || node.address)
}

function asRecord(value: unknown): Record<string, unknown> | null {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null
  return value as Record<string, unknown>
}

function incomingNodes(schema: unknown): Record<string, unknown>[] {
  const root = asRecord(schema)
  if (!root) return []
  const graph = root['@graph']
  if (Array.isArray(graph)) {
    return graph.map(asRecord).filter((n): n is Record<string, unknown> => Boolean(n))
  }
  return [root]
}

function sanitizeNode(node: Record<string, unknown>, pathname: string): Record<string, unknown> | null {
  const types = typeList(node)
  if (types.some((t) => BANNED_TYPES.has(t))) return null
  if (types.includes('FAQPage') && pathname !== '/faq') return null
  if (isFullOrg(node) && pathname !== '/' && pathname !== '/about') return null

  if (types.includes('AdministrativeArea') && pathname !== '/') return null

  const next: Record<string, unknown> = { ...node }
  delete next['@context']
  delete next.aggregateRating
  delete next.geo

  const provider = asRecord(next.provider)
  if (provider && provider['@id'] === ORGANIZATION_ID && (provider.legalName || provider.logo || provider.address || provider.telephone)) {
    next.provider = { '@id': ORGANIZATION_ID }
  }

  if (types.includes('Service')) {
    next.provider = { '@id': ORGANIZATION_ID }
    const loc = pathname.match(/^\/locations\/([^/]+)$/)
    if (loc && isCommunitySlug(loc[1])) {
      next.areaServed = { '@id': placeId(loc[1]) }
      if (!next['@id']) next['@id'] = `${SITE}${pathname}#service`
    } else {
      const silo = getSiloPage(pathname)
      next.areaServed = serviceAreaRefs(silo?.areas ?? [])
      if (!next['@id']) next['@id'] = `${SITE}${pathname}#service`
    }
  }

  if (types.includes('BreadcrumbList')) {
    const cleaned = namedBreadcrumbItems(next.itemListElement, pathname)
    if (!cleaned.length) return null
    next.itemListElement = cleaned
  }

  return next
}

function crumbName(el: Record<string, unknown>): string {
  if (typeof el.name === 'string' && el.name.trim()) return el.name.trim()
  const item = asRecord(el.item)
  if (item && typeof item.name === 'string' && item.name.trim()) return item.name.trim()
  return ''
}

function crumbUrl(el: Record<string, unknown>): string | undefined {
  if (typeof el.item === 'string' && el.item.trim()) return el.item.trim()
  const item = asRecord(el.item)
  if (!item) return undefined
  const id = item['@id']
  if (typeof id === 'string' && id.trim()) return id.trim()
  if (typeof item.url === 'string' && item.url.trim()) return item.url.trim()
  return undefined
}

function pathFromCrumbUrl(url: string | undefined): string | undefined {
  if (!url) return undefined
  if (url.startsWith(SITE)) {
    const path = url.slice(SITE.length) || '/'
    return path.startsWith('/') ? path : `/${path}`
  }
  if (url.startsWith('/')) return url
  return undefined
}

function nameFromSilo(pathname: string, url: string | undefined): string {
  const silo = getSiloPage(pathname)
  const trail = silo?.breadcrumb ?? []
  if (!trail.length) return ''
  const path = pathFromCrumbUrl(url)
  if (!path) {
    const last = trail[trail.length - 1]
    return last?.label?.trim() || ''
  }
  const match = trail.find((c) => c.url === path)
  return match?.label?.trim() || ''
}

/** Fill missing ListItem names from the contract trail. Only drop a crumb when neither schema nor contract has a name. */
function namedBreadcrumbItems(raw: unknown, pathname = ''): Record<string, unknown>[] {
  if (!Array.isArray(raw)) return []
  const out: Record<string, unknown>[] = []
  for (const entry of raw) {
    const el = asRecord(entry)
    if (!el) continue
    const item = crumbUrl(el)
    const name = crumbName(el) || nameFromSilo(pathname, item)
    if (!name) continue
    const next: Record<string, unknown> = {
      '@type': 'ListItem',
      position: out.length + 1,
      name,
    }
    if (item) next.item = item
    out.push(next)
  }
  return out
}

function breadcrumbFromSilo(items: { url: string; label: string }[]): Record<string, unknown> {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: namedBreadcrumbItems(
      items
        .filter((item) => item.label?.trim())
        .map((item) => ({
          '@type': 'ListItem',
          name: item.label.trim(),
          item: `${SITE}${item.url === '/' ? '/' : item.url}`,
        })),
    ),
  }
}

function hasType(nodes: Record<string, unknown>[], type: string): boolean {
  return nodes.some((n) => typeList(n).includes(type))
}

function normalizePath(pathname: string): string {
  if (!pathname) return '/'
  const clean = pathname.split('?')[0].split('#')[0]
  return clean.length > 1 ? clean.replace(/\/+$/, '') : '/'
}

/**
 * One JSON-LD document per URL.
 * Organisation lives on `/` and `/about` only. FAQPage only on `/faq`.
 * Breadcrumbs on every indexable URL except `/`.
 */
export function assemblePageGraph(pathname: string, incoming: unknown): Record<string, unknown> | undefined {
  const path = normalizePath(pathname)
  const nodes = incomingNodes(incoming)
    .map((n) => sanitizeNode(n, path))
    .filter((n): n is Record<string, unknown> => Boolean(n))

  if (path === '/' || path === '/about') {
    if (!hasType(nodes, 'Organization') && !hasType(nodes, 'ProfessionalService')) {
      nodes.unshift(ORGANIZATION_SCHEMA)
    }
  }
  if (path === '/' && !hasType(nodes, 'WebSite')) {
    nodes.push(WEBSITE_SCHEMA)
  }
  if (path === '/' && !nodes.some((n) => n['@id'] === DUBAI_PLACE_ID)) {
    nodes.push(...PLACE_NODES)
  }

  if (path !== '/' && !hasType(nodes, 'BreadcrumbList')) {
    const silo = getSiloPage(path)
    if (silo?.breadcrumb?.length) {
      const crumbs = breadcrumbFromSilo(silo.breadcrumb)
      const items = crumbs.itemListElement
      if (Array.isArray(items) && items.length) nodes.push(crumbs)
    }
  }

  if (!nodes.length) return undefined
  return { '@context': 'https://schema.org', '@graph': nodes }
}
