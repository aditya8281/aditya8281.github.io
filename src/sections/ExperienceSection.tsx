import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { experience } from '../data/portfolio'
import { slideFromLeft } from '../utils/animations'

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-vert">
      <div className="app-container">
        <SectionHeading title="Experience" subtitle="Where I've worked and what I shipped." />

        <div className="relative mt-8 grid gap-6 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-8">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'top' }}
            className="absolute left-4 top-8 bottom-8 w-[2px] bg-[var(--mono-surface-3)] lg:left-7"
          />

          <div className="space-y-6 lg:space-y-8">
            {experience.map((item, index) => {
              const isLatest = index === 0
              return (
                <motion.div
                  key={`${item.role}-${item.company}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={slideFromLeft}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
                  className="relative flex gap-5 lg:gap-7"
                >
                  <div className={`relative z-10 mt-2 flex h-10 w-10 shrink-0 items-center justify-center border bg-[var(--mono-bg)] ${isLatest ? 'border-[var(--mono-cyan)]' : 'border-[var(--mono-surface-3)]'}`}>
                    <span className={`h-2.5 w-2.5 ${isLatest ? 'bg-[var(--mono-cyan)]' : 'bg-[var(--mono-surface-3)]'}`} />
                  </div>

                  <div className={`glass-card min-w-0 ${isLatest ? 'p-6 border-[var(--mono-cyan)]/30' : 'p-5'}`}>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-xs font-mono text-[var(--mono-cyan)]">{item.company}</p>
                          {isLatest && (
                            <span className="inline-flex items-center px-2 py-0.5 text-[0.6rem] font-mono font-medium uppercase tracking-wider text-[var(--mono-bg)] bg-[var(--mono-cyan)]">
                              Current
                            </span>
                          )}
                        </div>
                        <h3 className="mt-1 text-xl font-semibold text-white break-words">{item.role}</h3>
                      </div>
                      <div className="inline-flex items-center gap-2">
                        <span className="inline-flex border border-[var(--mono-surface-3)] bg-[var(--mono-surface-2)] px-3 py-1 text-xs font-mono text-[var(--mono-comment)]">
                          {item.period}
                        </span>
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Open related link"
                            className="inline-flex h-8 w-8 items-center justify-center border border-[var(--mono-surface-3)] text-[var(--mono-comment)] hover:text-[var(--mono-cyan)] hover:border-[var(--mono-cyan)] transition-colors"
                          >
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 3h6v6" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10 14L21 3" />
                            </svg>
                          </a>
                        ) : null}
                      </div>
                    </div>

                    <p className="mt-4 text-sm text-[var(--mono-text-dim)] leading-7 break-words">{item.description}</p>

                    {item.highlights?.length ? (
                      <ul className="mt-4 grid gap-2 text-sm text-[var(--mono-text-dim)] sm:grid-cols-2">
                        {item.highlights.map((highlight) => (
                          <li key={highlight} className="border border-[var(--mono-surface-3)] bg-[var(--mono-surface-2)]/50 px-3 py-2 break-words text-xs font-mono">
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
