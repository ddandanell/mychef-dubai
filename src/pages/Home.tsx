// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /
//     primary:     "private chef and catering dubai"
//     subkeywords: "luxury catering dubai" · "fine dining at home dubai" · "mychef dubai" · "private chef in dubai" · "top chef offering catering in dubai" · "catering company in uae" · "food catering companies in dubai" · "private chef or catering" · "private chef home catering" · "chef private catering options" · "private chef party catering" · "private chef dinner near me"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { Link } from 'react-router'
import SEO from '@/components/SEO'
import TrustSignalStrip from '@/components/TrustSignalStrip'
import LocationStrip from '@/components/LocationStrip'
import HeroSection from '@/sections/HeroSection'
import ServicesSection from '@/sections/ServicesSection'
import TrustSection from '@/sections/TrustSection'
import HowItWorksSection from '@/sections/HowItWorksSection'
import LocationsSection from '@/sections/LocationsSection'
import ReviewInviteSection from '@/sections/ReviewInviteSection'
import TeamSection from '@/sections/TeamSection'
import CTASection from '@/sections/CTASection'
import StarterPackagesSection from '@/sections/StarterPackagesSection'
import GuidesTeaserSection from '@/sections/GuidesTeaserSection'
import LeadMagnetModal from '@/sections/LeadMagnetModal'
import { homepageGraph } from '@/lib/organizationSchema'

export default function Home() {
  return (
    <>
      <SEO
        title="Private Chef and Catering Dubai | Villas, Yachts, Events | myCHEF"
        description="Private chef and catering Dubai villas, yachts and events book through myCHEF — vetted chefs, one contact, designed around the table you are hosting."
        canonicalPath="/"
        ogImage="/images/home-hero.webp"
        preloadHero="/images/home-hero.webp"
        hideSiteName
        schema={homepageGraph()}
      />
      <HeroSection />
      <TrustSignalStrip />
      <ServicesSection />
      <StarterPackagesSection
        campaign="home"
        eyebrow="INDICATIVE PRICING"
        title="How much does a private chef or luxury dining package cost in Dubai?"
        subtitle="Ready-to-book starting points for Dubai's most requested private chef and luxury dining experiences."
      />
      <TrustSection />
      <HowItWorksSection />
      <LocationsSection />
      <LocationStrip title="Private chef & luxury dining across Dubai" />
      <ReviewInviteSection />
      <GuidesTeaserSection />

      {/* Experience links */}
      <section className="bg-white py-12">
        <div className="container-custom max-w-[900px] text-center">
          <p className="font-inter text-body text-gray-500 leading-relaxed">
            Start with{' '}
            <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private chef</Link>
            {', '}
            <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">catering</Link>
            {', '}
            <Link to="/events" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">events</Link>
            {' or '}
            <Link to="/weekly-meal-prep-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">weekly meal prep</Link>
            . Fine dining at home in Dubai is the same house: one brief, one team, one table.
          </p>
        </div>
      </section>

      <TeamSection />

      <CTASection />
      <LeadMagnetModal />
    </>
  )
}
