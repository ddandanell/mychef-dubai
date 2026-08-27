// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /luxury-dining-experiences
//     primary:     "private dining experience dubai"
//     subkeywords: "luxury dining in dubai" · "luxury dining experiences dubai" · "luxury dining experiences dubai price" · "luxury dining experience cost per person dubai" · "best luxury dining experiences dubai" · "luxury dining experiences packages dubai" · "luxury dining menu dubai" · "unique dining experiences dubai" · "luxury dining experience dubai" · "dining offers in dubai" · "dubai fine dining offers" · "best fine dining experience dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { Link } from 'react-router'
import { isParked } from '@/content/parkedUrls'
import { ArrowRight, ArrowUpRight, MessageCircle } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import TrustSignalStrip from '../components/TrustSignalStrip'
import LocationStrip from '../components/LocationStrip'
import FaqAccordion from '../components/FaqAccordion'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { plainFaqAnswer } from '../utils/schema'
import {
  Section,
  Container,
  SectionLabel,
  DisplayHeading,
  BodyCopy,
} from '../components/system'
import {
  EXPERIENCES_INQUIRY_HREF,
  EXPERIENCES_PATHS,
  EXPERIENCES_WHATSAPP_LINK,
  EXPERIENCES_WHATSAPP_MESSAGE,
  experiencesBreadcrumb,
  experiencesHubSeo,
} from '@/content/experiencesCluster'
import {
  bookingSteps,
  experienceFaqs,
  experienceFinder,
  finalCta,
  finalDirectory,
  hero,
  otherCategories,
  prose,
  sectionImages,
  whatItIs,
  type ProseSection,
} from '@/content/luxuryDiningPage'

const HERO_IMAGE = '/images/luxury-dining-experiences-dubai-hero.webp'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: experiencesHubSeo.h1,
      description: experiencesHubSeo.description,
      url: `https://www.mychef.ae${EXPERIENCES_PATHS.hub}`,
      about: { '@type': 'Thing', name: 'Private dining experiences in Dubai' },
      publisher: { '@id': 'https://www.mychef.ae/#organization' },
    },
    experiencesBreadcrumb('Dining Experiences', EXPERIENCES_PATHS.hub),
    {
      '@type': 'FAQPage',
      mainEntity: experienceFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: plainFaqAnswer(faq.a) },
      })),
    },
  ],
}

