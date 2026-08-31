// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /review
//     primary:     none (untargeted by decision)
//     subkeywords: none
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { Phone, MessageCircle, ClipboardCheck } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import ReviewInviteSection from '@/sections/ReviewInviteSection'
import { buildWhatsAppLink } from '@/lib/whatsapp'

const WHATSAPP_LINK = buildWhatsAppLink(
  'Hi myCHEF, I would like to leave a review about my experience',
  { source: 'mychef.ae', medium: 'review', campaign: 'review_page' },
)

const SLUG = 'review'

const faqs = [
  {
    q: 'How do I leave a review?',
    a: 'After your event, send it on WhatsApp. Once we confirm your booking record, we keep the feedback with the chef’s file and, where you agree, use it to help the next host decide.',
  },
  {
    q: 'When will you reply?',
    a: 'We typically acknowledge a review within one business day.',
  },
  {
    q: 'Can I leave a review for a past event?',
    a: 'Yes. Reviews are welcome for any myCHEF Dubai event you have hosted within the last 12 months.',
  },
  {
    q: 'What should I include in my review?',
    a: 'Tell us about the food, service, and overall experience. Photos are welcome but optional. Honest feedback helps us improve and helps future hosts choose the right service.',
  },
]

const articleSchema = {
  '@type': 'Article',
  headline: 'Leave a Review',
  description: 'Share your myCHEF Dubai experience. Honest reviews help the next host decide.',
  author: { '@id': 'https://www.mychef.ae/#organization' },
  publisher: { '@id': 'https://www.mychef.ae/#organization' },
  datePublished: '2026-07-01',
  dateModified: '2026-08-31',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.mychef.ae/review' },
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
    { '@type': 'ListItem', position: 2, name: 'Leave a Review', item: 'https://www.mychef.ae/review' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [articleSchema, faqSchema, breadcrumbSchema],
}

export default function ReviewRequest() {
  useScrollTrigger()
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
        title="Leave a Review"
        description="Share your myCHEF Dubai experience. Honest reviews from clients help the next host decide."
        canonicalPath={`/${SLUG}`}
        ogImage="/images/about-mychef-dubai-hero.webp"
        noindex={true}
        schema={schema}
      />

      <PageHero
        eyebrow="Client Feedback"
        title="Leave a Review"
        subtitle="Had a myCHEF Dubai experience? Share what it was actually like."
        image="/images/about-mychef-dubai-hero.webp"
        imageAlt="myCHEF Dubai client review"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Leave a Review' }]}
        minHeight="tall"
        overlay="dark"
      />

      <ReviewInviteSection />

      <article className="bg-white section-padding">
        <div className="review-body container-custom max-w-[820px]">
          <div className="review-section opacity-0 translate-y-8 mb-12">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Every review helps us refine our service and helps future Dubai hosts choose the right private chef or catering experience.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              There is no form to fill out — tap WhatsApp, tell us about your event, and we will handle the rest.
            </p>
          </div>

          <section className="review-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-8 text-center">How a review works</h2>
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
                  <ClipboardCheck size={28} className="text-gold" />
                </div>
                <h3 className="font-playfair text-h4 text-black mb-2">2. We confirm the booking</h3>
                <p className="font-inter text-body text-gray-500 leading-relaxed">
                  We match the review to your booking so it sits with the chef who cooked for you.
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-cream flex items-center justify-center">
                  <Phone size={28} className="text-gold" />
                </div>
                <h3 className="font-playfair text-h4 text-black mb-2">3. It helps the next host</h3>
                <p className="font-inter text-body text-gray-500 leading-relaxed">
                  Honest notes on the food and the evening help the next person decide.
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
            <h2 className="font-playfair text-h3 text-black mb-4">Ready to share your feedback?</h2>
            <p className="font-inter text-body text-gray-500 max-w-[600px] mx-auto mb-8">
              Tap the button below to open WhatsApp and send your review.
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
