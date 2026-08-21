import PackagePageTemplate from '@/components/PackagePageTemplate'

export default function DateNightPackage() {
  return (
    <PackagePageTemplate
      name="Date Night"
      seoTitle="Date Night Package Dubai | Private Chef for Two | myCHEF"
      description="Date Night Package Dubai: private chef dinner for two from AED 1,200. Bespoke 3-course menu, elegant plating, and full cleanup. Get a quote in 15 minutes."
      canonicalPath="/date-night-package-dubai"
      ogImage="/images/romantic-dinner-dubai-hero.webp"
      headline="Date Night Package Dubai: Private Chef Dinner for Two"
      eyebrow="ROMANTIC DINING PACKAGE"
      subheadline="An intimate private chef dinner for two — designed around your tastes and served in the comfort of your own space."
      price="1,200"
      guests="2 guests"
      perPerson="AED 600"
      included={[
        'Bespoke 3-course menu designed for two',
        'Private chef and in-home preparation',
        'Table setting and elegant plating',
        'Premium ingredients sourced for the occasion',
        'Full kitchen cleanup after the meal',
        'Optional wine or mocktail pairing suggestions',
      ]}
      sampleMenu={[
        'Starter: Burrata with heirloom tomatoes and basil oil',
        'Main: Pan-seared sea bass with saffron risotto and seasonal greens',
        'Dessert: Warm chocolate fondant with vanilla bean ice cream',
      ]}
      addOns={[
        'Wine pairing consultation and sourcing',
        'Fresh flower arrangement and table styling',
        'Live musician or saxophonist',
        'Photographer to capture the evening',
        'Signature mocktail or cocktail bar',
      ]}
      faqs={[
        {
          q: 'Where can the Date Night package be served?',
          a: 'Anywhere in Dubai — your apartment, villa, hotel suite, or a private venue. The chef brings ingredients and equipment, prepares the meal on-site, and cleans up afterwards.',
        },
        {
          q: 'Can the menu be customised for dietary restrictions?',
          a: 'Yes. Every Date Night menu is bespoke. We accommodate halal, vegetarian, vegan, gluten-free, dairy-free, nut-free, and other requirements.',
        },
        {
          q: 'How far in advance should I book?',
          a: 'We recommend booking at least one week in advance. Last-minute requests are sometimes possible depending on chef availability.',
        },
        {
          q: 'Is the AED 1,200 price fixed?',
          a: 'AED 1,200 is the starting price for a 3-course menu for two. Premium ingredients such as wagyu, truffles, or caviar, or additional courses and services, will affect the final quote.',
        },
      ]}
      relatedServices={[
        {
          title: 'Private Chef Dubai',
          description: 'Fully bespoke private dining experiences for any occasion.',
          image: '/service-private-chef.webp',
          link: '/private-chef-dubai',
        },
        {
          title: 'Luxury Dining Experiences',
          description: 'Multi-course tasting menus and celebration dining.',
          image: '/service-luxury-dining.webp',
          link: '/luxury-dining-experiences',
        },
        {
          title: 'Catering Packages Dubai',
          description: 'Explore all our starter packages and starting prices.',
          image: '/images/catering-packages-dubai-hero.webp',
          link: '/catering-packages-dubai',
        },
      ]}
      heroImage="/images/romantic-dinner-dubai-hero.webp"
      breadcrumbLabel="Date Night Package Dubai"
      campaign="date-night-package-dubai"
      hideSiteName
      ctaLabel="Plan My Date Night"
    />
  )
}
