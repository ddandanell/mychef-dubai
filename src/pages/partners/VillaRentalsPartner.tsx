import PartnerPageTemplate from './PartnerPageTemplate'
import { Home, TrendingUp, Shield, Users, Briefcase } from 'lucide-react'

export default function VillaRentalsPartner() {
  return (
    <PartnerPageTemplate
      name="Villa Rentals"
      seoTitle="Villa Rental Partnership Dubai | Private Chef for Guests"
      description="Partner with myCHEF Dubai to offer premium in-villa private chef and catering services to your guests. Enhance your villa rental with bespoke dining experiences."
      canonicalPath="/partners/villa-rentals-dubai"
      ogImage="/images/villa-catering-dubai-hero.webp"
      headline={<>Villa Rental<br />Partnership Dubai</>}
      eyebrow="FOR VILLA RENTAL COMPANIES"
      subheadline="Give your guests an unforgettable in-villa dining experience with a private chef and full-service catering."
      intro="Add a Premium Dining Experience to Every Villa Stay"
      valueProposition="Dubai’s luxury villa rental guests expect more than a beautiful property — they expect memorable experiences. Partner with myCHEF Dubai to offer bespoke private chef dinners, breakfast hampers, BBQs, and celebration catering directly to your guests, managed end-to-end by our team."
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
