/**
 * Corporate staffing roles for costing conversations.
 * These AED figures are internal candidates, not public offers.
 * Do not render amounts on customer pages until an approved selling price exists.
 */

export type StaffCostState = 'proposed' | 'advertised'

export type CorporateStaffRole = {
  id: string
  role: string
  bookedHours: string
  duties: string
  setupClearance: string
  transport: string
  uniform: string
  extraHours: string
  equipmentExclusions: string
  proposedAed: number | null
  costState: StaffCostState
  publicNote: string
}

export const CORPORATE_STAFF_ROLES: readonly CorporateStaffRole[] = [
  {
    id: 'waiter',
    role: 'Waiter',
    bookedHours: 'Service window plus setup and clearance, named in the proposal',
    duties: 'Pass, replenish, clear plates and glasses, keep the line tidy',
    setupClearance: 'Included in the booked hours unless overtime is agreed',
    transport: 'Quoted if the venue is outside the usual Dubai service area',
    uniform: 'myCHEF service dress unless the client specifies otherwise',
    extraHours: 'Agreed in advance. Not assumed.',
    equipmentExclusions: 'Does not include glass hire or bar kit',
    proposedAed: null,
    costState: 'proposed',
    publicNote: 'Waiters appear as a line when they are not already inside the package.',
  },
  {
    id: 'runner',
    role: 'Runner',
    bookedHours: 'Service window',
    duties: 'Carry, reset, support waiters on larger rooms',
    setupClearance: 'With the service team',
    transport: 'As for waiters',
    uniform: 'Service dress',
    extraHours: 'Agreed in advance',
    equipmentExclusions: 'Not a chef and not a bartender',
    proposedAed: null,
    costState: 'proposed',
    publicNote: 'Used on larger rooms. Quoted only when needed.',
  },
  {
    id: 'chef',
    role: 'Chef',
    bookedHours: 'Prep plus service, named by format',
    duties: 'Cook, plate, hold temperatures, lead the kitchen side of the room',
    setupClearance: 'Kitchen left as found on staffed jobs',
    transport: 'Quoted with the job',
    uniform: 'Kitchen whites or agreed service dress',
    extraHours: 'AED 150 extra hour exists on household chef visits, not as a corporate default here',
    equipmentExclusions: 'Venue cooking equipment is checked, not assumed',
    proposedAed: null,
    costState: 'proposed',
    publicNote: 'Chef time is inside plated and live-station formats. It is not inside drop-off.',
  },
  {
    id: 'barista',
    role: 'Barista',
    bookedHours: 'Break window',
    duties: 'Coffee and tea service',
    setupClearance: 'Machine setup and pack-down',
    transport: 'Quoted with the cart if a cart is hired',
    uniform: 'Service dress',
    extraHours: 'Agreed in advance',
    equipmentExclusions: 'Barista labour is not a complete coffee-cart package',
    proposedAed: null,
    costState: 'proposed',
    publicNote: 'Labour and a full coffee cart are separate lines.',
  },
  {
    id: 'supervisor',
    role: 'Floor supervisor',
    bookedHours: 'Full service including speeches or agenda holds',
    duties: 'Run the catering timeline against the agenda, speak to the client contact',
    setupClearance: 'Present for load-in and pack-down',
    transport: 'Quoted with the job',
    uniform: 'Service dress',
    extraHours: 'Agreed in advance',
    equipmentExclusions: 'Not event production, AV or staging',
    proposedAed: null,
    costState: 'proposed',
    publicNote: 'Named on larger events. One catering owner on the floor.',
  },
]
