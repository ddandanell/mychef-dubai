/**
 * Copy for the Dining Experiences pillar: /luxury-dining-experiences
 *
 * KEYWORD LOCK: "private dining experience dubai" (see EXPERIENCE_KEYWORD_LOCKS.hub).
 * The hub introduces every subject and then hands the narrow intent to its children —
 * it must never out-target /romantic-dinner-dubai, /tasting-menu-dubai,
 * /private-cooking-classes-dubai or /desert-dining-dubai on their own primaries.
 *
 * Rules applied: no invented prices, inclusions, guarantees or benefits; no
 * "unforgettable culinary journey" register; every claim either verifiable or absent.
 */

import { EXPERIENCES_PATHS, CROSS_CATEGORY_PATHS } from './experiencesCluster'

export interface ProseSection {
  id: string
  h2: string
  paragraphs: string[]
  bullets?: string[]
  link?: { href: string; label: string }
  secondaryLink?: { href: string; label: string }
}

export const hero = {
  eyebrow: 'Dining Experiences',
  h1: 'Private dining experience Dubai, designed around the moment',
  subtitle:
    'A private dining experience in Dubai starts with the moment, then the chef, the menu and the room. Romantic dinners, tasting menus, cooking classes and desert tables — planned around you, not a restaurant slot.',
  primaryCta: 'Explore Experiences',
  secondaryCta: 'Plan Something Custom',
  utility: 'Dubai-wide · Private homes · Villas · Selected venues · Special locations',
} as const

/** Section 2 — the category definition. Typography only, no image. */
export const whatItIs: ProseSection = {
  id: 'what-is-a-dining-experience',
  h2: 'What a private dining experience Dubai actually is',
  paragraphs: [
    'A restaurant gives you a table inside their environment, on their schedule, from their menu. Traditional catering brings food to an event you are already running. A myCHEF dining experience starts somewhere else: with what you want the evening to feel like, and then builds the food, the chef and the service around that.',
    'It might happen at home, in a villa, on a yacht, in the desert, at a private venue, or somewhere else that suits what you have in mind. Sometimes the chef stays almost invisible and the evening belongs to your guests. Sometimes the chef introduces every course. Sometimes you are in the kitchen cooking alongside them. Sometimes the location is the whole reason for the evening.',
    'What all of them share is the direction of the planning. You are not fitting into a restaurant\'s normal service. The experience is built around you.',
  ],
}

/** Section 3 — the experience finder tiles. */
export const experienceFinder = [
  {
    id: 'romantic',
    title: 'Romantic Dinner',
    text: 'For proposals, anniversaries, date nights, or simply an evening you want to make different from a normal dinner out.',
    href: EXPERIENCES_PATHS.romantic,
    cta: 'Explore Romantic Dinner',
    image: '/images/romantic-dinner-dubai-hero.webp',
    alt: 'A couple dining privately by candlelight at a table set for two in a Dubai villa. Experience concept shown.',
  },  {
    id: 'cooking-class',
    title: 'Private Cooking Class',
    text: 'Cook alongside a professional chef in a private, hands-on session built around your group and the cuisine you want to learn.',
    href: EXPERIENCES_PATHS.cookingClasses,
    cta: 'Explore Cooking Classes',
    image: '/images/private-cooking-classes-dubai-hero.webp',
    alt: 'Guests preparing ingredients around a kitchen island while a chef demonstrates a technique. Experience concept shown.',
  },
  {
    id: 'desert',
    title: 'Desert Dining',
    text: 'A chef-led private meal where the setting becomes part of the memory.',
    href: EXPERIENCES_PATHS.desert,
    cta: 'Explore Desert Dining',
    image: '/images/desert-dining-dubai-hero.webp',
    alt: 'A private dining table set in the Dubai desert at dusk. Experience concept shown.',
  },
  {
    id: 'gift',
    title: 'We book the evening in their name',
    text: 'There is no stored-value card. We hold a date for someone else and they still choose the menu.',
    href: EXPERIENCES_PATHS.giftCards,
    cta: 'How gifting actually works',
    image: '/images/gift-cards-hero.webp',
    alt: 'Guests enjoying a chef-led dinner together at home. Experience concept shown.',
  },
] as const

