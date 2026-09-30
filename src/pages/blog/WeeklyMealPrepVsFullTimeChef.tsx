import BlogReadingLink from '@/components/blog/BlogReadingLink'
import BlogProse from '@/components/blog/BlogProse'
// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /blog/weekly-meal-prep-vs-full-time-chef-dubai
//     primary:     "meal prep vs private chef dubai"
//     subkeywords: "is a full time private chef worth it dubai" · "weekly meal prep vs private chef dubai" · "meal prep private chef" · "personal chef for meal prep cost" · "private vs personal chef" · "weekly meal prep" · "healthy meal prep ideas for the week" · "lunch meal prep ideas high protein"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useRef } from 'react'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { Phone } from 'lucide-react'
import SEO from '../../components/SEO'
import PageHero from '../../components/PageHero'
import BlogRelated from '../../components/BlogRelated'
import TrustSignalStrip from '../../components/TrustSignalStrip'
import KeyFactsBox from '../../components/KeyFactsBox'
import SourcesBlock from '../../components/SourcesBlock'
import ArticleToc from '../../components/ArticleToc'
import BlogFigure from '../../components/BlogFigure'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I read your weekly meal prep vs full-time chef blog and would like a custom quote (via mychef.ae/blog/weekly-meal-prep-vs-full-time-chef-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CTA_HREF = '/inquiry'
const SLUG = 'weekly-meal-prep-vs-full-time-chef-dubai'

const faqs = [
  {
    q: 'Is weekly meal prep cheaper than a full-time chef in Dubai?',
    a: 'Yes, for most households. Weekly meal prep is the Food Prep job: AED 900 for one four-hour session, or AED 1,800 a week for two sessions. Groceries are charged at receipt cost. A standing household chef is priced per visit on the private chef pricing page, for example a weekly Fresh Meal at AED 3,000 over four weeks before VAT.',
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
  author: { '@id': 'https://www.mychef.ae/#organization' },
  publisher: { '@id': 'https://www.mychef.ae/#organization' },
  datePublished: '2026-07-01',
  dateModified: '2026-07-22',
  mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.mychef.ae/blog/${SLUG}` },
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
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.mychef.ae/blog' },
    { '@type': 'ListItem', position: 3, name: 'Weekly Meal Prep vs Full-Time Chef Dubai', item: `https://www.mychef.ae/blog/${SLUG}` },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [articleSchema, faqSchema, breadcrumbSchema],
}

export default function WeeklyMealPrepVsFullTimeChef() {
  useWhatsAppMessage(WHATSAPP_MESSAGE)
  useScrollTrigger()
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
        title="Meal Prep vs Private Chef Dubai | myCHEF"
        description="Meal Prep vs Private Chef Dubai: Compare weekly meal prep services and full-time private chefs in Dubai by cost, flexibility, vetting, and lifestyle fit so…"
        canonicalPath={`/blog/${SLUG}`}
        ogImage="/images/blog/weekly-meal-prep-vs-full-time-chef-dubai-hero.webp"
        schema={schema}
      />

      {/* Hero */}
      <PageHero
        eyebrow="Meal Prep"
        title="Meal Prep vs Private Chef Dubai"
        subtitle={"Compare visits that prepare meals for the days ahead with more frequent household chef support. The right schedule depends on when you eat, how you like meals served and the cooking your home needs."}
        image="/images/blog/weekly-meal-prep-vs-full-time-chef-dubai-hero.webp"
        imageAlt="Weekly meal prep versus full-time private chef in Dubai"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'Meal Prep vs Full-Time Chef' }]}
        minHeight="tall"
        overlay="dark"
      />

      <TrustSignalStrip />

      {/* Article */}
      <BlogProse className="bg-white section-padding">
        <div className="article-body container-custom max-w-[820px]">
          <div className="article-section opacity-0 translate-y-8 mb-8 flex items-center gap-3 text-gray-400 font-inter text-sm">
            <span>By <strong className="text-black font-medium">myCHEF Dubai Team</strong></span>
            <span>|</span>
            <time dateTime="2026-07-01">July 2026</time>
          </div>

          <KeyFactsBox
            answer="Weekly meal prep is AED 900 a session. myCHEF Managed Household starts from AED 15,000/month for a dedicated chef and ongoing management. Fees are before VAT; activation, trials, groceries and agreed extras are separate."
            facts={[
              { label: 'Weekly meal prep', value: 'AED 900 / session' },
              { label: 'Full-time private chef', value: 'Managed Household from AED 15,000/month' },
              { label: 'Meal prep commitment', value: 'Weekly or monthly plan' },
              { label: 'Full-time commitment', value: 'Duration agreed in your service proposal' },
              { label: 'Best for meal prep', value: 'Professionals, small families, health-focused households' },
            ]}
          />

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Eating well at home in Dubai should be simple, but the choice between a <strong>weekly meal prep service</strong> and a <strong>full-time private chef</strong> is not always obvious. Both give you restaurant-quality food without cooking yourself, yet they differ sharply in cost, commitment, flexibility, and day-to-day lifestyle.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              This guide compares the two options honestly, so you can decide which fits your household, schedule, and budget.
            </p>
          </section>

          <ArticleToc />
          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 id="cost-comparison-at-a-glance" className="font-playfair text-h2 text-black mb-5 scroll-mt-28">Cost Comparison at a Glance</h2>
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
                    <td className="py-3 pr-4">AED 900 / session, AED 1,800 / week for two</td>
                    <td className="py-3">Managed Household from AED 15,000/month before VAT</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4">Coordination & support</td>
                    <td className="py-3 pr-4">Included in service fee</td>
                    <td className="py-3">myCHEF management included in the monthly proposal</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4">Starting the arrangement</td>
                    <td className="py-3 pr-4">Visit scope and availability confirmed</td>
                    <td className="py-3">Brief review, paid search activation and paid trial</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4">Ingredients</td>
                    <td className="py-3 pr-4">Sourced per menu</td>
                    <td className="py-3">Groceries separate; shopping duties agreed</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Commitment</td>
                    <td className="py-3 pr-4">Weekly or monthly plan</td>
                    <td className="py-3">Duration agreed in your service proposal</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="font-inter text-body text-gray-500 leading-relaxed mt-5">
              Meal preparation suits a smaller cooking schedule. Managed Household supports a dedicated ongoing role, with a personal match, a Learning Month and continuing management. Compare the <Link to="/full-time-private-chef-dubai#managed-pricing" className="text-gold hover:underline">complete household service and fees</Link> before choosing.
            </p>
          </section>

          <SourcesBlock
            sources={[
              { label: 'myCHEF: current cooking-visit prices and Managed Household service bands' },

            ]}
            note="myCHEF service prices are indicative and before 5% VAT. Match Activation is AED 950; paid trials, groceries and agreed extras are separate. Your proposal confirms the scope, duration and complete cost."
          />

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 id="how-weekly-meal-prep-works" className="font-playfair text-h2 text-black mb-5 scroll-mt-28">How Weekly Meal Prep Works</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              A private chef arrives at your home for scheduled prep sessions: usually two per week: and prepares multiple meals in advance. Dishes are portioned, labelled, and stored in your refrigerator or freezer. You simply reheat and eat when it suits you.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              The weekly figure moves with how many people eat at home, how many meals you want covered, and how often the chef comes. We start from a standing plan and shape it around the household. What to check: the named chef, an itemised figure, and who buys the ingredients. Dietary notes go into the first draft week.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Menus rotate based on your preferences, dietary goals, and family schedule. Because the chef prepares several meals at once, the cost per dish drops compared with a chef cooking one meal at a time.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              This model suits busy professionals, small families, health-conscious residents, and anyone who wants variety without daily kitchen traffic.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 id="when-a-full-time-private-chef-makes-sense" className="font-playfair text-h2 text-black mb-5 scroll-mt-28">When a Full-Time Private Chef Makes Sense</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              A dedicated household chef works to agreed days, hours and responsibilities. Your brief can include daily menus, grocery planning, meals served fresh and preparation for later. The right arrangement depends on your household size, entertaining, dietary requirements and the working schedule you can realistically agree.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              With myCHEF Managed Household, the monthly proposal includes the agreed chef service and continuing myCHEF management. We coordinate matching, a paid trial, onboarding and the Learning Month, then stay involved with feedback, the approved Household Food Profile and rematching when needed. Live-in or live-out arrangements and any separate costs are confirmed in writing.
            </p>
            <BlogFigure
              image={{
                src: '/images/blog/weekly-meal-prep-vs-full-time-chef-dubai-2.webp',
                alt: 'Busy family breakfast table that a household is trying to keep up with',
                width: 1920,
                height: 1280,
                caption: 'A dedicated household chef can support a more involved daily routine. myCHEF offers live-in and live-out matching, with hours and responsibilities agreed in advance.',
              }}
            />
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 id="vetting-insurance-and-peace-of-mind" className="font-playfair text-h2 text-black mb-5 scroll-mt-28">Vetting, Insurance, and Peace of Mind</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Hiring a private chef directly means you are responsible for background checks, food-safety credentials, and liability coverage. Through a full-service company like myCHEF Dubai, chefs are auditioned in person, reference-checked, and verified for food-safety competency before they ever enter a client home. Every booking also includes our booking protection.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              That layer of verification is especially important if you travel often, have children at home, or host guests regularly.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 id="flexibility-and-lifestyle-fit" className="font-playfair text-h2 text-black mb-5 scroll-mt-28">Flexibility and Lifestyle Fit</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Weekly meal prep is easy to pause, scale, or adjust. Going on holiday? Skip a week. Hosting a dinner party? Add a one-off private chef booking. The service flexes with your calendar.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              A dedicated role gives your chef more time to understand the household. Discuss changes in food, hours or responsibilities with your myCHEF contact so the brief remains workable. A materially different role or a new chef may require a revised fee.
            </p>
          <BlogReadingLink section="flexibility-and-lifestyle-fit"/>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 id="the-verdict" className="font-playfair text-h2 text-black mb-5 scroll-mt-28">The Verdict</h2>
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

          <BlogRelated currentSlug="/blog/weekly-meal-prep-vs-full-time-chef-dubai" />

          <section className="article-cta opacity-0 translate-y-8 bg-cream p-8 md:p-12 text-center">
            <h2 className="font-playfair text-h3 text-black mb-4">Meal Prep vs Private Chef Dubai: Not Sure Which Option Is Right for You?</h2>
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
      </BlogProse>
    </div>
  )
}
