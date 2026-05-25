import { useEffect, useState } from 'react'
import { getScrollOffset, trackedSectionIds } from '../utils/sections'

export function useActiveSection(defaultId = 'home') {
  const [activeSection, setActiveSection] = useState(defaultId)

  useEffect(() => {
    const sections = trackedSectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    if (!sections.length) {
      return undefined
    }

    let frame = 0

    const updateActiveSection = () => {
      const activationOffset = getScrollOffset()
      const scrollPosition = window.scrollY + activationOffset
      const pageBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8
      let currentSection = defaultId

      if (pageBottom) {
        currentSection = sections[sections.length - 1]?.id ?? defaultId
      } else {
        sections.forEach((section) => {
          if (section.offsetTop <= scrollPosition) {
            currentSection = section.id
          }
        })
      }

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
