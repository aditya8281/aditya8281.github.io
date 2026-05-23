import { motion } from 'framer-motion'
import profileImage from '../assets/profile.jpg'

interface ProfileImageProps {
  src?: string
  alt?: string
}

export default function ProfileImage({
  src = profileImage,
  alt = 'Aditya Rathod - AI Engineer',
}: ProfileImageProps) {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[20rem] overflow-hidden rounded-full border border-cyan-400/15 bg-slate-950/10 shadow-[0_30px_90px_rgba(8,15,31,0.45)] sm:max-w-[22rem] md:max-w-[24rem] lg:max-w-[26rem]"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="absolute inset-0 rounded-full bg-white/5 ring-1 ring-cyan-400/10 backdrop-blur-xl" />
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/10 via-transparent to-slate-950/10 opacity-80 pointer-events-none" />
      <motion.div
        className="absolute inset-0 rounded-full border border-white/10 opacity-80"
        animate={{ opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: [0.25, 0.1, 0.25, 1] }}
      />

      <div className="relative overflow-hidden rounded-full p-0.5">
        <motion.div
          className="relative overflow-hidden rounded-full bg-slate-950/20"
          whileHover={{ boxShadow: '0 40px 120px rgba(34,211,238,0.18)' }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            src={src}
            alt={alt}
            className="aspect-square w-full object-cover rounded-full"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.3, 0.8, 0.46, 0.99] }}
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-slate-950/30 via-transparent to-cyan-400/10 pointer-events-none" />
        </motion.div>
      </div>
    </motion.div>
  )
}
