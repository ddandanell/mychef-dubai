import { useState } from 'react'
import { Link } from 'react-router'
import { trackConversion } from '@/lib/track'
import {
  birthdayInquiryHref,
  birthdayPrivateWhatsAppLink,
  type BirthdayPrivateBriefInput,
} from '@/content/birthdayExtras'
import {
  BUDGET_BANDS,
  VENUE_TYPES,
  privateBriefCopy,
  scenarioById,
} from '@/content/birthdayStatement'
import { BodyCopy, DisplayHeading, SectionLabel } from '@/components/system'

const field =
  'w-full border border-gray-200 bg-white px-4 py-3 font-inter text-body-sm text-black placeholder:text-gray-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30'

type Props = {
  extraIds?: readonly string[]
  scenarioId?: string | null
}

export default function BirthdayPrivateBrief({ extraIds = [], scenarioId = null }: Props) {
  const scenario = scenarioById(scenarioId ?? '')
  const [fields, setFields] = useState({
    date: '',
    venue: '',
    adults: '',
    children: '',
    ages: '',
    vibe: '',
    budgetBand: '',
    surprise: '',
    moodboard: '',
  })

  const update = (key: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFields((current) => ({ ...current, [key]: e.target.value }))
  }

  const brief: BirthdayPrivateBriefInput = {
    ...fields,
    scenario: scenario?.title,
    extraIds,
  }
  const whatsappHref = birthdayPrivateWhatsAppLink(brief)
  const inquiryHref = birthdayInquiryHref(extraIds, {
    lane: 'private',
    scenario: scenarioId ?? undefined,
  })

  return (
    <div className="max-w-3xl">
      <SectionLabel>{privateBriefCopy.label}</SectionLabel>
      <DisplayHeading className="text-black mb-4">{privateBriefCopy.h2}</DisplayHeading>
      <BodyCopy className="mb-8">{privateBriefCopy.lead}</BodyCopy>
      {scenario ? (
        <p className="font-inter text-body-sm text-gray-600 mb-8">
          Style selected: {scenario.title}. You can change the notes below.
        </p>
      ) : null}

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <label className="font-inter text-caption uppercase tracking-[0.12em] text-gray-500">
          Date
          <input type="date" value={fields.date} onChange={update('date')} className={`${field} mt-2 normal-case tracking-normal`} />
        </label>
        <label className="font-inter text-caption uppercase tracking-[0.12em] text-gray-500">
          Venue type
          <select value={fields.venue} onChange={update('venue')} className={`${field} mt-2 normal-case tracking-normal`}>
            <option value="">Select</option>
            {VENUE_TYPES.map((item) => (
              <option key={item.id} value={item.label}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
        <label className="font-inter text-caption uppercase tracking-[0.12em] text-gray-500">
          Adults
          <input type="number" min={0} inputMode="numeric" value={fields.adults} onChange={update('adults')} className={`${field} mt-2 normal-case tracking-normal`} />
        </label>
        <label className="font-inter text-caption uppercase tracking-[0.12em] text-gray-500">
          Children
          <input type="number" min={0} inputMode="numeric" value={fields.children} onChange={update('children')} className={`${field} mt-2 normal-case tracking-normal`} />
        </label>
        <label className="sm:col-span-2 font-inter text-caption uppercase tracking-[0.12em] text-gray-500">
          Children’s ages
          <input
            type="text"
            value={fields.ages}
            onChange={update('ages')}
            placeholder="e.g. 6, 8, 11"
            className={`${field} mt-2 normal-case tracking-normal`}
          />
        </label>
        <label className="sm:col-span-2 font-inter text-caption uppercase tracking-[0.12em] text-gray-500">
          How the evening should feel
          <input
            type="text"
            value={fields.vibe}
            onChange={update('vibe')}
            placeholder="Quiet seated dinner, garden party, surprise at home"
            className={`${field} mt-2 normal-case tracking-normal`}
          />
        </label>
        <label className="font-inter text-caption uppercase tracking-[0.12em] text-gray-500">
          Budget band
          <select value={fields.budgetBand} onChange={update('budgetBand')} className={`${field} mt-2 normal-case tracking-normal`}>
            {BUDGET_BANDS.map((item) => (
              <option key={item.id || 'unsure'} value={item.label}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
        <label className="font-inter text-caption uppercase tracking-[0.12em] text-gray-500">
          Surprise
          <select value={fields.surprise} onChange={update('surprise')} className={`${field} mt-2 normal-case tracking-normal`}>
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
        <label className="sm:col-span-2 font-inter text-caption uppercase tracking-[0.12em] text-gray-500">
          Moodboard link (optional)
          <input
            type="url"
            value={fields.moodboard}
            onChange={update('moodboard')}
            placeholder="https://"
            className={`${field} mt-2 normal-case tracking-normal`}
          />
        </label>
      </div>

      <div className="flex flex-wrap gap-4 mt-6">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          data-track="whatsapp_click"
          onClick={() => trackConversion('whatsapp_click', 'whatsapp_click')}
        >
          Send the private brief on WhatsApp
        </a>
        <Link to={inquiryHref} className="btn-secondary" data-track="inquiry_form">
          Open the enquiry with this style
        </Link>
      </div>
    </div>
  )
}
