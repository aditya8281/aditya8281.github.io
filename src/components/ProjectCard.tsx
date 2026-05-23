import { useRef, type MouseEvent } from 'react'
import { motion } from 'framer-motion'
import type { Project } from '../data/portfolio'

type Props = {
  project: Project
  onOpen: () => void
}

export default function ProjectCard({ project, onOpen }: Props) {
  const el = useRef<HTMLDivElement | null>(null)

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const elRect = el.current?.getBoundingClientRect()
    if (!elRect) return
    const px = (e.clientX - elRect.left) / elRect.width
    const py = (e.clientY - elRect.top) / elRect.height
    const rx = (py - 0.5) * 6
    const ry = (px - 0.5) * -10
    el.current!.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`
  }

  function handleLeave() {
    if (!el.current) return
    el.current.style.transform = ''
  }

  return (
    <motion.div
      ref={el}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={{ scale: 1.01 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.54, ease: 'easeOut' }}
      className="relative rounded-xl p-5 backdrop-blur-md"
    >
      <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-cyan-400/6 via-blue-400/6 to-indigo-400/6 blur-sm opacity-40 pointer-events-none" />

      <div className="relative z-10 flex h-full flex-col justify-between glass-card">
        <div>
          <p className="text-sm uppercase tracking-widest text-cyan-300/80">Project</p>
          <h3 className="mt-3 text-lg font-semibold text-white leading-snug">{project.title}</h3>
          <p className="mt-3 text-sm text-slate-300 leading-6">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tools.map((t) => (
              <span key={t} className="rounded-full bg-slate-900/40 px-3 py-1 text-xs text-slate-200 border border-cyan-400/10">
                {t}
              </span>
            ))}
          </div>
        </div>

          <div className="mt-5 flex items-center justify-between">
          <div className="flex gap-3">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md btn-ghost text-xs font-medium text-cyan-300"
                aria-label="Open repository"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.4-1.2-1.8-1.2-1.8-1-.7.1-.7.1-.7 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.3-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2a11.6 11.6 0 016.2 0c2.3-1.5 3.4-1.2 3.4-1.2.6 1.7.2 3 .1 3.3.8.8 1.2 1.9 1.2 3.2 0 4.5-2.7 5.4-5.3 5.7.4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0012 .5z" fill="currentColor" />
                </svg>
                <span className="hidden sm:inline">GitHub</span>
              </a>
            )}
          </div>

          <button onClick={onOpen} className="btn-primary">
            Details
          </button>
        </div>
      </div>
    </motion.div>
  )
}
