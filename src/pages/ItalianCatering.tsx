import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import {
  Wheat,
  Soup,
  Pizza,
  ChefHat,
  Salad,
  Cake,
  Check,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import LocationStrip from '../components/LocationStrip'
import FaqAccordion from '../components/FaqAccordion'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan Italian catering in Dubai (via mychef.ae/italian-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const menuHighlights = [
  {
    icon: Wheat,
    title: 'Handmade Pasta',
    description: 'Tagliatelle, ravioli, gnocchi, and silky tortelli made fresh by hand and finished in sauces from slow ragù to simple tomato and basil.',
    link: '/catering-dubai',
  },
  {
    icon: ChefHat,
    title: 'Live Pasta Station',
    description: 'A partner-chef-led station tossing pasta to order in a wheel of parmesan or a pan of fresh sauce — theatre, aroma, and a plate served warm to every guest.',
    link: '/live-cooking-stations-dubai',
  },
  {
    icon: Soup,
    title: 'Risotto',
    description: 'Creamy risotto cooked the proper way — saffron Milanese, wild mushroom, or seasonal vegetable — stirred to order for that signature texture.',
    link: '/live-cooking-stations-dubai',
  },
  {
    icon: Salad,
    title: 'Antipasti',
    description: 'Cured meats, marinated vegetables, buffalo mozzarella, bruschetta, and olives — an abundant Italian opening spread to share.',
    link: '/grazing-table-dubai',
  },
  {
    icon: Pizza,
    title: 'Wood-Fired Pizza',
    description: 'Thin, blistered Neapolitan-style pizzas baked to order at a live oven, from classic margherita to seasonal specials.',
    link: '/live-cooking-stations-dubai',
  },
  {
    icon: Cake,
    title: 'Dolci & Tiramisu',
    description: 'Tiramisu, panna cotta, cannoli, and affogato — classic Italian desserts and an espresso bar to close the meal.',
    link: '/dessert-table-catering-dubai',
  },
]

const useCases = [
  {
    title: 'Weddings & Receptions',
    description: 'Italian menus bring romance and warmth to weddings — antipasti to welcome, a live pasta or risotto station as a talking point, and a tiramisu and espresso finish that guests remember long after the night.',
  },
  {
    title: 'Villa Dinners & Family Days',
    description: 'For relaxed villa gatherings across Dubai, sharing-style antipasti, pasta, and wood-fired pizza turn a meal into a long, generous afternoon where everyone serves themselves and lingers at the table.',
  },
  {
    title: 'Corporate & Networking',
    description: 'A live pasta station is a natural icebreaker at corporate lunches and networking receptions, serving fresh, warm plates while keeping guests mingling and conversation flowing.',
  },
  {
    title: 'Intimate Plated Dinners',
    description: 'For refined celebrations, a private chef can serve a multi-course Italian dinner — antipasto, primo, secondo, and dolce — plated with restaurant-level care in your own home.',
  },
]

const includedItems = [
  { title: 'Handmade Pasta', description: 'Fresh pasta made by hand and paired with sauces cooked from scratch.' },
  { title: 'Live Pasta & Risotto', description: 'partner-chef-led stations tossing pasta and stirring risotto to order.' },
  { title: 'Antipasti Spread', description: 'Cured meats, cheeses, marinated vegetables, and bruschetta to open the meal.' },
  { title: 'Wood-Fired Pizza', description: 'Neapolitan-style pizzas baked to order at a live oven station.' },
  { title: 'Halal Sourcing', description: 'Halal meat and poultry as standard, sourced from trusted suppliers.' },
  { title: 'Vegetarian & Vegan', description: 'Plentiful plant-based pasta, risotto, and antipasti arranged on request.' },
  { title: 'Dolci & Espresso', description: 'Tiramisu, panna cotta, cannoli, and an espresso bar to close.' },
  { title: 'Full Setup & Service', description: 'Styling, waiters, on-site coordination, and full pack-down included.' },
]

const galleryImages = [
  { src: '/menu-appetizer.webp', alt: 'Italian antipasti spread catering in Dubai' },
  { src: '/menu-meat.webp', alt: 'Italian cured meats and main course catering' },
  { src: '/service-catering.webp', alt: 'Italian catering buffet setup in Dubai' },
  { src: '/menu-canapes.webp', alt: 'Italian canapé and finger food selection' },
  { src: '/service-events.webp', alt: 'Italian event catering with live station' },
  { src: '/menu-dessert.webp', alt: 'Italian dolci and tiramisu dessert display' },
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
    q: 'What does your Italian catering menu include?',
    a: 'Our Italian menus run from antipasti and handmade pasta to risotto, wood-fired pizza, and classic dolci such as tiramisu. We tailor the courses to your event, whether that is a sharing-style villa lunch or a multi-course plated dinner.',
  },
  {
    q: 'Can you set up a live pasta station?',
    a: 'Yes. A partner-chef-led live pasta station — tossing fresh pasta to order, sometimes in a wheel of parmesan — is one of our most popular options. We also offer live risotto and wood-fired pizza stations.',
  },
  {
    q: 'Is the meat halal?',
    a: 'Yes. Halal meat and poultry are standard across our Italian catering in Dubai, sourced from trusted suppliers. Halal is the baseline for our menus, and we are glad to confirm sourcing details when you plan.',
  },
  {
    q: 'Do you cater for vegetarian and vegan guests?',
    a: 'Absolutely. Italian cuisine offers wonderful plant-based options, so we build generous vegetarian and vegan pasta, risotto, and antipasti dishes alongside the rest of the menu for mixed groups.',
  },
  {
    q: 'Is the pasta really made by hand?',
    a: 'Yes. We make fresh pasta by hand and cook our sauces from scratch, from slow-simmered ragù to simple tomato and basil. The difference in texture and flavour is exactly why guests remember an Italian menu.',
  },
  {
    q: 'How far in advance should I book Italian catering?',
    a: 'For smaller gatherings, one to two weeks is ideal. For weddings and large functions with live stations, we recommend two to four weeks. During peak season from November to March, earlier booking is strongly advised.',
  },
  { q: "How much does Italian catering in Dubai cost per person?", a: "Italian catering in Dubai is priced by custom quote, because your total depends on guest count, menu, and whether you add live stations or serving staff. We build the menu around your budget rather than a fixed per-head figure, and every proposal is itemised with 5% VAT shown clearly. Share your headcount and date and we usually reply with a tailored quote within about 15 minutes during business hours." },
  { q: "What is included in the price of your Italian catering?", a: "Every booking includes menu design, ingredient sourcing and shopping, on-site cooking, plating and serving, and full cleanup afterwards, so you are not left with pans to scrub or a kitchen to reset. Serving staff can be added when you want table service or a larger buffet run smoothly. You can see how the full package works on our [how it works](/how-it-works) page." },
  { q: "Are you a real Italian catering company or a booking platform?", a: "We are a full-service private chef and catering company that handles your Italian event end to end — we design the menu, source the ingredients, cook on site, serve, and clean up ourselves. There is no middleman and no marketplace; you deal with one team from first message to final plate. Our Italian menus are developed and led by [Chef Marco, our Italian chef](/chefs/marco-italian-chef)." },
  { q: "Is your Italian food prepared to Dubai food-safety standards?", a: "Yes. Our chefs and kitchens operate to Dubai Municipality food-safety standards, and we handle sourcing, temperature control, and on-site preparation to those requirements. Halal meat and poultry are sourced by default, and we are happy to confirm supplier details for any dish when you plan your event." },
  { q: "What is the minimum number of guests for Italian catering?", a: "We cater Italian menus for intimate dinners of just a few people right up to weddings and corporate functions for hundreds, so there is no rigid minimum that rules out a small gathering. For very small groups a private chef plated dinner often suits best, while larger numbers work beautifully with buffets and live stations. Tell us your guest count on our [contact](/contact) page and we will recommend the right format." },
  { q: "Do you provide waiters and serving staff for Italian events?", a: "Yes, professional serving staff are available as an optional add-on for buffets, live-station events, and plated dinners where you want guests looked after throughout. For a relaxed sharing-style villa lunch you may prefer just the chef, while a wedding or corporate reception usually runs more smoothly with waiters. We will suggest the right staffing level for your occasion in the proposal." },
  { q: "Can you make gluten-free, dairy-free, or allergy-friendly Italian dishes?", a: "Absolutely. We prepare gluten-free pasta, dairy-free sauces, and allergy-conscious antipasti and dolci so guests with dietary needs are looked after alongside everyone else. Let us know the specific allergies and requirements when you book and our chefs will adjust recipes and manage cross-contact carefully during on-site preparation." },
  { q: "Can you set up a wood-fired pizza oven at my villa or venue?", a: "Yes. We bring a live wood-fired pizza setup to villas, gardens, rooftops, and event venues across Dubai, baking Neapolitan-style pizzas to order for your guests. We just need a suitable outdoor or well-ventilated area for the oven, and our team handles delivery, setup, cooking, and full pack-down. See more interactive options on our [live cooking stations](/live-cooking-stations-dubai) page." },
  { q: "Can you serve Italian catering on a yacht or at an outdoor venue?", a: "Yes, our chefs cater Italian menus on yachts, at beaches, in the desert, and at outdoor venues throughout Dubai, adapting the menu and equipment to the space available. Antipasti spreads, cold pasta salads, and finishing dishes on site all travel well for these settings. Explore our [yacht catering](/yachts) options if you are planning an event on the water." },
  { q: "How far in advance do you need my final guest count and menu?", a: "We ask for a confirmed guest count and final menu roughly a week before smaller events and two to three weeks ahead for weddings and large functions with live stations, so sourcing and staffing are locked in. Minor number changes can often be accommodated closer to the date. During peak season from November to March, confirming early is the safest way to secure your date." },
  { q: "Do you cater Italian menus for corporate lunches and office events?", a: "Yes, we cater Italian menus for corporate lunches, networking receptions, and office celebrations, where a live pasta station is a natural icebreaker that keeps guests mingling. We handle everything from a relaxed buffet to a plated business dinner, with setup and cleanup included. See our wider [corporate catering](/corporate) options for team events of any size." },
  { q: "Will there be enough food, and what happens to leftovers?", a: "We plan generous portions so no guest leaves hungry, calculating quantities to your headcount, event length, and menu style. Italian sharing food is abundant by nature, and any leftovers from a buffet are yours to keep. We would rather your table feels full and welcoming than tightly rationed." },
  { q: "Should I choose a buffet, a live station, or a plated Italian dinner?", a: "Buffets and live pasta or pizza stations suit larger, relaxed gatherings where guests mingle and serve themselves, while a plated multi-course dinner fits formal weddings and refined celebrations. Italian food works well in every format because it holds its quality beautifully. Tell us your guest count and the mood you want, and we will recommend the format that fits best." },
  { q: "How is your Italian catering different from ordering from a restaurant?", a: "Unlike a restaurant delivery, our chefs cook fresh on site at your venue, so pasta is made by hand and served warm rather than arriving in boxes. You get menu design, sourcing, live cooking, serving, and full cleanup as one seamless service in your own space. It is the authenticity of an Italian kitchen brought to your event, tailored entirely to your guests." },
]

const relatedServices = [
  {
    title: 'Luxury Catering Dubai',
    description: 'fully-coordinated catering across Dubai with bespoke menus for any occasion.',
    image: '/service-catering.webp',
    link: '/catering-dubai',
  },
  {
    title: 'Live Cooking Stations',
    description: 'Interactive chef stations that bring theatre and fresh-cooked plates to your event.',
    image: '/service-events.webp',
    link: '/live-cooking-stations-dubai',
  },
  {
    title: 'Luxury Dining Experiences',
    description: 'Multi-course plated dining with restaurant-level care in your own home or villa.',
    image: '/service-luxury-dining.webp',
    link: '/luxury-dining-experiences',
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
  name: 'Italian Catering Dubai',
  serviceType: 'Catering Service',
  provider: {
    '@type': 'Organization',
    name: 'myCHEF Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Italian Catering Dubai', item: 'https://www.mychef.ae/italian-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'd like a Italian quote in Dubai. Date: __ Guests: __ Area: __"
export default function ItalianCatering() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.ital-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.ital-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.ital-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.ital-fmt-card', {
      scrollTrigger: { trigger: '.ital-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.ital-uc-item', {
      scrollTrigger: { trigger: '.ital-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.ital-inc-item', {
      scrollTrigger: { trigger: '.ital-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.ital-gallery-img', {
      scrollTrigger: { trigger: '.ital-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.ital-faq-item', {
      scrollTrigger: { trigger: '.ital-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.ital-loc-item', {
      scrollTrigger: { trigger: '.ital-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.ital-rel-card', {
      scrollTrigger: { trigger: '.ital-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.ital-cta', {
      scrollTrigger: { trigger: '.ital-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Italian Catering Dubai | Live Pasta, Pizza & Risotto"
        description="Italian catering Dubai for weddings, villa dinners & corporate events. Handmade pasta, risotto, antipasti, live pasta & pizza stations. Quote in ~15 mins."
        canonicalPath="/italian-catering-dubai"
        ogImage="/menu-appetizer.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/italian-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 ital-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Italian Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 ital-hero-h1">
            Italian Catering Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 ital-hero-sub">
            Handmade pasta, creamy risotto, abundant antipasti, and live pasta and pizza stations — the warmth and romance of an Italian kitchen brought to weddings, villas, and events across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=italian-catering-dubai" className="btn-primary opacity-0 translate-y-4 ital-hero-cta">Get My Italian Catering Quote</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 ital-hero-cta"
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
          <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
            AUTHENTIC ITALIAN CATERING IN DUBAI
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Made by Hand, Served with Warmth
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Italian food is the cuisine of generosity and craft — a few good ingredients, treated with patience, turned into something that brings people to the table and keeps them there. Pasta rolled and cut by hand, risotto stirred to that perfect creamy texture, antipasti laid out to share, and dolci to finish slowly over espresso. At myCHEF Dubai, your chef prepares in that tradition, making pasta fresh and simmering sauces from scratch rather than reaching for shortcuts.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            From antipasti and handmade pasta to wood-fired pizza, live risotto stations, and a tiramisu-and-espresso finish, our Italian menus are developed by <Link to="/chefs/marco-italian-chef" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Chef Marco, our Italian chef</Link>, and suit weddings, villa dinners, corporate receptions, and intimate plated occasions alike. Halal sourcing is the baseline, vegetarian and vegan dishes are plentiful, and a partner-chef-led <Link to="/live-cooking-stations-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">live cooking station</Link> can become the centrepiece of your event — explore how it fits within our wider <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Menu Highlights ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              MENU HIGHLIGHTS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              From Antipasti to Dolci
            </h2>
          </div>

          <div className="ital-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuHighlights.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="ital-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              WHO your chef prepares FOR
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Italian Catering for Every Occasion
            </h2>
          </div>

          <div className="ital-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="ital-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our Italian Catering Includes
          </h2>

          <div className="ital-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="ital-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of Our Italian Catering
          </h2>

          <div className="ital-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="ital-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Italian Catering Questions
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

          <div className="ital-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="ital-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="ital-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="ital-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      <LocationStrip title="Italian catering across Dubai" />

      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center ital-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Plan Your Italian Feast
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your celebration and we'll design an Italian menu — with live stations if you like — that suits your guests, dietary needs, and the scale of your occasion.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=italian-catering-dubai" className="btn-primary">Get My Italian Catering Quote</Link>
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
