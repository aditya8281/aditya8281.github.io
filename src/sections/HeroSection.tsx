import { useRef } from 'react'
import { motion } from 'framer-motion'
import { hero } from '../data/portfolio'
import { useScrollToSection } from '../hooks/useScrollToSection'
import { useTypewriter } from '../hooks/useTypewriter'
import { useMousePosition } from '../hooks/useMousePosition'
import ProfileImage from '../components/ProfileImage'
import TerminalIntro from '../components/TerminalIntro'

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
    <section id="home" ref={sectionRef} className="relative min-h-screen overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0">
        <div className="absolute inset-0 hero-gradient-bg opacity-95" />
        <div className="absolute inset-0 hero-grid-overlay opacity-30" />
        <div className="absolute left-[-90px] top-16 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-[-90px] top-[18%] h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />
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

      <div className="app-container relative z-10 grid gap-10 items-center md:grid-cols-[1.15fr_0.95fr] lg:gap-12 xl:gap-16">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.95, ease: 'easeOut' }} className="text-center md:text-left">
          <div className="mx-auto inline-flex flex-wrap items-center gap-3 rounded-full border border-cyan-400/20 bg-slate-950/50 px-4 py-2 text-[0.65rem] uppercase tracking-[0.32em] text-cyan-200/80 shadow-[0_0_30px_rgba(34,211,238,0.08)] md:mx-0">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-400/90 shadow-[0_0_18px_rgba(34,211,238,0.45)]" />
            AI Research · {hero.college}
          </div>

          <div className="mt-6 mx-auto max-w-xl md:mx-0">
            <TerminalIntro />
          </div>

          <h1 className="mt-8 text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-[5.2rem]">
            {hero.name}
          </h1>

          <p className="mt-6 text-2xl font-semibold leading-tight tracking-[-0.02em] text-slate-100 sm:text-3xl md:text-4xl">
            {hero.title}
          </p>

          <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
            {hero.description}
          </p>

          <div className="mt-8 inline-flex flex-wrap items-center gap-3 rounded-full border border-cyan-400/20 bg-slate-950/60 px-4 py-2 text-sm text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.1)]">
            <span className="tracking-[0.24em] text-slate-400">Focus:</span>
            <span className="font-medium text-slate-100">{typedRole}</span>
            <span className="animate-pulse text-cyan-300">•</span>
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-start">
            <motion.button
              type="button"
              whileHover={{ y: -1, scale: 1.01 }}
              onClick={() => handleScroll('projects')}
              className="w-full min-w-0 rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:w-auto"
            >
              View Projects
            </motion.button>

            <motion.a
              whileHover={{ y: -1, scale: 1.01 }}
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="w-full min-w-0 rounded-full border border-cyan-400/20 bg-slate-950/70 px-6 py-3.5 text-sm font-medium text-cyan-200 transition duration-300 hover:border-cyan-300/60 hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:w-auto"
            >
              GitHub
            </motion.a>

            <motion.a
              whileHover={{ y: -1, scale: 1.01 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-full min-w-0 rounded-full border border-blue-400/20 bg-slate-950/70 px-6 py-3.5 text-sm font-medium text-sky-200 transition duration-300 hover:border-blue-300/60 hover:text-white focus-visible:ring-2 focus-visible:ring-sky-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:w-auto"
            >
              LinkedIn
            </motion.a>

            <motion.a
              whileHover={{ y: -1, scale: 1.01 }}
              href="#"
              className="resume-cta w-full min-w-0 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-medium text-slate-200 transition duration-300 hover:border-cyan-300/40 hover:bg-slate-900/90 focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:w-auto"
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
          className="grid gap-6"
        >
          <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-4 shadow-[0_40px_120px_rgba(8,15,31,0.55)] sm:p-5">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-400/15 to-transparent" />
            <div className="relative flex flex-col items-center gap-5 pt-6 text-center">
              <div className="rounded-full border border-cyan-400/20 bg-slate-950/90 p-3 shadow-[0_0_60px_rgba(34,211,238,0.18)]">
                <ProfileImage alt="Aditya Rathod profile photo" />
              </div>
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.36em] text-cyan-300/70">AI Engineer Profile</p>
                <h2 className="mt-4 text-lg font-semibold text-white">Cinematic systems thinking</h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">A premium creative edge AI aesthetic with immersive lighting and modern depth.</p>
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
        </motion.div>
      </div>
    </section>
  )
}
