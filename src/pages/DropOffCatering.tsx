// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /drop-off-catering-dubai
//     primary:     "drop off catering dubai"
//     subkeywords: "drop off catering dubai price" · "drop off catering price per person dubai" · "best drop off catering dubai" · "drop off catering packages dubai" · "drop off catering menu dubai" · "halal drop off catering dubai" · "catering delivery dubai" · "drop off catering sunshine coast" · "healthy food delivery dubai" · "luxury food delivery dubai" · "meal plans delivery dubai" · "party food delivery dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { Link } from 'react-router'
import { ArrowRight, Check } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import TrustSignalStrip from '../components/TrustSignalStrip'
import FaqAccordion from '../components/FaqAccordion'
import LocationStrip from '../components/LocationStrip'
import {
  Section,
  Container,
  SectionLabel,
  DisplayHeading,
  BodyCopy,
  SequenceRail,
  EditorialImage,
  CTAGroup,
} from '../components/system'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { CATERING_INQUIRY_HREF, CATERING_PATHS } from '@/content/cateringCluster'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE =
  "Hi myCHEF Dubai, I'd like drop-off catering. Date: __ Guests: __ Area: __ (via mychef.ae/drop-off-catering-dubai)"
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

const HERO = {
  src: '/images/drop-off-catering-dubai-hero.webp',
  alt: 'Labelled drop-off catering boxes and platters packed for delivery in Dubai.',
  width: 1344,
  height: 752,
} as const

