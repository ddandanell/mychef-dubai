// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /partner-with-us
//     primary:     "catering partnerships dubai"
//     subkeywords: "become a catering partner dubai" · "chef partnership dubai" · "work with mychef dubai" · "catering services list" · "top catering services providers in dubai" · "partnership catering business" · "catering requirements for events" · "catering services list of menu" · "catering examples"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { Phone, Building2, Ship, HeartHandshake, Briefcase, CheckCircle2 } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import TrustSignalStrip from '../components/TrustSignalStrip'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I am interested in exploring a partnership (via mychef.ae/partner-with-us)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const SLUG = 'partner-with-us'

const partnerTypes = [
  {
    icon: Building2,
    title: 'Villa and estate managers',
    description: 'A chef or a welcome dinner as an add-on to a stay. We run the menu, service and clear-down. You keep the guest relationship.',
  },
  {
    icon: Ship,
    title: 'Yacht charter operators',
    description: 'Onboard food for a day cruise, a sunset sitting or a deck grill, planned around the galley and boarding, not copied from a villa menu.',
  },
  {
    icon: HeartHandshake,
    title: 'Wedding and event planners',
    description: 'A catering partner for weddings, rehearsal dinners and private celebrations. One contact, an itemised quote, staff sized to the room.',
  },
  {
    icon: Briefcase,
    title: 'Corporate concierge and HR',
    description: 'Board lunches, team meals and company nights on one account. Recurring weeks sit on office catering. One-off nights sit on corporate events.',
  },
]

const benefits = [
  'Commission or referral credit, agreed in writing before any introduction',
  'Proposals your client can approve: food, staff, hire and 5% VAT as separate lines',
  'One named contact. We typically reply within 15 minutes during business hours',
  'Chefs checked before they enter a house: identity, right to work, cooking assessment, references',
  'Formats named: drop-off, buffet, canapés, stations, plated',
  'Palm Jumeirah, Marina, Downtown, Emirates Hills and the wider city, subject to access',
]

const faqs = [
  {
    q: 'Who can partner with myCHEF Dubai?',
    a: 'Villa rental agencies, yacht charter companies, wedding planners, event agencies, corporate concierges, luxury real estate brokers, and private members clubs are all natural partners.',
  },
  {
    q: 'How does the partnership work?',
    a: 'You introduce a client who needs a chef or catering. We send an itemised proposal, run the booking, and pay the commission or credit agreed in writing.',
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
  provider: { '@id': 'https://www.mychef.ae/#organization' },
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
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Partner With Us', item: `https://www.mychef.ae/${SLUG}` },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

export default function PartnerWithUs() {
  useScrollTrigger()
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
        title="Catering Partnerships Dubai | myCHEF"
        description="Catering partnerships Dubai for villa managers, yacht charters, planners and concierge teams. You keep the client. We run the kitchen."
        canonicalPath={`/${SLUG}`}
        ogImage="/images/case-studies-hero.webp"
        schema={schema}
      />

      <PageHero
        eyebrow="Partnerships"
        title="Catering Partnerships Dubai"
        subtitle={"A catering partnership that supports your client relationship, with referral arrangements or commission agreed in writing before introductions."}
        image="/images/case-studies-hero.webp"
        imageAlt="myCHEF Dubai partnership opportunities"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Partner With Us' }]}
        minHeight="tall"
        overlay="dark"
      />

      <TrustSignalStrip />

      <div className="bg-white section-padding">
        <div className="partner-body container-custom max-w-[1000px]">
          <section className="partner-section opacity-0 translate-y-8 mb-12 text-center">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed max-w-[800px] mx-auto mb-5">
              Catering partnerships in Dubai support villa managers, yacht operators, event planners and concierge teams whose clients need a chef or event menu. We coordinate the culinary service around your brief, with clear responsibilities and commercial terms.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed max-w-[800px] mx-auto">
              Terms are written before the first introduction. We do not publish a shop rate for commission. Volume, client type and the job decide it.
            </p>
          </section>

          <section className="partner-section opacity-0 translate-y-8 mb-16">
            <h2 className="font-playfair text-h2 text-black text-center mb-10">Who this page is for</h2>
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
            <h2 className="font-playfair text-h2 text-black text-center mb-10">How the arrangement actually runs</h2>
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
            <h2 className="font-playfair text-h3 text-black mb-4">Catering Partnerships Dubai: Become a myCHEF Partner</h2>
            <p className="font-inter text-body text-gray-500 max-w-[600px] mx-auto mb-8">
              Tell us about your business and the clients you serve. We will reply within one business day with partnership options and next steps.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/inquiry"
                className="btn-primary inline-flex items-center gap-2"
              >
                Request Partnership Info
              </Link>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2">
                <Phone size={16} />
                Discuss on WhatsApp
              </a>
            </div>
            <p className="font-inter text-sm text-gray-400 mt-6">
              Or email us at <a href="mailto:info@mychef.ae" className="text-gold hover:text-gold-light underline underline-offset-4">info@mychef.ae</a>
            </p>
            <p className="font-inter text-sm text-gray-400 mt-4">
              Need logos, bios, or media assets? Download everything from our{' '}
              <Link to="/press" className="text-gold hover:text-gold-light underline underline-offset-4">
                press kit
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
