// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /arabic-catering-dubai
//     primary:     "arabic catering dubai"
//     subkeywords: "arabic catering dubai price" · "arabic catering cost per person dubai" · "best arabic catering dubai" · "arabic catering packages dubai" · "arabic catering menu dubai" · "lebanese catering dubai" · "middle eastern catering dubai" · "mezze catering dubai" · "catering arabic food dubai" · "dubai catering company list" · "corporate catering" · "arabian ranches dining"
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
  UtensilsCrossed,
  Soup,
  Wheat,
  ChefHat,
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


const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan Arabic catering in Dubai (via mychef.ae/arabic-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const menuHighlights = [
  {
    icon: Soup,
    title: 'Mezze Spreads',
    description: 'Hummus, moutabal, tabbouleh, fattoush, vine leaves and warm flatbreads. Cold and hot mezze as the opening table, not a side dish.',
    link: '/grazing-table-dubai',
  },
  {
    icon: Flame,
    title: 'Charcoal Grills',
    description: 'Shish taouk, lamb kofta, kebab halabi and lamb chops over charcoal, grilled to order at a partner-chef station.',
    link: '/catering-dubai',
  },
  {
    icon: ChefHat,
    title: 'Ouzi & Whole Lamb',
    description: 'Slow-roasted lamb over spiced rice with nuts and raisins, carved at the table when the guest list needs a centrepiece.',
    link: '/catering-dubai',
  },
  {
    icon: UtensilsCrossed,
    title: 'Emirati Specialities',
    description: 'Machboos, harees and balaleet when the brief is Emirati, not only Levantine mezze.',
    link: '/iftar-catering-dubai',
  },
  {
    icon: Wheat,
    title: 'Levantine Classics',
    description: 'Manakish, fatteh, shawarma carving stations, and slow-cooked stews drawn from Lebanese, Syrian, and Palestinian kitchens.',
    link: '/mediterranean-catering-dubai',
  },
  {
    icon: Users,
    title: 'Arabic Sweets',
    description: 'Kunafa, baklava, basbousa, and Arabic coffee with dates. A dessert table or passed service, timed after the mains.',
    link: '/catering-dubai',
  },
]

const useCases = [
  {
    title: 'Weddings & Engagements',
    description: 'Welcome mezze, a carved ouzi if the table needs a centrepiece, then sweets and coffee. Staffing and stations follow the guest count, not a fixed banquet package.',
  },
  {
    title: 'Majlis & Villa Gatherings',
    description: 'Family majlis and villa nights: charcoal grills, sharing platters and mezze that keeps coming. The kitchen you have is checked before the night.',
  },
  {
    title: 'Iftar & Ramadan Events',
    description: 'Iftar and suhoor: dates, soups, mezze, mains and sweets, timed to Maghrib rather than to a restaurant slot. Homes, hotels and offices.',
  },
  {
    title: 'Corporate & National Day',
    description: 'Corporate functions and National Day: mezze, grills and Arabic coffee at the office or venue, with setup and pack-down included.',
  },
]

const includedItems = [
  { title: 'Mezze menu', description: 'Cold and hot mezze written around who is eating and whether they sit or stand.' },
  { title: 'Live charcoal grills', description: 'Partner-chef stations for kebabs, taouk and lamb, grilled to order.' },
  { title: 'Ouzi and carving', description: 'Slow-roasted lamb ouzi carved at the table when the guest list needs a centrepiece.' },
  { title: 'Emirati and Levantine', description: 'Machboos and harees, or fattoush, fatteh and mashawi, or both on the same spread.' },
  { title: 'Halal sourcing', description: 'Halal meat and poultry as standard. Specific certification belongs in the brief.' },
  { title: 'Vegetarian and vegan', description: 'Plant-based mezze and mains designed in, not substituted at the pass.' },
  { title: 'Sweets and coffee', description: 'Kunafa, baklava, dates and Arabic coffee, timed after the mains.' },
  { title: 'Setup and service', description: 'Waiters, warmers, on-site coordination and pack-down. You stay with your guests.' },
]

const galleryImages = [
  { src: '/menu-appetizer.webp', alt: 'Arabic mezze appetizer spread in Dubai' },
  { src: '/menu-meat.webp', alt: 'Arabic charcoal grilled meats catering' },
  { src: '/service-events.webp', alt: 'Arabic catering event setup in Dubai' },
  { src: '/menu-canapes.webp', alt: 'Arabic canapé and finger food selection' },
  { src: '/service-villa.webp', alt: 'Arabic villa feast catering in Dubai' },
  { src: '/menu-dessert.webp', alt: 'Arabic sweets and baklava display' },
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
    q: 'What does your Arabic catering menu cover?',
    a: 'Levantine mezze and grills, Emirati dishes such as machboos and harees, and ouzi when the table needs a centrepiece. Cold and hot mezze, charcoal mains, and Arabic sweets.',
  },
  {
    q: 'Can you prepare a whole-lamb ouzi for a wedding?',
    a: 'Yes. Slow-roasted whole-lamb ouzi over spiced rice with nuts can be carved at the table. Say so in the brief; it changes staffing and timing.',
  },
  {
    q: 'Is the meat halal?',
    a: 'Yes. Halal meat and poultry are standard across all our Arabic catering in Dubai, sourced from trusted suppliers. Halal is the baseline for our menus and we are glad to confirm sourcing when you plan.',
  },
  {
    q: 'Do you cater iftar and Ramadan gatherings?',
    a: 'We do. We coordinate catering for iftar and suhoor events with dates, soups, mezze, grilled mains, and Arabic sweets, timed for the occasion. We can serve at villas, hotels, and corporate venues across Dubai.',
  },
  {
    q: 'Do you offer vegetarian and vegan options?',
    a: 'Yes. Hummus, moutabal, stuffed vegetables and grilled halloumi sit as menus in their own right, not as a plate swapped at the pass. Flag vegetarian and vegan guests when you enquire.',
  },
  {
    q: 'How far in advance should I book Arabic catering?',
    a: 'For smaller gatherings, one to two weeks is ideal. For weddings and large functions, we recommend three to four weeks. During Ramadan and peak season, earlier booking is strongly advised.',
  },
  { q: "How much does Arabic catering cost per person in Dubai?", a: "Arabic catering in Dubai is priced by custom quote, because the cost depends on your guest count, menu style, and whether you want live grill stations or a carved ouzi centrepiece. Mezze-and-grills menus generally sit in the mid-range compared with simple finger food or premium seafood spreads, and every quote we send is itemised with 5% VAT shown clearly. Share your numbers on our [contact page](/contact) and we'll build a transparent proposal, usually within 15 minutes during business hours." },
  { q: "What is included in your Arabic catering price?", a: "Every Arabic catering booking includes menu design, ingredient sourcing and shopping, on-site cooking, plating and serving, and full cleanup afterwards, so you get one all-in price rather than a string of add-ons. That covers your mezze spread, charcoal grills, mains, and Arabic sweets, plus warmers and setup at your venue. Serving staff are optional and easy to add if you'd like waiters for a formal service." },
  { q: "Do you provide the crockery, cutlery, chafing dishes, and setup for Arabic catering?", a: "Yes, we bring the equipment needed to serve your Arabic feast properly, including warmers, chafing dishes, serving platters, and station setup, then handle full pack-down at the end. Crockery and cutlery hire can be arranged as part of your quote depending on your venue and guest count. Just tell us whether you're hosting at a villa, hotel, or majlis and we'll scope the setup accordingly." },
  { q: "Is your Arabic catering fully licensed and food-safety compliant?", a: "Yes, our chefs and kitchens operate to Dubai Municipality food-safety standards, so your Arabic catering is prepared, transported, and held at the correct temperatures throughout. We follow proper hygiene and cold-chain practices from sourcing to serving, which matters especially for grilled meats and mezze served over a long event. You can read more about how [we work](/how-it-works) before you book." },
  { q: "Is all the meat in your Arabic menus halal?", a: "Yes, halal meat and poultry are the default across all our Arabic catering in Dubai, sourced from trusted suppliers. Because Arabic cuisine centres on lamb, chicken, and kofta, halal sourcing is built into everything we prepare, and we're always happy to confirm the details when you plan. If you need a fully halal-certified event, explore our dedicated [halal catering](/halal-catering-dubai) menus." },
  { q: "What is the minimum number of guests for Arabic catering?", a: "We cater Arabic menus for a wide range of gatherings, from an intimate family majlis to weddings of several hundred guests, and we'll tailor the spread to your headcount rather than force a fixed minimum. Smaller villa dinners work beautifully with a focused mezze-and-grill selection, while larger celebrations can add ouzi, live stations, and a full sweets table. Give us your guest count and we'll advise the right menu scale." },
  { q: "Can you cater a large Arabic wedding banquet in Dubai?", a: "Yes. Welcome mezze, a carved ouzi if the table needs it, then sweets and coffee. Timing, staffing and stations follow the guest count. The marriage itself sits on [wedding catering](/wedding-catering-dubai)." },
  { q: "Do you offer live cooking stations like shawarma and charcoal grills?", a: "Yes, live stations are a highlight of our Arabic catering, from a shawarma carving station to open charcoal grills searing shish taouk, kofta, and lamb chops to order. Interactive stations add theatre and keep food hot and fresh throughout the event, which guests love at weddings, majlis nights, and corporate functions. Ask about pairing a [shawarma station](/live-cooking-stations-dubai) with a mezze grazing table." },
  { q: "Should we choose buffet or plated service for Arabic catering?", a: "It depends on your occasion: a buffet or station spread suits the sharing, abundant spirit of Arabic hospitality and works well for majlis evenings and large gatherings, while plated service gives a more formal, controlled experience for weddings and gala dinners. Arabic mezze naturally lends itself to a generous buffet, but we can plate courses elegantly when the setting calls for it. We'll recommend the format that best fits your guests and venue." },
  { q: "Can you accommodate vegetarian, vegan, and dietary requirements alongside the meat dishes?", a: "Yes. Hummus, moutabal, stuffed vine leaves and grilled vegetables sit alongside the grills as proper plates, not a last-minute swap. Flag gluten-free, nut-free and other notes when you enquire." },
  { q: "Do you cater iftar, suhoor, and Ramadan gatherings?", a: "Yes, we cater iftar and suhoor throughout Ramadan with dates, soups, mezze, grilled mains, and Arabic sweets, timed and styled for the occasion at homes, hotels, and corporate venues. Ramadan is one of our busiest periods, so we plan the menu and serving flow carefully around your break-fast time. Book early and see our dedicated [iftar catering](/iftar-catering-dubai) menus." },
  { q: "Which areas of Dubai do you cover for Arabic catering?", a: "We cater Arabic feasts across Dubai, including Palm Jumeirah, Downtown, Dubai Marina, Emirates Hills, Business Bay, Arabian Ranches, and beyond, bringing the full kitchen and setup to your location. Whether it's a villa, apartment, hotel ballroom, or outdoor majlis, we plan the logistics around your venue's access and facilities. Tell us where you're hosting and we'll confirm coverage and setup details." },
  { q: "How far in advance should I book Arabic catering in Dubai?", a: "For smaller gatherings, one to two weeks is usually enough. Weddings and large functions: three to four weeks. During Ramadan and November to March, book earlier. Short notice is assessed against live partner availability." },
  { q: "Do you provide serving staff and waiters for Arabic events?", a: "Yes, serving staff are optional and easy to add, from waiters passing mezze and Arabic coffee to station chefs manning the grills and shawarma. For formal weddings and corporate dinners, a full service team keeps the flow smooth, while relaxed villa gatherings may need only setup and grill staff. We'll recommend the right number of staff for your guest count and service style." },
  { q: "What is the difference between Emirati and Levantine dishes on your Arabic menu?", a: "Emirati dishes like machboos, harees, and balaleet are local UAE specialities built on spiced rice, slow cooking, and regional flavours, while Levantine classics such as fattoush, manakish, fatteh, and charcoal mashawi draw from Lebanese, Syrian, and Palestinian kitchens. Our Arabic menus can lean into one tradition or blend both for a broad, crowd-pleasing spread. We'll help you balance the two based on your guests and occasion." },
  { q: "Can you build a corporate or National Day Arabic spread for our office?", a: "Yes, an authentic Arabic and Emirati spread is a favourite for corporate functions, National Day celebrations, and client events, bringing a genuine sense of place and generous hospitality. We handle everything from mezze grazing tables to live grill stations and Arabic coffee service at your office or venue, with setup and cleanup included. Explore our [corporate catering](/corporate-event-catering-dubai) options to plan your event." },
]

