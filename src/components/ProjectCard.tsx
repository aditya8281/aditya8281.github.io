import type { Project } from '../data/portfolio'
import { motion } from 'framer-motion'
import { staggerPopItem } from '../utils/animations'

type Props = {
  project: Project
  onOpen: () => void
}

export default function ProjectCard({ project, onOpen }: Props) {
  return (
    <motion.div
      variants={staggerPopItem}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group glass-card min-h-[18rem] md:min-h-[22rem] flex flex-col justify-between transition duration-200 hover:border-[var(--mono-cyan)]/30"
    >
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 bg-[var(--mono-surface-2)] px-2.5 py-1 text-xs font-mono text-[var(--mono-cyan)]">
            {project.tag ?? 'Project'}
          </span>
          {project.metric && (
            <span className="bg-[var(--mono-surface-2)] px-2.5 py-1 text-xs font-mono text-[var(--mono-orange)]">
              {project.metric}
            </span>
          )}
        </div>

        <h3 className="mt-3 text-xl font-semibold text-white leading-snug break-words">{project.title}</h3>
        <p className="mt-3 text-sm text-[var(--mono-text-dim)] leading-7 break-words">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tools.map((t) => (
            <span key={t} className="bg-[var(--mono-surface-2)] px-2.5 py-1 text-xs font-mono text-[var(--mono-text-dim)] border border-[var(--mono-surface-3)] transition-colors group-hover:border-[var(--mono-cyan)]/20">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-2">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border border-[var(--mono-surface-3)] px-3 py-1.5 text-xs font-medium text-[var(--mono-text-dim)] hover:border-[var(--mono-cyan)] hover:text-[var(--mono-cyan)] transition-colors"
              aria-label="Open repository"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.4-1.2-1.8-1.2-1.8-1-.7.1-.7.1-.7 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.3-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2a11.6 11.6 0 016.2 0c2.3-1.5 3.4-1.2 3.4-1.2.6 1.7.2 3 .1 3.3.8.8 1.2 1.9 1.2 3.2 0 4.5-2.7 5.4-5.3 5.7.4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0012 .5z" fill="currentColor" />
              </svg>
              Source
            </a>
          )}
        </div>

        <button onClick={onOpen} className="btn-primary text-sm w-full sm:w-auto">
          Details
        </button>
      </div>
    </motion.div>
  )
}
