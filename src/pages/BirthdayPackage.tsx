import PackagePageTemplate from '@/components/PackagePageTemplate'

export default function BirthdayPackage() {
  return (
    <PackagePageTemplate
      name="Birthday Celebration"
      seoTitle="Birthday Catering Package Dubai | Private Chef Party Menu"
      description="A private chef birthday celebration package for 8–12 guests in Dubai. Includes a bespoke celebration menu, canapés or starter, main course, dessert, and professional service staff."
      canonicalPath="/birthday-catering-package-dubai"
      ogImage="/images/birthday-catering-dubai-hero.webp"
      headline="Birthday Celebration Catering Dubai"
      eyebrow="BIRTHDAY PARTY PACKAGE"
      subheadline="Celebrate at home or in a private venue with a tailored menu, birthday cake, and full service for you and your guests."
      price="3,600"
      guests="8–12 guests"
      perPerson="AED 300–450"
      included={[
        'Bespoke birthday menu for 8–12 guests',
        'Canapés or starter, main course, and dessert',
        'Private chef and service staff',
        'Premium ingredient sourcing',
        'Custom birthday cake or dessert option',
        'Setup, service, and full clear-down',
      ]}
      sampleMenu={[
        'Canapés: Tuna tartare spoons, truffle arancini, mini brioche sliders',
        'Main: Grilled Angus beef tenderloin, herb-crusted lamb rack, roasted seasonal vegetables, and truffle mash',
        'Dessert: Birthday cake and assorted mini desserts',
      ]}
      addOns={[
        'Custom birthday cake design',
        'Dessert table and grazing spread',
        'Mocktail, cocktail, or champagne bar',
        'Themed table styling and decorations',
        'DJ, photographer, or live entertainment',
      ]}
      faqs={[
        {
          q: 'Can this package cater both kids and adults?',
          a: 'Yes. We design menus that work for mixed-age groups, with kid-friendly options alongside refined dishes for adults.',
        },
        {
          q: 'Do you provide a birthday cake?',
          a: 'Yes. The package includes a custom birthday cake designed around your theme, flavour preferences, and any dietary requirements.',
        },
        {
          q: 'Can the party be at a villa or venue?',
          a: 'Absolutely. We cater at homes, villas, gardens, rooftops, and private venues across Dubai, handling setup and cleanup.',
        },
        {
          q: 'How far in advance should I book?',
          a: 'We recommend two to four weeks for themed or larger parties. Smaller gatherings can often be arranged with one week’s notice.',
        },
      ]}
      relatedServices={[
        {
          title: 'Birthday Catering Dubai',
          description: 'Full-service birthday catering for all ages and venues.',
          image: '/service-events.webp',
          link: '/birthday-catering-dubai',
        },
        {
          title: 'Party Catering Dubai',
          description: 'Menus, drinks, and service for celebrations of every kind.',
          image: '/service-events.webp',
          link: '/party-catering-dubai',
        },
        {
          title: 'Catering Packages Dubai',
          description: 'Explore all starter packages and starting prices.',
          image: '/images/catering-packages-dubai-hero.webp',
          link: '/catering-packages-dubai',
        },
      ]}
      heroImage="/images/birthday-catering-dubai-hero.webp"
      breadcrumbLabel="Birthday Catering Package Dubai"
      campaign="birthday-catering-package-dubai"
    />
  )
}
