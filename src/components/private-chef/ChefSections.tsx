import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router'
import { ArrowUpRight, Check } from 'lucide-react'
import ServiceImage from './ServiceImage'
import { ChefAction } from './EditorialHero'
import { computeQuote, DEFAULT_INPUT, SERVICES, formatAed } from '@/content/privateChefPricing'
import { buildWhatsAppLink } from '@/lib/whatsapp'

export function ChefSection({ eyebrow, title, children, tone = '', id }: { eyebrow?: string; title?: ReactNode; children: ReactNode; tone?: string; id?: string }) {
  return <section id={id} className={`pc-section ${tone}`}><div className="pc-container">{(eyebrow || title) && <div className="pc-section-heading">{eyebrow && <p className="pc-eyebrow">{eyebrow}</p>}{title && <h2>{title}</h2>}</div>}{children}</div></section>
}
export function ScheduleChoices() {
  const cards = [
    { title: 'A few days a week', body: 'Fresh cooking on the days that matter. Keep the rest of your week flexible.', href: '/part-time-private-chef-dubai', image: 'family-table' as const, note: 'Part-time household support' },
    { title: 'Meals ready for later', body: 'A focused visit to prepare, portion and organise food around your routine.', href: '/weekly-meal-prep-dubai', image: 'meal-prep' as const, note: 'Weekly meal preparation' },
    { title: 'Your everyday kitchen', body: 'Regular cooking, menu planning and kitchen support through a fuller week.', href: '/full-time-private-chef-dubai', image: 'breakfast' as const, note: 'Full-time household plans' },
  ]
  return <div className="pc-schedule-grid">{cards.map((card,i) => <Link className="pc-schedule-card" to={card.href} key={card.href}><ServiceImage imageKey={card.image} sizes="(min-width: 900px) 30vw, 100vw" /><div className="pc-card-copy"><p className="pc-eyebrow">0{i+1} / {card.note}</p><h3>{card.title}</h3><p>{card.body}</p><span className="pc-card-link">Explore this service <ArrowUpRight size={18}/></span></div></Link>)}</div>
}
export function Inclusions() {
  const items = [ ['Menus that fit your home', 'Favourite cuisines, dietary preferences, meal times and portions, agreed before cooking begins.'], ['A considered chef match', 'We consider your schedule, kitchen and cooking style when recommending a suitable professional.'], ['Ongoing coordination', 'A myCHEF contact for your schedule, feedback and any changes to the arrangement.'], ['A kitchen left in order', 'Preparation, service and cleanup responsibilities are clear in your written proposal.'] ]
  return <div className="pc-inclusions">{items.map(([title,body]) => <div key={title}><Check size={20} aria-hidden="true"/><h3>{title}</h3><p>{body}</p></div>)}</div>
}
export const journey = [
  ['Tell us about your home', 'Your Dubai location, household size, preferred days, meals and dietary requirements.'],
  ['Meet a suitable chef', 'We discuss the proposed match, confirm availability and arrange an introduction.'],
  ['Agree the menu and details', 'Review menus, grocery arrangements, access, hours and the written service price.'],
  ['Enjoy your cooking days', 'Your chef cooks to the agreed plan, stores prepared meals appropriately and clears the kitchen.'],
  ['Refine it together', 'Tell your myCHEF contact what worked and what to adjust for the next visit.'],
] as const
export function ChefJourney() { return <ol className="pc-journey">{journey.map(([title,body],i) => <li key={title}><span className="pc-step-number">0{i+1}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol> }
export function TeamCapability() {
  return <ChefSection eyebrow="The people behind the service" title={<>Culinary skill.<br/><em>Thoughtful coordination.</em></>} tone="pc-tone-ink">
    <div className="pc-split"><ServiceImage imageKey="team-service"/><div className="pc-role-list"><p>myCHEF brings together independent chefs and authorised culinary partners, with the service support your booking needs. Your proposal confirms who is included.</p>{[['Your chef','The menu, cooking and attention to your household’s preferences.'],['Chef assistants','Additional preparation and kitchen support where the booking requires it.'],['Hospitality professionals','Waiters, bartenders and hosts for occasions where service is part of your brief.'],['myCHEF coordination','A central contact for matching, schedules and the details behind the day.']].map(([title,body]) => <div key={title}><h3>{title}</h3><p>{body}</p></div>)}<Link to="/our-chefs" className="pc-link">Explore the culinary network <ArrowUpRight size={17}/></Link></div></div>
  </ChefSection>
}
export function RealWork({ compact = false }: { compact?: boolean }) {
  const images = [
    ['deck-table-marina','A table set on deck','Seated table set for a previous myCHEF yacht catering day'],
    ['beef-tartlets','Food with attention to detail','Beef tartlet canapés prepared for previous myCHEF yacht service'],
    ['sushi-service','The service behind the occasion','Service team setting a sushi grazing table on a previous myCHEF yacht catering day'],
  ]
  return <ChefSection id="previous-work" eyebrow="From our previous work" title={<>Details that make<br/><em>the occasion.</em></>}>
    <div className="pc-section-summary"><p>These photographs are from a previous myCHEF yacht catering day: table preparation, canapés and service onboard. A glimpse of the care we bring to an occasion.</p><Link to="/yachts" className="pc-link">Explore the yacht portfolio <ArrowUpRight size={17}/></Link></div>
    <div className={`pc-real-work ${compact ? 'pc-real-compact' : ''}`}>{images.map(([src,title,alt]) => <figure key={src}><img src={`/images/yacht-work/${src}.webp`} alt={alt} width={1000} height={750} loading="lazy" decoding="async"/><figcaption><span>Previous myCHEF work · Yacht catering</span><h3>{title}</h3></figcaption></figure>)}</div>
  </ChefSection>
}
export function PricePreview() {
  const choices = [
    {name:'One fresh meal each week',serviceId:'fresh-meal' as const,daysPerWeek:1,explanation:'Four visits over four weeks. Three hours per visit.'},
    {name:'Weekly food preparation',serviceId:'food-prep' as const,daysPerWeek:1,explanation:'Four visits over four weeks. Four hours per visit.'},
    {name:'A full-day chef, five days a week',serviceId:'full-day' as const,daysPerWeek:5,explanation:'Twenty visits over four weeks. Nine hours per day.'},
  ]
  return <div><div className="pc-price-grid">{choices.map(c => { const quote = computeQuote({...DEFAULT_INPUT,duration:'long',serviceId:c.serviceId,daysPerWeek:c.daysPerWeek,guests:4,groceryMode:'client'}); return <Link to="/private-chef-dubai/pricing#calculator" key={c.name} className="pc-price-card"><h3>{c.name}</h3><p className="pc-price">{formatAed(quote.perMonth)}<span> / four weeks</span></p><p>{c.explanation}</p><span className="pc-card-link">Build your plan <ArrowUpRight size={17}/></span></Link>})}</div><p className="pc-fineprint">Illustrative service fees before 5% VAT. Groceries are separate at actual cost. Your household size, shopping arrangements and additional staffing can affect the total.</p></div>
}
export function ServiceRates() { return <div className="pc-rate-grid">{SERVICES.map(s => <div key={s.id}><p className="pc-eyebrow">{s.hours} hours</p><h3>{s.name}</h3><p className="pc-price">{formatAed(s.rate)}<span> / {s.unit === 'day' ? 'day' : 'visit'}</span></p><p>{s.tagline}</p></div>)}</div> }
export function ChefEnquiry({ title = 'Let’s make room for good food.' }: { title?: string }) {
  const { pathname } = useLocation()
  return <ChefSection tone="pc-tone-cream" eyebrow="Your home. Your preferences." title={title}><div className="pc-enquiry-end"><p>Tell us where you are, how often you would like a chef and what you enjoy eating. We’ll help you find a suitable arrangement and confirm the details in writing.</p><div className="pc-actions"><ChefAction action={{label:'Find my chef',href:`/inquiry?from=${encodeURIComponent(pathname)}`}}/><ChefAction secondary action={{label:'Talk to myCHEF',href:buildWhatsAppLink(`Hi myCHEF Dubai, I would like to discuss a private chef. Location: __. Days: __. Guests: __. (via mychef.ae${pathname})`),external:true}}/></div><p className="pc-fineprint">No obligation to book. Availability and final pricing are confirmed after reviewing your brief.</p></div></ChefSection>
}
