// KEYWORD LOCK — this page owns: "birthday catering dubai".
// Covers adults, milestones, mixed-age, home and villa birthdays. It introduces kids
// birthdays, the bookable package and chef-led birthday dinners, then links to the page
// that owns each. Do not target another birthday URL's primary here, and do not add
// "adult/milestone/villa birthday catering" pages — those intents live on this page.
import { Link } from 'react-router'
import { ArrowRight, Check, MessageCircle, Plus } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import TrustSignalStrip from '../components/TrustSignalStrip'
import LocationStrip from '../components/LocationStrip'
import FaqAccordion from '../components/FaqAccordion'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { plainFaqAnswer } from '../utils/schema'
import { Section, Container, SectionLabel, DisplayHeading, BodyCopy } from '../components/system'
import {
  BIRTHDAY_INQUIRY_HREF,
  BIRTHDAY_PACKAGE,
  BIRTHDAY_PATHS,
  BIRTHDAY_SUPPORT,
  BIRTHDAY_WHATSAPP_LINK,
  BIRTHDAY_WHATSAPP_MESSAGE,
  birthdayBreadcrumb,
  birthdayHubSeo,
} from '@/content/birthdayCluster'
import {
  audiences,
  blocks,
  faqs,
  finalCta,
  formats,
  hero,
  menuDirections,
  quoteScope,
  serviceAreas,
  steps,
  type Block,
} from '@/content/birthdayPage'

