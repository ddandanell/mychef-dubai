import { memo } from 'react'
import { Phone } from 'lucide-react'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to request a quote')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const WhatsAppButton = memo(function WhatsAppButton() {
  return (
    <>
      {/* Desktop: Inline in nav (handled in Navbar) */}
      {/* Mobile: Floating button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 lg:hidden flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] border-2 border-gold shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Chat on WhatsApp"
      >
        <Phone size={24} color="white" fill="white" />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full border-2 border-gold animate-pulse-ring pointer-events-none" />
      </a>
    </>
  )
})

export default WhatsAppButton
