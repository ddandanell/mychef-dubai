// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /dessert-table-catering-dubai
//     primary:     "dessert table catering dubai"
//     subkeywords: "dessert table catering dubai price" · "dessert table catering price per person dubai" · "best dessert table catering dubai" · "dessert table catering packages dubai" · "dessert table catering menu dubai" · "halal dessert table catering dubai" · "sweet table dubai" · "dessert table setup dubai" · "dessert table dubai" · "childrens dessert table dubai" · "dessert shops in dubai" · "wedding catering in dubai"
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
  Cake,
  Cookie,
  Heart,
  PartyPopper,
  Baby,
  Coffee,
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
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan a dessert table in Dubai (via mychef.ae/dessert-table-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const dessertFormats = [
  {
    icon: Cake,
    title: 'Centrepiece cake',
    description: 'A cake written for the table: flavour, size and how it is cut. Wedding tiers and birthday cakes sit on the same kitchen.',
    link: '/catering-dubai',
  },
  {
    icon: Cookie,
    title: 'Patisserie',
    description: 'Macarons, éclairs, tarts and petits fours, counted to the guest list, not piled for a photograph.',
    link: '/catering-dubai',
  },
  {
    icon: Heart,
    title: 'Wedding sweet table',
    description: 'A dessert display next to the wedding catering, styled to the palette you already chose. The meal is a different page.',
    link: '/wedding-catering-dubai',
  },
  {
    icon: PartyPopper,
    title: 'Birthday sweet table',
    description: 'Cake plus mini sweets for a mixed-age table. Children and adults are named in the brief.',
    link: '/birthday-catering-dubai',
  },
  {
    icon: Baby,
    title: 'Baby shower sweets',
    description: 'A smaller table: cake, cake pops and labelled mini desserts. Diets go on the first draft.',
    link: '/baby-shower-catering-dubai',
  },
  {
    icon: Coffee,
    title: 'Dessert and coffee',
    description: 'A finish after a seated dinner. Coffee is an add-on, quoted, not assumed. Live dessert carts sit on live stations.',
    link: '/catering-dubai',
  },
]

const includedItems = [
  { title: 'Cake', description: 'Flavour, size and design named on the quote. Matteo can lead pastry when the brief needs a pastry chef.' },
  { title: 'Patisserie selection', description: 'Macarons, tarts, éclairs and petits fours counted to headcount.' },
  { title: 'Mini sweets', description: 'Cupcakes, cake pops and cookies if the table needs them.' },
  { title: 'Stands and plinths', description: 'We bring the display kit. You do not source it unless you want to.' },
  { title: 'Styling to the brief', description: 'Colour and florals follow what you already planned, not a separate theme we invent.' },
  { title: 'On-site build', description: 'We set the table at the villa or venue, timed to the running order.' },
  { title: 'Dietary pieces', description: 'Eggless, gluten-free and other named needs labelled, not mixed through unmarked trays.' },
  { title: 'Pack-down', description: 'We clear the table. Leftovers are packed if you want them.' },
]

const useCases = [
  {
    title: 'Wedding sweet tables',
    description: 'A dessert display beside the wedding meal. Cake and patisserie are counted to the guest list. Heat and air-conditioning decide what can sit out.',
  },
  {
    title: 'Birthdays',
    description: 'A centrepiece cake plus mini sweets. Mixed-age tables need both. The birthday catering page owns the rest of the night.',
  },
  {
    title: 'Baby showers',
    description: 'A smaller sweet table. Pastel is a brief, not a promise. Diets and nut rules are written first.',
  },
  {
    title: 'After a seated dinner',
    description: 'Patisserie and coffee as a finish, not a second meal. A live cart belongs on live cooking stations if you want gelato or crepes cooked in front of guests.',
  },
]

const galleryImages = [
  { src: '/menu-dessert.webp', alt: 'Styled dessert table in Dubai' },
  { src: '/service-events.webp', alt: 'Event dessert station set-up' },
  { src: '/menu-canapes.webp', alt: 'Sweet and savoury display' },
  { src: '/service-villa.webp', alt: 'Villa dessert table styling' },
  { src: '/menu-appetizer.webp', alt: 'Patisserie and mini treats' },
  { src: '/service-luxury-dining.webp', alt: 'Luxury dining dessert service' },
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
    q: 'What is included in a dessert table?',
    a: 'A dessert table typically features a centrepiece cake alongside a selection of patisserie, mini cakes, cupcakes, cookies, and bite-sized sweets, all arranged on styled stands. We tailor the mix and quantity to your guest count and theme.',
  },
  {
    q: 'Can you make a custom cake for the table?',
    a: 'Yes. Every dessert table can be built around a bespoke cake designed to your flavour, palette, and theme, whether that is an elegant tiered wedding cake or a playful birthday centrepiece.',
  },
  {
    q: 'Do you style the dessert table to match my theme?',
    a: 'Absolutely. We style each dessert table with tiered stands, plinths, glassware, florals, and signage matched to your colour palette and event theme, so it works as both a feature and a backdrop.',
  },
  {
    q: 'Can you accommodate dietary requirements?',
    a: 'Yes. We can arrange eggless, vegetarian, and gluten-free sweets, and we are happy to build allergy-conscious selections. Let us know your guests’ requirements when planning your dessert table.',
  },
  {
    q: 'Do you set up and clear the dessert table?',
    a: 'Yes. Our chefs delivers, builds, and styles the dessert table on-site at your villa or venue, and we return to pack down and clear afterwards so you can simply enjoy the celebration.',
  },
  {
    q: 'How far in advance should I book a dessert table?',
    a: 'For smaller dessert tables, one to two weeks is ideal. For wedding cakes and fully styled displays, we recommend two to four weeks. During peak season from November to March, earlier booking is strongly advised.',
  },
  { q: "How much does a dessert table cost in Dubai?", a: "Every dessert table is priced by custom quote, because the cost depends on your guest count, the number of dessert varieties, the centrepiece cake, and how elaborate the styling is. Once you tell us the occasion, headcount, and any theme, we send a clear itemised proposal, and 5% VAT applies to the final total. Share your details on our [contact page](/contact) and we usually reply within about 15 minutes during business hours." },
  { q: "How many desserts should I order per guest?", a: "As a guide, plan for two to three mini desserts per guest when you are also serving a centrepiece cake, and four to five per guest if the dessert table is replacing a cake entirely. We help you get the numbers right when we build your proposal, factoring in the length of your event and whether desserts follow a full meal or stand alone." },
  { q: "Will the desserts survive Dubai's heat and stay fresh?", a: "Yes, when planned properly. For indoor, air-conditioned spaces our dessert tables hold beautifully for a couple of hours, and we select heat-stable sweets, chilled formats, and stabilised finishes for warmer or outdoor settings. Our chefs handle refrigeration and transport timing, and we advise on placement away from direct sun so buttercream and delicate chocolate work stay pristine." },
  { q: "Are your desserts halal and made to Dubai food-safety standards?", a: "Yes. Our desserts are halal sourced by default, and our chefs and kitchens operate to Dubai Municipality food-safety standards. If you need gelatine-free sweets or have specific requirements, tell us when planning and we will build the table accordingly." },
  { q: "Can you do a dessert table for a small gathering as well as a large event?", a: "Absolutely. We scale dessert tables from intimate gatherings of a handful of guests to large weddings and corporate functions with hundreds of people. The mix, quantity, and styling are tailored to your headcount, so a compact sweet table for a baby shower and a grand wedding display each feel complete and considered." },
  { q: "Is a wedding cake included, or is that separate from the dessert table?", a: "The dessert table can include a bespoke centrepiece cake as part of the display, or we can create a separate tiered wedding cake alongside a full sweet table, whichever suits your celebration. For weddings, many couples pair a showpiece cake with mini patisserie for guests, and we style both together as one cohesive feature. See our [wedding catering in Dubai](/wedding-catering-dubai) for the full picture." },
  { q: "Do you offer a tasting before I confirm the dessert table?", a: "For weddings and larger celebrations, tastings can usually be arranged so you can try flavours and finalise your cake and dessert selection before the event. Let us know your date and preferences early, and we will build tasting into the planning timeline where it makes sense." },
  { q: "Can you add branded or logo desserts for corporate events?", a: "Yes. We create branded cakes, logo cookies, and custom-coloured sweets that carry your company logo and brand palette, ideal for product launches, conferences, and staff celebrations. Our chefs recreate logos with edible detailing so your dessert table doubles as a brand moment. Explore our [corporate catering](/corporate) options for the wider event." },
  { q: "Can you match a specific theme or party colour scheme for kids and birthdays?", a: "Yes. From superhero and princess birthdays to pastel baby showers and elegant milestone parties, we design the cake, sweets, and styling around your chosen theme and colour palette. Tell us the guest of honour and the look you want, and we tailor the flavours, decoration, and display to suit." },
  { q: "Do you provide the stands, cake plinths, and styling props?", a: "Yes. Every dessert table comes with tiered stands, cake plinths, glassware, and themed styling props, all arranged on-site by our team. We treat the display as a designed installation, so you do not need to source or return any of the props yourself." },
  { q: "Do you deliver and set up the dessert table at my villa or venue?", a: "Yes. Our team delivers, builds, and styles the dessert table on-site at your home, villa, or event venue anywhere across Dubai, including Palm Jumeirah, Downtown, and Dubai Marina. We coordinate timing with your venue so the table is ready and pristine before your guests arrive." },
  { q: "How long does the dessert table need for set-up on the day?", a: "Our team typically arrives ahead of your guests to build and style the table, with the exact window depending on the size and complexity of the display. When you book, we confirm an arrival time that fits your run sheet, so everything is photographed and perfect before the celebration begins." },
  { q: "Can I add a live dessert or coffee station to the table?", a: "Yes. We can pair your dessert table with live finishes and a barista-style [coffee and tea service](/catering-dubai), which works beautifully to close corporate events and private dinners. Live stations add interaction and a warm final touch alongside the styled sweets." },
  { q: "What's the difference between a dessert table and a grazing table?", a: "A dessert table focuses entirely on sweets, a centrepiece cake, patisserie, and bite-sized treats styled into a display, while a [grazing table](/grazing-table-dubai) leans savoury with cheeses, charcuterie, fruit, and dips. Many hosts book both, or a combined sweet-and-savoury spread, and we style either to match your event." },
  { q: "Can a dessert table be part of full-service catering for my event?", a: "Yes. Our dessert tables slot seamlessly into full-service catering, so you can have canapés, a plated or buffet meal, and a styled sweet finish all handled by one team. Booking everything together keeps the styling cohesive and the logistics simple. See how it fits within our wider [catering in Dubai](/catering-dubai)." },
  {
    q: 'What goes into the dessert table catering Dubai price?',
    a: 'There is no published per-person floor for the table alone. Guest count, cake, patisserie and staffing move the figure. Send the date, headcount and venue for an itemised proposal with 5% VAT on its own line.',
  },
  {
    q: 'What is included in dessert table catering packages Dubai?',
    a: 'Dessert table catering packages Dubai starts from a set format that we adjust to your event rather than selling a fixed box: menu length, service style, staff and equipment are chosen for the day. Ask for the format closest to what you are planning and we shape it from there.',
  },
]

