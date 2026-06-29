import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import StatCard from '../components/StatCard'
import AnimatedOrbs from '../components/AnimatedOrbs'
import { aboutHighlights, exploringTopics } from '../data/portfolio'
import { useScrollToSection } from '../hooks/useScrollToSection'
import { useTypewriter } from '../hooks/useTypewriter'
import { slideFromRight, slideFromLeft } from '../utils/animations'

export default function AboutSection() {
  const headline = 'Edge AI & Vision Systems'
  const typeText = useTypewriter(['running YOLO at the edge', 'training PPO agents', 'debugging real systems'], 90, 1200)
  const scrollToSection = useScrollToSection()

  return (
    <section id="about" className="section-vert">
      <div className="app-container">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <SectionHeading title="About" />
        </motion.div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.9fr] lg:items-start">
          <div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideFromLeft} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              <p className="text-sm text-cyan-300/80">Hello, I'm</p>
              <h3 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">Aditya</h3>
              <p className="mt-1 text-sm text-slate-300">{headline} | B.Tech EE, IIT Jodhpur (CGPA 7.38/10)</p>

              <p className="mt-6 text-slate-300 leading-7 sm:text-lg">
                I’m a third-year Electrical Engineering student at IIT Jodhpur working across computer vision, reinforcement learning, embedded AI, and systems. I like exploring new technologies and thinking through complex problems. I do also like to listen to good music, explore new places, meet new people, and experiment with new coffee recipes, but that’s for another section.
              </p>
            </motion.div>

            <motion.div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.08 }}>
              <StatCard label="Vision" value="ViT + YOLO" hint="real-time inference" onClick={() => scrollToSection('projects')} />
              <StatCard label="Edge AI" value="Jetson NX" hint="onboard compute" onClick={() => scrollToSection('skills')} />
              <StatCard label="RL" value="PPO" hint="reward design" onClick={() => scrollToSection('research')} />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.16 }} className="mt-6">
              <div className="glass-card flex items-center gap-4 p-4 min-w-0">
                <div className="rounded-md bg-slate-900/30 px-3 py-2 text-sm text-cyan-300">$</div>
                <div className="text-sm text-slate-300">{typeText}</div>
              </div>
            </motion.div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideFromRight} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="relative">
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <AnimatedOrbs />
            </div>

            <div className="relative z-10 pt-6 space-y-6">
              <div className="glass-card min-w-0">
                <p className="text-sm uppercase tracking-widest text-cyan-300/80">Highlights</p>
                <ul className="mt-3 space-y-2">
                  {aboutHighlights.slice(0, 4).map((h) => (
                    <li key={h} className="text-slate-200 break-words">{h}</li>
                  ))}
                </ul>
              </div>

              <div className="glass-card min-w-0">
                <p className="text-sm uppercase tracking-widest text-cyan-300/80">What I Explore</p>
                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {exploringTopics.map((t) => (
                    <div key={t.title} className="rounded-md border border-white/6 p-3">
                      <p className="font-medium text-white break-words max-w-full">{t.title}</p>
                      <p className="mt-1 text-sm text-slate-300 break-words">{t.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