export const prose: ProseSection[] = [
  {
    id: 'romantic-dining',
    h2: 'Romantic Dining in Dubai, Without a Restaurant Around You',
    paragraphs: [
      'Most romantic dinners in Dubai happen in a room full of other people\'s romantic dinners. There is a table turn to respect, a fixed menu to choose from, strangers within arm\'s reach, and a soundtrack nobody in your party picked. For a normal evening out that is fine. For the evening where you propose, or mark ten years, or finally get a night alone after a hard month, it works against you.',
      'A private romantic dinner removes the room. The chef comes to you, the menu is planned around what the two of you actually like, and the pace belongs to you rather than to a service schedule. There is no queue for the table and no closing time being counted down.',
      'People book these for proposals, anniversaries, a partner\'s birthday, date nights, surprises, honeymoons and private celebrations. The occasion changes what the evening needs, which is why the planning starts with the occasion rather than with a menu.',
      'From there, an evening can be built in layers: the chef and the food first, then service, then the table itself, then the atmosphere around it. Flowers, candles, a specific table setup, music, or photography can all be arranged where they are wanted.',
      'You do not need all of it. If you want a chef and excellent food and nothing else, that is a complete booking. If you want a full proposal setup where every detail is handled before your partner walks in, that is a different conversation and we plan it differently.',
    ],
    link: { href: EXPERIENCES_PATHS.romantic, label: 'Explore Romantic Dinner in Dubai' },
  },
  {
    id: 'tasting-menus',
    h2: 'When Dinner Becomes a Progression',
    paragraphs: [
      'A tasting menu is not a starter, a main and a dessert made smaller. It is a sequence built deliberately, where each course is planned in relation to the ones on either side of it — lighter before heavier, sharper after richer, texture changing often enough that attention never drops.',
      'That structure is what makes it an experience rather than a meal. Courses arrive in a planned rhythm. The chef has room to cook with more technique than a single main course allows. And because the menu is designed for your table specifically, it can be built around what your guests actually eat.',
      'Direction is a choice made during planning rather than picked off a list. Modern European, Japanese-influenced, Mediterranean, Asian, plant-based, or a chef-led concept built around a particular idea are all possible starting points — the honest answer for any given date depends on which chefs are available and what they genuinely cook well. We would rather tell you that than promise every cuisine.',
      'Dietary requirements are part of the menu design, not an exception handled at the end. Allergies, vegetarian and vegan guests, gluten requirements and halal requirements all change how a progression is built, and it is far easier to design around them than to substitute around them later.',
      'Tasting menus work especially well for smaller groups, where the dinner itself is the evening rather than the backdrop to it.',
    ],
    secondaryLink: { href: EXPERIENCES_PATHS.halal, label: 'Halal private dining' },
  },
  {
    id: 'cooking-classes',
    h2: 'Sometimes You Should Be in the Kitchen Too',
    paragraphs: [
      'A private cooking class is not a demonstration where a chef cooks while everybody sits and watches. The point is that your group is doing the work — handling the ingredients, making the mistakes, and eating the result.',
      'That changes who it suits. It works for couples who want to do something together rather than sit opposite each other again, for families, for groups of friends, for visitors who want to take something home that is not a souvenir, and for teams who need an activity that is not another dinner.',
      'A session usually moves through the same shape: agree the cuisine and the dishes beforehand, meet the ingredients, watch the chef demonstrate the techniques that matter, cook the dishes yourselves with the chef working alongside you, and then sit down and eat what you made.',
      'What can be taught depends entirely on the chef, which is the point of the next section. Pasta, Japanese cooking and sushi, wider Asian cooking, Mediterranean and pastry are the kinds of subjects a specialist chef teaches well — but the class is only as good as the person teaching it, so the subject is confirmed against a specific chef rather than promised in advance.',
    ],
    link: { href: EXPERIENCES_PATHS.cookingClasses, label: 'Explore Private Cooking Classes' },
  },
  {
    id: 'specialist-experiences',
    h2: 'Learn From the Right Specialist',
    paragraphs: [
      'A chef who cooks beautifully for a household every day is not automatically the right person to teach sushi. Those are different skills, and pretending otherwise is how experiences disappoint people.',
      'Some experiences depend on depth in one thing: sushi and Japanese knife technique, pastry, Italian pasta made by hand, French technique, regional Indian cooking, live fire and barbecue. Depth like that takes years and it does not transfer sideways.',
      'So when an experience depends on specialist knowledge, the chef is selected around the experience rather than assigned from whoever is free that evening. If the right specialist is not available for your date, the honest answer is to say so and offer a different date or a different experience — not to send someone who will get through it.',
    ],
    link: { href: CROSS_CATEGORY_PATHS.ourChefs, label: 'How we select our chefs' },
  },
  {
    id: 'desert-dining',
    h2: 'Change the Setting, and Dinner Changes With It',
    paragraphs: [
      'Dining in the desert is its own product because almost nothing about it works the way a dinner at home works. Everything has to travel. Food has to be held safely at temperature across a distance. Equipment, lighting, service and the setup itself have to arrive, function without a kitchen behind them, and then leave the site as it was found. Weather and light dictate the timing rather than your preference.',
      'None of that is your problem to solve, but it is the reason a desert dinner is planned earlier and more carefully than a dinner in your dining room.',
      'What you get for that planning is the thing you cannot get anywhere else: a private table, in the open, with the light going down, and food that was cooked properly rather than reheated. The desert supplies the silence. The chef supplies the rest.',
    ],
    link: { href: EXPERIENCES_PATHS.desert, label: 'Explore Desert Dining' },
  },
  {
    id: 'yacht-dining',
    h2: 'Dining on a Yacht',
    paragraphs: [
      'An intimate chef-led dinner for a small group on a yacht is a dining experience in exactly the sense this page means. The menu, the timing and the service can be planned around the route, the galley and facilities available on board, and how many people are actually eating.',
      'Yacht catering as a whole is broader than that. Larger groups, parties, marina delivery, service staff and full-day food operations are a catering job with different logistics and different planning, and they have their own page.',
    ],
    link: { href: CROSS_CATEGORY_PATHS.yachts, label: 'Explore Yacht Catering & Dining' },
  },
  {
    id: 'halal-dining',
    h2: 'Private Dining That Respects How You Eat',
    paragraphs: [
      'Halal is not a checkbox added at the end of a menu. Where halal dining is required, it affects where ingredients are bought, how the menu is planned, and how the kitchen is handled on the day. That has to be agreed before the menu is written, not corrected afterwards.',
      'Other requirements matter just as much and are not the same thing. Vegetarian and vegan guests, allergies, gluten requirements and other dietary needs each change the plan in their own way, and collapsing them into one "dietary requirements" line is how mistakes happen. Tell us what applies to which guest and the menu is built from there.',
    ],
    link: { href: EXPERIENCES_PATHS.halal, label: 'Explore Halal Private Dining in Dubai' },
  },
  {
    id: 'special-occasions',
    h2: 'Some Dates Deserve More Than a Reservation',
    paragraphs: [
      'Proposals, anniversaries, Valentine\'s Day, milestone birthdays, honeymoons, engagements and family milestones have one thing in common: the date is fixed, and doing something forgettable on it is the one outcome nobody wants.',
      'These are the evenings where a private experience earns its place, because the whole thing can be built backwards from the moment that matters — the reveal, the toast, the course where the ring appears — instead of being fitted around a restaurant\'s service.',
      'Birthdays split in two, and it is worth being clear about which one you are planning. A small chef-led dinner for a milestone birthday is a dining experience. A birthday party with a guest list, service staff and event logistics is catering, and it is planned by a different team with a different brief.',
    ],
    link: { href: EXPERIENCES_PATHS.valentines, label: "Valentine's Day in Dubai" },
    secondaryLink: { href: CROSS_CATEGORY_PATHS.birthdayCatering, label: 'Planning a larger birthday? See Birthday Catering' },
  },
  {
    id: 'build-in-layers',
    h2: 'Start With the Experience. Add Only What It Needs.',
    paragraphs: [
      'Packages are convenient for the company selling them and expensive for the person buying them, because they charge everybody for the things only some people wanted. We would rather build an experience in layers and let you stop wherever it stops being useful.',
      'Not every experience needs every layer. A tasting menu might need the chef, the food and service, and nothing more. A proposal might add flowers, candles and photography. A cooking class needs the chef, the ingredients and the right equipment. A desert dinner needs the food plus the location logistics and the service setup that make the location possible at all.',
    ],
    bullets: [
      'Food — menu, ingredients, chef',
      'Service — waiters, course service, drinks support',
      'Table — tableware, linen, candles, flowers',
      'Atmosphere — music, styling, lighting, special setup',
      'Memory — photography, video, additional elements',
    ],
  },
  {
    id: 'menus-and-cuisines',
    h2: 'The Menu Should Fit the Experience',
    paragraphs: [
      'There is no single myCHEF menu, because the right menu depends on things that change with every booking: the occasion, how many people are eating, where it is happening, whether the food is served in courses or shared, what your guests can and cannot eat, how many courses you want, which chef is cooking, and which cuisines you actually enjoy.',
      'A menu designed for six people seated at a tasting is built differently from one for twelve people eating in a villa garden, even if the cuisine is the same. Location and service style change what can be cooked well, and cooking well is the constraint that matters.',
    ],
    link: { href: CROSS_CATEGORY_PATHS.menus, label: 'Browse menu directions' },
    secondaryLink: { href: CROSS_CATEGORY_PATHS.cuisines, label: 'World cuisines' },
  },
  {
    id: 'choosing-chefs',
    h2: 'The Right Chef Depends on the Experience',
    paragraphs: [
      'Saying "we have the best chefs" tells you nothing, because every company says it. What is worth explaining is how a chef gets matched to an evening.',
      'A romantic dinner for two, a sushi lesson for six and a Mediterranean tasting menu for eight do not need the same person. The match is made on cuisine and technical level, but also on the format of the experience, the number of guests, the location, and how much interaction the evening asks for.',
      'A cooking-class chef has to be able to teach — to explain a technique clearly to someone holding a knife badly, and stay patient while they do it again. A tasting-menu chef needs course planning and precise timing across a sequence. A private romantic dinner often needs a quieter service style, where the chef is present but the evening is not about them. A specialist session needs genuine specialist ability.',
    ],
    link: { href: CROSS_CATEGORY_PATHS.ourChefs, label: 'How chefs are selected and matched' },
  },
  {
    id: 'where',
    h2: 'Your Table Does Not Need a Restaurant Address',
    paragraphs: [
      'Experiences happen in private homes, villas, apartments and penthouses, at selected event venues, on yachts, in the desert, and in other private settings that suit what you have planned.',
      'We work across Dubai, including Palm Jumeirah, Dubai Marina, Downtown, Emirates Hills, Jumeirah, JBR, DIFC, Dubai Hills and Arabian Ranches. Where you are affects planning more than most people expect — access, kitchen facilities, parking for equipment and travel time for the team all feed into what an evening needs.',
    ],
    link: { href: CROSS_CATEGORY_PATHS.locations, label: 'Areas we cover' },
  },
  {
    id: 'custom',
    h2: 'Have Something in Mind That Is Not on This Page?',
    paragraphs: [
      'The experiences above are the ones people ask for most often. They are not the limit of what can be arranged, and it would be a shame to assume otherwise because a website only had room for five tiles.',
      'People have asked for surprise dinners, specialist masterclasses, themed tastings, proposal concepts built around a specific place, guest-chef evenings, family cooking activities, private brunches and dinners in venues that had never hosted one before.',
      'Tell us what you are imagining, how many people, where, when, and anything that genuinely matters to you. We will tell you what is realistic — including when it is not, and what would work better.',
    ],
  },
  {
    id: 'gift-cards',
    h2: 'We book the evening in their name',
    paragraphs: [
      'myCHEF does not issue stored-value gift cards. There is no voucher, no 12-month balance, no SKU to buy and forward.',
      'What we can do is take the booking in their name, hold a date range, and let them choose the menu. That is the whole product until we actually issue stored value.',
    ],
    link: { href: EXPERIENCES_PATHS.giftCards, label: 'How gifting actually works' },
  },
  {
    id: 'vip-club',
    h2: 'For Clients Who Come Back',
    paragraphs: [
      'Some households book myCHEF regularly rather than once. The VIP Club exists for them — returning clients who want easier access to future experiences and priority when they are planning.',
      'What it includes is set out on its own page rather than summarised here.',
    ],
    link: { href: EXPERIENCES_PATHS.vipClub, label: 'Explore the VIP Club' },
  },
]

