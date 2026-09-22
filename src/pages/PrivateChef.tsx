// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /private-chef-dubai
//     primary:     "private chef dubai"
//     subkeywords: "personal chef dubai" · "chef at home dubai" · "private chef service dubai" · "book a private chef dubai" · "private chef for dinner party dubai" · "private chef near me dubai" · "private chef" · "private chef near me" · "french private chef dubai" · "private chef dubai daily" · "private chef dubai full time" · "private chef dubai monthly"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'
import { Link } from 'react-router'
import ClusterNav from '@/components/private-chef/ClusterNav'
import ServiceImage from '@/components/private-chef/ServiceImage'
import { ChefSection, ScheduleChoices, Inclusions, ChefJourney, TeamCapability, RealWork, PricePreview, ChefEnquiry } from '@/components/private-chef/ChefSections'
import FaqAccordion from '@/components/FaqAccordion'
import { parentFaqs } from '@/content/privateChefCluster'
import { faqPageSchema } from '@/utils/schema'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'

export default function PrivateChef() {
  useWhatsAppMessage('Hi myCHEF Dubai, I would like a private chef for my home. Location: __. Days per week: __. Household size: __. (via mychef.ae/private-chef-dubai)')
  return <div>
    <SEO title="Private Chef Dubai | A Chef for Your Home | myCHEF" description="A private chef for your Dubai home, with menus and schedules made personal. Explore weekly preparation, part-time and full-time household plans." canonicalPath="/private-chef-dubai" schema={faqPageSchema(parentFaqs.map(f => ({question:f.q,answer:f.a}))) || undefined}/>
    <PageHero eyebrow="MYCHEF · AT HOME IN DUBAI" title={<>Private Chef Dubai.<br/><em>Made personal.</em></>} subtitle="A good meal, a little more time, a kitchen in capable hands. Your personal chef in Dubai, with menus, cooking days and ongoing support shaped around your household." cta={{label:'Find my chef',href:'/inquiry?from=/private-chef-dubai'}} secondaryCta={{label:'Explore plans & prices',href:'/private-chef-dubai/pricing'}}/>
    <ClusterNav/>
    <ChefSection eyebrow="A rhythm that works for you" title={<>Private Chef Dubai,<br/><em>on your schedule.</em></>}>
      <ScheduleChoices/>
      <p className="pc-fineprint">Planning a single dinner or celebration? Explore <Link className="underline underline-offset-4" to="/luxury-dining-experiences">private dining experiences</Link> or <Link className="underline underline-offset-4" to="/catering-dubai">event catering</Link>.</p>
    </ChefSection>
    <ChefSection eyebrow="More than the meal" title="The details, thoughtfully handled." tone="pc-tone-cream"><Inclusions/></ChefSection>
    <ChefSection><div className="pc-split"><ServiceImage imageKey="planning"/><div><p className="pc-eyebrow">From the first conversation</p><h2>We learn your home.<br/><em>Then we get cooking.</em></h2><ChefJourney/><Link className="pc-link" to="/private-chef-dubai/how-it-works">How your chef arrangement works →</Link></div></div></ChefSection>
    <ChefSection eyebrow="Food you look forward to" title={<>Your favourites.<br/><em>With room to discover.</em></>} tone="pc-tone-cream"><div className="pc-section-summary"><p>Comforting family meals, lighter lunches, a favourite regional cuisine or something special for guests. We start with what you enjoy, record allergies and preferences, and agree menus that suit your kitchen and the time available.</p><Link className="pc-link" to="/menus">Explore menu inspiration →</Link></div><div className="pc-food-grid"><figure><ServiceImage imageKey="family-table"/><figcaption><h3>A table everyone can enjoy</h3><p>Familiar favourites, family portions and your preferred way of eating.</p></figcaption></figure><figure><ServiceImage imageKey="wellness"/><figcaption><h3>Thoughtful everyday choices</h3><p>Balanced meals tailored to preferences, with specialist dietary guidance where needed.</p></figcaption></figure></div></ChefSection>
    <TeamCapability/>
    <RealWork/>
    <ChefSection eyebrow="A clear place to start" title="A plan you can understand." tone="pc-tone-cream"><PricePreview/></ChefSection>
    <ChefSection eyebrow="Before you begin" title="A few helpful answers."><div className="pc-prose"><FaqAccordion items={[...parentFaqs]} defaultOpen={-1}/></div></ChefSection>
    <ChefEnquiry/>
  </div>
}
