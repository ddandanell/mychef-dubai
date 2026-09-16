// Centralized fixes for URLs flagged by the Ryze technical audit on 2026-09-14.
// These override only search-result titles and descriptions; page headings and body copy stay unchanged.

export interface SeoAuditOverride {
  title?: string
  description?: string
}

export const SEO_AUDIT_OVERRIDES: Record<string, SeoAuditOverride> = {
  '/events': {
    title: 'Event Catering Dubai | Weddings & Corporate | myCHEF',
    description: 'Event catering in Dubai for weddings, birthdays and corporate events. Menus, chefs, staff, setup and clear-down, from AED 120 per person.',
  },
  '/wedding-catering-menu-planning-dubai': {
    title: 'Wedding Menu Planning Dubai | Tastings | myCHEF',
  },
  '/blog/corporate-event-catering-ideas-dubai': {
    title: 'Corporate Event Catering Ideas Dubai | myCHEF',
  },
  '/bbq-catering-dubai': {
    title: 'BBQ Catering Dubai | Live Grills & Stations | myCHEF',
  },
  '/conference-catering-dubai': {
    title: 'Conference Catering Dubai | Working Lunches | myCHEF',
    description: 'Conference catering in Dubai with coffee breaks and working lunches. Drop-off from AED 90 per person; staffed buffets from AED 120.',
  },
  '/locations': {
    title: 'Catering Across Dubai | Areas We Serve | myCHEF',
  },
  '/faq': {
    title: 'Private Chef & Catering FAQ Dubai | myCHEF',
  },
  '/locations/jlt': {
    title: 'Private Chef JLT Dubai | Home & Office | myCHEF',
  },
  '/mediterranean-catering-dubai': {
    title: 'Mediterranean Catering Dubai | Menus | myCHEF',
  },
  '/wellness-meal-prep-dubai': {
    title: 'Healthy Meal Prep Dubai | Private Chef | myCHEF',
  },
  '/blog/wedding-catering-cost-dubai': {
    title: 'Wedding Catering Cost Dubai 2026 | myCHEF',
  },
  '/wedding-catering-checklist-dubai': {
    title: 'Wedding Catering Checklist Dubai | myCHEF',
  },
  '/new-year-catering-dubai': {
    title: 'New Year Catering Dubai | NYE Parties | myCHEF',
  },
  '/italian-catering-dubai': {
    title: 'Italian Catering Dubai | Pasta & Pizza | myCHEF',
  },
  '/christmas-catering-dubai': {
    title: 'Christmas Catering Dubai | Festive Menus | myCHEF',
  },
  '/engagement-catering-dubai': {
    title: 'Engagement Party Catering Dubai | myCHEF',
  },
  '/allergy-safe-catering-dubai': {
    title: 'Allergy-Safe Catering Dubai | myCHEF',
  },
  '/nursery-catering-dubai': {
    title: 'Nursery Catering Dubai | Early Years Meals | myCHEF',
  },
  '/catering-cost-calculator-dubai': {
    title: 'Catering Cost Calculator Dubai | myCHEF',
  },
  '/diwali-catering-dubai': {
    title: 'Diwali Catering Dubai | Indian Festive Menus | myCHEF',
  },
  '/institutional-catering-dubai': {
    title: 'Institutional Catering Dubai | Schools & Hospitals | myCHEF',
  },
  '/dubai-catering-prices-guide': {
    title: 'Catering Prices Dubai 2026 | Cost Guide | myCHEF',
  },
  '/baby-shower-catering-dubai': {
    title: 'Baby Shower Catering Dubai | Grazing & Mocktails | myCHEF',
  },
  '/staff-meals-catering-dubai': {
    title: 'Staff Meals Catering Dubai | Daily Team Meals | myCHEF',
  },
  '/iftar-catering-dubai': {
    title: 'Iftar Catering Dubai | Ramadan Menus | myCHEF',
  },
  '/ramadan-catering-dubai': {
    title: 'Ramadan Catering Dubai | Iftar & Suhoor | myCHEF',
  },
  '/blog/corporate-catering-full-service-vs-drop-off': {
    title: 'Full Service vs Drop Off Catering Dubai | myCHEF',
  },
  '/blog/nut-free-halal-nursery-meals-dubai': {
    title: 'Nut-Free Nursery Meals Dubai | Halal Guide | myCHEF',
  },
  '/brand-activation-catering-dubai': {
    title: 'Brand Activation Catering Dubai | Pop-Ups | myCHEF',
  },
  '/best-catering-companies-dubai': {
    title: 'Best Catering Companies Dubai 2026 | myCHEF',
  },
  '/corporate-dinner-package-dubai': {
    title: 'Corporate Dinner Package Dubai | myCHEF',
  },
  '/live-cooking-stations-dubai': {
    title: 'Live Cooking Stations Dubai | myCHEF',
  },
  '/partners': {
    title: 'Dubai Catering Partners | myCHEF',
  },
  '/referral-programme': {
    title: 'Referral Programme Dubai | myCHEF',
  },
  '/trust-and-programs': {
    title: 'myCHEF Standards & Booking Protection',
  },
  '/villas-private-residences': {
    title: 'Villa Private Chef Dubai | Home Dining | myCHEF',
  },
  '/business-lunch-catering-dubai': {
    description: 'Business lunch catering in Dubai for boardrooms and clients. Drop-off from AED 90 per person; plated dining AED 700–950, with VAT invoicing.',
  },
  '/chefs/marco-italian-chef': {
    description: 'Italian private chef Marco Rossi brings 15+ years of Italian and Mediterranean cooking to Dubai villas, yachts and homes.',
  },
  '/contact': {
    description: 'Contact myCHEF Dubai for private chefs, catering, partnerships or press. WhatsApp is usually fastest; replies typically arrive within 15 minutes.',
  },
  '/private-chef-dubai/how-it-works': {
    description: 'See how myCHEF matches a managed private chef in Dubai: your brief, chef match, food profile, onboarding and ongoing feedback.',
  },
  '/weekly-meal-prep-dubai': {
    description: 'Weekly meal prep in Dubai: a private chef cooks a week of food in your kitchen in four hours, from AED 900. Halal-first and built around your diet.',
  },
  '/how-it-works': {
    description: 'Book a private chef in Dubai for one evening: share the occasion, choose the menu, confirm the chef and enjoy the night at home.',
  },
  '/gala-dinner-catering-dubai': {
    description: 'Gala dinner catering in Dubai for awards and banquets. Staffed buffets from AED 120 per person; plated dining AED 700–950. Licensed venues only.',
  },
}
