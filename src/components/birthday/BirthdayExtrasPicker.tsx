import { Link } from 'react-router'
import {
  BIRTHDAY_BUNDLES,
  BIRTHDAY_CATERING_VAT_NOTE,
  BIRTHDAY_EXTRAS_DISCLAIMER,
  BIRTHDAY_QUOTE_EXTRAS,
  EXTRA_GROUPS,
  OCCASION_FILTERS,
  birthdayInquiryHref,
  birthdayWhatsAppLink,
  bundlePlanningTotal,
  extraPriceLabel,
  extrasForOccasion,
  extrasFromIds,
  planningSubtotal,
  planningTotalLabel,
  toggleExtraId,
  unionExtraIds,
  type BirthdayOccasion,
} from '@/content/birthdayExtras'
import { extrasH2, extrasIntro, moreExtrasIntro } from '@/content/birthdayPage'
import { BodyCopy, DisplayHeading, SectionLabel } from '@/components/system'
import { useState } from 'react'

type Props = {
  selectedIds: readonly string[]
  onChange: (ids: string[]) => void
}

export default function BirthdayExtrasPicker({ selectedIds, onChange }: Props) {
  const [occasion, setOccasion] = useState<'all' | BirthdayOccasion>('all')
  const visible = extrasForOccasion(occasion)
  const selected = extrasFromIds(selectedIds)
  const subtotal = planningSubtotal(selectedIds)
  const inquiryHref = birthdayInquiryHref(selectedIds)
  const whatsappHref = birthdayWhatsAppLink(selectedIds)

  return (
    <div>
      <SectionLabel>WHAT YOU CAN ADD</SectionLabel>
      <DisplayHeading className="text-black mb-4">{extrasH2}</DisplayHeading>
      {extrasIntro.map((p) => (
        <BodyCopy key={p.slice(0, 40)} className="mb-4">
          {p}
        </BodyCopy>
      ))}
      <p className="font-inter text-body-sm text-gray-600 mb-3 max-w-[65ch]">{BIRTHDAY_EXTRAS_DISCLAIMER}</p>
      <p className="font-inter text-body-sm text-gray-500 mb-8 max-w-[65ch]">{BIRTHDAY_CATERING_VAT_NOTE}</p>

      <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter extras by occasion">
        {OCCASION_FILTERS.map((filter) => {
          const active = occasion === filter.id
          return (
            <button
              key={filter.id}
              type="button"
              aria-pressed={active}
              onClick={() => setOccasion(filter.id)}
              className={`font-inter text-caption uppercase tracking-[0.12em] px-4 py-2 border ${
                active ? 'border-gold bg-cream text-gold-ink' : 'border-gray-200 text-gray-600 hover:border-gold/50'
              }`}
            >
              {filter.label}
            </button>
          )
        })}
      </div>

      <div className="mb-12">
        <h3 className="font-playfair text-h4 text-black mb-4">Convenient combinations</h3>
        <p className="font-inter text-body-sm text-gray-600 mb-6 max-w-[65ch]">
          These totals add the planning figures. Catering is charged separately. No discount is applied.
        </p>
        <ul className="grid md:grid-cols-3 gap-6">
          {BIRTHDAY_BUNDLES.map((bundle) => {
            const total = bundlePlanningTotal(bundle)
            return (
              <li key={bundle.id} className="border border-gray-200 p-6 flex flex-col">
                <h4 className="font-playfair text-h4 text-black mb-2">{bundle.name}</h4>
                <p className="font-inter text-body-sm text-gray-600 mb-3 flex-1">{bundle.note}</p>
                <p className="font-inter text-body-sm text-black mb-4">
                  {planningTotalLabel(total)} planning figure
                </p>
                <button
                  type="button"
                  onClick={() => onChange(unionExtraIds(selectedIds, bundle.extraIds))}
                  className="font-inter text-caption uppercase tracking-[0.12em] text-gold-ink hover:text-gold text-left"
                >
                  Add this combination to my enquiry
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      {EXTRA_GROUPS.map((group) => {
        const items = visible.filter((item) => item.group === group.id)
        if (items.length === 0) return null
        return (
          <div key={group.id} className="mb-10">
            <h3 className="font-playfair text-h4 text-black mb-4">{group.label}</h3>
            <ul className="grid md:grid-cols-2 gap-6">
              {items.map((item) => {
                const selectedItem = selectedIds.includes(item.id)
                return (
                  <li
                    key={item.id}
                    className={`border p-6 ${selectedItem ? 'border-gold bg-cream/40' : 'border-gray-200'}`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h4 className="font-playfair text-h4 text-black">{item.name}</h4>
                      <p className="font-inter text-caption uppercase tracking-[0.08em] text-gold-ink whitespace-nowrap">
                        {extraPriceLabel(item)}
                      </p>
                    </div>
                    <p className="font-inter text-body-sm text-gray-600 leading-relaxed mb-3">{item.spec}</p>
                    <p className="font-inter text-caption text-gray-500 mb-4">
                      Planning figure, inc. VAT
                      {item.requiresCatering ? ' · Attach to a catering booking' : ''}
                      {item.minQty ? ` · Minimum ${item.minQty}` : ''}
                    </p>
                    <button
                      type="button"
                      aria-pressed={selectedItem}
                      onClick={() => onChange(toggleExtraId(selectedIds, item.id))}
                      className={`font-inter text-caption uppercase tracking-[0.12em] ${
                        selectedItem ? 'text-black' : 'text-gold-ink hover:text-gold'
                      }`}
                    >
                      {selectedItem ? 'Added to my birthday enquiry' : 'Add to my birthday enquiry'}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}

      <div className="border border-gray-200 bg-cream p-6 mb-12" aria-live="polite">
        {selected.length === 0 ? (
          <p className="font-inter text-body-sm text-gray-600">
            No extras selected yet. Catering can be quoted on its own.
          </p>
        ) : (
          <>
            <p className="font-inter text-body-sm text-black mb-2">
              Selected: {selected.map((item) => item.name).join(', ')}
            </p>
            <p className="font-inter text-body-sm text-gray-600 mb-4">
              Extras planning subtotal {planningTotalLabel(subtotal)}, including VAT. Catering is extra.
            </p>
          </>
        )}
        <div className="flex flex-wrap gap-4">
          <Link to={inquiryHref} className="btn-primary" data-track="inquiry_form">
            Request my itemised birthday proposal
          </Link>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            data-track="whatsapp_click"
          >
            WhatsApp this selection
          </a>
          {selected.length > 0 ? (
            <button
              type="button"
              onClick={() => onChange([])}
              className="font-inter text-caption uppercase tracking-[0.12em] text-gray-500 hover:text-gold-ink"
            >
              Clear extras
            </button>
          ) : null}
        </div>
      </div>

      <h3 className="font-playfair text-h4 text-black mb-3">More birthday extras</h3>
      <p className="font-inter text-body-sm text-gray-600 mb-4 max-w-[65ch]">{moreExtrasIntro}</p>
      <ul className="space-y-2 mb-2">
        {BIRTHDAY_QUOTE_EXTRAS.map((item) => (
          <li key={item} className="font-inter text-body-sm text-gray-600">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
