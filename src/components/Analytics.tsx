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
      if (a && /wa\.me|api\.whatsapp|whatsapp/i.test(a.href)) {
        trackEvent('whatsapp_click', {
          link_url: a.href,
          page_path: window.location.pathname,
        })
      }
    }

    const onSubmit = (e: Event) => {
      const form = e.target as HTMLFormElement | null
      trackEvent('generate_lead', {
        form_id: (form && form.id) || 'lead_form',
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
