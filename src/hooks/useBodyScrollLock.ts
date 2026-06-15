import { useEffect } from 'react'

let lockCount = 0
let savedScrollY = 0
let savedStyles: Record<string, string> = {}

function lock() {
  if (lockCount > 0) {
    lockCount += 1
    return
  }

  savedScrollY = window.scrollY
  const doc = document.documentElement
  const body = document.body

  savedStyles = {
    htmlOverflow: doc.style.overflow,
    bodyPosition: body.style.position,
    bodyTop: body.style.top,
    bodyLeft: body.style.left,
    bodyRight: body.style.right,
    bodyOverflow: body.style.overflow,
    bodyWidth: body.style.width,
  }

  doc.style.overflow = 'hidden'
  body.style.position = 'fixed'
  body.style.top = `-${savedScrollY}px`
  body.style.left = '0'
  body.style.right = '0'
  body.style.overflow = 'hidden'
  body.style.width = '100%'

  lockCount = 1
}

let unlockGeneration = 0

function unlock() {
  lockCount = Math.max(0, lockCount - 1)
  if (lockCount > 0) return

  const doc = document.documentElement
  const body = document.body

  doc.style.overflow = savedStyles.htmlOverflow ?? ''
  body.style.position = savedStyles.bodyPosition ?? ''
  body.style.top = savedStyles.bodyTop ?? ''
  body.style.left = savedStyles.bodyLeft ?? ''
  body.style.right = savedStyles.bodyRight ?? ''
  body.style.overflow = savedStyles.bodyOverflow ?? ''
  body.style.width = savedStyles.bodyWidth ?? ''

  // Use generation counter to prevent stale rAF callbacks from
  // restoring to wrong scroll position in React strict mode
  const generation = ++unlockGeneration
  window.requestAnimationFrame(() => {
    if (generation === unlockGeneration) {
      window.scrollTo(0, savedScrollY)
    }
  })
}

export function useBodyScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return undefined
    lock()
    return () => {
      unlock()
    }
  }, [active])
}
