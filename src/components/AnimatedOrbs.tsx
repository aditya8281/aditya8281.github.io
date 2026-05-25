import { motion } from 'framer-motion'

export default function AnimatedOrbs() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: [0, 0.6, 0.35], y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
        className="absolute left-3 top-3 h-36 w-36 sm:h-40 sm:w-40 rounded-full bg-gradient-to-br from-cyan-400/30 to-indigo-400/20 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, x: 0 }}
        animate={{ x: [0, 12, 0], y: [0, -8, 0], opacity: [0, 0.6, 0.25] }}
        transition={{ repeat: Infinity, duration: 11, ease: 'easeInOut' }}
        className="absolute right-3 top-20 h-24 w-24 sm:h-28 sm:w-28 rounded-full bg-gradient-to-br from-blue-400/24 to-cyan-300/12 blur-2xl"
      />

      <div className="absolute inset-0 pointer-events-none">
        <div className="background-grid" />
      </div>
    </div>
  )
}
