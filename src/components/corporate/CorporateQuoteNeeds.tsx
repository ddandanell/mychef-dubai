const NEEDS = [
  'Occasion',
  'Date or recurring days',
  'Area or building',
  'Guest count',
  'Drop-off, setup, or staffed service',
  'Meals and breaks',
  'Budget position, if you have one',
] as const

type Props = {
  heading?: string
  inquiryHref: string
  whatsappHref: string
}

export default function CorporateQuoteNeeds({
  heading = 'What we need for a proposal',
  inquiryHref,
  whatsappHref,
}: Props) {
  return (
    <div className="max-w-3xl">
      <h2 className="font-playfair text-h2 text-black mb-4">{heading}</h2>
      <p className="font-inter text-body text-gray-600 mb-6 max-w-[65ch]">
        You do not need a full dietary list to start. Name the day, the room and how many people. Dietary notes can follow.
      </p>
      <ul className="mb-8 space-y-2">
        {NEEDS.map((item) => (
          <li key={item} className="font-inter text-body-sm text-gray-700">
            {item}
          </li>
        ))}
      </ul>
      <p className="font-inter text-body-sm text-gray-500 mb-6 max-w-[65ch]">
        We do not photograph, name clients or publish venue details unless you have agreed that in writing. An LPO or
        consolidated invoice does not by itself create credit terms.
      </p>
      <div className="flex flex-wrap gap-4">
        <a href={inquiryHref} className="btn-primary" data-track="inquiry_form">
          Request a proposal
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
          data-track="link"
        >
          WhatsApp
        </a>
      </div>
    </div>
  )
}