const relatedServices = [
  {
    title: 'Wedding catering',
    description: 'The meal, the team and the clear-down. A sweet table is an add-on, not the wedding.',
    image: '/service-events.webp',
    link: '/wedding-catering-dubai',
  },
  {
    title: 'Birthday catering',
    description: 'The rest of a birthday night. Cake can sit on this table or on that menu.',
    image: '/menu-dessert.webp',
    link: '/birthday-catering-dubai',
  },
  {
    title: 'Baby shower catering',
    description: 'Food for a shorter sitting. Sweets are optional and labelled.',
    image: '/menu-canapes.webp',
    link: '/baby-shower-catering-dubai',
  },
  {
    title: 'Dessert cart',
    description: 'Gelato or crepes as a live station, not a second dessert-table URL.',
    image: '/images/dessert-table-catering-dubai-hero.webp',
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
  name: 'Dessert Table Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Dessert Table Catering Dubai', item: 'https://www.mychef.ae/dessert-table-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'd like a Dessert Table quote in Dubai. Date: __ Guests: __ Area: __"
export default function DessertTableCatering() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.des-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.des-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.des-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.des-fmt-card', {
      scrollTrigger: { trigger: '.des-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.des-uc-item', {
      scrollTrigger: { trigger: '.des-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.des-inc-item', {
      scrollTrigger: { trigger: '.des-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.des-gallery-img', {
      scrollTrigger: { trigger: '.des-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.des-faq-item', {
      scrollTrigger: { trigger: '.des-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.des-loc-item', {
      scrollTrigger: { trigger: '.des-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.des-rel-card', {
      scrollTrigger: { trigger: '.des-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.des-cta', {
      scrollTrigger: { trigger: '.des-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Dessert Table Catering Dubai | myCHEF"
        description="Dessert table catering Dubai: cake, patisserie and a styled sweet table, built on site and packed down. Quoted with the rest of the catering, not as a shop price."
        canonicalPath="/dessert-table-catering-dubai"
        ogImage="/menu-dessert.webp"
        hideSiteName
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/dessert-table-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 des-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Dessert Table Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 des-hero-h1">
            Dessert Table Catering Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 des-hero-sub">
            Dessert table catering Dubai is a cake, counted patisserie and a table we build at the venue, then pack down. Quoted as catering, not as a bakery counter.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary opacity-0 translate-y-4 des-hero-cta">Get a Dessert Table Quote</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 des-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <TrustSignalStrip />

      {/* ═══════════════ Section 2: Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <SectionLabel align="center">CAKE, PATISSERIE, A TABLE</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            What dessert table catering Dubai is
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Dessert table catering Dubai is a centrepiece cake, counted sweets and a display we build on site. There is no published per-person floor for the table alone. It is quoted with the rest of the catering, or as a defined add-on. <Link to="/chefs/matteo-pastry-chef" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Pastry chef Matteo Moretti</Link> leads pastry when the brief needs that kitchen.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            A <Link to="/wedding-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">wedding</Link> sweet table sits next to the meal, not instead of it. Birthdays, baby showers and a finish after dinner use the same method: guest count, heat, diets, pack-down. A gelato cart is a live station, not this page. See <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">catering in Dubai</Link> for the rest of the night.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">DESSERT FORMATS</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              How the table is built
            </h2>
          </div>

          <div className="des-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dessertFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="des-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
            <SectionLabel align="center" tone="dark">WHERE DESSERT TABLES SHINE</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              When a sweet table is enough
            </h2>
          </div>

          <div className="des-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="des-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What the dessert table quote lists
          </h2>

          <div className="des-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="des-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            Cake and patisserie in the room
          </h2>

          <div className="des-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="des-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Dessert Table Catering Dubai: the questions we get before a booking
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

          <div className="des-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {liveLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={locationPath(loc.slug)}
                className="des-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="des-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="des-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      <LocationStrip title="Dessert tables across Dubai" />

      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center des-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Send the occasion, the headcount and the cake brief
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Date, guest count and whether this is a table on its own or a finish after the meal. We typically reply within 15 minutes during business hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary">Get a Dessert Table Quote</Link>
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
