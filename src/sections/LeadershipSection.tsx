import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { leadership } from '../data/portfolio'
import { popUp, staggerPop } from '../utils/animations'

export default function LeadershipSection() {
  return (
    <section id="leadership" className="section-vert">
      <div className="app-container">
        <SectionHeading title="Leadership" />

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={staggerPop} className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {leadership.map((item, index) => (
            <motion.article
              key={`${item.role}-${item.organization}`}
              variants={popUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
              className="group rounded-[2rem] border border-cyan-400/10 bg-slate-950/85 p-6 shadow-lg shadow-cyan-500/5 transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-cyan-300/30 hover:bg-slate-900/90 hover:shadow-[0_30px_90px_rgba(34,211,238,0.18)] hover-lift"
            >
              <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/70">{item.organization}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{item.role}</h3>
                </div>
                <span className="motion-sheen inline-flex flex-shrink-0 items-center gap-2 rounded-2xl border border-cyan-300/15 bg-slate-950/70 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cyan-100 shadow-[0_18px_45px_rgba(34,211,238,0.08)] sm:px-4">
                  <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.7)]" />
                  <span className="max-w-[8rem] text-left leading-snug">{item.period}</span>
                </span>
              </div>
              <div className="space-y-3 text-slate-300">
                {item.highlights.map((highlight) => (
                  <p key={highlight} className="rounded-3xl border border-cyan-400/10 bg-slate-950/70 px-4 py-3 text-sm leading-6 transition group-hover:border-cyan-300/30">
                    {highlight}
                  </p>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
