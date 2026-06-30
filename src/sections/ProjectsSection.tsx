import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { projects } from '../data/portfolio'
import type { Project } from '../data/portfolio'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import { staggerPop } from '../utils/animations'

export default function ProjectsSection() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="projects" className="section-vert">
      <div className="app-container">
        <SectionHeading title="Projects" subtitle="Things I've built — from backend infrastructure to computer vision systems." />

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerPop} className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} onOpen={() => setActive(project)} />
          ))}
        </motion.div>

        <AnimatePresence>{active && <ProjectModal project={active} onClose={() => setActive(null)} />}</AnimatePresence>
      </div>
    </section>
  )
}
