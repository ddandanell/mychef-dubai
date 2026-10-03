import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Check, ChefHat, MessageCircle, Minus, Plus, Search, Users, X } from 'lucide-react'
import { Link } from 'react-router'
import { DINING_CONFIG as config, DINING_ESTIMATE_NOTE, DINING_PACKAGES, DINING_PRESETS, DISH_TIERS } from '@/content/privateDiningConfig'
import { calculateDining, DINING_DISHES, diningWhatsApp, dishPrice, dishRestriction, dubaiToday, money, validDiningDate, type DiningDetails, type DiningService } from '@/lib/privateDining'
import '@/styles/private-dining-builder.css'

const cuisines = [...new Set(DINING_DISHES.filter(d => d.status === 'live').map(d => d.cuisine))]
const extras = ['Drinks', 'Tableware & linen', 'Celebration cake', 'Flowers & table styling']
const defaultDetails: DiningDetails = { name: '', date: '', time: '', occasion: '', area: '', dietary: '', kitchen: '', extras: [] }

export default function PrivateDiningBuilder() {
  const [service, setService] = useState<DiningService>('signature')
  const [guests, setGuests] = useState(String(config.minGuests))
  const [zone, setZone] = useState('3')
  const [dishIds, setDishIds] = useState<number[]>([...DINING_PRESETS[0].dishIds])
  const [details, setDetails] = useState<DiningDetails>(defaultDetails)
  const [search, setSearch] = useState('')
  const [cuisine, setCuisine] = useState('All cuisines')
  const [course, setCourse] = useState('All courses')
  const [tier, setTier] = useState('All dish styles')
  const [showNew, setShowNew] = useState(false)
  const [visibleCount, setVisibleCount] = useState(8)
  const [feedback, setFeedback] = useState('')
  const [inView, setInView] = useState(false)
  const [ticketVisible, setTicketVisible] = useState(false)
  const section = useRef<HTMLElement>(null)
  const ticket = useRef<HTMLElement>(null)
  const ticketHeading = useRef<HTMLHeadingElement>(null)
  const input = { service, guests: Number(guests), zone, dishIds }
  const quote = calculateDining(input)
  const validDate = validDiningDate(details.date)
  const whatsappHref = diningWhatsApp(input, details)
  const selectedPackage = DINING_PACKAGES.find(p => p.id === service)!

  useEffect(() => {
    const current = section.current
    const summary = ticket.current
    if (!current || !summary) return
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting))
    const ticketObserver = new IntersectionObserver(([entry]) => setTicketVisible(entry.isIntersecting), { threshold: 0.1 })
    observer.observe(current)
    ticketObserver.observe(summary)
    return () => { observer.disconnect(); ticketObserver.disconnect() }
  }, [])
  useEffect(() => {
    document.body.classList.toggle('private-dining-active', inView)
    return () => document.body.classList.remove('private-dining-active')
  }, [inView])

  const filtered = DINING_DISHES.filter(d => d.course !== 'Breakfast'
    && (showNew || d.status === 'live')
    && (cuisine === 'All cuisines' || d.cuisine === cuisine)
    && (course === 'All courses' || d.course === course)
    && (tier === 'All dish styles' || d.tier === tier)
    && `${d.name} ${d.cuisine}`.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()))
  const filterChanged = () => setVisibleCount(8)
  function toggleDish(id: number) {
    if (dishIds.includes(id)) {
      setDishIds(dishIds.filter(item => item !== id))
      setFeedback('Dish removed from your menu.')
    } else if (dishIds.length >= config.maxDishes) {
      setFeedback(`Your menu has ${config.maxDishes} dishes. Remove one before adding another.`)
    } else {
      setDishIds([...dishIds, id])
      setFeedback(`${DINING_DISHES.find(d => d.id === id)!.name} added to your menu.`)
    }
  }
  function updateDetail(key: keyof Omit<DiningDetails, 'extras'>, value: string) {
    setDetails(previous => ({ ...previous, [key]: value }))
  }
  function reviewMenu() {
    ticket.current?.scrollIntoView({ block: 'start', behavior: 'auto' })
    ticketHeading.current?.focus({ preventScroll: true })
  }

  return <section id="dinner-calculator" className="dining-builder" ref={section} aria-labelledby="dining-title">
    <div className="dining-shell">
      <header className="dining-intro">
        <div><p className="dining-eyebrow">Your table. Your menu. Your private chef.</p>
          <h2 id="dining-title">An evening made<br/><em>for your guests.</em></h2>
          <p>Choose your private dinner package, make the menu yours and see your estimate. Your chef shops, cooks, serves and leaves the kitchen clean.</p>
          <div className="dining-intro-facts"><span><Users size={16} aria-hidden="true"/> {config.minGuests}–{config.maxGuests} guests</span><span><Check size={16} aria-hidden="true"/> Ingredients included</span><span><MessageCircle size={16} aria-hidden="true"/> Request on WhatsApp</span></div>
        </div>
        <figure><img src="/images/private-chef-dubai-evening.webp" alt="Private chef plating dinner in a villa kitchen" width="1280" height="720" loading="lazy"/><figcaption>A private dinner, planned around your table. Experience concept shown.</figcaption></figure>
      </header>

      <div className="dining-inclusions"><p><strong>Included in your dinner:</strong> ingredients, shopping, cooking, plating, table service and kitchen clean-up.</p><p>Your estimate adds the chef evening fee, required assistants, area transport and {config.vat * 100}% VAT. Drinks, tableware, linen and any other extras are quoted separately.</p></div>

      <div className="dining-layout">
        <div className="dining-controls">
          <fieldset className="dining-step"><legend><span>01</span> Choose your chef package</legend>
            <p className="dining-help">The evening fee covers your chef. Your chosen dishes are added per guest.</p>
            <div className="dining-packages" role="group" aria-label="Dinner chef package">
              {DINING_PACKAGES.map(p => <button type="button" key={p.id} data-service={p.id} aria-pressed={service === p.id} onClick={() => { setService(p.id); setFeedback(`${p.name} selected. Your menu has been kept; any dishes needing a different chef are flagged below.`) }}>
                <span className="dining-package-title">{p.name}<span className="dining-radio" aria-hidden="true">{service === p.id && <Check size={13}/>}</span></span>
                <span className="dining-package-tagline">{p.tagline}</span>
                <span className="dining-package-price">{p.id === 'master' ? `From ${money(config.eveningFee.master.base)}` : money(config.eveningFee[p.id])}</span>
                <span className="dining-package-unit">chef evening fee · before VAT</span>
                <span className="dining-package-description">{p.description}</span>
                {p.id === 'master' && <span className="dining-quote-label">Quoted on enquiry · availability to confirm</span>}
              </button>)}
            </div>
          </fieldset>

          <fieldset className="dining-step"><legend><span>02</span> Set your table</legend>
            <div className="dining-event-grid">
              <div><label htmlFor="dining-guests">Number of guests</label><div className="dining-stepper">
                <button type="button" aria-label="Remove one guest" disabled={Number(guests) <= config.minGuests || !Number.isInteger(Number(guests))} onClick={() => setGuests(String(Number(guests) - 1))}><Minus size={17}/></button>
                <input id="dining-guests" type="number" min={config.minGuests} max={config.maxGuests} step="1" value={guests} onChange={e => setGuests(e.target.value)} aria-describedby="dining-guests-help" aria-invalid={!Number.isInteger(Number(guests)) || Number(guests) < config.minGuests || Number(guests) > config.maxGuests}/>
                <button type="button" aria-label="Add one guest" disabled={Number(guests) >= config.maxGuests || !Number.isInteger(Number(guests))} onClick={() => setGuests(String(Math.max(config.minGuests, Number(guests) + 1)))}><Plus size={17}/></button>
              </div><p className="dining-help" id="dining-guests-help">Minimum {config.minGuests} guests, including for bespoke requests.</p></div>
              <div><label htmlFor="dining-zone">Your area in Dubai</label><select id="dining-zone" value={zone} onChange={e => setZone(e.target.value)}>{config.transport.map(z => <option key={z.id} value={z.id}>{z.label} · {money(z.fee)}</option>)}</select><p className="dining-help">Travel is included in your estimate. Exact address confirmed before booking.</p></div>
            </div>
            <p className="dining-help">One assistant from {config.assistantThresholds[1].guests} guests; two from {config.assistantThresholds[0].guests}. <Link to="/catering-dubai">Hosting more than {config.maxGuests}? Ask about catering.</Link></p>
          </fieldset>

          <fieldset className="dining-step"><legend><span>03</span> Make the menu yours</legend>
            <p className="dining-help">Choose {config.minDishes}–{config.maxDishes} dishes, including a main. Each dish is prepared for every guest. Dish prices are before VAT; ingredients are included.</p>
            <div className="dining-presets" aria-label="Suggested dinner menus">{DINING_PRESETS.map(p => <button key={p.name} type="button" aria-pressed={service === p.service && p.dishIds.length === dishIds.length && p.dishIds.every(id => dishIds.includes(id))} onClick={() => { setDishIds([...p.dishIds]); setService(p.service); setFeedback(`${p.name} menu selected. You can swap any dish.`) }}>{p.name}</button>)}<button type="button" onClick={() => { setDishIds([]); setFeedback('Your menu is empty. Choose three to five dishes, including a main.') }}>Start my own</button></div>
            <div className="dining-filters">
              <div className="dining-search"><label htmlFor="dining-search">Find a dish</label><div><Search size={17} aria-hidden="true"/><input id="dining-search" type="search" value={search} placeholder="Try biryani, pasta or French…" onChange={e => { setSearch(e.target.value); filterChanged() }}/></div></div>
              <div><label htmlFor="dining-cuisine">Cuisine</label><select id="dining-cuisine" value={cuisine} onChange={e => { setCuisine(e.target.value); filterChanged() }}><option>All cuisines</option>{cuisines.map(c => <option key={c}>{c}</option>)}</select></div>
              <div><label htmlFor="dining-course">Course</label><select id="dining-course" value={course} onChange={e => { setCourse(e.target.value); filterChanged() }}>{['All courses', 'Starter', 'Main', 'Side', 'Dessert'].map(c => <option key={c}>{c}</option>)}</select></div>
              <div><label htmlFor="dining-tier">Dish style</label><select id="dining-tier" value={tier} onChange={e => { setTier(e.target.value); filterChanged() }}><option>All dish styles</option>{Object.entries(DISH_TIERS).map(([key, value]) => <option key={key} value={key}>{value}</option>)}</select></div>
            </div>
            <div className="dining-results-line"><p role="status">{filtered.length} dishes · {dishIds.length} selected</p><label><input type="checkbox" checked={showNew} onChange={e => { setShowNew(e.target.checked); filterChanged() }}/> Preview new dishes</label></div>
            <p className="dining-feedback" role="status" aria-live="polite">{feedback || 'Start with a suggested menu, then swap dishes to suit your guests.'}</p>
            <div className="dining-dish-grid">
              {filtered.slice(0, visibleCount).map(dish => {
                const chosen = dishIds.includes(dish.id)
                const restriction = dishRestriction(dish, service)
                const price = dishPrice(dish)
                return <article className={`dining-dish ${chosen ? 'is-selected' : ''}`} key={dish.id} data-dish-id={dish.id}>
                  <div className="dining-dish-labels"><span className={`dining-tier dining-tier-${dish.tier}`}>{DISH_TIERS[dish.tier]}</span><span>{dish.course}</span></div>
                  <h4>{dish.name}</h4><p className="dining-dish-cuisine">{dish.cuisine}</p>
                  {dish.status === 'proposed_addition' ? <p className="dining-dish-price">New · coming soon</p> : <p className="dining-dish-price">{price === null ? 'Market price — confirmed on booking' : <>{money(price)} <span>a guest</span></>}</p>}
                  {dish.requiresSignoff && <p className="dining-dish-note">Executive chef with senior sign-off, or a Master chef.</p>}
                  {dish.minChefLevel === 5 && <p className="dining-dish-note">Specialist itamae required. Subject to availability.</p>}
                  <button type="button" disabled={!chosen && !!restriction} aria-pressed={chosen} aria-label={`${chosen ? 'Remove' : 'Add'} ${dish.name}`} onClick={() => toggleDish(dish.id)}>{chosen ? <><Check size={16}/> Added · remove</> : restriction ? restriction : <><Plus size={16}/> Add to my menu</>}</button>
                </article>
              })}
            </div>
            {filtered.length === 0 && <p className="dining-empty">No dishes match those filters. Try another cuisine or clear your search.</p>}
            {filtered.length > visibleCount && <button type="button" className="dining-more" onClick={() => setVisibleCount(visibleCount + 12)}>Show more dishes <Plus size={16}/></button>}
          </fieldset>

          <fieldset className="dining-step"><legend><span>04</span> Tell us about the evening</legend>
            <p className="dining-help">Add the details you know. Your request goes to WhatsApp for availability and menu confirmation.</p>
            <div className="dining-detail-grid">
              <div><label htmlFor="dining-name">Your name <span>(optional)</span></label><input id="dining-name" autoComplete="given-name" maxLength={100} value={details.name} onChange={e => updateDetail('name', e.target.value)}/></div>
              <div><label htmlFor="dining-occasion">Occasion <span>(optional)</span></label><input id="dining-occasion" placeholder="Birthday, dinner with friends…" maxLength={150} value={details.occasion} onChange={e => updateDetail('occasion', e.target.value)}/></div>
              <div><label htmlFor="dining-date">Preferred date <span>(optional)</span></label><input id="dining-date" type="date" min={dubaiToday()} value={details.date} onChange={e => updateDetail('date', e.target.value)} aria-invalid={!validDate}/>{!validDate && <p className="dining-error" role="alert">Choose today or a future date in Dubai.</p>}</div>
              <div><label htmlFor="dining-time">Serving time <span>(Dubai time, optional)</span></label><input id="dining-time" type="time" value={details.time} onChange={e => updateDetail('time', e.target.value)}/></div>
              <div className="dining-wide"><label htmlFor="dining-location">Community or building <span>(optional)</span></label><input id="dining-location" placeholder="Your villa community or apartment building" maxLength={200} value={details.area} onChange={e => updateDetail('area', e.target.value)}/></div>
              <div className="dining-wide"><label htmlFor="dining-dietary">Allergies, dietary needs & menu changes</label><textarea id="dining-dietary" rows={3} maxLength={1000} placeholder="Tell us about allergies, halal or vegetarian requirements, children or alternative portions. Write ‘none’ if there are no requirements." value={details.dietary} onChange={e => updateDetail('dietary', e.target.value)}/><p className="dining-help">Dietary suitability and ingredient substitutions are confirmed with your chef before booking.</p></div>
              <div className="dining-wide"><label htmlFor="dining-kitchen">Kitchen & equipment <span>(optional)</span></label><textarea id="dining-kitchen" rows={2} maxLength={500} placeholder="Oven, hob, available equipment and anything useful for your chef to know." value={details.kitchen} onChange={e => updateDetail('kitchen', e.target.value)}/></div>
            </div>
            <p className="dining-extras-title">Would you like a separate quote for any extras?</p><div className="dining-extras">{extras.map(extra => <label key={extra}><input type="checkbox" checked={details.extras.includes(extra)} onChange={e => setDetails(previous => ({ ...previous, extras: e.target.checked ? [...previous.extras, extra] : previous.extras.filter(item => item !== extra) }))}/>{extra}</label>)}</div>
          </fieldset>
        </div>

        <aside className="dining-ticket" ref={ticket} aria-labelledby="dining-ticket-title" data-testid="dining-ticket">
          <div className="dining-ticket-heading"><ChefHat size={22} aria-hidden="true"/><p className="dining-eyebrow">Your private dinner</p></div>
          <h3 id="dining-ticket-title" ref={ticketHeading} tabIndex={-1}>{selectedPackage.name} at your table</h3>
          <p className="dining-ticket-sub">{Number.isInteger(Number(guests)) && Number(guests) >= config.minGuests && Number(guests) <= config.maxGuests ? `${guests} guests` : `${config.minGuests}–${config.maxGuests} guests required`} · {quote.dishes.length} dishes</p>
          {quote.total !== null && <div className="dining-total" aria-live="polite" aria-atomic="true"><span>Estimated total · incl. VAT</span><strong>{money(quote.total)}</strong><p>{money(quote.perGuest!)} per guest including VAT</p></div>}
          {quote.dishes.length ? <ul className="dining-selected">{quote.dishes.map(d => <li key={d.id}><div><span>{d.name}</span><small>{dishRestriction(d, service) || (d.requiresSignoff ? 'Chef sign-off required' : d.needsCostConfirmation || d.marketPrice ? 'Market price to confirm' : d.course)}</small></div><button type="button" aria-label={`Remove ${d.name} from my menu`} onClick={() => toggleDish(d.id)}><X size={17}/></button></li>)}</ul> : <p className="dining-empty">Your table is waiting. Choose your dishes to see an estimate.</p>}
          {quote.errors.length > 0 && <div className="dining-validation" role="status"><p>Before you send your request:</p><ul>{quote.errors.map(error => <li key={error}>{error}</li>)}</ul></div>}
          {quote.errors.length === 0 && quote.quoteRequired && <div className="dining-manual"><strong>A personal quote for this menu</strong><p>We’ll confirm the complete price and chef availability on WhatsApp.</p><ul>{quote.reasons.map(reason => <li key={reason}>{reason}</li>)}</ul>{service === 'master' && <p>Master chef evening fee from {money(config.eveningFee.master.base)} before VAT. This is not the total event price.</p>}</div>}
          {quote.total !== null && <details className="dining-cost-details"><summary>How your estimate is calculated</summary>
            <dl className="dining-breakdown"><div><dt>Menu & ingredients</dt><dd>{money(quote.menuTotal!)}</dd></div><div><dt>{selectedPackage.name} chef</dt><dd>{money(quote.chefFee!)}</dd></div><div><dt>Assistants ({quote.assistants})</dt><dd>{money(quote.assistantTotal)}</dd></div><div><dt>Area transport</dt><dd>{money(quote.zone!.fee)}</dd></div><div className="dining-subtotal"><dt>Subtotal</dt><dd>{money(quote.beforeVat!)}</dd></div><div><dt>{config.vat * 100}% VAT</dt><dd>{money(quote.vat!)}</dd></div></dl>
          </details>}
          <p className="dining-ticket-note">Drinks, tableware, linen and any requested extras are quoted separately.</p>
          <p className="dining-ticket-note">{DINING_ESTIMATE_NOTE}</p>
          {whatsappHref ? <a className="dining-send" href={whatsappHref} target="_blank" rel="noopener noreferrer" data-track="whatsapp" data-cta-location="private-dinner-calculator"><MessageCircle size={19}/> Request this package on WhatsApp <ArrowRight size={17}/></a> : <button className="dining-send" type="button" disabled>Complete your menu to continue</button>}
          {!validDate && <p className="dining-error">Update the date before sending your request.</p>}
          <p className="dining-handoff-note">Opens WhatsApp with your full menu and details. You review and send the message. Your booking is confirmed separately in writing.</p>
        </aside>
      </div>
      <p className="dining-other-service">Looking for regular cooking at home? <Link to="/private-chef-dubai/pricing#calculator">Compare cooking visits</Link> or <Link to="/full-time-private-chef-dubai">explore a long-term household chef</Link>.</p>
    </div>
    {inView && !ticketVisible && <div className="dining-mobile-bar" data-testid="dining-mobile-bar"><div><span>{quote.total === null ? 'Your dinner package' : 'Estimate · incl. VAT'}</span><strong>{quote.total === null ? (quote.errors.length ? 'Complete your menu' : 'Personal quote') : money(quote.total)}</strong><small>Estimate · confirmed in writing</small></div><button type="button" onClick={reviewMenu}>Review & send <ArrowRight size={17}/></button></div>}
  </section>
}
