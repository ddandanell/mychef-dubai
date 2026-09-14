/**
 * Public booking terms. Copy is the published policy; do not invent a second refund rule.
 *
 * Source: myCHEF Booking Terms v2.0 (14 September 2026) and the website
 * terms correction schedule of the same date. The quotation template carries
 * the same text. Payment of the deposit is acceptance.
 */

export type PolicyBlock =
  | { kind: 'p'; text: string }
  | { kind: 'lead'; text: string }
  | { kind: 'ul'; items: string[] }

export type PolicySection = {
  id: string
  title: string
  blocks: PolicyBlock[]
}

export type PolicyDoc = {
  path: string
  title: string
  h1: string
  description: string
  version: string
  lastUpdated: string
  intro: string[]
  sections: PolicySection[]
}

export const BOOKING_TERMS_VERSION = 'v2.0'
export const BOOKING_TERMS_UPDATED = '14 September 2026'

export const CANCELLATION_FAQ_ANSWER =
  'Cancel in writing to info@mychef.ae or the official WhatsApp used for the booking. Fifteen or more days before: the deposit is refunded less committed costs; we may retain 5% of the booking value for administration. Eight to 14 days: half the deposit is refunded, less committed costs. Forty-eight hours to seven days: the deposit is retained in full, together with committed costs. Less than 48 hours: up to 100% of the booking value may be payable. Days are calendar dates in Dubai time, UTC+4. Full wording: /private-client-booking-terms and /corporate-booking-terms.'

export const DEPOSIT_FAQ_ANSWER =
  'A 50% deposit confirms the booking and is acceptance of the quotation and the booking terms. The remaining 50% is due seven days before the first scheduled service. Bookings made inside seven days are payable in full on confirmation. Payment is by bank transfer or a secure card link; the payment date is when cleared funds reach us.'

export const PRIVATE_CLIENT_TERMS_PATH = '/private-client-booking-terms'
export const CORPORATE_BOOKING_TERMS_PATH = '/corporate-booking-terms'

const CANCELLATION_ITEMS = [
  '**15 days or more:** your deposit is refunded less any committed costs. We may retain 5% of the booking value for administration, at our discretion.',
  '**8 to 14 days:** half your deposit is refunded. We retain the other half together with any committed costs.',
  '**48 hours to 7 days:** your deposit is retained in full, together with any committed costs.',
  '**Less than 48 hours:** up to 100% of the booking value is payable, to the extent reasonably required to cover committed expenditure, work already carried out, personnel and supplier obligations, and the loss arising.',
]

const FAILURE_ITEMS = [
  '**Not delivered** (nobody attended, or so little was delivered that the service did not take place): a full refund of the amounts paid for it, together with reasonable direct losses you can evidence.',
  '**Severe failure** (service abandoned partway; a food-safety incident that stopped service; more than half the agreed menu not delivered; fewer than half the agreed personnel): a credit or refund of 50% to 75% of the booking value.',
  '**Material failure** (personnel significantly below the agreed number; a named chef replaced without approval; significant menu substitutions without approval; arrival more than an hour late; agreed standards not met): a credit or refund of 10% to 25% of the booking value.',
  '**Minor shortfall** (delivered as agreed with small issues such as slight lateness, an approved substitution, or presentation and tidying): we put it right, and offer a goodwill gesture or a discount on a future booking.',
]

