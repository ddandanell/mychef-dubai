// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /partners/concierge-services-dubai
//     primary:     "concierge services partnership dubai"
//     subkeywords: "catering partner for concierge companies dubai" · "partner with a private chef company dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import PartnerPageTemplate from './PartnerPageTemplate'
import { ConciergeBell, TrendingUp, Shield, Users, Briefcase } from 'lucide-react'

export default function ConciergeServicesPartner() {
  return (
    <PartnerPageTemplate
      name="Concierge Services"
      seoTitle="Concierge Services Partnership Dubai | myCHEF"
      description="Concierge services partnership Dubai: a chef or a catered night for your members. You keep the relationship. We run the kitchen. Terms in writing."
      canonicalPath="/partners/concierge-services-dubai"
      ogImage="/images/luxury-dining-dubai-hero.webp"
      headline="Concierge Services Partnership Dubai"
      eyebrow="FOR CONCIERGE TEAMS"
      subheadline="A chef at home, a villa dinner, or yacht catering, quoted for the member you already look after."
      intro="You already have the client. We run the kitchen."
      valueProposition="Concierge members ask for a chef, a dinner at home, or food on a yacht. We send an itemised proposal, check the chef, and run the night. You keep the relationship. Commission or a retainer is agreed in writing before the first introduction."
      benefits={[
        { icon: ConciergeBell, title: 'The night they asked for', description: 'A household chef visit, a dinner for guests, or a yacht sitting. The brief names the job. We do not guess it.' },
        { icon: TrendingUp, title: 'A service you can add without building a kitchen', description: 'You take the request. We quote food, staff, hire and 5% VAT as separate lines.' },
        { icon: Shield, title: 'Discretion as default', description: 'We do not publish member names. Chefs are checked before they enter a house.' },
        { icon: Users, title: 'One line for your desk', description: 'A named contact and WhatsApp. We typically reply within 15 minutes during business hours.' },
        { icon: Briefcase, title: 'Terms before the first booking', description: 'Commission, retainer or referral credit. Nothing starts on a handshake.' },
      ]}
      howItWorks={[
        'We agree the commercial terms and a contact line for your desk.',
        'Your member asks through your usual workflow.',
        'We send an itemised proposal and run the booking if they approve.',
        'You receive the credit or commission named in the agreement.',
      ]}
      ctaText="Discuss Concierge Partnership"
      heroImage="/images/luxury-dining-dubai-hero.webp"
      breadcrumbLabel="Concierge Services Partnership"
      campaign="concierge-services-partner"
    />
  )
}
