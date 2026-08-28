import { Component, type ErrorInfo, type ReactNode } from 'react'
import { isChunkLoadError, reloadOnceForStaleChunk } from '@/lib/chunkRecovery'

interface Props {
  children: ReactNode
  pathname?: string
}

interface State {
  error: Error | null
}

/**
 * Catches a route that fails to render. The common case is a stale tab after a
 * deploy (its route chunk no longer exists) — for that we reload once, which
 * fetches the current build. Anything else, or a second failure, gets a plain
 * message with a reload button instead of a page that silently never appears.
 * Error state clears when the pathname changes, without remounting the tree
 * (a key={pathname} remount collapsed main and flashed the silo/footer).
 */
export default class RouteErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidUpdate(prevProps: Props): void {
    if (this.state.error && prevProps.pathname !== this.props.pathname) {
      this.setState({ error: null })
    }
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    if (isChunkLoadError(error) && reloadOnceForStaleChunk()) return
    console.error('[route] render failed', error, info.componentStack)
  }

  render(): ReactNode {
    if (!this.state.error) return this.props.children
    const stale = isChunkLoadError(this.state.error)
    return (
      <section className="bg-cream section-padding" aria-labelledby="route-error-h">
        <div className="container-custom max-w-[640px]">
          <p className="mb-4 font-inter text-caption font-medium uppercase tracking-[0.14em] text-gold-ink">
            This page did not load
          </p>
          <h1 id="route-error-h" className="font-playfair text-h2 text-black mb-4">
            {stale ? 'Your browser is holding an older version of the site.' : 'Something went wrong while opening this page.'}
          </h1>
          <p className="font-inter text-body text-gray-600 leading-relaxed mb-8">
            {stale
              ? 'We publish updates during the day; reloading fetches the current version and opens the page you asked for.'
              : 'Reloading usually fixes it. If it happens again, message us on WhatsApp and we will send you what you need.'}
          </p>
          <div className="flex flex-wrap gap-4">
            <button type="button" onClick={() => window.location.reload()} className="btn-primary">
              Reload the page
            </button>
            <a href="/" className="btn-secondary">
              Back to the homepage
            </a>
          </div>
        </div>
      </section>
    )
  }
}
