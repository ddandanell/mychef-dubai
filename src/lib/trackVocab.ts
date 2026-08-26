/** Fixed vocabulary for the first-party beacon. Unknown names are rejected by api/e.ts. */

export const TRACK_EVENTS = [
  'page_view',
  'engaged',
  'scroll_depth',
  'whatsapp_click',
  'form_submit',
  'exit',
  'cta_click',
  'inquiry_start',
  'inquiry_complete',
  'calc_use',
  'expose',
  'phone_click',
  'email_click',
] as const

export type TrackEventName = (typeof TRACK_EVENTS)[number]

/** Placement / form labels. Anything else is dropped on the server, not stored as free text. */
export const TRACK_LABELS = [
  'hero',
  'sticky',
  'price_table',
  'faq',
  'footer',
  'nav',
  'inquiry_form',
  'contact_form',
  'lead_magnet',
  'lead_form',
  'link',
] as const

export type TrackLabel = (typeof TRACK_LABELS)[number]

export const TRACK_CHANNELS = ['organic', 'paid', 'social', 'direct', 'referral', 'llm'] as const
export type TrackChannel = (typeof TRACK_CHANNELS)[number]

export const TRACK_LANDING = ['brand', 'owned', 'unowned', 'utility'] as const
export type TrackLanding = (typeof TRACK_LANDING)[number]

const LABEL_SET = new Set<string>(TRACK_LABELS)

export function allowLabel(raw: string | null | undefined): TrackLabel | null {
  if (!raw) return null
  return LABEL_SET.has(raw) ? (raw as TrackLabel) : null
}

/** Map a data-track value or DOM hint onto the placement allow-list. */
export function coerceLabel(raw: string | null | undefined): TrackLabel {
  if (raw === 'price_table') return 'price_table'
  if (raw === 'inquiry_form' || raw === 'contact_form' || raw === 'lead_magnet' || raw === 'lead_form') {
    return raw
  }
  return allowLabel(raw) ?? 'link'
}

export function placementFromElement(el: HTMLElement): TrackLabel {
  const placed = el.closest('[data-placement]')?.getAttribute('data-placement')
  const allowed = allowLabel(placed)
  if (allowed) return allowed
  const track = el.getAttribute('data-track')
  if (track === 'price_table') return 'price_table'
  if (el.closest('nav')) return 'nav'
  if (el.closest('footer')) return 'footer'
  if (el.closest('[data-faq], .faq-item, #faq')) return 'faq'
  if (el.closest('[data-sticky]')) return 'sticky'
  if (el.closest('header, [data-hero]')) return 'hero'
  return coerceLabel(track)
}

export function formLabel(formId: string): TrackLabel {
  if (formId === 'inquiry-form') return 'inquiry_form'
  if (formId === 'contact-form') return 'contact_form'
  if (formId === 'lead-magnet-form') return 'lead_magnet'
  return 'lead_form'
}

/** Bucket guest counts so the beacon never stores a raw number that identifies a household. */
export function bucketGuests(n: number): number {
  if (!Number.isFinite(n) || n <= 8) return 8
  if (n <= 20) return 20
  if (n <= 50) return 50
  if (n <= 100) return 100
  return 101
}

export function channelClass(referrerHost: string | null, utmSource: string | null, utmMedium: string | null): TrackChannel {
  const medium = (utmMedium || '').toLowerCase()
  const source = (utmSource || '').toLowerCase()
  if (/cpc|ppc|paid|ads|paidsearch|display/.test(medium) || /cpc|ppc|paid/.test(source)) return 'paid'
  const host = (referrerHost || '').toLowerCase()
  if (/chatgpt|openai|perplexity|claude\.ai|gemini\.google|copilot\.microsoft|you\.com|phind|poe\.com/.test(host)) {
    return 'llm'
  }
  if (/facebook|instagram|linkedin|t\.co$|twitter|x\.com|tiktok|pinterest|whatsapp/.test(host)) return 'social'
  if (/google\.|bing\.|yahoo\.|duckduckgo|baidu/.test(host)) return 'organic'
  if (host) return 'referral'
  return 'direct'
}
