import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { Download, HelpCircle, Search } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Kbd } from "@/components/ui/kbd"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { useSeoOs } from "@/seo-os/context"
import { downloadJson } from "@/seo-os/lib/format"
import { useSeoJson } from "@/seo-os/lib/data"
import { SEO_NAV } from "@/seo-os/nav"
import type { ControlFile } from "@/seo-os/lib/control"

export function SiteHeader() {
  const { meta } = useSeoOs()
  const navigate = useNavigate()
  const [help, setHelp] = useState(false)
  const [command, setCommand] = useState(false)
  const { data } = useSeoJson<ControlFile>("control")
  const age = data?.heartbeat?.age_hours
  const stale = age != null && age > 36
  const beatLabel = age == null ? "no heartbeat" : stale ? `stale ${age}h` : `live ${age}h`

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        setCommand((open) => !open)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <>
      <header className="flex h-12 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger />
        <Separator orientation="vertical" className="h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">SEO</BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>{meta.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="ml-auto flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Badge variant={stale || age == null ? "destructive" : "secondary"}>{beatLabel}</Badge>
            </TooltipTrigger>
            <TooltipContent>{data?.heartbeat?.ran_at ?? "Loop has not written a heartbeat yet."}</TooltipContent>
          </Tooltip>
          <Button variant="outline" size="sm" onClick={() => setCommand(true)}>
            <Search />
            <span className="hidden sm:inline">Search</span>
            <Kbd className="hidden md:inline">⌘K</Kbd>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="hidden sm:flex"
            disabled={!meta.exportData}
            onClick={() => meta.exportData && downloadJson(meta.exportName || meta.title, meta.exportData)}
          >
            <Download />
            Export
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setHelp(true)} aria-label="About this page">
            <HelpCircle />
          </Button>
        </div>
      </header>

      <CommandDialog open={command} onOpenChange={setCommand} title="Jump" description="Open a board page">
        <CommandInput placeholder="Jump to a board page…" />
        <CommandList>
          <CommandEmpty>No page matches.</CommandEmpty>
          {SEO_NAV.map((group) => (
            <CommandGroup key={group.title} heading={group.title}>
              {group.items.map((item) => (
                <CommandItem
                  key={item.href}
                  value={`${item.label} ${item.description}`}
                  onSelect={() => {
                    setCommand(false)
                    navigate(item.href)
                  }}
                >
                  <item.icon />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>

      <Dialog open={help} onOpenChange={setHelp}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{meta.title}</DialogTitle>
            <DialogDescription>{meta.description}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

    </>
  )
}
