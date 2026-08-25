// Support page for /private-chef-dubai/pricing — no keyword-lock primary of its own.
import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import SEO from '../../components/SEO'
import PageHero from '../../components/PageHero'
import { Section, Container, Eyebrow, DisplayHeading, BodyCopy } from '../../components/system'
import ClusterNav from '../../components/private-chef/ClusterNav'
import ClusterCTA from '../../components/private-chef/ClusterCTA'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { photos, WHATSAPP_MESSAGE } from '../../content/privateChefPage'
import { CLUSTER_PATHS } from '../../content/privateChefCluster'
import { PLAN_MENTAL_MODEL, PLAN_TERMS, TERM_ITEM_COUNT, type TermItem } from '../../content/privateChefPlanTerms'

const PATH = CLUSTER_PATHS.planTerms
const hero = photos[3]
const TITLE = 'How Your Private Chef Plan Works | myCHEF'
const DESCRIPTION =
  'Every rule that shapes a myCHEF private chef plan in Dubai, in plain English: groceries, guests, rescheduling, billing, replacement, access, children, and what happens when something goes wrong.'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
        { '@type': 'ListItem', position: 2, name: 'Private Chef Dubai', item: 'https://www.mychef.ae/private-chef-dubai' },
        { '@type': 'ListItem', position: 3, name: 'Prices', item: `https://www.mychef.ae${CLUSTER_PATHS.pricing}` },
        { '@type': 'ListItem', position: 4, name: 'How your plan works', item: `https://www.mychef.ae${PATH}` },
      ],
    },
  ],
}

function TermBody({ item }: { item: TermItem }) {
  return (
    <div className="pb-8 max-w-[680px]">
      {item.paragraphs.map((p) => (
        <p key={p} className="font-inter text-body text-gray-600 leading-relaxed mb-4 last:mb-0">{p}</p>
      ))}
      {item.bullets ? (
        <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
          {item.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 font-inter text-body-sm text-gray-600">
              <span className="mt-2.5 h-px w-3 shrink-0 bg-gold-ink/60" />
              {b}
            </li>
          ))}
        </ul>
      ) : null}
      {item.twoUp ? (
        <div className="mt-5 grid gap-px bg-gray-200 border border-gray-200 sm:grid-cols-2">
          {[item.twoUp.left, item.twoUp.right].map((side, i) => (
            <div key={side.label} className={i === 1 ? 'bg-cream p-5' : 'bg-white p-5'}>
              <p className="font-inter text-caption uppercase tracking-[0.12em] text-gold-ink mb-2">{side.label}</p>
              {side.lines.map((l) => (
                <p key={l} className="font-inter text-body-sm text-gray-700 leading-relaxed">{l}</p>
              ))}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default function HowYourPlanWorks() {
  useWhatsAppMessage(WHATSAPP_MESSAGE)

  return (
    <div>
      <SEO title={TITLE} description={DESCRIPTION} canonicalPath={PATH} ogImage={hero.src} hideSiteName preloadHero={hero.src} schema={schema} />
      <PageHero
        variant="quiet"
        eyebrow="Private Chef Dubai"
        title="How your private chef plan works"
        subtitle="Every rule that shapes your plan, explained once — so you never have to ask."
        image={hero.src}
        imageAlt={hero.alt}
        imageWidth={hero.width}
        imageHeight={hero.height}
        cta={{ label: 'Build your plan', href: `${CLUSTER_PATHS.pricing}#calculator` }}
        secondaryCta={{ label: 'How It Works', href: CLUSTER_PATHS.howItWorks }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Private Chef Dubai', href: CLUSTER_PATHS.overview },
          { label: 'Prices', href: CLUSTER_PATHS.pricing },
          { label: 'How your plan works' },
        ]}
        minHeight="medium"
        overlay="cinematic"
        align="left"
      />
      <ClusterNav />

      <Section tone="white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.3fr)_minmax(0,0.7fr)] lg:gap-16 items-start">
            <nav aria-label="Sections" className="lg:sticky lg:top-24">
              <Eyebrow className="mb-4">{TERM_ITEM_COUNT} rules, plain English</Eyebrow>
              <ol className="border-t border-gray-200">
                {PLAN_TERMS.map((g, i) => (
                  <li key={g.id} className="border-b border-gray-200">
                    <a href={`#${g.id}`} className="flex items-baseline gap-3 py-3 font-inter text-body-sm text-gray-600 hover:text-gold-ink transition-colors">
                      <span className="font-playfair text-gold-ink select-none">{String(i + 1).padStart(2, '0')}</span>
                      <span>{g.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
              <p className="mt-6 font-inter text-caption text-gray-400 leading-relaxed">
                Prices and thresholds on this page come from the same source as the calculator. The detail lives in your service agreement.
              </p>
            </nav>

            <div className="space-y-16">
              {PLAN_TERMS.map((g, gi) => (
                <section key={g.id} id={g.id} className="scroll-mt-24" aria-labelledby={`${g.id}-h`}>
                  <div className="mb-6">
                    <span className="font-playfair text-h3 text-gold-ink select-none mr-3">{String(gi + 1).padStart(2, '0')}</span>
                    <DisplayHeading as="h2" size="h2" className="inline text-black">
                      <span id={`${g.id}-h`}>{g.title}</span>
                    </DisplayHeading>
                    {g.intro ? <BodyCopy muted className="mt-3">{g.intro}</BodyCopy> : null}
                  </div>
                  <div className="border-t border-gray-200">
                    {g.items.map((item, ii) => (
                      <details key={item.id} id={item.id} open={ii === 0} className="group border-b border-gray-200 scroll-mt-24">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                          <h3 className="font-playfair text-h4 text-black group-open:text-gold-ink transition-colors">{item.title}</h3>
                          <span aria-hidden className="flex h-8 w-8 flex-shrink-0 items-center justify-center border border-gold/35 text-gold-ink transition-transform duration-300 group-open:rotate-45">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 1v10M1 6h10" /></svg>
                          </span>
                        </summary>
                        <TermBody item={item} />
                      </details>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="ivory">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-16 items-start">
            <div>
              <Eyebrow className="mb-3">What you should now know</Eyebrow>
              <DisplayHeading size="h2" className="text-black mb-4">You are not subscribing to food.</DisplayHeading>
              <BodyCopy>You are reserving professional chef capacity for your household — and every rule above exists to make that reservation dependable.</BodyCopy>
            </div>
            <ol className="border-t border-gray-200">
              {PLAN_MENTAL_MODEL.map((line, i) => (
                <li key={line} className="flex items-baseline gap-4 border-b border-gray-200 py-4">
                  <span className="font-playfair text-h4 text-gold-ink select-none">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-inter text-body text-gray-700">{line}</span>
                </li>
              ))}
            </ol>
          </div>
          <p className="mt-10">
            <Link to={`${CLUSTER_PATHS.pricing}#calculator`} className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-wider text-gold-ink hover:text-gold">
              Build your plan and see the price <ArrowRight size={14} />
            </Link>
          </p>
        </Container>
      </Section>

      <ClusterCTA title="Design the service. We confirm the chef." body="Build your plan on the pricing page, send it, and a coordinator confirms availability and the exact figure in writing — before anything starts." inquiryLabel="Build my plan" />
    </div>
  )
}
