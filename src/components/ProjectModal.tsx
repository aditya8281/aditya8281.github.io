import { Fragment } from 'react'
import { motion } from 'framer-motion'
import type { Project } from '../data/portfolio'

type Props = {
  project: Project
  onClose: () => void
}

const overlay = { hidden: { opacity: 0 }, visible: { opacity: 1 } }
const panel = { hidden: { opacity: 0, y: 14, scale: 0.98 }, visible: { opacity: 1, y: 0, scale: 1 } }

export default function ProjectModal({ project, onClose }: Props) {
  return (
    <Fragment>
      <motion.div
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={overlay}
        onClick={onClose}
      />

      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-6"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={overlay}
      >
        <motion.article
          className="w-full max-w-5xl rounded-xl p-6 shadow-2xl backdrop-blur-md glass-card"
          variants={panel}
          transition={{ duration: 0.22 }}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{project.description}</p>
            </div>

            <button onClick={onClose} aria-label="Close" className="ml-4 rounded-md btn-ghost p-2">
              ✕
            </button>
          </div>

          <div className="mt-4 text-sm text-slate-200 leading-7">
            {project.longDescription ?? project.description}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tools.map((t) => (
              <span key={t} className="rounded-full bg-slate-900/40 px-3 py-1 text-xs text-slate-200 border border-cyan-400/10">
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
                className="inline-flex items-center gap-2 rounded-md btn-primary"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.4-1.2-1.8-1.2-1.8-1-.7.1-.7.1-.7 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.3-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2a11.6 11.6 0 016.2 0c2.3-1.5 3.4-1.2 3.4-1.2.6 1.7.2 3 .1 3.3.8.8 1.2 1.9 1.2 3.2 0 4.5-2.7 5.4-5.3 5.7.4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0012 .5z" fill="currentColor" />
                </svg>
                View on GitHub
              </a>
            )}

            <button onClick={onClose} className="ml-auto rounded-md btn-ghost">
              Close
            </button>
          </div>
        </motion.article>
      </motion.div>
    </Fragment>
  )
}
