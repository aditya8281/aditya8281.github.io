import { motion } from 'framer-motion'
import { containerStagger, fadeUp } from '../utils/animations'

type SectionHeadingProps = {
  title: string
  subtitle?: string
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
      <motion.h2
        className="break-words text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[2.75rem]"
        style={{ textWrap: 'balance' }}
        variants={fadeUp}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p className="mt-2 max-w-2xl text-sm text-[var(--mono-text-dim)] leading-relaxed sm:text-base" variants={fadeUp}>
          {subtitle}
        </motion.p>
      )}
      <div className="section-divider" />
    </motion.div>
  )
}
