import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { locationPath } from '@/data/locations'
import {
  Sparkles,
  Grape,
  Martini,
  Cake,
  Home,
  Building,
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
const WHATSAPP_MESSAGE = encodeURIComponent("Hi myCHEF Dubai, I'd like to plan bachelorette party catering (via mychef.ae/bachelorette-party-catering-dubai)")
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const formats = [
  {
    icon: Sparkles,
    title: 'Elegant Canape Receptions',
    description:
      'Beautifully composed passed canapes and bite-sized plates. Refined, photogenic, and perfectly suited to a stand-up celebration with cocktails in hand.',
  },
  {
    icon: Grape,
    title: 'Grazing & Charcuterie Tables',
    description:
      'Lavish grazing tables layered with cheeses, fruits, dips, and artisan bites. A centerpiece spread that looks as good as it tastes.',
  },
  {
    icon: Martini,
    title: 'Cocktails & Mocktails',
    description:
      'Signature cocktails and elegant alcohol-free mocktails poured by professional bartenders, served to suit every guest in the group.',
  },
  {
    icon: Cake,
    title: 'Dessert Tables',
    description:
      'Styled dessert spreads with pastries, petit fours, and a statement cake. The sweet finish that makes the celebration feel complete.',
  },
  {
    icon: Home,
    title: 'Villa Celebrations',
    description:
      'fully-coordinated catering for private villa parties across Dubai. We style, serve, and clear away so the group can simply enjoy the day.',
  },
  {
    icon: Building,
    title: 'Rooftop & Terrace Soirees',
    description:
      'Catering tailored to rooftop and terrace settings, from sunset canapes to evening cocktails against the Dubai skyline.',
  },
]

const useCases = [
  {
    title: 'Villa Brunch Parties',
    description:
      'A relaxed villa brunch with grazing tables, fresh canapes, and a free-flowing mocktail bar. We handle the styling and the service while the group celebrates.',
  },
  {
    title: 'Rooftop Cocktail Evenings',
    description:
      'Sunset on a rooftop terrace with passed canapes, signature cocktails, and a dessert table. Elegant, effortless, and made for photographs.',
  },
  {
    title: 'Spa-Day Send-Offs',
    description:
      'Light, refined bites and refreshing mocktails to complement a pampered spa-day theme, served wherever the group is gathering.',
  },
  {
    title: 'Garden & Poolside Gatherings',
    description:
      'Daytime garden or poolside celebrations with grazing boards, chilled drinks, and a styled dessert spread, all set up and cleared by chefs in our network.',
  },
]

const includedItems = [
  { title: 'Bespoke Menu Design', description: 'A menu styled around the theme, the venue, and the group, planned together in advance.' },
  { title: 'Premium Ingredients', description: 'Fresh, high-quality produce and ingredients sourced from trusted Dubai suppliers.' },
  { title: 'Styled Presentation', description: 'Grazing tables, dessert spreads, and canape displays arranged for an elegant, photogenic finish.' },
  { title: 'Cocktail & Mocktail Bar', description: 'Professional bartenders serving signature cocktails and refined alcohol-free options.' },
  { title: 'Service Staff', description: 'Hosts and servers to pass canapes, top up drinks, and keep the celebration flowing.' },
  { title: 'Full Setup & Cleanup', description: 'We arrive early, style the space, serve through the event, and clear it all away.' },
  { title: 'Flexible Venues', description: 'Villa, rooftop, garden, or terrace — We coordinate catering for wherever the celebration is happening.' },
  { title: 'On-Site Coordination', description: 'A coordinator keeps the timing, service, and bar running seamlessly throughout.' },
]

const galleryImages = [
  { src: '/service-events.webp', alt: 'Bachelorette party event catering in Dubai' },
  { src: '/menu-canapes.webp', alt: 'Elegant canapes for a bachelorette party' },
  { src: '/menu-cocktails.webp', alt: 'Cocktails and mocktails for a bachelorette party' },
  { src: '/menu-dessert.webp', alt: 'Styled dessert table for a bachelorette party' },
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
  { name: 'Meydan', slug: 'meydan' },
]

const faqs = [
  {
    q: 'What does bachelorette party catering usually include?',
    a: 'Most bachelorette celebrations combine a grazing or canape spread, a cocktail and mocktail bar, and a styled dessert table. We tailor the mix to your theme and venue, and our chefs handle the setup, service, and cleanup from start to finish.',
  },
  {
    q: 'Can you create alcohol-free options for the group?',
    a: 'Yes. Our bartenders prepare elegant alcohol-free mocktails alongside any cocktails, so every guest is looked after. Just let us know the preferences of the group when we design the drinks list.',
  },
  {
    q: 'Do you style grazing and dessert tables?',
    a: 'We do. Styled grazing tables and dessert spreads are a signature part of our bachelorette catering, arranged to look beautiful and photograph well. Share your colour theme and we will build the presentation around it.',
  },
  {
    q: 'Can you cater a villa or rooftop celebration?',
    a: 'Absolutely. We regularly cater private villa parties, rooftop soirees, garden gatherings, and poolside celebrations across Dubai, bringing full setup and service to whichever venue you choose.',
  },
  {
    q: 'How many guests can you cater for?',
    a: 'we coordinate catering intimate bachelorette gatherings as well as larger celebrations. Grazing tables, canape menus, and dessert spreads all scale to your numbers, so tell us the headcount and we will plan accordingly.',
  },
  {
    q: 'How far in advance should we book?',
    a: 'We recommend booking one to two weeks ahead for most bachelorette parties, and earlier during peak season between November and March. Reach out as soon as you have a date to secure your preferred styling and service.',
  },
  { q: "How much does bachelorette party catering cost in Dubai?", a: "Bachelorette party catering in Dubai is priced by custom quote, because the cost depends on your guest count, the menu style, and whether you want a full bar and service staff. We build a transparent proposal around your headcount and theme rather than a fixed per-head rate, and all pricing is subject to 5% VAT. Send us your date and numbers and we typically reply within 15 minutes during business hours." },
  { q: "Is there a minimum number of guests for a bachelorette booking?", a: "No, we cater intimate bachelorette gatherings as well as larger celebrations, so you are not forced into a 50-guest minimum the way many caterers require. Whether it is eight close friends at a villa or a bigger rooftop party, we scale the grazing tables, canapes, and dessert spread to suit. Tell us your numbers and we will design a menu that fits the group." },
  { q: "What exactly is included in the price, or are staff and setup extra?", a: "Our bachelorette catering is genuinely full-service, so the quote covers menu design, ingredient sourcing and shopping, on-site cooking, plating and serving, and full cleanup afterwards. Unlike drop-off caterers, we do not surprise you with separate setup or breakdown charges, and serving staff can be added when you want drinks passed and topped up throughout. You can see the full end-to-end approach on our [how it works](/how-it-works) page." },
  { q: "Are your food and kitchens properly licensed and food-safe?", a: "Yes, our chefs and kitchens operate to Dubai Municipality food-safety standards, so your celebration is handled by a professional, compliant team rather than a home cook. Every menu is prepared with fresh produce from trusted Dubai suppliers and handled under proper hygiene controls. That means you can relax and enjoy the party knowing the food side is fully looked after." },
  { q: "Is the food halal?", a: "Yes, our ingredients are halal sourced by default, so the whole bachelorette menu works for a mixed group without any special request. If your celebration has specific religious or cultural requirements, just flag them when we design the menu and we will confirm everything in advance. This keeps every guest comfortable with what is being served." },
  { q: "Can you serve cocktails, and do you handle the alcohol licensing?", a: "Our professional bartenders serve signature cocktails alongside elegant mocktails, and we discuss the drinks setup with you when planning so everything is arranged correctly for a private event in Dubai. Where you would like alcohol served, we will confirm the right approach for your venue during planning rather than leaving it to guesswork. For groups who prefer to stay dry, a full alcohol-free bar looks and feels just as celebratory." },
  { q: "Do you help with the theme, colours, and styling as well as the food?", a: "Yes, we style the grazing tables, dessert spreads, and canape displays around your bachelorette colour palette and theme so everything looks cohesive and photographs beautifully. Share your inspiration, hashtag colours, or a moodboard and our chefs build the presentation to match. The result is a spread that feels designed for the occasion, not generic platters." },
  { q: "Can you accommodate dietary needs like vegan, gluten-free, or nut allergies?", a: "Absolutely, we design menus around vegan, vegetarian, gluten-free, dairy-free, and allergy-aware needs so every friend in the group is properly catered for. Let us know the requirements when we plan the menu and we will label dishes clearly and keep sensitive ingredients separate. Explore our [vegan catering](/vegan-catering-dubai) options if plant-based is a priority for your celebration." },
  { q: "Which venues do you cater — villas, rooftops, hotels, or short-term rentals?", a: "We cater bachelorette parties at private villas, rooftop terraces, gardens, poolside settings, and short-term holiday rentals right across Dubai, including Palm Jumeirah and the Marina. Our chefs bring the full setup and service to your chosen location and clear everything away afterwards. If you are hosting at a rented villa, see our [villas and private residences](/villas-private-residences) catering for how we work in those spaces." },
  { q: "How far in advance do we need to book, and can you handle last-minute?", a: "We recommend booking one to two weeks ahead for most bachelorette parties, and earlier during peak season from November to March when villas and dates fill quickly. That said, we can often accommodate shorter notice, so message us even if your date is close and we will tell you honestly what is possible. Reaching out early simply secures your preferred styling, menu, and staffing." },
  { q: "Can you do a daytime villa brunch and an evening dinner on the same day?", a: "Yes, we can cater a relaxed daytime brunch with grazing tables and mocktails and then transition into an evening dinner or cocktail service for the same group. Many bachelorette celebrations run across a full day, so we plan the timeline and refresh the spread accordingly. If you want a seated dinner to close the night, a [private chef](/private-chef-dubai) can plate a refined multi-course menu at the villa." },
  { q: "Do you provide serving staff, and can they help run the party?", a: "Yes, serving staff are optional and can pass canapes, top up drinks, keep the grazing and dessert tables looking fresh, and clear as they go. For larger bachelorette parties this keeps the celebration flowing so the host is never stuck refilling platters. An on-site coordinator can also manage the timing and bar so the group simply enjoys the day." },
  { q: "Can you make a statement cake or dessert display for the bride?", a: "Yes, a styled dessert table with pastries, petit fours, and a statement cake is a signature part of our bachelorette catering and a highlight moment for photos. We tailor the flavours, colours, and any personalised touches to the bride and the theme. Just share what she loves and we will make the sweet finish feel special." },
  { q: "Is bachelorette catering better than booking a restaurant for the group?", a: "For a bachelorette, catering at a private villa or rooftop gives you the space, privacy, and freedom that a restaurant booking cannot, with the food styled entirely around your theme. You control the timing, the playlist, and the vibe without a table turnover or a noise limit, and the celebration stays intimate. Browse our full [catering in Dubai](/catering-dubai) range to see how we handle private events end to end." },
  { q: "How do we confirm a booking and secure our date?", a: "To confirm, simply share your date, venue, and guest count and we will send a tailored proposal, usually within 15 minutes during business hours, then lock in your date once you are happy. We keep the process simple and personal from first message to the day itself. Start by sending details through our [contact](/contact) page and we will take it from there." },
]

const relatedServices = [
  {
    title: 'Catering Dubai',
    description: 'fully-coordinated catering across Dubai for celebrations of every size and style.',
    image: '/service-catering.webp',
    link: '/catering-dubai',
  },
  {
    title: 'Private Chef',
    description: 'A dedicated chef preparing a refined, intimate menu in your villa or home.',
    image: '/service-private-chef.webp',
    link: '/private-chef-dubai',
  },
  {
    title: 'Luxury Dining',
    description: 'Bespoke fine-dining experiences for a truly memorable celebration.',
    image: '/service-luxury-dining.webp',
    link: '/luxury-dining-experiences',
  },
]

const serviceObj = {
  '@type': 'Service',
  name: 'Bachelorette Party Catering Dubai',
  serviceType: 'Bachelorette Party Catering',
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

const faqObj = {
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const breadcrumbObj = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Bachelorette Party Catering Dubai', item: 'https://www.mychef.ae/bachelorette-party-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceObj, faqObj, breadcrumbObj],
}

/* ────────────────────── Component ────────────────────── */

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'd like a Bachelorette Party quote in Dubai. Date: __ Guests: __ Area: __"
export default function BachelorettePartyCatering() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.bt-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.bt-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.bt-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.bt-fmt-card', {
      scrollTrigger: { trigger: '.bt-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.bt-use-item', {
      scrollTrigger: { trigger: '.bt-use-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.bt-inc-item', {
      scrollTrigger: { trigger: '.bt-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.bt-gallery-img', {
      scrollTrigger: { trigger: '.bt-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.bt-faq-item', {
      scrollTrigger: { trigger: '.bt-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.bt-loc-item', {
      scrollTrigger: { trigger: '.bt-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.bt-rel-card', {
      scrollTrigger: { trigger: '.bt-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.bt-cta', {
      scrollTrigger: { trigger: '.bt-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Bachelorette Party Catering Dubai | Canapés & Grazing | myCHEF"
        description="Book bachelorette party catering in Dubai. Elegant canapés, grazing tables, cocktails and mocktails for villas and rooftops. Get a quote in 15 minutes."
        canonicalPath="/private-party-catering-dubai"
        ogImage="/service-events.webp"
        hideSiteName
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/celebration-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 bt-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Bachelorette Party Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 bt-hero-h1">
            Bachelorette Party Catering Dubai: Canapés, Grazing & Cocktails
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[600px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 bt-hero-sub">
            Elegant canapes, lavish grazing tables, signature cocktails and mocktails, and styled dessert spreads. Refined catering for villa and rooftop celebrations across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary opacity-0 translate-y-4 bt-hero-cta">Plan My Bachelorette Party</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 bt-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <TrustSignalStrip />

      {/* ═══════════════ Section 2: Intro ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <SectionLabel align="center">CELEBRATE IN STYLE</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            A Celebration Worth Styling
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            A bachelorette party is a moment to gather the closest friends and celebrate properly. Whether the day unfolds across a private villa, a rooftop terrace, or a sunlit garden, the catering should feel as considered as the rest of the plan. Our bachelorette party catering brings styled grazing tables, refined canapes, a polished bar, and a statement dessert spread straight to your chosen venue.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Every menu is designed around the theme, the colours, and the group, with elegant alcohol-free mocktails poured alongside signature cocktails so no guest is left out. Chefs in our network style the space, serve throughout, and clear it all away, available for Dubai events of every size. Explore our{' '}
            <Link to="/cocktail-party-catering-dubai" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">cocktail party catering</Link>,{' '}
            <Link to="/yachts" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">yacht catering</Link>,{' '}
            or full{' '}
            <Link to="/private-party-catering-dubai" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">party catering Dubai</Link>{' '}
            range, or request a{' '}
            <Link to="/inquiry" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">Plan My Bachelorette Party</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">WHAT WE CREATE</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Catering Styled for the Occasion
            </h2>
          </div>

          <div className="bt-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <div
                  key={i}
                  className="bt-fmt-card bg-charcoal p-8 opacity-0 translate-y-12"
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

      {/* ═══════════════ Section 4: Use Cases ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center">WAYS TO CELEBRATE</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              Where we coordinate catering for Bachelorette Parties
            </h2>
          </div>

          <div className="bt-use-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="bt-use-item bg-white p-8 border border-gray-200 opacity-0 translate-y-10">
                <h3 className="font-playfair text-h3 text-black mb-3">{uc.title}</h3>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
          <p className="font-inter text-body-sm text-gray-500 text-center max-w-[680px] mx-auto mt-10 leading-relaxed">
            Prefer a seated dinner to close the celebration? A{' '}
            <Link to="/private-chef-dubai" className="text-gold hover:text-gold-dark transition-colors underline underline-offset-2">private chef</Link>{' '}
            can plate a refined menu at the villa, or step up to a full{' '}
            <Link to="/luxury-dining-experiences" className="text-gold hover:text-gold-dark transition-colors underline underline-offset-2">luxury dining experience</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 5: What's Included ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-h2 text-black text-center mb-12">
            What Your Catering Includes
          </h2>

          <div className="bt-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="bt-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of the Celebration
          </h2>

          <div className="bt-gallery grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="bt-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Bachelorette Party Catering Questions
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

          <div className="bt-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={locationPath(loc.slug)}
                className="bt-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="bt-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="bt-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
          <p className="font-inter text-body-sm text-gray-400 text-center mt-10">
            Planning the other half of the celebration? Explore our{' '}
            <Link to="/private-party-catering-dubai" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">bachelor party catering</Link>.
          </p>
        </div>
      </section>

      <LocationStrip title="Bachelorette party catering across Dubai" />

      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center bt-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Plan the Celebration
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Share the date, the venue, and the theme — we will style the grazing tables, the bar, and the dessert spread around it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary">Plan My Bachelorette Party</Link>
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
