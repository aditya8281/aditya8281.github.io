import { useCallback } from 'react'
import { scrollToSection } from '../utils/sections'

export function useScrollToSection() {
  return useCallback((id: string) => {
    scrollToSection(id)
  }, [])
}
