import { Link, useLocation } from "react-router"
import { ChefHat } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { SEO_NAV } from "@/seo-os/nav"
import { cn } from "@/lib/utils"

export function AppSidebar({ onNavigate }: { onNavigate?: () => void }) {
  const { pathname } = useLocation()
  const current = pathname.replace(/\/$/, "") || "/seo"

  return (
    <div className="flex h-full flex-col bg-sidebar text-sidebar-foreground">
      <div className="flex items-center gap-2 px-3 py-3">
        <Link
          to="/seo"
          onClick={onNavigate}
          className="flex items-center gap-2 rounded-md px-1.5 py-1 text-sidebar-foreground"
        >
          <span className="flex size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <ChefHat />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold">myCHEF</span>
            <span className="text-sidebar-foreground/70 text-xs">SEO Intelligence</span>
          </span>
        </Link>
      </div>
      <Separator className="bg-sidebar-border" />
      <ScrollArea className="flex-1">
        <nav className="flex flex-col gap-4 px-2 py-3">
          {SEO_NAV.map((group) => (
            <div key={group.title} className="flex flex-col gap-1">
              <p className="text-sidebar-foreground/60 px-2 text-[11px] font-medium tracking-[0.12em] uppercase">
                {group.title}
              </p>
              {group.items.map((item) => {
                const active = current === item.href
                const Icon = item.icon
                return (
                  <Button
                    key={item.href}
                    asChild
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "h-8 justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                      active && "bg-sidebar-accent font-medium text-sidebar-accent-foreground",
                    )}
                  >
                    <Link to={item.href} onClick={onNavigate} title={item.description}>
                      <Icon />
                      {item.label}
                    </Link>
                  </Button>
                )
              })}
            </div>
          ))}
        </nav>
      </ScrollArea>
      <Separator className="bg-sidebar-border" />
      <p className="text-sidebar-foreground/55 px-4 py-3 text-xs">password-gated · noindex</p>
    </div>
  )
}
