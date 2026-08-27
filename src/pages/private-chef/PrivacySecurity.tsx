// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /private-chef-dubai/privacy-security
//     primary:     none (untargeted by decision)
//     subkeywords: none
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { Link } from 'react-router'
import { Check, CookingPot, IdCard, PhoneCall, ShieldCheck } from 'lucide-react'
import SEO from '../../components/SEO'
import PageHero from '../../components/PageHero'
import FaqAccordion from '../../components/FaqAccordion'
import { Section, Container, Eyebrow, DisplayHeading, BodyCopy } from '../../components/system'
import ClusterNav from '../../components/private-chef/ClusterNav'
import ClusterCTA from '../../components/private-chef/ClusterCTA'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { plainFaqAnswer } from '../../utils/schema'
import { clusterHeroes, doPromise, dontPromise, vettingSteps, WHATSAPP_MESSAGE } from '../../content/privateChefPage'
import { EMPLOYMENT } from '../../content/privateChefStandard'
import { CLUSTER_PATHS, FIND_CHEF_LABEL, INQUIRY_HREF, childSeo, householdConduct, informationBoundaries, privacyFaqs } from '../../content/privateChefCluster'

const PATH = CLUSTER_PATHS.privacy
const seo = childSeo.privacy

/** Only the entry checks we actually run — not trial bookings or ongoing review. */
const ENTRY_CHECK_TITLES = new Set([
  'Identity and right-to-work',
  'Practical cooking assessment',
  'References',
  'Food safety',
])
const entryChecks = vettingSteps.filter((step) => ENTRY_CHECK_TITLES.has(step.title))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: privacyFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: plainFaqAnswer(faq.a) },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
        { '@type': 'ListItem', position: 2, name: 'Private Chef Dubai', item: 'https://www.mychef.ae/private-chef-dubai' },
        { '@type': 'ListItem', position: 3, name: 'Privacy & Security', item: `https://www.mychef.ae${PATH}` },
      ],
    },
  ],
}

