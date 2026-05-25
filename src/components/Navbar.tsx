import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { softSpring } from '../utils/animations'
import { cn } from '../utils/cn'
import { navLinks } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'
import { useScrollToSection } from '../hooks/useScrollToSection'

const visibleNavIds = ['home', 'about', 'skills', 'projects', 'contact']

function NavLink({
  id,
  label,
  isActive,
  onClick,
  buttonRef,
}: {
  id: string
  label: string
  isActive: boolean
  onClick: (id: string) => void
  buttonRef?: (element: HTMLButtonElement | null) => void
}) {
  const isCta = id === 'contact'

  return (
    <button
      type="button"
      ref={buttonRef}
      onClick={() => onClick(id)}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'relative rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
        isCta
          ? 'border border-cyan-400/25 bg-cyan-400/10 text-cyan-100 hover:bg-cyan-400/15'
          : isActive
          ? 'text-white'
          : 'text-slate-300 hover:text-white'
      )}
    >
      {label}
    </button>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })
  const navRef = useRef<HTMLDivElement | null>(null)
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const activeSection = useActiveSection()
  const handleScroll = useScrollToSection()

  const navItems = navLinks.filter((link) => visibleNavIds.includes(link.id))

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useLayoutEffect(() => {
    const container = navRef.current
    const activeItem = activeSection ? itemRefs.current[activeSection] : null

    if (!container || !activeItem) {
      setIndicator({ left: 0, width: 0 })
      return
    }

    const containerRect = container.getBoundingClientRect()
    const itemRect = activeItem.getBoundingClientRect()

    setIndicator({ left: itemRect.left - containerRect.left, width: itemRect.width })
  }, [activeSection, isOpen])

  useEffect(() => {
    const update = () => {
      const container = navRef.current
      const activeItem = activeSection ? itemRefs.current[activeSection] : null

      if (!container || !activeItem) {
        return
      }

      const containerRect = container.getBoundingClientRect()
      const itemRect = activeItem.getBoundingClientRect()
      setIndicator({ left: itemRect.left - containerRect.left, width: itemRect.width })
    }

    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [activeSection])

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
    >
      <div className={cn('app-container flex items-center justify-between gap-4 transition-all', scrolled ? 'py-3 md:py-4' : 'py-4 md:py-5')}>
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="text-left text-sm font-semibold uppercase tracking-[0.24em] text-white transition hover:text-cyan-200"
        >
          Aditya
        </button>

        <div className="relative hidden items-center gap-2 lg:flex" ref={navRef}>
          {navItems.map((link) => (
            <NavLink
              key={link.id}
              id={link.id}
              label={link.label}
              isActive={activeSection === link.id}
              buttonRef={(element) => (itemRefs.current[link.id] = element)}
              onClick={handleNavClick}
            />
          ))}

          <motion.span
            className="pointer-events-none absolute bottom-0 h-[2px] rounded-full bg-cyan-300"
            animate={{ left: indicator.left, width: indicator.width }}
            transition={softSpring}
          />
        </div>

        <button
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-400/10 focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="relative block h-5 w-5">
            <span
              className={cn(
                'absolute left-0 top-1/2 block h-0.5 w-full bg-current transition-all duration-300',
                isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
              )}
            />
            <span
              className={cn(
                'absolute left-0 top-1/2 block h-0.5 w-full bg-current transition-all duration-300',
                isOpen ? 'opacity-0' : 'opacity-100'
              )}
            />
            <span
              className={cn(
                'absolute left-0 top-1/2 block h-0.5 w-full bg-current transition-all duration-300',
                isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
              )}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-x-3 sm:inset-x-4 top-[5.5rem] z-40 rounded-[2rem] border border-white/10 bg-slate-950/95 backdrop-blur-3xl shadow-2xl p-4 sm:p-5 lg:hidden"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-slate-500">Navigation</p>
                <p className="mt-2 text-lg font-semibold text-white">Section links</p>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-10 items-center justify-center rounded-2xl border border-cyan-400/20 bg-slate-950/75 px-4 text-sm font-medium text-cyan-100 hover:border-cyan-300/40 hover:bg-slate-900/90"
              >
                Close
              </button>
            </div>

            <div className="mt-6 space-y-3">
              {navItems.map((link) => {
                const isActive = activeSection === link.id
                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleNavClick(link.id)}
                    className={cn(
                      'w-full rounded-[1.5rem] border px-5 py-4 text-left text-sm font-semibold transition-colors duration-300',
                      link.id === 'contact'
                        ? 'border-cyan-400/30 bg-cyan-400/10 text-cyan-100 hover:bg-cyan-400/15'
                        : isActive
                        ? 'border-cyan-400/25 bg-slate-900 text-white'
                        : 'border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400/20 hover:bg-cyan-400/10 hover:text-white'
                    )}
                  >
                    {link.label}
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
