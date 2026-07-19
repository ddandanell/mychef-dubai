import PackagePageTemplate from '@/components/PackagePageTemplate'

export default function FamilyFeastPackage() {
  return (
    <PackagePageTemplate
      name="Family Feast"
      seoTitle="Family Feast Private Chef Package Dubai | Dinner for 6–8"
      description="A relaxed, generous private chef dinner for 6–8 guests in Dubai. The Family Feast package features sharing-style menus, premium ingredients, and full service so you can enjoy the evening with family and friends."
      canonicalPath="/family-feast-package-dubai"
      ogImage="/images/family-feast-package-dubai-hero.webp"
      headline={<>Family Feast<br />Private Chef Dubai</>}
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
          a: 'Our chefs are experienced in working in Dubai apartment and villa kitchens of all sizes. We bring any specialised equipment needed.',
        },
        {
          q: 'Can I increase the guest count?',
          a: 'Yes. The package scales beyond 8 guests. We will adjust the menu, ingredients, and service team and provide a tailored quote.',
        },
      ]}
      relatedServices={[
        {
          title: 'Private Chef Dubai',
          description: 'Bespoke in-home dining for families and celebrations.',
          image: '/service-private-chef.webp',
          link: '/private-chef-dubai',
        },
        {
          title: 'Villa Private Chef',
          description: 'Private dining at your villa or residence across Dubai.',
          image: '/service-villa.webp',
          link: '/villas-private-residences',
        },
        {
          title: 'Catering Packages Dubai',
          description: 'See all starter packages and starting prices.',
          image: '/images/catering-packages-dubai-hero.webp',
          link: '/catering-packages-dubai',
        },
      ]}
      heroImage="/images/family-feast-package-dubai-hero.webp"
      breadcrumbLabel="Family Feast Package Dubai"
      campaign="family-feast-package-dubai"
    />
  )
}
