/**
 * Sitewide conversion click classification for GA4 (G-26YM3CE8CB).
 * One event per click. GSC owns organic CTR; these events own post-landing CTAs.
 * link_url is stripped of message text so names, quotes and emails never go to GA4.
 */

export type ConversionEventName = 'whatsapp_click' | 'quote_click' | 'phone_click' | 'email_click'

export type ConversionHit = {
  event: ConversionEventName
  link_url: string
}

const SITE = 'https://www.mychef.ae'

const LEAD_FORM_IDS = new Set([
  'private-chef-plan',
  'inquiry-form',
  'contact-form',
  'lead-magnet-form',
])

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

/** Drop prefilled WhatsApp text, mailto subject/body, and other query strings. */
export function sanitizeConversionUrl(href: string): string {
  const raw = href.trim()
  if (raw.startsWith('tel:')) return raw.split('?')[0]
  if (raw.startsWith('mailto:')) return `mailto:${raw.slice('mailto:'.length).split('?')[0]}`
  if (raw.startsWith('whatsapp:')) return 'whatsapp:'
  try {
    const url = new URL(raw, SITE)
    const host = url.hostname.replace(/^www\./, '')
    if (host === 'wa.me') {
      return `https://wa.me${url.pathname.replace(/\/+$/, '')}`
    }
    if (host === 'api.whatsapp.com' || host === 'web.whatsapp.com') {
      const phone = url.searchParams.get('phone')
      const base = `${url.protocol}//${url.hostname}${url.pathname.replace(/\/+$/, '')}`
      return phone ? `${base}?phone=${encodeURIComponent(phone)}` : base
    }
    return url.pathname.replace(/\/+$/, '') || '/'
  } catch {
    return raw.split('?')[0].split('#')[0]
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
    return { event: 'whatsapp_click', link_url: sanitizeConversionUrl(raw) }
  }
  if (lower.startsWith('tel:')) {
    return { event: 'phone_click', link_url: sanitizeConversionUrl(raw) }
  }
  if (lower.startsWith('mailto:')) {
    return { event: 'email_click', link_url: sanitizeConversionUrl(raw) }
  }

  const path = pathFromHref(raw)
  if (path === '/inquiry') {
    return { event: 'quote_click', link_url: sanitizeConversionUrl(raw) }
  }
  return null
}

export function shouldGenerateLead(pathname: string, formId: string | null | undefined): boolean {
  if (pathname === '/seo' || pathname.startsWith('/seo/')) return false
  if (!formId) return false
  return LEAD_FORM_IDS.has(formId)
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
