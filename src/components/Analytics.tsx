import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { initAnalytics, trackPageView, trackEvent } from '../lib/analytics'
import { initTracking, trackPage, trackConversion } from '../lib/track'

/**
 * Loads GA4, sends a page_view on every client-side route change, and auto-tracks
 * the two conversions that matter on this site: WhatsApp clicks and lead-form
 * submits, and mirrors the two conversions into the first-party collector.
 * Renders nothing. GA stays inert until GA_MEASUREMENT_ID is set; the first-party
 * collector runs either way.
 */
export default function Analytics() {
  const location = useLocation()

  useEffect(() => {
    initAnalytics()
    initTracking()
  }, [])

  useEffect(() => {
    trackPageView(location.pathname + location.search)
    trackPage(location.pathname)
  }, [location.pathname, location.search])

  useEffect(() => {
    // Both GA and the first-party collector read these listeners. trackEvent() is inert
    // without a measurement id, so the listeners no longer depend on GA being configured.
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      const a = target?.closest('a') as HTMLAnchorElement | null
      if (!a) return

      const href = a.getAttribute('href') || ''
      const pagePath = window.location.pathname
      const ctaText = a.innerText?.trim() || a.getAttribute('aria-label') || ''
      const track = a.getAttribute('data-track') || ''

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
        trackConversion('whatsapp_click', track || 'link')
        return
      }

      if (href.startsWith('mailto:')) {
        trackEvent('email_click', {
          link_url: href,
          page_path: pagePath,
        })
        return
      }

      if (href.startsWith('tel:')) {
        trackEvent('phone_click', {
          link_url: href,
          page_path: pagePath,
        })
        return
      }

      // Quote / inquiry CTAs route to /inquiry (including UTM-tagged links)
      if (/^\/?inquiry(\?|$)/i.test(href)) {
        trackEvent('begin_inquiry', {
          link_url: href,
          page_path: pagePath,
          cta_text: ctaText,
        })
        return
      }

      if (/catering-cost-calculator-dubai/.test(href)) {
        trackEvent('calculator_click', {
          link_url: href,
          page_path: pagePath,
          cta_text: ctaText,
        })
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
      const method =
        formId === 'inquiry-form' ? 'inquiry_form' :
        formId === 'contact-form' ? 'contact_form' :
        formId === 'lead-magnet-form' ? 'lead_magnet' : 'lead_form'

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
