/**
 * Copy for /birthday-catering-dubai
 *
 * KEYWORD LOCK: "birthday catering dubai" (BIRTHDAY_KEYWORD_LOCKS.hub).
 * The hub covers adults, milestones, mixed-age, home and villa parties. It introduces
 * kids birthdays, the bookable package and chef-led birthday dinners, then hands each
 * to the page that owns it. It must not duplicate their menus, FAQs or detail.
 *
 * CLAIM DISCIPLINE (plan §47 — nothing below is published without support):
 *   - No "allergen-free" or "nut-free". Cross-contact is stated as a real limit.
 *   - Cake, bar, styling, furniture and staffing are described as quoted options,
 *     never as automatic inclusions.
 *   - No invented guest minimums or maximums.
 *   - No page-specific response-time promise.
 *   - myCHEF coordinates independent licensed culinary professionals — the copy must
 *     not present myCHEF as a food establishment.
 *   - The only price shown is the package published on /birthday-catering-package-dubai.
 */

import { BIRTHDAY_PATHS, BIRTHDAY_SUPPORT } from './birthdayCluster'

export interface Block {
  id: string
  h2: string
  paragraphs: string[]
  bullets?: string[]
  link?: { href: string; label: string }
  secondaryLink?: { href: string; label: string }
}

export const hero = {
  eyebrow: 'Birthday Catering Dubai',
  h1: 'Birthday Catering in Dubai for Every Kind of Celebration',
  subtitle:
    'Birthday party catering across Dubai — from an intimate dinner for eight to a villa party for a hundred. Tell us the date, the guest count and where it is happening, and we will shape the food and service around it.',
  primaryCta: 'Request a birthday quote',
  secondaryCta: 'WhatsApp us',
  utility: 'Homes · Villas · Gardens · Rooftops · Private venues',
}

/** §21 — three routes, so a visitor knows in seconds whether this is their kind of party. */
export const audiences = [
  {
    id: 'adults',
    title: 'Adult & milestone birthdays',
    text: 'Thirtieths, fortieths, fiftieths and the ones that matter more than the number. Seated dinners, standing receptions and everything between.',
    href: '#milestones',
    cta: 'Milestone celebrations',
    image: '/images/birthday-catering-dubai-hero.webp',
    alt: 'Guests seated at a candlelit birthday dinner table in a Dubai home. Experience concept shown.',
  },
  {
    id: 'family',
    title: 'Family & mixed-age parties',
    text: 'When grandparents, teenagers and toddlers eat at the same party, the menu has to work for all of them without becoming two separate events.',
    href: '#family',
    cta: 'Mixed-age parties',
    image: '/images/party-catering-dubai-hero.webp',
    alt: 'A family birthday gathering around a shared table in a Dubai garden. Experience concept shown.',
  },
  {
    id: 'kids',
    title: "Children's birthdays",
    text: 'Child-friendly portions, food parents are happy about, and presentation that suits the age group — planned on its own page.',
    href: BIRTHDAY_PATHS.kids,
    cta: 'Kids birthday catering',
    image: '/images/kids-birthday-catering-dubai-hero.webp',
    alt: "Colourful food laid out for a children's birthday party in Dubai. Experience concept shown.",
  },
]

/** §22 — formats at a glance. No invented minimums; "best for" guidance only. */
export interface FormatRow {
  format: string
  bestFor: string
  feel: string
  space: string
  staffing: string
  href: string
}

