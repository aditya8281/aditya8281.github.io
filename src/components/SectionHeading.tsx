import { motion } from 'framer-motion'
import { containerStagger, fadeUp } from '../utils/animations'

type SectionHeadingProps = {
  title: string
  subtitle: string
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      className="mb-6 w-full max-w-5xl sm:mb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerStagger}
    >
      <motion.div className="flex items-center gap-3" variants={fadeUp}>
        <span className="block h-px w-12 rounded-full bg-gradient-to-r from-cyan-400/50 via-blue-400/30 to-transparent sm:w-16" aria-hidden="true" />
        <p className="text-xs uppercase tracking-[0.34em] text-cyan-300/80">{subtitle}</p>
      </motion.div>
      <motion.h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[2.75rem]" variants={fadeUp}>
        {title}
      </motion.h2>
      <div className="section-divider" />
    </motion.div>
  )
}
