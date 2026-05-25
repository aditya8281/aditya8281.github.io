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
                    <span className="inline-flex rounded-full border border-cyan-400/20 bg-slate-950/80 px-4 py-2 text-xs uppercase tracking-[0.26em] text-cyan-200">
                      {item.period}
                    </span>
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
