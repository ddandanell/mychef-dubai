import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useLocation } from 'react-router'
import PreviousWorkPreview from './previous-work/PreviousWorkPreview'
import '@/styles/client-reviews.css'

const WIDGET_ID = 'GxRGAhebMrf6'
const API_URL = `https://api.giveme5.ai/api/v2/widget/embed?id=${WIDGET_ID}`
interface WidgetInstance { init: () => Promise<void>; destroy: () => void; data?: unknown }
type WidgetRuntime = Window & { GM5ReviewWidget?: new (element: HTMLElement, id: string) => WidgetInstance; __gm5_prefetch?: Promise<Response> }
let bundle: Promise<void> | undefined
let prefetched: Promise<Response> | undefined
function loadWidget(): Promise<void> {
  if ((window as WidgetRuntime).GM5ReviewWidget) {
    prefetched ||= fetch(API_URL)
    prefetched.catch(() => undefined)
    return Promise.resolve()
  }
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
        runtime.__gm5_prefetch = prefetched!.then(async response => {
          const payload = await response.clone().json()
          // The provider's looping carousel renders cloned cards. A compact
          // grid shows each review once, with further reviews available on tap.
          // Only presentation settings change; ratings and review text stay intact.
          if (payload.data?.configuration?.layout) {
            payload.data.widgetType = 'grid'
            Object.assign(payload.data.configuration.layout, { type:'grid', autoPlay:false, showLoadMore:true, itemsPerPage:window.innerWidth <= 600 ? 1 : 3 })
            if (payload.data.configuration.header?.title) payload.data.configuration.header.title.text = 'Google reviews from our clients'
            if (payload.data.configuration.header?.caption) payload.data.configuration.header.caption.text = 'Client feedback on myCHEF food and service.'
          }
          const result = new Response(JSON.stringify(payload), {status:response.status, headers:{'Content-Type':'application/json'}})
          Object.defineProperty(result,'url',{value:API_URL})
          return result
        })
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
  return <><section ref={section} className="mychef-client-reviews" data-mychef-reviews aria-labelledby="mychef-reviews-heading">
    <div className="mychef-client-reviews-inner"><p className="mychef-reviews-eyebrow">Client reviews</p><h2 id="mychef-reviews-heading" className="sr-only">Client reviews</h2><p className="mychef-reviews-intro">Read our clients’ experiences before you plan your booking.</p><div ref={host} data-mychef-review-host />{unavailable && <p className="mychef-reviews-unavailable" role="status">Reviews are temporarily unavailable. Please try again shortly.</p>}</div>
  </section><PreviousWorkPreview /></>
}
const utility = new Set(['/thank-you','/review','/privacy-policy','/terms','/private-client-booking-terms','/corporate-booking-terms','/site-map'])
function primaryContentAnchor(pathname: string): HTMLElement | undefined {
  // The hero and first substantial service section lead. Reviews then become
  // section three, followed by one photo preview. Ignore card headers, nested
  // sections and the support modules appended by the site shell.
  const content = document.querySelector<HTMLElement>('[data-mychef-route-content]')
  // During a lazy navigation the destination may not have committed yet.
  // Never use the previous route or the shell's appended support sections.
  if (content?.dataset.mychefRouteContent !== pathname || !content.querySelector('h1')) return
  const sections = [...content.querySelectorAll<HTMLElement>('section, header')].filter(element => {
    if (!element.getClientRects().length || !element.querySelector('h1,h2,h3')) return false
    if (element.closest('[data-mychef-review-placement],[data-mychef-reviews],[data-previous-work-preview]')) return false
    if (element.parentElement?.closest('section,header')) return false
    return true
  })
  return sections[1]
}
/** One review section on relevant sales/trust pages, after primary service content. */
export default function ClientReviews({ inline = false }: { inline?: boolean }) {
  const {pathname} = useLocation()
  const [target,setTarget] = useState<HTMLElement|null>(null)
  const disabled = pathname.startsWith('/seo') || utility.has(pathname)
  const editorial = pathname === '/best-catering-companies-dubai' || pathname === '/blog' || pathname.startsWith('/blog/') || pathname === '/guides' || pathname.startsWith('/guide/') || /guide|checklist|trends|report|private-chef-vs|buffet-vs/.test(pathname)
  useEffect(() => {
    if (inline || disabled || editorial) return
    let mount:HTMLDivElement|undefined
    const place = () => {
      if (mount?.isConnected) return
      const anchor = primaryContentAnchor(pathname)
      if (!anchor) return
      mount = document.createElement('div'); mount.dataset.mychefReviewPlacement = 'after-primary-content'
      anchor.after(mount)
      setTarget(mount)
    }
    place()
    const observer = new MutationObserver(place)
    observer.observe(document.querySelector('main') || document.body,{childList:true,subtree:true})
    return () => {observer.disconnect();mount?.remove()}
  }, [disabled,editorial,inline,pathname])
  if (disabled) return null
  if (editorial) return <PreviousWorkPreview />
  // Do not initialise a second fallback widget while the route is still loading.
  if (inline || typeof window === 'undefined') return <ReviewsSection/>
  return target ? createPortal(<ReviewsSection/>,target) : window.__MYCHEF_PRERENDER__ ? <ReviewsSection/> : null
}
