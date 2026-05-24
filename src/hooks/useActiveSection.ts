import { useEffect, useState } from 'react'

const trackedSections = ['home', 'about', 'skills', 'projects', 'contact']

export function useActiveSection(defaultId = 'home') {
  const [activeSection, setActiveSection] = useState(defaultId)

  useEffect(() => {
    const sections = trackedSections
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    if (!sections.length) {
      return undefined
    }

    let frame = 0

    const updateActiveSection = () => {
      const threshold = window.innerHeight * 0.35
      let currentSection = defaultId

      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top
        if (top <= threshold) {
          currentSection = section.id
        }
      })

      setActiveSection((previous) => (previous === currentSection ? previous : currentSection))
      frame = 0
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(updateActiveSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame)
      }
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [defaultId])

  return activeSection
}
