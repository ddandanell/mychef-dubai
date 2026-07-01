import SEO from '@/components/SEO'
import TrustBar from '@/components/TrustBar'
import HeroSection from '@/sections/HeroSection'
import ServicesSection from '@/sections/ServicesSection'
import TrustSection from '@/sections/TrustSection'
import HowItWorksSection from '@/sections/HowItWorksSection'
import LocationsSection from '@/sections/LocationsSection'
import TestimonialsSection from '@/sections/TestimonialsSection'
import TeamSection from '@/sections/TeamSection'
import CTASection from '@/sections/CTASection'
import StarterPackagesSection from '@/sections/StarterPackagesSection'
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
      <TestimonialsSection />
      <TeamSection />
      <CTASection />
      <LeadMagnetModal />
    </>
  )
}
