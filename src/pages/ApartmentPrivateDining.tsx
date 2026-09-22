import ServiceImage from '@/components/private-chef/ServiceImage'
import PageHero from '@/components/PageHero'
// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /apartment-private-dining-dubai
//     primary:     "private chef for apartment dubai"
//     subkeywords: "private chef apartment dubai price" · "best private chef for apartment dubai" · "apartment private dining packages dubai" · "apartment dinner party dubai" · "private dinner in dubai" · "chef to chef dubai" · "personal chef availability in dubai" · "private dining chef"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import {
  Home,
  Users,
  ChefHat,
  Sparkles,
  Phone,
  ArrowRight,
  Check,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '../utils/schema'
import FaqAccordion from '../components/FaqAccordion'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { SectionLabel } from '../components/system'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to book apartment private dining (via mychef.ae/apartment-private-dining-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CANONICAL_PATH = '/apartment-private-dining-dubai'

const features = [
  {
    icon: Home,
    title: 'Built for a compact kitchen',
    description: 'Marina, Downtown, JBR, Business Bay and DIFC apartments are the usual rooms. The chef brings what the kitchen does not have, and works cleanly in the space that is there.',
  },
  {
    icon: Users,
    title: 'Two to eight guests',
    description: 'Date night, a small table of friends, or a client dinner that should not leave the building. Larger groups belong on villa catering.',
  },
  {
    icon: ChefHat,
    title: 'One night, then clear-down',
    description: 'The chef shops if agreed, cooks, serves, and leaves the kitchen as found. This is catering in an apartment, not a standing household chef.',
  },
  {
    icon: Sparkles,
    title: 'Courses at your table',
    description: 'Chef-led plated dining, from AED 700 a person. Date Night for two is AED 1,200. You stay a guest. Nobody books a restaurant table.',
  },
]

const menus = [
  {
    title: 'Date Night for two',
    description: 'Three courses, cooked and served at home. AED 1,200 for two, the published Date Night package. VAT at 5%.',
  },
  {
    title: 'Dinner with friends',
    description: 'Chef-led plated dining for a small table. From AED 700 a person, two guests minimum. Groceries in the quote.',
  },
  {
    title: 'A celebration at the apartment table',
    description: 'Birthday or anniversary, still one night. From AED 700 a person plated, or Family Feast AED 2,400 for 6–8 if the table is sharing plates.',
  },
  {
    title: 'A longer tasting',
    description: 'More courses, same format: chef-led plated, from AED 700 a person. The written quote confirms the night.',
  },
]

const faqs = [
  {
    q: 'Will the chef fit in my apartment kitchen?',
    a: 'Yes. We cook in Dubai Marina, Downtown, JBR, Business Bay and DIFC apartments as a normal brief. The chef uses what is there and brings what is missing.',
  },
  {
    q: 'How many guests can an apartment dinner take?',
    a: 'Typically 2–8, depending on the dining area and the kitchen. Larger groups belong on villa catering.',
  },
  {
    q: 'Do I need special equipment?',
    a: 'No. We ask that the oven, hob and basic cookware work. Specialty tools come with the chef.',
  },
  {
    q: 'What is a private chef apartment Dubai price?',
    a: 'Date Night for two is AED 1,200. Chef-led plated dining starts from AED 700 a person. Groceries sit in the quote. VAT at 5% is shown on its own line. The figure is in writing before the night.',
  },
  {
    q: 'Can the chef cook around dietary requirements?',
    a: 'Halal, vegetarian, vegan, gluten-free, dairy-free and allergy notes go into the menu draft. Safety comes before preference if a request is professionally unsafe.',
  },
]

const relatedServices = [
  {
    title: 'Romantic Dinner Dubai',
    description: 'Dinner for two when the brief is the evening, not the apartment itself.',
    image: '/images/private-chef-2026/romantic-1200.webp',
    link: '/romantic-dinner-dubai',
  },
  {
    title: 'Private Chef Dubai',
    description: 'A standing household chef. One apartment dinner is catering, and stays on this page.',
    image: '/images/private-chef-2026/household-1200.webp',
    link: '/private-chef-dubai',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    serviceSchema(
      'Apartment Private Dining',
      'Private chef for apartment Dubai: one night, two to eight guests, cooked in your kitchen. Date Night AED 1,200 for two, or chef-led plated from AED 700 a person.',
      'Catering Service',
      'Dubai',
    ),
    faqPageSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Apartment Private Dining Dubai', path: CANONICAL_PATH },
    ]),
  ],
}

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'm interested in apartment private dining in Dubai. Date: __ Guests: __ Area: __"
export default function ApartmentPrivateDining() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return




    gsap.to('.apd-intro-text', {
      scrollTrigger: { trigger: '.apd-intro-text', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })

    gsap.to('.apd-feature-card', {
      scrollTrigger: { trigger: '.apd-features', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.apd-menu-item', {
      scrollTrigger: { trigger: '.apd-menus', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.apd-faq-item', {
      scrollTrigger: { trigger: '.apd-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.apd-rel-card', {
      scrollTrigger: { trigger: '.apd-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.apd-cta', {
      scrollTrigger: { trigger: '.apd-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Private Chef for Apartment Dubai | From AED 1,200 | myCHEF"
        description="Private chef for apartment Dubai: one night, two to eight guests. Date Night AED 1,200 for two, or plated from AED 700 a person. VAT 5%."
        canonicalPath={CANONICAL_PATH}
        ogImage="/images/private-chef-2026/household-1200.webp"
        hideSiteName
        schema={schema}
      />

      <PageHero eyebrow="MYCHEF · DUBAI" title="Private Chef for Apartment Dubai. A beautiful dinner, in your own space." subtitle="Private dining designed around your apartment, kitchen and guest list. We agree a suitable menu, staffing and timing before your chef arrives." cta={{label:"Plan with myCHEF",href:"/inquiry?from=ApartmentPrivateDining"}} secondaryCta={{label:"Explore experiences",href:"/luxury-dining-experiences"}}/>

      <TrustSignalStrip />

      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <SectionLabel align="center">ONE NIGHT, NOT A STANDING CHEF</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Private chef for apartment Dubai is catering in a compact kitchen
          </h2>
          <div className="apd-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              An apartment dinner brings restaurant-style care to the comfort of your own home. Your chef plans around the kitchen, guest count and menu, with service and clear-down arranged for the evening. For regular weekly cooking, explore our household chef plans.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Date Night is a defined three-course package at AED 1,200 for two. Bespoke chef-led plated menus are priced separately at AED 700–950 per person. Your proposal confirms the menu, service, ingredients and 5% VAT so the two options are easy to compare.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              See <Link to="/romantic-dinner-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">dinner for two</Link>, the <Link to="/guide/private-dining-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private dining guide</Link>, or the standing <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private chef Dubai</Link> household plan if the chef should come back.
            </p>
          </div>
        </div>
      </section>

      <section className="apd-features bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center">WHY THE APARTMENT WORKS</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              Compact kitchen, full clear-down
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="apd-feature-card bg-white p-8 opacity-0 translate-y-10">
                  <Icon size={32} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-black mb-3">{item.title}</h3>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="apd-menus bg-black section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">PUBLISHED STARTING POINTS</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Two published numbers. Then the quote.
            </h2>
          </div>

          <div className="apd-menu grid md:grid-cols-2 gap-6">
            {menus.map((item, i) => (
              <div key={i} className="apd-menu-item bg-charcoal p-8 opacity-0 translate-y-8">
                <Check size={24} className="text-gold mb-4" />
                <h3 className="font-playfair text-h3 text-white mb-3">{item.title}</h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            Questions before an apartment dinner
          </h2>

          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="container-custom">
          <h3 className="font-playfair text-h3 text-white text-center mb-10">
            Nearby pages
          </h3>

          <div className="apd-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="apd-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
              >
                <div className="aspect-video overflow-hidden">
                  <ServiceImage
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

      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center apd-cta opacity-0 translate-y-8">
          <ChefHat size={48} className="text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-h2 text-white mb-4">
            Book the apartment night
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Date, area, guest count and dietary notes. Date Night is AED 1,200 for two. Plated dining starts from AED 700 a person. The figure is in writing first.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry`} className="btn-primary">Get My Apartment Dining Quote</Link>
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
