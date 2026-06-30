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

  useEffect(() => {
    if (open && iframeRef.current) iframeRef.current.focus()
  }, [open])

  useEffect(() => {
    if (open) { setLoading(true); setError(false) }
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
          <div className="absolute inset-0 bg-[#1a1b16]/95" onClick={onClose} />

          <motion.div
            initial={{ scale: 0.97, y: 16 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.97, y: 10 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex w-full max-w-[900px] flex-col overflow-hidden border border-[var(--mono-surface-3)] bg-[var(--mono-surface)] sm:max-w-[1100px] md:max-w-5xl"
            style={{ height: 'min(80vh, 80svh)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex shrink-0 items-center justify-between gap-2 border-b border-[var(--mono-surface-3)] bg-[var(--mono-bg)] px-4 py-3">
              <h3 className="text-sm font-semibold text-white">Resume</h3>
              <div className="flex items-center gap-2">
                <a
                  href={pdfUrl}
                  download
                  className="rounded-sm px-3 py-1.5 text-xs font-medium text-[var(--mono-cyan)] transition hover:bg-[var(--mono-surface-2)]"
                >
                  Download
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-sm px-3 py-1.5 text-xs font-medium text-[var(--mono-text-dim)] transition hover:bg-[var(--mono-surface-2)]"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="relative flex-1 min-h-0">
              {loading && !error && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-sm text-[var(--mono-comment)]">
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-[var(--mono-cyan)] border-t-transparent" />
                  Loading resume...
                </div>
              )}
              {error && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-sm text-[var(--mono-comment)]">
                  <p>Failed to load the resume PDF.</p>
                  <a
                    href={pdfUrl}
                    download
                    className="btn-primary"
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
