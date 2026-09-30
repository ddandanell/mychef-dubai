import { memo, useMemo, useReducer, useState } from 'react'
import { Link } from 'react-router'
import { ArrowUpRight, Check, Plus, X } from 'lucide-react'
import { householdProfiles } from '@/content/householdProfiles'
import { householdLevels, levelPrice } from '@/content/householdChefs'
import { householdInquiryHref } from '@/lib/householdInquiry'
import HouseholdImage from './HouseholdImage'


export interface ChefShortlistState { selected: string[]; notice: string }
export function updateChefShortlist(state: ChefShortlistState, id: string): ChefShortlistState {
  if (state.selected.includes(id)) return { selected: state.selected.filter(item => item !== id), notice: '' }
  if (state.selected.length >= 3) return { ...state, notice: 'Your shortlist has three styles. Remove one to add another.' }
  return { selected: [...state.selected, id], notice: '' }
}
const cuisines = [...new Set(householdProfiles.map(profile => profile.cuisine))].sort()

// A shortlist tap changes one card. Keep the other profiles, pictures and
// expandable menu descriptions out of that interaction's render work.
const HouseholdProfileCard = memo(function HouseholdProfileCard({ profile, preview, checked, onToggle }: {
  profile: typeof householdProfiles[number]
  preview: boolean
  checked: boolean
  onToggle: (id: string) => void
}) {
  const band = householdLevels[profile.level - 1]
  return <article id={profile.id} className="hc-profile" key={profile.id}><div className="hc-profile-image"><HouseholdImage id={profile.image} alt={profile.imageAlt} sizes={preview ? '(min-width: 900px) 30vw, 100vw' : '(min-width: 900px) 44vw, 100vw'}/><span className="hc-profile-number">{profile.id.toUpperCase()} / Chef style</span></div><div className="hc-profile-copy"><p className="pc-eyebrow">Level {profile.level} · {band.name}</p><h3>{profile.title}</h3><p className="hc-profile-description">{profile.description}</p><p className="hc-profile-fee">{levelPrice(band)} <span>/ month</span></p><p className="hc-profile-price-note">Indicative service fee before VAT; groceries and agreed extras separate.</p><details><summary>Menu & household fit <Plus size={16} aria-hidden="true"/></summary><div className="hc-profile-more"><h4>At your table</h4><p>{profile.menu}</p><h4>A good fit for</h4><p>{profile.bestFor}</p><h4>Your arrangement</h4><p>{profile.arrangement} The final schedule and responsibilities are agreed around your home.</p></div></details><div className="hc-profile-actions"><Link className="pc-link" to={householdInquiryHref('/our-chefs', { level: band.id, profiles: [profile.id] })}>Find my match <ArrowUpRight size={16}/></Link>{!preview && <button type="button" className="hc-save" onClick={() => onToggle(profile.id)} aria-pressed={checked} aria-label={`${checked ? 'Remove' : 'Shortlist'} ${profile.title}`}>{checked ? <Check size={16}/> : <Plus size={16}/>}<span>{checked ? 'Shortlisted' : 'Shortlist'}</span></button>}</div></div></article>
})

export default function HouseholdProfiles({ preview = false }: { preview?: boolean }) {
  const [level, setLevel] = useState('all')
  const [cuisine, setCuisine] = useState('all')
  const [{ selected, notice }, toggle] = useReducer(updateChefShortlist, { selected: [], notice: '' })
  const visible = useMemo(() => preview
    ? householdProfiles.filter(p => ['hc01', 'hc11', 'hc24'].includes(p.id))
    : householdProfiles.filter(p => (level === 'all' || p.level === Number(level)) && (cuisine === 'all' || p.cuisine === cuisine)), [preview, level, cuisine])
  return <div>
    <p className="pc-section-intro hc-directory-intro">Explore 25 chef styles across five levels to shape your personal shortlist. We introduce the people who fit your home and confirm their availability with you. Each profile below describes a cooking style and household role.</p>
    {!preview && <div className="hc-filters"><label>Chef level<select value={level} onChange={e => setLevel(e.target.value)}><option value="all">All five levels</option>{householdLevels.map(l => <option key={l.id} value={l.number}>{l.name}</option>)}</select></label><label>Cooking style<select value={cuisine} onChange={e => setCuisine(e.target.value)}><option value="all">All cooking styles</option>{cuisines.map(c => <option key={c}>{c}</option>)}</select></label><p role="status">{visible.length} {visible.length === 1 ? 'profile' : 'profiles'} to explore</p><button type="button" className="pc-link" onClick={() => { setLevel('all'); setCuisine('all') }}>Reset filters</button></div>}
    {!preview && selected.length > 0 && <aside id="chef-shortlist" className="hc-shortlist" aria-label="Your chef shortlist"><div><p className="pc-eyebrow">Your shortlist · {selected.length}/3</p><ul>{selected.map(id => { const p = householdProfiles.find(item => item.id === id)!; return <li key={id}><span>{p.title}</span><button type="button" onClick={() => toggle(id)} aria-label={`Remove ${p.title} from shortlist`}><X size={16}/></button></li> })}</ul></div><Link className="pc-button" to={householdInquiryHref('/our-chefs', { profiles: selected })}>Send my shortlist <ArrowUpRight size={17}/></Link></aside>}
    {!preview && selected.length > 0 && <a href="#chef-shortlist" className="hc-shortlist-jump">Review shortlist ({selected.length}) <ArrowUpRight size={15}/></a>}
    <p className="hc-notice" role="status" aria-live="polite">{notice}</p>
    <div className={`hc-profiles ${preview ? 'hc-profiles-preview' : ''}`}>{visible.map(profile =>
      <HouseholdProfileCard key={profile.id} profile={profile} preview={preview} checked={selected.includes(profile.id)} onToggle={toggle}/>
    )}</div>
    {!visible.length && <div className="hc-empty"><h3>Let us build a match around you.</h3><p>No profile combines these filters yet. Try another level or tell us the cooking style you have in mind.</p><Link className="pc-link" to={householdInquiryHref('/our-chefs')}>Discuss my household</Link></div>}
    {preview && <div className="pc-actions"><Link className="pc-button" to="/our-chefs#household-profiles">Explore all 25 chef styles <ArrowUpRight size={17}/></Link></div>}
  </div>
}
