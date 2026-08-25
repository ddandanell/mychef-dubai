// KEYWORD LOCK — this page owns: "corporate event catering dubai".
// Scope: ONE-OFF company events (parties, launches, celebrations, networking, awards).
// It must NOT target "corporate catering dubai" (that is /corporate), nor office lunches,
// conference programmes, staff meals, meal prep, retainers or production catering —
// each has its own page and is linked, not explained, from here.
import { Link } from 'react-router'
import { ArrowRight, ArrowUpRight, MessageCircle } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import TrustSignalStrip from '../components/TrustSignalStrip'
import CorporateTrustStrip from '../components/CorporateTrustStrip'
import LocationStrip from '../components/LocationStrip'
import FaqAccordion from '../components/FaqAccordion'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { plainFaqAnswer } from '../utils/schema'
import { Section, Container, SectionLabel, DisplayHeading, BodyCopy } from '../components/system'
import {
  CORPORATE_INQUIRY_HREF,
  CORPORATE_PATHS,
  CORPORATE_WHATSAPP_LINK,
  CORPORATE_WHATSAPP_MESSAGE,
  corporateBreadcrumb,
  corporateEventSeo,
} from '@/content/corporateCluster'
import {
  blocks,
  faqs,
  finalCta,
  hero,
  notThisPage,
  scope,
  specialities,
  steps,
  type Block,
} from '@/content/corporateEventPage'

const HERO_IMAGE = '/images/corporate-catering-dubai-hero.webp'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Corporate Event Catering Dubai',
      serviceType: 'Corporate event catering',
      description: corporateEventSeo.description,
      url: `https://www.mychef.ae${CORPORATE_PATHS.events}`,
      areaServed: { '@type': 'City', name: 'Dubai' },
      provider: { '@type': 'Organization', name: 'myCHEF Dubai', url: 'https://www.mychef.ae' },
    },
    corporateBreadcrumb('Corporate Event Catering', CORPORATE_PATHS.events),
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: plainFaqAnswer(f.a) },
      })),
    },
  ],
}

