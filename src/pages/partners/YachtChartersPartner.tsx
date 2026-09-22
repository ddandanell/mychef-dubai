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
      seoTitle="Yacht Charters Partnership Dubai | myCHEF"
      description="Yacht charters partnership Dubai: add a chef or catering to a charter. Galley, boarding and holding planned with the crew. Terms in writing."
      canonicalPath="/partners/yacht-charters-dubai"
      ogImage="/images/yacht-catering-dubai-hero.webp"
      headline="Yacht Charters Partnership Dubai"
      eyebrow="FOR YACHT CHARTER COMPANIES"
      subheadline={"Private chefs and catering packages for yacht charters, with menus, loading and service tailored to the vessel and itinerary."}
      intro="The food has to match the boat, not a restaurant floor plan."
      valueProposition={"Offer your charter guests a private dinner, sunset canapés or an agreed deck grill. We plan around galley facilities, chilled storage, boarding and the captain’s schedule. Any commission or packaged rate is confirmed in writing with your charter team."}
      benefits={[
        { icon: Ship, title: 'Onboard cooking that fits the galley', description: 'Menus written for limited oven, grill and fridge space. Much of the work is done on land before boarding.' },
        { icon: TrendingUp, title: 'A food line you can add to the charter', description: 'Canapés, a grill, or a seated sitting in the saloon. Quoted as its own line, not hidden in the boat rate.' },
        { icon: Shield, title: 'Dock-to-deck logistics', description: 'Arrival, security, parking and loading agreed with the crew. Unusual access is a separate line.' },
        { icon: Users, title: 'Your brand or ours', description: 'We can sit as a recommended partner or work under your name, as the agreement says.' },
        { icon: Briefcase, title: 'Terms before the first cruise', description: 'Referral commission or an integrated charter-and-catering package. Nothing starts on a handshake.' },
      ]}
      howItWorks={[
        'We agree a menu and service level that fits your fleet and typical charters.',
        'Your team offers the food package when the charter is booked.',
        'We coordinate provisioning, boarding and onboard service with the crew.',
        'You receive the reporting and payment named in the agreement.',
      ]}
      ctaText="Discuss Yacht Partnership"
      heroImage="/images/yacht-catering-dubai-hero.webp"
      breadcrumbLabel="Yacht Charters Partnership"
      campaign="yacht-charters-partner"
    />
  )
}
