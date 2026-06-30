import { useRef } from 'react'
import { Mail } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'

gsap.registerPlugin(ScrollTrigger)

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: 'https://mychef.ae/privacy-policy' },
  ],
}

const policySections = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: [
      'myCHEF Dubai ("we", "us", or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and safeguard your information when you visit our website, submit an inquiry, or use our services.',
      'By using our website and services, you consent to the practices described in this policy. If you do not agree with any aspect of this policy, please discontinue use of our services.',
    ],
    bullets: [],
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    content: [
      'We collect personal information that you voluntarily provide to us when you:',
    ],
    bullets: [
      'Submit an inquiry or quote request through our website form',
      'Contact us via WhatsApp, email, or telephone',
      'Book our private chef or catering services',
      'Subscribe to our communications',
    ],
  },
  {
    id: 'types-of-data',
    title: 'Types of Data Collected',
    content: [],
    bullets: [
      'Name and contact details (email address, phone number)',
      'Event information (date, location, number of guests)',
      'Dietary preferences, restrictions, and allergies',
      'Service preferences and special requests',
      'Any other information you choose to provide',
    ],
  },
  {
    id: 'how-we-use',
    title: 'How We Use Your Information',
    content: [
      'We use the information we collect for the following purposes:',
    ],
    bullets: [
      'To respond to your inquiries and provide quotes',
      'To coordinate and deliver our private chef and catering services',
      'To communicate with you about your booking or inquiry',
      'To send relevant updates and offers (with your consent)',
      'To improve our services and customer experience',
      'To comply with legal obligations',
    ],
  },
  {
    id: 'sharing',
    title: 'Sharing Your Information',
    content: [
      'We respect your privacy and handle your data with care.',
    ],
    bullets: [
      'We do not sell, trade, or rent your personal data to third parties',
      'Your information may be shared with members of our culinary team solely for the purpose of delivering your service',
      'We may disclose information if required by law or to protect our rights',
      'Any third-party service providers we engage are bound by confidentiality agreements',
    ],
  },
  {
    id: 'security',
    title: 'Data Security',
    content: [
      'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.',
      'All team members are bound by strict confidentiality agreements. We regularly review our security practices to ensure your information remains protected.',
    ],
    bullets: [],
  },
  {
    id: 'retention',
    title: 'Data Retention',
    content: [
      'We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements.',
      'When your data is no longer needed, we will securely delete or anonymize it.',
    ],
    bullets: [],
  },
  {
    id: 'rights',
    title: 'Your Rights',
    content: [
      'Under applicable data protection laws, you have the following rights regarding your personal data:',
    ],
    bullets: [
      'The right to access the personal data we hold about you',
      'The right to request correction of inaccurate or incomplete data',
      'The right to request deletion of your personal data',
      'The right to object to or restrict certain processing activities',
      'The right to data portability',
      'The right to withdraw consent at any time',
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies',
    content: [
      'Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from.',
      'You can choose to disable cookies through your browser settings. Please note that disabling cookies may affect the functionality of our website.',
    ],
    bullets: [],
  },
  {
    id: 'third-party',
    title: 'Third-Party Links',
    content: [
      'Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.',
    ],
    bullets: [],
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    content: [
      'We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page with an updated revision date.',
      'We encourage you to review this policy periodically to stay informed about how we protect your information.',
    ],
    bullets: [],
  },
  {
    id: 'contact',
    title: 'Contact Us',
    content: [
      'If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:',
    ],
    bullets: [
      'Email: hallo@mychef.ae',
      'WhatsApp: +971 50 XXX XXXX',
      'We will respond to all privacy-related inquiries within 48 hours.',
    ],
  },
]

export default function Privacy() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const ctx = gsap.context(() => {

      gsap.from('.privacy-section', {
        opacity: 0, y: 20, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.privacy-content', start: 'top 85%', toggleActions: 'play none none none' },
      })
    }, containerRef)

    return () => ctx.revert()
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Privacy Policy"
        description="myCHEF Dubai privacy policy. How we collect, use, and protect your personal information."
        canonicalPath="/privacy-policy"
        noindex={false}
        schema={breadcrumbSchema}
      />

      {/* Section 1: Hero */}
      <PageHero
        eyebrow="LEGAL"
        title="Privacy Policy"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]}
        minHeight="short"
        overlay="dark"
        children={<p className="font-inter text-body-sm text-gray-500 mt-4">Last updated: January 2025</p>}
      />

      {/* Section 2: Policy Content */}
      <section className="privacy-content bg-white py-20">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          {policySections.map((section, index) => (
            <div key={section.id} id={section.id} className={`privacy-section ${index > 0 ? 'mt-12' : ''}`}>
              <h2 className="font-playfair text-h3 text-black mb-4" style={{ lineHeight: '1.2' }}>
                {section.title}
              </h2>
              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex} className="font-inter text-body text-gray-500 mb-4" style={{ lineHeight: '1.8' }}>
                  {paragraph}
                </p>
              ))}
              {section.bullets.length > 0 && (
                <ul className="space-y-2 mt-4">
                  {section.bullets.map((bullet, bIndex) => (
                    <li key={bIndex} className="flex items-start gap-3 font-inter text-body text-gray-500" style={{ lineHeight: '1.8' }}>
                      <span className="w-2 h-2 mt-2.5 rounded-full bg-gold flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Contact box */}
          <div className="privacy-section mt-16 p-8 bg-cream border border-gray-200">
            <h3 className="font-playfair text-h4 text-black mb-3">Questions About Your Privacy?</h3>
            <p className="font-inter text-body text-gray-500 mb-6" style={{ lineHeight: '1.7' }}>
              If you have any questions or concerns about how we handle your data, we are here to help.
            </p>
            <a
              href="mailto:hallo@mychef.ae"
              className="inline-flex items-center gap-2 font-inter text-body-sm font-medium text-gold hover:text-gold-dark transition-colors"
            >
              <Mail size={16} />
              hallo@mychef.ae
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
