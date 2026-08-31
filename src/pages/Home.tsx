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
        title="Private Chef Dubai & Event Catering | myCHEF"
        description="A chef who cooks in your kitchen, or catering for events of any size in Dubai. Every chef is vetted before they cook for you."
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
        title="How much does a private chef or luxury dining package cost in Dubai?"
        subtitle="Real starting prices for the evenings we are asked for most. Tell us your date and guest count and we will shape one around you."
      />
      <TrustSection />
      <HowItWorksSection />
      <LocationsSection />
      <LocationStrip title="Private chef & luxury dining across Dubai" eyebrow="Areas we cover" />
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
            . Whichever you choose, it is the same team behind it — one brief, one kitchen, one table.
          </p>
        </div>
      </section>

      <TeamSection />

      <CTASection />
      <LeadMagnetModal />
    </>
  )
}
