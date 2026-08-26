// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /guides
//     primary:     "catering checklist dubai"
//     subkeywords: "how to plan catering for an event dubai" · "event catering planning dubai" · "catering guides dubai price" · "event planning food checklist dubai" · "catering delivery checklist" · "catering order checklist" · "catering event checklist" · "catering food checklist" · "bbq catering checklist" · "catering checklist fssai" · "catering checklist template" · "catering cleaning checklist"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { BookOpen, ArrowRight, Phone, DollarSign, ClipboardCheck, Home, Heart, Briefcase, Users, UtensilsCrossed, Ship, Moon, Sparkles, FileText, Anchor, ClipboardList, ChefHat, TrendingUp } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import FaqAccordion from '../components/FaqAccordion'
import { SectionLabel } from '../components/system'


const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I found your guides and would like to discuss catering (via mychef.ae/guides)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const guides = [
  {
    slug: '/dubai-catering-prices-guide',
    title: 'Dubai Catering Prices Guide',
    description: 'Realistic per-person budgets for private chefs, canapés, buffets, plated dinners, BBQs and yacht catering in Dubai.',
    icon: DollarSign,
  },
  {
    slug: '/dubai-event-catering-price-guide-2026',
    title: 'Event Catering Price Guide 2026',
    description: 'Per-person and total budgets for weddings, corporate events, yacht parties and galas in Dubai.',
    icon: FileText,
  },
  {
    slug: '/wedding-catering-menu-planning-dubai',
    title: 'Wedding Menu Planning Guide',
    description: 'Wedding food menu ideas for Dubai: plated, buffet, Indian, Arabic, tastings and late-night food. Not a price list.',
    icon: ClipboardList,
  },
  {
    slug: '/blog/wedding-catering-cost-dubai',
    title: 'Wedding Catering Cost Dubai',
    description: 'Planning estimates for food-led buffets, hotel packages and chef-led villa dinners. VAT and extras. Figures reviewed 2026.',
    icon: DollarSign,
  },
  {
    slug: '/how-to-choose-caterer-dubai',
    title: 'How to Choose a Caterer in Dubai',
    description: 'A 10-point checklist for comparing caterers, spotting red flags, and asking the right questions before you book.',
    icon: ClipboardCheck,
  },
  {
    slug: '/villa-catering-ideas-dubai',
    title: 'Villa Catering Ideas',
    description: 'Menu formats and setup inspiration for villa parties, poolside gatherings and at-home celebrations across Dubai.',
    icon: Home,
  },
  {
    slug: '/wedding-catering-checklist-dubai',
    title: 'Wedding Catering Checklist',
    description: 'When to book a wedding caterer in Dubai, tasting window, community gates, hotel rules and day-of service. Printable. No prices.',
    icon: Heart,
  },
  {
    slug: '/corporate-catering-checklist-dubai',
    title: 'Corporate Catering Checklist',
    description: 'Headcount, dietary requirements, formats and service flow for office lunches, conferences and company events.',
    icon: Briefcase,
  },
  {
    slug: '/private-chef-vs-catering-dubai',
    title: 'Private Chef vs Catering',
    description: 'Compare the two approaches by group size, occasion, budget and customisation to find the right fit.',
    icon: Users,
  },
  {
    slug: '/buffet-vs-plated-dubai',
    title: 'Buffet vs Plated Service',
    description: 'Pros, cons and venue fit for each format, plus how to combine buffet and plated service at the same event.',
    icon: UtensilsCrossed,
  },
  {
    slug: '/yacht-catering-guide-dubai',
    title: 'Yacht Catering Guide',
    description: 'Menus, logistics and serving tips for Dubai Marina and Palm Jumeirah yacht parties and sunset cruises.',
    icon: Ship,
  },
  {
    slug: '/yacht-catering-checklist-dubai',
    title: 'Yacht Catering Checklist',
    description: 'A printable week-by-week checklist for catering on Dubai yachts and boats.',
    icon: Anchor,
  },
  {
    slug: '/guide/private-dining-dubai',
    title: 'Private Dining Guide',
    description: 'The complete guide to hiring a private chef in Dubai: formats, tastings, pricing and best occasions.',
    icon: ChefHat,
  },
  {
    slug: '/ramadan-catering-guide-dubai',
    title: 'Ramadan Catering Guide',
    description: 'Planning Iftar, Suhoor and Eid gatherings with halal menus, cultural timing and large-group service.',
    icon: Moon,
  },
  {
    slug: '/luxury-dinner-planning-guide-dubai',
    title: 'Luxury Dinner Planning Guide',
    description: 'Design an intimate fine-dining experience at home with tasting menus, tablescape ideas and service details.',
    icon: Sparkles,
  },
  {
    slug: '/dubai-food-trends-report-2026',
    title: 'Dubai Food Trends Report 2026',
    description: 'The catering and private-dining trends shaping Dubai events this year.',
    icon: TrendingUp,
  },
]

const relatedServices = [
  { title: 'Catering Dubai', link: '/catering-dubai' },
  { title: 'Private Chef Dubai', link: '/private-chef-dubai' },
  { title: 'Event Catering', link: '/events' },
  { title: 'Corporate Catering', link: '/corporate' },
  { title: 'Yacht Catering', link: '/yachts' },
  { title: 'Villa Dining', link: '/villas-private-residences' },
]

