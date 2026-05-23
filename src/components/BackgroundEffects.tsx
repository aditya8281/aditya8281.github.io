import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { useMousePosition } from '../hooks/useMousePosition'

export default function BackgroundEffects() {
  const mouse = useMousePosition()

  const mouseX = mouse.x
  const mouseY = mouse.y

  const glowPosition = useMemo(
    () => ({
      left: `${mouseX}px`,
      top: `${mouseY}px`,
    }),
    [mouseX, mouseY],
  )

  // Sophisticated ambient motion for lighting layer - very slow and organic
  const lightMotion = {
    animate: {
      x: [0, -40, 20, -30, 0],
      y: [0, -25, 15, -20, 0],
      transition: { 
        duration: 32, 
        repeat: Infinity, 
        ease: 'easeInOut',
        times: [0, 0.25, 0.5, 0.75, 1],
      },
    },
  }

  // Smooth parallax orbs motion - independent subtle movement
  const particlesMotion = {
    animate: {
      x: [0, 15, -12, 18, 0],
      y: [0, -8, 10, -6, 0],
      transition: { 
        duration: 36, 
        repeat: Infinity, 
        ease: 'easeInOut',
        times: [0, 0.25, 0.5, 0.75, 1],
      },
    },
  }

  // Additional subtle floating animation for extra depth
  const glowMotion = {
    animate: {
      opacity: [0.85, 1, 0.9, 1, 0.85],
      scale: [1, 1.05, 1.02, 1.04, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      {/* Base layer: deep dark gradient background */}
      <div className="bg-base absolute inset-0" />

      {/* Grid layer: subtle futuristic engineering grid */}
      <div className="bg-grid absolute inset-0" aria-hidden="true" />

      {/* Lighting layer: large blurred radial gradients with cinematic depth */}
      <motion.div 
        className="bg-light absolute inset-0" 
        {...lightMotion} 
      />

      {/* Motion layer: subtle floating gradient orbs with parallax */}
      <motion.div 
        className="parallax-orbs absolute inset-0" 
        {...particlesMotion}
      >
        {[...Array(6)].map((_, i) => (
          <motion.span 
            key={i} 
            className={`orb orb-${i + 1}`}
            {...glowMotion}
            transition={{
              ...glowMotion.animate.transition,
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>

      {/* Noise + premium vignette for texture and depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="noise absolute inset-0 opacity-100" />
        <div className="soft-vignette" />
      </div>

      {/* Interactive mouse-follow glow effect */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="background-mouse-glow" 
          style={glowPosition}
          transition={{ 
            type: 'spring', 
            stiffness: 60, 
            damping: 20,
            mass: 0.5,
          }}
        />
      </motion.div>
    </div>
  )
}
