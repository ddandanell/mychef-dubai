import { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { Check, Phone, ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import LocationStrip from '../components/LocationStrip'
import TrustSignalStrip from '../components/TrustSignalStrip'
import FaqAccordion from '../components/FaqAccordion'
import { plainFaqAnswer } from '../utils/schema'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { deferNonCritical } from '../lib/deferNonCritical'
import {
  CAMPAIGN,
  H1,
  HERO_IMAGE,
  HERO_IMAGE_HEIGHT,
  HERO_IMAGE_WIDTH,
  HERO_SUBTITLE,
  PAGE_PATH,
  photos,
  SEO_DESCRIPTION,
  SEO_TITLE,
  WHATSAPP_MESSAGE,
  WHATSAPP_NUMBER,
  chefLevels,
  comparison,
  dailyRates,
  doPromise,
  dontPromise,
  eveningPackages,
  extraTeam,
  faqs,
  featuredChefs,
  formatAed,
  householdIncludes,
  inspectUs,
  lifeStages,
  locations,
  pageSequence,
  paths,
  perPersonBands,
  processSteps,
  profileQuestions,
  proofItems,
  relatedServices,
  upgrades,
  vettingSteps,
  weekInTheHouse,
  whatThisIs,
  whenThingsChange,
  whoDoesWhat,
  whoFor,
  type ChefLevelName,
  type MealPlan,
} from '../content/privateChefPage'

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
const INQUIRY_LINK = `/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`

const mealLabels: Record<MealPlan, string> = {
  '1': '1 meal / day',
  '2': '2 meals / day',
  full: 'Full day · 3 meals',
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Private Chef Dubai',
      serviceType: 'Private Chef Service',
      provider: {
        '@type': 'Organization',
        name: 'myCHEF Dubai',
        url: 'https://www.mychef.ae',
        telephone: '+971-55-174-4849',
        areaServed: 'Dubai, UAE',
      },
      areaServed: 'Dubai, UAE',
      description:
        'myCHEF organises vetted independent chefs for private chef dinners and standing household arrangements in Dubai homes, villas and yachts.',
    },
    {
      '@type': 'AggregateOffer',
      name: 'Private chef evenings in Dubai',
      description:
        'Starting prices for a private chef dinner in Dubai. Groceries included in the evening quote. Final quotes depend on guests, menu and service.',
      url: 'https://www.mychef.ae/private-chef-dubai',
      priceCurrency: 'AED',
      lowPrice: '1200',
      highPrice: '5500',
      availability: 'https://schema.org/InStock',
    },
    {
      '@type': 'AggregateOffer',
      name: 'Private chef household arrangements in Dubai',
      description:
        'Starting daily and monthly prices for a standing private chef arrangement. Groceries separate. Standard schedule is 5 service days per week. Daily figures are effective rates on an ongoing plan of about 20 service days, not isolated one-day tickets.',
      url: 'https://www.mychef.ae/private-chef-dubai#household',
      priceCurrency: 'AED',
      lowPrice: '900',
      highPrice: '100000',
      availability: 'https://schema.org/InStock',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: plainFaqAnswer(faq.a) },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
        { '@type': 'ListItem', position: 2, name: 'Private Chef Dubai', item: 'https://www.mychef.ae/private-chef-dubai' },
      ],
    },
  ],
}

function FillFrame({
  src,
  alt,
  width,
  height,
  className = '',
  eager = false,
  objectPosition = 'center',
}: {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  eager?: boolean
  objectPosition?: string
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition }}
        loading={eager ? 'eager' : 'lazy'}
        {...(eager ? { fetchPriority: 'high' as const } : {})}
        decoding="async"
      />
    </div>
  )
}

