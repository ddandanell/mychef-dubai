// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /wedding-catering-checklist-dubai
//     primary:     "wedding catering checklist dubai"
//     subkeywords: "how to plan wedding catering dubai" · "wedding catering questions to ask" · "wedding catering timeline dubai" · "how much food for a wedding dubai" · "catering contract wedding checklist" · "checklist for catering event" · "wedding catering services in dubai" · "afternoon tea wedding catering"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { Link } from 'react-router'
import { ArrowRight, Printer } from 'lucide-react'
import SEO from '../../components/SEO'
import PageHero from '../../components/PageHero'
import TrustSignalStrip from '../../components/TrustSignalStrip'
import FaqAccordion from '../../components/FaqAccordion'
import {
  Section,
  Container,
  SectionLabel,
  DisplayHeading,
  BodyCopy,
  CTAGroup,
} from '../../components/system'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { howToSchema, plainFaqAnswer } from '../../utils/schema'
import {
  WEDDING_IDENTITY,
  WEDDING_INQUIRY,
  WEDDING_PATHS,
  WEDDING_SEASON,
  WEDDING_SETUP,
  WEDDING_TASTING,
  WEDDING_TIMELINE,
  WEDDING_WHATSAPP_LINK,
  WEDDING_WHATSAPP_MESSAGE,
} from '@/content/weddingCluster'
import {
  CHECKLIST_KEYWORD_LOCK,
  checklistFaqs,
  checklistHero,
  checklistLinks,
  checklistPhases,
  dubaiBlock,
  firstBrief,
  foodChecklist,
  plannerSplit,
  questionsToAsk,
} from '@/content/weddingChecklistPage'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Wedding Catering Checklist for Dubai',
      description: CHECKLIST_KEYWORD_LOCK.description,
      author: { '@id': 'https://www.mychef.ae/#organization' },
      publisher: { '@id': 'https://www.mychef.ae/#organization' },
      datePublished: '2026-07-01',
      dateModified: '2026-08-25',
    },
    howToSchema(
      'How to plan wedding catering in Dubai',
      'A wedding catering timeline for Dubai, from first brief to day-of service.',
      checklistPhases.map((phase) => ({ name: phase.phase, text: `${phase.when} ${phase.tasks.join(' ')}` })),
    ),
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://www.mychef.ae/guides' },
        { '@type': 'ListItem', position: 3, name: 'Wedding Catering Checklist Dubai', item: `https://www.mychef.ae${WEDDING_PATHS.checklist}` },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: checklistFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: plainFaqAnswer(faq.a) },
      })),
    },
  ],
}

