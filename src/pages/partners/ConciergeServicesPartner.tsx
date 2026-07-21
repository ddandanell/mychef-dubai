import PartnerPageTemplate from './PartnerPageTemplate'
import { ConciergeBell, TrendingUp, Shield, Users, Briefcase } from 'lucide-react'

export default function ConciergeServicesPartner() {
  return (
    <PartnerPageTemplate
      name="Concierge Services"
      seoTitle="Concierge Partnership Dubai | Catering"
      description="Partner with myCHEF Dubai to offer your concierge clients exclusive private chef and luxury catering experiences across Dubai."
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
