import { useRef } from 'react'
import { Link } from 'react-router'
import { ArrowRight, Waves, Anchor, Building2, TreePine, Landmark, Sprout } from 'lucide-react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { useGSAP } from '@gsap/react'
import SEO from '@/components/SEO'
import { aboutGraph } from '@/lib/organizationSchema'
import PageHero from '@/components/PageHero'
import TrustSignalStrip from '@/components/TrustSignalStrip'
import { BodyCopy, Container, DisplayHeading, Section, SectionLabel } from '../components/system'
import { locationPath } from '@/data/locations'


const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to request a quote (via mychef.ae/about)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const values = [
  { title: 'Quality', desc: 'Only chefs who meet the standard. Only ingredients that meet the menu. No corners cut on either.' },
  { title: 'Discretion', desc: 'What happens in your home stays in your home. Every chef and service professional we place works to that rule.' },
  { title: 'Hospitality', desc: 'A good dinner is remembered long after the plates are cleared. That feeling is what we design for: warm, attentive, unhurried.' },
  { title: 'Reliability', desc: 'On time, every time. The plan is written before the day, so the day runs to the plan.' },
]

// The split — the chef cooks; myCHEF does the four jobs around the chef.
const split = [
  { step: 'Match', desc: 'The chef is chosen for your household, not pulled from a list.' },
  { step: 'Vet', desc: 'Credentials, licensing and food safety are checked before anyone cooks for you.' },
  { step: 'Back up', desc: 'A day off or a sick day is covered, so the household keeps eating.' },
  { step: 'Review', desc: 'Placements are reviewed after service, and the standard is held.' },
]

const team = [
  { image: '/team-head-chef.webp', name: 'Marco Adriano', role: 'Executive Chef', bio: 'Classically trained in modern European fine dining across Europe and the Middle East. Two decades of experience shaping menus that balance precision with Mediterranean warmth.', exp: 'Fine Dining Leadership' },
  { image: '/team-sous-chef.webp', name: 'Elena Vasquez', role: 'Sous Chef', bio: 'Experienced in seafood-led cuisine, modern plating, and kitchen coordination for high-end private events. Brings creativity and calm execution to every service.', exp: 'Private Event Specialist' },
  { image: '/team-pastry-chef.webp', name: 'Thomas Chen', role: 'Pastry Chef', bio: 'Specializes in modern patisserie, chocolate work, and dessert presentation designed to close a meal with impact and elegance.', exp: 'Dessert & Pastry' },
]

// Communities that have their own page under /locations/:slug (see src/data/locations.ts).
// Anything else renders as plain text instead of linking to "Location Not Found".
const LOCATION_PAGES = new Set([
  'palm-jumeirah', 'bluewaters-island', 'dubai-marina', 'jbr', 'jlt', 'jvc', 'downtown-dubai', 'difc',
  'business-bay', 'emirates-hills', 'dubai-hills', 'arabian-ranches', 'jumeirah', 'umm-suqeim', 'al-barsha',
])
const toLocationSlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-')

const locations = [
  { group: 'Beach & Island', icon: Waves, items: ['Palm Jumeirah', 'Bluewaters Island'] },
  { group: 'Marina & Waterfront', icon: Anchor, items: ['Dubai Marina', 'JBR', 'Dubai Creek Harbour'] },
  { group: 'City Center', icon: Building2, items: ['Downtown Dubai', 'DIFC', 'Business Bay'] },
  { group: 'Premium Residential', icon: TreePine, items: ['Emirates Hills', 'Dubai Hills', 'Jumeirah Islands', 'Jumeirah Golf Estates', 'Arabian Ranches'] },
  { group: 'Traditional', icon: Landmark, items: ['Jumeirah', 'Umm Suqeim', 'Al Safa'] },
  { group: 'Emerging', icon: Sprout, items: ['Al Barari', 'Meydan', 'Dubai Silicon Oasis', 'Dubai South'] },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.mychef.ae/about' },
  ],
}

