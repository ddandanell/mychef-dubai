import { Link } from 'react-router'
import { ArrowUpRight, Check, CalendarDays } from 'lucide-react'
import { ChefSection } from '@/components/private-chef/ChefSections'
import { HOUSEHOLD_PATH, MATCH_ACTIVATION_FEE, FULL_TIME_START_PRICE, money } from '@/content/householdChefs'
import { householdStartBenefits, householdBriefTopics } from '@/content/householdJourney'
import { householdInquiryHref } from '@/lib/householdInquiry'
import '@/styles/managed-household.css'

export function HouseholdStartOffer({ from = HOUSEHOLD_PATH, compact = false }: { from?: string; compact?: boolean }) {
  return <section className={`mh-offer ${compact ? 'mh-offer-compact' : ''}`} aria-labelledby="household-start-title">
    <div className="mh-offer-copy"><p className="pc-eyebrow">The myCHEF Household Start</p><h2 id="household-start-title">A chef for your home.<br/><em>A team behind your everyday.</em></h2><p className="mh-offer-intro">Meals to look forward to, a routine that feels easier and someone who keeps listening. Your chef cooks. Your myCHEF contact helps the relationship work.</p>
      {!compact && <div className="mh-offer-benefits">{householdStartBenefits.map(([title, body]) => <div key={title}><Check size={19} aria-hidden="true"/><div><h3>{title}</h3><p>{body}</p></div></div>)}</div>}
      {compact && <p className="mh-offer-intro">Chef service, first-month onboarding, your Food Profile, a named contact and ongoing relationship support.</p>}
    </div>
    <aside className="mh-offer-price" aria-label="Household starting plan"><p className="pc-eyebrow">Managed Household · starting plan</p><p className="mh-offer-amount"><span>From</span>{money(FULL_TIME_START_PRICE)}</p><p className="mh-offer-period">per month · before 5% VAT</p><ul><li>A dedicated full-time arrangement</li><li>Days and hours agreed in your proposal</li><li>Chef service + myCHEF management</li><li>Live-in or daily live-out, as agreed</li></ul><Link className="pc-button" to={householdInquiryHref(from)}>Check my start date <ArrowUpRight size={17}/></Link><p className="mh-offer-reassurance">No payment to enquire. We review your needs first.</p><div className="mh-offer-extras"><strong>Separate and agreed before commitment</strong><p>{money(MATCH_ACTIVATION_FEE)} Match Activation before VAT; paid trial, groceries and agreed extras. Additional shifts, accommodation, transport and cover are itemised where relevant.</p></div><Link className="pc-link" to={`${HOUSEHOLD_PATH}#managed-pricing`}>Compare household service bands <ArrowUpRight size={15}/></Link></aside>
  </section>
}

export function HouseholdStartTiming({ from = HOUSEHOLD_PATH }: { from?: string }) {
  return <div className="mh-start-timing"><CalendarDays size={25} aria-hidden="true"/><div><h3>Have a start date in mind? Start with your brief.</h3><p>Initial matching typically takes 3–5 working days after activation. Interviews, a paid trial and a chef’s notice period can add time. Share your preferred date now so we can check a realistic route to starting.</p><p className="pc-fineprint">Your enquiry does not reserve a chef. We confirm availability and timing with you before commitment.</p></div><Link className="pc-link" to={householdInquiryHref(from)}>Discuss my start date <ArrowUpRight size={16}/></Link></div>
}

export function HouseholdBriefGuide() {
  return <div className="mh-brief-guide"><p className="pc-lead">You do not need a perfect brief to begin.</p><p>Start with six essentials: area, household size, cooking schedule, start date, budget and living arrangement. We help with anything you are unsure about.</p><details className="mh-details"><summary>What will we discuss in the personal brief?</summary><div className="mh-brief-topics">{householdBriefTopics.map(([title,body]) => <div key={title}><h3>{title}</h3><p>{body}</p></div>)}</div><p className="pc-fineprint">We ask for relevant details privately and with your permission. You approve the brief before we activate the search.</p></details></div>
}

export function HouseholdDecisionChecks() {
  return <ChefSection eyebrow="Confidence at every step" title="You stay in control of the decision."><div className="pc-inclusions">{[
    ['Enquire without paying', 'We review your needs and budget before you decide whether to activate a personal search.'],
    ['Know why we suggest a chef', 'Discuss relevant experience, availability, cooking style and the practical fit for your household.'],
    ['Try a representative meal', 'A separately priced home trial lets you assess the food and communication before agreeing the ongoing service.'],
    ['Have a route to a new match', 'Tell your named contact if the fit is wrong. Same-role rematching during an active agreement has no new activation fee.'],
  ].map(([title,body]) => <div key={title}><Check size={20} aria-hidden="true"/><h3>{title}</h3><p>{body}</p></div>)}</div></ChefSection>
}
