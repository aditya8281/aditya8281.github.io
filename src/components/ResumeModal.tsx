import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useBodyScrollLock } from '../hooks/useBodyScrollLock'

type Props = {
  open: boolean
  onClose: () => void
}

export default function ResumeModal({ open, onClose }: Props) {
  const pdfUrl = new URL('../assets/my_cv.pdf', import.meta.url).href
  useBodyScrollLock(open)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose],
  )

  useEffect(() => {
    if (!open) return undefined
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, handleKeyDown])

  // Focus the iframe when modal opens so keyboard users can interact
  useEffect(() => {
    if (open && iframeRef.current) {
      iframeRef.current.focus()
    }
  }, [open])

  // Reset loading/error state when modal opens
  useEffect(() => {
    if (open) {
      setLoading(true)
      setError(false)
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[900] flex items-center justify-center p-3 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Resume viewer"
        >
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-2xl" onClick={onClose} />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_82%_80%,rgba(99,102,241,0.16),transparent_32%)]" />

          <motion.div
            initial={{ scale: 0.97, y: 16 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.97, y: 10 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex w-full max-w-[900px] flex-col overflow-hidden rounded-2xl border border-cyan-300/15 bg-slate-950/95 shadow-[0_40px_140px_rgba(2,8,23,0.72)] backdrop-blur-2xl sm:max-w-[1100px] md:max-w-5xl"
            style={{ height: 'min(80vh, 80svh)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex shrink-0 items-center justify-between gap-2 border-b border-white/10 bg-slate-900/80 px-4 py-3 backdrop-blur-xl">
              <h3 className="text-sm font-semibold text-white">Resume</h3>
              <div className="flex items-center gap-2">
                <a
                  href={pdfUrl}
                  download
                  className="rounded-md px-3 py-1.5 text-xs font-medium text-cyan-200 transition hover:bg-white/5"
                >
                  Download
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-md px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:bg-white/5"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="relative flex-1 min-h-0">
              {loading && !error && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-sm text-slate-400">
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent" />
                  Loading resume...
                </div>
              )}
              {error && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-sm text-slate-400">
                  <p>Failed to load the resume PDF.</p>
                  <a
                    href={pdfUrl}
                    download
                    className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    Download instead
                  </a>
                </div>
              )}
              <iframe
                ref={iframeRef}
                src={pdfUrl}
                title="Resume PDF"
                className="h-full w-full flex-1 border-0"
                style={{ minHeight: 0, opacity: loading || error ? 0 : 1 }}
                onLoad={() => setLoading(false)}
                onError={() => { setLoading(false); setError(true) }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