function TextBlock({ block }: { block: Block }) {
  return (
    <div id={block.id} className="scroll-mt-24 max-w-[760px]">
      <DisplayHeading size="h2" className="text-black mb-6">
        {block.h2}
      </DisplayHeading>
      {block.paragraphs.map((p) => (
        <BodyCopy key={p} tone="muted" className="mb-4 last:mb-0">
          {p}
        </BodyCopy>
      ))}
      {block.bullets ? (
        <ul className="mt-8 grid gap-x-8 gap-y-2 sm:grid-cols-2">
          {block.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 border-b border-gray-200 py-2.5">
              <span className="mt-2.5 h-px w-3 shrink-0 bg-gold-ink/60" aria-hidden />
              <span className="font-inter text-body-sm text-gray-700">{b}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {block.link ? (
        <Link
          to={block.link.href}
          className="group mt-8 inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.14em] text-gold-ink hover:text-gold"
        >
          {block.link.label}
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </Link>
      ) : null}
    </div>
  )
}

export default function CorporateEventCatering() {
  useWhatsAppMessage(CORPORATE_WHATSAPP_MESSAGE)

  return (
    <div>
      <SEO
        title={corporateEventSeo.title}
        description={corporateEventSeo.description}
        canonicalPath={CORPORATE_PATHS.events}
        ogImage={HERO_IMAGE}
        hideSiteName
        preloadHero={HERO_IMAGE}
        schema={schema}
      />

      <PageHero
        variant="quiet"
        eyebrow={hero.eyebrow}
        title={hero.h1}
        subtitle={hero.subtitle}
        image={HERO_IMAGE}
        imageAlt="Guests at a company event in Dubai being served canapés by catering staff. Experience concept shown."
        imageWidth={1683}
        imageHeight={935}
        cta={{ label: hero.primaryCta, href: CORPORATE_INQUIRY_HREF }}
        secondaryCta={{ label: hero.secondaryCta, href: CORPORATE_WHATSAPP_LINK, external: true }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Corporate Catering', href: CORPORATE_PATHS.hub },
          { label: 'Corporate Event Catering' },
        ]}
        minHeight="tall"
        overlay="left"
        align="left"
        imagePosition="center 45%"
      />

      <TrustSignalStrip />

      <Section tone="white" rhythm="standard">
        <Container>
          <p className="font-inter text-caption uppercase tracking-[0.16em] text-gray-400">{hero.utility}</p>
        </Container>
      </Section>

      {/* Scope — what we do and what we do not */}
      <Section tone="ivory" rhythm="chapter">
        <Container>
          <SectionLabel>Scope</SectionLabel>
          <TextBlock block={scope} />
        </Container>
      </Section>

      {/* Company parties — deliberately the first substantive section, ahead of galas */}
      <Section tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>Company parties</SectionLabel>
          <TextBlock block={blocks[0]} />
        </Container>
      </Section>

      {/* Event types + speciality hand-off */}
      <Section tone="ivory" rhythm="chapter">
        <Container>
          <SectionLabel>Event types</SectionLabel>
          <TextBlock block={blocks[1]} />
          <div className="mt-12 grid gap-px border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-3">
            {specialities.map((s) => (
              <Link key={s.href} to={s.href} className="group bg-white p-6 transition-colors hover:bg-cream">
                <h3 className="font-playfair text-h4 text-black transition-colors group-hover:text-gold-ink">
                  {s.title}
                </h3>
                <p className="mt-2 font-inter text-body-sm leading-relaxed text-gray-600">{s.text}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink">
                  Explore
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Formats */}
      <Section tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>Service formats</SectionLabel>
          <TextBlock block={blocks[2]} />
        </Container>
      </Section>

      {/* Menus & dietary */}
      <Section tone="ivory" rhythm="chapter">
        <Container>
          <SectionLabel>Menus</SectionLabel>
          <TextBlock block={blocks[3]} />
        </Container>
      </Section>

      {/* Logistics */}
      <Section tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>Logistics</SectionLabel>
          <TextBlock block={blocks[4]} />
        </Container>
      </Section>

      <CorporateTrustStrip />

      {/* Pricing & procurement */}
      <Section tone="ivory" rhythm="chapter">
        <Container>
          <SectionLabel>Pricing</SectionLabel>
          <TextBlock block={blocks[5]} />
        </Container>
      </Section>

      {/* How it works */}
      <Section tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>How it works</SectionLabel>
          <TextBlock block={blocks[6]} />
          <ol className="relative mt-12 grid grid-cols-1 gap-y-8 lg:grid-cols-5 lg:gap-x-8">
            <span className="pointer-events-none absolute top-2 bottom-2 left-[4px] w-px bg-gold/30 lg:hidden" aria-hidden />
            <span className="pointer-events-none absolute top-[4px] right-0 left-0 hidden h-px bg-gold/30 lg:block" aria-hidden />
            {steps.map((s) => (
              <li key={s.n} className="relative pl-8 lg:pl-0 lg:pt-8">
                <span className="absolute top-[6px] left-0 h-[9px] w-[9px] bg-gold-ink lg:top-0" aria-hidden />
                <p className="mb-3 font-playfair text-h4 leading-none text-gold-ink select-none">{s.n}</p>
                <p className="mb-2 font-playfair text-h4 text-black">{s.title}</p>
                <p className="max-w-[38ch] font-inter text-body-sm leading-relaxed text-gray-600">{s.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Recurring catering is a different product — send it away */}
      <Section tone="charcoal" rhythm="chapter">
        <Container>
          <div className="mb-10 max-w-[720px]">
            <SectionLabel tone="dark">Not an event?</SectionLabel>
            <DisplayHeading size="h2" className="mb-5 text-white">
              Regular Catering Runs on a Different Operation
            </DisplayHeading>
            <BodyCopy tone="light">
              Recurring workplace catering is planned, priced and staffed differently from a one-off event.
              These pages cover it properly.
            </BodyCopy>
          </div>
          <div className="grid gap-px border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {notThisPage.map((c) => (
              <Link key={c.href} to={c.href} className="group bg-black p-6 transition-colors hover:bg-white/[0.04]">
                <p className="mb-3 font-playfair text-h4 text-white">{c.q}</p>
                <p className="mb-6 font-inter text-body-sm leading-relaxed text-white/55">{c.a}</p>
                <span className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold">
                  {c.cta}
                  <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ — eight visible questions, matching the FAQPage markup exactly */}
      <section className="bg-cream py-24">
        <div className="container-custom max-w-[800px]">
          <h2 className="mb-10 font-playfair text-fluid-h2 text-black">
            Corporate Event Catering in Dubai — Common Questions
          </h2>
          <FaqAccordion items={[...faqs]} defaultOpen={-1} />
          <p className="mt-8 font-inter text-body-sm text-gray-500">
            Planning the wider programme?{' '}
            <Link to={CORPORATE_PATHS.checklist} className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Corporate catering checklist
            </Link>
            {' · '}
            <Link to={CORPORATE_PATHS.fullServiceVsDropOff} className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Full service vs drop-off
            </Link>
            {' · '}
            <Link to={CORPORATE_PATHS.eventIdeas} className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Corporate event catering ideas
            </Link>
          </p>
        </div>
      </section>

      <LocationStrip />

      <Section tone="charcoal" rhythm="chapter">
        <Container>
          <div className="max-w-[720px]">
            <DisplayHeading size="h2" className="mb-6 text-white">
              {finalCta.h2}
            </DisplayHeading>
            <BodyCopy tone="light" className="mb-9 text-body-lg">
              {finalCta.body}
            </BodyCopy>
            <div className="flex flex-wrap gap-4">
              <Link to={CORPORATE_INQUIRY_HREF} className="btn-primary">
                {finalCta.primary}
              </Link>
              <a
                href={CORPORATE_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <MessageCircle size={16} />
                {finalCta.secondary}
              </a>
            </div>
            <p className="mt-8 font-inter text-body-sm text-white/45">
              Broader corporate catering, including recurring workplace service, sits on the{' '}
              <Link to={CORPORATE_PATHS.hub} className="text-gold hover:text-gold-light">
                corporate catering hub
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>
    </div>
  )
}
