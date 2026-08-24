import { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import {
  Check, Phone, ArrowDown, MessageCircle, CalendarDays, RefreshCw, Wallet,
  ClipboardList, NotebookPen, ChefHat, Star, Users, UserRound, TrendingUp,
} from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import ProcessJourney from '../components/ProcessJourney'
import HouseholdManager from '../components/HouseholdManager'
import FoodProfile from '../components/FoodProfile'
import { Section, Container, Eyebrow, DisplayHeading, BodyCopy, EditorialImage, EditorialCard } from '../components/system'
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
  chefLevelIntro,
  chefLevelPhoto,
  chefLevels,
  comparison,
  ctaPhoto,
  dailyRates,
  doPromise,
  dontPromise,
  extraTeam,
  faqs,
  featuredChefs,
  formatAed,
  heroFacts,
  higherNotBetter,
  howItWorksPhoto,
  householdIncludes,
  inspectUs,
  levelSpecialtyExamples,
  levelVsSpecialty,
  lifeStages,
  locations,
  mixPhoto,
  networkSpecialties,
  processSteps,
  profileQuestions,
  proofItems,
  systemMap,
  upgrades,
  vettingSteps,
  whatThisIs,
  whenThingsChange,
  wherePhoto,
  whoDoesWhatPhoto,
  whoForPhoto,
  whyIndependentPhoto,
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

const heroFactIcons = [CalendarDays, RefreshCw, Wallet] as const
const systemMapIcons = [UserRound, ClipboardList, NotebookPen, ChefHat, Users, Star, RefreshCw, TrendingUp] as const
const whoDoesWhatIcons = [UserRound, ChefHat, ClipboardList] as const

function RatesBar({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-black border-y border-gold/25 ${className}`}>
      <div className="container-custom py-2.5 flex flex-row items-center justify-between sm:justify-center gap-3 sm:gap-6">
        <p className="hidden sm:block font-inter text-caption uppercase tracking-wider text-gold text-center">Standing household</p>
        <a href="#household" className="px-3 sm:px-4 py-2 font-inter text-caption sm:text-body-sm uppercase tracking-wider border border-gold text-gold hover:bg-gold hover:text-black transition-colors text-center whitespace-nowrap">
          From 5 days · see rates
        </a>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 font-inter text-caption sm:text-body-sm uppercase tracking-wider bg-gold text-black hover:bg-gold/85 transition-colors whitespace-nowrap"
        >
          <MessageCircle size={15} aria-hidden />
          WhatsApp
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
        videoSrc="/videos/private-chef-hero.mp4"
        cta={{ label: 'Get My Private Chef Quote', href: INQUIRY_LINK }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Private Chef Dubai' }]}
        minHeight="full"
        overlay="cinematic"
        align="left"
        titleEmphasis
        imagePosition="78% 50%"
      >
        <div className="mt-10 grid sm:grid-cols-3 gap-4 w-full max-w-4xl text-left">
          {heroFacts.map((fact, i) => (
            <a
              key={fact.title}
              href="#household"
              className="block bg-black/55 border border-gold/40 hover:border-gold p-5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <span className="flex items-center gap-2 font-inter text-caption uppercase tracking-wider text-gold">
                {(() => { const Icon = heroFactIcons[i % heroFactIcons.length]; return <Icon size={15} aria-hidden /> })()}
                {fact.eyebrow}
              </span>
              <p className="font-playfair text-h4 text-white mt-2">{fact.title}</p>
              <p className="font-inter text-body-sm text-white/80 mt-2 leading-relaxed">{fact.body}</p>
            </a>
          ))}
        </div>
      </PageHero>
      <TrustSignalStrip />
      <RatesBar />

      {/* 01 What myCHEF is */}
      <section id="what-this-is" className="bg-white scroll-mt-24">
        <div className="grid lg:grid-cols-[52fr_48fr] items-center">
          <div className="flex items-center section-padding">
            <div className="max-w-[580px] mx-auto lg:ml-auto lg:mr-16 w-full">
              <span className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-3 block">What myCHEF is</span>
              <h2 className="font-playfair text-h2 text-black mb-6">The system, not just a chef</h2>
              <figure className="lg:hidden mb-8 bg-cream p-2 border border-gold/25 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.4)]">
                <FillFrame
                  src={photos[1].src}
                  alt={photos[1].alt}
                  width={photos[1].width}
                  height={photos[1].height}
                  className="aspect-[4/5] w-full"
                />
              </figure>
              {whatThisIs.map((para) => (
                <p key={para.slice(0, 40)} className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5 last:mb-0">
                  {para}
                </p>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex items-center section-padding pr-8 xl:pr-16">
            <figure className="w-full bg-cream p-2.5 border border-gold/25 shadow-[0_28px_80px_-44px_rgba(0,0,0,0.5)]">
              <FillFrame
                src={photos[1].src}
                alt={photos[1].alt}
                width={photos[1].width}
                height={photos[1].height}
                className="aspect-[4/5] w-full"
                objectPosition="center 20%"
              />
            </figure>
          </div>
        </div>
        <div className="container-custom section-padding pt-0 pb-24 md:pb-32">
          <div className="max-w-[680px] mx-auto text-center mb-14 md:mb-20">
            <p className="font-inter text-caption uppercase tracking-[0.18em] text-gold/80 mb-4">The machine</p>
            <h3 className="font-playfair text-h3 text-black mb-6 leading-tight">How a private chef through myCHEF actually runs</h3>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              One household does not need fifty chefs. It needs a manager, a record, a regular chef, and access to the rest. That is the product.
            </p>
          </div>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {systemMap.map((step, i) => (
              <li key={step.n} className="border border-gray-200 p-7 md:p-8 bg-cream relative">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-playfair text-h3 text-gold/90">{step.n}</p>
                  {(() => { const Icon = systemMapIcons[i % systemMapIcons.length]; return <Icon size={20} className="text-gray-400" aria-hidden /> })()}
                </div>
                <p className="font-inter text-body text-black leading-relaxed">{step.label}</p>
                {i < systemMap.length - 1 && i % 4 !== 3 && (
                  <span className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-gold/60" aria-hidden>
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
          <p className="font-inter text-body text-gray-500 text-center mt-14 md:mt-20 max-w-[720px] mx-auto leading-relaxed">
            Feedback updates the Food Profile. The Food Profile makes the next service better. That is why the longer you stay, the less you should have to explain.
          </p>
        </div>
      </section>

      {/* 02 Which service */}
      <Section id="which-service" tone="ivory">
        <Container>
          <div className="text-center max-w-[760px] mx-auto mb-10">
            <Eyebrow className="mb-3">Who this is for</Eyebrow>
            <DisplayHeading size="h2" className="text-black">A chef for the house — not for one night</DisplayHeading>
            <BodyCopy muted className="mt-4 mx-auto">
              If you want breakfast to appear without briefing it, a villa that eats for weeks, or a family that does not want another person to manage — this is the page. If you want one dinner, that is catering.
            </BodyCopy>
          </div>
          <EditorialImage
            src={whoForPhoto.src}
            alt={whoForPhoto.alt}
            width={whoForPhoto.width}
            height={whoForPhoto.height}
            aspect="aspect-[16/9]"
            objectPosition="center 55%"
            className="w-full mb-12"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {whoFor.map((item) => (
              <EditorialCard key={item.title}>
                <h3 className="font-playfair text-h4 text-black mb-2">{item.title}</h3>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.body}</p>
              </EditorialCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* 03 Why not hire independently */}
      <Section id="why-not-hire" tone="dark">
        <Container>
          <div className="grid lg:grid-cols-[42fr_58fr] gap-10 items-center mb-12">
            <EditorialImage
              src={whyIndependentPhoto.src}
              alt={whyIndependentPhoto.alt}
              width={whyIndependentPhoto.width}
              height={whyIndependentPhoto.height}
              aspect="aspect-[16/9]"
              objectPosition="center 45%"
              className="w-full"
            />
            <div>
              <Eyebrow tone="dark" className="mb-3">Why not hire independently</Eyebrow>
              <DisplayHeading size="h2" className="text-white">A freelancer can look cheaper on day one</DisplayHeading>
              <BodyCopy tone="dark" className="mt-4">
                You are paying for the person only. Finding, backup, quality, specialists, paperwork and the real cost of covering a Sunday are unpaid work — yours. myCHEF is the person plus the system that makes the person usable.
              </BodyCopy>
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
        </Container>
      </Section>

      {/* 04 How it works */}
      <Section id="how-it-works" tone="ivory">
        <Container>
          <div className="text-center max-w-[640px] mx-auto mb-16 md:mb-20">
            <DisplayHeading size="h2" className="text-black mb-4">How a private chef through myCHEF works</DisplayHeading>
            <BodyCopy muted className="mx-auto">
              Five stages. Read the five headlines and you have the whole system. The last one loops back into the third.
            </BodyCopy>
          </div>
          <ProcessJourney
            steps={processSteps}
            deliverPhoto={howItWorksPhoto}
            chefThumbs={featuredChefs.slice(0, 3).map((c) => ({ src: c.image, name: c.name }))}
          />
          <BodyCopy muted className="mt-16 md:mt-20 text-body-sm text-center mx-auto">
            A new household starts at five service days. Once we know you, from two. During business hours we typically reply within 15 minutes.
          </BodyCopy>
        </Container>
      </Section>

      {/* Ongoing household — the manager relationship */}
      <Section id="your-manager" tone="ivory">
        <Container>
          <HouseholdManager photoSrc="/images/mychef-household-managers-dubai.webp" />
        </Container>
      </Section>

      {/* The Food Profile — the household record */}
      <Section id="food-profile" tone="ivory" className="pt-0">
        <Container>
          <FoodProfile />
        </Container>
      </Section>

      {/* 05 The life you are buying */}
      <Section id="the-life" tone="charcoal">
        <Container>
          <div className="max-w-[760px] mx-auto text-center mb-12">
            <Eyebrow tone="dark" className="mb-3">What this looks like</Eyebrow>
            <DisplayHeading size="h2" className="text-white mb-6">You are not buying a Food Profile</DisplayHeading>
            <BodyCopy tone="dark-strong" className="text-body-lg mb-4 mx-auto">
              Monday morning, breakfast appears exactly how they like it. The children get food they will actually eat. Friday they suddenly want Japanese. Friends come Saturday. The usual chef takes Sunday off. Nobody in the family needs to coordinate any of it. That is the life. The Food Profile is only how we remember it.
            </BodyCopy>
            <BodyCopy tone="dark" className="mx-auto">
              We don’t pretend we know everything immediately. Your first week is calibration.
            </BodyCopy>
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
            <p className="mt-10 font-playfair text-h3 text-white text-center leading-relaxed max-w-[720px] mx-auto">
              After a year you should not be re-explaining breakfast.
            </p>
          </div>
        </Container>
      </Section>

      {/* Who does what */}
      <Section tone="white">
        <Container>
          <DisplayHeading size="h2" className="text-black text-center mb-4">Who does what</DisplayHeading>
          <BodyCopy muted className="text-center max-w-[640px] mx-auto mb-8">
            The split is the product. If you end up doing the chef’s job or our job, the service has failed.
          </BodyCopy>
          <EditorialImage
            src={whoDoesWhatPhoto.src}
            alt={whoDoesWhatPhoto.alt}
            width={whoDoesWhatPhoto.width}
            height={whoDoesWhatPhoto.height}
            aspect="aspect-[16/9]"
            objectPosition="center 40%"
            className="w-full mb-12"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {whoDoesWhat.map((col, wi) => (
              <EditorialCard key={col.who}>
                <h3 className="flex items-center gap-3 font-playfair text-h3 text-black mb-6">
                  {(() => { const Icon = whoDoesWhatIcons[wi % whoDoesWhatIcons.length]; return <Icon size={22} className="text-gold-ink flex-shrink-0" aria-hidden /> })()}
                  {col.who}
                </h3>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check size={16} className="text-gold-ink mt-1 flex-shrink-0" />
                      <span className="font-inter text-body-sm text-gray-500">{item}</span>
                    </li>
                  ))}
                </ul>
              </EditorialCard>
            ))}
          </div>
          <BodyCopy muted className="mt-8 text-body-sm text-center max-w-none">
            You manage what you want to eat, when, and whether the match is right. That is the list.
          </BodyCopy>
        </Container>
      </Section>

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
        <div className="container-custom section-padding pt-24 md:pt-36 pb-20 border-t border-white/10">
          <p className="font-inter text-caption font-medium uppercase tracking-[0.14em] text-gold mb-3 text-center">Chefs currently listed in the network</p>
          <h3 className="font-playfair text-h3 text-white text-center mb-4">Independent partners — not a staff roster</h3>
          <p className="font-inter text-body-sm text-gray-400 text-center max-w-[640px] mx-auto mb-10 leading-relaxed">
            Four chefs we currently present on the site. Matching is not limited to them. 50+ professionals in the network. These are examples, not a fixed roster. Independent licensed partners — not employees.
          </p>
          <p className="font-inter text-caption font-medium uppercase tracking-[0.14em] text-gold mb-5 text-center">50+ chefs · specialties in the network</p>
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {networkSpecialties.map((tag) => (
              <span key={tag} className="px-3 py-1.5 border border-gold/30 font-inter text-caption uppercase tracking-wider text-gray-300">
                {tag}
              </span>
            ))}
          </div>
          <p className="font-playfair text-h4 text-white text-center mb-16 md:mb-20">
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
        <div className="grid lg:grid-cols-[45fr_55fr] items-stretch">
          <div className="flex items-center section-padding order-2 lg:order-1">
            <div className="max-w-[560px] mx-auto lg:mr-16 lg:ml-auto">
              <span className="font-inter text-caption uppercase tracking-[0.18em] text-gold mb-4 block">Daily life</span>
              <h2 className="font-playfair text-h2 text-white leading-[1.12] mb-6">
                We don’t just ask how it was.
                <br />
                We remember the answer.
              </h2>
              <p className="font-inter text-body text-gray-400 leading-relaxed mb-5">
                After service, your Household Manager checks in separately from the chef.
              </p>
              <ul className="space-y-1.5 mb-6 border-l border-gold/30 pl-5">
                {[
                  'What worked?',
                  'What did not?',
                  'Was breakfast too early?',
                  'Did the children actually eat it?',
                  'Was the chef too talkative in the morning?',
                  'Was Friday’s Japanese exactly right?',
                ].map((q) => (
                  <li key={q} className="font-inter text-body-sm text-gray-300 italic">{q}</li>
                ))}
              </ul>
              <p className="font-inter text-body text-gray-400 leading-relaxed mb-9">
                We record what matters and update your Food Profile, so the next chef does not start from zero.
              </p>

              {/* The loop: feedback becomes household knowledge */}
              <div className="mb-9">
                {[
                  { label: 'You tell us', detail: '“Breakfast was great. Less salt next time.”' },
                  { label: 'We record it', detail: 'Food Profile updated' },
                  { label: 'The chef knows', detail: 'Next service: less salt' },
                  { label: 'The house gets easier', detail: 'You do not explain it again.' },
                ].map((step, i, arr) => (
                  <div key={step.label}>
                    <div className="border border-gold/20 bg-white/[0.03] px-5 py-3.5">
                      <p className="font-inter text-caption uppercase tracking-[0.14em] text-gold mb-1">{step.label}</p>
                      <p className="font-inter text-body-sm text-gray-200">{step.detail}</p>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="flex justify-center py-1.5">
                        <ArrowDown size={16} className="text-gold/60" aria-hidden />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <p className="font-playfair text-h4 text-white leading-snug">
                The point is not five stars.{' '}
                <span className="text-gold">The point is needing to explain less next time.</span>
              </p>
            </div>
          </div>
          <FillFrame
            src="/images/mychef-feedback-learning-dubai.webp"
            alt="A household member writing in the myCHEF Household Notes journal beside a tablet and breakfast, recording feedback after service"
            width={1327}
            height={1185}
            className="min-h-[60vh] lg:min-h-full order-1 lg:order-2"
            objectPosition="center 35%"
          />
        </div>
      </section>

      {/* 07 Household rates */}
      <section id="household" className="bg-cream scroll-mt-24">
        <div className="relative w-full min-h-[clamp(620px,65vw,760px)] overflow-hidden">
          <img
            src="/images/mychef-household-plan-consultation.webp"
            alt="A household sitting with their private chef and a myCHEF manager, who records preferences on a tablet while the chef introduces dishes at a Dubai villa table"
            width={1910}
            height={823}
            className="absolute inset-0 w-full h-full object-cover object-[58%_50%] md:object-center"
            loading="lazy"
            decoding="async"
          />
          {/* Layered scrim — dark on the left for the copy, the meeting and food stay bright */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/42 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
          <div className="relative z-10 container-custom min-h-[clamp(620px,65vw,760px)] flex flex-col justify-end pb-14 md:pb-20">
            <div className="max-w-[680px]">
              <span className="font-inter text-caption font-medium uppercase tracking-[0.16em] text-gold mb-4 block drop-shadow-[0_1px_10px_rgba(0,0,0,0.6)]">The household plan</span>
              <h2 className="font-playfair text-white mb-5" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', lineHeight: 1.05, letterSpacing: '-0.01em' }}>
                A standing private chef arrangement
              </h2>
              <p className="font-inter text-body-lg text-white/90 leading-relaxed">
                Tell us how often you want a chef and how your household eats. We recommend the right setup from there. New households start with five service days. Returning households from two. Groceries are separate.
              </p>
              <p className="mt-5 font-inter text-body-sm uppercase tracking-[0.12em] text-gold">Start with the household. We work out the chef.</p>
            </div>
          </div>
        </div>
        <div className="container-custom section-padding">
          <div className="max-w-[760px] mb-10">
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-4">
              The numbers below are starting rates for a <strong className="font-medium text-black">standing household plan</strong>. The “day” figure is the <strong className="font-medium text-black">effective daily rate</strong> of that plan — not a walk-in ticket for tomorrow, and not a one-night dinner.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              Independent licensed partners cook. myCHEF organises the service. You do not need a full day if you only want breakfast. You do not need a Signature Chef every day because you want one extraordinary dinner a month. Groceries are separate. A single night is{' '}
              <Link to="/catering-dubai" className="text-gold-ink hover:text-gold-light underline underline-offset-4">catering</Link>.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {bookingMinimums.map((item) => (
              <div key={item.who} className="bg-white border border-gray-200 p-6">
                <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-2">{item.who}</p>
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
                <legend className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-3">myCHEF chef level</legend>
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
                <legend className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-3">Meals per day</legend>
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
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="border border-gray-200 p-4 sm:p-5">
                <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-2">Effective / day</p>
                <p className="font-playfair text-h3 text-black">{formatAed(quote.daily)}</p>
              </div>
              <div className="border border-gray-200 p-5">
                <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-2">Returning · 2 days</p>
                <p className="font-playfair text-h3 text-black">{formatAed(quote.twoDay)}</p>
              </div>
              <div className="border border-gray-200 p-5">
                <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-2">New · 5-day week</p>
                <p className="font-playfair text-h3 text-black">{formatAed(quote.weekly)}</p>
              </div>
              <div className="border border-gold/40 bg-gold/5 p-4 sm:p-5">
                <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-2">Month · ~20 days</p>
                <p className="font-playfair text-h3 text-black">{formatAed(quote.monthly)}</p>
              </div>
            </div>
            <p className="font-inter text-body-sm text-gray-500 mt-8 mb-4 text-center">
              This is your plan. Send it to us and we will confirm the exact number.
            </p>
            <QuotePair />
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
                <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-3">myCHEF chef levels</p>
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
                    <p className="font-inter text-body-sm text-gold-ink">From AED {item.monthlyFull}+ / month full day</p>
                  </div>
                  <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-3">{item.useCase}</p>
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
                  <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-2">Level</p>
                  <p className="font-playfair text-h4 text-black">Experience and performance</p>
                </div>
                <p className="font-playfair text-h3 text-gold-ink text-center">×</p>
                <div className="border border-gold/40 p-5 text-center">
                  <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-2">Specialty</p>
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
          <p className="sm:hidden font-inter text-caption uppercase tracking-wider text-gray-400 mb-2">Swipe to see the full table →</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full min-w-[640px] text-left bg-white">
              <thead>
                <tr className="border-b border-gold/30">
                  <th className="py-3 px-4 font-inter text-caption uppercase tracking-wider text-gold-ink">Service</th>
                  <th className="py-3 px-4 font-inter text-caption uppercase tracking-wider text-gold-ink">Effective / day</th>
                  <th className="py-3 px-4 font-inter text-caption uppercase tracking-wider text-gold-ink">Weekly · 5 days</th>
                  <th className="py-3 px-4 font-inter text-caption uppercase tracking-wider text-gold-ink">Monthly</th>
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
          <p className="sm:hidden font-inter text-caption uppercase tracking-wider text-gray-400 mb-2">Swipe to see the full table →</p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full min-w-[880px] text-left bg-white">
              <thead>
                <tr className="border-b border-gold/30">
                  <th className="py-3 px-4 font-inter text-caption uppercase tracking-wider text-gold-ink">Level</th>
                  <th className="py-3 px-4 font-inter text-caption uppercase tracking-wider text-gold-ink">What it means</th>
                  <th className="py-3 px-4 font-inter text-caption uppercase tracking-wider text-gold-ink">1 meal</th>
                  <th className="py-3 px-4 font-inter text-caption uppercase tracking-wider text-gold-ink">2 meals</th>
                  <th className="py-3 px-4 font-inter text-caption uppercase tracking-wider text-gold-ink">Full day</th>
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
                    <Check size={16} className="text-gold-ink mt-1 flex-shrink-0" />
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
                <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-2">Example week</p>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed mb-3">
                  Monday–Friday Senior Chef · 2 meals: from AED 6,000. Friday evening — add a Master Chef (the weekday arrangement still covers the rest of the week): from AED 3,500. That week: from AED 9,500 before groceries.
                </p>
              </div>
              <div className="border border-gray-200 p-6">
                <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-2">Example month</p>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed">
                  Senior Chef · 2 meals/day: from AED 24,000. Two Master Chef dinners: 2 × AED 3,500+ = AED 7,000+. Example month: from AED 31,000.
                </p>
              </div>
            </div>
            <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-3">Upgrade a meal — from, per service</p>
            <div className="flex flex-wrap gap-3 mb-8">
              {upgrades.map((u) => (
                <span key={u.to} className="px-3 py-2 border border-gray-200 font-inter text-body-sm text-gray-600">
                  to {u.to} AED {u.price}+
                </span>
              ))}
            </div>
            <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-3">Add people — starting prices</p>
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
            <Link to="/yachts" className="text-gold-ink hover:text-gold-light underline underline-offset-4">yacht party</Link>
            {' '}is one complete event price, not 25 small charges. If you want food handled without a chef in the house every day,{' '}
            <Link to="/weekly-meal-prep-dubai" className="text-gold-ink hover:text-gold-light underline underline-offset-4">weekly meal prep</Link>
            {' '}is the lighter version — from AED 1,898 a week.
          </p>
        </div>
      </section>

      {/* 08 When something changes */}
      <Section id="when-it-changes" tone="white">
        <Container>
          <div className="max-w-[720px] mx-auto text-center mb-12">
            <Eyebrow className="mb-3">When something changes</Eyebrow>
            <DisplayHeading size="h2" className="text-black">The system is for the weeks that are not normal</DisplayHeading>
            <BodyCopy muted className="mt-4 mx-auto">
              Rotation, a specialist, backup, guests, seven days. This is the part a freelancer cannot fake, and the part a household actually uses.
            </BodyCopy>
          </div>
          <div className="grid lg:grid-cols-[47fr_53fr] gap-10 lg:gap-16 mb-16 md:mb-24 items-center">
            <FillFrame
              src="/images/mychef-chef-rotation-dubai.webp"
              alt="A Japanese specialist chef, the household manager and the regular chef reviewing the Food Profile together at a Dubai villa kitchen table"
              width={1105}
              height={990}
              className="aspect-[4/5] w-full"
              objectPosition="35% 50%"
            />
            <div className="max-w-[640px]">
              <p className="font-inter text-caption font-medium uppercase tracking-[0.14em] text-gold-ink mb-4">Friday wants Japanese</p>
              <h3 className="font-playfair text-black mb-6" style={{ fontSize: 'clamp(2rem, 3.2vw, 3rem)', lineHeight: 1.05, letterSpacing: '-0.01em' }}>
                Keep the weekday chef.
                <br />
                Add the specialist.
              </h3>
              <div className="space-y-4 font-inter text-body text-gray-600 leading-relaxed">
                <p>Your regular chef already knows the house, breakfast, the children and how you like things done. Keep them.</p>
                <p>When Friday calls for Japanese, Italian, Thai or something more specialised, your Household Manager brings in the right chef and coordinates both.</p>
                <p>You do not make another hire. You do not brief everyone again. You just change what is cooking.</p>
              </div>

              {/* The three roles, minimally */}
              <div className="mt-9 grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-y-5 sm:gap-x-5">
                {[
                  { label: 'Your regular chef', note: 'Knows the house' },
                  { label: 'Specialist chef', note: 'Knows the cuisine' },
                  { label: 'Your Household Manager', note: 'Makes them work together' },
                ].map((role, i) => (
                  <div key={role.label} className="contents">
                    <div className="sm:text-left">
                      <p className="font-inter text-caption font-medium uppercase tracking-[0.12em] text-gold-ink mb-1">{role.label}</p>
                      <p className="font-inter text-body-sm text-gray-500">{role.note}</p>
                    </div>
                    {i < 2 && <span className="font-playfair text-h4 text-gold/70 text-center leading-none">+</span>}
                  </div>
                ))}
              </div>

              <p className="mt-9 font-playfair text-h3 text-black leading-snug">
                One household. <span className="text-gold-ink">More than one kitchen.</span>
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
        </Container>
      </Section>

      {/* 09 Proof */}
      <Section id="proof" tone="ivory">
        <Container>
          <div className="max-w-[720px] mx-auto text-center mb-12">
            <Eyebrow className="mb-3">The system in practice</Eyebrow>
            <DisplayHeading size="h2" className="text-black mb-4">We will not invent a number to look larger</DisplayHeading>
            <BodyCopy muted className="mx-auto">
              No household count, no average rating, no replacement percentage on this page until we can put a real figure next to it. What we can show is the operating system — and where to inspect it.
            </BodyCopy>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {proofItems.map((item) => (
              <EditorialCard key={item.label}>
                <h3 className="font-playfair text-h4 text-black mb-3">{item.label}</h3>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.body}</p>
              </EditorialCard>
            ))}
          </div>

          <h3 className="font-playfair text-h3 text-black text-center mb-4">What happens before a chef enters your kitchen</h3>
          <p className="font-inter text-body-sm text-gray-500 text-center max-w-[640px] mx-auto mb-10 leading-relaxed">
            This is the same sequence published on{' '}
            <Link to="/how-we-vet-our-chefs" className="text-gold-ink hover:text-gold-light underline underline-offset-4">how we vet our chefs</Link>.
            {' '}Explaining it is not the same as proving a booking count. It is the process we actually run.
          </p>
          <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {vettingSteps.map((step, i) => (
              <li key={step.title} className="bg-white border border-gray-200 p-8">
                <p className="font-playfair text-h4 text-gold-ink mb-2">{String(i + 1).padStart(2, '0')}</p>
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
        </Container>
      </Section>

      {/* What we don't / do promise */}
      <Section tone="dark">
        <Container className="max-w-[900px]">
          <Eyebrow tone="dark" className="mb-3">What we don’t promise</Eyebrow>
          <DisplayHeading size="h2" className="text-white mb-8">Honesty is part of the service</DisplayHeading>
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
        </Container>
      </Section>

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

      <section className="bg-cream py-16">
        <div className="container-custom max-w-[800px] text-center">
          <h3 className="font-playfair text-h3 text-black mb-4">Where can I learn more about hiring a private chef in Dubai?</h3>
          <p className="font-inter text-body text-gray-500 leading-relaxed">
            Read our{' '}
            <Link to="/private-chef-vs-catering-dubai" className="text-gold-ink hover:text-gold-light underline underline-offset-4">private chef vs catering</Link>{' '}
            guide, see{' '}
            <Link to="/private-chef-prices-dubai" className="text-gold-ink hover:text-gold-light underline underline-offset-4">private chef prices Dubai</Link>,{' '}
            <Link to="/blog/how-much-does-private-chef-cost-dubai" className="text-gold-ink hover:text-gold-light underline underline-offset-4">how much a private chef costs</Link>,{' '}
            <Link to="/blog/private-chef-palm-jumeirah-guide" className="text-gold-ink hover:text-gold-light underline underline-offset-4">private chef Palm Jumeirah</Link>,{' '}
            <Link to="/guide/private-dining-dubai" className="text-gold-ink hover:text-gold-light underline underline-offset-4">private dining in Dubai</Link>
            {' '}and{' '}
            <Link to="/how-it-works" className="text-gold-ink hover:text-gold-light underline underline-offset-4">how it works</Link>.
          </p>
        </div>
      </section>

      <LocationStrip
        title="Private chef services across Dubai"
        subtitle={
          <>
            Hire a{' '}
            <Link to="/locations/palm-jumeirah" className="text-gold-ink hover:text-gold-light underline underline-offset-4">private chef in Palm Jumeirah</Link>,{' '}
            <Link to="/locations/dubai-marina" className="text-gold-ink hover:text-gold-light underline underline-offset-4">Dubai Marina</Link>
            {' '}or{' '}
            <Link to="/locations/downtown-dubai" className="text-gold-ink hover:text-gold-light underline underline-offset-4">Downtown Dubai</Link>.
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
            From AED 900 a day on a standing plan. New households from five service days. Returning from two. Groceries separate. A chef who learns your household — with the myCHEF system behind them.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-3 mb-8">
            <a href="#household" className="btn-secondary">See day, week and month</a>
          </div>
          <QuotePair className="items-start" />
        </div>
      </section>
    </div>
  )
}
