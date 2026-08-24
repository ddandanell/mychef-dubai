export interface BlogSeriesEntry {
  url: string
  jsonFile: string
  focusKeyword: string
  supportingKeywords: string[]
  category: string
  date: string
  imageCount: 2 | 3 | 4
  sourceFile: 'THE-13-BLOGS-FOR-DAVID.md' | 'DESERT-DINNER-PARTY-BLOG-FOR-DAVID.md'
  title: string
  excerpt: string
}

/** The 13 David blogs. Focus/supporting keywords are the live SEO targets. */
export const DAVID_BLOGS: BlogSeriesEntry[] = [
  {
    url: '/blog/how-to-hire-a-private-chef-dubai',
    jsonFile: 'blog-how-to-hire-a-private-chef-dubai',
    focusKeyword: 'how to hire a private chef in dubai',
    supportingKeywords: ['private chef booking dubai', 'private chef hire dubai', 'private chef cost dubai'],
    category: 'Private Chef',
    date: 'August 2026',
    imageCount: 3,
    sourceFile: 'THE-13-BLOGS-FOR-DAVID.md',
    title: 'How to Hire a Private Chef Dubai: 2026 Cost & Booking Guide',
    excerpt: 'How to hire a private chef in Dubai: what it costs, how booking works, how chefs are vetted and what to ask before your dinner. From around AED 700 per person.',
  },
  {
    url: '/blog/private-chef-vs-restaurant-dubai',
    jsonFile: 'blog-private-chef-vs-restaurant-dubai',
    focusKeyword: 'private chef vs restaurant dubai',
    supportingKeywords: ['private chef at home dubai', 'restaurant vs private dining dubai', 'dine at home vs restaurant dubai'],
    category: 'Private Chef',
    date: 'August 2026',
    imageCount: 3,
    sourceFile: 'THE-13-BLOGS-FOR-DAVID.md',
    title: 'Private Chef vs Restaurant Dubai: Which Wins a Special Occasion?',
    excerpt: 'Private chef vs restaurant Dubai, compared honestly: privacy and a bespoke menu at home versus zero setup and a fixed menu out. Costs, food safety and how to choose.',
  },
  {
    url: '/blog/dinner-party-menu-ideas-dubai',
    jsonFile: 'blog-dinner-party-menu-ideas-dubai',
    focusKeyword: 'dinner party menu ideas dubai',
    supportingKeywords: ['private dining menu dubai', 'dinner party catering dubai', 'event menu ideas dubai'],
    category: 'Dinner Party',
    date: 'August 2026',
    imageCount: 3,
    sourceFile: 'THE-13-BLOGS-FOR-DAVID.md',
    title: "Dinner Party Menu Ideas Dubai: A Host's 2026 Guide",
    excerpt: 'Dinner party menu ideas in Dubai, from budgeting and a three-course structure to showpiece stations, dietary planning and whether to hire a private chef.',
  },
  {
    url: '/blog/wedding-catering-cost-dubai',
    jsonFile: 'blog-wedding-catering-cost-dubai',
    focusKeyword: 'wedding catering cost dubai',
    supportingKeywords: ['wedding catering dubai cost', 'wedding menu dubai', 'luxury wedding catering dubai'],
    category: 'Wedding',
    date: 'August 2026',
    imageCount: 3,
    sourceFile: 'THE-13-BLOGS-FOR-DAVID.md',
    title: 'Wedding Catering Cost Dubai: What to Budget in 2026',
    excerpt: 'Wedding catering cost in Dubai starts from around AED 700 per guest for plated service. What buffets, stations and luxury menus really cost, and how to budget by guest count.',
  },
  {
    url: '/blog/brunch-at-home-dubai',
    jsonFile: 'blog-brunch-at-home-dubai',
    focusKeyword: 'brunch at home dubai',
    supportingKeywords: ['home brunch dubai', 'brunch catering dubai', 'terrace brunch dubai'],
    category: 'Brunch',
    date: 'August 2026',
    imageCount: 4,
    sourceFile: 'THE-13-BLOGS-FOR-DAVID.md',
    title: 'Brunch at Home Dubai: How to Host a Standout Spread (2026 Guide)',
    excerpt: 'A practical guide to hosting brunch at home in Dubai: menus, drinks, budgets from around AED 700 per person, dietary planning, and when a private chef is worth it.',
  },
  {
    url: '/blog/vegan-catering-dubai-guide',
    jsonFile: 'blog-vegan-catering-dubai-guide',
    focusKeyword: 'vegan catering dubai',
    supportingKeywords: ['vegan menu dubai', 'plant-based catering dubai', 'vegan event catering dubai'],
    category: 'Vegan',
    date: 'August 2026',
    imageCount: 3,
    sourceFile: 'THE-13-BLOGS-FOR-DAVID.md',
    title: 'Plant Based Catering Dubai — What to Expect',
    excerpt: 'Plant based catering in Dubai: what a plant-led menu actually looks like, how it is sourced and priced, and what to ask before you book.',
  },
  {
    url: '/blog/corporate-event-catering-ideas-dubai',
    jsonFile: 'blog-corporate-event-catering-ideas-dubai',
    focusKeyword: 'corporate event catering ideas dubai',
    supportingKeywords: ['team dinner catering dubai', 'corporate catering dubai', 'office event catering dubai'],
    category: 'Corporate',
    date: 'August 2026',
    imageCount: 3,
    sourceFile: 'THE-13-BLOGS-FOR-DAVID.md',
    title: 'Corporate Event Catering Ideas Dubai (2026 Guide)',
    excerpt: 'Corporate event catering ideas for Dubai offices: match drop-off lunches, live stations, canapes and plated galas to the occasion, with dietary options and real budgeting.',
  },
  {
    url: '/blog/iftar-at-home-dubai',
    jsonFile: 'blog-iftar-at-home-dubai',
    focusKeyword: 'iftar at home dubai',
    supportingKeywords: ['home iftar dubai', 'ramadan dinner at home dubai', 'iftar catering dubai'],
    category: 'Ramadan',
    date: 'August 2026',
    imageCount: 4,
    sourceFile: 'THE-13-BLOGS-FOR-DAVID.md',
    title: 'Iftar at Home Dubai: Menu, Timing & Cost Guide',
    excerpt: 'How to host iftar at home in Dubai: the menu order, exact timing to Maghrib, halal and food-safety rules, and what a private chef or caterer costs.',
  },
  {
    url: '/blog/nye-party-catering-dubai',
    jsonFile: 'blog-nye-party-catering-dubai',
    focusKeyword: 'new years eve catering dubai',
    supportingKeywords: ['nye catering dubai', 'new year dinner dubai', 'party catering dubai'],
    category: 'New Year',
    date: 'August 2026',
    imageCount: 4,
    sourceFile: 'THE-13-BLOGS-FOR-DAVID.md',
    title: "NYE Party Catering Dubai: The Host's Planning Guide",
    excerpt: 'NYE party catering in Dubai done well: passed canapés and live stations, a styled mocktail or cocktail bar, a midnight dessert, honest per-head prices, and why you book early.',
  },
  {
    url: '/blog/private-chef-date-night-dubai',
    jsonFile: 'blog-private-chef-date-night-dubai',
    focusKeyword: 'date night ideas dubai',
    supportingKeywords: ['romantic dinner dubai', 'private chef date night dubai', 'anniversary dinner at home dubai'],
    category: 'Date Night',
    date: 'August 2026',
    imageCount: 3,
    sourceFile: 'THE-13-BLOGS-FOR-DAVID.md',
    title: 'Private Chef Date Night Dubai: Ideas & Costs for Two',
    excerpt: 'A private chef date night in Dubai is a plated dinner for two at home, from AED 1,200, with the chef cooking, serving and clearing. Menus, costs and how to book.',
  },
  {
    url: '/blog/grazing-table-vs-buffet-dubai',
    jsonFile: 'blog-grazing-table-vs-buffet-dubai',
    focusKeyword: 'grazing table vs buffet dubai',
    supportingKeywords: ['buffet vs grazing table dubai', 'grazing table dubai', 'party buffet dubai'],
    category: 'Party Food',
    date: 'August 2026',
    imageCount: 3,
    sourceFile: 'THE-13-BLOGS-FOR-DAVID.md',
    title: 'Grazing Table vs Buffet Dubai: How to Choose (2026 Guide)',
    excerpt: 'Grazing table vs buffet in Dubai: a grazing table is a styled, shareable centrepiece for mingling parties; a buffet is a full self-serve meal for hungry crowds. Costs, ideas and how to choose.',
  },
  {
    url: '/blog/how-far-ahead-book-caterer-dubai',
    jsonFile: 'blog-how-far-ahead-book-caterer-dubai',
    focusKeyword: 'how far in advance to book a caterer dubai',
    supportingKeywords: ['book caterer dubai', 'event booking dubai', 'catering lead time dubai'],
    category: 'Planning',
    date: 'August 2026',
    imageCount: 2,
    sourceFile: 'THE-13-BLOGS-FOR-DAVID.md',
    title: 'How Far Ahead to Book a Caterer Dubai: 2026 Timeline Guide',
    excerpt: 'How far ahead to book a caterer in Dubai: lead times by event type, why peak season fills first, and the deadlines that actually cost you money.',
  },
  {
    url: '/blog/desert-dinner-party-dubai',
    jsonFile: 'blog-desert-dinner-party-dubai',
    focusKeyword: 'desert dinner party dubai',
    supportingKeywords: ['private dinner in the desert dubai', 'desert bbq catering dubai', 'luxury desert dinner dubai'],
    category: 'Desert',
    date: 'August 2026',
    imageCount: 4,
    sourceFile: 'DESERT-DINNER-PARTY-BLOG-FOR-DAVID.md',
    title: 'Desert Dinner Party Dubai: Get-Togethers & Dining in the Dunes',
    excerpt: 'Planning a desert dinner party in Dubai: licensed camps vs private dune sites, what can be cooked out there, get-together and BBQ formats, season, and honest starting prices.',
  },
]

export function blogHeroPath(url: string): string {
  const slug = url.replace('/blog/', '')
  return `/images/blog/${slug}-hero.webp`
}

export function blogInlinePath(url: string, index: number): string {
  const slug = url.replace('/blog/', '')
  return `/images/blog/${slug}-${index + 2}.webp`
}
