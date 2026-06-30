import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'
import { useBodyScrollLock } from '../hooks/useBodyScrollLock'
import { useScrollToSection } from '../hooks/useScrollToSection'
import { softSpring } from '../utils/animations'
import { cn } from '../utils/cn'

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
        'relative z-10 px-3 py-2 text-xs font-medium transition-colors duration-200 outline-none xl:px-4 xl:text-sm',
        isActive ? 'text-[var(--mono-accent)]' : isCta ? 'text-[var(--mono-green)] hover:text-[var(--mono-accent)]' : 'text-[var(--mono-comment)] hover:text-[var(--mono-text)]'
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
  const [scrollProgress, setScrollProgress] = useState(0)
  const navRef = useRef<HTMLDivElement | null>(null)
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const activeSection = useActiveSection()
  const handleScroll = useScrollToSection()
  const navItems = navLinks

  useBodyScrollLock(isOpen)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? Math.min(window.scrollY / docHeight, 1) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isOpen) return undefined
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen])

  useLayoutEffect(() => {
    const container = navRef.current
    const activeItem = activeSection ? itemRefs.current[activeSection] : null
    if (!container || !activeItem) { setIndicator({ left: 0, width: 0 }); return }
    const containerRect = container.getBoundingClientRect()
    const itemRect = activeItem.getBoundingClientRect()
    setIndicator({ left: itemRect.left - containerRect.left, width: itemRect.width })
  }, [activeSection, isOpen])

  useEffect(() => {
    const update = () => {
      const container = navRef.current
      const activeItem = activeSection ? itemRefs.current[activeSection] : null
      if (!container || !activeItem) return
      const containerRect = container.getBoundingClientRect()
      const itemRect = activeItem.getBoundingClientRect()
      setIndicator({ left: itemRect.left - containerRect.left, width: itemRect.width })
    }
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [activeSection])

  const handleNavClick = (id: string) => {
    if (!isOpen) { handleScroll(id); return }
    setIsOpen(false)
    window.setTimeout(() => { window.requestAnimationFrame(() => handleScroll(id)) }, 50)
  }

  const mobileMenu = (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Close navigation menu backdrop"
            className="fixed inset-0 z-[990] bg-[var(--mono-bg)]/95 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-x-3 bottom-3 top-[calc(4.75rem+env(safe-area-inset-top))] z-[1000] flex flex-col overflow-hidden border border-[var(--mono-surface-3)] bg-[var(--mono-surface)] p-4 sm:inset-x-4 sm:bottom-auto sm:max-h-[calc(100svh-6.5rem)] sm:p-5 lg:hidden"
            id="mobile-nav-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="relative z-10 flex min-h-0 flex-1 flex-col">
              <div className="flex shrink-0 items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-xs font-mono uppercase tracking-[0.15em] text-[var(--mono-comment)]">Navigation</p>
                  <p className="mt-1 text-lg font-semibold text-white">Portfolio</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-10 shrink-0 items-center border border-[var(--mono-surface-3)] px-4 text-sm font-medium text-[var(--mono-text-dim)] hover:border-[var(--mono-accent)] hover:text-[var(--mono-accent)] transition-colors"
                >
                  Close
                </button>
              </div>

              <nav aria-label="Mobile navigation" className="mt-4 grid min-h-0 flex-1 content-start gap-2 overflow-y-auto overscroll-contain pr-1 sm:grid-cols-2">
                {navItems.map((link) => {
                  const isActive = activeSection === link.id
                  return (
                    <button
                      key={link.id}
                      type="button"
                      onClick={() => handleNavClick(link.id)}
                      className={cn(
                        'min-h-[4rem] w-full border px-4 py-3 text-left text-sm font-medium transition-colors',
                        link.id === 'contact'
                          ? 'border-[var(--mono-green)]/30 bg-[var(--mono-green)]/5 text-[var(--mono-green)] hover:bg-[var(--mono-green)]/10'
                          : isActive
                          ? 'border-[var(--mono-accent)] bg-[var(--mono-accent)]/5 text-[var(--mono-accent)]'
                          : 'border-[var(--mono-surface-3)] bg-transparent text-[var(--mono-comment)] hover:border-[var(--mono-accent)]/30 hover:text-[var(--mono-text)]'
                      )}
                    >
                      <span className="block leading-tight">{link.label}</span>
                    </button>
                  )
                })}
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )

  return (
    <>
      <motion.header
        data-site-navbar
        className={cn(
          'fixed inset-x-0 top-0 z-[100] border-b border-transparent bg-[var(--mono-bg)]/20 backdrop-blur-xl',
          scrolled ? 'border-[var(--mono-surface-3)] bg-[var(--mono-bg)]/90 shadow-[0_1px_0_var(--mono-surface-3)]' : 'shadow-none'
        )}
      >
        <div className={cn('app-container flex items-center justify-between gap-4 transition-all', scrolled ? 'py-3' : 'py-4 md:py-5')}>
          <button type="button" onClick={() => handleNavClick('home')} className="group inline-flex items-center gap-3 text-left">
            <span className="flex h-9 w-9 items-center justify-center border border-[var(--mono-surface-3)] text-xs font-mono font-bold text-[var(--mono-accent)]">
              AR
            </span>
            <span className="hidden sm:block">
              <span className="block text-sm font-semibold text-white">Aditya Rathod</span>
              <span className="block text-[0.65rem] font-mono text-[var(--mono-comment)]">IIT Jodhpur &bull; 2024-28</span>
            </span>
          </button>

          <nav aria-label="Main navigation" className="relative hidden items-center gap-1 border border-[var(--mono-surface-3)] bg-[var(--mono-surface)] p-1 lg:flex">
            <motion.span
              className="pointer-events-none absolute top-1 bottom-1 border border-[var(--mono-accent)]/30 bg-[var(--mono-accent)]/5"
              animate={{ left: indicator.left, width: indicator.width }}
              transition={softSpring}
            />
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
          </nav>

          <button
            type="button"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-drawer"
            className="inline-flex h-11 w-11 items-center justify-center border border-[var(--mono-surface-3)] text-[var(--mono-comment)] transition-colors hover:border-[var(--mono-accent)] hover:text-[var(--mono-accent)] lg:hidden"
            onClick={() => setIsOpen((c) => !c)}
          >
            <span className="relative block h-5 w-5">
              <span className={cn('absolute left-0 top-1/2 block h-0.5 w-full bg-current transition-all duration-200', isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2')} />
              <span className={cn('absolute left-0 top-1/2 block h-0.5 w-full bg-current transition-all duration-200', isOpen ? 'opacity-0' : 'opacity-100')} />
              <span className={cn('absolute left-0 top-1/2 block h-0.5 w-full bg-current transition-all duration-200', isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2')} />
            </span>
          </button>
        </div>

        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-transparent overflow-hidden">
          <div
            className="h-full w-full origin-left bg-[var(--mono-accent)]"
            style={{ transform: `scaleX(${scrollProgress})` }}
          />
        </div>
      </motion.header>

      {createPortal(mobileMenu, document.body)}
    </>
  )
}
