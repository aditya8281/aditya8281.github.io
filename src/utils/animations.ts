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

export const softSpring: any = { type: 'spring', stiffness: 260, damping: 28 }
