// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /blog/wedding-catering-cost-dubai
//     primary:     "wedding catering cost dubai"
//     subkeywords: "wedding catering cost dubai 2026" · "wedding catering cost per person dubai" · "how much does wedding food cost in dubai" · "wedding catering cost for 100 guests dubai" · "small wedding catering cost dubai" · "catering cost for 200 person wedding" · "halal wedding catering prices" · "catering services rates dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { Link } from 'react-router'
import SEO from '../../components/SEO'
import PageHero from '../../components/PageHero'
import TrustSignalStrip from '../../components/TrustSignalStrip'
import FaqAccordion from '../../components/FaqAccordion'
import BlogRelated from '../../components/BlogRelated'
import BlogFigure from '../../components/BlogFigure'
import ArticleToc from '../../components/ArticleToc'
import {
  Section,
  Container,
  SectionLabel,
  DisplayHeading,
  BodyCopy,
  CTAGroup,
} from '../../components/system'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { plainFaqAnswer } from '../../utils/schema'
import {
  ESTIMATE_CAPTION,
  FIGURES_REVIEWED,
  WEDDING_IDENTITY,
  WEDDING_INQUIRY,
  WEDDING_PATHS,
  WEDDING_VAT,
  WEDDING_WHATSAPP_LINK,
  WEDDING_WHATSAPP_MESSAGE,
  estimateBands,
  estimateFloors,
  inclusionBuckets,
} from '@/content/weddingCluster'
import {
  COST_KEYWORD_LOCK,
  compareQuotes,
  costFaqs,
  costFacts,
  costHero,
  costInlineImages,
  costSources,
  guestSketches,
  hiddenLines,
  quoteDrivers,
  vatSketch,
} from '@/content/weddingCostPage'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Wedding Catering Cost Dubai: Planning Estimates for 2026',
      description: COST_KEYWORD_LOCK.description,
      author: { '@id': 'https://www.mychef.ae/#organization' },
      publisher: { '@id': 'https://www.mychef.ae/#organization' },
      datePublished: '2026-07-01',
      dateModified: '2026-08-25',
      mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.mychef.ae${WEDDING_PATHS.cost}` },
      image: `https://www.mychef.ae${costHero.src}`,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.mychef.ae/blog' },
        { '@type': 'ListItem', position: 3, name: 'Wedding Catering Cost Dubai', item: `https://www.mychef.ae${WEDDING_PATHS.cost}` },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: costFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: plainFaqAnswer(faq.a) },
      })),
    },
  ],
}

