import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { initAnalytics, trackPageView, trackEvent } from '../lib/analytics'
import { initTracking, trackPage, trackConversion } from '../lib/track'
import { formLabel, placementFromElement } from '../lib/trackVocab'

/**
 * Loads GA4, sends a page_view on every client-side route change, and mirrors
 * conversions into the first-party collector. Labels are an allow-list. Renders
 * nothing. GA stays inert until GA_MEASUREMENT_ID is set; first-party runs either way.
 */
export default function Analytics() {
  const location = useLocation()

  useEffect(() => {
    initAnalytics()
    initTracking()
  }, [])

  useEffect(() => {
    if (location.pathname === '/seo' || location.pathname.startsWith('/seo/')) return
    trackPageView(location.pathname + location.search)
    trackPage(location.pathname)
    if (/^\/inquiry\/?$/.test(location.pathname)) {
      trackConversion('inquiry_start', 'inquiry_form')
    }
  }, [location.pathname, location.search])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (window.location.pathname === '/seo' || window.location.pathname.startsWith('/seo/')) return
      const target = e.target as HTMLElement | null
      const a = target?.closest('a') as HTMLAnchorElement | null
      if (!a) return

      const href = a.getAttribute('href') || ''
      const pagePath = window.location.pathname
      const ctaText = a.innerText?.trim() || a.getAttribute('aria-label') || ''
      const track = a.getAttribute('data-track') || ''
      const placement = placementFromElement(a)

      if (track === 'event_card' || track === 'service_card') {
        trackEvent(track === 'service_card' ? 'service_card_click' : 'event_card_click', {
          link_url: href,
          page_path: pagePath,
          cta_text: ctaText,
        })
      }

      if (track === 'price_table') {
        trackEvent('price_table_click', {
          link_url: href,
          page_path: pagePath,
          cta_text: ctaText,
        })
      }

      if (/wa\.me|api\.whatsapp|whatsapp/i.test(href)) {
        trackEvent('whatsapp_click', {
          link_url: href,
          page_path: pagePath,
          cta_text: ctaText,
        })
        trackConversion('cta_click', placement)
        trackConversion('whatsapp_click', placement)
        return
      }

      if (href.startsWith('mailto:')) {
        trackEvent('email_click', {
          link_url: href,
          page_path: pagePath,
        })
        trackConversion('email_click', placement)
        return
      }

      if (href.startsWith('tel:')) {
        trackEvent('phone_click', {
          link_url: href,
          page_path: pagePath,
        })
        trackConversion('phone_click', placement)
        return
      }

      if (/^\/?inquiry(\?|$)/i.test(href)) {
        trackEvent('begin_inquiry', {
          link_url: href,
          page_path: pagePath,
          cta_text: ctaText,
        })
        trackConversion('cta_click', placement)
        return
      }

      if (/catering-cost-calculator-dubai/.test(href)) {
        trackEvent('calculator_click', {
          link_url: href,
          page_path: pagePath,
          cta_text: ctaText,
        })
        trackConversion('cta_click', placement)
        return
      }

      if (/dubai-catering-prices-guide|catering-packages-dubai/.test(href)) {
        trackEvent('pricing_guide_click', {
          link_url: href,
          page_path: pagePath,
          cta_text: ctaText,
        })
      }
    }

    const onSubmit = (e: Event) => {
      const form = e.target as HTMLFormElement | null
      const formId = (form && form.id) || 'lead_form'
      const method = formLabel(formId)

      trackEvent('generate_lead', {
        form_id: formId,
        method,
        page_path: window.location.pathname,
      })
      trackConversion('form_submit', method)
    }

    document.addEventListener('click', onClick, true)
    document.addEventListener('submit', onSubmit, true)
    return () => {
      document.removeEventListener('click', onClick, true)
      document.removeEventListener('submit', onSubmit, true)
    }
  }, [])

  return null
}
