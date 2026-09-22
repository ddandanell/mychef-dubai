// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /birthday-catering-package-dubai
//     primary:     "birthday catering packages dubai"
//     subkeywords: "birthday catering package dubai price" · "birthday catering package cost per person dubai" · "best birthday catering package dubai" · "what is included in birthday catering package dubai" · "halal birthday catering package dubai" · "kids birthday catering packages dubai" · "birthday party package dubai catering" · "catering packages on offer in dubai" · "catering package dubai" · "kids birthday food package dubai" · "birthday catering at home dubai" · "birthday catering blog dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import PackagePageTemplate from '@/components/PackagePageTemplate'
import { eventPackageById, formatPriceAed } from '@/content/cateringPricing'

const pkg = eventPackageById('birthday')

export default function BirthdayPackage() {
  return (
    <PackagePageTemplate
      name={pkg.name}
      seoTitle="Birthday Catering Packages Dubai | myCHEF"
      description="Birthday catering packages Dubai: AED 3,600 for 8–12 guests, chef and service staff, cake option, setup and clear-down. Larger parties quoted separately."
      intro="Birthday catering packages Dubai start at a published total: AED 3,600 for 8–12 guests. Canapés or a starter, a main, dessert, a cake option, a chef and service staff, setup and clear-down. The figure covers the package for the stated group size. Larger rooms are quoted on the birthday catering page. Dietary notes go into the first draft. Halal is the default."
      canonicalPath="/birthday-catering-package-dubai"
      ogImage="/images/birthday-catering-dubai-hero.webp"
      headline="Birthday Catering Packages Dubai"
      eyebrow="BIRTHDAY PACKAGE"
      subheadline="AED 3,600 for 8–12 guests. A menu written for the table, a cake option, a chef and service staff. You stay with the guest of honour."
      price={formatPriceAed(pkg.priceAed)}
      guests={pkg.guests}
      perPerson={`AED ${pkg.perPerson}`}
      included={[
        'A menu written for 8–12 guests',
        'Canapés or a starter, main course and dessert',
        'Chef and service staff sized to the table',
        'Ingredients for that menu',
        'A birthday cake or dessert option',
        'Setup, service and clear-down',
      ]}
      sampleMenu={[
        'Canapés: Tuna tartare spoons, truffle arancini, mini brioche sliders',
        'Main: Grilled Angus beef tenderloin, herb-crusted lamb rack, roasted seasonal vegetables, and truffle mash',
        'Dessert: Birthday cake and assorted mini desserts',
      ]}
      addOns={[
        'A more detailed cake design, quoted as a line',
        'A dessert table or grazing spread',
        'A mocktail bar. Cocktails or champagne only where the venue is licensed',
        'Table styling, quoted separately',
        'A DJ or photographer if you want one introduced. Not inside AED 3,600',
      ]}
      faqs={[
        {
          q: 'Can this package cater both kids and adults?',
          a: 'Yes. Mixed-age tables are written as such: milder plates for children, the same kitchen for adults. The package can be discussed for a birthday group of 8–12 with both adults and children.',
        },
        {
          q: 'Do you provide a birthday cake?',
          a: 'Yes. A cake option is in the package. Flavour and diets are named before the night.',
        },
        {
          q: 'Can the party be at a villa or venue?',
          a: 'Yes. Home, villa, garden, rooftop or a private venue in Dubai. Setup and clear-down are in the total. Building access is yours to confirm.',
        },
        {
          q: 'How far in advance should I book?',
          a: 'Two to four weeks when the cake and staffing need time. A week can work for a simpler table. Peak weekends from November to March fill first.',
        },
      ]}
      relatedServices={[
        {
          title: 'Birthday catering',
          description: 'Birthdays larger than 12, or a different format. This package is the 8–12 total.',
          image: '/service-events.webp',
          link: '/birthday-catering-dubai',
        },
        {
          title: 'Kids birthday catering',
          description: 'Younger guest lists, party boxes and allergy planning. Explore menus and service for birthday celebrations.',
          image: '/images/kids-birthday-catering-dubai-hero.webp',
          link: '/birthday-catering-dubai',
        },
        {
          title: 'Catering packages',
          description: 'The other published totals: Date Night, Family and Corporate Dinner.',
          image: '/images/catering-packages-dubai-hero.webp',
          link: '/catering-packages-dubai',
        },
      ]}
      heroImage="/images/birthday-catering-dubai-hero.webp"
      breadcrumbLabel="Birthday Catering Package Dubai"
      campaign="birthday-catering-package-dubai"
      hideSiteName
      ctaLabel="Plan My Birthday Package"
    />
  )
}
