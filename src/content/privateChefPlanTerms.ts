/**
 * HOW YOUR PRIVATE CHEF PLAN WORKS — plain-English rules, single source.
 *
 * Feeds two surfaces:
 *  - the digest under the price calculator (only `decisionRelevant` items)
 *  - the full page at /private-chef-dubai/how-your-plan-works (everything)
 *
 * Rates and thresholds are pulled from privateChefPricing.ts so a number is never typed twice.
 * `legalReview` is an INTERNAL note (never rendered): the item is published in plain English,
 * but specifics (durations, fees, employment structure, card/PIN handling) stay in the service
 * agreement until UAE counsel has reviewed them.
 */
import {
  ASSISTANT_BANDS,
  ASSISTANT_RATES,
  CUSTOM_STAFFING_FROM,
  LONG_TERM_MIN_SERVICES,
  OVERTIME,
  RESCHEDULE_NOTICE_HOURS,
  SPECIALISTS,
  fmt,
} from './privateChefPricing'

export interface TermTwoUp {
  left: { label: string; lines: string[] }
  right: { label: string; lines: string[] }
}

export interface TermItem {
  id: string
  title: string
  paragraphs: string[]
  bullets?: string[]
  twoUp?: TermTwoUp
  /** Shown in the digest under the calculator (rules that influence the purchase). */
  decisionRelevant: boolean
  /** Optional closing paragraph after bullets. */
  closing?: string
  /** Internal only. Never rendered. */
  legalReview?: string
}

export interface TermGroup {
  id: string
  title: string
  intro?: string
  items: TermItem[]
}

export const PROPOSAL_VALIDITY_DAYS = 14

const bands = ASSISTANT_BANDS.map((b) => `${b.min} to ${b.max} people — ${b.assistants === 0 ? 'chef only' : `+${b.assistants} assistant${b.assistants > 1 ? 's' : ''}`}`)
  .concat([`${CUSTOM_STAFFING_FROM}+ — custom staffing plan`])

