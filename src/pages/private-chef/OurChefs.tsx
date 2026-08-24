// KEYWORD LOCK — this page owns: "personal chef dubai" (70/mo, UAE).
// Secondary: hire a chef (70), hire chef dubai (30), indian chef dubai (30), looking for chef (30).
// Do not target another cluster page's primary here. See KEYWORD_LOCKS in content/privateChefCluster.ts.
import { Link } from 'react-router'
import { ArrowRight, Check } from 'lucide-react'
import SEO from '../../components/SEO'
import PageHero from '../../components/PageHero'
import FaqAccordion from '../../components/FaqAccordion'
import { Section, Container, Eyebrow, DisplayHeading, BodyCopy } from '../../components/system'
import ClusterNav from '../../components/private-chef/ClusterNav'
import ClusterCTA from '../../components/private-chef/ClusterCTA'
import FillFrame from '../../components/private-chef/FillFrame'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { plainFaqAnswer } from '../../utils/schema'
import {
  chefLevelIntro,
  chefLevelPhoto,
  chefLevels,
  evidenceChain,
  exampleProfiles,
  featuredChefs,
  higherNotBetter,
  leadChef,
  levelSpecialtyExamples,
  levelVsSpecialty,
  matchingSteps,
  networkSpecialties,
  clusterHeroes,
  restaurantTitle,
  scoring,
  specialists,
  WHATSAPP_MESSAGE,
} from '../../content/privateChefPage'
import { CLUSTER_PATHS, FIND_CHEF_LABEL, INQUIRY_HREF, childSeo, ourChefsFaqs } from '../../content/privateChefCluster'

const PATH = CLUSTER_PATHS.ourChefs
const seo = childSeo.ourChefs

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: ourChefsFaqs.map((faq) => ({
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
        { '@type': 'ListItem', position: 3, name: 'Our Chefs', item: `https://www.mychef.ae${PATH}` },
      ],
    },
  ],
}

