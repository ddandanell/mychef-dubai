import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useLocation } from 'react-router'
import '@/styles/client-reviews.css'

const WIDGET_ID = 'GxRGAhebMrf6'
const API_URL = `https://api.giveme5.ai/api/v2/widget/embed?id=${WIDGET_ID}`
interface WidgetInstance { init: () => Promise<void>; destroy: () => void; data?: unknown }
type WidgetRuntime = Window & { GM5ReviewWidget?: new (element: HTMLElement, id: string) => WidgetInstance; __gm5_prefetch?: Promise<Response> }
let bundle: Promise<void> | undefined
let prefetched: Promise<Response> | undefined
function loadWidget(): Promise<void> {
  if (bundle) return bundle
  for (const href of ['https://api.giveme5.ai', 'https://portal.giveme5.ai']) {
    if (!document.querySelector(`link[rel="preconnect"][href="${href}"]`)) {
      const link = document.createElement('link'); link.rel = 'preconnect'; link.href = href; link.crossOrigin = 'anonymous'; document.head.appendChild(link)
    }
  }
  prefetched = fetch(API_URL)
  // Keep a reusable response for SPA navigation, without consuming it twice.
  prefetched.catch(() => undefined)
  bundle = new Promise((resolve, reject) => {
    const script = document.createElement('script'); script.id = 'mychef-gm5-bundle'
    // The provider's constructor accepts the supplied widget ID. Loading the
    // runtime without an ID avoids its automatic insertion next to <head>.
    script.src = 'https://portal.giveme5.ai/public/widget.js'; script.async = true
    script.onload = () => resolve(); script.onerror = () => reject(new Error('Reviews could not be loaded'))
    document.head.appendChild(script)
  })
  return bundle
}
function ReviewsSection() {
  const host = useRef<HTMLDivElement>(null)
  const section = useRef<HTMLElement>(null)
  const [unavailable, setUnavailable] = useState(false)
  useEffect(() => {
    if (window.__MYCHEF_PRERENDER__ || !host.current || !section.current) return
    let cancelled = false; let instance: WidgetInstance | undefined; let started = false
    const start = async () => {
      if (started) return; started = true
      try {
        await loadWidget()
        if (cancelled || !host.current) return
        const runtime = window as WidgetRuntime
        if (!runtime.GM5ReviewWidget) throw new Error('Review runtime unavailable')
        runtime.__gm5_prefetch = prefetched!.then(response => response.clone())
        instance = new runtime.GM5ReviewWidget(host.current, WIDGET_ID)
        await instance.init()
        if (cancelled) { instance.destroy(); return }
        if (!instance.data) { instance.destroy(); setUnavailable(true) }
      } catch {
        if (!cancelled) setUnavailable(true)
      }
    }
    const observer = new IntersectionObserver(entries => { if (entries.some(e => e.isIntersecting)) { observer.disconnect(); void start() } }, { rootMargin: '600px' })
    observer.observe(section.current)
    return () => { cancelled = true; observer.disconnect(); instance?.destroy() }
  }, [])
  return <section ref={section} className="mychef-client-reviews" data-mychef-reviews aria-labelledby="mychef-reviews-heading">
    <div className="mychef-client-reviews-inner"><p className="mychef-reviews-eyebrow">Client reviews</p><h2 id="mychef-reviews-heading" className="sr-only">Client reviews</h2><p className="mychef-reviews-intro">Read our clients’ experiences before you plan your booking.</p><div ref={host} data-mychef-review-host />{unavailable && <p className="mychef-reviews-unavailable" role="status">Reviews are temporarily unavailable. Please try again shortly.</p>}</div>
  </section>
}
const utility = new Set(['/thank-you','/review','/privacy-policy','/terms','/private-client-booking-terms','/corporate-booking-terms','/site-map'])
function pricingAnchor(): {element:HTMLElement;before?:boolean}|undefined {
  const catalogueExtras = document.querySelector<HTMLElement>('.mc-main > #extras')
  if (catalogueExtras && catalogueExtras.getClientRects().length) return {element:catalogueExtras,before:true}
  const ids = ['pricing','chef-prices','visit-rates','prices','packages','ct-pricing','ch-pricing','sh-pricing','calculator','budget','budgets','household-pricing','managed-pricing','chef-detail-budget']
  for (const id of ids) {
    const section = document.getElementById(id)
    if (section && section.getClientRects().length && section.matches('section,article') && !section.closest('[data-mychef-reviews]')) return {element:section}
  }
  for (const heading of document.querySelectorAll<HTMLElement>('main h2, main h3')) {
    const text = heading.textContent || ''
    if (text.length > 140 || !/pricing|prices|\bprice\b|rates|what.{0,25}cost|how much|budget|packages|investment/i.test(text)) continue
    const section = heading.closest<HTMLElement>('section')
    if (section && section.getClientRects().length && /AED/.test(section.textContent || '') && !/faq|hero|guide/.test(section.id) && !section.closest('[data-mychef-reviews]')) return {element:section}
  }
  return undefined
}
/** One review section on every marketing page, moved below its primary prices. */
export default function ClientReviews() {
  const {pathname} = useLocation()
  const [target,setTarget] = useState<HTMLElement|null>(null)
  const disabled = pathname.startsWith('/seo') || utility.has(pathname)
  useEffect(() => {
    if (disabled || window.__MYCHEF_PRERENDER__) return
    let mount:HTMLDivElement|undefined
    const place = () => {
      if (mount?.isConnected) return
      const anchor = pricingAnchor()
      if (!anchor) return
      mount = document.createElement('div'); mount.dataset.mychefReviewPlacement = 'after-pricing'
      if (anchor.before) anchor.element.before(mount); else anchor.element.after(mount)
      setTarget(mount)
    }
    place()
    const observer = new MutationObserver(place)
    observer.observe(document.querySelector('main') || document.body,{childList:true,subtree:true})
    return () => {observer.disconnect();mount?.remove()}
  }, [disabled,pathname])
  if (disabled) return null
  return target ? createPortal(<ReviewsSection/>,target) : <ReviewsSection/>
}
