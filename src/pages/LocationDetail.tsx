import { useRef, useState } from 'react'
import { useParams, Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  MapPin,
  Phone,
  Check,
  ChevronRight,
  ArrowRight,
  UtensilsCrossed,
  Users,
  Calendar,
  Clock,
  Star,
  Home,
  Building,
  Ship,
  PartyPopper,
  Heart,
} from 'lucide-react'
import SEO from '../components/SEO'
import allLocations from '../data/locations.ts'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'

const slugAliases: Record<string, string> = {
  'jbr': 'jbr',
}

const iconMap: Record<string, React.ElementType> = {
  'Private Chef Dubai': Users,
  'Catering Dubai': UtensilsCrossed,
  'Luxury Dining': Star,
  'Villa Dining': Home,
  'Yacht Catering': Ship,
  'Corporate Catering': Building,
  'Party Catering': PartyPopper,
  'Wedding Catering': Heart,
  'Birthday Catering': PartyPopper,
  'Business Lunch': Clock,
  'Office Catering': Building,
  'BBQ Catering': UtensilsCrossed,
  'Canapé Catering': UtensilsCrossed,
  'Private Chef': Users,
  Catering: UtensilsCrossed,
  Events: Calendar,
  Corporate: Building,
}

export default function LocationDetail() {
  const { slug } = useParams<{ slug: string }>()
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const canonicalSlug = slug ? slugAliases[slug] || slug : ''
  const loc = allLocations.find((l) => l.slug === canonicalSlug)

  const whatsappLink = loc
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        loc.callToAction.whatsappMessage
      )}`
    : `https://wa.me/${WHATSAPP_NUMBER}`

  useGSAP(
    () => {
      if (!containerRef.current || !loc) return

      gsap.to('.loc-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
      gsap.to('.loc-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
      gsap.to('.loc-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

      gsap.to('.loc-section', {
        scrollTrigger: { trigger: '.loc-section', start: 'top 85%', toggleActions: 'play none none none' },
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
      })

      gsap.to('.loc-card', {
        scrollTrigger: { trigger: '.loc-cards', start: 'top 85%', toggleActions: 'play none none none' },
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
      })

      gsap.to('.loc-faq-item', {
        scrollTrigger: { trigger: '.loc-faq', start: 'top 85%', toggleActions: 'play none none none' },
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
      })

      gsap.to('.loc-link', {
        scrollTrigger: { trigger: '.loc-links', start: 'top 85%', toggleActions: 'play none none none' },
        opacity: 1,
        duration: 0.5,
        stagger: 0.04,
        ease: 'power3.out',
      })

      gsap.to('.loc-cta', {
        scrollTrigger: { trigger: '.loc-cta', start: 'top 85%', toggleActions: 'play none none none' },
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
      })
    },
    { scope: containerRef, dependencies: [loc] }
  )

  if (!loc) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-center px-4">
        <div>
          <h1 className="font-playfair text-3xl text-white mb-4">Location Not Found</h1>
          <p className="text-gray-400 mb-8">We serve all of Dubai. Explore our locations or contact us directly.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/locations" className="btn-primary">View All Locations</Link>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    )
  }

  const pageUrl = `https://mychef.ae/locations/${loc.slug}`

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: `Private Chef & Catering ${loc.name}`,
        description: loc.metaDescription,
        serviceType: 'Catering Service',
        provider: {
          '@type': 'FoodService',
          name: 'myCHEF Dubai',
          url: 'https://mychef.ae',
          telephone: '+971-55-174-4849',
          areaServed: 'Dubai, UAE',
        },
        areaServed: {
          '@type': 'Place',
          name: loc.name,
          address: {
            '@type': 'PostalAddress',
            addressLocality: loc.name,
            addressCountry: 'AE',
          },
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: loc.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.ae/' },
          { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://mychef.ae/locations' },
          { '@type': 'ListItem', position: 3, name: loc.name, item: pageUrl },
        ],
      },
      {
        '@type': 'LocalBusiness',
        name: 'myCHEF Dubai',
        url: 'https://mychef.ae',
        telephone: '+971-55-174-4849',
        email: 'hallo@mychef.ae',
        image: `https://mychef.ae${loc.heroImage}`,
        priceRange: '$$$$',
        areaServed: {
          '@type': 'Place',
          name: loc.name,
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Dubai',
          addressCountry: 'AE',
        },
      },
    ],
  }

  return (
    <div ref={containerRef}>
      <SEO
        title={loc.title}
        description={loc.metaDescription}
        canonicalPath={`/locations/${loc.slug}`}
        ogImage={loc.heroImage}
        schema={schema}
      />

      {/* Hero */}
      <section className="relative min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: `url(${loc.heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[900px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 loc-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-[13px]">
              <li><Link to="/" className="text-[#A3A3A3] hover:text-gold transition-colors">Home</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><Link to="/locations" className="text-[#A3A3A3] hover:text-gold transition-colors">Locations</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><span className="text-gold">{loc.name}</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-[40px] md:text-[56px] lg:text-[72px] font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 loc-hero-h1">
            {loc.h1}
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[700px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 loc-hero-sub">
            {loc.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary opacity-0 translate-y-4 loc-hero-cta">
              Request a Custom Quote
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 loc-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="loc-section opacity-0 translate-y-8">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              Private Chef & Catering {loc.name}
            </span>
            <h2 className="font-playfair text-h2 text-black mb-8">
              {loc.uniqueAngle}
            </h2>
            <div className="space-y-5">
              {loc.intro.map((paragraph, i) => (
                <p key={i} className="font-inter text-body-lg text-[#4A4A4A] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Property Type + Target Audience */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="loc-section opacity-0 translate-y-8">
              <div className="flex items-center gap-3 mb-4">
                <Home size={28} className="text-gold" />
                <h2 className="font-playfair text-h3 text-white">Properties We Serve in {loc.name}</h2>
              </div>
              <p className="font-inter text-body-lg text-[#A3A3A3] leading-relaxed">
                {loc.propertyType}
              </p>
            </div>

            <div className="loc-section opacity-0 translate-y-8">
              <div className="flex items-center gap-3 mb-4">
                <Users size={28} className="text-gold" />
                <h2 className="font-playfair text-h3 text-white">{loc.targetAudience.title}</h2>
              </div>
              <div className="space-y-4">
                {loc.targetAudience.paragraphs.map((paragraph, i) => (
                  <p key={i} className="font-inter text-body text-[#A3A3A3] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Inclusions */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="loc-section opacity-0 translate-y-8 text-center mb-12">
            <h2 className="font-playfair text-h2 text-black">{loc.serviceInclusions.title}</h2>
          </div>
          <div className="loc-cards grid md:grid-cols-2 gap-5">
            {loc.serviceInclusions.items.map((item, i) => (
              <div key={i} className="loc-card flex gap-3 opacity-0 translate-y-6">
                <Check size={20} className="text-gold flex-shrink-0 mt-0.5" />
                <p className="font-inter text-body text-black leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Options */}
      <section className="bg-charcoal section-padding">
        <div className="container-custom">
          <div className="loc-section opacity-0 translate-y-8 max-w-[900px] mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">Menus</span>
            <h2 className="font-playfair text-h2 text-white mb-6">{loc.menuOptions.title}</h2>
            <div className="space-y-4 mb-8">
              {loc.menuOptions.paragraphs.map((paragraph, i) => (
                <p key={i} className="font-inter text-body text-[#A3A3A3] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="loc-cards grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {loc.menuOptions.cuisines.map((cuisine, i) => (
              <div
                key={i}
                className="loc-card bg-black border border-white/10 p-5 text-center opacity-0 translate-y-6"
              >
                <UtensilsCrossed size={24} className="text-gold mx-auto mb-3" />
                <p className="font-inter text-sm text-white">{cuisine}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="loc-section opacity-0 translate-y-8 text-center mb-12">
            <h2 className="font-playfair text-h2 text-black">{loc.howItWorks.title}</h2>
          </div>
          <div className="loc-cards grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loc.howItWorks.steps.map((step, i) => (
              <div
                key={i}
                className="loc-card bg-cream p-8 opacity-0 translate-y-6"
              >
                <span className="font-playfair text-[48px] text-gold/30 leading-none block mb-4">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-inter text-base font-semibold text-black mb-2">{step.title}</h3>
                <p className="font-inter text-body-sm text-[#737373] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="loc-section opacity-0 translate-y-8">
            <h2 className="font-playfair text-h2 text-white mb-8">{loc.whyChoose.title}</h2>
            <div className="space-y-5">
              {loc.whyChoose.paragraphs.map((paragraph, i) => (
                <p key={i} className="font-inter text-body-lg text-[#A3A3A3] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="loc-section opacity-0 translate-y-8 text-center mb-12">
            <h2 className="font-playfair text-h2 text-black">{loc.useCases.title}</h2>
          </div>
          <div className="loc-cards grid md:grid-cols-2 gap-6">
            {loc.useCases.cases.map((useCase, i) => (
              <div
                key={i}
                className="loc-card bg-white p-8 border border-[#E5E5E5] opacity-0 translate-y-6"
              >
                <h3 className="font-playfair text-h4 text-black mb-3">{useCase.title}</h3>
                <p className="font-inter text-body text-[#737373] leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics */}
      <section className="bg-charcoal section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="loc-section opacity-0 translate-y-8">
            <div className="flex items-center gap-3 mb-6">
              <MapPin size={28} className="text-gold" />
              <h2 className="font-playfair text-h2 text-white">{loc.logistics.title}</h2>
            </div>
            <div className="space-y-4">
              {loc.logistics.paragraphs.map((paragraph, i) => (
                <p key={i} className="font-inter text-body text-[#A3A3A3] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Locations */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="loc-section opacity-0 translate-y-8 text-center mb-12">
            <h2 className="font-playfair text-h2 text-black">Also Serving Near {loc.name}</h2>
          </div>
          <div className="loc-links grid md:grid-cols-3 gap-6">
            {loc.nearbyLocations.map((nearby, i) => (
              <Link
                key={i}
                to={`/locations/${nearby.slug}`}
                className="loc-link group bg-cream p-6 hover:bg-black transition-all duration-300 opacity-0"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-playfair text-h4 text-black group-hover:text-white transition-colors">
                    {nearby.name}
                  </h3>
                  <ArrowRight size={18} className="text-gold" />
                </div>
                <p className="font-inter text-body-sm text-[#737373] group-hover:text-[#A3A3A3] transition-colors">
                  {nearby.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="loc-section opacity-0 translate-y-8 text-center mb-12">
            <h2 className="font-playfair text-h2 text-white">Explore Our Services</h2>
          </div>
          <div className="loc-links grid grid-cols-2 md:grid-cols-4 gap-4">
            {loc.relatedServices.map((service, i) => {
              const Icon = iconMap[service.name] || UtensilsCrossed
              return (
                <Link
                  key={i}
                  to={service.path}
                  className="loc-link group bg-charcoal p-6 text-center hover:bg-charcoal-light transition-all duration-300 opacity-0"
                >
                  <Icon size={28} className="text-gold mx-auto mb-3" />
                  <p className="font-inter text-sm text-white group-hover:text-gold transition-colors">
                    {service.name}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Related Events */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="loc-section opacity-0 translate-y-8 text-center mb-12">
            <h2 className="font-playfair text-h2 text-black">Popular Events in {loc.name}</h2>
          </div>
          <div className="loc-links flex flex-wrap justify-center gap-3">
            {loc.relatedEvents.map((event, i) => (
              <Link
                key={i}
                to={event.path}
                className="loc-link inline-flex items-center gap-2 px-6 py-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 opacity-0"
              >
                <Calendar size={16} />
                <span className="font-inter text-sm uppercase tracking-wider">{event.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <div className="loc-section opacity-0 translate-y-8 text-center mb-10">
            <h2 className="font-playfair text-[36px] text-black">Questions About {loc.name} Catering</h2>
          </div>
          <div className="loc-faq space-y-3">
            {loc.faqs.map((faq, i) => (
              <div key={i} className="loc-faq-item border border-[#E5E5E5] opacity-0 translate-y-5">
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

      {/* Final CTA */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center loc-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">{loc.callToAction.title}</h2>
          <p className="font-inter text-body-lg text-[#A3A3A3] max-w-[600px] mx-auto mb-8">
            {loc.callToAction.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary">
              Request My Custom Quote
            </Link>
            <a
              href={whatsappLink}
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
