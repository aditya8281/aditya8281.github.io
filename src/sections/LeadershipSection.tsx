import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { leadership } from '../data/portfolio'

const floatingVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

export default function LeadershipSection() {
  return (
    <section id="leadership" className="px-6 py-20 sm:px-8">
      <div className="app-container">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: 'easeOut' }}>
          <SectionHeading title="Campus Leadership" subtitle="Student organisations" />
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {leadership.map((item, index) => (
            <motion.article
              key={`${item.role}-${item.organization}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={floatingVariant}
              transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group rounded-[2rem] border border-cyan-400/10 bg-slate-950/85 p-6 shadow-lg shadow-cyan-500/5 transition duration-300 hover:border-cyan-300/30 hover:bg-slate-900/90 hover:shadow-[0_30px_90px_rgba(34,211,238,0.18)]"
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/70">{item.organization}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{item.role}</h3>
                </div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-200 ring-1 ring-cyan-300/10">
                  {item.period.split(' – ')[0]}
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
        </div>
      </div>
    </section>
  )
}
