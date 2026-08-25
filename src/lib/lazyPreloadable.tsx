import { createElement, type ComponentType, type ReactElement } from 'react'

/**
 * A preloadable lazy component for prop-less route/page components.
 *
 * React.lazy is unsuitable for flash-free hydration of client-loaded chunks:
 * even when the underlying module is already in the bundler cache, lazy() still
 * suspends once on its first render (it throws its thenable and only resolves on
 * the next microtask). During hydration that single suspend swaps the
 * prerendered HTML for the Suspense fallback — the exact blank/flash we are
 * trying to remove.
 *
 * This helper instead renders SYNCHRONOUSLY the moment its module has loaded.
 * The boot sequence preloads the current route's chunk (`preload()`), awaits it,
 * and only then calls hydrateRoot — so the component is already resolved and
 * hydration matches the prerendered markup with no fallback flash. Subsequent
 * client navigations to a not-yet-loaded route suspend once (a brief loader),
 * which is the correct behaviour for an SPA transition.
 */
export interface PreloadableComponent {
  (): ReactElement
  preload: () => Promise<void>
}

export function lazyPreloadable(
  factory: () => Promise<{ default: ComponentType }>,
): PreloadableComponent {
  let Loaded: ComponentType | null = null
  let pending: Promise<void> | null = null
  // The last import failure. Thrown as a real Error on the next render so the
  // route error boundary sees it — re-throwing a rejected promise forever just
  // leaves React in the Suspense fallback with an empty page.
  let failed: unknown = null

  const preload = (): Promise<void> => {
    if (Loaded) return Promise.resolve()
    if (!pending) {
      pending = factory().then(
        (mod) => {
          Loaded = mod.default
        },
        (error: unknown) => {
          // Forget the failed attempt so a retry (after the recovery reload or an
          // error-boundary remount) fetches again instead of replaying the rejection.
          pending = null
          failed = error
          throw error
        },
      )
    }
    return pending
  }

  const Wrapped = (() => {
    if (!Loaded) {
      if (failed !== null) {
        // Surface the failure once; the next mount (new route, reload) retries.
        const error = failed
        failed = null
        throw error instanceof Error ? error : new Error(String(error))
      }
      // Not loaded yet: suspend until the chunk arrives.
      throw preload()
    }
    return createElement(Loaded)
  }) as PreloadableComponent

  Wrapped.preload = preload
  return Wrapped
}
