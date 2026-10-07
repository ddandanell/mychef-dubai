import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router'
import { ArrowUpRight, Check } from 'lucide-react'
import ServiceImage from './ServiceImage'
import { ChefAction } from './EditorialHero'
import { SERVICES, formatAed, MEMBER_NOTE, PRICE_NOTE } from '@/content/privateChefPricing'
import { chefEnquiryCopy } from '@/content/chefEnquiryCopy'
import { buildWhatsAppLink } from '@/lib/whatsapp'

export function ChefSection({ eyebrow, title, children, tone = '', id }: { eyebrow?: string; title?: ReactNode; children: ReactNode; tone?: string; id?: string }) {
  return <section id={id} className={`pc-section ${tone}`}><div className="pc-container">{(eyebrow || title) && <div className="pc-section-heading">{eyebrow && <p className="pc-eyebrow">{eyebrow}</p>}{title && <h2>{title}</h2>}</div>}{children}</div></section>
}
export function ScheduleChoices() {
  const cards = [
    { title: 'A few days a week', body: 'Fresh cooking on the days that matter. Keep the rest of your week flexible.', href: '/part-time-private-chef-dubai', image: 'family-table' as const, note: 'Part-time household support' },
    { title: 'Meals ready for later', body: 'A focused visit to prepare, portion and organise food around your routine.', href: '/weekly-meal-prep-dubai', image: 'meal-prep' as const, note: 'Weekly meal preparation' },
    { title: 'Your long-term household chef', body: 'Live-in or daily live-out, with a personal chef search and ongoing support.', href: '/full-time-private-chef-dubai', image: 'breakfast' as const, note: 'Full-time household plans' },
  ]
  return <div className="pc-schedule-grid">{cards.map((card,i) => <Link className="pc-schedule-card" to={card.href} key={card.href}><ServiceImage imageKey={card.image} sizes="(min-width: 900px) 30vw, 100vw" /><div className="pc-card-copy"><p className="pc-eyebrow">0{i+1} / {card.note}</p><h3>{card.title}</h3><p>{card.body}</p><span className="pc-card-link">Explore this service <ArrowUpRight size={18}/></span></div></Link>)}</div>
}
export function Inclusions() {
  const items = [ ['Menus that fit your home', 'Favourite cuisines, dietary preferences, meal times and portions, agreed before cooking begins.'], ['A considered chef match', 'We consider your schedule, kitchen and cooking style when recommending a suitable professional.'], ['Ongoing coordination', 'A myCHEF contact for your schedule, feedback and any changes to the arrangement.'], ['A kitchen left in order', 'Preparation, service and cleanup responsibilities are clear in your written proposal.'] ]
  return <div className="pc-inclusions">{items.map(([title,body]) => <div key={title}><Check size={20} aria-hidden="true"/><h3>{title}</h3><p>{body}</p></div>)}</div>
}
export const journey = [
  ['Tell us the essentials', 'Your area, household size, preferred cooking days and start date. We help you choose the service and discuss food requirements.'],
  ['Review your chef and written plan', 'Confirm availability, a suitable chef, menus, groceries, hours and the complete price before booking.'],
  ['Enjoy your cooking days', 'Your chef cooks the agreed food, stores prepared meals appropriately and leaves the kitchen in order.'],
  ['Keep the food right for you', 'Tell your myCHEF contact what you enjoyed and what to adjust. We help coordinate changes and the next visit.'],
] as const
export function ChefJourney() { return <ol className="pc-journey">{journey.map(([title,body],i) => <li key={title}><span className="pc-step-number">0{i+1}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol> }
export function TeamCapability() {
  return <ChefSection eyebrow="The people behind the service" title={<>Culinary skill.<br/><em>Thoughtful coordination.</em></>} tone="pc-tone-ink">
    <div className="pc-split"><ServiceImage imageKey="team-service"/><div className="pc-role-list"><p>Our chefs bring different cuisines and cooking styles to your home. We help you find the right match and coordinate the support your booking needs.</p>{[['Your chef','The menu, cooking and attention to your household’s preferences.'],['Chef assistants','Additional preparation and kitchen support where the booking requires it.'],['Hospitality professionals','Waiters, bartenders and hosts for occasions where service is part of your brief.'],['myCHEF coordination','A central contact for matching, schedules and the details behind the day.']].map(([title,body]) => <div key={title}><h3>{title}</h3><p>{body}</p></div>)}<Link to="/our-chefs" className="pc-link">Explore our chefs and cooking styles <ArrowUpRight size={17}/></Link></div></div>
  </ChefSection>
}
export function RealWork({ compact = false }: { compact?: boolean }) {
  const details = [
    ['A table set on deck', 'Thoughtful table preparation makes the setting feel ready from the moment guests arrive.'],
    ['Food with attention to detail', 'Individually presented canapés and generous grazing selections bring variety to the occasion.'],
    ['The service behind the occasion', 'Preparation, replenishment and clear-down are planned around the vessel and the day’s schedule.'],
  ]
  return <ChefSection id="previous-work" eyebrow="From our previous work" title={<>Details that make<br/><em>the occasion.</em></>}>
    <div className="pc-section-summary"><p>Explore a previous myCHEF yacht catering day, from table preparation and canapés to service onboard. The full yacht portfolio brings the setting and details together.</p><Link to="/yachts#previous-work" className="pc-link">Explore the yacht portfolio <ArrowUpRight size={17}/></Link></div>
    <div className={`pc-role-list ${compact ? 'pc-real-compact' : ''}`}>{details.map(([title,body]) => <div key={title}><h3>{title}</h3><p>{body}</p></div>)}</div>
  </ChefSection>
}

export function PricePreview() {
  const choices = [
    { name: 'One meal, cooked for you', price: SERVICES[0].singleRate, unit: 'single visit', explanation: 'Private Chef Visit · three hours. Start with one booking.', href: '/private-chef-dubai/pricing?duration=short#calculator' },
    { name: 'A fridge reset every week', price: SERVICES[1].rate * 4, unit: 'four prepaid visits', explanation: 'Member rate of AED 900 per four-hour visit. Four visits over four weeks.', href: '/private-chef-dubai/pricing?duration=long&service=food-prep#calculator' },
    { name: 'Your chef for the whole day', price: SERVICES[3].singleRate, unit: 'single day', explanation: 'Chef by the Day · ten hours. Meals, shopping coordination and cleanup.', href: '/private-chef-dubai/pricing?duration=short&service=full-day#calculator' },
  ]
  return <div><div className="pc-price-grid">{choices.map(choice => <Link to={choice.href} key={choice.name} className="pc-price-card"><h3>{choice.name}</h3><p className="pc-price">{formatAed(choice.price)}<span> / {choice.unit}</span></p><p>{choice.explanation}</p><span className="pc-card-link">Build your plan <ArrowUpRight size={17}/></span></Link>)}</div><p className="pc-fineprint">{PRICE_NOTE} Assistants and agreed extras are separate. {MEMBER_NOTE}</p></div>
}
export function ServiceRates({ shortStay = false }: { shortStay?: boolean }) {
  return <div><div className="pc-rate-grid">{SERVICES.map(service => <article key={service.id}><p className="pc-eyebrow">{service.hours} hours · Signature</p><h3>{service.name}</h3><p>{service.tagline}</p><p className="pc-price">{formatAed(service.singleRate)}<span> / {service.unit === 'day' ? 'day' : 'visit'} · single</span></p><p className="font-inter text-body-lg text-gold-ink mt-3"><strong>{formatAed(service.rate)}</strong> / {service.unit === 'day' ? 'day' : 'visit'} · member rate</p></article>)}</div><p className="pc-fineprint">{shortStay ? 'Single visit at the page price. No minimum number of days. ' : ''}{MEMBER_NOTE} {PRICE_NOTE}</p></div>
}
export function ChefEnquiry({ title, id }: { title?: string; id?: string }) {
  const { pathname } = useLocation()
  const enquiry = chefEnquiryCopy(pathname)
  return <ChefSection id={id} tone="pc-tone-cream" eyebrow="Your home. Your preferences." title={title || enquiry.title}><div className="pc-enquiry-end"><p>{enquiry.brief}</p><div className="pc-actions"><ChefAction action={{label:enquiry.label,ctaLocation:'chef_service_enquiry',href:`/inquiry?from=${encodeURIComponent(pathname)}`}}/><ChefAction secondary action={{label:'Talk to myCHEF',href:buildWhatsAppLink(`Hi myCHEF Dubai, I would like to discuss ${enquiry.topic}. Dubai area: __. Dates or cooking days: __. Household size: __. Favourite foods or dietary needs: __. (via mychef.ae${pathname})`),external:true}}/></div><p className="pc-fineprint">Initial reply in around 15 minutes during 9am–9pm Dubai time; your proposal follows after we review your brief. No obligation to book. Share your preferred start date early so we can check chef availability and agree the practical details. Final pricing and timing are confirmed after reviewing your brief.</p></div></ChefSection>
}
