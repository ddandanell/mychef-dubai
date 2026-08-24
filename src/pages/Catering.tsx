import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { ArrowRight, Building, Cake, Check, CookingPot, Flame, GlassWater, Grape, Hand, Heart, Home, PartyPopper, Phone, Sandwich, Ship, UtensilsCrossed, Wine } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import TrustSignalStrip from '../components/TrustSignalStrip'
import GuestCountSelector from '../components/GuestCountSelector'
import StarterPackagesSection from '@/sections/StarterPackagesSection'
import FaqAccordion from '../components/FaqAccordion'
import LocationStrip from '../components/LocationStrip'
import { plainFaqAnswer } from '../utils/schema'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { deferNonCritical } from '../lib/deferNonCritical'
import { SectionLabel } from '../components/system'


const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent("Hi myCHEF Dubai, I'd like a catering quote for an event. Date: __, Guests: __, Venue: __, Preferred format: __ (via mychef.ae/catering-dubai)")
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const cateringFormats = [
  {
    title: 'BBQ Catering',
    description: 'Premium outdoor BBQ with chef-led grilling stations. Perfect for villa parties and casual celebrations.',
    link: '/bbq-catering-dubai',
  },
  {
    title: 'Buffet Catering',
    description: 'Beautifully presented buffet stations with hot and cold options. Ideal for larger gatherings and corporate events.',
    link: '/buffet-catering-dubai',
  },
  {
    title: 'Canapé Catering',
    description: 'Sophisticated passed canapés and finger food for cocktail receptions, openings, and networking events.',
    link: '/canape-catering-dubai',
  },
  {
    title: 'Finger Food Catering',
    description: 'Bite-sized delights perfect for mingling, from arancini to sliders and artisan skewers.',
    link: '/finger-food-catering-dubai',
  },
  {
    title: 'Grazing Tables',
    description: 'Artisan grazing spreads of cheeses, charcuterie, and seasonal produce — a striking centrepiece for any gathering.',
    link: '/grazing-table-dubai',
  },
  {
    title: 'Live Cooking Stations',
    description: 'Interactive chef stations that bring theatre to your event, with dishes freshly prepared by your chef in front of your guests.',
    link: '/live-cooking-stations-dubai',
  },
  {
    title: 'Cocktail Party Catering',
    description: 'Elegant cocktail receptions with premium canapés, stylish bar service, and seamless hospitality.',
    link: '/cocktail-party-catering-dubai',
  },
  {
    title: 'Mocktail Bar Catering',
    description: 'Creative alcohol-free bars and refreshing mocktails crafted by the mixologists we bring in for any celebration.',
    link: '/mocktail-bar-catering-dubai',
  },
  {
    title: 'Dessert Tables',
    description: 'Patisserie, cakes, and sweet tables styled to your theme — the perfect finish to weddings and celebrations.',
    link: '/dessert-table-catering-dubai',
  },
]

const eventTypes = [
  {
    icon: PartyPopper,
    title: 'Birthday Parties',
    description: 'From intimate family dinners to milestone celebrations. Custom cakes, themed menus, and full coordination.',
  },
  {
    icon: Heart,
    title: 'Wedding Catering',
    description: 'Elegant wedding receptions, rehearsal dinners, and post-wedding brunches. Bespoke menus for your special day.',
  },
  {
    icon: Building,
    title: 'Corporate Events',
    description: 'Boardroom lunches, product launches, client entertaining, and team events. Professional and impressive.',
  },
  {
    icon: Ship,
    title: 'Yacht Parties',
    description: 'Catering for yacht events in Dubai Marina and beyond. Canapes, BBQ, and plated service on the water.',
  },
  {
    icon: Home,
    title: 'Villa Celebrations',
    description: 'Fully-run villa events across Dubai. Setup, service, and cleanup \u2014 all arranged.',
  },
  {
    icon: Cake,
    title: 'Kids Parties',
    description: 'Fun, delicious menus designed for younger guests. Interactive food stations and kid-friendly options.',
  },
]