function PathSwitcher({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-black border-y border-gold/25 ${className}`}>
      <div className="container-custom py-3 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3 sm:gap-6">
        <p className="font-inter text-caption uppercase tracking-wider text-gold text-center">What do you need?</p>
        <div className="flex justify-center gap-2">
          <a href="#evening" className="px-4 py-2 font-inter text-body-sm uppercase tracking-wider border border-gold text-gold hover:bg-gold hover:text-black transition-colors">
            One evening
          </a>
          <a href="#household" className="px-4 py-2 font-inter text-body-sm uppercase tracking-wider border border-gold text-gold hover:bg-gold hover:text-black transition-colors">
            Ongoing household
          </a>
        </div>
      </div>
    </div>
  )
}

function QuotePair() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Link to={INQUIRY_LINK} className="btn-primary">
        Get My Private Chef Quote
      </Link>
      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary">
        <Phone size={16} className="mr-2" />
        Chat on WhatsApp
      </a>
    </div>
  )
}

export default function PrivateChef() {
  useScrollTrigger()
  useWhatsAppMessage(WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)
  const [level, setLevel] = useState<ChefLevelName>('Private')
  const [meals, setMeals] = useState<MealPlan>('2')

  const quote = useMemo(() => {
    const daily = dailyRates[level][meals]
    return {
      daily,
      weekly: daily * 5,
      monthly: daily * 20,
    }
  }, [level, meals])

  useGSAP(() => {
    if (!containerRef.current) return
    deferNonCritical(() => {
      gsap.to('.pc-fade', {
        scrollTrigger: { trigger: '.pc-fade', start: 'top 88%', toggleActions: 'play none none none' },
        opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
      })
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title={SEO_TITLE}
        description={SEO_DESCRIPTION}
        canonicalPath={PAGE_PATH}
        ogImage={HERO_IMAGE}
        hideSiteName
        preloadHero={HERO_IMAGE}
        schema={schema}
      />

      <PageHero
        title={H1}
        subtitle={HERO_SUBTITLE}
        image={HERO_IMAGE}
        imageAlt={photos[0].alt}
        imageWidth={HERO_IMAGE_WIDTH}
        imageHeight={HERO_IMAGE_HEIGHT}
        cta={{ label: 'Get My Private Chef Quote', href: INQUIRY_LINK }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Private Chef Dubai' }]}
        minHeight="large"
        overlay="dark"
      >
        <div className="mt-10 grid sm:grid-cols-2 gap-4 w-full max-w-3xl mx-auto text-left">
          {paths.map((path) => (
            <a
              key={path.id}
              href={`#${path.id}`}
              className="block bg-black/55 border border-gold/40 hover:border-gold p-5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <span className="font-inter text-caption uppercase tracking-wider text-gold">{path.eyebrow}</span>
              <p className="font-playfair text-h4 text-white mt-2">{path.title}</p>
              <p className="font-inter text-body-sm text-white/80 mt-2 leading-relaxed">{path.body}</p>
            </a>
          ))}
        </div>
      </PageHero>
      <TrustSignalStrip />
      <PathSwitcher className="sticky top-16 z-30" />

      <nav aria-label="Page sections" className="bg-charcoal border-b border-white/10">
        <div className="container-custom py-4 overflow-x-auto">
          <ol className="flex gap-4 min-w-max md:min-w-0 md:flex-wrap md:justify-center">
            {pageSequence.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="flex items-baseline gap-2 font-inter text-caption uppercase tracking-wider text-gray-400 hover:text-gold transition-colors">
                  <span className="text-gold">{item.n}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* 01 What myCHEF is */}
      <section id="what-this-is" className="bg-white scroll-mt-24">
        <div className="grid lg:grid-cols-2 min-h-[70vh] lg:min-h-[85vh]">
          <div className="flex items-center section-padding order-2 lg:order-1">
            <div className="max-w-[560px] mx-auto lg:ml-auto lg:mr-16">
              <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">What myCHEF is</span>
              <h2 className="font-playfair text-h2 text-black mb-6">The system, not just a chef</h2>
              {whatThisIs.map((para) => (
                <p key={para.slice(0, 40)} className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5 last:mb-0">
                  {para}
                </p>
              ))}
            </div>
          </div>
          <FillFrame
            src={photos[1].src}
            alt={photos[1].alt}
            width={photos[1].width}
            height={photos[1].height}
            className="min-h-[50vh] lg:min-h-full order-1 lg:order-2"
          />
        </div>
      </section>

      {/* 02 Which service */}
      <section id="which-service" className="bg-cream section-padding scroll-mt-24">
        <div className="container-custom">
          <div className="text-center max-w-[760px] mx-auto mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">Which service</span>
            <h2 className="font-playfair text-h2 text-black">You want a chef. The question is whether you want to manage one.</h2>
            <p className="font-inter text-body text-gray-500 mt-4 leading-relaxed">
              Two products. Keep them apart in your head: one evening, or an ongoing household. They are psychologically different purchases — a night you host, versus a house that no longer thinks about food. Everything below follows one of those two paths.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <a href="#evening" className="font-inter text-caption uppercase tracking-wider text-gold mb-4 inline-block">One evening →</a>
              <div className="space-y-4">
                {whoFor.filter((item) => item.path === 'evening').map((item) => (
                  <div key={item.title} className="bg-white p-6 border border-gray-200">
                    <h3 className="font-playfair text-h4 text-black mb-2">{item.title}</h3>
                    <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <a href="#household" className="font-inter text-caption uppercase tracking-wider text-gold mb-4 inline-block">Ongoing household →</a>
              <div className="space-y-4">
                {whoFor.filter((item) => item.path === 'household').map((item) => (
                  <div key={item.title} className="bg-white p-6 border border-gray-200">
                    <h3 className="font-playfair text-h4 text-black mb-2">{item.title}</h3>
                    <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 Why not hire independently */}
      <section id="why-not-hire" className="bg-black section-padding scroll-mt-24">
        <div className="container-custom">
          <div className="text-center max-w-[720px] mx-auto mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">Why not hire independently</span>
            <h2 className="font-playfair text-h2 text-white">A freelancer can look cheaper on day one</h2>
            <p className="font-inter text-body text-gray-400 mt-4 leading-relaxed">
              You are paying for the person only. Finding, backup, quality, specialists, paperwork and the real cost of covering a Sunday are unpaid work — yours. myCHEF is the person plus the system that makes the person usable.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b border-gold/30">
                  <th className="py-4 pr-6 font-inter text-caption uppercase tracking-wider text-gold">Compared</th>
                  <th className="py-4 pr-6 font-inter text-caption uppercase tracking-wider text-gray-400">On your own</th>
                  <th className="py-4 font-inter text-caption uppercase tracking-wider text-gold">With myCHEF</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.topic} className="border-b border-white/10 align-top">
                    <th className="py-5 pr-6 font-playfair text-h4 text-white font-normal">{row.topic}</th>
                    <td className="py-5 pr-6 font-inter text-body-sm text-gray-400 leading-relaxed">{row.alone}</td>
                    <td className="py-5 font-inter text-body-sm text-gray-200 leading-relaxed">{row.mychef}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 04 How it works */}
      <section id="how-it-works" className="bg-cream section-padding scroll-mt-24">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-h2 text-black text-center mb-4">How a private chef through myCHEF works</h2>
          <p className="font-inter text-body text-gray-500 text-center max-w-[640px] mx-auto mb-12 leading-relaxed">
            Five steps. The same sequence whether you are booking one dinner or a house that eats here every weekday.
          </p>
          <div className="space-y-10">
            {processSteps.map((step) => (
              <div key={step.num} className="pc-fade opacity-0 translate-y-8 flex gap-6 md:gap-8">
                <span className="font-playfair text-[48px] text-gold leading-none flex-shrink-0 w-[60px] text-right">{step.num}</span>
                <div>
                  <h3 className="font-playfair text-h3 text-black mb-2">{step.title}</h3>
                  <p className="font-inter text-body text-gray-500 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-12 font-inter text-body-sm text-gray-500 text-center max-w-[640px] mx-auto">
            One evening: often 48 hours. A new household: about five days. Once we know you, two days is often enough. During business hours we typically reply within 15 minutes.
          </p>
        </div>
      </section>

      {/* 05 The life you are buying */}
      <section id="the-life" className="bg-charcoal section-padding scroll-mt-24">
        <div className="container-custom">
          <div className="max-w-[760px] mx-auto text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">What this looks like</span>
            <h2 className="font-playfair text-h2 text-white mb-6">You are not buying a Food Profile</h2>
            <p className="font-inter text-body-lg text-gray-300 leading-relaxed">
              Monday morning, breakfast appears exactly how they like it. The children get food they will actually eat. Friday they suddenly want Japanese. Friends come Saturday. The usual chef takes Sunday off. Nobody in the family needs to coordinate any of it. That is the life. The Food Profile is only how we remember it.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {lifeStages.map((stage) => (
              <div key={stage.when} className="border border-gold/25 p-8 bg-black/40">
                <p className="font-inter text-caption uppercase tracking-wider text-gold mb-3">{stage.when}</p>
                <h3 className="font-playfair text-h3 text-white mb-4">{stage.title}</h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{stage.body}</p>
              </div>
            ))}
          </div>
          <div className="max-w-[800px] mx-auto">
            <h3 className="font-playfair text-h3 text-white text-center mb-8">A week in the house</h3>
            <ol className="space-y-0">
              {weekInTheHouse.map((item, i) => (
                <li key={item.day} className="grid md:grid-cols-[160px_1fr] gap-3 md:gap-8 py-5 border-t border-white/10 last:border-b">
                  <p className="font-inter text-caption uppercase tracking-wider text-gold pt-1">{item.day}</p>
                  <p className="font-inter text-body text-gray-300 leading-relaxed">{item.body}</p>
                  <span className="sr-only">Day {i + 1}</span>
                </li>
              ))}
            </ol>
            <p className="mt-10 font-playfair text-h4 text-white text-center leading-relaxed">
              After a year you should not be re-explaining breakfast.
            </p>
          </div>
        </div>
      </section>

      {/* Who does what */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <h2 className="font-playfair text-h2 text-black text-center mb-4">Who does what</h2>
          <p className="font-inter text-body text-gray-500 text-center max-w-[640px] mx-auto mb-12 leading-relaxed">
            The split is the product. If you end up doing the chef’s job or our job, the service has failed.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {whoDoesWhat.map((col) => (
              <div key={col.who} className="border border-gray-200 p-8">
                <h3 className="font-playfair text-h3 text-black mb-6">{col.who}</h3>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check size={16} className="text-gold mt-1 flex-shrink-0" />
                      <span className="font-inter text-body-sm text-gray-500">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 font-inter text-body-sm text-gray-500 text-center">
            You manage what you want to eat, when, and whether the match is right. That is the list.
          </p>
        </div>
      </section>

      {/* 06 The chefs */}
      <section id="the-chefs" className="bg-black scroll-mt-24">
        <div className="grid lg:grid-cols-2 min-h-[70vh] lg:min-h-[90vh]">
          <FillFrame
            src={photos[4].src}
            alt={photos[4].alt}
            width={photos[4].width}
            height={photos[4].height}
            className="min-h-[50vh] lg:min-h-full"
            objectPosition="center 30%"
          />
          <div className="flex items-center section-padding">
            <div className="max-w-[560px] mx-auto lg:ml-16 lg:mr-auto">
              <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">The chefs</span>
              <h2 className="font-playfair text-h2 text-white mb-6">We do not fill a slot with whoever is free</h2>
              <p className="font-inter text-body text-gray-400 leading-relaxed mb-4">
                This is a show of the people — not a locked roster. We work with 50+ professionals and change who we put forward depending on what you need. If the right match is not here, we find it.
              </p>
              <p className="font-inter text-body text-gray-400 leading-relaxed mb-4">
                Every person we place as a head chef has typically led a restaurant kitchen for five to ten years, and arrives with their own assistants. Matching is the work of myCHEF: the right professional to the right house, and a specialist when you want one — including a yacht chef in Dubai Marina.
              </p>
              <p className="font-inter text-body text-gray-400 leading-relaxed mb-6">
                A CV is not enough. Private service requires knowing when to speak and when not to, respecting someone’s home, being reliable, listening, and making excellent food. See{' '}
                <Link to="/how-we-vet-our-chefs" className="text-gold hover:text-gold-light underline underline-offset-4">how we vet our chefs</Link>
                {' '}and{' '}
                <Link to="/our-chefs" className="text-gold hover:text-gold-light underline underline-offset-4">our chefs</Link>.
              </p>
              <p className="font-inter text-body-sm text-gray-500 leading-relaxed">
                Level is background plus how they actually perform with myCHEF. Specialty is separate. Private is not “worse.” Signature is not automatically “better.”
              </p>
            </div>
          </div>
        </div>
        <div className="container-custom section-padding pt-4 pb-20">
          <p className="font-inter text-caption uppercase tracking-wider text-gold mb-3 text-center">Chefs currently listed in the network</p>
          <h3 className="font-playfair text-h3 text-white text-center mb-4">Independent partners — not a staff roster</h3>
          <p className="font-inter text-body-sm text-gray-400 text-center max-w-[640px] mx-auto mb-10 leading-relaxed">
            Four chefs we currently present on the site. Matching is not limited to them. Profiles describe independent licensed partners, not employees.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredChefs.map((chef) => (
              <Link
                key={chef.href}
                to={chef.href}
                className="group bg-charcoal overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={chef.image}
                    alt={`${chef.name}, ${chef.role} in the myCHEF Dubai network`}
                    width={640}
                    height={800}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-5">
                  <p className="font-playfair text-h4 text-white mb-1">{chef.name}</p>
                  <p className="font-inter text-caption uppercase tracking-wider text-gold mb-2">{chef.role}</p>
                  <p className="font-inter text-body-sm text-gray-400">{chef.cuisine}</p>
                  <p className="font-inter text-body-sm text-gray-500 mt-1">{chef.experience}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="grid lg:grid-cols-2 min-h-[70vh] lg:min-h-[90vh]">
          <div className="flex items-center section-padding order-2 lg:order-1">
            <div className="max-w-[560px] mx-auto lg:mr-16 lg:ml-auto">
              <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">Daily life</span>
              <h2 className="font-playfair text-h2 text-white mb-6">A food service that learns</h2>
              <p className="font-inter text-body text-gray-400 leading-relaxed mb-4">
                You may have one chef you love. Keep them. Sometimes you want Chinese tonight, a higher-level chef for one Saturday, or healthy family food on a weekday without paying for a tasting-menu specialist.
              </p>
              <p className="font-inter text-body text-gray-400 leading-relaxed mb-4">
                After approximately two days we contact you separately from the chef. A sudden terrible score makes us ask: poor food, an unlearned preference, a misunderstanding, a mistake, or an unreasonable request? You are allowed to make a mistake. You are expected to learn from it.
              </p>
              <p className="font-inter text-body text-gray-400 leading-relaxed">
                Safety starts before the first meal. After a year you should not be re-explaining breakfast. Our goal is to be there without feeling like we are there.
              </p>
            </div>
          </div>
          <FillFrame
            src={photos[5].src}
            alt={photos[5].alt}
            width={photos[5].width}
            height={photos[5].height}
            className="min-h-[50vh] lg:min-h-full order-1 lg:order-2"
            objectPosition="center"
          />
        </div>
      </section>

      {/* 07 An evening */}
      <section id="evening" className="bg-black scroll-mt-24">
        <div className="relative min-h-[55vh] md:min-h-[70vh]">
          <FillFrame
            src={photos[2].src}
            alt={photos[2].alt}
            width={photos[2].width}
            height={photos[2].height}
            className="absolute inset-0"
            objectPosition="center 70%"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/15" />
          <div className="relative z-10 container-custom min-h-[55vh] md:min-h-[70vh] flex flex-col justify-end pb-12 md:pb-16">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">Product A · One evening</span>
            <h2 className="font-playfair text-h2 text-white mb-4 max-w-[720px]">A private chef dinner in Dubai</h2>
            <p className="font-inter text-body text-white/85 leading-relaxed max-w-[720px]">
              A chef in your kitchen for one service. Menu designed with you. Ingredients sourced. Cooked, plated, served, kitchen left handled. You provide the room and the guests. Groceries are in the quote. 5% VAT is shown separately. A deposit confirms the date.
            </p>
          </div>
        </div>
        <div className="container-custom section-padding pt-12">
          <p className="font-inter text-body text-gray-400 leading-relaxed max-w-[720px] mb-10">
            This is the night: a date, a birthday, clients, a yacht. It is not a household plan. You are not taking on a person. You are booking a service that ends when the kitchen is left handled. Starting packages below. Final quotes move with guests, menu and service.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {eveningPackages.map((pkg) => (
              <Link
                key={pkg.name}
                to={pkg.link}
                className="group bg-charcoal p-8 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300"
              >
                <p className="font-inter text-caption uppercase tracking-wider text-gold mb-2">{pkg.guests}</p>
                <h3 className="font-playfair text-h3 text-white mb-2">{pkg.name}</h3>
                <p className="font-playfair text-h4 text-gold mb-3">From AED {pkg.price}</p>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed mb-4">{pkg.detail}</p>
                <span className="inline-flex items-center gap-1 font-inter text-body-sm uppercase tracking-wider text-gold group-hover:text-gold-light">
                  View package <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
          <div className="overflow-x-auto">
            <p className="font-inter text-caption uppercase tracking-wider text-gold mb-4">Typical per-person band for a multi-course dinner</p>
            <table className="w-full min-w-[520px] text-left">
              <thead>
                <tr className="border-b border-gold/30">
                  <th className="py-3 pr-6 font-inter text-caption uppercase tracking-wider text-gray-400">Guests</th>
                  <th className="py-3 font-inter text-caption uppercase tracking-wider text-gray-400">Per person</th>
                </tr>
              </thead>
              <tbody>
                {perPersonBands.map((row) => (
                  <tr key={row.guests} className="border-b border-white/10">
                    <td className="py-3 pr-6 font-inter text-body text-white">{row.guests}</td>
                    <td className="py-3 font-inter text-body text-gray-300">{row.band}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 font-inter text-body-sm text-gray-500">
              Starting points. Final quotes move with guest count, menu, ingredients and service.{' '}
              <Link to="/private-chef-prices-dubai" className="text-gold hover:text-gold-light underline underline-offset-4">Full breakdown on private chef prices</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* 07b A household */}
      <section id="household" className="bg-cream scroll-mt-24">
        <div className="relative min-h-[50vh] md:min-h-[65vh]">
          <FillFrame
            src={photos[3].src}
            alt={photos[3].alt}
            width={photos[3].width}
            height={photos[3].height}
            className="absolute inset-0"
            objectPosition="center 40%"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
          <div className="relative z-10 container-custom min-h-[50vh] md:min-h-[65vh] flex flex-col justify-end pb-12 md:pb-16">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">Product B · Ongoing household</span>
            <h2 className="font-playfair text-h2 text-white mb-4 max-w-[760px]">A standing private chef arrangement</h2>
            <p className="font-inter text-body text-white/85 leading-relaxed max-w-[760px]">
              Ongoing household. Choose the level of chef, then how often you want them. Groceries are separate. Standard schedule is 5 service days per week.
            </p>
          </div>
        </div>
        <div className="container-custom section-padding">
          <div className="max-w-[760px] mb-12">
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-4">
              The numbers below are starting rates for an <strong className="font-medium text-black">ongoing household plan</strong> — about 20 service days a month. The “day” figure is the <strong className="font-medium text-black">effective daily rate</strong> of that plan, not a walk-in price for tomorrow.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-4">
              <strong className="font-medium text-black">Single-day booking:</strong> possible. Tell us the date. We quote it.{' '}
              <strong className="font-medium text-black">Effective daily rate on an ongoing plan:</strong> from AED 900 at Private, one meal a day. Do not assume Private level, one meal, AED 900 books an isolated tomorrow without that conversation.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              Independent licensed partners cook. myCHEF organises the service. You do not need a full day if you only want breakfast. You do not need Signature every day because you want one extraordinary dinner a month. Groceries are separate.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-6 md:p-10 mb-12">
            <h3 className="font-playfair text-h3 text-black mb-2">Ongoing household — starting rates</h3>
            <p className="font-inter text-body-sm text-gray-500 mb-6">Effective daily rate on a standing plan. A one-off day is quoted separately.</p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <fieldset>
                <legend className="font-inter text-caption uppercase tracking-wider text-gold mb-3">Chef level</legend>
                <div className="flex flex-wrap gap-2">
                  {chefLevels.map((item) => (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setLevel(item.name)}
                      className={`px-4 py-2 font-inter text-body-sm border transition-colors ${
                        level === item.name
                          ? 'bg-gold text-black border-gold'
                          : 'border-gray-300 text-gray-600 hover:border-gold'
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </fieldset>
              <fieldset>
                <legend className="font-inter text-caption uppercase tracking-wider text-gold mb-3">Meals per day</legend>
                <div className="flex flex-wrap gap-2">
                  {(Object.keys(mealLabels) as MealPlan[]).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setMeals(key)}
                      className={`px-4 py-2 font-inter text-body-sm border transition-colors ${
                        meals === key
                          ? 'bg-gold text-black border-gold'
                          : 'border-gray-300 text-gray-600 hover:border-gold'
                      }`}
                    >
                      {mealLabels[key]}
                    </button>
                  ))}
                </div>
              </fieldset>
            </div>
            <p className="font-inter text-body-sm text-gray-500 mb-6">
              {level} · {mealLabels[meals]} · 5 service days · chef + assistant + the myCHEF system. Groceries separate.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="border border-gray-200 p-5">
                <p className="font-inter text-caption uppercase tracking-wider text-gold mb-2">Effective / day</p>
                <p className="font-playfair text-h3 text-black">{formatAed(quote.daily)}</p>
              </div>
              <div className="border border-gray-200 p-5">
                <p className="font-inter text-caption uppercase tracking-wider text-gold mb-2">5-day week</p>
                <p className="font-playfair text-h3 text-black">{formatAed(quote.weekly)}</p>
              </div>
              <div className="border border-gold/40 bg-gold/5 p-5">
                <p className="font-inter text-caption uppercase tracking-wider text-gold mb-2">Month · ~20 days</p>
                <p className="font-playfair text-h3 text-black">{formatAed(quote.monthly)}</p>
              </div>
            </div>
          </div>

          <h3 className="font-playfair text-h3 text-black mb-2">Chef levels — what kind of house, not a status ladder</h3>
          <p className="font-inter text-body text-gray-500 mb-6 max-w-[720px] leading-relaxed">
            Private is not “worse.” Signature is not automatically “better.” The difference is the brief: everyday family cooking versus a highly specialised requirement. A customer paying AED 30,000 and a customer paying AED 100,000 should both be in the right house, not climbing a prestige ladder.{' '}
            <strong className="font-medium text-black">Not sure? Don’t choose a level. Tell us how you live and we’ll recommend one.</strong>
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {chefLevels.map((item) => (
              <div key={item.name} className="bg-white border border-gray-200 p-5">
                <p className="font-playfair text-h4 text-black mb-1">{item.name}</p>
                <p className="font-inter text-caption uppercase tracking-wider text-gold mb-2">{item.useCase}</p>
                <p className="font-inter text-body-sm text-gold mb-3">From AED {item.monthlyFull}+ / month full day</p>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <h3 className="font-playfair text-h3 text-black mb-4">Private level · starting prices</h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full min-w-[640px] text-left bg-white">
              <thead>
                <tr className="border-b border-gold/30">
                  <th className="py-3 px-4 font-inter text-caption uppercase tracking-wider text-gold">Service</th>
                  <th className="py-3 px-4 font-inter text-caption uppercase tracking-wider text-gold">Effective / day</th>
                  <th className="py-3 px-4 font-inter text-caption uppercase tracking-wider text-gold">Weekly · 5 days</th>
                  <th className="py-3 px-4 font-inter text-caption uppercase tracking-wider text-gold">Monthly</th>
                </tr>
              </thead>
              <tbody>
                {([
                  ['1 meal / day', 900, 4500, 18000],
                  ['2 meals / day', 1200, 6000, 24000],
                  ['Full day · 3 meals', 1500, 7500, 30000],
                ] as const).map((row) => (
                  <tr key={row[0]} className="border-b border-gray-200">
                    <td className="py-3 px-4 font-inter text-body text-black">{row[0]}</td>
                    <td className="py-3 px-4 font-inter text-body text-gray-600">{formatAed(row[1])}</td>
                    <td className="py-3 px-4 font-inter text-body text-gray-600">{formatAed(row[2])}</td>
                    <td className="py-3 px-4 font-inter text-body text-gray-600">{formatAed(row[3])}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-inter text-body-sm text-gray-500 mb-12">
            Starting example: Private · 2 meals / day · AED 24,000+ / month. Every standard service includes 1 private chef + 1 assistant + the myCHEF system.
          </p>

          <h3 className="font-playfair text-h3 text-black mb-4">All chef levels · effective daily rates on an ongoing plan</h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full min-w-[720px] text-left bg-white">
              <thead>
                <tr className="border-b border-gold/30">
                  <th className="py-3 px-4 font-inter text-caption uppercase tracking-wider text-gold">Chef level</th>
                  <th className="py-3 px-4 font-inter text-caption uppercase tracking-wider text-gold">1 meal / day</th>
                  <th className="py-3 px-4 font-inter text-caption uppercase tracking-wider text-gold">2 meals / day</th>
                  <th className="py-3 px-4 font-inter text-caption uppercase tracking-wider text-gold">Full day</th>
                </tr>
              </thead>
              <tbody>
                {chefLevels.map((item) => (
                  <tr key={item.name} className="border-b border-gray-200">
                    <td className="py-3 px-4 font-inter text-body text-black">{item.name}</td>
                    <td className="py-3 px-4 font-inter text-body text-gray-600">{formatAed(dailyRates[item.name]['1'])}</td>
                    <td className="py-3 px-4 font-inter text-body text-gray-600">{formatAed(dailyRates[item.name]['2'])}</td>
                    <td className="py-3 px-4 font-inter text-body text-gray-600">{formatAed(dailyRates[item.name].full)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-inter text-body-sm text-gray-500 mb-12">
            Table figures are effective rates on an ongoing plan of about 20 service days. They are not a menu of isolated one-day tickets. Why one meal is not one-third of the price: travel, prep, the kitchen, the profile and the management system remain. One meal is about 60% of full-day service, not 33%.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-gray-200 p-8">
              <h3 className="font-playfair text-h3 text-black mb-4">Every standard service includes</h3>
              <ul className="space-y-3">
                {householdIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={16} className="text-gold mt-1 flex-shrink-0" />
                    <span className="font-inter text-body-sm text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-inter text-body-sm text-gray-500">The difference between levels is primarily the chef.</p>
            </div>
            <div className="bg-white border border-gray-200 p-8">
              <h3 className="font-playfair text-h3 text-black mb-4">The Food Profile</h3>
              <p className="font-inter text-body-sm text-gray-500 leading-relaxed mb-4">
                Before we start, we ask a lot of questions. If information does not help us provide your food and service, we do not need it. The profile is yours. You can see it, correct it, or ask for it to be deleted.
              </p>
              <ul className="space-y-2">
                {profileQuestions.map((q) => (
                  <li key={q} className="font-inter text-body-sm text-gray-500">— {q}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-8 mb-12">
            <h3 className="font-playfair text-h3 text-black mb-4">You can mix it</h3>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-6">
              Everyday: keep the chef level that makes sense financially. Special occasion: upgrade one meal. Different cuisine: rotate in a specialist. More guests: add another chef. You do not need Signature prices every day because you want a Signature chef twice a month.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-200 p-6">
                <p className="font-inter text-caption uppercase tracking-wider text-gold mb-2">Example week</p>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed mb-3">
                  Monday–Friday Private · 2 meals: from AED 6,000. Friday dinner upgraded to Elite: from AED 3,500. That week: from AED 9,500 before groceries.
                </p>
              </div>
              <div className="border border-gray-200 p-6">
                <p className="font-inter text-caption uppercase tracking-wider text-gold mb-2">Example month</p>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed">
                  Private · 2 meals/day: from AED 24,000. Two Elite dinner upgrades: 2 × AED 3,500+ = AED 7,000+. Example month: from AED 31,000.
                </p>
              </div>
            </div>
            <p className="font-inter text-caption uppercase tracking-wider text-gold mb-3">Upgrade a meal — from, per service</p>
            <div className="flex flex-wrap gap-3 mb-8">
              {upgrades.map((u) => (
                <span key={u.to} className="px-3 py-2 border border-gray-200 font-inter text-body-sm text-gray-600">
                  to {u.to} AED {u.price}+
                </span>
              ))}
            </div>
            <p className="font-inter text-caption uppercase tracking-wider text-gold mb-3">Add people — starting prices</p>
            <div className="flex flex-wrap gap-3">
              {extraTeam.map((u) => (
                <span key={u.role} className="px-3 py-2 border border-gray-200 font-inter text-body-sm text-gray-600">
                  {u.role} AED {u.price}+
                </span>
              ))}
            </div>
          </div>

          <p className="font-inter text-body text-gray-500 leading-relaxed mb-6">
            Events sit on top of the household arrangement — a birthday, a wedding, or a{' '}
            <Link to="/yachts" className="text-gold hover:text-gold-light underline underline-offset-4">yacht party</Link>
            {' '}is one complete event price, not 25 small charges. If you want food handled without a chef in the house every day,{' '}
            <Link to="/weekly-meal-prep-dubai" className="text-gold hover:text-gold-light underline underline-offset-4">weekly meal prep</Link>
            {' '}is the lighter version — from AED 1,898 a week.
          </p>
        </div>
      </section>

      {/* 08 When something changes */}
      <section id="when-it-changes" className="bg-white section-padding scroll-mt-24">
        <div className="container-custom">
          <div className="max-w-[720px] mx-auto text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">When something changes</span>
            <h2 className="font-playfair text-h2 text-black">The system is for the weeks that are not normal</h2>
            <p className="font-inter text-body text-gray-500 mt-4 leading-relaxed">
              Rotation, a specialist, backup, guests, seven days. This is the part a freelancer cannot fake, and the part a household actually uses.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {whenThingsChange.map((item) => (
              <div key={item.title} className="border border-gray-200 p-8">
                <h3 className="font-playfair text-h4 text-black mb-3">{item.title}</h3>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 09 Proof */}
      <section id="proof" className="bg-cream section-padding scroll-mt-24">
        <div className="container-custom">
          <div className="max-w-[720px] mx-auto text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">The system in practice</span>
            <h2 className="font-playfair text-h2 text-black mb-4">We will not invent a number to look larger</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              No household count, no average rating, no replacement percentage on this page until we can put a real figure next to it. What we can show is the operating system — and where to inspect it.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {proofItems.map((item) => (
              <div key={item.label} className="bg-white border border-gray-200 p-8">
                <h3 className="font-playfair text-h4 text-black mb-3">{item.label}</h3>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <h3 className="font-playfair text-h3 text-black text-center mb-4">What happens before a chef enters your kitchen</h3>
          <p className="font-inter text-body-sm text-gray-500 text-center max-w-[640px] mx-auto mb-10 leading-relaxed">
            This is the same sequence published on{' '}
            <Link to="/how-we-vet-our-chefs" className="text-gold hover:text-gold-light underline underline-offset-4">how we vet our chefs</Link>.
            {' '}Explaining it is not the same as proving a booking count. It is the process we actually run.
          </p>
          <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {vettingSteps.map((step, i) => (
              <li key={step.title} className="bg-white border border-gray-200 p-8">
                <p className="font-playfair text-h4 text-gold mb-2">{String(i + 1).padStart(2, '0')}</p>
                <h4 className="font-playfair text-h4 text-black mb-3">{step.title}</h4>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            {inspectUs.map((item) => (
              <Link key={item.href} to={item.href} className="btn-secondary text-center">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What we don't / do promise */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[900px]">
          <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">What we don’t promise</span>
          <h2 className="font-playfair text-h2 text-white mb-8">Honesty is part of the service</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="font-inter text-caption uppercase tracking-wider text-gray-500 mb-4">We don’t</p>
              <ul className="space-y-4">
                {dontPromise.map((line) => (
                  <li key={line} className="font-inter text-body-lg text-gray-300 leading-relaxed">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-inter text-caption uppercase tracking-wider text-gold mb-4">We do</p>
              <ul className="space-y-4">
                {doPromise.map((line) => (
                  <li key={line} className="font-inter text-body-lg text-white leading-relaxed">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="font-inter text-body-lg text-white leading-relaxed mt-10">
            We promise to manage those realities professionally. If an equivalent chef is not available, we tell you, then we give you the options. We do not claim an allergic reaction can never happen. Chefs are professionals, not machines. We do not publish invented reviews.
          </p>
        </div>
      </section>

      {/* Gallery — all six, edge-to-edge */}
      <section className="bg-black">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-0">
          {photos.map((photo) => (
            <FillFrame
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="aspect-[3/2]"
            />
          ))}
        </div>
      </section>

      {/* Locations */}
      <section className="bg-charcoal py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">Where we cover</span>
            <h2 className="font-playfair text-fluid-h2 text-white">Where in Dubai can I hire a private chef?</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — collapsed */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-4">
            What should I know before hiring a private chef in Dubai?
          </h2>
          <p className="font-inter text-body-sm text-gray-500 text-center mb-8 leading-relaxed">
            Short answers only. Pricing, the Food Profile, chef absence, upgrades, groceries and seven-day service are already on this page — open a question if you still need it.
          </p>
          <FaqAccordion items={faqs} defaultOpen={-1} />
        </div>
      </section>

      {/* Review invite — real reviews only */}
      <section className="bg-charcoal py-20">
        <div className="container-custom max-w-[800px] text-center">
          <h3 className="font-playfair text-h3 text-white mb-4">Love your myCHEF experience?</h3>
          <p className="font-inter text-body text-gray-400 leading-relaxed mb-6">
            We do not publish invented reviews. If you have used the service, leave a review and receive AED 50 credit toward your next private chef booking.
          </p>
          <Link to="/review" className="btn-primary">
            Leave a Review
          </Link>
        </div>
      </section>

      {/* Related */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h3 className="font-playfair text-h3 text-white text-center mb-10">
            Which other services pair with a private chef in Dubai?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc) => (
              <Link
                key={svc.title}
                to={svc.link}
                className="group bg-charcoal overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    width={640}
                    height={360}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-playfair text-h4 text-white mb-2">{svc.title}</h4>
                  <p className="font-inter text-body-sm text-gray-400 mb-4">{svc.description}</p>
                  <span className="inline-flex items-center gap-1 font-inter text-body-sm uppercase tracking-wider text-gold group-hover:text-gold-light">
                    Explore <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="container-custom max-w-[800px] text-center">
          <h3 className="font-playfair text-h3 text-black mb-4">Where can I learn more about hiring a private chef in Dubai?</h3>
          <p className="font-inter text-body text-gray-500 leading-relaxed">
            Read our{' '}
            <Link to="/private-chef-vs-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4">private chef vs catering</Link>{' '}
            guide, see{' '}
            <Link to="/private-chef-prices-dubai" className="text-gold hover:text-gold-light underline underline-offset-4">private chef prices Dubai</Link>,{' '}
            <Link to="/blog/how-much-does-private-chef-cost-dubai" className="text-gold hover:text-gold-light underline underline-offset-4">how much a private chef costs</Link>,{' '}
            <Link to="/blog/private-chef-palm-jumeirah-guide" className="text-gold hover:text-gold-light underline underline-offset-4">private chef Palm Jumeirah</Link>,{' '}
            <Link to="/guide/private-dining-dubai" className="text-gold hover:text-gold-light underline underline-offset-4">private dining in Dubai</Link>
            {' '}and{' '}
            <Link to="/how-it-works" className="text-gold hover:text-gold-light underline underline-offset-4">how it works</Link>.
          </p>
        </div>
      </section>

      <LocationStrip
        title="Private chef services across Dubai"
        subtitle={
          <>
            Hire a{' '}
            <Link to="/locations/palm-jumeirah" className="text-gold hover:text-gold-light underline underline-offset-4">private chef in Palm Jumeirah</Link>,{' '}
            <Link to="/locations/dubai-marina" className="text-gold hover:text-gold-light underline underline-offset-4">Dubai Marina</Link>
            {' '}or{' '}
            <Link to="/locations/downtown-dubai" className="text-gold hover:text-gold-light underline underline-offset-4">Downtown Dubai</Link>.
          </>
        }
      />

      <section id="start" className="bg-gradient-to-b from-charcoal to-black py-20 scroll-mt-24">
        <div className="container-custom text-center">
          <h2 className="font-playfair text-h2 text-white mb-4">Start on one path</h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[640px] mx-auto mb-8 leading-relaxed">
            One evening from AED 1,200 for two, groceries in the quote. An ongoing household from AED 900 a day on a plan, groceries separate. If you are not sure, tell us how you live — don’t pick a chef level first.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <a href="#evening" className="btn-secondary">One evening</a>
            <a href="#household" className="btn-secondary">Ongoing household</a>
          </div>
          <QuotePair />
        </div>
      </section>
    </div>
  )
}
