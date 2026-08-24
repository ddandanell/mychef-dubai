// KEYWORD LOCK — this page owns: "private chef dubai" (320/mo, UAE).
// Secondary: chef dubai (720), private chef (170), private chef services (20), private chef agency (20).
// Do not target another cluster page's primary here. See KEYWORD_LOCKS in content/privateChefCluster.ts.
import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import LocationStrip from '../components/LocationStrip'
import TrustSignalStrip from '../components/TrustSignalStrip'
import FaqAccordion from '../components/FaqAccordion'
import { Section, Container, Eyebrow, DisplayHeading, BodyCopy, EditorialImage } from '../components/system'
import ClusterNav from '../components/private-chef/ClusterNav'
import ClusterCTA from '../components/private-chef/ClusterCTA'
import RatesBar from '../components/private-chef/RatesBar'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { plainFaqAnswer } from '../utils/schema'
import {
  HERO_IMAGE,
  HERO_IMAGE_HEIGHT,
  HERO_IMAGE_WIDTH,
  PAGE_PATH,
  photos,
  WHATSAPP_MESSAGE,
  foodProfileDemo,
  formatAed,
  whoForPhoto,
  whyIndependentPhoto,
} from '../content/privateChefPage'
import {
  CLUSTER_PATHS,
  FIND_CHEF_LABEL,
  INQUIRY_HREF,
  foodProfilePreview,
  householdProblems,
  parentFaqs,
  parentSeo,
  pricingPreview,
  rhythmOptions,
  systemCards,
  trustPreview,
} from '../content/privateChefCluster'

