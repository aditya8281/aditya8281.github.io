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
      className="relative mx-auto w-full max-w-[14rem] overflow-hidden border-2 border-[var(--mono-surface-3)] sm:max-w-[16rem]"
      initial={{ opacity: 0, scale: 0.985 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative overflow-hidden">
        <picture>
          {!src && <source srcSet={defaultWebp} type="image/webp" />}
          <motion.img
            src={src ?? defaultWebp}
            alt={alt}
            className="aspect-square w-full object-cover"
            initial={{ opacity: 0, scale: 1.005 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.3, 0.8, 0.46, 0.99] }}
          />
        </picture>
        {/* Geometric corner accent */}
        <div className="absolute top-0 left-0 w-3 h-3 bg-[var(--mono-cyan)]" />
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-[var(--mono-orange)]" />
      </div>
    </motion.div>
  )
}
