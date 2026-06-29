import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { research } from '../data/portfolio'
import { scaleReveal } from '../utils/animations'

export default function ResearchSection() {
  const currentResearch = research[0]

  return (
    <section id="research" className="section-vert">
      <div className="app-container">
        <SectionHeading title="Research" />

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={scaleReveal} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white break-words max-w-full">{currentResearch.title}</h3>
            <p className="mt-2 text-sm text-cyan-300/80">{currentResearch.supervisor}</p>
            <p className="mt-1 text-xs text-slate-400">{currentResearch.status}</p>
            <p className="mt-3 text-slate-300 break-words">{currentResearch.description}</p>
            {currentResearch.link && (
              <a
                href={currentResearch.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm text-cyan-300 hover:text-cyan-200 transition-colors"
              >
                View on GitHub
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 3h6v6" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 14L21 3" />
                </svg>
              </a>
            )}
          </div>

          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white break-words max-w-full">Key Contributions</h3>
            <ul className="mt-3 space-y-2 text-slate-300">
              {currentResearch.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
