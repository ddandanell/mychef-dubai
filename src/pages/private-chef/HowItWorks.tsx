// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /private-chef-dubai/how-it-works
//     primary:     "managed private chef service dubai"
//     subkeywords: "private chef without managing staff dubai" · "private chef agency" · "private chef services" · "household chef" · "chef middle east llc dubai" · "most reliable personal chef services in dubai" · "hire a private chef" · "private chef service"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { Link } from 'react-router'
import SEO from '../../components/SEO'
import PageHero from '../../components/PageHero'
import ProcessJourney from '../../components/ProcessJourney'
import HouseholdManager from '../../components/HouseholdManager'
import FoodProfile from '../../components/FoodProfile'
import FaqAccordion from '../../components/FaqAccordion'
import { Section, Container, Eyebrow, DisplayHeading, BodyCopy } from '../../components/system'
import ClusterNav from '../../components/private-chef/ClusterNav'
import ClusterCTA from '../../components/private-chef/ClusterCTA'
import HowItWorksProduct from '../../components/private-chef/HowItWorksProduct'
import WhoDoesWhatBoard from '../../components/private-chef/WhoDoesWhatBoard'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { plainFaqAnswer } from '../../utils/schema'
import {
  backupAlone,
  backupMychef,
  featuredChefs,
  clusterHeroes,
  howItWorksPhoto,
  processSteps,
  whenThingsChange,
  WHATSAPP_MESSAGE,
} from '../../content/privateChefPage'
import { CLUSTER_PATHS, FIND_CHEF_LABEL, INQUIRY_HREF, childSeo, howItWorksFaqs } from '../../content/privateChefCluster'

const PATH = CLUSTER_PATHS.howItWorks
const seo = childSeo.howItWorks

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'HowTo',
      name: 'How a managed household chef service works',
      description: seo.description,
      step: processSteps.map((step, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: step.title,
        text: step.body,
      })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: howItWorksFaqs.map((faq) => ({
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
        { '@type': 'ListItem', position: 3, name: 'How It Works', item: `https://www.mychef.ae${PATH}` },
      ],
    },
  ],
}

