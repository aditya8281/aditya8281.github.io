import { motion } from 'framer-motion'
import profileImageWebp from '../assets/profile.webp'

interface ProfileImageProps {
  src?: string
  alt?: string
}

export default function ProfileImage({
  src,
  alt = 'Aditya Rathod - AI Engineer',
}: ProfileImageProps) {
  const defaultWebp = profileImageWebp

  return (
    <motion.div
      className="relative mx-auto w-full max-w-[14rem] overflow-hidden rounded-full border border-cyan-400/12 bg-slate-950/10 shadow-[0_20px_60px_rgba(8,15,31,0.35)] sm:max-w-[18rem] md:max-w-[20rem] lg:max-w-[22rem] hover-lift"
      initial={{ opacity: 0, scale: 0.985 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 rounded-full bg-white/5 ring-1 ring-cyan-400/10 backdrop-blur-xl" />
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/10 via-transparent to-slate-950/10 opacity-80 pointer-events-none" />
      <div className="absolute inset-0 rounded-full border border-white/10 opacity-70" />

      <div className="relative overflow-hidden rounded-full p-0.5">
        <motion.div className="relative overflow-hidden rounded-full bg-slate-950/20">
          <picture>
            {!src && <source srcSet={defaultWebp} type="image/webp" />}
            <motion.img
              src={src ?? defaultWebp}
              alt={alt}
              className="aspect-square w-full object-cover rounded-full"
              initial={{ opacity: 0, scale: 1.005 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.3, 0.8, 0.46, 0.99] }}
            />
          </picture>
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-slate-950/30 via-transparent to-cyan-400/10 pointer-events-none" />
        </motion.div>
      </div>
    </motion.div>
  )
}
