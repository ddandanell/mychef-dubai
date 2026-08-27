// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /private-chef-dubai/quality-training
//     primary:     none (untargeted by decision)
//     subkeywords: none
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { Link } from 'react-router'
import { Check, Clock, Flame, LayoutList, MessageSquare, NotebookPen } from 'lucide-react'
import SEO from '../../components/SEO'
import PageHero from '../../components/PageHero'
import FaqAccordion from '../../components/FaqAccordion'
import { Section, Container, Eyebrow, DisplayHeading, BodyCopy } from '../../components/system'
import ClusterNav from '../../components/private-chef/ClusterNav'
import ClusterCTA from '../../components/private-chef/ClusterCTA'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { plainFaqAnswer } from '../../utils/schema'
import {
  calibration,
  feedbackOutputs,
  clusterHeroes,
  scoreDemo,
  scoring,
  WHATSAPP_MESSAGE,
} from '../../content/privateChefPage'
import { CLUSTER_PATHS, FIND_CHEF_LABEL, INQUIRY_HREF, childSeo, qualityFaqs } from '../../content/privateChefCluster'
import { MONTH_SENTENCE, QUALITY_LEVELS, SCORE_BANDS, SCORE_ROUTING } from '../../content/privateChefStandard'

const PATH = CLUSTER_PATHS.quality
const seo = childSeo.quality
const hero = clusterHeroes.quality

const measure = [
  'Cooking — flavour, timing, consistency, more than one dish at once',
  'Organisation — the kitchen handed back in order',
  'Food handling — temperature, allergens, hygiene',
  'Communication — what was asked, what was cooked, what changed',
  'Service — present or invisible, as this house prefers',
  'Household fit — children, staff, guests, the actual rhythm',
]

const afterRating = [
  { title: 'Menu', body: 'What appears next week, not a generic rotation.' },
  { title: 'Seasoning', body: 'What “spicy” actually means in this house.' },
  { title: 'Timing', body: 'Breakfast at 8:00 may be coffee at 7:30.' },
  { title: 'Communication', body: 'How much the chef speaks, and when they do not.' },
  { title: 'Organisation', body: 'Where things live, and how the kitchen is left.' },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: qualityFaqs.map((faq) => ({
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
        { '@type': 'ListItem', position: 3, name: 'Quality & Training', item: `https://www.mychef.ae${PATH}` },
      ],
    },
  ],
}

