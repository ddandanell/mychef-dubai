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
        title="Private Chef & Catering Dubai | Villas, Yachts, Events | myCHEF"
        description="Private chef and catering in Dubai for villas, yachts and homes. Vetted chefs, bespoke menus, halal-first, full service. Quote in 15 minutes."
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
            Looking for something different? Explore{' '}
            <Link to="/gift-cards" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">myCHEF gift cards</Link>,
            {' '}book a <Link to="/private-cooking-classes-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private cooking class in Dubai</Link>,
            {' '}or join the <Link to="/vip-club" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">VIP Club</Link> for priority access and exclusive menus.
            {' '}For your main event, browse <Link to="/catering" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link>.
          </p>
        </div>
      </section>

      <TeamSection />

      <CTASection />
      <LeadMagnetModal />
    </>
  )
}
