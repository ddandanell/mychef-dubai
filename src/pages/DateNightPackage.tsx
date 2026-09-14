// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /date-night-package-dubai
//     primary:     "date night package dubai"
//     subkeywords: "date night package dubai price" · "best date night package dubai" · "what is included in a date night package dubai" · "date night dinner menu dubai" · "halal date night dubai" · "date night at home dubai" · "date night dubai private dinner" · "wednesday night dinner dubai" · "lunch date dubai" · "private dinner package dubai" · "couples dinner package dubai" · "dinner package for two dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import PackagePageTemplate from '@/components/PackagePageTemplate'
import { eventPackageById, formatPriceAed } from '@/content/cateringPricing'

const pkg = eventPackageById('date-night')

export default function DateNightPackage() {
  return (
    <PackagePageTemplate
      name={pkg.name}
      seoTitle="Date Night Package Dubai | myCHEF"
      description="Date night package Dubai: AED 1,200 for two guests, a three-course menu cooked at home, served and cleared. Extra courses and drinks quoted separately."
      intro="Date night package Dubai is a published total for two: AED 1,200 for a three-course dinner cooked in your kitchen, served at your table and cleared after. That is a package price, not chef-led plated dining at AED 700–950 per person. Dietary notes go into the first menu draft. Halal is the default. Wine or cocktails only where the quotation says so."
      canonicalPath="/date-night-package-dubai"
      ogImage="/images/romantic-dinner-dubai-hero.webp"
      headline="Date Night Package Dubai"
      eyebrow="DINNER FOR TWO"
      subheadline="AED 1,200 for two guests. Three courses, a chef in the kitchen, the table set, the kitchen left as we found it."
      price={formatPriceAed(pkg.priceAed)}
      guests={pkg.guests}
      perPerson={`AED ${pkg.perPerson}`}
      included={[
        'A three-course menu written for two',
        'Chef cooking in your kitchen',
        'Table setting and plating',
        'Ingredients for that menu',
        'Kitchen clear-down after the meal',
        'Mocktail pairing notes if you ask. Wine only where the quotation says so',
      ]}
      sampleMenu={[
        'Starter: Burrata with heirloom tomatoes and basil oil',
        'Main: Pan-seared sea bass with saffron risotto and seasonal greens',
        'Dessert: Warm chocolate fondant with vanilla bean ice cream',
      ]}
      addOns={[
        'Wine pairing, only where the venue is licensed or the quotation says so',
        'Flowers and table styling, quoted separately',
        'A musician, if you want one introduced. Not included in AED 1,200',
        'A photographer, quoted separately if you ask us to introduce one',
        'A mocktail bar. Cocktails only where licensed',
      ]}
      faqs={[
        {
          q: 'Where can the Date Night package be served?',
          a: 'Your apartment, villa, hotel suite or a private venue in Dubai. The chef brings ingredients and kit, cooks on site and clears. Access rules are yours to confirm with the building.',
        },
        {
          q: 'Can the menu be customised for dietary restrictions?',
          a: 'Yes. Halal is the default. Vegetarian, vegan, gluten-free and named allergies go into the first draft.',
        },
        {
          q: 'How far in advance should I book?',
          a: 'A week is comfortable. Sooner is possible when a chef is free. We will not invent availability.',
        },
        {
          q: 'Is the AED 1,200 price fixed?',
          a: 'AED 1,200 is the published package total for a three-course dinner for two. Extra courses, named luxury ingredients and drinks sit on the quote as extra lines. 5% VAT is shown separately.',
        },
      ]}
      relatedServices={[
        {
          title: 'Private chef Dubai',
          description: 'A standing household chef is a different product. One dinner for two is this package.',
          image: '/service-private-chef.webp',
          link: '/private-chef-dubai',
        },
        {
          title: 'Luxury dining',
          description: 'Tasting menus and celebration dinners when the table is larger than two.',
          image: '/service-luxury-dining.webp',
          link: '/luxury-dining-experiences',
        },
        {
          title: 'Catering packages',
          description: 'Date Night, Family, Birthday and Corporate Dinner as published totals.',
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
