import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Phone } from 'lucide-react'
import SEO from '../../components/SEO'
import PageHero from '../../components/PageHero'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I read your weekly meal prep vs full-time chef blog and would like a custom quote (via mychef.ae/blog/weekly-meal-prep-vs-full-time-chef-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CTA_HREF = '/inquiry?utm_source=mychef.ae&utm_medium=blog_cta&utm_campaign=weekly-meal-prep-vs-full-time-chef-dubai'
const SLUG = 'weekly-meal-prep-vs-full-time-chef-dubai'

const faqs = [
  {
    q: 'Is weekly meal prep cheaper than a full-time chef in Dubai?',
    a: 'Yes, for most households. A weekly meal prep service typically costs AED 1,898–2,698 per week for two prep sessions, while a full-time private chef costs AED 18,000–35,000+ per month plus benefits, accommodation, and visa sponsorship.',
  },
  {
    q: 'Who should hire a full-time private chef instead of meal prep?',
    a: 'A full-time chef suits families or individuals who want every meal cooked fresh daily, have complex dietary protocols, entertain frequently, or prefer a dedicated household staff member.',
  },
  {
    q: 'Can I choose the menu with a weekly meal prep service?',
    a: 'Absolutely. Menus are designed around your preferences, dietary restrictions, and household schedule, then prepared in your kitchen during scheduled prep sessions.',
  },
  {
    q: 'How does myCHEF vet the chefs for meal prep?',
    a: 'Every chef completes an in-person audition, background check, food-safety verification, and halal-competency review before joining the platform.',
  },
  {
    q: 'Do I need to provide ingredients or kitchen equipment?',
    a: 'No. The chef sources all ingredients and brings standard tools. You only need a functioning kitchen, refrigerator space, and storage containers.',
  },
]

const articleSchema = {
  '@type': 'Article',
  headline: 'Weekly Meal Prep vs Hiring a Full-Time Chef in Dubai',
  description: 'Compare weekly meal prep services and full-time private chefs in Dubai by cost, flexibility, vetting, and lifestyle fit so you can choose the right option.',
  author: { '@type': 'Organization', name: 'myCHEF Dubai Team' },
  publisher: { '@type': 'Organization', name: 'myCHEF Dubai', url: 'https://mychef.ae' },
  datePublished: '2026-07-01',
  dateModified: '2026-07-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': `https://mychef.ae/blog/${SLUG}` },
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
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://mychef.ae/blog' },
    { '@type': 'ListItem', position: 3, name: 'Weekly Meal Prep vs Full-Time Chef Dubai', item: `https://mychef.ae/blog/${SLUG}` },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [articleSchema, faqSchema, breadcrumbSchema],
}

