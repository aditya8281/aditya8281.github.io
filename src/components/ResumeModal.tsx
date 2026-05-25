import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

type Props = {
  open: boolean
  onClose: () => void
}

export default function ResumeModal({ open, onClose }: Props) {
  const pdfUrl = new URL('../assets/my_cv.pdf', import.meta.url).href
  const scrollYRef = useRef(0)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKey)

    if (open) {
      scrollYRef.current = window.scrollY
      document.documentElement.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollYRef.current}px`
      document.body.style.left = '0'
      document.body.style.right = '0'
      document.body.style.overflow = 'hidden'
      document.body.style.width = '100%'
    }

    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.overflow = ''
      document.body.style.width = ''
      window.removeEventListener('keydown', onKey)
      if (open) {
        window.scrollTo(0, scrollYRef.current)
      }
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-50 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            initial={{ scale: 0.98, y: 12 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.98, y: 8 }}
            transition={{ duration: 0.18 }}
            className="relative z-10 w-[94%] max-w-[900px] sm:max-w-[1100px] md:max-w-5xl h-[78vh] sm:h-[80vh] md:h-[76vh] lg:h-[70vh] rounded-2xl overflow-hidden border border-white/10 bg-slate-950/95 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-2 p-3 border-b border-white/6 bg-slate-900/60">
              <h3 className="text-sm font-semibold text-white">Resume</h3>
              <button type="button" onClick={onClose} className="rounded-md px-3 py-1 text-sm font-medium text-slate-200 hover:bg-white/5">
                Close
              </button>
            </div>

            <iframe src={pdfUrl} title="Resume PDF" className="w-full h-full" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
