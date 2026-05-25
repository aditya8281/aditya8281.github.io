import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import SkillCategory from '../components/SkillCategory'
import AnimatedOrbs from '../components/AnimatedOrbs'

export default function SkillsSection() {
  const onMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    void (e.clientX - rect.left)
    void (e.clientY - rect.top)
  }

  const languages = ['C', 'C++', 'Python', 'JavaScript', 'TypeScript']

  const visionAI = [
    'PyTorch',
    'TensorFlow',
    'Scikit-learn',
    'NumPy',
    'OpenCV',
    'Computer Vision',
    'Deep Learning',
    'YOLO',
    'Edge AI',
    'TinyML',
  ]

  const systems = [
    'Linux',
    'Networking',
    'Embedded Systems',
    'ESP32-CAM',
    'Arduino',
    'Jetson Orin NX',
    'PID Control',
    'AES-256 Encryption',
  ]

  const tools = [
    'Git',
    'GitHub',
    'Jupyter',
    'MATLAB',
    'TensorBoard',
    'Gymnasium',
    'Stable-Baselines3',
  ]

  const design = [
    'Figma',
    'UI/UX Design',
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Interface Design',
  ]

  return (
    <section id="skills" className="section-vert">
      <div className="app-container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading title="Skills" subtitle="Expertise" />
        </motion.div>

        <div className="mt-8 relative overflow-hidden" onMouseMove={onMove}>
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <AnimatedOrbs />
          </div>

          <div className="relative z-10 grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <SkillCategory title="Languages" items={languages} />
            <SkillCategory title="Vision & AI" items={visionAI} />
            <SkillCategory title="Systems & Embedded" items={systems} />
            <SkillCategory title="Tools & Frameworks" items={tools} />
            <SkillCategory title="Design" items={design} />
          </div>
        </div>
      </div>
    </section>
  )
}