import { useRef } from 'react'
import { motion } from 'framer-motion'
import { hero } from '../data/portfolio'
import { useScrollToSection } from '../hooks/useScrollToSection'
import { useTypewriter } from '../hooks/useTypewriter'
import { useMousePosition } from '../hooks/useMousePosition'

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const mouse = useMousePosition()
  const typedRole = useTypewriter(hero.roles, 120, 1800)
  const handleScroll = useScrollToSection()

  const offsetX = sectionRef.current ? mouse.x - sectionRef.current.getBoundingClientRect().left : 0
  const offsetY = sectionRef.current ? mouse.y - sectionRef.current.getBoundingClientRect().top : 0

  return (
    <section id="home" ref={sectionRef} className="relative min-h-screen overflow-hidden px-6 pt-28 pb-16 sm:px-8">
      <div className="absolute inset-0">
        <div className="absolute inset-0 hero-gradient-bg opacity-95" />
        <div className="absolute inset-0 hero-grid-overlay opacity-30" />
        <div className="absolute left-[-100px] top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-[-100px] top-[18%] h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="absolute left-1/2 top-[12%] hidden h-28 w-28 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-2xl sm:block" />
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[6%] top-[55%] h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-[8%] top-[68%] h-56 w-56 rounded-full bg-blue-400/10 blur-3xl" />
      </div>

      <div
        className="pointer-events-none absolute h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl transition-all duration-500"
        style={{ left: offsetX - 190, top: offsetY - 190 }}
      />

      <div className="app-container relative z-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] xl:gap-16">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.95, ease: 'easeOut' }} className="max-w-3xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-slate-950/50 px-4 py-2 text-xs uppercase tracking-[0.32em] text-cyan-200/80 shadow-[0_0_30px_rgba(34,211,238,0.08)]">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-400/90 shadow-[0_0_18px_rgba(34,211,238,0.45)]" />
            AI Research · IIT Jodhpur
          </div>

          <h1 className="mt-8 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-[5.2rem]">
            {hero.name}
          </h1>

          <p className="mt-6 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.02em] text-slate-100 sm:text-4xl">
            {hero.title}
          </p>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            {hero.description}
          </p>

          <div className="mt-8 inline-flex flex-wrap items-center gap-3 rounded-full border border-cyan-400/20 bg-slate-950/60 px-4 py-2 text-sm text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.1)]">
            <span className="tracking-[0.24em] text-slate-400">Focus:</span>
            <span className="font-medium text-slate-100">{typedRole}</span>
            <span className="animate-pulse text-cyan-300">•</span>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <motion.button
              type="button"
              whileHover={{ y: -1, scale: 1.01 }}
              onClick={() => handleScroll('projects')}
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-3.5 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              View Projects
            </motion.button>

            <motion.a
              whileHover={{ y: -1, scale: 1.01 }}
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-cyan-400/20 bg-slate-950/70 px-6 py-3.5 text-sm font-medium text-cyan-200 transition duration-300 hover:border-cyan-300/60 hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              GitHub
            </motion.a>

            <motion.a
              whileHover={{ y: -1, scale: 1.01 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-blue-400/20 bg-slate-950/70 px-6 py-3.5 text-sm font-medium text-sky-200 transition duration-300 hover:border-blue-300/60 hover:text-white focus-visible:ring-2 focus-visible:ring-sky-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              LinkedIn
            </motion.a>

            <motion.a
              whileHover={{ y: -1, scale: 1.01 }}
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-medium text-slate-200 transition duration-300 hover:border-cyan-300/40 hover:bg-slate-900/90 focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Resume
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: 'easeOut' }}
            className="mt-8 flex flex-wrap gap-3 text-sm text-slate-400"
          >
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Reinforcement Learning</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Computer Vision</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Embedded Systems</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Edge AI</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.95, delay: 0.14, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/85 p-7 shadow-[0_40px_120px_rgba(8,15,31,0.55)]"
        >
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-cyan-400/12 to-transparent" />
          <div className="relative space-y-6">
            <div className="rounded-[1.75rem] border border-cyan-400/10 bg-slate-950/70 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">Featured focus</p>
              <div className="mt-5 space-y-4">
                <div className="flex items-start justify-between gap-4 rounded-3xl border border-white/10 bg-slate-900/80 p-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Systems</p>
                    <p className="mt-2 text-base font-semibold text-white">Embedded AI orchestration</p>
                  </div>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-200">01</span>
                </div>
                <div className="flex items-start justify-between gap-4 rounded-3xl border border-white/10 bg-slate-900/80 p-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">ML</p>
                    <p className="mt-2 text-base font-semibold text-white">Model deployment at the edge</p>
                  </div>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-400/10 text-sky-200">02</span>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Computer Vision</p>
                <p className="mt-3 text-white">Perception pipelines for edge devices</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Edge AI</p>
                <p className="mt-3 text-white">Low-latency model deployment</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