const faqs = [
  {
    q: 'Are your guides free to read?',
    a: 'Yes. Every guide on this page is free and designed to help you plan catering in Dubai with realistic advice, not sales pressure.',
  },
  {
    q: 'Can I request a custom quote after reading a guide?',
    a: 'Absolutely. Each guide includes a link to our inquiry form and a WhatsApp button so you can move from research to a tailored proposal quickly.',
  },
  {
    q: 'Do the price ranges in your guides include staff and equipment?',
    a: 'Our Dubai Catering Prices Guide breaks down what is typically included and which factors add cost, such as extra staff, bar service, premium ingredients or equipment rentals.',
  },
  {
    q: 'Are these guides written for Dubai specifically?',
    a: 'Yes. Every guide references Dubai venues, seasons, cultural considerations and local logistics so the advice is relevant to events here.',
  },
  {
    q: 'How do I know whether to choose a private chef or full catering?',
    a: 'Our Private Chef vs Catering guide compares the two options by group size, occasion and budget so you can choose the right service model.',
  },
  {
    q: 'How is the catering guides Dubai price worked out?',
    a: 'There is no single number for catering guides Dubai price: guest count, menu, service style and staffing move the figure. Send the date, headcount and venue and you get an itemised proposal — food, chefs, staff, hire and 5% VAT shown separately — usually within a working day.',
  },
  {
    q: 'How to plan catering for an event Dubai?',
    a: 'We start from set formats and adjust them to your event rather than selling a fixed box: menu length, service style, staff and equipment are chosen for the day. Ask for the format closest to what you are planning and we shape it from there.',
  },
  {
    q: 'Do you do catering event checklist?',
    a: 'Yes. We plan the menu around the occasion and the room — plated, buffet, canapés or live stations — bring chefs, service staff and equipment, and handle the clear-down. Share the date, guest count and venue and you get a proposal with the format we would recommend and why. If you searched for event catering planning Dubai and event planning food checklist Dubai, this is the same service.',
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

const collectionSchema = {
  '@type': 'CollectionPage',
  name: 'Catering Guides Dubai',
  url: 'https://www.mychef.ae/guides',
  description: 'Free guides for planning catering in Dubai: prices, checklists, villa ideas, yacht catering, Ramadan, luxury dinners and more.',
}

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://www.mychef.ae/guides' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [collectionSchema, faqSchema, breadcrumbSchema],
}

export default function Guides() {
  useScrollTrigger()
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.guides-card', {
      scrollTrigger: { trigger: '.guides-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.guides-faq-item', {
      scrollTrigger: { trigger: '.guides-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.guides-services', {
      scrollTrigger: { trigger: '.guides-services', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })

    gsap.to('.guides-cta', {
      scrollTrigger: { trigger: '.guides-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Catering Checklist Dubai | Catering Guides Dubai | myCHEF"
        description="Catering Checklist Dubai — Free Dubai catering guides: prices, wedding and corporate checklists, villa ideas, yacht catering, Ramadan planning, private chef…"
        canonicalPath="/guides"
        ogImage="/service-catering.webp"
        schema={schema}
      />

      {/* ═══════════════ Hero ═══════════════ */}
      <PageHero
        eyebrow="Free Planning Resources"
        title="Catering Checklist Dubai"
        subtitle="Catering Checklist Dubai by myCHEF — Practical guides to help you plan private dining, events, weddings, corporate functions and celebrations across Dubai — from budgets and che"
        image="/images/guides-hub-dubai-hero.webp"
        imageAlt="Dubai catering guides"
        cta={{ label: 'Request a Custom Quote', href: '/inquiry' }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Guides' }]}
        minHeight="tall"
        overlay="dark"
      />

      {/* ═══════════════ Guides Grid ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[1100px]">
          <div className="text-center mb-12">
            <SectionLabel align="center">Browse by Topic</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              Everything You Need to Plan Catering in Dubai
            </h2>
          </div>

          <div className="guides-grid grid md:grid-cols-2 gap-6">
            {guides.map((guide, i) => {
              const Icon = guide.icon
              return (
                <Link
                  key={i}
                  to={guide.slug}
                  className="guides-card group flex gap-5 bg-cream p-6 border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] opacity-0 translate-y-10"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-black flex items-center justify-center">
                    <Icon size={22} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-h3 text-black mb-2 group-hover:text-gold transition-colors">
                      {guide.title}
                    </h3>
                    <p className="font-inter text-body-sm text-gray-500 leading-relaxed mb-3">
                      {guide.description}
                    </p>
                    <span className="inline-flex items-center gap-1 font-inter text-body-sm uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
                      Read Guide <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Related Services ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="guides-services opacity-0 translate-y-8">
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
              Catering Checklist Dubai: About Our Catering Guides
            </h2>
          </div>

          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* ═══════════════ Final CTA ═══════════════ */}
      <section className="guides-cta bg-gradient-to-b from-black to-charcoal py-20">
        <div className="container-custom text-center opacity-0 translate-y-8">
          <BookOpen size={40} className="text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-h2 text-white mb-4">
            Ready to Plan Your Event?
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Read the guides, then request a custom proposal. We design menus and service plans for villas, offices, yachts and event spaces across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary">
              Request My Custom Quote
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
