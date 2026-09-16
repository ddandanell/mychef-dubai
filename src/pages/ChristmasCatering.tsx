// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /christmas-catering-dubai
//     primary:     "christmas catering dubai"
//     subkeywords: "christmas catering dubai price" · "christmas catering cost per person dubai" · "best christmas catering dubai" · "christmas catering packages dubai" · "christmas catering menu dubai" · "halal christmas catering dubai" · "christmas dinner catering dubai" · "christmas turkey catering dubai" · "christmas dinner delivery dubai" · "how much does a full christmas dinner cost" · "christmas meals dubai" · "festive catering"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useRef, type SyntheticEvent } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { ArrowRight, ArrowUp, Check, Phone, Plus } from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import FaqAccordion from '../components/FaqAccordion'
import LocationStrip from '../components/LocationStrip'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { SectionLabel } from '../components/system'
import {
  christmasMenus,
  CHRISTMAS_MENU_IMAGE_FALLBACK,
  type ChristmasMenu,
} from '@/content/christmasMenus'

const WHATSAPP_NUMBER = '971551744849'
const waLink = (message: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'd like to plan Christmas dinner at home. Date: __ Guests: __ Area: __ Menu: __"
const WHATSAPP_LINK = waLink(PAGE_WHATSAPP_MESSAGE)

const HERO_IMAGE = '/images/christmas-catering-dubai-hero.webp'

/* ────────────────────── Data ────────────────────── */

const howItWorks = [
  { step: '01', title: 'Share your plans', description: 'Tell us the date, the guest count, the address and whether it is Christmas Eve, Christmas Day lunch or dinner.' },
  { step: '02', title: 'Choose a menu direction', description: 'Start from one of the seven Christmas menus below, mix dishes across them, or brief the chef on what Christmas looks like in your family.' },
  { step: '03', title: 'Receive a written proposal', description: 'Food, chef, service staff and any hire listed line by line, with 5% VAT shown separately. Nothing is confirmed before you have read it.' },
  { step: '04', title: 'Confirm the date', description: 'Once the menu and details are approved, the date is held and the ingredient order goes in. December fills first, so this is the step to do early.' },
  { step: '05', title: 'The chef and team arrive', description: 'A chef from our network arrives with the ingredients and equipment and takes over your kitchen for the day.' },
  { step: '06', title: 'Serve, celebrate, clear down', description: 'Courses are timed, plates are cleared, the kitchen is left as it was found. You stay at the table.' },
]

const alwaysIncluded = [
  { title: 'A menu written for your table', description: 'Built around your guest count, dietary notes and how formal the sitting is. Not a fixed package.' },
  { title: 'Ingredient shopping', description: 'The turkey, goose or prime rib and everything around it is sourced and brought to your address.' },
  { title: 'Cooking on site', description: 'The roast rests properly, the gravy is made from the tray and the sides come out hot together.' },
  { title: 'Plating and serving', description: 'Plated or family style, at the pace your table wants.' },
  { title: 'Kitchen clear-down', description: 'Your kitchen is left the way it was found. No washing-up on Boxing Day morning.' },
]

const optionalLayers = [
  { title: 'Waiters and service staff', description: 'Sized to the guest count and the service style.' },
  { title: 'Bartenders', description: 'For a longer evening or a party rather than a sit-down dinner.' },
  { title: 'Canapés before dinner', description: 'Festive bites while guests arrive.' },
  { title: 'Table setup and styling', description: 'Linen, candles and festive tableware where requested.' },
  { title: 'Crockery, glassware and hire', description: 'Coordinated when your kitchen does not have enough for the headcount.' },
  { title: 'Dessert table or Christmas cake', description: 'A styled sweet table, yule log or celebration cake if you want one.' },
]

const settings = [
  {
    title: 'Villa Christmas dinner',
    description: 'A family Christmas dinner in Emirates Hills, Palm Jumeirah or Dubai Hills. The chef arrives with the ingredients and the roast, so the day is spent around the table, not in the kitchen.',
    link: { to: '/villas-private-residences', label: 'Villa chef service in Dubai' },
  },
  {
    title: 'Christmas Day in an apartment',
    description: 'For families and friends celebrating away from home, the same Christmas dinner in a Downtown, Marina or DIFC apartment, planned around the kitchen you actually have.',
    link: { to: '/private-chef-dubai', label: 'Private chef in Dubai' },
  },
  {
    title: 'Corporate Christmas party',
    description: 'End-of-year lunches, cocktail parties and client receptions in DIFC and Business Bay offices or a private venue, with festive menus and service staff.',
    link: { to: '/corporate', label: 'Corporate Christmas catering' },
  },
  {
    title: 'Christmas on a chartered yacht',
    description: 'A Christmas sitting on a yacht you have chartered: galley-friendly menus, a compact setup and a team used to cooking on the water.',
    link: { to: '/yachts', label: 'Yacht catering in Dubai' },
  },
]

const moreServices = [
  'Private chef in your kitchen',
  'Waiters and service staff',
  'Bartenders',
  'Canapés',
  'Christmas Eve dinner',
  'Christmas Day lunch',
  'Christmas Day dinner',
  'Boxing Day gatherings',
  'Orthodox Christmas on 7 January',
  'Corporate Christmas parties',
  'Villa Christmas catering',
  'Yacht Christmas catering',
  'Table setup where requested',
  'Crockery and glassware where required',
]

const faqs = [
  {
    q: 'Do you provide Christmas catering in Dubai on Christmas Day?',
    a: 'Yes. Christmas Day lunch and Christmas Day dinner are the two sittings that fill first, so we ask for the date and headcount as early as you have them. The chef arrives in the morning for a lunch sitting or mid-afternoon for dinner, cooks in your kitchen, serves and clears down.',
  },
  {
    q: 'Do you cater Christmas Eve as well as Christmas Day?',
    a: 'Yes. Christmas Eve dinner, Christmas Day lunch, Christmas Day dinner and Boxing Day gatherings are all bookable, subject to chef availability. Many French, Italian and German families treat Christmas Eve as the main meal; the Réveillon and Natale menus above are written with that in mind.',
  },
  {
    q: 'Can a private chef cook Christmas dinner in our villa?',
    a: 'Yes. A standard villa or apartment kitchen is usually all the chef needs; ingredients, tools and any extra equipment come with the team. Tell us about the oven, the hob and the dining space when you enquire and the plan is built around them. For a household chef beyond one dinner, see our [private chef in Dubai](/private-chef-dubai) service.',
  },
  {
    q: 'Can we order a traditional British Christmas dinner in Dubai?',
    a: 'Yes. The British menu above is a full traditional Christmas dinner: herb and butter roasted turkey, goose-fat roast potatoes, pigs in blankets, stuffing, sprouts with chestnuts, proper gravy, bread sauce and Christmas pudding with brandy sauce. Christmas turkey catering in Dubai is the request we get most, so the turkey is ordered as soon as your date is confirmed.',
  },
  {
    q: 'Can you prepare Christmas turkey with all the trimmings?',
    a: 'Yes. The trimmings are listed in full on the British menu and can be adjusted: a plant-based main alongside the turkey, a roast ham or beef added as a second centrepiece, or pork-free versions of the pigs in blankets and stuffing.',
  },
  {
    q: 'Do you offer French, Italian, German or Russian Christmas menus?',
    a: 'Yes. This page carries seven Christmas menu inspirations: British, French Réveillon, Italian Natale, German Weihnachtsessen, Russian, Swiss Fondue Chinoise and American prime rib. Each is a starting point the chef tailors to your guest count and dietary notes. If your tradition is not listed, tell us what the table usually looks like and we write the menu from there.',
  },
  {
    q: 'Can you cater for Orthodox Christmas in Dubai?',
    a: 'Yes. Orthodox Christmas on 7 January is bookable in the same way as 25 December, with the Russian menu above or a menu built around your own family dishes. January dates are usually easier to secure than the last week of December.',
  },
  {
    q: 'Can we combine dishes from different Christmas menus?',
    a: 'Yes. The seven menus are inspirations, not fixed packages. A British turkey with a French cheese course and an Italian panettone is a normal request. Tell us the dishes that matter and the chef balances the courses, timings and portions.',
  },
  {
    q: 'Can you cater for dietary requirements?',
    a: 'Yes, where possible. Vegetarian, vegan, gluten-free, dairy-free and nut-free guests are planned into the menu draft rather than added as an afterthought, and dishes are labelled at the table. Share every allergy when you enquire. Cross-contact cannot be completely excluded unless dedicated controls are confirmed for the booking; see our [allergy-safe catering](/allergy-safe-catering-dubai) approach.',
  },
  {
    q: 'Is your Christmas food halal?',
    a: 'Halal Christmas catering in Dubai is available on request: halal-sourced meat throughout and pork-free versions of dishes such as pigs in blankets, stuffing and the bacon in the American sides. Tell us when you enquire and the menu is written that way from the first draft. Fully vegetarian or seafood-led festive menus are also possible.',
  },
  {
    q: 'Do you provide waiters and bartenders?',
    a: 'Yes, as optional layers on the booking rather than automatic inclusions. For a small family dinner the chef often serves; for a larger table or a party, waiters and a bartender are added and sized to the headcount. Our [bar services in Dubai](/bar-services-dubai) page explains how the bar side works.',
  },
  {
    q: 'Can you cater a corporate Christmas party?',
    a: 'Yes. End-of-year lunches, canapé receptions and seated dinners for offices in DIFC, Business Bay and across Dubai, with service staff and festive menus scaled to the headcount. Our [corporate catering](/corporate) team coordinates menus, timings and access around your office schedule.',
  },
  {
    q: 'How early should we book Christmas catering in Dubai?',
    a: 'As soon as you know the date and a rough headcount. Christmas Eve and Christmas Day fill first, and whole birds such as turkey, goose and capon are ordered ahead. Two to four weeks is comfortable for a family dinner; earlier is safer for large tables and corporate events. If your date is close, message us and we will tell you honestly what is possible.',
  },
  {
    q: 'How much does a full Christmas dinner cost?',
    a: 'There is no single answer to how much does a full Christmas dinner cost, because guest count, the menu, the centrepiece and how much service happens in the room all move the figure. We do not publish a price on the seven menus for that reason. Send the date, headcount, area and the menu you have in mind and you receive an itemised proposal: food, chef, staff, hire and 5% VAT shown separately.',
  },
  {
    q: 'Do you deliver Christmas dinner, or does a chef have to come?',
    a: 'Both are possible. A chef cooking and serving in your kitchen is what this page describes and what we recommend for Christmas Day: nothing reheats or sits under foil. If you want the food only, Christmas dinner delivery in Dubai runs through our [drop-off catering](/drop-off-catering-dubai) format, with the Christmas meals arriving ready to serve and no team on site.',
  },
  {
    q: 'Which areas of Dubai do you cover for Christmas catering?',
    a: 'Across Dubai: villas in Palm Jumeirah, Emirates Hills, Dubai Hills, Jumeirah and Arabian Ranches, apartments in Downtown, Marina, JBR and DIFC, offices in Business Bay, and chartered yachts. Tell us the address when you enquire and we confirm access details. The communities we serve are listed under [areas we serve](/locations).',
  },
  {
    q: 'Are your chefs and kitchens licensed and food-safe?',
    a: 'Yes. The chefs and partner kitchens handling your booking operate to Dubai Municipality food-safety requirements, and food is prepared, transported and served with temperature control. Festive menus involve roasts, seafood and dairy, so that handling sits with the team, not with the host.',
  },
]

/* ────────────────────── Schema ────────────────────── */

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') },
  })),
}