const includedItems = [
  { title: 'Bespoke Menu Design', description: 'Custom menu designed with you for your event, dietary needs, and preferences.' },
  { title: 'Premium Ingredients', description: 'Fresh, high-quality ingredients sourced by your chef from trusted suppliers.' },
  { title: 'Professional Chefs', description: 'Experienced our chefs, carefully selected for your event.' },
  { title: 'Service Staff', description: 'Waiters, bartenders, and hosts arranged for your event size.' },
  { title: 'Table Setting & Decor', description: 'Elegant tableware, linens, and presentation styling.' },
  { title: 'Full Setup & Cleanup', description: 'Every detail arranged and overseen from arrival to departure.' },
  { title: 'On-Site Coordination', description: 'Event coordination to ensure flawless timing and service.' },
  { title: 'Flexible Service Style', description: 'Plated, buffet, family-style, or cocktail service \u2014 your choice.' },
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

const faqs = [
  {
    q: 'What is the minimum number of guests for catering?',
    a: "We coordinate catering from 10 guests upward. Under around 20 guests, a private chef is often the better fit: one chef cooks a multi-course meal in your own kitchen, which suits dinner parties and smaller celebrations. Tell us the headcount and we will say which option makes sense — see our [private chef](/private-chef-dubai) page for how that works.",
  },
  {
    q: 'How much does catering cost in Dubai?',
    a: "Event catering in Dubai usually lands between AED 100 and AED 500 per person, depending on menu, service style and guest count. Live cooking stations and plated fine dining sit at the top of that range; buffets cost less per head. For 20 guests, canapé receptions, grazing tables and seated dinners are priced differently, and most start from around AED 90–150 per person. For 50 guests, buffet or live-station formats are the usual choice and are cheaper per person, starting from around AED 90. We do not publish a fixed price list because the cost depends on guest count, menu complexity, cuisine, service style, staffing and venue — a 20-guest canapé reception and a 200-guest plated gala are different jobs, so a custom quote is more accurate and usually better value than a generic package price. Every quote is itemised, covers menu design, sourcing, cooking, service and cleanup, and carries no obligation. Send your date, headcount and menu ideas and we usually reply within 15 minutes during business hours. Indicative starting points are on our [private chef prices](/private-chef-prices-dubai) page.",
  },
  {
    q: 'What catering formats do you offer in Dubai?',
    a: "The main formats, each with its own page: [BBQ](/bbq-catering-dubai), [buffet](/buffet-catering-dubai), [canapé](/canape-catering-dubai), [finger food](/finger-food-catering-dubai), [grazing tables](/grazing-table-dubai), [live cooking stations](/live-cooking-stations-dubai), [cocktail party catering](/cocktail-party-catering-dubai), [mocktail bars](/mocktail-bar-catering-dubai) and [dessert tables](/dessert-table-catering-dubai). Tell us the guest count, venue and mood of the event and we will recommend the format that fits.",
  },
  {
    q: 'Should I choose buffet, plated, or live-station service?',
    a: "It comes down to guest count, formality and space. Buffet stations suit larger, relaxed gatherings. Plated service fits formal seated dinners and weddings. Family-style dining and canapé or cocktail service sit in between. Live stations put the chef in front of the guests. Many clients combine styles. We map the service plan to your headcount and venue during the menu consultation.",
  },
  {
    q: 'Can you do live cooking stations at my event?',
    a: "Yes. Live cooking stations are one of our most popular formats: chefs prepare dishes fresh in front of your guests. They work for weddings, corporate functions and villa parties, and can be combined with a buffet or canapés for variety. See how they work on our [live cooking stations](/live-cooking-stations-dubai) page.",
  },
  {
    q: 'Can you handle allergies, vegan, vegetarian and gluten-free guests?',
    a: "Yes. The chef designs the menu around the dietary requirements you give us — vegan, vegetarian, gluten-free, dairy-free and nut allergies included. Share the details when we plan the menu; dishes are labelled and recipes adapted so every guest can eat safely. Mixed dietary crowds are routine. For plant-based events, see our [vegan catering](/vegan-catering-dubai) page.",
  },
  {
    q: 'Is the food halal?',
    a: "Yes. Halal ingredients are sourced by default for every myCHEF catering menu in Dubai — meat and poultry come from halal suppliers as standard. We can also work with mixed guest lists and specific certification requirements: tell us when we build the menu, and ask about any particular dish you want to check. More detail on our [halal catering Dubai](/halal-catering-dubai) page.",
  },
  {
    q: 'Do you cater in villas, apartments, hotels, yachts and outdoor venues across Dubai?',
    a: "Yes. We coordinate catering in private villas, apartments, rooftops, gardens, on beaches, poolside and on yachts across Dubai — villa garden parties, beach events and yacht gatherings are regular bookings, including in [Palm Jumeirah](/locations/palm-jumeirah), [Dubai Marina](/locations/dubai-marina) and [Downtown Dubai](/locations/downtown-dubai). We can also work within many hotel and managed-venue policies. Some hotels and serviced buildings require external caterers to be pre-approved or to hold specific documentation, so tell us the venue early and we handle the practicalities. Every major district is covered — see the full [locations](/locations) list.",
  },
  {
    q: 'Can I book catering for a small office lunch in Dubai?',
    a: "Yes. We deliver [office catering](/office-catering-dubai) and [business lunch catering](/business-lunch-catering-dubai) across Dubai's business districts, including [Business Bay](/locations/business-bay) and [DIFC](/locations/difc). Menus can be individually boxed, buffet-style or plated.",
  },
  {
    q: 'Do you provide waiters, bartenders and serving staff?',
    a: "Yes. Serving staff, hosts and bartenders are optional add-ons, sized to your guest count and service style. Plated dinners and cocktail receptions usually need trained waiters; a relaxed buffet needs fewer. We recommend the team size for your event, and the staff handle service and clearing so you can stay with your guests.",
  },
  {
    q: 'Do you provide tableware and linens?',
    a: "Yes. Tableware, glassware, linens and decor can be arranged as part of your catering package. Tell us what the event needs when we plan it.",
  },
  {
    q: 'Do you handle setup and cleanup?',
    a: "Yes. Full setup, service and cleanup are included in every catering package. The team arrives, sets up, serves and clears away.",
  },
  {
    q: 'Are the chefs and kitchens licensed and food-safety compliant?',
    a: "Yes. The chefs and catering partners we bring you are independent, licensed professionals who work to Dubai Municipality food-safety standards. We only send chefs who meet the hygiene and licensing requirements, so your event is handled by qualified, accountable professionals rather than unverified freelancers — with proper food handling from sourcing through to on-site service.",
  },
  {
    q: 'How far in advance should I book catering, and can you do short notice?',
    a: "For events under 50 guests, book 1 week ahead. For larger events, 2–4 weeks. Peak season (November–March) and holidays book up fast, so reach out earlier. Short notice is often possible — it depends on the date, guest count and menu, and more lead time means more chef and menu options. Message us with your date via [contact](/contact) and we usually tell you within about 15 minutes during business hours what is possible.",
  },
  {
    q: 'What happens if my guest count changes after I book?',
    a: "We ask for a final confirmed headcount a few days before the event so the chef can source and portion accurately. Small changes are usually easy to absorb. Larger swings may change the quote, and we walk you through the impact clearly. Keep us posted as RSVPs firm up.",
  },
  {
    q: 'Is there a deposit, and how does payment work?',
    a: "Yes. A deposit secures your date and chef; the balance is settled before or on the event day, and 5% VAT applies to the total. Exact terms are confirmed in writing with your quote, and you receive an invoice and confirmation for every payment. That keeps the booking clear and protects both sides.",
  },
  {
    q: 'Do you offer menu tastings before a large event or wedding?',
    a: "Tastings can be arranged for larger events such as weddings, so you confirm dishes and presentation before the day. They are most worthwhile for milestone celebrations where the menu has to be exactly right. Availability and any cost are agreed when we plan the event.",
  },
  {
    q: 'How is myCHEF different from a traditional catering company?',
    a: "A traditional caterer is one company reheating trays from a central kitchen. myCHEF is a curated network: we bring you independent, vetted chefs who cook or finish restaurant-quality food on-site, build the menu around your event, and give you a single point of coordination for sourcing, service and cleanup. Chef-led food with the convenience of full-service catering.",
  },
]

const relatedServices = [
  {
    title: 'Private Chef',
    description: 'Intimate dining with a dedicated chef in your home or villa.',
    image: '/service-private-chef.webp',
    link: '/private-chef-dubai',
  },
  {
    title: 'Events',
    description: 'Fully-coordinated event planning and catering for celebrations of any size.',
    image: '/service-events.webp',
    link: '/events',
  },
  {
    title: 'Corporate',
    description: 'Professional corporate dining, from boardroom lunches to large functions.',
    image: '/service-corporate.webp',
    link: '/corporate',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Luxury Catering Dubai',
  provider: {
    '@type': 'Organization',
    name: 'myCHEF Dubai',
    url: 'https://www.mychef.ae',
    telephone: '+971-55-174-4849',
    areaServed: 'Dubai, UAE',
    description: 'myCHEF Dubai designs and manages private dining and event experiences and connects clients with independent, licensed chefs and catering professionals. Culinary preparation is performed by those licensed third parties, whom the client engages.',
  },
  serviceType: 'Catering Service',
  areaServed: 'Dubai, UAE',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Catering Services',
    itemListElement: cateringFormats.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title },
    })),
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae' },
    { '@type': 'ListItem', position: 2, name: 'Catering Dubai', item: 'https://www.mychef.ae/catering-dubai' },
  ],
}

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: plainFaqAnswer(faq.a),
    },
  })),
}

