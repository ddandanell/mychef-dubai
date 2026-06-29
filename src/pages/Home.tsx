import SEO from '@/components/SEO'
import HeroSection from '@/sections/HeroSection'
import ServicesSection from '@/sections/ServicesSection'
import TrustSection from '@/sections/TrustSection'
import HowItWorksSection from '@/sections/HowItWorksSection'
import LocationsSection from '@/sections/LocationsSection'
import TestimonialsSection from '@/sections/TestimonialsSection'
import TeamSection from '@/sections/TeamSection'
import CTASection from '@/sections/CTASection'
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
      <ServicesSection />
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
