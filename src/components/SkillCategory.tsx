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
      className="glass-card p-6 min-w-0 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:shadow-[0_30px_90px_rgba(34,211,238,0.1)]"
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white">{title}</p>
        <span className="inline-flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-cyan-400/10 px-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cyan-200">
          {items.length}
        </span>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        {items.map((it) => (
          <SkillBadge key={it} name={it} />
        ))}
      </div>
    </motion.div>
  )
}
