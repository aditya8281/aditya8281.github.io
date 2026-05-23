import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import SkillCategory from '../components/SkillCategory'
import AnimatedOrbs from '../components/AnimatedOrbs'

export default function SkillsSection() {
  const onMove = (e: React.MouseEvent) => {
    /* placeholder for mouse-follow microinteractions; intentionally minimal */
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    void (e.clientX - rect.left)
    void (e.clientY - rect.top)
  }

  const languages = ['C', 'C++', 'Python', 'JavaScript', 'TypeScript']
  const ml = [
    'PyTorch', 'TensorFlow', 'Scikit-learn', 'NumPy', 'Pandas', 'OpenCV', 'Stable-Baselines3', 'Gymnasium',
    'Reinforcement Learning', 'Deep Learning', 'CNNs', 'RNNs', 'Transformers', 'Computer Vision', 'YOLO', 'Edge AI', 'TinyML',
  ]
  const systems = [
    'Linux', 'Networking', 'AES-256 Encryption', 'Multithreading', 'Embedded Systems', 'ESP32', 'Arduino', 'Raspberry Pi', 'Jetson Orin NX', 'PID Control',
  ]
  const creative = ['Unity', 'Unreal Engine', 'Blender', 'Game Development', '3D Design']
  const design = ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'UI/UX Design', 'Git', 'GitHub', 'Jupyter', 'MATLAB']

  return (
    <section id="skills" className="border-t border-white/5 bg-slate-950/40 px-6 py-20 sm:px-8">
      <div className="app-container">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <SectionHeading title="Skills" subtitle="Expertise" />
        </motion.div>

        <div className="mt-8 relative" onMouseMove={onMove}>
          <div className="absolute inset-0 pointer-events-none">
            <AnimatedOrbs />
          </div>

          <div className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <SkillCategory title="Languages" items={languages} />
            <SkillCategory title="AI / Machine Learning" items={ml} />
            <SkillCategory title="Systems & Embedded" items={systems} />
            <SkillCategory title="Creative & Game Dev" items={creative} />
            <SkillCategory title="Design & Productivity" items={design} />
          </div>
        </div>
      </div>
    </section>
  )
}
