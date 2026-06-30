import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Calendar,
  Phone,
  ArrowRight,
  ChevronRight,
  Check,
} from 'lucide-react'
import SEO from '../../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like help planning wedding catering (via mychef.ae/wedding-catering-checklist-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const timeline = [
  {
    phase: '12 months before',
    tasks: ['Set a catering budget range per guest.', 'Shortlist caterers who know your venue type.', 'Decide on service format: buffet, plated, family-style, or mixed.', 'Book a tasting once your date and venue are confirmed.'],
  },
  {
    phase: '6 months before',
    tasks: ['Confirm menu direction and cuisine style.', 'Collect dietary requirements and allergies from the wedding party.', 'Decide on welcome drinks, bar service, and non-alcoholic options.', 'Agree staff numbers and service timing.'],
  },
  {
    phase: '3 months before',
    tasks: ['Finalise the menu and any live stations.', 'Order the wedding cake or dessert table.', 'Confirm rentals: tables, chairs, linens, glassware, and tableware.', 'Lock in final guest count and any children’s meals.'],
  },
  {
    phase: '1 month before',
    tasks: ['Review the final itemised quote and payment schedule.', 'Confirm arrival, setup, service, and breakdown times.', 'Share venue contact and load-in instructions.', 'Run through the event timeline with your event manager.'],
  },
  {
    phase: '1 week before',
    tasks: ['Confirm final guest numbers.', 'Reconfirm dietary requests and seating plan.', 'Check weather backup plan for outdoor elements.', 'Brief the bridal party on speech and cake-cutting timing.'],
  },
  {
    phase: 'Day-of',
    tasks: ['Caterer arrives and sets up according to the agreed timeline.', 'Service runs in sync with speeches, cake cutting, and dancing.', 'Staff manage clear-down discreetly during the evening.', 'Final walk-through with the venue and caterer.'],
  },
]

const menuDecisions = [
  { title: 'Cuisine style', note: 'Match the menu to your theme, heritage, and guest mix.' },
  { title: 'Service format', note: 'Plated, buffet, family-style, or a combination across courses.' },
  { title: 'Canapés & welcome drinks', note: 'Keep guests satisfied during photos and arrivals.' },
  { title: 'Dietary needs', note: 'Halal, vegetarian, vegan, gluten-free, and allergy-safe options.' },
  { title: 'Cake & desserts', note: 'Wedding cake, dessert table, or Arabic sweets station.' },
  { title: 'Bar service', note: 'Mocktails, soft drinks, or licensed alcohol service if permitted.' },
]

const dubaiConsiderations = [
  'Outdoor weddings from November to March are popular; plan heating and tenting for cooler evenings.',
  'Summer weddings rely heavily on indoor ballroom or fully cooled marquee setups.',
  'Resort and hotel venues often have approved supplier lists and kitchen access rules.',
  'Beach and desert venues require additional logistics for power, water, and transport.',
  'Timing around sunset can shape photography, service, and guest comfort.',
]

const internalLinks = [
  { title: 'Wedding Catering Dubai', link: '/wedding-catering-dubai', description: 'Full-service wedding menus and banquet catering.' },
  { title: 'Luxury Dining Dubai', link: '/luxury-dining-dubai', description: 'Elegant plated dinners and tasting menus.' },
  { title: 'Canapé Catering Dubai', link: '/canape-catering-dubai', description: 'Bite-sized reception menus and grazing tables.' },
  { title: 'Dessert Table Catering Dubai', link: '/dessert-table-catering-dubai', description: 'Wedding cakes and styled sweet tables.' },
  { title: 'Buffet Catering Dubai', link: '/buffet-catering-dubai', description: 'Buffet stations for large wedding receptions.' },
  { title: 'Dubai Catering Prices Guide', link: '/dubai-catering-prices-guide', description: 'Budget guidance for wedding catering in Dubai.' },
]