const serviceSchema = {
  '@type': 'Service',
  '@id': 'https://www.mychef.ae/christmas-catering-dubai#service',
  name: 'Christmas Catering Dubai',
  serviceType: 'Christmas catering and private chef Christmas dinner at home',
  description:
    'Christmas catering in Dubai with a private chef cooking in your home, villa, office or chartered yacht. Christmas Eve, Christmas Day and Orthodox Christmas sittings with British, French, Italian, German, Russian, Swiss and American Christmas menu inspirations.',
  url: 'https://www.mychef.ae/christmas-catering-dubai',
  provider: {
    '@type': 'Organization',
    '@id': 'https://www.mychef.ae/#organization',
    name: 'myCHEF',
    url: 'https://www.mychef.ae',
    telephone: '+971-55-174-4849',
  },
  areaServed: {
    '@type': 'City',
    name: 'Dubai',
    address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' },
  },
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://www.mychef.ae/inquiry',
    servicePhone: '+971-55-174-4849',
  },
}

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Festive catering', item: 'https://www.mychef.ae/festive-catering-dubai' },
    { '@type': 'ListItem', position: 3, name: 'Christmas catering', item: 'https://www.mychef.ae/christmas-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Helpers ────────────────────── */

/** Until the Grok renders exist, fall back to the page hero rather than a broken image. */
function onMenuImageError(e: SyntheticEvent<HTMLImageElement>) {
  const img = e.currentTarget
  if (img.src.endsWith(CHRISTMAS_MENU_IMAGE_FALLBACK)) return
  img.src = CHRISTMAS_MENU_IMAGE_FALLBACK
}

function MenuCard({ menu }: { menu: ChristmasMenu }) {
  return (
    <a
      href={`#${menu.id}`}
      className="xmas-menu-card group relative flex w-[72vw] max-w-[320px] min-w-0 shrink-0 snap-start flex-col overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:w-full sm:max-w-none"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-charcoal">
        <img
          src={menu.image.src}
          alt={menu.image.alt}
          width={1200}
          height={1200}
          loading="lazy"
          decoding="async"
          onError={onMenuImageError}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-playfair text-h4 text-black mb-2">{menu.cardTitle}</h3>
        <p className="font-inter text-body-sm text-gray-500 leading-relaxed mb-4">{menu.cardBlurb}</p>
        <span className="mt-auto inline-flex items-center gap-1 font-inter text-body-sm uppercase tracking-wider text-gold-ink group-hover:text-gold transition-colors">
          See the menu <ArrowRight size={14} aria-hidden />
        </span>
      </div>
    </a>
  )
}

function MenuSection({ menu, index }: { menu: ChristmasMenu; index: number }) {
  // Alternate dark / light and image left / right so seven menus read as chapters, not a wall.
  const dark = index % 2 === 1
  const reversed = dark
  const total = christmasMenus.length
  return (
    <section
      id={menu.id}
      className={`${dark ? 'bg-charcoal text-white' : index % 4 === 0 ? 'bg-white' : 'bg-cream'} section-padding scroll-mt-24`}
      aria-labelledby={`${menu.id}-heading`}
    >
      <div className="container-custom">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Image */}
          <div className={`lg:col-span-5 ${reversed ? 'lg:order-2' : ''}`}>
            <figure className="lg:sticky lg:top-28">
              <div className="editorial-image relative aspect-[4/5] overflow-hidden lg:aspect-[3/4]">
                <img
                  src={menu.image.src}
                  alt={menu.image.alt}
                  width={1200}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                  onError={onMenuImageError}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <figcaption className={`mt-3 font-inter text-[12px] uppercase tracking-[0.12em] ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
                Concept visual · {menu.cardTitle} menu
              </figcaption>
            </figure>
          </div>

          {/* Copy + menu */}
          <div className={`lg:col-span-7 ${reversed ? 'lg:order-1' : ''}`}>
            <SectionLabel tone={dark ? 'dark' : 'light'}>{`${menu.cardTitle} · Menu ${index + 1} of ${total}`}</SectionLabel>
            <h2 id={`${menu.id}-heading`} className={`font-playfair text-fluid-h2 leading-[1.08] mb-4 ${dark ? 'text-white' : 'text-black'}`}>
              {menu.heading}
            </h2>
            <p className={`font-playfair italic text-xl md:text-2xl mb-6 ${dark ? 'text-gold' : 'text-gold-ink'}`}>{menu.lead}</p>
            {menu.intro.map((p) => (
              <p key={p} className={`font-inter text-body-lg leading-relaxed mb-4 max-w-[65ch] ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
                {p}
              </p>
            ))}

            <h3 className={`font-playfair text-h3 mt-10 mb-6 pb-4 border-b ${dark ? 'text-white border-gold/25' : 'text-black border-gray-200'}`}>
              {menu.menuTitle}
            </h3>

            <dl className="space-y-8">
              {menu.courses.map((course) => (
                <div key={course.label}>
                  <dt className={`font-inter text-[12px] font-medium uppercase tracking-[0.16em] mb-3 ${dark ? 'text-gold' : 'text-gold-ink'}`}>
                    {course.label}
                  </dt>
                  {course.dishes.map((dish) => (
                    <dd key={dish.name} className="mb-3 last:mb-0">
                      <p className={`font-playfair text-lg leading-snug ${dark ? 'text-white' : 'text-black'}`}>{dish.name}</p>
                      {dish.note && (
                        <p className={`font-inter text-body-sm leading-relaxed mt-1 max-w-[60ch] ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
                          {dish.note}
                        </p>
                      )}
                    </dd>
                  ))}
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
              <Link to="/inquiry" className="btn-primary">{menu.cta}</Link>
              <a href={waLink(menu.whatsapp)} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Phone size={16} className="mr-2" aria-hidden />
                WhatsApp Us
              </a>
            </div>
            <a
              href="#choose-your-christmas-menu"
              className={`mt-6 inline-flex items-center gap-1 font-inter text-body-sm underline underline-offset-4 ${dark ? 'text-gray-400 hover:text-gold' : 'text-gray-500 hover:text-gold-ink'}`}
            >
              <ArrowUp size={14} aria-hidden /> Back to all Christmas menus
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ────────────────────── Component ────────────────────── */

export default function ChristmasCatering() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.xmas-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.xmas-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.xmas-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.xmas-step-item', {
      scrollTrigger: { trigger: '.xmas-steps', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.xmas-menu-card', {
      scrollTrigger: { trigger: '.xmas-menu-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.xmas-setting-item', {
      scrollTrigger: { trigger: '.xmas-settings-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.xmas-cta', {
      scrollTrigger: { trigger: '.xmas-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Christmas Catering Dubai | Christmas Dinner at Home | myCHEF"
        description="Christmas catering Dubai: a private chef cooks Christmas dinner at home. British, French, Italian, German, Russian, Swiss & American menus."
        canonicalPath="/christmas-catering-dubai"
        ogImage={HERO_IMAGE}
        preloadHero={HERO_IMAGE}
        schema={schema}
      />

      {/* ═══════════════ 1. Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          role="img"
          aria-label="Private chef in a black jacket serving a roast turkey at a candlelit Christmas dinner table"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 container-custom text-center max-w-[860px] py-20">
          <nav aria-label="Breadcrumb" className="mb-6 opacity-0 translate-y-4 xmas-hero-h1">
            <ol className="flex flex-wrap items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400" aria-hidden>/</li>
              <li><Link to="/festive-catering-dubai" className="text-gray-400 hover:text-gold transition-colors">Festive catering</Link></li>
              <li className="text-gray-400" aria-hidden>/</li>
              <li><span className="text-gold" aria-current="page">Christmas catering</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 xmas-hero-h1">
            Christmas Catering Dubai: Private Chefs & Christmas Dinner at Home
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[680px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 xmas-hero-sub">
            Spend Christmas with your family, not in the kitchen. Our chefs prepare Christmas Eve, Christmas Day and festive-season dinners in private homes, villas and residences across Dubai, from a traditional British roast to a French Réveillon, an Italian Natale and other international Christmas menus.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary opacity-0 translate-y-4 xmas-hero-cta">Plan My Christmas Dinner</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 xmas-hero-cta"
            >
              <Phone size={16} className="mr-2" aria-hidden />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <TrustSignalStrip variant="dark" />

      {/* ═══════════════ Urgency banner ═══════════════ */}
      <section className="bg-gold py-4">
        <div className="container-custom text-center">
          <p className="font-inter text-sm font-medium text-black">
            Book early. Christmas Eve, Christmas Day and Boxing Day fill first.
          </p>
        </div>
      </section>

      {/* ═══════════════ 2. What this is ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px]">
          <SectionLabel>Christmas dinner, cooked at your address</SectionLabel>
          <h2 className="font-playfair text-fluid-h2 leading-[1.08] text-black mb-6">
            A chef in your kitchen on the one day you would rather not be in it
          </h2>
          <p className="font-inter text-body-lg text-gray-600 leading-relaxed mb-5">
            Christmas catering Dubai, the way we run it, is a chef and a service team at the address you already have: a villa in Emirates Hills, an apartment in the Marina, an office in DIFC or a yacht you have chartered. Christmas in Dubai is often a table at home rather than a restaurant booking, and cooler evenings make a long lunch on the terrace easy.
          </p>
          <p className="font-inter text-body-lg text-gray-600 leading-relaxed mb-5">
            Yes, we cook on Christmas Day itself, and on Christmas Eve, Boxing Day and Orthodox Christmas in January. Yes, you choose the menu: start from one of the seven Christmas menus on this page, combine dishes across them, or brief the chef on what Christmas looks like in your family. The chef shops, cooks, serves and clears down. You host.
          </p>
          <p className="font-inter text-body-lg text-gray-600 leading-relaxed">
            There is no single fixed Christmas catering menu in Dubai from us and no printed Christmas catering packages. You receive a written proposal covering food, chef, service and any hire, with dietary notes worked into the first draft. Christmas dinner catering in Dubai sits inside our wider{' '}
            <Link to="/catering-dubai" className="text-gold-ink hover:text-gold underline underline-offset-4 transition-colors">catering in Dubai</Link>; a seated dinner for a small table is closer to{' '}
            <Link to="/luxury-dining-experiences" className="text-gold-ink hover:text-gold underline underline-offset-4 transition-colors">fine dining at home</Link>. Both are booked the same way.
          </p>
        </div>
      </section>

      {/* ═══════════════ 3. How it works ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[1100px]">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">How Christmas catering works</SectionLabel>
            <h2 className="font-playfair text-fluid-h2 leading-[1.08] text-white">
              From the first message to the last cleared plate
            </h2>
          </div>

          <div className="xmas-steps grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {howItWorks.map((step) => (
              <div key={step.step} className="xmas-step-item bg-charcoal p-8 opacity-0 translate-y-10">
                <span className="font-playfair text-fluid-h3 text-gold/40 block mb-3" aria-hidden>{step.step}</span>
                <h3 className="font-playfair text-h3 text-white mb-2">{step.title}</h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ 4. What the booking covers ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[1100px]">
          <div className="max-w-[820px] mb-12">
            <SectionLabel>What is included</SectionLabel>
            <h2 className="font-playfair text-fluid-h2 leading-[1.08] text-black mb-5">
              What every Christmas booking covers, and what you add only if the room needs it
            </h2>
            <p className="font-inter text-body-lg text-gray-600 leading-relaxed">
              Five things are always part of the booking. Everything else is a line you can add. Nothing on the right-hand list is included automatically, so a family dinner for eight is not paying for a bartender it does not need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
            <div>
              <h3 className="font-playfair text-h3 text-black mb-6 pb-4 border-b border-gray-200">Part of every Christmas booking</h3>
              <ul className="space-y-5">
                {alwaysIncluded.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <Check size={20} className="text-gold-ink flex-shrink-0 mt-0.5" aria-hidden />
                    <div>
                      <p className="font-inter text-base font-medium text-black mb-1">{item.title}</p>
                      <p className="font-inter text-body-sm text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-playfair text-h3 text-black mb-6 pb-4 border-b border-gray-200">Add when the room needs it</h3>
              <ul className="space-y-5">
                {optionalLayers.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <Plus size={20} className="text-gold-ink flex-shrink-0 mt-0.5" aria-hidden />
                    <div>
                      <p className="font-inter text-base font-medium text-black mb-1">{item.title}</p>
                      <p className="font-inter text-body-sm text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 5. Choose your Christmas menu ═══════════════ */}
      <section id="choose-your-christmas-menu" className="bg-white section-padding scroll-mt-24">
        <div className="container-custom">
          <div className="max-w-[820px] mb-12">
            <SectionLabel>Seven Christmas menus</SectionLabel>
            <h2 className="font-playfair text-fluid-h2 leading-[1.08] text-black mb-6">
              Choose Your Christmas Menu
            </h2>
            <p className="font-inter text-body-lg text-gray-600 leading-relaxed mb-5">
              Christmas does not taste the same everywhere.
            </p>
            <p className="font-inter text-body-lg text-gray-600 leading-relaxed mb-5">
              For a British family, it may mean roast turkey, pigs in blankets and Christmas pudding. For a French family, oysters, foie gras and Bûche de Noël. German Christmas may mean roast goose and red cabbage, while an Italian Christmas table can begin with handmade tortellini and finish with panettone.
            </p>
            <p className="font-inter text-body-lg text-gray-600 leading-relaxed mb-5">
              Our chefs can recreate the Christmas traditions you know or design a menu combining dishes from several traditions.
            </p>
            <p className="font-inter text-body-lg text-gray-600 leading-relaxed">
              Choose one of the Christmas menu inspirations below, then we tailor it around your family, dietary requirements, guest count and preferred level of service. No prices are printed on the menus: the quote follows the ingredients and the service level you choose.
            </p>
          </div>

          <p className="sm:hidden mb-3 font-inter text-[12px] uppercase tracking-[0.12em] text-gray-400">
            Swipe to see all seven menus →
          </p>
          <div
            className="xmas-menu-grid -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4"
            role="list"
          >
            {christmasMenus.map((menu) => (
              <div key={menu.id} role="listitem" className="flex shrink-0 sm:min-w-0 sm:shrink">
                <MenuCard menu={menu} />
              </div>
            ))}
            <div role="listitem" className="hidden lg:flex">
              <Link
                to="/inquiry"
                className="group flex w-full flex-col justify-between border border-dashed border-gold/50 bg-cream p-6 transition-colors hover:border-gold hover:bg-gold/5"
              >
                <div>
                  <p className="font-inter text-[12px] uppercase tracking-[0.16em] text-gold-ink mb-3">Your own tradition</p>
                  <h3 className="font-playfair text-h4 text-black mb-2">Something else entirely?</h3>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed">Tell us what Christmas looks like at your table and the chef writes the menu from there.</p>
                </div>
                <span className="inline-flex items-center gap-1 font-inter text-body-sm uppercase tracking-wider text-gold-ink group-hover:text-gold transition-colors">
                  Brief the chef <ArrowRight size={14} aria-hidden />
                </span>
              </Link>
            </div>
          </div>

          <p className="mt-8 font-inter text-body-sm text-gray-500 leading-relaxed max-w-[75ch]">
            Menus are starting points. Dishes and sourcing are confirmed on your written proposal and ingredients change with the season. Sauces made with wine or spirits can be prepared without on request, and halal or pork-free menus are written in from the first draft. Menu photography shows the concept, not a specific past event.
          </p>
        </div>
      </section>

      {/* ═══════════════ 6–12. The seven menus ═══════════════ */}
      {christmasMenus.map((menu, i) => (
        <MenuSection key={menu.id} menu={menu} index={i} />
      ))}

      {/* ═══════════════ 13. Build your own ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px]">
          <SectionLabel>Your own menu</SectionLabel>
          <h2 className="font-playfair text-fluid-h2 leading-[1.08] text-black mb-6">
            Prefer to Build Your Own Christmas Menu?
          </h2>
          <p className="font-inter text-body-lg text-gray-600 leading-relaxed mb-5">
            The menus above are starting points, not fixed packages.
          </p>
          <p className="font-inter text-body-lg text-gray-600 leading-relaxed mb-5">
            Tell us what Christmas looks like in your family. You can keep a traditional menu, combine dishes from different countries or ask the chef to create something completely different: a seafood Christmas Eve, a plant-based centrepiece, a roast ham beside the turkey.
          </p>
          <p className="font-inter text-body-lg text-gray-600 leading-relaxed mb-8">
            We can accommodate vegetarian, vegan, gluten-free and other dietary requirements where possible. Every allergy you share goes into the first menu draft, and dishes are labelled at the table.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <Link to="/inquiry" className="btn-primary">Create My Christmas Menu</Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Phone size={16} className="mr-2" aria-hidden />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════ 14. More than Christmas dinner ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="max-w-[820px] mb-12">
            <SectionLabel tone="dark">Around the dinner</SectionLabel>
            <h2 className="font-playfair text-fluid-h2 leading-[1.08] text-white mb-6">
              More Than Christmas Dinner
            </h2>
            <p className="font-inter text-body-lg text-gray-300 leading-relaxed mb-5">
              Christmas dinner is the centre of the booking. Around it, the same team can arrange the pieces below, as separate lines on the proposal or as separate bookings across the festive season. None of them is included automatically.
            </p>
          </div>

          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3 mb-14">
            {moreServices.map((item) => (
              <li key={item} className="flex gap-2 font-inter text-body-sm text-gray-300">
                <Check size={16} className="text-gold flex-shrink-0 mt-1" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="xmas-settings-grid grid md:grid-cols-2 gap-6">
            {settings.map((item) => (
              <article key={item.title} className="xmas-setting-item bg-charcoal p-8 opacity-0 translate-y-10">
                <h3 className="font-playfair text-h3 text-white mb-3">{item.title}</h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed mb-4">{item.description}</p>
                <Link to={item.link.to} className="inline-flex items-center gap-1 font-inter text-body-sm text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
                  {item.link.label} <ArrowRight size={14} aria-hidden />
                </Link>
              </article>
            ))}
          </div>

          <p className="mt-12 font-inter text-body text-gray-400 leading-relaxed max-w-[75ch]">
            Christmas is one date in a longer season. New Year's Eve, Christmas brunch and a festive BBQ on the terrace are planned the same way: see{' '}
            <Link to="/new-year-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">New Year catering</Link>,{' '}
            <Link to="/brunch-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">brunch catering in Dubai</Link> and{' '}
            <Link to="/bbq-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">BBQ catering</Link>. A standing reception with passed bites rather than a seated dinner belongs on{' '}
            <Link to="/cocktail-party-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">cocktail party catering</Link>. The whole season, including Diwali, Ramadan and National Day, sits on{' '}
            <Link to="/festive-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">festive catering</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ 15. Related pages (contract siblings) ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[900px]">
          <h2 className="font-playfair text-h3 text-black text-center mb-4">
            Related pages
          </h2>
          <p className="font-inter text-body text-gray-500 text-center mb-8 leading-relaxed">
            Christmas catering sits inside the festive season and next to our wider catering and event pages.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/festive-catering-dubai" className="px-5 py-2.5 border border-gold/40 text-gold-ink font-inter text-sm hover:bg-gold hover:text-black transition-colors rounded-sm">Festive catering</Link>
            <Link to="/new-year-catering-dubai" className="px-5 py-2.5 border border-gold/40 text-gold-ink font-inter text-sm hover:bg-gold hover:text-black transition-colors rounded-sm">New Year catering</Link>
            <Link to="/catering-dubai" className="px-5 py-2.5 border border-gold/40 text-gold-ink font-inter text-sm hover:bg-gold hover:text-black transition-colors rounded-sm">Catering</Link>
            <Link to="/events" className="px-5 py-2.5 border border-gold/40 text-gold-ink font-inter text-sm hover:bg-gold hover:text-black transition-colors rounded-sm">Event catering</Link>
            <Link to="/private-chef-dubai" className="px-5 py-2.5 border border-gold/40 text-gold-ink font-inter text-sm hover:bg-gold hover:text-black transition-colors rounded-sm">Private chef</Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ 16. FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 leading-[1.08] text-black text-center mb-10">
            Christmas Catering Dubai FAQs
          </h2>

          <FaqAccordion items={faqs} showJumpNav />
        </div>
      </section>

      <LocationStrip title="Christmas catering across Dubai" />

      {/* ═══════════════ 17. Final CTA ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center xmas-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-fluid-h2 leading-[1.08] text-white mb-4 max-w-[20ch] mx-auto">
            Christmas Dinner, Without Spending Christmas in the Kitchen
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us your date, number of guests, area in Dubai and the Christmas menu you have in mind. We build the food, chef and service around your celebration and send you a tailored proposal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary">Plan My Christmas Dinner</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Phone size={16} className="mr-2" aria-hidden />
              WhatsApp myCHEF
            </a>
          </div>
          <p className="font-inter text-sm text-gray-400 mt-6">
            Christmas Eve, Christmas Day and festive-season bookings available subject to chef availability. We typically reply within 15 minutes during business hours.
          </p>
        </div>
      </section>
    </div>
  )
}
