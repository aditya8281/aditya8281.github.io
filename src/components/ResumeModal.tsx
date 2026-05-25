import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { useBodyScrollLock } from '../hooks/useBodyScrollLock'

type Props = {
  open: boolean
  onClose: () => void
}

export default function ResumeModal({ open, onClose }: Props) {
  const pdfUrl = new URL('../assets/my_cv.pdf', import.meta.url).href
  useBodyScrollLock(open)

  useEffect(() => {
    if (!open) {
      return undefined
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKey)

    return () => {
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[900] flex items-center justify-center p-3 sm:p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="absolute inset-0 bg-slate-950/74 backdrop-blur-2xl" onClick={onClose} />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_82%_80%,rgba(99,102,241,0.16),transparent_32%)]" />

          <motion.div
            initial={{ scale: 0.98, y: 12 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.98, y: 8 }}
            transition={{ duration: 0.18 }}
            className="relative z-10 w-full max-w-[900px] sm:max-w-[1100px] md:max-w-5xl h-[78vh] sm:h-[80vh] md:h-[76vh] lg:h-[70vh] rounded-2xl overflow-hidden border border-cyan-300/15 bg-slate-950/92 shadow-[0_40px_140px_rgba(2,8,23,0.72)] backdrop-blur-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-2 p-3 border-b border-white/6 bg-slate-900/70 backdrop-blur-xl">
              <h3 className="text-sm font-semibold text-white">Resume</h3>
              <button type="button" onClick={onClose} className="rounded-md px-3 py-1 text-sm font-medium text-slate-200 hover:bg-white/5">
                Close
              </button>
            </div>

            <iframe src={pdfUrl} title="Resume PDF" className="w-full h-full" sandbox="allow-same-origin allow-scripts" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
