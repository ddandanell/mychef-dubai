import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X, Phone } from 'lucide-react'
import ChefHatLogo from './ChefHatLogo'

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
  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setMobileOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
      closeRef.current?.focus()
    } else {
      document.body.style.overflow = ''
      hamburgerRef.current?.focus()
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav className="sticky top-0 z-50 h-16 bg-black lg:bg-black/95 lg:backdrop-blur-xl border-b border-white/5">
        <div className="container-custom h-full flex items-center justify-between">
          {/* Mobile: Hamburger */}
          <button
            ref={hamburgerRef}
            className="lg:hidden text-gold p-2 -ml-2 min-w-10 min-h-10 flex items-center justify-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5 group" aria-label="myCHEF Dubai home">
            <ChefHatLogo className="h-6 w-6 text-gold transition-transform duration-300 group-hover:scale-110" />
            <span className="font-playfair text-xl font-semibold text-gold tracking-tight">
              myCHEF
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href))
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`font-inter text-xs font-medium uppercase tracking-wide transition-colors duration-200 relative ${
                    isActive ? 'text-gold' : 'text-white hover:text-gold'
                  }`}
                >
                  {link.label}
                  {isActive && <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold" />}
                </Link>
              )
            })}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gold border border-gold rounded-full px-3 py-1.5 text-xs font-medium hover:bg-gold hover:text-black transition-all duration-300"
              aria-label="Chat on WhatsApp"
            >
              <Phone size={14} />
              <span className="hidden xl:inline">Chat</span>
            </a>
            <Link
              to="/inquiry"
              className="btn-primary text-xs py-2 px-4"
            >
              Request a Proposal
            </Link>
          </div>

          {/* Mobile: WhatsApp */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:hidden text-gold p-2 -mr-2 min-w-10 min-h-10 flex items-center justify-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label="Chat on WhatsApp"
          >
            <Phone size={22} />
          </a>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
      <div
        className="fixed inset-0 z-[100] bg-black lg:hidden"
      >
        <div className="container-custom h-full flex flex-col">
          {/* Header */}
          <div className="h-16 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <ChefHatLogo className="h-6 w-6 text-gold" />
              <span className="font-playfair text-xl font-semibold text-gold">myCHEF</span>
            </span>
            <button
              ref={closeRef}
              onClick={() => setMobileOpen(false)}
              className="text-white p-2 -mr-2 min-w-10 min-h-10 flex items-center justify-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 flex flex-col items-center justify-center gap-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href))
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`font-inter text-lg font-medium transition-colors duration-200 ${
                    isActive ? 'text-gold' : 'text-white hover:text-gold'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* CTA */}
          <div className="pb-10 flex flex-col items-center gap-4">
            <Link to="/inquiry" className="btn-primary w-full text-center" onClick={() => setMobileOpen(false)}>
              Request a Proposal
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
      )}
    </>
  )
}
