// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /corporate-dinner-package-dubai
//     primary:     "corporate dinner package dubai"
//     subkeywords: "corporate dinner package dubai price" · "corporate dinner package dubai cost per person" · "private chef corporate dinner dubai" · "corporate dinner package menu dubai" · "team dinner catering dubai" · "dubai dinner cruise deals" · "best business dinner in dubai" · "company dinner package dubai" · "private dinner cruise dubai price" · "corporate catering package dubai" · "dinner set price in uae" · "private chef dinner for 2 cost"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import PackagePageTemplate from '@/components/PackagePageTemplate'
import CorporateInventory from '@/components/corporate/CorporateInventory'
import { eventPackageById, formatPriceAed } from '@/content/cateringPricing'

const pkg = eventPackageById('corporate-dinner')

export default function CorporateDinnerPackage() {
  return (
    <>
    <PackagePageTemplate
      name={pkg.name}
      seoTitle="Corporate Dinner Package Dubai | Boardroom & Team Dining | myCHEF"
      description="Corporate Dinner Package Dubai: professional private dining for 10–15 guests from AED 4,500. Boardroom dinners, client entertainment, and VAT invoicing."
      intro="The corporate dinner package is AED 4,500 for 10–15 guests, including a chef, service staff sized to the table, tableware, setup and cleanup. That total is not multiplied by headcount. It is not the same product as chef-led plated dining at AED 700–950 per person, which is quoted per guest for tables outside this range. It is not a dinner cruise and it does not include AV or staging."
      canonicalPath="/corporate-dinner-package-dubai"
      ogImage="/images/corporate-catering-dubai-hero.webp"
      headline="Corporate Dinner Package Dubai: Boardroom & Team Dining"
      eyebrow="CORPORATE DINING PACKAGE"
      subheadline="AED 4,500 for 10 to 15 guests. Chef and service staff sized to the table. Not a dinner cruise. Not the plated per-person band."
      price={formatPriceAed(pkg.priceAed)}
      guests={pkg.guests}
      perPerson={`AED ${pkg.perPerson}`}
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
        'Arrival canapés',
        'Mocktails, or wine service where the venue is licensed',
        'Printed menus and place cards',
        'A plated per-person dinner if the table is outside 10–15 guests',
      ]}
      faqs={[
        {
          q: 'Is this package suitable for boardroom dinners?',
          a: 'Yes. The Corporate Dinner package is designed for boardroom dinners, executive dining, and client entertainment with discreet, professional service.',
        },
        {
          q: 'Can you invoice my company?',
          a: 'Yes. We issue TRN-ready VAT invoices. An LPO or consolidated invoice does not by itself create credit terms.',
        },
        {
          q: 'Can the menu accommodate dietary requirements?',
          a: 'Halal ingredients are the default. Vegetarian, vegan and gluten-free dishes are planned when named in the brief. This is not a medical or allergen-free promise.',
        },
        {
          q: 'Do you cater at offices across Dubai?',
          a: 'Yes. We serve DIFC, Business Bay, Downtown Dubai, Dubai Media City, and all major business districts across the city.',
        },
      ]}
      relatedServices={[
        {
          title: 'Corporate Event Catering',
          description: 'Company parties, launches, galas and networking events.',
          image: '/service-corporate.webp',
          link: '/corporate-event-catering-dubai',
        },
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
    <CorporateInventory path="/corporate-dinner-package-dubai" quoteHref="/inquiry" />
    </>
  )
}
