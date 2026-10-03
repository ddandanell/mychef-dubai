import type { Quote, QuoteInput } from '@/content/privateChefPricing'

export interface LastChange {
  key: keyof QuoteInput
  from: QuoteInput[keyof QuoteInput]
  to: QuoteInput[keyof QuoteInput]
}

export interface Feedback {
  title: string
  body: string
}

/** One short line explaining why the price just moved. Pure: derived from the change, not stored. */
export function feedbackFor(last: LastChange | null, prev: Quote | null, next: Quote): Feedback | null {
  if (!last) return null
  switch (last.key) {
    case 'daysPerWeek':
      return { title: 'Your visit count changed', body: 'The member rate per visit stays the same. Only the number of booked visits changes.' }
    case 'guests': {
      const before = prev?.assistants ?? 0
      if (next.customStaffing) return { title: 'Custom staffing review', body: 'From 40 people we design the team with you. The estimate assumes three assistants.' }
      if (next.assistants > before) {
        const diff = next.assistants - before
        return { title: `+${diff} assistant${diff > 1 ? 's' : ''} added`, body: 'From nine people a kitchen assistant joins. The calculator adds them automatically.' }
      }
      if (next.assistants < before) return { title: next.assistants === 0 ? 'No assistant needed' : 'One assistant fewer', body: 'Up to eight people are included in the chef price.' }
      return null
    }
    case 'serviceId':
      switch (last.to) {
        case 'full-day':
          return { title: 'Grocery management included', body: 'A full chef day already covers planning, shopping, the Food Profile and cleanup.' }
        case 'autopilot':
          return { title: 'Fridge Reset, chef shops', body: 'Planning, shopping, cooking and cleanup handled. Groceries charged at actual cost.' }
        case 'food-prep':
          return { title: 'Fridge Reset', body: 'About 20–25 labelled portions, depending on the menu, portions and kitchen.' }
        default:
          return { title: 'Private Chef Visit', body: 'One meal, cooked fresh, served the way this house likes it.' }
      }
    case 'groceryMode':
      if (last.to === 'mychef') {
        return next.service.id === 'food-prep'
          ? { title: 'This is now Fridge Reset, chef shops', body: 'One extra hour of kitchen management. Groceries stay at cost.' }
          : { title: 'Grocery management added', body: 'One extra hour of kitchen management per service. Groceries stay at cost.' }
      }
      return { title: 'You manage the groceries', body: 'Your chef sends a shopping list before each service.' }
    case 'duration':
      return last.to === 'short'
        ? { title: 'Single rate', body: 'Book one visit or several. There is no minimum number of days.' }
        : { title: 'Member rate', body: 'For monthly plans of four or more prepaid visits. No further rate reduction at higher frequencies.' }
    default:
      return null
  }
}
