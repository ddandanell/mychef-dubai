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
    case 'chef':
      return last.to === 'head'
        ? { title: 'Head Chef selected', body: 'Advanced menu planning, kitchen leadership and higher-complexity household service.' }
        : { title: 'Professional Chef selected', body: 'Best value for everyday household cooking — family meals, healthy cooking, international cuisine.' }
    case 'daysPerWeek': {
      const before = prev?.tier?.discount ?? 0
      const after = next.tier?.discount ?? 0
      if (after > before) return { title: 'Your service rate improved', body: 'Higher recurring frequency gives myCHEF greater staffing stability.' }
      if (after < before) return { title: 'Rate tier changed', body: 'Fewer recurring days means less staffing stability, so the standard long-term rate applies.' }
      return null
    }
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
          return { title: 'Kitchen on Autopilot', body: 'Planning, shopping, cooking and cleanup handled. Groceries charged at actual cost.' }
        case 'food-prep':
          return { title: 'Private Chef Food Prep', body: 'Food for your day, without staff in your home all day. You decide how the four hours are used.' }
        default:
          return { title: 'Fresh Meal', body: 'One meal, cooked fresh, served the way this house likes it.' }
      }
    case 'groceryMode':
      if (last.to === 'mychef') {
        return next.service.id === 'food-prep'
          ? { title: 'This is now Kitchen on Autopilot', body: 'One extra hour of kitchen management. Groceries stay at cost.' }
          : { title: 'Grocery management added', body: 'One extra hour of kitchen management per service. Groceries stay at cost.' }
      }
      return { title: 'You manage the groceries', body: 'Your chef sends a shopping list before each service.' }
    case 'duration':
      return last.to === 'short'
        ? { title: 'Short-stay rate', body: 'Trained staff are reserved for a shorter, less stable period, so the daily rate is higher.' }
        : { title: 'Long-term rate', body: 'A recurring schedule gives us stability, passed back to you as a better rate.' }
    default:
      return null
  }
}
