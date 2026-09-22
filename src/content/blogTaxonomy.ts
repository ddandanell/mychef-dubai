import { isParked } from '@/content/parkedUrls'
import { RYZE_BLOG_POSTS } from './ryzeBlogPosts'
// AUTO-GENERATED master blog taxonomy — the single source of truth for the blog.
// Consumed by Blog.tsx (index), BlogRelated.tsx (related module), HandoffPage.tsx
// (contextual links + related + schema) and BlogCategoryHub.tsx (topic hubs).
// Update article cards when their source titles or descriptions change.

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

const ALL_BLOG_POSTS: BlogPost[] = [
  {
    "slug": "/blog/dubai-school-food-rules-2026",
    "title": "Dubai School Food Rules 2026",
    "excerpt": "A practical checklist for verifying Dubai school food requirements, provider approvals, menus, allergen information and responsibilities in 2026.",
    "category": "Institutional",
    "image": "/images/blog/dubai-school-food-rules-2026-hero.webp",
    "hub": "institutional",
    "date": "September 2026"
  },
  {
    "slug": "/blog/nut-free-halal-nursery-meals-dubai",
    "title": "Nut-Free Nursery Meals Dubai",
    "excerpt": "Questions to ask about nut exclusions, allergen controls, halal sourcing and nursery meal documentation in Dubai before confirming a catering service.",
    "category": "Institutional",
    "image": "/images/blog/nut-free-halal-nursery-meals-dubai-hero.webp",
    "hub": "institutional",
    "date": "September 2026"
  },
  {
    "slug": "/blog/nursery-meals-vs-packed-lunch-dubai",
    "title": "Nursery Meals vs Packed Lunch Dubai",
    "excerpt": "Compare provided nursery meals and packed lunches in Dubai, including dietary communication, storage, parent information and service responsibilities.",
    "category": "Institutional",
    "image": "/images/blog/nursery-meals-vs-packed-lunch-dubai-hero.webp",
    "hub": "institutional",
    "date": "September 2026"
  },
  {
    "slug": "/blog/how-to-hire-a-private-chef-dubai",
    "title": "How to Hire a Private Chef Dubai",
    "excerpt": "How to hire a private chef in Dubai: define regular household cooking or a private dinner, review the chef match and confirm the written scope.",
    "category": "Private Chef",
    "image": "/images/blog/how-to-hire-a-private-chef-dubai-hero.webp",
    "hub": "private-chef",
    "date": "September 2026"
  },
  {
    "slug": "/blog/private-chef-vs-restaurant-dubai",
    "title": "Private Chef vs Restaurant Dubai",
    "excerpt": "Compare a private chef and restaurant dining in Dubai by setting, menu flexibility, service, preparation and the complete cost of your occasion.",
    "category": "Private Chef",
    "image": "/images/blog/private-chef-vs-restaurant-dubai-hero.webp",
    "hub": "private-chef",
    "date": "September 2026"
  },
  {
    "slug": "/blog/dinner-party-menu-ideas-dubai",
    "title": "Dinner Party Menu Ideas Dubai",
    "excerpt": "Dinner party menu ideas for Dubai homes: choose a balanced sequence of dishes, plan dietary needs and compare sharing or plated service.",
    "category": "Dinner Party",
    "image": "/images/blog/dinner-party-menu-ideas-dubai-hero.webp",
    "hub": "celebrations",
    "date": "September 2026"
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
    "title": "Brunch at Home Dubai: A Hosting Guide",
    "excerpt": "Plan brunch at home in Dubai with menu ideas, service options, kitchen checks and clear pricing questions for a relaxed morning with guests.",
    "category": "Brunch",
    "image": "/images/blog/brunch-at-home-dubai-hero.webp",
    "hub": "menus-dietary",
    "date": "September 2026"
  },
  {
    "slug": "/blog/vegan-catering-dubai-guide",
    "title": "Vegan Menu Ideas Dubai",
    "excerpt": "Vegan menu ideas for Dubai events, with balanced dishes, thoughtful service and clear questions about ingredients, allergies and complete pricing.",
    "category": "Vegan",
    "image": "/images/blog/vegan-catering-dubai-guide-hero.webp",
    "hub": "menus-dietary",
    "date": "September 2026"
  },
  {
    "slug": "/blog/corporate-event-catering-ideas-dubai",
    "title": "Corporate Event Catering Ideas Dubai",
    "excerpt": "Corporate event catering ideas for Dubai meetings, launches and celebrations. Compare menus, service styles, starting prices and practical venue needs.",
    "category": "Corporate",
    "image": "/images/blog/corporate-event-catering-ideas-dubai-hero.webp",
    "hub": "corporate",
    "date": "September 2026"
  },
  {
    "slug": "/blog/iftar-at-home-dubai",
    "title": "Iftar at Home Dubai: Menu and Planning Guide",
    "excerpt": "Plan iftar at home in Dubai with a considered menu, service timed for Maghrib and clear questions about preparation, dietary needs and pricing.",
    "category": "Ramadan",
    "image": "/images/blog/iftar-at-home-dubai-hero.webp",
    "hub": "seasonal",
    "date": "September 2026"
  },
  {
    "slug": "/blog/nye-party-catering-dubai",
    "title": "NYE Party Catering Dubai: Planning Guide",
    "excerpt": "Plan New Year’s Eve catering in Dubai, from canapés and live stations to midnight service, with venue access and complete pricing confirmed.",
    "category": "New Year",
    "image": "/images/blog/nye-party-catering-dubai-hero.webp",
    "hub": "celebrations",
    "date": "September 2026"
  },
  {
    "slug": "/blog/private-chef-date-night-dubai",
    "title": "Private Chef Date Night Dubai",
    "excerpt": "Plan a private chef date night in Dubai with a three-course dinner for two, menu preferences, kitchen checks and clear package inclusions.",
    "category": "Date Night",
    "image": "/images/blog/private-chef-date-night-dubai-hero.webp",
    "hub": "private-chef",
    "date": "September 2026"
  },
  {
    "slug": "/blog/grazing-table-vs-buffet-dubai",
    "title": "Grazing Table vs Buffet Dubai: How to Choose",
    "excerpt": "Compare grazing tables and buffets for Dubai events, including portions, service time, replenishment and the questions to ask before booking.",
    "category": "Party Food",
    "image": "/images/blog/grazing-table-vs-buffet-dubai-hero.webp",
    "hub": "celebrations",
    "date": "September 2026"
  },
  {
    "slug": "/blog/how-far-ahead-book-caterer-dubai",
    "title": "How Far in Advance to Book a Caterer Dubai",
    "excerpt": "How far ahead should you book a caterer in Dubai? Consider event size, menus, tastings, venue access and peak dates before confirming.",
    "category": "Planning",
    "image": "/images/blog/how-far-ahead-book-caterer-dubai-hero.webp",
    "hub": "menus-dietary",
    "date": "September 2026"
  },
  {
    "slug": "/blog/desert-dinner-party-dubai",
    "title": "Desert Dinner Party Dubai: Planning Guide",
    "excerpt": "Plan a desert dinner party in Dubai with practical guidance on venue permission, access, cooking facilities, menus and service.",
    "category": "Desert",
    "image": "/images/blog/desert-dinner-party-dubai-hero.webp",
    "hub": "outdoor",
    "date": "September 2026"
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
    "excerpt": "Yacht party menu ideas for Dubai: canapés, fresh seafood and desserts that travel well, planned for a Dubai Marina or Palm Jumeirah cruise.",
    "category": "Yachts",
    "image": "/images/blog/yacht-party-menu-ideas-dubai-hero.webp",
    "hub": "outdoor",
    "date": "July 2026"
  },
  {
    "slug": "/blog/how-much-does-private-chef-cost-dubai",
    "title": "How Much Does a Private Chef Cost in Dubai?",
    "excerpt": "How much does a private chef cost in Dubai? A breakdown of pricing, the factors that move the cost, and how to get an accurate quote for your dinner.",
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

/**
 * A parked post leaves every listing, not just the sitemap. The blog index and the topic pages
 * are built from this table, so filtering here is what stops a link surviving in the one place
 * that lists everything.
 */
export const BLOG_POSTS: BlogPost[] = [...RYZE_BLOG_POSTS, ...ALL_BLOG_POSTS].filter((post) => {
  const slug = post.slug.startsWith('/') ? post.slug : `/blog/${post.slug}`
  return !isParked(slug)
})

export const BLOG_HUBS: BlogHub[] = [
  {
    "slug": "private-chef",
    "title": "Private Chef Guides",
    "description": "Hiring a private chef in Dubai: what it costs, how vetting and booking work, and how a chef at home compares to dining out.",
    "pillar": {
      "label": "Private Chef in Dubai",
      "url": "/private-chef-dubai"
    },
    "intro": "Everything on hiring a private chef in Dubai — what it costs, how vetting and booking work, and how a chef at home compares to dining out. Start with our private chef service, then dig into the guides below."
  },
  {
    "slug": "institutional",
    "title": "Nurseries, Schools & Canteens",
    "description": "Institutional catering in Dubai: nursery meals, school-food rules, canteens and what a documented kitchen has to show you.",
    "pillar": {
      "label": "Institutional Catering Dubai",
      "url": "/institutional-catering-dubai"
    },
    "intro": "Nurseries, schools, hospitals and staff canteens — documented kitchens, municipal school-food rules, and how to brief a caterer. Start with institutional catering, then read the guides below."
  },
  {
    "slug": "corporate",
    "title": "Corporate & Team Catering",
    "description": "Corporate catering in Dubai: office lunches, team dinners and galas, drop-off against full service, and the format that fits each.",
    "pillar": {
      "label": "Corporate Catering Dubai",
      "url": "/corporate"
    },
    "intro": "Planning food for a Dubai team or company event — drop-off vs full-service, live stations, canapés and plated galas. Our corporate catering service handles the delivery; these guides help you choose the format."
  },
  {
    "slug": "celebrations",
    "title": "Weddings, Parties & Celebrations",
    "description": "Menus, budgets and formats for weddings, birthdays, New Year and dinner parties in Dubai, with the planning detail behind each.",
    "pillar": {
      "label": "Wedding Catering Dubai",
      "url": "/wedding-catering-dubai"
    },
    "intro": "Menus, budgets and formats for weddings, birthdays, New Year and dinner parties in Dubai. Explore our wedding and event catering, then plan the details with the guides below."
  },
  {
    "slug": "seasonal",
    "title": "Ramadan & Seasonal Dining",
    "description": "Hosting through Ramadan and the Dubai seasonal calendar: iftar and suhoor menus, timing, guest numbers and what books out early.",
    "pillar": {
      "label": "Iftar Catering Dubai",
      "url": "/iftar-catering-dubai"
    },
    "intro": "Hosting through Ramadan and the Dubai seasonal calendar — iftar menus, timing and trends. Our iftar catering covers the service; these guides cover the planning."
  },
  {
    "slug": "outdoor",
    "title": "Outdoor & Destination Dining",
    "description": "Dining beyond the villa in Dubai: desert dinners, yacht spreads and beach setups, and what changes once the kitchen is not fixed.",
    "pillar": {
      "label": "Desert Dining Dubai",
      "url": "/desert-dining-dubai"
    },
    "intro": "Dining out in the dunes or on the water — desert dinners, yacht menus and the logistics of off-grid catering in Dubai. Start with desert dining, then read the guides below."
  },
  {
    "slug": "menus-dietary",
    "title": "Menus, Brunch & Dietary",
    "description": "Planning a Dubai menu that fits everyone: brunch, plant-based, halal and allergy-aware, and how to brief a chef on all of it.",
    "pillar": {
      "label": "Our Menus",
      "url": "/menus"
    },
    "intro": "Building the right menu for your guests in Dubai — brunch spreads, plant-based and halal dining, and how far ahead to plan. Browse our menus, then dive into the guides below."
  }
]

/** Live, noindex spoke indexes. Kept off the sitemap; prerender still ships HTML so they do not 404. */
export const BLOG_TOPIC_HUB_PATHS = BLOG_HUBS.map((h) => `/blog/topic/${h.slug}`)

/** In-body link phrases, sorted longest-first so specific phrases win over generic ones. */
const ALL_CONTEXTUAL_LINKS: ContextualLink[] = [
  {
    "phrase": "nursery catering Dubai",
    "url": "/nursery-catering-dubai"
  },
  {
    "phrase": "school catering Dubai",
    "url": "/school-catering-dubai"
  },
  {
    "phrase": "hospital catering Dubai",
    "url": "/hospital-catering-dubai"
  },
  {
    "phrase": "canteen management Dubai",
    "url": "/canteen-management-dubai"
  },
  {
    "phrase": "institutional catering Dubai",
    "url": "/institutional-catering-dubai"
  },
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
    "url": "/private-chef-dubai/pricing"
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

/** In-article links follow the same rule as every other link: never to a parked page. */
export const CONTEXTUAL_LINKS: ContextualLink[] = ALL_CONTEXTUAL_LINKS.filter(
  (l) => !isParked(l.url),
)
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
      "url": "/private-chef-dubai/pricing"
    }
  ],
  "/blog/how-to-hire-a-private-chef-dubai": [
    {
      "label": "Private Chef Prices",
      "url": "/private-chef-dubai/pricing"
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
