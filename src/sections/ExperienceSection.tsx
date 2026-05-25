import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { experience } from '../data/portfolio'

const timelineVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-6 section-vert sm:px-8">
      <div className="app-container">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: 'easeOut' }}>
          <SectionHeading title="Experience" subtitle="Timeline" />
        </motion.div>

        <div className="relative mt-12 grid gap-10 lg:grid-cols-[auto_1fr] lg:items-start">
          <div className="absolute left-5 top-8 h-[calc(100%-3rem)] w-[2px] bg-cyan-400/15 lg:left-8" />

          <div className="space-y-10">
            {experience.map((item, index) => (
              <motion.div
                key={`${item.role}-${item.company}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={timelineVariants}
                transition={{ duration: 0.65, ease: 'easeOut', delay: index * 0.12 }}
                className="relative flex gap-6 lg:gap-8"
              >
                <div className="relative z-10 mt-2 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/20 bg-slate-950/90 shadow-[0_0_0_8px_rgba(8,23,42,0.08)]">
                  <span className="h-3.5 w-3.5 rounded-full bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.35)]" />
                </div>
                <div className="glass-card p-6 min-w-0">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">{item.company}</p>
                      <h3 className="mt-3 text-2xl font-semibold text-white break-words max-w-full">{item.role}</h3>
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <span className="inline-flex rounded-full border border-cyan-400/20 bg-slate-950/80 px-4 py-2 text-xs uppercase tracking-[0.26em] text-cyan-200">
                        {item.period}
                      </span>
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Open related link"
                          className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/6 bg-slate-900/70 text-cyan-200 transition transform hover:scale-105 hover:bg-slate-900/90"
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

                  <p className="mt-5 text-slate-300 leading-7 break-words">{item.description}</p>

                  {item.highlights?.length ? (
                    <ul className="mt-6 grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="rounded-3xl border border-cyan-400/10 bg-slate-950/70 px-4 py-3 break-words">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
