import { useEffect, type ReactNode } from "react"
import { Helmet } from "react-helmet-async"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { SectionCards, type MetricCard } from "@/seo-os/components/section-cards"
import { useSeoOs } from "@/seo-os/context"

export function PageFrame({
  title,
  description,
  exportName,
  exportData,
  metrics,
  loading,
  error,
  children,
}: {
  title: string
  description: string
  exportName?: string
  exportData?: unknown
  metrics?: MetricCard[]
  loading?: boolean
  error?: string | null
  children?: ReactNode
}) {
  const { setMeta } = useSeoOs()
  useEffect(() => {
    setMeta({ title, description, exportName, exportData })
    document.title = `${title} · myCHEF SEO`
  }, [title, description, exportName, exportData, setMeta])

  return (
    <div className="flex flex-1 flex-col gap-4 py-4 md:gap-6 md:py-6">
      <Helmet>
        <title>{title} · myCHEF SEO</title>
        <meta name="robots" content="noindex, nofollow, noarchive" />
      </Helmet>
      {metrics?.length ? <SectionCards items={metrics} /> : null}
      {loading ? (
        <div className="flex flex-col gap-3 px-4 lg:px-6">
          <Skeleton className="h-10 w-full max-w-sm" />
          <Skeleton className="h-72 w-full" />
        </div>
      ) : null}
      {error ? (
        <div className="px-4 lg:px-6">
          <Alert>
            <AlertTitle>Data not published</AlertTitle>
            <AlertDescription>
              {error}. Run <code>docs/seo/keyword-map/publish.sh</code> so JSON lands in <code>/seo/data</code>.
            </AlertDescription>
          </Alert>
        </div>
      ) : null}
      {children}
    </div>
  )
}