const jumpNav = [
  { href: '#what-this-is', label: 'What this is' },
  { href: '#not-this-page', label: 'Not this page' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#constraint', label: 'No team on site' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#questions', label: 'Questions' },
] as const

const formats = [
  {
    title: 'Individual meal boxes',
    body: 'Sealed, labelled lunches or dinners with a controlled guest count. Useful when people eat at different times, or when you need names and diets on the lid.',
  },
  {
    title: 'Shareable platters',
    body: 'Mezze, salads, wraps, sandwich trays and dessert portions packed to unpack onto a table. Guests help themselves. Nobody stands behind the line.',
  },
  {
    title: 'Hot mains that travel',
    body: 'Dishes packed in insulated containers, delivered close to service time, with reheating notes when an oven or microwave is available.',
  },
  {
    title: 'Cold lunch that holds',
    body: 'Salads, boxed proteins and room-temperature trays that do not need a chafing dish. The right call when the room has no kitchen.',
  },
] as const

const includedItems = [
  {
    title: 'Menu designed to travel',
    body: 'A drop off catering menu in Dubai is built around hold time, not a restaurant pass. Texture and temperature have to survive the van.',
  },
  {
    title: 'Cooking in a licensed kitchen',
    body: 'Independent licensed culinary partners cook to Dubai Municipality food-safety practice. myCHEF coordinates the brief, the packing and the delivery window.',
  },
  {
    title: 'Labelling',
    body: 'Contents and dietary marks on the box or platter. Halal drop off catering in Dubai is the default, not a special request.',
  },
  {
    title: 'Reheating and serving notes',
    body: 'Hot drops include plain instructions. There is no chef left behind to finish the dish.',
  },
  {
    title: 'Set-out, then leave',
    body: 'The delivery arrives ahead of your start time, food is laid out, notes are walked through, and the team leaves. Waiters and replenishment are not part of this format.',
  },
  {
    title: 'Collection on request',
    body: 'Empty packaging can be collected later if you add it to the brief. Clear-down of a staffed room is a different product.',
  },
] as const

const orderSteps = [
  'Send the date, headcount, address and dietary list.',
  'You get an itemised proposal: food, delivery and 5% VAT as separate lines.',
  'Confirm the menu once numbers stop moving.',
  'Food is cooked, packed, labelled and delivered in the agreed window.',
  'It is set out, you are talked through any reheat, and the team leaves.',
] as const

const leaveLinks = [
  {
    href: '/office-catering-dubai',
    prompt: 'The same team, the same days, a weekly rhythm rather than one delivery.',
    label: 'Office catering',
  },
  {
    href: '/blog/corporate-catering-full-service-vs-drop-off',
    prompt: 'You need waiters, replenishment and someone to clear the room.',
    label: 'Full service vs drop off catering',
  },
  {
    href: '/canape-catering-dubai',
    prompt: 'A standing reception that needs one-bite food passed through the room.',
    label: 'Canapé catering',
  },
  {
    href: '/breakfast-catering-dubai',
    prompt: 'The meal is the morning, with coffee and a setup that has to be gone before the day starts.',
    label: 'Breakfast catering',
  },
  {
    href: '/private-chef-dubai',
    prompt: 'Fewer than ten people, or a plated dinner cooked in the kitchen you already have.',
    label: 'Private chef',
  },
  {
    href: '/buffet-catering-dubai',
    prompt: 'A spread that has to stay hot and stocked for two hours, with someone on the line.',
    label: 'Buffet catering',
  },
] as const

const faqs = [
  {
    q: 'What arrives, and what do we still have to do?',
    a: 'Food, packaging, labels, reheating notes and a timed delivery. The team can set the trays out and leave. You still need a surface to unpack onto, someone to follow the notes, and a plan for empties unless you add a collection. Nobody stays to serve, restock or wash up.',
  },
  {
    q: 'How much does drop off catering cost in Dubai?',
    a: 'The published drop off catering price per person in Dubai starts from AED 90 for a working-lunch spread. Ten guests minimum. AED 900 minimum order. 5% VAT is shown separately. A staffed buffet starts from AED 120. Live stations and canapés from AED 150. A chef cooking and plating on site is AED 700–950 per person — that gap is labour in the room, not a different sandwich. See the [catering prices guide](/dubai-catering-prices-guide).',
  },
  {
    q: 'Is delivery free?',
    a: 'We do not advertise free delivery. Reaching a Business Bay office on a weekday is a different job from a Palm villa on a Saturday or a long carry from the car. Delivery sits on its own line next to the food and the VAT.',
  },
  {
    q: 'How do you keep hot food hot and cold food cold?',
    a: 'Insulated packing, a delivery window close to when people eat, and reheating notes when the dish needs an oven or microwave. Dubai Municipality treats 5°C to 60°C as the danger zone. Drop-off only works if the food stays outside it. If the room needs a line kept hot for hours, book a staffed buffet instead.',
  },
  {
    q: 'How much notice do you need?',
    a: 'Seventy-two hours suits a standard drop-off order. Five to seven days for a larger or bespoke menu. Dietary covers belong in the first brief, not the day before. Short-notice requests are assessed individually — we confirm what is realistic rather than promising a same-day product.',
  },
  {
    q: 'Do you deliver only in Dubai?',
    a: 'Coverage is Dubai. [Palm Jumeirah](/locations/palm-jumeirah), [Dubai Marina](/locations/dubai-marina) and [Downtown Dubai](/locations/downtown-dubai) are regular runs; [areas we serve](/locations) lists the rest. A Sharjah, Ajman or Abu Dhabi address goes on the enquiry and we tell you before you commit whether the Dubai network can serve it and what the travel adds.',
  },
] as const

const siblings = [
  {
    href: '/office-catering-dubai',
    label: 'Office catering',
    description: 'When lunch is a standing weekly rhythm, not one labelled drop.',
    image: '/images/office-catering-dubai-hero.webp',
    width: 1344,
    height: 752,
  },
  {
    href: '/blog/corporate-catering-full-service-vs-drop-off',
    label: 'Full service vs drop off catering',
    description: 'The labour gap: who unpacks, who serves, who clears, and when that is worth paying for.',
    image: '/images/blog/corporate-catering-full-service-vs-drop-off-hero.webp',
    width: 1920,
    height: 1080,
  },
  {
    href: '/canape-catering-dubai',
    label: 'Canapé catering',
    description: 'One-bite food for a standing room, passed or displayed — a different job from a lunch box.',
    image: '/images/canape-catering-dubai-hero.webp',
    width: 1344,
    height: 752,
  },
  {
    href: '/breakfast-catering-dubai',
    label: 'Breakfast catering',
    description: 'Morning menus, coffee and a setup that has to be gone before the working day starts.',
    image: '/images/breakfast-catering-dubai-hero.webp',
    width: 1344,
    height: 752,
  },
] as const

const gallery = [
  {
    src: '/images/drop-off-catering-dubai-hero.webp',
    alt: 'Drop-off catering packed in labelled boxes for a Dubai delivery.',
    width: 1344,
    height: 752,
  },
  {
    src: '/menu-appetizer.webp',
    alt: 'Shareable platters packed for drop-off catering.',
    width: 1024,
    height: 1024,
  },
  {
    src: '/menu-meat.webp',
    alt: 'Hot mains packed to travel for a drop-off delivery.',
    width: 1024,
    height: 1024,
  },
  {
    src: '/menu-dessert.webp',
    alt: 'Individual dessert portions labelled for drop-off.',
    width: 1024,
    height: 1024,
  },
] as const

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.mychef.ae/drop-off-catering-dubai#service',
      name: 'Drop Off Catering Dubai',
      serviceType: 'Drop-off catering',
      description:
        'Chef-cooked food delivered ready to serve in Dubai, with no service team on site. From AED 90 per person, 10 guests, AED 900 minimum order.',
      url: 'https://www.mychef.ae/drop-off-catering-dubai',
      provider: { '@id': 'https://www.mychef.ae/#organization' },
      areaServed: { '@id': 'https://www.mychef.ae/#place-dubai' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
        { '@type': 'ListItem', position: 2, name: 'Catering', item: 'https://www.mychef.ae/catering-dubai' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Drop-off catering',
          item: 'https://www.mychef.ae/drop-off-catering-dubai',
        },
      ],
    },
  ],
}