const HERO_IMAGE = '/images/birthday-catering-dubai-hero.webp'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Birthday Catering Dubai',
      serviceType: 'Birthday catering',
      description: birthdayHubSeo.description,
      url: `https://www.mychef.ae${BIRTHDAY_PATHS.hub}`,
      areaServed: { '@type': 'City', name: 'Dubai' },
      provider: { '@type': 'Organization', name: 'myCHEF Dubai', url: 'https://www.mychef.ae' },
    },
    birthdayBreadcrumb('Birthday Catering Dubai', BIRTHDAY_PATHS.hub),
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
      <DisplayHeading size="h2" className="mb-6 text-black">
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
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
          <Link
            to={block.link.href}
            className="group inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.14em] text-gold-ink hover:text-gold"
          >
            {block.link.label}
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
          {block.secondaryLink ? (
            <Link
              to={block.secondaryLink.href}
              className="font-inter text-body-sm text-gray-500 underline underline-offset-4 hover:text-gold-ink"
            >
              {block.secondaryLink.label}
            </Link>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}

export default function BirthdayCatering() {
  useWhatsAppMessage(BIRTHDAY_WHATSAPP_MESSAGE)

  return (
    <div>
      <SEO
        title={birthdayHubSeo.title}
        description={birthdayHubSeo.description}
        canonicalPath={BIRTHDAY_PATHS.hub}
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
        imageAlt="A birthday table laid for guests in a Dubai home, with a chef finishing a dish in the background. Experience concept shown."
        imageWidth={1683}
        imageHeight={935}
        cta={{ label: hero.primaryCta, href: BIRTHDAY_INQUIRY_HREF }}
        secondaryCta={{ label: hero.secondaryCta, href: BIRTHDAY_WHATSAPP_LINK, external: true }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Catering', href: '/catering-dubai' },
          { label: 'Birthday Catering' },
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

      {/* Who this is for — three routes */}
      <Section tone="ivory" rhythm="chapter">
        <Container>
          <div className="mb-12 max-w-[720px]">
            <SectionLabel>Who it is for</SectionLabel>
            <DisplayHeading size="h2" className="mb-5 text-black">
              Three Very Different Kinds of Birthday
            </DisplayHeading>
            <BodyCopy tone="muted">
              They need different food, different timing and sometimes different people. Start with the one
              closest to what you are planning.
            </BodyCopy>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {audiences.map((a) => (
              <Link key={a.id} to={a.href} className="group block">
                <div className="overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.alt}
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-5 font-playfair text-h3 text-black transition-colors group-hover:text-gold-ink">
                  {a.title}
                </h3>
                <p className="mt-2 font-inter text-body-sm leading-relaxed text-gray-600">{a.text}</p>
                <span className="mt-4 inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.14em] text-gold-ink">
                  {a.cta}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Formats at a glance */}
      <Section tone="white" rhythm="chapter" id="formats">
        <Container>
          <div className="mb-10 max-w-[760px]">
            <SectionLabel>Service formats</SectionLabel>
            <DisplayHeading size="h2" className="mb-5 text-black">
              Six Ways to Feed a Birthday Party
            </DisplayHeading>
            <BodyCopy tone="muted">
              The format decides the cost, the staffing and how the evening feels — more than the menu does.
              Tell us the space and the guest count and we will confirm what is workable.
            </BodyCopy>
          </div>

          {/* Mobile: stacked, so nothing hides behind a horizontal scroll */}
          <ul className="border-t border-gray-200 lg:hidden">
            {formats.map((f) => (
              <li key={f.format} className="border-b border-gray-200 py-5">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-playfair text-h4 text-black">{f.format}</span>
                  <Link to={f.href} className="font-inter text-caption uppercase tracking-[0.12em] text-gold-ink">
                    Detail
                  </Link>
                </div>
                <p className="mt-2 font-inter text-body-sm text-gray-700">Best for: {f.bestFor}</p>
                <p className="mt-1 font-inter text-body-sm text-gray-600">{f.feel}</p>
                <p className="mt-1 font-inter text-caption uppercase tracking-[0.1em] text-gray-400">
                  Space: {f.space} · Staffing: {f.staffing}
                </p>
              </li>
            ))}
          </ul>

          <div className="hidden overflow-x-auto lg:block">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-gray-300">
                  {['Format', 'Best for', 'How it feels', 'Space it needs', 'Staffing', ''].map((th) => (
                    <th
                      key={th}
                      className="py-3 pr-4 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink"
                    >
                      {th}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {formats.map((f) => (
                  <tr key={f.format} className="border-b border-gray-200">
                    <td className="py-4 pr-4 font-playfair text-h4 text-black">{f.format}</td>
                    <td className="py-4 pr-4 font-inter text-body-sm text-gray-700">{f.bestFor}</td>
                    <td className="py-4 pr-4 font-inter text-body-sm text-gray-600">{f.feel}</td>
                    <td className="py-4 pr-4 font-inter text-body-sm text-gray-600">{f.space}</td>
                    <td className="py-4 pr-4 font-inter text-body-sm text-gray-600">{f.staffing}</td>
                    <td className="py-4">
                      <Link
                        to={f.href}
                        className="whitespace-nowrap font-inter text-caption uppercase tracking-[0.12em] text-gold-ink hover:text-gold"
                      >
                        Detail
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* Long-form body */}
      {blocks.map((block, i) => (
        <Section key={block.id} tone={i % 2 === 0 ? 'ivory' : 'white'} rhythm="chapter">
          <Container>
            <TextBlock block={block} />

            {/* Menu directions sit inside the menu-design section */}
            {block.id === 'menu-design' ? (
              <div className="mt-12 grid gap-px border border-gray-200 bg-gray-200 md:grid-cols-3">
                {menuDirections.map((m) => (
                  <div key={m.title} className="bg-white p-6">
                    <h3 className="font-playfair text-h4 text-black">{m.title}</h3>
                    <p className="mt-2 font-inter text-body-sm leading-relaxed text-gray-600">{m.text}</p>
                  </div>
                ))}
                <p className="col-span-full bg-cream p-4 font-inter text-caption text-gray-500">
                  Illustrative directions, not fixed menus — every one is built around your guests, your
                  space and the time of day.
                </p>
              </div>
            ) : null}

            {/* Inclusions vs options sit inside the pricing section */}
            {block.id === 'pricing' ? (
              <>
                <div className="mt-12 grid gap-px border border-gray-200 bg-gray-200 md:grid-cols-2">
                  <div className="bg-white p-6 lg:p-7">
                    <p className="mb-4 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink">
                      {quoteScope.included.label}
                    </p>
                    <ul className="space-y-2">
                      {quoteScope.included.items.map((it) => (
                        <li key={it} className="flex items-start gap-2.5 font-inter text-body-sm text-gray-700">
                          <Check size={14} className="mt-1 shrink-0 text-gold-ink" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-cream p-6 lg:p-7">
                    <p className="mb-4 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink">
                      {quoteScope.optional.label}
                    </p>
                    <ul className="space-y-2">
                      {quoteScope.optional.items.map((it) => (
                        <li key={it} className="flex items-start gap-2.5 font-inter text-body-sm text-gray-700">
                          <Plus size={14} className="mt-1 shrink-0 text-gold-ink" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* The one concrete package */}
                <div className="mt-8 border-t-2 border-t-gold bg-white p-6 lg:p-8">
                  <p className="font-inter text-caption uppercase tracking-[0.14em] text-gold-ink">
                    One bookable package
                  </p>
                  <p className="mt-3 font-playfair text-h3 text-black">
                    Birthday celebration for {BIRTHDAY_PACKAGE.guests}
                  </p>
                  <p className="mt-2 font-inter text-body text-gray-600">
                    From{' '}
                    <span className="font-medium text-gold-ink">{BIRTHDAY_PACKAGE.from}</span> ·{' '}
                    {BIRTHDAY_PACKAGE.perPerson}. A fixed starting point for a small seated celebration —
                    everything else on this page is quoted to your event.
                  </p>
                  <Link
                    to={BIRTHDAY_PACKAGE.href}
                    className="group mt-5 inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.14em] text-gold-ink hover:text-gold"
                  >
                    See what the package includes
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </>
            ) : null}
          </Container>
        </Section>
      ))}

      {/* How booking works */}
      <Section tone="white" rhythm="chapter" id="how-booking-works">
        <Container>
          <div className="mb-12 max-w-[720px]">
            <SectionLabel>How it works</SectionLabel>
            <DisplayHeading size="h2" className="mb-5 text-black">
              From First Message to the Day Itself
            </DisplayHeading>
          </div>
          <ol className="relative grid grid-cols-1 gap-y-8 lg:grid-cols-5 lg:gap-x-8">
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

      {/* Service areas */}
      <Section tone="ivory" rhythm="standard">
        <Container>
          <div className="max-w-[760px]">
            <SectionLabel>Where we cater</SectionLabel>
            <DisplayHeading size="h2" className="mb-5 text-black">
              Birthday Catering Across Dubai
            </DisplayHeading>
            <BodyCopy tone="muted" className="mb-6">
              We cater birthdays across Dubai. Where you are affects planning more than most people expect —
              access, parking, lift availability and community rules all feed into the timings, so it helps
              to mention the address early.
            </BodyCopy>
            <p className="font-inter text-body-sm text-gray-600">
              {serviceAreas.join(' · ')} and the rest of the city.{' '}
              <Link
                to={BIRTHDAY_SUPPORT.locations}
                className="text-gold-ink underline underline-offset-4 hover:text-gold"
              >
                See areas we cover
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <section className="bg-cream py-24">
        <div className="container-custom max-w-[800px]">
          <h2 className="mb-10 font-playfair text-fluid-h2 text-black">
            Birthday Catering in Dubai — Common Questions
          </h2>
          <FaqAccordion items={[...faqs]} defaultOpen={-1} />
          <p className="mt-8 font-inter text-body-sm text-gray-500">
            Planning something bigger or different?{' '}
            <Link to={BIRTHDAY_SUPPORT.partyCatering} className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Party catering
            </Link>
            {' · '}
            <Link to={BIRTHDAY_SUPPORT.poolParty} className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Pool party catering
            </Link>
            {' · '}
            <Link to={BIRTHDAY_SUPPORT.gallery} className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Gallery
            </Link>
          </p>
        </div>
      </section>

      <LocationStrip />

      {/* Final conversion */}
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
              <Link to={BIRTHDAY_INQUIRY_HREF} className="btn-primary">
                {finalCta.primary}
              </Link>
              <a
                href={BIRTHDAY_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <MessageCircle size={16} />
                {finalCta.secondary}
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
