import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import SkillCategory from '../components/SkillCategory'
import { skillCategories } from '../data/portfolio'
import { staggerPop } from '../utils/animations'

export default function SkillsSection() {
  return (
    <section id="skills" className="section-vert">
      <div className="app-container">
        <SectionHeading title="Skills" />

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={staggerPop} className="mt-8 grid gap-4 grid-cols-1 md:grid-cols-2">
          <SkillCategory title="Languages & Frameworks" items={[...skillCategories.languages, ...skillCategories.backend.slice(0, 3)]} />
          <SkillCategory title="AI / ML & Vision" items={skillCategories.aiMl} />
          <SkillCategory title="Systems & Infrastructure" items={[...skillCategories.systems.slice(0, 5), ...skillCategories.databases.slice(0, 4)]} />
          <SkillCategory title="DevTools & Robotics" items={[...skillCategories.devTools.slice(0, 4), ...skillCategories.roboticsEmbedded.slice(0, 3)]} />
        </motion.div>
      </div>
    </section>
  )
}
