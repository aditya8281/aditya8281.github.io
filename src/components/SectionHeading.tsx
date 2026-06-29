import { motion } from 'framer-motion'
import { containerStagger, fadeUp } from '../utils/animations'

type SectionHeadingProps = {
  title: string
  subtitle?: string
}

export default function SectionHeading({ title }: SectionHeadingProps) {
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
      <div className="section-divider" />
    </motion.div>
  )
}