export const formats: FormatRow[] = [
  {
    format: 'Private chef dinner',
    bestFor: 'Small seated groups',
    feel: 'A restaurant evening at your table',
    space: 'A usable kitchen',
    staffing: 'Chef, service where wanted',
    href: BIRTHDAY_SUPPORT.privateChef,
  },
  {
    format: 'Plated dinner',
    bestFor: 'Seated celebrations with a running order',
    feel: 'Formal, timed around speeches and cake',
    space: 'Seating for everyone, prep area',
    staffing: 'Highest — service scales with guests',
    href: BIRTHDAY_SUPPORT.privateParty,
  },
  {
    format: 'Buffet',
    bestFor: 'Larger and mixed-age parties',
    feel: 'Relaxed, people eat when they are ready',
    space: 'A run of table space, room to queue',
    staffing: 'Moderate, plus replenishment',
    href: BIRTHDAY_SUPPORT.buffet,
  },
  {
    format: 'Canapés & finger food',
    bestFor: 'Standing receptions, shorter parties',
    feel: 'Everyone circulating, nobody seated',
    space: 'Little — no dining tables needed',
    staffing: 'Passing staff',
    href: BIRTHDAY_SUPPORT.canape,
  },
  {
    format: 'Live stations',
    bestFor: 'Parties that need something to gather around',
    feel: 'Interactive, cooked in front of guests',
    space: 'Power, ventilation, queue room',
    staffing: 'A chef per station',
    href: BIRTHDAY_SUPPORT.liveStations,
  },
  {
    format: 'Drop-off',
    bestFor: 'Informal parties you are hosting yourself',
    feel: 'Simple — you serve, you clear',
    space: 'Fridge and counter space',
    staffing: 'None',
    href: BIRTHDAY_SUPPORT.dropOff,
  },
]

