import { useEffect, useRef, useState, type ComponentType } from 'react'
import { Link, useLocation } from 'react-router'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { ArrowRight, ChevronDown, Menu, MessageCircle, Phone, X } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import ChefHatLogo from './ChefHatLogo'
import PrivateChefMegaMenu, { CLUSTER_ICONS } from './private-chef/PrivateChefMegaMenu'
import ExperiencesMegaMenu from './experiences/ExperiencesMegaMenu'
import { EXPERIENCES_ICONS } from './experiences/experiencesIcons'
import ClusterMegaMenu from './nav/ClusterMegaMenu'
import { NAV_CLUSTER_ICONS } from './nav/navIcons'
import ContactMegaMenu from './contact/ContactMegaMenu'
import { CONTACT_ICONS } from './contact/contactIcons'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from '@/components/ui/sheet'
import { CLUSTER_NAV, CLUSTER_PATHS } from '@/content/privateChefCluster'
import {
  EXPERIENCES_NAV_CHILDREN,
  EXPERIENCES_PATHS,
  experiencesClusterActive,
} from '@/content/experiencesCluster'
import { CONTACT_NAV_CHILDREN, CONTACT_PATHS, contactNavActive } from '@/content/contactNav'
import {
  CATERING_FORMATS_CHILDREN,
  CATERING_FORMATS_GROUPS,
  CATERING_FORMATS_ROOT,
  CORPORATE_NAV_CHILDREN,
  CORPORATE_NAV_GROUPS,
  CORPORATE_NAV_ROOT,
  CUISINES_CHILDREN,
  CUISINES_GROUPS,
  CUISINES_ROOT,
  PRIVATE_EVENTS_CHILDREN,
  PRIVATE_EVENTS_GROUPS,
  PRIVATE_EVENTS_ROOT,
  cateringFormatsActive,
  corporateNavActive,
  cuisinesNavActive,
  privateEventsActive,
} from '@/content/navClusters'
import { cn } from '@/lib/utils'

type NavMega =
  | 'private-chef'
  | 'catering'
  | 'private-events'
  | 'corporate'
  | 'cuisines'
  | 'experiences'
  | 'contact'

const MEGA_MENUS: Record<NavMega, ComponentType> = {
  'private-chef': PrivateChefMegaMenu,
  catering: () => (
    <ClusterMegaMenu
      groups={CATERING_FORMATS_GROUPS}
      footer={{ text: 'Not sure which format fits?', linkLabel: 'Start with the event.', href: CATERING_FORMATS_ROOT }}
    />
  ),
  'private-events': () => (
    <ClusterMegaMenu
      groups={PRIVATE_EVENTS_GROUPS}
      footer={{ text: 'Something else entirely?', linkLabel: 'See all private events.', href: PRIVATE_EVENTS_ROOT }}
    />
  ),
  corporate: () => (
    <ClusterMegaMenu
      groups={CORPORATE_NAV_GROUPS}
      footer={{ text: 'Recurring or one-off?', linkLabel: 'Corporate catering explained.', href: CORPORATE_NAV_ROOT }}
    />
  ),
  cuisines: () => (
    <ClusterMegaMenu
      groups={CUISINES_GROUPS}
      footer={{ text: 'Cooking something not listed?', linkLabel: 'See every cuisine.', href: CUISINES_ROOT }}
    />
  ),
  experiences: ExperiencesMegaMenu,
  contact: ContactMegaMenu,
}

const MEGA_ICONS: Partial<Record<NavMega, Record<string, LucideIcon>>> = {
  'private-chef': CLUSTER_ICONS,
  catering: NAV_CLUSTER_ICONS,
  'private-events': NAV_CLUSTER_ICONS,
  corporate: NAV_CLUSTER_ICONS,
  cuisines: NAV_CLUSTER_ICONS,
  experiences: EXPERIENCES_ICONS,
  contact: CONTACT_ICONS,
}

type NavItem = {
  label: string
  href: string
  mega?: NavMega
  children?: { href: string; label: string; description: string }[]
}

