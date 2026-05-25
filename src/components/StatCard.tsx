import { motion } from 'framer-motion'

type Props = {
  label: string
  value: string | number
  hint?: string
}

export default function StatCard({ label, value, hint }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="glass-card flex flex-col gap-3 p-4 min-w-0"
    >
      <p className="text-xs uppercase tracking-widest text-cyan-300/70">{label}</p>
      <div className="flex items-baseline gap-3">
        <h4 className="text-2xl font-semibold text-white break-words max-w-full">{value}</h4>
        {hint && <span className="text-sm text-slate-300">{hint}</span>}
      </div>
    </motion.div>
  )
}
