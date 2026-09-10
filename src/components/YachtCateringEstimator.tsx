import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import {
  LIVE_STATION_CHEFS_AED,
  OVERTIME_PER_SERVER_PER_HOUR_AED,
  YACHT_ESTIMATE_DISCLAIMER,
  YACHT_EXTRAS,
  YACHT_GUEST_DEFAULT,
  YACHT_GUEST_MAX,
  YACHT_GUEST_MIN,
  YACHT_MENU_FORMATS,
  clampYachtGuests,
  estimateYachtCatering,
  formatYachtAed,
  yachtInquiryHref,
  yachtWhatsAppMessage,
  type YachtExtraId,
  type YachtFormatId,
} from '@/content/yachtCateringQuote'
import { CATERING_WHATSAPP_NUMBER } from '@/content/cateringCluster'

function toggleExclusiveExtra(current: YachtExtraId[], id: YachtExtraId): YachtExtraId[] {
  const extra = YACHT_EXTRAS.find((item) => item.id === id)
  if (!extra) return current
  const isOn = current.includes(id)
  if (extra.group === 'bartender') {
    const withoutBartender = current.filter((item) => YACHT_EXTRAS.find((row) => row.id === item)?.group !== 'bartender')
    return isOn ? withoutBartender : [...withoutBartender, id]
  }
  return isOn ? current.filter((item) => item !== id) : [...current, id]
}

