// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /christmas-catering-dubai
//     primary:     "christmas catering dubai"
//     subkeywords: "christmas catering dubai price" · "christmas catering cost per person dubai" · "best christmas catering dubai" · "christmas catering packages dubai" · "christmas catering menu dubai" · "halal christmas catering dubai" · "christmas dinner catering dubai" · "christmas turkey catering dubai" · "christmas dinner delivery dubai" · "how much does a full christmas dinner cost" · "christmas meals dubai" · "festive catering"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { ArrowDown, ArrowLeft, ArrowRight, Mail, MessageCircle, Phone } from 'lucide-react'
import SEO from '@/components/SEO'
import FaqAccordion from '@/components/FaqAccordion'
import LocationStrip from '@/components/LocationStrip'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { christmasExtras, christmasMenus, type ChristmasMenu, type ChristmasPhotoId } from '@/content/christmasMenus'
import photos from '@/content/christmasPhotos.json'
import '@/styles/christmas-catering.css'

const PATH = '/christmas-catering-dubai'
const URL = 'https://www.mychef.ae' + PATH
const IMAGE_PATH = '/images/christmas-2026'
const HERO = '3561'
const WHATSAPP = 'https://wa.me/971551744849'
const EMAIL = 'mailto:info@mychef.ae'
const CALL = 'tel:+971526559062'
const PHOTO_SIZES = '(min-width: 1080px) 498px, (min-width: 768px) 46vw, calc(100vw - 40px)'
const GALLERY_SIZES = '(min-width: 1080px) 330px, (min-width: 768px) 30vw, calc(50vw - 26px)'
const number = new Intl.NumberFormat('en-AE')
const price = (value: number) => 'AED ' + number.format(value)
const [classic, , , traditional] = christmasMenus

const faq = [
  { q: 'How much does a full Christmas dinner cost in Dubai?', a: `The Classic buffet is ${price(classic.rates[0])} per guest up to 19 guests and ${price(classic.rates[1] ?? classic.rates[0])} per guest for 20–45 guests. Deluxe and Premium have their own rates. All three buffets have a minimum charge of 15 guests. The family-style Traditional menu is ${price(traditional.rates[0])} per person with a 10-guest minimum. Call for a private-chef quote.` },
  { q: 'What is included in the Christmas buffets?', a: 'Classic, Deluxe and Premium include skilled waiters, plates, cutlery, glasses and a Christmas-themed buffet setup. Seating, bar service and other extras can be booked with catering. Staffing, equipment and décor for the Traditional menu are agreed separately.' },
  { q: 'Can a private chef cook Christmas dinner at our home or villa?', a: 'Yes, subject to availability and the kitchen facilities. Choose any of the four menus and call us for a custom quote. We confirm ingredients, staffing, equipment, setup and hours for your location.' },
  { q: 'Can you deliver a roast turkey for Christmas?', a: 'Yes. Roast turkey delivery starts at AED 1,620 for a 6 kg bird, which serves approximately 12. It comes with gravy, cranberry sauce and a choice of rice or roast baby potatoes with steamed baby vegetables. Delivery charges depend on the Dubai address.' },
  { q: 'Can you accommodate vegetarian guests or halal requirements?', a: 'Traditional Christmas includes one separately prepared vegetarian portion. Its shared menu contains ham, cured meats and pigs in blankets. Share halal requirements, allergies and other dietary needs when you enquire so we can confirm suitable dishes and preparation arrangements.' },
  { q: 'Can I book Christmas Eve or Christmas Day?', a: 'Enquire for Christmas Eve, Christmas Day lunch or dinner, or another festive date in Dubai. Share your date and approximate guest count so we can check availability.' },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service', '@id': URL + '#service', name: 'Christmas Catering Dubai', url: URL,
      serviceType: 'Christmas buffet catering, private-chef Christmas dinners and roast turkey delivery',
      provider: { '@id': 'https://www.mychef.ae/#organization' },
      areaServed: { '@type': 'City', name: 'Dubai' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faq.map(({ q, a }) => ({
        '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
        { '@type': 'ListItem', position: 2, name: 'Festive catering', item: 'https://www.mychef.ae/festive-catering-dubai' },
        { '@type': 'ListItem', position: 3, name: 'Christmas catering', item: URL },
      ],
    },
  ],
}

function ChristmasPhoto({ id, sizes = PHOTO_SIZES, eager = false }: {
  id: ChristmasPhotoId
  sizes?: string
  eager?: boolean
}) {
  const { alt, width, height, variants } = photos[id]
  return (
    <picture className="christmas-picture">
      <source type="image/webp" srcSet={variants.map(w => `${IMAGE_PATH}/${id}-${w}.webp ${w}w`).join(', ')} sizes={sizes} />
      <img
        src={`${IMAGE_PATH}/${id}.jpg`}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : undefined}
        decoding="async"
      />
    </picture>
  )
}