export default function PrivateChefHowItWorks() {
  useWhatsAppMessage(WHATSAPP_MESSAGE)

  return (
    <div>
      <SEO
        title={seo.title}
        description={seo.description}
        canonicalPath={PATH}
        ogImage={clusterHeroes.howItWorks.src}
        hideSiteName
        preloadHero={clusterHeroes.howItWorks.src}
        schema={schema}
      />
      <PageHero
        variant="quiet"
        eyebrow={seo.eyebrow}
        title={seo.h1}
        subtitle={seo.subtitle}
        image={clusterHeroes.howItWorks.src}
        imageAlt={clusterHeroes.howItWorks.alt}
        imageWidth={clusterHeroes.howItWorks.width}
        imageHeight={clusterHeroes.howItWorks.height}
        cta={{ label: FIND_CHEF_LABEL, href: INQUIRY_HREF }}
        secondaryCta={{ label: 'See Household Prices', href: CLUSTER_PATHS.pricing }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Private Chef Dubai', href: CLUSTER_PATHS.overview },
          { label: 'How It Works' },
        ]}
        minHeight="tall"
        overlay="left"
        align="left"
        imagePosition="62% 48%"
      />
      <ClusterNav />

      <Section tone="white" rhythm="chapter">
        <Container>
          <HowItWorksProduct />
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container>
          <div className="max-w-[720px] mb-16 lg:mb-20">
            <Eyebrow>Five stages</Eyebrow>
            <DisplayHeading size="h2" className="text-black mb-5">
              How the managed household chef service runs
            </DisplayHeading>
            <BodyCopy muted>
              Brief, match, Food Profile, service, review. The last stage loops back into the profile — which is why the
              longer you stay, the less you should have to explain.
            </BodyCopy>
          </div>
          <ProcessJourney
            steps={processSteps}
            deliverPhoto={howItWorksPhoto}
            chefThumbs={featuredChefs.slice(0, 3).map((c) => ({ src: c.image, name: c.name }))}
          />
          <p className="mt-16 text-center">
            <Link to={CLUSTER_PATHS.ourChefs} className="font-inter text-caption uppercase tracking-wider text-gold-ink hover:text-gold">
              See how chefs are selected and matched →
            </Link>
          </p>
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container>
          <HouseholdManager photoSrc="/images/mychef-household-managers-dubai.webp" />
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container>
          <div className="max-w-[720px] mb-12 lg:mb-16">
            <Eyebrow>Food Profile</Eyebrow>
            <DisplayHeading size="h2" className="text-black mb-5">
              The Food Profile is what travels when the chef cannot
            </DisplayHeading>
            <BodyCopy>
              Timing, allergies, children, spice, coffee, guests, service style. If it does not help us cook for this
              house, we do not need it. The profile is yours — see it, correct it, or ask for it to be deleted. Open the
              record below the way a chef or manager would.
            </BodyCopy>
          </div>
          <FoodProfile />
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container>
          <WhoDoesWhatBoard />
        </Container>
      </Section>

      <Section tone="charcoal" rhythm="chapter">
        <Container>
          <div className="max-w-[720px] mb-12 lg:mb-16">
            <Eyebrow tone="dark">When the house changes</Eyebrow>
            <DisplayHeading size="h2" className="text-white">
              The system is for the weeks that are not normal
            </DisplayHeading>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whenThingsChange.map((item) => (
              <div key={item.title} className="border border-gold/25 p-7 md:p-8 bg-black/40">
                <h3 className="font-playfair text-h4 text-white mb-4">{item.title}</h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container>
          <div className="max-w-[720px] mx-auto text-center mb-12 lg:mb-16">
            <Eyebrow align="center">Backup</Eyebrow>
            <DisplayHeading size="h2" className="text-black">Absence, mismatch, replacement</DisplayHeading>
            <BodyCopy muted className="mt-5 mx-auto">
              The Food Profile is why a replacement is not a restart. If the match itself is wrong, that is a different
              conversation —{' '}
              <Link to={CLUSTER_PATHS.quality} className="text-gold-ink underline underline-offset-4">when we change the chef</Link>.
            </BodyCopy>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-[980px] mx-auto">
            <div className="border border-gray-200 p-8 md:p-10">
              <h3 className="font-playfair text-h4 text-black mb-8">On your own</h3>
              <ol className="space-y-5">
                {backupAlone.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="font-playfair text-h4 text-gold-ink leading-none">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-inter text-body text-gray-500">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="border border-gold/40 bg-gold/5 p-8 md:p-10">
              <h3 className="font-playfair text-h4 text-black mb-8">With a managed household chef service</h3>
              <ol className="space-y-5">
                {backupMychef.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="font-playfair text-h4 text-gold-ink leading-none">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-inter text-body text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="standard">
        <Container>
          <Eyebrow>Continue</Eyebrow>
          <div className="grid sm:grid-cols-3 gap-5">
            <Link to={CLUSTER_PATHS.ourChefs} className="border border-gray-200 hover:border-gold p-8 transition-colors bg-white">
              <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-3">Our Chefs</p>
              <p className="font-playfair text-h4 text-black">How chefs are selected and matched</p>
            </Link>
            <Link to={CLUSTER_PATHS.quality} className="border border-gray-200 hover:border-gold p-8 transition-colors bg-white">
              <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-3">Quality & Training</p>
              <p className="font-playfair text-h4 text-black">When the match should change</p>
            </Link>
            <Link to={CLUSTER_PATHS.privacy} className="border border-gray-200 hover:border-gold p-8 transition-colors bg-white">
              <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-3">Privacy & Security</p>
              <p className="font-playfair text-h4 text-black">What we check before anyone enters</p>
            </Link>
          </div>
        </Container>
      </Section>

      <section className="bg-cream py-24">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">Managed Private Chef Service Dubai: the questions we get before a booking</h2>
          <FaqAccordion items={[...howItWorksFaqs]} defaultOpen={-1} />
        </div>
      </section>

      <ClusterCTA
        title="Tell us how the house eats"
        body="We work out the role, match the chef, and build the Food Profile before the first service. Backup uses that record — you approve the plan in writing."
      />
    </div>
  )
}
