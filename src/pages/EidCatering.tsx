// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /eid-catering-dubai
//     primary:     "eid catering dubai"
//     subkeywords: "eid catering dubai price" · "eid catering cost per person dubai" · "best eid catering dubai" · "eid catering packages dubai" · "eid catering menu dubai" · "eid al fitr catering dubai" · "eid al adha catering dubai" · "eid lunch offers in dubai"
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
  Sparkles,
  Drumstick,
  Cake,
  Users,
  Home,
  Check,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import FaqAccordion from '../components/FaqAccordion'
import LocationStrip from '../components/LocationStrip'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { eventSchema } from '../utils/schema'
import { SectionLabel } from '../components/system'


const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan Eid catering in Dubai (via mychef.ae/eid-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const eidFormats = [
  {
    icon: Sparkles,
    title: 'Eid al-Fitr feasts',
    description: 'Mezze, grills and sweets for the sitting after Ramadan, cooked at your address.',
    link: '/catering-dubai',
  },
  {
    icon: Drumstick,
    title: 'Eid al-Adha feasts',
    description: 'Lamb at the centre: ouzi, slow-cooked mains and rice, written for this table.',
    link: '/catering-dubai',
  },
  {
    icon: Home,
    title: 'Ouzi and whole-lamb roasts',
    description: 'Ouzi and lamb on rice, carved at the table when the kitchen and guest count can support it.',
    link: '/arabic-catering-dubai',
  },
  {
    icon: Users,
    title: 'Family gatherings',
    description: 'On-site cooking and service so the hosts stay with the family.',
    link: '/catering-dubai',
  },
  {
    icon: Cake,
    title: 'Eid sweets and dessert tables',
    description: 'Kunafa, baklava and other sweets, or a wider dessert table when quoted.',
    link: '/dessert-table-catering-dubai',
  },
  {
    icon: Home,
    title: 'Villa Eid service',
    description: 'Setup, cooking, service and pack-down at a villa you control.',
    link: '/catering-dubai',
  },
]

const includedItems = [
  { title: 'Eid al-Fitr and al-Adha menus', description: 'Two different sittings. The menu follows which Eid you are hosting.' },
  { title: 'Ouzi and lamb roasts', description: 'Carved at the table when the kitchen and guest count can support it.' },
  { title: 'Halal ingredients', description: 'Halal sourcing is the default.' },
  { title: 'Grills and mains', description: 'Mixed grills, kebabs and slow-cooked dishes written for this table.' },
  { title: 'Mezze and salads', description: 'Hot and cold mezze, replenished rather than left to sit.' },
  { title: 'Eid sweets', description: 'Kunafa, baklava and other sweets, or a dessert table when quoted.' },
  { title: 'Service staff', description: 'Waiters sized to the home, majlis or hall you have booked.' },
  { title: 'Setup and pack-down', description: 'We arrive, serve and leave the kitchen as we found it.' },
]

const useCases = [
  {
    title: 'Eid al-Fitr celebrations',
    description: 'The sitting after the fast: mezze, grills and sweets, cooked on site so the hosts stay at the table.',
  },
  {
    title: 'Eid al-Adha feasts',
    description: 'Lamb at the centre. Ouzi and slow-cooked mains with rice and mezze, drawn from Arabic catering when that kitchen is the right match.',
  },
  {
    title: 'Family gatherings at home',
    description: 'Palm Jumeirah, Emirates Hills and Dubai Hills villas and majlis. You host. We cook and clear.',
  },
  {
    title: 'Large Eid celebrations',
    description: 'Extended family. Guest count, access and how food is held decide the crew. No chef is guaranteed by name.',
  },
]

const galleryImages = [
  { src: '/service-events.webp', alt: 'Eid celebration catering event in Dubai' },
  { src: '/menu-meat.webp', alt: 'Eid ouzi and grilled lamb in Dubai' },
  { src: '/menu-dessert.webp', alt: 'Traditional Eid sweets and desserts' },
  { src: '/service-villa.webp', alt: 'Villa Eid catering styling in Dubai' },
  { src: '/service-catering.webp', alt: 'Eid feast buffet catering spread' },
  { src: '/menu-appetizer.webp', alt: 'Arabic mezze and appetizers for Eid' },
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
    q: 'Do you cater for both Eid al-Fitr and Eid al-Adha?',
    a: 'Yes. Eid al-Fitr catering Dubai is mezze, grills and sweets after the fast. Eid al-Adha catering Dubai is lamb-centred: ouzi and slow-cooked mains. Tell us which Eid.',
  },
  {
    q: 'Can you prepare ouzi and whole-lamb roasts?',
    a: 'Yes, when the kitchen, timing and guest count can support it. Carved at the table on a staffed booking.',
  },
  {
    q: 'Is all your Eid catering halal?',
    a: 'Yes. Halal sourcing is the default on Eid menus.',
  },
  {
    q: 'Do you provide Eid sweets and dessert tables?',
    a: 'Yes. Kunafa, baklava and other sweets. A full dessert table is quoted when you want it.',
  },
  {
    q: 'Do you handle home and villa Eid gatherings?',
    a: 'Yes. We cook at your home, villa or majlis. Staffed bookings include setup, service and pack-down.',
  },
  {
    q: 'How far in advance should I book Eid catering?',
    a: 'Six to eight weeks is the usual window. Lamb roasts and larger family tables book earlier.',
  },
]

