import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { contactMethods } from '../data/portfolio'
import { slideFromLeft, staggerPop, staggerPopItem } from '../utils/animations'

export default function ContactSection() {
  return (
    <section id="contact" className="section-vert">
      <div className="app-container">
        <SectionHeading title="Contact" subtitle="Open to internships, research collaborations, and systems work." />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerPop} className="grid gap-6 lg:grid-cols-2 xl:gap-10">
          <motion.div variants={slideFromLeft} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="space-y-4 border border-[var(--mono-surface-3)] bg-[var(--mono-surface)] p-6">
            <div className="grid gap-3 sm:grid-cols-2">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  className="border border-[var(--mono-surface-3)] bg-[var(--mono-bg)] px-4 py-3 text-sm text-[var(--mono-text-dim)] transition hover:border-[var(--mono-cyan)] hover:text-[var(--mono-text)]"
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <p className="text-xs font-mono text-[var(--mono-comment)]">{method.label}</p>
                  <p className="mt-1 font-medium text-white break-words">{method.value}</p>
                </a>
              ))}
            </div>
          </motion.div>
          <motion.div variants={staggerPopItem} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="border border-[var(--mono-surface-3)] bg-[var(--mono-surface)] p-6 text-[var(--mono-text-dim)]">
            <p className="text-xs font-mono text-[var(--mono-cyan)]">What I'm looking for</p>
            <p className="mt-3 text-sm leading-7">
              Internships, research collaborations, and practical AI systems that move from prototype to something usable. Computer vision, edge AI, robotics, RL, and systems work.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
