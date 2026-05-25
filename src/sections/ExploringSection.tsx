import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { exploringTopics } from '../data/portfolio'

const cardVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

export default function ExploringSection() {
  return (
    <section id="exploring" className="section-vert">
      <div className="app-container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={cardVariant} transition={{ duration: 0.7 }}>
          <SectionHeading title="Currently Exploring" subtitle="Focus areas" />
        </motion.div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {exploringTopics.map((topic, index) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-card border border-white/10 bg-slate-950/85 p-5 min-w-0"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/70">Current focus</p>
              <h3 className="mt-4 text-xl font-semibold text-white break-words max-w-full">{topic.title}</h3>
              <p className="mt-3 text-slate-300 text-sm leading-7 break-words">{topic.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
