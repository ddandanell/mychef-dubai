const SITE = 'https://www.mychef.ae'
const LANDING_KEY = 'mychef-contact-landing'
let landingPath = ''

function cleanPath(path: string): string {
  return '/' + path.split(/[?#]/)[0].replace(/^\/+|\/+$/g, '')
}

/** Path only: never copy search terms, ad IDs or form data into attribution. */
export function contactSource(): { page: string; landing: string } {
  const page = typeof window === 'undefined' ? '/' : cleanPath(window.location.pathname)
  if (typeof window === 'undefined') return { page, landing: page }
  if (!landingPath) {
    try {
      landingPath = cleanPath(sessionStorage.getItem(LANDING_KEY) || page)
      sessionStorage.setItem(LANDING_KEY, landingPath)
    } catch { landingPath = page }
  }
  return { page, landing: landingPath }
}

export function attributeContactHref(href: string, source = contactSource()): string {
  try {
    const url = new URL(href, SITE)
    const whatsapp = ['wa.me', 'api.whatsapp.com', 'web.whatsapp.com'].includes(url.hostname)
      || url.protocol === 'whatsapp:'
    // Only enrich this business's email links, not partners' addresses.
    const email = url.protocol === 'mailto:' && url.pathname.toLowerCase().endsWith('@mychef.ae')
    if (!whatsapp && !email) return href
    const field = email ? 'body' : 'text'
    const original = (url.searchParams.get(field) || '').replace(/\n\nPage: https:\/\/www\.mychef\.ae\/[^\n]*(?:\nFirst visited: https:\/\/www\.mychef\.ae\/[^\n]*)?$/, '')
    const page = cleanPath(source.page)
    const landing = cleanPath(source.landing)
    const reference = `Page: ${SITE}${page}${landing !== page ? `\nFirst visited: ${SITE}${landing}` : ''}`
    url.searchParams.set(field, `${original || "Hi myCHEF, I'd like to discuss your services."}\n\n${reference}`)
    if (email && !url.searchParams.has('subject')) url.searchParams.set('subject', 'myCHEF enquiry')
    // mailto clients expect percent-encoded spaces, not form-style plus signs.
    return email ? `mailto:${url.pathname}?${url.searchParams.toString().replace(/\+/g, '%20')}` : url.toString()
  } catch { return href }
}

/** Covers existing content, lazy pages, calculators and links copied/opened in a new tab. */
export function installContactAttribution(): () => void {
  contactSource()
  const enhance = (anchor: HTMLAnchorElement) => {
    const href = anchor.getAttribute('href') || ''
    if (!/^(https?:\/\/(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)\/|whatsapp:|mailto:)/i.test(href)) return
    const next = attributeContactHref(href)
    if (next !== href) anchor.setAttribute('href', next)
  }
  const scan = (node: Node) => {
    if (!(node instanceof Element)) return
    if (node instanceof HTMLAnchorElement) enhance(node)
    node.querySelectorAll<HTMLAnchorElement>('a[href]').forEach(enhance)
  }
  scan(document.body)
  const observer = new MutationObserver(records => {
    for (const record of records) {
      if (record.type === 'attributes') {
        if (record.target instanceof HTMLAnchorElement) enhance(record.target)
      } else record.addedNodes.forEach(scan)
    }
  })
  observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['href'] })
  const beforeActivate = (event: Event) => {
    const anchor = event.target instanceof Element ? event.target.closest('a') : null
    if (anchor) enhance(anchor)
  }
  const events = ['pointerdown', 'focusin', 'contextmenu', 'click']
  events.forEach(name => document.addEventListener(name, beforeActivate, true))
  return () => {
    observer.disconnect()
    events.forEach(name => document.removeEventListener(name, beforeActivate, true))
  }
}
