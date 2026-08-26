import { useState } from "react"
import { Download, HelpCircle, Menu, Play } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { useSeoOs } from "@/seo-os/context"
import { downloadJson } from "@/seo-os/lib/format"

export function SiteHeader({ onOpenNav }: { onOpenNav: () => void }) {
  const { meta } = useSeoOs()
  const [help, setHelp] = useState(false)
  const [run, setRun] = useState(false)

  return (
    <>
      <header className="flex h-12 shrink-0 items-center gap-2 border-b px-4">
        <Button variant="ghost" size="icon" className="md:hidden" onClick={onOpenNav} aria-label="Open navigation">
          <Menu />
        </Button>
        <Separator orientation="vertical" className="hidden h-4 md:block" />
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
          <Button size="sm" onClick={() => setRun(true)}>
            <Play />
            Run Agent
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

      <Dialog open={help} onOpenChange={setHelp}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{meta.title}</DialogTitle>
            <DialogDescription>{meta.description}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog open={run} onOpenChange={setRun}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Run the SEO loop locally</DialogTitle>
            <DialogDescription>
              The board is a read surface. The agent does not apply copy from here. On a machine that holds the
              credentials, run:
            </DialogDescription>
          </DialogHeader>
          <pre className="bg-muted overflow-x-auto rounded-lg p-3 text-xs">docs/seo/keyword-map/run-loop.sh live</pre>
          <p className="text-muted-foreground text-sm">
            Then publish with <code>docs/seo/keyword-map/publish.sh</code>. Queue proposals stay unapplied until a human
            opens a PR.
          </p>
        </DialogContent>
      </Dialog>
    </>
  )
}
