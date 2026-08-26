// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /partners/event-planners-dubai
//     primary:     "event planners partnership dubai"
//     subkeywords: "catering partner for event planners dubai" · "a gala event catering" · "catering event dubai" · "how to cater an event" · "event catering near me for birthday party" · "event catering at home" · "event catering ballarat" · "event catering bbq"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import PartnerPageTemplate from './PartnerPageTemplate'
import { Calendar, TrendingUp, Shield, Users, Briefcase } from 'lucide-react'

export default function EventPlannersPartner() {
  return (
    <PartnerPageTemplate
      name="Event Planners"
      seoTitle="Event Planners Partnership Dubai"
      description="Event Planners Partnership Dubai — Partner with myCHEF Dubai for reliable, premium catering and private chef services for your events across Dubai."
      canonicalPath="/partners/event-planners-dubai"
      ogImage="/images/events-catering-dubai-hero.webp"
      headline="Event Planner Partnership Dubai"
      eyebrow="FOR EVENT PLANNING COMPANIES"
      subheadline="A premium catering partner for weddings, corporate events, private parties, and luxury celebrations."
      intro="Deliver Flawless Catering for Every Event"
      valueProposition="Event planners need catering partners they can trust. myCHEF Dubai coordinates bespoke menus, professional chefs, service staff, and full event catering — so you can focus on the experience while the chef team handles the food."
      benefits={[
        { icon: Calendar, title: 'End-to-End Event Catering', description: 'From menu design and tasting to service and cleanup, we manage the culinary side of your events end-to-end.' },
        { icon: TrendingUp, title: 'Win More Bids', description: 'Offer your clients premium private chef and catering options that elevate your event proposals.' },
        { icon: Shield, title: 'Reliable Execution', description: 'Vetted chefs, professional staff, and backup plans so every event runs smoothly.' },
        { icon: Users, title: 'Dedicated Event Support', description: 'A single account manager for quotes, logistics, dietary requirements, and on-the-day coordination.' },
        { icon: Briefcase, title: 'Revenue Share Options', description: 'Transparent commission or referral arrangements for event planners and agencies.' },
      ]}
      howItWorks={[
        'Share your event brief, guest count, and culinary requirements with our partner team.',
        'We provide a tailored proposal with menu options, staffing, and pricing.',
        'Chefs on our team and our service team execute the catering on the day of the event.',
        'You receive post-event reporting and partner benefits for future bookings.',
      ]}
      ctaText="Discuss Event Partnership"
      heroImage="/images/events-catering-dubai-hero.webp"
      breadcrumbLabel="Event Planners Partnership"
      campaign="event-planners-partner"
    />
  )
}