export const PRIVATE_CLIENT_TERMS: PolicyDoc = {
  path: PRIVATE_CLIENT_TERMS_PATH,
  title: 'Private Client Booking Terms | myCHEF',
  h1: 'Private Client Booking Terms & Privacy Policy',
  description:
    'Booking, payment, cancellation, privacy and recording rules for private myCHEF Dubai occasions. Version 2.0, 14 September 2026.',
  version: BOOKING_TERMS_VERSION,
  lastUpdated: BOOKING_TERMS_UPDATED,
  intro: [
    'These terms apply to individuals booking myCHEF Dubai for personal occasions, private dining, celebrations and one-off catering services. Recurring household chef services follow their separate written service agreement. See [how your plan works](/private-chef-dubai/how-your-plan-works).',
    'These terms are provided with every quotation and form part of it. The version applying to your booking is identified on your quotation. Payment of the deposit confirms your acceptance of the quotation and of these terms. No signature is required for a private booking. We then issue a written booking confirmation.',
    'Company bookings use the [corporate and business booking terms](/corporate-booking-terms). Website data handling is also described in our [Privacy Policy](/privacy-policy).',
  ],
  sections: [
    {
      id: 'key-terms',
      title: 'Key terms',
      blocks: [
        {
          kind: 'lead',
          text: 'Please read these points before you pay.',
        },
        {
          kind: 'ul',
          items: [
            'A 50% deposit confirms your booking and reserves your date.',
            'The remaining 50% is due seven days before the first service date. A booking made inside seven days is payable in full on confirmation.',
            'If you cancel 15 or more days before: your deposit is refunded less committed costs. We may retain 5% of the booking value for administration.',
            'If you cancel 8 to 14 days before: half your deposit is refunded, less committed costs.',
            'If you cancel 48 hours to 7 days before: your deposit is retained in full, together with committed costs.',
            'If you cancel less than 48 hours before: up to 100% of the booking value is payable.',
            'If we do not deliver: a full refund. Severe failure: a credit of 50% to 75%. Material failure: a credit of 10% to 25%. Minor shortfalls: we put it right and offer a goodwill gesture.',
            'Our liability is limited to the amount you paid for this booking, except for death or personal injury caused by negligence, fraud, or a food-safety failure we are responsible for.',
          ],
        },
      ],
    },
    {
      id: 'about',
      title: '1. About myCHEF and these terms',
      blocks: [
        {
          kind: 'p',
          text: 'myCHEF Dubai is the customer-facing brand of Numini FZC, registered at Business Centre, Sharjah Publishing City Free Zone, Sharjah, United Arab Emirates.',
        },
        {
          kind: 'p',
          text: 'We plan, coordinate and manage private chef and catering services performed by licensed culinary partners. myCHEF is your contracting party, the recipient of your payment and the party responsible for refunds in every case. Working with partners does not reduce our responsibility to you.',
        },
        {
          kind: 'p',
          text: 'These terms are provided with your quotation and form part of it. The version applying to your booking is the one named on your quotation. Later changes to our published terms do not alter a booking already confirmed.',
        },
        {
          kind: 'p',
          text: 'Nothing in these terms excludes any right you have under UAE law that cannot be excluded.',
        },
      ],
    },
    {
      id: 'quotation',
      title: '2. Your quotation and how a booking is confirmed',
      blocks: [
        {
          kind: 'p',
          text: 'Your quotation sets out the date, venue, guest numbers, menu or specification, personnel, service hours, inclusions, exclusions and price. It is valid for 14 calendar days unless it states otherwise. A quotation does not reserve your date.',
        },
        {
          kind: 'p',
          text: 'Your booking is confirmed when we receive the required payment. Payment of the deposit confirms your acceptance of the quotation and of these terms. We then issue a written booking confirmation.',
        },
        {
          kind: 'p',
          text: 'If we receive payment but cannot confirm your booking, we return it in full.',
        },
      ],
    },
    {
      id: 'prices',
      title: '3. Prices and payment',
      blocks: [
        {
          kind: 'p',
          text: 'Prices are in UAE dirhams and are exclusive of VAT. VAT is added where it applies. We do not add booking fees, service charges or administration fees.',
        },
        {
          kind: 'p',
          text: 'A deposit of 50% confirms your booking. The balance is due seven days before the first service date. A booking made inside seven days is payable in full on confirmation.',
        },
        {
          kind: 'p',
          text: 'Payment is by bank transfer to the business account shown on our official invoice, or by a secure card link on request. The payment date is the date cleared funds reach us; card settlement can take up to seven days.',
        },
        {
          kind: 'p',
          text: 'Where the balance is not received by its due date we may treat the booking as cancelled at that point, and the cancellation terms in section 4 apply.',
        },
        {
          kind: 'p',
          text: 'Groceries and ingredients bought for you are charged at actual cost, with a receipt for every purchase and no markup by any party. Travel is charged as quoted and is paid in full to the person travelling.',
        },
        {
          kind: 'p',
          text: 'Additional hours, additional personnel, menu upgrades, rentals and other variations are charged only where you have approved the cost in writing beforehand. Nothing is added afterwards that you did not approve.',
        },
        {
          kind: 'p',
          text: 'Reduced guest numbers do not automatically reduce fixed staffing or equipment costs. We will explain any adjustment in writing.',
        },
      ],
    },
    {
      id: 'cancellation',
      title: '4. If you cancel',
      blocks: [
        {
          kind: 'p',
          text: 'Please cancel in writing to [info@mychef.ae](mailto:info@mychef.ae) or the WhatsApp number used for your booking, with your name, quotation reference and date. The date we receive your cancellation determines what applies. Days are counted between calendar dates in Dubai time, UTC+4. Weekends and public holidays count. A delay in our acknowledgement does not change the date your cancellation was received.',
        },
        {
          kind: 'ul',
          items: CANCELLATION_ITEMS,
        },
        {
          kind: 'p',
          text: 'Committed costs are amounts incurred specifically for your booking that cannot reasonably be cancelled, refunded, transferred or recovered. They include ingredients and specialist orders, equipment, furniture and linen hire, décor, entertainment, transport, venue costs, external suppliers, bespoke installations, and amounts we are contractually committed to pay our service partners for personnel reserved for your booking.',
        },
        {
          kind: 'p',
          text: 'We take reasonable steps to reduce cancellation costs, we do not charge twice for the same cost, and anything we recover, avoid or have refunded is taken into account. We will give you a written statement of how any retained amount was calculated.',
        },
        {
          kind: 'p',
          text: 'This policy concerns cancellation before service starts. It does not provide an automatic refund for completed services or a no-show without a cancellation message. Your rights relating to service failures remain unaffected.',
        },
        {
          kind: 'p',
          text: 'For cancellation of an entire multi-day programme before it begins, the first scheduled service date is used. Partial cancellation and changes after a programme starts follow the allocation and conditions in your accepted programme schedule.',
        },
      ],
    },
    {
      id: 'refund',
      title: '5. Receiving your refund',
      blocks: [
        {
          kind: 'p',
          text: 'We initiate eligible refunds within 10 business days of receiving your cancellation and any payment details needed, returned to the original payer by the original route where practical. We will not replace a refund with a credit unless you agree.',
        },
        {
          kind: 'p',
          text: 'Your bank may require additional settlement time.',
        },
      ],
    },
    {
      id: 'changes',
      title: '6. Moving your date',
      blocks: [
        {
          kind: 'p',
          text: 'Where you would rather postpone than cancel, we will make reasonable efforts to move your booking, and amounts paid are applied to the new date rather than treated as a cancellation.',
        },
        {
          kind: 'p',
          text: 'One postponement is included and the new date must fall within twelve months. Any cost already incurred that cannot be recovered, and any increase arising from the new date, remains payable.',
        },
        {
          kind: 'p',
          text: 'A request to postpone made less than seven days before the service date is treated as a cancellation, because personnel and ingredients are already committed. Where no new date is agreed within thirty days, the booking is treated as cancelled by reference to the notice originally given.',
        },
      ],
    },
    {
      id: 'emergencies',
      title: '7. Genuine emergencies',
      blocks: [
        {
          kind: 'p',
          text: 'Serious illness, bereavement and other exceptional circumstances outside your control do happen. In those cases we may, at our discretion, hold some or all of the amount we would otherwise retain, above our unavoidable costs, as a credit toward a future booking, valid twelve months.',
        },
        {
          kind: 'p',
          text: 'Granting a credit is a goodwill decision and does not affect our right to recover costs already incurred.',
        },
      ],
    },
    {
      id: 'menu',
      title: '8. Menus, numbers and dietary requirements',
      blocks: [
        {
          kind: 'p',
          text: 'Unless your quotation says otherwise, please confirm the final menu, guest count and dietary requirements seven calendar days before the first service. For later bookings these are agreed before confirmation.',
        },
        {
          kind: 'p',
          text: 'Please tell us about allergies, intolerances and religious or dietary requirements when requesting your quotation. We will confirm what can be accommodated.',
        },
        {
          kind: 'p',
          text: 'Shared kitchens and supplier handling can create cross-contact risks. We do not promise an entirely allergen-free environment without a specifically verified arrangement, and any material limitation is explained before you commit.',
        },
        {
          kind: 'p',
          text: 'Significant ingredient substitutions are discussed with you and must respect the agreed dietary requirements.',
        },
      ],
    },
    {
      id: 'venue',
      title: '9. Your venue and our service',
      blocks: [
        {
          kind: 'p',
          text: 'Please arrange lawful access and tell us about security procedures, loading, parking, kitchen facilities and anything else affecting delivery. Responsibility for venue permissions and permits is allocated in your quotation.',
        },
        {
          kind: 'p',
          text: 'Our team enters only the areas needed for the service or that you authorise. Keys and access credentials are used only for the agreed work and are returned or disabled when no longer needed.',
        },
        {
          kind: 'p',
          text: 'Your quotation states the service hours included. Extensions require agreement on availability, duration and price. Cleanup covers the catering areas specified.',
        },
        {
          kind: 'p',
          text: 'Our people may pause or stop work where they reasonably believe continuing is unsafe.',
        },
        {
          kind: 'p',
          text: 'For delivered food and leftovers, please follow the storage and handling instructions provided.',
        },
      ],
    },
    {
      id: 'bar',
      title: '10. Bar and alcohol',
      blocks: [
        {
          kind: 'p',
          text: 'Your quotation states whether drinks, bartender service, glassware, ice, mixers and garnishes are included. A bartender booking does not automatically include alcohol or unlimited drinks.',
        },
        {
          kind: 'p',
          text: 'Alcohol is supplied, served and invoiced only by the party holding the relevant licence. myCHEF does not supply or invoice alcohol unless your quotation expressly says so and the appropriate licence is in place.',
        },
        {
          kind: 'p',
          text: 'Client-supplied alcohol is accepted only where the venue, the service arrangements and the law permit. Alcohol is not served to anyone under the legal age, and our people may decline to serve where they reasonably consider it unsafe or unlawful.',
        },
      ],
    },
    {
      id: 'privacy',
      title: '11. Your privacy and confidentiality',
      blocks: [
        {
          kind: 'p',
          text: 'Your home, your event, your guests and your relationship with myCHEF are private. Our team and partners must not disclose your identity, address, event details, guest information, household circumstances or the fact that you have used us. This includes private conversations, references, social posts, check-ins, geotags and location sharing, and it continues after your booking ends.',
        },
        {
          kind: 'p',
          text: 'Limited information is shared with assigned personnel who need it to deliver your service, and remains subject to these obligations. Allergy and dietary information is health information, and information about children is treated with particular care.',
        },
      ],
    },
    {
      id: 'media',
      title: '12. Photography, filming and recordings',
      blocks: [
        {
          kind: 'lead',
          text: 'Our default is no photography, no filming and no audio recording.',
        },
        {
          kind: 'p',
          text: 'This covers site visits, preparation, food, table settings, service and cleanup, including when no guests are present, and it applies to management, chefs, service staff, drivers and partners using personal or professional devices. Food photographs and empty-room photographs are not exempt.',
        },
        {
          kind: 'p',
          text: 'Recording requires your specific prior written approval identifying what may be recorded, by whom and for what purpose. Permission to record is not permission to publish. Publication requires separate written approval of the exact content, caption, identifying details and channels.',
        },
        {
          kind: 'p',
          text: 'Silence, a previous booking, a public social post or acceptance of these terms is not media permission. Declining does not affect your service or your price. You may withdraw permission at any time and we will stop new uses and remove material from channels we control.',
        },
      ],
    },
    {
      id: 'problems',
      title: '13. If something goes wrong',
      blocks: [
        {
          kind: 'p',
          text: 'We are responsible to you for the service, whoever performs it. Please tell your coordinator during the service where you can, so we have the chance to put it right while it still matters.',
        },
        {
          kind: 'ul',
          items: FAILURE_ITEMS,
        },
        {
          kind: 'p',
          text: 'Written complaints may be sent to [info@mychef.ae](mailto:info@mychef.ae). We acknowledge within two business days and aim to give an initial outcome or progress update within 10 business days. Prompt reporting helps us investigate and does not affect your statutory rights.',
        },
        {
          kind: 'p',
          text: 'We assess what happened against your quotation and the agreed specification. Where the service was delivered as agreed we may not be able to offer a refund, but your feedback is recorded and it affects who we send to you and who we continue to work with.',
        },
        {
          kind: 'p',
          text: 'Damage claims must be supported by a reasonable explanation and evidence of responsibility and cost. You are not responsible for pre-existing damage or damage caused by our personnel or partners.',
        },
      ],
    },
    {
      id: 'we-cancel',
      title: '14. If we cancel, and circumstances beyond control',
      blocks: [
        {
          kind: 'p',
          text: 'We would only cancel where we genuinely cannot deliver safely or lawfully. Where we cancel for any reason other than your breach, we refund everything you have paid in full, and we will try to offer an alternative first.',
        },
        {
          kind: 'p',
          text: 'Where a named person becomes unavailable we provide a replacement of equal or better standard at no extra cost. That is not a cancellation.',
        },
        {
          kind: 'p',
          text: 'Where neither of us can proceed because of something genuinely beyond reasonable control, no cancellation charge applies either way, we will first try to reschedule, and amounts that cannot be recovered are dealt with fairly between us. Ordinary scheduling difficulty or a cost increase is not treated as force majeure, and this does not apply where the event arises from a party’s own breach.',
        },
      ],
    },
    {
      id: 'rights',
      title: '15. Your information',
      blocks: [
        {
          kind: 'p',
          text: 'We use your information to handle your enquiry, deliver your booking, manage payment, resolve concerns and meet our legal obligations. Marketing requires a separate choice. We do not sell your information.',
        },
        {
          kind: 'p',
          text: 'You may ask us what we hold, ask us to correct it, or ask us to delete it, subject to records we are required to keep. Further detail is in our [Privacy Policy](/privacy-policy).',
        },
      ],
    },
    {
      id: 'liability',
      title: '16. Liability',
      blocks: [
        {
          kind: 'p',
          text: 'We are responsible for delivering your booking with reasonable skill and care, and for the acts and omissions of the partners and people we appoint in performing it.',
        },
        {
          kind: 'p',
          text: 'We are not responsible for loss resulting from inaccurate information provided to us, from access or facilities being unavailable, from your own or your guests’ acts, or from anything beyond reasonable control.',
        },
        {
          kind: 'p',
          text: 'Except where the law does not allow it to be limited, our total liability for a booking is limited to the amount you paid for that booking. This limit does not apply to death or personal injury caused by negligence, to fraud, or to a food-safety failure for which we are responsible. We are not liable for indirect or consequential loss.',
        },
        {
          kind: 'p',
          text: 'We maintain insurance appropriate to our activities and require our partners to do the same for the work they perform.',
        },
      ],
    },
    {
      id: 'chefs',
      title: '17. The chefs you meet',
      blocks: [
        {
          kind: 'p',
          text: 'Our chefs are under written obligations not to accept direct bookings from clients they meet through us. If you would like the same person again, ask us and we will arrange it.',
        },
      ],
    },
    {
      id: 'general',
      title: '18. General',
      blocks: [
        {
          kind: 'p',
          text: 'Your quotation, these terms and any variations agreed in writing form the booking record. Changes take effect when confirmed in writing. The version named on your quotation applies to your booking.',
        },
        {
          kind: 'p',
          text: 'If any part of these terms cannot be enforced, the rest continues to apply.',
        },
        {
          kind: 'p',
          text: 'Please raise any concern with us first. We would always rather resolve it directly and quickly.',
        },
        {
          kind: 'p',
          text: 'These terms are governed by the laws of the United Arab Emirates, and disputes are submitted to the competent courts of Dubai, subject to mandatory consumer protections.',
        },
      ],
    },
  ],
}

