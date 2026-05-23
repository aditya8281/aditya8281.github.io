import { motion } from 'framer-motion'

type Props = {
  name: string
}

export default function SkillBadge({ name }: Props) {
  return (
    <motion.span
      whileHover={{ scale: 1.06, y: -3 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-slate-100 bg-slate-900/30 border border-cyan-400/8 shadow-sm relative overflow-hidden"
    >
      <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-cyan-400/12 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
      <span className="relative z-10">{name}</span>
    </motion.span>
  )
}