export default function DropOffCatering() {
  useWhatsAppMessage(WHATSAPP_MESSAGE)

  return (
    <div>
      <SEO
        title="Drop Off Catering Dubai | myCHEF"
        description="Drop Off Catering Dubai: chef-cooked food delivered ready to serve, no team on site. From AED 90 per person, 10 guests, AED 900 minimum order."
        canonicalPath="/drop-off-catering-dubai"
        ogImage={HERO.src}
        hideSiteName
        preloadHero={HERO.src}
        schema={schema}
      />

      <PageHero
        eyebrow="Drop-off catering"
        title="Drop Off Catering Dubai — Food That Arrives Without a Team"
        subtitle="Licensed partner kitchens cook, pack and deliver labelled meals and platters. You unpack. Nobody stays to serve."
        image={HERO.src}
        imageAlt={HERO.alt}
        imageWidth={HERO.width}
        imageHeight={HERO.height}
        align="left"
        cta={{ label: 'Request a drop-off quote', href: CATERING_INQUIRY_HREF }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Catering', href: CATERING_PATHS.overview },
          { label: 'Drop-off catering' },
        ]}
        minHeight="full"
        overlay="dark"
      />
      <TrustSignalStrip />

      <nav aria-label="On this page" className="border-b border-gray-200 bg-white">
        <div className="container-custom flex flex-wrap gap-x-5 gap-y-2 py-4">
          {jumpNav.map((item) => (
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

      <Section id="what-this-is" tone="ivory" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>WHAT THIS IS</SectionLabel>
          <DisplayHeading className="text-black mb-6">Food cooked for a room you already have</DisplayHeading>
          <BodyCopy className="mb-5">
            Drop off catering Dubai is food cooked by a licensed partner kitchen, packed to travel, and delivered ready to serve. Nobody from the catering team stays in the room. You get labelled boxes or platters, reheating notes where they are needed, and a delivery window that lands close to when people eat.
          </BodyCopy>
          <BodyCopy className="mb-5">
            It is the unstaffed format inside{' '}
            <Link to="/catering-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Luxury catering in Dubai
            </Link>
            . From AED 90 per person, ten guests minimum, AED 900 minimum order. 5% VAT is shown as its own line. That is catering delivery in Dubai without waiters, without a buffet line, and without a chef finishing plates in your kitchen.
          </BodyCopy>
          <BodyCopy>
            One dinner with a chef in the house is still catering of a different kind — send that brief to a{' '}
            <Link to="/private-chef-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              private chef
            </Link>
            . An occasion with a date, a guest list and a format lives under{' '}
            <Link to="/events" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Events
            </Link>
            . This page is the drop.
          </BodyCopy>
        </Container>
      </Section>

      <Section id="not-this-page" tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>NOT THIS PAGE</SectionLabel>
          <DisplayHeading className="text-black mb-6">If you still need people in the room, leave here</DisplayHeading>
          <BodyCopy className="mb-10">
            Drop-off is the right product when a colleague can lift lids and the food can sit. It is the wrong product when the impression in the room depends on service. The next step is the page that owns that job.
          </BodyCopy>
          <ul className="max-w-3xl divide-y divide-gray-200 border-y border-gray-200">
            {leaveLinks.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <span className="font-inter text-body text-gray-600">{item.prompt}</span>
                  <span className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink group-hover:text-gold">
                    {item.label} <ArrowRight size={14} aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="connected">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionLabel>WHO IT IS FOR</SectionLabel>
            <DisplayHeading className="text-black mb-6">Working lunches and houses that do not want a brigade</DisplayHeading>
            <BodyCopy className="mb-5">
              A training room. A board lunch where the agenda matters more than table service. A villa Saturday when you would rather not have waiters in the kitchen. A headcount you already know, a surface to unpack onto, and no need for anyone to restock the tray.
            </BodyCopy>
            <BodyCopy>
              Recurring office lunches still belong on{' '}
              <Link to="/office-catering-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
                Office catering
              </Link>
              — that page owns the weekly rhythm. This page owns the single drop.
            </BodyCopy>
          </div>
          <EditorialImage
            src="/menu-appetizer.webp"
            alt="Shareable drop-off platters packed for a Dubai lunch."
            width={1024}
            height={1024}
            aspect="aspect-[4/3]"
          />
        </Container>
      </Section>

      <Section id="how-it-works" tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>HOW AN ORDER RUNS</SectionLabel>
          <DisplayHeading className="text-black mb-8">Date, headcount, address. Then a written proposal.</DisplayHeading>
          <SequenceRail steps={orderSteps} />
          <BodyCopy className="mt-10">
            Seventy-two hours suits a standard order. Five to seven days for a larger or bespoke menu. Short-notice requests are assessed against partner availability — we do not sell a same-day catalogue. Parking, lifts and a place to set the food belong in the brief so the window is honest.
          </BodyCopy>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container className="max-w-[1000px]">
          <SectionLabel>WHAT ARRIVES</SectionLabel>
          <DisplayHeading className="text-black mb-10">What is in the drop — and what is not</DisplayHeading>
          <div className="grid md:grid-cols-2 gap-6">
            {includedItems.map((item) => (
              <div key={item.title} className="flex gap-3">
                <Check size={20} className="text-gold flex-shrink-0 mt-0.5" aria-hidden />
                <div>
                  <h3 className="font-inter text-base font-medium text-black mb-1">{item.title}</h3>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="charcoal" rhythm="chapter">
        <Container>
          <SectionLabel tone="dark">HOW THE FOOD IS PACKED</SectionLabel>
          <DisplayHeading className="text-white mb-10">Boxes, platters and hot drops</DisplayHeading>
          <div className="grid md:grid-cols-2 gap-6">
            {formats.map((fmt) => (
              <div key={fmt.title} className="border border-white/10 bg-black/20 p-8">
                <h3 className="font-playfair text-h3 text-white mb-3">{fmt.title}</h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{fmt.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="constraint" tone="white" rhythm="chapter">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionLabel>THE CONSTRAINT</SectionLabel>
            <DisplayHeading className="text-black mb-6">How drop off catering Dubai holds heat without a team</DisplayHeading>
            <BodyCopy className="mb-5">
              There is no chafing line and no one to swap a tray. The whole product is packing, timing and an honest menu. Hot food leaves in insulated containers and should be eaten close to arrival, or refreshed from the notes. Cold food is packed to stay cold. If a dish cannot survive that, it should not be on a drop-off menu.
            </BodyCopy>
            <BodyCopy className="mb-5">
              You still need a counter or table. Do not unpack onto the meeting that is still running. There is no service team to keep food away from laptops, papers or a villa kitchen already in use.
            </BodyCopy>
            <BodyCopy>
              Ten guests and AED 900 is the floor. Below that, the van and the packing stop making sense against the food — a private chef in the kitchen is the honest product, with no headcount minimum.
            </BodyCopy>
          </div>
          <EditorialImage
            src="/menu-meat.webp"
            alt="Hot mains packed in transport containers for drop-off catering in Dubai."
            width={1024}
            height={1024}
            aspect="aspect-[4/3]"
          />
        </Container>
      </Section>

      <Section id="pricing" tone="charcoal" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel tone="dark">PRICING</SectionLabel>
          <DisplayHeading className="text-white mb-6">What the published price is built from</DisplayHeading>
          <p className="font-inter text-body text-gray-300 leading-relaxed mb-5 max-w-[65ch]">
            The published drop off catering price per person in Dubai starts from AED 90 for a working-lunch spread. Guest count, menu and delivery move it. The quote is itemised so you can see food, delivery and 5% VAT as separate lines.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full min-w-[28rem] text-left font-inter text-body-sm">
              <thead>
                <tr className="border-b border-white/15 text-gold uppercase tracking-[0.12em] text-caption">
                  <th className="py-3 pr-4 font-medium">Format</th>
                  <th className="py-3 pr-4 font-medium">Staff in the room</th>
                  <th className="py-3 font-medium">Published start</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-white/10">
                  <td className="py-3 pr-4">Drop-off</td>
                  <td className="py-3 pr-4">None</td>
                  <td className="py-3">AED 90 / person · 10 guests · AED 900 min</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 pr-4">Staffed buffet</td>
                  <td className="py-3 pr-4">1–2</td>
                  <td className="py-3">AED 120 / person · 20 guests</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 pr-4">Live stations or canapés</td>
                  <td className="py-3 pr-4">2–4</td>
                  <td className="py-3">AED 150 / person</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Chef-led plated</td>
                  <td className="py-3 pr-4">3+</td>
                  <td className="py-3">AED 700–950 / person</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-inter text-body-sm text-gray-400 leading-relaxed mb-6 max-w-[65ch]">
            We do not advertise free delivery. A weekday office and a Saturday villa are different jobs, and the line item says so. Worked examples live on the{' '}
            <Link to="/dubai-catering-prices-guide" className="text-gold underline underline-offset-4 hover:text-gold-light">
              catering prices guide
            </Link>
            .
          </p>
        </Container>
      </Section>

      <Section tone="dark" rhythm="chapter">
        <Container>
          <SectionLabel tone="dark">GALLERY</SectionLabel>
          <DisplayHeading className="text-white mb-10">What a drop looks like</DisplayHeading>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {gallery.map((img) => (
              <div key={img.src} className="aspect-[4/3] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="questions" tone="white" rhythm="standard">
        <Container className="max-w-[800px]">
          <SectionLabel align="center">STILL OPEN</SectionLabel>
          <DisplayHeading className="text-black text-center mb-10">Questions the page has not closed yet</DisplayHeading>
          <FaqAccordion items={[...faqs]} />
        </Container>
      </Section>

      <Section tone="charcoal" rhythm="chapter">
        <Container>
          <SectionLabel tone="dark">NEXT STEPS</SectionLabel>
          <DisplayHeading className="text-white mb-10">You May Also Like</DisplayHeading>
          <div className="grid md:grid-cols-2 gap-6">
            {siblings.map((svc) => (
              <Link
                key={svc.href}
                to={svc.href}
                className="group bg-black/30 overflow-hidden border border-white/10 hover:border-gold/40 transition-colors"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={svc.image}
                    alt=""
                    width={svc.width}
                    height={svc.height}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-h4 text-white mb-2">{svc.label}</h3>
                  <p className="font-inter text-body-sm text-gray-400 mb-4">{svc.description}</p>
                  <span className="inline-flex items-center gap-1 font-inter text-caption uppercase tracking-[0.12em] text-gold group-hover:text-gold-light">
                    {svc.label} <ArrowRight size={14} aria-hidden />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <LocationStrip
        title="Drop-off catering across Dubai"
        subtitle={
          <>
            Regular runs include{' '}
            <Link to="/locations/palm-jumeirah" className="text-gold hover:text-gold-light underline underline-offset-4">
              Palm Jumeirah
            </Link>
            ,{' '}
            <Link to="/locations/dubai-marina" className="text-gold hover:text-gold-light underline underline-offset-4">
              Dubai Marina
            </Link>
            {' '}and{' '}
            <Link to="/locations/downtown-dubai" className="text-gold hover:text-gold-light underline underline-offset-4">
              Downtown Dubai
            </Link>
            . Full list on{' '}
            <Link to="/locations" className="text-gold hover:text-gold-light underline underline-offset-4">
              Areas we serve
            </Link>
            .
          </>
        }
      />

      <Section tone="dark" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel tone="dark">START WITH THE DROP</SectionLabel>
          <DisplayHeading className="text-white mb-6">Date, headcount and address is enough</DisplayHeading>
          <p className="font-inter text-body text-gray-300 leading-relaxed mb-8 max-w-[58ch]">
            You do not need a finished menu. We typically reply within 15 minutes during business hours with an itemised proposal — food, delivery and VAT as separate lines.
          </p>
          <CTAGroup>
            <Link to={CATERING_INQUIRY_HREF} className="btn-primary">
              Request a drop-off quote
            </Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Chat on WhatsApp
            </a>
          </CTAGroup>
        </Container>
      </Section>
    </div>
  )
}
