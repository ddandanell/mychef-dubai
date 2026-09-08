import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import SEO from './SEO'
import PageHero from './PageHero'
import TrustSignalStrip from './TrustSignalStrip'
import FaqAccordion from './FaqAccordion'
import LocationStrip from './LocationStrip'
import {
  Section,
  Container,
  SectionLabel,
  DisplayHeading,
  BodyCopy,
  SequenceRail,
  CTAGroup,
} from './system'
import { CATERING_INQUIRY_HREF } from '@/content/cateringCluster'
import type { InstitutionalFigure, InstitutionalPageContent } from '@/content/institutionalLandingTypes'

function ConceptFigure({ image, className = '' }: { image: InstitutionalFigure; className?: string }) {
  return (
    <figure className={className}>
      <div className="overflow-hidden bg-gray-100">
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          decoding="async"
          className="w-full h-auto aspect-[16/9] object-cover"
        />
      </div>
      <figcaption className="mt-3 font-inter text-sm text-gray-500 leading-relaxed">{image.caption}</figcaption>
    </figure>
  )
}

export default function InstitutionalLanding({ page }: { page: InstitutionalPageContent }) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `https://www.mychef.ae${page.root}#service`,
        name: page.lock.h1,
        serviceType: page.lock.h1,
        description: page.lock.description,
        url: `https://www.mychef.ae${page.root}`,
        provider: { '@id': 'https://www.mychef.ae/#organization' },
        areaServed: { '@id': 'https://www.mychef.ae/#place-dubai' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: page.breadcrumb.map((crumb, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: crumb.label,
          ...(crumb.href ? { item: `https://www.mychef.ae${crumb.href}` } : {}),
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: page.faqs.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') },
        })),
      },
    ],
  }

  return (
    <div>
      <SEO
        title={page.lock.title}
        description={page.lock.description}
        canonicalPath={page.root}
        ogImage={page.hero.src}
        hideSiteName
        preloadHero={page.hero.src}
        schema={schema}
      />

      <PageHero
        eyebrow={page.eyebrow}
        title={page.lock.h1}
        subtitle={page.hero.subtitle}
        image={page.hero.src}
        imageAlt={page.hero.alt}
        imageWidth={page.hero.width}
        imageHeight={page.hero.height}
        align="left"
        cta={{ label: page.primaryCta, href: CATERING_INQUIRY_HREF }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: page.whatsapp, external: true }}
        breadcrumb={page.breadcrumb}
        minHeight="full"
        overlay="dark"
      >
        <p className="mt-5 font-inter text-body-sm text-white/70 max-w-[58ch]">{page.hero.micro}</p>
      </PageHero>
      <TrustSignalStrip />

      <nav aria-label="On this page" className="border-b border-gray-200 bg-white">
        <div className="container-custom flex flex-wrap gap-x-5 gap-y-2 py-4">
          {page.jumpNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-inter text-caption uppercase tracking-[0.12em] text-gray-500 hover:text-gold-ink"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <Section tone="ivory" rhythm="connected">
        <Container>
          <p className="font-inter text-caption uppercase tracking-[0.12em] text-gold-ink mb-4">Also in this silo</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {page.siblings.map((item) => (
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
          <p className="mt-6 font-inter text-body-sm text-gray-600 max-w-[62ch]">{page.siloNote}</p>
        </Container>
      </Section>

      <Section id="brief" tone="white" rhythm="chapter">
        <Container>
          <div className="max-w-3xl">
            <SectionLabel>THE JOB</SectionLabel>
            <DisplayHeading className="text-black mb-6">{page.problem.h2}</DisplayHeading>
            {page.problem.paragraphs.map((p) => (
              <BodyCopy key={p.slice(0, 48)} className="mb-4">
                {p}
              </BodyCopy>
            ))}
          </div>
          <ConceptFigure image={page.figures.afterBrief} className="mt-10" />
        </Container>
      </Section>

      <Section id="difference" tone="ivory" rhythm="chapter">
        <Container>
          <SectionLabel>HOW THIS IS RUN</SectionLabel>
          <DisplayHeading className="text-black mb-12">{page.difference.h2}</DisplayHeading>
          <div className="grid md:grid-cols-2 gap-8">
            {page.difference.blocks.map((block) => (
              <article key={block.title} className="border-t border-gray-200 pt-6">
                {block.image ? <ConceptFigure image={block.image} className="mb-5" /> : null}
                <h3 className="font-playfair text-h4 text-black mb-3">{block.title}</h3>
                <p className="font-inter text-body-sm text-gray-600 leading-relaxed max-w-[52ch]">{block.body}</p>
              </article>
            ))}
          </div>
          {page.figures.afterDifference ? (
            <ConceptFigure image={page.figures.afterDifference} className="mt-12" />
          ) : null}
        </Container>
      </Section>

      {page.table ? (
        <Section id="menu" tone="white" rhythm="chapter">
          <Container>
            <SectionLabel>{page.table.label}</SectionLabel>
            <DisplayHeading className="text-black mb-4">{page.table.h2}</DisplayHeading>
            <BodyCopy className="mb-8">{page.table.intro}</BodyCopy>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-inter text-body-sm text-gray-700">
                <thead>
                  <tr className="border-b border-gray-200">
                    {page.table.columns.map((col) => (
                      <th key={col} className="py-3 pr-4 font-medium text-black">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {page.table.rows.map((row) => (
                    <tr key={row[0]} className="border-b border-gray-100">
                      {row.map((cell) => (
                        <td key={cell} className="py-3 pr-4">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {page.table.note ? (
              <p className="mt-6 font-inter text-body-sm text-gray-500 max-w-[65ch]">{page.table.note}</p>
            ) : null}
          </Container>
        </Section>
      ) : null}

      <Section id="compliance" tone="charcoal" rhythm="chapter">
        <Container>
          <SectionLabel tone="dark">WHAT THE WORK REQUIRES</SectionLabel>
          <DisplayHeading className="text-white mb-4">{page.compliance.h2}</DisplayHeading>
          <p className="font-inter text-body text-gray-300 leading-relaxed mb-8 max-w-[65ch]">{page.compliance.intro}</p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left font-inter text-body-sm text-gray-300">
              <thead>
                <tr className="border-b border-white/15">
                  <th className="py-3 pr-4 font-medium text-white">Requirement</th>
                  <th className="py-3 pr-4 font-medium text-white">Who asks</th>
                  <th className="py-3 font-medium text-white">What you should see</th>
                </tr>
              </thead>
              <tbody>
                {page.compliance.rows.map((row) => (
                  <tr key={row.item} className="border-b border-white/10">
                    <td className="py-3 pr-4 text-white">{row.item}</td>
                    <td className="py-3 pr-4">{row.who}</td>
                    <td className="py-3">{row.see}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-inter text-body-sm text-gray-400 max-w-[65ch]">{page.compliance.note}</p>
        </Container>
      </Section>

      <Section id="how-it-works" tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>HOW IT STARTS</SectionLabel>
          <DisplayHeading className="text-black mb-12">{page.process.h2}</DisplayHeading>
          <SequenceRail steps={[...page.process.steps]} />
        </Container>
      </Section>

      <Section id="quote" tone="ivory" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>QUOTING</SectionLabel>
          <DisplayHeading className="text-black mb-6">{page.quoting.h2}</DisplayHeading>
          {page.quoting.paragraphs.map((p) => (
            <BodyCopy key={p.slice(0, 40)} className="mb-4">
              {p}
            </BodyCopy>
          ))}
        </Container>
      </Section>

      <Section id="trust" tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>STANDARDS YOU CAN OPEN</SectionLabel>
          <DisplayHeading className="text-black mb-12">{page.trust.h2}</DisplayHeading>
          <div className="grid md:grid-cols-2 gap-8">
            {page.trust.items.map((item) => (
              <div key={item.title} className="border-t border-gray-200 pt-6">
                <h3 className="font-playfair text-h4 text-black mb-3">{item.title}</h3>
                <p className="font-inter text-body-sm text-gray-600 leading-relaxed mb-4 max-w-[52ch]">{item.body}</p>
                {item.href ? (
                  <Link
                    to={item.href}
                    className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink hover:text-gold"
                  >
                    {item.linkLabel} <ArrowRight size={14} aria-hidden />
                  </Link>
                ) : null}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="faqs" tone="ivory" rhythm="standard">
        <Container className="max-w-[800px]">
          <SectionLabel align="center">BEFORE YOU BOOK</SectionLabel>
          <DisplayHeading className="text-black text-center mb-10">{page.faqH2}</DisplayHeading>
          <FaqAccordion items={[...page.faqs]} showJumpNav />
        </Container>
      </Section>

      <LocationStrip title={page.locationTitle} subtitle={page.locationSubtitle} />

      <Section id="get-quote" tone="dark" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel tone="dark">START WITH THE SITE</SectionLabel>
          <DisplayHeading className="text-white mb-6">{page.cta.h2}</DisplayHeading>
          <p className="font-inter text-body text-gray-300 leading-relaxed mb-8 max-w-[58ch]">{page.cta.body}</p>
          <CTAGroup>
            <Link to={CATERING_INQUIRY_HREF} className="btn-primary">
              {page.primaryCta}
            </Link>
            <a href={page.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Chat on WhatsApp
            </a>
          </CTAGroup>
        </Container>
      </Section>
    </div>
  )
}
