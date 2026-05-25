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
            <p className="mt-3 text-slate-300 break-words">I spend time tuning vision systems, chasing down model quirks, and making research feel more like a tool than a demo.</p>
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
              <li>Making models less brittle and more predictable</li>
              <li>Designing vision systems that can really run on devices</li>
              <li>Turning prototypes into tools people can use</li>
              <li>Solving problems with code that feels crisp and clear</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
