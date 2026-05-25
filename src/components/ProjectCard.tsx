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
    const rx = (py - 0.5) * 4
    const ry = (px - 0.5) * -6
    el.current!.style.transition = 'transform 120ms cubic-bezier(.22,1,.36,1)'
    el.current!.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.008)`
  }

  function handleLeave() {
    if (!el.current) return
    el.current.style.transition = 'transform 420ms cubic-bezier(.22,1,.36,1)'
    el.current.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)'
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
      className="relative rounded-[2rem] p-6 overflow-hidden"
    >
      <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),_transparent_28%)] opacity-90 pointer-events-none" />
      <div className="absolute top-4 right-4 h-20 w-20 rounded-full bg-cyan-400/10 blur-2xl pointer-events-none" />

      <div className="relative z-10 flex h-full flex-col justify-between glass-card min-h-[22rem] border-white/10 bg-slate-950/85">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-cyan-200 shadow-[0_10px_30px_rgba(34,211,238,0.08)]">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/70" />
            Project
          </div>
          <h3 className="mt-4 text-2xl font-semibold text-white leading-snug break-words max-w-full">{project.title}</h3>
          <p className="mt-4 text-sm text-slate-300 leading-7 break-words max-w-full whitespace-normal">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-2 min-w-0">
            {project.tools.map((t) => (
              <span key={t} className="rounded-full bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-slate-100 border border-cyan-400/10 shadow-sm hover:border-cyan-300/20">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-3 flex-wrap">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-cyan-400/15 bg-slate-950/75 px-4 py-2 text-xs font-semibold text-cyan-200 transition duration-300 hover:border-cyan-300/30 hover:bg-slate-900/90"
                aria-label="Open repository"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.4-1.2-1.8-1.2-1.8-1-.7.1-.7.1-.7 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.3-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2a11.6 11.6 0 016.2 0c2.3-1.5 3.4-1.2 3.4-1.2.6 1.7.2 3 .1 3.3.8.8 1.2 1.9 1.2 3.2 0 4.5-2.7 5.4-5.3 5.7.4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0012 .5z" fill="currentColor" />
                </svg>
                <span className="hidden sm:inline">Open source</span>
              </a>
            )}
          </div>

          <button onClick={onOpen} className="btn-primary px-5 py-2.5 text-sm">
            Details
          </button>
        </div>
      </div>
    </motion.div>
  )
}
