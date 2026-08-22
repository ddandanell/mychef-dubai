import { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { Check, Phone, ArrowRight, ArrowDown, ChevronDown } from 'lucide-react'
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
  DOMINANT_MESSAGE,
  H1_LINE_1,
  H1_LINE_2,
  HERO_IMAGE,
  HERO_IMAGE_HEIGHT,
  HERO_IMAGE_WIDTH,
  HERO_SUPPORT,
  HERO_SUBTITLE,
  PAGE_PATH,
  PROBLEM_OPENER,
  photos,
  SEO_DESCRIPTION,
  SEO_TITLE,
  WHATSAPP_MESSAGE,
  WHATSAPP_NUMBER,
  backupAlone,
  backupMychef,
  bookingMinimums,
  buyerQuestions,
  cateringRedirect,
  chefLevelIntro,
  chefLevelPhoto,
  chefLevels,
  comparison,
  ctaPhoto,
  dailyLifePhotos,
  dailyRates,
  differencePoints,
  extraTeam,
  faqs,
  featuredChefs,
  feedbackPhilosophy,
  foodProfileDemo,
  formatAed,
  heroFacts,
  higherNotBetter,
  householdExamples,
  householdIncludes,
  howItWorksPhoto,
  inspectUs,
  journeyPhotos,
  livingSetups,
  locations,
  mixPhoto,
  monthlyFrom,
  networkSpecialties,
  pageSequence,
  problemPoints,
  processSteps,
  relatedServices,
  rotationPhoto,
  testimonials,
  upgrades,
  weeklyFrom,
  wherePhoto,
  whyIndependentPhoto,
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
        'myCHEF organises vetted independent chefs for standing household private chef arrangements in Dubai homes and villas. New households from five service days. Returning households from two.',
    },
    {
      '@type': 'AggregateOffer',
      name: 'Private chef household arrangements in Dubai — monthly starting prices',
      description:
        'Starting monthly prices for a standing private chef arrangement on about 20 service days. Groceries separate. New households start at five service days. Returning clients from two. The effective daily rate starts from AED 900 at Private level, one meal a day. One-night dinners are catering, not this product.',
      url: 'https://www.mychef.ae/private-chef-dubai#household',
      priceCurrency: 'AED',
      lowPrice: '18000',
      highPrice: '100000',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [...buyerQuestions, ...faqs].map((faq) => ({
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

function RatesBar({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-black border-y border-gold/25 ${className}`}>
      <div className="container-custom py-3 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3 sm:gap-6">
        <p className="font-inter text-caption uppercase tracking-wider text-gold text-center">Standing household chef</p>
        <a href="#household" className="px-4 py-2 font-inter text-body-sm uppercase tracking-wider border border-gold text-gold hover:bg-gold hover:text-black transition-colors text-center">
          Tell us how you live
        </a>
      </div>
    </div>
  )
}

function FlowColumn({
  title,
  steps,
  accent = false,
}: {
  title: string
  steps: readonly string[]
  accent?: boolean
}) {
  return (
    <div className={`p-8 ${accent ? 'bg-black text-white' : 'bg-cream border border-gray-200'}`}>
      <h3 className={`font-playfair text-h4 mb-6 ${accent ? 'text-gold' : 'text-black'}`}>{title}</h3>
      <ol className="space-y-0">
        {steps.map((step, i) => (
          <li key={step} className="flex flex-col items-start">
            <p className={`font-inter text-body ${accent ? 'text-white' : 'text-gray-700'}`}>{step}</p>
            {i < steps.length - 1 && (
              <ArrowDown size={16} className="my-3 text-gold" aria-hidden />
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}

function QuotePair({ className = 'items-center justify-center' }: { className?: string }) {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
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
  const [matrixOpen, setMatrixOpen] = useState(false)

  const quote = useMemo(() => {
    const daily = dailyRates[level][meals]
    return {
      daily,
      twoDay: daily * 2,
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
        title={(
          <>
            {H1_LINE_1}{' '}
            <span className="block mt-2 md:mt-3">{H1_LINE_2}</span>
          </>
        )}
        subtitle={HERO_SUBTITLE}
        image={HERO_IMAGE}
        imageAlt={photos[0].alt}
        imageWidth={HERO_IMAGE_WIDTH}
        imageHeight={HERO_IMAGE_HEIGHT}
        cta={{ label: 'Get My Private Chef Quote', href: INQUIRY_LINK }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Private Chef Dubai' }]}
        minHeight="tall"
        overlay="cinematic"
        titleEmphasis
        accentLine
        align="left"
        imagePosition="40% 50%"
      >
        <p className="mt-5 max-w-2xl font-inter text-body-sm md:text-body text-white/80 leading-relaxed">
          {HERO_SUPPORT}
        </p>
        <div className="mt-10 grid sm:grid-cols-3 gap-4 w-full max-w-4xl text-left">
          {heroFacts.map((fact) => (
            <a
              key={fact.title}
              href="#household"
              className="block bg-black/75 backdrop-blur-[2px] border border-gold/45 border-l-[3px] border-l-gold hover:border-gold p-5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <span className="font-inter text-caption uppercase tracking-wider text-gold">{fact.eyebrow}</span>
              <p className="font-playfair text-h4 text-white mt-2">{fact.title}</p>
              <p className="font-inter text-body-sm text-white/85 mt-2 leading-relaxed">{fact.body}</p>
            </a>
          ))}
        </div>
      </PageHero>
      <TrustSignalStrip />
      <RatesBar className="sticky top-16 z-30" />

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

      {/* 01 Problem */}
      <section id="problem" className="bg-white scroll-mt-24">
        <div className="grid lg:grid-cols-[52fr_48fr] lg:min-h-[80vh] items-stretch">
          <div className="flex items-center section-padding">
            <div className="max-w-[580px] mx-auto lg:ml-auto lg:mr-16 w-full">
              <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">The problem</span>
              <h2 className="font-playfair text-h2 text-black mb-6">{PROBLEM_OPENER}</h2>
              <div className="lg:hidden mb-8 -mx-4 sm:mx-0">
                <FillFrame
                  src={photos[1].src}
                  alt={photos[1].alt}
                  width={photos[1].width}
                  height={photos[1].height}
                  className="aspect-[4/5] w-full"
                />
              </div>
              <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-8">
                Hiring a freelancer can look simpler. You get a person. You also get the unpaid work around the person: finding them, covering their days off, repeating the brief, and owning quality when it slips.
              </p>
              <ul className="space-y-6">
                {problemPoints.map((item) => (
                  <li key={item.title}>
                    <h3 className="font-playfair text-h4 text-black mb-2">{item.title}</h3>
                    <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="hidden lg:block relative min-h-[80vh]">
            <FillFrame
              src={photos[1].src}
              alt={photos[1].alt}
              width={photos[1].width}
              height={photos[1].height}
              className="absolute inset-0 h-full"
              objectPosition="center 20%"
            />
          </div>
        </div>
      </section>

      {/* 02 Difference */}
      <section id="difference" className="bg-black section-padding scroll-mt-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[42fr_58fr] gap-10 items-center mb-12">
            <FillFrame
              src={whyIndependentPhoto.src}
              alt={whyIndependentPhoto.alt}
              width={whyIndependentPhoto.width}
              height={whyIndependentPhoto.height}
              className="aspect-[16/9] w-full"
              objectPosition="center 45%"
            />
            <div>
              <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">The myCHEF difference</span>
              <h2 className="font-playfair text-h2 text-white mb-4">{DOMINANT_MESSAGE}</h2>
              <p className="font-inter text-body text-gray-400 leading-relaxed">
                This is not another private-chef company to compare on a spreadsheet. It is the managed household chef system — so you are not independently hiring and running one.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {differencePoints.map((item) => (
              <div key={item.title} className="border border-gold/25 p-6 bg-white/5">
                <h3 className="font-playfair text-h4 text-white mb-3">{item.title}</h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="overflow-x-auto mb-12">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b border-gold/30">
                  <th className="py-4 pr-6 font-inter text-caption uppercase tracking-wider text-gold">Compared</th>
                  <th className="py-4 pr-6 font-inter text-caption uppercase tracking-wider text-gray-400">Hiring independently</th>
                  <th className="py-4 font-inter text-caption uppercase tracking-wider text-gold">Managed by myCHEF</th>
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
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <FlowColumn title="Hiring independently" steps={backupAlone} />
            <FlowColumn title="With myCHEF" steps={backupMychef} accent />
          </div>
          <p className="font-inter text-body-sm text-gray-500 text-center max-w-[640px] mx-auto leading-relaxed">
            Preferences do not reset when the usual chef is off. If an equivalent chef is not available, we tell you — then we give you the options.
          </p>
        </div>
      </section>

      {/* 03 Chefs */}
      <section id="the-chefs" className="bg-black scroll-mt-24">
        <div className="grid lg:grid-cols-2 min-h-[60vh] lg:min-h-[75vh]">
          <FillFrame
            src={photos[4].src}
            alt={photos[4].alt}
            width={photos[4].width}
            height={photos[4].height}
            className="min-h-[44vh] lg:min-h-full"
            objectPosition="center 40%"
          />
          <div className="flex items-center section-padding">
            <div className="max-w-[560px] mx-auto lg:ml-16 lg:mr-auto">
              <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">See the chefs</span>
              <h2 className="font-playfair text-h2 text-white mb-6">Real cooks. Short credentials. Not a locked roster.</h2>
              <p className="font-inter text-body text-gray-400 leading-relaxed mb-4">
                Independent licensed partners — not employees, and not a staff list you have to manage. Typically restaurant-trained, then assessed for private service. A CV is not enough.
              </p>
              <p className="font-inter text-body text-gray-400 leading-relaxed">
                50+ professionals in the network. Matching is not limited to the four below. See{' '}
                <Link to="/how-we-vet-our-chefs" className="text-gold hover:text-gold-light underline underline-offset-4">how we vet our chefs</Link>
                {' '}and{' '}
                <Link to="/our-chefs" className="text-gold hover:text-gold-light underline underline-offset-4">our chefs</Link>.
              </p>
            </div>
          </div>
        </div>
        <div className="container-custom section-padding pt-4 pb-20">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {networkSpecialties.map((tag) => (
              <span key={tag} className="px-3 py-1.5 border border-gold/30 font-inter text-caption uppercase tracking-wider text-gray-300">
                {tag}
              </span>
            ))}
          </div>
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
                  <p className="font-inter text-body-sm text-gray-300 mb-3 leading-relaxed">{chef.credential}</p>
                  <p className="font-inter text-caption text-gray-500">{chef.specialties.join(' · ')}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 04 How it works — short */}
      <section id="how-it-works" className="bg-cream section-padding scroll-mt-24">
        <div className="container-custom">
          <h2 className="font-playfair text-h2 text-black text-center mb-4">How it works</h2>
          <p className="font-inter text-body text-gray-500 text-center max-w-[560px] mx-auto mb-8 leading-relaxed">
            Four steps. Then the house should get quieter, not louder.
          </p>
          <FillFrame
            src={howItWorksPhoto.src}
            alt={howItWorksPhoto.alt}
            width={howItWorksPhoto.width}
            height={howItWorksPhoto.height}
            className="aspect-[16/9] w-full mb-10"
            objectPosition="center 70%"
          />
          <ol className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
            {journeyPhotos.map((photo) => (
              <li key={photo.caption}>
                <FillFrame
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  className="aspect-[4/5] w-full mb-3"
                />
                <p className="font-inter text-caption uppercase tracking-wider text-gold">{photo.caption}</p>
              </li>
            ))}
          </ol>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.num} className="pc-fade opacity-0 translate-y-8">
                <span className="font-playfair text-[40px] text-gold leading-none">{step.num}</span>
                <h3 className="font-playfair text-h4 text-black mt-3 mb-2">{step.title}</h3>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 Household examples */}
      <section id="households" className="bg-white section-padding scroll-mt-24">
        <div className="container-custom">
          <div className="max-w-[720px] mx-auto text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">How houses actually use this</span>
            <h2 className="font-playfair text-h2 text-black mb-4">Three households. One system.</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              Composite examples from the way the service is built — not named clients, and not reviews.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {householdExamples.map((item) => (
              <article key={item.title} className="border border-gray-200 bg-cream/40">
                <FillFrame
                  src={item.image.src}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                  className="aspect-[4/5] w-full"
                />
                <div className="p-6">
                  <p className="font-inter text-caption uppercase tracking-wider text-gold mb-2">{item.label}</p>
                  <h3 className="font-playfair text-h3 text-black mb-1">{item.title}</h3>
                  <p className="font-inter text-caption uppercase tracking-wider text-gray-500 mb-4">{item.setup}</p>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed mb-4">{item.body}</p>
                  <p className="font-inter text-body-sm text-black leading-relaxed">{item.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 06 Setup + pricing */}
      <section id="household" className="bg-cream scroll-mt-24">
        <div className="relative min-h-[44vh] md:min-h-[56vh]">
          <FillFrame
            src={photos[3].src}
            alt={photos[3].alt}
            width={photos[3].width}
            height={photos[3].height}
            className="absolute inset-0"
            objectPosition="center 45%"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
          <div className="relative z-10 container-custom min-h-[44vh] md:min-h-[56vh] flex flex-col justify-end pb-12 md:pb-16">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">Choose a setup</span>
            <h2 className="font-playfair text-h2 text-white mb-4 max-w-[760px]">Tell us how you live. We recommend the setup.</h2>
            <p className="font-inter text-body text-white/85 leading-relaxed max-w-[760px]">
              Start with the rhythm of the house — not a spreadsheet of chef levels. New households from five service days. Groceries separate.
            </p>
          </div>
        </div>

        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {livingSetups.map((setup) => {
              const monthly = monthlyFrom(setup.level, setup.meals)
              const weekly = weeklyFrom(setup.level, setup.meals)
              return (
                <article key={setup.id} className="bg-white border border-gray-200 p-8 flex flex-col">
                  <p className="font-inter text-caption uppercase tracking-wider text-gold mb-2">{setup.eyebrow}</p>
                  <h3 className="font-playfair text-h3 text-black mb-3">{setup.title}</h3>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed mb-6 flex-1">{setup.body}</p>
                  <p className="font-inter text-caption uppercase tracking-wider text-gray-400 mb-1">{setup.level} · {setup.rhythm}</p>
                  <p className="font-playfair text-h3 text-black mb-1">{formatAed(monthly)} / month</p>
                  <p className="font-inter text-body-sm text-gray-500 mb-6">{formatAed(weekly)} / 5-day week · groceries separate</p>
                  <ul className="space-y-2 mb-8">
                    {setup.includes.map((line) => (
                      <li key={line} className="flex items-start gap-2">
                        <Check size={16} className="text-gold mt-0.5 flex-shrink-0" />
                        <span className="font-inter text-body-sm text-gray-600">{line}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-3">
                    <Link to={INQUIRY_LINK} className="btn-primary text-center">
                      Get this setup quoted
                    </Link>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary text-center">
                      Chat on WhatsApp
                    </a>
                  </div>
                </article>
              )
            })}
          </div>
          <p className="font-inter text-body-sm text-gray-500 text-center max-w-[640px] mx-auto mb-12 leading-relaxed">
            These are starting recommendations, not locked products. If the house is heavier or lighter than this, we say so before you pay.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-16">
            {bookingMinimums.map((item) => (
              <div key={item.who} className="bg-white border border-gray-200 p-6">
                <p className="font-inter text-caption uppercase tracking-wider text-gold mb-2">{item.who}</p>
                <p className="font-playfair text-h4 text-black mb-3">{item.min}</p>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.why}</p>
              </div>
            ))}
          </div>

          <div id="chef-levels" className="mb-12 scroll-mt-24">
            <div className="grid lg:grid-cols-[42fr_58fr] gap-8 items-center mb-10">
              <FillFrame
                src={chefLevelPhoto.src}
                alt={chefLevelPhoto.alt}
                width={chefLevelPhoto.width}
                height={chefLevelPhoto.height}
                className="aspect-[3/2] w-full"
                objectPosition="center 30%"
              />
              <div>
                <p className="font-inter text-caption uppercase tracking-wider text-gold mb-3">What ~30k vs ~55k vs ~100k changes</p>
                <h3 className="font-playfair text-h3 text-black mb-4">Chef levels you can actually feel</h3>
                <p className="font-inter text-body text-gray-500 leading-relaxed">{chefLevelIntro}</p>
              </div>
            </div>

            <div className="overflow-x-auto mb-8">
              <table className="w-full min-w-[880px] text-left bg-white">
                <thead>
                  <tr className="border-b border-gold/30">
                    <th className="py-3 px-4 font-inter text-caption uppercase tracking-wider text-gold">Level</th>
                    <th className="py-3 px-4 font-inter text-caption uppercase tracking-wider text-gold">Everyday food</th>
                    <th className="py-3 px-4 font-inter text-caption uppercase tracking-wider text-gold">Entertaining</th>
                    <th className="py-3 px-4 font-inter text-caption uppercase tracking-wider text-gold">Dietary complexity</th>
                    <th className="py-3 px-4 font-inter text-caption uppercase tracking-wider text-gold">Discretion / presentation</th>
                    <th className="py-3 px-4 font-inter text-caption uppercase tracking-wider text-gold">Full day / month</th>
                  </tr>
                </thead>
                <tbody>
                  {chefLevels.map((item) => (
                    <tr key={item.name} className="border-b border-gray-200 align-top">
                      <td className="py-4 px-4">
                        <p className="font-playfair text-h4 text-black">{item.name}</p>
                        <p className="font-inter text-caption text-gray-500 mt-1">{item.forWhom}</p>
                      </td>
                      <td className="py-4 px-4 font-inter text-body-sm text-gray-600 leading-relaxed">{item.everyday}</td>
                      <td className="py-4 px-4 font-inter text-body-sm text-gray-600 leading-relaxed">{item.entertaining}</td>
                      <td className="py-4 px-4 font-inter text-body-sm text-gray-600 leading-relaxed">{item.dietary}</td>
                      <td className="py-4 px-4 font-inter text-body-sm text-gray-600 leading-relaxed">{item.discretion} {item.presentation}</td>
                      <td className="py-4 px-4 font-inter text-body text-black whitespace-nowrap">AED {item.monthlyFull}+</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {chefLevels.filter((l) => l.name === 'Private' || l.name === 'Executive' || l.name === 'Signature').map((item) => (
                <div key={item.name} className="bg-white border border-gray-200 p-6">
                  <p className="font-inter text-caption uppercase tracking-wider text-gold mb-2">{item.name} · from AED {item.monthlyFull}+</p>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="bg-white border border-gold/30 p-6 md:p-8 mb-10">
              <h4 className="font-playfair text-h4 text-black mb-3">{higherNotBetter.title}</h4>
              <p className="font-inter text-body text-gray-500 leading-relaxed">{higherNotBetter.body}</p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 mb-12">
            <button
              type="button"
              aria-expanded={matrixOpen}
              onClick={() => setMatrixOpen((open) => !open)}
              className="w-full flex items-center justify-between gap-4 p-6 md:p-8 text-left"
            >
              <div>
                <p className="font-inter text-caption uppercase tracking-wider text-gold mb-2">Configure it yourself</p>
                <h3 className="font-playfair text-h3 text-black">Want to see all chef levels and pricing?</h3>
                <p className="font-inter text-body-sm text-gray-500 mt-2">Full matrix, effective daily rates, mix-ins and extras. Starting prices stay on this page.</p>
              </div>
              <ChevronDown size={28} className={`text-gold flex-shrink-0 transition-transform ${matrixOpen ? 'rotate-180' : ''}`} aria-hidden />
            </button>

            {matrixOpen && (
              <div className="border-t border-gray-200 p-6 md:p-10">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <fieldset>
                    <legend className="font-inter text-caption uppercase tracking-wider text-gold mb-3">myCHEF chef level</legend>
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
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                  <div className="border border-gray-200 p-5">
                    <p className="font-inter text-caption uppercase tracking-wider text-gold mb-2">Effective / day</p>
                    <p className="font-playfair text-h3 text-black">{formatAed(quote.daily)}</p>
                  </div>
                  <div className="border border-gray-200 p-5">
                    <p className="font-inter text-caption uppercase tracking-wider text-gold mb-2">Returning · 2 days</p>
                    <p className="font-playfair text-h3 text-black">{formatAed(quote.twoDay)}</p>
                  </div>
                  <div className="border border-gray-200 p-5">
                    <p className="font-inter text-caption uppercase tracking-wider text-gold mb-2">New · 5-day week</p>
                    <p className="font-playfair text-h3 text-black">{formatAed(quote.weekly)}</p>
                  </div>
                  <div className="border border-gold/40 bg-gold/5 p-5">
                    <p className="font-inter text-caption uppercase tracking-wider text-gold mb-2">Month · ~20 days</p>
                    <p className="font-playfair text-h3 text-black">{formatAed(quote.monthly)}</p>
                  </div>
                </div>

                <h4 className="font-playfair text-h4 text-black mb-4">All levels · effective daily rates on an ongoing plan</h4>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full min-w-[720px] text-left">
                    <thead>
                      <tr className="border-b border-gold/30">
                        <th className="py-3 pr-4 font-inter text-caption uppercase tracking-wider text-gold">Level</th>
                        <th className="py-3 pr-4 font-inter text-caption uppercase tracking-wider text-gold">1 meal</th>
                        <th className="py-3 pr-4 font-inter text-caption uppercase tracking-wider text-gold">2 meals</th>
                        <th className="py-3 font-inter text-caption uppercase tracking-wider text-gold">Full day</th>
                      </tr>
                    </thead>
                    <tbody>
                      {chefLevels.map((item) => (
                        <tr key={item.name} className="border-b border-gray-200">
                          <td className="py-3 pr-4 font-inter text-body text-black">{item.name}</td>
                          <td className="py-3 pr-4 font-inter text-body text-gray-600">{formatAed(dailyRates[item.name]['1'])}</td>
                          <td className="py-3 pr-4 font-inter text-body text-gray-600">{formatAed(dailyRates[item.name]['2'])}</td>
                          <td className="py-3 font-inter text-body text-gray-600">{formatAed(dailyRates[item.name].full)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="font-inter text-body-sm text-gray-500 mb-10">
                  Table figures are effective rates on an ongoing plan of about 20 service days — not isolated one-day tickets. One meal is about 60% of full-day service, not 33%: travel, prep, the kitchen, the profile and management remain.
                </p>

                <div className="grid lg:grid-cols-2 gap-8 mb-10">
                  <div>
                    <h4 className="font-playfair text-h4 text-black mb-4">Every standard service includes</h4>
                    <ul className="space-y-3">
                      {householdIncludes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Check size={16} className="text-gold mt-1 flex-shrink-0" />
                          <span className="font-inter text-body-sm text-gray-500">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-playfair text-h4 text-black mb-4">Upgrade a meal or add people</h4>
                    <div className="flex flex-wrap gap-3 mb-4">
                      {upgrades.map((u) => (
                        <span key={u.to} className="px-3 py-2 border border-gray-200 font-inter text-body-sm text-gray-600">
                          to {u.to} AED {u.price}+
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {extraTeam.map((u) => (
                        <span key={u.role} className="px-3 py-2 border border-gray-200 font-inter text-body-sm text-gray-600">
                          {u.role} AED {u.price}+
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 items-center">
                  <FillFrame
                    src={mixPhoto.src}
                    alt={mixPhoto.alt}
                    width={mixPhoto.width}
                    height={mixPhoto.height}
                    className="aspect-[16/9] w-full"
                    objectPosition="center 35%"
                  />
                  <p className="font-inter text-body text-gray-500 leading-relaxed">
                    Keep the weekday level that fits the house. Add a specialist for one meal. You do not need Signature every day because you want an extraordinary dinner twice a month.
                  </p>
                </div>
              </div>
            )}
          </div>

          <p className="font-inter text-body text-gray-500 leading-relaxed mb-6">
            Events sit on top of the household arrangement — a birthday or a{' '}
            <Link to="/yachts" className="text-gold hover:text-gold-light underline underline-offset-4">yacht party</Link>
            {' '}is one complete event price. Food without a chef in the house every day is{' '}
            <Link to="/weekly-meal-prep-dubai" className="text-gold hover:text-gold-light underline underline-offset-4">weekly meal prep</Link>
            {' '}— from AED 1,898 a week.
          </p>
          <div className="bg-white border border-gold/30 p-8 max-w-[720px] mx-auto text-center">
            <p className="font-inter text-caption uppercase tracking-wider text-gold mb-3">{cateringRedirect.title}</p>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-6">{cateringRedirect.body}</p>
            <Link to={cateringRedirect.href} className="btn-secondary">
              {cateringRedirect.label}
            </Link>
          </div>
        </div>
      </section>

      {/* 07 Proof */}
      <section id="proof" className="bg-white section-padding scroll-mt-24">
        <div className="container-custom">
          <div className="max-w-[720px] mx-auto text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">Proof</span>
            <h2 className="font-playfair text-h2 text-black mb-4">What the house looks like when it works</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              Photographs from the household system, notes already published on myCHEF, and the Food Profile as an outcome — not another lecture.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-14">
            {dailyLifePhotos.map((photo) => (
              <figure key={photo.src}>
                <FillFrame
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  className="aspect-[4/5] w-full mb-3"
                />
                <figcaption className="font-inter text-caption uppercase tracking-wider text-gold">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>

          <p className="font-inter text-caption uppercase tracking-wider text-gold mb-6 text-center">Notes already published on myCHEF</p>
          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            {testimonials.map((item) => (
              <blockquote key={item.author} className="border border-gray-200 p-8 bg-cream/50">
                <p className="font-playfair text-h4 text-black leading-relaxed mb-6">“{item.quote}”</p>
                <footer>
                  <p className="font-inter text-body-sm text-black">{item.author}</p>
                  <p className="font-inter text-caption uppercase tracking-wider text-gold mt-1">{item.event}</p>
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="grid lg:grid-cols-[48fr_52fr] gap-10 items-start mb-16">
            <FillFrame
              src={rotationPhoto.src}
              alt={rotationPhoto.alt}
              width={rotationPhoto.width}
              height={rotationPhoto.height}
              className="aspect-[4/5] w-full"
            />
            <div>
              <p className="font-inter text-caption uppercase tracking-wider text-gold mb-3">{foodProfileDemo.eyebrow}</p>
              <h3 className="font-playfair text-h3 text-black mb-2">{foodProfileDemo.house}</h3>
              <p className="font-inter text-caption text-gray-500 mb-6">{foodProfileDemo.note}</p>
              <dl className="space-y-3 mb-8">
                {foodProfileDemo.fields.map((row) => (
                  <div key={row.k} className="grid grid-cols-[120px_1fr] gap-3 border-b border-gray-200 pb-3">
                    <dt className="font-inter text-caption uppercase tracking-wider text-gold">{row.k}</dt>
                    <dd className="font-inter text-body-sm text-black">{row.v}</dd>
                  </div>
                ))}
              </dl>
              <p className="font-playfair text-h4 text-black mb-6">{foodProfileDemo.closer}</p>
              <h3 className="font-playfair text-h4 text-black mb-3">{feedbackPhilosophy.title}</h3>
              <p className="font-inter text-body text-gray-500 leading-relaxed">{feedbackPhilosophy.body}</p>
            </div>
          </div>

          <h3 className="font-playfair text-h3 text-black text-center mb-4">Questions buyers actually ask</h3>
          <p className="font-inter text-body-sm text-gray-500 text-center max-w-[560px] mx-auto mb-10 leading-relaxed">
            Short answers. The long version is a conversation with your household manager.
          </p>
          <dl className="grid md:grid-cols-2 gap-6 mb-12">
            {buyerQuestions.map((item) => (
              <div key={item.q} className="border border-gray-200 p-6">
                <dt className="font-playfair text-h4 text-black mb-2">{item.q}</dt>
                <dd className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.a}</dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            {inspectUs.map((item) => (
              <Link key={item.href} to={item.href} className="btn-secondary text-center">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-charcoal">
        <FillFrame
          src={wherePhoto.src}
          alt={wherePhoto.alt}
          width={wherePhoto.width}
          height={wherePhoto.height}
          className="aspect-[21/9] w-full min-h-[220px]"
          objectPosition="center 60%"
        />
        <div className="container-custom py-20">
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

      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-4">
            What should I know before hiring a private chef in Dubai?
          </h2>
          <p className="font-inter text-body-sm text-gray-500 text-center mb-8 leading-relaxed">
            Extra detail only. The buyer questions above are the ones that should already be obvious.
          </p>
          <FaqAccordion items={[...faqs]} defaultOpen={-1} />
        </div>
      </section>

      <section className="bg-charcoal py-20">
        <div className="container-custom max-w-[800px] text-center">
          <h3 className="font-playfair text-h3 text-white mb-4">Used the household service?</h3>
          <p className="font-inter text-body text-gray-400 leading-relaxed mb-6">
            We do not invent reviews for this page. If you have used the service, leave a review and receive AED 50 credit toward your next private chef booking.
          </p>
          <Link to="/review" className="btn-primary">
            Leave a Review
          </Link>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="container-custom">
          <h3 className="font-playfair text-h3 text-white text-center mb-10">
            Need a one-night dinner, or food without a chef in the house?
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

      <section id="start" className="relative scroll-mt-24 min-h-[70vh] md:min-h-[78vh] flex items-end">
        <FillFrame
          src={ctaPhoto.src}
          alt={ctaPhoto.alt}
          width={ctaPhoto.width}
          height={ctaPhoto.height}
          className="absolute inset-0"
          objectPosition="left center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
        <div className="relative z-10 container-custom py-16 md:py-20">
          <p className="font-inter text-caption uppercase tracking-wider text-gold mb-3">If this is the house you want</p>
          <h2 className="font-playfair text-h2 text-white mb-4 max-w-[720px]">{DOMINANT_MESSAGE}</h2>
          <p className="font-inter text-body-lg text-white/85 max-w-[560px] mb-8 leading-relaxed">
            Tell us how you live. We recommend the setup. From AED 18,000 a month on a standing plan. New households from five service days. Groceries separate. One night is catering.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-3 mb-8">
            <a href="#household" className="btn-secondary">See the three setups</a>
            <Link to="/catering-dubai" className="btn-secondary">One night is catering</Link>
          </div>
          <QuotePair className="items-start" />
        </div>
      </section>
    </div>
  )
}
