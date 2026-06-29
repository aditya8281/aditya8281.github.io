import { motion } from 'framer-motion'
import { containerStagger, fadeUp, heroNameReveal } from '../utils/animations'
import { hero } from '../data/portfolio'
import { useScrollToSection } from '../hooks/useScrollToSection'
import { useTypewriter } from '../hooks/useTypewriter'
import ProfileImage from '../components/ProfileImage'
import TerminalIntro from '../components/TerminalIntro'

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export default function HeroSection({ onOpenResume }: { onOpenResume?: () => void }) {
  const typedRole = useTypewriter(hero.roles, 120, 1800)
  const handleScroll = useScrollToSection()

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-transparent pt-24 pb-14 sm:pb-16">
      <div className="app-container relative z-10 grid gap-10 items-center md:grid-cols-[1.15fr_0.95fr] lg:gap-12 xl:gap-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerStagger} transition={{ duration: 0.9 }} className="text-center md:text-left">
          <div className="mx-auto inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-cyan-400/20 bg-slate-950/50 px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-cyan-200/80 shadow-[0_0_30px_rgba(34,211,238,0.08)] sm:gap-3 sm:tracking-[0.32em] md:mx-0">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-400/90 shadow-[0_0_18px_rgba(34,211,238,0.45)]" />
            Undergraduate student | Researcher · {hero.college}
          </div>

          <div className="mt-6 mx-auto max-w-xl md:mx-0">
            <TerminalIntro />
          </div>

          <motion.h1 variants={heroNameReveal} className="mt-8 text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-4xl md:text-5xl lg:text-[5.2rem]">
            {hero.name}
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 text-lg font-semibold leading-tight tracking-[-0.01em] text-slate-100 sm:text-xl md:text-2xl">
            {hero.title}
          </motion.p>

          <motion.p variants={fadeUp} className="mt-6 text-sm leading-7 text-slate-300 sm:text-base md:text-lg">
            {hero.description}
          </motion.p>

          <div className="mt-8 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-cyan-400/12 bg-slate-950/50 px-3 py-1.5 text-sm text-cyan-100 sm:gap-3">
            <span className="text-xs tracking-[0.12em] text-slate-400 sm:tracking-[0.18em]">Currently Exploring:</span>
            <span className="font-medium text-slate-100 text-sm">{typedRole}</span>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-3">
            <button
              type="button"
              onClick={() => handleScroll('projects')}
              className="w-full min-w-0 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:w-auto"
            >
              Explore Projects
            </button>

            <div className="flex w-full max-w-[14rem] justify-center items-center gap-3 rounded-lg border border-white/8 bg-white/4 px-3 py-2 sm:w-auto sm:justify-start">
              <a
                href="https://github.com/aditya8281"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-10 w-10 items-center justify-center rounded-md border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition-all duration-200 hover:border-cyan-300/40 hover:bg-cyan-400/20 focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                aria-label="GitHub"
              >
                <svg className="h-5 w-5 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/adityarathod2912/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-10 w-10 items-center justify-center rounded-md border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition-all duration-200 hover:border-cyan-300/40 hover:bg-cyan-400/20 focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.006 1.419-.103.249-.129.597-.129.946v5.44h-3.554s.05-8.814 0-9.737h3.554v1.378c.43-.664 1.199-1.61 2.920-1.61 2.134 0 3.735 1.39 3.735 4.374v5.595zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.771-1.71 1.958-1.71 1.187 0 1.914.755 1.939 1.71 0 .951-.752 1.71-1.982 1.71zm1.581 11.597H3.635V9.172h3.283v11.28zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <button
                type="button"
                onClick={onOpenResume}
                className="group inline-flex h-10 w-10 items-center justify-center rounded-md border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition-all duration-200 hover:border-cyan-300/40 hover:bg-cyan-400/20 focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                aria-label="View resume"
              >
                <svg className="h-5 w-5 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.14, ease: [0.23, 1, 0.32, 1] }}
          className="grid gap-6"
        >
          <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-4 shadow-[0_40px_120px_rgba(8,15,31,0.55)] sm:p-5">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-400/15 to-transparent" />
            <div className="relative flex flex-col items-center gap-5 pt-6 text-center">
              <div className="rounded-full border border-cyan-400/20 bg-slate-950/90 p-3 shadow-[0_0_60px_rgba(34,211,238,0.18)]">
                <ProfileImage alt="Aditya Rathod profile photo" />
              </div>
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.36em] text-cyan-300/70">Aditya Rathod</p>
                <h2 className="mt-4 text-lg font-semibold text-white">Engineer. Explorer. Creator.</h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  I just like to observe things and think about how they work.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Computer Vision</p>
              <p className="mt-3 text-white">Researching on Vision Transformer-based models to improve accuracy on a small image dataset captured in uncontrolled environments.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Algorithms</p>
              <p className="mt-3 text-white">Practicing datastructures and algorithms to program better.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
