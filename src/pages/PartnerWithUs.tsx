import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Phone, Building2, Ship, HeartHandshake, Briefcase, CheckCircle2 } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I am interested in exploring a partnership (via mychef.ae/partner-with-us)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const SLUG = 'partner-with-us'

const partnerTypes = [
  {
    icon: Building2,
    title: 'Villa & Estate Managers',
    description: 'Offer your guests a private chef or catered welcome dinner as an optional add-on. We handle the menu, service, and clean-up — you handle the booking.',
  },
  {
    icon: Ship,
    title: 'Yacht Charter Operators',
    description: 'Upgrade your charter packages with a dedicated chef or curated menu for day cruises, sunset dinners, and special celebrations on the water.',
  },
  {
    icon: HeartHandshake,
    title: 'Wedding & Event Planners',
    description: 'Add a reliable private chef and catering partner to your vendor list for intimate weddings, rehearsal dinners, and luxury celebrations.',
  },
  {
    icon: Briefcase,
    title: 'Corporate Concierge & HR',
    description: 'Provide boardroom dining, team lunches, and executive entertaining with a single, vetted catering partner across Dubai business districts.',
  },
]

const benefits = [
  'Commission or referral credit on every confirmed booking',
  'Co-branded menu proposals for your clients',
  'Dedicated point of contact and fast quote turnaround',
  'Vetted chefs with background checks and insurance',
  'Flexible service styles: plated, buffet, canapés, live stations',
  'Coverage across Dubai, including Palm Jumeirah, Marina, Downtown, Emirates Hills',
]

const faqs = [
  {
    q: 'Who can partner with myCHEF Dubai?',
    a: 'Villa rental agencies, yacht charter companies, wedding planners, event agencies, corporate concierges, luxury real estate brokers, and private members clubs are all natural partners.',
  },
  {
    q: 'How does the partnership work?',
    a: 'You introduce clients who need private chef or catering services. We prepare a tailored proposal, execute the event, and share a commission or credit on confirmed bookings.',
  },
  {
    q: 'What is the commission structure?',
    a: 'Partners typically receive a percentage of the event value or a fixed referral credit. Exact terms depend on volume, client type, and service complexity, and are agreed in writing before any referral.',
  },
  {
    q: 'Do you provide marketing materials?',
    a: 'Yes. We can supply one-pagers, sample menus, package pricing, and co-branded proposals you can share with your clients or guests.',
  },
  {
    q: 'How quickly can you quote?',
    a: 'Most partnership quotes are returned within one business day, often sooner for repeat partners with established packages.',
  },
]

const serviceSchema = {
  '@type': 'Service',
  name: 'myCHEF Dubai Partnership Program',
  description: 'Partner with myCHEF Dubai to offer private chef and luxury catering services to your villa guests, yacht charter clients, wedding parties, and corporate contacts.',
  provider: { '@type': 'Organization', name: 'myCHEF Dubai', url: 'https://mychef.ae' },
  areaServed: { '@type': 'City', name: 'Dubai' },
  serviceType: 'Private chef and catering partnership program',
}

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Partner With Us', item: `https://mychef.ae/${SLUG}` },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

export default function PartnerWithUs() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.partner-section', {
      scrollTrigger: { trigger: '.partner-body', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
    })

    gsap.to('.partner-cta', {
      scrollTrigger: { trigger: '.partner-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Partner With Us | myCHEF Dubai | Private Chef & Catering Partnerships"
        description="Partner with myCHEF Dubai to offer private chef and luxury catering services to villa guests, yacht charter clients, wedding parties, and corporate contacts."
        canonicalPath={`/${SLUG}`}
        ogImage="/images/case-studies-hero.webp"
        schema={schema}
      />

      <PageHero
        eyebrow="Partnerships"
        title="Partner With myCHEF Dubai"
        subtitle="Give your guests, clients, and members access to Dubai's most discreet private chef and luxury catering service — and earn commission on every booking."
        image="/images/case-studies-hero.webp"
        imageAlt="myCHEF Dubai partnership opportunities"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Partner With Us' }]}
        minHeight="tall"
        overlay="dark"
      />

      <div className="bg-white section-padding">
        <div className="partner-body container-custom max-w-[1000px]">
          <section className="partner-section opacity-0 translate-y-8 mb-12 text-center">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed max-w-[800px] mx-auto">
              Whether you manage luxury villas, charter yachts, plan weddings, or run corporate concierge services, myCHEF Dubai can become the private chef partner your clients expect. We bring the culinary team, the menus, and the service standards — you bring the relationship.
            </p>
          </section>

          <section className="partner-section opacity-0 translate-y-8 mb-16">
            <h2 className="font-playfair text-h2 text-black text-center mb-10">Who We Partner With</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {partnerTypes.map((type) => (
                <div key={type.title} className="bg-cream p-6 md:p-8">
                  <type.icon size={32} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h4 text-black mb-2">{type.title}</h3>
                  <p className="font-inter text-body text-gray-500 leading-relaxed">{type.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="partner-section opacity-0 translate-y-8 mb-16">
            <h2 className="font-playfair text-h2 text-black text-center mb-10">Why Partners Choose myCHEF Dubai</h2>
            <div className="grid sm:grid-cols-2 gap-4 max-w-[800px] mx-auto">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-gold flex-shrink-0 mt-0.5" />
                  <span className="font-inter text-body text-gray-500 leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="partner-section opacity-0 translate-y-8 mb-16">
            <h2 className="font-playfair text-h2 text-black text-center mb-10">How It Works</h2>
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="font-playfair text-display-mobile text-gold mb-2">01</div>
                <h3 className="font-playfair text-h4 text-black mb-2">Introduce your client</h3>
                <p className="font-inter text-body text-gray-500 leading-relaxed">Share the event details with us via WhatsApp or email.</p>
              </div>
              <div>
                <div className="font-playfair text-display-mobile text-gold mb-2">02</div>
                <h3 className="font-playfair text-h4 text-black mb-2">We design a proposal</h3>
                <p className="font-inter text-body text-gray-500 leading-relaxed">We create a tailored menu and service plan for your client.</p>
              </div>
              <div>
                <div className="font-playfair text-display-mobile text-gold mb-2">03</div>
                <h3 className="font-playfair text-h4 text-black mb-2">You earn on every booking</h3>
                <p className="font-inter text-body text-gray-500 leading-relaxed">Receive commission or credit after the event is confirmed and executed.</p>
              </div>
            </div>
          </section>

          <section className="partner-section opacity-0 translate-y-8 mb-16">
            <h2 className="font-playfair text-h2 text-black text-center mb-10">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {faqs.map((f, i) => (
                <div key={i}>
                  <h3 className="font-playfair text-h4 text-black mb-2">{f.q}</h3>
                  <p className="font-inter text-body text-gray-500 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="partner-cta opacity-0 translate-y-8 bg-cream p-8 md:p-12 text-center">
            <h2 className="font-playfair text-h3 text-black mb-4">Become a myCHEF Partner</h2>
            <p className="font-inter text-body text-gray-500 max-w-[600px] mx-auto mb-8">
              Tell us about your business and the clients you serve. We will reply within one business day with partnership options and next steps.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
                <Phone size={16} />
                Discuss Partnership on WhatsApp
              </a>
            </div>
            <p className="font-inter text-sm text-gray-400 mt-6">
              Or email us at <a href="mailto:hallo@mychef.ae" className="text-gold hover:text-gold-light underline underline-offset-4">hallo@mychef.ae</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
