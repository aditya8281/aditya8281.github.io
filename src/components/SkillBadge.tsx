import { motion } from 'framer-motion'

type Props = {
  name: string
}

export default function SkillBadge({ name }: Props) {
  return (
    <motion.span
      whileHover={{ scale: 1.04, y: -2 }}
      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-slate-100 bg-slate-900/30 border border-cyan-400/8 shadow-sm relative overflow-hidden max-w-full"
    >
      <span className="relative z-10 truncate">{name}</span>
    </motion.span>
  )
}
