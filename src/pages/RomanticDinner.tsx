// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /romantic-dinner-dubai
//     primary:     "romantic dinner dubai"
//     subkeywords: "private dinner for two dubai" · "date night private chef dubai" · "private dining for two dubai" · "romantic dinner dubai beach" · "romantic dinner dubai desert" · "romantic dinner dubai for couples" · "romantic dinner dubai marina" · "romantic dinner dubai with a view" · "private chef romantic dinner dubai" · "romantic dinner at home dubai" · "anniversary dinner dubai" · "valentines private dinner dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { gsap } from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import { Heart, Sparkles, Wine, MapPin, Clock, ChefHat } from 'lucide-react'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent("Hi myCHEF Dubai, I'd like to plan a romantic dinner for two (via mychef.ae/romantic-dinner-dubai)")
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const faqs = [
  {
    q: 'How much does a romantic dinner for two with a private chef cost in Dubai?',
    a: 'A private chef romantic dinner Dubai couples book through myCHEF starts from AED 1,200 for two, which covers a three-course menu, the chef, ingredients, table styling and a full kitchen clean. Premium ingredients such as wagyu, lobster or caviar, extra courses, a sommelier or a florist are quoted on top. Proposal evenings with a planner and photographer start from AED 3,000.',
  },
  {
    q: 'Can you set up a romantic dinner at our home rather than a restaurant?',
    a: 'Yes. A romantic dinner at home Dubai couples host with us is the most common format: the chef arrives around ninety minutes before you sit down, cooks in your kitchen, plates each course at the table and leaves the kitchen cleaner than they found it. You never have to leave the sofa between courses.',
  },
  {
    q: 'Can the dinner be on the beach, in the desert or on a yacht?',
    a: 'All three. For a romantic dinner Dubai beach settings work best at a beachfront villa or a licensed private beach club, because open public beaches do not allow private catering. For a romantic dinner Dubai desert camps and licensed dune sites near Al Qudra and Lehbab host a chef and a candlelit table. On the water we cook aboard chartered yachts from Dubai Harbour and Marina; see our yacht catering page.',
  },
  {
    q: 'How far ahead do I need to book?',
    a: 'Seven days is comfortable for a private dinner for two Dubai-wide, and forty-eight hours is usually possible for a simple menu. Valentine’s Day, New Year’s Eve and the last two weeks of December sell out two to three weeks ahead, so a Valentine’s private dinner Dubai couples want on 14 February should be confirmed by the end of January.',
  },
  {
    q: 'Do you cater for dietary needs, halal and alcohol-free evenings?',
    a: 'Every menu is written for the two of you, so halal, vegetarian, vegan, gluten-free, pregnancy-safe and allergy-aware menus are standard rather than exceptions. Wine pairing is optional; we are just as happy to pair mocktails, teas or a zero-alcohol sparkling.',
  },
  {
    q: 'Is this the same as your date night package?',
    a: 'The date night package is our fixed-format, fixed-price version of the same idea, ideal when you want a quick decision. This page is the bespoke version: choose the setting, the number of courses, the styling and the extras. Either way the same vetted chefs cook.',
  },
]