export const blocks: Block[] = [
  {
    id: 'milestones',
    h2: 'Milestone Birthdays Need a Shape, Not Just a Menu',
    paragraphs: [
      'A milestone birthday is not a bigger dinner party. It has a moment in it — a toast, a speech, a cake carried in while someone tries to keep a straight face — and the food has to make room for that instead of competing with it.',
      'So the planning starts with the running order rather than the menu. Welcome bites while people arrive and nobody has quite relaxed yet. A main service that is either seated and paced, or standing and continuous, depending on whether anybody intends to speak. A gap before the cake so it does not collide with dessert. Something late for the people who stay, because at most good parties the last hour is the one people remember.',
      'What changes with the milestone is usually tone rather than technique. A thirtieth tends to run later and lean toward standing food and stations. A fiftieth or a seventieth is more often seated, quieter, and built around people actually talking to each other. Both can be excellent; they are just not the same evening, and a caterer who offers you the same plan for both has not asked enough questions.',
    ],
  },
  {
    id: 'family',
    h2: 'When Three Generations Are at the Same Party',
    paragraphs: [
      'Mixed-age birthdays are the hardest ones to cater well, and the failure is almost always the same: two entirely separate menus that make the children feel like an afterthought and leave the adults picking at food designed for someone else.',
      'The better approach is one menu with deliberate overlap. Dishes that work plain for a seven-year-old and dressed for an adult. Something familiar on the table so nobody goes hungry out of stubbornness. Portions and heights that a child can actually reach without a parent hovering.',
      'Timing matters as much as food here. Children eat earlier and leave earlier, so the running order usually front-loads what they need and lets the adult part of the evening open up afterwards — which is a planning decision, not a catering one, and worth deciding before the menu is written.',
    ],
    link: { href: BIRTHDAY_PATHS.kids, label: 'Kids birthday catering in Dubai' },
  },
  {
    id: 'private-chef-or-catering',
    h2: 'Private Chef or Event Catering?',
    paragraphs: [
      'For a smaller birthday, these are genuinely different products and people often ask for the wrong one.',
      'A private chef suits a seated group where dinner is the event: courses cooked in your kitchen and served at your table, at the pace of the conversation. It needs a workable kitchen and a guest list small enough that one chef can cook to order.',
      'Event catering suits everything that outgrows that — more guests than a home kitchen can plate at once, a standing format, multiple service points, or a venue with no kitchen at all. It brings its own equipment and staffing, and it is planned around the room rather than the stove.',
      'If you are between the two, the honest test is whether guests will be seated at one table at the same time. If yes, a chef is usually better value and a better evening. If no, you want catering.',
    ],
    link: { href: BIRTHDAY_PATHS.dinnerArticle, label: 'Read about chef-led birthday dinners' },
    secondaryLink: { href: BIRTHDAY_SUPPORT.chefVsCatering, label: 'Private chef vs catering' },
  },
  {
    id: 'villa-home',
    h2: 'Birthday Catering at Home, in a Villa or Outdoors',
    paragraphs: [
      'Most birthdays we cater in Dubai happen at somebody\'s home, and homes are where the practical problems live. Whether we can cook on site depends on the kitchen: counter space, oven capacity, whether the hob is usable while food is also being plated. Some villas have more than enough. Some apartments have a single oven and a galley, which changes the menu rather than ruling out the party.',
      'Outside, the constraints shift. Heat is the obvious one — for much of the year an outdoor buffet needs shade, timing and holding equipment, or it needs to be a format that does not sit out. Then there is power for stations, water access, where a vehicle can unload, how far the food has to travel from the van to the table, and whether the community has rules about noise, access hours or contractor entry.',
      'None of that is your problem to solve, but it is why we ask about the space before quoting. It is cheaper to design the menu around a small kitchen than to discover the limit on the night.',
    ],
    link: { href: BIRTHDAY_SUPPORT.villas, label: 'Catering in villas and private residences' },
  },
  {
    id: 'surprise',
    h2: 'Planning a Surprise Without Ruining It',
    paragraphs: [
      'Surprise birthdays work or fail on logistics rather than secrecy. The usual giveaway is not a leaked message — it is a catering van outside, or a stranger carrying equipment through the front door while the guest of honour is still home.',
      'So we plan arrival windows around the reveal instead of around convenience: when the team can load in, where equipment waits out of sight, how long setup actually takes, and when the cake appears. We can keep contact to one person and stay off the family group chat entirely.',
      'What we coordinate is the catering side of that timeline. Getting the guest of honour out of the house, and everything the other suppliers are doing, stays with whoever is running the surprise — we will work to that plan, but we are not running it.',
    ],
  },
  {
    id: 'menu-design',
    h2: 'How a Birthday Menu Gets Built',
    paragraphs: [
      'A birthday menu is assembled from six things: who is eating, what time of day it is, where it is happening, how it is being served, what people cannot eat, and the budget. Change any one and the menu changes with it.',
      'Time of day does more work than most people expect. A midday party wants lighter food and more of it early; an evening celebration wants something substantial in the middle and something salty near the end. An afternoon children\'s party and a fiftieth dinner can share a cuisine and still have almost nothing else in common.',
      'Cuisine direction is a starting point, not a constraint — Arabic and Lebanese spreads, Italian, Indian, Asian, Mediterranean and mixed international menus are all normal requests. What is genuinely available on your date depends on which culinary partners are free and what they cook well, and we would rather tell you that than promise everything.',
    ],
    link: { href: BIRTHDAY_SUPPORT.cuisines, label: 'Browse cuisines' },
    secondaryLink: { href: BIRTHDAY_SUPPORT.menus, label: 'Menu directions' },
  },
  {
    id: 'dietary',
    h2: 'Dietary Requirements and Allergies',
    paragraphs: [
      'Send dietary requirements with the guest count, not the week of the party. Vegetarian, vegan, gluten-aware and dairy-free guests are straightforward to plan for when the menu is being designed, and awkward to retrofit once it is signed off. Halal catering is the default expectation for most Dubai parties and is planned in from the start.',
      'Severe allergies are handled differently and more carefully. Tell us which guest and which allergen, and the requirement goes to the appointed culinary partner before the booking is confirmed — they assess the ingredients, the preparation environment and the cross-contact controls, and confirm whether the menu can be produced as asked. If the answer is no, you hear it before you pay.',
      'We do not describe a menu as allergen-free. A working event kitchen is a shared environment, and a badge that cannot be guaranteed is worth less than a clear account of what can and cannot be controlled.',
    ],
  },
  {
    id: 'cake-desserts',
    h2: 'Cakes, Dessert Tables and Sweet Service',
    paragraphs: [
      'A birthday cake is coordinated rather than assumed. Tell us early if you want one arranged, and we will confirm the design, flavour, inscription, serving size and delivery timing as part of the proposal — or work around a cake you are bringing yourself, which is just as common.',
      'On the day, the cake needs three things people forget to plan: somewhere cold to wait, a table it can be presented on, and someone to cut and serve it after the moment has passed. Cake cutting and plating is a service line, and it is worth including if you would rather not do it yourself in front of everyone.',
      'Dessert tables and dessert carts are quoted options, not standard inclusions. They earn their place at parties where dessert is meant to be a second event rather than a course.',
    ],
    link: { href: BIRTHDAY_SUPPORT.dessertTable, label: 'Dessert tables' },
    secondaryLink: { href: BIRTHDAY_SUPPORT.grazing, label: 'Grazing tables' },
  },
  {
    id: 'drinks',
    h2: 'Drinks, Mocktails and Bar Service',
    paragraphs: [
      'Welcome drinks, water service, juices, mocktail stations and barista coffee can all be arranged, and a mocktail bar does more for a party than people expect — it gives non-drinking guests something that feels made for them rather than left over.',
      'Alcohol is licence dependent and is not something myCHEF supplies. Where alcohol is being served, it is arranged through your venue or a licensed provider, and the rules that apply come from them and from the venue rather than from us. Bartenders and bar setup can be quoted as service alongside that.',
    ],
    link: { href: BIRTHDAY_SUPPORT.mocktail, label: 'Mocktail bar catering' },
    secondaryLink: { href: BIRTHDAY_SUPPORT.barServices, label: 'Bar services' },
  },
  {
    id: 'pricing',
    h2: 'What Actually Drives a Birthday Catering Price',
    paragraphs: [
      'Birthday catering in Dubai is quoted per event rather than from a fixed list, because guest count on its own tells you very little. Thirty people at a drop-off lunch and thirty people at a plated dinner with live stations are different jobs with different teams behind them.',
      'What moves the number: how many guests, how complex the menu is, the service format, how many staff the format needs, equipment and furniture hire, how easy the venue is to access, travel, whether a cake and bar are included, and how long the team is on site.',
      'What you get back is itemised — food, staffing, equipment, delivery and VAT as separate lines — so you can see what you are approving and compare it fairly against another quote.',
    ],
    link: { href: BIRTHDAY_SUPPORT.priceGuide, label: 'Dubai catering prices guide' },
    secondaryLink: { href: BIRTHDAY_SUPPORT.costCalculator, label: 'Catering cost calculator' },
  },
]

