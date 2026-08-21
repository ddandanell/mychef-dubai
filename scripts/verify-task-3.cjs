const fs = require('fs');
const path = require('path');

const DIST_ROOT = path.join(__dirname, '..', 'dist');

const pages = [
  {
    route: '/',
    title: 'Private Chef Dubai & Luxury Catering | Villas, Yachts & Events | myCHEF',
    meta: 'Hire a vetted private chef in Dubai for villas, yachts & homes. Bespoke menus, halal-first, full service. Quote in 15 minutes during business hours.',
    h1: 'Private Chef & Luxury Catering in Dubai — Brought to Your Villa, Yacht or Home',
  },
  {
    route: '/private-chef-dubai',
    title: 'Private Chef Dubai | Hire a Personal Chef at Home | From AED 700pp | myCHEF',
    meta: 'Hire a vetted private chef in Dubai for villas, yachts & homes. Bespoke menus, halal-first, full service. Quote in 15 minutes during business hours.',
    h1: 'Book a Private Chef in Dubai',
  },
  {
    route: '/catering-dubai',
    title: 'Luxury Catering Dubai | Buffet, BBQ & Plated | From AED 90pp | myCHEF',
    meta: 'Luxury event catering in Dubai for weddings, corporate events & private parties. Bespoke menus, vetted chefs, halal-first. Request a tailored quote.',
    h1: 'Luxury Catering Dubai for Events & Private Celebrations',
  },
  {
    route: '/corporate',
    title: 'Corporate Catering Dubai | Office Lunches & Events | From AED 90pp | myCHEF',
    meta: 'Corporate catering in Dubai for offices, conferences, product launches & galas. VAT/TRN invoicing, halal sourcing, dedicated account manager. Get a quote.',
    h1: 'Corporate Catering Dubai — Office, Boardroom & Events',
  },
  {
    route: '/events',
    title: 'Event Catering Dubai | Birthdays, Weddings & Corporate | From AED 120pp | myCHEF',
    meta: 'Premium event catering in Dubai for birthdays, weddings, engagements & private parties. Bespoke menus, vetted chefs, full service. Request a tailored quote.',
    h1: 'Event Catering Dubai — Bespoke Menus for Every Celebration',
  },
  {
    route: '/villas-private-residences',
    title: 'Villa Catering Dubai | Private Chef for Palm Jumeirah & Emirates Hills | myCHEF',
    meta: 'Private chef and villa catering in Dubai for Palm Jumeirah, Emirates Hills & Arabian Ranches. Bespoke menus, vetted chefs, full setup. Get a quote.',
    h1: 'Villa Catering & Private Chef Dubai — Brought to Your Home',
  },
  {
    route: '/yachts',
    title: 'Yacht Catering Dubai | Menus for 2–50 Guests | From AED 150pp | myCHEF',
    meta: 'Yacht catering and private chef service in Dubai Marina, Palm Jumeirah & JBR. Bespoke menus, seafood & canapés, full crew. Request a tailored quote.',
    h1: 'Yacht Catering Dubai — Private Chef On Board',
  },
  {
    route: '/luxury-dining-experiences',
    title: 'Private Dining Dubai | Luxury Chef Experiences in Villas & Penthouses | myCHEF',
    meta: 'Luxury private dining in Dubai with a private chef at your villa, penthouse or yacht. Bespoke tasting menus, full service, halal options. Request a custom menu.',
    h1: 'Luxury Private Dining Dubai — Fine Dining at Home',
  },
  {
    route: '/party-catering-dubai',
    title: 'Party Catering Dubai | Canapés, Grazing & Live Stations | myCHEF',
    meta: 'Party catering in Dubai for birthdays, bachelor/bachelorette parties, baby showers & private celebrations. Bespoke menus, canapés, full service. Get a quote.',
    h1: 'Party Catering Dubai — Birthdays, Yacht & Villa Celebrations',
  },
  {
    route: '/wedding-catering-dubai',
    title: 'Wedding Catering Dubai | Villa, Garden & Venue Receptions | myCHEF',
    meta: 'Luxury wedding catering in Dubai for villas, gardens & venues. Plated or buffet, multi-cuisine menus, halal, full service. Request a custom proposal.',
    h1: 'Wedding Catering Dubai: Villa, Garden & Venue Receptions',
  },
  {
    route: '/birthday-catering-dubai',
    title: 'Birthday Catering Dubai | Kids & Adults | Menus & Prices | myCHEF',
    meta: 'Birthday party catering in Dubai for kids & adults. Themed menus, custom cakes, grazing tables, mocktail bars & villa service. Get a tailored quote.',
    h1: 'Birthday Catering Dubai: Kids, Adults & Villa Celebrations',
  },
  {
    route: '/private-chef-prices-dubai',
    title: 'Private Chef Prices Dubai | AED 700–950 Per Person | myCHEF',
    meta: 'See 2026 private chef prices in Dubai: per-person costs for 2–20 guests, what\'s included, and what affects the price. Get a tailored quote in 15 minutes.',
    h1: 'Private Chef Prices Dubai: Per-Person Cost Guide',
  },
  {
    route: '/catering-packages-dubai',
    title: 'Catering Packages Dubai | From AED 1,200 | Private Chef & Events | myCHEF',
    meta: 'Ready-to-book catering packages in Dubai for date nights, birthdays, family feasts & corporate dinners. From AED 1,200. Vetted chefs included. Request your quote.',
    h1: 'Catering Packages Dubai',
  },
  {
    route: '/cuisines-dubai',
    title: 'Catering Dubai by Cuisine | Italian, Arabic, Indian & More | myCHEF',
    meta: 'Explore catering by cuisine in Dubai: Italian, Arabic, Indian, Mediterranean, Asian, sushi, BBQ, vegan, vegetarian, halal and healthy. Bespoke menus, vetted chefs, tailored quotes.',
    h1: 'Catering Dubai by Cuisine',
  },
  {
    route: '/dubai-catering-prices-guide',
    title: 'How Much Does Catering Cost in Dubai? | 2026 Price Guide | myCHEF',
    meta: '2026 Dubai catering prices per person for private chefs, canapés, buffet, BBQ & yacht events. See what drives cost and request an itemised quote.',
    h1: 'Dubai Catering Prices Guide: What to Budget for Your Event',
  },
];

