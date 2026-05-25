import { motion } from 'framer-motion'

type Props = {
  name: string
}

export default function SkillBadge({ name }: Props) {
  return (
    <motion.span
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      className="motion-sheen inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-slate-100 bg-gradient-to-r from-cyan-500/10 via-slate-900/65 to-violet-500/10 border border-white/10 shadow-[0_12px_40px_rgba(34,211,238,0.08)] relative overflow-hidden max-w-full"
    >
      <span className="relative z-10 truncate">{name}</span>
    </motion.span>
  )
}
