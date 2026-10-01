import HouseholdProfiles from '@/components/household/HouseholdProfiles'
import ClusterNav from '@/components/private-chef/ClusterNav'
import { HouseholdCallout } from '@/components/household/HouseholdSections'
import ServiceImage from '@/components/private-chef/ServiceImage'
// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /our-chefs
//     primary:     "meet our chefs in dubai"
//     subkeywords: "chef profiles dubai" · "household chef profiles" · "chef cooking styles" · "chef specialities dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { Link } from 'react-router'
import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'
import { ChefSection, ChefEnquiry } from '@/components/private-chef/ChefSections'
const chefs = [
  {
    image: '/team-head-chef.webp',
    name: 'Ahmed Al-Rashid',
    role: 'Executive Chef',
    experience: 'Plated dinners',
    slug: '/chefs/ahmed-executive-chef',
    bio: 'Classical French technique. Matched to plated villa dinners, tasting menus and corporate tables. The chef who designs the menu is the chef who cooks it.',
    specialties: ['Modern European', 'Fine Dining', 'Menu Design', 'Villa Dining'],
  },
  {
    image: '/team-sous-chef.webp',
    name: 'Marco Rossi',
    role: 'Italian Chef',
    experience: 'Italian kitchens',
    slug: '/chefs/marco-italian-chef',
    bio: 'Italian regional cooking: handmade pasta, wood-fired grills and coastal seafood. Family-style when the table wants to share, plated when it does not.',
    specialties: ['Italian Cuisine', 'Handmade Pasta', 'Seafood', 'Family Style'],
  },
  {
    image: '/team-pastry-chef.webp',
    name: 'Matteo Moretti',
    role: 'Pastry Chef',
    experience: 'Pastry',
    slug: '/chefs/matteo-pastry-chef',
    bio: 'Pastry, chocolate and plated desserts for weddings, product launches and small dinners. The last course is planned with the rest of the menu, not added at the end.',
    specialties: ['Pastry', 'Chocolate Work', 'Wedding Cakes', 'Plated Desserts'],
  },
  {
    image: '/images/chefs/layla-hassan.webp',
    name: 'Layla Hassan',
    role: 'Middle Eastern Chef',
    experience: 'Arabic kitchens',
    slug: '/chefs/layla-middle-eastern-chef',
    bio: 'Lebanese and Emirati kitchens: mezze, grills and Iftar spreads. Live stations when the room needs to move. Halal sourcing is the baseline.',
    specialties: ['Arabic Mezze', 'Grilled Meats', 'Iftar Feasts', 'Live Stations'],
  },
]
export default function OurChefs(){return <div><SEO title="Meet Our Chefs in Dubai | Profiles & Cooking Styles | myCHEF" description="Meet our chefs in Dubai through named profiles and 25 household cooking styles. Explore cuisines and experience, then discuss a suitable match with myCHEF." canonicalPath="/our-chefs"/>
<PageHero eyebrow="MYCHEF · YOUR FOOD. YOUR KIND OF CHEF." title={<>Meet our chefs in Dubai.<br/><em>Find your kind of cooking.</em></>} subtitle="Meet our chefs in Dubai through their cuisines, cooking styles and approach to household life. Explore the profiles, consider the food you enjoy, then let us help you find a suitable match." cta={{label:'Explore 25 chef styles',href:'#household-profiles'}} secondaryCta={{label:'Explore managed service & fees',href:'/full-time-private-chef-dubai#managed-pricing'}}/>
<ClusterNav/>
<ChefSection id="household-profiles" eyebrow="Your personal shortlist starts here" title="Explore the cooking style that fits your household."><p className="pc-section-intro">These profiles help you explore cooking styles. To choose between visits, regular cooking and a dedicated household arrangement, start with our <Link to="/private-chef-dubai" className="pc-link">private chef service in Dubai</Link>, then shortlist the experience that suits your home.</p><HouseholdProfiles/></ChefSection>
<ChefSection eyebrow="Meet our chefs" title="Different talents. A shared love of food." tone="pc-tone-cream"><p className="pc-section-intro">Get to know some of our chefs and their favourite ways to cook. We confirm the person, menu and availability around your household or occasion.</p><div className="pc-chef-directory">{chefs.map(chef=><article key={chef.slug}><Link to={chef.slug}><ServiceImage src={chef.image} alt={`${chef.name} — ${chef.role}, myCHEF Dubai`} width={600} height={800} loading="lazy" decoding="async"/></Link><div><p className="pc-eyebrow">{chef.role}</p><h3>{chef.name}</h3><p>{chef.bio}</p><ul>{chef.specialties.map(s=><li key={s}>{s}</li>)}</ul><Link className="pc-link" to={chef.slug}>Meet {chef.name.split(' ')[0]} →</Link></div></article>)}</div></ChefSection>
<HouseholdCallout compact/><ChefEnquiry title="Tell us what you love to eat."/></div>}