export default function PrivateChefOurChefsPage() {
  useWhatsAppMessage(WHATSAPP_MESSAGE)

  return (
    <div>
      <SEO
        title={seo.title}
        description={seo.description}
        canonicalPath={PATH}
        ogImage={clusterHeroes.ourChefs.src}
        hideSiteName
        preloadHero={clusterHeroes.ourChefs.src}
        schema={schema}
      />
      <PageHero
        variant="quiet"
        eyebrow={seo.eyebrow}
        title={seo.h1}
        subtitle={seo.subtitle}
        image={clusterHeroes.ourChefs.src}
        imageAlt={clusterHeroes.ourChefs.alt}
        imageWidth={clusterHeroes.ourChefs.width}
        imageHeight={clusterHeroes.ourChefs.height}
        cta={{ label: FIND_CHEF_LABEL, href: INQUIRY_HREF }}
        secondaryCta={{ label: 'See How Matching Works', href: `${PATH}#matching` }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Private Chef Dubai', href: CLUSTER_PATHS.overview },
          { label: 'Our Chefs' },
        ]}
        minHeight="tall"
        overlay="left"
        align="left"
        imagePosition="58% 46%"
      />
      <ClusterNav />

      <Section tone="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
            <FillFrame
              src={chefLevelPhoto.src}
              alt={chefLevelPhoto.alt}
              width={chefLevelPhoto.width}
              height={chefLevelPhoto.height}
              className="aspect-[3/2] w-full"
              objectPosition="center 30%"
            />
            <div>
              <Eyebrow>Chef levels</Eyebrow>
              <DisplayHeading size="h2" className="text-black mb-4">Professional, Senior, Specialist, Lead Chef — that is the whole system</DisplayHeading>
              {chefLevelIntro.map((para) => (
                <BodyCopy key={para.slice(0, 48)} className="mb-4">{para}</BodyCopy>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {chefLevels.map((item) => (
              <div key={item.name} className="bg-cream border border-gray-200 p-6 md:p-8">
                <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-2">{item.tag}</p>
                <h3 className="font-playfair text-h4 text-black mb-2">{item.name}</h3>
                <p className="font-inter text-caption uppercase tracking-wider text-gray-400 mb-3">{item.useCase}</p>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="bg-black text-white p-6 md:p-8 mb-8">
            <p className="font-inter text-caption uppercase tracking-wider text-gold mb-2">{leadChef.eyebrow}</p>
            <h3 className="font-playfair text-h4 text-white mb-2">{leadChef.name}</h3>
            <p className="font-inter text-body-sm text-gray-300 leading-relaxed mb-3">{leadChef.body}</p>
            <p className="font-inter text-body text-white">{leadChef.cta}</p>
          </div>
          <div className="bg-white border border-gray-200 p-6 md:p-8 mb-6">
            <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-3">{restaurantTitle.eyebrow}</p>
            <h3 className="font-playfair text-h4 text-black mb-4">{restaurantTitle.title}</h3>
            {restaurantTitle.paras.map((para) => (
              <BodyCopy key={para.slice(0, 40)} className="mb-3 last:mb-0">{para}</BodyCopy>
            ))}
          </div>
          <div className="bg-cream border border-gold/30 p-6 md:p-8 mb-6">
            <h3 className="font-playfair text-h4 text-black mb-3">{higherNotBetter.title}</h3>
            <BodyCopy>{higherNotBetter.body}</BodyCopy>
          </div>
          <div className="border border-gray-200 p-6 md:p-8">
            <h3 className="font-playfair text-h4 text-black mb-3">{levelVsSpecialty.title}</h3>
            <BodyCopy className="mb-3">{levelVsSpecialty.level}</BodyCopy>
            <BodyCopy className="mb-3">{levelVsSpecialty.specialty}</BodyCopy>
            <ul className="space-y-2 mb-4">
              {levelSpecialtyExamples.map((row) => (
                <li key={row.level} className="font-inter text-body-sm text-gray-500">
                  <strong className="font-medium text-black">{row.level}</strong> {row.specialty}.
                </li>
              ))}
            </ul>
            <BodyCopy className="mb-4">{levelVsSpecialty.body}</BodyCopy>
            <BodyCopy muted>{levelVsSpecialty.close}</BodyCopy>
          </div>
          <p className="mt-8">
            <Link to={CLUSTER_PATHS.pricing} className="font-inter text-caption uppercase tracking-wider text-gold-ink hover:text-gold">
              How chef level changes the household figure →
            </Link>
          </p>
        </Container>
      </Section>

      <Section tone="ivory">
        <Container>
          <Eyebrow>Before anyone is put forward</Eyebrow>
          <DisplayHeading size="h2" className="text-black mb-4">Selection includes four entry checks — then the match</DisplayHeading>
          <BodyCopy className="mb-8 max-w-[760px]">
            Identity and right-to-work, a practical cooking assessment, references, and food-hygiene awareness. That is the list we use before matching. We do not add certificates, clearances or guarantees we cannot operate. The procedure — and what we do not claim — is on{' '}
            <Link to={CLUSTER_PATHS.privacy} className="text-gold-ink underline underline-offset-4">Privacy & Security</Link>
            {' '}and{' '}
            <Link to="/how-we-vet-our-chefs" className="text-gold-ink underline underline-offset-4">how we vet our chefs</Link>.
          </BodyCopy>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {['Identity and right-to-work', 'Practical cooking assessment', 'References', 'Food-hygiene awareness'].map((item) => (
              <li key={item} className="bg-white border border-gray-200 p-5">
                <p className="font-inter text-body-sm text-gray-700 leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-3">{scoring.eyebrow}</p>
          <DisplayHeading size="h2" className="text-black mb-4 max-w-[760px]">{scoring.title}</DisplayHeading>
          {scoring.intro.map((para) => (
            <BodyCopy key={para.slice(0, 40)} className="mb-4 max-w-[760px]">{para}</BodyCopy>
          ))}
          <div className="grid md:grid-cols-2 gap-6 mt-8 mb-6">
            {[scoring.verified, scoring.performance].map((half) => (
              <div key={half.label} className="border border-gray-200 p-6 md:p-8">
                <h3 className="font-playfair text-h4 text-black mb-1">{half.label}</h3>
                <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-5">{half.sub}</p>
                <ul className="space-y-3">
                  {half.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check size={16} className="text-gold-ink mt-1 flex-shrink-0" />
                      <span className="font-inter text-body-sm text-gray-500">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <BodyCopy muted className="mb-8 max-w-[760px]">{scoring.weightsNote}</BodyCopy>
          <div className="border border-gold/30 p-6 md:p-8 mb-6">
            <h3 className="font-playfair text-h4 text-black mb-4">{scoring.provisional.title}</h3>
            {scoring.provisional.paras.map((para) => (
              <BodyCopy key={para.slice(0, 40)} className="mb-3 last:mb-0">{para}</BodyCopy>
            ))}
          </div>
          <BodyCopy className="mb-12 max-w-[760px]">
            Once the chef is in the house, the same record is how we keep quality honest — coaching, a new match, or a chef who does not come back. That loop lives on{' '}
            <Link to={CLUSTER_PATHS.quality} className="text-gold-ink underline underline-offset-4">Quality & Training</Link>.
          </BodyCopy>
          <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-3">{evidenceChain.eyebrow}</p>
          <h3 className="font-playfair text-h3 text-black mb-4">{evidenceChain.title}</h3>
          <BodyCopy className="mb-8 max-w-[760px]">{evidenceChain.intro}</BodyCopy>
          <ol className="flex flex-wrap items-center gap-y-4 mb-6 max-w-[1100px]">
            {evidenceChain.steps.map((step, i) => (
              <li key={step} className="flex items-center">
                <span className="font-playfair text-h4 text-gold-ink leading-none select-none mr-2.5">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-inter text-body-sm text-gray-700">{step}</span>
                {i < evidenceChain.steps.length - 1 && (
                  <ArrowRight size={14} className="text-gold-ink/60 mx-4 flex-shrink-0" aria-hidden />
                )}
              </li>
            ))}
          </ol>
          <BodyCopy muted className="mb-12">{evidenceChain.closer}</BodyCopy>
          <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-3">{exampleProfiles.eyebrow}</p>
          <h3 className="font-playfair text-h3 text-black mb-2">Two profiles — one confirmed, one honestly new</h3>
          <p className="font-inter text-body-sm text-gray-500 mb-8">{exampleProfiles.note}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[exampleProfiles.established, exampleProfiles.provisional].map((profile) => (
              <div key={profile.level} className="border border-gray-200 p-6 md:p-8">
                <p className="inline-block px-3 py-1 border border-gold/40 font-inter text-caption uppercase tracking-wider text-gold-ink mb-4">{profile.tag}</p>
                <h4 className="font-playfair text-h4 text-black mb-5">{profile.level}</h4>
                <dl className="space-y-2.5 mb-5">
                  {profile.fields.map((field) => (
                    <div key={field.k} className="flex justify-between gap-4 border-b border-gray-100 pb-2">
                      <dt className="font-inter text-body-sm text-gray-400">{field.k}</dt>
                      <dd className="font-inter text-body-sm text-black text-right">{field.v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{profile.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="ivory">
        <Container>
          <Eyebrow id="matching" className="scroll-mt-24">Matching</Eyebrow>
          <DisplayHeading size="h2" className="text-black mb-4">The right personal chef in Dubai depends on the household</DisplayHeading>
          <BodyCopy className="mb-10 max-w-[760px]">
            We do not say “here is our best chef.” When you hire a chef in Dubai yourself, you get whoever replied first and an interview to go on. Here, a family wanting simple high-protein meals does not automatically get the same person as a household entertaining every weekend: you describe the house; we calculate the role; the role determines Professional or Senior. Specialists are for the meal that needs one.
          </BodyCopy>
          <ol className="flex flex-wrap items-center gap-y-4 mb-10 max-w-[1100px]">
            {matchingSteps.map((step, i) => (
              <li key={step} className="flex items-center">
                <span className="font-playfair text-h4 text-gold-ink leading-none select-none mr-2.5">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-inter text-body-sm text-gray-700">{step}</span>
                {i < matchingSteps.length - 1 && (
                  <ArrowRight size={14} className="text-gold-ink/60 mx-4 flex-shrink-0" aria-hidden />
                )}
              </li>
            ))}
          </ol>
          <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-10 lg:gap-16 items-start mb-16">
            <div>
              <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-3">{specialists.eyebrow}</p>
              <h3 className="font-playfair text-h3 text-black mb-4">{specialists.title}</h3>
              <BodyCopy className="mb-6">{specialists.body}</BodyCopy>
              <p>
                <Link to={CLUSTER_PATHS.howItWorks} className="font-inter text-caption uppercase tracking-wider text-gold-ink hover:text-gold">
                  See how specialist rotation and backup work →
                </Link>
              </p>
            </div>
            <div className="lg:pt-9 lg:pl-10 lg:border-l lg:border-gray-200">
              <p className="font-inter text-caption uppercase tracking-wider text-gray-400 mb-4">Cuisines and crafts in the network</p>
              <div className="flex flex-wrap gap-2">
                {networkSpecialties.map((item) => (
                  <span key={item} className="px-3 py-1.5 border border-gray-200 font-inter text-caption uppercase tracking-wider text-gray-600">{item}</span>
                ))}
              </div>
            </div>
          </div>
          <h3 className="font-playfair text-h3 text-black mb-4">Chefs in the network</h3>
          <BodyCopy className="mb-8 max-w-[760px]">
            Cuisine is half of most briefs — an Indian chef in Dubai for the family’s everyday food, a Japanese specialist for Friday, an Italian for the season. Specialty is matched alongside level, personality and household fit.
          </BodyCopy>
          <BodyCopy muted className="mb-8">Independent partner chefs. Matching is not limited to the people listed here.</BodyCopy>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredChefs.map((chef) => (
              <Link key={chef.href} to={chef.href} className="group border border-gray-200 hover:border-gold overflow-hidden bg-white transition-colors">
                <FillFrame src={chef.image} alt={chef.name} width={800} height={1000} className="aspect-[4/5] w-full" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
                <div className="p-5">
                  <p className="font-playfair text-h4 text-black group-hover:text-gold-ink">{chef.name}</p>
                  <p className="font-inter text-caption uppercase tracking-wider text-gray-400 mt-1">{chef.cuisine}</p>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-8">
            <Link to="/our-chefs" className="font-inter text-caption uppercase tracking-wider text-gold-ink hover:text-gold">
              Browse the wider chef network →
            </Link>
          </p>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <Eyebrow>Continue</Eyebrow>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link to={CLUSTER_PATHS.howItWorks} className="border border-gray-200 hover:border-gold p-6 transition-colors">
              <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-2">How It Works</p>
              <p className="font-playfair text-h4 text-black">The managed service, Food Profile and backup</p>
            </Link>
            <Link to={CLUSTER_PATHS.quality} className="border border-gray-200 hover:border-gold p-6 transition-colors">
              <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-2">Quality & Training</p>
              <p className="font-playfair text-h4 text-black">How standards stay good after placement</p>
            </Link>
            <Link to={CLUSTER_PATHS.privacy} className="border border-gray-200 hover:border-gold p-6 transition-colors">
              <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-2">Privacy & Security</p>
              <p className="font-playfair text-h4 text-black">The four checks, in full</p>
            </Link>
          </div>
        </Container>
      </Section>

      <section className="bg-cream py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-8">Questions about hiring a personal chef in Dubai</h2>
          <FaqAccordion items={[...ourChefsFaqs]} defaultOpen={-1} />
        </div>
      </section>

      <ClusterCTA title="See the chef matched to this house" body="Tell us how you live and what you eat. We work out the role and recommend Professional or Senior — or a specialist for the meal that needs one. You approve the profile before anyone starts." />
    </div>
  )
}