const navLinks: NavItem[] = [
  {
    label: 'Private Chef',
    href: CLUSTER_PATHS.overview,
    mega: 'private-chef',
    children: CLUSTER_NAV.map((item) => ({
      href: item.href,
      label: item.label,
      description: item.description,
    })),
  },
  {
    label: 'Catering',
    href: CATERING_FORMATS_ROOT,
    mega: 'catering',
    children: CATERING_FORMATS_CHILDREN,
  },
  {
    label: 'Events',
    href: PRIVATE_EVENTS_ROOT,
    mega: 'private-events',
    children: PRIVATE_EVENTS_CHILDREN,
  },
  {
    label: 'Corporate',
    href: CORPORATE_NAV_ROOT,
    mega: 'corporate',
    children: CORPORATE_NAV_CHILDREN,
  },
  {
    label: 'Cuisines',
    href: CUISINES_ROOT,
    mega: 'cuisines',
    children: CUISINES_CHILDREN,
  },
  {
    label: 'Dinner',
    href: EXPERIENCES_PATHS.hub,
    mega: 'experiences',
    children: EXPERIENCES_NAV_CHILDREN,
  },
  {
    label: 'Contact',
    href: CONTACT_PATHS.contact,
    mega: 'contact',
    children: CONTACT_NAV_CHILDREN,
  },
]

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I would like to request a quote for private chef or catering services.')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const navLinkClass =
  'relative whitespace-nowrap font-inter text-[11px] font-medium uppercase tracking-[0.07em] xl:text-[12px] xl:tracking-[0.09em] antialiased text-white/85 transition-colors duration-300 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100'

function normalizePath(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith('/')) return pathname.replace(/\/+$/, '')
  return pathname
}

function isItemActive(pathname: string, href: string) {
  const path = normalizePath(pathname)
  return path === href || (href !== '/' && path.startsWith(`${href}/`))
}

function clusterActive(pathname: string) {
  const path = normalizePath(pathname)
  return path === CLUSTER_PATHS.overview || path.startsWith(`${CLUSTER_PATHS.overview}/`)
}

