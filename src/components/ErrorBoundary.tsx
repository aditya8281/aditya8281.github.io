import { Component, type ErrorInfo, type ReactNode } from 'react'

type Props = { children: ReactNode }
type State = { hasError: boolean; error: Error | null }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[ErrorBoundary]', error, info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
          <div className="border border-[var(--mono-surface-3)] bg-[var(--mono-surface)] p-8 max-w-md">
            <p className="text-sm font-mono uppercase tracking-[0.24em] text-[var(--mono-accent)]">Something went wrong</p>
            <p className="mt-4 text-[var(--mono-text-dim)] leading-7">
              The page hit an unexpected error. Refresh to try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 btn-primary"
            >
              Reload page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
