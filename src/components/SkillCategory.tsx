import { motion } from 'framer-motion'
import SkillBadge from './SkillBadge'

type Props = {
  title: string
  items: string[]
}

export default function SkillCategory({ title, items }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="glass-card p-5"
    >
      <p className="text-xs uppercase tracking-widest text-cyan-300/80">{title}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        {items.map((it) => (
          <SkillBadge key={it} name={it} />
        ))}
      </div>
    </motion.div>
  )
}
