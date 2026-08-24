import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
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
  Check,
  Banknote,
} from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import TrustSignalStrip from '../components/TrustSignalStrip'
import LocationStrip from '../components/LocationStrip'
import FaqAccordion from '../components/FaqAccordion'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { deferNonCritical } from '../lib/deferNonCritical'
import { SectionLabel } from '../components/system'


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
  { q: "Why do private chef prices in Dubai vary so much per person?", a: "Private chef prices vary because the quote is built around your specific event, not a fixed menu, so guest count, number of courses, ingredient tier, staffing, and venue all move the number. A relaxed three-course dinner sits far below a multi-course tasting menu with premium proteins and a full front-of-house team. Because every event is different, we price by custom quote so you only pay for the experience you actually want. See the [cost drivers](/private-chef-vs-catering-dubai) that shape a proposal before you decide." },
  { q: "What is not included in the price and might cost extra?", a: "Beyond the core service, common extras are beverages and bar service, tableware and furniture rentals, bespoke cakes, wine pairings, florals, and transport for remote or hard-to-reach venues. The 5% VAT that applies in the UAE is also shown separately. We itemise every add-on in your quote so there are no surprises and you stay in full control of the final spend." },
  { q: "Do I need to pay a deposit to secure my date?", a: "Yes, a deposit is typically required to confirm your chef and lock in the date, with the balance settled closer to or on the day of the event. Deposit amounts depend on the size and scope of the booking, and we confirm the exact terms in writing before anything is charged. Popular dates around weekends and holidays get booked early, so an early deposit protects your preferred slot." },
  { q: "Is hiring a private chef cheaper than a fine-dining restaurant in Dubai?", a: "For a group, a private chef often lands close to or below the true cost of a comparable fine-dining evening once you add restaurant private-room minimum spends, drinks markups, and taxis. You also gain privacy, a menu built around your table, and a relaxed pace no restaurant booking can match. The value grows with group size, since chef and staff time is shared across more guests." },
  { q: "At what group size does a private chef become better value than dining out?", a: "A private chef usually becomes strong value from around five or six guests upward, because the fixed chef and staffing time is spread across more people, lowering the per-person rate. Small dinners for two are still popular, but they carry a higher per-head price since preparation and travel time stay the same. Larger dinner parties in a villa are where the economics tip clearly in your favour." },
  { q: "Do I have to buy the ingredients myself?", a: "No, ingredient sourcing and grocery shopping are handled for you and built into the quote, so you never shop or stock up. Your chef selects fresh, halal-sourced produce and premium proteins matched to your agreed menu and budget. If you request rare or luxury items like truffle or premium seafood, those are reflected transparently in the ingredient line of your proposal." },
  { q: "Is a service charge or gratuity added on top?", a: "Gratuity is not automatically added and is entirely at your discretion; your quote covers the chef, service staff, cooking, and clean-up as agreed. Many hosts choose to tip when the experience exceeds expectations, but there is no obligation and no hidden service charge baked into the price. Everything you are paying for is spelled out clearly in the itemised proposal." },
  { q: "Does the quote include service staff, or just the chef?", a: "For plated and multi-course dinners, the quote includes the service staff needed for preparation, plating, serving, and clear-down alongside the chef. The number of staff scales with your guest count and menu complexity, which is one reason larger or more formal events carry additional staffing cost. A casual family-style dinner may need a smaller team, keeping that portion of the budget lower." },
  { q: "Are weekday or off-peak bookings cheaper than weekends?", a: "Weekday and off-peak dates can offer better value and easier availability than busy weekends, holidays, and peak season. If your date is flexible, mentioning that when you request a quote helps us bring you the best chef and a more efficient price. Fixed dates around New Year, Eid, and major holidays tend to book out first and sit at the top of the range." },
  { q: "Is weekly meal prep cheaper per meal than a one-off dinner party?", a: "Yes, on a per-meal basis regular meal prep is usually far more economical than a one-off multi-course dinner party, because it is everyday cooking rather than an event experience. A dinner party pays for occasion-level menus, premium plating, and a full service team, while [weekly meal prep](/weekly-meal-prep-dubai) is priced for volume and routine. If your goal is healthy daily eating rather than entertaining, meal prep gives the lowest cost per plate." },
  { q: "Can you work to a fixed budget I set?", a: "Yes, tell us your target budget and we design a menu, ingredient selection, and service plan that fits it rather than pushing a set package. Because pricing is quote-based, we can adjust courses, protein choices, and staffing to hit the number that works for you. This is easier when you share your guest count, venue, and date so the proposal is accurate from the start." },
  { q: "Are there travel or location fees for villas, hotels, or remote venues?", a: "A location or logistics fee may apply for remote areas, venues without a functional kitchen, or spaces needing mobile equipment and extra transport. Most standard Dubai homes and villas do not trigger meaningful surcharges, and any that apply are shown clearly in your quote. Share your venue details up front so the proposal reflects the real setup from the beginning." },
  { q: "How does menu complexity change the final price?", a: "Menu complexity is one of the biggest price levers, because more courses, live cooking stations, intricate plating, and pairings all add chef time, staffing, and ingredient cost. A refined three-course dinner is considerably lighter on budget than an eight-course tasting menu with wine service. Browse our [menus](/menus) to see how different formats map to different price points before you choose." },
  { q: "Will the price change if some guests cancel or extra guests join?", a: "Minor changes to guest numbers can shift the total, since pricing is driven largely by headcount, ingredients, and staffing. We ask for a confirmed guest count a set time before the event so shopping and staffing are accurate, and we handle reasonable adjustments where possible. Significant last-minute changes may affect the quote, so it is best to update us as soon as your numbers firm up." },
  { q: "How do I get an exact price for my event?", a: "Share your date, guest count, venue, and any menu or dietary preferences, and we return a tailored, itemised proposal with clear pricing and VAT shown separately. There is no obligation, and during business hours we typically reply within about 15 minutes. Start with a quick message on our [contact](/contact) page and we will turn your details into a precise quote." },
]

