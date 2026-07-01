import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { X } from 'lucide-react'

const WHATSAPP_NUMBER = '971551744849'
const STORAGE_KEY = 'mychef-chef-chat-closed'
const EXCLUDED_PATHS = ['/inquiry', '/thank-you']

const topicMap: Record<string, string> = {
  '/': 'our private chef and catering services',
  '/catering-dubai': 'catering in Dubai',
  '/catering-packages-dubai': 'our catering packages',
  '/private-chef-dubai': 'private chef service',
  '/private-chef-prices-dubai': 'private chef prices',
  '/luxury-dining-experiences': 'luxury dining experiences',
  '/events': 'event catering',
  '/corporate': 'corporate catering',
  '/villas-private-residences': 'villa catering',
  '/yachts': 'yacht catering',
  '/party-catering-dubai': 'party catering',
  '/wedding-catering-dubai': 'wedding catering',
  '/birthday-catering-dubai': 'birthday catering',
  '/cuisines-dubai': 'world cuisines',
  '/festive-catering-dubai': 'festive catering',
  '/menus': 'our menus',
  '/guides': 'our planning guides',
  '/dubai-food-trends-report-2026': 'Dubai food trends',
  '/dubai-event-catering-price-guide-2026': 'event catering prices',
  '/guide/private-dining-dubai': 'private dining',
  '/yacht-catering-checklist-dubai': 'yacht catering',
  '/wedding-catering-menu-planning-dubai': 'wedding menu planning',
  '/inquiry': 'your custom quote',
}

function getTopic(pathname: string): string {
  if (topicMap[pathname]) return topicMap[pathname]
  if (pathname.startsWith('/locations/')) return 'catering in this area'
  if (pathname.startsWith('/blog/')) return 'this topic'
  if (pathname.startsWith('/chefs/')) return 'our chefs'
  return 'our private chef and catering services'
}

export default function FloatingChefChat() {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const closed = localStorage.getItem(STORAGE_KEY)
    if (closed || EXCLUDED_PATHS.includes(pathname)) return

    const timer = setTimeout(() => {
      setVisible(true)
    }, 2500)

    return () => clearTimeout(timer)
  }, [pathname])

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation()
    setVisible(false)
    localStorage.setItem(STORAGE_KEY, 'true')
  }

  const handleOpen = () => {
    setVisible(false)
    localStorage.setItem(STORAGE_KEY, 'true')
    const topic = getTopic(pathname)
    const text = encodeURIComponent(`Hi myCHEF Dubai, can you tell me more about ${topic}?`)
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}&utm_source=mychef.ae&utm_medium=floating_chef_chat&utm_campaign=${encodeURIComponent(pathname.replace(/^\//, '').replace(/\//g, '-') || 'home')}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  if (!mounted) return null

  return (
    <div
      className={`fixed z-50 flex flex-col items-end gap-3 transition-all duration-500 ease-out
        right-4 sm:right-6
        bottom-[calc(5.5rem+env(safe-area-inset-bottom))] sm:bottom-6
        ${visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}
      `}
      aria-label="Chef WhatsApp assistant"
    >
      {/* Message bubble */}
      <div
        onClick={handleOpen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleOpen() }}
        className="group relative max-w-[260px] sm:max-w-[300px] bg-white text-black rounded-2xl rounded-br-sm shadow-[0_8px_30px_rgba(0,0,0,0.25)] p-4 text-left cursor-pointer transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
      >
        <span className="font-inter text-sm leading-relaxed">
          Hey, can I help you? You want to know more about{' '}
          <span className="font-medium text-gold-dark">{getTopic(pathname)}</span>?
        </span>
        <span className="block mt-2 font-inter text-xs text-gray-500">
          Tap to chat on WhatsApp
        </span>

        {/* Close button inside bubble */}
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center shadow-md hover:bg-gold hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          aria-label="Close chef chat"
        >
          <X size={12} strokeWidth={3} />
        </button>
      </div>

      {/* Chef avatar */}
      <button
        onClick={handleOpen}
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-gold shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        aria-label="Open WhatsApp chat with chef"
      >
        <img
          src="/images/chef-avatar.webp"
          alt="myCHEF Dubai chef assistant"
          width={64}
          height={64}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </button>
    </div>
  )
}
