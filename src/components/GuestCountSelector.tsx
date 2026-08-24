import { useState } from 'react'
import { Link } from 'react-router'
import { Phone, Users, ArrowRight, UtensilsCrossed, PartyPopper, ChefHat, Flame, GlassWater, Cake } from 'lucide-react'
import { SectionLabel } from '@/components/system'


const WHATSAPP_NUMBER = '971551744849'

type RangeKey = 'intimate' | 'small' | 'medium' | 'large' | 'grand'

interface Recommendation {
  title: string
  description: string
  formats: { icon: React.ElementType; label: string; link: string }[]
  price: string
  ctaPath: string
}

const ranges: { key: RangeKey; label: string; guests: string }[] = [
  { key: 'intimate', label: '2 – 10', guests: '2–10' },
  { key: 'small', label: '11 – 30', guests: '11–30' },
  { key: 'medium', label: '31 – 50', guests: '31–50' },
  { key: 'large', label: '51 – 100', guests: '51–100' },
  { key: 'grand', label: '100+', guests: '100+' },
]

const recommendations: Record<RangeKey, Recommendation> = {
  intimate: {
    title: 'Intimate Gatherings',
    description: 'Private chef service and plated dining for small groups. Perfect for date nights, family dinners, and small celebrations.',
    formats: [
      { icon: ChefHat, label: 'Private Chef Dubai', link: '/private-chef-dubai' },
      { icon: UtensilsCrossed, label: 'Luxury Private Dining', link: '/luxury-dining-experiences' },
      { icon: GlassWater, label: 'Canapé Reception', link: '/canape-catering-dubai' },
      { icon: Cake, label: 'Date Night Package', link: '/date-night-package-dubai' },
    ],
    price: 'From AED 750 per person',
    ctaPath: '/inquiry?utm_source=mychef.ae&utm_medium=guest_selector&utm_campaign=catering-dubai',
  },
  small: {
    title: 'Small Parties',
    description: 'Flexible formats that encourage mingling — great for birthdays, villa gatherings, and client entertaining.',
    formats: [
      { icon: Flame, label: 'BBQ Catering', link: '/bbq-catering-dubai' },
      { icon: GlassWater, label: 'Canapés & Finger Food', link: '/canape-catering-dubai' },
      { icon: UtensilsCrossed, label: 'Grazing Table', link: '/grazing-table-dubai' },
      { icon: PartyPopper, label: 'Family Feast Package', link: '/family-feast-package-dubai' },
    ],
    price: 'From AED 180 per person',
    ctaPath: '/inquiry?utm_source=mychef.ae&utm_medium=guest_selector&utm_campaign=catering-dubai',
  },
  medium: {
    title: 'Mid-Size Events',
    description: 'Buffets, live stations, and sharing menus designed for celebrations where guests want variety and flow.',
    formats: [
      { icon: UtensilsCrossed, label: 'Buffet Catering', link: '/buffet-catering-dubai' },
      { icon: Flame, label: 'Live Cooking Stations', link: '/live-cooking-stations-dubai' },
      { icon: GlassWater, label: 'Cocktail Party Catering', link: '/cocktail-party-catering-dubai' },
      { icon: Cake, label: 'Birthday Package', link: '/birthday-catering-package-dubai' },
    ],
    price: 'From AED 150 per person',
    ctaPath: '/inquiry?utm_source=mychef.ae&utm_medium=guest_selector&utm_campaign=catering-dubai',
  },
  large: {
    title: 'Large Celebrations',
    description: 'Scaled service with multiple stations, full front-of-house teams, and seamless coordination for big occasions.',
    formats: [
      { icon: UtensilsCrossed, label: 'Buffet Catering', link: '/buffet-catering-dubai' },
      { icon: Flame, label: 'Live Cooking Stations', link: '/live-cooking-stations-dubai' },
      { icon: GlassWater, label: 'Bar Services', link: '/bar-services-dubai' },
      { icon: PartyPopper, label: 'Party Catering', link: '/party-catering-dubai' },
    ],
    price: 'From AED 130 per person',
    ctaPath: '/inquiry?utm_source=mychef.ae&utm_medium=guest_selector&utm_campaign=catering-dubai',
  },
  grand: {
    title: 'Grand Events',
    description: 'Full-event production catering for weddings, galas, corporate functions, and milestone celebrations.',
    formats: [
      { icon: UtensilsCrossed, label: 'Event Catering', link: '/events' },
      { icon: Flame, label: 'Live Stations & BBQ', link: '/live-cooking-stations-dubai' },
      { icon: GlassWater, label: 'Gala Dinner Catering', link: '/gala-dinner-catering-dubai' },
      { icon: PartyPopper, label: 'Corporate Events', link: '/corporate-event-catering-dubai' },
    ],
    price: 'Custom quote for 100+ guests',
    ctaPath: '/inquiry?utm_source=mychef.ae&utm_medium=guest_selector&utm_campaign=catering-dubai',
  },
}

