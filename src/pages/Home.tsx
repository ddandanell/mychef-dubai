// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /
//     primary:     "mychef dubai"
//     subkeywords: "my chef dubai" · "fine dining at home dubai"
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
        title={"myCHEF Dubai | Private Chefs & Exceptional Dining"}
        description={"Private chefs for your home and thoughtful catering for Dubai events. Explore household plans, private dinners and menus tailored to your occasion."}
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
        eyebrow="PRICING"
        title={"Explore our starting prices"}
        subtitle={"Compare household chef plans and popular event packages, then tell us your preferences for a tailored proposal."}
      />
      <TrustSection />
      <HowItWorksSection />
      <LocationsSection />
      <LocationStrip title="Chefs and catering across Dubai" eyebrow="Areas we cover" />
      <GuidesTeaserSection />

      {/* Experience links */}
      <section className="bg-white py-12">
        <div className="container-custom max-w-[900px] text-center">
          <p className="font-inter text-body text-gray-500 leading-relaxed">
            For regular cooking at home, explore a{' '}
            <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">household chef plan</Link>
            {' or '}
            <Link to="/weekly-meal-prep-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">weekly meal prep</Link>
            {'. For a celebration, discover '}
            <Link to="/events" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">event catering</Link>
            {' and '}
            <Link to="/yachts" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">yacht catering</Link>
            {'. You can also meet the '}
            <Link to="/our-chefs" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">chefs</Link>
            {' behind the menus. Every option starts with your preferences, your setting and the people joining you.'}
          </p>
        </div>
      </section>

      <TeamSection />

      <CTASection />
      <LeadMagnetModal />
    </>
  )
}
