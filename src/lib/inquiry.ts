export const LAST_SERVICE_PAGE_KEY = 'mc_last_service_page'

const ACRONYMS = new Set(['bbq', 'vip', 'jbr', 'uae', 'nye', 'dj', 'ceo'])

const FROM_LABELS: Record<string, string> = {
  yachts: 'Yacht catering',
  birthday: 'Birthday catering',
  'birthday-private': 'Birthday catering — private brief',
  corporate: 'Corporate catering',
  chef: 'Private chef',
  inquiry: 'Quote request',
  contact: 'Contact page',
}

function titleFromSlug(slug: string): string {
  return slug
    .split(/[-_/]+/)
    .filter(Boolean)
    .map((word) => {
      const lower = word.toLowerCase()
      if (ACRONYMS.has(lower)) return word.toUpperCase()
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(' ')
}

export function rememberServicePage(pathname: string) {
  if (typeof sessionStorage === 'undefined') return
  const path = pathname.split('?')[0]
  if (!path || path === '/inquiry' || path === '/thank-you' || path === '/seo') return
  sessionStorage.setItem(LAST_SERVICE_PAGE_KEY, path)
}

export function lastServicePage(): string {
  if (typeof sessionStorage === 'undefined') return ''
  return sessionStorage.getItem(LAST_SERVICE_PAGE_KEY) || ''
}

export function serviceLabelFromSource(from: string, chef?: string | null): string {
  if (chef) return `Chef preference: ${chef.replace(/-/g, ' ')}`
  const raw = (from || '').trim()
  if (!raw) return 'Website enquiry'
  if (FROM_LABELS[raw]) return FROM_LABELS[raw]
  const path = raw.startsWith('/') ? raw : `/${raw}`
  const slug = path.replace(/^\//, '')
  if (FROM_LABELS[slug]) return FROM_LABELS[slug]
  return titleFromSlug(slug)
}

export function inquiryHref(fromPath?: string, extra?: Record<string, string>): string {
  const params = new URLSearchParams()
  if (fromPath) params.set('from', fromPath)
  if (extra) {
    for (const [key, value] of Object.entries(extra)) {
      if (value) params.set(key, value)
    }
  }
  const query = params.toString()
  return query ? `/inquiry?${query}` : '/inquiry'
}