function ContactButtons({ topic, placement, dark = false }: { topic: string; placement: string; dark?: boolean }) {
  return (
    <div className={`christmas-actions${dark ? ' christmas-actions-dark' : ''}`}>
      <a href={EMAIL} data-exact-contact data-cta-location={placement} className="christmas-button">
        <Mail size={19} aria-hidden /> Email myCHEF <span className="sr-only"> about {topic}</span>
      </a>
      <a href={WHATSAPP} data-exact-contact data-cta-location={placement} className="christmas-button christmas-button-outline">
        <MessageCircle size={19} aria-hidden /> WhatsApp myCHEF <span className="sr-only"> about {topic}</span>
      </a>
    </div>
  )
}

function MenuRates({ menu }: { menu: ChristmasMenu }) {
  const [small, large] = menu.rates
  return (
    <div className="christmas-rates">
      {large === undefined ? (
        <p><strong>{price(small)}</strong> per person · Minimum {menu.minimum} guests</p>
      ) : (
        <>
          <dl>
            <div><dt>Up to 19 guests</dt><dd><strong>{price(small)}</strong> per guest</dd></div>
            <div><dt>20–45 guests</dt><dd><strong>{price(large)}</strong> per guest</dd></div>
          </dl>
          <p>Minimum charge of {menu.minimum} guests. For 46 guests or more, request a quotation.</p>
        </>
      )}
    </div>
  )
}

function MenuSection({ menu }: { menu: ChristmasMenu }) {
  return (
    <section id={menu.id} className="christmas-section christmas-menu" aria-labelledby={menu.id + '-heading'}>
      <div className="christmas-container">
        {menu === traditional && <span id="british-christmas-dinner" className="christmas-anchor" />}
        <h2 id={menu.id + '-heading'}>{menu.name}</h2>
        <figure className="christmas-menu-banner">
          <ChristmasPhoto id={menu.stock} sizes="(min-width: 1080px) 1030px, calc(100vw - 40px)" />
          <figcaption>Illustrative stock image; actual dishes and presentation may vary.</figcaption>
        </figure>
        <MenuRates menu={menu} />
        {menu === traditional && (
          <p className="christmas-note">Includes ham, cured meats and pigs in blankets. The vegetarian portion for one is prepared separately. Staffing, equipment and décor are confirmed in your quotation.</p>
        )}
        <div className="christmas-courses">
          {menu.courses.map(({ heading, items, note }) => (
            <div key={heading}>
              <h3>{heading}</h3>
              <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>
              {note && <p>{note}</p>}
            </div>
          ))}
        </div>
        <ContactButtons topic={menu.name} placement={menu.id} />
        <figure className="christmas-menu-example">
          <ChristmasPhoto id={menu.photo} />
          <figcaption>From our Christmas events. Your setup and dishes are confirmed in your proposal.</figcaption>
        </figure>
      </div>
    </section>
  )
}

const gallery = Object.keys(photos).filter(id => !id.endsWith('-stock')) as ChristmasPhotoId[]
const PAGE_SIZE = 9

function ChristmasGallery() {
  const [page, setPage] = useState(0)
  const heading = useRef<HTMLHeadingElement>(null)
  const pageCount = Math.ceil(gallery.length / PAGE_SIZE)
  const offset = page * PAGE_SIZE
  const visible = gallery.slice(offset, offset + PAGE_SIZE)

  function moveTo(next: number) {
    setPage(next)
    heading.current?.focus()
  }

  return (
    <section id="christmas-previous-work" className="christmas-section christmas-gallery" aria-labelledby="christmas-gallery-title">
      <div className="christmas-container">
        <h2 id="christmas-gallery-title" ref={heading} tabIndex={-1}>Photos from myCHEF Christmas events</h2>
        <p>See how festive buffets, dining tables and food displays have been arranged at previous Christmas events.</p>
        <p className="christmas-gallery-count" aria-live="polite">Photos {offset + 1}–{offset + visible.length} of {gallery.length}</p>
        <div id="christmas-gallery-photos" className="christmas-gallery-grid">
          {visible.map(id => <ChristmasPhoto key={id} id={id} sizes={GALLERY_SIZES} />)}
        </div>
        <nav aria-label="Christmas photo gallery pages" className="christmas-pagination">
          <button type="button" aria-controls="christmas-gallery-photos" disabled={page === 0} onClick={() => moveTo(page - 1)}><ArrowLeft size={17} aria-hidden /> Previous <span className="sr-only"> photos</span></button>
          <span>Page {page + 1} of {pageCount}</span>
          <button type="button" aria-controls="christmas-gallery-photos" disabled={page === pageCount - 1} onClick={() => moveTo(page + 1)}>Next <span className="sr-only"> photos</span><ArrowRight size={17} aria-hidden /></button>
        </nav>
      </div>
    </section>
  )
}