/** Section 19 — booking. */
export const bookingSteps = [
  {
    n: '01',
    title: 'Tell Us What You Have in Mind',
    text: 'The date, the location, how many people, the occasion, and what kind of experience you are picturing.',
  },
  {
    n: '02',
    title: 'We Shape the Concept',
    text: 'Chef, food, format and any additional elements the experience actually needs.',
  },
  {
    n: '03',
    title: 'You Review It',
    text: 'Change things. Remove things. Add things. This is the stage where it becomes yours.',
  },
  { n: '04', title: 'We Confirm', text: 'The team and the plan are confirmed in writing.' },
  { n: '05', title: 'Experience Day', text: 'The chef and team execute the agreed service.' },
] as const

/** Section 20 — teaching the product boundary to visitors and to search engines. */
export const otherCategories = [
  {
    q: 'Need a chef for several days or longer?',
    a: 'That is a household service, not a one-off experience.',
    href: CROSS_CATEGORY_PATHS.privateChef,
    cta: 'Private Chef',
  },
  {
    q: 'Planning an event for guests?',
    a: 'Guest lists, service staff and event logistics are a catering job.',
    href: CROSS_CATEGORY_PATHS.catering,
    cta: 'Catering',
  },
  {
    q: 'Looking for a chef-led special experience?',
    a: 'You are in the right place.',
    href: EXPERIENCES_PATHS.hub,
    cta: 'Stay here',
  },
] as const

