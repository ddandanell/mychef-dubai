import { useState } from 'react'
import { Link } from 'react-router'
import { MEAL_COMPLEXITIES, MEMBER_NOTE, PRICE_NOTE, fmt, mealPackPrice } from '@/content/privateChefPricing'
import { buildWhatsAppLink } from '@/lib/whatsapp'

/** A meal-count estimate, not a second charge on top of the visit rate. */
export default function ChefMealPacks() {
  const [size, setSize] = useState(30)
  const [signature, setSignature] = useState(10)
  const [special, setSpecial] = useState(5)
  const [member, setMember] = useState(false)
  const everyday = size - signature - special
  const total = mealPackPrice([everyday, signature, special], member)
  const message = `Hi myCHEF, I would like a ${size}-meal pack cooked in my kitchen: ${everyday} Everyday, ${signature} Signature and ${special} Chef’s Special meals. ${member ? 'Member plan of 4+ prepaid visits per month' : 'Single booking'}. Service estimate ${fmt(total)}, before 5% VAT; groceries at actual cost with no markup and zone transport AED 40–130 per visit are separate. Please confirm my menu, portion sizes, number of visits and availability.`
  const changeSize = (value: number) => { setSize(value); setSignature(value === 30 ? 10 : value === 45 ? 15 : 5); setSpecial(value === 15 ? 0 : 5) }
  const count = (value: string, max: number) => Math.min(max, Math.max(0, Math.floor(Number(value)) || 0))
  return <div className="pc-meal-packs">
    <p className="pc-section-intro">Choose 15, 30 or 45 meals for the week, cooked in your own kitchen. Mix everyday favourites with more involved dishes. Each meal is one individual serving; we agree the menu, sides and portion sizes before booking.</p>
    <p className="pc-fineprint">{MEMBER_NOTE} {PRICE_NOTE}</p>
    <div className="pc-price-grid">{MEAL_COMPLEXITIES.map(level => <article key={level.id} className="pc-price-card"><h3>{level.name}</h3><p className="pc-price">{fmt(level.single)}<span> / meal · single</span></p><p><strong>{fmt(level.member)} / meal · member rate</strong></p><p>{level.examples}.</p></article>)}</div>
    <div className="mt-8 border border-gray-200 bg-white p-5 sm:p-8" aria-label="Meal pack calculator">
      <h3 className="font-playfair text-h3">Build a meal-pack estimate</h3>
      <p className="mt-2 font-inter text-body-sm text-gray-600">Choose the number of meals, then adjust the mix. The remaining meals use the Everyday rate.</p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <label className="font-inter text-body-sm">Meals per week<select aria-label="Meals per week" className="mt-2 block w-full border border-gray-200 bg-white p-3" value={size} onChange={e => changeSize(Number(e.target.value))}>{[15, 30, 45].map(n => <option key={n} value={n}>{n} meals</option>)}</select></label>
        <label className="font-inter text-body-sm">Booking rate<select aria-label="Meal pack booking rate" className="mt-2 block w-full border border-gray-200 bg-white p-3" value={member ? 'member' : 'single'} onChange={e => setMember(e.target.value === 'member')}><option value="single">Single booking</option><option value="member">Member · 4+ prepaid visits</option></select></label>
        <label className="font-inter text-body-sm">Signature meals<input aria-label="Signature meals" className="mt-2 block w-full border border-gray-200 p-3" type="number" min={0} max={size - special} step={1} value={signature} onChange={e => setSignature(count(e.target.value, size - special))}/></label>
        <label className="font-inter text-body-sm">Chef’s Special meals<input aria-label="Chef’s Special meals" className="mt-2 block w-full border border-gray-200 p-3" type="number" min={0} max={size - signature} step={1} value={special} onChange={e => setSpecial(count(e.target.value, size - signature))}/></label>
      </div>
      <div className="mt-6 border-t border-gray-200 pt-5" aria-live="polite" data-testid="meal-pack-summary">
        <p className="font-inter text-body-sm text-gray-600">{everyday} Everyday + {signature} Signature + {special} Chef’s Special = {size} meals</p>
        <p className="pc-price mt-3">{fmt(total)}<span> / {size}-meal pack · {member ? 'member rate' : 'single rate'}</span></p>
        <p className="pc-fineprint">{PRICE_NOTE} We confirm the cooking schedule and number of visits with your menu.</p>
        <a className="pc-button mt-4" href={buildWhatsAppLink(message)} target="_blank" rel="noopener noreferrer">Ask about this meal pack</a>
      </div>
    </div>
    <div className="pc-prose mt-7"><p><strong>Choose one pricing method.</strong> Meal packs price the agreed output. A Fridge Reset prices a cooking visit and its hours. We do not charge both for the same cooking. Containers can be yours or supplied at actual cost. Your chef labels the food and provides storage and reheating guidance.</p><p>For example, 30 meals made up of 15 Everyday, 10 Signature and 5 Chef’s Special cost AED 1,750 at the member rate, or AED 2,325 for a single booking, before 5% VAT, groceries and zone transport. If you would rather book cooking time, compare the <Link to="/private-chef-dubai/pricing#visit-rates">Fridge Reset visit rates</Link>.</p></div>
  </div>
}
