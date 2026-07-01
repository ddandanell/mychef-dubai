import { Link } from 'react-router'
import SEO from '@/components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | myCHEF Dubai"
        description="We couldn't find that page. Explore myCHEF Dubai's private chef, catering, and luxury dining services, or request a custom quote."
        canonicalPath="/404"
      />
      <section className="relative min-h-[80dvh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-black to-black" />
        <div className="relative z-10 container-custom text-center max-w-[640px] py-24">
          <span className="font-inter text-caption font-medium uppercase tracking-[0.1em] text-gold mb-4 block">
            404 Error
          </span>
          <h1 className="font-playfair text-fluid-h1 text-white leading-tight">
            Page Not Found
          </h1>
          <p className="mt-5 md:mt-6 font-inter text-base md:text-body-lg text-white/70 leading-relaxed">
            Sorry, the page you're looking for doesn't exist or has been moved. Let us help you plan an unforgettable dining experience instead.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary text-center">
              Back to Home
            </Link>
            <Link to="/inquiry" className="btn-secondary text-center">
              Request a Proposal
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
