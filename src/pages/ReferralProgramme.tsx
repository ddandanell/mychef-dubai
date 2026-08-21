import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { Gift, Users, MessageCircle, Wallet, Check, Phone } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import TrustSignalStrip from '../components/TrustSignalStrip'
import { breadcrumbSchema, serviceSchema } from '../utils/schema'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to join the referral programme (via mychef.ae/referral-programme)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const howItWorks = [
  {
    icon: Users,
    step: '01',
    title: 'Share myCHEF Dubai',
    description: 'Tell friends, family, or colleagues about your myCHEF experience and share your unique referral link or name.',
  },
  {
    icon: MessageCircle,
    step: '02',
    title: 'They Book an Experience',
    description: 'Your referral books any private chef or catering experience with us and mentions your name at inquiry.',
  },
  {
    icon: Wallet,
    step: '03',
    title: 'You Both Save',
    description: 'Your referral gets AED 100 off their first booking. You receive AED 100 credit towards your next myCHEF experience.',
  },
]

const benefits = [
  'AED 100 credit for every friend who books',
  'Your friend also receives AED 100 off their first booking',
  'No limit on referrals — share as often as you like',
  'Credit applies to any private chef or catering booking',
  'Track your referrals via WhatsApp with your account manager',
]

const terms = [
  'The referred customer must be a new myCHEF Dubai client.',
  'The referee must mention your name at the time of inquiry or booking.',
  'AED 100 credit is issued after the referred booking is confirmed and paid.',
  'Credits cannot be exchanged for cash and must be used within 12 months.',
  'Credits are valid for private chef and catering bookings only.',
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    serviceSchema(
      'myCHEF Dubai Referral Programme',
      'Give AED 100, Get AED 100. Refer friends to myCHEF Dubai private chef and catering services and earn booking credit.',
      'Service',
      'Dubai',
    ),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Referral Programme', path: '/referral-programme' },
    ]),
  ],
}

export default function ReferralProgramme() {
  useScrollTrigger()
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return
    gsap.to('.ref-fade', {
      scrollTrigger: { trigger: '.ref-fade', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })
    gsap.to('.ref-card', {
      scrollTrigger: { trigger: '.ref-cards', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Referral Programme Dubai | Give & Get AED 100"
        description="Refer friends to myCHEF Dubai and earn AED 100 credit for every booking. Your friend also receives AED 100 off their first private chef or catering experience."
        canonicalPath="/referral-programme"
        ogImage="/images/celebration-catering-dubai-hero.webp"
        schema={schema}
      />

      <PageHero
        eyebrow="REFER & REWARD"
        title="Give AED 100, Get AED 100"
        subtitle="Share myCHEF Dubai with friends and family. They save on their first booking, and you earn credit towards your next experience."
        image="/images/celebration-catering-dubai-hero.webp"
        imageAlt="myCHEF Dubai referral programme"
        cta={{ label: 'Join the Referral Programme', href: WHATSAPP_LINK, external: true }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Referral Programme' }]}
        minHeight="tall"
        overlay="dark"
      />
      <TrustSignalStrip />

      {/* How It Works */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12 ref-fade opacity-0 translate-y-8">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">How It Works</span>
            <h2 className="font-playfair text-h2 text-black">Three Steps to Earn Credit</h2>
          </div>
          <div className="ref-cards grid md:grid-cols-3 gap-6">
            {howItWorks.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="ref-card opacity-0 translate-y-8 bg-white p-8 border-t-[3px] border-gold text-center">
                  <Icon size={36} className="text-gold mx-auto mb-4" />
                  <span className="font-inter text-caption text-gold uppercase tracking-wider">Step {item.step}</span>
                  <h3 className="font-playfair text-h3 text-black mt-2 mb-3">{item.title}</h3>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="ref-fade opacity-0 translate-y-8">
              <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">Why Refer</span>
              <h2 className="font-playfair text-h2 text-white mb-6">Share Great Food, Earn Great Rewards</h2>
              <p className="font-inter text-body text-gray-400 leading-relaxed mb-6">
                The best recommendations come from people who have experienced myCHEF firsthand. Our referral programme rewards you for spreading the word about exceptional private dining and catering in Dubai.
              </p>
              <ul className="space-y-3">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={18} className="text-gold flex-shrink-0 mt-1" />
                    <span className="font-inter text-body text-gray-300">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="ref-fade opacity-0 translate-y-8 bg-charcoal p-8 md:p-10">
              <Gift size={48} className="text-gold mb-6" />
              <h3 className="font-playfair text-h3 text-white mb-3">Ready to Start Referring?</h3>
              <p className="font-inter text-body text-gray-400 leading-relaxed mb-6">
                Send us a WhatsApp message with your name and the phrase “Referral Programme” to activate your account and receive your personalised referral details.
              </p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 w-full text-center justify-center">
                <Phone size={16} />
                Join on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[800px]">
          <div className="ref-fade opacity-0 translate-y-8 text-center mb-10">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">Terms</span>
            <h2 className="font-playfair text-h2 text-black">Referral Programme Terms</h2>
          </div>
          <div className="ref-fade opacity-0 translate-y-8 space-y-4">
            {terms.map((t, i) => (
              <div key={i} className="flex items-start gap-3 p-5 bg-cream">
                <Check size={18} className="text-gold flex-shrink-0 mt-0.5" />
                <span className="font-inter text-body text-gray-600">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-charcoal to-black py-24">
        <div className="container-custom text-center ref-fade opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">Start Earning Today</h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Join the myCHEF referral programme on WhatsApp and start sharing AED 100 rewards with your network.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
              <Phone size={16} />
              Join on WhatsApp
            </a>
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=referral-programme" className="btn-secondary">
              Send an Inquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
