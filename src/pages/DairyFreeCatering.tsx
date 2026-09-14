import { Link } from 'react-router'
import { MilkOff, Utensils, Salad, Cake, Home, Building } from 'lucide-react'
import DietaryCateringPage from './dietary/DietaryCateringPage'
import type { DietaryPageConfig } from './dietary/DietaryCateringPage'

const config: DietaryPageConfig = {
  slug: 'dairy-free-catering-dubai',
  seoTitle: 'Dairy Free Catering Dubai | myCHEF',
  metaDescription:
    'Dairy Free Catering Dubai with a vetted myCHEF team. Menus without milk, cream, butter or cheese. Service and clear-down so you stay a guest at your table.',
  canonicalPath: '/allergy-safe-catering-dubai',
  hideSiteName: true,
  showTrustSignalStrip: true,
  ogImage: '/images/dairy-free-catering-dubai-hero.webp',
  breadcrumbLabel: 'Dairy-Free Catering Dubai',
  h1: 'Dairy Free Catering Dubai',
  heroSub:
    'Dairy Free Catering Dubai is a written brief, not a last-minute swap. We take milk, cream, butter and cheese off the build, then cook and serve at your address.',
  heroImage: '/images/dairy-free-catering-dubai-hero.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to plan dairy-free catering in Dubai (via mychef.ae/dairy-free-catering-dubai)",
  eyebrow: 'LACTOSE-FREE CATERING IN DUBAI',
  introH2: 'Menus built without milk, cream, butter or cheese',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Lactose-free and dairy-free are not the same brief. Tell us which you need. A lactose-free guest may still eat some aged cheese. A dairy-free guest needs milk, cream, butter, yoghurt and cheese off every course, including pastry and finishing sauces. Dietary notes go into the first menu draft.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Chefs in our network rebuild richness with olive oil, stocks, coconut cream and nut milks where nuts are allowed. If a guest is also nut-allergic, that goes on the brief before shopping. Partner kitchens are shared. We separate prep where the room allows and label the pass. We do not call that an allergen-free kitchen.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        The quote moves with guest count, the menu, and how much of the work happens in the room. We start from a published format and adjust it to your date. What to check: the named chef, an itemised quote, and who buys the ingredients. For plant-based events see{' '}
        <Link to="/vegan-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          vegan catering Dubai
        </Link>
        . For mixed diets see our{' '}
        <Link to="/cuisines-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          cuisine collection
        </Link>
        . For gluten, nuts and other allergens, start with{' '}
        <Link to="/allergy-safe-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          allergy-safe catering
        </Link>
        .
      </p>
    </>
  ),
  formatsH2: 'How dairy-free service runs in the room',
  formats: [
    {
      Icon: Utensils,
      title: 'Plated Dairy-Free Dinners',
      description: 'Courses written without milk, cream, butter or cheese. Sauces and finishes are rebuilt on the draft, not at the pass.',
      link: '/catering-dubai',
    },
    {
      Icon: Salad,
      title: 'Dairy-Free Buffets',
      description: 'Labelled mains, sides and salads. Staff are briefed on what is dairy-free and what is not, so guests are not left guessing.',
      link: '/buffet-catering-dubai',
    },
    {
      Icon: MilkOff,
      title: 'Dairy-Free Canapés',
      description: 'Passed bites without hidden butter or cream. Useful when people stand and eat, and when one course has to work for the whole room.',
      link: '/canape-catering-dubai',
    },
    {
      Icon: Cake,
      title: 'Dairy-Free Desserts & Cakes',
      description: 'Cakes, tarts and mousses made with plant creams and alternative milks. Say so in the brief if a celebration cake is required.',
      link: '/dessert-table-catering-dubai',
    },
    {
      Icon: Home,
      title: 'Villa Dairy-Free Dining',
      description: 'Cooking and service in your kitchen or garden. We check the space before the night, then pack down so you stay with your guests.',
      link: '/villas-private-residences',
    },
    {
      Icon: Building,
      title: 'Corporate Dairy-Free Lunches',
      description: 'Packed meals or a labelled buffet for offices. The menu is written for the brief, not assembled from leftover dairy dishes.',
      link: '/corporate',
    },
  ],
  useCasesEyebrow: 'WHERE DAIRY-FREE CATERING WORKS',
  useCasesH2: 'Tell us the guest, not a slogan',
  useCases: [
    {
      title: 'Lactose-intolerant guests',
      description:
        'Name the guest and the severity. We write a lactose-free or fully dairy-free line so they are not left asking the waiter all evening.',
    },
    {
      title: 'Plant-forward tables',
      description:
        'Dairy-free can sit inside a vegan menu or beside other proteins. We do not assume vegan unless you say so. Eggs and honey stay on unless the brief removes them.',
    },
    {
      title: 'Weddings and family tables',
      description:
        'A cake only half the room can eat is a poor host moment. If the dessert must be dairy-free, it is designed as the dessert, not a side plate.',
    },
    {
      title: 'Office lunches',
      description:
        'Inclusive lunches work when the dairy-free option is a proper main. Packed or buffet, it is labelled. You stay in the meeting.',
    },
  ],
  includedH2: 'What a dairy-free booking actually covers',
  includedItems: [
    { title: 'No milk, cream, butter or cheese', description: 'The dairy-free line is built without those ingredients, including hidden stocks and pastry fats.' },
    { title: 'Creamy alternatives', description: 'Olive oil, coconut cream and nut milks where nuts are allowed. Nut allergy is a separate line on the brief.' },
    { title: 'Dairy-free bakery', description: 'Cakes and pastry using alternative fats and milks. Texture is planned, not hoped for on the day.' },
    { title: 'Clear labelling', description: 'Guests can see which dishes are dairy-free. Staff are briefed to answer, not to guess.' },
    { title: 'Menu on the first draft', description: 'Dietary notes go into the first menu draft. You do not discover a gap two days before service.' },
    { title: 'On-site cooking and service', description: 'Partner chefs cook and finish at your address. Front of house serves. The room is cleared.' },
    { title: 'Mixed-diet tables', description: 'A fully dairy-free event, or dairy-free dishes inside a wider menu. Say which you want.' },
    { title: 'Setup and pack-down', description: 'Equipment in, service, then pack-down. You stay a guest at your own table.' },
  ],
  galleryH2: 'What dairy-free service looks like',
  galleryImages: [
    { src: '/menu-appetizer.webp', alt: 'Dairy-free appetisers in Dubai' },
    { src: '/menu-canapes.webp', alt: 'Dairy-free canapé selection' },
    { src: '/menu-dessert.webp', alt: 'Dairy-free dessert display' },
    { src: '/service-catering.webp', alt: 'Dairy-free catering set-up at a Dubai event' },
    { src: '/service-villa.webp', alt: 'Villa dairy-free dinner styling' },
    { src: '/service-events.webp', alt: 'Dairy-free event catering in Dubai' },
  ],
  faqsH2: 'Dairy Free Catering Dubai: the questions we get before a booking',
  faqs: [
    {
      q: 'Is the menu completely free of milk, cream, butter and cheese?',
      a: 'On a dairy-free booking, yes. Those ingredients come off the written menu, including pastry and finishing sauces. Lactose-free is a different brief. Name which you need.',
    },
    {
      q: 'Can dairy-free food still taste rich?',
      a: 'It can, if the chef rebuilds the sauce rather than leaving a gap. Olive oil, stocks, coconut cream and nut milks are the usual tools. If nuts are also off, we write that before shopping.',
    },
    {
      q: 'Do you offer dairy-free celebration cakes?',
      a: 'Yes, when the brief asks for one. Plant butters and milks are used for cakes, tarts and dessert tables. Say so on the first draft, not the night before.',
    },
    {
      q: 'Can dairy-free also be vegan or gluten-free?',
      a: 'Those are extra lines on the same brief. Vegan also removes eggs and honey. Gluten-free removes wheat, barley and rye. Shared kitchens still carry cross-contact risk. We say so honestly.',
    },
    {
      q: 'Is this suitable for lactose-intolerant guests?',
      a: 'A fully dairy-free menu contains no lactose. If the guest only needs lactose-free, tell us. We will not over-restrict the rest of the table unless you ask.',
    },
    {
      q: 'How is dairy-free catering Dubai priced?',
      a: 'There is no single per-person figure. Guest count, the menu and how much of the work happens in the room move the quote. You get an itemised proposal with 5% VAT shown separately. Send the date, headcount and venue.',
    },
  ],
  relatedServices: [
    {
      title: 'Vegan Catering',
      description: 'Plant-based menus with no animal products, including dairy, eggs and honey.',
      image: '/menu-appetizer.webp',
      link: '/vegan-catering-dubai',
    },
    {
      title: 'Healthy Catering',
      description: 'Balanced menus written around how this table actually eats.',
      image: '/service-corporate.webp',
      link: '/cuisines-dubai',
    },
    {
      title: 'Dessert Table Catering',
      description: 'Dessert displays that can include a dairy-free line when the brief asks for it.',
      image: '/menu-dessert.webp',
      link: '/dessert-table-catering-dubai',
    },
  ],
  ctaH2: 'Send the dairy brief with the date',
  ctaP:
    'Name the guests, what they cannot eat, and whether the whole table is dairy-free or only some plates. We put that on the first menu draft and quote the night as an itemised figure.',
}

export default function DairyFreeCatering() {
  return <DietaryCateringPage config={config} />
}
