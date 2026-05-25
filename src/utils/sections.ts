export const trackedSectionIds = ['home', 'about', 'research', 'skills', 'projects', 'experience', 'leadership', 'contact'] as const

export function getScrollOffset() {
  const nav = document.querySelector('[data-site-navbar]')
  const navHeight = nav instanceof HTMLElement ? nav.getBoundingClientRect().height : 88
  return Math.ceil(navHeight + 16)
}

export function getSectionTop(section: HTMLElement) {
  return section.getBoundingClientRect().top + window.scrollY
}

export function scrollToSection(id: string) {
  const section = document.getElementById(id)
  if (!section) {
    return
  }

  const top = Math.max(0, getSectionTop(section) - getScrollOffset())
  window.scrollTo({ top, behavior: 'smooth' })
}