/** §36 — inclusions vs quoted options. Only lines operations can stand behind. */
export const quoteScope = {
  included: {
    label: 'Typically in a catering quote',
    items: [
      'Menu design and planning',
      'Ingredients and preparation',
      'Cooking by a licensed culinary partner',
      'Delivery to your address',
      'Presentation and setup of the food',
    ],
  },
  optional: {
    label: 'Quoted when you ask for it',
    items: [
      'Serving staff and on-site coordination',
      'Crockery, glassware, cutlery and linen',
      'Furniture and equipment hire',
      'Birthday cake, coordinated to your brief',
      'Dessert table or dessert cart',
      'Mocktail bar and bartender service',
      'Table styling',
      'Clear-down and waste removal',
    ],
  },
}

export const menuDirections = [
  {
    title: 'Relaxed sharing feast',
    text: 'Mezze, grills and salads down the middle of the table, replenished as it goes. Works for mixed ages and for parties where nobody wants to sit down for two hours.',
  },
  {
    title: 'Canapés then a plated dinner',
    text: 'Passed bites while guests arrive, then a seated menu paced around speeches and the cake. The format for a milestone that has a running order.',
  },
  {
    title: 'Family party with a children\'s tier',
    text: 'One menu with a plainer version of the same dishes for younger guests, served earlier — not a separate party running in the corner.',
  },
]

export const steps = [
  { n: '01', title: 'Send the details', text: 'Date, area, guest count, the kind of birthday it is, and any dietary requirements.' },
  { n: '02', title: 'Get a recommendation', text: 'We suggest a format and menu direction that suits the space and the group.' },
  { n: '03', title: 'Confirm menu and scope', text: 'Adjust the food, the staffing and the add-ons until it fits what you want to spend.' },
  { n: '04', title: 'Approve the quote', text: 'Scope and terms confirmed in writing before anything is committed.' },
  { n: '05', title: 'Final numbers', text: 'Confirm the final guest count and the timings for the day.' },
]

