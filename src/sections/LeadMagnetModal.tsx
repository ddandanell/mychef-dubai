import { useState, useEffect, useCallback, useRef } from 'react'
import { X, Phone } from 'lucide-react'
import { trackEvent } from '../lib/analytics'

const STORAGE_KEY = 'mychef_lead_magnet_dismissed'
const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent("Hi myCHEF Dubai, please send me the private dining guide (via mychef.ae)")
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export default function LeadMagnetModal() {
  const [isVisible, setIsVisible] = useState(false)
  const impressionTracked = useRef(false)

  const openModal = useCallback(() => {
    const dismissed = sessionStorage.getItem(STORAGE_KEY)
    if (!dismissed) {
      setIsVisible(true)
    }
  }, [])

  // Trigger after 30 seconds
  useEffect(() => {
    const timer = setTimeout(openModal, 30000)
    return () => clearTimeout(timer)
  }, [openModal])

  // Trigger on scroll past 70%
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight
      if (scrollPercent > 0.7) {
        openModal()
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [openModal])

  useEffect(() => {
    if (isVisible && !impressionTracked.current) {
      impressionTracked.current = true
      trackEvent('lead_magnet_impression', {
        page_path: window.location.pathname,
      })
    }
  }, [isVisible])

  const dismiss = () => {
    setIsVisible(false)
    sessionStorage.setItem(STORAGE_KEY, 'true')
  }

  const handleWhatsAppClick = () => {
    trackEvent('lead_magnet_submit', {
      method: 'whatsapp',
      page_path: window.location.pathname,
    })
    dismiss()
  }

  if (!isVisible) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={dismiss}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-charcoal max-w-[500px] w-full p-8 md:p-12 z-10 animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={dismiss}
          className="absolute top-2 right-2 w-11 h-11 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal rounded-sm"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <h3 className="font-playfair text-h3 text-white mb-4">
          Get Our Private Dining Guide
        </h3>
        <p className="font-inter text-body-sm text-gray-400 leading-relaxed mb-8">
          Discover how to plan the perfect private dining experience in Dubai. Tips, menu ideas, and insider recommendations — sent straight to your WhatsApp.
        </p>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="btn-primary w-full inline-flex items-center justify-center gap-2"
        >
          <Phone size={18} aria-hidden="true" />
          Send Me the Guide on WhatsApp
        </a>
      </div>
    </div>
  )
}