export default function ChristmasCatering() {
  useWhatsAppMessage("Hi myCHEF Dubai, I'd like to discuss Christmas catering. Date: __ Guests: __ Area: __")
  return (
    <article className="christmas-page">
      <SEO
        title="Christmas Catering Dubai | Christmas Dinner & Turkey | myCHEF"
        description="Compare four Christmas menus in Dubai, book a staffed buffet, request a private-chef quote or order roast turkey delivery. See prices, minimums and extras."
        canonicalPath={PATH}
        ogImage={`${IMAGE_PATH}/${HERO}-960.webp`}
        schema={schema}
      />

      <header className="christmas-hero" data-catering-hero>
        <div className="christmas-container christmas-split">
          <div>
            <nav className="christmas-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link><span aria-hidden>/</span><Link to="/festive-catering-dubai">Festive catering</Link><span aria-hidden>/</span><span aria-current="page">Christmas catering</span>
            </nav>
            <h1>Christmas Catering Dubai</h1>
            <p>Bring Christmas dinner to your home, office or venue in Dubai. Choose a staffed buffet, a Traditional Christmas dinner, a private chef or roast turkey delivery.</p>
            <ContactButtons topic="Christmas catering" placement="christmas_intro" dark />
            <p className="christmas-number">WhatsApp +971 55 174 4849</p>
            <a className="christmas-text-link" href="#choose-your-christmas-menu">Compare menus and prices <ArrowDown size={17} aria-hidden /></a>
          </div>
          <figure><ChristmasPhoto id={HERO} eager /></figure>
        </div>
      </header>

      <nav className="christmas-jumps" aria-label="Christmas catering options">
        <div className="christmas-container">
          <a href="#choose-your-christmas-menu">Menus &amp; prices</a>
          <a href="#private-chef-christmas">Private chef</a>
          <a href="#turkey-delivery">Turkey delivery</a>
          <a href="#christmas-previous-work">Photo gallery</a>
          <a href="#christmas-extras">Extras</a>
          <a href="#christmas-terms">Booking terms</a>
        </div>
      </nav>

      <section id="choose-your-christmas-menu" className="christmas-section christmas-overview" data-catering-expansion>
        <div className="christmas-container">
          <span id="catering-planning" className="christmas-anchor" />
          <h2>Christmas Catering Dubai Menus &amp; Prices</h2>
          <p>The three buffets include skilled waiters, plates, cutlery, glasses and a Christmas-themed buffet setup. The family-style Traditional menu has its own minimum and service arrangements.</p>
          <div className="christmas-comparison">
            {christmasMenus.map(menu => (
              <div key={menu.id}>
                <h3><a href={'#' + menu.id}>{menu.name}</a></h3>
                <p>{menu.intro}</p>
                <MenuRates menu={menu} />
                <a className="christmas-text-link" href={'#' + menu.id}>See full menu <span className="sr-only"> for {menu.name}</span><ArrowDown size={17} aria-hidden /></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {christmasMenus.map(menu => <MenuSection key={menu.id} menu={menu} />)}

      <section id="private-chef-christmas" className="christmas-section christmas-dark">
        <div className="christmas-container christmas-narrow">
          <h2>Private chef for Christmas dinner</h2>
          <p>Choose Classic, Deluxe, Premium or Traditional as the starting menu for your private-chef Christmas dinner. We’ll confirm availability and prepare a custom quotation for the chef, assistant, waiters, hours, equipment, setup and ingredients your location and service require.</p>
          <a className="christmas-text-link christmas-phone" href={CALL} data-cta-location="christmas_private_chef"><Phone size={19} aria-hidden /> Call myCHEF on +971 52 655 9062 for a custom quotation</a>
          <ContactButtons topic="a private-chef Christmas quotation" placement="christmas_private_chef" dark />
        </div>
      </section>

      <section id="turkey-delivery" className="christmas-section">
        <div className="christmas-container christmas-split">
          <div>
            <h2>Christmas roast turkey delivery</h2>
            <p>Roast turkey comes with cranberry sauce and turkey gravy. Choose either rice or roast baby potatoes and steamed baby vegetables.</p>
            <p className="christmas-rates"><strong>AED 270 per kg</strong><br />Minimum 6 kg · AED 1,620 · Approximately 12 people</p>
            <p>Delivery charges depend on the address in Dubai.</p>
            <ContactButtons topic="Christmas roast turkey delivery" placement="christmas_turkey" />
          </div>
          <figure className="christmas-turkey-photo"><ChristmasPhoto id="3657" /><figcaption>Roast presentation from a previous Christmas event.</figcaption></figure>
        </div>
      </section>

      <ChristmasGallery />

      <section id="christmas-extras" className="christmas-section">
        <div className="christmas-container christmas-narrow">
          <h2>Optional extras for Christmas catering</h2>
          <p>Furniture, equipment, bar service and other extras are available with a catering booking.</p>
          <table className="christmas-extras">
            <caption className="sr-only">Christmas catering extras and rates</caption>
            <thead><tr><th scope="col">Extra</th><th scope="col">Price</th></tr></thead>
            <tbody>
              {christmasExtras.map(([item, rate]) => <tr key={item}><th scope="row">{item}</th><td>{rate}</td></tr>)}
              <tr><th scope="row">Return seating transport for fewer than 60 guests</th><td>AED 425</td></tr>
              <tr><th scope="row">Return seating transport for 61–100 guests</th><td>AED 850</td></tr>
              <tr><th scope="row">Return seating transport for exactly 60 guests or more than 100</th><td>Request a quotation</td></tr>
            </tbody>
          </table>
          <p>Return seating transport applies when seating is required.</p>
        </div>
      </section>

      <section id="christmas-terms" className="christmas-section christmas-overview">
        <div className="christmas-container christmas-narrow">
          <h2>Christmas catering booking terms</h2>
          <div className="christmas-terms">
            <h3>Event and guest count</h3>
            <p>We cater events in Dubai. The event schedule is up to four hours. Please consume food within three hours of display. Last-minute extensions are subject to agreement at AED 340 per server per hour.</p>
            <p>Classic, Deluxe and Premium have a 15-guest minimum charge. Traditional Christmas has a 10-guest minimum. Confirm your final guest count two days before the event. A decrease in guests can change the price tier. myCHEF reserves the right to increase prices at its discretion.</p>
            <p>You can request additions, removals or substitutions. Higher-cost substitutions and additions beyond the menu structure affect the price.</p>
            <h3>Confirmation and payment</h3>
            <p>Please send a signed and stamped copy of each proposal page or confirm by email, together with an LPO or proof of full payment. We confirm catering once full payment is received. If payment is outstanding before the event date, catering is cancelled without further obligation or liability on our part.</p>
            <p>Payment links carry no additional charge. Credit card machine payments carry a 2.5% charge. Contact myCHEF for bank transfer or account-payee cheque instructions. Quotes are valid for one month from receipt.</p>
            <h3>Cancellation</h3>
            <ul>
              <li>From signing through two days before the event · 50% of the cancelled booking value</li>
              <li>One day before the event · 75% of the cancelled booking value</li>
              <li>Same day or no-show · 100% of the cancelled booking value</li>
            </ul>
            <p>If you cancel one day before the event because of a documented COVID-19 case, 50% of the booking value paid in advance can be applied to a postponed event. Same-day cancellation requires payment of 100% of the agreed charges.</p>
          </div>
        </div>
      </section>

      <section className="christmas-section">
        <div className="christmas-container christmas-narrow">
          <h2>Christmas catering questions</h2>
          <FaqAccordion items={faq} />
          <p className="christmas-related"><Link to="/blog/christmas-lunch-at-home-planning-dubai">Plan Christmas lunch at home</Link> · <Link to="/catering-dubai">Explore catering services in Dubai</Link> · <Link to="/festive-catering-dubai">See other festive menus</Link></p>
        </div>
      </section>

      <LocationStrip title="Christmas catering across Dubai" />

      <section id="christmas-contact" className="christmas-section christmas-dark christmas-close">
        <div className="christmas-container">
          <h2>Plan your Christmas dinner</h2>
          <p>Send your date, guest count, Dubai address and preferred menu. We’ll check availability and confirm the service and extras for your celebration. myCHEF coordinates the booking and licensed culinary partners prepare the food.</p>
          <ContactButtons topic="your Christmas dinner" placement="christmas_contact" dark />
          <p className="christmas-number">WhatsApp +971 55 174 4849</p>
          <p className="christmas-brand">myCHEF is a brand of Numini FZC.</p>
        </div>
      </section>
    </article>
  )
}
