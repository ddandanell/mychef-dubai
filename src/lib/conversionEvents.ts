/**
 * Sitewide conversion click classification for GA4 (G-26YM3CE8CB).
 * One event per click. GSC owns organic CTR; these events own post-landing CTAs.
 */

export type ConversionEventName = 'whatsapp_click' | 'quote_click' | 'phone_click' | 'email_click'

export type ConversionHit = {
  event: ConversionEventName
  link_url: string
}

const SITE = 'https://www.mychef.ae'

function pathFromHref(href: string): string {
  const raw = href.trim()
  if (!raw) return ''
  if (raw.startsWith('tel:') || raw.startsWith('mailto:')) return raw
  try {
    const url = new URL(raw, SITE)
    return url.pathname.replace(/\/+$/, '') || '/'
  } catch {
    return raw.split('?')[0].split('#')[0] || ''
  }
}

/** Classify a click target. Returns at most one conversion event. */
export function classifyConversionHref(href: string | null | undefined): ConversionHit | null {
  if (!href) return null
  const raw = href.trim()
  if (!raw || raw.startsWith('#')) return null
  const lower = raw.toLowerCase()

  if (
    /(?:^|\/\/)(?:wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)\b/i.test(lower) ||
    lower.startsWith('whatsapp:')
  ) {
    return { event: 'whatsapp_click', link_url: raw }
  }
  if (lower.startsWith('tel:')) {
    return { event: 'phone_click', link_url: raw }
  }
  if (lower.startsWith('mailto:')) {
    return { event: 'email_click', link_url: raw }
  }

  const path = pathFromHref(raw)
  if (path === '/inquiry') {
    return { event: 'quote_click', link_url: raw }
  }
  return null
}

export function conversionParams(
  hit: ConversionHit,
  extras: { page_path: string; cta_location: string },
): Record<string, string> {
  return {
    link_url: hit.link_url,
    page_path: extras.page_path,
    cta_location: extras.cta_location,
  }
}
