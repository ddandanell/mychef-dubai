import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { initAnalytics, trackPageView, trackEvent } from '../lib/analytics'
import { initTracking, trackPage, trackConversion } from '../lib/track'
import { formLabel, placementFromElement } from '../lib/trackVocab'
import { classifyTrackedCta, conversionParams, ctaTextParam, shouldGenerateLead } from '../lib/conversionEvents'

/**
 * Loads GA4, sends a page_view on every client-side route change, and mirrors
 * conversions into the first-party collector. Labels are an allow-list. Renders
 * nothing. GA stays inert until GA_MEASUREMENT_ID is set; first-party runs either way.
 *
 * Conversion events (one per click, markable in GA4 Admin → Events):
 *   whatsapp_click · quote_click · phone_click · email_click · generate_lead (forms)
 * Engagement (from src/lib/track.ts, also markable as Key events):
 *   scroll_depth { percent_scrolled, page_path } · engaged_scroll { page_path }
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
      const ctaText = ctaTextParam(a.innerText || a.getAttribute('aria-label')) || ''
      const track = a.getAttribute('data-track') || ''
      const placement = placementFromElement(a)
      const ctaLocation = a.getAttribute('data-cta-location') || placement

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

      const conversion = classifyTrackedCta(track, href)
      if (conversion) {
        trackEvent(
          conversion.event,
          conversionParams(conversion, { page_path: pagePath, cta_location: ctaLocation, cta_text: ctaText }),
        )
        if (conversion.event === 'whatsapp_click') {
          trackConversion('cta_click', placement)
          trackConversion('whatsapp_click', placement)
          trackEvent('generate_lead', {
            method: 'whatsapp',
            page_path: pagePath,
            cta_location: ctaLocation,
            ...(ctaText ? { cta_text: ctaText } : {}),
          })
        } else if (conversion.event === 'email_click') {
          trackConversion('email_click', placement)
        } else if (conversion.event === 'phone_click') {
          trackConversion('phone_click', placement)
        } else {
          trackConversion('cta_click', placement)
        }
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
      const path = window.location.pathname
      if (path === '/seo' || path.startsWith('/seo/')) return
      const form = e.target as HTMLFormElement | null
      const formId = (form && form.id) || ''
      if (!shouldGenerateLead(path, formId)) return
      const method = formLabel(formId)
      const ctaLocation = form?.getAttribute('data-cta-location') || form?.getAttribute('data-placement') || method

      trackEvent('generate_lead', {
        form_id: formId,
        method,
        page_path: path,
        cta_location: ctaLocation,
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
