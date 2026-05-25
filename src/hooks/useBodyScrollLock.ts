import { useEffect } from 'react'

let lockCount = 0
let scrollY = 0
let previousHtmlOverflow = ''
let previousBodyStyles = {
  position: '',
  top: '',
  left: '',
  right: '',
  overflow: '',
  width: '',
}

export function useBodyScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) {
      return undefined
    }

    if (lockCount === 0) {
      scrollY = window.scrollY
      previousHtmlOverflow = document.documentElement.style.overflow
      previousBodyStyles = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        right: document.body.style.right,
        overflow: document.body.style.overflow,
        width: document.body.style.width,
      }

      document.documentElement.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.left = '0'
      document.body.style.right = '0'
      document.body.style.overflow = 'hidden'
      document.body.style.width = '100%'
    }

    lockCount += 1

    return () => {
      lockCount = Math.max(0, lockCount - 1)

      if (lockCount === 0) {
        document.documentElement.style.overflow = previousHtmlOverflow
        document.body.style.position = previousBodyStyles.position
        document.body.style.top = previousBodyStyles.top
        document.body.style.left = previousBodyStyles.left
        document.body.style.right = previousBodyStyles.right
        document.body.style.overflow = previousBodyStyles.overflow
        document.body.style.width = previousBodyStyles.width
        window.scrollTo(0, scrollY)
      }
    }
  }, [active])
}
