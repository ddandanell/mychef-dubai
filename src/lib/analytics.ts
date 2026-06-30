// =============================================================================
// Google Analytics 4 — dedicated property for mychef.ae
// =============================================================================
// The Measurement ID is PUBLIC (it appears in the page source) — it is NOT a
// secret. Paste your dedicated property's ID below (format: 'G-XXXXXXXXXX') to
// switch analytics on. While it is an empty string, GA is fully inert: no
// script loads, no network calls, no errors.
// =============================================================================

export const GA_MEASUREMENT_ID = 'G-26YM3CE8CB'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

/** Loads gtag.js once and configures the property (manual page_view for SPA). */
export function initAnalytics(): void {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return
  if (document.getElementById('ga4-src')) return

  const s = document.createElement('script')
  s.id = 'ga4-src'
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(s)

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  // send_page_view:false — we fire page_view manually on every client-side route change.
  window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false })
}

export function trackPageView(path: string): void {
  if (!GA_MEASUREMENT_ID || typeof window.gtag !== 'function') return
  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  })
}

export function trackEvent(name: string, params: Record<string, unknown> = {}): void {
  if (!GA_MEASUREMENT_ID || typeof window.gtag !== 'function') return
  window.gtag('event', name, params)
}
