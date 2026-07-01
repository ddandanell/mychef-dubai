import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Anchor, Building2, Hotel, Briefcase } from 'lucide-react'
import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'
import { breadcrumbSchema, organizationSchema, localBusinessSchema } from '@/utils/schema'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to request a quote for a venue partner (via mychef.ae/venue-partners)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Venue Partners', path: '/venue-partners' },
]

const partnerCategories = [
  {
    id: 'yachts',
    title: 'Yachts',
    icon: Anchor,
    description: 'Set sail with a private chef on board. We work with leading yacht charter companies in Dubai to deliver refined dining at sea.',
    partners: [
      {
        name: 'Xclusive Yachts',
        description: 'A well-known private yacht charter fleet, offering luxury vessels for intimate dinners and celebrations on the water.',
        location: 'Dubai Marina',
      },
      {
        name: 'Royal Yachts',
        description: 'Ultra-luxury superyacht charters with premium catering and event-hosting capabilities across the Arabian Gulf.',
        location: 'Palm Jumeirah',
      },
      {
        name: 'Mala Yachts',
        description: 'Elegant yacht experiences with panoramic Dubai skyline views, ideal for private parties and corporate events.',
        location: 'Dubai Marina',
      },
    ],
  },
  {
    id: 'villas',
    title: 'Villas & Residences',
    icon: Building2,
    description: 'From beachfront estates to hillside retreats, our villa partners provide the perfect backdrop for bespoke private dining.',
    partners: [
      {
        name: 'Emirates Hills Villa Management',
        description: 'Exclusive collection of high-end villas and estates in Dubai’s most prestigious residential community.',
        location: 'Emirates Hills',
      },
      {
        name: 'Palm Jumeirah Residences',
        description: 'Luxury waterfront homes and penthouses with private pools, gardens, and stunning sea views.',
        location: 'Palm Jumeirah',
      },
      {
        name: 'Jumeirah Luxury Villas',
        description: 'Boutique selection of designer villas ideal for intimate dinners, family celebrations, and VIP gatherings.',
        location: 'Jumeirah',
      },
    ],
  },
  {
    id: 'hotels',
    title: 'Hotels & Event Spaces',
    icon: Hotel,
    description: 'Iconic hotels and unique event venues where our catering teams deliver refined cuisine and impeccable service.',
    partners: [
      {
        name: 'One&Only The Palm',
        description: 'An intimate beachfront resort on Palm Jumeirah, renowned for elegant private events and exceptional service.',
        location: 'Palm Jumeirah',
      },
      {
        name: 'Armani Hotel Dubai',
        description: 'Sophisticated events in the heart of Downtown Dubai, with sleek interiors and attentive hospitality.',
        location: 'Burj Khalifa, Downtown Dubai',
      },
      {
        name: 'Dubai Opera',
        description: 'A stunning performing arts venue with versatile spaces for gala dinners, receptions, and corporate events.',
        location: 'Downtown Dubai',
      },
      {
        name: 'Museum of the Future',
        description: 'One of the world’s most iconic landmarks, offering futuristic spaces for launches, dinners, and private tours.',
        location: 'Sheikh Zayed Road',
      },
    ],
  },
  {
    id: 'corporate',
    title: 'Corporate Venues',
    icon: Briefcase,
    description: 'Professional spaces for meetings, conferences, and corporate entertaining — all supported by tailored catering solutions.',
    partners: [
      {
        name: 'Dubai World Trade Centre',
        description: 'The region’s leading exhibition and conference venue, hosting large-scale corporate events and galas.',
        location: 'Trade Centre',
      },
      {
        name: 'DIFC Conference Centre',
        description: 'Premium business venue in Dubai’s financial district, ideal for board lunches, seminars, and networking events.',
        location: 'Dubai International Financial Centre',
      },
      {
        name: 'Emirates Towers Business Centre',
        description: 'Landmark business address offering refined event spaces and executive dining facilities.',
        location: 'Sheikh Zayed Road',
      },
    ],
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumbSchema(breadcrumbs),
    organizationSchema(),
    localBusinessSchema(),
  ],
}

function quoteLink(venueName: string, categoryTitle: string) {
  const encoded = encodeURIComponent(venueName)
  return `/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=venue-partners&utm_content=venue-${encoded}&utm_term=${encodeURIComponent(categoryTitle)}`
}

