import type { KeyboardEvent } from 'react'
import { motion } from 'framer-motion'

type Props = {
  label: string
  value: string | number
  hint?: string
  onClick?: () => void
}

export default function StatCard({ label, value, hint, onClick }: Props) {
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!onClick) return
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6, scale: 1.02, transition: { type: 'spring', stiffness: 320, damping: 28 } }}
      whileTap={{ scale: 0.995 }}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={onClick ? `Go to ${label}` : undefined}
      className={`glass-card flex flex-col gap-3 p-4 min-w-0 transition-colors duration-300 ${onClick ? 'cursor-pointer hover:border-[var(--mono-accent)]/35 hover:bg-[var(--mono-accent)]/5 focus-visible:ring-2 focus-visible:ring-[var(--mono-accent)]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--mono-bg)]' : ''}`}
    >
      <p className="text-xs uppercase tracking-widest text-[var(--mono-accent)]/70">{label}</p>
      <div className="flex items-baseline gap-3">
        <h4 className="text-2xl font-semibold text-[var(--mono-text)] break-words max-w-full">{value}</h4>
        {hint && <span className="text-sm text-[var(--mono-text-dim)]">{hint}</span>}
      </div>
    </motion.div>
  )
}
