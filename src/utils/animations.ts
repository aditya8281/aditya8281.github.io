import type { Transition } from 'framer-motion'

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

/* Distinct section entrance variants — no two sections reveal the same way */

export const heroNameReveal = {
  hidden: { opacity: 0, y: 32, filter: 'blur(12px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

export const scaleReveal = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
}

export const slideFromLeft = {
  hidden: { opacity: 0, x: -40, filter: 'blur(6px)' },
  visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
}

export const slideFromRight = {
  hidden: { opacity: 0, x: 40, filter: 'blur(6px)' },
  visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
}

export const popUp = {
  hidden: { opacity: 0, scale: 0.88, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
}

export const timelineItemReveal = {
  hidden: { opacity: 0, x: -24, filter: 'blur(4px)' },
  visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
}

/* Timeline line draw — CSS driven, triggered by intersection */
export const timelineLine = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1 },
}

/* Stagger list — for contact cards, skill badges */
export const staggerPop = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

export const staggerPopItem = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
}
