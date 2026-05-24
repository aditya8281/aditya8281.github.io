import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../utils/cn'
import { navLinks } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'
import { useScrollToSection } from '../hooks/useScrollToSection'

// Social Icons Component
function SocialIcon({ href, label, icon }: { href: string; label: string; icon: string }) {
  const iconMap: { [key: string]: string } = {
    github: '🔗',
    linkedin: '💼',
    email: '✉️',
    resume: '📄',
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative inline-flex items-center justify-center h-10 w-10 rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-cyan-200 focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-lg">{iconMap[icon]}</span>
      {/* Subtle hover glow */}
      <span className="absolute inset-0 rounded-xl bg-cyan-400/0 group-hover:bg-cyan-400/5 transition-colors duration-300" aria-hidden="true" />
    </motion.a>
  )
}

// Navigation Link Component
function NavLink({
  id,
  label,
  isActive,
  onClick,
}: {
  id: string
  label: string
  isActive: boolean
  onClick: (id: string) => void
}) {
  return (
    <motion.button
      type="button"
      onClick={() => onClick(id)}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'relative group px-3 py-2 text-sm font-semibold transition-all duration-300',
        isActive ? 'text-cyan-100' : 'text-slate-300 hover:text-white'
      )}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
    >
      {label}

      <motion.span
        className={cn(
          'absolute left-0 bottom-0 h-[3px] rounded-full transition-all duration-300',
          isActive
            ? 'bg-gradient-to-r from-cyan-300 via-white to-blue-300'
            : 'bg-gradient-to-r from-cyan-300/40 via-blue-300/25 to-slate-400/20'
        )}
        initial={{ width: 0 }}
        animate={{ width: isActive ? '100%' : '0%' }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
      />

      {/* Active indicator dot */}
      <AnimatePresence>
        {isActive && (
          <motion.span
            className="absolute -left-4 top-1/2 h-2 w-2 rounded-full bg-cyan-400"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </motion.button>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useActiveSection()
  const handleScroll = useScrollToSection()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (id: string) => {
    setIsOpen(false)
    handleScroll(id)
  }

  return (
    <motion.header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b border-transparent bg-slate-950/10 backdrop-blur-xl transition-all duration-400 ease-out',
        scrolled
          ? 'border-white/10 bg-slate-950/80 shadow-[0_28px_90px_rgba(8,15,31,0.35)]'
          : 'shadow-none'
      )}
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className={cn('app-container flex items-center justify-between gap-4 transition-all', scrolled ? 'py-3 md:py-4' : 'py-4 md:py-5')}>
        {/* Logo/Brand - Animated */}
        <motion.a
          href="#home"
          onClick={() => handleNavClick('home')}
          className="group relative flex items-center gap-3 rounded-2xl px-2 py-2 focus-visible:ring-2 focus-visible:ring-cyan-400/45 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 outline-none"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
        >
          <motion.span
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/25 bg-slate-950/70 text-base font-semibold text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.08)] transition-all duration-300"
            whileHover={{ borderColor: 'rgba(34,211,238,0.55)', boxShadow: '0 0 20px rgba(34,211,238,0.18)' }}
          >
            {'<>'}
          </motion.span>

          <div className="hidden items-center gap-2 sm:flex">
            <span className="font-mono text-sm uppercase tracking-[0.28em] text-cyan-100">{'<ADI />'}</span>
            <span className="text-sm text-slate-400">.dev</span>
            <span className="blinking-cursor text-cyan-300">▌</span>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              id={link.id}
              label={link.label}
              isActive={activeSection === link.id}
              onClick={handleNavClick}
            />
          ))}
        </nav>

        {/* Desktop Social Links & CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-2">
            <SocialIcon href="https://github.com" label="GitHub" icon="github" />
            <SocialIcon href="https://linkedin.com" label="LinkedIn" icon="linkedin" />
            <SocialIcon href="mailto:hello@adisite.com" label="Email" icon="email" />
          </div>

          {/* Resume Button - Premium CTA */}
          <motion.a
            href="#"
            className="resume-cta group relative ml-2 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-white overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Background gradient */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Border gradient */}
            <span className="absolute inset-0 rounded-lg border border-cyan-400/30 group-hover:border-cyan-300/60 transition-colors duration-300" />

            {/* Content */}
            <span className="relative flex items-center gap-2">
              <span>Resume</span>
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </span>
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          type="button"
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-400/10 focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative h-5 w-5">
            <motion.span
              className="absolute left-0 top-1/2 block h-0.5 w-full bg-current transition duration-300"
              animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
            />
            <motion.span
              className="absolute left-0 top-1/2 block h-0.5 w-full bg-current"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="absolute left-0 top-1/2 block h-0.5 w-full bg-current transition duration-300"
              animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
            />
          </div>
        </motion.button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="fixed inset-x-4 top-[5.5rem] bottom-4 z-40 rounded-[2rem] border border-white/10 bg-slate-950/95 backdrop-blur-3xl shadow-2xl p-6 lg:hidden"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Navigation</p>
                <p className="mt-2 text-lg font-semibold text-white">Explore the site</p>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/20 bg-slate-950/70 text-cyan-200 transition hover:border-cyan-300/40 hover:bg-slate-900/80"
                aria-label="Close mobile menu"
              >
                ×
              </button>
            </div>

            <div className="mt-8 space-y-3">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.id
                return (
                  <motion.button
                    key={link.id}
                    type="button"
                    onClick={() => handleNavClick(link.id)}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={cn(
                      'group relative w-full rounded-[1.5rem] px-5 py-4 text-left text-sm font-semibold transition-all duration-300',
                      isActive
                        ? 'border border-cyan-400/25 bg-cyan-400/12 text-cyan-100 shadow-[0_20px_80px_rgba(34,211,238,0.08)]'
                        : 'border border-white/5 bg-white/5 text-slate-300 hover:border-cyan-400/20 hover:bg-cyan-400/10 hover:text-white'
                    )}
                  >
                    <span>{link.label}</span>
                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          className="absolute right-4 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-cyan-400"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        />
                      )}
                    </AnimatePresence>
                  </motion.button>
                )
              })}
            </div>

            <div className="my-6 h-px bg-cyan-400/10" />

            <div className="grid gap-3">
              <div className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-4">
                <span className="text-xs uppercase tracking-[0.32em] text-slate-500">Connect</span>
                <div className="flex gap-2">
                  <SocialIcon href="https://github.com" label="GitHub" icon="github" />
                  <SocialIcon href="https://linkedin.com" label="LinkedIn" icon="linkedin" />
                  <SocialIcon href="mailto:hello@adisite.com" label="Email" icon="email" />
                </div>
              </div>

              <motion.a
                href="#"
                onClick={() => setIsOpen(false)}
                className="resume-cta group relative inline-flex items-center justify-center rounded-[1.5rem] border border-cyan-400/25 bg-slate-950/80 px-5 py-4 text-sm font-semibold text-cyan-100 hover:border-cyan-300/40 hover:bg-cyan-400/12 transition-colors duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <motion.span
                  className="absolute inset-0 bg-cyan-400/10"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative">Resume</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
