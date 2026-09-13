// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /terms
//     primary:     none (untargeted by decision)
//     subkeywords: none
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { useGSAP } from '@gsap/react'
import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'
import { BOOKING_TERMS_UPDATED } from '@/content/bookingTerms'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to request a quote (via mychef.ae/terms)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Terms of Service', item: 'https://www.mychef.ae/terms' },
  ],
}

const documents = [
  {
    href: '/private-client-booking-terms',
    title: 'Private client booking terms',
    text: 'Personal occasions, private dining, celebrations and one-off catering. Includes privacy, confidentiality and the default no-recording rule.',
  },
  {
    href: '/corporate-booking-terms',
    title: 'Corporate and business booking terms',
    text: 'Company catering, meetings, conferences, staff events and one-off functions. Includes confidentiality and publicity restrictions.',
  },
  {
    href: '/privacy-policy',
    title: 'Website privacy policy',
    text: 'How we collect and use information when you visit the site, send an inquiry or book.',
  },
  {
    href: '/private-chef-dubai/how-your-plan-works',
    title: 'Household chef plans',
    text: 'Recurring private chef service follows its own written agreement. This page explains the plan in plain English.',
  },
]

export default function Terms() {
  useScrollTrigger()
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from('.terms-section', {
        opacity: 0, y: 20, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.terms-content', start: 'top 85%', toggleActions: 'play none none none' },
      })
    }, containerRef)
    return () => ctx.revert()
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Terms of Service"
        description="myCHEF Dubai booking terms for private occasions and company catering. Read the document that matches your booking before you pay a deposit."
        canonicalPath="/terms"
        noindex
        ogImage="/images/catering-dubai-hero.webp"
        schema={breadcrumbSchema}
      />

      <PageHero
        eyebrow="LEGAL"
        title="Terms of Service"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Terms of Service' }]}
        minHeight="short"
        overlay="dark"
      >
        <p className="font-inter text-body-sm text-white/70 mt-4">Last updated: {BOOKING_TERMS_UPDATED}</p>
      </PageHero>

      <section className="terms-content bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <article className="font-inter text-body text-gray-500 terms-section" style={{ lineHeight: '1.8' }}>
            <h2 className="font-playfair text-[1.75rem] text-black mb-4" style={{ lineHeight: '1.2' }}>
              Which terms apply
            </h2>
            <p className="mb-4">
              myCHEF Dubai is the customer-facing brand of Numini FZC. The booking terms for a confirmed event are the two documents below. Read the one that matches the booking before you pay a deposit.
            </p>
            <p className="mb-6">
              Cancellation uses calendar days in Dubai time (UTC+4). Seven or more days before the event date, amounts already paid are not refunded except where required by law. Six days or less before the event, and before service starts, amounts paid are refunded in full, including the deposit. The full wording is in each document.
            </p>
            <ul className="space-y-5">
              {documents.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="font-playfair text-xl text-black hover:text-gold">
                    {item.title}
                  </Link>
                  <p className="mt-1">{item.text}</p>
                </li>
              ))}
            </ul>
          </article>

          <div className="mt-16 pt-10 border-t border-gray-200 text-center">
            <p className="font-inter text-body text-gray-500 mb-6">
              Questions about a booking? Write to us before you pay.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">Chat on WhatsApp</a>
              <Link to="/contact" className="btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
