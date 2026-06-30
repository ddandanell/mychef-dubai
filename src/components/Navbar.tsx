import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Private Chef', href: '/private-chef-dubai' },
  { label: 'Catering', href: '/catering-dubai' },
  { label: 'Experiences', href: '/luxury-dining-experiences' },
  { label: 'Locations', href: '/locations' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I would like to request a quote for private chef or catering services.')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav className="sticky top-0 z-50 h-20 md:h-20 bg-black lg:bg-black/95 lg:backdrop-blur-xl border-b border-white/5">
        <div className="container-custom h-full flex items-center justify-between">
          {/* Mobile: Hamburger */}
          <button
            className="lg:hidden text-gold p-1"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>

          {/* Logo */}
          <Link to="/" className="font-playfair text-2xl font-semibold text-gold tracking-tight">
            myCHEF
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="font-inter text-nav font-medium uppercase text-white hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gold border border-gold rounded-full px-4 py-2 text-sm font-medium hover:bg-gold hover:text-black transition-all duration-300"
              aria-label="Chat on WhatsApp"
            >
              <Phone size={16} />
              <span className="hidden xl:inline">Chat</span>
            </a>
            <Link
              to="/inquiry"
              className="btn-primary text-sm py-3 px-6"
            >
              Get My Quote
            </Link>
          </div>

          {/* Mobile: WhatsApp */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:hidden text-gold p-1"
            aria-label="Chat on WhatsApp"
          >
            <Phone size={24} />
          </a>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-black transition-opacity duration-300 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="container-custom h-full flex flex-col">
          {/* Header */}
          <div className="h-20 flex items-center justify-between">
            <span className="font-playfair text-2xl font-semibold text-gold">myCHEF</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-white p-1"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 flex flex-col items-center justify-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="font-inter text-xl font-medium text-white hover:text-gold transition-colors duration-200"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="pb-10 flex flex-col items-center gap-4">
            <Link to="/inquiry" className="btn-primary w-full text-center" onClick={() => setMobileOpen(false)}>
              Get My Quote
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full text-center"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
