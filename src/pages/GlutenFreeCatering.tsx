import { Link } from 'react-router'
import { WheatOff, Utensils, Salad, Cake, Home, Building } from 'lucide-react'
import DietaryCateringPage from './dietary/DietaryCateringPage'
import type { DietaryPageConfig } from './dietary/DietaryCateringPage'

const config: DietaryPageConfig = {
  slug: 'gluten-free-catering-dubai',
  seoTitle: 'Gluten Free Catering Dubai | myCHEF',
  metaDescription:
    'Gluten Free Catering Dubai with a vetted myCHEF team. Wheat, barley and rye off the written menu. Service and clear-down so you stay a guest at your table.',
  canonicalPath: '/allergy-safe-catering-dubai',
  hideSiteName: true,
  showTrustSignalStrip: true,
  ogImage: '/images/gluten-free-catering-dubai-hero.webp',
  breadcrumbLabel: 'Gluten-Free Catering Dubai',
  h1: 'Gluten Free Catering Dubai',
  heroSub:
    'Gluten Free Catering Dubai starts with a named guest and a written menu. Wheat, barley and rye stay off that line. We cook at your address and pack down after service.',
  heroImage: '/images/gluten-free-catering-dubai-hero.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to plan gluten-free catering in Dubai (via mychef.ae/gluten-free-catering-dubai)",
  eyebrow: 'COELIAC-SAFE CATERING IN DUBAI',
  introH2: 'Wheat off the plate, with an honest kitchen note',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Coeliac disease and a wheat preference are not the same brief. Tell us which you are hosting. For coeliac-risk guests we verify labels, keep a separate prep path where the room allows, and say clearly if a home kitchen cannot support that separation. Dietary notes go into the first menu draft.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Partner chefs cook in shared kitchens and in your home. We do not call that an allergen-free kitchen. Cross-contact risk remains, especially around flour, bread baskets and shared fryers. Guests who carry emergency medication should still bring it.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        The quote moves with guest count, the menu, and how much of the work happens in the room. We start from a published format and adjust it to your date. What to check: the named chef, an itemised quote, and who buys the ingredients. See our{' '}
        <Link to="/cuisines-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          cuisine collection
        </Link>
        {' '}for mixed-diet tables, or the wider{' '}
        <Link to="/allergy-safe-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          allergy-safe catering
        </Link>
        {' '}brief when more than gluten is involved.
      </p>
    </>
  ),
  formatsH2: 'Formats that keep gluten off the pass',
  formats: [
    {
      Icon: Utensils,
      title: 'Plated Gluten-Free Dinners',
      description: 'Courses, sauces and garnishes written without wheat, barley or rye. Useful when one table must eat the same meal.',
      link: '/catering-dubai',
    },
    {
      Icon: Salad,
      title: 'Gluten-Free Buffet & Stations',
      description: 'Labelled dishes and, where the space allows, separate utensils. Guests should not have to interrogate the buffet.',
      link: '/buffet-catering-dubai',
    },
    {
      Icon: WheatOff,
      title: 'Gluten-Free Canapés',
      description: 'Passed bites without pastry cases made of wheat. Bases are planned on the draft so the canapé line is not an afterthought.',
      link: '/canape-catering-dubai',
    },
    {
      Icon: Cake,
      title: 'Gluten-Free Desserts & Cakes',
      description: 'Cakes and tarts using alternative flours when the brief asks. A celebration cake is specified up front, not hoped for.',
      link: '/dessert-table-catering-dubai',
    },
    {
      Icon: Home,
      title: 'Villa & Home Gluten-Free Menus',
      description: 'Cooking in Palm Jumeirah, Emirates Hills, Dubai Hills and similar homes. We check the kitchen before we promise a separate prep path.',
      link: '/villas-private-residences',
    },
    {
      Icon: Building,
      title: 'Corporate Gluten-Free Lunches',
      description: 'Packed meals or a labelled buffet for offices. The gluten-free line is a proper main, not a side salad.',
      link: '/corporate',
    },
  ],
  useCasesEyebrow: 'WHERE GLUTEN-FREE CATERING HELPS',
  useCasesH2: 'Name the risk, then we write the menu',
  useCases: [
    {
      title: 'Coeliac-risk guests',
      description:
        'Trace gluten matters. We plan a separate path where the venue allows it, and we tell you if it does not. That conversation happens before you book, not at the pass.',
    },
    {
      title: 'Weddings with mixed diets',
      description:
        'A gluten-free guest should not be served a different plate that looks like an apology. Either the whole menu is gluten-free, or the gluten-free line is designed as a full course.',
    },
    {
      title: 'Office lunches',
      description:
        'Packed gluten-free meals or a labelled buffet. Staff are briefed. You stay in the meeting.',
    },
    {
      title: 'Family tables at home',
      description:
        'Birthdays and family lunches work when everyone can eat from the same spread. The gluten-free dishes are written in, not plated in a corner.',
    },
  ],
  includedH2: 'What a gluten-free booking actually covers',
  includedItems: [
    { title: 'Menu without wheat, barley or rye', description: 'The gluten-free line is planned without those grains. Soy sauce, stocks and coatings are checked, not assumed.' },
    { title: 'Clear labelling', description: 'Cards and staff briefings so guests can identify safe dishes without a speech from the host.' },
    { title: 'Alternative breads and pastry', description: 'Gluten-free breads and tart cases where the menu needs them. Ordered on the draft, not improvised.' },
    { title: 'Cross-contact honesty', description: 'We reduce contact where the room allows. We do not promise a dedicated allergen-free kitchen.' },
    { title: 'Mains that fill a plate', description: 'Rice, quinoa, vegetables, pulses and gluten-free grains as the base, not a pile of leaves.' },
    { title: 'Desserts on the same brief', description: 'Cakes and fruit desserts using alternative flours when requested.' },
    { title: 'On-site service', description: 'Partner chefs, service staff, plating and pack-down at your address.' },
    { title: 'Mixed-diet planning', description: 'A fully gluten-free event, or gluten-free dishes inside a wider menu. Say which you want.' },
  ],
  galleryH2: 'What gluten-free service looks like',
  galleryImages: [
    { src: '/menu-appetizer.webp', alt: 'Gluten-free appetisers in Dubai' },
    { src: '/menu-canapes.webp', alt: 'Gluten-free canapé selection' },
    { src: '/menu-dessert.webp', alt: 'Gluten-free dessert display' },
    { src: '/service-catering.webp', alt: 'Gluten-free catering set-up at a Dubai event' },
    { src: '/service-villa.webp', alt: 'Villa gluten-free dinner styling' },
    { src: '/service-events.webp', alt: 'Gluten-free event catering in Dubai' },
  ],
  faqsH2: 'Gluten Free Catering Dubai: the questions we get before a booking',
  faqs: [
    {
      q: 'Is this safe for coeliac guests?',
      a: 'We write menus without wheat, barley and rye and we separate prep where the kitchen allows. We cannot guarantee zero exposure in every home or hired space. For severe coeliac risk, tell us during planning so we can say yes, or say no, before you book.',
    },
    {
      q: 'Can gluten-free dishes sit beside regular dishes?',
      a: 'Yes. Separate utensils and labels help. Flour in the air and shared fryers still matter. If that risk is too high for your guest, a fully gluten-free menu is the cleaner format.',
    },
    {
      q: 'Do you offer gluten-free bread, pastry and cakes?',
      a: 'When the brief asks. Alternative flours and checked ingredients are used for bread baskets, tart shells and celebration cakes. They are specified on the first draft.',
    },
    {
      q: 'What do you use instead of wheat?',
      a: 'Rice, quinoa, polenta, buckwheat, lentils, potatoes and seasonal vegetables. The chef chooses from that list against the rest of the brief, including dairy-free or nut-free if needed.',
    },
    {
      q: 'How is gluten-free catering Dubai priced?',
      a: 'By custom quote. Guest count, the menu and service in the room move the figure. Alternative bakery and extra separation can change staffing. You see that on an itemised proposal with 5% VAT shown separately.',
    },
    {
      q: 'How far in advance should I book?',
      a: 'Two to four weeks is the usual window for villa dinners and larger tables. Peak season from November to March fills earlier. Short notice is assessed against live partner availability, not promised as a rule.',
    },
  ],
  relatedServices: [
    {
      title: 'Healthy Catering',
      description: 'Balanced menus for tables that want lighter food as well as gluten-free dishes.',
      image: '/service-corporate.webp',
      link: '/cuisines-dubai',
    },
    {
      title: 'Sugar-Free Catering',
      description: 'Reduced-sugar menus that can sit on the same brief as gluten-free when you say so.',
      image: '/images/healthy-catering-dubai-hero.webp',
      link: '/allergy-safe-catering-dubai',
    },
    {
      title: 'FODMAP-Friendly Catering',
      description: 'Low-FODMAP is a different rule set. It can overlap with gluten-free. It is not the same thing.',
      image: '/images/healthy-catering-dubai-hero.webp',
      link: '/allergy-safe-catering-dubai',
    },
    {
      title: 'Vegan Catering',
      description: 'Plant-based menus. Gluten-free is extra, not automatic.',
      image: '/menu-appetizer.webp',
      link: '/vegan-catering-dubai',
    },
    {
      title: 'Buffet Catering',
      description: 'Buffet formats that can include a labelled gluten-free station.',
      image: '/service-events.webp',
      link: '/buffet-catering-dubai',
    },
  ],
  ctaH2: 'Send the gluten brief with the date',
  ctaP:
    'Name coeliac risk, wheat preference, and any other allergens. We put that on the first menu draft and quote the night as an itemised figure.',
}

export default function GlutenFreeCatering() {
  return <DietaryCateringPage config={config} />
}