/** Section 23 — final directory. */
export const finalDirectory = [
  { title: 'Romantic Dinner', text: 'For two, proposals and anniversaries', href: EXPERIENCES_PATHS.romantic },
  { title: 'Tasting Menu', text: 'Multi-course private dining', href: EXPERIENCES_PATHS.tasting },
  { title: 'Cooking Class', text: 'Learn with your chef', href: EXPERIENCES_PATHS.cookingClasses },
  { title: 'Desert Dining', text: 'Take dinner somewhere different', href: EXPERIENCES_PATHS.desert },
  { title: 'Book an evening in their name', text: 'We hold the date. They choose the menu.', href: EXPERIENCES_PATHS.giftCards },
  { title: 'Something Custom', text: 'Build it with us', href: '#custom' },
] as const

export const finalCta = {
  h2: 'Tell Us What You Want the Evening to Feel Like',
  body: 'You do not need to know the menu, the chef or the exact format yet. Tell us who it is for, where you are, when you are planning it, and what you want the experience to feel like.',
  primary: 'Plan My Experience',
  secondary: 'Chat on WhatsApp',
} as const

/**
 * Section 22 — FAQ. Broad search coverage without stuffing the sales sections.
 * Answers reuse facts already published elsewhere on the site (alcohol/licence position,
 * service layers, chef approval) rather than inventing new policy.
 */
