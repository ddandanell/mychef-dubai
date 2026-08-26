// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /family-feast-package-dubai
//     primary:     "family catering dubai"
//     subkeywords: "family catering dubai price" · "family catering cost per person dubai" · "best family catering dubai" · "family catering menu dubai" · "halal family catering dubai" · "catering for family gathering dubai" · "family feast package dubai" · "family dinner package dubai" · "family meal package dubai" · "family chef" · "family nutrition chef dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import PackagePageTemplate from '@/components/PackagePageTemplate'

export default function FamilyFeastPackage() {
  return (
    <PackagePageTemplate
      name="Family Feast"
      seoTitle="Family Catering Dubai | Feast Package, Private Chef | myCHEF"
      description="Family catering Dubai: a private chef dinner for 6–8 guests from AED 2,400. Sharing-style menus, premium ingredients and full service. Request a quote."
      intro="Family catering Dubai price and family catering cost per person Dubai depend on the same three things: the guest count, the menu, and how much of the work happens in front of people. Family meal package Dubai and family dinner package Dubai start from a set format and get adjusted to your date rather than sold as a fixed box. If you are weighing up best family catering Dubai, the things worth checking are the named chef, the itemised quote and who buys the ingredients. The family catering menu Dubai is drafted around the occasion, the season and the dietary list, and you change it before anything is confirmed. Halal family catering Dubai and family nutrition chef Dubai are planned into the first draft of the menu rather than bolted on at the end. Catering for family gathering Dubai is planned around the room and the running order, with chefs, service staff and clear-down included."
      canonicalPath="/family-feast-package-dubai"
      ogImage="/images/celebration-catering-dubai-hero.webp"
      headline="Family Catering Dubai: Private Chef Dinner for 6–8"
      eyebrow="FAMILY DINING PACKAGE"
      subheadline="A generous sharing-style dinner for family and friends — prepared in your home and served without the stress."
      price="2,400"
      guests="6–8 guests"
      perPerson="AED 300–400"
      included={[
        'Bespoke sharing-style menu for 6–8 guests',
        'Private chef and service support',
        'Premium ingredients and preparation',
        'Table setting and family-style plating',
        'Setup, service, and full kitchen cleanup',
        'Customisable for children and dietary needs',
      ]}
      sampleMenu={[
        'Starters: Hummus, baba ganoush, fresh breads, and olives',
        'Mains: Slow-cooked lamb shoulder, grilled seabream, roasted vegetables, and herbed rice',
        'Dessert: Fresh fruit platter and rosewater panna cotta',
      ]}
      addOns={[
        'Additional courses or dessert table',
        'Children’s menu and kid-friendly options',
        'BBQ or live cooking station',
        'Mocktail and soft-drink station',
        'Extra service staff for larger groups',
      ]}
      faqs={[
        {
          q: 'Is the Family Feast package suitable for children?',
          a: 'Yes. We can design a family-friendly menu with options for children, from mild flavours to interactive dishes, while keeping adult options refined.',
        },
        {
          q: 'Can this package be adapted for dietary restrictions?',
          a: 'Absolutely. We accommodate halal, vegetarian, vegan, gluten-free, dairy-free, nut-free, and other requirements across the menu.',
        },
        {
          q: 'How much space do you need in my kitchen?',
          a: 'Chefs in our network are experienced in working in Dubai apartment and villa kitchens of all sizes. We bring any specialised equipment needed.',
        },
        {
          q: 'Can I increase the guest count?',
          a: 'Yes. The package scales beyond 8 guests. We will adjust the menu, ingredients, and service team and provide a tailored quote.',
        },
      ]}
      relatedServices={[
        {
          title: 'Catering Dubai',
          description: 'Fully-coordinated catering for family celebrations of any size.',
          image: '/service-events.webp',
          link: '/catering-dubai',
        },
        {
          title: 'Private Chef Dubai',
          description: 'Bespoke in-home dining for families and celebrations.',
          image: '/service-private-chef.webp',
          link: '/private-chef-dubai',
        },
        {
          title: 'Catering Packages Dubai',
          description: 'See all starter packages and starting prices.',
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
