// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /family-feast-package-dubai
//     primary:     "family catering dubai"
//     subkeywords: "family catering dubai price" · "family catering cost per person dubai" · "best family catering dubai" · "family catering menu dubai" · "halal family catering dubai" · "catering for family gathering dubai" · "family feast package dubai" · "family dinner package dubai" · "family meal package dubai" · "family chef" · "family nutrition chef dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import PackagePageTemplate from '@/components/PackagePageTemplate'
import { eventPackageById, formatPriceAed } from '@/content/cateringPricing'

const pkg = eventPackageById('family-feast')

export default function FamilyFeastPackage() {
  return (
    <PackagePageTemplate
      name={pkg.name}
      seoTitle="Family Catering Dubai | myCHEF"
      description="Family catering Dubai: AED 2,400 for 6–8 guests, sharing plates, a chef and service staff, setup and clear-down. Halal by default. Extra guests quoted."
      intro="Family catering Dubai starts with a shared dining package: AED 2,400 for 6–8 guests, sharing plates, a chef and service so nobody leaves the table to plate. The price is a package total for the stated group size. Extra guests move the quote. Dietary notes go into the first draft. Halal is the default. Regular household meals can be arranged through our private chef service."
      canonicalPath="/family-feast-package-dubai"
      ogImage="/images/celebration-catering-dubai-hero.webp"
      headline="Family Catering Dubai"
      eyebrow="FAMILY TABLE"
      subheadline="AED 2,400 for 6–8 guests. Sharing plates, a chef and service staff, the kitchen cleared. You stay at the table."
      price={formatPriceAed(pkg.priceAed)}
      guests={pkg.guests}
      perPerson={`AED ${pkg.perPerson}`}
      included={[
        'A sharing-style menu written for 6–8 guests',
        'Chef and service staff sized to the table',
        'Ingredients for that menu',
        'Table setting and sharing platters',
        'Setup, service and kitchen clear-down',
        'Children and named diets planned in the first draft',
      ]}
      sampleMenu={[
        'Starters: Hummus, baba ganoush, fresh breads, and olives',
        'Mains: Slow-cooked lamb shoulder, grilled seabream, roasted vegetables, and herbed rice',
        'Dessert: Fresh fruit platter and rosewater panna cotta',
      ]}
      addOns={[
        'Extra courses or a dessert table',
        'A separate children’s menu',
        'A BBQ or live station, quoted to suit the menu and guest count',
        'A mocktail and soft-drink station',
        'Extra service staff if the table grows',
      ]}
      faqs={[
        {
          q: 'Is the Family Feast package suitable for children?',
          a: 'Yes. Milder plates for children sit on the same sharing table. Tell us ages and we write the menu around them.',
        },
        {
          q: 'Can this package be adapted for dietary restrictions?',
          a: 'Halal is the default. Vegetarian, vegan, gluten-free and named allergies go into the first draft. This is not a medical allergen-free claim.',
        },
        {
          q: 'How much space do you need in my kitchen?',
          a: 'Apartment and villa kitchens both work. Specialised kit travels with the chef. We will say if the kitchen cannot hold the brief.',
        },
        {
          q: 'Can I increase the guest count?',
          a: 'Yes. Beyond 8 guests the total moves. We adjust the menu, ingredients and staff and send a new figure. The starting package remains AED 2,400 for 6–8 guests.',
        },
      ]}
      relatedServices={[
        {
          title: 'Catering Dubai',
          description: 'Family tables larger than this package, or a different format.',
          image: '/service-events.webp',
          link: '/catering-dubai',
        },
        {
          title: 'Private chef Dubai',
          description: 'A standing household chef. One family dinner is this package.',
          image: '/service-private-chef.webp',
          link: '/private-chef-dubai',
        },
        {
          title: 'Catering packages',
          description: 'Date Night, Birthday and Corporate Dinner as published totals.',
          image: '/images/catering-packages-dubai-hero.webp',
          link: '/catering-packages-dubai',
        },
      ]}
      heroImage="/images/celebration-catering-dubai-hero.webp"
      breadcrumbLabel="Family Feast Package Dubai"
      campaign="family-feast-package-dubai"
      hideSiteName
      ctaLabel="Plan My Family Feast"
    />
  )
}
