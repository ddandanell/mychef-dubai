import { lazyPreloadable } from "@/lib/lazyPreloadable"

export const SeoOsApp = lazyPreloadable(() => import("./SeoOs"))

export function isSeoOsPath(pathname: string) {
  return pathname === "/seo" || pathname.startsWith("/seo/")
}
