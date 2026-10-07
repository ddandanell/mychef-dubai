import { Link, useLocation } from 'react-router'
import { ChefSection } from './ChefSections'
import ServiceImage from './ServiceImage'
import type { ChefImageKey } from '@/content/privateChefDesign'
import { householdInquiryHref } from '@/lib/householdInquiry'

type MenuIdea = { title: string; image: ChefImageKey; occasion: string; dishes: string[] }
const ideas: Record<string, MenuIdea> = {
  family: { title: 'A family table', image: 'family-table', occasion: 'An easy evening together', dishes: ['Lemon and herb roast chicken', 'Roast potatoes and seasonal vegetables', 'Tomato and cucumber salad'] },
  prep: { title: 'Lunches worth looking forward to', image: 'meal-prep', occasion: 'Portioned for the days ahead', dishes: ['Chicken and roasted vegetable rice bowls', 'Lentil and vegetable stew', 'Herby chickpea salad, dressing packed separately'] },
  lighter: { title: 'Fresh, colourful favourites', image: 'wellness', occasion: 'Food around your preferences', dishes: ['Baked salmon with lemon and herbs', 'Quinoa and roasted vegetable salad', 'Lentil soup with spinach'] },
  sharing: { title: 'A relaxed sharing table', image: 'arabic', occasion: 'A lunch to linger over', dishes: ['Grilled chicken skewers', 'Hummus and warm flatbread', 'Chopped salad with a lemon dressing'] },
  breakfast: { title: 'An unhurried breakfast', image: 'breakfast', occasion: 'Start the day at home', dishes: ['Eggs with sautéed tomatoes', 'Yoghurt, oats and fresh fruit', 'Warm bread and breakfast accompaniments'] },
  vegetarian: { title: 'Vegetables at the centre', image: 'ingredients', occasion: 'More variety through the week', dishes: ['Chickpea and spinach curry', 'Roasted aubergine with herbed lentils', 'Rice and seasonal vegetables'] },
}

export type MenuContext = 'home' | 'part-time' | 'meal-prep' | 'wellness' | 'short-stay' | 'household'
const menus: Record<MenuContext, { title: string; intro: string; choices: string[]; cta: string }> = {
  home: { title: 'What would you love your chef to cook?', intro: 'A familiar family dinner, lunches ready for later or a fresh take on your favourite cuisine. Start with the food you enjoy; we shape the menu around your household.', choices: ['family', 'prep', 'sharing'], cta: 'Plan food for my home' },
  'part-time': { title: 'Your cooking days, made delicious.', intro: 'Mix freshly served meals with preparation for later. Tell us which meals would make the biggest difference and we will help you plan the cooking time.', choices: ['family', 'prep', 'vegetarian'], cta: 'Plan my cooking days' },
  'meal-prep': { title: 'Open the fridge. Look forward to lunch.', intro: 'Bring your favourites, foods to avoid and preferred portions. Your chef can suggest a varied preparation menu, with storage and reheating instructions suited to each dish.', choices: ['prep', 'vegetarian', 'family'], cta: 'Plan my meal prep' },
  wellness: { title: 'Food that fits the way you like to eat.', intro: 'Use these ideas to explain your preferences. Share any written dietary guidance with us before menu planning; ingredients, portions and preparation are reviewed with your chef.', choices: ['lighter', 'vegetarian', 'prep'], cta: 'Discuss my food preferences' },
  'short-stay': { title: 'A taste of an easier stay.', intro: 'Breakfast before a day out, a relaxed lunch at the villa or dinner after you return. Choose the meals you want covered; we agree the hours and preparation around your plans.', choices: ['breakfast', 'sharing', 'family'], cta: 'Plan meals for my stay' },
  household: { title: 'Picture the food in your everyday life.', intro: 'Slow breakfasts, family favourites and a lunch that suits your routine. Your Household Food Profile helps your chef learn what belongs on your table and what to adjust.', choices: ['breakfast', 'family', 'lighter'], cta: 'Tell us about my household' },
}

export default function ChefMenuInspiration({ kind = 'home' }: { kind?: MenuContext }) {
  const { pathname } = useLocation()
  const menu = menus[kind]
  const enquiry = kind === 'household' ? householdInquiryHref(pathname) : `/inquiry?from=${encodeURIComponent(pathname)}`
  return <ChefSection id="menu-inspiration" eyebrow="A little menu inspiration" title={menu.title} tone="pc-tone-cream">
    <p className="pc-section-intro">{menu.intro}</p>
    <div className="pc-menu-grid">{menu.choices.map(id => {
      const idea = ideas[id]
      return <article className="pc-menu-card" key={id}>
        <ServiceImage imageKey={idea.image} sizes="(min-width: 900px) 30vw, 100vw"/>
        <div className="pc-menu-copy"><p className="pc-eyebrow">{idea.occasion}</p><h3>{idea.title}</h3><ul>{idea.dishes.map(dish => <li key={dish}>{dish}</li>)}</ul></div>
      </article>
    })}</div>
    <p className="pc-fineprint">Sample menus and imagery for inspiration. Your dishes, ingredients, portions and cooking time are agreed with your chef. Share allergies before booking so we can assess suitability.</p>
    <div className="pc-actions"><Link className="pc-button" data-cta-location="chef_menu_inspiration" to={enquiry}>{menu.cta} →</Link><Link className="pc-link" to="/our-chefs">Explore chefs & cooking styles →</Link></div>
  </ChefSection>
}

export function ChefVisitRhythm() {
  return <ChefSection eyebrow="Start with your week" title="How often would a chef make life easier?">
    <p className="pc-section-intro">You do not need a finished meal plan to enquire. These example routines give us a starting point; the menu, visit length and number of meals are agreed around your home.</p>
    <div className="pc-rhythm-grid">{[
      ['Once a week', 'Take meal preparation off your weekend list. Plan a focused cooking visit for dishes to enjoy later, with storage guidance for each meal.'],
      ['Twice a week', 'Break up the week with two cooking days. Discuss a fresh meal during each visit and preparation for later within the agreed hours.'],
      ['More frequent cooking', 'Put fresh meals around your busiest days. We can help compare recurring visits with a dedicated household arrangement.'],
    ].map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
    <p className="pc-fineprint">These are scheduling examples, not additional packages. Existing single-visit and member terms apply. A dedicated full-time household chef is a separate service.</p>
  </ChefSection>
}
