// AUTO-GENERATED master blog taxonomy — the single source of truth for the blog.
// Consumed by Blog.tsx (index), BlogRelated.tsx (related module), HandoffPage.tsx
// (contextual links + related + schema) and BlogCategoryHub.tsx (topic hubs).
// Regenerate via /tmp/gen_taxonomy.mjs if the post set changes.

export interface BlogPillar {
  label: string
  url: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  image: string
  date: string
  /** Primary topic hub this post belongs to (BlogHub.slug). */
  hub: string
}

export interface BlogHub {
  slug: string
  title: string
  description: string
  intro: string
  pillar: BlogPillar
}

export interface ContextualLink {
  phrase: string
  url: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    "slug": "/blog/how-to-hire-a-private-chef-dubai",
    "title": "How to Hire a Private Chef Dubai: 2026 Cost & Booking Guide",
    "excerpt": "How to hire a private chef in Dubai: what it costs, how booking works, how chefs are vetted and what to ask before your dinner. From around AED 700 per person.",
    "category": "Private Chef",
    "image": "/images/blog/how-to-hire-a-private-chef-dubai-hero.webp",
    "hub": "private-chef",
    "date": "August 2026"
  },
  {
    "slug": "/blog/private-chef-vs-restaurant-dubai",
    "title": "Private Chef vs Restaurant Dubai: Which Wins a Special Occasion?",
    "excerpt": "Private chef vs restaurant Dubai, compared honestly: privacy and a bespoke menu at home versus zero setup and a fixed menu out. Costs, food safety and how to choose.",
    "category": "Private Chef",
    "image": "/images/blog/private-chef-vs-restaurant-dubai-hero.webp",
    "hub": "private-chef",
    "date": "August 2026"
  },
  {
    "slug": "/blog/dinner-party-menu-ideas-dubai",
    "title": "Dinner Party Menu Ideas Dubai: A Host's 2026 Guide",
    "excerpt": "Dinner party menu ideas in Dubai, from budgeting and a three-course structure to showpiece stations, dietary planning and whether to hire a private chef.",
    "category": "Dinner Party",
    "image": "/images/blog/dinner-party-menu-ideas-dubai-hero.webp",
    "hub": "celebrations",
    "date": "August 2026"
  },
  {
    "slug": "/blog/wedding-catering-cost-dubai",
    "title": "Wedding Catering Cost Dubai: Planning Estimates for 2026",
    "excerpt": "Wedding catering cost in Dubai is three products, not one ladder: food-led buffets, hotel packages and chef-led villa dinners. Planning estimates, VAT and extras.",
    "category": "Wedding",
    "image": "/images/blog/wedding-catering-cost-dubai-hero.webp",
    "hub": "celebrations",
    "date": "August 2026"
  },
  {
    "slug": "/blog/brunch-at-home-dubai",
    "title": "Brunch at Home Dubai: How to Host a Standout Spread (2026 Guide)",
    "excerpt": "A practical guide to hosting brunch at home in Dubai: menus, drinks, budgets from around AED 700 per person, dietary planning, and when a private chef is worth it.",
    "category": "Brunch",
    "image": "/images/blog/brunch-at-home-dubai-hero.webp",
    "hub": "menus-dietary",
    "date": "August 2026"
  },
  {
    "slug": "/blog/vegan-catering-dubai-guide",
    "title": "Plant Based Catering Dubai — What to Expect",
    "excerpt": "Plant based catering in Dubai: what a plant-led menu actually looks like, how it is sourced and priced, and what to ask before you book.",
    "category": "Vegan",
    "image": "/images/blog/vegan-catering-dubai-guide-hero.webp",
    "hub": "menus-dietary",
    "date": "August 2026"
  },
  {
    "slug": "/blog/corporate-event-catering-ideas-dubai",
    "title": "Corporate Event Catering Ideas Dubai (2026 Guide)",
    "excerpt": "Corporate event catering ideas for Dubai offices: match drop-off lunches, live stations, canapes and plated galas to the occasion, with dietary options and real budgeting.",
    "category": "Corporate",
    "image": "/images/blog/corporate-event-catering-ideas-dubai-hero.webp",
    "hub": "corporate",
    "date": "August 2026"
  },
  {
    "slug": "/blog/iftar-at-home-dubai",
    "title": "Iftar at Home Dubai: Menu, Timing & Cost Guide",
    "excerpt": "How to host iftar at home in Dubai: the menu order, exact timing to Maghrib, halal and food-safety rules, and what a private chef or caterer costs.",
    "category": "Ramadan",
    "image": "/images/blog/iftar-at-home-dubai-hero.webp",
    "hub": "seasonal",
    "date": "August 2026"
  },
  {
    "slug": "/blog/nye-party-catering-dubai",
    "title": "NYE Party Catering Dubai: The Host's Planning Guide",
    "excerpt": "NYE party catering in Dubai done well: passed canapés and live stations, a styled mocktail or cocktail bar, a midnight dessert, honest per-head prices, and why you book early.",
    "category": "New Year",
    "image": "/images/blog/nye-party-catering-dubai-hero.webp",
    "hub": "celebrations",
    "date": "August 2026"
  },
  {
    "slug": "/blog/private-chef-date-night-dubai",
    "title": "Private Chef Date Night Dubai: Ideas & Costs for Two",
    "excerpt": "A private chef date night in Dubai is a plated dinner for two at home, from AED 1,200, with the chef cooking, serving and clearing. Menus, costs and how to book.",
    "category": "Date Night",
    "image": "/images/blog/private-chef-date-night-dubai-hero.webp",
    "hub": "private-chef",
    "date": "August 2026"
  },
  {
    "slug": "/blog/grazing-table-vs-buffet-dubai",
    "title": "Grazing Table vs Buffet Dubai: How to Choose (2026 Guide)",
    "excerpt": "Grazing table vs buffet in Dubai: a grazing table is a styled, shareable centrepiece for mingling parties; a buffet is a full self-serve meal for hungry crowds. Costs, ideas and how to choose.",
    "category": "Party Food",
    "image": "/images/blog/grazing-table-vs-buffet-dubai-hero.webp",
    "hub": "celebrations",
    "date": "August 2026"
  },
  {
    "slug": "/blog/how-far-ahead-book-caterer-dubai",
    "title": "How Far Ahead to Book a Caterer Dubai: 2026 Timeline Guide",
    "excerpt": "How far ahead to book a caterer in Dubai: lead times by event type, why peak season fills first, and the deadlines that actually cost you money.",
    "category": "Planning",
    "image": "/images/blog/how-far-ahead-book-caterer-dubai-hero.webp",
    "hub": "menus-dietary",
    "date": "August 2026"
  },
  {
    "slug": "/blog/desert-dinner-party-dubai",
    "title": "Desert Dinner Party Dubai: Get-Togethers & Dining in the Dunes",
    "excerpt": "Planning a desert dinner party in Dubai: licensed camps vs private dune sites, what can be cooked out there, get-together and BBQ formats, season, and honest starting prices.",
    "category": "Desert",
    "image": "/images/blog/desert-dinner-party-dubai-hero.webp",
    "hub": "outdoor",
    "date": "August 2026"
  },
  {
    "slug": "/blog/ramadan-iftar-catering-trends-2026",
    "title": "Ramadan Iftar Catering Trends for 2026",
    "excerpt": "From grazing-style Iftar tables to zero-waste menus and modern Emirati flavours, here is what is shaping Ramadan catering in Dubai this year.",
    "category": "Ramadan",
    "image": "/images/blog/ramadan-iftar-catering-trends-2026-hero.webp",
    "hub": "seasonal",
    "date": "July 2026"
  },
  {
    "slug": "/blog/yacht-party-menu-ideas-dubai",
    "title": "Yacht Party Menu Ideas in Dubai",
    "excerpt": "Plan a stylish, seaworthy menu for your next Dubai Marina or Palm Jumeirah cruise with canapés, fresh seafood, and desserts that travel well.",
    "category": "Yachts",
    "image": "/images/blog/yacht-party-menu-ideas-dubai-hero.webp",
    "hub": "outdoor",
    "date": "July 2026"
  },
  {
    "slug": "/blog/how-much-does-private-chef-cost-dubai",
    "title": "How Much Does a Private Chef Cost in Dubai?",
    "excerpt": "A practical breakdown of private chef pricing in Dubai, the factors that move the cost, and how to get an accurate quote for your dinner.",
    "category": "Private Chef",
    "image": "/images/blog/how-much-does-private-chef-cost-dubai-hero.webp",
    "hub": "private-chef",
    "date": "July 2026"
  },
  {
    "slug": "/blog/corporate-catering-full-service-vs-drop-off",
    "title": "Corporate Catering: Full-Service vs Drop-Off",
    "excerpt": "Compare drop-off and fully-coordinated catering by cost, setup, staffing, and guest experience so you can choose the right format.",
    "category": "Corporate",
    "image": "/images/blog/corporate-catering-full-service-vs-drop-off-hero.webp",
    "hub": "corporate",
    "date": "July 2026"
  },
  {
    "slug": "/blog/weekly-meal-prep-vs-full-time-chef-dubai",
    "title": "Weekly Meal Prep vs Hiring a Full-Time Chef in Dubai",
    "excerpt": "Compare weekly meal prep services and full-time private chefs in Dubai by cost, flexibility, vetting, and lifestyle fit so you can choose the right option.",
    "category": "Meal Prep",
    "image": "/images/blog/weekly-meal-prep-vs-full-time-chef-dubai-hero.webp",
    "hub": "private-chef",
    "date": "July 2026"
  },
  {
    "slug": "/blog/best-private-chef-birthday-dinner-dubai",
    "title": "Best Private Chef Birthday Dinner in Dubai: Menu Ideas, Costs & How to Book",
    "excerpt": "Plan a private chef birthday dinner in Dubai with menu ideas, indicative costs, booking tips, and answers to the most common host questions.",
    "category": "Birthday",
    "image": "/images/blog/best-private-chef-birthday-dinner-dubai-hero.webp",
    "hub": "celebrations",
    "date": "July 2026"
  },
  {
    "slug": "/blog/private-chef-palm-jumeirah-guide",
    "title": "Private Chef Palm Jumeirah: A Complete Guide to Dining at Home",
    "excerpt": "A practical guide to hiring a private chef in Palm Jumeirah, covering menus, service styles, indicative pricing, and how to book a curated dining experience at home.",
    "category": "Private Chef",
    "image": "/images/blog/private-chef-palm-jumeirah-guide-hero.webp",
    "hub": "private-chef",
    "date": "July 2026"
  },
  {
    "slug": "/blog/halal-private-dining-dubai-what-to-ask",
    "title": "Halal Private Dining in Dubai: What to Ask Before You Book",
    "excerpt": "A practical guide for Dubai hosts booking halal private dining, covering certification, cross-contamination, alcohol policy, sourcing, and indicative costs.",
    "category": "Halal",
    "image": "/images/blog/halal-private-dining-dubai-what-to-ask-hero.webp",
    "hub": "menus-dietary",
    "date": "July 2026"
  }
]

