import { type ReactNode } from "react"
import { ThemeProvider } from "next-themes"

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Toaster } from "@/components/ui/sonner"
import { AppSidebar } from "@/seo-os/components/app-sidebar"
import { SiteHeader } from "@/seo-os/components/site-header"

export function SeoOsLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem={false}>
      <div className="seo-os dark min-h-svh w-full">
        <SidebarProvider>
          <AppSidebar variant="inset" />
          <SidebarInset>
            <SiteHeader />
            {children}
          </SidebarInset>
        </SidebarProvider>
        <Toaster />
      </div>
    </ThemeProvider>
  )
}
