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
          <div className="rounded-2xl border border-cyan-400/15 bg-slate-950/90 p-8 backdrop-blur-xl max-w-md">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Something went wrong</p>
            <p className="mt-4 text-slate-300 leading-7">
              The page hit an unexpected error. Refresh to try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
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