const serviceSchema = {
  '@type': 'Service',
  name: 'Romantic Dinner Dubai',
  serviceType: 'Private Chef Dinner for Two',
  description: 'Private chef romantic dinner for two in Dubai, cooked and served at your home, villa, yacht or licensed desert or beach venue.',
  provider: {
    '@type': 'Organization',
    '@id': 'https://www.mychef.ae/#organization',
    name: 'myCHEF',
    url: 'https://www.mychef.ae',
    telephone: '+971-55-174-4849',
    areaServed: 'Dubai, UAE',
  },
  areaServed: 'Dubai, UAE',
  offers: {
    '@type': 'Offer',
    price: '1200',
    priceCurrency: 'AED',
    description: 'Three-course private chef dinner for two, including chef, ingredients, table styling and clean-up.',
  },
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
    { '@type': 'ListItem', position: 2, name: 'Luxury dining', item: 'https://www.mychef.ae/luxury-dining-experiences' },
    { '@type': 'ListItem', position: 3, name: 'Dinner for two', item: 'https://www.mychef.ae/romantic-dinner-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

const settings = [
  {
    icon: Heart,
    title: 'At home or in your villa',
    desc: 'The setting couples choose most. We bring the linen, candles and flowers, cook in your kitchen and clear everything away. A romantic dinner at home Dubai couples host this way costs less than a comparable restaurant evening and nobody is watching the clock.',
  },
  {
    icon: MapPin,
    title: 'Beach and desert',
    desc: 'For a romantic dinner Dubai beach villas on Palm Jumeirah and licensed beach clubs give you sand under the table without breaking public-beach rules. For a romantic dinner Dubai desert evenings, we work with licensed dune camps near Al Qudra where the chef cooks over fire as the light goes.',
  },
  {
    icon: Sparkles,
    title: 'Marina, Downtown and the water',
    desc: 'For a romantic dinner Dubai Marina apartments with a balcony over the water are hard to beat, and a Downtown terrace facing the fountains gives you a romantic dinner Dubai with a view of the Burj Khalifa. On a chartered yacht the chef cooks aboard while you cruise past both.',
  },
]

const occasions = [
  { label: 'Anniversaries', desc: 'An anniversary dinner Dubai couples remember usually recreates one dish from the night you met.' },
  { label: 'Proposals', desc: 'Ring timing, photographer and florist coordinated with the courses.', link: '/proposal-dinner-dubai' },
  { label: "Valentine's Day", desc: "A Valentine's private dinner Dubai couples book early; February sells out weeks ahead." },
  { label: 'Date nights', desc: 'A date night private chef Dubai couples book monthly, without babysitter-and-traffic maths.', link: '/date-night-package-dubai' },
  { label: 'Birthday surprises', desc: 'A chef arriving unannounced with their favourite menu already agreed.' },
  { label: 'Honeymoons', desc: 'Private dining for two Dubai honeymooners book on the first night in the villa.' },
]

const steps = [
  { icon: Clock, title: 'Tell us the evening', desc: 'Date, area, dietary notes and what the night is for. We reply with a menu draft and a firm price within 24 hours.' },
  { icon: ChefHat, title: 'Your chef arrives', desc: 'About ninety minutes before you sit down, with ingredients, tableware and candles. You do nothing.' },
  { icon: Wine, title: 'Courses at your pace', desc: 'Three to seven courses, plated at the table, wine or mocktail pairing if you want it. The chef clears the kitchen and leaves quietly.' },
]

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'm interested in a romantic dinner for two in Dubai. Date: __ Area: __ Occasion: __"

export default function RomanticDinner() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.gsap-reveal').forEach((el) => {
        gsap.from(el, { opacity: 0, y: 40, duration: 0.7, scrollTrigger: { trigger: el, start: 'top 88%' } })
      })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef}>
      <SEO
        title="Romantic Dinner Dubai | Private Chef for Two | myCHEF"
        description="Romantic dinner Dubai couples book at home, on a yacht or in the desert: a private chef cooks dinner for two from AED 1,200, table styled and kitchen cleaned."
        canonicalPath="/romantic-dinner-dubai"
        ogImage="/images/romantic-dinner-dubai-hero.webp"
        schema={schema}
      />

      <section className="relative min-h-[70vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/romantic-dinner-dubai-hero.webp"
            alt="Private chef plating a candlelit romantic dinner for two at a villa table in Dubai"
            width={1344}
            height={752}
            className="w-full h-full object-cover opacity-40"
            decoding="async"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm mb-6">
            <Link to="/" className="text-gray-400 hover:text-gold">Home</Link>
            <span className="text-gray-600 mx-2">/</span>
            <Link to="/luxury-dining-experiences" className="text-gray-400 hover:text-gold">Luxury dining</Link>
            <span className="text-gray-600 mx-2">/</span>
            <span className="text-gold">Dinner for two</span>
          </nav>
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">For Two</p>
          <h1 className="font-playfair text-4xl md:text-6xl text-white font-semibold mb-4">
            Romantic Dinner Dubai: A Private Chef, Candlelight and a Table for Two
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Every romantic dinner Dubai couples book with myCHEF starts with one conversation about the two of you: the
            occasion, the setting and the dishes that mean something. A vetted private chef then cooks it where you are,
            at home, in a villa, on a yacht or under the desert sky, from AED 1,200 for two.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/inquiry" className="btn-primary">Plan Our Dinner for Two</Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary">WhatsApp the Date</a>
          </div>
        </div>
      </section>

      <TrustSignalStrip />

      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 gsap-reveal">
          <h2 className="font-playfair text-3xl text-white mb-6">Why Couples Skip the Restaurant</h2>
          <p className="text-gray-400 mb-4">
            Restaurants seat you at 8:30, turn the table by 10:30 and put a stranger&apos;s conversation eighteen inches from
            your anniversary. A private dinner for two Dubai couples host with us is the opposite: the chef arrives, cooks in
            your kitchen and paces the courses to your evening. You choose the music, the light and how long dessert lasts.
          </p>
          <p className="text-gray-400 mb-4">
            The menu is written for the two of you rather than pulled from a card. If your first date was a bowl of
            hand-cut pasta in Bologna, that is course two. If one of you is pregnant, halal, vegan or allergic to shellfish,
            the whole menu is built around it rather than worked around it. This is what private dining for two Dubai
            residents actually want: a restaurant-grade kitchen with nobody else in the room.
          </p>
          <p className="text-gray-400">
            It is also, per head, better value than a comparable restaurant evening once you count parking, valet, service
            charge and the bottle you would not have chosen. See the{' '}
            <Link to="/guide/private-dining-dubai" className="text-gold hover:text-gold-light underline underline-offset-4">private dining guide</Link>{' '}
            for how the format compares, or the wider{' '}
            <Link to="/luxury-dining-experiences" className="text-gold hover:text-gold-light underline underline-offset-4">luxury dining experiences</Link>{' '}
            we run for couples and small groups.
          </p>
        </div>
      </section>

      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl text-white text-center mb-4 gsap-reveal">Where the Table Goes</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12 gsap-reveal">
            A romantic dinner Dubai for couples can mean six different things. These are the three settings we cook in most,
            and what each one needs from you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {settings.map((s) => (
              <div key={s.title} className="p-8 border border-charcoal-light bg-black hover:border-gold/50 transition-colors gsap-reveal">
                <s.icon className="w-10 h-10 text-gold mb-4" aria-hidden="true" />
                <h3 className="font-playfair text-xl text-white mb-3">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm text-center mt-10 gsap-reveal">
            We cook across the city; the pages for{' '}
            <Link to="/locations/palm-jumeirah" className="text-gold hover:text-gold-light">Palm Jumeirah</Link>,{' '}
            <Link to="/locations/dubai-marina" className="text-gold hover:text-gold-light">Dubai Marina</Link> and{' '}
            <Link to="/locations/downtown-dubai" className="text-gold hover:text-gold-light">Downtown Dubai</Link> cover
            building access and parking, and{' '}
            <Link to="/yachts" className="text-gold hover:text-gold-light">yacht catering</Link> covers dinner on the water.
          </p>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl text-white text-center mb-12 gsap-reveal">Romantic Dinner Dubai: How the Evening Runs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={s.title} className="text-center p-8 border border-charcoal-light hover:border-gold/50 transition-colors gsap-reveal">
                <s.icon className="w-10 h-10 text-gold mx-auto mb-4" aria-hidden="true" />
                <p className="text-gold text-xs tracking-[0.2em] uppercase mb-2">Step {i + 1}</p>
                <h3 className="font-playfair text-xl text-white mb-3">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-400 max-w-3xl mx-auto text-center mt-12 gsap-reveal">
            The chefs are the same people who cook for our{' '}
            <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4">private chef</Link>{' '}
            households week to week, interviewed, tasted and background-checked before they cook for anyone. A private chef
            romantic dinner Dubai couples book with us is never a caterer&apos;s tray reheated at the door.
          </p>
        </div>
      </section>

      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl text-white text-center mb-12 gsap-reveal">Occasions We Cook For</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {occasions.map((item) => (
              <div key={item.label} className="bg-black p-6 gsap-reveal">
                <span className="text-gold text-2xl mb-2 block" aria-hidden="true">&#10084;</span>
                {item.link ? (
                  <Link to={item.link} className="text-white font-medium hover:text-gold transition-colors">{item.label}</Link>
                ) : (
                  <p className="text-white font-medium">{item.label}</p>
                )}
                <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 gsap-reveal">
          <h2 className="font-playfair text-3xl text-white mb-6">What It Costs</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-300">
              <thead className="text-gold uppercase tracking-wider text-xs border-b border-charcoal-light">
                <tr>
                  <th scope="col" className="py-3 pr-4">Format</th>
                  <th scope="col" className="py-3 pr-4">Includes</th>
                  <th scope="col" className="py-3">From</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal-light">
                <tr>
                  <td className="py-4 pr-4 text-white">Three courses for two</td>
                  <td className="py-4 pr-4">Chef, ingredients, table styling, candles, full clean-up</td>
                  <td className="py-4">AED 1,200</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 text-white">Five-course tasting for two</td>
                  <td className="py-4 pr-4">As above, with amuse-bouche and pre-dessert; optional pairing</td>
                  <td className="py-4">AED 1,900</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 text-white">Proposal evening</td>
                  <td className="py-4 pr-4">Planner, florist, photographer timing, ring choreography</td>
                  <td className="py-4">AED 3,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            Prices are for Dubai addresses and exclude VAT. Desert and beach sites add venue and transport fees, quoted per
            location. Premium ingredients such as wagyu, truffle and caviar are itemised, never hidden in a service charge.
            The fixed-price{' '}
            <Link to="/date-night-package-dubai" className="text-gold hover:text-gold-light underline underline-offset-4">date night package</Link>{' '}
            is the fastest way to book the three-course format.
          </p>
        </div>
      </section>

      <section className="py-24 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl text-white text-center mb-12 gsap-reveal">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {faqs.map((f) => (
              <div key={f.q} className="border-b border-charcoal-light pb-8 gsap-reveal">
                <h3 className="font-playfair text-xl text-white mb-3">{f.q}</h3>
                <p className="text-gray-400 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm text-center mt-10 gsap-reveal">
            Still deciding? Read how a{' '}
            <Link to="/blog/private-chef-date-night-dubai" className="text-gold hover:text-gold-light">private chef date night</Link>{' '}
            actually unfolds, hour by hour.
          </p>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center gsap-reveal">
          <h2 className="font-playfair text-3xl text-white mb-6">Romantic Dinner Dubai: Tell Us About the Two of You</h2>
          <p className="text-gray-400 mb-8">
            Date, area, dietary notes and the occasion. We send a menu draft and a firm price within 24 hours, and hold the
            chef once you say yes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/inquiry" className="btn-primary">Plan Our Dinner for Two</Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary">WhatsApp the Date</a>
          </div>
        </div>
      </section>
    </div>
  )
}