export default function PrivateChefPrivacySecurity() {
  useWhatsAppMessage(WHATSAPP_MESSAGE)

  return (
    <div>
      <SEO
        title={seo.title}
        description={seo.description}
        canonicalPath={PATH}
        noindex
        ogImage={clusterHeroes.privacy.src}
        hideSiteName
        preloadHero={clusterHeroes.privacy.src}
        schema={schema}
      />
      <PageHero
        variant="quiet"
        eyebrow={seo.eyebrow}
        title={seo.h1}
        subtitle={seo.subtitle}
        image={clusterHeroes.privacy.src}
        imageAlt={clusterHeroes.privacy.alt}
        imageWidth={clusterHeroes.privacy.width}
        imageHeight={clusterHeroes.privacy.height}
        cta={{ label: FIND_CHEF_LABEL, href: INQUIRY_HREF }}
        secondaryCta={{ label: 'How We Vet Chefs', href: CLUSTER_PATHS.ourChefs }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Private Chef Dubai', href: CLUSTER_PATHS.overview },
          { label: 'Privacy & Security' },
        ]}
        minHeight="tall"
        overlay="left"
        align="left"
        imagePosition="58% 46%"
      />
      <ClusterNav />

      <Section tone="white">
        <Container>
          <Eyebrow>Identity & background</Eyebrow>
          <DisplayHeading size="h2" className="text-black mb-4">Only checks we actually run</DisplayHeading>
          <BodyCopy className="mb-5 max-w-[760px]">
            Someone is entering your private home. We check identity and right-to-work, cook in a practical assessment, take references, and require food-hygiene awareness. That is the list. {EMPLOYMENT.visa}
          </BodyCopy>
          <BodyCopy className="mb-5 max-w-[760px]">
            {EMPLOYMENT.notAnAgency} An agency hands over CVs and steps away once someone is hired; we stay in the
            assignment — the checks below are ours to run, and ours to stand behind for as long as the chef is in your
            family’s home.
          </BodyCopy>
          <BodyCopy className="mb-5 max-w-[760px]">
            Said plainly, because it decides who carries the risk: {EMPLOYMENT.full.charAt(0).toLowerCase() + EMPLOYMENT.full.slice(1)}
          </BodyCopy>
          <BodyCopy className="mb-8 max-w-[760px]">
            We do not publish police certificates we have not seen, licences we cannot show, or absolute safety guarantees. If a check is not below, we do not claim it. The same four steps are described when we{' '}
            <Link to="/how-we-vet-our-chefs" className="text-gold-ink underline underline-offset-4">vet our chefs</Link>
            . How those chefs are then matched to a house sits on{' '}
            <Link to={CLUSTER_PATHS.ourChefs} className="text-gold-ink underline underline-offset-4">Our Chefs</Link>.
          </BodyCopy>
          <ol className="grid sm:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
            {entryChecks.map((step, i) => {
              const Icon = {
                'Identity and right-to-work': IdCard,
                'Practical cooking assessment': CookingPot,
                'References': PhoneCall,
                'Food safety': ShieldCheck,
              }[step.title] ?? Check
              return (
                <li key={step.title} className="bg-white p-6 lg:p-7">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-gold/35 text-gold-ink">
                      <Icon size={18} strokeWidth={1.5} aria-hidden />
                    </span>
                    <p className="font-playfair text-h4 text-gold-ink leading-none select-none">{String(i + 1).padStart(2, '0')}</p>
                  </div>
                  <h3 className="font-playfair text-h4 text-black mb-2">{step.title}</h3>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{step.body}</p>
                </li>
              )
            })}
          </ol>
          <BodyCopy muted className="mt-8 max-w-[760px]">
            New chefs start on supervised or smaller bookings, and placements are reviewed after service. Those are operating habits, not extra credentials. How feedback is used — and when we change the match — is on{' '}
            <Link to={CLUSTER_PATHS.quality} className="text-gold-ink underline underline-offset-4">Quality & Training</Link>.
          </BodyCopy>
        </Container>
      </Section>

      <Section tone="ivory">
        <Container>
          <Eyebrow>Household conduct</Eyebrow>
          <DisplayHeading size="h2" className="text-black mb-6">How we expect a chef to behave in your home</DisplayHeading>
          <ul className="space-y-3 max-w-[760px]">
            {householdConduct.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check size={16} className="text-gold-ink mt-1 flex-shrink-0" />
                <span className="font-inter text-body text-gray-600 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <Eyebrow>Discretion</Eyebrow>
          <DisplayHeading size="h2" className="text-black mb-4">Information boundaries</DisplayHeading>
          <BodyCopy className="mb-10 max-w-[760px]">
            Discretion is not a slogan. It is a split between what the chef must know to cook safely in this house, and what is none of the assignment. The Food Profile holds the former — see{' '}
            <Link to={CLUSTER_PATHS.howItWorks} className="text-gold-ink underline underline-offset-4">how that record is built</Link>.
          </BodyCopy>
          <div className="grid md:grid-cols-2 gap-6">
            {informationBoundaries.map((col) => (
              <div key={col.need} className="border border-gray-200 p-6 md:p-8">
                <h3 className="font-playfair text-h4 text-black mb-5">{col.need}</h3>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check size={16} className="text-gold-ink mt-1 flex-shrink-0" />
                      <span className="font-inter text-body-sm text-gray-500 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="charcoal">
        <Container>
          <Eyebrow tone="dark">Dedicated contact</Eyebrow>
          <DisplayHeading size="h2" className="text-white mb-4">You should not have to manage every issue directly with the chef</DisplayHeading>
          <BodyCopy tone="dark" className="mb-5 max-w-[760px]">
            myCHEF sits between operations and the household. Something that was not right, a change of chef, a specialist on Friday, or an absence goes through your household manager.
          </BodyCopy>
          <BodyCopy tone="dark-strong" className="max-w-[760px]">
            When an assignment ends, access ends with it. The Food Profile stays with the household. The next chef is briefed from that record — not from an informal handover at your door. We only describe procedures we actually operate.
          </BodyCopy>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-playfair text-h3 text-black mb-5">What we do not promise</h3>
              <ul className="space-y-3">
                {dontPromise.map((item) => (
                  <li key={item} className="font-inter text-body-sm text-gray-500 leading-relaxed">— {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-playfair text-h3 text-black mb-5">What we do promise</h3>
              <ul className="space-y-3">
                {doPromise.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={16} className="text-gold-ink mt-1 flex-shrink-0" />
                    <span className="font-inter text-body-sm text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <BodyCopy muted className="mt-8 max-w-[760px]">
            Those are operating commitments — a match, a contact, a travelling Food Profile — not extra background-check products.
          </BodyCopy>
        </Container>
      </Section>

      <Section tone="ivory">
        <Container>
          <Eyebrow>Continue</Eyebrow>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link to={CLUSTER_PATHS.ourChefs} className="border border-gray-200 hover:border-gold p-6 transition-colors bg-white">
              <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-2">Our Chefs</p>
              <p className="font-playfair text-h4 text-black">Selection and matching after the checks</p>
            </Link>
            <Link to={CLUSTER_PATHS.howItWorks} className="border border-gray-200 hover:border-gold p-6 transition-colors bg-white">
              <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-2">How It Works</p>
              <p className="font-playfair text-h4 text-black">One household manager, and backup</p>
            </Link>
            <Link to={CLUSTER_PATHS.quality} className="border border-gray-200 hover:border-gold p-6 transition-colors bg-white">
              <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-2">Quality & Training</p>
              <p className="font-playfair text-h4 text-black">When the match should change</p>
            </Link>
          </div>
        </Container>
      </Section>

      <section className="bg-cream py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-8">Questions about privacy, checks and discretion</h2>
          <FaqAccordion items={[...privacyFaqs]} defaultOpen={-1} />
        </div>
      </section>

      <ClusterCTA title="A chef in the house, with a standard around them" body="A private chef for family life means guests, children and school-week reality. Tell us about the household. We match, run the checks above, and manage the assignment — you are not left running the operation yourself." />
    </div>
  )
}