export default function YachtCateringEstimator() {
  const [guests, setGuests] = useState(YACHT_GUEST_DEFAULT)
  const [formatId, setFormatId] = useState<YachtFormatId>('canape')
  const [extraIds, setExtraIds] = useState<YachtExtraId[]>([])
  const [overtimeServers, setOvertimeServers] = useState(0)
  const [overtimeHours, setOvertimeHours] = useState(0)

  const countedGuests = clampYachtGuests(guests)
  const quote = useMemo(
    () =>
      estimateYachtCatering({
        guests: countedGuests,
        formatId,
        extraIds,
        overtimeServers,
        overtimeHours,
      }),
    [countedGuests, extraIds, formatId, overtimeHours, overtimeServers],
  )

  const format = quote.format
  const inquiryHref = yachtInquiryHref({ guests: countedGuests, formatId })
  const whatsappHref = `https://wa.me/${CATERING_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    yachtWhatsAppMessage({ guests: countedGuests, formatId }),
  )}`

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14 items-start">
      <div className="space-y-8">
        <div>
          <label htmlFor="yacht-guests" className="block font-inter text-caption font-medium uppercase tracking-[0.12em] text-gold mb-3">
            Guests
          </label>
          <div className="flex items-center gap-4">
            <input
              id="yacht-guests-range"
              type="range"
              min={YACHT_GUEST_MIN}
              max={YACHT_GUEST_MAX}
              value={countedGuests}
              onChange={(e) => setGuests(clampYachtGuests(Number(e.target.value)))}
              className="flex-1 accent-gold"
              aria-label="Guest count"
            />
            <input
              id="yacht-guests"
              type="number"
              min={YACHT_GUEST_MIN}
              max={YACHT_GUEST_MAX}
              value={countedGuests}
              onChange={(e) => setGuests(clampYachtGuests(Number(e.target.value)))}
              className="w-[5.5rem] bg-white/5 border border-white/15 px-3 py-2.5 font-inter text-body text-white tabular-nums focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
            />
          </div>
          <p className="mt-2 font-inter text-body-xs text-white/50">
            {YACHT_GUEST_MIN}–{YACHT_GUEST_MAX}. Default {YACHT_GUEST_DEFAULT}.
          </p>
        </div>

        <fieldset>
          <legend className="font-inter text-caption font-medium uppercase tracking-[0.12em] text-gold mb-3">
            Menu format
          </legend>
          <div className="grid gap-3">
            {YACHT_MENU_FORMATS.map((item) => {
              const selected = formatId === item.id
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setFormatId(item.id)}
                  className={`text-left border px-4 py-4 transition-colors ${
                    selected ? 'border-gold bg-gold/10' : 'border-white/15 hover:border-gold/50'
                  }`}
                >
                  <span className="flex items-baseline justify-between gap-4">
                    <span className="font-playfair text-h4 text-white">{item.name}</span>
                    <span className="font-playfair text-body text-gold tabular-nums shrink-0">
                      {formatYachtAed(item.perGuestAed)} / guest
                    </span>
                  </span>
                  <span className="mt-2 block font-inter text-body-xs text-white/60 leading-relaxed">{item.includes}</span>
                </button>
              )
            })}
          </div>
        </fieldset>

        <div>
          <p className="font-inter text-caption font-medium uppercase tracking-[0.12em] text-gold mb-3">Live station</p>
          {format.includesLiveStationChefs ? (
            <p className="font-inter text-body-sm text-white/80">
              Two station chefs included at {formatYachtAed(LIVE_STATION_CHEFS_AED)} flat.
            </p>
          ) : (
            <p className="font-inter text-body-sm text-white/60">
              Available on request. No price is shown here — it is quoted in writing for that charter.
            </p>
          )}
        </div>

        <fieldset>
          <legend className="font-inter text-caption font-medium uppercase tracking-[0.12em] text-gold mb-3">
            Extras
          </legend>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {YACHT_EXTRAS.map((extra) => {
              const checked = extraIds.includes(extra.id)
              return (
                <label key={extra.id} className="flex items-start justify-between gap-4 py-3 cursor-pointer">
                  <span className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name={extra.id}
                      checked={checked}
                      onChange={() => setExtraIds((current) => toggleExclusiveExtra(current, extra.id))}
                      className="mt-1 accent-gold"
                    />
                    <span className="font-inter text-body-sm text-white/85 leading-relaxed">{extra.name}</span>
                  </span>
                  <span className="font-playfair text-body text-gold tabular-nums shrink-0">{formatYachtAed(extra.aed)}</span>
                </label>
              )
            })}
          </div>
          <p className="mt-2 font-inter text-body-xs text-white/45">Bartender options are one or the other, not both.</p>
        </fieldset>

        <div>
          <p className="font-inter text-caption font-medium uppercase tracking-[0.12em] text-gold mb-3">
            Overtime
          </p>
          <div className="grid grid-cols-2 gap-3">
            <label className="block">
              <span className="block font-inter text-body-xs text-white/55 mb-1">Extra servers</span>
              <input
                type="number"
                min={0}
                max={20}
                value={overtimeServers}
                onChange={(e) => setOvertimeServers(Math.max(0, Math.round(Number(e.target.value)) || 0))}
                className="w-full bg-white/5 border border-white/15 px-3 py-2.5 font-inter text-body text-white tabular-nums focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
              />
            </label>
            <label className="block">
              <span className="block font-inter text-body-xs text-white/55 mb-1">Extra hours</span>
              <input
                type="number"
                min={0}
                max={12}
                value={overtimeHours}
                onChange={(e) => setOvertimeHours(Math.max(0, Math.round(Number(e.target.value)) || 0))}
                className="w-full bg-white/5 border border-white/15 px-3 py-2.5 font-inter text-body text-white tabular-nums focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
              />
            </label>
          </div>
          <p className="mt-2 font-inter text-body-xs text-white/45">
            {formatYachtAed(OVERTIME_PER_SERVER_PER_HOUR_AED)} per server, per hour.
          </p>
        </div>
      </div>

      <aside className="border border-gold/30 bg-white/[0.03] p-6 md:p-8 lg:sticky lg:top-24">
        <p className="font-inter text-caption uppercase tracking-[0.12em] text-gold mb-6">Indicative slip</p>
        <dl className="space-y-3 font-inter text-body-sm text-white/80 tabular-nums">
          <div className="flex justify-between gap-4">
            <dt>
              Food · {formatYachtAed(format.perGuestAed)} × {quote.guests}
            </dt>
            <dd className="text-white">{formatYachtAed(quote.food)}</dd>
          </div>
          {quote.liveChefs > 0 && (
            <div className="flex justify-between gap-4">
              <dt>Live station chefs</dt>
              <dd className="text-white">{formatYachtAed(quote.liveChefs)}</dd>
            </div>
          )}
          {quote.extras.map((extra) => (
            <div key={extra.id} className="flex justify-between gap-4">
              <dt className="max-w-[70%]">{extra.name}</dt>
              <dd className="text-white shrink-0">{formatYachtAed(extra.aed)}</dd>
            </div>
          ))}
          {quote.overtime > 0 && (
            <div className="flex justify-between gap-4">
              <dt>
                Overtime · {quote.overtimeServers} × {quote.overtimeHours} h
              </dt>
              <dd className="text-white">{formatYachtAed(quote.overtime)}</dd>
            </div>
          )}
          <div className="flex justify-between gap-4 pt-3 border-t border-white/15">
            <dt>Subtotal</dt>
            <dd className="text-white">{formatYachtAed(quote.subtotal)}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>VAT (5%)</dt>
            <dd className="text-white">{formatYachtAed(quote.vat)}</dd>
          </div>
        </dl>
        <div className="mt-5 pt-5 border-t border-gold/40">
          <p className="font-inter text-caption uppercase tracking-[0.12em] text-gold mb-2">Indicative total</p>
          <p className="font-playfair text-fluid-h2 text-white tabular-nums">{formatYachtAed(quote.total)}</p>
          <p className="mt-1 font-inter text-body-sm text-white/55 tabular-nums">
            {formatYachtAed(quote.perGuestEffective)} per guest, all in
          </p>
        </div>
        <p className="mt-6 font-inter text-body-xs text-white/55 leading-relaxed">{YACHT_ESTIMATE_DISCLAIMER}</p>
        <div className="mt-8 flex flex-col gap-3">
          <Link to={inquiryHref} className="btn-primary text-center">
            Get your written quote
          </Link>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-secondary text-center">
            Send this estimate on WhatsApp
          </a>
        </div>
      </aside>
    </div>
  )
}
