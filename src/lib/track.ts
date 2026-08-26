// =============================================================================
// First-party events — the half of analytics that can be joined to the keywords
// =============================================================================
// GA4 answers "how long, how deep, did they convert". It cannot answer "which
// owned keyword produced that WhatsApp click", because Google does not know
// which keyword owns which URL — only the SEO contract does. These events land
// in the same Postgres as seo_keywords and seo_pages, so that join is a query.
//
// Collected: a random session id (sessionStorage, dies with the tab), the path,
// the referring hostname, utm tags, and one of six event names. Never: cookies,
// IP, names, emails, free text, or anything typed into a form.
//
// Silent by design — if the endpoint is missing or the browser refuses, nothing
// throws and nothing is retried.
// =============================================================================

const ENDPOINT = '/api/e'
const KEY_SESSION = 'mc_s'
const KEY_SEQ = 'mc_q'
const MAX_EVENTS = 60
const ENGAGED_AFTER_MS = 15_000

type EventName = 'page_view' | 'engaged' | 'scroll_depth' | 'whatsapp_click' | 'form_submit' | 'exit'

let started = 0
let maxScroll = 0
let engagedSent = false
let currentPath = ''
const depthsSent = new Set<number>()

function optedOut(): boolean {
  if (typeof navigator === 'undefined') return true
  const nav = navigator as Navigator & { globalPrivacyControl?: boolean; msDoNotTrack?: string }
  if (nav.globalPrivacyControl === true) return true
  if (nav.doNotTrack === '1' || nav.msDoNotTrack === '1') return true
  try {
    if (localStorage.getItem('mc_optout') === '1') return true
  } catch {
    /* private mode — treat as tracking allowed, nothing is stored anyway */
  }
  // The board itself is internal; never record visits to it.
  return typeof location !== 'undefined' && location.pathname.startsWith('/seo')
}

function sessionId(): string | null {
  try {
    let id = sessionStorage.getItem(KEY_SESSION)
    if (!id) {
      id = Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 10)
      sessionStorage.setItem(KEY_SESSION, id)
      sessionStorage.setItem(KEY_SEQ, '0')
    }
    return id
  } catch {
    return null
  }
}

function nextSeq(): number | null {
  try {
    const n = Number(sessionStorage.getItem(KEY_SEQ) || '0')
    if (n >= MAX_EVENTS) return null
    sessionStorage.setItem(KEY_SEQ, String(n + 1))
    return n
  } catch {
    return null
  }
}

function send(event: EventName, extra: { value?: number; label?: string } = {}): void {
  if (optedOut()) return
  const s = sessionId()
  if (!s) return
  const q = nextSeq()
  if (q === null) return

  const payload: Record<string, unknown> = {
    s,
    q,
    e: event,
    u: location.pathname.replace(/\/+$/, '') || '/',
  }
  if (typeof extra.value === 'number') payload.v = extra.value
  if (extra.label) payload.l = extra.label

  if (q === 0) {
    try {
      if (document.referrer) payload.r = new URL(document.referrer).hostname.slice(0, 120)
    } catch {
      /* malformed referrer — skip it */
    }
    const params = new URLSearchParams(location.search)
    const source = params.get('utm_source')
    const medium = params.get('utm_medium')
    const campaign = params.get('utm_campaign')
    if (source) payload.us = source.slice(0, 60)
    if (medium) payload.um = medium.slice(0, 60)
    if (campaign) payload.uc = campaign.slice(0, 60)
  }

  const blob = JSON.stringify(payload)
  try {
    if (navigator.sendBeacon) {
      navigator.sendBeacon(ENDPOINT, new Blob([blob], { type: 'application/json' }))
      return
    }
  } catch {
    /* fall through to fetch */
  }
  try {
    void fetch(ENDPOINT, { method: 'POST', body: blob, headers: { 'Content-Type': 'application/json' }, keepalive: true })
  } catch {
    /* analytics must never surface to a visitor */
  }
}

function onScroll(): void {
  const doc = document.documentElement
  const height = doc.scrollHeight - window.innerHeight
  if (height <= 0) return
  const pct = Math.min(100, Math.round(((window.scrollY || doc.scrollTop) / height) * 100))
  if (pct > maxScroll) maxScroll = pct
  for (const mark of [25, 50, 75, 100]) {
    if (pct >= mark && !depthsSent.has(mark)) {
      depthsSent.add(mark)
      send('scroll_depth', { value: mark })
    }
  }
}

function onHide(): void {
  if (!currentPath) return
  send('exit', { value: Math.round((Date.now() - started) / 1000), label: String(maxScroll) })
}

/** Call once when the app mounts, then again on every client-side route change. */
export function trackPage(path: string): void {
  if (optedOut()) return
  if (currentPath && currentPath !== path) onHide()      // the previous page ended here

  currentPath = path
  started = Date.now()
  maxScroll = 0
  engagedSent = false
  depthsSent.clear()
  send('page_view')

  window.setTimeout(() => {
    // "Engaged" is the bounce test: still on the same page, tab visible, after 15 seconds.
    if (!engagedSent && currentPath === path && document.visibilityState === 'visible') {
      engagedSent = true
      send('engaged')
    }
  }, ENGAGED_AFTER_MS)
}

/** One of the five conversions the site actually cares about. */
export function trackConversion(event: 'whatsapp_click' | 'form_submit', label?: string): void {
  send(event, { label })
}

let wired = false
/** Scroll depth and exit timing. Safe to call more than once. */
export function initTracking(): void {
  if (wired || typeof window === 'undefined') return
  wired = true
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('pagehide', onHide)
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') onHide()
  })
}
