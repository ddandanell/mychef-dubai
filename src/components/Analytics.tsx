import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { GA_MEASUREMENT_ID, initAnalytics, trackPageView, trackEvent } from '../lib/analytics'

/**
 * Loads GA4, sends a page_view on every client-side route change, and auto-tracks
 * the two conversions that matter on this site: WhatsApp clicks and lead-form
 * submits. Renders nothing. Fully inert until GA_MEASUREMENT_ID is set.
 */
export default function Analytics() {
  const location = useLocation()

  useEffect(() => {
    initAnalytics()
  }, [])

  useEffect(() => {
    trackPageView(location.pathname + location.search)
  }, [location.pathname, location.search])

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      const a = target?.closest('a') as HTMLAnchorElement | null
      if (!a) return

      const href = a.getAttribute('href') || ''
      const pagePath = window.location.pathname
      const ctaText = a.innerText?.trim() || a.getAttribute('aria-label') || ''

      if (/wa\.me|api\.whatsapp|whatsapp/i.test(href)) {
        trackEvent('whatsapp_click', {
          link_url: href,
          page_path: pagePath,
          cta_text: ctaText,
        })
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
