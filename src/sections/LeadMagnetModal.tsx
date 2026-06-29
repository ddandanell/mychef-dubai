import { useState, useEffect, useCallback } from 'react'
import { X } from 'lucide-react'

const STORAGE_KEY = 'mychef_lead_magnet_dismissed'

export default function LeadMagnetModal() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [phone, setPhone] = useState('')

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

  const dismiss = () => {
    setIsVisible(false)
    sessionStorage.setItem(STORAGE_KEY, 'true')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (phone.trim()) {
      setIsSubmitted(true)
      setTimeout(() => {
        dismiss()
      }, 3000)
    }
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
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {!isSubmitted ? (
          <>
            <h3 className="font-playfair text-h3 text-white mb-4">
              Get Our Private Dining Guide
            </h3>
            <p className="font-inter text-body-sm text-gray-400 leading-relaxed mb-8">
              Discover how to plan the perfect private dining experience in Dubai. Tips, menu ideas, and insider recommendations — delivered to your WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Your phone number (WhatsApp)"
                className="w-full bg-charcoal-light border border-charcoal-light text-white placeholder:text-gray-500 px-4 py-3.5 font-inter text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-200"
                required
              />
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Send Me the Guide
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <h3 className="font-playfair text-h3 text-gold mb-4">
              Thank You!
            </h3>
            <p className="font-inter text-body-sm text-gray-400">
              We will send your guide shortly.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