export default function GuestCountSelector() {
  const [selected, setSelected] = useState<RangeKey>('intimate')
  const rec = recommendations[selected]
  const guestLabel = ranges.find((r) => r.key === selected)?.guests ?? ''

  const whatsappMessage = encodeURIComponent(
    `Hi myCHEF Dubai, I'm looking at catering in Dubai for ${guestLabel} guests. Please send me a tailored quote (via mychef.ae/catering-dubai)`
  )
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`

  return (
    <section className="bg-cream section-padding">
      <div className="container-custom max-w-[1000px]">
        <div className="text-center mb-10">
          <SectionLabel align="center">Find the Right Format</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-4">
            How many guests are you catering for?
          </h2>
          <p className="font-inter text-body text-gray-600 max-w-[640px] mx-auto">
            Select your group size and see the recommended catering formats, packages, and indicative pricing for your event.
          </p>
        </div>

        {/* Guest count selector */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {ranges.map((range) => {
            const active = selected === range.key
            return (
              <button
                key={range.key}
                type="button"
                onClick={() => setSelected(range.key)}
                className={[
                  'flex items-center gap-2 px-5 py-3 font-inter text-body-sm font-medium transition-all duration-200 border',
                  active
                    ? 'bg-black text-gold border-black'
                    : 'bg-white text-black border-gray-200 hover:border-gold hover:text-gold-dark',
                ].join(' ')}
                aria-pressed={active}
              >
                <Users size={16} />
                {range.label} guests
              </button>
            )
          })}
        </div>

        {/* Recommendation card */}
        <div className="bg-black p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="font-inter text-caption text-gold uppercase tracking-wider mb-2">
                Recommended for {guestLabel} guests
              </p>
              <h3 className="font-playfair text-h3 text-white mb-4">{rec.title}</h3>
              <p className="font-inter text-body text-gray-400 leading-relaxed mb-6">
                {rec.description}
              </p>
              <p className="font-inter text-body font-medium text-white mb-6">
                Indicative pricing: <span className="text-gold">{rec.price}</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to={rec.ctaPath} className="btn-primary text-center text-sm">
                  Get a Tailored Quote
                </Link>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-center text-sm inline-flex items-center justify-center gap-2"
                >
                  <Phone size={14} />
                  Request on WhatsApp
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {rec.formats.map((fmt) => (
                <Link
                  key={fmt.label}
                  to={fmt.link}
                  className="group flex items-center gap-3 p-4 bg-charcoal border border-charcoal hover:border-gold transition-colors"
                >
                  <fmt.icon size={20} className="text-gold shrink-0" />
                  <span className="font-inter text-body-sm text-white group-hover:text-gold transition-colors">
                    {fmt.label}
                  </span>
                  <ArrowRight size={14} className="text-gray-500 ml-auto group-hover:text-gold transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
