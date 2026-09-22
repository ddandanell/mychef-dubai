import { NonCateringVisual } from '@/components/catering/CateringEditorial'
// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /bbq-catering-dubai
//     primary:     "bbq catering dubai"
//     subkeywords: "bbq catering dubai price" · "bbq catering price per person dubai" · "best bbq catering dubai" · "bbq catering packages dubai" · "bbq catering menu dubai" · "halal bbq catering dubai" · "bbq chef at home dubai" · "villa bbq catering dubai" · "home bbq catering dubai" · "desert bbq catering dubai" · "live bbq catering dubai" · "outdoor bbq catering dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { locationPath } from '@/data/locations'
import { isParked } from '@/content/parkedUrls'
import {
  Flame,
  Beef,
  Fish,
  Home,
  Ship,
  Users,
  Check,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import LocationStrip from '../components/LocationStrip'
import FaqAccordion from '../components/FaqAccordion'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { SectionLabel } from '../components/system'
import { CATERING_FORMAT_BY_ID, formatFrom } from '@/content/cateringPricing'

const BBQ = CATERING_FORMAT_BY_ID.bbq

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan BBQ catering in Dubai (via mychef.ae/bbq-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const bbqFormats = [
  {
    icon: Flame,
    title: 'Live grill, cooked to order',
    description: 'A grill chef cooks at the station: steaks, chops, chicken and burgers finished when the guest is ready, not sitting under a lid.',
    link: '/catering-dubai',
  },
  {
    icon: Beef,
    title: 'Cuts you name in the brief',
    description: 'Halal steaks, lamb, chicken and burgers by default. The quote names the proteins. Nothing is swapped on the night without asking you.',
    link: '/private-party-catering-dubai',
  },
  {
    icon: Fish,
    title: 'Seafood on the grill',
    description: 'Whole fish, prawns and shellfish with herbs and citrus. Useful at a pool, a beach or anywhere a lighter plate sits next to the red meat.',
    link: '/buffet-catering-dubai',
  },
  {
    icon: Home,
    title: 'Villa, garden and rooftop',
    description: 'We bring the grills, cook through service and pack down. You give us the outdoor space. Apartment balconies are not an open-flame site.',
    link: '/catering-dubai',
  },
  {
    icon: Ship,
    title: 'Yacht and marina',
    description: 'A smaller grill, chilled sides and a deck that has to stay clean. The operator’s rules decide charcoal versus gas.',
    link: '/private-party-catering-dubai',
  },
  {
    icon: Users,
    title: 'Sharing platters',
    description: 'Grilled meat and fish on boards, with mezze, salads and breads, so people stay at the table instead of queuing at a tray.',
    link: '/grazing-table-dubai',
  },
]

const includedItems = [
  { title: 'Live grilling stations', description: 'Grills, fuel and a chef at the station for the service window in the quote.' },
  { title: 'Proteins named in writing', description: 'Cuts, marinades and seafood listed before the night. Halal by default.' },
  { title: 'Marinades and sauces', description: 'House rubs and sauces written into the menu, not decided at the coals.' },
  { title: 'Sides, salads and mezze', description: 'Hot sides, salads, breads and dips sized to the guest count.' },
  { title: 'Service staff as quoted', description: 'Grill chefs, and waiters if you ask for them. Headcount sets the team.' },
  { title: 'Equipment', description: 'Grills, stations and tableware travel with the team. You do not hire them separately unless you want to.' },
  { title: 'Setup and clear-down', description: 'We arrive early, run the grill and leave the terrace as we found it.' },
  { title: 'Diets in the first draft', description: 'Vegetarian, vegan and named allergies sit on the menu, not as a side plate of leaves.' },
]

const useCases = [
  {
    title: 'Villa and garden',
    description: 'Terrace, garden or rooftop with space and ventilation for a grill. Palm Jumeirah, Emirates Hills and Dubai Hills are typical. We place the station so smoke does not sit in the sitting room.',
  },
  {
    title: 'Yacht and beach',
    description: 'A compact grill and chilled sides for a charter or a beach setup around Dubai Marina and JBR. The handler or venue decides what fuel is allowed.',
  },
  {
    title: 'Birthdays and family tables',
    description: 'A live grill for a mixed table: children, adults, one vegetarian, one who only eats fish. The menu is written for that list, not for a generic BBQ.',
  },
  {
    title: 'Company days',
    description: 'A grill station for a team afternoon or a client sitting outdoors. The same kitchen as the rest of the catering, not a separate hire you have to brief twice.',
  },
]

const galleryImages = [
  { src: '/service-events.webp', alt: 'Luxury BBQ catering setup in Dubai' },
  { src: '/menu-meat.webp', alt: 'Premium grilled meat selection' },
  { src: '/process-3.webp', alt: 'Chef grilling live at a Dubai event' },
  { src: '/service-villa.webp', alt: 'Villa BBQ catering in Dubai' },
  { src: '/menu-seafood.webp', alt: 'Grilled seafood platter' },
  { src: '/service-catering.webp', alt: 'BBQ buffet spread for a celebration' },
]

const locations = [
  { name: 'Palm Jumeirah', slug: 'palm-jumeirah' },
  { name: 'Downtown Dubai', slug: 'downtown-dubai' },
  { name: 'Dubai Marina', slug: 'dubai-marina' },
  { name: 'Emirates Hills', slug: 'emirates-hills' },
  { name: 'JBR', slug: 'jbr' },
  { name: 'DIFC', slug: 'difc' },
  { name: 'Business Bay', slug: 'business-bay' },
  { name: 'Jumeirah', slug: 'jumeirah' },
  { name: 'Arabian Ranches', slug: 'arabian-ranches' },
  { name: 'Dubai Hills', slug: 'dubai-hills' },
  { name: 'Bluewaters Island', slug: 'bluewaters-island' },
  { name: 'Jumeirah Islands', slug: 'jumeirah-islands' },
  { name: 'Al Barari', slug: 'al-barari' },
  { name: 'Umm Suqeim', slug: 'umm-suqeim' },
  { name: 'Meydan', slug: 'meydan' },
  { name: 'Dubai Creek Harbour', slug: 'dubai-creek-harbour' },
]

// Only areas whose page is live: an area whose page is parked is still served, it just
// does not get a link to a page Google has been asked to forget.
const liveLocations = locations.filter((l) => !isParked(locationPath(l.slug)))


const faqs = [
  {
    q: 'Do you bring your own grills and equipment?',
    a: 'Yes. Grills, fuel, serving kit and tableware travel with the team. You provide the outdoor space: garden, rooftop, beach or yacht deck, subject to the venue’s fire rules.',
  },
  {
    q: 'What meats and seafood do you offer for BBQ?',
    a: 'The menu is written for your table. Typical proteins are steaks, lamb chops, chicken, burgers, prawns and whole fish. The quote names what is on the grill.',
  },
  {
    q: 'Is your BBQ catering halal?',
    a: 'Yes. Halal meat is the default. Vegetarian, vegan and named allergy dishes are planned in the first menu draft, not added as a leftover plate.',
  },
  {
    q: 'Can you cater a BBQ on a yacht or at the beach?',
    a: 'Yes, when the operator or venue allows a grill. We use a compact setup and chilled sides. Charcoal versus gas is decided with them, not by us on the day.',
  },
  {
    q: 'How many guests can you cater a BBQ for?',
    a: `The minimum booking is ${BBQ.minGuests} guests. Above that we add grill chefs and stations so the queue does not stall. Tell us the headcount and we size the line.`,
  },
  {
    q: 'How far in advance should I book BBQ catering?',
    a: 'One to two weeks for a smaller table. Two to four weeks when you need more stations or a peak weekend between November and March. If the date is sooner, ask; we will say what we can actually staff.',
  },
  {
    q: 'How much does BBQ catering in Dubai cost per person?',
    a: `BBQ and live stations start from AED ${BBQ.fromPerPerson} per person. Indicative market prices are around AED ${BBQ.typicalMin}–${BBQ.typicalMax}. Cuts, extra stations and waiters move the total. 5% VAT is a separate line. Recurring household chef services are priced separately.`,
  },
  {
    q: 'What is included in the price of your BBQ catering?',
    a: 'The written quote lists the menu, ingredients, grills, the chef at the station, service if you asked for it, setup and clear-down. Waiters are not assumed. If they are needed, they appear as a line.',
  },
  {
    q: 'Is there a minimum number of guests for a BBQ?',
    a: `Yes. ${BBQ.minGuests} guests on this format. Below that we will say so and point you at plated dining or a package, rather than stretching a live grill.`,
  },
  {
    q: 'Are your chefs and kitchens licensed and food-safe?',
    a: 'Independent licensed culinary partners cook. Kitchens follow Dubai Municipality food-safety rules. Grill temperatures and holding are part of that, not a slogan.',
  },
  {
    q: 'Can I get a BBQ if I live in an apartment with only a balcony?',
    a: 'Open flame is not permitted on typical Dubai apartment balconies. A live BBQ needs a garden, terrace, rooftop, beach or yacht deck that allows it. For an apartment we cook a menu that does not need a fire on the balcony. See [apartment private dining in Dubai](/apartment-private-dining-dubai).',
  },
  {
    q: 'Do you use charcoal or gas grills?',
    a: 'Both exist in the kit. The venue and the flavour you want decide which. Yachts and tight rooftops often need gas. We confirm it in the quote.',
  },
  {
    q: 'Is your BBQ menu suitable for guests who do not eat meat?',
    a: 'Yes. Halloumi, paneer, grilled vegetables, mezze and proper salads are written as dishes, not as a garnish next to the steaks. Give us the numbers.',
  },
  {
    q: 'Can you handle allergies and dietary restrictions at a BBQ?',
    a: 'Named allergies go into the first draft. We keep marinades and grill space separate where that is required. For a stricter protocol see [allergy-safe catering in Dubai](/allergy-safe-catering-dubai).',
  },
  {
    q: 'Do you provide serving staff, or just the grill chef?',
    a: 'The grill chef is the base. Waiters are added when the table needs them, and priced in the quote. You are not billed for a full front of house you did not ask for.',
  },
  {
    q: 'How far in advance should I book BBQ catering in Dubai?',
    a: 'Same as above: a week or two for a small grill, longer for peak season and extra stations. Message even if the date is close. We will not invent availability.',
  },
  {
    q: 'How quickly will I get a quote and reply after I enquire?',
    a: 'During business hours we typically reply within 15 minutes with next steps. The itemised proposal follows once date, headcount, venue and menu direction are clear. Start on [contact](/contact) or WhatsApp.',
  },
  {
    q: 'Will there be a lot of smoke and mess at my villa?',
    a: 'We place the station for ventilation, manage fuel and take the waste. Clear-down is in the booking. You should not be scraping a grill at midnight.',
  },
  {
    q: 'Is a live BBQ better than a buffet for my event?',
    a: 'A live grill cooks to order and needs space and a queue plan. A [buffet](/buffet-catering-dubai) holds food for a larger room. Many nights run both: grill for the protein, buffet for the sides.',
  },
  {
    q: 'Can I add other live cooking stations alongside the grill?',
    a: 'Yes. Shawarma, pasta or a dessert finish sit on [live cooking stations in Dubai](/live-cooking-stations-dubai). One team, one quote, one clear-down.',
  },
  {
    q: 'Is your BBQ catering fully halal?',
    a: 'Halal meat is the default. If you need certificates for a corporate sitting, say so in the enquiry and we put the sourcing on the proposal.',
  },
]

const relatedServices = [
  {
    title: 'Catering Dubai',
    description: 'Food, staff and clear-down as one brief, from drop-off through to a staffed night.',
    image: '/service-catering.webp',
    link: '/catering-dubai',
  },
  {
    title: 'Buffet catering',
    description: 'A maintained self-serve line from AED 120 per person, from 20 guests.',
    image: '/service-events.webp',
    link: '/buffet-catering-dubai',
  },
  {
    title: 'Private party catering',
    description: 'Pool, garden and house parties where the grill is one format, not the whole brief.',
    image: '/service-villa.webp',
    link: '/private-party-catering-dubai',
  },
  {
    title: 'Pool and beach parties',
    description: 'Outdoor sitting where a grill is allowed. Same kitchen as the rest of the night.',
    image: '/service-events.webp',
    link: '/private-party-catering-dubai',
  },
]

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const serviceSchema = {
  '@type': 'Service',
  name: 'BBQ Catering Dubai',
  serviceType: 'Catering Service',
  provider: {
    '@type': 'Organization',
    '@id': 'https://www.mychef.ae/#organization',
    name: 'myCHEF',
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
    { '@type': 'ListItem', position: 2, name: 'BBQ Catering Dubai', item: 'https://www.mychef.ae/bbq-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'd like a Bbq quote in Dubai. Date: __ Guests: __ Area: __"
export default function BBQCatering() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.bbq-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.bbq-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.bbq-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.bbq-fmt-card', {
      scrollTrigger: { trigger: '.bbq-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.bbq-uc-item', {
      scrollTrigger: { trigger: '.bbq-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.bbq-inc-item', {
      scrollTrigger: { trigger: '.bbq-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.bbq-gallery-img', {
      scrollTrigger: { trigger: '.bbq-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.bbq-faq-item', {
      scrollTrigger: { trigger: '.bbq-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.bbq-loc-item', {
      scrollTrigger: { trigger: '.bbq-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.bbq-rel-card', {
      scrollTrigger: { trigger: '.bbq-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.bbq-cta', {
      scrollTrigger: { trigger: '.bbq-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="BBQ Catering Dubai | myCHEF"
        description="BBQ catering Dubai from AED 150 per person, from 15 guests: live grill, named proteins, setup and clear-down. Tell us the date, headcount and outdoor space."
        canonicalPath="/bbq-catering-dubai"
        ogImage="/service-events.webp"
        hideSiteName
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <NonCateringVisual><section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/bbq-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 bbq-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">BBQ Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 bbq-hero-h1">
            BBQ Catering Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 bbq-hero-sub">
            BBQ catering in Dubai, with a chef cooking at a live grill, generous sides and service planned around your villa, garden, beach venue or yacht. From AED {BBQ.fromPerPerson} per person, from {BBQ.minGuests} guests, before 5% VAT.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary opacity-0 translate-y-4 bbq-hero-cta">Get a Tailored BBQ Quote</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 bbq-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section></NonCateringVisual>

      <TrustSignalStrip />

      {/* ═══════════════ Section 2: Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <SectionLabel align="center">THE GRILL IS THE FORMAT</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            BBQ catering Dubai with a complete service plan
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            BBQ catering in Dubai brings live cooking to your event, with the grill, chef and agreed equipment arranged for your venue. Guests enjoy freshly prepared dishes while we coordinate service and clear-down. Our service starts {formatFrom(BBQ.fromPerPerson)}, from {BBQ.minGuests} guests. The menu, equipment and staffing are confirmed in your written proposal.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Independent licensed partners cook. The quote names the chef once the night is scoped, lists the proteins, says who buys the ingredients, and shows 5% VAT on its own line. Dietary notes go into the first menu draft. Apartment balconies are not an open-flame site; we will say so.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Sides sit next to the grill: mezze, salads, breads and sauces. Waiters are added when the table needs them. See how this sits inside <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">catering in Dubai</Link>, or send the date, headcount and outdoor space.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: BBQ Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">WHAT WE GRILL</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              How the grill is built
            </h2>
          </div>

          <div className="bbq-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bbqFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="bbq-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
                >
                  <Icon size={36} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-white mb-3">{fmt.title}</h3>
                  <p className="font-inter text-body-sm text-gray-400 leading-relaxed mb-4">
                    {fmt.description}
                  </p>
                  <span className="inline-flex items-center gap-1 font-inter text-body-sm uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
                    Learn More <ArrowRight size={14} />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 4: Use Cases ═══════════════ */}
      <section className="bg-black section-padding pt-0">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">WHERE WE GRILL</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Where a live grill works
            </h2>
          </div>

          <div className="bbq-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="bbq-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
                <h3 className="font-playfair text-h3 text-white mb-3">{uc.title}</h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 5: What's Included ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-h2 text-black text-center mb-12">
            What your BBQ proposal includes
          </h2>

          <div className="bbq-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="bbq-inc-item flex gap-3 opacity-0 -translate-x-5">
                <Check size={20} className="text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-inter text-base font-medium text-black mb-1">{item.title}</h4>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 6: Gallery ═══════════════ */}
      <NonCateringVisual><section className="bg-black py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            Grill service in the room
          </h2>

          <div className="bbq-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="bbq-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                  loading="lazy" decoding="async"/>
              </div>
            ))}
          </div>
        </div>
      </section></NonCateringVisual>

      {/* ═══════════════ Section 7: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            BBQ Catering Dubai: the questions we get before a booking
          </h2>

          <FaqAccordion items={faqs} showJumpNav />
        </div>
      </section>

      {/* ═══════════════ Section 8: Locations ═══════════════ */}
      <section className="bg-charcoal py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            BBQ Catering Across Dubai
          </h2>

          <div className="bbq-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {liveLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={locationPath(loc.slug)}
                className="bbq-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 9: Related Services ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h3 className="font-playfair text-h3 text-white text-center mb-10">
            You May Also Like
          </h3>

          <div className="bbq-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="bbq-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
              >
                <NonCateringVisual><div className="aspect-video overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy" decoding="async"/>
                </div></NonCateringVisual>
                <div className="p-6">
                  <h4 className="font-playfair text-h4 text-white mb-2">{svc.title}</h4>
                  <p className="font-inter text-body-sm text-gray-400 mb-4">{svc.description}</p>
                  <span className="inline-flex items-center gap-1 font-inter text-body-sm uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
                    {svc.title} <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <LocationStrip title="BBQ catering across Dubai" />

      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center bbq-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Send the outdoor space and the headcount
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Date, guest count, area and whether a grill is allowed. We typically reply within 15 minutes during business hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary">Get a Tailored BBQ Quote</Link>
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
        </div>
      </section>
    </div>
  )
}
