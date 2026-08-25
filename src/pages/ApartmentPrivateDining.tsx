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
const CAMPAIGN = 'apartment-private-dining'

const features = [
  {
    icon: Home,
    title: 'Designed for Apartments',
    description: 'Compact kitchen? No problem. Chefs in our network are experienced in apartment cooking and bring only what is needed, working cleanly and efficiently in smaller spaces.',
  },
  {
    icon: Users,
    title: 'Intimate Groups of 2–8',
    description: 'The perfect format for date nights, small celebrations, dinner with friends, or impressing clients without leaving your building.',
  },
  {
    icon: ChefHat,
    title: 'Full-Service Experience',
    description: 'The chef shops, cooks, serves, and cleans. You provide the table and the company; your chef handles everything that happens in the kitchen.'
  },
  {
    icon: Sparkles,
    title: 'Restaurant Quality at Home',
    description: 'Multi-course menus, beautiful plating, and professional service — without the taxi, the reservation, or the noisy dining room.',
  },
]

const menus = [
  {
    title: 'Date Night for Two',
    description: '3–4 courses with candlelit presentation. From AED 296 per person — final quote tailored to your menu.',
  },
  {
    title: 'Dinner with Friends',
    description: 'Shared plates and family-style service for 4–6 guests. From AED 250 per person — final quote tailored to your event.',
  },
  {
    title: 'Celebration Menu',
    description: '4–5 courses with dessert and celebration touches for birthdays and anniversaries. From AED 300 per person — final quote tailored to your event.',
  },
  {
    title: 'Tasting Menu',
    description: '5–7 courses for guests who want a refined, restaurant-style progression. From AED 450 per person — final quote tailored to your event.',
  },
]

const faqs = [
  {
    q: 'Will the chef fit in my apartment kitchen?',
    a: 'Yes. Chefs in our network are selected for adaptability and are comfortable working in Dubai apartment kitchens, including those in Dubai Marina, Downtown, JBR, Business Bay, and DIFC.',
  },
  {
    q: 'How many guests can an apartment dinner accommodate?',
    a: 'Typically 2–8 guests, depending on your dining area and kitchen size. For larger groups, we recommend villa private dining or event catering formats.',
  },
  {
    q: 'Do I need special equipment?',
    a: 'No. Chefs bring specialty tools and ingredients. We only ask that your oven, stovetop, and basic cookware are functional.',
  },
  {
    q: 'Is there a minimum spend?',
    a: 'Most apartment private dinners start from AED 1,200 total for two guests, depending on menu and cuisine. We provide a fixed, tailored quote before booking.',
  },
  {
    q: 'Can the chef cater to dietary requirements?',
    a: 'Absolutely. Halal, vegetarian, vegan, gluten-free, dairy-free, and allergy-specific menus are all available.',
  },
]

const relatedServices = [
  {
    title: 'Romantic Dinner Dubai',
    description: 'Intimate dining for two with candles, flowers, and a personalised menu.',
    image: '/images/romantic-dinner-dubai-hero.webp',
    link: '/romantic-dinner-dubai',
  },
  {
    title: 'Private Chef Dubai',
    description: 'Bespoke private chef services for homes, villas, and yachts across Dubai.',
    image: '/service-private-chef.webp',
    link: '/private-chef-dubai',
  },
  {
    title: 'Date Night Package',
    description: 'A ready-designed dinner-for-two experience at a transparent fixed price.',
    image: '/images/private-chef-dubai-hero.webp',
    link: '/date-night-package-dubai',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    serviceSchema(
      'Apartment Private Dining',
      'Apartment private dining in Dubai: restaurant-quality multi-course meals prepared by a private chef in your apartment for 2–8 guests.',
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

    gsap.to('.apd-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.apd-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.apd-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

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
        title="Private Chef for Apartment Dubai | Dining for 2–8 | myCHEF"
        description="Restaurant-quality private dining in your Dubai apartment. A private chef shops, cooks, serves, and cleans for intimate groups of 2–8 guests. Get a quote."
        canonicalPath={CANONICAL_PATH}
        ogImage="/service-private-chef.webp"
        hideSiteName
        schema={schema}
      />

      <section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/service-private-chef.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 apd-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Apartment Private Dining Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 apd-hero-h1">
            Private Chef for Apartment Dubai: Restaurant-Quality at Home
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 apd-hero-sub">
            Restaurant-quality multi-course dining for 2–8 guests, prepared in your own kitchen. No reservations, no travel, no compromise.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary opacity-0 translate-y-4 apd-hero-cta">Get My Apartment Dining Quote</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 apd-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <TrustSignalStrip />

      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <SectionLabel align="center">INTIMATE DINING</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Your Apartment, Your Private Restaurant
          </h2>
          <div className="apd-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Tell us about your apartment location, guest count, and occasion. We will bring you a vetted private chef within 24 hours and send a tailored, no-obligation quote — then you simply arrive at your dining table while the chef handles shopping, cooking, serving, and cleanup. Dubai Marina, Downtown, JBR, Business Bay, and DIFC apartments are ideal for this intimate format.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Chefs in our network are selected for their ability to work beautifully in compact spaces. They arrive with ingredients, prepare a multi-course menu, serve with care, and leave your kitchen spotless. All you need is a table, chairs, and good company.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              Explore <Link to="/romantic-dinner-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">romantic dinners</Link>, <Link to="/date-night-package-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">date night packages</Link>, <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private chef services</Link>, or <Link to="/part-time-private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">part-time private chef</Link> arrangements.
            </p>
          </div>
        </div>
      </section>

      <section className="apd-features bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center">WHY IT WORKS</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              Apartment Dining, Elevated
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
            <SectionLabel align="center" tone="dark">MENU IDEAS</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Formats for Every Occasion
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
            Apartment Dining Questions
          </h2>

          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="container-custom">
          <h3 className="font-playfair text-h3 text-white text-center mb-10">
            Related Services
          </h3>

          <div className="apd-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="apd-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center apd-cta opacity-0 translate-y-8">
          <ChefHat size={48} className="text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-h2 text-white mb-4">
            Book Apartment Private Dining
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us your apartment location, guest count, and occasion. We will bring you a chef who turns your home into the best dining room in Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary">Get My Apartment Dining Quote</Link>
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
