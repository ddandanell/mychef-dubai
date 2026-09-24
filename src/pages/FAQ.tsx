// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /faq
//     primary:     "catering faq dubai"
//     subkeywords: "catering minimum order dubai" · "how much notice does a caterer need dubai" · "is catering in dubai halal" · "does a private chef clean up dubai" · "what are common red flags with catering companies" · "what questions to ask for a catering service"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useRef, useState, useMemo } from 'react'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { Link } from 'react-router'
import { Plus, Minus, Phone, Mail } from 'lucide-react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { useGSAP } from '@gsap/react'
import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'
import TrustSignalStrip from '@/components/TrustSignalStrip'
import { faqPageSchema, breadcrumbSchema } from '@/utils/schema'
import { CANCELLATION_FAQ_ANSWER, DEPOSIT_FAQ_ANSWER } from '@/content/bookingTerms'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to request a quote (via mychef.ae/faq)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

type Category = 'All' | 'Pricing & packages' | 'Booking process' | 'Chefs & cuisines' | 'Dietary & halal' | 'Locations & venues' | 'Cancellations & insurance' | 'Bar & VIP'

const categories: Category[] = ['All', 'Pricing & packages', 'Booking process', 'Chefs & cuisines', 'Dietary & halal', 'Locations & venues', 'Cancellations & insurance', 'Bar & VIP']