export default function About() {
  useScrollTrigger()
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set('.story-left, .story-right, .value-card, .team-card, .split-step, .coverage-item, .about-cta-content', {
          opacity: 1, x: 0, y: 0, scale: 1,
        })
        return
      }

      // Story section
      gsap.from('.story-left', {
        opacity: 0, x: -30, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.story-left', start: 'top 85%', toggleActions: 'play none none none' },
      })
      gsap.from('.story-right', {
        opacity: 0, x: 30, duration: 0.8, ease: 'power3.out', delay: 0.2,
        scrollTrigger: { trigger: '.story-right', start: 'top 85%', toggleActions: 'play none none none' },
      })

      // Values cards
      gsap.from('.value-card', {
        opacity: 0, y: 50, duration: 0.8, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.values-grid', start: 'top 85%', toggleActions: 'play none none none' },
      })

      // Team cards
      gsap.from('.team-card', {
        opacity: 0, y: 50, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.team-grid', start: 'top 85%', toggleActions: 'play none none none' },
      })

      // The split — four steps reveal in sequence
      gsap.from('.split-step', {
        opacity: 0, y: 24, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.split-band', start: 'top 85%', toggleActions: 'play none none none' },
      })

      // Coverage section
      gsap.from('.coverage-item', {
        opacity: 0, y: 20, duration: 0.6, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: '.coverage-section', start: 'top 85%', toggleActions: 'play none none none' },
      })

      // CTA section
      gsap.from('.about-cta-content', {
        opacity: 0, y: 30, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-cta', start: 'top 85%', toggleActions: 'play none none none' },
      })
    }, containerRef)

    return () => ctx.revert()
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Private Chef Company Dubai"
        description="Discover myCHEF Dubai — a private-dining house that designs bespoke dining experiences and brings you professional, licensed chefs across Dubai."
        canonicalPath="/about"
        ogImage="/team-head-chef.webp"
        preloadHero="/images/mychef-dubai-about-team-hero.webp"
        schema={aboutGraph(breadcrumbSchema)}
      />

      {/* Section 1: Hero */}
      <PageHero
        eyebrow="ABOUT MYCHEF"
        title="Hiring a chef is the easy part."
        subtitle="Keeping the standard, covering the day off, remembering how your household eats — that is the work. This is the team that does it, so you run a service, not a person."
        image="/images/mychef-dubai-about-team-hero.webp"
        imageAlt="The myCHEF Dubai team — chefs, specialists and household managers — in a Dubai kitchen with the skyline behind them"
        imageWidth={1672}
        imageHeight={941}
        minHeight="full"
        overlay="cinematic"
        align="left"
        titleEmphasis
        imagePosition="center 32%"
        cta={{ label: 'Get a Tailored Quote', href: '/inquiry' }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'About' }]}
      />

      <TrustSignalStrip />

      {/* Section 2: Our Story */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
            <div className="story-left">
              <SectionLabel>Our story</SectionLabel>
              <DisplayHeading size="h2" className="text-black mb-8">
                Restaurants have a system behind the chef. Homes usually do not.
              </DisplayHeading>
              <div className="space-y-4 font-inter text-body text-gray-500" style={{ lineHeight: '1.7' }}>
                <p>myCHEF Dubai was founded with a simple belief: that exceptional dining should not be limited to restaurants. Drawing on years of experience in Europe's most demanding kitchens, our founder built myCHEF around a simple idea: the guest should own the evening and none of the work — so we design the experience and choose the talent to bring it to life.</p>
                <p>Today, myCHEF is a private-dining house. We design the experience end to end and run every part of the evening — from the first idea to the final cleared plate. We choose the chef, shape the menu, choreograph the service, and hold it all to one standard, so you're at the table, not managing it.</p>
                <p>We serve households across Dubai — from Palm Jumeirah to Emirates Hills, Downtown to Dubai Marina — and every engagement is held to the same standard.</p>
              </div>
            </div>
            <div className="story-right">
              <img
                src="/images/villa-catering-dubai-hero.webp"
                alt="A chef grilling poolside at a Dubai villa at sunset. Experience concept shown."
                width={1264}
                height={848}
                className="editorial-image w-full object-cover"
                style={{ border: '1px solid rgba(200,164,92,0.3)' }}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Values — numbered editorial rows, not an icon grid */}
      <Section tone="ivory">
        <Container>
          <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <SectionLabel>The standard</SectionLabel>
              <DisplayHeading size="h2" className="text-black">The standard we hold every chef to.</DisplayHeading>
              <BodyCopy muted className="mt-5">
                Four lines, kept short so they can be used. A chef we put forward is held to all four — and so are we.
              </BodyCopy>
            </div>
            <ol className="values-grid border-t border-gray-200">
              {values.map((v, i) => (
                <li key={v.title} className="value-card grid grid-cols-[3.5rem_1fr] sm:grid-cols-[5rem_1fr] gap-x-4 sm:gap-x-6 py-7 border-b border-gray-200">
                  <p className="font-playfair text-h3 text-gold-ink leading-none select-none">{String(i + 1).padStart(2, '0')}</p>
                  <div>
                    <h3 className="font-playfair text-h3 text-black mb-2">{v.title}</h3>
                    <p className="font-inter text-body text-gray-500 leading-relaxed max-w-[52ch]">{v.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      {/* Section 4: Team */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <SectionLabel align="center" tone="dark">The chefs we choose</SectionLabel>
            <DisplayHeading size="h2" className="text-white mb-4">The chef matters. How we choose one matters more.</DisplayHeading>
            <BodyCopy tone="dark" className="mx-auto">Behind every myCHEF evening is a chef we selected — vetted for credentials, licensing and food safety before they ever cook for a client. We choose the talent. We hold the standard. The cooking is theirs.</BodyCopy>
          </div>
          <div className="team-grid grid md:grid-cols-3 gap-8 lg:gap-10">
            {team.map((chef, i) => (
              <article key={chef.name} className="team-card">
                <div className="aspect-[3/4] overflow-hidden mb-5">
                  <img src={chef.image} alt={`${chef.name}, independent partner chef`} width={300} height={400} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                </div>
                <p className="font-inter text-caption uppercase tracking-[0.12em] text-gold mb-2">
                  {String(i + 1).padStart(2, '0')} · Independent partner chef
                </p>
                <h3 className="font-playfair text-h3 text-white leading-tight">{chef.name}</h3>
                <p className="font-inter text-body-sm text-gray-300 mt-1">{chef.role} · {chef.exp}</p>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed mt-4 pt-4 border-t border-white/10">{chef.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: The split — inline chain 01 → 02 → 03 → 04, not a stats band */}
      <Section tone="charcoal" className="split-band">
        <Container>
          <div className="grid lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] gap-10 lg:gap-16 items-start">
            <div>
              <SectionLabel tone="dark">The split</SectionLabel>
              <DisplayHeading size="h2" className="text-white">The chef cooks. We do the other four jobs.</DisplayHeading>
              <BodyCopy tone="dark" className="mt-5">
                The chef is an independent partner in your kitchen. myCHEF is the system around them — the part that keeps working on their day off.
              </BodyCopy>
            </div>
            <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 lg:gap-x-6 border-t border-white/10 pt-8">
              {split.map((s, i) => (
                <li key={s.step} className="split-step max-lg:border-l max-lg:border-gold/30 max-lg:pl-5">
                  <p className="flex items-center gap-3 mb-3 font-playfair text-h4 text-gold leading-none select-none">
                    <span>{String(i + 1).padStart(2, '0')}</span>
                    {i < split.length - 1 && <ArrowRight size={16} className="hidden lg:inline-block text-gold/60" aria-hidden />}
                  </p>
                  <h3 className="font-inter text-body font-medium text-white mb-2">{s.step}</h3>
                  <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      {/* Section 6: Coverage — hairline panels with concept icons, no placeholder map */}
      <Section tone="white" className="coverage-section">
        <Container>
          <div className="max-w-[720px] mx-auto text-center mb-10 md:mb-14">
            <SectionLabel align="center">Where we serve</SectionLabel>
            <DisplayHeading size="h2" className="text-black">Twenty Dubai communities. The same standard in each.</DisplayHeading>
            <BodyCopy muted className="mt-4 mx-auto">
              Communities with their own page are linked. Not listed? Tell us the address — we serve all of Dubai.
            </BodyCopy>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {locations.map((loc) => (
              <div key={loc.group} className="coverage-item bg-white p-6 lg:p-7">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-gold/35 text-gold-ink">
                    <loc.icon size={18} strokeWidth={1.5} aria-hidden />
                  </span>
                  <h3 className="font-playfair text-h4 text-black">{loc.group}</h3>
                </div>
                <ul className="flex flex-wrap gap-x-5 gap-y-1">
                  {loc.items.map((item) => {
                    const slug = toLocationSlug(item)
                    return (
                      <li key={item} className="font-inter text-body-sm">
                        {LOCATION_PAGES.has(slug) ? (
                          <Link
                            to={locationPath(slug)}
                            className="inline-block py-1 text-gray-600 underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold-ink hover:decoration-gold-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-sm"
                          >
                            {item}
                          </Link>
                        ) : (
                          <span className="inline-block py-1 text-gray-500">{item}</span>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Section 7: CTA Banner */}
      <section className="about-cta bg-black section-padding">
        <div className="about-cta-content container-custom text-center">
          <DisplayHeading size="h2" className="text-white mb-4">Now tell us about your household.</DisplayHeading>
          <BodyCopy tone="dark" className="mx-auto mb-8">
            The occasion, the house, or the week you need covered — on WhatsApp, or request a quote. Prices and hours are agreed before any work starts.
          </BodyCopy>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary focus-visible:ring-offset-black">Request My Custom Quote</Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary focus-visible:ring-offset-black">Chat on WhatsApp</a>
          </div>
          <p className="mt-6 font-inter text-body-sm text-gray-500">
            Own a venue or manage properties?{' '}
            <Link to="/partner-with-us" className="text-gold hover:underline">
              Partner with us
            </Link>
            . Press or media inquiries? Visit our{' '}
            <Link to="/press" className="text-gold hover:underline">
              press kit
            </Link>
            . Chefs looking for work should read{' '}
            <Link to="/become-a-mychef" className="text-gold hover:underline">
              become a myCHEF chef
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  )
}
