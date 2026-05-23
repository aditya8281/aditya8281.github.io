import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
      className="relative group px-1 py-2 text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white"
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
    >
      {label}
      
      {/* Animated underline */}
      <motion.span
        className="absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400"
        initial={{ width: 0 }}
        animate={{ width: isActive ? '100%' : '0%' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />

      {/* Hover underline */}
      <motion.span
        className="absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-cyan-300/40 via-cyan-200/40 to-blue-300/40"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3 }}
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
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-cyan-400/15 bg-slate-950/60 backdrop-blur-2xl shadow-lg'
          : 'border-b border-cyan-400/0 bg-transparent'
      }`}
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="app-container flex items-center justify-between py-3">
        {/* Logo/Brand - Animated */}
        <motion.a
          href="#home"
          onClick={() => handleNavClick('home')}
          className="group relative flex items-center gap-2.5 focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-lg outline-none"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/20 to-blue-500/10 text-sm font-bold text-cyan-300 transition-all duration-300"
            whileHover={{ borderColor: 'rgba(34,211,238,0.6)', boxShadow: '0 0 20px rgba(34,211,238,0.2)' }}
          >
            A
          </motion.span>
          <span className="hidden sm:inline text-base font-semibold bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent group-hover:from-cyan-200 group-hover:to-slate-100 transition-all duration-300">
            Adi
          </span>
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="border-t border-cyan-400/10 bg-slate-950/70 backdrop-blur-md overflow-hidden lg:hidden"
          >
            <div className="app-container space-y-1 py-4">
              {/* Mobile Nav Links */}
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.id
                return (
                  <motion.button
                    key={link.id}
                    type="button"
                    onClick={() => handleNavClick(link.id)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`group relative w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-all duration-300 flex items-center justify-between ${
                      isActive
                        ? 'bg-cyan-400/15 text-cyan-100 border border-cyan-400/30'
                        : 'text-slate-300 hover:bg-cyan-400/10 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          className="h-2 w-2 rounded-full bg-cyan-400"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        />
                      )}
                    </AnimatePresence>
                  </motion.button>
                )
              })}

              {/* Divider */}
              <div className="my-3 h-px bg-cyan-400/10" />

              {/* Mobile Social Links */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wide">Connect</span>
                <div className="flex gap-2">
                  <SocialIcon href="https://github.com" label="GitHub" icon="github" />
                  <SocialIcon href="https://linkedin.com" label="LinkedIn" icon="linkedin" />
                  <SocialIcon href="mailto:hello@adisite.com" label="Email" icon="email" />
                </div>
              </div>

              {/* Mobile Resume Button */}
              <motion.a
                href="#"
                onClick={() => setIsOpen(false)}
                className="resume-cta group relative block w-full rounded-lg px-4 py-3 text-center text-sm font-medium text-cyan-100 overflow-hidden border border-cyan-400/30 hover:border-cyan-300/60 transition-colors duration-300 mt-2"
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
                <span className="relative block">Resume</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
