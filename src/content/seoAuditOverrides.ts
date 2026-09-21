// Centralized fixes for URLs flagged by the Ryze technical audit on 2026-09-14.
// These override only search-result titles and descriptions; page headings and body copy stay unchanged.

export interface SeoAuditOverride {
  title?: string
  description?: string
}

export const SEO_AUDIT_OVERRIDES: Record<string, SeoAuditOverride> = {
  '/events': {
    title: 'Event Catering Dubai | Weddings & Parties | myCHEF',
    description: 'Event catering in Dubai for weddings, birthdays and private parties. Menus, chefs, staff, setup and clear-down, from AED 120 per person.',
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
    title: 'Catering Near Me Dubai | Areas We Serve | myCHEF',
  },
  '/faq': {
    title: 'Catering FAQ Dubai | myCHEF',
  },
  '/locations/jlt': {
    title: 'Private Chef JLT Dubai | Home & Office | myCHEF',
  },
  '/mediterranean-catering-dubai': {
    title: 'Mediterranean Catering Dubai | myCHEF',
  },
  '/wellness-meal-prep-dubai': {
    title: 'Healthy Meal Prep Dubai | Week in Your Kitchen | myCHEF',
    description:
      'Healthy meal prep Dubai: a chef cooks a week of food in your kitchen, AED 900 a session. Labelled, fridge stacked, kitchen cleared.',
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
    title: 'Italian Catering Dubai | myCHEF',
  },
  '/christmas-catering-dubai': {
    title: 'Christmas Catering Dubai | myCHEF',
  },
  '/engagement-catering-dubai': {
    title: 'Engagement Catering Dubai | Two Families & a Toast | myCHEF',
  },
  '/allergy-safe-catering-dubai': {
    title: 'Allergy Safe Catering Dubai | myCHEF',
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
    title: 'Corporate Dinner Package Dubai | 10–15 Guests | myCHEF',
    description:
      'Corporate dinner package Dubai: AED 4,500 for 10 to 15 guests, chef and service staff sized to the table. VAT invoice. Not a dinner cruise.',
  },
  '/live-cooking-stations-dubai': {
    title: 'Live Cooking Stations Dubai | myCHEF',
  },
  '/partners': {
    title: 'Partners | myCHEF',
  },
  '/referral-programme': {
    title: 'Referral Programme Dubai | myCHEF',
  },
  '/trust-and-programs': {
    title: 'myCHEF Standards & Booking Protection',
  },
  '/villas-private-residences': {
    title: 'Villa Chef Dubai | Home Dining | myCHEF',
  },
  '/business-lunch-catering-dubai': {
    description: 'Business lunch catering in Dubai for boardrooms and clients. Drop-off from AED 90 per person; plated dining AED 700–950, with VAT invoicing.',
  },
  '/chefs/marco-italian-chef': {
    description: 'Italian private chef Marco Rossi cooks Italian and Mediterranean menus in Dubai villas, yachts and homes.',
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

  // Ryze Technical Audit 2026-09-21 — titles 50–60, descriptions 120–155
  '/chefs-table-dubai': {
    title: 'Chefs Table Dubai | A Tasting Menu at Home | myCHEF',
    description:
      'Chefs table Dubai at home: a multi-course tasting cooked in front of 2–12 guests. Chef-led plated dining AED 700–950 per person, with clear-down.',
  },
  '/locations/jbr': {
    title: 'Private Chef JBR | Beachfront Apartment Homes | myCHEF',
    description:
      'Private chef JBR for beach apartments and nearby villas. Menu, cooking in your kitchen, service and clear-down. Tell us the date and tower.',
  },
  '/desert-dining-dubai': {
    title: 'Desert Dining Dubai | A Private Chef Table | myCHEF',
    description:
      'Desert dining Dubai: a private chef cooks at a desert table you book. Chef-led plated dining AED 700–950 per person, with service and clear-down.',
  },
  '/bar-services-dubai': {
    title: 'Bar Services Dubai | Bartender, Setup, Clear-down | myCHEF',
    description:
      'Bar services Dubai: bartender, mobile bar and mocktails. Cocktails only where the venue is licensed. Setup, service and clear-down on one quote.',
  },
  '/sushi-catering-dubai': {
    title: 'Sushi Catering Dubai | Platters or Counter | myCHEF',
    description:
      'Sushi catering Dubai: live counter or chilled platters. Ice time, service and clear-down so you stay a guest at your table.',
  },
  '/locations/difc': {
    title: 'Private Chef DIFC | Apartments and Offices | myCHEF',
    description:
      'Private chef DIFC for apartments, offices and nearby homes. Menu, cooking on site, service and clear-down. Tell us the date and address.',
  },
  '/eid-catering-dubai': {
    title: 'Eid Catering Dubai | Home, Majlis and Table | myCHEF',
    description:
      'Eid catering Dubai for Eid al-Fitr and Eid al-Adha at home or a majlis. Halal menus, ouzi when needed. Buffet from AED 120. Itemised quote.',
  },
  '/chef-training-academy': {
    title: 'Chef Training Dubai | Villa Kitchen Skills | myCHEF',
    description:
      'Chef training Dubai for private dining: villa kitchens, food safety, plating and halal practice. Foundation from AED 2,500. Apply for the next intake.',
  },
  '/blog': {
    title: 'Private Chef and Catering Guides in Dubai | myCHEF',
    description:
      'The myCHEF Dubai blog: private chef and catering guides, published prices, and how a night is actually run. Written for hosts, not a keyword list.',
  },
  '/halal-catering-dubai': {
    title: 'Halal Catering Dubai | Halal Meat Standard | myCHEF',
    description:
      'Halal catering Dubai with halal meat as standard. Menus, service and clear-down so you stay a guest at your own table.',
  },
  '/grazing-table-dubai': {
    title: 'Grazing Table Dubai | Built On Site in the Room | myCHEF',
    description:
      'Grazing table Dubai: cheeses, breads, fruit and a styled table, built on site and packed down. Send the date, guest count and venue.',
  },
  '/menus': {
    title: 'Catering Menus Dubai | Samples Then a Quote | myCHEF',
    description:
      'Catering menus Dubai start as samples. Tell us the occasion and the kitchen. We rewrite the menu, match a chef and send an itemised quote.',
  },
  '/vegan-catering-dubai': {
    title: 'Vegan Catering Dubai | Plant-Based Menu Night | myCHEF',
    description:
      'Vegan catering Dubai: plant-based menus cooked on site, service and clear-down so you stay a guest at your own table.',
  },
  '/mychef-membership': {
    title: 'myCHEF Membership | 12-Month Locked Rates | myCHEF',
    description:
      'myCHEF membership locks a household rate for 12 months. The chef is still quoted separately. Silver, Gold and Platinum sit on the founding offer page.',
  },
  '/corporate': {
    title: 'Corporate Catering Dubai | Offices and Events | myCHEF',
    description:
      'Corporate catering Dubai for offices, boardrooms and company events. Drop-off from AED 90 per person. Compare office, lunch, conference and event packages.',
  },
  '/full-time-private-chef-dubai': {
    title: 'Full Time Private Chef Dubai | No Payroll Job | myCHEF',
    description:
      'Full time private chef Dubai: four to six days a week, priced per visit. You do not employ the chef. Groceries at receipts. VAT 5%.',
  },
  '/catering-packages-dubai': {
    title: 'Catering Packages Dubai | Four Published Totals | myCHEF',
    description:
      'Catering packages Dubai: Date Night AED 1,200, Family AED 2,400, Birthday AED 3,600, Corporate Dinner AED 4,500. Chef, service and clear-down in the total.',
  },
  '/influencer-partnerships': {
    title: 'Food Influencer Partnerships Dubai | myCHEF',
    description:
      'Food influencer partnerships Dubai: a chef-led night for content, quoted as a booking. Terms in writing. We typically reply within 15 minutes.',
  },
  '/chefs/layla-middle-eastern-chef': {
    title: 'Arabic Private Chef Dubai | Layla Hassan | myCHEF',
    description:
      'Arabic private chef Dubai: Layla Hassan cooks mezze, grill and Iftar in your kitchen. Independent partner chef. You approve the profile first.',
  },
  '/private-cooking-classes-dubai': {
    title: 'Private Cooking Classes Dubai | Cook Then Eat | myCHEF',
    description:
      'Private cooking classes Dubai: a chef in your kitchen, you cook, then you eat. Couples, families and teams. Ingredients, kit and clear-down included.',
  },
  '/dessert-table-catering-dubai': {
    title: 'Dessert Table Catering Dubai | Styled Sweet Table | myCHEF',
    description:
      'Dessert table catering Dubai: cake, patisserie and a styled sweet table, built on site and packed down. Quoted with the rest of the catering.',
  },
  '/chefs/ahmed-executive-chef': {
    title: 'Ahmed Al-Rashid | Partner Chef Dubai | myCHEF',
    description:
      'Ahmed Al-Rashid is an independent partner chef in the myCHEF Dubai network. Classical French technique in villas, homes and plated corporate dinners.',
  },
  '/dubai-event-catering-price-guide-2026': {
    title: 'Event Catering Price Guide Dubai 2026 | myCHEF',
    description:
      'Event catering price guide Dubai 2026: wedding from AED 180, buffet from AED 120, plated AED 700–950. Same floors as the Catering hub. VAT extra.',
  },
  '/blog/how-much-does-private-chef-cost-dubai': {
    title: 'How Much Does a Private Chef Cost in Dubai? | myCHEF',
    description:
      'How much a private chef costs in Dubai: household visits from AED 750. A dinner for guests is catering, quoted per person. Itemised quotes, VAT 5%.',
  },
  '/arabic-catering-dubai': {
    title: 'Arabic Catering Dubai | Mezze, Grill, Ouzi | myCHEF',
    description:
      'Arabic catering Dubai: mezze, charcoal grills, ouzi, Emirati and Levantine dishes. Chefs cook on site and clear the room. Send date, guests and venue.',
  },
  '/founding-customer-offer': {
    title: 'myCHEF Founding Customer Offer | Rate Lock | myCHEF',
    description:
      'myCHEF founding customer offer: Silver from AED 2,500 a year, Gold from AED 5,500, Platinum from AED 12,000. Rate locked 12 months. Chef quoted separately.',
  },
  '/chefs/matteo-pastry-chef': {
    title: 'Private Pastry Chef Dubai | Matteo Moretti | myCHEF',
    description:
      'Private pastry chef Dubai: Matteo Moretti plates desserts and dessert tables in your kitchen. Independent partner chef. You approve the profile first.',
  },
}
