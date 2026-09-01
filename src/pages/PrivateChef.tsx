// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /private-chef-dubai
//     primary:     "private chef dubai"
//     subkeywords: "personal chef dubai" · "chef at home dubai" · "private chef service dubai" · "book a private chef dubai" · "private chef for dinner party dubai" · "private chef near me dubai" · "private chef" · "private chef near me" · "french private chef dubai" · "private chef dubai daily" · "private chef dubai full time" · "private chef dubai monthly"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
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
import { QUALITY_LEVELS } from '../content/privateChefStandard'
import { buildWhatsAppLink } from '@/lib/whatsapp'

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
  PRIVATE_CHEF_SIBLING_LINKS,
  foodProfilePreview,
  householdProblems,
  hubRouteCards,
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
    body: 'The same person, week after week. You should not have to explain breakfast again every Monday.',
  },
  {
    title: 'Managed',
    body: 'The match, the feedback, the cover when your chef is away, the replacement if it comes to that — all of it is ours. You are not taking on a second job to manage the person who cooks.',
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
      '@id': 'https://www.mychef.ae/private-chef-dubai#service',
      name: 'Private Chef Dubai',
      serviceType: 'Private Chef Service',
      provider: { '@id': 'https://www.mychef.ae/#organization' },
      areaServed: [
        { '@id': 'https://www.mychef.ae/#place-dubai' },
        { '@id': 'https://www.mychef.ae/#place-jlt' },
        { '@id': 'https://www.mychef.ae/#place-jumeirah' },
        { '@id': 'https://www.mychef.ae/#place-jvc' },
      ],
      description:
        'Private chef Dubai for a standing household: same chef, Food Profile, backup if they are off. From a few days a week to a long-term household plan, the chef is matched, assessed and managed.',
      url: 'https://www.mychef.ae/private-chef-dubai',
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
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Private chef' }]}
        minHeight="full"
        overlay="cinematic"
        align="left"
        imagePosition="78% 50%"
      />
      <TrustSignalStrip />
      <RatesBar />
      <ClusterNav />

      <Section tone="ivory" rhythm="connected">
        <Container>
          <p className="font-inter text-caption uppercase tracking-[0.12em] text-gold-ink mb-4">More in this section</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {PRIVATE_CHEF_SIBLING_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="font-inter text-body-sm text-gray-700 underline decoration-gold/40 underline-offset-4 hover:text-gold-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-inter text-body-sm text-gray-600 max-w-[62ch]">
            A standing household chef stays here. A one-night dinner goes to{' '}
            <Link to="/catering-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Luxury catering in Dubai
            </Link>
            .
          </p>
        </Container>
      </Section>

      <Section id="what-this-is" tone="white">
        <Container>
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
            <div>
              <Eyebrow>What this is</Eyebrow>
              <DisplayHeading size="h2" className="text-black mb-6">What a private chef Dubai arrangement is</DisplayHeading>
              <BodyCopy className="mb-5">
                myCHEF is not a list of chefs for you to manage. We organise the chef for you: the match, the Food Profile, and the cover when your chef is away.
              </BodyCopy>
              <BodyCopy className="mb-5">
                You are buying a standing in-home chef in Dubai. Usually the same person each week, a written record of how you like to eat, and one person to call when something changes. That is not the same as booking one dinner. A one-night dinner is{' '}
                <Link to="/catering-dubai" className="text-gold-ink hover:text-gold-light underline underline-offset-4">Luxury catering in Dubai</Link>.
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

      <Section id="which-service" tone="ivory">
        <Container>
          <div className="max-w-[720px] mb-10">
            <Eyebrow>Which page</Eyebrow>
            <DisplayHeading size="h2" className="text-black mb-4">One night, or a chef who stays</DisplayHeading>
            <BodyCopy muted>
              A standing household chef stays on this page. A one-night dinner belongs on catering — not here.
            </BodyCopy>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {hubRouteCards.map((card) =>
              card.href ? (
                <Link
                  key={card.title}
                  to={card.href}
                  className="border border-gray-200 bg-white p-6 md:p-8 hover:border-gold/50 transition-colors"
                >
                  <h3 className="font-playfair text-h4 text-black mb-3">{card.title}</h3>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed mb-5">{card.body}</p>
                  <span className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-wider text-gold-ink">
                    {card.cta} <ArrowRight size={14} />
                  </span>
                </Link>
              ) : (
                <div key={card.title} className="border border-gold/40 bg-white p-6 md:p-8">
                  <h3 className="font-playfair text-h4 text-black mb-3">{card.title}</h3>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed mb-5">{card.body}</p>
                  <p className="font-inter text-caption uppercase tracking-wider text-gold-ink">{card.cta}</p>
                </div>
              ),
            )}
          </div>
        </Container>
      </Section>

      <Section id="household-easier" tone="white">
        <Container>
          <div className="max-w-[720px] mx-auto text-center mb-12">
            <Eyebrow align="center">Who it is for</Eyebrow>
            <DisplayHeading size="h2" className="text-black">What would make your week easier?</DisplayHeading>
            <BodyCopy muted className="mt-4 mx-auto">
              Not which cuisine, and not which evening. A chef at home in Dubai makes sense when the same problem comes back every week — for families, for villas, and for long stays.
            </BodyCopy>
            <BodyCopy muted className="mt-4 mx-auto">
              Not everyone comes to this page for a dinner party. If the problem is six o'clock - everyone home late, nobody planned anything, and the same five meals coming round - then the fix is not a better recipe. It is not having to think about it. A standing chef sorts the week, not the evening.
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
              <DisplayHeading size="h2" className="text-white">Finding a chef is easy. Keeping your kitchen running every week is the hard part.</DisplayHeading>
              <BodyCopy tone="dark" className="mt-4">
                Hiring on your own means you handle the matching, the feedback, the cover when someone is away and the replacing. We handle all of that. Your part is telling us what you like to eat.
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

      {/* Who employs whom, and what a chef earns for doing it well. One ladder, printed once. */}
      <Section id="who-employs" tone="white">
        <Container>
          <div className="max-w-[760px]">
            <Eyebrow>Your side of it</Eyebrow>
            <DisplayHeading size="h2">The chef cooks. We do everything around it.</DisplayHeading>
            <BodyCopy className="mt-4">
              We find the chef, agree the menu with you, and manage the arrangement from there. Every home scores the chef after each visit, and you have one person to call.
            </BodyCopy>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {QUALITY_LEVELS.map((level) => (
              <div key={level.id} className="border border-gray-200 p-6">
                <p className="font-inter text-caption uppercase tracking-[0.14em] text-gold-ink">{level.label}</p>
                <p className="mt-2 font-playfair text-h3 text-black">
                  {level.name}
                  <span className="ml-2 font-inter text-body-sm text-gray-500">
                    {level.earnedBy}
                  </span>
                </p>
                <p className="mt-3 font-inter text-body-sm text-gray-600 leading-relaxed">
                  {level.id === 1 ? 'Every chef starts here. The price you pay does not change.' : level.meaning}
                </p>
              </div>
            ))}
            <div className="border border-gray-200 p-6">
              <p className="font-inter text-caption uppercase tracking-[0.14em] text-gold-ink">If it slips</p>
              <p className="mt-2 font-playfair text-h3 text-black">
                Level down
                <span className="ml-2 font-inter text-body-sm text-gray-500">
                  back to the previous rate
                </span>
              </p>
              <p className="mt-3 font-inter text-body-sm text-gray-600 leading-relaxed">
                We speak to the chef first. If it does not recover they move back a level. If it still does not, we replace them.
              </p>
            </div>
          </div>
          <p className="mt-6 font-inter text-body-sm text-gray-600 max-w-[760px] leading-relaxed">
            Four days a week on Kitchen on Autopilot is sixteen visits in four weeks. A long month sometimes lands a seventeenth, and we bill that only when it happens. What you pay does not change when a chef moves up a level — that side of it is ours to look after, and you are never asked to pay more for the person you already like.
          </p>
        </Container>
      </Section>

      <Section id="the-system" tone="ivory">
        <Container>
          <div className="max-w-[720px] mx-auto text-center mb-12">
            <Eyebrow align="center">The overview</Eyebrow>
            <DisplayHeading size="h2" className="text-black">The detail, in five parts</DisplayHeading>
            <BodyCopy muted className="mt-4 mx-auto">
              This page is the overview. There are separate pages on how it works, who the chefs are, how we keep the standard, who comes into your home, and what it costs.
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
                Normally we build the week around one person. Someone who already knows how you take your coffee, what the children will eat, and what Friday looks like in your house.
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
            <DisplayHeading size="h2" className="text-black">The chef learns how you live. We write it down, so you never have to teach it twice.</DisplayHeading>
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
          <div className="max-w-[720px] mx-auto mt-12">
            <DisplayHeading as="h3" size="h3" className="text-black mb-4">You meet the chef before anything starts</DisplayHeading>
            <BodyCopy>
              Nobody is sent to your door unannounced. You meet the chef first, and the Food Profile is built with them - how your household eats, the allergies, the timings, what the children will and will not touch. Most chefs come and see the kitchen, look at what is there and talk through the groceries before the first cooking day. By the time your chef starts, they will already have visited your kitchen, discussed your household's preferences and reviewed the available equipment and working environment.
            </BodyCopy>
          </div>
        </Container>
      </Section>

      <Section id="rhythm" tone="white">
        <Container>
          <div className="max-w-[720px] mx-auto text-center mb-10">
            <Eyebrow align="center">How often the chef comes</Eyebrow>
            <DisplayHeading size="h2" className="text-black">Choose the household rhythm</DisplayHeading>
            <BodyCopy muted className="mt-4 mx-auto">
              We build the plan around the days and meals you actually need — not a package named after an occasion.
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
            <DisplayHeading size="h2" className="text-black">Who we put in your kitchen</DisplayHeading>
            <BodyCopy muted className="mt-4 mx-auto">
              A personal chef in Dubai is matched to your kitchen, not simply hired. Anyone can check a chef once, on the day they start. We score every visit, so the standard has to hold — not just be reached once.
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
          <div className="max-w-[760px] mx-auto mb-10">
            <DisplayHeading as="h3" size="h3" className="text-black mb-4">How we maintain service quality</DisplayHeading>
            <BodyCopy className="mb-4">
              Our quality process continues after a chef has been selected for an experience.
            </BodyCopy>
            <BodyCopy className="mb-4">
              We use client feedback, service history and ongoing performance assessment to help us understand how each experience is being delivered.
            </BodyCopy>
            <BodyCopy className="mb-4">
              We look at areas such as: food quality and presentation; professionalism and punctuality; cleanliness and kitchen care; communication; understanding of client preferences; consistency across repeat bookings; and overall client satisfaction.
            </BodyCopy>
            <BodyCopy className="mb-4">
              Strong performance is recognised and rewarded across the myCHEF network.
            </BodyCopy>
            <BodyCopy>
              The objective is simple: every experience should help us make the next one better.
            </BodyCopy>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-center">
            <Link to="/our-chefs" className="inline-flex items-center justify-center gap-2 font-inter text-caption uppercase tracking-wider text-gold-ink hover:text-gold">
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
            <DisplayHeading size="h2" className="text-black">What you pay depends on the chef, the days you need, and the size of your household.</DisplayHeading>
            <BodyCopy muted className="mt-4 mx-auto">
              Displayed figures are Professional Chef on a long-term plan, before VAT. Groceries are charged at actual cost. Build your own figure on Pricing & Plans.
            </BodyCopy>
            <DisplayHeading as="h3" size="h3" className="text-black mt-8">Try the service without a long-term commitment</DisplayHeading>
            <BodyCopy muted className="mt-4 mx-auto">
              Start with a paid trial and continue only if the chef is right for your household. You may pause or cancel at any time by giving us at least 24 hours' notice before your next scheduled service.
            </BodyCopy>
            <BodyCopy muted className="mt-4 mx-auto">
              Services cancelled with less than 24 hours' notice, completed services, groceries already purchased and non-refundable or committed third-party costs remain payable. Where a discounted package is cancelled early, completed services may be recalculated at the applicable standard rate before the remaining balance is refunded or credited.
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
          <div className="bg-cream border border-gray-200 p-6 md:p-8 mb-8 max-w-[760px] mx-auto">
            <Eyebrow align="center">September only</Eyebrow>
            <DisplayHeading as="h3" size="h3" className="text-black mb-4 text-center">AED 1,500 a day. AED 1,040 this September.</DisplayHeading>
            <BodyCopy className="mb-4">
              A full-day chef is nine hours in your kitchen: the planning, the shopping, the cooking and the clearing up. AED 1,300 a day through September, and down to AED 1,040 a day at twenty days or more. Full-day chef only.
            </BodyCopy>
            <BodyCopy className="mb-6">
              A full-day plan takes most of one chef's month, so there are six places this September. Agree your plan this month and we hold the rate for three months.
            </BodyCopy>
            <p className="text-center">
              <a
                href={buildWhatsAppLink(
                  "Hi myCHEF Dubai, I'd like the September full-day chef offer. Location: __, Days: __ (via mychef.ae/private-chef-dubai)",
                  { medium: 'page', campaign: 'september-full-day-offer' },
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-wider text-gold-ink hover:text-gold"
              >
                WhatsApp us now for more info <ArrowRight size={14} />
              </a>
            </p>
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
            Private Chef Dubai: What should I know before starting a household chef in Dubai?
          </h2>
          <p className="font-inter text-body-sm text-gray-500 text-center mb-8 leading-relaxed">
            Short answers. The system, the chefs, privacy and the full price logic each have their own page.
          </p>
          <FaqAccordion items={[...parentFaqs]} defaultOpen={-1} />
        </div>
      </section>

      <section className="bg-charcoal py-16">
        <div className="container-custom max-w-[800px] text-center">
          <h3 className="font-playfair text-h3 text-white mb-4">How has it been going?</h3>
          <p className="font-inter text-body text-gray-400 leading-relaxed mb-6">
            We do not publish invented reviews. If myCHEF already cooks for you, leave a review — it helps the next family decide.
          </p>
          <Link to="/review" className="btn-primary">Leave a Review</Link>
        </div>
      </section>

      <LocationStrip
        title="A household chef across Dubai"
        subtitle={
          <>
            A private chef near me in Dubai still needs a match, not a pin on a map.{' '}
            Palm Jumeirah,{' '}
            Emirates Hills
            {' '}and{' '}
            Dubai Hills
            {' '}are typical houses; the same system covers the rest of the city.
          </>
        }
      />

      <ClusterCTA
        body={`Book a private chef in Dubai after the figure is in writing. Long-term plans from ${formatAed(pricingPreview[0].monthly)} a month for a weekly Fresh Meal — up to a full-day chef, seven days a week. Build the plan on the pricing page, send it, and the exact figure arrives before anyone starts.`}
      />
    </div>
  )
}
