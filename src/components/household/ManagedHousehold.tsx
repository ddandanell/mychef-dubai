import { useState } from 'react'
import { Link } from 'react-router'
import { ArrowUpRight, BookOpen, Heart, MessageCircle, RefreshCw } from 'lucide-react'
import { ChefSection } from '@/components/private-chef/ChefSections'
import { HOUSEHOLD_PATH, MATCH_ACTIVATION_FEE, managedHouseholdBands, householdPriceNote, money } from '@/content/householdChefs'
import { householdInquiryHref } from '@/lib/householdInquiry'
import { buildWhatsAppLink } from '@/lib/whatsapp'
import HouseholdImage from './HouseholdImage'
import '@/styles/managed-household.css'

export function ManagedHouseholdPillars() {
  return <div className="mh-pillars">{[
    { number: '01', name: 'The myCHEF Match', title: 'A person who fits your home.', body: 'We learn about your food, your routine and the way you like people to work. Then we search, check availability and explain why each introduction could suit you.', href: '#how-it-works', link: 'See the matching journey' },
    { number: '02', name: 'Household Food Profile', title: 'The little things, remembered.', body: 'Your approved record of favourite dishes, portions, dietary requirements and kitchen routines. Useful feedback helps the service become more personal.', href: '#food-profile', link: 'Explore an example' },
    { number: '03', name: 'myCHEF Continuity', title: 'Support as life changes.', body: 'A continuing myCHEF contact for you and your chef, regular reviews and a considered rematching process when the household needs a change.', href: '#continuity', link: 'Understand ongoing support' },
  ].map(item => <article key={item.number}><span className="mh-number" aria-hidden="true">{item.number}</span><p className="pc-eyebrow">{item.name}</p><h3>{item.title}</h3><p>{item.body}</p><a className="pc-link" href={item.href}>{item.link} <ArrowUpRight size={16}/></a></article>)}</div>
}

export function ManagedHouseholdPricing() {
  return <div>
    <div className="mh-activation"><div><p className="pc-eyebrow">One-time search activation</p><h3>The myCHEF Match</h3><p>We first agree your brief, budget and a realistic search. Activation covers the agreed search, initial screening, availability checks, curated introductions and interview coordination.</p></div><div><p className="mh-activation-price">{money(MATCH_ACTIVATION_FEE)}</p><p>Before 5% VAT. Separate from your monthly service and paid trial.</p></div></div>
    <div className="mh-price-grid">{managedHouseholdBands.map(band => <article key={band.id}><p className="pc-eyebrow">{band.name}</p><h3>{band.price}</h3><p className="mh-price-unit">{band.unit}</p><p>{band.description}</p><p>{band.detail}</p><Link className="pc-link" to={householdInquiryHref()}>Discuss my household <ArrowUpRight size={16}/></Link></article>)}</div>
    <p className="pc-fineprint">{householdPriceNote} A starting band is a guide; the final fee depends on a suitable available chef, schedule and agreed responsibilities.</p>
    <div className="mh-costs"><div><h3>Your monthly service</h3><p>The agreed chef role, onboarding, a named myCHEF contact, household and chef support, monthly relationship reviews, Food Profile coordination and rematching for substantially the same role during an active agreement.</p></div><div><h3>Confirmed before you commit</h3><p>The complete price, cooking days and hours, groceries, paid trial, accommodation or transport, cover arrangements and any additional responsibilities. You review the activation terms and service agreement before their respective stages begin.</p></div></div>
  </div>
}

export function LearningMonth() {
  return <ChefSection id="learning-month" eyebrow="Your first 30 days" title={<>The first meal is only<br/><em>the beginning.</em></>} tone="pc-tone-cream">
    <p className="pc-section-intro">A little less spice. Smaller portions at lunch. Friday dinner made special. The Learning Month gives your chef time to turn the brief into food that feels like yours.</p>
    <ol className="mh-weeks">{[
      ['Week 1', 'Observe', 'Learn the kitchen, your essential requirements and the rhythm of each day.'],
      ['Week 2', 'Understand', 'Listen to feedback on taste, portions, timing and how you like to be served.'],
      ['Week 3', 'Adapt', 'Refine menus, shopping and preparation around what actually works.'],
      ['Week 4', 'Personalise', 'Review the first month together and agree the routines worth keeping.'],
    ].map(([week, title, body]) => <li key={week}><p className="pc-eyebrow">{week}</p><h3>{title}</h3><p>{body}</p></li>)}</ol>
    <p className="mh-checkins"><MessageCircle size={20} aria-hidden="true"/><span>We plan check-ins around days 2, 7, 14 and 30, then monthly relationship reviews. Your contact agrees the rhythm with you and listens to your chef too.</span></p>
  </ChefSection>
}

const exampleSections = [
  { id: 'food', label: 'At the table', title: 'Favourites, down to the detail.', entries: [['Family dinners', 'Mediterranean food; sauces served separately.'], ['Children’s meals', 'Small portions; vegetables on the side.'], ['Favourite dish', 'Lemon chicken with extra sauce.'], ['Seasoning', 'Mild spice; lemon served at the table.']] },
  { id: 'routine', label: 'Your daily rhythm', title: 'A routine the chef can follow.', entries: [['Breakfast', 'Ready by 7.30; quiet service.'], ['Lunch', 'A lighter meal for two.'], ['Children’s dinner', 'At 6.00; adult dinner at 7.30.'], ['Friday evenings', 'Confirm guest numbers before shopping.']] },
  { id: 'kitchen', label: 'In the kitchen', title: 'The way your home works.', entries: [['Groceries', 'Send the list for approval each Sunday.'], ['Substitutions', 'Ask before changing a favourite brand.'], ['Prepared meals', 'Label portions and reheating instructions.'], ['Important requirements', 'Confirm allergies separately before any menu is agreed.']] },
] as const

