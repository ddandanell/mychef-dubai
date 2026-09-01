import { Link } from 'react-router'
import {
  ArrowRight,
  Clock,
  CookingPot,
  Home,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  UserRound,
  Users,
} from 'lucide-react'
import { BodyCopy, DisplayHeading, EditorialImage, Eyebrow } from '@/components/system'
import { CLUSTER_PATHS } from '@/content/privateChefCluster'
import { photos, roleQuestions, whoForPhoto } from '@/content/privateChefPage'

const TRUTHS = [
  {
    Icon: RefreshCw,
    title: 'A chef who comes back',
    body: 'Not a new person every Monday. The same chef, learning your kitchen.',
  },
  {
    Icon: ShieldCheck,
    title: 'A record that travels',
    body: 'The Food Profile is what a backup chef receives. You do not re-brief the door.',
  },
  {
    Icon: UserRound,
    title: 'One contact',
    body: 'When the week is not normal, you talk to a household manager — not a network.',
  },
] as const

const GROUP_ICONS = {
  Time: Clock,
  'The household': Home,
  'The kitchen': CookingPot,
  'The work': Users,
  'The standard': Sparkles,
} as const

const productPhoto = whoForPhoto
const kitchenPhoto = photos[3]

export default function HowItWorksProduct() {
  return (
    <>
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-20">
        <div>
          <Eyebrow>The product</Eyebrow>
          <DisplayHeading size="h2" className="text-black mb-6">
            Getting a cook in Dubai is easy. Keeping a good one is the hard part.
          </DisplayHeading>
          <BodyCopy className="mb-6">
            There are two ways to get a chef in Dubai: find one yourself and manage them, or use a service that keeps working when that person cannot. This page is the second one. You tell us how your home eats. We work out the role, match the chef, build your Food Profile, and stay one point of contact for the weeks that do not go to plan.
          </BodyCopy>
          <BodyCopy className="mb-6">
            Some houses call this a private chef, some a personal cook, some simply “someone who cooks five days a
            week.” The label matters less than the definition: the role is set in writing before the first service,
            whether it is a part-time cook one day a week or a full-day chef.
          </BodyCopy>
          <BodyCopy className="mb-10">
            Backup is the point of the system: the next chef is briefed from the profile, not from a conversation you
            have to repeat at the door.
          </BodyCopy>
          <div className="space-y-0 divide-y divide-gray-200 border-y border-gray-200">
            {TRUTHS.map(({ Icon, title, body }) => (
              <div key={title} className="flex gap-5 py-6">
                <span className="mt-0.5 flex h-11 w-11 flex-shrink-0 items-center justify-center border border-gold/35 text-gold-ink">
                  <Icon size={20} strokeWidth={1.5} aria-hidden />
                </span>
                <div>
                  <p className="font-playfair text-h4 text-black mb-1.5">{title}</p>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 font-inter text-body-sm text-gray-500">
            <Link to={CLUSTER_PATHS.ourChefs} className="text-gold-ink underline underline-offset-4">
              How chefs are selected
            </Link>
            {' · '}
            <Link to={CLUSTER_PATHS.pricing} className="text-gold-ink underline underline-offset-4">
              How household prices are built
            </Link>
          </p>
        </div>
        <figure className="m-0">
          <EditorialImage
            src={productPhoto.src}
            alt={productPhoto.alt}
            width={productPhoto.width}
            height={productPhoto.height}
            aspect="aspect-[4/5] lg:aspect-[3/4]"
            objectPosition="center 28%"
            framed
            className="w-full"
          />
        </figure>
      </div>

      <div className="mt-24 lg:mt-32 grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <Eyebrow>{roleQuestions.eyebrow}</Eyebrow>
          <DisplayHeading size="h2" className="text-black mb-6">
            {roleQuestions.title}
          </DisplayHeading>
          <BodyCopy className="mb-8">{roleQuestions.intro}</BodyCopy>
          <EditorialImage
            src={kitchenPhoto.src}
            alt={kitchenPhoto.alt}
            width={kitchenPhoto.width}
            height={kitchenPhoto.height}
            aspect="aspect-[4/3]"
            objectPosition="center 40%"
            framed
            className="w-full mb-8"
          />
          <BodyCopy muted>{roleQuestions.closer}</BodyCopy>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-6 gap-5">
          {roleQuestions.groups.map((group, index) => {
            const Icon = GROUP_ICONS[group.label as keyof typeof GROUP_ICONS] ?? Home
            return (
              <div
                key={group.label}
                className={`border border-gray-200 bg-white p-7 md:p-8 hover:border-gold/40 transition-colors ${
                  index >= 3 ? 'xl:col-span-3' : 'xl:col-span-2'
                }`}
              >
                <span className="mb-5 flex h-11 w-11 items-center justify-center border border-gold/35 text-gold-ink">
                  <Icon size={20} strokeWidth={1.5} aria-hidden />
                </span>
                <p className="font-inter text-caption uppercase tracking-[0.14em] text-gold-ink mb-4">{group.label}</p>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 font-inter text-body-sm text-gray-600 leading-relaxed">
                      <ArrowRight size={14} className="mt-1 flex-shrink-0 text-gold" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
