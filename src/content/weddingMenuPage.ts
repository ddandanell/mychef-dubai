import { WEDDING_PATHS } from './weddingCluster'

export const MENU_KEYWORD_LOCK = {
  primary: 'wedding catering menu Dubai',
  title: 'Wedding Catering Menu Dubai | Ideas, Buffets & Tastings | myCHEF',
  description:
    'Plan a wedding catering menu in Dubai: buffet and plated ideas, Indian, Arabic and Lebanese menus, tastings, late-night food and mixed diets. Not a price list.',
} as const

export const menuHero = {
  src: '/images/wedding-menu-planning-guide-hero.webp',
  alt: 'Wedding menu tasting plates set on a villa table in Dubai. Experience concept shown.',
  width: 1920,
  height: 1280,
} as const

export const menuFormats = [
  {
    title: 'Plated wedding menu',
    body: 'Courses to the table. Staffing, timing and plate temperature matter more than on a buffet. Best when the room can sit everyone at once and you want one shared rhythm.',
  },
  {
    title: 'Wedding buffet menu',
    body: 'Choice without a long wait, if the stations are built for a wedding — not a conference lunch. Label diets. Keep hot food hot. Plan the queue.',
  },
  {
    title: 'Family-style sharing',
    body: 'Large dishes on the table. More social than plated, still styled. Works with Mediterranean, Italian and Middle Eastern kitchens.',
  },
  {
    title: 'Live stations',
    body: 'Chefs in front of the room. Pasta, carving, grill, chaat, sushi, shawarma, dessert. Theatre with a labour cost. Often one stage of a longer evening, not the whole meal.',
  },
  {
    title: 'Canapé reception',
    body: 'For arrivals, photographs and the gap after the ceremony. Usually added to dinner. If canapés are the whole service, say so — the menu has to carry the night.',
  },
] as const

export const menuSegments = [
  {
    title: 'Welcome drinks and canapés',
    items: [
      'Three to five small pieces per guest unless canapés are the meal.',
      'Keep them light if dinner follows.',
      'Mocktails, juices and infused water can be planned through myCHEF. Alcohol follows the venue licence.',
    ],
  },
  {
    title: 'The main meal',
    items: [
      'One coherent kitchen, even when two cuisines sit on the same table.',
      'Protein, grain or bread, vegetables, something cold, something that holds.',
      'Children’s plates and vendor meals are a line in the plan, not leftovers.',
    ],
  },
  {
    title: 'Dessert, cake and coffee',
    items: [
      'A wedding cake is often a moment, not the dessert for every guest.',
      'A dessert table or a small plated sweet can do the eating.',
      'Arabic coffee and dates still earn their place at many Dubai weddings.',
    ],
  },
  {
    title: 'Late-night wedding food',
    items: [
      'For long celebrations when dinner was at 8 and dancing is still going at 12.',
      'Shawarma, sliders, manakish, a small grill, fruit — food people will actually eat standing up.',
      'Plan it as a service, with a time, not as a tray left on a sideboard.',
    ],
  },
] as const

export const cuisineRows = [
  { cuisine: 'Indian wedding catering menu', bestFor: 'Large celebrations, regional kitchens, vegetarian depth', notes: 'Breads, rice, curries, tandoor, chaat, sweets — often across more than one moment of the day.' },
  { cuisine: 'Arabic wedding menu', bestFor: 'Sharing tables, mixed crowds, traditional and contemporary rooms', notes: 'Mezze, grills, rice, salads, breads, ouzi, sweets.' },
  { cuisine: 'Lebanese wedding menu', bestFor: 'Mezze-led evenings and garden tables', notes: 'Cold and hot mezze, grills, salads, breads, one dessert language.' },
  { cuisine: 'Emirati and Gulf', bestFor: 'Heritage celebrations and local families', notes: 'Machboos, thareed, grilled fish, luqaimat — built with the family, not from a tourist list.' },
  { cuisine: 'Mediterranean and European', bestFor: 'Outdoor lunches, plated villa dinners', notes: 'Seafood, grills, salads, pasta, a short dessert.' },
  { cuisine: 'Fusion wedding menu Dubai', bestFor: 'International guest lists that still want one meal', notes: 'Two kitchens that share a logic. Not a random buffet of greatest hits.' },
] as const

