import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router'
import { ArrowUpRight, Clock3, Mail, MessageCircle, X } from 'lucide-react'
import { buildWhatsAppLink } from '@/lib/whatsapp'
import '@/styles/contact-chat.css'

const DISMISSED_KEY = 'mychef-chat-dismissed'
const SHOWN_KEY = 'mychef-chat-shown'
let greeted = false
let dismissed = false
function readFlag(key: string) {
  try { return sessionStorage.getItem(key) === '1' } catch { return false }
}
function saveFlag(key: string) {
  try { sessionStorage.setItem(key, '1') } catch { /* Contact remains usable without storage. */ }
}

const topicMap: Record<string, string> = {
  '/': 'our private chef and catering services',
  '/catering-dubai': 'catering in Dubai',
  '/catering-packages-dubai': 'our catering packages',
  '/private-chef-dubai': 'private chef service',
  '/private-chef-dubai/pricing': 'private chef prices',
  '/luxury-dining-experiences': 'luxury dining experiences',
  '/events': 'event catering',
  '/corporate': 'corporate catering',
  '/villas-private-residences': 'villa catering',
  '/yachts': 'yacht catering',
  '/private-party-catering-dubai': 'party catering',
  '/wedding-catering-dubai': 'wedding catering',
  '/wedding-catering-checklist-dubai': 'wedding catering planning',
  '/blog/wedding-catering-cost-dubai': 'wedding catering cost',
  '/birthday-catering-dubai': 'birthday catering',
  '/cuisines-dubai': 'world cuisines',
  '/festive-catering-dubai': 'festive catering',
  '/menus': 'our menus',
  '/guides': 'our planning guides',
  '/dubai-food-trends-report-2026': 'Dubai food trends',
  '/dubai-event-catering-price-guide-2026': 'event catering prices',
  '/guide/private-dining-dubai': 'private dining',
  '/wedding-catering-menu-planning-dubai': 'wedding menu planning',
  '/inquiry': 'your custom quote',
}

function getTopic(pathname: string): string {
  if (topicMap[pathname]) return topicMap[pathname]
  if (pathname.startsWith('/locations/')) return 'catering in this area'
  if (pathname.startsWith('/blog/')) return 'this topic'
  if (pathname.startsWith('/chefs/')) return 'Our Chefs'
  return 'our private chef and catering services'
}

export default function FloatingChefChat() {
  const { pathname } = useLocation()
  const [bubbleOpen, setBubbleOpen] = useState(false)
  const launcher = useRef<HTMLButtonElement>(null)
  const panel = useRef<HTMLElement>(null)
  const interacted = useRef(false)
  const path = pathname.replace(/\/$/, '') || '/'
  const raised = path === '/private-chef-dubai/pricing' ? 'mc-contact--pricing' : path === '/yachts' ? 'mc-contact--yacht' : ''

  useEffect(() => {
    setBubbleOpen(false)
    // Keep the launcher on every public page. Do not interrupt an enquiry form
    // or confirmation page, and show the automatic greeting only once per tab.
    if (greeted || dismissed || readFlag(DISMISSED_KEY) || readFlag(SHOWN_KEY) || ['/inquiry', '/thank-you'].includes(path)) return
    const timer = window.setTimeout(() => {
      if (interacted.current || document.hidden || document.querySelector('[role="dialog"]') || document.activeElement?.matches('input, textarea, select, [contenteditable="true"]')) return
      greeted = true
      saveFlag(SHOWN_KEY)
      setBubbleOpen(true)
    }, 4500)
    return () => window.clearTimeout(timer)
  }, [path])

  const close = () => {
    interacted.current = true
    dismissed = true
    saveFlag(DISMISSED_KEY)
    setBubbleOpen(false)
    launcher.current?.focus({ preventScroll: true })
  }

  useEffect(() => {
    if (!bubbleOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      dismissed = true
      interacted.current = true
      saveFlag(DISMISSED_KEY)
      if (panel.current?.contains(document.activeElement)) launcher.current?.focus({ preventScroll: true })
      setBubbleOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [bubbleOpen])

  const whatsapp = buildWhatsAppLink(`Hi myCHEF Dubai, can you tell me more about ${getTopic(path)}?`, { medium: 'contact_chat', campaign: path })

  return <aside data-floating-chef-chat className={`mc-contact ${raised}`} aria-label="Contact myCHEF">
    {bubbleOpen && <section ref={panel} id="mychef-contact-panel" className="mc-contact-panel" aria-labelledby="mychef-contact-heading">
      <header className="mc-contact-header">
        <span className="mc-contact-mark"><MessageCircle size={22} aria-hidden="true" /></span>
        <div><p className="mc-contact-eyebrow">YOUR OCCASION. OUR EXPERTISE.</p><h2 id="mychef-contact-heading">Let’s plan something special.</h2></div>
        <button type="button" onClick={close} className="mc-contact-close" aria-label="Close contact chat"><X size={20} aria-hidden="true" /></button>
      </header>
      <div className="mc-contact-body">
        <div className="mc-contact-reply"><Clock3 size={20} aria-hidden="true" /><p>We reply in around <strong>15 minutes</strong> on average during business hours.</p></div>
        <p className="mc-contact-hours">9am–9pm Dubai time</p>
        <p className="mc-contact-invitation">A chef at home or an occasion to celebrate? Tell us what you have in mind.</p>
        <a className="mc-contact-whatsapp" data-placement="sticky" data-cta-location="contact_chat" href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={19} aria-hidden="true" />Chat on WhatsApp<ArrowUpRight size={18} aria-hidden="true" /></a>
        <a className="mc-contact-email" data-placement="sticky" data-cta-location="contact_chat" href="mailto:info@mychef.ae?subject=myCHEF%20enquiry"><Mail size={18} aria-hidden="true" />Prefer email? Write to us</a>
        <p className="mc-contact-note">Clear, itemised pricing before you book.</p>
      </div>
    </section>}
    <button ref={launcher} type="button" className="mc-contact-launcher" aria-label={bubbleOpen ? 'Close contact chat' : 'Open contact chat'} aria-expanded={bubbleOpen} aria-controls="mychef-contact-panel" onClick={() => {
      if (bubbleOpen) close()
      else {
        interacted.current = true
        greeted = true
        saveFlag(SHOWN_KEY)
        setBubbleOpen(true)
      }
    }}>
      {bubbleOpen ? <X size={22} aria-hidden="true" /> : <MessageCircle size={22} aria-hidden="true" />}
      <span>{bubbleOpen ? 'Close chat' : 'Chat with myCHEF'}</span>
    </button>
  </aside>
}