function decodeHtmlEntities(str) {
  if (!str) return str;
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&ndash;/g, '–')
    .replace(/&mdash;/g, '—');
}

function extractFromHtml(htmlPath) {
  const html = fs.readFileSync(htmlPath, 'utf-8');

  const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
  const title = titleMatch ? decodeHtmlEntities(titleMatch[1].trim()) : null;

  const metaMatch = html.match(/<meta[^>]+name=["']description["'][^>]+content="([^"]*)"[^>]*>/i)
    || html.match(/<meta[^>]+content="([^"]*)"[^>]+name=["']description["'][^>]*>/i);
  const meta = metaMatch ? decodeHtmlEntities(metaMatch[1].trim()) : null;

  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  let h1 = null;
  if (h1Match) {
    h1 = decodeHtmlEntities(
      h1Match[1]
        .replace(/<[^>]+>/g, '')
        .replace(/\s+/g, ' ')
        .trim()
    );
  }

  return { title, meta, h1 };
}

let allPassed = true;
const results = [];

for (const page of pages) {
  const htmlPath = page.route === '/'
    ? path.join(DIST_ROOT, 'index.html')
    : path.join(DIST_ROOT, page.route, 'index.html');

  if (!fs.existsSync(htmlPath)) {
    console.error(`MISSING: ${htmlPath}`);
    allPassed = false;
    results.push({ route: page.route, exists: false });
    continue;
  }

  const extracted = extractFromHtml(htmlPath);
  const titleOk = extracted.title === page.title;
  const metaOk = extracted.meta === page.meta;
  const h1Ok = extracted.h1 === page.h1;
  const passed = titleOk && metaOk && h1Ok;

  if (!passed) allPassed = false;

  const result = {
    route: page.route,
    exists: true,
    passed,
    title: { ok: titleOk, expected: page.title, actual: extracted.title },
    meta: { ok: metaOk, expected: page.meta, actual: extracted.meta },
    h1: { ok: h1Ok, expected: page.h1, actual: extracted.h1 },
  };
  results.push(result);

  console.log(`${passed ? '✓' : '✗'} ${page.route}`);
  if (!titleOk) {
    console.log(`  title mismatch:`);
    console.log(`    expected: ${page.title}`);
    console.log(`    actual:   ${extracted.title}`);
  }
  if (!metaOk) {
    console.log(`  meta mismatch:`);
    console.log(`    expected: ${page.meta}`);
    console.log(`    actual:   ${extracted.meta}`);
  }
  if (!h1Ok) {
    console.log(`  h1 mismatch:`);
    console.log(`    expected: ${page.h1}`);
    console.log(`    actual:   ${extracted.h1}`);
  }
}

const reportPath = path.join(__dirname, '..', '.superpowers', 'sdd', 'task-3-verification.json');
fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, JSON.stringify({ allPassed, results }, null, 2));
console.log(`\n${allPassed ? 'All pages passed verification.' : 'Some pages failed verification.'}`);
console.log(`Report written to ${reportPath}`);
process.exit(allPassed ? 0 : 1);