const relatedServices = [
  {
    title: 'Luxury Catering Dubai',
    description: 'Food-only through full service: drop-off, buffet, stations or a chef at the table.',
    image: '/service-catering.webp',
    link: '/catering-dubai',
  },
  {
    title: 'Mediterranean Catering',
    description: 'Greek and coastal menus built on seafood, olive oil, and fresh, healthy flavour.',
    image: '/menu-seafood.webp',
    link: '/mediterranean-catering-dubai',
  },
  {
    title: 'Grazing Tables',
    description: 'A styled table of cheeses, breads, fruit and mezze, set up and packed down.',
    image: '/menu-appetizer.webp',
    link: '/grazing-table-dubai',
  },
  {
    title: 'Live Shawarma & Kebab Station',
    description: 'Freshly carved shawarma and grilled kebabs cooked to order at your event.',
    image: '/images/arabic-catering-dubai-hero.webp',
    link: '/live-cooking-stations-dubai',
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
  name: 'Arabic Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Arabic Catering Dubai', item: 'https://www.mychef.ae/arabic-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'd like a Arabic quote in Dubai. Date: __ Guests: __ Area: __"
export default function ArabicCatering() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.arab-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.arab-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.arab-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.arab-fmt-card', {
      scrollTrigger: { trigger: '.arab-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.arab-uc-item', {
      scrollTrigger: { trigger: '.arab-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.arab-inc-item', {
      scrollTrigger: { trigger: '.arab-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.arab-gallery-img', {
      scrollTrigger: { trigger: '.arab-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.arab-faq-item', {
      scrollTrigger: { trigger: '.arab-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.arab-loc-item', {
      scrollTrigger: { trigger: '.arab-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.arab-rel-card', {
      scrollTrigger: { trigger: '.arab-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.arab-cta', {
      scrollTrigger: { trigger: '.arab-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Arabic Catering Dubai | Mezze, Grills & Ouzi"
        description="Arabic catering Dubai: mezze, charcoal grills, ouzi, Emirati and Levantine dishes. Chefs cook on site, staff serve, the room is cleared. Send date, guest count and venue."
        canonicalPath="/arabic-catering-dubai"
        ogImage="/menu-appetizer.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/arabic-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 arab-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Arabic Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 arab-hero-h1">
            Arabic Catering Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 arab-hero-sub">
            Arabic catering Dubai for a majlis, a villa, a wedding or an office. Mezze, charcoal grills, ouzi if the table needs a centrepiece, sweets and coffee. Halal meat as standard. Chefs cook on site, staff serve, the room is cleared. Send the date, guest count and venue.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary opacity-0 translate-y-4 arab-hero-cta">Get an Arabic catering quote</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 arab-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
        <TrustSignalStrip className="mt-8" variant="dark" />
      </section>

      {/* ═══════════════ Section 2: Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <SectionLabel align="center">AUTHENTIC ARABIC CATERING IN DUBAI</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Shared plates, then the grill
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Arabic catering Dubai starts with mezze: hummus, moutabal, tabbouleh, vine leaves and warm flatbread. It moves through charcoal grills and slow-cooked dishes, and it closes with kunafa, baklava and Arabic coffee. Lebanese catering in Dubai is usually this mezze-and-grill brief, not a separate cuisine. The chef cooks on site. Staff serve. The room is cleared.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Format decides most of the price: a mezze table, live grills, or a carved ouzi. Guest count, staffing and 5% VAT still move the total. Dietary notes go into the first menu draft. The written proposal itemises food, chefs, staff and hire.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Emirati dishes such as machboos and harees, Levantine grills and fatteh, and a whole-lamb ouzi when the table needs a centrepiece. Menus are often shaped with <Link to="/chefs/layla-middle-eastern-chef" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Chef Layla, Middle Eastern chef</Link>. Halal sourcing is the baseline. Vegetarian and vegan mezze are designed in. See how it sits inside <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">catering in Dubai</Link>, <Link to="/mediterranean-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Mediterranean catering</Link> and <Link to="/halal-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">halal catering</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Menu Highlights ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">MENU HIGHLIGHTS</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              From Mezze to Ouzi
            </h2>
          </div>

          <div className="arab-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuHighlights.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="arab-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
            <SectionLabel align="center" tone="dark">WHO your chef prepares FOR</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Who this menu is for
            </h2>
          </div>

          <div className="arab-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="arab-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Arabic catering Dubai includes
          </h2>

          <div className="arab-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="arab-inc-item flex gap-3 opacity-0 -translate-x-5">
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
      <section className="bg-black py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            A Taste of Our Arabic Catering
          </h2>

          <div className="arab-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="arab-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                  loading="lazy" decoding="async"/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 7: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            Arabic Catering Dubai: the questions we get before a booking
          </h2>

          <FaqAccordion items={faqs} showJumpNav />
        </div>
      </section>

      {/* ═══════════════ Section 8: Locations ═══════════════ */}
      <section className="bg-charcoal py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            Catering Across Dubai
          </h2>

          <div className="arab-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {liveLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={locationPath(loc.slug)}
                className="arab-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="arab-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="arab-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy" decoding="async"/>
                </div>
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

      <LocationStrip title="Arabic catering across Dubai" />

      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center arab-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Send the date, guest count and venue
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Majlis, villa, wedding or office. Tell us who is eating and whether you want mezze, grills or an ouzi. We send an itemised proposal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary">Get an Arabic catering quote</Link>
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
