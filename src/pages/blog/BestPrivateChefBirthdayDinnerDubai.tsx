import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Phone } from 'lucide-react'
import SEO from '../../components/SEO'
import PageHero from '../../components/PageHero'
import BlogRelated from '../../components/BlogRelated'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I read your best private chef birthday dinner Dubai blog and would like a custom quote (via mychef.ae/blog/best-private-chef-birthday-dinner-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CTA_HREF = '/inquiry?utm_source=mychef.ae&utm_medium=blog_cta&utm_campaign=best-private-chef-birthday-dinner-dubai'
const SLUG = 'best-private-chef-birthday-dinner-dubai'

const faqs = [
  {
    q: 'How much does a private chef birthday dinner cost in Dubai?',
    a: 'For an intimate home dinner, expect roughly AED 1,500–3,500 for the chef service plus ingredients. Larger celebrations with multiple courses, waiting staff, and rentals can range from AED 4,000–12,000 or more, depending on guest count and menu complexity.',
  },
  {
    q: 'Can a private chef handle dietary restrictions at a birthday dinner?',
    a: 'Yes. A good private chef designs the menu around allergies, intolerances, halal preferences, vegan or vegetarian guests, and any medical diets. Share these details during the consultation so the chef can plan safe alternatives.',
  },
  {
    q: 'What is the best menu for a birthday dinner at home in Dubai?',
    a: 'A crowd-pleasing menu usually includes a cold starter, a warm main course with a premium protein, a vegetarian option, and a plated dessert. Live cooking stations, mezze spreads, and sharing-style dishes also work well for relaxed celebrations.',
  },
  {
    q: 'How far in advance should I book a private chef for a birthday?',
    a: 'Two to four weeks is ideal, especially for weekends or popular dates. Last-minute bookings are sometimes possible, but planning ahead gives you more choice of chef and better ingredient sourcing.',
  },
  {
    q: 'Do I need to provide kitchen equipment or serveware?',
    a: 'Usually no. The chef brings standard tools and can arrange plates, cutlery, and glassware through the platform if needed. You should provide a clean, working kitchen with oven, stovetop, and refrigerator space.',
  },
]

const articleSchema = {
  '@type': 'Article',
  headline: 'Best Private Chef Birthday Dinner in Dubai: Menu Ideas, Costs & How to Book',
  description: 'Plan a private chef birthday dinner in Dubai with menu ideas, indicative costs, booking tips, and answers to the most common host questions.',
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
    { '@type': 'ListItem', position: 3, name: 'Best Private Chef Birthday Dinner Dubai', item: `https://mychef.ae/blog/${SLUG}` },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [articleSchema, faqSchema, breadcrumbSchema],
}

export default function BestPrivateChefBirthdayDinnerDubai() {
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
        title="Best Private Chef Birthday Dinner in Dubai: Menu Ideas, Costs & How to Book | myCHEF"
        description="Plan a private chef birthday dinner in Dubai with menu ideas, indicative costs, booking tips, and answers to the most common host questions."
        canonicalPath={`/blog/${SLUG}`}
        ogImage="/images/birthday-catering-dubai-hero.webp"
        schema={schema}
      />

      {/* Hero */}
      <PageHero
        eyebrow="Birthday"
        title="Best Private Chef Birthday Dinner in Dubai: Menu Ideas, Costs & How to Book"
        subtitle="How to host an unforgettable birthday dinner at home or in your villa with a private chef, from menu planning to final toast."
        image="/images/birthday-catering-dubai-hero.webp"
        imageAlt="Private chef birthday dinner catering in Dubai"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'Private Chef Birthday Dinner Dubai' }]}
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
              A birthday in Dubai deserves more than a crowded restaurant and a set menu. Hiring a <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private chef in Dubai</Link> lets you turn your home, villa, or penthouse into the venue — complete with a menu built around the guest of honour, restaurant-quality presentation, and the privacy of your own space.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              Whether you are planning an intimate dinner for six or a lively celebration for thirty, this guide covers menu ideas, indicative costs, and the practical steps to book the right chef.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">Why Host a Birthday Dinner with a Private Chef?</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              The best birthdays feel personal. A private chef gives you control over the atmosphere, the pacing, the music, and — most importantly — the food. You avoid parking stress, noise limits, and the awkwardness of splitting bills. Guests can move freely between indoor dining, poolside lounging, and terrace drinks while the kitchen runs quietly in the background.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              For hosts, it also removes the work. The chef plans the menu, sources ingredients, cooks, plates, and cleans the kitchen. You simply greet your guests and enjoy the evening.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              It is also surprisingly flexible. You can scale from a romantic dinner for two to a multi-course feast for dozens, with service styles ranging from plated formality to relaxed grazing tables and live stations.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">Birthday Dinner Menu Ideas That Work in Dubai</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              The ideal menu depends on the mood you want. For an elegant seated dinner, consider a three- or four-course menu: a light starter such as burrata with heirloom tomatoes or a delicate seafood carpaccio, a main of slow-cooked lamb, wagyu beef, or pan-seated sea bass, and a plated dessert with a birthday message.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              For a more social celebration, sharing menus work beautifully. Think mezze spreads, sushi platters, wood-fired flatbreads, or a grilled seafood station beside the pool. Live cooking stations — pasta, risotto, tacos, or shawarma — add theatre and keep the energy high.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              Do not forget dietary coverage. A well-planned <Link to="/birthday-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">birthday catering</Link> menu includes a vegetarian or vegan option and clearly labels dishes containing common allergens. If the group is mixed, a buffet or family-style service gives guests more freedom than a fixed plated course.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">Indicative Costs for a Private Chef Birthday Dinner</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Pricing varies by guest count, menu complexity, service style, and whether you add waiting staff or rentals. The figures below are indicative and meant to help you budget before requesting a tailored quote.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse font-inter text-body-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 pr-4 font-medium text-black">Style</th>
                    <th className="py-3 pr-4 font-medium text-black">Guest Count</th>
                    <th className="py-3 font-medium text-black">Indicative Range</th>
                  </tr>
                </thead>
                <tbody className="text-gray-500">
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4">Intimate seated dinner</td>
                    <td className="py-3 pr-4">4–8 guests</td>
                    <td className="py-3">AED 1,500–3,500</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4">Multi-course plated dinner</td>
                    <td className="py-3 pr-4">8–16 guests</td>
                    <td className="py-3">AED 4,000–7,500</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4">Sharing / family-style feast</td>
                    <td className="py-3 pr-4">15–30 guests</td>
                    <td className="py-3">AED 5,500–10,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Full-service celebration with staff</td>
                    <td className="py-3 pr-4">30+ guests</td>
                    <td className="py-3">AED 10,000–20,000+</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="font-inter text-body text-gray-500 leading-relaxed mt-5">
              These ranges typically cover the chef fee, ingredients, basic service, and kitchen cleanup. Premium proteins, imported ingredients, bespoke cake design, bar service, and event rentals are usually quoted separately.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">How to Book the Right Private Chef</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Start by defining the basics: date, time, guest count, location, and budget. Then think about the experience you want. Is it a quiet candlelit dinner, a lively party, or something in between? Share any dietary needs, preferred cuisines, and must-have dishes upfront.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Next, choose a chef whose style matches your vision. Look at sample menus, ask about previous <Link to="/birthday-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">birthday catering</Link> experience, and confirm what is included in the fee. A professional chef will visit the venue beforehand or request photos of the kitchen to plan service flow.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              Finally, confirm the logistics in writing: arrival time, menu, number of courses, service style, staff, cleanup responsibilities, payment terms, and cancellation policy. Clarity before the event prevents surprises on the night.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">Dubai-Specific Considerations</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Many Dubai birthday dinners happen in villas, penthouses, or on yachts, each with its own service constraints. Villa kitchens are usually well-equipped, but yacht galleys are compact, so menus must be designed for limited cooking space. If you are hosting outdoors in summer, consider timing the meal for after sunset and planning heat-friendly dishes.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Alcohol service, halal requirements, and guest modesty preferences should also be discussed early. A professional chef or catering partner will guide you through these details discreetly and respectfully.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              Finally, think about parking and access. Chefs typically arrive several hours early with ingredients and equipment, so clear building access, a guest parking spot, and a concierge heads-up will make setup smooth.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">Making the Evening Memorable</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              The little touches matter. A personalised menu card at each seat, a signature mocktail named after the guest of honour, a surprise dessert course with candles, or a midnight snack box for guests to take home all elevate the experience.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              Music, lighting, and table styling should match the menu. A formal plated dinner pairs with soft jazz and low lighting; a vibrant sharing feast suits upbeat playlists and colourful florals. Coordinate these details with your <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private chef in Dubai</Link> or event planner so the evening feels cohesive from start to finish.
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

          <BlogRelated currentSlug="/blog/best-private-chef-birthday-dinner-dubai" />

          <section className="article-cta opacity-0 translate-y-8 bg-cream p-8 md:p-12 text-center">
            <h2 className="font-playfair text-h3 text-black mb-4">Ready to Plan Your Birthday Dinner?</h2>
            <p className="font-inter text-body text-gray-500 max-w-[600px] mx-auto mb-8">
              Tell us about your celebration and we will match you with a private chef who can design a menu, handle the service, and leave your kitchen spotless.
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