const faqs = [
  {
    q: 'When should I book wedding catering in Dubai?',
    a: 'Book your caterer six to twelve months ahead, especially for peak season from November to March. Popular venues and caterers fill quickly, and a longer lead time allows for tastings and detailed planning.',
  },
  {
    q: 'What service format works best for a Dubai wedding?',
    a: 'It depends on guest count and style. Plated service feels formal and elegant. Buffets offer variety and ease for large guest lists. Family-style or mixed formats combine the best of both.',
  },
  {
    q: 'How do we handle dietary requirements at a wedding?',
    a: 'Collect dietary needs with RSVPs and share them with your caterer early. A professional caterer will build halal, vegetarian, vegan, and allergen-free options into the menu without making guests feel singled out.',
  },
  {
    q: 'Is a wedding tasting necessary?',
    a: 'For large or high-budget weddings, yes. A tasting confirms flavour, portion size, presentation, and service flow. It is also the best time to refine the menu before the final sign-off.',
  },
  {
    q: 'What bar options are available for Dubai weddings?',
    a: 'Most wedding catering includes mocktails, fresh juices, and soft drinks. Alcohol service depends on the venue license. Your caterer or venue can advise on what is permitted and how to structure the bar.',
  },
  {
    q: 'Do you provide setup, service staff, and cleanup?',
    a: 'Yes. Full wedding catering includes setup, service staff, kitchen equipment, bar service, and clear-down. The exact team size is matched to your guest count and format.',
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

const articleSchema = {
  '@type': 'Article',
  headline: 'Wedding Catering Checklist for Dubai Celebrations',
  description: 'A timeline checklist for planning wedding catering in Dubai: menu decisions, tastings, dietary needs, bar service, cake, staff, rentals, setup, and cleanup.',
  author: { '@type': 'Organization', name: 'myCHEF Dubai' },
  publisher: { '@type': 'Organization', name: 'myCHEF Dubai', url: 'https://mychef.ae' },
}

const serviceSchema = {
  '@type': 'Service',
  name: 'Wedding Catering Checklist Dubai',
  serviceType: 'Catering Service',
  provider: {
    '@type': 'FoodService',
    name: 'myCHEF Dubai',
    url: 'https://mychef.ae',
    telephone: '+971-55-174-4849',
    areaServed: 'Dubai, UAE',
  },
  areaServed: 'Dubai, UAE',
}

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://mychef.ae/guides' },
    { '@type': 'ListItem', position: 3, name: 'Wedding Catering Checklist Dubai', item: 'https://mychef.ae/wedding-catering-checklist-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, articleSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function WeddingCateringChecklist() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.wed-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.wed-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.wed-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.wed-timeline-phase', {
      scrollTrigger: { trigger: '.wed-timeline', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
    })

    gsap.to('.wed-menu-item', {
      scrollTrigger: { trigger: '.wed-menu', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.wed-dubai-item', {
      scrollTrigger: { trigger: '.wed-dubai', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.wed-link-item', {
      scrollTrigger: { trigger: '.wed-links', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.wed-faq-item', {
      scrollTrigger: { trigger: '.wed-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.wed-cta', {
      scrollTrigger: { trigger: '.wed-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Wedding Catering Checklist Dubai | Planning Guide | myCHEF"
        description="A wedding catering checklist for Dubai celebrations: timeline, menu decisions, tastings, dietary needs, bar service, cake, rentals, staff, setup, and cleanup."
        canonicalPath="/wedding-catering-checklist-dubai"
        ogImage="/service-events.jpg"
        schema={schema}
      />

      {/* ═══════════════ Hero ═══════════════ */}
      <section className="relative min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/wedding-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 wed-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-[13px]">
              <li><Link to="/" className="text-[#A3A3A3] hover:text-gold transition-colors">Home</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><Link to="/guides" className="text-[#A3A3A3] hover:text-gold transition-colors">Guides</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><span className="text-gold">Wedding Catering Checklist Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-[40px] md:text-[56px] lg:text-[72px] font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 wed-hero-h1">
            Wedding Catering Checklist for Dubai Celebrations
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 wed-hero-sub">
            A step-by-step timeline for planning wedding catering in Dubai, from booking to the last dance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=wedding-catering-checklist-dubai" className="btn-primary opacity-0 translate-y-4 wed-hero-cta">Get My Custom Quote</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 wed-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════ Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
            PLANNING TIMELINE
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Stay Ahead of Every Catering Decision
          </h2>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed mb-5">
            Wedding catering is about more than food. It is the rhythm of the reception, the comfort of your guests, and the moment everyone raises a glass. A clear checklist keeps menu decisions, tastings, dietary needs, rentals, and staffing on track so nothing is left to the last minute.
          </p>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed">
            Use this timeline as a guide for Dubai weddings, whether you are hosting in a ballroom, beach resort, desert venue, or private villa.
          </p>
        </div>
      </section>

      {/* ═══════════════ Timeline ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              FROM 12 MONTHS TO DAY-OF
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Wedding Catering Timeline
            </h2>
          </div>

          <div className="wed-timeline space-y-6">
            {timeline.map((phase, i) => (
              <div key={i} className="wed-timeline-phase bg-charcoal p-8 opacity-0 translate-y-10">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar size={24} className="text-gold" />
                  <h3 className="font-playfair text-h3 text-white">{phase.phase}</h3>
                </div>
                <ul className="space-y-2">
                  {phase.tasks.map((task, j) => (
                    <li key={j} className="flex gap-3">
                      <Check size={18} className="text-gold flex-shrink-0 mt-0.5" />
                      <span className="font-inter text-body-sm text-[#A3A3A3] leading-relaxed">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Menu Decisions ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              MENU & SERVICE
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Key Menu Decisions
            </h2>
          </div>

          <div className="wed-menu grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuDecisions.map((item, i) => (
              <div key={i} className="wed-menu-item bg-white p-6 opacity-0 -translate-x-5">
                <h3 className="font-playfair text-h3 text-black mb-2">{item.title}</h3>
                <p className="font-inter text-body-sm text-[#737373] leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Dubai Considerations ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              DUBAI-SPECIFIC
            </span>
            <h2 className="font-playfair text-h2 text-black">
              What to Consider in Dubai
            </h2>
          </div>

          <div className="wed-dubai space-y-4">
            {dubaiConsiderations.map((item, i) => (
              <div key={i} className="wed-dubai-item flex gap-3 p-5 border border-[#E5E5E5] opacity-0 translate-y-5">
                <Check size={20} className="text-gold flex-shrink-0 mt-0.5" />
                <p className="font-inter text-body text-[#737373] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Why myCHEF ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              WHEN TO BOOK MYCHEF
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Wedding Catering Support at Every Stage
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Tasting-led menu development tailored to your wedding style.',
              'Itemised proposals for food, staff, rentals, bar, and cake.',
              'Experienced service teams for plated, buffet, and mixed formats.',
              'Dietary and halal requirements managed with care.',
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <Check size={20} className="text-gold flex-shrink-0 mt-0.5" />
                <p className="font-inter text-body text-[#A3A3A3] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Internal Links ═══════════════ */}
      <section className="bg-charcoal section-padding">
        <div className="container-custom">
          <h2 className="font-playfair text-h3 text-white text-center mb-10">
            Related Wedding Services & Guides
          </h2>

          <div className="wed-links grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {internalLinks.map((link, i) => (
              <Link
                key={i}
                to={link.link}
                className="wed-link-item group flex items-center justify-between bg-black p-6 opacity-0 hover:bg-[#222] transition-colors"
              >
                <div>
                  <h4 className="font-playfair text-h4 text-white mb-1">{link.title}</h4>
                  <p className="font-inter text-body-sm text-[#A3A3A3]">{link.description}</p>
                </div>
                <ArrowRight size={18} className="text-gold flex-shrink-0 ml-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-[36px] text-black text-center mb-10">
            Wedding Catering FAQ
          </h2>

          <div className="wed-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="wed-faq-item border border-[#E5E5E5] opacity-0 translate-y-5">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-inter text-base font-medium text-black pr-4">{faq.q}</span>
                  <ChevronRight
                    size={18}
                    className={`text-gold flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-90' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-5 pb-5">
                    <p className="font-inter text-body-sm text-[#737373] leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Final CTA ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center wed-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Start Planning Your Wedding Catering
          </h2>
          <p className="font-inter text-body-lg text-[#A3A3A3] max-w-[600px] mx-auto mb-8">
            Share your wedding date, venue, and vision. We will build a tailored catering plan and quote that matches your celebration.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=wedding-catering-checklist-dubai" className="btn-primary">Get My Custom Quote</Link>
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
