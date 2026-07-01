import { useRef, useState, useMemo } from 'react'
import { Link } from 'react-router'
import { Plus, Minus, Phone, Mail } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'
import { faqPageSchema, breadcrumbSchema } from '@/utils/schema'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to request a quote (via mychef.ae/faq)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

type Category = 'All' | 'Pricing & packages' | 'Booking process' | 'Chefs & cuisines' | 'Dietary & halal' | 'Locations & venues' | 'Cancellations & insurance' | 'Bar & VIP'

const categories: Category[] = ['All', 'Pricing & packages', 'Booking process', 'Chefs & cuisines', 'Dietary & halal', 'Locations & venues', 'Cancellations & insurance', 'Bar & VIP']

const faqData: Record<Exclude<Category, 'All'>, { q: string; a: string }[]> = {
  'Pricing & packages': [
    { q: 'How much does a private chef cost in Dubai?', a: 'Private chef experiences typically start from AED 950 per person for a bespoke multi-course menu. Final pricing depends on guest count, menu complexity, ingredients, and service level. Visit our /menus page for starter package pricing.' },
    { q: 'What are your starter packages?', a: 'We offer seven starter packages starting from AED 1,200: Date Night, Family Feast, Birthday Celebration, Weekly Prep Lite, Weekly Prep Standard, Corporate Dinner, and The Full Experience. See /menus for full details and pricing.' },
    { q: 'Is there a minimum spend?', a: 'Minimums depend on the service style and guest count. Smaller groups may have a higher per-person rate due to dedicated staff and preparation time. Contact us for specific details.' },
    { q: 'What is included in the price?', a: 'Menu design, ingredient sourcing, preparation, service, and cleanup are included. Tableware, linens, premium upgrades, and travel outside Dubai may be additional.' },
    { q: 'Are there any hidden fees?', a: 'No. Your written quote includes all agreed costs. We are transparent about pricing, deposits, and any optional add-ons before you confirm.' },
    { q: 'Can I get a fixed-price menu?', a: 'Yes. Once guest count, format, and cuisine preferences are confirmed, we can propose a fixed-price menu per person or a flat package rate.' },
    { q: 'How does corporate meal prep pricing work?', a: 'Corporate meal prep is priced as a recurring programme based on headcount, menu complexity, and delivery frequency. Visit /corporate-meal-prep-dubai for details.' },
  ],
  'Booking process': [
    { q: 'How do I book a private chef in Dubai?', a: 'Contact us via WhatsApp or our online /inquiry form. Tell us about your event, and we will respond within 2 hours with a bespoke proposal.' },
    { q: 'How far in advance should I book?', a: 'We recommend 48 hours for private chef bookings and 1–2 weeks for larger catering events. Last-minute requests are accommodated when possible.' },
    { q: 'Can I make changes after booking?', a: 'Yes. Contact us as soon as possible and we will adjust your booking. Changes made within 24 hours of the event may be subject to limitations.' },
    { q: 'Do I need to pay a deposit?', a: 'Most bookings require a 50% deposit to confirm the date, ingredients, and staffing. The balance is typically due before or on the day of service.' },
    { q: 'Can I book a private chef for tonight?', a: 'We accommodate last-minute requests whenever possible. Contact us on WhatsApp at +971 55 174 4849 and we will confirm availability quickly.' },
    { q: 'How do I change the number of guests?', a: 'Let us know as soon as your guest count changes. We adjust ingredients, staffing, and seating up to 24 hours before the event when possible.' },
    { q: 'Can I schedule a menu tasting before my event?', a: 'Yes. Tastings can be arranged for weddings, large galas, and corporate events. Ask your event manager for availability.' },
    { q: 'Can I book multiple event dates at once?', a: 'Yes. We can create a multi-date package with consistent menus, rotating options, and dedicated staffing.' },
  ],
  'Chefs & cuisines': [
    { q: 'What cuisines do you offer?', a: 'We offer bespoke menus across Arabic, Indian, Mediterranean, Italian, Asian, sushi, vegan, vegetarian, halal, healthy, and fusion cuisines. See /menus for inspiration.' },
    { q: 'What is the difference between a private chef and catering?', a: 'A private chef prepares meals in your kitchen for smaller, more intimate gatherings. Catering is designed for larger events with buffet stations, service teams, and broader setup.' },
    { q: 'Do you provide service staff?', a: 'Yes. We provide professional waiters, bartenders, and hosts as needed for your event.' },
    { q: 'Do you handle setup and cleanup?', a: 'Absolutely. Full setup, service, and cleanup are included in all our services.' },
    { q: 'Can my chef cook a family recipe?', a: 'Yes. Share the recipe or describe the dish and our chef will recreate it with the same care and premium ingredients.' },
    { q: 'How do you vet your chefs?', a: 'Every chef passes identity checks, right-to-work verification, practical skill assessments, reference checks, and supervised trial events. Read more at /how-we-vet-our-chefs.' },
    { q: 'Can I request a specific chef?', a: 'You can express a preference, but no chef is guaranteed. We match each event to the best available chef based on cuisine expertise, availability, and your requirements.' },
  ],
  'Dietary & halal': [
    { q: 'Do you accommodate dietary restrictions?', a: 'Yes. We handle vegetarian, vegan, gluten-free, halal, kosher, nut allergies, dairy-free, and many other requirements.' },
    { q: 'Can you prepare halal food?', a: 'Absolutely. We source halal-certified proteins and our chefs are trained in halal preparation practices.' },
    { q: 'Do you offer vegan menus?', a: 'Yes. Our chefs create creative, flavorful, and beautifully presented plant-based menus.' },
    { q: 'Can you handle severe allergies?', a: 'Yes. We take allergies extremely seriously and follow strict protocols to prevent cross-contamination.' },
    { q: 'Can you prepare keto or low-carb menus?', a: 'Yes. Our chefs design keto, low-carb, and high-protein menus tailored to your preferences and macros.' },
    { q: 'How do you handle cross-contamination?', a: 'We follow strict allergen protocols, separate preparation areas where possible, and clearly label dishes. Always inform us of severe allergies in advance.' },
    { q: 'Is your food prepared fresh on the day?', a: 'Yes. We prepare dishes as close to service time as possible using fresh, premium ingredients sourced for each event.' },
  ],
  'Locations & venues': [
    { q: 'What areas of Dubai do you cover?', a: 'We serve all areas of Dubai including Palm Jumeirah, Downtown, Dubai Marina, Emirates Hills, JBR, DIFC, Business Bay, Jumeirah, Arabian Ranches, and more. See /locations.' },
    { q: 'Do you cater on yachts?', a: 'Yes. We provide private chef and catering services for yachts across Dubai Marina, Palm Jumeirah, and Dubai Harbour. Visit /yachts.' },
    { q: 'Can you cater at hotels?', a: 'In most cases, yes. Some hotels have restrictions on external catering. Contact us and we will coordinate with the venue.' },
    { q: 'Do you serve outside Dubai?', a: 'We primarily serve Dubai. For Abu Dhabi and other Emirates, contact us to discuss logistics, travel, and minimum requirements.' },
    { q: 'Do you cater at beach clubs and pool venues?', a: 'Yes. We cater at beach clubs, pool venues, and outdoor spaces, working with venue teams to meet their requirements.' },
    { q: 'Can you serve at multiple venues during one event?', a: 'Yes. We can coordinate multi-venue events such as welcome receptions, main dinners, and after-parties with tailored menus at each location.' },
  ],
  'Cancellations & insurance': [
    { q: 'What is your cancellation policy?', a: 'Cancellations more than 48 hours before generally receive a full refund. Cancellations within 48 hours may incur a fee. Last-minute cancellations may forfeit the deposit. See /booking-protection-insurance for details.' },
    { q: 'What happens if a chef is unavailable?', a: 'We activate a qualified backup chef from our vetted network and notify you as early as possible. Read our backup chef policy at /booking-protection-insurance.' },
    { q: 'Are you insured?', a: 'Yes. myCHEF Dubai is fully licensed and insured. We maintain public liability coverage and require chefs to carry appropriate food-handling and personal liability protection.' },
    { q: 'How do deposits work?', a: 'Most bookings require a 50% deposit to confirm. The balance is due before or on the day of the event. Exact terms are included in your proposal.' },
    { q: 'How are complaints handled?', a: 'Complaints are escalated to an event manager, investigated promptly, and resolved fairly through refund, credit, or explanation depending on the situation.' },
    { q: 'Will I receive written booking terms?', a: 'Yes. Every booking is confirmed in writing with menu, pricing, deposit, balance due date, and cancellation terms.' },
  ],
  'Bar & VIP': [
    { q: 'What bar services do you offer?', a: 'We provide bartenders, mobile bars, craft cocktails, mocktails, wine service, and champagne presentations. Visit /bar-services-dubai.' },
    { q: 'Can I book a mocktail bar for a family event?', a: 'Yes. Our mocktail bar is completely alcohol-free and ideal for family celebrations, kids’ parties, and Ramadan gatherings. See /mocktail-bar-catering-dubai.' },
    { q: 'What is the myCHEF VIP Club?', a: 'The VIP Club is a membership for frequent hosts, offering priority booking, exclusive menus, and dedicated account management. Visit /vip-club.' },
    { q: 'How do I join the VIP Club?', a: 'Contact us via WhatsApp or the /inquiry form and ask about VIP Club membership.' },
    { q: 'Do you offer gift cards?', a: 'Yes. myCHEF gift cards are available for private dining experiences, cooking classes, and bespoke catering. See /gift-cards.' },
  ],
}

