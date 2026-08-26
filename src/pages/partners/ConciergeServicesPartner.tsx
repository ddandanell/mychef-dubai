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
      description="Concierge Services Partnership Dubai — Partner with myCHEF Dubai to offer your concierge clients exclusive private chef and luxury catering experiences…"
      canonicalPath="/partners/concierge-services-dubai"
      ogImage="/images/luxury-dining-dubai-hero.webp"
      headline="Concierge Partnership Dubai"
      eyebrow="FOR CONCIERGE & LIFESTYLE SERVICES"
      subheadline="Provide your clients with private chefs, in-villa dining, yacht catering, and exclusive culinary experiences."
      intro="A Culinary Partner for Discerning Clients"
      valueProposition="Luxury concierge clients expect access to the extraordinary. Partner with myCHEF Dubai to deliver private chefs, bespoke dinners, yacht catering, and celebration dining — all coordinated discreetly and professionally for your members."
      benefits={[
        { icon: ConciergeBell, title: 'Bespoke Experiences', description: 'From private chef dinners to surprise celebrations, we design culinary experiences around each client.' },
        { icon: TrendingUp, title: 'Premium Service Layer', description: 'Add a high-value dining service to your concierge membership or per-request offering.' },
        { icon: Shield, title: 'Discreet & Professional', description: 'Confidentiality, punctuality, and polished service for VIPs, celebrities, and high-net-worth individuals.' },
        { icon: Users, title: 'Priority Concierge Desk', description: 'A dedicated WhatsApp line and account manager for fast quotes and last-minute requests.' },
        { icon: Briefcase, title: 'Flexible Arrangements', description: 'Commission, retainer, or referral models tailored to your concierge business.' },
      ]}
      howItWorks={[
        'We set up a partner agreement and dedicated communication channel for your concierge team.',
        'Your clients request private chef or catering experiences through your usual workflow.',
        'We deliver a tailored proposal, confirm details, and execute the experience.',
        'You receive regular partner updates and preferred access for high-demand dates.',
      ]}
      ctaText="Discuss Concierge Partnership"
      heroImage="/images/luxury-dining-dubai-hero.webp"
      breadcrumbLabel="Concierge Services Partnership"
      campaign="concierge-services-partner"
    />
  )
}
