import { memo } from 'react'
import { Link, useLocation } from 'react-router'
import { Phone, FileText } from 'lucide-react'
import { useStickyWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from '@/lib/whatsapp'

interface StickyMobileCTAProps {
  whatsappMessage?: string
}

function sanitizeCampaign(pathname: string): string {
  if (pathname === '/' || pathname === '') return 'home'
  return pathname.replace(/^\//, '').replace(/\//g, '-')
}

const StickyMobileCTA = memo(function StickyMobileCTA({ whatsappMessage }: StickyMobileCTAProps) {
  const ctxMessage = useStickyWhatsAppMessage()
  const { pathname } = useLocation()

  const message = whatsappMessage || ctxMessage || DEFAULT_WHATSAPP_MESSAGE
  const whatsappLink = buildWhatsAppLink(message, {
    source: 'mychef.ae',
    medium: 'sticky_bar',
    campaign: sanitizeCampaign(pathname),
  })

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-black/95 backdrop-blur-sm border-t border-white/10 shadow-[0_-4px_24px_rgba(0,0,0,0.5)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      aria-label="Mobile call-to-action"
    >
      <div className="flex flex-col px-4 py-2">
        <div className="flex items-center min-h-16 gap-3">
          <Link
            to="/inquiry"
            className="btn-primary flex-1 min-h-12 px-4 text-xs uppercase tracking-wider"
          >
            <FileText size={16} className="mr-2 shrink-0" />
            Get a Quote
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex-1 min-h-12 px-4 text-xs uppercase tracking-wider"
          >
            <Phone size={16} className="mr-2 shrink-0" />
            Chat on WhatsApp
          </a>
        </div>
        <p className="text-center font-inter text-[10px] uppercase tracking-wider text-gray-400 mt-1 mb-1">
          Typical reply within 15 min · No obligation
        </p>
      </div>
    </div>
  )
})

export default StickyMobileCTA