export default function PrivateChefQualityTraining() {
  useWhatsAppMessage(WHATSAPP_MESSAGE)

  return (
    <div>
      <SEO
        title={seo.title}
        description={seo.description}
        canonicalPath={PATH}
        noindex
        ogImage={hero.src}
        hideSiteName
        preloadHero={hero.src}
        schema={schema}
      />
      <PageHero
        variant="quiet"
        eyebrow={seo.eyebrow}
        title={seo.h1}
        subtitle={seo.subtitle}
        image={hero.src}
        imageAlt={hero.alt}
        imageWidth={hero.width}
        imageHeight={hero.height}
        cta={{ label: FIND_CHEF_LABEL, href: INQUIRY_HREF }}
        secondaryCta={{ label: 'See Our Standards', href: `${PATH}#standards` }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Private Chef Dubai', href: CLUSTER_PATHS.overview },
          { label: 'Quality & Training' },
        ]}
        minHeight="tall"
        overlay="left"
        align="left"
        imagePosition="68% 48%"
      />
      <ClusterNav />

      <Section tone="white">
        <Container>
          <Eyebrow id="standards" className="scroll-mt-24">The standard</Eyebrow>
          <DisplayHeading size="h2" className="text-black mb-4">How household chef standards stay good</DisplayHeading>
          <BodyCopy className="mb-5 max-w-[760px]">
            A first dinner is easy to get right. Month four is the test. This page is the loop after placement: what we keep measuring, how feedback is used, and when training is not the answer — we change the match.
          </BodyCopy>
          <BodyCopy className="mb-5 max-w-[760px]">
            One definition matters more than most: “healthy.” A healthy food chef is only healthy against your version of it — so what healthy means in this house lives in the Food Profile and is measured like everything else.
          </BodyCopy>
          <BodyCopy className="mb-8 max-w-[760px]">
            How a chef is selected and levelled sits on{' '}
            <Link to={CLUSTER_PATHS.ourChefs} className="text-gold-ink underline underline-offset-4">Our Chefs</Link>
            . The Food Profile that the next chef inherits sits on{' '}
            <Link to={CLUSTER_PATHS.howItWorks} className="text-gold-ink underline underline-offset-4">How It Works</Link>.
          </BodyCopy>
          <ul className="grid sm:grid-cols-2 gap-3 max-w-[800px]">
            {measure.map((item) => (
              <li key={item} className="flex items-start gap-3 border border-gray-200 p-4">
                <Check size={16} className="text-gold-ink mt-1 flex-shrink-0" />
                <span className="font-inter text-body-sm text-gray-600 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="ivory">
        <Container>
          <Eyebrow>Training</Eyebrow>
          <DisplayHeading size="h2" className="text-black mb-4">Stable quality cannot depend on one individual</DisplayHeading>
          <BodyCopy className="mb-5 max-w-[760px]">
            Private-household work is a different job from a restaurant brigade. Chefs go through a practical assessment, then household onboarding for each house — kitchens, children, timing, preferences, other staff, privacy.
          </BodyCopy>
          <BodyCopy className="mb-5 max-w-[760px]">
            Structured modules also sit in our{' '}
            <Link to="/chef-training-academy" className="text-gold-ink underline underline-offset-4">Chef Training Academy</Link>
            : private-dining service, food-safety refresh, plating, and dietary competency including halal. We do not claim a named certificate for every chef. Basic food-hygiene awareness is mandatory; PIC is preferred.
          </BodyCopy>
          <BodyCopy muted className="max-w-[760px]">
            Training is how standards stay consistent. It is not a substitute for a bad match.
          </BodyCopy>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <Eyebrow>Client feedback</Eyebrow>
          <DisplayHeading size="h2" className="text-black mb-4">Food, service, team, communication — then what happens</DisplayHeading>
          <BodyCopy className="mb-8 max-w-[760px]">{scoreDemo.note}</BodyCopy>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 max-w-[920px]">
            {scoreDemo.scores.map((s) => (
              <div key={s.label} className="border border-gray-200 p-6 text-center">
                <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-2">{s.label}</p>
                {s.value == null ? (
                  <p className="font-playfair text-h4 text-black">One line<span className="text-body-sm text-gray-400"> · not scored</span></p>
                ) : (
                  <p className="font-playfair text-h2 text-black">{s.value}<span className="text-h4 text-gray-400"> / 5</span></p>
                )}
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {scoreDemo.steps.map((step) => (
              <div key={step.title} className="border border-gray-200 p-6">
                <h3 className="font-playfair text-h4 text-black mb-3">{step.title}</h3>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-6 lg:grid-cols-2 mb-10">
            <div className="border border-gray-200 p-6">
              <p className="font-inter text-caption uppercase tracking-[0.14em] text-gold-ink mb-4">Where the average lands</p>
              <dl className="grid gap-3">
                {SCORE_BANDS.map((band) => (
                  <div key={band.band} className="grid grid-cols-[auto_1fr] gap-3 items-baseline">
                    <dt className="font-playfair text-h4 text-black whitespace-nowrap">{band.band}</dt>
                    <dd className="font-inter text-body-sm text-gray-600 leading-relaxed">{band.effect}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="border border-gray-200 p-6">
              <p className="font-inter text-caption uppercase tracking-[0.14em] text-gold-ink mb-4">What it is worth to the chef</p>
              <dl className="grid gap-3">
                {QUALITY_LEVELS.map((level) => (
                  <div key={level.id} className="grid grid-cols-[auto_1fr] gap-3 items-baseline">
                    <dt className="font-playfair text-h4 text-black whitespace-nowrap">{level.name}</dt>
                    <dd className="font-inter text-body-sm text-gray-600 leading-relaxed">
                      {level.extraPct ? `+${level.extraPct * 100}% to the chef. ` : 'The price is the price. '}
                      {level.meaning}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 font-inter text-body-sm text-gray-600 leading-relaxed">
                {MONTH_SENTENCE} The extra is paid to the registered chef, not to the company that sent them, and it is
                the same ladder the supplier signs — a chef at Level 3 also takes catering work, which is why the good
                ones stay.
              </p>
            </div>
          </div>
          <p className="font-inter text-body-sm text-gray-500 mb-10 max-w-[760px]">
            {SCORE_ROUTING.food} {SCORE_ROUTING.person} {SCORE_ROUTING.safety} {scoreDemo.chefsFeedback}
          </p>
          <h3 className="font-playfair text-h3 text-black mb-3">{feedbackOutputs.title}</h3>
          <BodyCopy className="mb-6">{feedbackOutputs.intro}</BodyCopy>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {feedbackOutputs.outputs.map((out) => (
              <div key={out.label} className="border border-gray-200 p-6">
                <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-2">{out.label}</p>
                <p className="font-playfair text-h4 text-black mb-3">{out.example}</p>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{out.body}</p>
              </div>
            ))}
          </div>
          <BodyCopy muted>{feedbackOutputs.closer}</BodyCopy>
        </Container>
      </Section>

      <Section tone="ivory">
        <Container>
          <Eyebrow>After a rating</Eyebrow>
          <DisplayHeading size="h2" className="text-black mb-4">What actually gets adjusted</DisplayHeading>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-gray-200 border border-gray-200 mb-14">
            {afterRating.map((item) => {
              const Icon = { Menu: NotebookPen, Seasoning: Flame, Timing: Clock, Communication: MessageSquare, Organisation: LayoutList }[item.title] ?? Check
              return (
                <div key={item.title} className="bg-white p-5 lg:p-6">
                  <span className="mb-4 flex h-10 w-10 items-center justify-center border border-gold/35 text-gold-ink">
                    <Icon size={18} strokeWidth={1.5} aria-hidden />
                  </span>
                  <h3 className="font-playfair text-h4 text-black mb-2">{item.title}</h3>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.body}</p>
                </div>
              )
            })}
          </div>
          <h3 className="font-playfair text-h3 text-black mb-6 text-center">Your first week is calibration</h3>
          <ol className="relative grid sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-8 mb-8">
            <span className="hidden lg:block absolute top-[3px] left-0 right-0 h-px bg-gold/30" aria-hidden />
            {calibration.map((item) => (
              <li key={item.when} className="relative lg:pt-6">
                <span className="hidden lg:block absolute top-0 left-0 h-[7px] w-[7px] bg-gold-ink" aria-hidden />
                <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-2">{item.when}</p>
                <p className="font-inter text-body-sm text-gray-700 leading-relaxed">{item.title}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="dark">
        <Container>
          <Eyebrow tone="dark">When training is not the solution</Eyebrow>
          <DisplayHeading size="h2" className="text-white mb-4">Sometimes the match is simply wrong</DisplayHeading>
          <BodyCopy tone="dark" className="mb-5 max-w-[760px]">
            Then we change the match. The Food Profile stays with the household — see{' '}
            <Link to={CLUSTER_PATHS.howItWorks} className="text-gold underline underline-offset-4">how backup uses that record</Link>
            . You are not expected to confront the chef at the stove, and you are not expected to start interviewing again.
          </BodyCopy>
          <BodyCopy tone="dark-strong" className="mb-6 max-w-[760px]">
            {scoring.criticalFailures.body}
          </BodyCopy>
          <Link to={CLUSTER_PATHS.privacy} className="inline-flex font-inter text-caption uppercase tracking-wider text-gold hover:text-white">
            See how we handle privacy inside the home →
          </Link>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <Eyebrow>Continue</Eyebrow>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link to={CLUSTER_PATHS.ourChefs} className="border border-gray-200 hover:border-gold p-6 transition-colors">
              <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-2">Our Chefs</p>
              <p className="font-playfair text-h4 text-black">How the match is made</p>
            </Link>
            <Link to={CLUSTER_PATHS.howItWorks} className="border border-gray-200 hover:border-gold p-6 transition-colors">
              <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-2">How It Works</p>
              <p className="font-playfair text-h4 text-black">The Food Profile that travels</p>
            </Link>
            <Link to={CLUSTER_PATHS.pricing} className="border border-gray-200 hover:border-gold p-6 transition-colors">
              <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-2">Pricing & Plans</p>
              <p className="font-playfair text-h4 text-black">Household plan prices</p>
            </Link>
          </div>
        </Container>
      </Section>

      <section className="bg-cream py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-8">Questions about quality, feedback and changing the match</h2>
          <FaqAccordion items={[...qualityFaqs]} defaultOpen={-1} />
        </div>
      </section>

      <ClusterCTA title="Quality that still holds in month four" body="Tell us how the house eats. We match, review, and change the chef when the match is wrong." />
    </div>
  )
}
