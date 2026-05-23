import { motion } from 'framer-motion'

export default function AnimatedOrbs() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-400/30 to-indigo-400/20 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ x: [0, 10, 0], y: [0, -8, 0], opacity: [0, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        className="absolute right-0 top-20 h-28 w-28 rounded-full bg-gradient-to-br from-blue-400/24 to-cyan-300/12 blur-2xl"
      />

      <div className="absolute inset-0 pointer-events-none">
        <div className="background-grid" />
      </div>
    </div>
  )
}
