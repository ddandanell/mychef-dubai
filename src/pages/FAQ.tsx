import { useRef, useState, useMemo } from 'react'
import { Link } from 'react-router'
import { Plus, Minus, ChevronRight, Phone, Mail } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import SEO from '@/components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to request a quote')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

type Category = 'All' | 'Booking' | 'Services' | 'Pricing' | 'Dietary' | 'Locations' | 'Day of Service'

const categories: Category[] = ['All', 'Booking', 'Services', 'Pricing', 'Dietary', 'Locations', 'Day of Service']

const faqData: Record<Exclude<Category, 'All'>, { q: string; a: string }[]> = {
  Booking: [
    { q: 'How do I book a private chef in Dubai?', a: 'Simply contact us via WhatsApp or our online inquiry form. Tell us about your event, and we will respond within 2 hours with a bespoke proposal.' },
    { q: 'How far in advance should I book?', a: 'We recommend 48 hours for private chef bookings and 1–2 weeks for larger catering events. Last-minute requests are accommodated when possible.' },
    { q: 'Can I make changes after booking?', a: 'Yes. Contact us as soon as possible and we will adjust your booking. Changes made within 24 hours of the event may be subject to limitations.' },
    { q: 'What is your cancellation policy?', a: 'Cancellations more than 48 hours before receive a full refund. Cancellations within 48 hours may incur a fee. Contact us for details.' },
    { q: 'Do I need to pay a deposit?', a: 'For most bookings, we require a deposit to confirm. The balance is due before or on the day of service.' },
  ],
  Services: [
    { q: 'What services do you offer?', a: 'Private chef services, luxury catering, event catering, corporate dining, yacht catering, villa chef services, and bespoke dining experiences across Dubai.' },
    { q: 'What is the difference between a private chef and catering?', a: 'A private chef prepares meals in your kitchen for smaller, more intimate gatherings. Catering is designed for larger events with buffet stations, service teams, and broader setup.' },
    { q: 'Do you provide service staff?', a: 'Yes. We provide professional waiters, bartenders, and hosts as needed for your event.' },
    { q: 'Do you handle setup and cleanup?', a: 'Absolutely. Full setup, service, and cleanup are included in all our services.' },
    { q: 'Can you cook in any kitchen?', a: 'Our chefs are experienced with all kitchen types and bring any specialized equipment needed.' },
  ],
  Pricing: [
    { q: 'How much does a private chef cost in Dubai?', a: 'Every event is unique. Pricing depends on guest count, menu complexity, number of courses, and location. Contact us for a custom quote.' },
    { q: 'Is there a minimum spend?', a: 'For private chef services, we typically have a minimum booking requirement. Contact us for specific details.' },
    { q: 'What is included in the price?', a: 'Menu design, ingredient sourcing, preparation, service, and cleanup. Tableware and linens can be arranged at additional cost if needed.' },
    { q: 'Do you charge for travel?', a: 'Travel within Dubai is included. For locations outside Dubai, a travel fee may apply.' },
    { q: 'Are there any hidden fees?', a: 'No. Your quote includes all costs. We are transparent about pricing.' },
  ],
  Dietary: [
    { q: 'Do you accommodate dietary restrictions?', a: 'Yes. We handle all dietary requirements including vegetarian, vegan, gluten-free, halal, kosher, nut allergies, and more.' },
    { q: 'Can you prepare halal food?', a: 'Absolutely. All our chefs are trained in halal food preparation and we source halal-certified ingredients.' },
    { q: 'Do you offer vegan menus?', a: 'Yes. Our chefs create exceptional plant-based menus that are creative, flavorful, and beautifully presented.' },
    { q: 'Can you handle severe allergies?', a: 'Yes. We take allergies extremely seriously. Our team follows strict protocols to prevent cross-contamination.' },
    { q: 'Can I request a specific cuisine?', a: 'Of course. Every menu is fully bespoke. Share your preferences and our chef will design accordingly.' },
  ],
  Locations: [
    { q: 'What areas of Dubai do you cover?', a: 'We serve all areas of Dubai including Palm Jumeirah, Downtown, Dubai Marina, Emirates Hills, JBR, DIFC, Business Bay, Jumeirah, Arabian Ranches, and everywhere in between.' },
    { q: 'Do you cater on yachts?', a: 'Yes. We provide private chef and catering services for yachts across Dubai Marina, Palm Jumeirah, and Dubai Harbour.' },
    { q: 'Can you cater at hotels?', a: 'In most cases, yes. Some hotels have restrictions on external catering. Contact us and we will coordinate with the venue.' },
    { q: 'Do you serve outside Dubai?', a: 'We primarily serve Dubai. For locations in Abu Dhabi or other Emirates, contact us to discuss.' },
  ],
  'Day of Service': [
    { q: 'What time will the chef arrive?', a: 'Typically 2–3 hours before service for private chef dinners. For catering events, we arrive earlier based on the event size.' },
    { q: 'Do I need to provide anything?', a: 'We bring all ingredients and cooking equipment. We only need access to your kitchen and basic utilities.' },
    { q: 'How long does the service last?', a: 'A typical private chef dinner lasts 3–4 hours. Catering events vary based on the schedule.' },
    { q: 'What happens to leftovers?', a: 'We can package leftovers for you or dispose of them — your choice.' },
    { q: 'Is your team insured?', a: 'Yes. myCHEF Dubai is fully licensed and insured. All team members are professionally vetted.' },
  ],
}

