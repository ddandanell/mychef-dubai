/** The public client journey, reused on service pages and the enquiry. */
export const householdJourney = [
  {
    title: 'Tell us what would make life easier',
    action: 'Share your area, household size, schedule, start date and budget. Unsure about live-in or live-out? We help you choose.',
    receive: 'A suitability review and a personal conversation to build your household brief.',
    payment: 'No payment to enquire.',
  },
  {
    title: 'Approve the brief. Meet your matches.',
    action: 'We agree the food, role and realistic budget with you, then activate a focused chef search.',
    receive: 'A considered shortlist, our reasons for each introduction and interview coordination. Initial matching typically takes 3–5 working days after activation.',
    payment: 'AED 950 Match Activation, before VAT, once you approve the search terms.',
  },
  {
    title: 'Try the cooking before you decide',
    action: 'Meet a suitable chef and arrange a paid home trial around a menu that represents your everyday food.',
    receive: 'A chance to assess taste, communication and kitchen fit. Review the complete ongoing proposal before accepting.',
    payment: 'Trial scope and price agreed separately. Ongoing service starts only after your approval.',
  },
  {
    title: 'Settle in. Keep making it yours.',
    action: 'Begin your Learning Month, refine the food together and keep useful preferences in your approved Food Profile.',
    receive: 'A named myCHEF contact, planned check-ins, monthly reviews and rematching coordination throughout the active agreement.',
    payment: 'Your agreed service fee. Same-role rematching has no new activation fee; new chef fees, trials and cover may differ.',
  },
] as const

export const householdBriefTopics = [
  ['The food you want', 'Favourite cuisines and dishes, foods to avoid, portions, seasoning and what you would enjoy more often.'],
  ['Dietary requirements', 'Allergies and their severity, intolerances and any specialist dietary guidance. We confirm what can be accommodated before a trial or cooking begins.'],
  ['The rhythm of your home', 'Meal times, children’s routines, guests, shopping preferences and meals to prepare for later.'],
  ['The person and the role', 'Communication, working style, kitchen access, living arrangement, privacy and agreed responsibilities.'],
] as const

export const householdStartBenefits = [
  ['Your agreed chef schedule', 'A dedicated full-time chef role, with days, hours, menus and kitchen responsibilities agreed around your home.'],
  ['A thoughtful first month', 'Kitchen onboarding and planned check-ins during the first 30 days, so feedback turns into practical changes.'],
  ['Your Household Food Profile', 'An approved record of food, portions and routines that develops with you and supports a future chef handover.'],
  ['One continuing myCHEF contact', 'A person to speak to about your food, schedule, chef relationship and changing requirements.'],
  ['Reviews that keep it personal', 'Monthly relationship reviews and support for your chef as your household’s preferences develop.'],
  ['Support if the fit needs to change', 'Same-role rematching without another activation fee during an active agreement. Availability and any new costs are confirmed.'],
] as const
