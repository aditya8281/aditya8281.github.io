import { useCallback } from 'react'

export function useScrollToSection() {
  return useCallback((id: string) => {
    const section = document.getElementById(id)
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])
}
