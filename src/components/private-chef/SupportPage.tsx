import { Link } from 'react-router'
import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'
import ClusterNav from './ClusterNav'
import ServiceImage from './ServiceImage'
import FaqAccordion from '@/components/FaqAccordion'
import { ChefSection, ChefJourney, TeamCapability, ChefEnquiry } from './ChefSections'
import { faqPageSchema } from '@/utils/schema'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import type { ChefImageKey } from '@/content/privateChefDesign'

const pages = {
  process: {
    path: '/private-chef-dubai/how-it-works', title: 'Managed Private Chef Service Dubai | How It Works | myCHEF',
    h1: 'Managed Private Chef Service Dubai. A simpler everyday.',
    intro: 'Tell us how your household likes to eat. We recommend a suitable chef, agree your cooking days and menus, and stay in touch as your routine evolves.',
    eyebrow: 'From your first brief to your next meal', heading: 'How your managed private chef service in Dubai works.', image: 'planning' as ChefImageKey,
    body: 'A good arrangement starts with a useful conversation. We discuss household size, food preferences, allergies, kitchen equipment and access. You review the proposed chef, schedule and written price before cooking begins.',
    blocks: [
      ['Your Food Profile', 'A practical record of favourites, allergies, portions, meal times and kitchen preferences. We use it to brief the chef and keep it up to date as things change.'],
      ['Shopping, agreed in advance', 'Choose whether ingredients are ready when the chef arrives or shopping is part of the service. Grocery costs, shopping time and any extras are shown in your proposal.'],
      ['One place to make changes', 'Your myCHEF contact coordinates schedules, feedback and any request for a different match. Tell us when travel, guests or dietary preferences change.'],
      ['Support when a chef is unavailable', 'We look for a suitable available replacement and brief them from your Food Profile. If an equivalent match is unavailable, we explain the options.']
    ],
    faqs: [
      {q:'What should I include in my first enquiry?',a:'Your Dubai location, household size, preferred cooking days, meals, cuisine preferences and any allergies. Kitchen access and your expected start date also help us suggest a suitable arrangement.'},
      {q:'Can I meet the chef before the service starts?',a:'We arrange an introduction as part of confirming the match. Discuss menus, kitchen equipment, shopping and service expectations before the first cooking day.'},
      {q:'Will I have the same chef?',a:'We aim to keep the same chef on your agreed schedule. Availability, time off or a change of match may require another chef. Your myCHEF contact coordinates the options.'},
      {q:'Where can I see the price?',a:'Use the [plan calculator](/private-chef-dubai/pricing#calculator) to compare service types and frequency. The written proposal confirms your final arrangement.'}
    ]
  },
  matching: {
    path:'/private-chef-dubai/our-chefs', canonical:'/our-chefs', noindex:true,
    title:'Private Chef for Your Home Dubai | Meet Our Chefs', h1:'The right chef. The right fit for your home.',
    intro:'Cooking ability is the starting point. We also consider the cuisines you love, your household routine and the kind of service you want at home.',
    eyebrow:'A considered introduction',heading:'We get to know both sides of the kitchen.',image:'craft' as ChefImageKey,
    body:'We review identity and right-to-work documents, practical cooking ability, references and food hygiene awareness. Matching then brings those checks together with your brief, schedule and kitchen.',
    blocks:[
      ['Cooking that suits you','Regional favourites, family food, vegetarian cooking or occasion dining. Tell us what you enjoy so we can discuss a relevant chef profile.'],
      ['A workable schedule','We check availability against the days, hours and start date you need. A proposed match is confirmed with you before the arrangement begins.'],
      ['An introduction before service','Talk through preferences, kitchen equipment, shopping responsibilities and the first menu. Questions are welcome before anyone starts cooking.'],
      ['Room to refine the match','Feedback helps us adjust menus and service. If the arrangement is not working, contact myCHEF to discuss changes or a suitable alternative.']
    ],faqs:[
      {q:'Can I choose a cuisine specialist?',a:'Tell us the cuisine and dishes you have in mind. We review the brief against chef experience and availability, then recommend a suitable profile.'},
      {q:'Can I see chef profiles?',a:'Explore the [chef directory](/our-chefs). Availability and suitability for your household are confirmed when we review your enquiry.'},
      {q:'Is a trial included?',a:'Any trial, tasting or introduction with cooking must be agreed in advance. Your proposal confirms its scope and any charge.'}
    ]
  },
  quality:{
    path:'/private-chef-dubai/quality-training',noindex:true,title:'Chef Quality & Training | myCHEF',h1:'Care in the kitchen. Consistency at the table.',
    intro:'A household chef arrangement should keep improving. We review the food, service and fit, and use your feedback to guide the next visit.',
    eyebrow:'Standards you can discuss',heading:'Good food is only part of good service.',image:'ingredients' as ChefImageKey,
    body:'Practical cooking assessment and food hygiene awareness sit alongside organisation, punctuality and respect for your home. Your preferences are recorded so the chef knows what a good service means for your household.',
    blocks:[
      ['Food and menu fit','Taste, variety, portion size and the way dishes are served. We review what you enjoyed and what should change.'],
      ['Hygiene and handling','Clean working habits, appropriate storage and clear attention to ingredient and allergy requirements. Concerns should be raised promptly with myCHEF.'],
      ['Respect for your household','Agreed access, service hours, discretion and kitchen cleanup. Expectations are discussed before the first visit.'],
      ['Feedback followed by action','Your contact helps clarify the issue and the next step: a menu adjustment, coaching, a schedule change or a discussion about a different match.']
    ],faqs:[
      {q:'How do I give feedback?',a:'Contact your myCHEF coordinator with what happened and what you would like changed. Specific feedback on meals, timing and service helps us agree the next step.'},
      {q:'Can you cater for allergies?',a:'Please disclose allergies and their severity before booking. We discuss ingredients and kitchen conditions with you and the chef. We cannot promise a completely allergen-free environment or accept a request that cannot be handled safely.'},
      {q:'What if the chef is not the right fit?',a:'Contact myCHEF so we can understand the issue and discuss an adjustment or another suitable available chef. Read the [plan terms](/private-chef-dubai/how-your-plan-works) for the arrangement details.'}
    ]
  },
  privacy:{
    path:'/private-chef-dubai/privacy-security',noindex:true,title:'Privacy & Security in Your Home | myCHEF',h1:'Your home deserves care and discretion.',
    intro:'Clear expectations for the person entering your home, the information needed to cook for you, and the way household access is handled.',
    eyebrow:'Trust starts with clarity',heading:'Thoughtful boundaries, agreed together.',image:'clean-kitchen' as ChefImageKey,
    body:'Our selection process covers identity and right-to-work documents, a practical cooking assessment, references and food hygiene awareness. Your household brief then establishes access, working areas and any specific rules.',
    blocks:[
      ['Access by agreement','Confirm who will be at home, arrival arrangements, permitted working areas and how any keys or access details should be handled.'],
      ['Information with a purpose','The Food Profile records information relevant to cooking and service: allergies, preferences, meal times and practical kitchen needs. You can request a correction.'],
      ['Discretion in your home','Private household information and photographs are not for sharing without permission. Raise specific confidentiality needs before confirming the booking.'],
      ['A contact for concerns','Speak with your myCHEF contact about conduct, access or a change in the arrangement. We review the concern and agree the next steps with you.']
    ],faqs:[
      {q:'What checks do you describe?',a:'Identity and right-to-work documents, practical cooking assessment, references and food hygiene awareness. We do not claim police clearance or other credentials without supporting evidence.'},
      {q:'Can I set household rules?',a:'Yes. Explain access arrangements, private areas, photography restrictions and any other practical requirements before service starts.'},
      {q:'Where can I read the privacy policy?',a:'Our [privacy policy](/privacy-policy) explains how myCHEF handles personal information and how to contact us about it.'}
    ]
  }
}
export default function SupportPage({kind}:{kind:keyof typeof pages}) {
  const page=pages[kind]
  useWhatsAppMessage(`Hi myCHEF Dubai, I would like to discuss a household chef. (via mychef.ae${page.path})`)
  const canonical='canonical' in page ? page.canonical : page.path
  const noindex='noindex' in page && page.noindex
  return <div><SEO title={page.title} description={page.intro} canonicalPath={canonical} noindex={noindex} schema={faqPageSchema(page.faqs.map(f=>({question:f.q,answer:f.a}))) || undefined}/><PageHero eyebrow="MYCHEF · YOUR HOUSEHOLD" title={page.h1} subtitle={page.intro} cta={{label:'Find my chef',href:`/inquiry?from=${page.path}`}} secondaryCta={{label:'Explore plans & prices',href:'/private-chef-dubai/pricing'}}/><ClusterNav/>
    <ChefSection eyebrow={page.eyebrow} title={page.heading}><div className="pc-split"><ServiceImage imageKey={page.image}/><div className="pc-prose"><p className="pc-lead">{page.body}</p><Link className="pc-link" to="/our-chefs">Explore chef profiles →</Link></div></div></ChefSection>
    {kind==='process' && <ChefSection eyebrow="Five simple steps" title="From your brief to the first meal." tone="pc-tone-cream"><div className="pc-prose"><ChefJourney/></div></ChefSection>}
    <ChefSection eyebrow="The details behind the service" title="Clear from the start." tone={kind==='process'?'':'pc-tone-cream'}><div className="pc-detail-grid">{page.blocks.map(([title,body],i)=><article key={title}><p className="pc-eyebrow">0{i+1}</p><h3>{title}</h3><p>{body}</p></article>)}</div></ChefSection>
    {kind==='matching' && <TeamCapability/>}
    <ChefSection eyebrow="Useful to know" title="Your questions, answered."><div className="pc-prose"><FaqAccordion items={page.faqs} defaultOpen={-1}/></div></ChefSection><ChefEnquiry/>
  </div>
}
