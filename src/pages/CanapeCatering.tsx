// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /canape-catering-dubai
//     primary:     "canape catering dubai"
//     subkeywords: "canape catering dubai price" · "canape catering price per person dubai" · "best canape catering dubai" · "canape catering packages dubai" · "canape catering menu dubai" · "halal canape catering dubai" · "how many canapes per person" · "finger food catering dubai" · "birthday canape catering dubai" · "corporate canape catering dubai" · "finger food catering price per person dubai" · "canapes catering near me"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useEffect, useState, type FormEvent } from 'react'
import { Link } from 'react-router'
import { ArrowDown, ArrowUpRight, Check, ChevronDown, Heart, Minus, Plus, Search, X } from 'lucide-react'
import SEO from '@/components/SEO'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { trackEvent } from '@/lib/analytics'
import { canapes, canapeCategories, canapeCollections, receptionFormats, estimateCanapes, buildCanapeMessage, matchesCanape, type ReceptionFormat } from '@/lib/canapePlanner'
import { canapeFaqs } from '@/content/canapes/faqs'
import '@/styles/canape-collection.css'

const PATH = '/canape-catering-dubai'
const SITE = 'https://www.mychef.ae'
const HERO = '/images/canape-collection/canape-collection-hero'
const STORAGE_KEY = 'mychef-canape-shortlist-v1'
const categoryNames = Object.fromEntries(canapeCategories.map(item => [item.value, item.label]))
const schema = {
  '@context': 'https://schema.org', '@graph': [
    { '@type': 'Service', '@id': SITE + PATH + '#service', name: 'Canapé catering in Dubai', serviceType: 'Bespoke canapé catering', url: SITE + PATH, description: 'Canapé menu planning and event catering in Dubai, with service and final menus confirmed by proposal.', image: SITE + HERO + '-1536.webp' },
    { '@type': 'ItemList', '@id': SITE + PATH + '#collection', name: '50 canapé menu ideas', numberOfItems: canapes.length, itemListElement: canapes.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, url: SITE + PATH + '#' + item.slug, item: { '@type': 'CreativeWork', name: item.name, description: item.description + ' Illustrative menu concept; final recipe and availability confirmed by the culinary partner.', image: SITE + item.image, url: SITE + PATH + '#' + item.slug } })) },
  ],
}
const emptyFilters = { category: 'all', temperature: 'all', diet: 'all', query: '' }
const occasions = [
  { label: '01 / Celebrations', title: 'Weddings & engagements', text: 'A welcome that carries guests comfortably from ceremony to dinner. Consider a balanced menu, accessible dietary choices and service timed around photographs.', href: '/wedding-catering-dubai', link: 'Explore wedding catering' },
  { label: '02 / Business', title: 'Corporate receptions', text: 'Neat bites for client evenings, networking and conference closes. Plan clear quantities, a sensible service rhythm and a menu that is easy to enjoy while talking.', href: '/corporate-event-catering-dubai', link: 'Plan a corporate event' },
  { label: '03 / By the water', title: 'Yachts & sunset terraces', text: 'Fresh flavours and compact presentations, with refrigeration, galley access and boarding logistics assessed in advance. The vessel determines what can be finished on board.', href: '/yachts', link: 'Explore yacht catering' },
  { label: '04 / At home', title: 'Birthdays & housewarmings', text: "Choose refined canapés or more generous finger food for a relaxed party. Sliders, warm savoury bites and separate children's portions can help suit a mixed guest list.", href: '/birthday-catering-dubai', link: 'Plan a birthday celebration' },
  { label: '05 / A first impression', title: 'Launches & private views', text: 'Gallery openings, property previews and boutique launches invite a little creativity. Reflect a colour palette through ingredients and presentation, with practical, low-mess bites.', href: '/brand-activation-catering-dubai', link: 'Explore brand events' },
  { label: '06 / The evening unfolds', title: 'Canapés & drinks', text: 'Pair citrus with seafood, fragrant tea with spice, or a berry spritz with a delicate dessert. A dedicated mocktail menu and bartender can be included in the brief.', href: '/cocktail-party-catering-dubai', link: 'Explore cocktail receptions' },
]

