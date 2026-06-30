import { motion } from 'framer-motion'
import SkillBadge from './SkillBadge'
import { staggerPopItem } from '../utils/animations'

type Props = {
  title: string
  items: string[]
}

export default function SkillCategory({ title, items }: Props) {
  return (
    <motion.div
      variants={staggerPopItem}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card p-5 min-w-0 transition duration-200 hover:border-[var(--mono-cyan)]/30"
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-mono font-medium text-[var(--mono-cyan)]">{title}</p>
        <span className="inline-flex h-6 min-w-[1.5rem] items-center justify-center bg-[var(--mono-surface-2)] px-2 text-[0.65rem] font-mono text-[var(--mono-comment)]">
          {items.length}
        </span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((it) => (
          <SkillBadge key={it} name={it} />
        ))}
      </div>
    </motion.div>
  )
}
