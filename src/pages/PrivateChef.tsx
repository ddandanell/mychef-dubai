import { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { Check, Phone, ArrowRight, ArrowDown } from 'lucide-react'
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
  backupAlone,
  backupMychef,
  bookingMinimums,
  calibration,
  cateringRedirect,
  chefLevelIntro,
  chefLevelPhoto,
  chefLevels,
  comparison,
  ctaPhoto,
  dailyLifePhotos,
  dailyRates,
  doPromise,
  dontPromise,
  extraTeam,
  faqs,
  featuredChefs,
  foodProfileDemo,
  formatAed,
  heroFacts,
  higherNotBetter,
  howItWorksPhoto,
  householdIncludes,
  inspectUs,
  journeyPhotos,
  levelSpecialtyExamples,
  levelVsSpecialty,
  lifeStages,
  locations,
  managerAsks,
  managerFlow,
  managerPhoto,
  mixPhoto,
  networkSpecialties,
  pageSequence,
  processSteps,
  profileQuestions,
  proofItems,
  relatedServices,
  rotationPhoto,
  scoreDemo,
  systemMap,
  upgrades,
  vettingSteps,
  whatThisIs,
  whenThingsChange,
  wherePhoto,
  whoDoesWhatPhoto,
  whoForPhoto,
  whyIndependentPhoto,
  yearLaterPhoto,
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
        'myCHEF organises vetted independent chefs for standing household private chef arrangements in Dubai homes and villas. New households from five service days. Returning households from two.',
    },
    {
      '@type': 'AggregateOffer',
      name: 'Private chef household arrangements in Dubai — monthly starting prices',
      description:
        'Starting monthly prices for a standing private chef arrangement on about 20 service days. Groceries separate. New households start at five service days. Returning clients from two. The effective daily rate starts from AED 900 at Senior Chef, one meal a day. One-night dinners are catering, not this product.',
      url: 'https://www.mychef.ae/private-chef-dubai#household',
      priceCurrency: 'AED',
      lowPrice: '18000',
      highPrice: '100000',
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

function RatesBar({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-black border-y border-gold/25 ${className}`}>
      <div className="container-custom py-3 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3 sm:gap-6">
        <p className="font-inter text-caption uppercase tracking-wider text-gold text-center">Standing household</p>
        <a href="#household" className="px-4 py-2 font-inter text-body-sm uppercase tracking-wider border border-gold text-gold hover:bg-gold hover:text-black transition-colors text-center">
          From 5 days · see rates
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
              <ArrowDown size={16} className={`my-3 ${accent ? 'text-gold' : 'text-gold'}`} aria-hidden />
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}

function ScoreStars({ value }: { value: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${value} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={n <= value ? 'text-gold' : 'text-gray-300'} aria-hidden>
          ★
        </span>
      ))}
    </span>
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
  const [level, setLevel] = useState<ChefLevelName>('Senior Chef')
  const [meals, setMeals] = useState<MealPlan>('2')

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
        overlay="left"
        align="left"
        imagePosition="78% 50%"
      >
        <div className="mt-10 grid sm:grid-cols-3 gap-4 w-full max-w-4xl text-left">
          {heroFacts.map((fact) => (
            <a
              key={fact.title}
              href="#household"
              className="block bg-black/55 border border-gold/40 hover:border-gold p-5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <span className="font-inter text-caption uppercase tracking-wider text-gold">{fact.eyebrow}</span>
              <p className="font-playfair text-h4 text-white mt-2">{fact.title}</p>
              <p className="font-inter text-body-sm text-white/80 mt-2 leading-relaxed">{fact.body}</p>
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

      {/* 01 What myCHEF is */}
      <section id="what-this-is" className="bg-white scroll-mt-24">
        <div className="grid lg:grid-cols-[52fr_48fr] lg:min-h-[92vh] items-stretch">
          <div className="flex items-center section-padding">
            <div className="max-w-[580px] mx-auto lg:ml-auto lg:mr-16 w-full">
              <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">What myCHEF is</span>
              <h2 className="font-playfair text-h2 text-black mb-6">The system, not just a chef</h2>
              <div className="lg:hidden mb-8 -mx-4 sm:mx-0">
                <FillFrame
                  src={photos[1].src}
                  alt={photos[1].alt}
                  width={photos[1].width}
                  height={photos[1].height}
                  className="aspect-[4/5] w-full"
                />
              </div>
              {whatThisIs.map((para) => (
                <p key={para.slice(0, 40)} className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5 last:mb-0">
                  {para}
                </p>
              ))}
            </div>
          </div>
          <div className="hidden lg:block relative min-h-[92vh]">
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
        <div className="container-custom section-padding pt-0 pb-20">
          <p className="font-inter text-caption uppercase tracking-wider text-gold mb-3 text-center">The machine</p>
          <h3 className="font-playfair text-h3 text-black text-center mb-4">How a private chef through myCHEF actually runs</h3>
          <p className="font-inter text-body-sm text-gray-500 text-center max-w-[640px] mx-auto mb-10 leading-relaxed">
            One household does not need fifty chefs. It needs a manager, a record, a regular chef, and access to the rest. That is the product.
          </p>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {systemMap.map((step, i) => (
              <li key={step.n} className="border border-gray-200 p-5 bg-cream relative">
                <p className="font-playfair text-h4 text-gold mb-2">{step.n}</p>
                <p className="font-inter text-body text-black leading-relaxed">{step.label}</p>
                {i < systemMap.length - 1 && i % 4 !== 3 && (
                  <span className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-gold" aria-hidden>
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
          <p className="font-inter text-body-sm text-gray-500 text-center mt-8 leading-relaxed">
            Feedback updates the Food Profile. The Food Profile makes the next service better. That is why the longer you stay, the less you should have to explain.
          </p>
        </div>
      </section>

      {/* 02 Which service */}
      <section id="which-service" className="bg-cream section-padding scroll-mt-24">
        <div className="container-custom">
          <div className="text-center max-w-[760px] mx-auto mb-10">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">Who this is for</span>
            <h2 className="font-playfair text-h2 text-black">A chef for the house — not for one night</h2>
            <p className="font-inter text-body text-gray-500 mt-4 leading-relaxed">
              If you want breakfast to appear without briefing it, a villa that eats for weeks, or a family that does not want another person to manage — this is the page. If you want one dinner, that is catering.
            </p>
          </div>
          <FillFrame
            src={whoForPhoto.src}
            alt={whoForPhoto.alt}
            width={whoForPhoto.width}
            height={whoForPhoto.height}
            className="aspect-[16/9] w-full mb-12"
            objectPosition="center 55%"
          />
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {whoFor.map((item) => (
              <div key={item.title} className="bg-white p-6 border border-gray-200">
                <h3 className="font-playfair text-h4 text-black mb-2">{item.title}</h3>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="bg-white border border-gold/30 p-8 max-w-[720px] mx-auto text-center">
            <p className="font-inter text-caption uppercase tracking-wider text-gold mb-3">{cateringRedirect.title}</p>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-6">{cateringRedirect.body}</p>
            <Link to={cateringRedirect.href} className="btn-secondary">
              {cateringRedirect.label}
            </Link>
          </div>
        </div>
      </section>

      {/* 03 Why not hire independently */}
      <section id="why-not-hire" className="bg-black section-padding scroll-mt-24">
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
              <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">Why not hire independently</span>
              <h2 className="font-playfair text-h2 text-white">A freelancer can look cheaper on day one</h2>
              <p className="font-inter text-body text-gray-400 mt-4 leading-relaxed">
                You are paying for the person only. Finding, backup, quality, specialists, paperwork and the real cost of covering a Sunday are unpaid work — yours. myCHEF is the person plus the system that makes the person usable.
              </p>
            </div>
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
        <div className="container-custom">
          <h2 className="font-playfair text-h2 text-black text-center mb-4">How a private chef through myCHEF works</h2>
          <p className="font-inter text-body text-gray-500 text-center max-w-[640px] mx-auto mb-8 leading-relaxed">
            Five stages. The same sequence whether you are booking one dinner or a house that eats here every weekday.
          </p>
          <FillFrame
            src={howItWorksPhoto.src}
            alt={howItWorksPhoto.alt}
            width={howItWorksPhoto.width}
            height={howItWorksPhoto.height}
            className="aspect-[16/9] w-full mb-10"
            objectPosition="center 70%"
          />
          <ol className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-14">
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
          <div className="max-w-[1000px] mx-auto space-y-10">
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
            A new household starts at five service days. Once we know you, from two. During business hours we typically reply within 15 minutes.
          </p>
        </div>
      </section>

      {/* Household manager + Food Profile */}
      <section id="your-manager" className="bg-white section-padding scroll-mt-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[42fr_58fr] gap-10 mb-16 items-start">
            <figure>
              <FillFrame
                src={managerPhoto.src}
                alt={managerPhoto.alt}
                width={managerPhoto.width}
                height={managerPhoto.height}
                className="aspect-[4/5] w-full"
              />
              <figcaption className="mt-3 font-inter text-caption text-gray-500 leading-relaxed">
                {managerPhoto.caption}
              </figcaption>
            </figure>
            <div>
              <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">Ongoing household</span>
              <h2 className="font-playfair text-h2 text-black mb-4">Your myCHEF Household Manager</h2>
              <p className="font-inter text-body text-gray-500 leading-relaxed mb-6">
                Once you are an ongoing client, one person is responsible for the house. They know the Food Profile, the usual chefs, what has worked and what has not. Chefs change. That person does not. This is a role in the service — not a celebrity, and not another person you have to manage.
              </p>
              <div className="flex flex-wrap items-center gap-3 mb-8">
                {managerFlow.map((node, i) => (
                  <span key={node} className="inline-flex items-center gap-3">
                    <span className="px-4 py-2 border border-gold bg-black text-gold font-inter text-caption uppercase tracking-wider">
                      {node}
                    </span>
                    {i < managerFlow.length - 1 && (
                      <ArrowRight size={16} className="text-gold" aria-hidden />
                    )}
                  </span>
                ))}
              </div>
              <ul className="space-y-4">
                {managerAsks.map((item) => (
                  <li key={item.q} className="border-l-2 border-gold pl-4">
                    <p className="font-playfair text-h4 text-black">{item.q}</p>
                    <p className="font-inter text-body-sm text-gray-500 mt-1">{item.a}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border border-gray-200 bg-cream p-6 md:p-10 max-w-[720px] ml-auto">
            <p className="font-inter text-caption uppercase tracking-wider text-gold mb-2">{foodProfileDemo.eyebrow}</p>
            <h3 className="font-playfair text-h3 text-black mb-2">{foodProfileDemo.house}</h3>
            <p className="font-inter text-caption text-gray-500 mb-6">{foodProfileDemo.note}</p>
            <dl className="space-y-3">
              {foodProfileDemo.fields.map((row) => (
                <div key={row.k} className="grid grid-cols-[140px_1fr] gap-3 border-b border-gray-200 pb-3 last:border-0">
                  <dt className="font-inter text-caption uppercase tracking-wider text-gold">{row.k}</dt>
                  <dd className="font-inter text-body-sm text-black">{row.v}</dd>
                </div>
              ))}
            </dl>
            <p className="font-playfair text-h4 text-black mt-8">{foodProfileDemo.closer}</p>
          </div>
        </div>
      </section>

      {/* 05 The life you are buying */}
      <section id="the-life" className="bg-charcoal section-padding scroll-mt-24">
        <div className="container-custom">
          <div className="max-w-[760px] mx-auto text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">What this looks like</span>
            <h2 className="font-playfair text-h2 text-white mb-6">You are not buying a Food Profile</h2>
            <p className="font-inter text-body-lg text-gray-300 leading-relaxed mb-4">
              Monday morning, breakfast appears exactly how they like it. The children get food they will actually eat. Friday they suddenly want Japanese. Friends come Saturday. The usual chef takes Sunday off. Nobody in the family needs to coordinate any of it. That is the life. The Food Profile is only how we remember it.
            </p>
            <p className="font-inter text-body text-gray-400 leading-relaxed">
              We don’t pretend we know everything immediately. Your first week is calibration.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {lifeStages.map((stage) => (
              <div key={stage.when} className="border border-gold/25 p-8 bg-black/40">
                <p className="font-inter text-caption uppercase tracking-wider text-gold mb-3">{stage.when}</p>
                <h3 className="font-playfair text-h3 text-white mb-4">{stage.title}</h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{stage.body}</p>
              </div>
            ))}
          </div>
          <div className="max-w-[900px] mx-auto">
            <h3 className="font-playfair text-h3 text-white text-center mb-8">Your first week is calibration</h3>
            <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {calibration.map((item) => (
                <li key={item.when} className="border border-gold/25 p-5 bg-black/40">
                  <p className="font-inter text-caption uppercase tracking-wider text-gold mb-2">{item.when}</p>
                  <p className="font-inter text-body-sm text-gray-200 leading-relaxed">{item.title}</p>
                </li>
              ))}
            </ol>
            <p className="mt-10 font-playfair text-h4 text-white text-center leading-relaxed mb-12">
              After a year you should not be re-explaining breakfast.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-10">
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
            <figure>
              <FillFrame
                src={yearLaterPhoto.src}
                alt={yearLaterPhoto.alt}
                width={yearLaterPhoto.width}
                height={yearLaterPhoto.height}
                className="aspect-[4/5] w-full"
                objectPosition="center 35%"
              />
              <figcaption className="mt-4 font-inter text-body-sm text-gray-400 text-center">
                Month 12. The chef already knows breakfast. Nobody is re-briefing the kitchen.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Who does what */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <h2 className="font-playfair text-h2 text-black text-center mb-4">Who does what</h2>
          <p className="font-inter text-body text-gray-500 text-center max-w-[640px] mx-auto mb-8 leading-relaxed">
            The split is the product. If you end up doing the chef’s job or our job, the service has failed.
          </p>
          <FillFrame
            src={whoDoesWhatPhoto.src}
            alt={whoDoesWhatPhoto.alt}
            width={whoDoesWhatPhoto.width}
            height={whoDoesWhatPhoto.height}
            className="aspect-[16/9] w-full mb-12"
            objectPosition="center 40%"
          />
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
            objectPosition="center 40%"
          />
          <div className="flex items-center section-padding">
            <div className="max-w-[560px] mx-auto lg:ml-16 lg:mr-auto">
              <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">The chefs</span>
              <h2 className="font-playfair text-h2 text-white mb-6">We do not fill a slot with whoever is free</h2>
              <p className="font-inter text-body text-gray-400 leading-relaxed mb-4">
                This is a show of the people — not a locked roster. We work with 50+ professionals and change who we put forward depending on what you need. If the right match is not here, we find it.
              </p>
              <p className="font-inter text-body text-gray-400 leading-relaxed mb-4">
                Chefs we put forward typically come from restaurant kitchens. A CV is not enough. Matching is the work of myCHEF: the right professional to the right house, and a specialist when you want one — including a yacht chef in Dubai Marina. A standard household service includes one chef and one assistant as part of the myCHEF arrangement, not a person you put on payroll.
              </p>
              <p className="font-inter text-body text-gray-400 leading-relaxed mb-6">
                A CV is not enough. Private service requires knowing when to speak and when not to, respecting someone’s home, being reliable, listening, and making excellent food. See{' '}
                <Link to="/how-we-vet-our-chefs" className="text-gold hover:text-gold-light underline underline-offset-4">how we vet our chefs</Link>
                {' '}and{' '}
                <Link to="/our-chefs" className="text-gold hover:text-gold-light underline underline-offset-4">our chefs</Link>.
              </p>
              <p className="font-inter text-body-sm text-gray-500 leading-relaxed">
                Level is a myCHEF classification — experience, capability and demonstrated performance. Specialty is separate. A Senior Chef is not “worse.” A Signature Chef is not automatically “better.”
              </p>
            </div>
          </div>
        </div>
        <div className="container-custom section-padding pt-4 pb-20">
          <p className="font-inter text-caption uppercase tracking-wider text-gold mb-3 text-center">Chefs currently listed in the network</p>
          <h3 className="font-playfair text-h3 text-white text-center mb-4">Independent partners — not a staff roster</h3>
          <p className="font-inter text-body-sm text-gray-400 text-center max-w-[640px] mx-auto mb-8 leading-relaxed">
            Four chefs we currently present on the site. Matching is not limited to them. 50+ professionals in the network. These are examples, not a fixed roster. Independent licensed partners — not employees.
          </p>
          <p className="font-inter text-caption uppercase tracking-wider text-gold mb-4 text-center">50+ chefs · specialties in the network</p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {networkSpecialties.map((tag) => (
              <span key={tag} className="px-3 py-1.5 border border-gold/30 font-inter text-caption uppercase tracking-wider text-gray-300">
                {tag}
              </span>
            ))}
          </div>
          <p className="font-playfair text-h4 text-white text-center mb-12">
            One household doesn’t need 50 chefs. It needs access to the right one.
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
                  <p className="font-inter text-body-sm text-gray-400 mb-3">{chef.cuisine}</p>
                  <p className="font-inter text-caption text-gray-500">{chef.specialties.join(' · ')}</p>
                  <p className="font-inter text-body-sm text-gray-500 mt-2">{chef.experience}</p>
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
              <p className="font-inter text-body text-gray-400 leading-relaxed mb-6">
                After approximately two days we contact you separately from the chef. A sudden terrible score makes us ask: poor food, an unlearned preference, a misunderstanding, a mistake, or an unreasonable request? You are allowed to make a mistake. You are expected to learn from it.
              </p>
              <div className="border border-gold/25 p-6 mb-6">
                <p className="font-inter text-caption uppercase tracking-wider text-gold mb-2">{scoreDemo.eyebrow}</p>
                <p className="font-inter text-caption text-gray-500 mb-4">{scoreDemo.note}</p>
                <p className="font-playfair text-h4 text-white mb-4">How was this week?</p>
                <ul className="space-y-2 mb-6">
                  {scoreDemo.scores.map((row) => (
                    <li key={row.label} className="flex items-center justify-between font-inter text-body-sm text-gray-300">
                      <span>{row.label}</span>
                      <ScoreStars value={row.value} />
                    </li>
                  ))}
                </ul>
                <ol className="space-y-3">
                  {scoreDemo.steps.map((step) => (
                    <li key={step.title}>
                      <p className="font-inter text-body-sm text-gold">{step.title}</p>
                      <p className="font-inter text-body-sm text-gray-400">{step.body}</p>
                    </li>
                  ))}
                </ol>
                <p className="font-inter text-body-sm text-gray-400 mt-5">{scoreDemo.chefsFeedback}</p>
              </div>
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

      {/* 07 Household rates */}
      <section id="household" className="bg-cream scroll-mt-24">
        <div className="relative min-h-[50vh] md:min-h-[65vh]">
          <FillFrame
            src={photos[3].src}
            alt={photos[3].alt}
            width={photos[3].width}
            height={photos[3].height}
            className="absolute inset-0"
            objectPosition="center 45%"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
          <div className="relative z-10 container-custom min-h-[50vh] md:min-h-[65vh] flex flex-col justify-end pb-12 md:pb-16">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">The household plan</span>
            <h2 className="font-playfair text-h2 text-white mb-4 max-w-[760px]">A standing private chef arrangement</h2>
            <p className="font-inter text-body text-white/85 leading-relaxed max-w-[760px]">
              Choose the level of chef, then how often you want them. New households start at five service days. Returning clients from two. Groceries are separate. Standard week is five service days.
            </p>
          </div>
        </div>
        <div className="container-custom section-padding">
          <div className="max-w-[760px] mb-10">
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-4">
              The numbers below are starting rates for a <strong className="font-medium text-black">standing household plan</strong>. The “day” figure is the <strong className="font-medium text-black">effective daily rate</strong> of that plan — not a walk-in ticket for tomorrow, and not a one-night dinner.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              Independent licensed partners cook. myCHEF organises the service. You do not need a full day if you only want breakfast. You do not need a Signature Chef every day because you want one extraordinary dinner a month. Groceries are separate. A single night is{' '}
              <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4">catering</Link>.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {bookingMinimums.map((item) => (
              <div key={item.who} className="bg-white border border-gray-200 p-6">
                <p className="font-inter text-caption uppercase tracking-wider text-gold mb-2">{item.who}</p>
                <p className="font-playfair text-h4 text-black mb-3">{item.min}</p>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.why}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-gray-200 p-6 md:p-10 mb-12">
            <h3 className="font-playfair text-h3 text-black mb-2">Starting rates — day, week and month</h3>
            <p className="font-inter text-body-sm text-gray-500 mb-6">Effective daily rate on a standing plan. New households are quoted from five days. Returning households from two. Names below are myCHEF chef levels — not restaurant job titles, and not an external qualification.</p>
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
          </div>

          <div id="chef-levels" className="mb-12 scroll-mt-24">
            <div className="grid lg:grid-cols-[42fr_58fr] gap-8 items-center mb-8">
              <FillFrame
                src={chefLevelPhoto.src}
                alt={chefLevelPhoto.alt}
                width={chefLevelPhoto.width}
                height={chefLevelPhoto.height}
                className="aspect-[3/2] w-full"
                objectPosition="center 30%"
              />
              <div>
                <p className="font-inter text-caption uppercase tracking-wider text-gold mb-3">myCHEF chef levels</p>
                <h3 className="font-playfair text-h3 text-black mb-4">How our chef levels work</h3>
                {chefLevelIntro.map((para) => (
                  <p key={para.slice(0, 48)} className="font-inter text-body text-gray-500 leading-relaxed mb-4">
                    {para}
                  </p>
                ))}
              </div>
            </div>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-8 max-w-[760px]">
              <strong className="font-medium text-black">Not sure? Don’t choose a level. Tell us how you live and we’ll recommend one.</strong>
            </p>
            <div className="space-y-4 mb-10">
              {chefLevels.map((item) => (
                <div key={item.name} className="bg-white border border-gray-200 p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
                    <h4 className="font-playfair text-h4 text-black">{item.name}</h4>
                    <p className="font-inter text-body-sm text-gold">From AED {item.monthlyFull}+ / month full day</p>
                  </div>
                  <p className="font-inter text-caption uppercase tracking-wider text-gold mb-3">{item.useCase}</p>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="bg-white border border-gold/30 p-6 md:p-8 mb-6">
              <h4 className="font-playfair text-h4 text-black mb-3">{higherNotBetter.title}</h4>
              <p className="font-inter text-body text-gray-500 leading-relaxed">{higherNotBetter.body}</p>
            </div>
            <div className="bg-white border border-gray-200 p-6 md:p-8">
              <h4 className="font-playfair text-h4 text-black mb-3">{levelVsSpecialty.title}</h4>
              <div className="grid sm:grid-cols-[1fr_auto_1fr] items-center gap-4 mb-6">
                <div className="border border-gold/40 p-5 text-center">
                  <p className="font-inter text-caption uppercase tracking-wider text-gold mb-2">Level</p>
                  <p className="font-playfair text-h4 text-black">Experience and performance</p>
                </div>
                <p className="font-playfair text-h3 text-gold text-center">×</p>
                <div className="border border-gold/40 p-5 text-center">
                  <p className="font-inter text-caption uppercase tracking-wider text-gold mb-2">Specialty</p>
                  <p className="font-playfair text-h4 text-black">What they cook exceptionally</p>
                </div>
              </div>
              <p className="font-inter text-body text-gray-500 leading-relaxed mb-3">{levelVsSpecialty.level}</p>
              <p className="font-inter text-body text-gray-500 leading-relaxed mb-3">{levelVsSpecialty.specialty}</p>
              <ul className="space-y-2 mb-4">
                {levelSpecialtyExamples.map((row) => (
                  <li key={row.level} className="font-inter text-body-sm text-gray-500">
                    <strong className="font-medium text-black">{row.level}</strong> {row.specialty}.
                  </li>
                ))}
              </ul>
              <p className="font-inter text-body text-gray-500 leading-relaxed mb-4">{levelVsSpecialty.body}</p>
              <p className="font-inter text-body text-gray-500 leading-relaxed">{levelVsSpecialty.close}</p>
            </div>
          </div>

          <h3 className="font-playfair text-h3 text-black mb-4">Senior Chef · starting prices</h3>
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
                  ['1 meal / day', '1'] as const,
                  ['2 meals / day', '2'] as const,
                  ['Full day · 3 meals', 'full'] as const,
                ]).map(([label, key]) => {
                  const daily = dailyRates['Senior Chef'][key]
                  return (
                    <tr key={key} className="border-b border-gray-200">
                      <td className="py-3 px-4 font-inter text-body text-black">{label}</td>
                      <td className="py-3 px-4 font-inter text-body text-gray-600">{formatAed(daily)}</td>
                      <td className="py-3 px-4 font-inter text-body text-gray-600">{formatAed(daily * 5)}</td>
                      <td className="py-3 px-4 font-inter text-body text-gray-600">{formatAed(daily * 20)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <p className="font-inter text-body-sm text-gray-500 mb-12">
            Starting example: Senior Chef · 2 meals / day · AED 24,000+ / month. Every standard service includes 1 private chef + 1 assistant + the myCHEF system.
          </p>

          <h3 className="font-playfair text-h3 text-black mb-4">All myCHEF chef levels · effective daily rates on an ongoing plan</h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full min-w-[880px] text-left bg-white">
              <thead>
                <tr className="border-b border-gold/30">
                  <th className="py-3 px-4 font-inter text-caption uppercase tracking-wider text-gold">Level</th>
                  <th className="py-3 px-4 font-inter text-caption uppercase tracking-wider text-gold">What it means</th>
                  <th className="py-3 px-4 font-inter text-caption uppercase tracking-wider text-gold">1 meal</th>
                  <th className="py-3 px-4 font-inter text-caption uppercase tracking-wider text-gold">2 meals</th>
                  <th className="py-3 px-4 font-inter text-caption uppercase tracking-wider text-gold">Full day</th>
                </tr>
              </thead>
              <tbody>
                {chefLevels.map((item) => (
                  <tr key={item.name} className="border-b border-gray-200 align-top">
                    <td className="py-3 px-4 font-inter text-body text-black whitespace-nowrap">{item.name}</td>
                    <td className="py-3 px-4 font-inter text-body-sm text-gray-600 leading-relaxed">{item.meaning}</td>
                    <td className="py-3 px-4 font-inter text-body text-gray-600 whitespace-nowrap">{formatAed(dailyRates[item.name]['1'])}</td>
                    <td className="py-3 px-4 font-inter text-body text-gray-600 whitespace-nowrap">{formatAed(dailyRates[item.name]['2'])}</td>
                    <td className="py-3 px-4 font-inter text-body text-gray-600 whitespace-nowrap">{formatAed(dailyRates[item.name].full)}</td>
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

          <div className="bg-white border border-gray-200 mb-12 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <FillFrame
                src={mixPhoto.src}
                alt={mixPhoto.alt}
                width={mixPhoto.width}
                height={mixPhoto.height}
                className="aspect-[16/9] lg:aspect-auto lg:min-h-full w-full"
                objectPosition="center 35%"
              />
              <div className="p-8">
            <h3 className="font-playfair text-h3 text-black mb-4">You can mix it</h3>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-6">
              Everyday: keep the chef level that makes sense for the house. Special occasion: add the right specialist for one meal. Different cuisine: rotate in a specialist. You do not need a Signature Chef every day because you want an extraordinary dinner twice a month. Next week you could keep your Senior Chef and bring in a Japanese specialist, an Italian specialist, or another chef depending on what you want.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-200 p-6">
                <p className="font-inter text-caption uppercase tracking-wider text-gold mb-2">Example week</p>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed mb-3">
                  Monday–Friday Senior Chef · 2 meals: from AED 6,000. Friday evening — add a Master Chef (the weekday arrangement still covers the rest of the week): from AED 3,500. That week: from AED 9,500 before groceries.
                </p>
              </div>
              <div className="border border-gray-200 p-6">
                <p className="font-inter text-caption uppercase tracking-wider text-gold mb-2">Example month</p>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed">
                  Senior Chef · 2 meals/day: from AED 24,000. Two Master Chef dinners: 2 × AED 3,500+ = AED 7,000+. Example month: from AED 31,000.
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
          <div className="grid lg:grid-cols-[48fr_52fr] gap-8 mb-14 items-center">
            <FillFrame
              src={rotationPhoto.src}
              alt={rotationPhoto.alt}
              width={rotationPhoto.width}
              height={rotationPhoto.height}
              className="aspect-[4/5] w-full"
            />
            <div>
              <p className="font-inter text-caption uppercase tracking-wider text-gold mb-3">Friday wants Japanese</p>
              <h3 className="font-playfair text-h3 text-black mb-4">Keep the weekday chef. Add the specialist.</h3>
              <p className="font-inter text-body text-gray-500 leading-relaxed">
                The regular chef stays on the stove. A specialist plates the dinner that needs another kitchen. Your household manager coordinates both. You do not make a second hire, and you do not replace the person who already knows breakfast.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <FlowColumn title="Hiring independently" steps={backupAlone} />
            <FlowColumn title="With myCHEF" steps={backupMychef} accent />
          </div>
          <p className="font-inter text-body-sm text-gray-500 text-center max-w-[640px] mx-auto mb-12 leading-relaxed">
            An equivalent chef cannot always be guaranteed. If one is not available, we tell you — then we give you the options. We do not fill a slot with whoever is free and hope you will not notice.
          </p>
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
            What we promise is a system for dealing with reality when it happens. If an equivalent chef is not available, we tell you, then we give you the options. We do not claim an allergic reaction can never happen. Chefs are professionals, not machines. We do not publish invented reviews.
          </p>
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
          <h2 className="font-playfair text-h2 text-white mb-4 max-w-[640px]">Start the household plan</h2>
          <p className="font-inter text-body-lg text-white/85 max-w-[560px] mb-8 leading-relaxed">
            From AED 900 a day on a standing plan. New households from five service days. Returning from two. Groceries separate. If you want one night, that is catering — don’t start here.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-3 mb-8">
            <a href="#household" className="btn-secondary">See day, week and month</a>
            <Link to="/catering-dubai" className="btn-secondary">One night is catering</Link>
          </div>
          <QuotePair className="items-start" />
        </div>
      </section>
    </div>
  )
}