export const serviceAreas = [
  'Palm Jumeirah',
  'Dubai Hills',
  'Arabian Ranches',
  'Emirates Hills',
  'Jumeirah',
  'Dubai Marina',
  'Downtown Dubai',
]

/** §42 — ten unique questions. FAQPage markup mirrors exactly this list. */
export const faqs = [
  {
    q: 'How much does birthday catering cost in Dubai?',
    a: 'It is quoted per event. Guest count, menu complexity, service format, staffing, equipment, venue access and duration all move the figure, so the same headcount can produce very different quotes. One concrete option is the birthday package for 8–12 guests from AED 3,600. For wider ranges, use the Dubai catering prices guide or the cost calculator.',
  },
  {
    q: 'What is included in a birthday catering quote?',
    a: 'Menu design, ingredients, preparation by a licensed culinary partner, delivery and presentation of the food are the usual core. Serving staff, tableware, furniture, styling, cake, drinks, clear-down and waste removal are quoted when you ask for them, and appear as separate lines rather than being folded into a per-head figure.',
  },
  {
    q: 'What is the minimum guest count?',
    a: 'There is no single minimum, because it depends on the format. A chef cooking at your home suits very small groups, while a full buffet needs enough guests to justify the setup. Tell us your number and we will say which formats make sense for it.',
  },
  {
    q: 'How far ahead should I book birthday catering?',
    a: 'Two to four weeks is comfortable for most parties, and earlier between November and March when demand is highest. Short-notice bookings are often possible depending on the date and format — we will tell you honestly what is achievable rather than accept and improvise.',
  },
  {
    q: 'Can you provide separate menus for children and adults?',
    a: 'Yes, and usually the better answer is one menu with a plainer version of the same dishes for younger guests, served earlier. Fully separate menus are possible but often make children feel like an afterthought. Detailed children\'s menus and party boxes are on the kids birthday catering page.',
  },
  {
    q: 'Can you cater at a villa, apartment or outdoor venue?',
    a: 'Yes. What changes is the menu, not whether it can happen. Kitchen size, power, water, unloading distance, shade and community access rules all shape what can be cooked on site, so we ask about the space before quoting.',
  },
  {
    q: 'Can you handle allergies and dietary requirements?',
    a: 'Vegetarian, vegan, gluten-aware, dairy-free and halal requirements are planned into the menu when it is designed. For severe allergies, tell us which guest and which allergen — the requirement goes to the appointed culinary partner, who confirms whether it can be produced safely. We do not describe menus as allergen-free, because an event kitchen is a shared environment.',
  },
  {
    q: 'Do you provide cakes, staff, tableware and drinks?',
    a: 'All of them can be arranged, and none is automatic. Cake, serving staff, crockery and glassware, styling and mocktail or bar service are quoted options confirmed in your proposal. Alcohol is licence dependent and is arranged through your venue or a licensed provider rather than supplied by myCHEF.',
  },
  {
    q: 'Should I choose a private chef, a buffet or full-service catering?',
    a: 'The practical test is whether every guest will be seated at one table at the same time. If yes, a private chef usually gives a better evening. If not, you want catering — buffet for larger mixed-age parties, canapés for standing receptions, live stations when the party needs something to gather around.',
  },
  {
    q: 'What details do you need to prepare a quote?',
    a: 'Date, area or venue, adult and child guest counts, the kind of birthday it is, your preferred service format if you have one, dietary requirements, and whether you want a cake or bar included. A budget position helps too — telling us early means the first proposal is realistic rather than the third.',
  },
]

export const finalCta = {
  h2: 'Tell Us About the Birthday',
  body: 'The date, the area, how many adults and children, and what kind of celebration you have in mind. That is enough for a first proposal — and if something will not work in your space, we will say so before you have spent anything.',
  primary: 'Request a birthday quote',
  secondary: 'WhatsApp us',
}
