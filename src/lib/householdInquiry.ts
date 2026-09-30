import { HOUSEHOLD_PATH, LIVE_IN_PATH, LIVE_OUT_PATH, SHORT_TERM_PATH, householdLevels, type HouseholdArrangement } from '@/content/householdChefs'
import { householdProfiles } from '@/content/householdProfiles'

export function householdInquiryHref(from = HOUSEHOLD_PATH, options: { arrangement?: HouseholdArrangement; level?: string; profiles?: string[] } = {}) {
  const params = new URLSearchParams({ from, service: 'household-chef' })
  if (options.arrangement) params.set('arrangement', options.arrangement)
  if (options.level) params.set('level', options.level)
  if (options.profiles?.length) params.set('profiles', options.profiles.slice(0, 3).join(','))
  return `/inquiry?${params}`
}

export function householdBriefFromParams(params: URLSearchParams, fallbackSource = '') {
  const from = params.get('from') || fallbackSource
  const active = params.get('service') === 'household-chef' || [HOUSEHOLD_PATH, LIVE_IN_PATH, LIVE_OUT_PATH].includes(from)
  const arrangementParam = params.get('arrangement')
  const arrangement: HouseholdArrangement = arrangementParam === 'live-in' || arrangementParam === 'live-out' || arrangementParam === 'help-me-choose' ? arrangementParam : from === LIVE_IN_PATH ? 'live-in' : from === LIVE_OUT_PATH ? 'live-out' : 'help-me-choose'
  const level = householdLevels.find(item => item.id === params.get('level'))
  const ids = [...new Set((params.get('profiles') || '').split(','))].slice(0, 3)
  const profiles = householdProfiles.filter(profile => ids.includes(profile.id))
  return { active, from, arrangement, level, profiles }
}

export function isChefServiceSource(source: string) {
  return source.startsWith('/private-chef-dubai') || [HOUSEHOLD_PATH, SHORT_TERM_PATH, '/our-chefs', '/part-time-private-chef-dubai', '/weekly-meal-prep-dubai', '/wellness-meal-prep-dubai'].includes(source)
}

export function householdBriefLines(params: URLSearchParams, values: { arrangement?: string; budget?: string; budgetBasis?: string; duration?: string; schedule?: string; preferences?: string } = {}, fallbackSource = '') {
  const brief = householdBriefFromParams(params, fallbackSource)
  if (!brief.active) return []
  const arrangement = values.arrangement || brief.arrangement
  return [
    'myCHEF Managed Household enquiry',
    `Arrangement: ${arrangement === 'live-in' ? 'Live-in' : arrangement === 'live-out' ? 'Daily live-out' : 'Help me choose'}`,
    `Monthly service budget: ${values.budget || 'To discuss; managed service from AED 15,000/month'}`,
    `Budget basis: ${values.budgetBasis || 'Complete managed service budget'}`,
    values.duration ? `Expected length of arrangement: ${values.duration}` : '',
    brief.level ? `Preferred culinary level: ${brief.level.name}` : '',
    brief.profiles.length ? `Chef styles: ${brief.profiles.map(p => `${p.title} (${p.id.toUpperCase()})`).join('; ')}` : '',
    values.schedule ? `Working days and meal times: ${values.schedule}` : '',
    values.preferences ? `Cuisine and household preferences: ${values.preferences}` : '',
    'Next step: brief and budget review before any paid search activation.',
  ].filter(Boolean)
}

export function chefServiceWhatsAppMessage(params: URLSearchParams) {
  const brief = householdBriefFromParams(params)
  if (brief.active) return `Hi myCHEF Dubai, I would like help finding a long-term chef for my home.\n${householdBriefLines(params).join('\n')}\nDubai area: __. Household size: __. Preferred start: __.\n(via mychef.ae${brief.from || HOUSEHOLD_PATH})`
  return `Hi myCHEF Dubai, I would like to discuss a private chef booking. Dates or cooking days: __. Household size: __. Dubai area: __.\n(via mychef.ae${params.get('from') || '/private-chef-dubai'})`
}
