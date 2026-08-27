// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /wedding-catering-menu-planning-dubai
//     primary:     "wedding menu planning dubai"
//     subkeywords: "how to plan a wedding menu dubai" · "wedding food ideas dubai" · "wedding menu ideas dubai" · "wedding buffet menu ideas dubai" · "wedding menu planning dubai checklist" · "wedding catering menu planning dubai" · "catering menu dubai" · "catering menu near me halal" · "catering price list for wedding" · "catering wedding checklist" · "event catering wedding" · "finger food catering menu dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
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
  WEDDING_ALCOHOL,
  WEDDING_DIETARY,
  WEDDING_IDENTITY,
  WEDDING_INQUIRY,
  WEDDING_PATHS,
  WEDDING_TASTING,
  WEDDING_WHATSAPP_LINK,
  WEDDING_WHATSAPP_MESSAGE,
} from '@/content/weddingCluster'
import {
  MENU_KEYWORD_LOCK,
  culturalNotes,
  cuisineRows,
  extraCovers,
  menuFaqs,
  menuFormats,
  menuMistakes,
  menuHero,
  menuLinks,
  menuSegments,
  sampleMenus,
  tastingSteps,
  venueMenuNotes,
} from '@/content/weddingMenuPage'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Wedding Catering Menu Planning Guide for Dubai',
      description: MENU_KEYWORD_LOCK.description,
      author: { '@id': 'https://www.mychef.ae/#organization' },
      publisher: { '@id': 'https://www.mychef.ae/#organization' },
      datePublished: '2026-07-01',
      dateModified: '2026-08-25',
    },
    howToSchema(
      'How to plan a wedding catering menu in Dubai',
      'From guest list and format to tasting and late-night food.',
      tastingSteps.map((step, index) => ({ name: `Step ${index + 1}`, text: step })),
    ),
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://www.mychef.ae/guides' },
        { '@type': 'ListItem', position: 3, name: 'Wedding Menu Planning Guide', item: `https://www.mychef.ae${WEDDING_PATHS.menu}` },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: menuFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: plainFaqAnswer(faq.a) },
      })),
    },
  ],
}