export const experienceFaqs = [
  {
    q: 'What is a private dining experience?',
    a: 'A chef-led meal arranged around you rather than around a restaurant. The chef comes to your home, villa, yacht or another private setting, the menu is planned for your table, and the format follows the occasion instead of a fixed service.',
  },
  {
    q: 'How is a private dining experience different from hiring a private chef?',
    a: 'A dining experience is an occasion — one evening, built around something you are marking or want to do. A private chef is a household service, where a chef cooks for you regularly over days, weeks or months. If you want someone cooking for the house on an ongoing basis, that is Private Chef.',
  },
  {
    q: 'Where can I book a private dining experience in Dubai?',
    a: 'Across Dubai, including Palm Jumeirah, Dubai Marina, Downtown, Emirates Hills, Jumeirah, JBR, DIFC, Dubai Hills and Arabian Ranches, as well as yachts, desert locations and selected private venues.',
  },
  {
    q: 'Can the chef cook in my home?',
    a: 'Yes. Most experiences happen in private homes and villas. What your kitchen can support affects the menu, so it is discussed during planning rather than discovered on the night.',
  },
  {
    q: 'Can you arrange a romantic dinner for two?',
    a: 'Yes, and it is one of the most common bookings. The menu, pacing and setup are planned around the two of you and the occasion behind the evening.',
  },
  {
    q: 'Can you help with proposals?',
    a: 'Yes. Proposals are planned backwards from the moment itself, including timing, the setup your partner walks into, and who needs to know what beforehand.',
  },
  {
    q: 'Can I book a tasting menu at home?',
    a: 'Yes. A multi-course tasting menu is designed for your table and served in a planned progression, at home or in another private setting.',
  },
  {
    q: 'Do you offer private cooking classes?',
    a: 'Yes — hands-on private sessions where your group cooks alongside a professional chef, rather than watching a demonstration.',
  },
  {
    q: 'Can children join a cooking class?',
    a: 'Family sessions are possible and are planned differently from an adult class: simpler dishes, more supervision and realistic timing. Tell us the ages when you enquire so the session is designed properly.',
  },
  {
    q: 'Can you arrange a private dinner in the desert?',
    a: 'Yes. Desert dining needs earlier planning than a dinner at home because food, equipment, lighting and service all have to travel and function without a kitchen on site.',
  },
  {
    q: 'Can you cater on a yacht?',
    a: 'Yes. A small chef-led yacht dinner is a dining experience; larger yacht parties and full-day yacht catering are handled as catering, with different logistics.',
  },
  {
    q: 'Do you provide halal private dining?',
    a: 'Yes. Where halal is required it shapes sourcing, menu planning and kitchen handling, and it is agreed before the menu is written.',
  },
  {
    q: 'Can you accommodate allergies?',
    a: 'Yes. Allergies are built into the menu design rather than substituted around at the end. Tell us which guest each requirement applies to, because that changes how the menu is planned.',
  },
  {
    q: 'Can I choose the cuisine?',
    a: 'Yes. Cuisine is a starting point for the menu conversation. What is genuinely available on a given date depends on which chefs are free and what they cook well, and we would rather tell you that than promise everything.',
  },
  {
    q: 'Can we speak with the chef beforehand?',
    a: 'You see the chef’s verified profile and approve them before anything is confirmed. Where an experience depends on detailed menu discussion, that conversation is arranged as part of planning.',
  },
  {
    q: 'Can you provide waiters?',
    a: 'Yes, as a layer you can add. Serving staff are sized to the guest count and service style, and are only included when the plan says so.',
  },
  {
    q: 'Can you arrange flowers and table styling?',
    a: 'Yes. Tableware, linen, candles, flowers and styling are optional layers. An experience does not need them to be complete.',
  },
  {
    q: 'Can you arrange photography?',
    a: 'Yes, where it is wanted. It is most often requested for proposals and milestone occasions.',
  },
  {
    q: 'Is alcohol included?',
    a: 'Alcohol is licence dependent. Soft drinks, mocktails, juices, tea and coffee can be planned through myCHEF. Wine and spirit service is coordinated with the venue or a licensed partner rather than supplied by us directly.',
  },
  {
    q: 'How many guests can a private dining experience accommodate?',
    a: 'It depends on the format. Tasting menus and romantic dinners are built for small groups, cooking classes are limited by kitchen space and how many people one chef can teach well, and desert and yacht dining are limited by the site or the vessel. Tell us your number and we will tell you which formats work.',
  },
  {
    q: 'Do you have gift cards?',
    a: 'Not as stored value. We can book the evening in their name and hold a date; they still choose the menu. There is no voucher to buy until we actually issue one.',
  },
  {
    q: 'Do you offer Valentine’s Day experiences?',
    a: 'Yes, and Valentine’s Day books out earlier than almost any other date in the year, so it is worth planning well ahead.',
  },
  {
    q: 'Can you create something that is not listed on this page?',
    a: 'Yes. Tell us what you are imagining, how many people, where and when. We will tell you what is realistic — including when something would work better a different way.',
  },
  {
    q: 'Who actually cooks the food?',
    a: 'Culinary work is performed by independent, licensed culinary partners working to Dubai Municipality food-safety standards. myCHEF designs and coordinates the experience and matches you with the right chef for it.',
  },
] as const

