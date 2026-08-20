import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { UtensilsCrossed, PartyPopper, Heart, Building, Ship, Home, Cake, Check, Phone, ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import TrustSignalStrip from '../components/TrustSignalStrip'
import StarterPackagesSection from '@/sections/StarterPackagesSection'
import FaqAccordion from '../components/FaqAccordion'
import { plainFaqAnswer } from '../utils/schema'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to request a catering quote (via mychef.ae/catering-dubai)')
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

const galleryImages = [
  { src: '/service-catering.webp', alt: 'Elegant catering setup' },
  { src: '/service-events.webp', alt: 'Luxury event catering' },
  { src: '/service-corporate.webp', alt: 'Corporate catering' },
  { src: '/service-villa.webp', alt: 'Villa celebration catering' },
  { src: '/menu-canapes.webp', alt: 'Canapes and cocktail service' },
  { src: '/service-luxury-dining.webp', alt: 'Luxury dining catering' },
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
    q: 'What is the minimum number of guests?',
    a: 'We coordinate catering for events from 10 guests upward. For very small gatherings, a private chef experience may be more suitable.',
  },
  {
    q: 'Do you provide tableware and linens?',
    a: 'Yes. We can arrange full tableware, glassware, linens, and decor as part of your catering package. Let us know your requirements.',
  },
  {
    q: 'Can you cater outdoor events?',
    a: 'Absolutely. We regularly coordinate catering for villa garden parties, beach events, yacht gatherings, and poolside celebrations across Dubai.',
  },
  {
    q: 'How is the food served at large events?',
    a: 'We offer plated service, buffet stations, family-style dining, and canape/cocktail service. We recommend the best format based on your event.',
  },
  {
    q: 'Do you handle setup and cleanup?',
    a: 'Yes. Full setup, service, and cleanup are included in every catering package. You do not need to worry about a thing.',
  },
  {
    q: 'How far in advance should I book catering?',
    a: 'For events under 50 guests, 1 week is recommended. For larger events, 2\u20134 weeks. Peak season (November\u2013March) requires earlier booking.',
  },
  { q: "How much does event catering cost per person in Dubai?", a: "Event catering in Dubai typically ranges from around AED 100 to AED 500 per person, depending on menu, service style, and guest count, and myCHEF works to a custom quote rather than a fixed price list. Live cooking stations and plated fine dining sit at the higher end, while buffets are more economical, and every quote includes menu design, sourcing, cooking, service, and cleanup. Share your date, headcount, and vibe and we usually reply within 15 minutes during business hours with a tailored figure — see indicative starting points on our [private chef prices](/private-chef-prices-dubai) page." },
  { q: "Why don't you list fixed catering prices online?", a: "We quote every event individually because catering cost in Dubai depends on guest count, menu complexity, service style, staffing, and venue rather than a one-size-fits-all rate. A 20-guest canapé reception and a 200-guest plated gala have completely different logistics, so a custom quote is more accurate and usually better value than a generic package price. Tell us the details and you'll get a transparent, itemised quote — no obligation." },
  { q: "Is there a deposit to confirm a catering booking, and what is your payment structure?", a: "Yes, a deposit secures your date and chef, with the balance settled before or on the event day, and 5% VAT applies to the total. Exact terms are confirmed in writing with your quote so there are no surprises, and you'll receive a proper invoice and confirmation for every payment. This keeps the booking transparent and protects both sides." },
  { q: "Are the chefs and kitchens licensed and food-safety compliant?", a: "Yes, myCHEF is a team of professional chefs and catering professionals who operate to Dubai Municipality food-safety standards. We only bring you chefs who meet hygiene and licensing requirements, so your event is handled by qualified, accountable professionals rather than unverified freelancers. You can rely on proper food handling from sourcing through to on-site service." },
  { q: "Is all the food halal?", a: "Yes, halal ingredients are sourced by default for every myCHEF catering menu in Dubai. Meat and poultry come from halal suppliers as standard, and we can accommodate mixed guest lists and specific requirements on request. If you have questions about a particular dish, just ask when we build your menu — or see our dedicated [halal catering](/halal-catering-dubai) options." },
  { q: "Do you provide waiters, bartenders, and serving staff?", a: "Yes, professional serving staff, hosts, and bartenders are optional add-ons we arrange based on your guest count and service style. Full-service formats like plated dinners and cocktail receptions usually need trained waiters, while a relaxed buffet may need fewer, and we'll recommend the right team size for your event. Staff handle service and clearing so you can enjoy your own party." },
  { q: "Can you handle guests with allergies, vegan, vegetarian, and gluten-free needs?", a: "Yes, your chef designs the menu around dietary requirements including vegan, vegetarian, gluten-free, dairy-free, and nut allergies. Just share the details when we plan your menu and we'll label dishes and adapt recipes so every guest is looked after safely. Mixed dietary crowds are routine for us — explore our [vegan catering](/vegan-catering-dubai) options for plant-based events." },
  { q: "Do you cater in villas, apartments, hotels, and outdoor venues across Dubai?", a: "Yes, we coordinate catering in private villas, apartments, rooftops, gardens, beaches, and yachts throughout Dubai, and we can work within many hotel and managed-venue policies. Some hotels and serviced buildings require external caterers to be pre-approved or hold specific documentation, so let us know your venue early and we'll handle the practicalities. We cover every major district — see our full [locations](/locations) list." },
  { q: "Can you do live cooking stations at my event?", a: "Yes, interactive live cooking stations are one of our most popular formats, with chefs preparing dishes fresh in front of your guests. They add theatre and a premium feel to weddings, corporate functions, and villa parties, and can be combined with buffets or canapés for variety. See how they work on our [live cooking stations](/live-cooking-stations-dubai) page." },
  { q: "Should I choose buffet, plated, or live-station service for my event?", a: "It depends on your guest count, formality, and space: buffets suit larger relaxed gatherings, plated service fits formal seated dinners and weddings, and live stations add interactive flair. We'll recommend the best format for your headcount and venue, and many clients combine styles for a dynamic experience. Our team maps the right service plan to your event during the menu consultation." },
  { q: "What happens if my guest count changes after I book?", a: "We build in flexibility and ask for a final confirmed headcount a few days before your event so the chef can source and portion accurately. Small changes are usually easy to absorb, while larger swings may adjust the quote, and we'll walk you through any impact clearly. Just keep us posted as your RSVPs firm up." },
  { q: "Can you cater a last-minute or short-notice event in Dubai?", a: "Often yes — depending on your date, guest count, and menu, we can arrange short-notice catering, though more lead time gives more menu and chef options. Peak season from November to March and holidays book up fast, so reach out as early as you can. Message us with your date and we'll tell you within about 15 minutes during business hours what's possible via [contact](/contact)." },
  { q: "How is myCHEF different from a traditional catering company?", a: "myCHEF is a curated network that brings you independent, vetted chefs rather than a single company reheating trays from a central kitchen. That means restaurant-quality food cooked or finished on-site, menus tailored to your event, and a single point of coordination for sourcing, service, and cleanup. You get chef-led quality with the convenience of full-service catering." },
  { q: "Can you also arrange a private chef instead of full event catering?", a: "Yes, for smaller or more intimate gatherings a private chef experience is often a better fit than large-format catering. A private chef cooks a bespoke multi-course meal in your kitchen with a personal touch, ideal for dinner parties and celebrations under around 20 guests. Learn more on our [private chef](/private-chef-dubai) page and we'll advise which option suits your event." },
  { q: "Do you offer menu tastings before a large event or wedding?", a: "Tastings can be arranged for larger events such as weddings so you can confirm dishes and presentation before the day. This is especially worthwhile for milestone celebrations where you want the menu exactly right, and we'll discuss availability and any cost when planning your event. It's one more way we make sure the food matches your expectations." },
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

export default function Catering() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    // Hero

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
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Luxury Catering Dubai | Buffet, BBQ & Plated | From AED 90pp"
        description="Luxury event catering in Dubai for weddings, corporate events & private parties. Bespoke menus, vetted chefs, halal-first. Request a tailored quote in 15 min."
        canonicalPath="/catering-dubai"
        ogImage="/service-catering.webp"
        schema={{ '@context': 'https://schema.org', '@graph': [schema, breadcrumbSchema, faqPageSchema] }}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <PageHero
        title="Luxury Catering Dubai for Events & Private Celebrations"
        subtitle="Premium event catering across Dubai. From intimate gatherings to grand celebrations — we reply within 15 minutes and coordinate every detail, from menu design to service staff and cleanup."
        image="/images/catering-dubai-hero.webp"
        imageAlt="Elegant catering setup in Dubai"
        cta={{ label: 'Get a Catering Quote', href: '/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=catering-dubai' }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Catering Dubai' }]}
        minHeight="tall"
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
            Tell us about your event and we handle everything from menu to service within 24 hours. From menu design and ingredient sourcing to service staff and cleanup, we coordinate every detail of your catering experience across Dubai's most prestigious districts, including{' '}
            <Link to="/locations/business-bay" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Business Bay catering</Link>
            {' '}and{' '}
            <Link to="/locations/difc" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">DIFC catering</Link>.
            Whether you are planning a corporate lunch, a private celebration, or a large gala, we design menus and service plans tailored to your venue and guests — from <Link to="/finger-food-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">finger food</Link> and <Link to="/cocktail-party-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">cocktail party catering</Link> to full banquets. For a faster starting point, explore our <Link to="/catering-packages-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Catering Packages Dubai</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 2: Catering Formats ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              WHAT CATERING OPTIONS ARE AVAILABLE?
            </span>
            <h2 className="font-playfair text-h2 text-black">
              What types of catering does myCHEF offer in Dubai?
            </h2>
          </div>

          <div className="cat-fmt-grid grid md:grid-cols-3 gap-6">
            {cateringFormats.map((fmt, i) => (
              <Link
                key={i}
                to={fmt.link}
                className="cat-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
              >
                <UtensilsCrossed size={36} className="text-gold mb-4" />
                <h3 className="font-playfair text-h3 text-white mb-3">{fmt.title}</h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed mb-4">
                  {fmt.description}
                </p>
                <span className="inline-flex items-center gap-1 font-inter text-body-sm uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
                  Learn More <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Catering by Dubai Location ═══════════════ */}
      <section className="bg-cream py-16">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              WHERE IN DUBAI DO YOU COORDINATE CATERING?
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Where can I book catering in Dubai?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link
              to="/locations/business-bay"
              className="group bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
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
              className="group bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
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
              className="group bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
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
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              WHAT EVENTS DO YOU COORDINATE CATERING FOR?
            </span>
            <h2 className="font-playfair text-h2 text-white">
              What events can myCHEF design catering for in Dubai?
            </h2>
          </div>

          <div className="cat-ev-grid grid md:grid-cols-2 gap-6">
            {eventTypes.map((ev, i) => {
              const Icon = ev.icon
              return (
                <div
                  key={i}
                  className="cat-ev-item flex gap-4 bg-charcoal p-6 opacity-0 translate-y-10"
                >
                  <Icon size={36} className="text-gold flex-shrink-0" />
                  <div>
                    <h3 className="font-playfair text-h3 text-white mb-2">{ev.title}</h3>
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

          <div className="cat-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="cat-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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

      <StarterPackagesSection
        campaign="catering-dubai"
        eyebrow="HOW MUCH DOES CATERING COST IN DUBAI?"
        title="How much does event catering cost in Dubai?"
        subtitle="Transparent starting prices for event catering in Dubai. Packages scale from intimate dinners to corporate events — final quote tailored to your event."
      />

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
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=catering-dubai" className="btn-primary">Get a Catering Quote</Link>
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
