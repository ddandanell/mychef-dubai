import { memo } from 'react'
import { Link } from 'react-router'
import { Phone, FileText } from 'lucide-react'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to request a proposal')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const StickyMobileCTA = memo(function StickyMobileCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-black border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.4)]"
      aria-label="Mobile call-to-action"
    >
      <div className="flex items-center h-16 px-4 gap-3">
        <Link
          to="/inquiry?utm_source=mychef.ae&utm_medium=sticky_bar&utm_campaign=mobile"
          className="btn-primary flex-1 h-11 px-4 text-xs uppercase tracking-wider"
        >
          <FileText size={16} className="mr-2 shrink-0" />
          Request a Proposal
        </Link>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary flex-1 h-11 px-4 text-xs uppercase tracking-wider"
        >
          <Phone size={16} className="mr-2 shrink-0" />
          Chat on WhatsApp
        </a>
      </div>
    </div>
  )
})

export default StickyMobileCTA
