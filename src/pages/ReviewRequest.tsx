import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Phone, MessageCircle, Gift } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I would like to leave a review and claim my AED 50 credit (via mychef.ae/review)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const SLUG = 'review'

const faqs = [
  {
    q: 'How do I claim the AED 50 credit?',
    a: 'After your event, send us your review via WhatsApp. Once we confirm your booking record, we will reply with a unique AED 50 credit code you can apply to your next private chef or catering booking.',
  },
  {
    q: 'When will I receive my credit code?',
    a: 'We typically verify and send credit codes within one business day of receiving your review.',
  },
  {
    q: 'Can I leave a review for a past event?',
    a: 'Yes. Reviews are welcome for any myCHEF Dubai event you have hosted within the last 12 months.',
  },
  {
    q: 'Is the credit valid for all services?',
    a: 'The AED 50 credit applies to private chef bookings, catering, and luxury dining experiences. It cannot be combined with other offers or applied to already discounted packages.',
  },
  {
    q: 'What should I include in my review?',
    a: 'Tell us about the food, service, and overall experience. Photos are welcome but optional. Honest feedback helps us improve and helps future hosts choose the right service.',
  },
]

const articleSchema = {
  '@type': 'Article',
  headline: 'Leave a Review & Get AED 50 Credit',
  description: 'Share your myCHEF Dubai experience and receive AED 50 credit toward your next private chef or catering booking.',
  author: { '@type': 'Organization', name: 'myCHEF Dubai Team' },
  publisher: { '@type': 'Organization', name: 'myCHEF Dubai', url: 'https://mychef.ae' },
  datePublished: '2026-07-01',
  dateModified: '2026-07-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.ae/review' },
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
    { '@type': 'ListItem', position: 2, name: 'Leave a Review', item: 'https://mychef.ae/review' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [articleSchema, faqSchema, breadcrumbSchema],
}

export default function ReviewRequest() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.review-section', {
      scrollTrigger: { trigger: '.review-body', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
    })

    gsap.to('.review-cta', {
      scrollTrigger: { trigger: '.review-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Leave a Review & Get AED 50 Credit | myCHEF Dubai"
        description="Share your myCHEF Dubai experience and receive AED 50 credit toward your next private chef or catering booking."
        canonicalPath={`/${SLUG}`}
        ogImage="/images/about-mychef-dubai-hero.webp"
        noindex={true}
        schema={schema}
      />

      <PageHero
        eyebrow="Client Feedback"
        title="Leave a Review & Get AED 50 Credit"
        subtitle="Had a myCHEF Dubai experience? Share your honest feedback via WhatsApp and receive AED 50 credit toward your next booking."
        image="/images/about-mychef-dubai-hero.webp"
        imageAlt="myCHEF Dubai client review and credit program"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Leave a Review' }]}
        minHeight="tall"
        overlay="dark"
      />

      <article className="bg-white section-padding">
        <div className="review-body container-custom max-w-[820px]">
          <div className="review-section opacity-0 translate-y-8 mb-12">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Every review helps us refine our service and helps future Dubai hosts choose the right private chef or catering experience. As a thank-you, we credit <strong>AED 50</strong> to your next booking when you share your feedback with us.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              There is no form to fill out — simply tap the WhatsApp button below, tell us about your event, and we will handle the rest.
            </p>
          </div>

          <section className="review-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-8 text-center">How the Review Credit Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-cream flex items-center justify-center">
                  <MessageCircle size={28} className="text-gold" />
                </div>
                <h3 className="font-playfair text-h4 text-black mb-2">1. Send your review</h3>
                <p className="font-inter text-body text-gray-500 leading-relaxed">
                  Tap WhatsApp and share your honest thoughts on the food, service, and overall experience.
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-cream flex items-center justify-center">
                  <Gift size={28} className="text-gold" />
                </div>
                <h3 className="font-playfair text-h4 text-black mb-2">2. Receive AED 50 credit</h3>
                <p className="font-inter text-body text-gray-500 leading-relaxed">
                  We verify your booking record and reply with a unique credit code within one business day.
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-cream flex items-center justify-center">
                  <Phone size={28} className="text-gold" />
                </div>
                <h3 className="font-playfair text-h4 text-black mb-2">3. Book again</h3>
                <p className="font-inter text-body text-gray-500 leading-relaxed">
                  Apply the credit to your next private chef, catering, or luxury dining booking in Dubai.
                </p>
              </div>
            </div>
          </section>

          <section className="review-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((f, i) => (
                <div key={i}>
                  <h3 className="font-playfair text-h4 text-black mb-2">{f.q}</h3>
                  <p className="font-inter text-body text-gray-500 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="review-cta opacity-0 translate-y-8 bg-cream p-8 md:p-12 text-center">
            <h2 className="font-playfair text-h3 text-black mb-4">Ready to Share Your Feedback?</h2>
            <p className="font-inter text-body text-gray-500 max-w-[600px] mx-auto mb-8">
              Tap the button below to open WhatsApp, send your review, and claim your AED 50 credit.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Phone size={16} />
              Leave a Review on WhatsApp
            </a>
            <p className="font-inter text-sm text-gray-400 mt-6">
              We typically reply within one business day.
            </p>
          </section>
        </div>
      </article>
    </div>
  )
}