const relatedLinks = [
  { title: 'Services', links: [
    { label: 'Private Chef Dubai', href: '/private-chef-dubai' },
    { label: 'Catering Dubai', href: '/catering-dubai' },
    { label: 'Luxury Dining', href: '/luxury-dining-experiences' },
    { label: 'Weekly Meal Prep', href: '/weekly-meal-prep-dubai' },
    { label: 'Corporate', href: '/corporate' },
    { label: 'Yachts', href: '/yachts' },
    { label: 'Villas', href: '/villas-private-residences' },
  ]},
  { title: 'Trust & Info', links: [
    { label: 'How We Vet Our Chefs', href: '/how-we-vet-our-chefs' },
    { label: 'Booking Protection', href: '/booking-protection-insurance' },
    { label: 'Become a myCHEF', href: '/become-a-mychef' },
    { label: 'Our Chefs', href: '/our-chefs' },
    { label: 'Menus', href: '/menus' },
    { label: 'Inquiry', href: '/inquiry' },
  ]},
  { title: 'Locations', links: [
    { label: 'Palm Jumeirah', href: '/locations/palm-jumeirah' },
    { label: 'Downtown Dubai', href: '/locations/downtown-dubai' },
    { label: 'Dubai Marina', href: '/locations/dubai-marina' },
    { label: 'Emirates Hills', href: '/locations/emirates-hills' },
    { label: 'JBR', href: '/locations/jbr' },
    { label: 'All Locations', href: '/locations' },
  ]},
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    faqPageSchema(Object.values(faqData).flat().map((f) => ({ question: f.q, answer: f.a }))),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'FAQ', path: '/faq' },
    ]),
  ],
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
        title="FAQ | Private Chef & Catering Dubai | myCHEF"
        description="Find answers about private chef services, catering, pricing, booking, chefs, halal, locations, and more. myCHEF Dubai's comprehensive FAQ hub."
        canonicalPath="/faq"
        ogImage="/images/faq-dubai-hero.webp"
        schema={schema}
      />

      {/* Section 1: Hero */}
      <PageHero
        eyebrow="HELP CENTER"
        title={<>Frequently Asked<br />Questions</>}
        subtitle="Everything you need to know about private chef services, catering, pricing, and bookings in Dubai."
        image="/images/faq-dubai-hero.webp"
        imageAlt="myCHEF Dubai customer support and FAQ"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]}
        minHeight="short"
        overlay="dark"
      />

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
                        className="overflow-hidden transition-all duration-300"
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
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=faq" className="btn-primary">Request My Custom Quote</Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary">Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  )
}
