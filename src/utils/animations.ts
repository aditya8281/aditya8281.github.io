export const containerStagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
}

export const subtleHover = {
  whileHover: { y: -4, scale: 1.01 },
  transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
}

export const softSpring: Transition = { type: 'spring', stiffness: 260, damping: 28 }

export const cardReveal = {
  hidden: { opacity: 0, y: 22, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

export const floatHover = {
  rest: { y: 0, rotateX: 0, rotateY: 0 },
  hover: { y: -8, rotateX: 1.5, rotateY: -1.5 },
}
import type { Transition } from 'framer-motion'