/** Editorial imagery per prose section. Only where the image teaches something. */
export const sectionImages: Record<string, { src: string; alt: string }> = {
  'romantic-dining': {
    src: '/images/romantic-dinner-dubai-hero.webp',
    alt: 'A couple at a candlelit private dinner table in a Dubai residence. Experience concept shown.',
  },
  'tasting-menus': {
    src: '/images/tasting-menu-dubai-hero.webp',
    alt: 'A chef placing a plated course in front of a seated guest during a private tasting menu. Experience concept shown.',
  },
  'cooking-classes': {
    src: '/images/private-cooking-classes-dubai-hero.webp',
    alt: 'A small group cooking alongside a professional chef at a kitchen island. Experience concept shown.',
  },
  'specialist-experiences': {
    src: '/images/luxury-dining-dubai-hero.webp',
    alt: 'A specialist chef working closely with guests during a hands-on private session. Experience concept shown.',
  },
  'desert-dining': {
    src: '/images/desert-dining-dubai-hero.webp',
    alt: 'A private table laid in the Dubai desert as the light drops. Experience concept shown.',
  },
  'yacht-dining': {
    src: '/images/yacht-catering-dubai-hero.webp',
    alt: 'A small group eating a chef-prepared meal on board a yacht. Experience concept shown.',
  },
  'choosing-chefs': {
    src: '/images/private-chef-dubai-hero.webp',
    alt: 'A private chef talking with guests in a home kitchen. Experience concept shown.',
  },
  'gift-cards': {
    src: '/images/gift-cards-hero.webp',
    alt: 'Friends around a table during a chef-led dinner at home. Experience concept shown.',
  },
}
