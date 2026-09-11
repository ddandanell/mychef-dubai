export type AdAttribution = {
  source: string
  medium: string
  campaign: string
  content: string
  term: string
  gclid: string
}

const STORAGE_KEY = 'mychef_ad_attribution'

const emptyAttribution: AdAttribution = {
  source: '',
  medium: '',
  campaign: '',
  content: '',
  term: '',
  gclid: '',
}

const contentLabels: Record<string, string> = {
  'yacht-catering': 'Yacht Catering',
  'yacht-chef': 'Yacht Chef',
  'yacht-party-catering': 'Yacht Party Catering',
}

function fromParams(params: URLSearchParams): AdAttribution {
  return {
    source: params.get('utm_source') || '',
    medium: params.get('utm_medium') || '',
    campaign: params.get('utm_campaign') || '',
    content: params.get('utm_content') || '',
    term: params.get('utm_term') || '',
    gclid: params.get('gclid') || '',
  }
}

export function getAdAttribution(): AdAttribution {
  if (typeof window === 'undefined') return emptyAttribution

  const current = fromParams(new URLSearchParams(window.location.search))
  const isPaidVisit = current.source === 'google' || current.medium === 'cpc' || Boolean(current.gclid)

  if (isPaidVisit) {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(current))
    } catch {
      // Tracking must never block the enquiry path.
    }
    return current
  }

  try {
    const stored = window.sessionStorage.getItem(STORAGE_KEY)
    return stored ? { ...emptyAttribution, ...JSON.parse(stored) } : emptyAttribution
  } catch {
    return emptyAttribution
  }
}

export function appendAdAttribution(message: string): string {
  const attribution = getAdAttribution()
  if (!attribution.source && !attribution.gclid) return message

  const lines = [
    message,
    '',
    'Source: Google Ads',
    attribution.content ? `Ad group: ${contentLabels[attribution.content] || attribution.content}` : '',
    attribution.term ? `Search: ${attribution.term}` : '',
    attribution.gclid ? `Google reference: ${attribution.gclid}` : '',
  ].filter(Boolean)

  return lines.join('\n')
}

export function adAttributionSource(fallback = 'website'): string {
  const attribution = getAdAttribution()
  if (!attribution.source && !attribution.gclid) return fallback
  return [
    'google-ads',
    attribution.content || 'unknown-ad-group',
    attribution.gclid || 'no-gclid',
  ].join('|')
}
