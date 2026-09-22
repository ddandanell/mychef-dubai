// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /partners/villa-rentals-dubai
//     primary:     "villa rentals partnership dubai"
//     subkeywords: "catering partner for holiday homes dubai" · "villa catering package dubai" · "villa private chef" · "cooks villa near me" · "holiday villa with chef" · "cooks villa blackburn" · "cooks villa raipur" · "cooks villa rarotonga"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import PartnerPageTemplate from './PartnerPageTemplate'
import { Home, TrendingUp, Shield, Users, Briefcase } from 'lucide-react'

export default function VillaRentalsPartner() {
  return (
    <PartnerPageTemplate
      name="Villa Rentals"
      seoTitle="Villa Rentals Partnership Dubai | myCHEF"
      description="Villa rentals partnership Dubai: put a myCHEF team in the villa kitchen for guest breakfasts, dinners and BBQs. You keep the house; we cook and clear down."
      canonicalPath="/partners/villa-rentals-dubai"
      ogImage="/images/villa-catering-dubai-hero.webp"
      headline="Villa Rentals Partnership Dubai"
      eyebrow="FOR VILLA RENTAL COMPANIES"
      subheadline={"A villa rentals partnership in Dubai, offering guests private breakfasts, dinners, BBQs and celebration menus prepared at the property."}
      intro="Villa rentals partnership Dubai: a chef in the house"
      valueProposition={"A villa rentals partnership in Dubai adds private dining to your guests’ stay. We plan breakfasts, dinners, BBQs and celebrations around the property’s kitchen and access arrangements, with the menu, chef and service confirmed for each booking."}
      benefits={[
        { icon: Home, title: 'In-villa private chef', description: 'A private chef prepares breakfast, lunch, dinner or events in the villa kitchen, so guests do not need a restaurant reservation.' },
        { icon: TrendingUp, title: 'A dining add-on on the listing', description: 'Offer chef dinners as an add-on on the villa booking, with the kitchen work sitting with us.' },
        { icon: Shield, title: 'Vetted and insured', description: 'Chefs and service staff are vetted, insured and briefed for residential kitchens.' },
        { icon: Users, title: 'One partner contact', description: 'A single point of contact for bookings, menus and last-minute guest requests.' },
        { icon: Briefcase, title: 'Commission or referral', description: 'Partnership structures including commission, referral fees or package bundling.' },
      ]}
      howItWorks={[
        'We agree a partnership model that suits your villa rental business and guest profile.',
        'Your guests browse a menu or contact us through a dedicated partner channel.',
        'We handle menu planning, chef matching, grocery sourcing and in-villa service.',
        'You receive reporting on the bookings that ran through the partnership.',
      ]}
      ctaText="Discuss Villa Partnership"
      heroImage="/images/villa-catering-dubai-hero.webp"
      breadcrumbLabel="Villa Rentals Partnership"
      campaign="villa-rentals-partner"
    />
  )
}
