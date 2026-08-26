// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /partners/villa-rentals-dubai
//     primary:     "villa rentals partnership dubai"
//     subkeywords: "catering partner for holiday homes dubai" · "villa catering package dubai" · "villa private chef" · "cooks villa near me" · "holiday villa with chef" · "aston villa head chef" · "caribbean villa with chef" · "chef cannavacciuolo villa"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import PartnerPageTemplate from './PartnerPageTemplate'
import { Home, TrendingUp, Shield, Users, Briefcase } from 'lucide-react'

export default function VillaRentalsPartner() {
  return (
    <PartnerPageTemplate
      name="Villa Rentals"
      seoTitle="Villa Rentals Partnership Dubai | Chef"
      description="Villa Rentals Partnership Dubai — Partner with myCHEF Dubai to offer premium in-villa private chef and catering services to your guests. Enhance your villa…"
      canonicalPath="/partners/villa-rentals-dubai"
      ogImage="/images/villa-catering-dubai-hero.webp"
      headline="Villa Rental Partnership Dubai"
      eyebrow="FOR VILLA RENTAL COMPANIES"
      subheadline="Give your guests an unforgettable in-villa dining experience with a private chef and full-service dining coordination."
      intro="Add a Premium Dining Experience to Every Villa Stay"
      valueProposition="Dubai’s luxury villa rental guests expect more than a beautiful property — they expect memorable experiences. Partner with myCHEF Dubai to offer bespoke private chef dinners, breakfast hampers, BBQs, and celebration dining directly to your guests, managed end-to-end by our coordination team."
      benefits={[
        { icon: Home, title: 'In-Villa Private Chef', description: 'A private chef prepares breakfast, lunch, dinner, or events in the villa kitchen, so guests never need to leave the property.' },
        { icon: TrendingUp, title: 'Higher Booking Value', description: 'Differentiate your listings and increase average booking value with an exclusive dining add-on.' },
        { icon: Shield, title: 'Trusted & Insured', description: 'All chefs and service staff are vetted, insured, and trained for luxury residential environments.' },
        { icon: Users, title: 'Dedicated Partner Support', description: 'A single point of contact for bookings, menu planning, and last-minute guest requests.' },
        { icon: Briefcase, title: 'Commission or Referral Model', description: 'Flexible partnership structures including commission, referral fees, or package bundling.' },
      ]}
      howItWorks={[
        'We agree a partnership model that suits your villa rental business and guest profile.',
        'Your guests browse a curated menu or contact us directly through a dedicated partner channel.',
        'We handle menu planning, chef allocation, grocery sourcing, and in-villa service.',
        'You receive regular reporting and a seamless guest experience that reflects well on your brand.',
      ]}
      ctaText="Discuss Villa Partnership"
      heroImage="/images/villa-catering-dubai-hero.webp"
      breadcrumbLabel="Villa Rentals Partnership"
      campaign="villa-rentals-partner"
    />
  )
}
