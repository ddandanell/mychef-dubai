// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /partners/yacht-charters-dubai
//     primary:     "yacht charters partnership dubai"
//     subkeywords: "catering partner for yacht charter companies dubai" · "private yacht dinner dubai price" · "dinner on a yacht" · "dubai canal dinner yacht" · "dubai marina yacht dinner cruise" · "dubai marina yacht tour with dinner" · "yacht rental dubai with dinner" · "yacht chef requirements"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import PartnerPageTemplate from './PartnerPageTemplate'
import { Ship, TrendingUp, Shield, Users, Briefcase } from 'lucide-react'

export default function YachtChartersPartner() {
  return (
    <PartnerPageTemplate
      name="Yacht Charters"
      seoTitle="Yacht Charters Partnership Dubai | Chef"
      description="Yacht Charters Partnership Dubai — Partner with myCHEF Dubai to offer private chef and catering services on your yacht charters across Dubai Marina, Palm…"
      canonicalPath="/partners/yacht-charters-dubai"
      ogImage="/images/yacht-catering-dubai-hero.webp"
      headline="Yacht Charters Partnership Dubai"
      eyebrow="FOR YACHT CHARTER COMPANIES"
      subheadline="Elevate every charter with onboard private chef dining, canapés, BBQs, and tailored menus."
      intro="Turn Every Charter Into a Culinary Experience"
      valueProposition="Guests chartering yachts in Dubai expect world-class service. Partner with myCHEF Dubai to add a private chef or catering package to every voyage, from sunset canapés and deck BBQs to multi-course formal dinners on the water."
      benefits={[
        { icon: Ship, title: 'Onboard Private Chef', description: 'Experienced maritime chefs who understand yacht galleys and deliver restaurant-quality dining at sea.' },
        { icon: TrendingUp, title: 'Premium Upsell', description: 'Add a high-margin culinary experience to your charter packages and increase overall revenue per booking.' },
        { icon: Shield, title: 'Maritime-Ready Team', description: 'Chefs and service staff experienced in dock-to-deck logistics across Dubai Marina, Dubai Harbour, and Palm Jumeirah.' },
        { icon: Users, title: 'White-Label Service', description: 'We can operate under your brand or as a recommended partner, whichever suits your client relationship.' },
        { icon: Briefcase, title: 'Flexible Commercial Terms', description: 'Choose from commission-based referrals or integrated charter-and-catering packages.' },
      ]}
      howItWorks={[
        'We design a yacht catering menu and service level to match your fleet and typical charters.',
        'Your team offers the dining package during the charter booking process.',
        'We coordinate provisioning, chef boarding, and onboard service for the scheduled cruise.',
        'Guests enjoy a seamless dining experience and you receive partner reporting and remuneration.',
      ]}
      ctaText="Discuss Yacht Partnership"
      heroImage="/images/yacht-catering-dubai-hero.webp"
      breadcrumbLabel="Yacht Charters Partnership"
      campaign="yacht-charters-partner"
    />
  )
}
