import ServiceImage from '@/components/private-chef/ServiceImage'
// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /our-chefs
//     primary:     "private chefs dubai"
//     subkeywords: "chefs dubai" · "how are private chefs vetted dubai" · "are private chefs in dubai licensed" · "female private chef dubai" · "hire chef dubai" · "looking for chef" · "private chef hire" · "personal chef" · "chef for hire" · "female private chefs dubai" · "private bbq chef dubai" · "private cook in dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { Link } from 'react-router'
import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'
import { ChefSection, TeamCapability, ChefEnquiry, RealWork } from '@/components/private-chef/ChefSections'
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
export default function OurChefs(){return <div><SEO title="Private Chefs Dubai | Meet the Culinary Network | myCHEF" description="Explore private chefs in Dubai and the cuisines they cook. Share your household or occasion brief for a suitable chef match and confirmed availability." canonicalPath="/our-chefs"/>
<PageHero eyebrow="MYCHEF · THE CULINARY NETWORK" title="Private Chefs Dubai. Different talents, a shared attention to detail." subtitle="A good match brings together culinary skill, the food you love and the way you want to host. Explore the profiles, then let us help find a suitable available chef." cta={{label:'Request a chef match',href:'/inquiry?from=/our-chefs'}} secondaryCta={{label:'How we select chefs',href:'/how-we-vet-our-chefs'}}/>
<ChefSection eyebrow="Meet the chefs" title="Private chefs in Dubai, matched to your table."><p className="pc-section-intro">Independent partner chefs with distinct culinary interests. Your brief, service format and dates help us confirm the right profile for your booking.</p><div className="pc-chef-directory">{chefs.map(chef=><article key={chef.slug}><Link to={chef.slug}><ServiceImage src={chef.image} alt={chef.name} width={600} height={800} loading="lazy" decoding="async"/></Link><div><p className="pc-eyebrow">{chef.role}</p><h3>{chef.name}</h3><p>{chef.bio}</p><ul>{chef.specialties.map(s=><li key={s}>{s}</li>)}</ul><Link className="pc-link" to={chef.slug}>Meet {chef.name.split(' ')[0]} →</Link></div></article>)}</div></ChefSection>
<TeamCapability/><RealWork compact/><ChefEnquiry title="Tell us who you’re cooking for."/></div>}