/* ────────────────────── Component ────────────────────── */

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'd like a catering quote for an event. Date: __, Guests: __, Venue: __, Preferred format: __ (via mychef.ae/catering-dubai)"
export default function Catering() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    // Defer below-the-fold ScrollTrigger animations so they do not contend
    // with LCP/INP during the initial load.
    deferNonCritical(() => {
      // Catering format cards
      gsap.to('.cat-fmt-card', {
        scrollTrigger: { trigger: '.cat-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
        opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
      })

      // Event types
      gsap.to('.cat-ev-item', {
        scrollTrigger: { trigger: '.cat-ev-grid', start: 'top 85%', toggleActions: 'play none none none' },
        opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
      })

      // Included items
      gsap.to('.cat-inc-item', {
        scrollTrigger: { trigger: '.cat-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
        opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
      })

      // Gallery
      gsap.to('.cat-gallery-img', {
        scrollTrigger: { trigger: '.cat-gallery', start: 'top 85%', toggleActions: 'play none none none' },
        opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
      })

      // FAQ
      gsap.to('.cat-faq-item', {
        scrollTrigger: { trigger: '.cat-faq', start: 'top 85%', toggleActions: 'play none none none' },
        opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
      })

      // Locations
      gsap.to('.cat-loc-item', {
        scrollTrigger: { trigger: '.cat-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
        opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
      })

      // Related
      gsap.to('.cat-rel-card', {
        scrollTrigger: { trigger: '.cat-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
        opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
      })

      // CTA
      gsap.to('.cat-cta', {
        scrollTrigger: { trigger: '.cat-cta', start: 'top 85%', toggleActions: 'play none none none' },
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
      })
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Luxury Catering Dubai | Buffet, BBQ & Plated | From AED 90pp | myCHEF"
        description="Luxury event catering in Dubai for weddings, corporate events & private parties. Bespoke menus, vetted chefs, halal-first. Request a tailored quote."
        canonicalPath="/catering-dubai"
        ogImage="/service-catering.webp"
        hideSiteName
        preloadHero="/images/luxury-catering-dubai-hero.webp"
        schema={{ '@context': 'https://schema.org', '@graph': [schema, breadcrumbSchema, faqPageSchema] }}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <PageHero
        variant="quiet"
        eyebrow="Catering Dubai"
        title="Catering built around the event."
        subtitle="From private dinners to larger celebrations, we plan the food, chefs, service team and flow around the way you want the event to run."
        image="/images/catering-dubai-hero.webp"
        imageAlt="A private dinner about to begin on a Dubai villa terrace at night — a long marble table set with candles, one myCHEF chef plating under pendant lights, the city lights across the water"
        imageWidth={2560}
        imageHeight={1440}
        imagePosition="100% 50%"
        align="left"
        cta={{ label: 'Plan Your Event', href: '/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=catering-dubai' }}
        secondaryCta={{ label: 'WhatsApp Us', href: WHATSAPP_LINK, external: true }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Catering Dubai' }]}
        minHeight="full"
        overlay="dark"
      />
      <TrustSignalStrip />

      <StarterPackagesSection
        campaign="catering-dubai"
        eyebrow="START WITH A PACKAGE"
        title="Catering Packages in Dubai"
        subtitle="Ready-to-book starting points for Dubai's most popular catering and private chef experiences. Every package is customised to your guest count, menu, and venue — final quote tailored to your event."
      />

      {/* ═══════════════ Opening ═══════════════ */}
      <section className="bg-black py-14 border-b border-charcoal">
        <div className="container-custom max-w-3xl text-center">
          <p className="font-inter text-body text-gray-400 leading-relaxed">
            Tell us the occasion, date, venue and numbers — an itemised proposal comes back within 24 hours. We cater across{' '}
            <Link to="/locations/business-bay" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Business Bay</Link>,{' '}
            <Link to="/locations/difc" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">DIFC</Link>,{' '}
            <Link to="/locations/palm-jumeirah" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Palm Jumeirah</Link>,{' '}
            <Link to="/locations/downtown-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Downtown</Link> and{' '}
            <Link to="/locations/dubai-marina" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Dubai Marina</Link> — from{' '}
            <Link to="/finger-food-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">finger food</Link> and{' '}
            <Link to="/cocktail-party-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">cocktail parties</Link> to full banquets. Want a faster start? Begin from a{' '}
            <Link to="/catering-packages-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">catering package</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Guest Count Selector ═══════════════ */}
      <GuestCountSelector />

      {/* ═══════════════ Section 2: Catering Formats ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center">WHAT CATERING OPTIONS ARE AVAILABLE?</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              What types of catering does myCHEF offer in Dubai?
            </h2>
          </div>

          {/* Directory, not a card wall: one row per format, a concept icon that means something, hairline rhythm. */}
          <div className="cat-fmt-grid grid md:grid-cols-2 gap-x-12 border-t border-gray-200">
            {cateringFormats.map((fmt, i) => {
              const Icon =
                ({
                  'BBQ Catering': Flame,
                  'Buffet Catering': UtensilsCrossed,
                  'Canapé Catering': Sandwich,
                  'Finger Food Catering': Hand,
                  'Grazing Tables': Grape,
                  'Live Cooking Stations': CookingPot,
                  'Cocktail Party Catering': Wine,
                  'Mocktail Bar Catering': GlassWater,
                  'Dessert Tables': Cake,
                } as Record<string, typeof Flame>)[fmt.title] ?? UtensilsCrossed
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="cat-fmt-card group flex items-start gap-5 border-b border-gray-200 py-6 opacity-0 translate-y-12 transition-colors"
                >
                  <span className="mt-0.5 flex h-11 w-11 flex-shrink-0 items-center justify-center border border-gold/35 text-gold-ink transition-colors group-hover:bg-gold-ink group-hover:text-white">
                    <Icon size={20} strokeWidth={1.5} aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center justify-between gap-4">
                      <h3 className="font-playfair text-h4 text-black transition-colors group-hover:text-gold-ink">{fmt.title}</h3>
                      <ArrowRight size={16} className="flex-shrink-0 text-gold-ink opacity-0 -translate-x-1 transition-all group-hover:translate-x-0 group-hover:opacity-100" aria-hidden />
                    </span>
                    <p className="mt-1 font-inter text-body-sm text-gray-500 leading-relaxed">{fmt.description}</p>
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Catering by Dubai Location ═══════════════ */}
      <section className="bg-cream py-16">
        <div className="container-custom">
          <div className="text-center mb-10">
            <SectionLabel align="center">WHERE IN DUBAI DO YOU COORDINATE CATERING?</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              Where can I book catering in Dubai?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            <Link
              to="/locations/business-bay"
              className="group bg-white p-7 lg:p-8 transition-colors hover:bg-cream/60"
            >
              <h3 className="font-playfair text-h3 text-black mb-2">Business Bay</h3>
              <p className="font-inter text-body-sm text-gray-500 leading-relaxed mb-4">
                Premium catering for offices, events, and residences in Dubai's bustling business district.
              </p>
              <span className="inline-flex items-center gap-1 font-inter text-body-sm uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
                Explore <ArrowRight size={14} />
              </span>
            </Link>

            <Link
              to="/locations/difc"
              className="group bg-white p-7 lg:p-8 transition-colors hover:bg-cream/60"
            >
              <h3 className="font-playfair text-h3 text-black mb-2">DIFC</h3>
              <p className="font-inter text-body-sm text-gray-500 leading-relaxed mb-4">
                Sophisticated corporate and private dining tailored to the DIFC lifestyle.
              </p>
              <span className="inline-flex items-center gap-1 font-inter text-body-sm uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
                Explore <ArrowRight size={14} />
              </span>
            </Link>

            <Link
              to="/locations/dubai-marina"
              className="group bg-white p-7 lg:p-8 transition-colors hover:bg-cream/60"
            >
              <h3 className="font-playfair text-h3 text-black mb-2">Dubai Marina</h3>
              <p className="font-inter text-body-sm text-gray-500 leading-relaxed mb-4">
                Yacht, apartment, and terrace catering with stunning waterfront views.
              </p>
              <span className="inline-flex items-center gap-1 font-inter text-body-sm uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
                Explore <ArrowRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 3: Event Types ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">WHAT EVENTS DO YOU COORDINATE CATERING FOR?</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              What events can myCHEF design catering for in Dubai?
            </h2>
          </div>

          <div className="cat-ev-grid grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {eventTypes.map((ev, i) => {
              const Icon = ev.icon
              return (
                <div
                  key={i}
                  className="cat-ev-item flex gap-5 bg-black p-6 lg:p-7 opacity-0 translate-y-10"
                >
                  <span className="mt-0.5 flex h-11 w-11 flex-shrink-0 items-center justify-center border border-gold/35 text-gold">
                    <Icon size={20} strokeWidth={1.5} aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-playfair text-h4 text-white mb-1.5">{ev.title}</h3>
                    <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{ev.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 4: What's Included ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-h2 text-black text-center mb-12">
            What is included in myCHEF catering service?
          </h2>

          <div className="cat-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="cat-inc-item flex gap-3 opacity-0 -translate-x-5">
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

      {/* ═══════════════ Section 5: Gallery ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            What do myCHEF catering events look like?
          </h2>

          <div className="cat-gallery">
            <figure className="cat-gallery-img m-0 overflow-hidden opacity-0 scale-95">
              <img
                src="/images/catering-events-collage.webp"
                alt="myCHEF catering events across Dubai — a garden reception under string lights, a rooftop dinner against the skyline, a chef plating, a chandelier-lit long table, buffet and canapé service"
                width={3344}
                height={1882}
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 6: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            What should I know before booking catering in Dubai?
          </h2>

          <FaqAccordion items={faqs} showJumpNav />
        </div>
      </section>

      {/* ═══════════════ Section 7: Locations ═══════════════ */}
      <section className="bg-charcoal py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            Which areas in Dubai does myCHEF serve?
          </h2>

          <div className="cat-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="cat-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 8: Related Services ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h3 className="font-playfair text-h3 text-white text-center mb-10">
            What other services does myCHEF offer?
          </h3>

          <div className="cat-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="cat-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    width={640}
                    height={360}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy" decoding="async"/>
                </div>
                <div className="p-6">
                  <h4 className="font-playfair text-h4 text-white mb-2">{svc.title}</h4>
                  <p className="font-inter text-body-sm text-gray-400 mb-4">{svc.description}</p>
                  <span className="inline-flex items-center gap-1 font-inter text-body-sm uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
                    Explore <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing logic — the packages grid already appears once above; repeat the method, not the cards. */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,0.5fr)] lg:gap-16 items-start">
            <div>
              <SectionLabel>HOW MUCH DOES CATERING COST IN DUBAI?</SectionLabel>
              <h2 className="font-playfair text-h2 text-black mb-5">How much does event catering cost in Dubai?</h2>
              <p className="font-inter text-body text-gray-600 leading-relaxed mb-4">
                The format decides the number, not the occasion. Buffet and drop-off catering starts from AED 90 per person; when a chef cooks on site, from AED 700 per person. Guest count, menu and service staff move it from there.
              </p>
              <p className="font-inter text-body text-gray-600 leading-relaxed">
                Every quote is itemised in writing before you commit, with 5% VAT shown separately. For a fixed starting point, the packages above are priced per event.
              </p>
            </div>
            <dl className="grid gap-px bg-gray-200 border border-gray-200 sm:grid-cols-2 lg:mt-12">
              {[
                ['Buffet & drop-off', 'from AED 90 / person'],
                ['Chef cooking on site', 'from AED 700 / person'],
                ['Service staff', 'added by guest count'],
                ['Quote', 'itemised, in writing'],
              ].map(([k, v]) => (
                <div key={k} className="bg-white p-6">
                  <dt className="font-inter text-caption uppercase tracking-wider text-gray-400 mb-2">{k}</dt>
                  <dd className="font-playfair text-h4 text-black">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="mt-8">
            <Link to="/catering-packages-dubai" className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-wider text-gold-ink hover:text-gold">
              See all catering packages <ArrowRight size={14} />
            </Link>
          </p>
        </div>
      </section>

      {/* ═══════════════ Related Guides ═══════════════ */}
      <section className="bg-cream py-16">
        <div className="container-custom max-w-[800px] text-center">
          <h3 className="font-playfair text-h3 text-black mb-4">Where can I read more about Dubai catering?</h3>
          <p className="font-inter text-body text-gray-500 leading-relaxed">
            Planning an event in Dubai? Read our{' '}
            <Link to="/dubai-catering-prices-guide" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Dubai Catering Prices Guide</Link>,
            {' '}see our{' '}
            <Link to="/catering-packages-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Catering Packages Dubai</Link>
            {' '}overview, read{' '}
            <Link to="/how-to-choose-caterer-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">How to Choose a Caterer in Dubai</Link>,
            {' '}or compare{' '}
            <Link to="/buffet-vs-plated-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">buffet vs plated service in Dubai</Link>.
          </p>
        </div>
      </section>

      <LocationStrip
        title="Luxury catering across Dubai"
        subtitle={
          <>
            Available across Dubai including{' '}
            <Link to="/locations/palm-jumeirah" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Palm Jumeirah</Link>,{' '}
            <Link to="/locations/dubai-marina" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Dubai Marina</Link>{' '}
            and{' '}
            <Link to="/locations/downtown-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Downtown Dubai</Link>.
          </>
        }
      />

      {/* ═══════════════ Section 9: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center cat-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Ready to book catering for your Dubai event?
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            From concept to execution — we design and manage every detail of your catering experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=catering-dubai" className="btn-primary">Get My Catering Quote</Link>
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