export default function WeddingCateringCost() {
  useWhatsAppMessage(WEDDING_WHATSAPP_MESSAGE)

  return (
    <div>
      <SEO
        title={COST_KEYWORD_LOCK.title}
        description={COST_KEYWORD_LOCK.description}
        canonicalPath={WEDDING_PATHS.cost}
        ogImage={costHero.src}
        hideSiteName
        preloadHero={costHero.src}
        schema={schema}
      />

      <PageHero
        variant="quiet"
        eyebrow="Wedding Catering Cost Dubai"
        title="Wedding Catering Cost Dubai: three products, not one ladder"
        subtitle="Food-led buffets, hotel packages and chef-led villa dinners are priced differently. These are planning estimates for 2026. The written proposal is the only number that matters."
        image={costHero.src}
        imageAlt={costHero.alt}
        imageWidth={costHero.width}
        imageHeight={costHero.height}
        align="left"
        cta={{ label: 'Request a quote', href: WEDDING_INQUIRY }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WEDDING_WHATSAPP_LINK, external: true }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'Wedding Catering Cost Dubai' },
        ]}
        minHeight="tall"
        overlay="dark"
      />
      <TrustSignalStrip />

      <article className="bg-white">
        <Section tone="white" rhythm="chapter">
          <Container className="max-w-3xl">
            <p className="mb-8 font-inter text-sm text-gray-400">
              By <strong className="font-medium text-black">myCHEF Dubai</strong>
              <span className="mx-2">|</span>
              <time dateTime="2026-08-25">Figures reviewed {FIGURES_REVIEWED}</time>
            </p>

            <aside className="mb-12 border border-gray-200 bg-cream p-6 md:p-8">
              <h2 className="font-playfair text-h4 text-black mb-4">At a glance</h2>
              <p className="font-inter text-body text-black leading-relaxed mb-6">{costFacts.answer}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {costFacts.facts.map((fact) => (
                  <div key={fact.label} className="bg-white border border-gray-100 p-4">
                    <span className="block font-inter text-xs uppercase tracking-wider text-gold mb-1">{fact.label}</span>
                    <span className="block font-inter text-body text-black font-medium">{fact.value}</span>
                  </div>
                ))}
              </div>
            </aside>

            <BodyCopy className="mb-5">
              <Link to={WEDDING_PATHS.hub} className="text-gold-ink underline underline-offset-4 hover:text-gold">
                Wedding catering in Dubai
              </Link>{' '}
              through myCHEF is a food and beverage operation, not a package name. {WEDDING_IDENTITY}
            </BodyCopy>
            <BodyCopy className="mb-5">
              This page is only about money: wedding catering prices in Dubai, the wedding catering cost per person, and how to read two quotes that look the same until you open the lines. Menus live on the{' '}
              <Link to={WEDDING_PATHS.menu} className="text-gold-ink underline underline-offset-4 hover:text-gold">
                wedding menu planning guide
              </Link>
              . The sequence lives on the{' '}
              <Link to={WEDDING_PATHS.checklist} className="text-gold-ink underline underline-offset-4 hover:text-gold">
                wedding catering checklist
              </Link>
              .
            </BodyCopy>
            <BodyCopy>
              Wider catering bands for dinners that are not weddings sit on the{' '}
              <Link to="/dubai-catering-prices-guide" className="text-gold-ink underline underline-offset-4 hover:text-gold">
                Dubai catering prices guide
              </Link>
              . If you want a working total from guest count and format, use the{' '}
              <Link to="/catering-cost-calculator-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
                catering cost calculator
              </Link>
              — then treat that output as a sketch, not a contract.
            </BodyCopy>
          </Container>
        </Section>

        <Section tone="ivory" rhythm="chapter">
          <Container className="max-w-3xl">
            <ArticleToc />

            <h2 id="three-products" className="font-playfair text-h2 text-black mb-6 scroll-mt-28">
              Do not mix a drop-off buffet with a chef-led villa dinner
            </h2>
            <BodyCopy className="mb-5">
              The live market — and most websites — collapse wedding catering cost in Dubai into one fake range. “From AED 120 to AED 750.” That sentence is how a couple books the wrong product and then feels overcharged.
            </BodyCopy>
            <BodyCopy className="mb-5">
              There are three buys. Independent food-led catering: drop-off or a staffed buffet, priced mainly on food and the team that stands behind it. A hotel package: food plus a building, often a room night, sometimes a cake and a tasting. A chef-led plated villa dinner: a named chef and service team cooking on site. myCHEF’s core product is the third. We also design the first. We are not the hotel.
            </BodyCopy>
            <BodyCopy>
              Independent specialists are often 30–40% below hotel F&amp;B for similar food. The hotel is selling a building. We are selling a kitchen team. Both can be the right buy. Comparing the headlines is how you get angry.
            </BodyCopy>
          </Container>
        </Section>

        <Section tone="white" rhythm="chapter">
          <Container className="max-w-3xl">
            <h2 id="planning-estimates" className="font-playfair text-h2 text-black mb-4 scroll-mt-28">
              Planning estimates for wedding catering prices in Dubai
            </h2>
            <p className="font-inter text-caption uppercase tracking-[0.12em] text-gold-ink mb-8">{ESTIMATE_CAPTION}</p>
            <div className="overflow-x-auto border-y border-gray-200">
              <table className="w-full text-left font-inter text-body-sm">
                <caption className="sr-only">{ESTIMATE_CAPTION}</caption>
                <thead>
                  <tr className="border-b border-gray-200">
                    <th scope="col" className="py-4 pr-4 font-medium text-black">Product</th>
                    <th scope="col" className="py-4 font-medium text-black">Estimate</th>
                  </tr>
                </thead>
                <tbody>
                  {estimateBands.map((row) => (
                    <tr key={row.product} className="border-b border-gray-100 align-top">
                      <th scope="row" className="py-4 pr-4 font-medium text-black">{row.product}</th>
                      <td className="py-4 text-gray-600 leading-relaxed">{row.estimate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <BodyCopy className="mt-8 mb-5">{estimateFloors}</BodyCopy>
            <BodyCopy>{WEDDING_VAT} Always say what the estimate covers, what can sit outside it, and that the written proposal is the only number that matters.</BodyCopy>
          </Container>
        </Section>

        <Section tone="ivory" rhythm="chapter">
          <Container className="max-w-3xl">
            <h2 id="what-moves-the-number" className="font-playfair text-h2 text-black mb-10 scroll-mt-28">
              What moves wedding catering cost per person
            </h2>
            <div className="space-y-8">
              {quoteDrivers.map((item) => (
                <div key={item.title}>
                  <h3 className="font-playfair text-h4 text-black mb-2">{item.title}</h3>
                  <p className="font-inter text-body text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 font-inter text-body text-gray-600 leading-relaxed">
              Format is the fork most couples miss. A plated dinner needs more cooks and waiters timed to courses.{' '}
              <Link to="/buffet-vs-plated-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
                Buffet versus plated
              </Link>{' '}
              is the service argument. This page is the money argument.
            </p>
          </Container>
        </Section>

        <Section tone="white" rhythm="chapter">
          <Container className="max-w-3xl">
            <BlogFigure image={costInlineImages[0]} />
            <h2 id="guest-count-sketches" className="font-playfair text-h2 text-black mb-6 scroll-mt-28">
              Guest-count sketches, not packages
            </h2>
            <BodyCopy className="mb-10">
              These are arithmetic on the bands above. They are not offers. Change the format or the room and the total moves.
            </BodyCopy>
            <div className="space-y-8">
              {guestSketches.map((item) => (
                <div key={item.title}>
                  <h3 className="font-playfair text-h4 text-black mb-2">{item.title}</h3>
                  <p className="font-inter text-body text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <Section tone="ivory" rhythm="chapter">
          <Container className="max-w-3xl">
            <h2 id="hotel-invoices" className="font-playfair text-h2 text-black mb-6 scroll-mt-28">
              A note on hotel invoices
            </h2>
            <BodyCopy className="mb-5">
              This is where transparent sites earn the word. A five-star wedding package at AED 450 per guest for 200 people is AED 90,000 before you blink — and it may include the ballroom, a night for the couple, a tasting for four, and a cake. An independent buffet at AED 180 for the same 200 is AED 36,000 and does not include the room.
            </BodyCopy>
            <BodyCopy className="mb-8">
              Ask every quote the same questions. Is the room inside? Is the cake inside? Is the tasting inside? How many waiters? What time does overtime start? If one invoice is a building and the other is a kitchen, they are not competitors. They are different products.
            </BodyCopy>
            <h3 className="font-playfair text-h4 text-black mb-4">How to compare two quotes</h3>
            <ol className="space-y-3 mb-8">
              {compareQuotes.map((item, index) => (
                <li key={item} className="flex gap-4">
                  <span className="font-inter text-caption text-gold-ink mt-1">{String(index + 1).padStart(2, '0')}</span>
                  <span className="font-inter text-body text-gray-600 leading-relaxed">{item}</span>
                </li>
              ))}
            </ol>
            <BodyCopy>{vatSketch}</BodyCopy>
          </Container>
        </Section>

        <Section tone="white" rhythm="chapter">
          <Container className="max-w-3xl">
            <h2 id="hidden-lines" className="font-playfair text-h2 text-black mb-6 scroll-mt-28">
              Hidden lines we see on Dubai quotes
            </h2>
            <BodyCopy className="mb-8">
              Ask for each by name. We already put ours on separate lines. These are typical market extras, not a promise that every wedding pays them.
            </BodyCopy>
            <dl className="divide-y divide-gray-200 border-y border-gray-200">
              {hiddenLines.map((line) => (
                <div key={line.item} className="py-4 sm:grid sm:grid-cols-3 sm:gap-6">
                  <dt className="font-inter text-body font-medium text-black">{line.item}</dt>
                  <dd className="mt-1 sm:col-span-2 sm:mt-0 font-inter text-body text-gray-600 leading-relaxed">{line.note}</dd>
                </div>
              ))}
            </dl>
            <BlogFigure image={costInlineImages[1]} />
          </Container>
        </Section>

        <Section tone="ivory" rhythm="chapter">
          <Container className="max-w-3xl">
            <h2 id="what-is-included" className="font-playfair text-h2 text-black mb-6 scroll-mt-28">
              Always, sometimes, extra
            </h2>
            <BodyCopy className="mb-8">
              Never list staff, bar, tableware and cake as “always included” and later as “may be extra.” The inclusion split is the same on every wedding page.
            </BodyCopy>
            <dl className="grid gap-8 sm:grid-cols-2">
              <div>
                <dt className="font-inter text-caption uppercase tracking-[0.12em] text-gold-ink mb-2">Always coordinated</dt>
                <dd className="font-inter text-body-sm text-gray-600 leading-relaxed">{inclusionBuckets.always.join(' · ')}</dd>
              </div>
              <div>
                <dt className="font-inter text-caption uppercase tracking-[0.12em] text-gold-ink mb-2">When the plan says so</dt>
                <dd className="font-inter text-body-sm text-gray-600 leading-relaxed">{inclusionBuckets.whenAgreed.join(' · ')}</dd>
              </div>
              <div>
                <dt className="font-inter text-caption uppercase tracking-[0.12em] text-gold-ink mb-2">Optional additions</dt>
                <dd className="font-inter text-body-sm text-gray-600 leading-relaxed">{inclusionBuckets.optional.join(' · ')}</dd>
              </div>
              <div>
                <dt className="font-inter text-caption uppercase tracking-[0.12em] text-gold-ink mb-2">Venue or licensed partners</dt>
                <dd className="font-inter text-body-sm text-gray-600 leading-relaxed">
                  {inclusionBuckets.venue.join(' · ')}. {inclusionBuckets.partners.join(' · ')}.
                </dd>
              </div>
            </dl>
          </Container>
        </Section>

        <Section tone="white" rhythm="chapter">
          <Container className="max-w-3xl">
            <h2 id="affordable" className="font-playfair text-h2 text-black mb-6 scroll-mt-28">
              Affordable wedding catering is the right product, not the lowest headline
            </h2>
            <BodyCopy className="mb-5">
              A competitor’s AED 60 buffet is not our plated villa dinner. Using that number as if it were ours is how a site looks cheap and then expensive. Small wedding catering cost is often higher per guest because the team is divided fewer ways. That is arithmetic, not a luxury mark-up.
            </BodyCopy>
            <BodyCopy>
              If the brief is a garden lunch for forty with a staffed buffet, we will build that. If the brief is twenty people and a tasting menu in a Palm villa, we will build that. We will not pretend they cost the same. {WEDDING_VAT}
            </BodyCopy>
          </Container>
        </Section>

        <Section tone="ivory" rhythm="chapter">
          <Container className="max-w-3xl">
            <h2 id="how-a-quote-is-built" className="font-playfair text-h2 text-black mb-6 scroll-mt-28">
              How a quote is built
            </h2>
            <BodyCopy className="mb-5">
              Date, venue or area, guest count, format, cuisine, dietary list, budget band, and whether you already have a planner. That is enough to start. The proposal is itemised: food, staff, rentals, extras, VAT. Nothing in this article replaces it.
            </BodyCopy>
            <BodyCopy>
              When you are ready to hire, go to{' '}
              <Link to={WEDDING_PATHS.hub} className="text-gold-ink underline underline-offset-4 hover:text-gold">
                wedding catering Dubai
              </Link>
              . If you are still designing the food, stay on the{' '}
              <Link to={WEDDING_PATHS.menu} className="text-gold-ink underline underline-offset-4 hover:text-gold">
                menu guide
              </Link>
              . If the date is real and you need a sequence, use the{' '}
              <Link to={WEDDING_PATHS.checklist} className="text-gold-ink underline underline-offset-4 hover:text-gold">
                checklist
              </Link>
              .
            </BodyCopy>
          </Container>
        </Section>

        <Section tone="white" rhythm="chapter">
          <Container className="max-w-3xl">
            <h2 id="sources" className="font-playfair text-h2 text-black mb-6 scroll-mt-28">
              Wedding Catering Cost Dubai: Where these bands come from
            </h2>
            <BodyCopy className="mb-5">
              Planner blogs disagree with each other by design. That is why we publish ranges and a written proposal, not a single heroic number. Figures reviewed {FIGURES_REVIEWED}.
            </BodyCopy>
            <ul className="space-y-3">
              {costSources.map((source) => (
                <li key={source} className="font-inter text-body-sm text-gray-600 leading-relaxed pl-4 border-l-2 border-gold">
                  {source}
                </li>
              ))}
            </ul>
          </Container>
        </Section>

        <Section tone="ivory" rhythm="standard">
          <Container className="max-w-[800px]">
            <SectionLabel align="center">QUESTIONS</SectionLabel>
            <DisplayHeading className="text-black text-center mb-10">Wedding catering cost questions</DisplayHeading>
            <FaqAccordion items={[...costFaqs]} />
          </Container>
        </Section>

        <Section tone="white" rhythm="standard">
          <Container className="max-w-3xl">
            <BlogRelated currentSlug={WEDDING_PATHS.cost} />
          </Container>
        </Section>
      </article>

      <Section tone="dark" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel tone="dark">THE NEXT NUMBER IS YOURS</SectionLabel>
          <DisplayHeading className="text-white mb-6">Send the wedding. We will itemise it.</DisplayHeading>
          <p className="font-inter text-body text-gray-300 leading-relaxed mb-8 max-w-[58ch]">
            Date, venue, guests, format, cuisine, dietary needs, budget band. We typically reply within 15 minutes during business hours.
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
  )
}
