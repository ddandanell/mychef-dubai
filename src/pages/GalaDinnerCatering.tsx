// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /gala-dinner-catering-dubai
//     primary:     "gala dinner catering dubai"
//     subkeywords: "gala dinner catering dubai price" · "gala dinner catering cost per person dubai" · "best gala dinner catering dubai" · "gala dinner catering packages dubai" · "gala dinner catering menu dubai" · "halal gala dinner catering dubai" · "awards dinner catering dubai" · "what is gala dinner" · "gala dinner theme ideas" · "diwali dinner catering" · "office dinner catering package dubai" · "gala food menu ideas"
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
  UtensilsCrossed,
  Soup,
  GlassWater,
  CakeSlice,
  Wine,
  Award,
  HeartHandshake,
  Building2,
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
import CorporatePackageCompare from '@/components/corporate/CorporatePackageCompare'
import CorporateInventory from '@/components/corporate/CorporateInventory'
import { packagesForOwner } from '@/content/corporatePackages'


const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to discuss gala dinner catering in Dubai (via mychef.ae/gala-dinner-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const galaFormats = [
  {
    icon: UtensilsCrossed,
    title: 'Plated Banquet',
    description: 'Multi-course seated dinner with synchronized service, elegant plate presentation, and captain-led floor coordination.',
  },
  {
    icon: Soup,
    title: 'Buffet Gala',
    description: 'Refined buffet stations designed for larger guest counts, with live carving, chef-attended counters, and graceful flow.',
  },
  {
    icon: GlassWater,
    title: 'Canapé & Champagne Reception',
    description: 'Pre-dinner reception with passed canapés, welcome drinks, and roaming service to set a sophisticated tone.',
  },
  {
    icon: CakeSlice,
    title: 'Dessert & Coffee Service',
    description: 'Styled dessert tables, plated petit fours, and after-dinner coffee service to close the evening gracefully.',
  },
  {
    icon: Wine,
    title: 'Wine & Beverage Pairing',
    description: 'Soft drinks as standard. Wine or champagne only where the venue is licensed and it is agreed in writing.',
  },
]

const galaTypes = [
  {
    icon: Award,
    title: 'Awards Ceremonies',
    description: 'Impeccable timing and plated service that keeps the spotlight on the stage while guests dine in style.',
  },
  {
    icon: HeartHandshake,
    title: 'Charity Balls & Fundraisers',
    description: 'Seated service with a clock. Courses timed to speeches. Headcount and dietary marks confirmed in the proposal.',
  },
  {
    icon: Building2,
    title: 'Corporate Anniversary Galas',
    description: 'A company anniversary dinner is still a gala clock: plated or staffed buffet, staff sized to the room, wine only where licensed.',
  },
  {
    icon: Users,
    title: 'Association & Industry Dinners',
    description: 'Formal dinners for professional associations, trade bodies, and industry groups across Dubai.',
  },
]

const includedItems = [
  { title: 'Menu and tasting', description: 'Courses named in the proposal. A tasting when the sitting is large enough to need one.' },
  { title: 'Chef and kitchen team', description: 'Chef plus kitchen support sized to the headcount. Not a fixed brigade for every room.' },
  { title: 'Waiters and a floor lead', description: 'Staff to carry, clear and hold timing around speeches. Extra roles are extra lines.' },
  { title: 'Tableware', description: 'Crockery, glass and linen for the seated format. Unusual hire is quoted separately.' },
  { title: 'Bar service where licensed', description: 'Soft drinks as standard. Wine or champagne only where the venue licence allows it and the proposal names it.' },
  { title: 'Timed to the run of show', description: 'Service pauses for awards and speeches. We do not run the stage or the AV.' },
  { title: 'Setup and pack-down', description: 'Kitchen and floor built and cleared. The venue is left as we found it.' },
]

const galleryImages = [
  { src: '/service-luxury-dining.webp', alt: 'Elegant gala dinner table setting in Dubai' },
  { src: '/menu-appetizer.webp', alt: 'Refined appetizer course for a formal dinner in Dubai' },
  { src: '/menu-canapes.webp', alt: 'Passed canapés at a gala reception in Dubai' },
  { src: '/menu-meat.webp', alt: 'Plated main course for an awards dinner in Dubai' },
  { src: '/menu-dessert.webp', alt: 'Elegant dessert service at a gala dinner in Dubai' },
  { src: '/service-events.webp', alt: 'Formal event catering service in Dubai' },
]

const locations = [
  { name: 'Downtown Dubai', slug: 'downtown-dubai' },
  { name: 'DIFC', slug: 'difc' },
  { name: 'Business Bay', slug: 'business-bay' },
  { name: 'Dubai Marina', slug: 'dubai-marina' },
  { name: 'DWTC', slug: 'dwtc' },
  { name: 'Palm Jumeirah', slug: 'palm-jumeirah' },
]

// Only areas whose page is live: an area whose page is parked is still served, it just
// does not get a link to a page Google has been asked to forget.
const liveLocations = locations.filter((l) => !isParked(locationPath(l.slug)))


const faqs = [
  {
    q: 'Do you cater large gala dinners in Dubai?',
    a: 'Yes. Headcount is confirmed in the proposal and staffing is sized to that room. We do not publish a maximum as a marketing number.',
  },
  {
    q: 'Can you create a multi-course plated menu for a formal dinner?',
    a: 'Absolutely. We design multi-course plated menus with tasting options and can accommodate dietary, halal, and cultural requirements.',
  },
  {
    q: 'Do you provide service staff and bar service for galas?',
    a: 'Waiters and a floor lead are part of a staffed gala. A bartender is a separate line, and only where the venue is licensed. We do not supply an event manager for production, AV or staging.',
  },
  {
    q: 'Can you cater at hotels and ballrooms?',
    a: 'Yes. We work within hotels, ballrooms, and partner venues across Dubai, coordinating with venue teams on logistics and timings.',
  },
  {
    q: 'How far in advance should we book gala dinner catering?',
    a: 'We recommend 4–6 weeks for large galas to allow menu tastings, venue walkthroughs, and detailed service planning.',
  },
  {
    q: 'What is gala dinner?',
    a: 'Same service as gala dinner catering Dubai, different words for it. We design the menu around your event, bring the chef and team to your address, and quote it itemised so you can see what each part costs. Tell us the date and headcount and we recommend the format.',
  },
]

const relatedServices = [
  {
    title: 'Corporate Event Catering',
    description: 'Professional dining and hospitality for launches, conferences, and corporate celebrations across Dubai.',
    image: '/corporate-catering-dubai-hero.webp',
    link: '/corporate-event-catering-dubai',
  },
  {
    title: 'Wedding Catering',
    description: 'Luxury wedding menus and service for receptions, from intimate villas to grand ballroom celebrations.',
    image: '/wedding-catering-dubai-hero.webp',
    link: '/wedding-catering-dubai',
  },
  {
    title: 'Canapé Catering',
    description: 'Elegant passed canapés and reception bites for standing receptions and pre-dinner galas.',
    image: '/canape-catering-dubai-hero.webp',
    link: '/canape-catering-dubai',
  },
  {
    title: 'Oyster & Seafood Bar',
    description: 'Shellfish station if the venue allows it and the brief names it. Not a default on every gala.',
    image: '/images/sushi-catering-dubai-hero.webp',
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
  name: 'Gala Dinner Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Gala Dinner Catering Dubai', item: 'https://www.mychef.ae/gala-dinner-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'm interested in gala dinner catering in Dubai. Date: __ Guests: __ Area: __"
export default function GalaDinnerCatering() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.gala-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.gala-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.gala-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.gala-fmt-card', {
      scrollTrigger: { trigger: '.gala-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.gala-type-card', {
      scrollTrigger: { trigger: '.gala-type-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.gala-inc-item', {
      scrollTrigger: { trigger: '.gala-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.gala-gallery-img', {
      scrollTrigger: { trigger: '.gala-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.gala-faq-item', {
      scrollTrigger: { trigger: '.gala-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.gala-loc-item', {
      scrollTrigger: { trigger: '.gala-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.gala-rel-card', {
      scrollTrigger: { trigger: '.gala-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.gala-cta', {
      scrollTrigger: { trigger: '.gala-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Gala Dinner Catering Dubai | Awards & Charity Balls | myCHEF"
        description="Gala dinner catering Dubai for seated awards and banquets. Staffed buffet from AED 120. Plated AED 700 to 950. Wine only where the venue is licensed."
        canonicalPath="/gala-dinner-catering-dubai"
        ogImage="/images/gala-dinner-catering-dubai-hero.webp"
        hideSiteName
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/gala-dinner-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 gala-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Gala Dinner Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 gala-hero-h1">
            Gala Dinner Catering Dubai: Awards, Charity Balls & Formal Celebrations
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 gala-hero-sub">
            Refined catering for awards nights, charity galas, and formal celebrations across distinguished Dubai venues.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary opacity-0 translate-y-4 gala-hero-cta">Request a proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 gala-hero-cta"
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
          <SectionLabel align="center">Formal Event Catering</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            The Importance of Gala Catering
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            A gala is judged on timing. Courses have to land around speeches. Staff have to hold a room that is watching a stage, not a buffet. Gala dinner catering in Dubai is a seated night: staffed buffet from AED 120 per person, or plated AED 700 to 950. Wine only where the venue is licensed. We do not run AV, staging or the awards script.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Gala dinner catering in Dubai is a seated night with a clock. A staffed buffet starts from AED 120 per person. Chef-led plated service is AED 700–950 per person. Wine is only where the venue licence allows it. This is not a wedding and not a 10–15 guest board dinner.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Whether you are planning an awards ceremony, charity ball, or corporate anniversary gala, we work behind the scenes so the evening flows flawlessly. Explore our gala formats below, or see how we complement formal occasions through our{' '}
            <Link to="/corporate" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">corporate catering</Link>,{' '}
            <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link>,{' '}
            <Link to="/canape-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">canapé catering</Link>,{' '}
            <Link to="/corporate-event-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">corporate event catering Dubai</Link>,{' '}
            and{' '}
            <Link to="/bar-services-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">bar service for galas</Link>.
          </p>
        </div>
      </section>


      <section className="bg-cream section-padding">
        <div className="container-custom">
          <CorporatePackageCompare
            packages={packagesForOwner('/gala-dinner-catering-dubai')}
            heading="Seated galas"
            intro="A staffed banquet uses the advertised buffet or plated floors. Wine only where the venue is licensed."
          />
        </div>
      </section>

      <CorporateInventory path="/gala-dinner-catering-dubai" quoteHref="/inquiry" />


      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">Gala Catering Formats</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Service Styles for Every Formal Dinner
            </h2>
          </div>

          <div className="gala-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galaFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <div
                  key={i}
                  className="gala-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
                >
                  <Icon size={36} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-white mb-3">{fmt.title}</h3>
                  <p className="font-inter text-body-sm text-gray-400 leading-relaxed">
                    {fmt.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 4: Gala Types ═══════════════ */}
      <section className="bg-black section-padding pt-0">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">Gala Types</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Occasions we coordinate catering for
            </h2>
          </div>

          <div className="gala-type-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galaTypes.map((type, i) => {
              const Icon = type.icon
              return (
                <div key={i} className="gala-type-card bg-charcoal p-8 opacity-0 translate-y-10">
                  <Icon size={32} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-white mb-3">{type.title}</h3>
                  <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{type.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 5: What's Included ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-h2 text-black text-center mb-12">
            What’s Included
          </h2>

          <div className="gala-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="gala-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of Our Gala Dinners
          </h2>

          <div className="gala-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="gala-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Gala Dinner Catering Dubai: the questions we get before a booking
          </h2>

          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* ═══════════════ Section 8: Locations ═══════════════ */}
      <section className="bg-charcoal py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            Gala Catering Across Dubai
          </h2>

          <div className="gala-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {liveLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={locationPath(loc.slug)}
                className="gala-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                {loc.name}
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/venue-partners"
              className="inline-flex items-center gap-2 font-inter text-body-sm uppercase tracking-wider text-gold hover:text-gold-light transition-colors"
            >
              View Gala Venues & Partners <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 9: Related Services ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h3 className="font-playfair text-h3 text-white text-center mb-10">
            You May Also Like
          </h3>

          <div className="gala-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="gala-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      <LocationStrip title="Gala dinner catering across Dubai" />

      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center gala-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Plan Your Gala Dinner Catering
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your awards night, charity ball, or formal celebration and we will design a gala menu and service plan worthy of the occasion.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary">Request a proposal</Link>
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
