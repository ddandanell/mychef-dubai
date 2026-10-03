type PlanningDetail = {
  eyebrow: string
  title: string
  sections: { heading: string; paragraphs: string[] }[]
  faqs?: { q: string; a: string }[]
}

export const planningDetails: Record<string, PlanningDetail> = {
  '/partners': {
    eyebrow: 'Working together',
    title: 'A clear handover from your client to our kitchen team.',
    sections: [
      { heading: 'Start with the enquiries you receive', paragraphs: [
        'Tell us who your clients are, the requests you receive and how you prefer to introduce a culinary partner. A concierge desk arranging a family chef needs a different workflow from a planner coordinating a wedding. Share a representative enquiry so we can discuss the service, communication and practical responsibilities before building a partnership around it.',
        'For a dinner or celebration, our [catering overview](/catering-dubai) explains the available formats. For regular cooking at a residence, the [household chef service](/full-time-private-chef-dubai) explains matching and ongoing support. These are different bookings with different schedules and costs.',
      ] },
      { heading: 'Agree who handles each conversation', paragraphs: [
        'Confirm who gathers the brief, presents the proposal, approves menu changes and stays in contact on the day. Tell us whether you want to remain the client’s main contact or introduce them directly. Any work under a partner’s name, use of branding or sharing of client details should be agreed before it begins.',
        'The first brief should include the date, location, household or guest size, food preferences, allergies and service expectations. Add any access, kitchen or venue restrictions. An initial introduction helps us assess the request; availability and the final scope are confirmed separately in writing.',
      ] },
      { heading: 'Keep commercial terms easy to follow', paragraphs: [
        'The partnership agreement sets out the agreed referral fee, commission or other commercial model. The client proposal sets out the service itself: food, chef time, staff, equipment, delivery and applicable VAT. Agree these details before presenting a service to a client. The booking proposal confirms the available date, menu and final price.',
      ] },
      { heading: 'Build a useful process for repeat work', paragraphs: [
        'After a booking, review how the handover worked: whether the brief was complete, access ran smoothly and changes reached the right person. Those details help the next enquiry move more easily. If your business falls outside the four categories above, use the [partnership enquiry page](/partner-with-us) to explain your model and the type of support you need.',
      ] },
    ],
    faqs: [
      { q: 'Do we need to commit to a booking volume?', a: 'Tell us your expected pattern, even if it is occasional. Any volume commitment, preferential rate or account arrangement must be expressly agreed in your partnership terms.' },
      { q: 'Can we share menus with our clients?', a: 'Ask for suitable current material and agree how it will be presented. Menus and starting prices are examples until the location, date, quantities and service have been reviewed.' },
      { q: 'Does a partner introduction confirm the booking?', a: 'No. The culinary team must review availability and requirements, and the client must complete the agreed proposal and payment steps before the booking is confirmed.' },
    ],
  },
  '/partners/concierge-services-dubai': {
    eyebrow: 'For your concierge desk',
    title: 'Turn a member’s request into a complete culinary brief.',
    sections: [
      { heading: 'Identify the kind of help they need', paragraphs: [
        'Start by asking whether the member wants everyday cooking, a single hosted dinner or catering for a larger gathering. A request for “a chef tomorrow” can describe very different jobs. Clarify the number of people, meals, service hours and address before suggesting a format. For a dinner with guests, our [private dining options](/luxury-dining-experiences) help explain the service choices.',
        'For ongoing household support, note the desired weekly pattern, cuisines, expected start date and whether accommodation is available. Discuss the monthly budget separately from the ingredient budget. The team can then assess whether visits or a dedicated household arrangement fit the request.',
      ] },
      { heading: 'Make the handover discreet and practical', paragraphs: [
        'Agree what information the member has authorised you to share and who should receive the proposal. Useful practical details include building access, parking, available kitchen equipment and who will welcome the team. Avoid forwarding unrelated personal records. A concise brief gives the chef the information needed to plan the food without circulating unnecessary household details.',
      ] },
      { heading: 'Keep approvals with the right person', paragraphs: [
        'Before confirming, identify who can approve the menu, service hours and extras. A change in guest numbers can affect quantities and staffing; a change in venue can affect equipment and delivery. Your named contact should receive the revised scope so the client, concierge and culinary team are working from the same version.',
        'For events, compare [catering packages and inclusions](/catering-packages-dubai), then request a proposal for the actual brief. Published starting rates do not replace a quote for a particular household or event.',
      ] },
      { heading: 'Plan repeat requests around preferences', paragraphs: [
        'With the client’s permission, useful preferences from a previous booking can inform the next one. Reconfirm allergies, guest numbers, dates and location each time. Use the previous brief as a starting point, then confirm the chef’s availability, current menu and quotation for the new dates. Requests that become a regular household role can be reviewed as a separate ongoing arrangement.',
      ] },
    ],
    faqs: [
      { q: 'Can our desk remain the main contact?', a: 'Yes, discuss the communication arrangement when setting up the partnership. Agree which decisions your desk can approve and which require the member’s confirmation.' },
      { q: 'Can you handle an urgent request?', a: 'Send the essentials and we will check what is possible. An initial reply is not confirmation that a chef, menu or delivery slot is available.' },
      { q: 'Where can we check the chef selection process?', a: 'Read [how chefs are assessed](/how-we-vet-our-chefs), then discuss any additional household requirements before a proposed introduction.' },
    ],
  },
  '/partners/event-planners-dubai': {
    eyebrow: 'One event, an agreed food plan',
    title: 'Fit the catering into the programme you are producing.',
    sections: [
      { heading: 'Share the event’s working schedule', paragraphs: [
        'Include guest arrival, speeches, presentations, performances and the intended meal times. The kitchen schedule must allow for loading, setup, preparation and clearing as well as service. Tell us which timings are fixed and which are provisional. A drinks reception before a seated dinner needs a different staffing and preparation plan from a buffet served during a conference break.',
        'For a wedding, use the [wedding planning checklist](/wedding-catering-checklist-dubai) to align the guest list, venue and tasting. For a company event, the [corporate catering checklist](/corporate-catering-checklist-dubai) helps organise approvals and operational details.',
      ] },
      { heading: 'Clarify the boundaries of the food brief', paragraphs: [
        'List the items you want the culinary team to quote: food, drinks service, chefs, waitstaff, serviceware, equipment and clear-down. Identify furniture, linen, flowers and entertainment that another supplier is handling. Keeping those responsibilities visible reduces gaps and avoids two suppliers pricing the same item. The agreed proposal should identify both inclusions and exclusions.',
      ] },
      { heading: 'Review the venue before settling the menu', paragraphs: [
        'Kitchen access, refrigeration, power, loading restrictions and the available service area influence what can be delivered well. Share the venue contact and technical information you are authorised to pass on. Outdoor cooking, live stations and late finishes may need specific venue approval. Confirm those arrangements before presenting a format as ready to book.',
        'Menu tastings, additional equipment and extra service hours should be scoped and priced where needed. Our [event catering formats](/events) provide a starting point for that conversation rather than a fixed production package.',
      ] },
      { heading: 'Use one agreed version on the day', paragraphs: [
        'Before service, consolidate the menu, dietary information, guest numbers, floor plan and schedule into a final brief. Name the person who can authorise changes and tell the team how to reach them. After the event, practical feedback on timing, portions and service helps refine future bookings with the same client or venue.',
      ] },
    ],
    faqs: [
      { q: 'Can you quote before the venue is confirmed?', a: 'We can discuss suitable formats and the information needed. A proposal based on an unconfirmed venue remains subject to its facilities, access and final requirements.' },
      { q: 'Are tastings automatically included?', a: 'No. A tasting, its menu, number of people and any charge must be agreed as part of the proposal.' },
      { q: 'Who approves changes during the event?', a: 'Agree a named decision-maker before the booking. Additional food, staff time or equipment should be authorised with the relevant price and practical implications clear.' },
    ],
  },
  '/partners/villa-rentals-dubai': {
    eyebrow: 'Prepare the property and the brief',
    title: 'Make a chef booking fit the guest’s stay.',
    sections: [
      { heading: 'Match the meals to the stay', paragraphs: [
        'Ask which days the guests want cooking and whether they expect breakfast, a family dinner, meals prepared for later or an occasion with table service. Include adult and child numbers, cuisines, allergies and arrival times. A welcome dinner is a separate brief from several days of household cooking. Our [villa dining service](/villas-private-residences) explains the available formats.',
        'For visits across a holiday, check the [short-stay booking arrangements](/private-chef-dubai/short-term-chef). Minimum chef days, hours and grocery costs need to be clear before you describe the service as an included feature of the stay.',
      ] },
      { heading: 'Describe the kitchen as it is', paragraphs: [
        'Provide a practical inventory: hob and oven, fridge and freezer space, pans, utensils, plates and available seating. Tell us about any outdoor cooking equipment and the property rules for using it. Current photographs can help explain the layout, provided you have permission to share them. A chef booking does not automatically include missing equipment or repairs to appliances.',
      ] },
      { heading: 'Coordinate access with housekeeping', paragraphs: [
        'Agree the chef’s arrival with check-in, housekeeping and any deliveries. Confirm who provides access, where the team may park and which storage areas can be used. For properties with security gates, the required access arrangements should be completed before the service. If guests change villa or arrival time, update the brief promptly so the team can reassess the schedule.',
        'Grocery shopping, pantry use and any replacement of household supplies should be agreed with the guest and property contact. Your quote should make clear who pays for ingredients and how purchases are approved.',
      ] },
      { heading: 'Set expectations for the end of service', paragraphs: [
        'Define kitchen clear-down, handling of prepared meals and the handover to guests or housekeeping. Discuss any hired items and when they will be collected. If the guests want to host a larger celebration, review the brief again: more people, a different menu or table service may require additional staff, equipment and time beyond the original cooking visit.',
      ] },
    ],
    faqs: [
      { q: 'Can chef service be included in a rental package?', a: 'Yes, where the scope and commercial arrangement are agreed in writing. Confirm the meals, hours, guest limits, ingredients and exclusions before advertising a package.' },
      { q: 'Do guests need to be present when the chef arrives?', a: 'Agree access and the responsible property contact in advance. Any arrangement for an unattended property must be expressly confirmed with the guest, manager and culinary team.' },
      { q: 'Can the same chef cook throughout a stay?', a: 'We aim for continuity where the schedule and availability allow. Confirm the proposed chef and any cover arrangements before the booking rather than promising a named person in advance.' },
    ],
  },
  '/partners/yacht-charters-dubai': {
    eyebrow: 'From the berth to the table',
    title: 'Build the food plan around the actual vessel.',
    sections: [
      { heading: 'Share the charter details first', paragraphs: [
        'Send the vessel, marina, guest count, boarding time, departure time and charter duration. Identify the operator’s contact and the captain’s requirements. A quotation needs the confirmed boat’s facilities rather than the nominal passenger capacity alone. Our [yacht catering service](/yachts) explains how menus, staffing and onboard arrangements are planned together.',
        'Clarify whether the guests want food delivered before boarding or a team to prepare and serve during the cruise. Those formats have different loading, equipment and staffing needs. The food package should describe which one the guest is purchasing.',
      ] },
      { heading: 'Check the galley and service space', paragraphs: [
        'Confirm usable refrigeration, reheating or cooking equipment, power, work surfaces and the space available for serving. Tell us whether guests will sit to eat or move between decks. Live cooking is only an option when the vessel and operator permit the equipment and setup. A shore-based preparation plan may be more suitable for some menus and charter lengths.',
      ] },
      { heading: 'Allow time for boarding and handover', paragraphs: [
        'Agree security access, parking, the route to the berth and the loading window with the operator. Crew instructions and departure timing take priority in the plan. Identify who checks the delivery or welcomes the service team, and who receives any storage or serving instructions. These details are particularly useful when several charters use the same vessel in one day.',
        'The [three-hour food service timeline](/blog/three-hour-yacht-party-food-timeline-dubai) is a planning example. Adjust it to the actual itinerary, guest needs and captain’s instructions rather than treating it as a fixed schedule.',
      ] },
      { heading: 'Confirm changes before the charter', paragraphs: [
        'Guest numbers, menu changes, dietary requirements and sailing arrangements affect the food plan. Agree the deadline for confirming each item and the contact who can approve a revised quotation. Your agreement should also explain what happens if the operator changes the vessel, departure or charter. Ask for the applicable booking terms when reviewing the proposal.',
      ] },
    ],
    faqs: [
      { q: 'Does the catering price include the yacht?', a: 'The culinary quotation covers only the items expressly listed. Yacht hire and operator charges remain separate unless an integrated package has been agreed in writing.' },
      { q: 'Can menus include a deck grill?', a: 'Only after the operator confirms it is permitted and the proposed equipment, location and service can be accommodated. Discuss alternatives before promising a live grill to guests.' },
      { q: 'Can we add a bartender or drinks service?', a: 'Discuss the [bar service options](/bar-services-dubai) alongside the operator’s rules. Staff, equipment, beverages and any venue requirements must be confirmed in the written scope.' },
    ],
  },
  '/locations': {
    eyebrow: 'Plan around your address',
    title: 'The right service for your part of Dubai.',
    sections: [
      { heading: 'Al Barsha: family meals and home gatherings', paragraphs: [
        'For villas, apartments and residences in Al Barsha, start with the kitchen and the number of people you are feeding. A regular cooking visit can cover household meals, while a celebration may need a separate service team and hired items. The [Al Barsha service page](/locations/al-barsha) helps you prepare the address, schedule and food brief before availability is checked.',
      ] },
      { heading: 'JBR: plan the apartment access', paragraphs: [
        'For beachfront apartments, tell us the tower, parking arrangements and available lift or loading access. Kitchen worktop and refrigeration space affect the menu, particularly when guests are coming for a seated dinner. Explore [chef service in JBR](/locations/jbr), then share the building requirements and preferred serving time so the team can plan arrival and preparation around them.',
      ] },
      { heading: 'JLT: households and office teams', paragraphs: [
        'JLT enquiries can range from cooking in a family apartment to an office lunch. Explain where food will be prepared, delivered and served, and whether staff or equipment are needed. Include the cluster, tower, access arrangements and meal time. Our [JLT service overview](/locations/jlt) distinguishes home and workplace requirements so you can start with the appropriate brief.',
      ] },
      { heading: 'DIFC: align food with the building schedule', paragraphs: [
        'Boardroom meals and apartment dinners have different needs even within the same district. For an office, confirm meeting times, receiving arrangements and the space for setup. For a residence, share the kitchen facilities and guest numbers. The [DIFC service page](/locations/difc) provides a starting point; your building’s rules and the final proposal determine the practical arrangements.',
      ] },
      { heading: 'Choose the food format before comparing prices', paragraphs: [
        'Cooking in your kitchen, delivered food and a staffed event are separate services. If you want prepared dishes brought to the property, explore [drop-off catering](/drop-off-catering-dubai). For a buffet, reception or celebration with staff, review the [catering formats](/catering-dubai). Tell us what you expect the team to handle, from ingredients and preparation to serving and clearing.',
        'Your neighbourhood is one part of the brief. Guest numbers, menu, working hours, delivery, equipment and access can all affect the quotation. Share a realistic budget and any fixed requirements so we can discuss a suitable scope rather than assuming every address needs the same package.',
      ] },
      { heading: 'What to send with your location', paragraphs: [
        'Include the property type, date, meal time, number of people, food preferences and allergies. A few notes on the kitchen, parking and any outdoor space are useful. For a recurring chef, add your preferred days and whether meals should be served during the visit or prepared for later. For a yacht, include the operator and marina as well as the vessel.',
        'The team reviews your location, service and date together to check availability and plan the practical details. If your area is not listed, send the details through the enquiry form so we can confirm whether the request can be accommodated.',
      ] },
    ],
    faqs: [
      { q: 'Does living in a listed area guarantee a chef is available?', a: 'No. Availability depends on your date or schedule, service requirements and a suitable chef. We confirm the proposed arrangement after reviewing your enquiry.' },
      { q: 'Is delivery or transport included?', a: 'Your written quotation states any delivery, transport or access charges. Do not assume a starting food or chef rate includes every cost for your property.' },
      { q: 'Can you cook in a small apartment kitchen?', a: 'Share the equipment, worktop and storage available. We assess a practical menu and service for the space; larger groups may need a different format or separately quoted equipment.' },
    ],
  },
  '/trust-and-programs': {
    eyebrow: 'Know what you are booking',
    title: 'Standards, service terms and rewards each have a purpose.',
    sections: [
      { heading: 'Understand the chef selection process', paragraphs: [
        'Before choosing a service, review [how chefs are assessed](/how-we-vet-our-chefs). The process described by myCHEF includes identity and right-to-work documents, cooking assessment, references and food hygiene awareness. Ask about the checks relevant to your proposed arrangement and any requirements specific to your home. Your coordinator can explain the checks and documents relevant to the particular chef and role.',
      ] },
      { heading: 'Confirm the service in a written proposal', paragraphs: [
        'Your proposal should make the booking understandable: the menu or cooking brief, number of people, location, hours, staff, equipment and price. Groceries and other extras should be identified where separate. Before accepting, check the payment stages, notice periods and cancellation arrangements that apply to your booking. A reward programme or membership does not replace those service terms.',
        'If you are still choosing between a cooking visit and a catered occasion, the [service comparison guide](/private-chef-vs-catering-dubai) explains the difference. Once the format is clear, the team can prepare the relevant scope rather than combining unrelated services in one assumption.',
      ] },
      { heading: 'Keep household support specific to the role', paragraphs: [
        'A dedicated household chef arrangement includes an agreed schedule, a personal brief and ongoing communication. The Household Food Profile records useful preferences with permission, while feedback helps refine the food and routine. Changes of chef, temporary cover and major changes to the role follow the service agreement. Your coordinator will explain the available options, timing and any change in fees before a revised arrangement is agreed.',
        'The [Managed Household service](/full-time-private-chef-dubai) sets out matching, the Learning Month and continuing support. Read that scope alongside the personal proposal before paying the activation fee or confirming the ongoing arrangement.',
      ] },
      { heading: 'Choose programmes that fit your needs', paragraphs: [
        'The cards above explain memberships, referrals, quality arrangements and business partnerships. Each has its own eligibility and terms. Use the relevant programme page to understand the benefit, then ask the team how it would apply to your booking. A promotional credit is different from a business commission; an introductory offer is different from the standard service price.',
      ] },
    ],
    faqs: [
      { q: 'Where should I raise a concern about a booking?', a: 'Contact your myCHEF coordinator with the booking reference and the specific concern. The team can review the agreed scope and discuss the appropriate next step.' },
      { q: 'Can several benefits be combined?', a: 'Ask before booking. Eligibility, credits, offers and any restrictions must be confirmed under the relevant programme terms and reflected in the written proposal.' },
      { q: 'Does a service standard guarantee an allergen-free kitchen?', a: 'No. Allergies and their severity must be disclosed before booking. Ingredient sourcing, kitchen conditions and feasible controls need review for the particular service.' },
    ],
  },
  '/referral-programme': {
    eyebrow: 'Make the introduction clear',
    title: 'How to use your referral credit with confidence.',
    sections: [
      { heading: 'Let your friend make the enquiry', paragraphs: [
        'Share myCHEF’s contact details and ask your friend to mention your name in their first enquiry. They can describe their own plans, preferences and dietary requirements directly. You do not need to send private household information on their behalf. The team can then record the introduction and check that the new-client requirement is met before confirming the referral benefit.',
        'Your friend might be planning [cooking visits at home](/private-chef-dubai), a celebration or [catering for an event](/catering-dubai). The appropriate service and its availability are reviewed in the usual way. A referral introduces someone to myCHEF; it does not reserve a date or determine the menu.',
      ] },
      { heading: 'Review the credit alongside the quotation', paragraphs: [
        'Ask the team to explain how the AED 100 first-booking benefit appears in the new client’s proposal. Your own AED 100 credit is issued after the referred booking is confirmed and paid, as set out in the terms below. Keep the booking reference or the team’s confirmation so the introduction can be checked if you enquire about the credit later.',
        'Food, staff, groceries, equipment and applicable taxes remain subject to the relevant service quotation. A referral benefit does not change the scope of the booking. If you want to use it with another offer, ask the team to confirm eligibility before you approve the price.',
      ] },
      { heading: 'Mention your credit before your next booking', paragraphs: [
        'When planning your next experience, tell your myCHEF contact that you have a referral credit. Ask them to confirm the available amount, expiry and how it applies to the proposal. Credits cannot be exchanged for cash and must be used within the stated twelve-month period. Keeping the discussion before payment makes the agreed total easier to follow.',
      ] },
      { heading: 'Use a partnership for business introductions', paragraphs: [
        'If introducing clients is part of your business, discuss a [commercial partnership](/partner-with-us) instead of assuming the personal referral terms apply. Planners, villa managers and concierge teams may need a separate arrangement for proposals, client communication and commission. That agreement is reviewed before introductions and should not be confused with a customer’s AED 100 reward.',
      ] },
    ],
    faqs: [
      { q: 'When should my friend mention my name?', a: 'At the first enquiry or booking, as stated in the programme terms. Ask the team to confirm that the introduction has been recorded.' },
      { q: 'Can I withdraw the credit as cash?', a: 'No. The published programme provides booking credit for eligible private chef and catering services, with a twelve-month validity period.' },
      { q: 'Can a returning myCHEF customer count as a new referral?', a: 'The referred customer must be a new myCHEF Dubai client. The team checks eligibility before applying the programme benefit.' },
    ],
  },
}