const relatedLinks = [
  { title: 'Services', links: [
    { label: 'Private Chef Dubai', href: '/private-chef-dubai' },
    { label: 'Catering Dubai', href: '/catering-dubai' },
    { label: 'Luxury Dining', href: '/luxury-dining-experiences' },
    { label: 'Events', href: '/events' },
    { label: 'Corporate', href: '/corporate' },
    { label: 'Yachts', href: '/yachts' },
    { label: 'Villas', href: '/villas-private-residences' },
  ]},
  { title: 'Locations', links: [
    { label: 'Palm Jumeirah', href: '/locations/palm-jumeirah' },
    { label: 'Downtown Dubai', href: '/locations/downtown-dubai' },
    { label: 'Dubai Marina', href: '/locations/dubai-marina' },
    { label: 'Emirates Hills', href: '/locations/emirates-hills' },
    { label: 'JBR', href: '/locations/jbr' },
    { label: 'DIFC', href: '/locations/difc' },
  ]},
  { title: 'Information', links: [
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Our Chefs', href: '/our-chefs' },
    { label: 'Menus', href: '/menus' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]},
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://mychef.ae/faq' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: Object.values(faqData).flat().map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function FAQ() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<Category>('All')
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const filteredFaqs = useMemo(() => {
    if (activeTab === 'All') return Object.entries(faqData)
    return [[activeTab, faqData[activeTab]]] as [Exclude<Category, 'All'>, { q: string; a: string }[]][]
  }, [activeTab])

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from('.faq-hero-eyebrow', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' })
      gsap.from('.faq-hero-h1', { opacity: 0, y: 40, duration: 0.8, ease: 'power3.out', delay: 0.2 })
      gsap.from('.faq-hero-sub', { opacity: 0, duration: 0.6, ease: 'power3.out', delay: 0.5 })

      gsap.from('.faq-category', {
        opacity: 0, y: 20, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.faq-accordion', start: 'top 85%', toggleActions: 'play none none none' },
      })

      gsap.from('.still-questions-content', {
        opacity: 0, y: 30, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.still-questions', start: 'top 85%', toggleActions: 'play none none none' },
      })

      gsap.from('.related-col', {
        opacity: 0, y: 30, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.related-links', start: 'top 85%', toggleActions: 'play none none none' },
      })

      gsap.from('.faq-cta-content', {
        opacity: 0, y: 30, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.faq-cta', start: 'top 85%', toggleActions: 'play none none none' },
      })
    }, containerRef)
    return () => ctx.revert()
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="FAQ"
        description="Find answers about private chef services, catering, pricing, booking, and more. myCHEF Dubai's complete FAQ for premium dining and catering in Dubai."
        canonicalPath="/faq"
        schema={{ ...breadcrumbSchema, ...faqSchema }}
      />

      {/* Section 1: Hero */}
      <section className="relative min-h-[45vh] flex items-center justify-center bg-black">
        <div className="relative z-10 text-center container-custom py-24">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm text-gray-400">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><ChevronRight size={14} className="text-gray-500" /></li>
              <li className="text-gold">FAQ</li>
            </ol>
          </nav>
          <p className="faq-hero-eyebrow font-inter text-caption font-medium uppercase tracking-[0.1em] text-gold mb-4">HELP CENTER</p>
          <h1 className="faq-hero-h1 font-playfair text-h1 md:text-[3.5rem] text-white mb-6" style={{ lineHeight: '1.1' }}>
            Frequently Asked<br />Questions
          </h1>
          <p className="faq-hero-sub font-inter text-body-lg text-gray-400 max-w-xl mx-auto">
            Everything you need to know about our private chef and catering services in Dubai.
          </p>
        </div>
      </section>

      {/* Section 2: Category Tabs */}
      <section className="bg-white pt-16">
        <div className="container-custom">
          <div className="flex overflow-x-auto gap-0 border-b border-gray-200 sticky top-20 bg-white z-40 -mx-6 px-6 md:mx-0 md:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveTab(cat); setOpenItems({}) }}
                className={`flex-shrink-0 font-inter text-caption font-medium uppercase tracking-[0.05em] py-4 px-4 md:px-6 transition-colors border-b-2 ${
                  activeTab === cat ? 'border-gold text-black' : 'border-transparent text-gray-500 hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: FAQ Accordion */}
      <section className="faq-accordion bg-white pb-24 pt-12">
        <div className="container-custom max-w-[900px]">
          {filteredFaqs.map(([category, items]) => (
            <div key={category} className="faq-category mb-10">
              {activeTab === 'All' && (
                <h3 className="font-playfair text-h3 text-black mb-6">{category}</h3>
              )}
              <div className="divide-y divide-gray-200">
                {items.map((item, i) => {
                  const key = `${category}-${i}`
                  const isOpen = openItems[key]
                  return (
                    <div key={key} className="py-6">
                      <button
                        onClick={() => toggleItem(key)}
                        className="w-full flex items-center justify-between text-left focus:outline-none"
                        aria-expanded={isOpen}
                      >
                        <span className="font-inter text-body font-medium text-black pr-4">{item.q}</span>
                        <span className="flex-shrink-0 text-gold transition-transform duration-300" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                        </span>
                      </button>
                      <div
                        className="overflow-hidden transition-all duration-400"
                        style={{ maxHeight: isOpen ? '300px' : '0', opacity: isOpen ? 1 : 0 }}
                      >
                        <p className="pt-4 font-inter text-body text-gray-500" style={{ lineHeight: '1.7' }}>{item.a}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Still Have Questions */}
      <section className="still-questions bg-charcoal py-20">
        <div className="still-questions-content container-custom max-w-[800px] text-center">
          <h2 className="font-playfair text-[2.25rem] text-white mb-4" style={{ lineHeight: '1.15' }}>Still Have Questions?</h2>
          <p className="font-inter text-body text-gray-400 mb-8">
            Our team is happy to help. Reach out and we will respond within 2 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
              <Phone size={18} />
              Chat on WhatsApp
            </a>
            <a href="mailto:hallo@mychef.ae" className="btn-secondary inline-flex items-center gap-2">
              <Mail size={18} />
              Send Us an Email
            </a>
          </div>
        </div>
      </section>

      {/* Section 5: Related Links */}
      <section className="related-links bg-black py-16">
        <div className="container-custom max-w-[1000px]">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {relatedLinks.map((col) => (
              <div key={col.title} className="related-col">
                <h4 className="font-inter text-caption font-medium uppercase tracking-wider text-white mb-5">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link to={link.href} className="font-inter text-body-sm text-gray-400 hover:text-gold transition-colors">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: CTA */}
      <section className="faq-cta bg-black section-padding">
        <div className="faq-cta-content container-custom text-center">
          <h2 className="font-playfair text-h2 text-white mb-4" style={{ lineHeight: '1.15' }}>Ready to Book?</h2>
          <p className="font-inter text-body text-gray-400 max-w-xl mx-auto mb-8">
            Your bespoke dining experience is just a message away.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary">Request My Custom Quote</Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary">Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  )
}