export default function WeddingMenuPlanningGuide() {
  useWhatsAppMessage(WEDDING_WHATSAPP_MESSAGE)

  return (
    <div>
      <SEO
        title={MENU_KEYWORD_LOCK.title}
        description={MENU_KEYWORD_LOCK.description}
        canonicalPath={WEDDING_PATHS.menu}
        ogImage={menuHero.src}
        hideSiteName
        preloadHero={menuHero.src}
        schema={schema}
      />

      <PageHero
        variant="quiet"
        eyebrow="Wedding Catering Menu Dubai"
        title="Wedding Menu Planning Dubai — catering"
        subtitle="Wedding Menu Planning Dubai by myCHEF — How guests eat, which kitchen the day belongs to, what a tasting is for, and three sample shapes — garden, ballroom, yacht. Not a price list."
        image={menuHero.src}
        imageAlt={menuHero.alt}
        imageWidth={menuHero.width}
        imageHeight={menuHero.height}
        align="left"
        cta={{ label: 'Request a quote', href: WEDDING_INQUIRY }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WEDDING_WHATSAPP_LINK, external: true }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Guides', href: '/guides' },
          { label: 'Wedding Menu Planning Guide' },
        ]}
        minHeight="tall"
        overlay="dark"
      />
      <TrustSignalStrip />

      <Section tone="ivory" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>START HERE</SectionLabel>
          <DisplayHeading className="text-black mb-6">Build the menu around the wedding, not a package</DisplayHeading>
          <BodyCopy className="mb-5">
            This page is for couples who want wedding food menu ideas they can actually serve in Dubai — villas, gardens, hotels, yachts. To hire the team, go to{' '}
            <Link to={WEDDING_PATHS.hub} className="text-gold-ink underline underline-offset-4 hover:text-gold">
              wedding catering Dubai
            </Link>
            . {WEDDING_IDENTITY}
          </BodyCopy>
          <BodyCopy>
            Some couples arrive with a list of dishes. Others only have a feeling: generous, quiet, traditional, mixed. Both are enough. We look at who is in the room, how they will eat, the season, the kitchen, and how food sits in the rest of the day.
          </BodyCopy>
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>HOW GUESTS EAT</SectionLabel>
          <DisplayHeading className="text-black mb-6">The format is the first menu decision</DisplayHeading>
          <BodyCopy className="mb-10">
            A plated wedding menu, a wedding buffet menu, stations, canapés and sharing tables create different evenings. One wedding can use more than one. Grazing versus a proper buffet is its own argument — read{' '}
            <Link to="/blog/grazing-table-vs-buffet-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              grazing table vs buffet
            </Link>
            {' '}if that is the fork.
          </BodyCopy>
          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {menuFormats.map((fmt) => (
              <article key={fmt.title} className="py-6">
                <h2 className="font-playfair text-h4 text-black mb-2">{fmt.title}</h2>
                <p className="font-inter text-body text-gray-600 leading-relaxed">{fmt.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>THE SHAPE OF THE DAY</SectionLabel>
          <DisplayHeading className="text-black mb-10">Canapés, dinner, dessert, late-night food</DisplayHeading>
          <div className="space-y-10">
            {menuSegments.map((segment) => (
              <div key={segment.title}>
                <h2 className="font-playfair text-h4 text-black mb-3">{segment.title}</h2>
                <ul className="space-y-2">
                  {segment.items.map((item) => (
                    <li key={item} className="font-inter text-body text-gray-600 leading-relaxed pl-4 border-l-2 border-gold">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <BodyCopy className="mt-10">
            A styled sweet table is optional and often a specialist line.{' '}
            <Link to="/dessert-table-catering-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Dessert table catering
            </Link>
            . {WEDDING_ALCOHOL}{' '}
            <Link to="/bar-services-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Bar services
            </Link>
            .
          </BodyCopy>
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>WHICH KITCHEN</SectionLabel>
          <DisplayHeading className="text-black mb-6">Indian, Arabic, Lebanese, fusion — one meal, not a food court</DisplayHeading>
          <BodyCopy className="mb-10 max-w-3xl">
            Dubai weddings often hold more than one kitchen in the same family. That can work. It works when someone designs the overlap: spice, richness, vegetarian depth, and what arrives first. It fails when the buffet is a list of greatest hits.
          </BodyCopy>
          <div className="overflow-x-auto border-y border-gray-200">
            <table className="w-full min-w-[640px] text-left font-inter text-body-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th scope="col" className="py-4 pr-4 font-medium text-black">Cuisine</th>
                  <th scope="col" className="py-4 pr-4 font-medium text-black">Often right when</th>
                  <th scope="col" className="py-4 font-medium text-black">What we actually plan</th>
                </tr>
              </thead>
              <tbody>
                {cuisineRows.map((row) => (
                  <tr key={row.cuisine} className="border-b border-gray-100 align-top">
                    <th scope="row" className="py-4 pr-4 font-medium text-black">{row.cuisine}</th>
                    <td className="py-4 pr-4 text-gray-600 leading-relaxed">{row.bestFor}</td>
                    <td className="py-4 text-gray-600 leading-relaxed">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-8 max-w-3xl font-inter text-body text-gray-600 leading-relaxed">
            Deeper pages, used once:{' '}
            <Link to="/indian-catering-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Indian catering
            </Link>
            {' · '}
            <Link to="/arabic-catering-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Arabic catering
            </Link>
            {' · '}
            <Link to="/halal-catering-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Halal catering
            </Link>
            .
          </p>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>CULTURAL PLANNING</SectionLabel>
          <DisplayHeading className="text-black mb-6">The family is the brief</DisplayHeading>
          <BodyCopy className="mb-10">
            Dubai weddings are often two families, two kitchens, and a guest list that flew in from four time zones. The menu has to feed all of them without turning into a food court.
          </BodyCopy>
          <div className="space-y-8">
            {culturalNotes.map((item) => (
              <div key={item.title}>
                <h2 className="font-playfair text-h4 text-black mb-2">{item.title}</h2>
                <p className="font-inter text-body text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>THE ROOM CHANGES THE FOOD</SectionLabel>
          <DisplayHeading className="text-black mb-10">Villa, ballroom, yacht — the menu follows the kitchen</DisplayHeading>
          <div className="space-y-8">
            {venueMenuNotes.map((item) => (
              <div key={item.title}>
                <h2 className="font-playfair text-h4 text-black mb-2">{item.title}</h2>
                <p className="font-inter text-body text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>DIETARY REQUIREMENTS</SectionLabel>
          <DisplayHeading className="text-black mb-6">Halal default. The rest of the list in time.</DisplayHeading>
          <BodyCopy className="mb-5">{WEDDING_DIETARY}</BodyCopy>
          <BodyCopy>
            Vegetarian and vegan covers should taste like part of the meal.{' '}
            <Link to="/vegan-catering-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Vegan catering
            </Link>
            {' · '}
            
              vegan catering guide
            
            {' · '}
            
              Jain catering
            
            . Do not write “allergy-safe” on a mixed wedding service unless a dedicated controlled kitchen has been confirmed for that booking.
          </BodyCopy>
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>WEDDING MENU TASTING</SectionLabel>
          <DisplayHeading className="text-black mb-6">Taste the meal you will serve</DisplayHeading>
          <BodyCopy className="mb-8">{WEDDING_TASTING}</BodyCopy>
          <ol className="space-y-4">
            {tastingSteps.map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className="font-inter text-caption text-gold-ink mt-1">{String(index + 1).padStart(2, '0')}</span>
                <span className="font-inter text-body text-gray-600 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container>
          <SectionLabel>SAMPLE MENUS</SectionLabel>
          <DisplayHeading className="text-black mb-4">Three shapes. Not three packages.</DisplayHeading>
          <BodyCopy className="mb-12 max-w-3xl">
            These are starting pictures, not set menus. Dishes change with the family, the season and the room.
          </BodyCopy>
          <div className="grid gap-10 lg:grid-cols-3">
            {sampleMenus.map((menu) => (
              <article key={menu.title} className="border-t border-gray-200 pt-6">
                <h2 className="font-playfair text-h4 text-black mb-2">{menu.title}</h2>
                <p className="font-inter text-body-sm text-gold-ink mb-4">{menu.format}</p>
                <ul className="space-y-2">
                  {menu.items.map((item) => (
                    <li key={item} className="font-inter text-body-sm text-gray-600 leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-12 max-w-3xl font-inter text-body text-gray-600 leading-relaxed">
            What this costs, without turning the menu page into a price list. The garden menu for 30 is usually a chef-led night. The ballroom menu for 120 is usually a buffet-and-stations night in the mid AED 200s per guest if you stay independent. The yacht menu for 40 is a compact, more expensive-per-head service because the galley is small. Exact figures live on the{' '}
            <Link to={WEDDING_PATHS.cost} className="text-gold-ink underline underline-offset-4 hover:text-gold">
              wedding catering cost
            </Link>{' '}
            guide. This page will not invent a third ladder. The calendar lives on the{' '}
            <Link to={WEDDING_PATHS.checklist} className="text-gold-ink underline underline-offset-4 hover:text-gold">
              wedding catering checklist
            </Link>
            .
          </p>
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>WHAT USUALLY GOES WRONG</SectionLabel>
          <DisplayHeading className="text-black mb-10">Five menu mistakes we see in Dubai</DisplayHeading>
          <div className="space-y-8">
            {menuMistakes.map((item) => (
              <div key={item.title}>
                <h2 className="font-playfair text-h4 text-black mb-2">{item.title}</h2>
                <p className="font-inter text-body text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>THE REST OF THE ROOM</SectionLabel>
          <DisplayHeading className="text-black mb-10">Children, vendors, drinks</DisplayHeading>
          <div className="space-y-8">
            {extraCovers.map((item) => (
              <div key={item.title}>
                <h2 className="font-playfair text-h4 text-black mb-2">{item.title}</h2>
                <p className="font-inter text-body text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>ALSO IN THIS CLUSTER</SectionLabel>
          <DisplayHeading className="text-black mb-10">Hire, cost, timeline, kitchens</DisplayHeading>
          <ul className="max-w-3xl divide-y divide-gray-200 border-y border-gray-200">
            {menuLinks.map((item) => (
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

      <Section tone="ivory" rhythm="standard">
        <Container className="max-w-[800px]">
          <SectionLabel align="center">QUESTIONS</SectionLabel>
          <DisplayHeading className="text-black text-center mb-10">Wedding menu questions</DisplayHeading>
          <FaqAccordion items={[...menuFaqs]} />
        </Container>
      </Section>

      <Section tone="dark" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel tone="dark">WHEN THE MENU HAS A SHAPE</SectionLabel>
          <DisplayHeading className="text-white mb-6">Send the guest list and the room</DisplayHeading>
          <p className="font-inter text-body text-gray-300 leading-relaxed mb-8 max-w-[58ch]">
            Cuisine, dietary covers, format if you know it. We will send a menu direction, not a 40-dish buffet of everything.{' '}
            <Link to={WEDDING_PATHS.hub} className="text-gold underline underline-offset-4 hover:text-gold-light">
              Wedding catering Dubai
            </Link>
            .
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