export default function WeddingCateringChecklist() {
  useWhatsAppMessage(WEDDING_WHATSAPP_MESSAGE)

  return (
    <div className="print-checklist">
      <SEO
        title={CHECKLIST_KEYWORD_LOCK.title}
        description={CHECKLIST_KEYWORD_LOCK.description}
        canonicalPath={WEDDING_PATHS.checklist}
        ogImage={checklistHero.src}
        hideSiteName
        preloadHero={checklistHero.src}
        schema={schema}
      />

      <div className="print-hide">
        <PageHero
          variant="quiet"
          eyebrow="Wedding Catering Checklist Dubai"
          title="Wedding Catering Checklist Dubai"
          subtitle="A planning sequence for villas, gardens and venues. When to book, when to taste, what to ask the community office, and what to send seven days out. No prices on this page."
          image={checklistHero.src}
          imageAlt={checklistHero.alt}
          imageWidth={checklistHero.width}
          imageHeight={checklistHero.height}
          align="left"
          cta={{ label: 'Request a quote', href: WEDDING_INQUIRY }}
          secondaryCta={{ label: 'Chat on WhatsApp', href: WEDDING_WHATSAPP_LINK, external: true }}
          breadcrumb={[
            { label: 'Home', href: '/' },
            { label: 'Guides', href: '/guides' },
            { label: 'Wedding Catering Checklist Dubai' },
          ]}
          minHeight="tall"
          overlay="dark"
        />
        <TrustSignalStrip />
      </div>

      <Section tone="ivory" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>THE JOB OF THIS PAGE</SectionLabel>
          <DisplayHeading className="text-black mb-6">A sequence, not a brochure</DisplayHeading>
          <BodyCopy className="mb-5">
            Use this wedding catering checklist when the date is real and you need the order of decisions. To hire the team, go to{' '}
            <Link to={WEDDING_PATHS.hub} className="text-gold-ink underline underline-offset-4 hover:text-gold">
              wedding catering Dubai
            </Link>
            . {WEDDING_IDENTITY}
          </BodyCopy>
          <BodyCopy className="mb-5">{WEDDING_TIMELINE}</BodyCopy>
          <BodyCopy className="mb-8">
            {WEDDING_SEASON} Numbers live on the{' '}
            <Link to={WEDDING_PATHS.cost} className="text-gold-ink underline underline-offset-4 hover:text-gold">
              wedding catering cost
            </Link>{' '}
            guide. Menus live on the{' '}
            <Link to={WEDDING_PATHS.menu} className="text-gold-ink underline underline-offset-4 hover:text-gold">
              wedding menu planning guide
            </Link>
            .
          </BodyCopy>
          <button
            type="button"
            onClick={() => window.print()}
            className="print-hide inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink hover:text-gold"
          >
            <Printer size={14} aria-hidden /> Print this checklist
          </button>
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>THE FIRST BRIEF</SectionLabel>
          <DisplayHeading className="text-black mb-6">What to send so we can answer honestly</DisplayHeading>
          <BodyCopy className="mb-8">
            You do not need a Pinterest board. You need the facts that change the kitchen plan.
          </BodyCopy>
          <ul className="space-y-3">
            {firstBrief.map((item) => (
              <li key={item}>
                <label className="flex gap-3 items-start cursor-pointer">
                  <input type="checkbox" className="mt-1.5 h-4 w-4 shrink-0 accent-[#C8A45C]" />
                  <span className="font-inter text-body text-gray-600 leading-relaxed">{item}</span>
                </label>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>WHO DOES WHAT</SectionLabel>
          <DisplayHeading className="text-black mb-6">We are not the wedding planner</DisplayHeading>
          <BodyCopy className="mb-10">
            If you need a planner, hire a planner. We manage the food and beverage operation and fit it to their run sheet.
          </BodyCopy>
          <dl className="divide-y divide-gray-200 border-y border-gray-200">
            {plannerSplit.map((row) => (
              <div key={row.who} className="py-5 sm:grid sm:grid-cols-3 sm:gap-6">
                <dt className="font-playfair text-h4 text-black">{row.who}</dt>
                <dd className="mt-2 sm:col-span-2 sm:mt-0 font-inter text-body text-gray-600 leading-relaxed">{row.does}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>WEDDING FOOD CHECKLIST</SectionLabel>
          <DisplayHeading className="text-black mb-6">The meal, named in order</DisplayHeading>
          <BodyCopy className="mb-8">
            This is the wedding food checklist. Tick what is in the brief. Leave the rest off — optional lines should stay optional.
          </BodyCopy>
          <ul className="space-y-3">
            {foodChecklist.map((item) => (
              <li key={item}>
                <label className="flex gap-3 items-start cursor-pointer">
                  <input type="checkbox" className="mt-1.5 h-4 w-4 shrink-0 accent-[#C8A45C]" />
                  <span className="font-inter text-body text-gray-600 leading-relaxed">{item}</span>
                </label>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>WEDDING CATERING TIMELINE</SectionLabel>
          <DisplayHeading className="text-black mb-12">When to book a wedding caterer — and what happens after</DisplayHeading>
          <ol className="space-y-10">
            {checklistPhases.map((phase, index) => (
              <li key={phase.phase} className="border-t border-gray-200 pt-8">
                <p className="font-inter text-caption uppercase tracking-[0.12em] text-gold-ink mb-2">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h2 className="font-playfair text-h3 text-black mb-2">{phase.phase}</h2>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed mb-5">{phase.when}</p>
                <ul className="space-y-3">
                  {phase.tasks.map((task) => (
                    <li key={task}>
                      <label className="flex gap-3 items-start cursor-pointer">
                        <input type="checkbox" className="mt-1.5 h-4 w-4 shrink-0 accent-[#C8A45C]" />
                        <span className="font-inter text-body text-gray-600 leading-relaxed">{task}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
          <BodyCopy className="mt-10">
            Tasting: {WEDDING_TASTING} {WEDDING_SETUP}
          </BodyCopy>
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>QUESTIONS TO ASK</SectionLabel>
          <DisplayHeading className="text-black mb-6">Wedding catering questions to ask before you hold the date</DisplayHeading>
          <BodyCopy className="mb-8">
            If a supplier cannot answer these without a brochure paragraph, keep looking.
          </BodyCopy>
          <ol className="space-y-4">
            {questionsToAsk.map((question, index) => (
              <li key={question} className="flex gap-4">
                <span className="font-inter text-caption text-gold-ink mt-1">{String(index + 1).padStart(2, '0')}</span>
                <span className="font-inter text-body text-gray-600 leading-relaxed">{question}</span>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>DUBAI-SPECIFIC</SectionLabel>
          <DisplayHeading className="text-black mb-10">Gates, hotels, licences</DisplayHeading>
          <div className="space-y-8">
            {dubaiBlock.map((item) => (
              <div key={item.title}>
                <h2 className="font-playfair text-h4 text-black mb-2">{item.title}</h2>
                <p className="font-inter text-body text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <BodyCopy className="mt-10">
            Dessert and cake are optional lines, not automatic.{' '}
            <Link to="/dessert-table-catering-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Dessert table catering
            </Link>
            {' · '}
            <Link to="/bar-services-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Bar services
            </Link>
            . Lead times for other event types sit in{' '}
            <Link to="/blog/how-far-ahead-book-caterer-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              how far ahead to book a caterer
            </Link>
            .
          </BodyCopy>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container>
          <SectionLabel>ALSO IN THIS CLUSTER</SectionLabel>
          <DisplayHeading className="text-black mb-10">Cost, menus, and the commercial page</DisplayHeading>
          <ul className="max-w-3xl divide-y divide-gray-200 border-y border-gray-200">
            {checklistLinks.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <span className="font-playfair text-h4 text-black group-hover:text-gold-ink">{item.label}</span>
                  <span className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink">
                    {item.note} <ArrowRight size={14} aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <div className="print-hide">
        <Section tone="white" rhythm="standard">
          <Container className="max-w-[800px]">
            <SectionLabel align="center">QUESTIONS</SectionLabel>
            <DisplayHeading className="text-black text-center mb-10">Wedding catering timeline questions</DisplayHeading>
            <FaqAccordion items={[...checklistFaqs]} />
          </Container>
        </Section>

        <Section tone="dark" rhythm="chapter">
          <Container className="max-w-3xl">
            <SectionLabel tone="dark">THE DATE IS REAL</SectionLabel>
            <DisplayHeading className="text-white mb-6">Send the brief. We will tell you if the team is free.</DisplayHeading>
            <p className="font-inter text-body text-gray-300 leading-relaxed mb-8 max-w-[58ch]">
              Back to{' '}
              <Link to={WEDDING_PATHS.hub} className="text-gold underline underline-offset-4 hover:text-gold-light">
                wedding catering Dubai
              </Link>
              , or start a quote. Date, venue, guests, format. That is enough.
            </p>
            <CTAGroup>
              <Link to={WEDDING_INQUIRY} className="btn-primary">
                Request a quote
              </Link>
              <a href={WEDDING_WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Chat on WhatsApp
              </a>
            </CTAGroup>
          </Container>
        </Section>
      </div>
    </div>
  )
}
