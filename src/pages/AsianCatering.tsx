// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /asian-catering-dubai
//     primary:     "asian catering dubai"
//     subkeywords: "asian catering dubai price" · "asian catering cost per person dubai" · "best asian catering dubai" · "asian catering packages dubai" · "asian catering menu dubai" · "halal asian catering dubai" · "pan asian catering dubai" · "chinese catering dubai" · "catering in dubai" · "bbq catering in dubai" · "best indian catering in dubai" · "birthday catering in dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { locationPath } from '@/data/locations'
import {
  Flame,
  Soup,
  Fish,
  ChefHat,
  Leaf,
  Utensils,
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
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan Asian catering in Dubai (via mychef.ae/asian-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const menuHighlights = [
  {
    icon: Flame,
    title: 'Live Wok Stations',
    description: 'A partner-chef-led wok station firing noodles, fried rice, and stir-fries to order — high heat, fresh ingredients, and a plate served sizzling to every guest.',
    link: '/live-cooking-stations-dubai',
  },
  {
    icon: ChefHat,
    title: 'Dim Sum',
    description: 'Steamed and pan-fried dumplings, bao buns, and siu mai, freshly prepared and served from bamboo baskets — a hands-on, shareable favourite.',
    link: '/live-cooking-stations-dubai',
  },
  {
    icon: Soup,
    title: 'Thai Specialities',
    description: 'Fragrant green and red curries, pad thai, and tom yum balancing the sweet, sour, salty, and spicy notes that define authentic Thai cooking.',
    link: '/catering-dubai',
  },
  {
    icon: Utensils,
    title: 'Chinese Classics',
    description: 'Cantonese roast meats, Szechuan stir-fries, sweet-and-sour dishes, and hand-pulled noodles drawn from China\'s great regional kitchens.',
    link: '/catering-dubai',
  },
  {
    icon: Fish,
    title: 'Sushi & Sashimi',
    description: 'Maki, nigiri, and sashimi rolled by hand at a live counter — the perfect pan-Asian complement, with vegetarian rolls for every guest.',
    link: '/sushi-catering-dubai',
  },
  {
    icon: Leaf,
    title: 'Pan-Asian Fusion',
    description: 'Vietnamese, Malaysian, and Korean accents — bao, satay, bulgogi, and fresh herb salads — blended into a vibrant, modern pan-Asian spread.',
    link: '/indian-catering-dubai',
  },
]

const useCases = [
  {
    title: 'Receptions & Cocktail Events',
    description: 'Dim sum, satay skewers, and bao buns make brilliant passed bites, while a live wok station keeps guests gathered and the energy high at receptions and networking evenings across Dubai.',
  },
  {
    title: 'Villa & Garden Gatherings',
    description: 'Pan-Asian sharing menus suit relaxed villa days perfectly — abundant stir-fries, curries, sushi platters, and noodles laid out for guests to graze on at their own pace.',
  },
  {
    title: 'Weddings & Large Celebrations',
    description: 'A pan-Asian spread brings colour, variety, and interactive stations to weddings and milestone events, balancing Thai, Chinese, Japanese, and fusion dishes to please every palate.',
  },
  {
    title: 'Corporate & Themed Nights',
    description: 'Live wok and dim sum stations turn a corporate lunch or themed evening into an experience, serving fresh, fast plates while keeping conversation and movement flowing.',
  },
]

const includedItems = [
  { title: 'Pan-Asian Menu Design', description: 'Thai, Chinese, Japanese, and fusion dishes balanced for your guests and occasion.' },
  { title: 'Live Wok & Dim Sum', description: 'partner-chef-led stations firing stir-fries and steaming fresh dumplings to order.' },
  { title: 'Sushi Counter', description: 'Hand-rolled maki, nigiri, and sashimi prepared live, with vegetarian rolls.' },
  { title: 'Spice-Level Tailoring', description: 'Heat adjusted across dishes so every guest is comfortable.' },
  { title: 'Halal Sourcing', description: 'Halal meat and poultry as standard, sourced from trusted suppliers.' },
  { title: 'Vegetarian & Vegan', description: 'Plentiful plant-based stir-fries, curries, and rolls arranged on request.' },
  { title: 'Professional Chefs', description: 'Experienced pan-Asian culinary team led by a partner chef.' },
  { title: 'Full Setup & Service', description: 'Styling, waiters, on-site coordination, and full pack-down included.' },
]

const galleryImages = [
  { src: '/menu-seafood.webp', alt: 'Asian seafood and sushi catering in Dubai' },
  { src: '/menu-appetizer.webp', alt: 'Asian dim sum and appetizer spread' },
  { src: '/service-events.webp', alt: 'Asian catering event with live wok station' },
  { src: '/menu-canapes.webp', alt: 'Asian canapé and bao bun selection' },
  { src: '/service-catering.webp', alt: 'Pan-Asian catering buffet setup in Dubai' },
  { src: '/menu-dessert.webp', alt: 'Asian dessert and mochi display' },
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
    q: 'What cuisines does your Asian catering cover?',
    a: 'Our pan-Asian menus span Thai, Chinese, Japanese, and fusion influences from Vietnam, Malaysia, and Korea. We can focus on one cuisine or blend several, balancing curries, stir-fries, dim sum, sushi, and noodles to suit your event.',
  },
  {
    q: 'Can you set up live wok and dim sum stations?',
    a: 'Yes. Partner-chef-led live wok stations fire noodles and stir-fries to order, while dim sum stations steam fresh dumplings and bao. These interactive stations are popular at receptions, weddings, and themed corporate nights.',
  },
  {
    q: 'Is the meat halal?',
    a: 'Yes. Halal meat and poultry are standard across our Asian catering in Dubai, sourced from trusted suppliers. Halal is the baseline for our menus, and we are glad to confirm sourcing details when you plan.',
  },
  {
    q: 'Can you adjust spice levels for mixed guests?',
    a: 'We tailor heat across dishes so spice-sensitive guests and those who love bold Thai and Szechuan flavour are both comfortable. We can also flag the heat level of each dish for your guests.',
  },
  {
    q: 'Do you offer sushi and vegetarian options?',
    a: 'Yes. We provide a live sushi counter with hand-rolled maki, nigiri, and sashimi, including vegetarian rolls. Asian cuisine is rich in plant-based dishes, so we build generous vegetarian and vegan menus on request.',
  },
  { q: "How much does Asian catering in Dubai cost per person?", a: "Asian catering in Dubai is priced by custom quote, because the cost depends on your menu, guest count, number of live stations, and level of service. Once you tell us your date, headcount, and whether you want wok, dim sum, or sushi stations, we build a transparent, itemised proposal — usually within 15 minutes during business hours. You can also browse our [catering packages](/catering-packages-dubai) to see how full-service pricing is structured." },
  { q: "What exactly is included when I book your Asian catering?", a: "Every booking includes menu design, ingredient sourcing and shopping, on-site cooking, plating and serving, and full cleanup afterwards — you are left with nothing to tidy. Live wok, dim sum, and sushi stations are handled by our own chefs, and serving staff can be added when you want a fully waited service. In short, we handle the whole Asian feast from planning to pack-down so you can enjoy your own event." },
  { q: "Is there a minimum number of guests for Asian catering?", a: "We cater Asian menus for intimate villa dinners of a handful of guests right up to large weddings and corporate functions of several hundred. Live stations like wok and dim sum work best with a slightly larger group so the theatre and flow feel right, but we scale the format to your numbers. Just share your guest count and we will recommend the best setup for the size of your gathering." },
  { q: "Do you cater authentic Asian cuisine or fusion?", a: "Both — we can deliver authentic regional cooking such as Cantonese roast meats, Szechuan stir-fries, and classic Thai curries, or a modern pan-Asian fusion spread blending Japanese, Korean, Vietnamese, and Malaysian accents. Our chefs tailor the balance to your taste, whether you want a traditional single-cuisine banquet or a vibrant mixed-continent menu. Tell us the mood you are after and we design the menu around it." },
  { q: "Are your kitchens and chefs food-safety certified?", a: "Yes. Our chefs and kitchens operate to Dubai Municipality food-safety standards, with careful temperature control and hygienic handling throughout cooking and service. This matters especially for raw items like sushi and sashimi, which we prepare fresh on site at a live counter rather than leaving to sit. You can read more about our approach on our [about page](/about)." },
  { q: "Will the sushi and stir-fries actually be fresh, not sitting out?", a: "Yes — this is the biggest advantage of our live-station approach: sushi is hand-rolled to order at the counter, and noodles and stir-fries are fired fresh in the wok as guests come up. Nothing is pre-cooked hours ahead and left to go soggy or dry out. Dishes reach your guests hot, crisp, and at their peak, which is exactly why interactive Asian catering is so popular." },
  { q: "Can you cater for guests with allergies and gluten-free needs?", a: "Yes. We routinely adapt Asian menus for gluten, nut, shellfish, and soy sensitivities, using tamari in place of wheat-based soy sauce and preparing allergy-safe dishes with separate handling where possible. Because Asian cooking uses shared ingredients like soy and sesame, we ask you to flag every allergy in advance so our chefs can plan safely. See our [allergy-safe catering](/allergy-safe-catering-dubai) approach for more detail." },
  { q: "Do you provide serving staff and waiters for the event?", a: "Serving staff are optional and can be added to any Asian catering booking — from station chefs and servers to a fully waited buffet or plated experience. For receptions and weddings we recommend service staff to pass dim sum, satay, and bao smoothly and keep stations flowing. For relaxed villa gatherings, a lighter setup often works just as well, and we will advise the right level for your event." },
  { q: "Do you need a full kitchen, or can you cook in a villa or venue?", a: "We bring our own equipment and set up live wok, dim sum, and sushi stations in villas, gardens, rooftops, and event venues without needing a full commercial kitchen. Our team assesses power, water, and space when planning so setup is smooth on the day. We regularly cater [villas and private residences](/villas-private-residences) as well as marquees, yachts, and corporate spaces across Dubai." },
  { q: "Can you set up on a yacht or outdoor venue?", a: "Yes. We cater Asian menus on yachts, beaches, desert setups, and open-air gardens, adapting our stations to the space, power, and access available. Compact wok and sushi setups work beautifully on a [yacht charter](/yachts), where interactive stations keep guests gathered on deck. Share your venue details and we will plan the logistics around it." },
  { q: "How much notice do you need to confirm a large Asian event?", a: "For large weddings and corporate functions with multiple live stations, two to four weeks lets us secure your date and refine the menu, while smaller gatherings can often be arranged in one to two weeks. During peak season from November to March, dates fill quickly, so earlier is always safer. If your event is soon, message us anyway — we will always try to make it work." },
  { q: "Can Asian catering suit both spice lovers and mild palates at one event?", a: "Absolutely — we prepare dishes across a range of heat levels so bold Szechuan and Thai fans and spice-sensitive guests are all comfortable at the same table. Our chefs can also serve chilli and sauces on the side and label the heat of each dish. This makes pan-Asian catering ideal for mixed corporate and family crowds where tastes vary widely." },
  { q: "How does your Asian catering compare to ordering from a restaurant?", a: "Unlike a restaurant takeaway that arrives packed and cooling, our chefs cook everything live at your venue, so food is fresh, hot, and served as an experience rather than delivered in boxes. You also get full menu design, setup, serving, and cleanup as one coordinated service. It is the difference between a delivery order and a genuine event — see how it works on our [how it works](/how-it-works) page." },
  { q: "Can you combine Asian food with other cuisines for a mixed menu?", a: "Yes. Many clients pair pan-Asian stations with Arabic, Mediterranean, or Indian dishes for a multi-cuisine spread that suits a diverse Dubai guest list. We design the full menu as one balanced experience so the flavours and formats complement each other rather than compete. Explore our wider range on the [cuisines](/cuisines-dubai) page and we will craft the right blend for your occasion." },
  { q: "Is VAT included in the price you quote?", a: "Our quotes are clear about pricing, and the standard 5% UAE VAT applies to catering services. When we send your itemised proposal, you will see exactly what is included so there are no surprises later. If anything about the quote is unclear, just ask and we will walk you through every line before you confirm." },
  { q: "Do you offer vegetarian and vegan Asian menus for the whole event?", a: "Yes — Asian cuisine is naturally rich in plant-based cooking, so we can build entirely vegetarian or vegan spreads with tofu stir-fries, vegetable dumplings, fresh spring rolls, and veggie sushi rolls. We can also run a fully plant-based station alongside your main menu for mixed groups. Tell us your numbers and we will make the vegetarian and vegan options generous, not an afterthought." },
  {
    q: 'Do you also do Chinese catering Dubai?',
    a: 'Yes. It is the same booking as Asian catering Dubai under another name: one team, your address, menu built for the occasion, and an itemised quote before you commit. People also search this as BBQ catering in Dubai and pan Asian catering Dubai — same team, same booking.',
  },
]

const relatedServices = [
  {
    title: 'Luxury Catering Dubai',
    description: 'fully-coordinated catering across Dubai with bespoke menus for any occasion.',
    image: '/service-catering.webp',
    link: '/catering-dubai',
  },
  {
    title: 'Sushi Catering',
    description: 'Hand-rolled sushi and sashimi platters prepared at a live counter for your event.',
    image: '/menu-seafood.webp',
    link: '/sushi-catering-dubai',
  },
  {
    title: 'Indian Catering',
    description: 'North & South Indian feasts with biryani, tandoor live stations, and veg options.',
    image: '/menu-appetizer.webp',
    link: '/indian-catering-dubai',
  },
  {
    title: 'Chinese New Year Catering',
    description: 'Lunar New Year menus, dim sum brunches, live wok stations and lucky reunion banquets.',
    image: '/images/asian-catering-dubai-hero.webp',
    link: '/asian-catering-dubai',
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
  name: 'Asian Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Asian Catering Dubai', item: 'https://www.mychef.ae/asian-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'd like a Asian quote in Dubai. Date: __ Guests: __ Area: __"
export default function AsianCatering() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.asia-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.asia-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.asia-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.asia-fmt-card', {
      scrollTrigger: { trigger: '.asia-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.asia-uc-item', {
      scrollTrigger: { trigger: '.asia-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.asia-inc-item', {
      scrollTrigger: { trigger: '.asia-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.asia-gallery-img', {
      scrollTrigger: { trigger: '.asia-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.asia-faq-item', {
      scrollTrigger: { trigger: '.asia-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.asia-loc-item', {
      scrollTrigger: { trigger: '.asia-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.asia-rel-card', {
      scrollTrigger: { trigger: '.asia-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.asia-cta', {
      scrollTrigger: { trigger: '.asia-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Asian Catering Dubai | Thai, Chinese, Sushi & Wok"
        description="Asian catering Dubai for weddings, villas & corporate events. Thai, Chinese & pan-Asian fusion with live wok, dim sum & sushi stations. Quote in ~15 mins."
        canonicalPath="/asian-catering-dubai"
        ogImage="/menu-seafood.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/asian-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 asia-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Asian Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 asia-hero-h1">
            Asian Catering Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 asia-hero-sub">
            Thai, Chinese, and pan-Asian fusion with live wok, dim sum, and sushi stations — vibrant, interactive menus brought to weddings, villas, and events across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary opacity-0 translate-y-4 asia-hero-cta">Get My Asian Catering Quote</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 asia-hero-cta"
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
          <SectionLabel align="center">VIBRANT ASIAN CATERING IN DUBAI</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            One Continent, Endless Flavour
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Asian cuisine is a world of contrasts — the sweet-sour-salty-spicy balance of a Thai curry, the high-heat char of a Cantonese wok, the precision of hand-rolled sushi, and the comfort of steaming dim sum. It is built for sharing, for movement, and for moments of theatre. At myCHEF Dubai, we bring those moments to your event with live stations and freshly cooked plates, drawing on Thai, Chinese, Japanese, and fusion traditions across the continent.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Asian catering Dubai price and Asian catering cost per person Dubai depend on the same three things: the guest count, the menu, and how much of the work happens in front of people. Asian catering packages Dubai start from a set format and get adjusted to your date rather than sold as a fixed box. If you are weighing up best Asian catering Dubai and best Indian catering in Dubai, the things worth checking are the named chef, the itemised quote and who buys the ingredients. The Asian catering menu Dubai is drafted around the occasion, the season and the dietary list, and you change it before anything is confirmed. Halal Asian catering Dubai is planned into the first draft of the menu rather than bolted on at the end. Birthday catering in Dubai is planned around the room and the running order, with chefs, service staff and clear-down included.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            From live wok and dim sum stations to a <Link to="/sushi-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">sushi catering Dubai</Link> counter with hand-rolled maki and sashimi, our pan-Asian menus suit receptions, villa gatherings, weddings, and themed corporate nights. Halal sourcing is the baseline, spice levels are tailored to your guests, and vegetarian and vegan dishes are plentiful — explore how it fits within our wider <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Menu Highlights ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">MENU HIGHLIGHTS</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              From Wok to Counter
            </h2>
          </div>

          <div className="asia-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuHighlights.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="asia-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
              Asian Catering for Every Occasion
            </h2>
          </div>

          <div className="asia-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="asia-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our Asian Catering Includes
          </h2>

          <div className="asia-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="asia-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of Our Asian Catering
          </h2>

          <div className="asia-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="asia-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Asian Catering Dubai: the questions we get before a booking
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

          <div className="asia-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={locationPath(loc.slug)}
                className="asia-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="asia-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="asia-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      <LocationStrip title="Asian catering across Dubai" />

      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center asia-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Plan Your Asian Feast
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your celebration and we'll design a pan-Asian menu — with live wok, dim sum, or sushi stations — that suits your guests, dietary needs, and the scale of your occasion.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary">Get My Asian Catering Quote</Link>
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