export const CORPORATE_BOOKING_TERMS: PolicyDoc = {
  path: CORPORATE_BOOKING_TERMS_PATH,
  title: 'Corporate Booking Terms | myCHEF',
  h1: 'Corporate & Business Booking Terms',
  description:
    'Booking, invoicing, cancellation, confidentiality and recording rules for company catering with myCHEF Dubai. Version 2.0, 14 September 2026.',
  version: BOOKING_TERMS_VERSION,
  lastUpdated: BOOKING_TERMS_UPDATED,
  intro: [
    'These terms apply to companies and other organisations booking myCHEF Dubai for corporate catering, meetings, conferences, staff events, business hospitality and one-off functions.',
    'These terms are provided with every quotation and form part of it. The version applying to your booking is identified on your quotation. Your booking is confirmed when we receive the required payment, and payment of the deposit confirms your acceptance of the quotation and of these terms. We then issue a written booking confirmation. Where your procurement requires written acceptance or a purchase order, that may be used instead. Any procurement conditions must be raised and agreed before confirmation.',
    'Recurring office catering, institutional services and continuing contracts follow their separately accepted service agreements. Our confidentiality and media restrictions apply to every business booking. Private occasions use the [private client booking terms](/private-client-booking-terms).',
  ],
  sections: [
    {
      id: 'key-terms',
      title: 'Key terms',
      blocks: [
        {
          kind: 'lead',
          text: 'Please read these points before you pay.',
        },
        {
          kind: 'ul',
          items: [
            'A 50% deposit confirms your booking and reserves your date.',
            'The remaining 50% is due seven days before the first service date. A booking made inside seven days is payable in full on confirmation.',
            'If you cancel 15 or more days before: your deposit is refunded less committed costs. We may retain 5% of the booking value for administration.',
            'If you cancel 8 to 14 days before: half your deposit is refunded, less committed costs.',
            'If you cancel 48 hours to 7 days before: your deposit is retained in full, together with committed costs.',
            'If you cancel less than 48 hours before: up to 100% of the booking value is payable.',
            'If we do not deliver: a full refund. Severe failure: a credit of 50% to 75%. Material failure: a credit of 10% to 25%. Minor shortfalls: we put it right and offer a goodwill gesture.',
            'Our liability is limited to the amount you paid for this booking, except for death or personal injury caused by negligence, fraud, or a food-safety failure we are responsible for.',
          ],
        },
      ],
    },
    {
      id: 'parties',
      title: '1. Contracting parties',
      blocks: [
        {
          kind: 'p',
          text: 'myCHEF Dubai is the customer-facing brand of Numini FZC, registered at Business Centre, Sharjah Publishing City Free Zone, Sharjah, United Arab Emirates.',
        },
        {
          kind: 'p',
          text: 'We plan, coordinate and manage catering and hospitality services performed by licensed culinary partners. myCHEF is the contracting party, the recipient of your payment and the party responsible for refunds in every case. Partners perform the work; they are never the client’s counterparty.',
        },
        {
          kind: 'p',
          text: 'The client must provide its correct legal name, billing address, relevant tax information, purchase-order requirements and an authorised booking representative.',
        },
        {
          kind: 'p',
          text: 'These terms are provided with your quotation and form part of it. The version applying to your booking is the one named on your quotation. Later changes to our published terms do not alter a booking already confirmed.',
        },
      ],
    },
    {
      id: 'scope',
      title: '2. Scope and confirmation',
      blocks: [
        {
          kind: 'p',
          text: 'The quotation specifies the event date, venue, expected attendance, menu, service format, quantities, staffing, equipment, delivery arrangements, service hours and price. It is valid for 14 calendar days unless stated otherwise. A quotation, enquiry or purchase order alone does not reserve your date.',
        },
        {
          kind: 'p',
          text: 'Your booking is confirmed when we receive the required payment. Payment of the deposit confirms your acceptance of the quotation and of these terms. We then issue a written booking confirmation.',
        },
        {
          kind: 'p',
          text: 'Where a corporate client requires written acceptance or a purchase order, that may be used instead. Any procurement conditions or proposed changes to these terms must be identified and agreed before confirmation. Terms introduced afterwards do not vary the booking.',
        },
        {
          kind: 'p',
          text: 'If we receive payment but cannot confirm your booking, we return it in full.',
        },
      ],
    },
    {
      id: 'payment',
      title: '3. Payment and invoicing',
      blocks: [
        {
          kind: 'p',
          text: 'Prices are in UAE dirhams and are exclusive of VAT. VAT is added where it applies. We do not add booking fees, service charges or administration fees.',
        },
        {
          kind: 'p',
          text: 'A 50% deposit is required to confirm an event. The remaining 50% is due seven days before the first scheduled service. Bookings confirmed inside seven days require full payment at confirmation.',
        },
        {
          kind: 'p',
          text: 'Payment is by bank transfer to the business account shown on the official invoice, or by a secure card link on request. The payment date is the date cleared funds reach us; card settlement can take up to seven days. Standard event bookings do not include post-event credit terms.',
        },
        {
          kind: 'p',
          text: 'The client must communicate invoice-format, purchase-order and vendor-registration requirements before confirmation. Internal approval or purchase-order delays do not automatically extend an agreed payment deadline.',
        },
        {
          kind: 'p',
          text: 'Where the balance is not received by its due date we may treat the booking as cancelled at that point, and the cancellation terms in section 5 apply.',
        },
        {
          kind: 'p',
          text: 'Groceries and ingredients bought for you are charged at actual cost, with a receipt for every purchase and no markup by any party. Travel is charged as quoted and is paid in full to the person travelling.',
        },
        {
          kind: 'p',
          text: 'If payment becomes overdue, we will notify the client and explain any proposed pause in further commitments or service, subject to the contract and applicable law. No undisclosed daily penalty applies under these standard terms.',
        },
      ],
    },
    {
      id: 'instructions',
      title: '4. Authorised instructions and additional work',
      blocks: [
        {
          kind: 'p',
          text: 'The client must appoint an authorised representative to approve the scope, final guest count, schedule and additional costs.',
        },
        {
          kind: 'p',
          text: 'Instructions from attendees, venue personnel or other suppliers do not automatically authorise extra charges to the client.',
        },
        {
          kind: 'p',
          text: 'Menu upgrades, additional guests, staffing, overtime, equipment, decoration and other variations require written agreement on scope and price before commitment. We will maintain a record of approved changes.',
        },
      ],
    },
    {
      id: 'cancellation',
      title: '5. If you cancel',
      blocks: [
        {
          kind: 'p',
          text: "Cancellation must be submitted in writing to [info@mychef.ae](mailto:info@mychef.ae) or the official WhatsApp number used for the booking by the client's authorised representative, with the quotation reference and date. The date we receive the cancellation determines what applies. Days are counted between calendar dates in Dubai time, UTC+4. Weekends and public holidays count. Delayed acknowledgement by myCHEF does not change the receipt date.",
        },
        {
          kind: 'ul',
          items: CANCELLATION_ITEMS,
        },
        {
          kind: 'p',
          text: 'Committed costs are amounts incurred specifically for your booking that cannot reasonably be cancelled, refunded, transferred or recovered. They include ingredients and specialist orders, equipment, furniture and linen hire, décor, entertainment, transport, venue costs, external suppliers, bespoke installations, and amounts we are contractually committed to pay our service partners for personnel reserved for your booking.',
        },
        {
          kind: 'p',
          text: 'We take reasonable steps to reduce cancellation costs, we do not charge twice for the same cost, and anything we recover, avoid or have refunded is taken into account. We will give you a written statement of how any retained amount was calculated.',
        },
        {
          kind: 'p',
          text: 'Completed services and no-shows without a cancellation message do not qualify as pre-service cancellations. Remedies for failure to deliver the agreed service are handled separately.',
        },
        {
          kind: 'p',
          text: 'For cancellation of an entire multi-day programme before it starts, the first scheduled service date is used. Partial cancellation, individual service reductions and changes after commencement follow the allocation and conditions in the accepted programme schedule.',
        },
        {
          kind: 'p',
          text: 'A separately signed recurring-service agreement governs cancellation and termination of continuing corporate contracts.',
        },
      ],
    },
    {
      id: 'refund',
      title: '6. Refund processing',
      blocks: [
        {
          kind: 'p',
          text: 'We will provide a written refund calculation and initiate eligible refunds within 10 business days after receiving the cancellation and verified payment details, or sooner where required by law.',
        },
        {
          kind: 'p',
          text: 'Refunds are returned to the original payer through the original payment route where practical. Bank settlement may take longer. Credit notes or vouchers will not replace a monetary refund without agreement.',
        },
      ],
    },
    {
      id: 'changes',
      title: '7. Moving your date',
      blocks: [
        {
          kind: 'p',
          text: 'Where you would rather postpone than cancel, we will make reasonable efforts to move your booking, and amounts paid are applied to the new date rather than treated as a cancellation.',
        },
        {
          kind: 'p',
          text: 'One postponement is included and the new date must fall within twelve months. Any cost already incurred that cannot be recovered, and any increase arising from the new date, remains payable.',
        },
        {
          kind: 'p',
          text: 'A request to postpone made less than seven days before the service date is treated as a cancellation. Where no new date is agreed within thirty days, the booking is treated as cancelled by reference to the notice originally given.',
        },
        {
          kind: 'p',
          text: 'Serious illness, bereavement and other exceptional circumstances outside the client’s control may, at our discretion, be treated as a credit toward a future booking for amounts above our unavoidable costs, valid twelve months. Granting a credit is a goodwill decision.',
        },
      ],
    },
    {
      id: 'attendance',
      title: '8. Attendance, menus and dietary requirements',
      blocks: [
        {
          kind: 'p',
          text: 'Unless the quotation specifies another deadline, the final guest count, menu, dietary requirements and event schedule must be confirmed seven calendar days before service. Later bookings must settle these details before confirmation.',
        },
        {
          kind: 'p',
          text: 'Additional attendance or late changes may require extra food, staff or equipment and are subject to availability and written approval.',
        },
        {
          kind: 'p',
          text: 'Reduced attendance does not automatically reduce fixed costs. We will explain any adjustment in writing.',
        },
        {
          kind: 'p',
          text: 'The client should collect dietary information accurately and share only what is necessary for safe service. We will confirm which requirements can be accommodated and any limitations.',
        },
        {
          kind: 'p',
          text: 'Shared kitchens and supplier handling may create cross-contact risks. An entirely allergen-free environment is not guaranteed without a specifically verified arrangement. Significant ingredient substitutions require consultation and must preserve agreed dietary requirements.',
        },
      ],
    },
    {
      id: 'venue',
      title: '9. Venue access, logistics and permits',
      blocks: [
        {
          kind: 'p',
          text: "The client must provide the venue's operational requirements, loading arrangements, parking information, security clearances, delivery windows and relevant kitchen or utility limitations.",
        },
        {
          kind: 'p',
          text: 'The quotation will allocate responsibility for venue permissions and event permits. Each service provider remains responsible for the licences required for its own work.',
        },
        {
          kind: 'p',
          text: 'Necessary equipment and special rentals will be agreed before ordering. Venue restrictions affecting cooking, alcohol, waste disposal, noise, branding or service must be disclosed during planning.',
        },
        {
          kind: 'p',
          text: 'Alcohol is supplied, served and invoiced only by the party holding the relevant licence. myCHEF does not supply or invoice alcohol unless the quotation expressly says so and the appropriate licence is in place.',
        },
        {
          kind: 'p',
          text: 'For outdoor or yacht services, we will coordinate relevant safety restrictions and discuss alternatives if the intended arrangement becomes unsafe or unavailable.',
        },
      ],
    },
    {
      id: 'hours',
      title: '10. Service hours and equipment',
      blocks: [
        {
          kind: 'p',
          text: 'The quotation states the included staffing and service hours. Additional time requires approval of the rate and duration. Client or venue delays do not automatically create unlimited service time.',
        },
        {
          kind: 'p',
          text: 'Setup and cleanup cover the agreed catering areas and equipment. Unrelated venue cleaning is excluded unless expressly included.',
        },
        {
          kind: 'p',
          text: "Rental items remain the owner's property. Collection arrangements, security deposits and any agreed replacement rates must be disclosed in advance.",
        },
        {
          kind: 'p',
          text: 'Charges for damage or loss must be supported by evidence of responsibility and reasonable cost. Normal wear, pre-existing damage and damage caused by our personnel or partners are not automatically charged to the client.',
        },
      ],
    },
    {
      id: 'confidentiality',
      title: '11. Corporate confidentiality',
      blocks: [
        {
          kind: 'lead',
          text: "We treat the client's identity, event and business information as confidential.",
        },
        {
          kind: 'p',
          text: 'Without specific written authorisation, our personnel and partners must not disclose:',
        },
        {
          kind: 'ul',
          items: [
            'The fact that the company has booked myCHEF.',
            'Company names, logos, offices or event locations.',
            'Employee, executive, customer or guest identities.',
            'Attendance lists, schedules or travel arrangements.',
            'Business discussions, presentations, documents or screens.',
            'Product launches, confidential projects or unreleased information.',
            'Budgets, pricing, security arrangements or access credentials.',
          ],
        },
        {
          kind: 'p',
          text: 'The restriction applies to public posts, private conversations with unrelated people, sales presentations, supplier portfolios and claims that the client endorses our services.',
        },
        {
          kind: 'p',
          text: 'Confidentiality continues after the event and after a person or supplier stops working with myCHEF.',
        },
        {
          kind: 'p',
          text: 'Information may be shared only with authorised personnel who need it to perform the booking, or where a valid legal or emergency basis requires disclosure. Such sharing must be limited to what is necessary.',
        },
        {
          kind: 'p',
          text: 'The client may propose an additional confidentiality agreement before booking. Any additional requirements must be reviewed and agreed in writing.',
        },
      ],
    },
    {
      id: 'media',
      title: '12. Photography, recording and publicity',
      blocks: [
        {
          kind: 'lead',
          text: 'No photography, filming, audio recording or livestreaming is permitted by our team without prior written approval.',
        },
        {
          kind: 'p',
          text: 'This includes site visits, setup, food presentation, service and cleanup. Empty venues and food-only images are not automatically exempt because they may reveal confidential details.',
        },
        {
          kind: 'p',
          text: 'The rule applies to management, chefs, assistants, service personnel, drivers and partners using personal or professional devices.',
        },
        {
          kind: 'p',
          text: 'Capture permission must identify the authorised person, areas, subject matter, purpose and intended recipients. Any necessary permission from identifiable individuals, venue owners or other rights holders must also be obtained.',
        },
        {
          kind: 'lead',
          text: 'Publication requires separate written approval of the exact content and intended use.',
        },
        {
          kind: 'p',
          text: 'Approval must cover the image or recording, caption, company references, channels and any timing restrictions or embargo. Permission for one use does not authorise another.',
        },
        {
          kind: 'p',
          text: 'We will not use your company name, logo, event or images in case studies, advertisements, social media, proposals, press materials or staff portfolios without the appropriate written approval.',
        },
        {
          kind: 'p',
          text: 'Acceptance of catering terms, permission to enter the venue or a public company post does not constitute permission for myCHEF publicity. Optional media permission is not a condition of service.',
        },
        {
          kind: 'p',
          text: 'You may withdraw optional permission. We will stop new uses and remove controlled material where applicable, explaining any limitations relating to previously printed material, independent copies or legally retained records.',
        },
      ],
    },
    {
      id: 'security',
      title: '13. Partners and information security',
      blocks: [
        {
          kind: 'p',
          text: "Personnel and partners acting for myCHEF must follow the booking's confidentiality, recording and access restrictions.",
        },
        {
          kind: 'p',
          text: 'Booking information must not be used for independent supplier marketing or disclosed outside the authorised service team.',
        },
        {
          kind: 'p',
          text: 'Access cards, keys and credentials may be used only for the agreed work and must be returned or disabled when no longer required. Access to client systems, documents or rooms outside the service scope is not permitted without authorisation.',
        },
        {
          kind: 'p',
          text: 'Suspected unauthorised recording or disclosure must be reported immediately to the coordinator. We will stop further sharing, investigate and make any notifications required by applicable law.',
        },
      ],
    },
    {
      id: 'failures',
      title: '14. If something goes wrong',
      blocks: [
        {
          kind: 'p',
          text: 'We are responsible to you for the service, whoever performs it. Please raise operational concerns with the coordinator during the event so we can try to correct them immediately.',
        },
        {
          kind: 'ul',
          items: FAILURE_ITEMS,
        },
        {
          kind: 'p',
          text: 'Written complaints may be sent to [info@mychef.ae](mailto:info@mychef.ae). We will acknowledge them within two business days and aim to provide an initial outcome or progress update within 10 business days.',
        },
      ],
    },
    {
      id: 'we-cancel',
      title: '15. If we cancel, and circumstances beyond control',
      blocks: [
        {
          kind: 'p',
          text: 'We would only cancel where we genuinely cannot deliver safely or lawfully. Where we cancel for any reason other than the client’s breach, we refund everything paid in full, and we will try to offer an alternative first.',
        },
        {
          kind: 'p',
          text: 'Where a named person becomes unavailable we provide a replacement of equal or better standard at no extra cost. That is not a cancellation.',
        },
        {
          kind: 'p',
          text: 'Where neither of us can proceed because of something genuinely beyond reasonable control, no cancellation charge applies either way, we will first try to reschedule, and amounts that cannot be recovered are dealt with fairly between us. Ordinary scheduling difficulties or cost increases are not treated as force majeure, and this does not apply where the event arises from a party’s own breach.',
        },
      ],
    },
    {
      id: 'liability',
      title: '16. Liability',
      blocks: [
        {
          kind: 'p',
          text: 'We are responsible for delivering the booking with reasonable skill and care, and for the acts and omissions of the partners and people we appoint in performing it.',
        },
        {
          kind: 'p',
          text: 'Except where the law does not allow it to be limited, our total liability for a booking is limited to the amount you paid for that booking. This limit does not apply to death or personal injury caused by negligence, to fraud, or to a food-safety failure for which we are responsible. We are not liable for indirect or consequential loss.',
        },
        {
          kind: 'p',
          text: 'Applicable insurance arrangements and the party carrying the cover will be confirmed where relevant. Our booking-protection commitments are not themselves a separately underwritten insurance product.',
        },
      ],
    },
    {
      id: 'direct-hire',
      title: '17. Direct engagement of chefs or partners',
      blocks: [
        {
          kind: 'p',
          text: 'For twelve months after the last service date of a booking, the client must not engage, employ or contract directly with a chef, server or other service partner introduced through myCHEF for work of the same kind in the UAE, except through myCHEF.',
        },
        {
          kind: 'p',
          text: 'If that restriction is broken, a fee equal to three months of the service value of the relevant booking becomes payable. Introducing the same person through myCHEF is the ordinary route and does not attract that fee.',
        },
      ],
    },
    {
      id: 'responsibility',
      title: '18. General',
      blocks: [
        {
          kind: 'p',
          text: 'These terms do not exclude liability or remedies that cannot lawfully be excluded.',
        },
        {
          kind: 'p',
          text: 'The agreement is governed by the laws of the United Arab Emirates, and disputes are submitted to the competent courts of Dubai, subject to mandatory consumer protections.',
        },
        {
          kind: 'p',
          text: 'The accepted quotation, agreed variations and the version of these terms named on the quotation form the booking record. Later website changes do not silently amend an existing contract.',
        },
      ],
    },
  ],
}

export function policyPlainText(doc: PolicyDoc): string {
  const bits: string[] = [...doc.intro]
  for (const section of doc.sections) {
    bits.push(section.title)
    for (const block of section.blocks) {
      if (block.kind === 'ul') bits.push(...block.items)
      else bits.push(block.text)
    }
  }
  return bits.join('\n')
}