export const PLAN_TERMS: TermGroup[] = [
  {
    id: 'your-plan',
    title: 'Your plan',
    intro: 'What you are actually buying, and what comes with it.',
    items: [
      {
        id: 'chef-is-part-of-the-service',
        title: 'A chef is only part of the service.',
        paragraphs: [
          'Hiring a chef directly may look less expensive because you are paying primarily for one person’s time. With myCHEF, the chef is part of a managed household service.',
          'Your plan can include chef matching, household onboarding, your Food Profile, ongoing quality follow-up, schedule management, support when requirements change, and access to replacement or additional culinary staff where needed.',
          'You still get the consistency of a regular chef, without having to build and manage the operating system around them yourself.',
        ],
        twoUp: {
          left: { label: 'Hiring independently', lines: ['You manage recruitment, assessment, scheduling, feedback, absence and replacement.'] },
          right: { label: 'With myCHEF', lines: ['We manage the chef structure. You decide how you want to eat.'] },
        },
        decisionRelevant: true,
      },
      {
        id: 'food-profile',
        title: 'Your Food Profile is included.',
        paragraphs: [
          'Every long-term household starts with a Food Profile. It records the practical things your chef should never have to guess:',
        ],
        bullets: ['Preferred cuisines', 'Foods you avoid', 'Allergies and dietary requirements', 'Children’s preferences', 'Portion sizes', 'Meal times', 'Spice level', 'Regular breakfast habits', 'Guest patterns', 'Shopping preferences'],
        decisionRelevant: false,
      },
      {
        id: 'food-profile-aim',
        title: 'You should not have to explain the same things every week.',
        paragraphs: [
          'Your chef works from the Food Profile, and your account manager updates it as your preferences change. When the chef changes, the profile stays with you.',
        ],
        decisionRelevant: false,
      },
      {
        id: 'chef-level',
        title: 'One price for the job. The level is what the chef earns.',
        paragraphs: [
          'There is one word for the person who cooks in your home: a professional chef. Nobody is placed until we have checked identity and right to work, passed them on a practical cooking assessment, taken references and confirmed food-hygiene awareness. The entry level is a pass, not a budget option.',
          'Three levels, and they describe the standard a chef is working to — not what you pay. Everyone starts at Level 1, and the price you see is the price. Consistently strong service across a month moves a chef to Level 2, and holding that standard for three months reaches Level 3. A chef whose work slips moves back down, and one who keeps slipping is taken off household work.',
          'The extra is paid by us, and your figure does not move when they move up. There is no more expensive grade of chef for us to move you up to.',
        ],
        decisionRelevant: true,
      },
      {
        id: 'how-we-keep-the-standard',
        title: 'How we keep the standard',
        paragraphs: [
          'Our quality process carries on after a chef has been matched to your home.',
          'We use your feedback, the service history and ongoing performance assessment to understand how each visit is actually going.',
          'We look at areas such as:',
        ],
        bullets: [
          'Food quality and presentation',
          'Professionalism and punctuality',
          'Cleanliness and kitchen care',
          'Communication',
          'Understanding of your preferences',
          'Consistency from one visit to the next',
          'Your overall satisfaction',
        ],
        closing:
          'Strong performance is recognised and incentivised across the myCHEF network. That is how the standard holds, and it is why the good chefs stay.',
        decisionRelevant: true,
      },
      {
        id: 'specialists',
        title: 'Keep your regular chef. Bring in specialists when you want them.',
        paragraphs: [
          'After your first month with myCHEF, long-term households can request specialist chefs for selected days without changing their regular household arrangement.',
          `For example: ${SPECIALISTS.join(', ')}.`,
          'Specialist services are priced separately according to the chef and requirement. The advantage is that you do not have to start searching externally every time you want something different.',
        ],
        decisionRelevant: true,
      },
      {
        id: 'kitchen-requirements',
        title: 'Your kitchen does not need to be professional. It does need to work.',
        paragraphs: [
          'Most residential kitchens are perfectly suitable. Before a recurring arrangement begins, we confirm that the kitchen has the essential cooking, refrigeration, storage and cleaning facilities needed for the service you choose.',
          'If specialist equipment is required for a particular cuisine or service, we will discuss it with you before anything is purchased or arranged.',
        ],
        decisionRelevant: false,
      },
      {
        id: 'containers',
        title: 'Food storage and containers.',
        paragraphs: [
          'For Food Prep and Kitchen on Autopilot plans, prepared meals need suitable reusable containers for refrigeration and storage.',
          'You can use your own containers, or we can help organise an appropriate set for your household. Any containers or specialist storage products purchased on your behalf are charged at actual cost.',
        ],
        decisionRelevant: false,
      },
      {
        id: 'dietary',
        title: 'Dietary requirements are part of the household plan.',
        paragraphs: [
          'Standard allergies, intolerances, religious requirements and household preferences can normally be incorporated into your Food Profile and menu planning.',
          'If your requirements involve clinical nutrition, medical dietary management, highly specific macro tracking or another specialist discipline, we will first confirm whether a suitably qualified specialist is required.',
        ],
        decisionRelevant: false,
      },
    ],
  },
  {
    id: 'money',
    title: 'Money',
    intro: 'What builds the price, what improves it, and what stays separate.',
    items: [
      {
        id: 'groceries',
        title: 'Two ways to manage groceries.',
        paragraphs: [
          'We do not add a percentage markup to your groceries. You pay the actual grocery cost plus any direct transport or delivery expense. The additional service cost comes from the chef time allocated to managing the kitchen.',
          'Some weeks require more shopping time than others. The service is therefore priced around an overall time allocation rather than charging you separately every time someone visits a supermarket.',
        ],
        twoUp: {
          left: { label: 'You manage the groceries', lines: ['Your chef plans the food with you and tells you what is needed. You purchase the ingredients and have them available for the scheduled service.'] },
          right: {
            label: 'Kitchen on Autopilot',
            lines: ['We take responsibility for the food-management process: planning meals, checking existing stock, building shopping lists, ordering online or shopping in person, organising receipts and tracking purchases. Your chef prepares the food and keeps the kitchen organised.'],
          },
        },
        decisionRelevant: true,
      },
      {
        id: 'guests',
        title: 'Your household plan covers normal household use.',
        paragraphs: [
          `Standard chef plans include cooking for up to ${ASSISTANT_BANDS[0].max} people. Having friends or family over occasionally is not a problem, but a bigger table usually needs extra hands — the guide below shows how many.`,
          'If you are planning a larger dinner, birthday, reception or event, your account manager can also move that service into our Catering team where appropriate.',
        ],
        bullets: bands,
        decisionRelevant: true,
      },
      {
        id: 'assistants',
        title: 'Additional kitchen assistant.',
        paragraphs: [
          `4 to 5 hours: ${fmt(ASSISTANT_RATES.short)}. Full 9-hour day: ${fmt(ASSISTANT_RATES.fullDay)}. Additional time: ${fmt(ASSISTANT_RATES.extraHour)} per hour.`,
          'The calculator adds assistants automatically based on your normal guest count.',
        ],
        decisionRelevant: true,
      },
      {
        id: 'overtime',
        title: 'Need the chef for longer?',
        paragraphs: [
          `Standard Full-Day Private Chef: ${OVERTIME.standardDayHours} hours. Extra time is quoted at the applicable hourly rate, from AED 150 to AED 500 an hour, agreed with you before anyone stays on. Additional assistant time: ${fmt(OVERTIME.assistant)} per hour.`,
          'Short extensions can often be handled by your regular chef when arranged in advance. Longer coverage may require a second chef or rotating team so service quality and working conditions remain sustainable.',
        ],
        decisionRelevant: true,
        legalReview: 'Working-hours framework (MOHRE) — keep customer wording; do not publish internal shift rules.',
      },
      {
        id: 'extended-coverage',
        title: 'From breakfast until late night.',
        paragraphs: [
          'Some households need more than a standard chef day: large families, houseguests, executive schedules, holiday periods, frequent entertaining, late-night dining.',
          'myCHEF can build extended kitchen coverage using overlapping chefs and assistants rather than relying on one person for an excessive shift. Coverage can be designed from early morning through late evening, and more extensive arrangements can be created where required. Extended coverage is quoted individually.',
        ],
        decisionRelevant: true,
      },
      {
        id: 'stability',
        title: 'More stability means better pricing.',
        paragraphs: [
          'A household booking one chef day each week requires us to reserve trained capacity around a relatively small schedule. A household using the service five or six days each week gives us much greater staffing stability.',
          'That efficiency allows us to offer a better effective service rate as the number of recurring chef days increases. We do not call this a promotional discount. It is simply a different operating cost.',
        ],
        decisionRelevant: true,
      },
      {
        id: 'minimum',
        title: 'Start from one service per week.',
        paragraphs: [
          `Long-term plans begin at 30 days and a minimum of ${LONG_TERM_MIN_SERVICES} chef services per month.`,
          'This allows households that only need weekly support to use the same managed system as clients with chefs five or seven days per week. The level of chef allocation and pricing improves as the regular schedule becomes larger.',
        ],
        decisionRelevant: true,
      },
      {
        id: 'billing',
        title: 'Simple monthly billing.',
        paragraphs: [
          'Long-term private chef plans are billed monthly. You choose your start date, preferred service days and expected frequency.',
          'Before confirming, you can see the price per service, typical weekly cost, estimated monthly cost, number of chef visits and total chef hours.',
          'If your first billing period begins partway through the month, the initial invoice can be based on the services scheduled for that period. Then the normal monthly cycle begins.',
        ],
        decisionRelevant: true,
      },
      {
        id: 'price-validity',
        title: 'Your estimate is transparent, not permanent.',
        paragraphs: [
          'Calculator prices are indicative based on the service configuration selected. Once myCHEF confirms chef availability and your household requirements, you receive the final service proposal.',
          `The proposal remains valid for ${PROPOSAL_VALIDITY_DAYS} days, unless stated otherwise.`,
        ],
        decisionRelevant: true,
      },
      {
        id: 'availability',
        title: 'Selecting a date does not automatically reserve a chef.',
        paragraphs: [
          'Your calculator result shows the expected service structure and price. Your chef is reserved only after myCHEF confirms availability and your booking is completed.',
        ],
        decisionRelevant: true,
      },
      {
        id: 'early-termination',
        title: 'No unnecessary long lock-in.',
        paragraphs: [
          'Long-term service is billed monthly. If you decide to stop the arrangement, your current paid billing period continues as scheduled and the next period is not renewed, subject to the notice terms in your service agreement.',
        ],
        decisionRelevant: true,
      },
    ],
  },
  {
    id: 'schedule',
    title: 'Schedule',
    intro: 'How reserved chef time works when life moves.',
    items: [
      {
        id: 'rescheduling',
        title: 'Move or cancel a visit with 24 hours’ notice.',
        paragraphs: [
          `Give us at least ${RESCHEDULE_NOTICE_HOURS} hours’ notice and you can move or cancel a scheduled chef service without being charged for it. Moving one depends on chef availability; cancelling one does not. Terms and conditions apply.`,
          `Inside 24 hours a service stays chargeable, because the chef’s day has already been held for you. Rescheduled services should normally be used within the same monthly billing period.`,
        ],
        decisionRelevant: true,
      },
      {
        id: 'unused-hours',
        title: 'You are reserving chef time, not buying rollover hours.',
        paragraphs: [
          'Your plan reserves a defined block of chef time around your household. If a four-hour service is completed in three and a half hours because the day’s menu is simpler, the remaining time does not carry forward as account credit.',
          'Where useful, the chef can use available time for preparation, snacks, kitchen organisation or planning within the scope of your service.',
        ],
        decisionRelevant: true,
      },
      {
        id: 'repeated-client-cancellations',
        title: 'Occasional changes are part of household life.',
        paragraphs: [
          'If scheduled services are repeatedly cancelled or moved, myCHEF may need to change the assigned chef or revise the recurring schedule so that staffing remains workable. We cannot permanently reserve the same chef around a schedule that is repeatedly unused.',
        ],
        decisionRelevant: false,
      },
      {
        id: 'leave',
        title: 'Professional chefs need a sustainable schedule too.',
        paragraphs: [
          'We build recurring schedules around your home and around the chef. Regular rest, proper leave and sensible hours are how the work stays good over months rather than weeks.',
          'When planned leave affects your schedule, your account manager coordinates the arrangement with you in advance. For higher-frequency households, replacement or rotating chef coverage can be arranged where required.',
        ],
        decisionRelevant: false,
      },
      {
        id: 'public-holidays',
        title: 'Public holidays and exceptional dates.',
        paragraphs: [
          'Your normal recurring rate applies to your agreed household schedule. Some UAE public holidays and exceptional high-demand dates may require adjusted staffing or additional charges.',
          'If a scheduled service is affected, the applicable rate will always be shown or confirmed before the service is changed. No surprise holiday charges.',
        ],
        decisionRelevant: false,
      },
      {
        id: 'travel',
        title: 'Taking your chef somewhere else?',
        paragraphs: [
          'Your chef plan is built around your primary Dubai residence. If you would like your chef to work from another residence, yacht, hotel, holiday property or outside the normal service area, we can usually arrange it.',
          'Additional travel time, transport, accommodation or other direct travel costs are quoted separately where applicable. For international or extended travel, your account manager will build a separate staffing plan around the trip.',
        ],
        decisionRelevant: false,
      },
    ],
  },
  {
    id: 'people',
    title: 'People in your home',
    intro: 'Continuity, replacement, and what the chef is — and is not — there to do.',
    items: [
      {
        id: 'chef-unavailable',
        title: 'Your service should not depend on one person’s calendar.',
        paragraphs: [
          'Your recurring plan is normally built around the same assigned chef so they can learn your household and preferences over time.',
          'If your chef becomes unavailable because of illness, leave or another unavoidable situation, your account manager coordinates the next step and, where possible, arranges suitable replacement coverage from the myCHEF network.',
          'We prioritise continuity, but replacement is always subject to chef availability, timing and the requirements of your household.',
        ],
        decisionRelevant: false,
      },
      {
        id: 'chef-cancellation',
        title: 'Chefs are people too. Illness and emergencies can happen.',
        paragraphs: [
          'If your assigned chef cannot attend, they must inform myCHEF as soon as reasonably possible. myCHEF will contact you and attempt to arrange one of the following: a suitable replacement chef, a rescheduled service, or a service credit where replacement or rescheduling is not practical.',
          'The chef should not arrange their own unofficial replacement directly with you. Replacement is coordinated through myCHEF so the person entering your home remains part of the approved system.',
          'Occasional illness or emergency is understandable. Repeated attendance issues are reviewed by myCHEF as part of our quality and performance process and may result in the chef being replaced.',
        ],
        decisionRelevant: false,
      },
      {
        id: 'ending-the-match',
        title: 'Either side can decide the match is not working.',
        paragraphs: [
          'You may ask myCHEF to change the chef. The chef may also tell myCHEF that they no longer wish to continue with a household. That is normal.',
          'If either the client or chef wishes to end the assignment, myCHEF should be informed as soon as possible. We will first try to understand whether the issue can be resolved through communication, schedule adjustments or service changes. If the match should end, we coordinate the transition and, where appropriate, begin arranging a replacement — client → myCHEF → solution, never arrangements made privately between client and chef.',
        ],
        decisionRelevant: false,
      },
      {
        id: 'access',
        title: 'Household access and keys.',
        paragraphs: [
          'You are responsible for providing lawful and reliable access to the property at the agreed service time. If the chef arrives but cannot enter, the scheduled time still counts.',
          'Any key, access card or household credential provided to myCHEF is recorded. It may only be used for the agreed household service and must be returned when access is withdrawn or the assignment ends.',
        ],
        decisionRelevant: false,
      },
      {
        id: 'cameras',
        title: 'Cameras and recording.',
        paragraphs: ['If cameras or recording systems operate in areas where the chef works, please let us know during onboarding. Transparency works both ways.'],
        decisionRelevant: false,
      },
      {
        id: 'children',
        title: 'The chef is not the nanny.',
        paragraphs: [
          'The chef can prepare food for children and interact normally with household members.',
          'Unless specifically contracted otherwise, myCHEF staff are responsible for the agreed culinary service only. They are not responsible for childcare, supervision of children, administering medication, transporting children or assuming responsibility for a child while a parent or guardian is absent.',
        ],
        decisionRelevant: false,
      },
      {
        id: 'pets',
        title: 'Pets.',
        paragraphs: ['Please let us know about pets before service begins, particularly animals that may require separation while the chef is working.'],
        decisionRelevant: false,
      },
      {
        id: 'illness',
        title: 'If someone at home is ill.',
        paragraphs: [
          'If somebody in your home has a contagious illness that creates a real risk, please tell us. If the chef is ill, they tell us. We then decide together whether to go ahead, move the visit, send someone else, or take extra precautions.',
        ],
        decisionRelevant: false,
      },
    ],
  },
  {
    id: 'when-something-goes-wrong',
    title: 'When something goes wrong',
    intro: 'A route for every problem — through your account manager, early.',
    items: [
      {
        id: 'accidents',
        title: 'Accidents and emergencies.',
        paragraphs: [
          'If the chef is injured at the property, they notify myCHEF immediately. In a kitchen accident, fire, major leak, serious injury or similar emergency, the priority is safety first, then communication with you and your account manager.',
        ],
        decisionRelevant: false,
      },
      {
        id: 'damage',
        title: 'Damage and breakage.',
        paragraphs: [
          'Any material damage or breakage believed to have occurred during service should be reported to myCHEF as soon as reasonably possible. We document and review the circumstances before determining the appropriate resolution.',
        ],
        decisionRelevant: false,
      },
      {
        id: 'complaints',
        title: 'If something is not right, tell your account manager.',
        paragraphs: [
          'We prefer issues to be raised early so we can correct them before they become recurring problems. A first complaint is investigated and fed back to the chef. A repeated issue leads to a performance plan. A serious issue leads to immediate reassignment.',
        ],
        decisionRelevant: false,
      },
      {
        id: 'scope',
        title: 'Changes to the job.',
        paragraphs: [
          'Your chef is assigned according to an agreed culinary scope. If your household requirements materially change — housekeeping, driving, childcare, personal assistance, event organising — speak with your account manager and we will adjust the service or staffing where appropriate.',
        ],
        decisionRelevant: false,
      },
      {
        id: 'immediate-termination',
        title: 'Some situations end an assignment immediately.',
        paragraphs: [
          'Either myCHEF or the chef may end an assignment without notice in cases such as threats or violence, harassment, discriminatory or sexually inappropriate behaviour, illegal activity, serious safety risks, deliberate misuse of the chef, materially different duties assigned without agreement, non-payment, or serious privacy or security concerns.',
        ],
        decisionRelevant: false,
      },
    ],
  },
  {
    id: 'payment-terms',
    title: 'Grocery management & household payment',
    intro: 'When myCHEF manages groceries on your behalf, every purchase is traceable: payment → receipt → staff member → household record.',
    items: [
      { id: 'pay-method', title: '1. Approved payment method', paragraphs: ['You provide an approved method for grocery and household food purchases: a designated household payment card, an authorised expense card, a cash float, an approved online grocery account, or another method agreed between you and myCHEF. The payment method remains your property and responsibility.'], decisionRelevant: false, legalReview: 'Card/PIN handling — align final contract wording with the payment products actually permitted (UAE banking terms on card sharing).' },
      { id: 'pay-user', title: '2. Authorised user', paragraphs: ['Only the chef or myCHEF team member specifically assigned and recorded as authorised for your household may use the payment method. That person is identifiable in your household account. The card, cash or other method may not be given to another person without approval.'], decisionRelevant: false },
      { id: 'pay-permitted', title: '3. Permitted purchases', paragraphs: ['The household payment method may only be used for purchases directly connected to your approved household service: groceries, food ingredients, drinking water, kitchen consumables, approved household food supplies, approved delivery costs and approved transport required for grocery purchasing. Personal or unrelated purchases are strictly prohibited.'], decisionRelevant: false },
      { id: 'pay-receipts', title: '4. Receipts are mandatory', paragraphs: ['Every purchase has a receipt or digital transaction record. For physical purchases the assigned staff member obtains the receipt, photographs it after purchase, records the purchase in the myCHEF household system, and places the original in the designated receipt box in your home. This applies regardless of the amount. A purchase without documentation is reported immediately.'], decisionRelevant: false },
      { id: 'pay-record', title: '5. Digital record', paragraphs: ['Every grocery transaction creates a record with, where available, the date, store or supplier, amount, receipt photograph, purchase category and the staff member responsible. Online purchases carry the order confirmation or digital receipt. Both you and myCHEF can trace household food spending.'], decisionRelevant: false },
      { id: 'pay-storage', title: '6. Card and cash storage', paragraphs: ['We agree a designated secure location inside the home for the household card, cash float and physical receipts. After shopping, the card and any remaining cash go back to their agreed location, receipts to the receipt box, and the transaction to the household system. The payment method is not normally taken away from the household outside an authorised purchasing period.'], decisionRelevant: false },
      { id: 'pay-cash', title: '7. Cash purchases', paragraphs: ['Where you provide cash, the same documentation applies: cash received, amount spent, receipts and remaining balance are recorded, and the remaining cash is returned to the agreed location after the purchasing activity.'], decisionRelevant: false },
      { id: 'pay-transport', title: '8. Transport and delivery', paragraphs: ['We do not add a markup to grocery transport. If you have a household driver, the chef can arrange shopping transport with them. If a taxi or other transport is needed, the actual cost is charged to you and recorded against that shopping trip. Online delivery charges work the same way. You pay the actual cost and nothing on top.'], decisionRelevant: false },
      { id: 'pay-no-markup', title: '9. No grocery markup', paragraphs: ['myCHEF does not add a percentage or purchasing commission to groceries. You pay the actual amount charged by the supermarket, supplier or delivery service. The additional cost of grocery management comes from the chef time allocated to planning, stock management, purchasing, communication and kitchen administration.'], decisionRelevant: false },
      { id: 'pay-planning', title: '10. Grocery planning', paragraphs: ['Grocery management is not just a trip to the supermarket. The time can go on planning meals, reading the Food Profile, checking what you already have, writing lists and comparing suppliers. It also covers ordering online or shopping in person, taking deliveries, putting the food away, recording receipts, and telling you what the kitchen needs. Some days take a lot of shopping time and some take none. We manage it across your recurring schedule rather than charging a shopping fee every visit.'], decisionRelevant: false },
      { id: 'pay-limits', title: '11. Spending limits', paragraphs: ['You may set a daily, weekly, monthly or per-transaction spending limit. Purchases above an agreed limit require your approval before the transaction is completed. You may also identify products or categories that always require approval.'], decisionRelevant: false },
      { id: 'pay-transparency', title: '12. Transparency', paragraphs: ['Every household purchase handled through myCHEF can be matched to a payment, a receipt, a staff member and a household record. Anything that cannot be reconciled is reported and investigated.'], decisionRelevant: false },
      { id: 'pay-misuse', title: '13. Lost card, cash discrepancy or suspected misuse', paragraphs: ['Any lost card, unexplained cash difference, incorrect purchase or suspected unauthorised use is reported immediately to you and to the responsible myCHEF manager. The staff member cooperates fully with the review and provides all receipts, records and supporting information. You remain responsible for contacting your bank or payment provider where a card needs to be blocked, replaced or disputed.'], decisionRelevant: false },
      { id: 'pay-credentials', title: '14. Security credentials', paragraphs: ['myCHEF staff never request or retain online banking passwords, mobile banking passwords, OTP codes or access to your main bank account. Where a card or payment product requires security credentials, the arrangement follows the rules applicable to that product and your bank.'], decisionRelevant: false, legalReview: 'PIN sharing liability under UAE banking rules — confirm permitted methods before publishing specifics.' },
      { id: 'pay-ending', title: '15. Ending access', paragraphs: ['When the chef assignment ends, or when you withdraw purchasing authority, the staff member’s authority to use the household payment method ends immediately. Any card, cash, receipts or other purchasing material is returned and reconciled.'], decisionRelevant: false },
    ],
  },
  {
    id: 'agreement',
    title: 'The agreement',
    intro: 'The detail lives in your service agreement. These are the principles.',
    items: [
      {
        id: 'structured-staffing',
        title: 'Structured staffing, not a handshake hire.',
        paragraphs: [
          'Having someone work regularly inside your home takes more than finding a good cook. We build the arrangement around documented, professionally managed staffing, rather than leaving you to find somebody informally and hope it holds.',
          'We ask to see the visa and the right-to-work document for every chef before they cook in your home — and none of it is yours to arrange, file or sponsor.',
        ],
        decisionRelevant: false,
        legalReview: 'UAE counsel to review before any specific employment/visa claims are published (MOHRE domestic-worker and temporary-employment frameworks).',
      },
      {
        id: 'direct-hiring',
        title: 'Working with a myCHEF chef privately.',
        paragraphs: [
          'Chefs are introduced to your household through myCHEF’s recruitment, assessment, training and matching. Engaging a chef introduced by myCHEF outside the service, during the arrangement or for a period afterwards, is covered by your service agreement.',
        ],
        decisionRelevant: false,
        legalReview: 'Non-solicitation duration and any transfer fee to be set with UAE legal review — do not publish figures.',
      },
      {
        id: 'confidentiality',
        title: 'Confidentiality goes both ways.',
        paragraphs: [
          'Your chef protects your identity, address, family information, schedule, photographs, conversations, guests and financial information. Equally, chef documents, CVs, personal information, identification and contact details shared with you remain confidential and are not distributed.',
        ],
        decisionRelevant: false,
      },
      {
        id: 'force-majeure',
        title: 'Circumstances neither side controls.',
        paragraphs: [
          'Severe weather, government restrictions, road or building closures, major accidents, emergencies, utility failures and other extraordinary circumstances can affect a scheduled service. In those cases we focus on rescheduling or mitigating rather than assigning blame to either party.',
        ],
        decisionRelevant: false,
      },
      {
        id: 'governing',
        title: 'Governing law and disputes.',
        paragraphs: ['Set out in your service agreement.'],
        decisionRelevant: false,
      },
    ],
  },
]

/** The mental model a client should hold after reading the pricing page. */
export const PLAN_MENTAL_MODEL = [
  'I am not subscribing to food. I am reserving professional chef capacity for my household.',
  'I decide how frequently I need it.',
  'I can decide whether I manage groceries or have myCHEF manage the kitchen.',
  'I know what the chef costs.',
  'I know what additional people cost.',
  'I know how schedule changes work.',
  'I know what happens if I need more hours.',
  'I know someone at myCHEF is responsible for managing the relationship.',
  'And the more stable my schedule becomes, the better the economics become.',
] as const

export const DECISION_ITEMS: TermItem[] = PLAN_TERMS.flatMap((g) => g.items.filter((i) => i.decisionRelevant))
export const TERM_ITEM_COUNT = PLAN_TERMS.reduce((n, g) => n + g.items.length, 0)