const managedBeats = [
  {
    title: 'Same chef',
    body: 'The usual person, week after week. The house should not re-brief breakfast every Monday.',
  },
  {
    title: 'Managed',
    body: 'Matching, feedback, absence and replacement sit with us. You are not building a second job around the person who cooks.',
  },
  {
    title: 'Backup',
    body: 'If the usual chef is off, the Food Profile travels. The next chef is not starting from zero.',
  },
] as const

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
        'Standing household private chef in Dubai: same chef, Food Profile, backup if they are off. From a few days a week to a long-term household plan, the chef is matched, assessed and managed.',
      offers: {
        '@type': 'Offer',
        name: 'Household private chef plan — from AED 2,700 a month',
        description:
          'Professional Chef, one weekly Daily Prep session on an ongoing monthly plan. From AED 2,700 a month before VAT and the published transport zone rate. Per-service from AED 675.',
        url: 'https://www.mychef.ae/private-chef-dubai/pricing',
        priceCurrency: 'AED',
        price: '2700',
        unitText: 'MONTH',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: parentFaqs.map((faq) => ({
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

export default function PrivateChef() {
  useWhatsAppMessage(WHATSAPP_MESSAGE)

  return (
    <div>
      <SEO
        title={parentSeo.title}
        description={parentSeo.description}
        canonicalPath={PAGE_PATH}
        ogImage={HERO_IMAGE}
        hideSiteName
        preloadHero={HERO_IMAGE}
        schema={schema}
      />

      <PageHero
        variant="quiet"
        eyebrow={parentSeo.eyebrow}
        title={parentSeo.h1}
        subtitle={parentSeo.subtitle}
        image={HERO_IMAGE}
        imageAlt={photos[0].alt}
        imageWidth={HERO_IMAGE_WIDTH}
        imageHeight={HERO_IMAGE_HEIGHT}
        videoSrc="/videos/private-chef-hero.mp4"
        cta={{ label: FIND_CHEF_LABEL, href: INQUIRY_HREF }}
        secondaryCta={{ label: 'How It Works', href: CLUSTER_PATHS.howItWorks }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Private Chef Dubai' }]}
        minHeight="full"
        overlay="cinematic"
        align="left"
        imagePosition="78% 50%"
      />
      <TrustSignalStrip />
      <RatesBar />
      <ClusterNav />

      <Section id="what-this-is" tone="white">
        <Container>
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
            <div>
              <Eyebrow>What this is</Eyebrow>
              <DisplayHeading size="h2" className="text-black mb-6">A household chef. A system behind them.</DisplayHeading>
              <BodyCopy className="mb-5">
                myCHEF is not a list of chefs you have to manage, and not a staffing agency that puts someone on your payroll. Independent, licensed culinary partners cook. We organise the chef: the match, the Food Profile and the backup.
              </BodyCopy>
              <BodyCopy className="mb-5">
                You are buying a standing food service for a household — usually the same chef, a record of how this house eats, and one contact when something changes. That is a different product from a one-night dinner. A one-night dinner is{' '}
                <Link to="/catering-dubai" className="text-gold-ink hover:text-gold-light underline underline-offset-4">catering</Link>.
              </BodyCopy>
              <BodyCopy muted>
                If you want breakfast to appear without briefing it, a villa that eats for weeks, or a family that does not want another person to manage — this is the page.
              </BodyCopy>
            </div>
            <EditorialImage
              src={whoForPhoto.src}
              alt={whoForPhoto.alt}
              width={whoForPhoto.width}
              height={whoForPhoto.height}
              aspect="aspect-[4/5] lg:aspect-[4/5]"
              objectPosition="center 40%"
              className="w-full"
            />
          </div>
        </Container>
      </Section>

      <Section id="household-easier" tone="ivory">
        <Container>
          <div className="max-w-[720px] mx-auto text-center mb-12">
            <Eyebrow align="center">Who it is for</Eyebrow>
            <DisplayHeading size="h2" className="text-black">What would make the household easier?</DisplayHeading>
            <BodyCopy muted className="mt-4 mx-auto">
              Not which cuisine, and not which evening. The useful question is the one the house is already living with — families, villas and long stays included.
            </BodyCopy>
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 md:gap-y-12 max-w-[1060px] mx-auto">
            {householdProblems.map((item, i) => (
              <div key={item.title} className="flex gap-5">
                <span className="font-playfair text-h3 text-gold-ink leading-none pt-0.5 select-none">{String(i + 1).padStart(2, '0')}</span>
                <div className="border-l border-gray-200 pl-5">
                  <h3 className="font-playfair text-h4 text-black mb-2">{item.title}</h3>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="why-managed" tone="dark">
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
              <Eyebrow tone="dark">Why it is managed</Eyebrow>
              <DisplayHeading size="h2" className="text-white">Finding a chef is easy. Keeping the house running is the work.</DisplayHeading>
              <BodyCopy tone="dark" className="mt-4">
                Hiring independently means you own matching, feedback, absence and replacement. We manage that layer so the household is not built around one person with no plan B.
              </BodyCopy>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {managedBeats.map((item) => (
              <div key={item.title} className="border border-gold/25 p-6 bg-black/40">
                <h3 className="font-playfair text-h4 text-white mb-3">{item.title}</h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8">
            <Link
              to={CLUSTER_PATHS.howItWorks}
              className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-wider text-gold hover:text-gold-light"
            >
              See how the household chef system works <ArrowRight size={14} />
            </Link>
          </p>
        </Container>
      </Section>

      <Section id="the-system" tone="ivory">
        <Container>
          <div className="max-w-[720px] mx-auto text-center mb-12">
            <Eyebrow align="center">The overview</Eyebrow>
            <DisplayHeading size="h2" className="text-black">Five parts. Each has its own page.</DisplayHeading>
            <BodyCopy muted className="mt-4 mx-auto">
              This page is the overview. How it works, who the chefs are, how quality holds, who enters the home, and what it costs each have their own page.
            </BodyCopy>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {systemCards.map((card, i) => (
              <Link
                key={card.href}
                to={card.href}
                className="group bg-white border border-gray-200 hover:border-gold p-6 flex flex-col min-h-[220px] transition-colors"
              >
                <p className="font-playfair text-h4 text-gold-ink mb-4">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="font-playfair text-h4 text-black mb-3 group-hover:text-gold-ink transition-colors">{card.label}</h3>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed mb-6 flex-1">{card.title}</p>
                <span className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-wider text-gold-ink">
                  Read more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="same-chef" tone="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <Eyebrow>Continuity</Eyebrow>
              <DisplayHeading size="h2" className="text-black mb-6">Same chef, with backup behind them</DisplayHeading>
              <BodyCopy className="mb-5">
                Normally we build the week around one person — they already know the coffee, the children and how this house likes Friday.
              </BodyCopy>
              <BodyCopy className="mb-5">
                The relationship is not dependent on one individual. If they are off, or the match is wrong, you are not starting again. The Food Profile travels. We send a replacement or rotate a specialist. You talk to one contact.
              </BodyCopy>
              <Link
                to={CLUSTER_PATHS.howItWorks}
                className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-wider text-gold-ink hover:text-gold"
              >
                See how backup and replacement work <ArrowRight size={14} />
              </Link>
            </div>
            <EditorialImage
              src={photos[5].src}
              alt={photos[5].alt}
              width={photos[5].width}
              height={photos[5].height}
              aspect="aspect-[16/9]"
              objectPosition="center 40%"
              className="w-full"
            />
          </div>
        </Container>
      </Section>

      <Section id="food-profile" tone="ivory">
        <Container>
          <div className="max-w-[720px] mx-auto text-center mb-10">
            <Eyebrow align="center">Food Profile</Eyebrow>
            <DisplayHeading size="h2" className="text-black">The chef learns the house. The system keeps the knowledge.</DisplayHeading>
            <BodyCopy muted className="mt-4 mx-auto">
              {foodProfileDemo.note} When the chef changes, this does not.
            </BodyCopy>
          </div>
          <div className="max-w-[720px] mx-auto bg-white border border-gray-200 p-6 md:p-10 mb-8">
            <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
              {foodProfilePreview.map((row) => (
                <div key={row.k} className="flex justify-between gap-4 border-b border-gray-100 pb-3">
                  <dt className="font-inter text-caption uppercase tracking-wider text-gray-400">{row.k}</dt>
                  <dd className="font-inter text-body-sm text-black text-right">{row.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="text-center">
            <Link
              to={CLUSTER_PATHS.howItWorks}
              className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-wider text-gold-ink hover:text-gold"
            >
              See how the Food Profile is built <ArrowRight size={14} />
            </Link>
          </p>
        </Container>
      </Section>

      <Section id="rhythm" tone="white">
        <Container>
          <div className="max-w-[720px] mx-auto text-center mb-10">
            <Eyebrow align="center">How often the chef comes</Eyebrow>
            <DisplayHeading size="h2" className="text-black">Choose the household rhythm</DisplayHeading>
            <BodyCopy muted className="mt-4 mx-auto">
              A standing plan is built around the days and meals this house actually needs — not a package named after an occasion.
            </BodyCopy>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-8 max-w-[880px] mx-auto">
            {rhythmOptions.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="inline-flex items-center gap-2 border border-gray-200 hover:border-gold px-4 py-2.5 font-inter text-body-sm text-gray-600 hover:text-black transition-colors"
              >
                {item.label}
                <ArrowRight size={13} className="text-gold-ink" />
              </Link>
            ))}
          </div>
          <p className="text-center">
            <Link
              to={CLUSTER_PATHS.pricing}
              className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-wider text-gold-ink hover:text-gold"
            >
              See Pricing & Plans <ArrowRight size={14} />
            </Link>
          </p>
        </Container>
      </Section>

      <Section id="trust" tone="ivory">
        <Container>
          <div className="max-w-[720px] mx-auto text-center mb-10">
            <Eyebrow align="center">Trust</Eyebrow>
            <DisplayHeading size="h2" className="text-black">Who we put in the kitchen</DisplayHeading>
            <BodyCopy muted className="mt-4 mx-auto">
              The short version. Selection, quality and discretion each have their own page.
            </BodyCopy>
          </div>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200 mb-10">
            {trustPreview.map((item, i) => (
              <li key={item.label} className="bg-white p-6 lg:p-7">
                <p className="font-playfair text-h4 text-gold-ink leading-none mb-3 select-none">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="font-playfair text-h4 text-black mb-2">{item.label}</h3>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ol>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-center">
            <Link to={CLUSTER_PATHS.ourChefs} className="inline-flex items-center justify-center gap-2 font-inter text-caption uppercase tracking-wider text-gold-ink hover:text-gold">
              See how we select chefs <ArrowRight size={14} />
            </Link>
            <Link to={CLUSTER_PATHS.privacy} className="inline-flex items-center justify-center gap-2 font-inter text-caption uppercase tracking-wider text-gold-ink hover:text-gold">
              See privacy and security <ArrowRight size={14} />
            </Link>
          </div>
        </Container>
      </Section>

      <Section id="pricing-preview" tone="white">
        <Container>
          <div className="max-w-[720px] mx-auto text-center mb-10">
            <Eyebrow align="center">Pricing</Eyebrow>
            <DisplayHeading size="h2" className="text-black">The figure follows the chef, the schedule and the household.</DisplayHeading>
            <BodyCopy muted className="mt-4 mx-auto">
              Displayed figures are Professional Chef on an ongoing monthly plan, before VAT and the published transport zone rate. The calculator lives on Pricing & Plans.
            </BodyCopy>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {pricingPreview.map((item) => (
              <Link
                key={item.id}
                to={CLUSTER_PATHS.pricing}
                className="bg-cream border border-gray-200 hover:border-gold p-6 md:p-8 flex flex-col transition-colors"
              >
                <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-2">{item.label}</p>
                <h3 className="font-playfair text-h4 text-black mb-2">{item.rhythm}</h3>
                <p className="font-playfair text-h3 text-black mb-3">From {formatAed(item.monthly)}<span className="font-inter text-body-sm text-gray-500"> / month</span></p>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed mt-auto">{item.note}</p>
              </Link>
            ))}
          </div>
          <p className="text-center">
            <Link
              to={CLUSTER_PATHS.pricing}
              className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-wider text-gold-ink hover:text-gold"
            >
              See Pricing & Plans <ArrowRight size={14} />
            </Link>
          </p>
        </Container>
      </Section>

      <section id="faq" className="bg-cream py-20 scroll-mt-24">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-4">
            What should I know before starting a household chef in Dubai?
          </h2>
          <p className="font-inter text-body-sm text-gray-500 text-center mb-8 leading-relaxed">
            Short answers. The system, the chefs, privacy and the full price logic each have their own page.
          </p>
          <FaqAccordion items={[...parentFaqs]} defaultOpen={-1} />
        </div>
      </section>

      <section className="bg-charcoal py-16">
        <div className="container-custom max-w-[800px] text-center">
          <h3 className="font-playfair text-h3 text-white mb-4">Has this house been running well?</h3>
          <p className="font-inter text-body text-gray-400 leading-relaxed mb-6">
            We do not publish invented reviews. If this household already runs with myCHEF, leave a review and we credit AED 50 toward the next month of the plan.
          </p>
          <Link to="/review" className="btn-primary">Leave a Review</Link>
        </div>
      </section>

      <LocationStrip
        title="A household chef across Dubai"
        subtitle={
          <>
            A standing{' '}
            <Link to="/locations/palm-jumeirah" className="text-gold-ink hover:text-gold-light underline underline-offset-4">private chef in Palm Jumeirah</Link>,{' '}
            <Link to="/locations/dubai-marina" className="text-gold-ink hover:text-gold-light underline underline-offset-4">Dubai Marina</Link>
            {' '}or{' '}
            <Link to="/locations/downtown-dubai" className="text-gold-ink hover:text-gold-light underline underline-offset-4">Downtown Dubai</Link>
            — matched to the house, not to a single evening.
          </>
        }
      />

      <ClusterCTA />
    </div>
  )
}