export const BLOG_HUBS: BlogHub[] = [
  {
    "slug": "private-chef",
    "title": "Private Chef Guides",
    "description": "Hiring, pricing, and getting the most from a private chef in Dubai.",
    "pillar": {
      "label": "Private Chef in Dubai",
      "url": "/private-chef-dubai"
    },
    "intro": "Everything on hiring a private chef in Dubai — what it costs, how vetting and booking work, and how a chef at home compares to dining out. Start with our private chef service, then dig into the guides below."
  },
  {
    "slug": "corporate",
    "title": "Corporate & Team Catering",
    "description": "Office lunches, team dinners, galas and the formats that fit each.",
    "pillar": {
      "label": "Corporate Catering Dubai",
      "url": "/corporate"
    },
    "intro": "Planning food for a Dubai team or company event — drop-off vs full-service, live stations, canapés and plated galas. Our corporate catering service handles the delivery; these guides help you choose the format."
  },
  {
    "slug": "celebrations",
    "title": "Weddings, Parties & Celebrations",
    "description": "Weddings, birthdays, New Year and dinner parties, planned properly.",
    "pillar": {
      "label": "Wedding Catering Dubai",
      "url": "/wedding-catering-dubai"
    },
    "intro": "Menus, budgets and formats for weddings, birthdays, New Year and dinner parties in Dubai. Explore our wedding and event catering, then plan the details with the guides below."
  },
  {
    "slug": "seasonal",
    "title": "Ramadan & Seasonal Dining",
    "description": "Iftar at home and the seasonal calendar of Dubai entertaining.",
    "pillar": {
      "label": "Iftar Catering Dubai",
      "url": "/iftar-catering-dubai"
    },
    "intro": "Hosting through Ramadan and the Dubai seasonal calendar — iftar menus, timing and trends. Our iftar catering covers the service; these guides cover the planning."
  },
  {
    "slug": "outdoor",
    "title": "Outdoor & Destination Dining",
    "description": "Desert dinners, yacht spreads and dining beyond the villa.",
    "pillar": {
      "label": "Desert Dining Dubai",
      "url": "/desert-dining-dubai"
    },
    "intro": "Dining out in the dunes or on the water — desert dinners, yacht menus and the logistics of off-grid catering in Dubai. Start with desert dining, then read the guides below."
  },
  {
    "slug": "menus-dietary",
    "title": "Menus, Brunch & Dietary",
    "description": "Brunch, plant-based, halal and how to plan a menu that fits everyone.",
    "pillar": {
      "label": "Our Menus",
      "url": "/menus"
    },
    "intro": "Building the right menu for your guests in Dubai — brunch spreads, plant-based and halal dining, and how far ahead to plan. Browse our menus, then dive into the guides below."
  }
]

