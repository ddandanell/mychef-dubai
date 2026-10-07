/** Service-specific prompts; rates and booking terms remain in their existing sources. */
const chefEnquiries: Record<string, { label: string; title: string; brief: string; topic: string }> = {
  '/private-chef-dubai': { label: 'Plan food for my home', title: 'What would make your week easier?', brief: 'Tell us your Dubai area, household size and which meals you would like help with. We will help you choose between cooking visits, meal preparation and a dedicated household chef.', topic: 'cooking at home' },
  '/part-time-private-chef-dubai': { label: 'Plan my cooking days', title: 'Let’s put good food in your diary.', brief: 'Share your Dubai area, household size and preferred cooking days. Tell us whether you want meals served during the visit, food prepared for later, or a little of both.', topic: 'part-time cooking visits' },
  '/weekly-meal-prep-dubai': { label: 'Plan my meal prep', title: 'What would you like ready in your fridge?', brief: 'Tell us how many people you are feeding, which meals you want prepared and your favourite foods. We will help you choose a preparation visit or an agreed meal pack.', topic: 'weekly meal preparation' },
  '/wellness-meal-prep-dubai': { label: 'Discuss my food preferences', title: 'Good food, with your preferences understood.', brief: 'Share your preferred ingredients, foods to avoid, portions and any written dietary guidance. We will review the brief with you before proposing a suitable cooking plan.', topic: 'meal preparation around my food preferences' },
  '/private-chef-dubai/short-term-chef': { label: 'Plan meals for my stay', title: 'Arrive with your meals already planned.', brief: 'Send your dates, Dubai address, household size and the meals you want covered. We will review your kitchen, timing and chef availability before preparing a proposal.', topic: 'a chef for my dates or holiday stay' },
}

export function chefEnquiryCopy(path: string) {
  return chefEnquiries[path] || { label: 'Find my chef', title: 'Let’s make room for good food.', brief: 'Tell us where you are, how often you would like a chef and what you enjoy eating. We will help you find a suitable arrangement and confirm the details in writing.', topic: 'a private chef' }
}
