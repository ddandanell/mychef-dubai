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
      seoTitle="Corporate Dinner Package Dubai | myCHEF"
      description="Corporate dinner package Dubai: AED 4,500 for 10 to 15 guests, chef and service staff sized to the table. Not a dinner cruise. VAT invoice. Not the plated per-person band."
      intro="A corporate dinner package for 10–15 guests, with a private chef and service team, is AED 4,500. That figure is a fixed package price for this guest range, not multiplied by headcount. Chef-led plated dining at AED 700–950 per person is a different menu and service, used when the table is smaller or larger than 15, or when you want fully plated courses. If you are comparing dubai dinner cruise deals or a private dinner cruise dubai price, this package is a dinner in your office or venue, not a boat hire."
      canonicalPath="/corporate-dinner-package-dubai"
      ogImage="/images/corporate-dinner-package-dubai-hero.webp"
      headline="Corporate Dinner Package Dubai"
      eyebrow="CORPORATE DINING PACKAGE"
      subheadline="AED 4,500 for 10 to 15 guests. Chef and service staff sized to the table. Setup, service and kitchen cleanup included. Not a dinner cruise."
      price={formatPriceAed(pkg.priceAed)}
      guests={pkg.guests}
      perPerson={`AED ${pkg.perPerson}`}
      included={[
        'Menu for 10 to 15 guests, written for the table',
        'Chef and service staff sized to the sitting',
        'Tableware, linen and place settings for this format',
        'Setup, service and kitchen cleanup',
        'TRN-ready VAT invoice. An LPO does not create credit terms by itself',
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
          a: 'Yes. AED 4,500 for 10–15 guests in a boardroom, office dining room or private venue. Service is sized to the table. It is not a gala and not a dinner cruise.',
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
          title: 'Corporate event catering',
          description: 'Company parties, launches and networking when the room is larger than 15.',
          image: '/service-corporate.webp',
          link: '/corporate-event-catering-dubai',
        },
        {
          title: 'Corporate dining',
          description: 'The corporate hub: lunches, retainers and dinners as a programme.',
          image: '/service-corporate.webp',
          link: '/corporate',
        },
        {
          title: 'Business lunch catering',
          description: 'A working lunch. This package is a dinner sitting.',
          image: '/service-corporate.webp',
          link: '/business-lunch-catering-dubai',
        },
        {
          title: 'Gala dinner catering',
          description: 'Awards and banquets. Not the 10–15 guest package.',
          image: '/images/gala-dinner-catering-dubai-hero.webp',
          link: '/gala-dinner-catering-dubai',
        },
        {
          title: 'Corporate catering contract',
          description: 'A written account if you book dinners and lunches often. Not this package’s H1.',
          image: '/service-corporate.webp',
          link: '/corporate-retainer-dubai',
        },
      ]}
      heroImage="/images/corporate-dinner-package-dubai-hero.webp"
      breadcrumbLabel="Corporate Dinner Package Dubai"
      campaign="corporate-dinner-package-dubai"
      hideSiteName
      ctaLabel="Plan My Corporate Dinner"
    />
    <CorporateInventory path="/corporate-dinner-package-dubai" quoteHref="/inquiry" />
    </>
  )
}
