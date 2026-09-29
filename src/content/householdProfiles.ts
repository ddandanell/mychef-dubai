import profiles from './householdProfiles.json'

/** Cuisine/role profiles, not invented named candidates. Real introductions are made personally. */
export interface HouseholdProfile {
  id: string
  title: string
  level: number
  cuisine: string
  description: string
  bestFor: string
  menu: string
  arrangement: string
  image: string
  imageAlt: string
}
export const householdProfiles: HouseholdProfile[] = profiles