export default function CanapeCatering() {
  const [filters, setFilters] = useState(emptyFilters)
  const [selected, setSelected] = useState<number[]>([])
  const [storageReady, setStorageReady] = useState(false)
  const [guests, setGuests] = useState('50')
  const [format, setFormat] = useState<ReceptionFormat>('welcome')
  const [date, setDate] = useState('')
  const [occasion, setOccasion] = useState('Private celebration')
  const [venue, setVenue] = useState('')
  const [notes, setNotes] = useState('')
  const [announcement, setAnnouncement] = useState('')
  const shortlist = canapes.filter(item => selected.includes(item.id))
  const visible = canapes.filter(item => matchesCanape(item, filters))
  const estimate = estimateCanapes(Number(guests), format)
  const message = buildCanapeMessage({ ids: selected, guests, format, date, occasion, venue, notes })
  useWhatsAppMessage(message)
  useEffect(() => {
    try {
      const saved: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
      if (Array.isArray(saved)) setSelected([...new Set(saved.filter((id): id is number => typeof id === 'number' && canapes.some(item => item.id === id)))])
    } catch { /* Storage is optional. */ }
    setStorageReady(true)
  }, [])
  useEffect(() => {
    if (!storageReady) return
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(selected)) } catch { /* Storage is optional. */ }
  }, [selected, storageReady])
  function toggle(id: number) {
    const item = canapes.find(dish => dish.id === id)!
    const removing = selected.includes(id)
    setSelected(current => removing ? current.filter(value => value !== id) : [...current, id])
    setAnnouncement(item.name + (removing ? ' removed from your shortlist.' : ' added to your shortlist.'))
    trackEvent('canape_shortlist_change', { item_id: id, action: removing ? 'remove' : 'add', page_path: PATH })
  }
  function addCollection(collection: typeof canapeCollections[number]) {
    setSelected(current => [...new Set([...current, ...collection.ids])])
    setOccasion(collection.occasion)
    setAnnouncement(collection.name + ' added to your shortlist. Existing favourites have been kept.')
    trackEvent('canape_collection_select', { collection: collection.slug, page_path: PATH })
  }
  function submitBrief(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!estimate) return
    trackEvent('whatsapp_click', { page_path: PATH, cta_location: 'canape_planner', link_url: 'https://wa.me/971551744849' })
    window.open('https://wa.me/971551744849?text=' + encodeURIComponent(message), '_blank', 'noopener,noreferrer')
  }
  const hasFilters = Object.keys(emptyFilters).some(key => filters[key as keyof typeof filters] !== emptyFilters[key as keyof typeof emptyFilters])
  return <div className="cn-page">
    <SEO title="Canapé Catering Dubai | 50 Menu Ideas | myCHEF" description="Explore 50 canapé ideas for Dubai weddings, receptions and private parties. Hot, cold, vegan and sweet selections from AED 150 per guest. Plan your menu." canonicalPath={PATH} ogImage={HERO + '-1536.webp'} hideSiteName schema={schema} />
    <section className="cn-hero"><div className="cn-wrap cn-hero-grid">
      <div className="cn-hero-copy">
        <nav aria-label="Breadcrumb" className="cn-breadcrumb"><Link to="/">Home</Link><span>/</span><Link to="/catering-dubai">Catering</Link><span>/</span><span aria-current="page">Canapés</span></nav>
        <p className="cn-eyebrow">The myCHEF canapé collection</p><h1>Canapé Catering Dubai</h1>
        <p className="cn-hero-line">Small bites.<br /><em>Remarkable occasions.</em></p>
        <p className="cn-lead">Canapé catering in Dubai, shaped around your guests. Explore 50 menu ideas, from delicate seafood and warm savoury bites to vibrant plant-based creations and a beautiful sweet finish.</p>
        <div className="cn-actions"><a className="cn-button" href="#canape-menu">Explore the 50 creations <ArrowDown size={17} /></a><a className="cn-text-link" href="#plan-reception">Plan your reception <ArrowUpRight size={16} /></a></div>
        <p className="cn-hero-note">From AED 150 per guest · Ten-guest starting brief<br /> Final menu and service quoted for your event. VAT separate.</p>
      </div>
      <figure className="cn-hero-image"><img src={HERO + '-800.webp'} srcSet={HERO + '-800.webp 800w, ' + HERO + '-1200.webp 1200w, ' + HERO + '-1536.webp 1536w'} sizes="(min-width: 1000px) 52vw, 100vw" alt="Smoked salmon blinis, tomato tartlets, golden croquettes and beetroot cucumber bites on ivory plates" width={1536} height={1024} fetchPriority="high" /><figcaption>Food to set the tone. Menus to make your own.</figcaption></figure>
    </div></section>
    <nav className="cn-jump" aria-label="Explore this page"><div className="cn-wrap"><a href="#collections">Curated menus</a><a href="#canape-menu">All 50 creations</a><a href="#quantities">Quantity guide</a><a href="#service">Service & pricing</a><a href="#questions">Your questions</a><a href="#plan-reception">Your shortlist <span>{selected.length}</span></a></div></nav>
    <section className="cn-section cn-intro"><div className="cn-wrap cn-split">
      <div><p className="cn-eyebrow">A considered welcome</p><h2>Canapé catering Dubai,<br /><em>with your occasion in mind.</em></h2></div>
      <div className="cn-prose"><p>A wedding welcome, a gallery opening, a sunset gathering at home. The right small bites let guests enjoy the food without interrupting the conversation. Our menus balance flavour, texture and presentation with the practical details of the room.</p><p>Choose a few favourites below, or begin with a curated collection. myCHEF coordinates your brief with the culinary team, then confirms the dishes, quantities, staffing and equipment in a written proposal. Explore our wider <Link to="/catering-dubai">catering service</Link> when your event needs more than canapés.</p></div>
    </div></section>
    <section className="cn-section cn-collections" id="collections"><div className="cn-wrap">
      <div className="cn-section-heading"><div><p className="cn-eyebrow">Six ways to begin</p><h2>A menu with <em>a point of view.</em></h2></div><p>Start with a collection, then make it yours. Each edit suggests eight varieties; portions and any substitutions are agreed separately.</p></div>
      <div className="cn-collection-grid">{canapeCollections.map((collection, index) => <article className="cn-collection" key={collection.slug}>
        <div className="cn-collection-top"><span className="cn-number">0{index + 1}</span><p className="cn-eyebrow">{collection.eyebrow}</p></div>
        <h3>{collection.name}</h3><p>{collection.description}</p>
        <div className="cn-collection-names">{collection.ids.map(id => <span key={id}>{canapes.find(item => item.id === id)!.name}</span>)}</div>
        <p className="cn-pairing">A drink to consider <span>{collection.pairing}</span></p>
        <button type="button" className="cn-text-link" onClick={() => addCollection(collection)}>Add this collection <Plus size={16} /></button>
      </article>)}</div>
    </div></section>
    <section className="cn-section cn-catalogue" id="canape-menu"><div className="cn-wrap">
      <div className="cn-section-heading"><div><p className="cn-eyebrow">The collection / 01–50</p><h2>Find your <em>favourites.</em></h2></div><p>Browse by flavour, service temperature or dietary preference. Tap the heart to create a shortlist for your chef.</p></div>
      <p className="cn-image-disclosure">AI-created menu illustrations. Recipes, portions, availability and final presentation are confirmed in your proposal.</p>
      <div className="cn-filters">
        <div className="cn-category-tabs" role="group" aria-label="Canapé categories">{canapeCategories.map(category => <button type="button" key={category.value} aria-pressed={filters.category === category.value} onClick={() => setFilters(current => ({ ...current, category: category.value }))}>{category.label}{category.value !== 'all' && <span>10</span>}</button>)}</div>
        <div className="cn-filter-row"><label className="cn-search"><Search size={17} aria-hidden="true" /><span className="sr-only">Search dishes or ingredients</span><input type="search" placeholder="Find a flavour or ingredient" value={filters.query} onChange={event => setFilters(current => ({ ...current, query: event.target.value }))} /></label>
          <label className="cn-select"><span className="sr-only">Serving temperature</span><select value={filters.temperature} onChange={event => setFilters(current => ({ ...current, temperature: event.target.value }))}><option value="all">Warm & cold</option><option value="warm">Warm bites</option><option value="cold">Cold bites</option></select><ChevronDown size={15} aria-hidden="true" /></label>
          <label className="cn-select"><span className="sr-only">Dietary preference</span><select value={filters.diet} onChange={event => setFilters(current => ({ ...current, diet: event.target.value }))}><option value="all">All dietary preferences</option><option value="vegetarian">Vegetarian, including vegan</option><option value="vegan">Vegan</option></select><ChevronDown size={15} aria-hidden="true" /></label>
        </div><div className="cn-results"><p role="status">{visible.length} of 50 creations</p>{hasFilters && <button type="button" onClick={() => setFilters(emptyFilters)}>Clear filters <X size={13} /></button>}</div>
      </div>
      <div className="cn-menu-grid">{canapes.map(item => <article className="cn-card" key={item.id} id={item.slug} data-canape-card={item.id} hidden={!matchesCanape(item, filters)}>
        <div className="cn-card-image"><img src={item.image.replace('-800.', '-480.')} srcSet={item.image.replace('-800.', '-480.') + ' 480w, ' + item.image + ' 800w'} sizes="(min-width: 1200px) 23vw, (min-width: 700px) 30vw, 46vw" alt={item.alt} width={1024} height={1024} loading="lazy" decoding="async" /><span className="cn-card-number">{String(item.id).padStart(2, '0')}</span><button type="button" className="cn-heart" aria-label={(selected.includes(item.id) ? 'Remove ' : 'Add ') + item.name + (selected.includes(item.id) ? ' from shortlist' : ' to shortlist')} aria-pressed={selected.includes(item.id)} onClick={() => toggle(item.id)}><Heart size={19} fill={selected.includes(item.id) ? 'currentColor' : 'none'} /></button></div>
        <div className="cn-card-copy"><p className="cn-card-meta">{categoryNames[item.category]} <span>· {item.temperature === 'warm' ? 'Warm' : 'Cold'}</span></p><h3><a href={'#' + item.slug}>{item.name}</a></h3><p>{item.description}</p><div className="cn-card-tags">{item.diet && <span>{item.diet === 'vegan' ? 'Plant-based' : 'Vegetarian'}</span>}{item.tier === 'Prestige' && <span>Premium ingredient</span>}</div><details className="cn-allergens"><summary>Ingredient notes <Plus size={12} /></summary><p>Indicative allergens: {item.allergens.toLowerCase()}. Final recipe and cross-contact assessment required.</p></details></div>
      </article>)}</div>
      {!visible.length && <div className="cn-no-results"><h3>No dishes match this combination.</h3><p>Try a different flavour or reset your filters.</p><button type="button" className="cn-button" onClick={() => setFilters(emptyFilters)}>Show all 50 creations</button></div>}
      <p className="cn-footnote">Dietary labels describe the proposed recipe. They are not an allergen-safety guarantee. Please share allergies before confirming your menu.</p>
    </div></section>
    <section className="cn-section cn-planning" id="quantities"><div className="cn-wrap cn-split">
      <div className="cn-prose"><p className="cn-eyebrow">A generous reception, thoughtfully paced</p><h2>How much food<br /><em>should you plan?</em></h2><p>If you are wondering how many canapés per person to order, start with the timing. A short welcome before dinner needs a lighter allocation than an evening when guests expect the reception to be their meal.</p><p>Build contrast: something fresh, something crisp, a warm savoury bite and a little sweetness. For a longer event, add substantial food such as bowls or a chef station. Eight different dishes means eight varieties, not a fixed serving count.</p><p>For example, a mixed menu might pair seafood and chicken with two vegetarian choices and a complete vegan selection. We refine the balance around your guest list, the kitchen and the sequence of your event.</p><Link className="cn-text-link" to="/blog/canape-reception-planning-dubai">Read our reception planning guide <ArrowUpRight size={16} /></Link></div>
      <div className="cn-calculator"><p className="cn-eyebrow">Your starting quantity</p><label htmlFor="canape-guests">Number of guests</label><input id="canape-guests" type="number" min="10" max="5000" step="1" value={guests} onChange={event => setGuests(event.target.value)} /><label htmlFor="canape-format">Reception format</label><select id="canape-format" value={format} onChange={event => setFormat(event.target.value as ReceptionFormat)}>{receptionFormats.map(item => <option value={item.id} key={item.id}>{item.label} · {item.duration}</option>)}</select><div className="cn-estimate" aria-live="polite">{estimate ? <><strong>{estimate.low.toLocaleString()}–{estimate.high.toLocaleString()}</strong><span>canapé pieces in total</span><p>{estimate.perGuestLow}–{estimate.perGuestHigh} pieces per guest</p></> : <p>Enter a whole number from 10 to 5,000 guests.</p>}</div><p className="cn-footnote">A planning estimate, subject to appetite, timing and portion size. {format === 'evening' ? 'For a longer evening, substantial bowls or stations are additional and should be planned separately.' : 'Drinks, additional substantial food and any contingency are separate.'} Capacity is confirmed for your date.</p></div>
    </div></section>
    <section className="cn-section" id="occasions"><div className="cn-wrap">
      <div className="cn-section-heading"><div><p className="cn-eyebrow">The setting changes. The care remains.</p><h2>For the moments<br /><em>that bring people together.</em></h2></div><p>We plan the food around the way your guests will arrive, move, talk and celebrate.</p></div>
      <div className="cn-occasion-grid">{occasions.map(item => <article key={item.href}><span>{item.label}</span><h3>{item.title}</h3><p>{item.text}</p><Link to={item.href}>{item.link} <ArrowUpRight size={15} /></Link></article>)}</div>
    </div></section>
    <section className="cn-section cn-service" id="service"><div className="cn-wrap">
      <div className="cn-split"><div><p className="cn-eyebrow">Clarity is part of the experience</p><h2>The food. The service.<br /><em>The details, considered.</em></h2><div className="cn-price"><span>Starting from</span><strong>AED 150 <small>/ guest</small></strong><p>Ten-guest starting brief. Final scope and 5% VAT shown separately.</p></div></div><div className="cn-prose"><p>Your canapé catering price depends on the number of pieces, the ingredients and how the food reaches your guests. Lobster, caviar and wagyu are premium upgrades; a shortlist containing them is costed individually.</p><p>A proposal should make the whole event clear: menu and quantities, preparation or finishing, chefs and passing staff, trays, equipment, delivery, setup and collection. Drinks, glassware, styling and event coordination can be discussed as additional scope.</p><p>myCHEF coordinates the experience with the assigned culinary partner. We confirm the venue facilities and service arrangements before committing to the final menu. Read <Link to="/how-it-works">how planning with myCHEF works</Link>.</p></div></div>
      <div className="cn-format-grid"><article><h3>Passed trays</h3><p>Staff circulate with small batches, keeping food moving through the room. Warm dishes need a suitable finishing area and an agreed service schedule.</p></article><article><h3>A styled display</h3><p>A considered focal point for guests to explore. We plan replenishment and suitable holding arrangements around the food and the room.</p></article><article><h3>Delivery, where suitable</h3><p>Selected menus may suit an agreed delivery and handover. Delicate hot food, transport time and refrigeration can change what is appropriate.</p></article></div>
    </div></section>
    <section className="cn-section cn-dietary"><div className="cn-wrap cn-split"><div><p className="cn-eyebrow">Every guest belongs at the table</p><h2>Thoughtful choices.<br /><em>Careful confirmation.</em></h2></div><div className="cn-prose"><p>Halal sourcing is part of the brief. Our proposed collection contains no pork or intentionally added alcohol, and final ingredient specifications are checked with the culinary partner.</p><p>Vegetarian and vegan dishes deserve the same attention as every other plate. Explore <Link to="/vegan-catering-dubai">plant-based catering</Link> for a complete menu, or combine these choices with your favourites. Dessert lovers can also consider a <Link to="/dessert-table-catering-dubai">dedicated sweet display</Link>.</p><p>Tell us about allergies before confirming. The ingredient notes are a starting reference; final recipes and preparation conditions require review. Partner kitchens may handle allergens, and dedicated controls must be agreed where needed.</p></div></div></section>
    <section className="cn-section cn-faq" id="questions"><div className="cn-wrap cn-split"><div><p className="cn-eyebrow">Before the first tray</p><h2>Your questions,<br /><em>thoughtfully answered.</em></h2><p className="cn-lead">The practical details that help you choose with confidence.</p></div><div>{canapeFaqs.map((faq, index) => <details key={faq.q} id={'canape-question-' + (index + 1)}><summary><h3>{faq.q}</h3><Plus size={18} /></summary><p>{faq.a}</p></details>)}</div></div></section>
    <section className="cn-section cn-enquiry" id="plan-reception"><div className="cn-wrap cn-split">
      <div><p className="cn-eyebrow">Your occasion starts here</p><h2>Let’s make it<br /><em>beautifully yours.</em></h2><p className="cn-lead">Send your favourite dishes and a few event details. We’ll discuss what works, refine the selection and prepare a tailored proposal.</p><div className="cn-shortlist"><div className="cn-shortlist-heading"><h3>Your shortlist <span>{shortlist.length}</span></h3>{selected.length > 0 && <button type="button" onClick={() => { setSelected([]); setAnnouncement('Your shortlist has been cleared.') }}>Clear all</button>}</div>{shortlist.length ? <ul>{shortlist.map(item => <li key={item.id}><span>{String(item.id).padStart(2, '0')} · {item.name}</span><button type="button" aria-label={'Remove ' + item.name + ' from shortlist'} onClick={() => toggle(item.id)}><Minus size={16} /></button></li>)}</ul> : <p>Choose dishes above, or let us recommend a menu for you.</p>}</div><p className="cn-footnote">Your shortlist is a conversation starter. It does not reserve a date or confirm an order.</p></div>
      <form className="cn-brief" onSubmit={submitBrief}><div className="cn-form-grid"><label>Occasion<select value={occasion} onChange={event => setOccasion(event.target.value)}>{['Private celebration','Wedding','Corporate reception','Yacht or terrace','Birthday or engagement','Brand launch or gallery opening','Something else'].map(value => <option key={value}>{value}</option>)}</select></label><label>Event date<input aria-label="Event date" type="date" value={date} onChange={event => setDate(event.target.value)} /></label><label>Guests<input aria-label="Guests for your event" type="number" required min="10" max="5000" step="1" value={guests} onChange={event => setGuests(event.target.value)} /></label><label>Venue or area<input type="text" maxLength={150} placeholder="e.g. Palm Jumeirah villa" value={venue} onChange={event => setVenue(event.target.value)} /></label></div><label>Flavours, preferences or dietary requirements<textarea rows={4} maxLength={1500} placeholder="Tell us what would make this occasion feel right." value={notes} onChange={event => setNotes(event.target.value)} /></label><button className="cn-button" type="submit">Discuss my menu on WhatsApp <ArrowUpRight size={17} /></button><p className="cn-footnote">Opens WhatsApp with your brief ready to review and send. Details are shared when you send the message.</p><Link className="cn-text-link" to="/inquiry" data-cta-location="canape_planner_alternative">Prefer our enquiry form? <ArrowUpRight size={16} /></Link></form>
    </div></section>
    <section className="cn-related"><div className="cn-wrap"><p className="cn-eyebrow">Another way to gather</p><div><Link to="/cocktail-party-catering-dubai">Cocktail party catering <ArrowUpRight size={17} /></Link><Link to="/buffet-catering-dubai">Buffet catering <ArrowUpRight size={17} /></Link><Link to="/grazing-table-dubai">Grazing tables <ArrowUpRight size={17} /></Link></div></div></section>
    <div className="sr-only" role="status" aria-live="polite">{announcement}</div>
    {selected.length > 0 && <div className="cn-shortlist-bar"><span><Check size={16} />{selected.length} favourite{selected.length === 1 ? '' : 's'} saved</span><a href="#plan-reception">Review your menu <ArrowUpRight size={16} /></a></div>}
  </div>
}
