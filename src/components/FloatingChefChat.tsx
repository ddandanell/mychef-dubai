import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Clock3, MessageCircle, X } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'
import { trackConversion } from '@/lib/track'
import { classifyConversionHref, conversionParams } from '@/lib/conversionEvents'


const WHATSAPP_NUMBER = '971551744849'
const EXCLUDED_PATHS = ['/inquiry', '/thank-you']

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

  // Proactively introduce the chat after the visitor has had a moment to read the page.
  // If they close it, keep it closed for the rest of the session.
  useEffect(() => {
    setBubbleOpen(false)
    if (sessionStorage.getItem('mychef-chat-dismissed') === '1') return
    const timer = window.setTimeout(() => setBubbleOpen(true), 4500)
    return () => window.clearTimeout(timer)
  }, [pathname])

  const openWhatsApp = () => {
    const topic = getTopic(pathname)
    const text = encodeURIComponent(`Hi myCHEF Dubai, can you tell me more about ${topic}?`)
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}&utm_source=mychef.ae&utm_medium=floating_chef_chat&utm_campaign=${encodeURIComponent(pathname.replace(/^\//, '').replace(/\//g, '-') || 'home')}`
    const hit = classifyConversionHref(url)
    if (hit) {
      trackEvent('whatsapp_click', conversionParams(hit, { page_path: pathname, cta_location: 'floating_chef' }))
    }
    trackConversion('whatsapp_click', 'link')
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleCloseBubble = (e: React.MouseEvent) => {
    e.stopPropagation()
    sessionStorage.setItem('mychef-chat-dismissed', '1')
    setBubbleOpen(false)
  }

  // Tapping the avatar reveals the prompt; tapping again (or the bubble) opens WhatsApp.
  const handleAvatarClick = () => {
    if (bubbleOpen) openWhatsApp()
    else setBubbleOpen(true)
  }

  if (EXCLUDED_PATHS.includes(pathname)) return null

  return (
    <div
      data-floating-chef-chat
      className={`fixed z-50 ${pathname.replace(/\/$/, '') === '/private-chef-dubai/pricing' ? 'hidden lg:flex' : 'flex'} flex-col items-end gap-3
        right-4 sm:right-6
        bottom-[calc(1rem+env(safe-area-inset-bottom))] sm:bottom-6
        print:hidden`}
      aria-label="Chef WhatsApp assistant"
    >
      {/* Proactive prompt bubble — opens once per session and can be dismissed */}
      {bubbleOpen && (
      <div
        onClick={openWhatsApp}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openWhatsApp() }}
        className="group relative max-w-[280px] sm:max-w-[320px] bg-white text-black rounded-2xl rounded-br-sm border border-gold/30 shadow-[0_12px_40px_rgba(0,0,0,0.28)] p-4 text-left cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_44px_rgba(0,0,0,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
      >
        <div className="flex items-start gap-3 pr-4">
          <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold text-black shadow-sm">
            <Clock3 size={18} strokeWidth={2.25} aria-hidden />
          </div>
          <div>
            <span className="block font-inter text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-dark mb-1">Did you know?</span>
            <span className="block font-inter text-sm font-medium leading-relaxed text-black">
              We reply in around 15 minutes on average during business hours.
            </span>
            <span className="block mt-1 font-inter text-xs leading-relaxed text-gray-500">
              9am–9pm Dubai time · Clear, itemised pricing before you book.
            </span>
            <span className="mt-3 inline-flex items-center gap-1.5 font-inter text-xs font-semibold text-gold-dark">
              <MessageCircle size={14} aria-hidden /> Chat with myCHEF on WhatsApp
            </span>
          </div>
        </div>

        {/* Close button inside bubble */}
        <button
          onClick={handleCloseBubble}
          className="absolute -top-2 -right-2 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center shadow-md hover:bg-gold hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          aria-label="Close chef chat"
        >
          <X size={12} strokeWidth={3} />
        </button>
      </div>
      )}

      {/* Chef avatar — persistent launcher, always available */}
      <button
        onClick={handleAvatarClick}
        className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-gold shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black before:absolute before:inset-0 before:rounded-full before:ring-4 before:ring-gold/20"
        aria-label="Open WhatsApp chat with chef"
      >
        <img
          src="/images/chef-avatar.webp"
          alt="myCHEF Dubai chef assistant"
          width={64}
          height={64}
          className="w-full h-full object-cover bg-black"
          loading="eager"
          decoding="async"
        />
      </button>
    </div>
  )
}
