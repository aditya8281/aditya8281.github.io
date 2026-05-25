import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { experience } from '../data/portfolio'

export default function ResearchSection() {
  const researcher = experience.find((e) => e.role.toLowerCase().includes('researcher'))

  return (
    <section id="research" className="section-vert">
      <div className="app-container">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <SectionHeading title="Research & Interests" subtitle="Areas I'm exploring" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white break-words max-w-full">Focus</h3>
            <p className="mt-3 text-slate-300 break-words">I spend time on vision systems, RL control, and embedded AI where performance, reliability, and clean evaluation all matter.</p>
            {researcher && (
              <ul className="mt-4 list-disc pl-5 text-slate-300 space-y-2">
                {researcher.highlights?.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
          </div>

          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white break-words max-w-full">Interests</h3>
            <ul className="mt-3 space-y-2 text-slate-300">
              <li>Real-time YOLO inference on onboard compute</li>
              <li>PPO, reward design, and simulation diagnostics</li>
              <li>TinyML workflows for resource-constrained devices</li>
              <li>Networking and systems code that stays reliable</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