const relatedServices = [
  {
    title: 'Ramadan Catering',
    description: 'Iftar and suhoor during the month. Eid is the sitting after it.',
    image: '/service-events.webp',
    link: '/ramadan-catering-dubai',
  },
  {
    title: 'Arabic Catering',
    description: 'Year-round mezze, grills and ouzi, when the date is not Eid.',
    image: '/menu-meat.webp',
    link: '/arabic-catering-dubai',
  },
  {
    title: 'Dessert Tables',
    description: 'A styled sweet display when cake and kunafa need their own table.',
    image: '/menu-dessert.webp',
    link: '/dessert-table-catering-dubai',
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
  name: 'Eid Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Eid Catering Dubai', item: 'https://www.mychef.ae/eid-catering-dubai' },
  ],
}

const eidEventSchema = eventSchema(
  'Eid Catering Dubai',
  'Halal Eid al-Fitr and Eid al-Adha feasts, ouzi and whole-lamb roasts, and family catering in Dubai.',
  undefined,
  undefined,
  'Dubai',
  '/eid-catering-dubai',
)

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, eidEventSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'd like a Eid quote in Dubai. Date: __ Guests: __ Area: __"
export default function EidCatering() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.eid-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.eid-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.eid-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.eid-fmt-card', {
      scrollTrigger: { trigger: '.eid-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.eid-uc-item', {
      scrollTrigger: { trigger: '.eid-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.eid-inc-item', {
      scrollTrigger: { trigger: '.eid-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.eid-gallery-img', {
      scrollTrigger: { trigger: '.eid-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.eid-faq-item', {
      scrollTrigger: { trigger: '.eid-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.eid-loc-item', {
      scrollTrigger: { trigger: '.eid-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.eid-rel-card', {
      scrollTrigger: { trigger: '.eid-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.eid-cta', {
      scrollTrigger: { trigger: '.eid-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Eid Catering Dubai | myCHEF"
        description="Eid catering Dubai for Eid al-Fitr and Eid al-Adha at your home or majlis. Halal menus, ouzi when needed. Buffet from AED 120. Itemised quote."
        canonicalPath="/eid-catering-dubai"
        ogImage="/service-events.webp"
        hideSiteName
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/eid-suhoor-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 eid-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Eid Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 eid-hero-h1">
            Eid Catering Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 eid-hero-sub">
            Eid catering Dubai for Eid al-Fitr and Eid al-Adha at your home or majlis. Halal menus, ouzi when the table needs it, then clear-down.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary opacity-0 translate-y-4 eid-hero-cta">Get an Eid Quote</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 eid-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <TrustSignalStrip variant="dark" />

      {/* ═══════════════ Section 2: Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <SectionLabel align="center">THE CELEBRATION IN DUBAI</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Eid catering Dubai, cooked at your table
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Eid catering Dubai is a family sitting at your home, villa or majlis for Eid al-Fitr or Eid al-Adha. Halal menus. Mezze, grills, ouzi when the table needs it, sweets. We cook there. You stay with your guests.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            A staffed buffet starts from AED 120 per person. Live stations from AED 150. Drop-off from AED 90. All before 5% VAT. No chef is guaranteed by name. Dietary notes go into the first draft.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            The month before sits on <Link to="/ramadan-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Ramadan catering in Dubai</Link>. Year-round mezze and ouzi sit on <Link to="/arabic-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Arabic catering</Link>. Sweets as a display sit on a <Link to="/dessert-table-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">dessert table</Link>. Format choice sits on <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link>. Book six to eight weeks ahead.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">EID FORMATS</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Feasts for Eid al-Fitr & al-Adha
            </h2>
          </div>

          <div className="eid-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eidFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="eid-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
            <SectionLabel align="center" tone="dark">WHERE WE SERVE</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Home, majlis, larger family tables
            </h2>
          </div>

          <div className="eid-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="eid-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What a staffed Eid sitting includes
          </h2>

          <div className="eid-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="eid-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            How Eid catering looks in Dubai
          </h2>

          <div className="eid-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="eid-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Questions before you book
          </h2>

          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* ═══════════════ Section 8: Locations ═══════════════ */}
      <section className="bg-charcoal py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            Catering Across Dubai
          </h2>

          <div className="eid-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {liveLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={locationPath(loc.slug)}
                className="eid-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="eid-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="eid-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      <LocationStrip title="Eid catering across Dubai" />

      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center eid-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Send which Eid, the guest count and the address
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us Eid al-Fitr or Eid al-Adha, how many people and whether you want ouzi. We send an itemised Eid catering Dubai quote. Book six to eight weeks ahead.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary">Get an Eid Quote</Link>
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