function itemIsActive(pathname: string, link: NavItem) {
  if (link.mega === 'private-chef') return clusterActive(pathname)
  if (link.mega === 'catering') return cateringFormatsActive(pathname)
  if (link.mega === 'private-events') return privateEventsActive(pathname)
  if (link.mega === 'corporate') return corporateNavActive(pathname)
  if (link.mega === 'cuisines') return cuisinesNavActive(pathname)
  if (link.mega === 'experiences') return experiencesClusterActive(pathname)
  if (link.mega === 'contact') {
    return (
      contactNavActive(pathname) &&
      !clusterActive(pathname) &&
      !cateringFormatsActive(pathname) &&
      !privateEventsActive(pathname) &&
      !corporateNavActive(pathname) &&
      !cuisinesNavActive(pathname) &&
      !experiencesClusterActive(pathname)
    )
  }
  return isItemActive(pathname, link.href)
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileOpenGroup, setMobileOpenGroup] = useState('')
  const [menu, setMenu] = useState('')
  const ignoreOpen = useRef(false)
  const location = useLocation()

  useEffect(() => {
    ignoreOpen.current = true
    setMenu('')
    setMobileOpen(false)
    setMobileOpenGroup('')
    const clear = window.setTimeout(() => {
      ignoreOpen.current = false
    }, 0)
    return () => window.clearTimeout(clear)
  }, [location.pathname])

  function closeMega() {
    ignoreOpen.current = true
    setMenu('')
  }

  return (
    <>
      <NavigationMenu
        value={menu}
        onValueChange={(next) => {
          if (ignoreOpen.current && next) return
          setMenu(next)
        }}
        viewport={false}
        delayDuration={100}
        skipDelayDuration={200}
        className="relative sticky top-0 z-50 flex h-16 min-h-16 w-full max-w-none flex-none justify-start overflow-visible bg-black print:hidden"
      >
        <div
          className="pointer-events-none absolute inset-0 hidden bg-black/95 backdrop-blur-xl lg:block"
          aria-hidden
        />
        <div className="relative container-custom flex h-16 w-full items-center justify-between gap-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:hidden text-gold p-2 -ml-2 min-w-10 min-h-10 flex items-center justify-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label="Chat on WhatsApp"
          >
            <Phone size={22} />
          </a>

          <Link to="/" className="flex shrink-0 items-center gap-1.5 group" aria-label="myCHEF Dubai home">
            <ChefHatLogo className="h-6 w-6 text-gold transition-transform duration-300 group-hover:scale-110" />
            <span className="font-playfair text-xl font-semibold text-gold tracking-tight">myCHEF</span>
          </Link>

          <NavigationMenuList className="hidden h-full flex-1 flex-nowrap items-center justify-center gap-3 lg:flex xl:gap-5">
            {navLinks.map((link) => {
              const hasChildren = Boolean(link.children?.length)
              const isActive = itemIsActive(location.pathname, link)
              if (!hasChildren) {
                return (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink asChild active={isActive}>
                      <Link
                        to={link.href}
                        aria-current={isActive ? 'page' : undefined}
                        className={cn(navLinkClass, 'relative bg-transparent p-0 hover:bg-transparent focus:bg-transparent data-[active=true]:bg-transparent', isActive && 'text-gold')}
                      >
                        {link.label}
                        {isActive && <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold" />}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              }
              return (
                <NavigationMenuItem key={link.href} value={link.mega} className="flex h-full items-center">
                  <NavigationMenuPrimitive.Trigger asChild>
                    <Link
                      to={link.href}
                      onPointerDown={closeMega}
                      onClick={closeMega}
                      aria-current={normalizePath(location.pathname) === link.href ? 'page' : undefined}
                      className={cn(
                        navLinkClass,
                        'group relative inline-flex h-full items-center gap-1 bg-transparent hover:bg-transparent data-[state=open]:text-gold',
                        isActive && 'text-gold'
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        size={12}
                        className="transition-transform duration-200 group-data-[state=open]:rotate-180"
                        aria-hidden
                      />
                      <span
                        className={cn(
                          'absolute -bottom-1 left-0 right-3 h-px bg-gold transition-opacity duration-200',
                          isActive ? 'opacity-100' : 'opacity-0 group-data-[state=open]:opacity-100'
                        )}
                      />
                    </Link>
                  </NavigationMenuPrimitive.Trigger>
                  <NavigationMenuPrimitive.Content className="pc-mega-content">
                    {(() => {
                      const Mega = MEGA_MENUS[link.mega!]
                      return <Mega />
                    })()}
                  </NavigationMenuPrimitive.Content>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>

          <div className="hidden lg:flex items-center">
            {/* Hover mechanic adapted from Magic UI interactive-hover-button: the dot grows into the fill,
                the resting label slides out, the action label slides in. Pure CSS transforms. */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center overflow-hidden rounded-full border border-gold px-3 py-2 xl:px-4 font-inter text-[12px] font-medium uppercase tracking-[0.12em] antialiased text-gold transition-colors duration-300 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label="Chat on WhatsApp"
            >
              <span className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-gold transition-transform duration-300 ease-out group-hover:scale-[40]"
                  aria-hidden
                />
                <span className="inline-flex items-center gap-1.5 transition-all duration-300 group-hover:!translate-x-10 group-hover:!opacity-0">
                  <Phone size={13} aria-hidden />
                  <span className="hidden xl:inline">Chat</span>
                </span>
              </span>
              <span
                className="invisible absolute inset-0 z-10 flex !translate-x-10 items-center justify-center gap-1.5 !opacity-0 transition-all duration-300 group-hover:visible group-hover:!translate-x-0 group-hover:!opacity-100"
                aria-hidden
              >
                <MessageCircle size={13} />
                <span className="hidden xl:inline">WhatsApp</span>
                <ArrowRight size={12} />
              </span>
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden text-gold p-2 -mr-2 min-w-10 min-h-10 flex items-center justify-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            onClick={() => {
              if (clusterActive(location.pathname)) setMobileOpenGroup(CLUSTER_PATHS.overview)
              else if (cateringFormatsActive(location.pathname)) setMobileOpenGroup(CATERING_FORMATS_ROOT)
              else if (privateEventsActive(location.pathname)) setMobileOpenGroup(PRIVATE_EVENTS_ROOT)
              else if (corporateNavActive(location.pathname)) setMobileOpenGroup(CORPORATE_NAV_ROOT)
              else if (cuisinesNavActive(location.pathname)) setMobileOpenGroup(CUISINES_ROOT)
              else if (experiencesClusterActive(location.pathname)) setMobileOpenGroup(EXPERIENCES_PATHS.hub)
              else if (contactNavActive(location.pathname)) setMobileOpenGroup(CONTACT_PATHS.contact)
              setMobileOpen(true)
            }}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu size={22} />
          </button>
        </div>
      </NavigationMenu>

      <Sheet
        open={mobileOpen}
        onOpenChange={(open) => {
          setMobileOpen(open)
          if (!open) setMobileOpenGroup('')
        }}
      >
        <SheetContent
          side="right"
          onCloseAutoFocus={(event) => event.preventDefault()}
          className="z-[100] h-full w-full max-w-none border-0 bg-black p-0 sm:max-w-none [&>button]:hidden print:hidden"
        >
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <SheetDescription className="sr-only">
            myCHEF Dubai pages and private chef services
          </SheetDescription>
          <div className="container-custom flex h-full w-full flex-col">
            <div className="flex h-12 items-center justify-between">
              <span className="flex items-center gap-1.5">
                <ChefHatLogo className="h-5 w-5 text-gold" />
                <span className="font-playfair text-lg font-semibold text-gold">myCHEF</span>
              </span>
              <SheetClose className="text-white p-2 -mr-2 min-w-10 min-h-10 flex items-center justify-center rounded-sm opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                <span className="sr-only">Close menu</span>
                <X size={20} aria-hidden />
              </SheetClose>
            </div>

            <nav aria-label="Mobile" className="flex-1 overflow-y-auto overscroll-contain">
              <Accordion
                type="single"
                collapsible
                value={mobileOpenGroup}
                onValueChange={setMobileOpenGroup}
                className="divide-y divide-white/10 border-y border-white/10"
              >
                {navLinks.map((link) => {
                  const hasChildren = Boolean(link.children?.length)
                  if (!hasChildren) {
                    const active = isItemActive(location.pathname, link.href)
                    return (
                      <Link
                        key={link.href}
                        to={link.href}
                        aria-current={active ? 'page' : undefined}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          'flex min-h-11 items-center justify-between gap-3 border-l-2 px-3 font-playfair text-[17px] leading-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold',
                          active ? 'border-gold text-gold' : 'border-transparent text-white hover:text-gold',
                        )}
                      >
                        {link.label}
                        <ArrowRight size={14} className="text-white/30" aria-hidden />
                      </Link>
                    )
                  }
                  const active = itemIsActive(location.pathname, link)
                  const groupId = link.href
                  return (
                    <AccordionItem key={link.href} value={groupId} className="border-b-0">
                      <AccordionTrigger
                        className={cn(
                          'min-h-11 items-center rounded-none border-l-2 px-3 py-0 font-playfair text-[17px] leading-none transition-colors duration-300 hover:no-underline hover:text-gold focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold focus-visible:border-l-2 [&>svg]:size-4 [&>svg]:translate-y-0 [&>svg]:text-gold [&>svg]:transition-transform [&>svg]:duration-300 [&>svg]:ease-out',
                          active ? 'border-gold text-gold' : 'border-transparent text-white',
                        )}
                      >
                        {link.label}
                      </AccordionTrigger>
                      <AccordionContent className="pb-0">
                        <ul className="bg-white/[0.03]">
                          {link.children!.map((child) => {
                            const Icon = link.mega ? MEGA_ICONS[link.mega]?.[child.href] : undefined
                            const [childPath, childHash] = child.href.split('#')
                            const childActive = childHash
                              ? normalizePath(location.pathname) === childPath && location.hash === `#${childHash}`
                              : link.mega === 'contact'
                                ? isItemActive(location.pathname, childPath)
                                : normalizePath(location.pathname) === childPath
                            return (
                              <li key={child.href + child.label}>
                                <Link
                                  to={child.href}
                                  onClick={() => setMobileOpen(false)}
                                  aria-current={childActive ? 'page' : undefined}
                                  title={child.description}
                                  className={cn(
                                    'group flex min-h-11 items-center gap-2.5 border-l-2 py-0 pl-3 pr-3 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold',
                                    childActive ? 'border-gold' : 'border-transparent',
                                  )}
                                >
                                  {Icon && (
                                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center border border-gold/35 text-gold transition-[border-color,background-color,transform] duration-300 ease-out group-hover:border-gold group-hover:bg-gold/10 group-hover:-translate-y-px">
                                      <Icon size={14} strokeWidth={1.5} aria-hidden />
                                    </span>
                                  )}
                                  <span className={cn('min-w-0 truncate font-inter text-[14px] leading-none transition-colors duration-300', childActive ? 'text-gold' : 'text-white/90 group-hover:text-gold')}>
                                    {child.label}
                                  </span>
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  )
                })}
              </Accordion>
            </nav>

            <div
              className="flex justify-center border-t border-white/10 pt-1"
              style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 0.75rem)' }}
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-1.5 px-3 font-inter text-[12px] font-normal tracking-[0.02em] text-white/55 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <MessageCircle size={12} strokeWidth={1.5} aria-hidden />
                Chat with us
              </a>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
