// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /venue-partners
//     primary:     "preferred caterer dubai"
//     subkeywords: "venue catering partnership dubai" · "approved caterer list dubai" · "venues that allow outside catering dubai" · "preferred caterer agreement" · "preferred caterer program" · "what does preferred caterer mean" · "preferred caterers"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { Anchor, Building2, Hotel, Briefcase } from 'lucide-react'
import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'
import TrustSignalStrip from '@/components/TrustSignalStrip'
import { breadcrumbSchema, organizationSchema } from '@/utils/schema'

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
    description: 'A private chef on a yacht you have chartered. We work with charter companies in Dubai on dining at sea. We do not operate the yacht.',
    partners: [
      {
        name: 'Xclusive Yachts',
        description: 'A private yacht charter fleet used for dinners and celebrations on the water.',
        location: 'Dubai Marina',
      },
      {
        name: 'Royal Yachts',
        description: 'Superyacht charters where we can cook and serve, if the operator allows outside catering.',
        location: 'Palm Jumeirah',
      },
      {
        name: 'Mala Yachts',
        description: 'Yacht charters with Dubai skyline views, used for private parties and corporate events.',
        location: 'Dubai Marina',
      },
    ],
  },
  {
    id: 'villas',
    title: 'Villas & Residences',
    icon: Building2,
    description: 'Beachfront houses and hillside villas used as the dining room. You or the rental manager hold the property. We bring the kitchen team.',
    partners: [
      {
        name: 'Emirates Hills Villa Management',
        description: 'Villas and estates in Emirates Hills used for private dinners and celebrations.',
        location: 'Emirates Hills',
      },
      {
        name: 'Palm Jumeirah Residences',
        description: 'Waterfront homes and penthouses with private pools and gardens, used as the dining room.',
        location: 'Palm Jumeirah',
      },
      {
        name: 'Jumeirah Luxury Villas',
        description: 'Villas in Jumeirah used for dinners, family celebrations and small guest lists.',
        location: 'Jumeirah',
      },
    ],
  },
  {
    id: 'hotels',
    title: 'Hotels & Event Spaces',
    icon: Hotel,
    description: 'Hotels and event spaces where outside catering is allowed, or where we can be put on an approved list.',
    partners: [
      {
        name: 'One&Only The Palm',
        description: 'A beachfront resort on Palm Jumeirah, used for private events when the venue allows outside catering.',
        location: 'Palm Jumeirah',
      },
      {
        name: 'Armani Hotel Dubai',
        description: 'Event spaces in Downtown Dubai, used when the hotel permits an outside catering team.',
        location: 'Burj Khalifa, Downtown Dubai',
      },
      {
        name: 'Dubai Opera',
        description: 'A performing arts venue with spaces used for gala dinners, receptions and corporate events.',
        location: 'Downtown Dubai',
      },
      {
        name: 'Museum of the Future',
        description: 'A venue on Sheikh Zayed Road used for launches, dinners and private tours, subject to the operator’s catering rules.',
        location: 'Sheikh Zayed Road',
      },
    ],
  },
  {
    id: 'corporate',
    title: 'Corporate Venues',
    icon: Briefcase,
    description: 'Meeting rooms, conference centres and offices. We cater. The venue is the client’s.',
    partners: [
      {
        name: 'Dubai World Trade Centre',
        description: 'Exhibition and conference spaces used for large corporate events and galas.',
        location: 'Trade Centre',
      },
      {
        name: 'DIFC Conference Centre',
        description: 'A business venue in DIFC used for board lunches, seminars and networking.',
        location: 'Dubai International Financial Centre',
      },
      {
        name: 'Emirates Towers Business Centre',
        description: 'Event spaces and executive dining rooms at a business address on Sheikh Zayed Road.',
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
  ],
}

export default function VenuePartners() {
  useScrollTrigger()
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
        title="Preferred Caterer Dubai | Venue Partners | myCHEF"
        description="Preferred Caterer Dubai: myCHEF cooks at yachts, villas, hotels and event spaces you have booked. Menus, service and clear-down. The venue stays yours."
        canonicalPath="/venue-partners"
        ogImage="/images/locations-dubai-hero.webp"
        schema={schema as Record<string, unknown>}
      />

      <PageHero
        eyebrow="PARTNER NETWORK"
        title="Preferred Caterer Dubai: Venue Partners"
        subtitle="Preferred Caterer Dubai means we cook at a venue you already have. Yacht charters, villas, hotels and event spaces. The venue stays yours; we bring the kitchen team."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Venue Partners' }]}
        minHeight="medium"
        overlay="dark"
        image="/images/locations-dubai-hero.webp"
        imageAlt="Venue dining room in Dubai where myCHEF caters"
      />

      <TrustSignalStrip />

      {/* Intro */}
      <section ref={introRef} className="bg-black section-padding">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <span className="reveal font-inter text-caption font-medium uppercase tracking-wider text-gold mb-4 block">
              WHAT A PREFERRED CATERER DOES
            </span>
            <h2 className="reveal font-playfair text-h2 text-white mb-6">
              Preferred Caterer Dubai: we cook at your venue
            </h2>
            <p className="reveal font-inter text-body text-gray-400">
              A preferred caterer agreement puts myCHEF on a venue’s approved list, or lets a host bring us in where
              outside catering is allowed. We supply the chef, the menu and the service team. Yacht charters, villa
              managers, hotel events teams and corporate venues use this when they need a kitchen they did not have
              to staff themselves.
            </p>
            <p className="reveal font-inter text-body-sm text-gray-500 mt-4">
              We are an independent private chef and catering service. Venue names shown are examples of
              Dubai locations where we regularly provide service; they do not imply an official
              partnership unless explicitly agreed in writing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { title: 'Logistics with the venue team', text: 'We work with venue teams on access, timings and service flow.' },
              { title: 'Menus written for the room', text: 'The menu follows the venue, the occasion and who is eating.' },
              { title: 'Service that matches the room', text: 'Styling and service planned against the space you already have.' },
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
                      to="/inquiry"
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
              Want your venue on an<br />
              <span className="text-gold">approved caterer list?</span>
            </h2>
            <p className="font-inter text-lg text-gray-400 max-w-[600px] mx-auto mb-10">
              Talk to us about a preferred caterer programme. Your guests get a chef and a service team. You keep the venue.
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
              <Link to="/inquiry" className="text-gold hover:underline">
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
