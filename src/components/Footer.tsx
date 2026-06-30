import { Link } from 'react-router'
import { Phone, Mail, MapPin } from 'lucide-react'

const serviceLinks = [
  { label: 'Private Chef Dubai', href: '/private-chef-dubai' },
  { label: 'Catering Dubai', href: '/catering-dubai' },
  { label: 'Luxury Dining', href: '/luxury-dining-experiences' },
  { label: 'Events & Celebrations', href: '/events' },
  { label: 'Corporate Dining', href: '/corporate' },
  { label: 'Villas & Residences', href: '/villas-private-residences' },
  { label: 'Yachts', href: '/yachts' },
]

const locationLinks = [
  { label: 'Dubai Marina', href: '/locations/dubai-marina' },
  { label: 'Downtown Dubai', href: '/locations/downtown-dubai' },
  { label: 'Palm Jumeirah', href: '/locations/palm-jumeirah' },
  { label: 'Jumeirah', href: '/locations/jumeirah' },
  { label: 'JBR', href: '/locations/jbr' },
  { label: 'Business Bay', href: '/locations/business-bay' },
  { label: 'DIFC', href: '/locations/difc' },
  { label: 'Emirates Hills', href: '/locations/emirates-hills' },
  { label: 'Arabian Ranches', href: '/locations/arabian-ranches' },
  { label: 'Dubai Hills', href: '/locations/dubai-hills' },
  { label: 'JVC', href: '/locations/jvc' },
  { label: 'JLT', href: '/locations/jlt' },
  { label: 'Bluewaters Island', href: '/locations/bluewaters-island' },
  { label: 'Umm Suqeim', href: '/locations/umm-suqeim' },
  { label: 'Al Barsha', href: '/locations/al-barsha' },
]

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to request a quote')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export default function Footer() {
  return (
    <footer className="bg-black border-t border-charcoal-light">
      <div className="container-custom pt-20 pb-10">
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Col 1: Brand */}
          <div>
            <Link to="/" className="font-playfair text-3xl font-semibold text-gold">
              myCHEF
            </Link>
            <p className="mt-4 font-inter text-body-sm text-gray-400 leading-relaxed">
              Premium Private Chef & Catering, Dubai
            </p>
            <p className="mt-4 font-inter text-body-sm text-gray-500 leading-relaxed">
              Bespoke culinary experiences for villas, yachts, and events across Dubai.
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-inter text-caption font-medium uppercase tracking-wider text-white mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-inter text-body-sm text-gray-400 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Locations */}
          <div>
            <h4 className="font-inter text-caption font-medium uppercase tracking-wider text-white mb-6">
              Locations
            </h4>
            <ul className="space-y-3">
              {locationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-inter text-body-sm text-gray-400 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-inter text-caption font-medium uppercase tracking-wider text-white mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-inter text-body-sm text-gray-400 hover:text-gold transition-colors duration-200"
                >
                  <Phone size={16} className="text-gold flex-shrink-0" />
                  <span>+971 55 174 4849</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@mychefdubai.com"
                  className="flex items-center gap-3 font-inter text-body-sm text-gray-400 hover:text-gold transition-colors duration-200"
                >
                  <Mail size={16} className="text-gold flex-shrink-0" />
                  <span>info@mychefdubai.com</span>
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 font-inter text-body-sm text-gray-400">
                  <MapPin size={16} className="text-gold flex-shrink-0 mt-0.5" />
                  <span>Dubai, United Arab Emirates</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-charcoal-light mt-16 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-inter text-xs text-gray-500">
              &copy; {new Date().getFullYear()} myCHEF Dubai. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/privacy-policy"
                className="font-inter text-xs text-gray-500 hover:text-gold transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="font-inter text-xs text-gray-500 hover:text-gold transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
