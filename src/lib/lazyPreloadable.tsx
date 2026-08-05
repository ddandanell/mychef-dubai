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

  const preload = (): Promise<void> => {
    if (Loaded) return Promise.resolve()
    if (!pending) {
      pending = factory().then((mod) => {
        Loaded = mod.default
      })
    }
    return pending
  }

  const Wrapped = (() => {
    if (!Loaded) {
      // Not loaded yet: suspend until the chunk arrives.
      throw preload()
    }
    return createElement(Loaded)
  }) as PreloadableComponent

  Wrapped.preload = preload
  return Wrapped
}