export const sampleMenus = [
  {
    title: 'Intimate garden wedding — about 30 guests',
    format: 'Usually a chef-led night.',
    items: [
      'Canapés: beetroot hummus tartlet, lamb kibbeh, grilled halloumi.',
      'Main: grilled sea bass or lamb, roasted vegetables, herb rice — or a sharing table in the same language.',
      'Dessert: a small plated sweet, fruit, Arabic coffee.',
    ],
  },
  {
    title: 'Ballroom celebration — about 120 guests',
    format: 'Usually a buffet-and-stations night.',
    items: [
      'Canapés during arrivals.',
      'Buffet: an Arabic station, an Indian station, a grill station — labelled, not piled.',
      'Dessert table and a cake moment.',
      'Late night: mini shawarma or manakish when the band is still on.',
    ],
  },
  {
    title: 'Yacht wedding reception — about 40 guests',
    format: 'A compact service. The galley is small, so the menu is too.',
    items: [
      'Welcome: date juice or a mocktail, two or three canapés.',
      'Main: Mediterranean seafood and grilled chicken, salads that hold on a moving boat.',
      'Dessert: one tart, berries, a small Arabic sweet.',
    ],
  },
] as const

export const culturalNotes = [
  {
    title: 'Indian wedding catering menu',
    body: 'Often more than one food moment: welcome chaat, a vegetarian depth that is not an afterthought, breads and rice together, a sweet that belongs to the family not the hotel pastry list. Tell us the regions and the rules — Jain, satvik, onion-garlic, regional heat — before we write a generic “Indian buffet”.',
  },
  {
    title: 'Arabic and Lebanese wedding menus',
    body: 'Sharing is the grammar. Mezze should arrive as a table, not as twelve unrelated canapés. Grills and rice need a holding plan in July. A Lebanese wedding menu is not “Arabic with hummus”; it is its own cold and hot mezze, its own grill, its own dessert language.',
  },
  {
    title: 'Fusion wedding menu Dubai',
    body: 'Fusion is a design choice. Two kitchens that share a logic — spice, richness, vegetarian depth, what arrives first — can sit in one room. A food court of greatest hits cannot. If the families want both, we station them and label them. We do not hide one inside the other.',
  },
  {
    title: 'Multi-day celebrations',
    body: 'Engagement, sangeet, ceremony, reception, brunch. Each day can have its own format. Repeating the same buffet four times is how guests stop eating. Change the kitchen or the format, not only the tablecloth.',
  },
] as const

export const venueMenuNotes = [
  {
    title: 'Villa and garden',
    body: 'Heat, shade, distance from kitchen to table, and what happens if the wind arrives. Outdoor peaks from November to March. May to September usually wants a cooled room or a shorter outdoor window. We do not move an indoor tasting menu onto a lawn without changing it.',
  },
  {
    title: 'Hotel ballroom',
    body: 'If external catering is allowed, the menu still has to fit their load-in and their power. If it is not allowed, stop designing this page’s sample menus for that room.',
  },
  {
    title: 'Yacht',
    body: 'The galley is small. The menu is compact, the holding is tighter, and per-guest cost is usually higher for that reason. No live tandoor on a fifty-foot deck unless the charter and the fire plan say so.',
  },
] as const

export const menuMistakes = [
  {
    title: 'A buffet of greatest hits',
    body: 'Twelve cuisines, none of them finished. Guests graze and leave hungry. Pick a kitchen, or two that can share a service plan. Label them. Do not hide a third inside the dessert.',
  },
  {
    title: 'Canapés that are the meal, without saying so',
    body: 'Three bites and a long ceremony is a different brief from dinner. If canapés carry the night, the count and the substance have to change. Say it in the brief.',
  },
  {
    title: 'The generic vegetarian plate',
    body: 'A grilled vegetable stack next to lamb is how vegetarian guests know they were an afterthought. If a third of the room does not eat meat, that kitchen needs the same care as the grill.',
  },
  {
    title: 'A cake nobody eats, and no dessert',
    body: 'The cake is often a photograph. Plan something people will actually finish — a dessert table, a small plated sweet, Arabic sweets — and decide whether the cake is food or a moment.',
  },
  {
    title: 'Late-night food as an untimed tray',
    body: 'A tray of sliders at midnight without a service window is leftovers. Late-night wedding food is a timed service, with a person standing there.',
  },
] as const

