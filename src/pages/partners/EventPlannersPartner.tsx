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
      seoTitle="Event Planners Partnership Dubai | myCHEF"
      description="Event planners partnership Dubai: you plan the event and hold the venue. myCHEF supplies chefs, menus, service staff and clear-down."
      canonicalPath="/partners/event-planners-dubai"
      ogImage="/images/events-catering-dubai-hero.webp"
      headline="Event Planners Partnership Dubai"
      eyebrow="FOR EVENT PLANNING COMPANIES"
      subheadline="Event planners partnership Dubai: a catering partner for weddings, corporate events and private parties. You plan the event; we run the kitchen."
      intro="Event planners partnership Dubai: you keep the brief"
      valueProposition="Event planners partnership Dubai is a catering relationship, not a second planner. myCHEF writes the menu, matches chefs and service staff, and handles service and cleanup. You keep the client, the venue and the run of show."
      benefits={[
        { icon: Calendar, title: 'Catering from brief to clear-down', description: 'Menu design, tasting, service and cleanup. We manage the food side of the event, not the whole production.' },
        { icon: TrendingUp, title: 'A kitchen you can put in the bid', description: 'Offer private chef and catering options on your proposals, with our team named and quoted.' },
        { icon: Shield, title: 'Named chefs and a backup plan', description: 'Vetted chefs, professional staff, and a backup plan so the kitchen still runs if the named chef cannot work the date.' },
        { icon: Users, title: 'One account manager', description: 'A single contact for quotes, logistics, dietary requirements and on-the-day kitchen coordination.' },
        { icon: Briefcase, title: 'Commission or referral', description: 'Written commission or referral arrangements for event planners and agencies.' },
      ]}
      howItWorks={[
        'Share the event brief, guest count and food requirements with our partner team.',
        'We send a proposal with menu options, staffing and pricing.',
        'Chefs on our team and the service team cook and serve on the day.',
        'You receive post-event reporting and terms for the next booking.',
      ]}
      ctaText="Discuss Event Partnership"
      heroImage="/images/events-catering-dubai-hero.webp"
      breadcrumbLabel="Event Planners Partnership"
      campaign="event-planners-partner"
    />
  )
}
