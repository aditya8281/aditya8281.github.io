import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { experience } from '../data/portfolio'

export default function ResearchSection() {
  const researcher = experience.find((e) => e.role.toLowerCase().includes('researcher'))

  return (
    <section id="research" className="py-20">
      <div className="app-container">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <SectionHeading title="Research & Interests" subtitle="Areas I'm exploring" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white break-words max-w-full">Focus</h3>
            <p className="mt-3 text-slate-300 break-words">Computer vision research, model evaluation, and applied deep learning problems that bridge experimental results with usable prototypes.</p>
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
              <li>Improving model robustness and evaluation workflows</li>
              <li>Efficient architectures for vision tasks</li>
              <li>Bridging prototypes to practical tools</li>
              <li>Algorithmic problem solving and performance</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
