import { Link } from 'react-router'
import { ArrowUpRight, Check } from 'lucide-react'
import { ChefSection } from '@/components/private-chef/ChefSections'
import { HOUSEHOLD_PATH, LIVE_IN_PATH, LIVE_OUT_PATH, SHORT_TERM_PATH, householdLevels, householdSteps } from '@/content/householdChefs'
import { householdInquiryHref } from '@/lib/householdInquiry'
import HouseholdImage from './HouseholdImage'

export function HouseholdLevels() {
  return <div><div className="hc-levels">{householdLevels.map(level => <article key={level.id} className="hc-level" id={`level-${level.id}`}><p className="pc-eyebrow">Level {level.number} / {level.focus}</p><h3>{level.name}</h3><p>{level.description}</p><p className="hc-level-detail">{level.details}</p><Link className="pc-link" to={householdInquiryHref(HOUSEHOLD_PATH, { level: level.id })}>Discuss this level <ArrowUpRight size={17}/></Link></article>)}</div><p className="pc-fineprint">Culinary levels describe experience and role requirements. Your complete monthly service is individually scoped within our Managed Household, Premium or Executive / Estate service bands. Both live-in and live-out arrangements can be considered.</p></div>
}

export function HouseholdJourney() {
  return <ol className="pc-journey">{householdSteps.map(([title,body],i) => <li key={title}><span className="pc-step-number">0{i + 1}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol>
}

export function HouseholdArrangements() {
  return <div className="hc-choice-grid">{[
    { title: 'A chef who lives in', eyebrow: 'At home with your routine', image: 'live-in-hero', alt: 'Chef preparing breakfast in a light-filled household kitchen', href: LIVE_IN_PATH, body: 'A resident chef for an ongoing role, with a private room, agreed working hours and a routine built around your home.' },
    { title: 'A chef who comes each day', eyebrow: 'Daily live-out service', image: 'live-out-hero', alt: 'Chef unpacking fresh vegetables for a day of home cooking', href: LIVE_OUT_PATH, body: 'A dedicated chef who travels to you on agreed days, then leaves the kitchen ready for the next part of your day.' },
  ].map(item => <article className="hc-choice" key={item.href}><Link to={item.href} tabIndex={-1} aria-hidden="true"><HouseholdImage id={item.image} alt={item.alt}/></Link><div><p className="pc-eyebrow">{item.eyebrow}</p><h3>{item.title}</h3><p>{item.body}</p><Link className="pc-link" to={item.href}>Explore the arrangement <ArrowUpRight size={17}/></Link></div></article>)}</div>
}

export function ChefServiceChoice() {
  return <div className="hc-choice-grid"><article className="hc-choice"><HouseholdImage id="live-out-hero" alt="Fresh ingredients unpacked for a private chef visit"/><div><p className="pc-eyebrow">Book cooking time</p><h3>A few hours. A few days. A short stay.</h3><p>Choose a visit, regular cooking days or support during your Dubai stay. Keep the booking shaped around the time you need.</p><p className="hc-small-price">Chef visits from AED 750</p><Link className="pc-link" to={SHORT_TERM_PATH}>Explore short-term chef bookings <ArrowUpRight size={17}/></Link></div></article><article className="hc-choice"><HouseholdImage id="managed-household-table" alt="Chef serving a relaxed lunch at a household dining table"/><div><p className="pc-eyebrow">Find a long-term match</p><h3>A household chef who fits your life.</h3><p>Live-in or daily live-out. A personal search, a 30-day Learning Month and an approved Household Food Profile, with myCHEF support as life changes.</p><p className="hc-small-price">Managed service from approximately AED 20,000/month</p><Link className="pc-link" to={HOUSEHOLD_PATH}>Explore Managed Household <ArrowUpRight size={17}/></Link></div></article></div>
}

export function HouseholdSupport() {
  return <div className="pc-inclusions">{[
    ['Your household contact', 'One named myCHEF contact for feedback, changing needs and practical support throughout your managed agreement.'],
    ['Your Learning Month', 'A thoughtful first 30 days, with early check-ins, kitchen onboarding and useful adjustments to your routine.'],
    ['A profile that develops', 'Food preferences and kitchen routines recorded with permission, with monthly relationship reviews and support for your chef.'],
    ['Rematching support', 'For substantially the same role during an active agreement, continued matching has no new activation fee. Cover, trials and new chef costs are confirmed separately.'],
  ].map(([title,body]) => <div key={title}><Check size={20} aria-hidden="true"/><h3>{title}</h3><p>{body}</p></div>)}</div>
}

export function HouseholdCallout({ compact = false }: { compact?: boolean }) {
  return <ChefSection tone="pc-tone-cream" eyebrow="Looking further ahead?" title="Make a chef part of your household."><div className="hc-callout"><div><p>Managed Household combines a personal chef search, a 30-day Learning Month, your approved Household Food Profile and ongoing management. Live-in or live-out, from approximately AED 20,000/month before VAT. Match Activation is AED 950 before VAT; trials, groceries and agreed extras are separate.</p><div className="pc-actions"><Link className="pc-button" to={HOUSEHOLD_PATH}>Explore Managed Household <ArrowUpRight size={17}/></Link><Link className="pc-link" to="/our-chefs#household-profiles">Find your chef style</Link></div></div>{!compact && <HouseholdImage id="household-hero" alt="Chef preparing a relaxed family lunch in a home kitchen"/>}</div></ChefSection>
}