export default function WeeklyMealPrepVsFullTimeChef() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.article-section', {
      scrollTrigger: { trigger: '.article-body', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
    })

    gsap.to('.article-cta', {
      scrollTrigger: { trigger: '.article-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Weekly Meal Prep vs Full-Time Chef Dubai | myCHEF"
        description="Compare weekly meal prep services and full-time private chefs in Dubai by cost, flexibility, vetting, and lifestyle fit so you can choose the right option."
        canonicalPath={`/blog/${SLUG}`}
        ogImage="/images/weekly-meal-prep-dubai-hero.webp"
        schema={schema}
      />

      {/* Hero */}
      <PageHero
        eyebrow="Meal Prep"
        title="Weekly Meal Prep vs Hiring a Full-Time Chef in Dubai"
        subtitle="Which option fits your lifestyle, budget, and household? A side-by-side comparison for Dubai families, couples, and busy professionals."
        image="/images/weekly-meal-prep-dubai-hero.webp"
        imageAlt="Weekly meal prep versus full-time private chef Dubai"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'Meal Prep vs Full-Time Chef' }]}
        minHeight="tall"
        overlay="dark"
      />

      {/* Article */}
      <article className="bg-white section-padding">
        <div className="article-body container-custom max-w-[820px]">
          <div className="article-section opacity-0 translate-y-8 mb-8 flex items-center gap-3 text-gray-400 font-inter text-sm">
            <span>By <strong className="text-black font-medium">myCHEF Dubai Team</strong></span>
            <span>|</span>
            <time dateTime="2026-07-01">July 2026</time>
          </div>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Eating well at home in Dubai should be simple, but the choice between a <strong>weekly meal prep service</strong> and a <strong>full-time private chef</strong> is not always obvious. Both give you restaurant-quality food without cooking yourself, yet they differ sharply in cost, commitment, flexibility, and day-to-day lifestyle.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              This guide compares the two options honestly, so you can decide which fits your household, schedule, and budget.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">Cost Comparison at a Glance</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse font-inter text-body-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 pr-4 font-medium text-black">Factor</th>
                    <th className="py-3 pr-4 font-medium text-black">Weekly Meal Prep</th>
                    <th className="py-3 font-medium text-black">Full-Time Private Chef</th>
                  </tr>
                </thead>
                <tbody className="text-gray-500">
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4">Typical cost</td>
                    <td className="py-3 pr-4">AED 1,898–2,698 / week</td>
                    <td className="py-3">AED 18,000–35,000+ / month</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4">Salary + benefits</td>
                    <td className="py-3 pr-4">Included in service fee</td>
                    <td className="py-3">Paid separately by employer</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4">Visa / insurance</td>
                    <td className="py-3 pr-4">Chef covered by platform</td>
                    <td className="py-3">Sponsored by household</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4">Ingredients</td>
                    <td className="py-3 pr-4">Sourced per menu</td>
                    <td className="py-3">Household budget + chef time</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Commitment</td>
                    <td className="py-3 pr-4">Weekly or monthly plan</td>
                    <td className="py-3">Annual contract typical</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="font-inter text-body text-gray-500 leading-relaxed mt-5">
              For most Dubai households, meal prep is the more economical route. You get professionally cooked, portioned meals without the overhead of a full-time employee.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">How Weekly Meal Prep Works</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              A private chef arrives at your home for scheduled prep sessions — usually two per week — and prepares multiple meals in advance. Dishes are portioned, labelled, and stored in your refrigerator or freezer. You simply reheat and eat when it suits you.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Menus rotate based on your preferences, dietary goals, and family schedule. Because the chef prepares several meals at once, the cost per dish drops compared with a chef cooking one meal at a time.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              This model suits busy professionals, small families, health-conscious residents, and anyone who wants variety without daily kitchen traffic.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">When a Full-Time Private Chef Makes Sense</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              A full-time chef becomes part of your household. They plan every meal, shop daily or weekly, cook fresh dishes throughout the day, and often manage the kitchen full time. This is the right choice if you entertain frequently, follow strict medical or performance diets, have a large family with unpredictable schedules, or simply prefer the convenience of on-call culinary staff.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              The trade-off is cost and management. Beyond salary, you typically cover accommodation or transport allowance, health insurance, annual leave, visa sponsorship, and end-of-service benefits. You also become the employer, which brings legal and administrative responsibilities.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">Vetting, Insurance, and Peace of Mind</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Hiring a private chef directly means you are responsible for background checks, food-safety credentials, and liability coverage. Through a platform like myCHEF Dubai, chefs are auditioned in person, reference-checked, and verified for food-safety competency before they ever enter a client home. Every booking also includes booking protection and insurance coverage.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              That layer of verification is especially important if you travel often, have children at home, or host guests regularly.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">Flexibility and Lifestyle Fit</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Weekly meal prep is easy to pause, scale, or adjust. Going on holiday? Skip a week. Hosting a dinner party? Add a one-off private chef booking. The service flexes with your calendar.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              A full-time chef offers the highest level of personalisation and availability, but the arrangement is less flexible. Changing cuisine style, schedules, or portion counts usually requires a conversation and possible contract adjustment.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">The Verdict</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              If you want fresh, personalised meals at home without the cost and complexity of full-time staff, <Link to="/weekly-meal-prep-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">weekly meal prep</Link> is the practical choice. It delivers roughly 80% of the benefit of a private chef at a fraction of the cost.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              If you need daily on-call cooking, have complex dietary requirements, or run a household that entertains constantly, a full-time private chef may be worth the investment.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
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

          <section className="article-cta opacity-0 translate-y-8 bg-cream p-8 md:p-12 text-center">
            <h2 className="font-playfair text-h3 text-black mb-4">Not Sure Which Option Is Right for You?</h2>
            <p className="font-inter text-body text-gray-500 max-w-[600px] mx-auto mb-8">
              Tell us about your household and schedule. We will recommend the most cost-effective solution and design a menu that fits your lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to={CTA_HREF} className="btn-primary">Request a Custom Quote</Link>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Phone size={16} className="mr-2" />
                Chat on WhatsApp
              </a>
            </div>
          </section>
        </div>
      </article>
    </div>
  )
}
