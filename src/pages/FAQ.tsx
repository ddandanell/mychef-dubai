import { useRef, useState, useMemo } from 'react'
import { Link } from 'react-router'
import { Plus, Minus, Phone, Mail } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to request a quote (via mychef.ae/faq)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

type Category = 'All' | 'Booking' | 'Services' | 'Pricing' | 'Dietary' | 'Locations' | 'Day of Service' | 'Bar & VIP'

const categories: Category[] = ['All', 'Booking', 'Services', 'Pricing', 'Dietary', 'Locations', 'Day of Service', 'Bar & VIP']

const faqData: Record<Exclude<Category, 'All'>, { q: string; a: string }[]> = {
  Booking: [
    { q: 'How do I book a private chef in Dubai?', a: 'Simply contact us via WhatsApp or our online inquiry form. Tell us about your event, and we will respond within 2 hours with a bespoke proposal.' },
    { q: 'How far in advance should I book?', a: 'We recommend 48 hours for private chef bookings and 1–2 weeks for larger catering events. Last-minute requests are accommodated when possible.' },
    { q: 'Can I make changes after booking?', a: 'Yes. Contact us as soon as possible and we will adjust your booking. Changes made within 24 hours of the event may be subject to limitations.' },
    { q: 'What is your cancellation policy?', a: 'Cancellations more than 48 hours before receive a full refund. Cancellations within 48 hours may incur a fee. Contact us for details.' },
    { q: 'Do I need to pay a deposit?', a: 'For most bookings, we require a deposit to confirm. The balance is due before or on the day of service.' },
    { q: 'Can I book a private chef for tonight in Dubai?', a: 'We accommodate last-minute requests whenever possible. Contact us on WhatsApp at +971 55 174 4849 and we will confirm availability quickly.' },
    { q: 'How do I change the number of guests after booking?', a: 'Let us know as soon as your guest count changes. We adjust ingredients, staffing, and seating up to 24 hours before the event when possible.' },
    { q: 'Can I schedule a menu tasting before my event?', a: 'Yes. Tastings can be arranged for weddings, large galas, and corporate events. Ask your event manager for availability and options.' },
    { q: 'Do you offer same-week catering for corporate events?', a: 'Yes, depending on the menu and scale. We recommend booking early, but our team can often deliver high-quality catering within a few days.' },
    { q: 'Can I book catering for multiple event dates at once?', a: 'Yes. We can create a multi-date event package with consistent menus, rotating options, and dedicated staffing.' },
  ],
  Services: [
    { q: 'What services do you offer?', a: 'Private chef services, luxury catering, event catering, corporate dining, yacht catering, villa chef services, and bespoke dining experiences across Dubai.' },
    { q: 'What is the difference between a private chef and catering?', a: 'A private chef prepares meals in your kitchen for smaller, more intimate gatherings. Catering is designed for larger events with buffet stations, service teams, and broader setup.' },
    { q: 'Do you provide service staff?', a: 'Yes. We provide professional waiters, bartenders, and hosts as needed for your event.' },
    { q: 'Do you handle setup and cleanup?', a: 'Absolutely. Full setup, service, and cleanup are included in all our services.' },
    { q: 'Can you cook in any kitchen?', a: 'Our chefs are experienced with all kitchen types and bring any specialized equipment needed.' },
    { q: 'Do you cater breakfast and brunch events in Dubai?', a: 'Yes. We offer breakfast meetings, brunch gatherings, and full brunch catering with live stations, pastries, and beverage service.' },
    { q: 'Can you provide a full wedding cake as part of catering?', a: 'Yes. Our pastry team can design a bespoke wedding cake and dessert table as part of your wedding catering package.' },
    { q: 'Do you offer kids’ menus for family events?', a: 'Yes. We create child-friendly menus alongside adult options for family celebrations, birthdays, and casual villa gatherings.' },
    { q: 'Can my chef cook a family recipe or favourite dish?', a: 'Absolutely. Share the recipe or describe the dish and our chef will recreate it with the same care and premium ingredients.' },
    { q: 'Do you provide event styling and florals?', a: 'We handle tableware, linens, and food presentation styling. For full event design and florals, we partner with trusted stylists and can coordinate on your behalf.' },
  ],
  Pricing: [
    { q: 'How much does a private chef cost in Dubai?', a: 'Every event is unique. Pricing depends on guest count, menu complexity, number of courses, and location. Contact us for a custom quote.' },
    { q: 'Is there a minimum spend?', a: 'For private chef services, we typically have a minimum booking requirement. Contact us for specific details.' },
    { q: 'What is included in the price?', a: 'Menu design, ingredient sourcing, preparation, service, and cleanup. Tableware and linens can be arranged at additional cost if needed.' },
    { q: 'Do you charge for travel?', a: 'Travel within Dubai is included. For locations outside Dubai, a travel fee may apply.' },
    { q: 'Are there any hidden fees?', a: 'No. Your quote includes all costs. We are transparent about pricing.' },
    { q: 'Is there a minimum guest count for catering?', a: 'Minimums depend on the service style and location. Private chef dinners typically start from 2 guests; larger catering formats may have higher minimums.' },
    { q: 'How does pricing work for yacht catering?', a: 'Yacht catering pricing is based on guest count, menu, duration, and marina logistics. We provide a flat all-inclusive quote for each trip.' },
    { q: 'Are tableware and linens included in the catering price?', a: 'Standard packages include the necessary service equipment. Premium tableware, linens, and glassware can be added based on your event style.' },
    { q: 'Do you offer corporate retainer packages?', a: 'Yes. We offer retainer and membership options for businesses that need regular catering, including the myCHEF VIP Club for frequent hosts.' },
    { q: 'Can I get a fixed-price menu for my event?', a: 'Yes. We can propose fixed-price menus per person once the guest count, format, and cuisine preferences are confirmed.' },
  ],
  Dietary: [
    { q: 'Do you accommodate dietary restrictions?', a: 'Yes. We handle all dietary requirements including vegetarian, vegan, gluten-free, halal, kosher, nut allergies, and more.' },
    { q: 'Can you prepare halal food?', a: 'Absolutely. All our chefs are trained in halal food preparation and we source halal-certified ingredients.' },
    { q: 'Do you offer vegan menus?', a: 'Yes. Our chefs create exceptional plant-based menus that are creative, flavorful, and beautifully presented.' },
    { q: 'Can you handle severe allergies?', a: 'Yes. We take allergies extremely seriously. Our team follows strict protocols to prevent cross-contamination.' },
    { q: 'Can I request a specific cuisine?', a: 'Of course. Every menu is fully bespoke. Share your preferences and our chef will design accordingly.' },
    { q: 'Can you prepare keto or low-carb menus?', a: 'Yes. Our chefs design keto, low-carb, and high-protein menus tailored to your preferences and macros.' },
    { q: 'Do you offer pescatarian or dairy-free menus?', a: 'Yes. We cater to pescatarian, dairy-free, egg-free, and other dietary requirements as part of our bespoke menu design.' },
    { q: 'How do you handle cross-contamination for allergies?', a: 'We follow strict allergen protocols, separate preparation areas where possible, and clearly label dishes. Always inform us of severe allergies in advance.' },
    { q: 'Can you provide Jain or other religious dietary menus?', a: 'Yes. We accommodate Jain, vegetarian, halal, and other religious dietary requirements with careful ingredient sourcing.' },
    { q: 'Is your food prepared fresh on the day?', a: 'Yes. We prepare dishes as close to service time as possible, using fresh, premium ingredients sourced for each event.' },
  ],
  Locations: [
    { q: 'What areas of Dubai do you cover?', a: 'We serve all areas of Dubai including Palm Jumeirah, Downtown, Dubai Marina, Emirates Hills, JBR, DIFC, Business Bay, Jumeirah, Arabian Ranches, and everywhere in between.' },
    { q: 'Do you cater on yachts?', a: 'Yes. We provide private chef and catering services for yachts across Dubai Marina, Palm Jumeirah, and Dubai Harbour.' },
    { q: 'Can you cater at hotels?', a: 'In most cases, yes. Some hotels have restrictions on external catering. Contact us and we will coordinate with the venue.' },
    { q: 'Do you serve outside Dubai?', a: 'We primarily serve Dubai. For locations in Abu Dhabi or other Emirates, contact us to discuss.' },
    { q: 'Do you cater at beach clubs and pool venues in Dubai?', a: 'Yes. We cater at beach clubs, pool venues, and outdoor spaces, working with venue teams to meet their requirements.' },
    { q: 'Can you cater in Abu Dhabi or other Emirates?', a: 'We primarily serve Dubai. For Abu Dhabi and other Emirates, contact us to discuss logistics, travel, and minimum requirements.' },
    { q: 'Do you cater at golf clubs and sports venues?', a: 'Yes. We provide catering for golf clubs, sports venues, and outdoor activity spaces across Dubai.' },
    { q: 'Can you serve at multiple venues during one event?', a: 'Yes. We can coordinate multi-venue events such as welcome receptions, main dinners, and after-parties with tailored menus at each location.' },
  ],
  'Day of Service': [
    { q: 'What time will the chef arrive?', a: 'Typically 2–3 hours before service for private chef dinners. For catering events, we arrive earlier based on the event size.' },
    { q: 'Do I need to provide anything?', a: 'We bring all ingredients and cooking equipment. We only need access to your kitchen and basic utilities.' },
    { q: 'How long does the service last?', a: 'A typical private chef dinner lasts 3–4 hours. Catering events vary based on the schedule.' },
    { q: 'What happens to leftovers?', a: 'We can package leftovers for you or dispose of them — your choice.' },
    { q: 'Is your team insured?', a: 'Yes. myCHEF Dubai is fully licensed and insured. All team members are professionally vetted.' },
    { q: 'What happens if a guest has an unexpected allergy on the day?', a: 'Inform the service captain or chef immediately. We carry ingredient lists for all dishes and can advise guests or prepare a safe alternative if time and ingredients allow.' },
  ],
  'Bar & VIP': [
    { q: 'What bar services do you offer?', a: 'We provide full bartender and mixology services, including craft cocktails, mocktail bars, wine service, and champagne presentations for events across Dubai.' },
    { q: 'Can I book a mocktail bar for a family event?', a: 'Yes. Our mocktail bar is completely alcohol-free and ideal for family celebrations, kids’ parties, and Ramadan gatherings.' },
    { q: 'What is the myCHEF VIP Club?', a: 'The myCHEF VIP Club is a membership for frequent hosts, offering priority booking, exclusive menus, dedicated account management, and special event perks.' },
    { q: 'How do I join the VIP Club?', a: 'Contact us via WhatsApp or the inquiry form and ask about VIP Club membership. We will recommend the right tier based on your event calendar.' },
    { q: 'Do you offer gift cards for private chef experiences?', a: 'Yes. myCHEF gift cards are available for private dining experiences, cooking classes, and bespoke catering. They make a memorable gift for any occasion.' },
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
      <PageHero
        eyebrow="HELP CENTER"
        title="<>Frequently Asked<br />Questions</>"
        subtitle="Everything you need to know about our private chef and catering services in Dubai."
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
