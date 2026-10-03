import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Check, ChefHat, ClipboardList, MessageCircle, Truck, UtensilsCrossed } from 'lucide-react'
import { DINING_CONFIG as config, DINING_ESTIMATE_NOTE } from '@/content/privateDiningConfig'
import { bookingErrors, calculateDining, compatible, DIET_GROUPS, DIET_LABELS, DINING_DISHES, diningWhatsApp, dishPrice, earliestDiningDate, emptyDetails, menuSlots, money, resolvedMenu, suggestedMenu, type Diet, type DiningDetails, type DiningInput, type DiningService } from '@/lib/privateDining'
import '@/styles/private-dining-builder.css'

const stageNames = ['Your gathering', 'Your menu', 'Drinks & extras', 'Review & send']
const serviceIcons = { delivery: Truck, home: ChefHat, buffet: UtensilsCrossed }
const initialInput: DiningInput = { service: 'home', guests: 6, area: 'dubai-marina', cuisine: 'indian', dishCount: 4, dishIds: suggestedMenu('indian', 4), dietary: { vegetarian: 0, vegan: 0, other: 0 }, alternatives: { vegetarian: [], vegan: [], other: [] }, drinkIds: [] }

export default function PrivateDiningBuilder() {
  const [input, setInput] = useState<DiningInput>(initialInput)
  const [details, setDetails] = useState<DiningDetails>(emptyDetails)
  const [step, setStep] = useState(0)
  const [attempted, setAttempted] = useState(false)
  const [notice, setNotice] = useState('')
  const [inView, setInView] = useState(false)
  const section = useRef<HTMLElement>(null)
  const panel = useRef<HTMLDivElement>(null)
  const quote = calculateDining(input)
  const errors = bookingErrors(input, details)
  const href = diningWhatsApp(input, details)
  const slots = menuSlots(input.dishCount)
  const service = config.services.find(s => s.id === input.service)!
  const dietaryTotal = DIET_GROUPS.reduce((n, d) => n + input.dietary[d], 0)
  const update = <K extends keyof DiningInput>(key: K, value: DiningInput[K]) => setInput(previous => ({ ...previous, [key]: value }))
  const detail = <K extends keyof DiningDetails>(key: K, value: DiningDetails[K]) => setDetails(previous => ({ ...previous, [key]: value }))
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting))
    if (section.current) observer.observe(section.current)
    return () => observer.disconnect()
  }, [])
  useEffect(() => {
    document.body.classList.toggle('private-dining-active', inView)
    return () => document.body.classList.remove('private-dining-active')
  }, [inView])
  function navigate(next: number) {
    setStep(next)
    panel.current?.scrollIntoView({ behavior: 'auto', block: 'start' })
    panel.current?.focus({ preventScroll: true })
  }
  function chooseService(id: DiningService) {
    const minimum = config.services.find(s => s.id === id)!.minGuests
    setInput(previous => ({ ...previous, service: id, guests: Math.max(minimum, previous.guests || 0) }))
    setNotice(`Service updated. Minimum ${minimum} guests.`)
  }
  function changeMenu(cuisine: string, count: number) {
    setInput(previous => ({ ...previous, cuisine, dishCount: count, dishIds: suggestedMenu(cuisine, count), alternatives: { vegetarian: [], vegan: [], other: [] } }))
    setNotice('A suggested menu is ready. You can change every dish. Please review dietary replacements after changing the cuisine or menu size.')
  }
  function menuFields(diet: Diet) {
    const selected = resolvedMenu(input, diet)
    return <div className="dining-dish-grid">{slots.map((slot, i) => {
      const d = selected[i]
      const base = DINING_DISHES.find(d => d.id === input.dishIds[i])
      const inherit = diet !== 'standard' && diet !== 'other' && base && compatible(base, diet)
      const choices = DINING_DISHES.filter(d => d.active && d.cuisine === input.cuisine && d.course === slot.course && compatible(d, diet))
      return <div className="dining-dish-field" key={`${diet}-${i}`}>
        <label htmlFor={`dish-${diet}-${i}`}><span>{String(i + 1).padStart(2, '0')}</span>{slot.label}</label>
        <select id={`dish-${diet}-${i}`} value={diet === 'standard' ? input.dishIds[i] || '' : input.alternatives[diet][i] || ''} onChange={e => {
          if (diet === 'standard') { const ids = [...input.dishIds]; ids[i] = e.target.value; update('dishIds', ids) }
          else { const ids = [...input.alternatives[diet]]; ids[i] = e.target.value; update('alternatives', { ...input.alternatives, [diet]: ids }) }
        }}>
          {diet !== 'standard' && <option value="">{inherit ? `Same as main menu: ${base.name}` : 'Choose a replacement…'}</option>}
          {choices.map(choice => <option key={choice.id} value={choice.id} disabled={selected.some((d, index) => index !== i && d?.id === choice.id)}>{choice.name} · {dishPrice(choice) === null ? 'Personal quote' : money(dishPrice(choice)!)}</option>)}
        </select>
        <p>{d ? <><span className={`dining-diet-tag ${d.diet}`}>{d.diet === 'standard' ? 'Contains meat or fish' : d.diet === 'vegan' ? 'Vegan recipe' : 'Vegetarian recipe'}</span><span>{dishPrice(d) === null ? 'Specialist dish · price to confirm' : `${money(dishPrice(d)!)} / guest before VAT`}</span></> : 'Choose an alternative for this group.'}</p>
      </div>
    })}</div>
  }

  return <section id="dinner-calculator" className="dining-builder" ref={section} aria-labelledby="dining-title">
    <div className="dining-shell">
      <header className="dining-intro"><div>
        <p className="dining-eyebrow">The myCHEF food & chef calculator</p>
        <h2 id="dining-title">Good food.<br/><em>Your way.</em></h2>
        <p>A dinner at home, food delivered, or a generous buffet. Choose your menu and see your estimate in moments.</p>
        <div className="dining-facts"><span><Check size={15}/> Chef included</span><span><Check size={15}/> Dietary alternatives</span><span><Check size={15}/> Book 5 days ahead</span></div>
      </div><figure><img src="/images/private-chef-dubai-evening.webp" alt="A chef preparing an evening meal in a villa kitchen" width="1280" height="720" loading="lazy"/><figcaption>Made around your guests, your menu and your occasion.</figcaption></figure></header>
      <div className="dining-layout">
        <div className="dining-workspace" ref={panel} tabIndex={-1}>
          <nav className="dining-progress" aria-label="Calculator steps">{stageNames.map((name, i) => <button key={name} type="button" aria-current={step === i ? 'step' : undefined} onClick={() => navigate(i)}><span>{i < step ? <Check size={14}/> : i + 1}</span><strong>{name}</strong></button>)}</nav>
          <div className="dining-panel">
            {step === 0 && <>
              <div className="dining-step-heading"><p className="dining-eyebrow">01 / Your gathering</p><h3>How shall we serve you?</h3><p>We’ll include the right chef and team automatically.</p></div>
              <div className="dining-services" role="group" aria-label="Service type">{config.services.map(s => { const Icon = serviceIcons[s.id as DiningService]; return <button key={s.id} type="button" aria-pressed={input.service === s.id} onClick={() => chooseService(s.id as DiningService)}><Icon size={26} strokeWidth={1.4}/><strong>{s.name}</strong><span>{s.description}</span><small>From {s.minGuests} guests</small><span className="dining-service-check">{input.service === s.id && <Check size={14}/>}</span></button> })}</div>
              <div className="dining-fields dining-two"><div><label htmlFor="dining-guests">How many guests?</label><input id="dining-guests" type="number" min={service.minGuests} step="1" value={input.guests || ''} onChange={e => update('guests', Number(e.target.value))}/><p>Minimum {service.minGuests} for {service.shortName.toLowerCase()}.</p></div><div><label htmlFor="dining-area">Where in Dubai?</label><select id="dining-area" value={input.area} onChange={e => update('area', e.target.value)}><option value="">Choose an area…</option>{config.areas.map(a => <option key={a.id} value={a.id}>{a.name} · {money(config.transport.find(z => z.id === a.zone)!.fee)}</option>)}</select><p>Transport uses your area’s fixed rate.</p></div></div>
              <fieldset className="dining-diet-counts"><legend>Any dietary needs?</legend><p>Count each person once. Vegan guests should be entered under vegan only.</p><div className="dining-three">{DIET_GROUPS.map(d => <div key={d}><label htmlFor={`count-${d}`}>{DIET_LABELS[d]}</label><input id={`count-${d}`} type="number" min="0" max={input.guests} step="1" value={input.dietary[d]} onChange={e => update('dietary', { ...input.dietary, [d]: Number(e.target.value) })}/></div>)}</div><p>{Math.max(0, input.guests - dietaryTotal)} main-menu guests · {dietaryTotal} dietary-menu guests. Alternatives come after your main menu.</p></fieldset>
              {input.dietary.other > 0 && <div className="dining-fields"><label htmlFor="diet-notes-early">What do these guests need?</label><textarea id="diet-notes-early" rows={2} value={details.dietaryNotes} onChange={e => detail('dietaryNotes', e.target.value)} placeholder="For example: two gluten-free guests, one nut allergy"/><p>The chef must confirm ingredient suitability and cross-contact requirements.</p></div>}
              <div className="dining-fields dining-two"><div><label htmlFor="dining-date">Event date</label><input id="dining-date" type="date" min={earliestDiningDate()} value={details.date} onInput={e => detail('date', e.currentTarget.value)} onChange={e => detail('date', e.target.value)}/><p>At least 5 calendar days ahead, Dubai time.</p></div><div><label htmlFor="dining-time">Serving time <span>(optional)</span></label><input id="dining-time" type="time" value={details.time} onInput={e => detail('time', e.currentTarget.value)} onChange={e => detail('time', e.target.value)}/><p>We’ll confirm the preparation or delivery window.</p></div></div>
              {input.service === 'home' && <label className="dining-kitchen"><input type="checkbox" checked={details.kitchen} onChange={e => detail('kitchen', e.target.checked)}/><span><strong>A fully equipped kitchen is available</strong>{config.kitchenConfirmation}</span></label>}
              <p className="dining-small">{service.inclusions}</p>
            </>}
            {step === 1 && <>
              <div className="dining-step-heading"><p className="dining-eyebrow">02 / Your menu</p><h3>One cuisine. Your favourites.</h3><p>Start with our suggested dishes, then make the menu yours. All dish prices include ingredients and preparation.</p></div>
              <div className="dining-cuisines" role="group" aria-label="Choose one cuisine">{config.cuisines.map(c => <button type="button" key={c.id} aria-pressed={input.cuisine === c.id} onClick={() => changeMenu(c.id, input.dishCount)}>{c.name}</button>)}</div>
              <div className="dining-fields dining-menu-size"><div><label htmlFor="dish-count">How many dishes?</label><select id="dish-count" value={input.dishCount} onChange={e => changeMenu(input.cuisine, Number(e.target.value))}>{Array.from({length:9}, (_, i) => <option key={i} value={i + 3}>{i + 3} dishes</option>)}</select></div><p>Starters, mains, sides and desserts. These are menu dishes; buffet and delivery selections are served together, rather than as plated courses.</p></div>
              <h4>Main menu <span>{Math.max(0, input.guests - dietaryTotal)} guests</span></h4>
              {menuFields('standard')}
              {DIET_GROUPS.filter(d => input.dietary[d] > 0).map(d => <div className="dining-alternatives" key={d}><h4>{DIET_LABELS[d]} alternatives <span>{input.dietary[d]} {input.dietary[d] === 1 ? 'guest' : 'guests'}</span></h4><p>{d === 'other' ? 'Choose each replacement and describe the requirements. Suitability is confirmed by the chef.' : 'Suitable main-menu dishes are carried over. Choose replacements for the others, or change any dish.'} These portions replace the main menu for this group.</p>{menuFields(d)}</div>)}
              <p className="dining-small">Recipes can contain allergens. Dietary labels describe the intended recipe, not an allergen-free kitchen. Please include any allergies in your request.</p>
            </>}
            {step === 2 && <>
              <div className="dining-step-heading"><p className="dining-eyebrow">03 / Drinks & extras</p><h3>A little something extra?</h3><p>Drinks update your estimate. Everything else is a separate quote request.</p></div>
              <h4>Drinks for all {input.guests} guests</h4>
              <div className="dining-drinks">{config.drinks.map(d => <label key={d.id} className={input.drinkIds.includes(d.id) ? 'is-selected' : ''}><input type="checkbox" checked={input.drinkIds.includes(d.id)} onChange={e => update('drinkIds', e.target.checked ? [...input.drinkIds, d.id] : input.drinkIds.filter(id => id !== d.id))}/><span><strong>{d.name}</strong><small>{d.serving}</small></span><b>{money(d.price)}<small>/ guest</small></b></label>)}</div>
              <p className="dining-small">Each selection serves every guest once. Prices before VAT. Glassware, a staffed bar and unlimited refills are separate. Delivery drinks arrive ready to serve; tea and coffee in insulated containers.</p>
              <div className="dining-extras"><h4>Furniture & table essentials <span>Separate quote</span></h4><p>Need anything for your guests to sit, serve or eat? Leave unchecked for “No thanks”.</p><div className="dining-checks">{config.equipment.map(e => <label key={e}><input type="checkbox" checked={details.equipment.includes(e)} onChange={event => detail('equipment', event.target.checked ? [...details.equipment, e] : details.equipment.filter(item => item !== e))}/>{e}</label>)}</div>
                <div className="dining-fields dining-two"><div><label htmlFor="dining-theme">Decoration theme</label><select id="dining-theme" value={details.theme} onChange={e => detail('theme', e.target.value)}>{config.themes.map(t => <option key={t}>{t}</option>)}</select></div><div><label htmlFor="dining-cake">Celebration cake</label><select id="dining-cake" value={details.cake} onChange={e => detail('cake', e.target.value)}>{config.cakes.map(t => <option key={t}>{t}</option>)}</select></div></div><p className="dining-small">No prices are added for equipment, decorations or cake. We’ll confirm sizes, design and a separate quote with you.</p>
              </div>
            </>}
            {step === 3 && <>
              <div className="dining-step-heading"><p className="dining-eyebrow">04 / Review & send</p><h3>Let’s make it happen.</h3><p>Send your complete plan on WhatsApp. Our team will confirm availability and the details.</p></div>
              <div className="dining-review"><div><strong>{service.shortName}</strong><span>{input.guests} guests · {config.cuisines.find(c => c.id === input.cuisine)?.name} · {input.dishCount} dishes</span><span>{quote.area?.name} · {details.date || 'Choose an event date'}</span></div><button type="button" onClick={() => navigate(0)}>Edit gathering</button></div>
              <details className="dining-menu-review"><summary>Review all menus and extras</summary>{quote.groups.map(g => <div key={g.diet}><h4>{DIET_LABELS[g.diet]} · {g.count} guests</h4><ol>{g.dishes.map((d, i) => <li key={i}>{slots[i].label}: {d?.name || 'Choose a dish'}</li>)}</ol></div>)}<p><strong>Drinks:</strong> {quote.drinks.map(d => d?.name).join(', ') || 'None'}</p><p><strong>Equipment:</strong> {details.equipment.join(', ') || 'No thanks'}</p><p><strong>Decoration:</strong> {details.theme} · <strong>Cake:</strong> {details.cake}</p></details>
              <div className="dining-fields dining-two"><div><label htmlFor="dining-name">Your name</label><input id="dining-name" autoComplete="name" value={details.name} onChange={e => detail('name', e.target.value)} required/></div><div><label htmlFor="dining-whatsapp">Your WhatsApp number</label><input id="dining-whatsapp" type="tel" autoComplete="tel" placeholder="+971 50 123 4567" value={details.whatsapp} onChange={e => detail('whatsapp', e.target.value)} required/></div></div>
              <div className="dining-fields"><label htmlFor="dining-address">Building or address <span>(optional for now)</span></label><input id="dining-address" value={details.address} onChange={e => detail('address', e.target.value)}/><label htmlFor="dining-allergies">Allergies & dietary details <span>{input.dietary.other ? '(required for other dietary needs)' : '(optional)'}</span></label><textarea id="dining-allergies" rows={2} value={details.dietaryNotes} onChange={e => detail('dietaryNotes', e.target.value)} placeholder="Tell us who needs what, including any allergies."/><label htmlFor="dining-notes">Anything else we should know? <span>(optional)</span></label><textarea id="dining-notes" rows={3} value={details.notes} onChange={e => detail('notes', e.target.value)} placeholder="Occasion, cake message, decoration ideas, access instructions…"/></div>
              {(attempted || step === 3) && (quote.errors.length > 0 || errors.length > 0) && <div className="dining-errors" role="status"><strong>Before sending, please complete:</strong><ul>{[...quote.errors, ...errors].map(e => <li key={e}>{e}</li>)}</ul><button type="button" onClick={() => navigate(0)}>Return to gathering details</button></div>}
              <p className="dining-small">Your details are placed into a WhatsApp message. You review and send it there. {DINING_ESTIMATE_NOTE}</p>
            </>}
            <p className="dining-announcement" aria-live="polite">{notice}</p>
            <div className="dining-stage-actions">{step > 0 && <button type="button" className="dining-back" onClick={() => navigate(step - 1)}><ArrowLeft size={16}/> Back</button>}{step < 3 ? <button type="button" className="dining-next" onClick={() => navigate(step + 1)}>{stageNames[step + 1]} <ArrowRight size={17}/></button> : href ? <a className="dining-next" href={href} target="_blank" rel="noopener noreferrer"><MessageCircle size={18}/> Send request on WhatsApp</a> : <button className="dining-next" type="button" onClick={() => setAttempted(true)} aria-disabled="true">Complete details to send</button>}</div>
          </div>
        </div>
        <aside className="dining-ticket" aria-labelledby="dining-summary-title">
          <div className="dining-ticket-heading"><ClipboardList size={22} strokeWidth={1.5}/><span>Your gathering</span></div>
          <h3 id="dining-summary-title">A plan. A price.</h3><p className="dining-ticket-meta">{service.shortName} · {input.guests || 0} guests<br/>{config.cuisines.find(c => c.id === input.cuisine)?.name} · {input.dishCount} dishes</p>
          <div className="dining-total" aria-live="polite" aria-atomic="true"><span>Estimated total, including VAT</span><strong>{quote.total === null ? quote.quoteRequired ? 'Personal quote' : 'Complete your menu' : money(quote.total)}</strong>{quote.perGuest !== null && <small>{money(quote.perGuest)} per guest</small>}</div>
          {quote.total !== null && <dl className="dining-breakdown"><div><dt>Food for all groups</dt><dd>{money(quote.menuTotal!)}</dd></div><div><dt>{input.service === 'delivery' ? 'Chef preparation' : 'Chef, automatically included'}</dt><dd>{input.service === 'delivery' ? 'In food price' : money(quote.chefFee)}</dd></div>{input.service !== 'delivery' && <div><dt>{quote.assistants} assistant{quote.assistants === 1 ? '' : 's'}</dt><dd>{money(quote.assistantTotal)}</dd></div>}<div className="dining-subtotal"><dt>Food & chef team</dt><dd>{money(quote.foodAndChef!)}</dd></div><div><dt>Selected drinks</dt><dd>{money(quote.drinksTotal)}</dd></div><div><dt>Area transport</dt><dd>{money(quote.zone!.fee)}</dd></div><div><dt>VAT (5%)</dt><dd>{money(quote.vat!)}</dd></div></dl>}
          {quote.errors.length > 0 && <div className="dining-ticket-errors" role="status">{quote.errors.map(e => <p key={e}>{e}</p>)}</div>}
          {quote.reasons.map(e => <p className="dining-small" key={e}>{e}</p>)}
          <div className="dining-ticket-note"><Check size={16}/><p>Food and the required chef team are included. Selected drinks, transport and VAT are shown above. Equipment, decoration and cake are separate quotes.</p></div>
          <button type="button" className="dining-review-button" onClick={() => navigate(3)}>Review & send <ArrowRight size={16}/></button>
          <p className="dining-small">No payment now. Final availability and price confirmed by our team.</p>
        </aside>
      </div>
    </div>
    {inView && <div className="dining-mobile-total"><div><small>Estimate incl. VAT</small><strong>{quote.total === null ? 'Complete your menu' : money(quote.total)}</strong></div><button type="button" onClick={() => navigate(3)}>Review <ArrowRight size={15}/></button></div>}
  </section>
}