export default function VenuePartners() {
  const introRef = useRef<HTMLDivElement>(null)
  const categoriesRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (introRef.current) {
        gsap.fromTo(
          introRef.current.querySelectorAll('.reveal'),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: { trigger: introRef.current, start: 'top 80%' },
          }
        )
      }

      if (categoriesRef.current) {
        const sections = categoriesRef.current.querySelectorAll('.partner-category')
        sections.forEach((section) => {
          gsap.fromTo(
            section.querySelectorAll('.reveal-card'),
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.1,
              duration: 0.6,
              ease: 'power3.out',
              scrollTrigger: { trigger: section, start: 'top 80%' },
            }
          )
        })
      }

      if (ctaRef.current) {
        const children = ctaRef.current.querySelector('.cta-content')?.children
        if (children) {
          gsap.fromTo(
            children,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.15,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: { trigger: ctaRef.current, start: 'top 80%' },
            }
          )
        }
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <SEO
        title="Venue Partners | myCHEF Dubai | Preferred Catering Partners"
        description="Discover Dubai venues where myCHEF provides private chef and catering services. From yacht charters to luxury villas and event spaces, we cater at distinguished locations."
        canonicalPath="/venue-partners"
        ogImage="/images/locations-dubai-hero.webp"
        schema={schema as Record<string, unknown>}
      />

      <PageHero
        eyebrow="PARTNER NETWORK"
        title={<>Venue Partners</>}
        subtitle="Exceptional Dubai venues where our private chefs and catering teams regularly deliver bespoke service."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Venue Partners' }]}
        minHeight="medium"
        overlay="dark"
        image="/images/locations-dubai-hero.webp"
        imageAlt="Trusted venue partners for luxury catering dubai"
      />

      {/* Intro */}
      <section ref={introRef} className="bg-black section-padding">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <span className="reveal font-inter text-caption font-medium uppercase tracking-wider text-gold mb-4 block">
              WHY PARTNER WITH MYCHEF
            </span>
            <h2 className="reveal font-playfair text-h2 text-white mb-6">
              Preferred Catering Partners for Distinguished Dubai Venues
            </h2>
            <p className="reveal font-inter text-body text-gray-400">
              Our venue partner program brings together the best locations in Dubai with bespoke culinary
              experiences. Whether you are a yacht charter, a luxury villa manager, a hotel events team, or a
              corporate venue, we provide seamless private chef and catering services that elevate every guest
              experience.
            </p>
            <p className="reveal font-inter text-body-sm text-gray-500 mt-4">
              We are an independent private chef and catering service. Venue names shown are examples of
              distinguished Dubai locations where we regularly provide service; they do not imply an official
              partnership unless explicitly agreed in writing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { title: 'Seamless Coordination', text: 'We work directly with venue teams on logistics, timings, and service flow.' },
              { title: 'Bespoke Menus', text: 'Every menu is tailored to the venue, the occasion, and the guest profile.' },
              { title: 'Premium Presentation', text: 'Styling and service standards that match the prestige of your location.' },
            ].map((item) => (
              <div key={item.title} className="reveal p-6 border border-gold/20">
                <h4 className="font-playfair text-h4 text-gold mb-3">{item.title}</h4>
                <p className="font-inter text-body-sm text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section ref={categoriesRef} className="bg-charcoal section-padding">
        <div className="container-custom space-y-24">
          {partnerCategories.map(({ id, title, icon: Icon, description, partners }) => (
            <div key={id} className="partner-category">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={28} className="text-gold" />
                    <span className="font-inter text-caption font-medium uppercase tracking-wider text-gold">
                      {title}
                    </span>
                  </div>
                  <h3 className="font-playfair text-h3 text-white">{title}</h3>
                </div>
                <p className="font-inter text-body text-gray-400 max-w-xl md:text-right">
                  {description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="reveal-card group bg-black border border-gold/10 p-6 md:p-8 transition-all duration-300 hover:border-gold/40 hover:-translate-y-1"
                  >
                    <span className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-3 block">
                      {title}
                    </span>
                    <h4 className="font-playfair text-h4 text-white mb-3 group-hover:text-gold transition-colors">
                      {partner.name}
                    </h4>
                    <p className="font-inter text-body-sm text-gray-400 mb-4 leading-relaxed">
                      {partner.description}
                    </p>
                    <p className="font-inter text-xs text-gray-500 uppercase tracking-wider mb-6">
                      {partner.location}
                    </p>
                    <Link
                      to={quoteLink(partner.name, title)}
                      className="btn-primary w-full"
                    >
                      Request Quote for This Venue
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section
        ref={ctaRef}
        className="relative py-28 md:py-32 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)' }}
      >
        <div className="container-custom text-center">
          <div className="cta-content">
            <div className="gold-line mx-auto mb-8" />
            <h2 className="font-playfair text-h2 md:text-[48px] text-white mb-6">
              Want to Become a<br />
              <span className="text-gold">myCHEF Venue Partner?</span>
            </h2>
            <p className="font-inter text-lg text-gray-400 max-w-[600px] mx-auto mb-10">
              Join our network of leading Dubai venues and offer your guests an unforgettable private chef experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/partner-with-us"
                className="btn-primary"
              >
                Become a Partner
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Chat on WhatsApp
              </a>
            </div>
            <p className="mt-6 font-inter text-body-sm text-gray-500">
              Already have an event in mind?{' '}
              <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=venue-partners" className="text-gold hover:underline">
                Request a custom quote
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
