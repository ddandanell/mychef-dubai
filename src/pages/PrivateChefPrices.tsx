import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Users,
  ChefHat,
  UtensilsCrossed,
  Leaf,
  MapPin,
  Clock,
  Wine,
  Phone,
  ArrowRight,
  ChevronRight,
  Check,
  Banknote,
} from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like a private chef quote for my event (via mychef.ae/private-chef-prices-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const priceTable = [
  { guests: '2 guests', perPerson: 'AED 950 – 1,300', total: 'AED 1,900 – 2,600', note: 'Intimate dinner; chef + service staff' },
  { guests: '4 guests', perPerson: 'AED 800 – 1,100', total: 'AED 3,200 – 4,400', note: 'Small celebration; multi-course menu' },
  { guests: '6 guests', perPerson: 'AED 750 – 1,000', total: 'AED 4,500 – 6,000', note: 'Family-style or plated dinner' },
  { guests: '10 guests', perPerson: 'AED 700 – 950', total: 'AED 7,000 – 9,500', note: 'Dinner party; scaled service team' },
  { guests: '20+ guests', perPerson: 'AED 600+', total: 'AED 12,000+', note: 'Larger villa or event format' },
]

const includedItems = [
  'Menu consultation and bespoke menu design',
  'Grocery shopping and premium ingredient sourcing',
  'Private chef cooking at your venue',
  'Service staff for preparation, plating, and clear-down',
  'Kitchen clean-up after the meal',
]

const costFactors = [
  {
    icon: Users,
    title: 'Group Size',
    description: 'Smaller dinners have a higher per-person rate because chef and staff time are shared among fewer guests. Larger groups benefit from economies of scale.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Menu Complexity',
    description: 'A three-course bistro menu costs less than a six-course tasting menu with wine pairings, live cooking, or intricate plating.',
  },
  {
    icon: Leaf,
    title: 'Ingredients & Cuisine',
    description: 'Premium proteins, truffles, imported specialties, and seasonal produce raise the cost. Simple, seasonal menus are often more cost-efficient.',
  },
  {
    icon: MapPin,
    title: 'Venue & Location',
    description: 'Villas without full kitchens, yacht galleys, or remote Dubai locations may require mobile equipment, extra transport, and additional staff.',
  },
  {
    icon: Clock,
    title: 'Service Duration',
    description: 'Extended service hours, late-night events, or multi-day retainers increase staffing and logistics costs.',
  },
  {
    icon: Wine,
    title: 'Add-Ons',
    description: 'Bar service, bespoke cakes, wine pairings, tableware rentals, and florals are quoted separately so you control the final spend.',
  },
]

const sampleMenus = [
  {
    name: 'Casual Private Dinner',
    courses: '3 courses',
    price: 'From AED 750 per person',
    dishes: 'Seasonal salad or soup, main course with sides, dessert. Family-style or plated.',
  },
  {
    name: 'Premium Private Chef Experience',
    courses: '5 courses',
    price: 'From AED 950 per person',
    dishes: 'Amuse-bouche, starter, fish, main, dessert. Includes service staff and elegant plating.',
  },
  {
    name: 'Tasting Menu & Wine Pairing',
    courses: '6–8 courses',
    price: 'From AED 1,400 per person',
    dishes: 'Curated tasting menu with premium ingredients, paired wines, and full front-of-house team.',
  },
]

const relatedLinks = [
  { title: 'Private Chef Dubai', link: '/private-chef-dubai', description: 'Personal chef service for intimate dinners and daily dining.' },
  { title: 'Dubai Catering Prices Guide', link: '/dubai-catering-prices-guide', description: 'Per-person budgets for every catering format.' },
  { title: 'Catering Cost Calculator', link: '/catering-cost-calculator-dubai', description: 'Estimate your event catering budget in minutes.' },
  { title: 'How to Choose a Caterer', link: '/how-to-choose-caterer-dubai', description: 'A checklist for comparing caterers in Dubai.' },
]

const faqs = [
  {
    q: 'How much is a private chef in Dubai for a dinner party?',
    a: 'For a dinner party of 6–10 guests, private chef prices in Dubai typically range from AED 700 to AED 950 per person, depending on the menu, ingredients, and service level. Smaller groups of 2–4 guests may sit at the higher end of the per-person range.',
  },
  {
    q: 'What is included in a private chef quote?',
    a: 'A private chef quote usually includes menu consultation, grocery shopping, ingredients, cooking at your venue, service during the meal, and kitchen clean-up. Staffing, transport, rentals, beverages, and VAT are itemised separately.',
  },
  {
    q: 'Is there a minimum spend for a private chef?',
    a: 'Minimums vary by date, chef, and menu. Small dinners for two are common, though the per-person rate is higher because the chef’s preparation and travel time are fixed. We confirm minimums when you request a quote.',
  },
  {
    q: 'Can I customise the menu for dietary requirements?',
    a: 'Yes. Every menu is designed around your preferences and dietary needs, including vegetarian, vegan, halal, gluten-free, dairy-free, nut-free, and keto options.',
  },
  {
    q: 'Do you offer tastings before a large event?',
    a: 'Tastings are available for larger or high-value bookings. They let you confirm flavours, portion sizes, and presentation before the event and are quoted separately.',
  },
  {
    q: 'How far in advance should I book a private chef in Dubai?',
    a: 'We recommend booking 1–2 weeks ahead for standard dates and 3–4 weeks ahead for peak seasons, public holidays, and large events. Last-minute requests can often be accommodated depending on chef availability.',
  },
]

const serviceSchema = {
  '@type': 'Service',
  name: 'Private Chef Prices Dubai',
  provider: { '@type': 'Organization', name: 'myCHEF Dubai', url: 'https://mychef.ae' },
  areaServed: { '@type': 'City', name: 'Dubai', '@id': 'https://www.wikidata.org/wiki/Q612' },
  description: 'Indicative private chef prices in Dubai by group size, menu style, and service level. Request a custom quote for your dinner.',
  url: 'https://mychef.ae/private-chef-prices-dubai',
}

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Private Chef Prices Dubai', item: 'https://mychef.ae/private-chef-prices-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

export default function PrivateChefPrices() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.prices-section', {
      scrollTrigger: { trigger: '.prices-content', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
    })

    gsap.to('.prices-faq-item', {
      scrollTrigger: { trigger: '.prices-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.prices-cta', {
      scrollTrigger: { trigger: '.prices-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div ref={containerRef}>
      <SEO
        title="Private Chef Prices Dubai | Cost Per Person & Group | myCHEF"
        description="Indicative private chef prices in Dubai by group size, menu style and service level. See what's included, cost factors and FAQs. Request a custom quote."
        canonicalPath="/private-chef-prices-dubai"
        ogImage="/images/private-chef-dubai-hero.webp"
        schema={schema}
      />

      {/* ═══════════════ Hero ═══════════════ */}
      <PageHero
        eyebrow="Transparent Pricing"
        title="Private Chef Prices in Dubai"
        subtitle="See indicative private chef costs by group size, what affects the price, and what is included — so you can budget with confidence."
        image="/images/private-chef-dubai-hero.webp"
        imageAlt="Private chef prices and menus in Dubai"
        cta={{ label: 'Request My Custom Quote', href: '/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=private-chef-prices' }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Private Chef Prices Dubai' }]}
        minHeight="tall"
        overlay="dark"
      />

      {/* ═══════════════ Price Table ═══════════════ */}
      <section className="bg-white section-padding prices-content">
        <div className="container-custom max-w-[900px]">
          <div className="prices-section opacity-0 translate-y-8 text-center mb-10">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              Indicative Pricing
            </span>
            <h2 className="font-playfair text-h2 text-black mb-4">
              Private Chef Cost by Group Size
            </h2>
            <p className="font-inter text-body text-gray-500 max-w-[700px] mx-auto">
              These are representative price bands for a bespoke multi-course private chef dinner in Dubai. Final quotes depend on menu, ingredients, venue, and service level.
            </p>
          </div>

          <div className="prices-section opacity-0 translate-y-8 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse border border-gray-200">
              <thead>
                <tr className="bg-black text-white">
                  <th className="font-inter text-sm uppercase tracking-wider text-left p-4">Group Size</th>
                  <th className="font-inter text-sm uppercase tracking-wider text-left p-4">Per Person</th>
                  <th className="font-inter text-sm uppercase tracking-wider text-left p-4">Estimated Total</th>
                  <th className="font-inter text-sm uppercase tracking-wider text-left p-4">Notes</th>
                </tr>
              </thead>
              <tbody>
                {priceTable.map((row, i) => (
                  <tr key={i} className="border-b border-gray-200 even:bg-cream">
                    <td className="font-inter text-base text-black p-4 font-medium">{row.guests}</td>
                    <td className="font-inter text-body text-gray-500 p-4">{row.perPerson}</td>
                    <td className="font-inter text-body text-gray-500 p-4">{row.total}</td>
                    <td className="font-inter text-body-sm text-gray-500 p-4">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="prices-section opacity-0 translate-y-8 font-inter text-sm text-gray-400 text-center mt-4">
            Prices are indicative and exclude VAT, beverages, rentals, and transport where applicable. Request a custom quote for an exact proposal.
          </p>
        </div>
      </section>

      {/* ═══════════════ What's Included ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="prices-section opacity-0 translate-y-8 grid md:grid-cols-2 gap-10 items-start">
            <div>
              <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
                What's Included
              </span>
              <h2 className="font-playfair text-h2 text-black mb-6">
                What You Get with a Private Chef
              </h2>
              <ul className="space-y-4">
                {includedItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={18} className="text-gold flex-shrink-0 mt-1" />
                    <span className="font-inter text-body text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-black p-8">
              <ChefHat size={40} className="text-gold mb-4" />
              <h3 className="font-playfair text-h3 text-white mb-3">
                No Hidden Menu Packages
              </h3>
              <p className="font-inter text-body text-gray-400 leading-relaxed mb-6">
                We do not force you into a fixed package. You tell us your occasion, guest count, and preferences, and we design a menu and service plan that fits your budget.
              </p>
              <Link
                to="/inquiry?utm_source=mychef.ae&utm_medium=inline_link&utm_campaign=private-chef-prices"
                className="inline-flex items-center gap-2 font-inter text-body-sm uppercase tracking-wider text-gold hover:text-gold-light transition-colors"
              >
                Get My Quote <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Cost Factors ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[1100px]">
          <div className="prices-section opacity-0 translate-y-8 text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              Cost Drivers
            </span>
            <h2 className="font-playfair text-h2 text-black">
              What Affects Private Chef Pricing?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {costFactors.map((factor, i) => {
              const Icon = factor.icon
              return (
                <div key={i} className="prices-section opacity-0 translate-y-8 bg-cream p-6 border border-gray-200">
                  <div className="w-12 h-12 bg-black flex items-center justify-center mb-4">
                    <Icon size={22} className="text-gold" />
                  </div>
                  <h3 className="font-playfair text-h3 text-black mb-2">{factor.title}</h3>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{factor.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Sample Menus ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[1100px]">
          <div className="prices-section opacity-0 translate-y-8 text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              Sample Menus
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Three Ways to Experience a Private Chef
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {sampleMenus.map((menu, i) => (
              <div key={i} className="prices-section opacity-0 translate-y-8 border border-gold/20 p-6 flex flex-col">
                <h3 className="font-playfair text-h3 text-white mb-2">{menu.name}</h3>
                <p className="font-inter text-sm text-gold uppercase tracking-wider mb-4">{menu.courses}</p>
                <p className="font-inter text-body text-gray-400 leading-relaxed mb-4 flex-1">{menu.dishes}</p>
                <p className="font-inter text-lg text-white font-medium border-t border-gold/20 pt-4">{menu.price}</p>
              </div>
            ))}
          </div>

          <p className="prices-section opacity-0 translate-y-8 font-inter text-sm text-gray-400 text-center mt-8">
            Sample menus are illustrative. Every event receives a bespoke proposal based on your preferences and dietary requirements.
          </p>
        </div>
      </section>

      {/* ═══════════════ Related Links ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="prices-section opacity-0 translate-y-8 text-center mb-10">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              Explore More
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Related Planning Resources
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {relatedLinks.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className="prices-section opacity-0 translate-y-8 group flex gap-4 bg-cream p-5 border border-gray-200 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                <div className="flex-1">
                  <h3 className="font-playfair text-h3 text-black group-hover:text-gold transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
                <ArrowRight size={18} className="text-gold flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section className="bg-cream py-20">
        <div className="container-custom max-w-[800px]">
          <div className="prices-section opacity-0 translate-y-8 text-center mb-10">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              FAQ
            </span>
            <h2 className="font-playfair text-fluid-h2 text-black">
              Common Questions About Private Chef Prices
            </h2>
          </div>

          <div className="prices-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="prices-faq-item border border-gray-200 bg-white opacity-0 translate-y-5">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-inter text-base font-medium text-black pr-4">{faq.q}</span>
                  <ChevronRight
                    size={18}
                    className={`text-gold flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-90' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-5 pb-5">
                    <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Final CTA ═══════════════ */}
      <section className="prices-cta bg-gradient-to-b from-black to-charcoal py-20">
        <div className="container-custom text-center opacity-0 translate-y-8">
          <Banknote size={40} className="text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-h2 text-white mb-4">
            Get an Exact Private Chef Quote
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us your date, guest count, venue, and menu ideas. We’ll send a tailored proposal with clear itemisation and no hidden charges.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=private-chef-prices" className="btn-primary">
              Request My Custom Quote
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
          <p className="font-inter text-sm text-gray-400 mt-6">
            We typically reply within 2 hours during business hours.
          </p>
        </div>
      </section>
    </div>
  )
}