function ProseBlock({ section, index }: { section: ProseSection; index: number }) {
  const image = sectionImages[section.id]
  const flip = index % 2 === 1

  return (
    <div id={section.id} className="scroll-mt-24">
      <div className={image ? 'grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center' : ''}>
        <div className={flip && image ? 'lg:order-2' : undefined}>
          <DisplayHeading size="h2" className="text-black mb-6 max-w-[19ch]">
            {section.h2}
          </DisplayHeading>
          {section.paragraphs.map((p) => (
            <BodyCopy key={p} tone="muted" className="mb-4 last:mb-0">
              {p}
            </BodyCopy>
          ))}

          {section.bullets ? (
            <ol className="mt-8 border-t border-gray-200">
              {section.bullets.map((b, i) => (
                <li key={b} className="flex items-baseline gap-4 border-b border-gray-200 py-3.5">
                  <span className="font-inter text-caption tabular-nums text-gold-ink">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-inter text-body text-gray-700">{b}</span>
                </li>
              ))}
            </ol>
          ) : null}

          {section.link ? (
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
              <Link
                to={section.link.href}
                className="group inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.14em] text-gold-ink hover:text-gold"
              >
                {section.link.label}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
              {section.secondaryLink ? (
                <Link
                  to={section.secondaryLink.href}
                  className="font-inter text-body-sm text-gray-500 underline underline-offset-4 hover:text-gold-ink"
                >
                  {section.secondaryLink.label}
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>

        {image ? (
          <figure className={flip ? 'lg:order-1' : undefined}>
            <img
              src={image.src}
              alt={image.alt}
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
              className="w-full object-cover aspect-[4/3]"
            />
          </figure>
        ) : null}
      </div>
    </div>
  )
}

export default function LuxuryDining() {
  useWhatsAppMessage(EXPERIENCES_WHATSAPP_MESSAGE)

  return (
    <div>
      <SEO
        title={experiencesHubSeo.title}
        description={experiencesHubSeo.description}
        canonicalPath={EXPERIENCES_PATHS.hub}
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
        imageAlt="Guests seated at a private chef-led dinner in a Dubai villa while the chef finishes a plate. Experience concept shown."
        imageWidth={1683}
        imageHeight={935}
        cta={{ label: hero.primaryCta, href: '#experience-finder' }}
        secondaryCta={{ label: hero.secondaryCta, href: '#custom' }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Dining Experiences' }]}
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

      {/* What a dining experience actually is — typography only, deliberately no image. */}
      <Section tone="ivory" rhythm="chapter" id={whatItIs.id}>
        <Container>
          <div className="max-w-[820px]">
            <SectionLabel>The category</SectionLabel>
            <DisplayHeading size="h2" className="text-black mb-8">
              {whatItIs.h2}
            </DisplayHeading>
            {whatItIs.paragraphs.map((p) => (
              <BodyCopy key={p} tone="muted" className="mb-5 last:mb-0 text-body-lg">
                {p}
              </BodyCopy>
            ))}
          </div>
        </Container>
      </Section>

      {/* Experience finder */}
      <Section tone="white" rhythm="chapter" id="experience-finder">
        <Container>
          <div className="max-w-[720px] mb-12 lg:mb-16">
            <SectionLabel>Choose a direction</SectionLabel>
            <DisplayHeading size="h2" className="text-black mb-5">
              What Would You Like to Experience?
            </DisplayHeading>
            <BodyCopy tone="muted">
              Five starting points. None of them is a fixed package — each one is the beginning of a conversation
              about what the evening actually needs.
            </BodyCopy>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
            {experienceFinder.map((item, i) => (
              <Link
                key={item.id}
                to={item.href}
                className={`group block ${i === 0 ? 'md:col-span-2' : ''}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    width={1200}
                    height={i === 0 ? 620 : 800}
                    loading="lazy"
                    decoding="async"
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${
                      i === 0 ? 'aspect-[16/7]' : 'aspect-[4/3]'
                    }`}
                  />
                </div>
                <div className="pt-5">
                  <h3 className="font-playfair text-h3 text-black transition-colors group-hover:text-gold-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[52ch] font-inter text-body-sm text-gray-600 leading-relaxed">
                    {item.text}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.14em] text-gold-ink">
                    {item.cta}
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* The long-form body. Tone alternates so the page keeps a rhythm. */}
      {prose.map((section, i) => (
        <Section key={section.id} tone={i % 2 === 0 ? 'ivory' : 'white'} rhythm="chapter">
          <Container>
            <ProseBlock section={section} index={i} />
          </Container>
        </Section>
      ))}

      {/* How booking works */}
      <Section tone="white" rhythm="chapter" id="how-booking-works">
        <Container>
          <div className="max-w-[720px] mb-12 lg:mb-16">
            <SectionLabel>How it works</SectionLabel>
            <DisplayHeading size="h2" className="text-black mb-5">
              From an Idea to the Experience
            </DisplayHeading>
          </div>
          <ol className="relative grid grid-cols-1 gap-y-8 lg:grid-cols-5 lg:gap-x-8 lg:gap-y-10">
            <span className="pointer-events-none absolute top-2 bottom-2 left-[4px] w-px bg-gold/30 lg:hidden" aria-hidden />
            <span className="pointer-events-none absolute top-[4px] right-0 left-0 hidden h-px bg-gold/30 lg:block" aria-hidden />
            {bookingSteps.map((s) => (
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

      {/* Product boundary — teaches visitors and search engines where each category starts. */}
      <Section tone="charcoal" rhythm="chapter">
        <Container>
          <div className="max-w-[720px] mb-10">
            <SectionLabel tone="dark">Looking for something else?</SectionLabel>
            <DisplayHeading size="h2" className="text-white mb-5">
              Three Different Jobs, Three Different Teams
            </DisplayHeading>
            <BodyCopy tone="light">
              Sending you to the right one is faster than making this page pretend to do all three.
            </BodyCopy>
          </div>
          <div className="grid gap-px bg-white/15 border border-white/15 md:grid-cols-3">
            {otherCategories.filter((i) => !isParked(i.href)).map((c) => (
              <Link key={c.cta} to={c.href} className="group bg-black p-7 lg:p-8 transition-colors hover:bg-white/[0.04]">
                <p className="font-playfair text-h4 text-white mb-3">{c.q}</p>
                <p className="font-inter text-body-sm text-white/55 leading-relaxed mb-6">{c.a}</p>
                <span className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.14em] text-gold">
                  {c.cta}
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <section className="bg-cream py-24">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black mb-10">
            Luxury Dining in Dubai: Private Dining Experiences in Dubai — Common Questions
          </h2>
          <FaqAccordion items={[...experienceFaqs]} defaultOpen={-1} />
        </div>
      </section>

      {/* Final directory */}
      <Section tone="white" rhythm="chapter">
        <Container>
          <div className="max-w-[720px] mb-12">
            <SectionLabel>Where to next</SectionLabel>
            <DisplayHeading size="h2" className="text-black">
              Find Your Experience
            </DisplayHeading>
          </div>
          <div className="grid border-t border-gray-200 sm:grid-cols-2 lg:grid-cols-3">
            {finalDirectory.filter((i) => !isParked(i.href)).map((d) => (
              <Link
                key={d.title}
                to={d.href}
                className="group flex items-baseline justify-between gap-6 border-b border-gray-200 py-6 pr-2 transition-colors hover:text-gold-ink sm:pr-8"
              >
                <span className="min-w-0">
                  <span className="block font-playfair text-h4 text-black transition-colors group-hover:text-gold-ink">
                    {d.title}
                  </span>
                  <span className="mt-1 block font-inter text-body-sm text-gray-500">{d.text}</span>
                </span>
                <ArrowRight size={16} className="shrink-0 text-gold-ink transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
          <p className="mt-8 font-inter text-body-sm text-gray-500">
            Planning a larger event?{' '}
            <Link to="/catering-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Catering
            </Link>
            . Need a chef for several days or longer?{' '}
            <Link to="/private-chef-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Private Chef
            </Link>
            .
          </p>
        </Container>
      </Section>

      <LocationStrip />

      {/* Final CTA */}
      <Section tone="charcoal" rhythm="chapter">
        <Container>
          <div className="max-w-[720px]">
            <DisplayHeading size="h2" className="text-white mb-6">
              {finalCta.h2}
            </DisplayHeading>
            <BodyCopy tone="light" className="mb-9 text-body-lg">
              {finalCta.body}
            </BodyCopy>
            <div className="flex flex-wrap gap-4">
              <Link to={EXPERIENCES_INQUIRY_HREF} className="btn-primary">
                {finalCta.primary}
              </Link>
              <a
                href={EXPERIENCES_WHATSAPP_LINK}
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
