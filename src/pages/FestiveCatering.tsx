import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import {
  TreePine,
  PartyPopper,
  Moon,
  Sun,
  Sparkles,
  Flame,
  UtensilsCrossed,
  Coffee,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import TrustSignalStrip from '../components/TrustSignalStrip'
import LocationStrip from '../components/LocationStrip'
import FaqAccordion from '../components/FaqAccordion'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { SectionLabel } from '../components/system'


const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to discuss festive catering (via mychef.ae/festive-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const festivePages = [
  {
    slug: '/christmas-catering-dubai',
    title: 'Christmas Catering',
    description: 'Roasts, festive canapés, seasonal desserts and tailored menus for Christmas Eve, lunch or dinner at home.',
    icon: TreePine,
  },
  {
    slug: '/new-year-catering-dubai',
    title: 'New Year Catering',
    description: 'Elegant tasting menus, canapé receptions and late-night grazing for New Year celebrations across Dubai.',
    icon: PartyPopper,
  },
  {
    slug: '/ramadan-catering-dubai',
    title: 'Ramadan Catering',
    description: 'Iftar and Suhoor menus designed for fasting, sharing and family gatherings during the Holy Month.',
    icon: Moon,
  },
  {
    slug: '/iftar-catering-dubai',
    title: 'Iftar Catering',
    description: 'Date-to-dessert Iftar spreads with halal dishes, soups, salads, mains and sweets for groups of any size.',
    icon: Sun,
  },
  {
    slug: '/suhoor-catering-dubai',
    title: 'Suhoor Catering',
    description: 'Light, sustaining pre-dawn menus served in the early hours for Suhoor gatherings at home or in a villa.',
    icon: Coffee,
  },
  {
    slug: '/eid-catering-dubai',
    title: 'Eid Catering',
    description: 'Celebratory Eid feasts with Middle Eastern favourites, grills, rice dishes and sharing platters.',
    icon: Sparkles,
  },
  {
    slug: '/diwali-catering-dubai',
    title: 'Diwali Catering',
    description: 'Indian-inspired menus, sweets, festive platters and spice-forward dishes for Diwali parties in Dubai.',
    icon: Flame,
  },
  {
    slug: '/brunch-catering-dubai',
    title: 'Brunch Catering',
    description: 'Weekend brunch spreads with live stations, pastries, egg dishes and bottomless-style beverages.',
    icon: UtensilsCrossed,
  },
  {
    slug: '/halloween-catering-dubai',
    title: 'Halloween Catering',
    description: 'Spooky, playful menus and themed treats for Halloween parties at home or in a Dubai venue.',
    icon: PartyPopper,
  },
  {
    slug: '/easter-catering-dubai',
    title: 'Easter Catering',
    description: 'Spring-inspired brunches, roasts and family feasts for Easter celebrations across Dubai.',
    icon: Sun,
  },
  {
    slug: '/uae-national-day-catering-dubai',
    title: 'UAE National Day Catering',
    description: 'Patriotic themed menus and national-colour styling for UAE National Day gatherings and events.',
    icon: Sparkles,
  },
]

const relatedServices = [
  { title: 'Catering Dubai', link: '/catering-dubai' },
  { title: 'Private Chef Dubai', link: '/private-chef-dubai' },
  { title: 'Villa Dining', link: '/villas-private-residences' },
  { title: 'Yacht Catering', link: '/yachts' },
  { title: 'Corporate Catering', link: '/corporate' },
  { title: 'Party Catering', link: '/party-catering-dubai' },
  { title: 'Chinese New Year Catering', link: '/chinese-new-year-catering-dubai' },
  { title: 'Holi Catering', link: '/holi-catering-dubai' },
]

const faqs = [
  {
    q: 'Can festive menus be adapted for dietary requirements?',
    a: 'Yes. Every festive menu can be adjusted for halal, vegetarian, vegan, gluten-free, dairy-free, nut-free and other dietary needs while keeping the celebratory feel.',
  },
  {
    q: 'How far in advance should I book festive catering in Dubai?',
    a: 'Peak dates such as Christmas, New Year and Eid fill up quickly. We recommend booking 3–4 weeks ahead for large gatherings and at least 1–2 weeks ahead for smaller dinners.',
  },
  {
    q: 'Do you provide full service for festive events at home?',
    a: 'Yes. Our festive catering includes menu design, ingredients, chef and service staff, setup, service and clear-down. We can also provide bar service, rentals and table styling through partners.',
  },
  {
    q: 'Can I mix cuisines at a festive dinner?',
    a: 'Absolutely. Many hosts combine traditional festive dishes with international favourites — for example, roast turkey with Middle Eastern sides, or Indian starters with a European main.',
  },
  {
    q: 'Are Ramadan and Eid menus halal?',
    a: 'Yes. Our Ramadan, Iftar, Suhoor and Eid menus are prepared halal-compliant and designed for communal sharing and cultural timing.',
  },
  { q: "How much does festive catering cost per person in Dubai?", a: "Festive catering in Dubai is priced by custom quote, because the cost depends on your occasion, menu, guest count and level of service rather than a fixed per-head rate. Seasonal menus, live cooking stations, premium proteins and serving staff all affect the final figure, and 5% VAT applies. Send us your date and headcount and we'll build a clear, itemised quote — you can also see indicative ranges in our [Dubai catering prices guide](/dubai-catering-prices-guide)." },
  { q: "What's included when I book festive catering with myCHEF?", a: "Every festive booking includes menu design, ingredient sourcing and shopping, on-site cooking, plating and serving, plus full cleanup so you're left with a tidy kitchen. Our chefs handle the whole meal end to end, and serving staff, bar service, rentals and table styling can be added on request. You host and enjoy the celebration while we take care of the food." },
  { q: "Is festive catering in Dubai halal?", a: "Yes — we source halal by default across all our festive menus, from Christmas and New Year spreads to Ramadan, Iftar and Eid feasts. Our chefs and kitchens operate to Dubai Municipality food-safety standards, and we can keep everything pork-free and cook to specific religious or cultural requirements when you ask. Just flag your needs when you enquire and we'll confirm every dish." },
  { q: "Do your chefs cook the festive meal fresh at my home?", a: "Yes — our chefs cook fresh, on-site at your home, villa or venue, rather than dropping off pre-made trays. That means hot roasts, carving stations and canapés served at their best, with our team plating and serving through the evening. If you'd prefer a hands-off drop-off option for a casual gathering, we offer [drop-off catering](/drop-off-catering-dubai) too." },
  { q: "How late can I book festive catering in December?", a: "We take last-minute festive bookings when our calendar allows, but peak dates like Christmas Eve, Christmas Day and New Year's Eve fill fastest, so the sooner you enquire the better. Smaller dinners can sometimes be arranged within a few days, while larger events need more lead time to secure chefs and ingredients. Message us with your date and we typically reply within 15 minutes during business hours." },
  { q: "Is there a minimum number of guests for festive catering?", a: "We cater festive occasions of almost any size, from an intimate family dinner for a handful of guests to large seasonal parties and corporate celebrations. Smaller gatherings and larger buffets are quoted differently, so the ideal setup depends on your headcount and format. Tell us how many you're expecting and we'll recommend the right menu and service style." },
  { q: "Can you provide waiters and serving staff for a festive party?", a: "Yes — professional serving staff are an optional add-on for any festive event, and we'll advise how many waiters suit your guest count and format. As a guide, plated seated dinners need more front-of-house than a self-serve buffet, and we can also arrange bartenders and hosts. Add staffing to your quote and our team manages service and clear-down on the night." },
  { q: "Can you handle mixed dietary needs at one festive table?", a: "Absolutely — we regularly cater festive tables that mix vegetarian, vegan, gluten-free, dairy-free and nut-free guests alongside the classic dishes, all without splitting the celebration. Our chefs plan the menu so everyone eats well and nothing feels like an afterthought. Share your guests' requirements when you enquire and we'll map every course to keep the meal safe and inclusive; see our [allergy-safe catering](/allergy-safe-catering-dubai) approach for details." },
  { q: "Do you cater festive events in villas, apartments and yachts?", a: "Yes — we cater festive occasions in private villas, apartments, community homes and on yachts across Dubai, bringing our own equipment to work in your space. Our chefs adapt to compact apartment kitchens or expansive villa setups, and handle the logistics of on-board yacht service. Let us know your venue and we'll plan a menu and setup that fits; explore [villa and private residence dining](/villas-private-residences) or [yacht catering](/yachts)." },
  { q: "Can you provide a Christmas turkey and full roast for a home dinner?", a: "Yes — our chefs prepare a full festive roast in your home, including turkey with all the trimmings, sides, gravy and seasonal desserts, cooked fresh rather than reheated. We tailor the spread to your guest count and can add a carving station, canapés to start and a dessert course. Everything is cooked, plated and served on-site, with cleanup handled afterwards." },
  { q: "Do you offer bar service, cocktails and drinks stations for festive parties?", a: "Yes — we can arrange bar service, cocktail and mocktail stations, and coffee or tea service for your festive celebration through our team and trusted partners. This pairs naturally with canapé receptions, New Year countdowns and grazing setups, so drinks and food flow together. Ask us about a [mocktail bar](/mocktail-bar-catering-dubai) or full bar setup and we'll fold it into your festive quote." },
  { q: "Can you create live cooking stations and grazing tables for the festive season?", a: "Yes — live cooking stations, carving counters, dessert carts and grazing tables are popular festive centrepieces we design and staff on-site. They add theatre and let guests watch dishes finished fresh, which works beautifully for New Year receptions and large parties. Browse our [live cooking stations](/live-cooking-stations-dubai) and [grazing table](/grazing-table-dubai) options, and we'll build a spread that suits your occasion." },
  { q: "When is peak festive catering season in Dubai and does it get busy?", a: "Peak season runs from November to March, covering Christmas, New Year, Ramadan, Iftar, Eid and the cooler outdoor-dining months, and dates book up quickly during this window. Because our chefs and kitchens are in high demand across the season, securing your date early gives you the widest menu and staffing options. Reach out as soon as you have a date in mind and we'll hold the best availability we can." },
  { q: "Should I choose a buffet or a plated menu for my festive event?", a: "It depends on the mood you want: a plated seated dinner feels more formal and elegant, while a festive buffet or grazing spread keeps things relaxed and social for larger, mingling crowds. Buffets and self-serve stations usually need less serving staff, whereas plated service delivers a polished, restaurant-style experience at home. Tell us your guest count and vibe and we'll recommend the format, or read our [buffet vs plated guide](/buffet-vs-plated-dubai)." },
  { q: "Do you cater corporate festive parties and end-of-year events?", a: "Yes — we cater corporate festive celebrations across Dubai, from office Christmas lunches and end-of-year galas to team New Year dinners, with menus and staffing scaled to your headcount. Our team handles setup, service and cleanup so your office or venue is left spotless. Explore our [corporate catering](/corporate) options and we'll tailor a festive package to your company's occasion and budget." },
  { q: "Can you match a festive theme, styling and presentation to my party?", a: "Yes — we style festive menus and presentation to match your theme, whether that's a classic Christmas table, a glamorous New Year reception, an Eid feast or a Diwali celebration. Beyond the food, we can coordinate table styling, tableware and décor through trusted partners so the whole setup feels cohesive. Share your theme and colour palette and we'll design a menu and look that fits the occasion." },
]

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const collectionSchema = {
  '@type': 'CollectionPage',
  name: 'Festive Catering Dubai',
  url: 'https://www.mychef.ae/festive-catering-dubai',
  description: 'Festive and seasonal catering in Dubai: Christmas, New Year, Ramadan, Iftar, Suhoor, Eid, Diwali and brunch celebrations.',
}

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Festive Catering Dubai', item: 'https://www.mychef.ae/festive-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [collectionSchema, faqSchema, breadcrumbSchema],
}

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'm interested in festive catering in Dubai. Date: __ Guests: __ Area: __"
export default function FestiveCatering() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.festive-card', {
      scrollTrigger: { trigger: '.festive-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.festive-faq-item', {
      scrollTrigger: { trigger: '.festive-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.festive-services', {
      scrollTrigger: { trigger: '.festive-services', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })

    gsap.to('.festive-cta', {
      scrollTrigger: { trigger: '.festive-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Festive Catering Dubai | Ramadan, Eid, Diwali, Christmas & NYE | myCHEF"
        description="Book festive catering in Dubai for Ramadan, Eid, Diwali, Christmas and NYE. Bespoke menus, private chefs and full service. Get a tailored quote in 15 minutes."
        canonicalPath="/festive-catering-dubai"
        ogImage="/images/festive-catering-dubai-hero.webp"
        hideSiteName
        schema={schema}
      />

      {/* ═══════════════ Hero ═══════════════ */}
      <PageHero
        eyebrow="Seasonal Celebrations"
        title="Festive Catering Dubai for Every Season"
        subtitle="From Christmas roasts and New Year tasting menus to Ramadan iftars, Eid feasts and Diwali celebrations — we design seasonal catering that matches the occasion."
        image="/images/festive-catering-dubai-hero.webp"
        imageAlt="Festive catering celebrations in Dubai"
        cta={{ label: 'Get a Festive Quote', href: '/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=festive-catering' }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Festive Catering Dubai' }]}
        minHeight="tall"
        overlay="dark"
      />

      <TrustSignalStrip variant="dark" />

      {/* ═══════════════ Urgency Banner ═══════════════ */}
      <section className="bg-gold py-4">
        <div className="container-custom text-center">
          <p className="font-inter text-sm font-medium text-black">
            Book early — peak festive dates fill up quickly. Limited availability for Christmas, New Year, Ramadan and Eid.
          </p>
        </div>
      </section>

      {/* ═══════════════ Festive Grid ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[1100px]">
          <div className="text-center mb-12">
            <SectionLabel align="center">Browse by Occasion</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              Celebrate Every Season in Dubai
            </h2>
          </div>

          <div className="festive-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {festivePages.map((page, i) => {
              const Icon = page.icon
              return (
                <Link
                  key={i}
                  to={page.slug}
                  className="festive-card group flex flex-col gap-4 bg-cream p-6 border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] opacity-0 translate-y-10"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-black flex items-center justify-center">
                    <Icon size={22} className="text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-playfair text-h3 text-black mb-2 group-hover:text-gold transition-colors">
                      {page.title}
                    </h3>
                    <p className="font-inter text-body-sm text-gray-500 leading-relaxed">
                      {page.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 font-inter text-body-sm uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
                    Explore <ArrowRight size={14} />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Related Services ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="festive-services opacity-0 translate-y-8">
            <h2 className="font-playfair text-h2 text-white text-center mb-10">
              Explore Our Catering Services
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {relatedServices.map((svc, i) => (
                <Link
                  key={i}
                  to={svc.link}
                  className="px-5 py-2.5 border border-gold/30 text-gold font-inter text-sm hover:bg-gold hover:text-black transition-colors rounded-sm"
                >
                  {svc.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <div className="text-center mb-10">
            <SectionLabel align="center">FAQ</SectionLabel>
            <h2 className="font-playfair text-fluid-h2 text-black">
              Planning Festive Catering in Dubai
            </h2>
          </div>

          <FaqAccordion items={faqs} showJumpNav />
        </div>
      </section>

      <LocationStrip title="Festive catering across Dubai" />

      {/* ═══════════════ Final CTA ═══════════════ */}
      <section className="festive-cta bg-gradient-to-b from-black to-charcoal py-20">
        <div className="container-custom text-center opacity-0 translate-y-8">
          <PartyPopper size={40} className="text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-h2 text-white mb-4">
            Plan Your Seasonal Celebration
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us the occasion, date and guest count. We’ll create a festive menu and service plan tailored to your Dubai celebration.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=festive-catering" className="btn-primary">
              Get a Festive Quote
            </Link>
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
          <p className="font-inter text-sm text-gray-400 mt-6">
            We typically reply within 15 minutes during business hours.
          </p>
        </div>
      </section>
    </div>
  )
}