export const extraCovers = [
  {
    title: 'Children',
    body: 'A smaller plate, milder seasoning, and a time that matches theirs — not a miniature tasting menu. Ask how many, and whether they sit with adults.',
  },
  {
    title: 'Vendors',
    body: 'Photographers, musicians and planners eat. Put vendor meals on the plan so the kitchen is not sending leftover canapés to the band at 11 p.m.',
  },
  {
    title: 'Drinks that are not alcohol',
    body: 'Mocktails, juices, tea, coffee, Arabic coffee. These can be planned through myCHEF. Wine and spirits only where the venue licence allows, coordinated with the venue or a licensed partner.',
  },
] as const

export const tastingSteps = [
  'The date is held and the menu direction is agreed. Then we taste — not before.',
  'You eat the dishes that will be served, in something close to the real order.',
  'Seasoning, portion, temperature, garnish. Write the changes down.',
  'Dietary covers are tasted or walked through, not promised as a surprise plate on the day.',
  'The tasting is typically four to eight weeks before; eight to twelve in peak season. The sequence lives on the [checklist](/wedding-catering-checklist-dubai).',
] as const

export const menuFaqs = [
  {
    q: 'How do we plan a wedding catering menu in Dubai?',
    a: 'Start with the guest list, the room and how people will eat — plated, buffet, stations or a mix. Then cuisine, dietary covers and the shape of the day: canapés, dinner, dessert, late-night food. A tasting confirms it. Hire the team on [wedding catering Dubai](/wedding-catering-dubai).',
  },
  {
    q: 'What wedding food menu ideas work for a mixed international guest list?',
    a: 'One coherent meal with real choice inside it. An Arabic mezze and grill next to a vegetarian Indian station can work. A buffet of unrelated “greatest hits” usually does not. Tell us who is in the room.',
  },
  {
    q: 'Can we have an Indian wedding catering menu and an Arabic wedding menu on the same night?',
    a: 'Yes, if the kitchens share a service plan. Separate stations, labelled diets, and a dessert that does not fight either side. Fusion is a design choice, not a synonym for “everything”.',
  },
  {
    q: 'When is the wedding menu tasting?',
    a: 'After the date is held and the menu direction is agreed. Typically four to eight weeks before the wedding; eight to twelve for larger or peak-season days. The tasting is how you check the food. The [checklist](/wedding-catering-checklist-dubai) owns the calendar.',
  },
  {
    q: 'How many dishes should a wedding buffet menu include?',
    a: 'Enough that every guest can build a plate they want, not so many that half of it sits and cools. Six to ten dishes plus breads and salads is a common shape. Plated menus are usually three or four courses. The room and the duration decide more than a rule of thumb.',
  },
  {
    q: 'Can you plan late-night wedding food in Dubai?',
    a: 'Yes, as a timed service. Shawarma, sliders, manakish, a small grill — food people eat standing up after dinner. It is optional, and it is not a substitute for the main meal.',
  },
  {
    q: 'How do you handle Halal, vegan, Jain and allergies on one wedding menu?',
    a: 'Halal is the default kitchen standard. Vegetarian, vegan, Jain, gluten-free, dairy-free and nut-conscious covers are planned when you share them in time. We are allergy-aware. Cross-contact cannot be ruled out unless controls have been confirmed for the assigned kitchen.',
  },
] as const

export const menuLinks = [
  { href: WEDDING_PATHS.hub, label: 'Wedding catering Dubai', note: 'Hire the team' },
  { href: WEDDING_PATHS.cost, label: 'Wedding catering cost', note: 'Estimates and what sits outside them' },
  { href: WEDDING_PATHS.checklist, label: 'Wedding catering checklist', note: 'The sequence and tasting window' },
  { href: '/indian-catering-dubai', label: 'Indian catering', note: 'Regional menus, vegetarian depth' },
  { href: '/arabic-catering-dubai', label: 'Arabic catering', note: 'Mezze, grills, sharing tables' },
  { href: '/halal-catering-dubai', label: 'Halal catering', note: 'Default kitchen standard' },
  { href: '/vegan-catering-dubai', label: 'Vegan catering', note: 'Plant-based covers that belong in the menu' },
  { href: '/jain-catering-dubai', label: 'Jain catering', note: 'No-root and temple-style planning' },
  { href: '/dessert-table-catering-dubai', label: 'Dessert table catering', note: 'Cake, sweets, the last food moment' },
  { href: '/blog/grazing-table-vs-buffet-dubai', label: 'Grazing table vs buffet', note: 'Which format fits the room' },
  { href: '/blog/vegan-catering-dubai-guide', label: 'Vegan catering guide', note: 'How a plant-led menu is built' },
  { href: '/bar-services-dubai', label: 'Bar services', note: 'Mocktails, and alcohol where licensed' },
] as const
