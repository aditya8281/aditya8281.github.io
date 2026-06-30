import { Fragment, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import type { Project } from '../data/portfolio'
import { useBodyScrollLock } from '../hooks/useBodyScrollLock'

type Props = {
  project: Project
  onClose: () => void
}

const overlay = { hidden: { opacity: 0 }, visible: { opacity: 1 } }
const panel = { hidden: { opacity: 0, y: 14, scale: 0.98 }, visible: { opacity: 1, y: 0, scale: 1 } }

export default function ProjectModal({ project, onClose }: Props) {
  useBodyScrollLock(true)
  const dialogRef = useRef<HTMLDivElement>(null)
  const previousFocus = useRef<HTMLElement | null>(null)

  // Focus trap + Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
      return
    }
    if (e.key !== 'Tab' || !dialogRef.current) return
    const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    )
    if (focusable.length === 0) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus() }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus() }
    }
  }, [onClose])

  useEffect(() => {
    previousFocus.current = document.activeElement as HTMLElement
    // Defer focus to after render
    const timer = setTimeout(() => {
      dialogRef.current?.focus()
    }, 50)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      clearTimeout(timer)
      document.removeEventListener('keydown', handleKeyDown)
      previousFocus.current?.focus()
    }
  }, [handleKeyDown])

  return (
    <Fragment>
      <motion.div
        className="fixed inset-0 z-[880] bg-[var(--mono-bg)]/95"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={overlay}
        onClick={onClose}
      />

      <motion.div
        className="fixed inset-0 z-[890] flex items-center justify-center p-6"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={overlay}
      >
        <motion.article
          ref={dialogRef}
          tabIndex={-1}
          className="w-full max-w-5xl border border-[var(--mono-surface-3)] bg-[var(--mono-surface)] p-6 max-h-[80vh] overflow-auto outline-none"
          variants={panel}
          transition={{ duration: 0.22 }}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="mb-3 flex flex-wrap gap-2">
                {project.tag && (
                  <span className="bg-[var(--mono-surface-2)] px-2.5 py-1 text-xs font-mono text-[var(--mono-accent)]">
                    {project.tag}
                  </span>
                )}
                {project.metric && (
                  <span className="bg-[var(--mono-surface-2)] px-2.5 py-1 text-xs font-mono text-[var(--mono-orange)]">
                    {project.metric}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-2 text-sm text-[var(--mono-text-dim)]">{project.description}</p>
            </div>

            <button onClick={onClose} aria-label="Close" className="ml-4 border border-[var(--mono-surface-3)] p-2 text-[var(--mono-comment)] hover:text-[var(--mono-accent)] hover:border-[var(--mono-accent)] transition-colors">
              &#x2715;
            </button>
          </div>

          <div className="mt-4 text-sm text-[var(--mono-text-dim)] leading-7">
            {project.longDescription ?? project.description}
          </div>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tools.map((t) => (
              <span key={t} className="bg-[var(--mono-surface-2)] px-2.5 py-1 text-xs font-mono text-[var(--mono-text-dim)] border border-[var(--mono-surface-3)]">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-primary"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.4-1.2-1.8-1.2-1.8-1-.7.1-.7.1-.7 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.3-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2a11.6 11.6 0 016.2 0c2.3-1.5 3.4-1.2 3.4-1.2.6 1.7.2 3 .1 3.3.8.8 1.2 1.9 1.2 3.2 0 4.5-2.7 5.4-5.3 5.7.4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0012 .5z" fill="currentColor" />
                </svg>
                View on GitHub
              </a>
            )}

            <button onClick={onClose} className="ml-auto btn-ghost">
              Close
            </button>
          </div>
        </motion.article>
      </motion.div>
    </Fragment>
  )
}
