import { motion } from 'framer-motion'
import { containerStagger, fadeUp, heroNameReveal } from '../utils/animations'
import { hero } from '../data/portfolio'
import { useScrollToSection } from '../hooks/useScrollToSection'
import { useTypewriter } from '../hooks/useTypewriter'
import ProfileImage from '../components/ProfileImage'
import TerminalIntro from '../components/TerminalIntro'

export default function HeroSection({ onOpenResume }: { onOpenResume?: () => void }) {
  const typedRole = useTypewriter(hero.roles, 120, 1800)
  const handleScroll = useScrollToSection()

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-transparent pt-24 pb-14 sm:pb-16 flex flex-col">
      {/* Geometric accents */}
      <div className="geo-diamond opacity-30" style={{ top: '10%', right: '8%' }} />
      <div className="geo-hexagon" style={{ bottom: '15%', left: '5%', opacity: 0.4 }} />
      <div className="geo-triangle" style={{ top: '20%', left: '15%', opacity: 0.3 }} />

      <div className="app-container relative z-10 grid gap-10 md:grid-cols-[1.15fr_0.95fr] lg:gap-12 xl:gap-16 flex-1 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerStagger} transition={{ duration: 0.9 }} className="text-center md:text-left">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-sm text-[var(--mono-comment)]">
            <span className="inline-block w-2 h-2 bg-[var(--mono-green)]" />
            {hero.college}
          </motion.div>

          <div className="mt-4 mx-auto max-w-xl md:mx-0">
            <TerminalIntro />
          </div>

          <motion.h1 variants={heroNameReveal} className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-4xl md:text-5xl lg:text-[5.2rem]">
            {hero.name}
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-4 text-lg font-semibold leading-tight tracking-[-0.01em] text-white sm:text-xl md:text-2xl">
            {hero.title}
          </motion.p>

          <motion.p variants={fadeUp} className="mt-4 text-sm leading-7 text-[var(--mono-text-dim)] sm:text-base md:text-lg">
            {hero.description}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-5 inline-flex items-center gap-2 text-sm text-[var(--mono-cyan)]">
            <span className="font-mono text-xs text-[var(--mono-comment)]">&gt;</span>
            <span>{typedRole}</span>
          </motion.div>

          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-3">
            <button
              type="button"
              onClick={() => handleScroll('projects')}
              className="btn-primary w-full sm:w-auto"
            >
              Explore Projects
            </button>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/aditya8281"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center border border-[var(--mono-surface-3)] text-[var(--mono-comment)] hover:text-[var(--mono-cyan)] hover:border-[var(--mono-cyan)] transition-colors"
                aria-label="GitHub"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/adityarathod2912/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center border border-[var(--mono-surface-3)] text-[var(--mono-comment)] hover:text-[var(--mono-cyan)] hover:border-[var(--mono-cyan)] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.006 1.419-.103.249-.129.597-.129.946v5.44h-3.554s.05-8.814 0-9.737h3.554v1.378c.43-.664 1.199-1.61 2.920-1.61 2.134 0 3.735 1.39 3.735 4.374v5.595zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.771-1.71 1.958-1.71 1.187 0 1.914.755 1.939 1.71 0 .951-.752 1.71-1.982 1.71zm1.581 11.597H3.635V9.172h3.283v11.28zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex h-10 w-10 items-center justify-center border border-[var(--mono-surface-3)] text-[var(--mono-comment)] hover:text-[var(--mono-cyan)] hover:border-[var(--mono-cyan)] transition-colors"
                aria-label="View resume"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.14, ease: [0.23, 1, 0.32, 1] }}
          className="grid gap-4"
        >
          {/* Profile card — geometric, no glass */}
          <div className="relative border border-[var(--mono-surface-3)] bg-[var(--mono-surface)] p-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="border-2 border-[var(--mono-surface-3)] p-1">
                <ProfileImage alt="Aditya Rathod profile photo" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--mono-cyan)]">Aditya Rathod</p>
                <h2 className="mt-2 text-lg font-semibold text-white">Engineer. Explorer. Creator.</h2>
                <p className="mt-2 text-sm text-[var(--mono-text-dim)]">
                  I just like to observe things and think about how they work.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="border border-[var(--mono-surface-3)] bg-[var(--mono-surface)] p-4">
              <p className="text-xs font-mono uppercase tracking-[0.15em] text-[var(--mono-cyan)]">Backend & Systems</p>
              <p className="mt-2 text-sm text-[var(--mono-text-dim)]">Building APIs, infrastructure platforms, and systems that handle real load with clean architecture.</p>
            </div>
            <div className="border border-[var(--mono-surface-3)] bg-[var(--mono-surface)] p-4">
              <p className="text-xs font-mono uppercase tracking-[0.15em] text-[var(--mono-orange)]">AI & Machine Learning</p>
              <p className="mt-2 text-sm text-[var(--mono-text-dim)]">Applied ML from computer vision to NLP, building tools that learn and adapt.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
