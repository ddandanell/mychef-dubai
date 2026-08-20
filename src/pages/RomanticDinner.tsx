import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import { Heart, Sparkles, Wine } from 'lucide-react'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan a romantic dinner (via mychef.ae/romantic-dinner-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const serviceSchema = {
  '@type': 'Service',
  name: 'Romantic Dinner Dubai',
  serviceType: 'Private Dining Service',
  provider: {
    '@type': 'Organization',
    name: 'myCHEF Dubai',
    url: 'https://www.mychef.ae',
    telephone: '+971-55-174-4849',
    areaServed: 'Dubai, UAE',
  },
  areaServed: 'Dubai, UAE',
}

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Romantic Dinner Dubai', item: 'https://www.mychef.ae/romantic-dinner-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, breadcrumbSchema],
}

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'm interested in a romantic dinner in Dubai. Date: __ Guests: __ Area: __"
export default function RomanticDinner() {
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.gsap-reveal').forEach((el) => {
        gsap.from(el, { opacity: 0, y: 40, duration: 0.7, scrollTrigger: { trigger: el, start: 'top 88%' } })
      })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef}>
      <SEO
        title="Romantic Private Dinner Dubai"
        description="Intimate romantic dinners in Dubai. Private chef, candlelit setting, bespoke menu for couples, anniversaries, and proposals."
        canonicalPath="/romantic-dinner-dubai"
        ogImage="/images/romantic-dinner-dubai-hero.webp"
        schema={schema}
      />

      <section className="relative min-h-[70vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0"><img src="/images/romantic-dinner-dubai-hero.webp" alt="Romantic dinner" className="w-full h-full object-cover opacity-40" decoding="async" loading="eager" fetchPriority="high"/><div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" /></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <nav className="text-sm mb-6"><Link to="/" className="text-gray-400 hover:text-gold">Home</Link><span className="text-gray-600 mx-2">/</span><span className="text-gold">Romantic Dinner Dubai</span></nav>
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">For Two</p>
          <h1 className="font-playfair text-4xl md:text-6xl text-white font-semibold mb-4">Romantic Dinner Dubai</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Tell us about your evening and we will bring you a vetted private chef, arrange the candlelit table, and build a bespoke menu for an unforgettable night together.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=romantic-dinner-dubai" className="btn-primary">Plan My Romantic Dinner</Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary">WhatsApp My Plans</a>
          </div>
        </div>
      </section>

      <TrustSignalStrip />

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl text-white text-center mb-12 gsap-reveal">The Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{icon: Heart, title: 'Intimate Setting', desc: 'Candlelit table, rose petals, soft music. We create the perfect ambiance.'}, {icon: Wine, title: 'Wine Pairing', desc: 'Expertly selected wines to complement each course of your bespoke menu.'}, {icon: Sparkles, title: 'Bespoke Menu', desc: 'Every dish designed around your preferences, dietary needs, and the occasion.'}].map((f, i) => (
              <div key={i} className="text-center p-8 border border-charcoal-light hover:border-gold/50 transition-colors gsap-reveal">
                <f.icon className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="font-playfair text-xl text-white mb-3">{f.title}</h3>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl text-white text-center mb-12 gsap-reveal">Perfect For</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[{label: 'Anniversaries'}, {label: 'Marriage Proposals', link: '/proposal-dinner-dubai'}, {label: 'Birthday Surprises'}, {label: 'Date Nights'}, {label: 'Valentine\'s Day'}, {label: 'Honeymoon Dining'}, {label: 'Reconciliation Dinners'}, {label: 'Just Because'}].map((item, i) => (
              <div key={i} className="bg-black p-6 text-center gsap-reveal"><span className="text-gold text-2xl mb-2 block">&#10084;</span>
                {item.link ? (
                  <Link to={item.link} className="text-white font-medium hover:text-gold transition-colors">{item.label}</Link>
                ) : (
                  <p className="text-white font-medium">{item.label}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 text-center gsap-reveal">
          <h2 className="font-playfair text-3xl text-white mb-6">Planning Valentine's Day?</h2>
          <p className="text-gray-400 mb-8">
            Make February 14 unforgettable with our{' '}
            <Link to="/valentines-day-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
              Valentine's Day private dining in Dubai
            </Link>
            {' '}— candlelit setup, bespoke menu and discreet service for a night to remember.
          </p>
          <Link to="/valentines-day-catering-dubai" className="btn-primary">Explore Valentine's Dining</Link>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center gsap-reveal">
          <h2 className="font-playfair text-3xl text-white mb-6">Create an Unforgettable Evening</h2>
          <p className="text-gray-400 mb-8">Tell us about your date, dietary preferences, and venue. We will bring you a vetted chef and send a tailored proposal within 24 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=romantic-dinner-dubai" className="btn-primary">Plan My Romantic Dinner</Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary">WhatsApp My Plans</a>
          </div>
        </div>
      </section>
    </div>
  )
}
