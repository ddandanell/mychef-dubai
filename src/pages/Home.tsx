import { Link } from 'react-router'
import SEO from '@/components/SEO'
import TrustBar from '@/components/TrustBar'
import LocationStrip from '@/components/LocationStrip'
import HeroSection from '@/sections/HeroSection'
import ServicesSection from '@/sections/ServicesSection'
import TrustSection from '@/sections/TrustSection'
import HowItWorksSection from '@/sections/HowItWorksSection'
import LocationsSection from '@/sections/LocationsSection'
import TestimonialsSection from '@/sections/TestimonialsSection'
import TeamSection from '@/sections/TeamSection'
import CTASection from '@/sections/CTASection'
import StarterPackagesSection from '@/sections/StarterPackagesSection'
import GuidesTeaserSection from '@/sections/GuidesTeaserSection'
import LeadMagnetModal from '@/sections/LeadMagnetModal'
import { organizationSchema, localBusinessSchema, websiteSchema } from '@/utils/schema'

export default function Home() {
  const combinedSchema = [
    organizationSchema(),
    localBusinessSchema(),
    websiteSchema(),
  ]

  return (
    <>
      <SEO
        title="Premium Private Chef & Luxury Catering Dubai"
        description="myCHEF Dubai delivers premium private chef services, luxury catering, and bespoke dining experiences across Dubai. From villas to yachts — request your custom quote today."
        canonicalPath="/"
        ogImage="/images/home-hero.webp"
        schema={combinedSchema as unknown as Record<string, unknown>}
      />
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <StarterPackagesSection
        campaign="home"
        eyebrow="INDICATIVE PRICING"
        title="How much does a private chef or catering package cost in Dubai?"
        subtitle="Ready-to-book starting points for Dubai's most requested private chef and catering experiences."
      />
      <TrustSection />
      <HowItWorksSection />
      <LocationsSection />
      <LocationStrip title="Private chef & catering across Dubai" />
      <TestimonialsSection />
      <GuidesTeaserSection />

      {/* Experience links */}
      <section className="bg-white py-12">
        <div className="container-custom max-w-[900px] text-center">
          <p className="font-inter text-body text-gray-500 leading-relaxed">
            Looking for something different? Explore{' '}
            <Link to="/gift-cards" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">myCHEF gift cards</Link>,
            {' '}book a <Link to="/private-cooking-classes-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private cooking class in Dubai</Link>,
            {' '}or join the <Link to="/vip-club" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">VIP Club</Link> for priority access and exclusive menus.
          </p>
        </div>
      </section>

      <TeamSection />

      <CTASection />
      <LeadMagnetModal />
    </>
  )
}
