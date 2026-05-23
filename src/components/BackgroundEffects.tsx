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
        ease: [0.42, 0, 0.58, 1] as any,
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
        ease: [0.42, 0, 0.58, 1] as any,
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
        ease: [0.42, 0, 0.58, 1] as any,
      },
    },
  }

  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      {/* Base layer: deep dark gradient background */}
      <div className="bg-base absolute inset-0" />

      {/* Grid layer: subtle futuristic engineering grid */}
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div className="background-radial absolute inset-0 opacity-90" aria-hidden="true" />

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

      <div className="background-particles absolute inset-0" aria-hidden="true">
        <span className="particle-1" />
        <span className="particle-2" />
        <span className="particle-3" />
        <span className="particle-4" />
        <span className="particle-5" />
        <span className="particle-6" />
        <span className="particle-7" />
        <span className="particle-8" />
      </div>

      <motion.div
        className="background-scanline absolute inset-x-0 top-[24%] h-px bg-cyan-300/15"
        animate={{ x: [0, 42, -42, 0], opacity: [0.08, 0.22, 0.08, 0.12] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="background-ui-panels absolute inset-0 pointer-events-none" aria-hidden="true">
        <span className="hud-panel hud-panel-left" />
        <span className="hud-panel hud-panel-right" />
      </div>

      <div className="background-stream-bars absolute inset-0 pointer-events-none" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} className={`stream-bar stream-bar-${index + 1}`} />
        ))}
      </div>

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
