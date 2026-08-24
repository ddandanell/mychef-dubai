import {
  ChefHat,
  Check,
  ClipboardList,
  UserRound,
} from 'lucide-react'
import { BodyCopy, DisplayHeading, EditorialImage, Eyebrow } from '@/components/system'
import { whoDoesWhat, whoDoesWhatPhoto } from '@/content/privateChefPage'

const ICONS = {
  myCHEF: ClipboardList,
  'The chef': ChefHat,
  You: UserRound,
} as const

export default function WhoDoesWhatBoard() {
  return (
    <>
      <div className="max-w-[720px] mb-12 lg:mb-16">
        <Eyebrow>The split</Eyebrow>
        <DisplayHeading size="h2" className="text-black mb-5">
          Who does what
        </DisplayHeading>
        <BodyCopy muted>
          The split is the product. If you end up doing the chef’s job or our job, the managed service has failed.
        </BodyCopy>
      </div>

      <EditorialImage
        src={whoDoesWhatPhoto.src}
        alt={whoDoesWhatPhoto.alt}
        width={whoDoesWhatPhoto.width}
        height={whoDoesWhatPhoto.height}
        aspect="aspect-[16/8] max-md:aspect-[16/10]"
        objectPosition="center 40%"
        framed
        className="w-full mb-14 lg:mb-16"
      />

      <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
        {whoDoesWhat.map((col) => {
          const Icon = ICONS[col.who as keyof typeof ICONS] ?? ClipboardList
          return (
            <article key={col.who} className="border border-gray-200 bg-white p-8 md:p-10">
              <span className="mb-6 flex h-12 w-12 items-center justify-center border border-gold/35 text-gold-ink">
                <Icon size={22} strokeWidth={1.5} aria-hidden />
              </span>
              <h3 className="font-playfair text-h3 text-black mb-2">{col.who}</h3>
              <p className="font-inter text-caption uppercase tracking-[0.14em] text-gold-ink mb-8">{col.role}</p>
              <ul className="space-y-7">
                {col.items.map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <Check size={16} className="mt-1.5 flex-shrink-0 text-gold-ink" aria-hidden />
                    <div>
                      <p className="font-playfair text-[1.15rem] leading-snug text-black mb-1.5">{item.title}</p>
                      <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </>
  )
}