export function HouseholdFoodProfile() {
  const [active, setActive] = useState<string>('food')
  const selected = exampleSections.find(section => section.id === active) || exampleSections[0]
  return <ChefSection id="food-profile" eyebrow="Household Food Profile" title={<>You explain it once.<br/><em>We keep learning.</em></>}>
    <div className="pc-section-summary"><p>Your approved profile brings useful food and kitchen knowledge together. Tell us what to keep, what to adjust and what to try next. With your permission, those details help your current chef and inform a future handover.</p><Link className="pc-link" to="/private-chef-dubai/privacy-security">Your household’s privacy <ArrowUpRight size={16}/></Link></div>
    <div className="mh-profile"><div className="mh-profile-side"><BookOpen size={28} aria-hidden="true"/><p className="pc-eyebrow">Example household</p><h3>The details that<br/>make it yours.</h3><p>Explore a sample Food Profile. Your own information is agreed privately with myCHEF.</p><div className="mh-profile-tabs" aria-label="Example Food Profile sections">{exampleSections.map(section => <button type="button" key={section.id} aria-pressed={active === section.id} aria-controls="household-profile-example" onClick={() => setActive(section.id)}>{section.label}<ArrowUpRight size={15}/></button>)}</div></div><div id="household-profile-example" className="mh-profile-body" aria-live="polite"><p className="pc-eyebrow">Household Food Profile · sample</p><h3>{selected.title}</h3><dl>{selected.entries.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><p className="mh-profile-feedback"><Heart size={17} aria-hidden="true"/><span>“Keep the lemon chicken. A little more sauce next time.”<br/>Small comments become useful preferences.</span></p></div></div>
    <p className="pc-fineprint">We record relevant information with permission. You can ask for corrections, and only the details needed to support your service are shared.</p>
  </ChefSection>
}

export function HouseholdContinuity() {
  return <ChefSection id="continuity" eyebrow="myCHEF Continuity" title={<>Your chef may change.<br/><em>Your understanding carries forward.</em></>} tone="pc-tone-cream">
    <div className="pc-split"><div className="pc-prose"><p className="pc-lead">If something is not working, you can ask for a new match.</p><p>We listen, review the situation and update the brief. During an active Managed Household agreement, continued matching for substantially the same role does not require another activation fee.</p><p>With your permission, the relevant Food Profile helps the next chef begin better informed: the meals you love, your routines and the useful details already learned.</p><Link className="pc-link" to={householdInquiryHref()}>Talk through your requirements <ArrowUpRight size={16}/></Link></div><div className="mh-continuity-list">{[
      ['A planned absence', 'Discuss leave early. We can explore a relief chef, meals prepared ahead or an adjusted schedule.'],
      ['An unexpected absence', 'We check available relief capacity and explain your options. Immediate cover cannot be guaranteed.'],
      ['A permanent change', 'We refine the brief, confirm budget and availability, coordinate rematching and plan the handover.'],
    ].map(([title, body]) => <div key={title}><RefreshCw size={19} aria-hidden="true"/><div><h3>{title}</h3><p>{body}</p></div></div>)}</div></div>
    <p className="pc-fineprint">A different chef may change the monthly fee. Paid trials remain chargeable; temporary cover and major changes to the role may cost extra. Timing, notice, cancellation and cover terms are set out in your agreement.</p>
  </ChefSection>
}

export function HouseholdLearning() {
  return <ChefSection eyebrow="Optional, and personal" title="Some recipes deserve to stay in the family."><div className="pc-split"><HouseholdImage id="managed-household-recipe" alt="Chef and an older home cook shaping fresh pasta together at a kitchen island"/><div className="pc-prose"><p className="pc-lead">A dish can hold more than a recipe.</p><p>The pasta you grew up with. A parent’s way of making rice. The celebration meal everyone asks for. If a recipe matters to your family, your chef can help learn and document your version, with permission.</p><h3>Learn With Your Chef</h3><p>You might also enjoy learning a technique, exploring an ingredient or cooking together. Tell us who would like to join and what they want to learn. We confirm the chef’s teaching experience and the time required in your arrangement.</p><p className="pc-fineprint">Recipe recording and teaching are optional and subject to the agreed scope. We can discuss building a private collection of family favourites with you.</p></div></div></ChefSection>
}

export function ManagedHouseholdEnquiry({ from = HOUSEHOLD_PATH }: { from?: string }) {
  return <ChefSection id="start-your-brief" eyebrow="A Private Chef Service That Learns You" title={<>Let’s start with<br/><em>the way you live.</em></>} tone="pc-tone-cream"><div className="pc-enquiry-end"><p>Share your Dubai area, household size, preferred schedule, living arrangement, start date and monthly budget. We review the essentials first, then help you build a Private Household Brief if the service fits.</p><div className="pc-actions"><Link className="pc-button" to={householdInquiryHref(from)}>Start my household brief <ArrowUpRight size={17}/></Link><a className="pc-link" href={buildWhatsAppLink('Hi myCHEF, I would like to discuss Managed Household. Dubai area: __. Adults and children: __. Live-in or live-out: __. Days and hours: __. Start date: __. Complete monthly service budget: __.')} target="_blank" rel="noopener noreferrer">Talk to myCHEF <ArrowUpRight size={17}/></a></div><p className="pc-fineprint">The first conversation is without obligation. Match Activation is payable only after your brief, budget and search terms are agreed.</p></div></ChefSection>
}
