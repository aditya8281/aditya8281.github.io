import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { aboutHighlights, exploringTopics, research } from '../data/portfolio'
import { slideFromRight, slideFromLeft } from '../utils/animations'
import { useTypewriter } from '../hooks/useTypewriter'

export default function AboutSection() {
  const typeText = useTypewriter(['building backend systems', 'training ML models', 'shipping clean code'], 90, 1200)
  const currentResearch = research[0]

  return (
    <section id="about" className="section-vert">
      <div className="app-container">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <SectionHeading title="Who I Am" />
        </motion.div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.9fr] lg:items-start">
          <div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideFromLeft} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              <h3 className="text-3xl font-extrabold text-white sm:text-4xl">Aditya</h3>
              <p className="mt-1 text-sm text-[var(--mono-comment)] font-mono">Backend Engineer &middot; AI/ML Enthusiast &middot; Systems Thinker &middot; IIT Jodhpur</p>

              <p className="mt-5 text-[var(--mono-text-dim)] leading-7 sm:text-base">
                Building reliable backend systems, intelligent tools, and ML-powered applications. I care about clean architecture, real-world impact, and shipping things that work.
                I'm drawn to problems where latency, reliability, and clean architecture are non-negotiable.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.16 }} className="mt-5">
              <div className="glass-card flex items-center gap-3 p-3">
                <span className="font-mono text-sm text-[var(--mono-accent)]">$</span>
                <span className="font-mono text-sm text-[var(--mono-text-dim)]">{typeText}</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.24 }} className="mt-5">
              <div className="glass-card p-5">
                <h3 className="text-lg font-semibold text-white">{currentResearch.title}</h3>
                <p className="mt-1 text-sm font-mono text-[var(--mono-green)]">{currentResearch.supervisor}</p>
                <p className="mt-3 text-sm text-[var(--mono-text-dim)]">{currentResearch.description}</p>
                {currentResearch.link && (
                  <a href={currentResearch.link} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm text-[var(--mono-accent)] hover:underline">
                    View on GitHub &rarr;
                  </a>
                )}
              </div>
            </motion.div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideFromRight} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="relative">
            <div className="relative z-10 space-y-5">
              <div className="glass-card">
                <p className="text-xs font-mono uppercase tracking-[0.15em] text-[var(--mono-green)]">Highlights</p>
                <ul className="mt-3 space-y-2">
                  {aboutHighlights.slice(0, 4).map((h) => (
                    <li key={h} className="text-sm text-[var(--mono-text-dim)]">{h}</li>
                  ))}
                </ul>
              </div>

              <div className="glass-card">
                <p className="text-xs font-mono uppercase tracking-[0.15em] text-[var(--mono-orange)]">What I Explore</p>
                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {exploringTopics.map((t) => (
                    <div key={t.title} className="border border-[var(--mono-surface-3)] p-3">
                      <p className="font-medium text-white text-sm">{t.title}</p>
                      <p className="mt-1 text-xs text-[var(--mono-text-dim)]">{t.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
