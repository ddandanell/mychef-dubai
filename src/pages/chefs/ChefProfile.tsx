import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Award, Calendar, ChefHat, Check } from 'lucide-react'
import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'
import { breadcrumbSchema } from '@/utils/schema'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const SITE_URL = 'https://mychef.ae'

export interface ChefProfileData {
  slug: string
  name: string
  title: string
  experience: string
  cuisine: string
  image: string
  imageAlt: string
  bio: string
  specialties: string[]
  sampleMenus: {
    title: string
    description: string
    items: string[]
  }[]
  certifications: string[]
  eventTypes: string[]
}

interface ChefProfileProps {
  chef: ChefProfileData
}

export default function ChefProfile({ chef }: ChefProfileProps) {
  const overviewRef = useRef<HTMLDivElement>(null)
  const menusRef = useRef<HTMLDivElement>(null)
  const detailsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const inquiryLink = `/inquiry?utm_source=mychef.ae&utm_medium=chef_profile&utm_campaign=${chef.slug.replace('/chefs/', '')}`
  const whatsappMessage = encodeURIComponent(
    `Hi myCHEF Dubai, I would like to inquire about Chef ${chef.name} (via mychef.ae${chef.slug})`
  )
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Our Chefs', path: '/our-chefs' },
    { name: chef.name, path: chef.slug },
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbSchema(breadcrumbs),
      {
        '@type': 'Person',
        name: chef.name,
        jobTitle: chef.title,
        description: `${chef.name} is a ${chef.cuisine} chef with ${chef.experience} of experience.`,
        image: `${SITE_URL}${chef.image}`,
        worksFor: {
          '@type': 'Organization',
          name: 'myCHEF Dubai',
          url: SITE_URL,
        },
        knowsAbout: chef.cuisine,
      },
    ],
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (overviewRef.current) {
        const image = overviewRef.current.querySelector('.overview-image')
        const content = overviewRef.current.querySelectorAll('.overview-content > *')

        if (image) {
          gsap.fromTo(
            image,
            { opacity: 0, x: -30 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: { trigger: overviewRef.current, start: 'top 80%' },
            }
          )
        }

        if (content.length > 0) {
          gsap.fromTo(
            content,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.1,
              duration: 0.7,
              ease: 'power3.out',
              scrollTrigger: { trigger: overviewRef.current, start: 'top 80%' },
            }
          )
        }
      }

      if (menusRef.current) {
        const cards = menusRef.current.querySelectorAll('.menu-card')
        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.12,
              duration: 0.7,
              ease: 'power3.out',
              scrollTrigger: { trigger: menusRef.current, start: 'top 80%' },
            }
          )
        }
      }

      if (detailsRef.current) {
        const blocks = detailsRef.current.querySelectorAll('.details-block')
        if (blocks.length > 0) {
          gsap.fromTo(
            blocks,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.15,
              duration: 0.7,
              ease: 'power3.out',
              scrollTrigger: { trigger: detailsRef.current, start: 'top 80%' },
            }
          )
        }
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
  }, [chef.slug])

  const firstName = chef.name.split(' ')[0]

  return (
    <>
      <SEO
        title={`${chef.name} | ${chef.title} | myCHEF Dubai`}
        description={`Meet ${chef.name}, ${chef.title} at myCHEF Dubai. ${chef.experience} of ${chef.cuisine} expertise for private dining, villas, yachts, and events across Dubai.`}
        canonicalPath={chef.slug}
        ogImage={chef.image}
        schema={schema as unknown as Record<string, unknown>}
      />

      <PageHero
        eyebrow="MEET THE CHEF"
        title={<>{chef.name}</>}
        subtitle={`${chef.title} • ${chef.cuisine}`}
        image={chef.image}
        imageAlt={chef.imageAlt}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Our Chefs', href: '/our-chefs' },
          { label: chef.name },
        ]}
        cta={{ label: `Request ${firstName}`, href: inquiryLink }}
        minHeight="medium"
        overlay="dark"
      />

      {/* Overview */}
      <section ref={overviewRef} className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-12 lg:gap-16 items-start">
            <div className="overview-image aspect-[3/4] overflow-hidden">
              <img
                src={chef.image}
                alt={chef.imageAlt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="overview-content">
              <span className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-4 block">
                {chef.title}
              </span>
              <h2 className="font-playfair text-h2 text-black mb-4">{chef.name}</h2>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="font-inter text-caption font-medium uppercase tracking-wider bg-charcoal text-gold px-3 py-1">
                  {chef.experience}
                </span>
                <span className="font-inter text-caption font-medium uppercase tracking-wider border border-gold/30 text-gold px-3 py-1">
                  {chef.cuisine}
                </span>
              </div>

              <p className="font-inter text-body text-gray-500 leading-relaxed mb-6">
                {chef.bio}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {chef.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="font-inter text-xs text-gold border px-3 py-1"
                    style={{ borderColor: 'rgba(200,164,92,0.3)' }}
                  >
                    {specialty}
                  </span>
                ))}
              </div>

              <Link to={inquiryLink} className="btn-primary">
                Request {firstName}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Menus */}
      <section ref={menusRef} className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-4 block">
              SIGNATURE CREATIONS
            </span>
            <h2 className="font-playfair text-h2 text-white mb-4">Sample Menus by {firstName}</h2>
            <p className="font-inter text-body text-gray-400 max-w-[640px] mx-auto">
              Every menu is fully bespoke. These examples show the style and range {firstName} brings to your table.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {chef.sampleMenus.map((menu, index) => (
              <div key={index} className="menu-card bg-charcoal p-8">
                <ChefHat size={32} className="text-gold mb-4" />
                <h3 className="font-playfair text-h4 text-white mb-2">{menu.title}</h3>
                <p className="font-inter text-body-sm text-gray-400 mb-5">{menu.description}</p>
                <ul className="space-y-2">
                  {menu.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 font-inter text-body-sm text-gray-400">
                      <Check size={16} className="text-gold flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Events */}
      <section ref={detailsRef} className="bg-cream section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <div className="details-block">
              <Award size={40} className="text-gold mb-4" />
              <h3 className="font-playfair text-h3 text-black mb-4">Certifications</h3>
              <ul className="space-y-3">
                {chef.certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-3 font-inter text-body text-gray-500">
                    <Check size={18} className="text-gold flex-shrink-0 mt-1" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            <div className="details-block">
              <Calendar size={40} className="text-gold mb-4" />
              <h3 className="font-playfair text-h3 text-black mb-4">Events Served</h3>
              <div className="flex flex-wrap gap-2">
                {chef.eventTypes.map((eventType) => (
                  <span
                    key={eventType}
                    className="font-inter text-xs text-gold border px-3 py-1"
                    style={{ borderColor: 'rgba(200,164,92,0.3)' }}
                  >
                    {eventType}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        ref={ctaRef}
        className="relative py-28 md:py-32 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)' }}
      >
        <div className="container-custom text-center">
          <div className="cta-content">
            <div className="gold-line mx-auto mb-8" />
            <h2 className="font-playfair text-h2 md:text-[48px] text-white mb-6">
              Book Chef {firstName}
            </h2>
            <p className="font-inter text-lg text-gray-400 max-w-[600px] mx-auto mb-10">
              Bring {chef.name} to your next event for a fully custom menu and flawless service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={inquiryLink} className="btn-primary">
                Request Custom Quote
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