/** In-body link phrases, sorted longest-first so specific phrases win over generic ones. */
export const CONTEXTUAL_LINKS: ContextualLink[] = [
  {
    "phrase": "desert dining in Dubai",
    "url": "/desert-dining-dubai"
  },
  {
    "phrase": "desert dining",
    "url": "/desert-dining-dubai"
  },
  {
    "phrase": "BBQ party planning guide",
    "url": "/bbq-catering-dubai"
  },
  {
    "phrase": "BBQ catering",
    "url": "/bbq-catering-dubai"
  },
  {
    "phrase": "catering packages",
    "url": "/catering-packages-dubai"
  },
  {
    "phrase": "Family Feast package",
    "url": "/family-feast-package-dubai"
  },
  {
    "phrase": "proposal dinner",
    "url": "/proposal-dinner-dubai"
  },
  {
    "phrase": "private chef prices",
    "url": "/private-chef-prices-dubai"
  },
  {
    "phrase": "private chef",
    "url": "/private-chef-dubai"
  },
  {
    "phrase": "wedding catering",
    "url": "/wedding-catering-dubai"
  },
  {
    "phrase": "corporate catering",
    "url": "/corporate"
  },
  {
    "phrase": "vegan catering",
    "url": "/vegan-catering-dubai"
  },
  {
    "phrase": "plant based catering",
    "url": "/vegan-catering-dubai"
  },
  {
    "phrase": "grazing table",
    "url": "/grazing-table-dubai"
  },
  {
    "phrase": "cocktail reception",
    "url": "/cocktail-party-catering-dubai"
  },
  {
    "phrase": "romantic dinner",
    "url": "/romantic-dinner-dubai"
  },
  {
    "phrase": "catering in Dubai",
    "url": "/catering-dubai"
  }
]
  .sort((a, b) => b.phrase.length - a.phrase.length)

