import PackagePageTemplate from '@/components/PackagePageTemplate'

export default function CorporateDinnerPackage() {
  return (
    <PackagePageTemplate
      name="Corporate Dinner"
      seoTitle="Corporate Dinner Package Dubai | Boardroom & Team Dining | myCHEF"
      description="Corporate Dinner Package Dubai: professional private dining for 10–15 guests from AED 4,500. Boardroom dinners, client entertainment, and VAT invoicing. Request a quote."
      canonicalPath="/corporate-dinner-package-dubai"
      ogImage="/images/corporate-catering-dubai-hero.webp"
      headline="Corporate Dinner Package Dubai: Boardroom & Team Dining"
      eyebrow="CORPORATE DINING PACKAGE"
      subheadline="Impress clients and reward teams with a polished private dinner delivered to your office or venue in Dubai."
      price="4,500"
      guests="10–15 guests"
      perPerson="AED 300–450"
      included={[
        'Bespoke multi-course or buffet menu for 10–15 guests',
        'Professional private chef and service staff',
        'Premium ingredients and elegant presentation',
        'Tableware, linens, and place settings',
        'Setup, service, and full kitchen cleanup',
        'VAT invoice and corporate documentation',
      ]}
      sampleMenu={[
        'Starter: Burrata and heirloom tomato salad with basil pesto',
        'Main: Grilled salmon fillet, herb-roasted chicken, seasonal vegetables, and truffle risotto',
        'Dessert: Chocolate fondant and seasonal fruit tartlets',
      ]}
      addOns={[
        'Additional courses or canapé reception',
        'Bar service, mocktails, or wine pairing',
        'Branded menus and place cards',
        'AV support and presentation setup',
        'Recurring monthly retainer options',
      ]}
      faqs={[
        {
          q: 'Is this package suitable for boardroom dinners?',
          a: 'Yes. The Corporate Dinner package is designed for boardroom dinners, executive dining, and client entertainment with discreet, professional service.',
        },
        {
          q: 'Can you invoice my company?',
          a: 'Yes. We provide detailed VAT invoices and TRN-ready documentation for corporate accounts. Monthly retainer arrangements are also available.',
        },
        {
          q: 'Can the menu accommodate dietary requirements?',
          a: 'Absolutely. We handle halal, vegetarian, vegan, gluten-free, dairy-free, nut-free, and allergy-aware menus for corporate guests.',
        },
        {
          q: 'Do you cater at offices across Dubai?',
          a: 'Yes. We serve DIFC, Business Bay, Downtown Dubai, Dubai Media City, and all major business districts across the city.',
        },
      ]}
      relatedServices={[
        {
          title: 'Corporate Catering Dubai',
          description: 'Boardroom lunches, client dinners, and team events.',
          image: '/service-corporate.webp',
          link: '/corporate',
        },
        {
          title: 'Business Lunch Catering',
          description: 'Working lunches for teams and executive meetings.',
          image: '/service-corporate.webp',
          link: '/business-lunch-catering-dubai',
        },
        {
          title: 'Catering Packages Dubai',
          description: 'See all starter packages and starting prices.',
          image: '/images/catering-packages-dubai-hero.webp',
          link: '/catering-packages-dubai',
        },
      ]}
      heroImage="/images/corporate-catering-dubai-hero.webp"
      breadcrumbLabel="Corporate Dinner Package Dubai"
      campaign="corporate-dinner-package-dubai"
      hideSiteName
      ctaLabel="Plan My Corporate Dinner"
    />
  )
}
