import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { projects } from '../data/portfolio'
import type { Project } from '../data/portfolio'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

export default function ProjectsSection() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-20">
      <div className="app-container">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
          <SectionHeading title="Projects" subtitle="Selected work" />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={listVariants} className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} onOpen={() => setActive(project)} />
          ))}
        </motion.div>

        <AnimatePresence>{active && <ProjectModal project={active} onClose={() => setActive(null)} />}</AnimatePresence>
      </div>
    </section>
  )
}