const EXTRA_PILLARS: Record<string, BlogPillar[]> = {
  "/blog/desert-dinner-party-dubai": [
    {
      "label": "BBQ Catering Dubai",
      "url": "/bbq-catering-dubai"
    },
    {
      "label": "Catering Packages",
      "url": "/catering-packages-dubai"
    }
  ],
  "/blog/how-much-does-private-chef-cost-dubai": [
    {
      "label": "Private Chef Prices",
      "url": "/private-chef-prices-dubai"
    }
  ],
  "/blog/how-to-hire-a-private-chef-dubai": [
    {
      "label": "Private Chef Prices",
      "url": "/private-chef-prices-dubai"
    }
  ],
  "/blog/private-chef-date-night-dubai": [
    {
      "label": "Date Night Package",
      "url": "/date-night-package-dubai"
    },
    {
      "label": "Romantic Dinner Dubai",
      "url": "/romantic-dinner-dubai"
    }
  ],
  "/blog/vegan-catering-dubai-guide": [
    {
      "label": "Vegan Catering Dubai",
      "url": "/vegan-catering-dubai"
    }
  ],
  "/blog/wedding-catering-cost-dubai": [
    {
      "label": "Wedding Catering Dubai",
      "url": "/wedding-catering-dubai"
    }
  ],
  "/blog/grazing-table-vs-buffet-dubai": [
    {
      "label": "Grazing Table Dubai",
      "url": "/grazing-table-dubai"
    }
  ],
  "/blog/brunch-at-home-dubai": [
    {
      "label": "Brunch Catering Dubai",
      "url": "/brunch-catering-dubai"
    }
  ],
  "/blog/yacht-party-menu-ideas-dubai": [
    {
      "label": "Yacht Catering",
      "url": "/yachts"
    }
  ],
  "/blog/nye-party-catering-dubai": [
    {
      "label": "New Year Catering",
      "url": "/new-year-catering-dubai"
    }
  ]
}

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

export function getHub(slug: string): BlogHub | undefined {
  return BLOG_HUBS.find((h) => h.slug === slug)
}

export function postsInHub(hubSlug: string): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.hub === hubSlug)
}

/** Related posts: same-hub siblings first, then fill from the rest, excluding the current post. */
export function relatedPosts(slug: string, n = 3): BlogPost[] {
  const current = getPost(slug)
  const siblings = current ? BLOG_POSTS.filter((p) => p.hub === current.hub && p.slug !== slug) : []
  const others = BLOG_POSTS.filter((p) => p.slug !== slug && !siblings.includes(p))
  return [...siblings, ...others].slice(0, n)
}

/** Money-page links for a post: its hub pillar plus any post-specific pillars (deduped). */
export function pillarsFor(slug: string): BlogPillar[] {
  const post = getPost(slug)
  const hub = post ? getHub(post.hub) : undefined
  const list = [...(hub ? [hub.pillar] : []), ...(EXTRA_PILLARS[slug] ?? [])]
  const seen = new Set<string>()
  return list.filter((p) => (seen.has(p.url) ? false : (seen.add(p.url), true)))
}