const faqData: Record<Exclude<Category, 'All'>, { q: string; a: string }[]> = {
  'Pricing & packages': [
    { q: 'How much does a private chef cost in Dubai?', a: "Regular household chef plans are priced per visit and schedule. For one-off occasions, bespoke plated dining starts from AED 700 per person and standard event buffets from AED 120. Defined packages such as Date Night have separate prices and inclusions, confirmed in your proposal." },
    { q: 'What are your starter packages?', a: "Our published packages start at AED 1,200 for Date Night, AED 2,400 for Family Feast, AED 3,600 for Birthday and AED 4,500 for Corporate Dinner. Each has a defined guest range and service scope. Bespoke menus and other catering formats are quoted separately." },
    { q: 'Is there a minimum spend?', a: 'Minimums depend on the service style and guest count. Smaller groups may have a higher per-person rate due to dedicated staff and preparation time. Contact us for specific details.' },
    { q: 'What is included in the price?', a: "Inclusions depend on the service you choose. Your proposal identifies menu planning, ingredients, chef time, service and clear-down, along with any tableware, linen, upgrades or travel charges." },
    { q: 'Are there any hidden fees?', a: 'No. Your written quote includes all agreed costs. We are transparent about pricing, deposits, and any optional add-ons before you confirm.' },
    { q: 'Can I get a fixed-price menu?', a: 'Yes. Once guest count, format, and cuisine preferences are confirmed, we can propose a fixed-price menu per person or a flat package rate.' },
    { q: 'How does corporate meal prep pricing work?', a: "Recurring staff meals are quoted by headcount, menu and service frequency. Explore our staff meals service or share the schedule you need covered." },
  ],
  'Booking process': [
    { q: 'How do I book a private chef in Dubai?', a: "Contact us through WhatsApp or the enquiry form with your date, location, guest count and preferences. We typically reply within 15 minutes between 9am and 9pm Dubai time. A tailored proposal follows after we review the details and availability." },
    { q: 'How far in advance should I book?', a: "Enquire as soon as your date is known. Smaller bookings may be possible with shorter notice, while larger events typically benefit from several weeks of planning. Availability is confirmed individually, especially during peak periods." },
    { q: 'Can I make changes after booking?', a: "Please contact us as soon as your plans change. We will confirm what can be adjusted and any resulting charges under the terms of your booking." },
    { q: 'Do I need to pay a deposit?', a: DEPOSIT_FAQ_ANSWER },
    { q: 'Can I book a private chef for tonight?', a: 'We accommodate last-minute requests whenever possible. Contact us on WhatsApp at +971 55 174 4849 and we will confirm availability quickly.' },
    { q: 'How do I change the number of guests?', a: "Send the revised guest count to your booking contact as soon as possible. We will confirm the effect on food, staffing and pricing, subject to the deadlines in your written agreement." },
    { q: 'Can I schedule a menu tasting before my event?', a: 'Yes. Tastings can be arranged for weddings, large galas, and corporate events. Ask your event manager for availability.' },
    { q: 'Can I book multiple event dates at once?', a: 'Yes. We can create a multi-date package with consistent menus, rotating options, and dedicated staffing.' },
  ],
  'Chefs & cuisines': [
    { q: 'What cuisines do you offer?', a: "Explore Arabic, Indian, Mediterranean, Italian and Asian menus, including sushi and plant-based options. Menus are adapted to the occasion and agreed dietary requirements." },
    { q: 'What is the difference between a private chef and catering?', a: "At myCHEF, household chef plans cover regular meals and weekly cooking. One-off private dinners and larger occasions are arranged through catering, with the chef, menu, service and equipment matched to the event." },
    { q: 'Do you provide service staff?', a: 'Yes — we arrange and run a professional service team, matched to your event.' },
    { q: 'Do you handle setup and cleanup?', a: 'Yes — setup, service and cleanup are run end to end as part of every experience.' },
    { q: 'Can my chef cook a family recipe?', a: "Share the recipe and any details that matter to you. The chef will discuss how it can be prepared with the ingredients and facilities available." },
    { q: 'How do you vet your chefs?', a: "Selection includes identity and right-to-work checks, practical cooking assessments, references and initial supervised work. Our chef-vetting guide explains the process." },
    { q: 'Can I request a specific chef?', a: 'You can express a preference, but no chef is guaranteed. We match each event to the best available chef based on cuisine expertise, availability, and your requirements.' },
    { q: 'Do you cook, or do you bring a chef?', a: "myCHEF coordinates the brief and booking, while licensed culinary partners prepare the food. Your proposal confirms the menu, chef, service requirements and responsibilities, with one point of contact throughout." },
  ],
  'Dietary & halal': [
    { q: 'Do you accommodate dietary restrictions?', a: "Tell us your full requirements before booking. Vegetarian, vegan, halal and Jain menus can be discussed, along with ingredient exclusions. Allergies and requirements for dedicated or certified preparation need a separate assessment and written confirmation." },
    { q: 'Can you prepare halal food?', a: "Meat and poultry are sourced as halal by default. Share any specific supplier certification, ingredient or preparation requirements so they can be checked before the menu is confirmed." },
    { q: 'Do you offer vegan menus?', a: "Yes. We plan complete vegetarian and vegan menus with the same attention to flavour, variety and presentation as every other menu." },
    { q: 'Can you handle severe allergies?', a: "Please disclose severe allergies before confirming. We assess the menu, ingredients and preparation arrangements with the culinary partner. Shared kitchens cannot guarantee an allergen-free environment, and any remaining cross-contact risk must be considered before booking." },
    { q: 'Can you prepare keto or low-carb menus?', a: "We can discuss lower-carbohydrate and protein-focused menus around the targets you provide. Nutrition preferences and any medically prescribed requirements should be shared before menu planning." },
    { q: 'Do you offer gluten-free catering?', a: "Gluten-free menu options can be discussed, but suitability for someone with coeliac disease depends on the kitchen and cross-contact controls. Please share the requirement before booking so it can be assessed and confirmed in writing." },
    { q: 'Do you offer dairy-free or nut-free catering?', a: "Dairy-free and nut-free menu options can be discussed. These ingredient exclusions do not guarantee an allergen-free kitchen; please disclose allergies so the preparation arrangements and remaining risks can be assessed." },
    { q: 'Do you offer Jain catering?', a: 'Yes. Jain catering through myCHEF follows Jain dietary principles — no onion, garlic, root vegetables, mushrooms or eggs — for weddings, festivals and family gatherings.' },
    { q: 'How do you handle cross-contamination?', a: "We review ingredients, dish labels and feasible separation measures with the culinary partner. Kitchens may handle other allergens, so cross-contact cannot be completely excluded. Full allergy details are required before booking." },
    { q: 'Is your food prepared fresh on the day?', a: 'Yes — your chef cooks as close to service as possible, using fresh premium ingredients.' },
  ],
  'Locations & venues': [
    { q: 'What areas of Dubai do you cover?', a: "We serve homes and venues across Dubai, including Palm Jumeirah, Downtown, Dubai Marina, JBR, DIFC and surrounding communities. Share the exact address so we can confirm access and availability." },
    { q: 'Do you cater on yachts?', a: "Yes. We arrange menus, chefs and onboard service for yachts you have chartered in Dubai. Loading, storage, galley facilities and timing are coordinated with the operator." },
    { q: 'Can you cater at hotels?', a: 'In most cases, yes. Some hotels have restrictions on external catering. Contact us and we will coordinate with the venue.' },
    { q: 'Do you serve outside Dubai?', a: "Our main service area is Dubai. For another emirate, share the full address so we can confirm availability and any travel costs before you book." },
    { q: 'Do you cater at beach clubs and pool venues?', a: 'Yes. We coordinate catering at beach clubs, pool venues, and outdoor spaces, working with venue teams to meet their requirements.' },
    { q: 'Can you serve at multiple venues during one event?', a: 'Yes. We can coordinate multi-venue events such as welcome receptions, main dinners, and after-parties with tailored menus at each location.' },
  ],
  'Cancellations & insurance': [
    { q: 'What is your cancellation policy?', a: CANCELLATION_FAQ_ANSWER },
    { q: 'What happens if a chef is unavailable?', a: "Contact your booking coordinator if a chef becomes unavailable. We assess suitable alternatives and keep you informed under the backup arrangements in your booking terms." },
    { q: 'Are you insured?', a: 'The licensed culinary partners who prepare your food carry appropriate food-handling and personal liability coverage, which we verify as part of vetting before they work an event.' },
    { q: 'How do deposits work?', a: DEPOSIT_FAQ_ANSWER },
    { q: 'How are complaints handled?', a: 'Complaints are escalated to an event manager, investigated promptly, and resolved fairly through refund, credit, or explanation depending on the situation.' },
    { q: 'Will I receive written booking terms?', a: 'Yes. Every booking is confirmed in writing with menu, pricing, deposit, balance due date, and cancellation terms.' },
  ],
  'Bar & VIP': [
    { q: 'What bar services do you offer?', a: "We can arrange bartenders, mobile bars, mocktails and an agreed drinks service. Any alcohol service depends on venue permissions and written confirmation in your booking." },
    { q: 'Can I book a mocktail bar for a family event?', a: 'Yes. Our mocktail bar is completely alcohol-free and ideal for family celebrations, kids’ parties, and Ramadan gatherings. See /bar-services-dubai.' },
    { q: 'What is the myCHEF VIP Club?', a: 'The VIP Club is a membership for frequent hosts, offering priority booking, exclusive menus, and dedicated account management. Visit /vip-club.' },
    { q: 'How do I join the VIP Club?', a: 'Contact us via WhatsApp or the /inquiry form and ask about VIP Club membership.' },
    { q: 'Do you offer gift cards?', a: "We can arrange a dinner, tasting menu or cooking class in someone else’s name, with the menu chosen together. We currently do not issue stored-value gift cards or vouchers." },
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
  { title: 'Dietary', links: [
    { label: 'Gluten-Free Catering', href: '/allergy-safe-catering-dubai' },
    { label: 'Dairy-Free Catering', href: '/allergy-safe-catering-dubai' },
    { label: 'Nut-Free Catering', href: '/allergy-safe-catering-dubai' },
    { label: 'Keto & Low-Carb Catering', href: '/cuisines-dubai' },
    { label: 'Vegan Catering', href: '/vegan-catering-dubai' },
    { label: 'Vegetarian Catering', href: '/vegetarian-catering-dubai' },
  ]},
  { title: 'Occasions', links: [
    { label: 'Kids Birthday Catering', href: '/birthday-catering-dubai' },
    { label: 'Pool Party Catering', href: '/private-party-catering-dubai' },
    { label: 'Beach Catering', href: '/private-party-catering-dubai' },
    { label: 'Desert Dining', href: '/desert-dining-dubai' },
    { label: 'Afternoon Tea Catering', href: '/afternoon-tea-catering-dubai' },
    { label: 'Party Catering', href: '/private-party-catering-dubai' },
    { label: 'Wedding Catering', href: '/wedding-catering-dubai' },
  ]},
  { title: 'Trust & Info', links: [
    { label: 'How We Vet Chefs', href: '/how-we-vet-our-chefs' },
    { label: 'Booking Protection', href: '/booking-protection-insurance' },
    { label: 'Become a myCHEF', href: '/become-a-mychef' },
    { label: 'The Chefs We Choose', href: '/our-chefs' },
    { label: 'Leave a Review', href: '/review' },
    { label: 'Partner With Us', href: '/partner-with-us' },
    { label: 'Menus', href: '/menus' },
    { label: 'Inquiry', href: '/inquiry' },
  ]},
  { title: 'Locations', links: [
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
  useWhatsAppMessage(WHATSAPP_MESSAGE)
  useScrollTrigger()
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
        title="Catering Faq Dubai | FAQ | Private Chef & Catering Dubai | myCHEF"
        description="Catering Faq Dubai — Find answers about private chef services, catering, pricing, booking, chefs, halal, locations, and more. myCHEF Dubai's comprehensive…"
        canonicalPath="/faq"
        ogImage="/images/faq-dubai-hero.webp"
        schema={schema}
      />

      {/* Section 1: Hero */}
      <PageHero
        eyebrow="HELP CENTER"
        title="Catering Faq Dubai: Frequently Asked Questions"
        subtitle={"Answers to common questions about private chefs, catering, packages and bookings in Dubai. Explore the details or contact us to discuss your plans."}
        image="/images/faq-dubai-hero.webp"
        imageAlt="myCHEF Dubai customer support and FAQ"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]}
        minHeight="short"
        overlay="dark"
      />

      <TrustSignalStrip />

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
                <h2 className="font-playfair text-h3 text-black mb-6">{category}</h2>
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
            Tell us what you would like to know. We typically reply within 15 minutes between 9am and 9pm Dubai time.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
              <Phone size={18} />
              Chat on WhatsApp
            </a>
            <a href="mailto:info@mychef.ae" className="btn-secondary inline-flex items-center gap-2">
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
          <h2 className="font-playfair text-h2 text-white mb-4" style={{ lineHeight: '1.15' }}>Catering FAQ Dubai: what to send so we can quote</h2>
          <p className="font-inter text-body text-gray-400 max-w-xl mx-auto mb-8">
            Date, guest count and area are enough. We send a written plan, not a brochure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary">Request your quote</Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary">Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  )
}
