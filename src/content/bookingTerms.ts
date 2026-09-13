/**
 * Public booking terms. Copy is the published policy; do not invent a second refund rule.
 *
 * Refund direction (both documents):
 *   7+ calendar days before the event: amounts paid are not refunded, except where law requires it.
 *   6 calendar days or less, before service starts: amounts paid are refunded in full.
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
  lastUpdated: string
  intro: string[]
  sections: PolicySection[]
}

export const BOOKING_TERMS_UPDATED = '13 September 2026'

export const CANCELLATION_FAQ_ANSWER =
  'Cancel in writing to info@mychef.ae or the official WhatsApp used for the booking. Seven or more calendar days before the event date, amounts already paid are not refunded except where required by law. Six calendar days or less before the event, and before service starts, amounts paid are refunded in full, including the deposit. Days are calendar dates in Dubai time, UTC+4. Full wording: /private-client-booking-terms and /corporate-booking-terms.'

export const DEPOSIT_FAQ_ANSWER =
  'A 50% deposit confirms the event. The remaining 50% is due 24 hours before the first scheduled service. Bookings confirmed inside that window are paid in full at confirmation.'

export const PRIVATE_CLIENT_TERMS_PATH = '/private-client-booking-terms'
export const CORPORATE_BOOKING_TERMS_PATH = '/corporate-booking-terms'

export const PRIVATE_CLIENT_TERMS: PolicyDoc = {
  path: PRIVATE_CLIENT_TERMS_PATH,
  title: 'Private Client Booking Terms | myCHEF',
  h1: 'Private Client Booking Terms & Privacy Policy',
  description:
    'Booking, payment, cancellation, privacy and recording rules for private myCHEF Dubai occasions. Refunds at six days or less; no refunds at seven days or more.',
  lastUpdated: BOOKING_TERMS_UPDATED,
  intro: [
    'These terms apply to individuals booking myCHEF Dubai for personal occasions, private dining, celebrations and one-off catering services. Recurring household chef services follow their separate written service agreement. See [how your plan works](/private-chef-dubai/how-your-plan-works).',
    'Company bookings use the [corporate and business booking terms](/corporate-booking-terms). Website data handling is also described in our [Privacy Policy](/privacy-policy).',
  ],
  sections: [
    {
      id: 'about',
      title: '1. About myCHEF Dubai',
      blocks: [
        {
          kind: 'p',
          text: 'myCHEF Dubai is the customer-facing brand of Numini FZC, registered at Business Centre, Sharjah Publishing City Free Zone, Sharjah, United Arab Emirates.',
        },
        {
          kind: 'p',
          text: 'We plan and coordinate private chef experiences and catering services delivered by licensed culinary providers. Your quotation identifies the contracting parties, their responsibilities, the payment recipient and the party responsible for refunds before you make payment.',
        },
        {
          kind: 'p',
          text: 'myCHEF is your central contact for planning, changes and concerns. Working with culinary partners does not remove any responsibility we have under your agreement or applicable law.',
        },
      ],
    },
    {
      id: 'quotation',
      title: '2. Your quotation and booking',
      blocks: [
        {
          kind: 'p',
          text: 'Your written quotation sets out the event date, location, guest numbers, menu, service format, staffing, service hours, equipment, inclusions, exclusions and total price.',
        },
        {
          kind: 'p',
          text: 'Quotations are valid for 14 calendar days unless stated otherwise. A quotation or inquiry does not reserve your date.',
        },
        {
          kind: 'p',
          text: 'Your booking is confirmed when we receive your written acceptance and required payment and issue a written booking confirmation. If we receive payment but cannot confirm your booking, we will return that payment in full.',
        },
      ],
    },
    {
      id: 'prices',
      title: '3. Prices and payment',
      blocks: [
        {
          kind: 'p',
          text: 'Prices are quoted in UAE dirhams unless expressly stated otherwise. Your quotation shows applicable VAT, any service charge and all agreed additional costs before you commit.',
        },
        {
          kind: 'p',
          text: 'A 50% deposit is required to confirm your event. The remaining 50% is due 24 hours before the first scheduled service. Bookings confirmed within that period require full payment at confirmation.',
        },
        {
          kind: 'p',
          text: 'Payment is by bank transfer to the business account shown on our official invoice.',
        },
        {
          kind: 'p',
          text: 'Additional services, rentals, transport, overtime or menu upgrades require your written approval of the cost before we arrange them.',
        },
      ],
    },
    {
      id: 'cancellation',
      title: '4. Cancellation and refunds',
      blocks: [
        {
          kind: 'p',
          text: 'Please cancel in writing by emailing [info@mychef.ae](mailto:info@mychef.ae) or messaging the official WhatsApp number used for your booking. Include your name, booking reference and event date.',
        },
        {
          kind: 'p',
          text: 'The date we receive your clear written cancellation determines the applicable refund:',
        },
        {
          kind: 'ul',
          items: [
            '**Seven or more calendar days before the event date:** amounts already paid are not refunded, except where required by applicable law.',
            '**Six calendar days or less before the event date, but before service starts:** amounts paid for the canceled event are refunded in full, including the deposit and any advance balance.',
          ],
        },
        {
          kind: 'p',
          text: 'Days are calculated using the difference between calendar dates in Dubai local time, UTC+4. Weekends and public holidays count. A delay in our acknowledgment does not change the date your cancellation was received.',
        },
        {
          kind: 'p',
          text: 'Where a full refund applies, we do not deduct administration, ingredient or staffing costs from the contracted event price. We do not charge an unpaid balance for an event canceled before service under this policy.',
        },
        {
          kind: 'p',
          text: 'This policy concerns cancellation before service starts. It does not provide an automatic refund for completed services or a no-show without a cancellation message. Your rights relating to service failures remain unaffected.',
        },
        {
          kind: 'p',
          text: 'For cancellation of an entire multi-day program before it begins, the first scheduled service date is used. Partial cancellation and changes after a program starts follow the allocation and conditions in your accepted program schedule.',
        },
      ],
    },
    {
      id: 'refund',
      title: '5. Receiving your refund',
      blocks: [
        {
          kind: 'p',
          text: 'We will confirm the refund calculation in writing and initiate eligible refunds within 10 business days after receiving your cancellation and any verified payment details needed, or sooner where required by law.',
        },
        {
          kind: 'p',
          text: 'Refunds are returned to the original payer through the original payment route where practical. Your bank may require additional settlement time.',
        },
        {
          kind: 'p',
          text: 'We will not replace a refund with a voucher or credit unless you agree.',
        },
      ],
    },
    {
      id: 'changes',
      title: '6. Rescheduling and changes',
      blocks: [
        {
          kind: 'p',
          text: 'Please request changes to your date, venue, menu or guest numbers as early as possible.',
        },
        {
          kind: 'p',
          text: 'A change takes effect only when confirmed in writing. We will explain availability, any price difference and how existing payments will be applied before you decide.',
        },
        {
          kind: 'p',
          text: 'If we cannot agree a new date, you may retain the original booking or cancel under the applicable cancellation policy. A request to reschedule is not automatically treated as a cancellation.',
        },
      ],
    },
    {
      id: 'menu',
      title: '7. Final menu, guest numbers and dietary requirements',
      blocks: [
        {
          kind: 'p',
          text: 'Unless your quotation specifies another deadline, please confirm the final menu, guest count and dietary requirements seven calendar days before the first service. For later bookings, these details must be agreed before confirmation.',
        },
        {
          kind: 'p',
          text: 'Additional guests or late changes depend on availability and may require extra ingredients, staffing or equipment. Any additional cost requires approval.',
        },
        {
          kind: 'p',
          text: 'Reduced guest numbers do not automatically reduce fixed staffing or equipment costs. We will explain any price adjustment in writing. Any partial-cancellation charge must be based on the terms accepted for your booking.',
        },
        {
          kind: 'p',
          text: 'Please tell us about allergies, intolerances and religious or dietary requirements when requesting your quotation. We will confirm what can be accommodated.',
        },
        {
          kind: 'p',
          text: 'Shared kitchens and supplier handling can create cross-contact risks. We do not promise an entirely allergen-free environment without a specifically verified arrangement. Any material limitation will be explained before you commit.',
        },
        {
          kind: 'p',
          text: 'Significant ingredient substitutions will be discussed with you and must respect the agreed dietary requirements.',
        },
      ],
    },
    {
      id: 'venue',
      title: '8. Your venue and our service',
      blocks: [
        {
          kind: 'p',
          text: 'You must arrange lawful access to the venue and tell us about security procedures, loading restrictions, parking, kitchen facilities and other requirements affecting delivery.',
        },
        {
          kind: 'p',
          text: 'We will agree the facilities and equipment needed for your booking. Special rentals or additional equipment require approval before being ordered. Responsibility for venue permissions and permits will be identified in the quotation.',
        },
        {
          kind: 'p',
          text: 'Our team may enter only the areas needed for the service or separately authorized by you. Keys and access credentials may be used only for the agreed work and must be returned or disabled when no longer needed.',
        },
        {
          kind: 'p',
          text: 'Your quotation states the service hours included. Extensions require agreement on availability, duration and price. Cleanup covers the catering areas specified in your quotation.',
        },
        {
          kind: 'p',
          text: 'For delivered food and leftovers, please follow the storage, handling and consumption instructions provided.',
        },
      ],
    },
    {
      id: 'bar',
      title: '9. Bar services',
      blocks: [
        {
          kind: 'p',
          text: 'Your quotation explains whether drinks, bartender service, glassware, ice, mixers and garnishes are included.',
        },
        {
          kind: 'p',
          text: 'Client-supplied alcohol is accepted only where the venue, service arrangements and applicable legal requirements permit it. A bartender booking does not automatically include alcohol or unlimited drinks.',
        },
      ],
    },
    {
      id: 'privacy',
      title: '10. Your privacy and confidentiality',
      blocks: [
        {
          kind: 'p',
          text: 'Your home, event, guests and relationship with myCHEF are private. Privacy is included in every booking.',
        },
        {
          kind: 'p',
          text: 'Our team and subcontractors must not disclose your identity, address, event details, guest information, household circumstances or the fact that you have used our services to unrelated people.',
        },
        {
          kind: 'p',
          text: 'This includes private conversations, client references, social-media posts, check-ins, geotags and location sharing. Confidentiality continues after the booking ends.',
        },
        {
          kind: 'p',
          text: 'Limited information may be shared with assigned personnel who need it to deliver the service, such as a delivery address or relevant dietary instructions. Such sharing remains subject to confidentiality. Disclosures required by law or necessary for an emergency must be limited to what is required.',
        },
      ],
    },
    {
      id: 'media',
      title: '11. Photography, filming and recordings',
      blocks: [
        {
          kind: 'lead',
          text: 'Our default is no photography, no filming and no audio recording.',
        },
        {
          kind: 'p',
          text: 'This applies to site visits, preparation, food presentation, table settings, service and cleanup, including periods when no guests are present.',
        },
        {
          kind: 'p',
          text: 'The rule applies to management, chefs, service staff, drivers and subcontractors using personal or professional devices. Food photographs and empty-room photographs are not automatically exempt.',
        },
        {
          kind: 'p',
          text: 'Recording requires your specific prior written approval identifying what may be recorded, by whom and for what purpose. Any necessary permission from identifiable guests, parents or guardians, venue owners or other rights holders must also be obtained.',
        },
        {
          kind: 'lead',
          text: 'Permission to record does not include permission to publish.',
        },
        {
          kind: 'p',
          text: 'Before public use, we must obtain separate written approval of the exact content, caption, identifying details and intended channels. This includes websites, social media, advertisements, portfolios, case studies, press materials and proposals to other clients.',
        },
        {
          kind: 'p',
          text: 'Silence, a previous booking, a public social-media tag or acceptance of these terms does not constitute media permission. Refusing optional permission does not affect your service or price.',
        },
        {
          kind: 'p',
          text: 'You may withdraw optional permission by contacting us. We will stop new uses and remove material from channels we control where applicable. We will explain any limitations concerning material already printed, independently copied or legally required to be retained.',
        },
      ],
    },
    {
      id: 'problems',
      title: '12. Problems, damage and service failures',
      blocks: [
        {
          kind: 'p',
          text: 'Please tell your coordinator promptly if something is wrong so we can try to resolve it during service.',
        },
        {
          kind: 'p',
          text: 'Written complaints can be sent to [info@mychef.ae](mailto:info@mychef.ae). We will acknowledge them within two business days and aim to provide an initial outcome or progress update within 10 business days. Prompt reporting helps us investigate but does not remove your statutory rights.',
        },
        {
          kind: 'p',
          text: 'If the agreed service cannot be delivered and you do not accept an alternative, payments for the undelivered service will be refunded regardless of the client-cancellation schedule.',
        },
        {
          kind: 'p',
          text: 'Damage claims must be supported by a reasonable explanation and evidence of responsibility and cost. You are not automatically responsible for pre-existing damage or damage caused by our personnel or providers.',
        },
        {
          kind: 'p',
          text: 'If exceptional circumstances prevent performance, we will promptly discuss alternatives and the treatment of payments under the agreement and applicable law.',
        },
      ],
    },
    {
      id: 'rights',
      title: '13. Personal information and your rights',
      blocks: [
        {
          kind: 'p',
          text: 'We use your information to handle inquiries, deliver your booking, manage payments, resolve concerns and meet applicable legal obligations. Optional marketing requires a separate choice.',
        },
        {
          kind: 'p',
          text: 'You may contact us to request access, correction, deletion or other rights available under applicable data-protection law. Further details are provided in our website [Privacy Policy](/privacy-policy).',
        },
        {
          kind: 'p',
          text: 'Nothing in these terms excludes responsibility or consumer rights that cannot lawfully be excluded. Applicable UAE law and the jurisdiction of the competent authority or court apply, subject to mandatory consumer protections.',
        },
        {
          kind: 'p',
          text: 'The version accepted when you booked applies to your booking. Later website updates do not silently change your agreement.',
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
    'Booking, invoicing, cancellation, confidentiality and recording rules for company catering with myCHEF Dubai. Refunds at six days or less; no refunds at seven days or more.',
  lastUpdated: BOOKING_TERMS_UPDATED,
  intro: [
    'These terms apply to companies and other organizations booking myCHEF Dubai for corporate catering, meetings, conferences, staff events, business hospitality and one-off functions.',
    'Recurring office catering, institutional services and continuing contracts follow their separately accepted service agreements. Our confidentiality and media restrictions apply to every business booking. Private occasions use the [private client booking terms](/private-client-booking-terms).',
  ],
  sections: [
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
          text: 'We plan and coordinate catering and hospitality services delivered by licensed culinary providers. Before payment, your quotation identifies the contracting parties, the services each provides, the payment recipient and responsibility for refunds.',
        },
        {
          kind: 'p',
          text: 'The client must provide its correct legal name, billing address, relevant tax information, purchase-order requirements and an authorized booking representative.',
        },
        {
          kind: 'p',
          text: 'myCHEF remains the central contact for coordination and concerns. Using subcontractors does not remove any responsibility imposed on us by the agreement or applicable law.',
        },
      ],
    },
    {
      id: 'scope',
      title: '2. Scope and confirmation',
      blocks: [
        {
          kind: 'p',
          text: 'The quotation specifies the event date, venue, expected attendance, menu, service format, quantities, staffing, equipment, delivery arrangements, service hours and price.',
        },
        {
          kind: 'p',
          text: 'Quotations are valid for 14 calendar days unless stated otherwise. A quotation, inquiry or purchase order alone does not reserve resources.',
        },
        {
          kind: 'p',
          text: 'A booking is confirmed when we receive written acceptance and the required payment and issue a written confirmation.',
        },
        {
          kind: 'p',
          text: 'Any procurement conditions or proposed changes to these terms must be identified and expressly agreed before confirmation. Terms introduced after booking do not automatically vary the agreement.',
        },
      ],
    },
    {
      id: 'payment',
      title: '3. Payment and invoicing',
      blocks: [
        {
          kind: 'p',
          text: 'A 50% deposit is required to confirm an event. The remaining 50% is due 24 hours before the first scheduled service. Bookings confirmed within that period require full payment at confirmation.',
        },
        {
          kind: 'p',
          text: 'Payment is by bank transfer to the business account shown on the official invoice. Standard event bookings do not include post-event credit terms.',
        },
        {
          kind: 'p',
          text: 'The client must communicate invoice-format, purchase-order and vendor-registration requirements before confirmation. Internal approval or purchase-order delays do not automatically extend an agreed payment deadline.',
        },
        {
          kind: 'p',
          text: 'Prices are in UAE dirhams unless otherwise specified. Applicable VAT, any service charge, transport, rentals and other agreed costs will be shown clearly.',
        },
        {
          kind: 'p',
          text: 'If payment becomes overdue, we will notify the client and explain any proposed pause in further commitments or service, subject to the contract and applicable law. No undisclosed daily penalty applies under these standard terms.',
        },
      ],
    },
    {
      id: 'instructions',
      title: '4. Authorized instructions and additional work',
      blocks: [
        {
          kind: 'p',
          text: 'The client must appoint an authorized representative to approve the scope, final guest count, schedule and additional costs.',
        },
        {
          kind: 'p',
          text: 'Instructions from attendees, venue personnel or other suppliers do not automatically authorize extra charges to the client.',
        },
        {
          kind: 'p',
          text: 'Menu upgrades, additional guests, staffing, overtime, equipment, decoration and other variations require written agreement on scope and price before commitment. We will maintain a record of approved changes.',
        },
      ],
    },
    {
      id: 'cancellation',
      title: '5. Cancellation and refunds',
      blocks: [
        {
          kind: 'p',
          text: "Cancellation must be submitted in writing to [info@mychef.ae](mailto:info@mychef.ae) or the official WhatsApp number used for the booking by the client's authorized representative.",
        },
        {
          kind: 'p',
          text: 'The date we receive the cancellation determines the refund:',
        },
        {
          kind: 'ul',
          items: [
            '**Seven or more calendar days before the event date:** amounts already paid are not refunded, except where required by applicable law.',
            '**Six calendar days or less before the event date, but before service starts:** amounts paid for the canceled event are refunded in full, including the deposit and any advance balance.',
          ],
        },
        {
          kind: 'p',
          text: 'Days are measured by the difference between calendar dates in Dubai local time, UTC+4. Weekends and public holidays count. Delayed acknowledgment by myCHEF does not change the receipt date.',
        },
        {
          kind: 'p',
          text: 'Where a full refund applies, there are no administration, ingredient or staffing deductions from the contracted event price. We do not invoice an unpaid balance for an event canceled before service under this policy.',
        },
        {
          kind: 'p',
          text: 'Completed services and no-shows without a cancellation message do not qualify as pre-service cancellations. Remedies for failure to deliver the agreed service are handled separately.',
        },
        {
          kind: 'p',
          text: 'For cancellation of an entire multi-day program before it starts, the first scheduled service date is used. Partial cancellation, individual service reductions and changes after commencement follow the allocation and conditions in the accepted program schedule.',
        },
        {
          kind: 'p',
          text: 'A separately signed recurring-service agreement governs cancellation and termination of continuing corporate contracts.',
        },
      ],
    },
    {
      id: 'refund',
      title: '6. Refund processing and rescheduling',
      blocks: [
        {
          kind: 'p',
          text: 'We will provide a written refund calculation and initiate eligible refunds within 10 business days after receiving the cancellation and verified payment details, or sooner where required by law.',
        },
        {
          kind: 'p',
          text: 'Refunds are returned to the original payer through the original payment route where practical. Bank settlement may take longer. Credit notes or vouchers will not replace a monetary refund without agreement.',
        },
        {
          kind: 'p',
          text: 'Rescheduling depends on availability. We will confirm any revised price, supplier commitments and treatment of existing payments before the client accepts a new date.',
        },
        {
          kind: 'p',
          text: 'A postponement request is not automatically a cancellation. If a new arrangement cannot be agreed, the original booking remains in place unless the client cancels it.',
        },
      ],
    },
    {
      id: 'attendance',
      title: '7. Attendance, menus and dietary requirements',
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
          text: 'Reduced attendance does not automatically reduce fixed costs. The treatment of guest reductions and partial cancellations must be set out in the accepted booking. No undisclosed cancellation penalty will be introduced afterward.',
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
      title: '8. Venue access, logistics and permits',
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
          text: 'For outdoor or yacht services, we will coordinate relevant safety restrictions and discuss alternatives if the intended arrangement becomes unsafe or unavailable.',
        },
      ],
    },
    {
      id: 'hours',
      title: '9. Service hours and equipment',
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
          text: 'Charges for damage or loss must be supported by evidence of responsibility and reasonable cost. Normal wear, pre-existing damage and damage caused by our personnel or providers are not automatically charged to the client.',
        },
      ],
    },
    {
      id: 'confidentiality',
      title: '10. Corporate confidentiality',
      blocks: [
        {
          kind: 'lead',
          text: "We treat the client's identity, event and business information as confidential.",
        },
        {
          kind: 'p',
          text: 'Without specific written authorization, our personnel and subcontractors must not disclose:',
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
          text: 'Information may be shared only with authorized personnel who need it to perform the booking, or where a valid legal or emergency basis requires disclosure. Such sharing must be limited to what is necessary.',
        },
        {
          kind: 'p',
          text: 'The client may propose an additional confidentiality agreement before booking. Any additional requirements must be reviewed and agreed in writing.',
        },
      ],
    },
    {
      id: 'media',
      title: '11. Photography, recording and publicity',
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
          text: 'The rule applies to management, chefs, assistants, service personnel, drivers and subcontractors using personal or professional devices.',
        },
        {
          kind: 'p',
          text: 'Capture permission must identify the authorized person, areas, subject matter, purpose and intended recipients. Any necessary permission from identifiable individuals, venue owners or other rights holders must also be obtained.',
        },
        {
          kind: 'lead',
          text: 'Publication requires separate written approval of the exact content and intended use.',
        },
        {
          kind: 'p',
          text: 'Approval must cover the image or recording, caption, company references, channels and any timing restrictions or embargo. Permission for one use does not authorize another.',
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
      title: '12. Subcontractors and information security',
      blocks: [
        {
          kind: 'p',
          text: "Personnel and subcontractors acting for myCHEF must follow the booking's confidentiality, recording and access restrictions.",
        },
        {
          kind: 'p',
          text: 'Booking information must not be used for independent supplier marketing or disclosed outside the authorized service team.',
        },
        {
          kind: 'p',
          text: 'Access cards, keys and credentials may be used only for the agreed work and must be returned or disabled when no longer required. Access to client systems, documents or rooms outside the service scope is not permitted without authorization.',
        },
        {
          kind: 'p',
          text: 'Suspected unauthorized recording or disclosure must be reported immediately to the coordinator. We will stop further sharing, investigate and make any notifications required by applicable law.',
        },
      ],
    },
    {
      id: 'failures',
      title: '13. Service failures, complaints and disruption',
      blocks: [
        {
          kind: 'p',
          text: 'Please raise operational concerns with the coordinator during the event so we can try to correct them immediately.',
        },
        {
          kind: 'p',
          text: 'Written complaints may be sent to [info@mychef.ae](mailto:info@mychef.ae). We will acknowledge them within two business days and aim to provide an initial outcome or progress update within 10 business days.',
        },
        {
          kind: 'p',
          text: 'If the agreed service cannot be delivered and the client does not accept an alternative, payments for the undelivered service will be refunded regardless of the client-cancellation schedule.',
        },
        {
          kind: 'p',
          text: 'If exceptional circumstances beyond reasonable control prevent performance, we will promptly discuss alternatives and the treatment of affected services and payments under the agreement and applicable law.',
        },
        {
          kind: 'p',
          text: 'Ordinary scheduling difficulties or cost increases are not automatically treated as force majeure.',
        },
      ],
    },
    {
      id: 'responsibility',
      title: '14. Responsibility and applicable terms',
      blocks: [
        {
          kind: 'p',
          text: 'Each party remains responsible for its own contractual and legal obligations. These terms do not exclude liability or remedies that cannot lawfully be excluded.',
        },
        {
          kind: 'p',
          text: 'Applicable insurance arrangements and the party carrying the cover will be confirmed where relevant. Our booking-protection commitments are not themselves a separately underwritten insurance product.',
        },
        {
          kind: 'p',
          text: 'The agreement is governed by applicable UAE law, with disputes addressed by the competent authority or court unless another lawful arrangement has been expressly agreed.',
        },
        {
          kind: 'p',
          text: 'The accepted quotation, agreed variations and identified version of these terms form the booking record. Later website changes do not silently amend an existing contract.',
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
