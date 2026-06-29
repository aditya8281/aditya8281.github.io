import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import SkillCategory from '../components/SkillCategory'
import AnimatedOrbs from '../components/AnimatedOrbs'
import { skillCategories } from '../data/portfolio'
import { staggerPop } from '../utils/animations'

export default function SkillsSection() {
  const onMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    void (e.clientX - rect.left)
    void (e.clientY - rect.top)
  }

  return (
    <section id="skills" className="section-vert">
      <div className="app-container">
        <SectionHeading title="Skills" />

        <div className="mt-8 relative" onMouseMove={onMove}>
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <AnimatedOrbs />
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={staggerPop} className="relative z-10 grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <SkillCategory title="Languages" items={skillCategories.languages} />
            <SkillCategory title="Backend & APIs" items={skillCategories.backend} />
            <SkillCategory title="AI / ML" items={skillCategories.aiMl} />
            <SkillCategory title="Systems" items={skillCategories.systems} />
            <SkillCategory title="Databases & Search" items={skillCategories.databases} />
            <SkillCategory title="DevTools" items={skillCategories.devTools} />
            <SkillCategory title="Robotics & Embedded" items={skillCategories.roboticsEmbedded} />
            <SkillCategory title="Frontend & DevOps" items={skillCategories.frontendDevOps} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