const serviceSchema = {
  '@type': 'Service',
  name: 'Private Chef Prices Dubai',
  provider: { '@type': 'Organization', name: 'myCHEF Dubai', url: 'https://www.mychef.ae' },
  areaServed: { '@type': 'City', name: 'Dubai', '@id': 'https://www.wikidata.org/wiki/Q612' },
  description: 'Indicative private chef prices in Dubai by group size, menu style, and service level. Request a custom quote for your dinner.',
  url: 'https://www.mychef.ae/private-chef-prices-dubai',
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
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Private Chef Prices Dubai', item: 'https://www.mychef.ae/private-chef-prices-dubai' },
  ],
}

const privateChefOffers = [
  {
    name: 'Private Chef Dinner for 2 Guests',
    description: 'Intimate dinner for two; total estimate AED 1,900 – 2,600.',
    price: '1900',
  },
  {
    name: 'Private Chef Dinner for 4 Guests',
    description: 'Small celebration; total estimate AED 3,200 – 4,400.',
    price: '3200',
  },
  {
    name: 'Private Chef Dinner for 6 Guests',
    description: 'Family-style or plated dinner; total estimate AED 4,500 – 6,000.',
    price: '4500',
  },
  {
    name: 'Private Chef Dinner for 10 Guests',
    description: 'Dinner party with scaled service team; total estimate AED 7,000 – 9,500.',
    price: '7000',
  },
  {
    name: 'Private Chef Dinner for 20+ Guests',
    description: 'Larger villa or event format; total estimate from AED 12,000.',
    price: '12000',
  },
]

const aggregateOfferSchema = {
  '@type': 'AggregateOffer',
  name: 'Private Chef Prices Dubai',
  description: 'Indicative private chef prices in Dubai by group size. Prices are starting points; final quotes depend on menu, ingredients, venue, and service level.',
  url: 'https://www.mychef.ae/private-chef-prices-dubai',
  priceCurrency: 'AED',
  lowPrice: '1900',
  highPrice: '12000',
  offers: privateChefOffers.map((offer) => ({
    '@type': 'Offer',
    name: offer.name,
    description: offer.description,
    url: 'https://www.mychef.ae/private-chef-prices-dubai',
    price: offer.price,
    priceCurrency: 'AED',
    availability: 'https://schema.org/InStock',
  })),
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, aggregateOfferSchema, faqSchema, breadcrumbSchema],
}

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'd like private chef prices for my event in Dubai. Date: __ Guests: __ Area: __"
export default function PrivateChefPrices() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    // Defer below-the-fold ScrollTrigger animations so they do not contend
    // with LCP/INP during the initial load.
    deferNonCritical(() => {
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
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Private Chef Prices Dubai | AED 700–950 Per Person | myCHEF"
        description="See 2026 private chef prices in Dubai: per-person costs for 2–20 guests, what's included, and what affects the price. Get a tailored quote in 15 minutes."
        canonicalPath="/private-chef-prices-dubai"
        ogImage="/images/private-chef-prices-dubai-hero.webp"
        hideSiteName
        preloadHero="/images/private-chef-prices-dubai-hero.webp"
        schema={schema}
      />

      {/* ═══════════════ Hero ═══════════════ */}
      <PageHero
        eyebrow="Transparent Pricing"
        title="Private Chef Prices Dubai: Per-Person Cost Guide"
        subtitle="See indicative private chef costs by group size, what affects the price, and what is included — so you can budget with confidence."
        image="/images/private-chef-prices-dubai-hero.webp"
        imageAlt="Private chef prices and menus in Dubai"
        imageWidth={1344}
        imageHeight={752}
        cta={{ label: 'Get My Private Chef Quote', href: '/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=private-chef-prices' }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Private Chef Prices Dubai' }]}
        minHeight="tall"
        overlay="dark"
      />

      <TrustSignalStrip variant="dark" />

      {/* ═══════════════ Price Table ═══════════════ */}
      <section className="bg-white section-padding prices-content">
        <div className="container-custom max-w-[900px]">
          <div className="prices-section opacity-0 translate-y-8 text-center mb-10">
            <SectionLabel align="center">Indicative Pricing</SectionLabel>
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
              <SectionLabel align="center">What's Included</SectionLabel>
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
                Get My Private Chef Quote <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Cost Factors ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[1100px]">
          <div className="prices-section opacity-0 translate-y-8 text-center mb-12">
            <SectionLabel align="center">Cost Drivers</SectionLabel>
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
            <SectionLabel align="center" tone="dark">Sample Menus</SectionLabel>
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
            <SectionLabel align="center">Explore More</SectionLabel>
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
            <SectionLabel align="center">FAQ</SectionLabel>
            <h2 className="font-playfair text-fluid-h2 text-black">
              Common Questions About Private Chef Prices
            </h2>
          </div>

          <FaqAccordion items={faqs} showJumpNav />
        </div>
      </section>

      <LocationStrip title="Private chef prices by Dubai location" subtitle="Pricing varies slightly by venue access and travel. Request a tailored quote for your area." />

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
              Get My Private Chef Quote
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
            We typically reply within 15 minutes during business hours.
          </p>
        </div>
      </section>
    </div>
  )
}
