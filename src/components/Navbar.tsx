import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'
import { useScrollToSection } from '../hooks/useScrollToSection'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useActiveSection()
  const handleScroll = useScrollToSection()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
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
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-cyan-400/15 bg-slate-950/90 backdrop-blur-3xl shadow-glow' : 'bg-transparent'
      }`}
    >
      <div className="app-container flex items-center justify-between py-4">
        <a href="#home" onClick={() => handleNavClick('home')} className="flex items-center gap-3 text-lg font-semibold text-white transition hover:text-cyan-200">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 shadow-glow">
            A
          </span>
          <span>Adi</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
                aria-current={isActive ? 'page' : undefined}
                className="relative text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full bg-cyan-400 transition-all duration-300 ${
                    isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                  } origin-left`}
                />
                {isActive ? <span className="absolute -left-4 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-cyan-400" aria-hidden="true" /> : null}
              </button>
            )
          })}
        </nav>

        <button
          type="button"
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-slate-950/75 text-cyan-300 transition hover:border-cyan-300/40 hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 md:hidden"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="sr-only">Open menu</span>
          <div className="relative h-5 w-5">
            <span
              className={`absolute left-0 top-1/2 block h-0.5 w-full bg-current transition duration-300 ${isOpen ? 'translate-y-0 rotate-45' : '-translate-y-1.5'}`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-0.5 w-full bg-current transition duration-300 ${isOpen ? 'opacity-0' : 'translate-y-0'}`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-0.5 w-full bg-current transition duration-300 ${isOpen ? 'translate-y-0 -rotate-45' : 'translate-y-1.5'}`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="border-t border-cyan-400/10 bg-slate-950/95 backdrop-blur-3xl md:hidden"
          >
            <div className="app-container space-y-3 py-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id
                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleNavClick(link.id)}
                    className={`flex w-full items-center justify-between rounded-3xl px-4 py-3 text-left text-sm font-medium transition ${
                      isActive ? 'bg-cyan-400/10 text-white' : 'text-slate-300 hover:bg-cyan-400/10 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive ? <span className="h-2 w-2 rounded-full bg-cyan-400" /> : null}
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
