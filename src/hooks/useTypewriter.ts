import { useEffect, useState } from 'react'

export function useTypewriter(words: string[], typingSpeed = 120, holdDuration = 1600) {
  const [displayed, setDisplayed] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex % words.length]
    const isComplete = displayed === currentWord
    const isEmpty = displayed === ''

    const timeout = window.setTimeout(() => {
      if (isComplete && !isDeleting) {
        setIsDeleting(true)
        return
      }

      if (isDeleting && isEmpty) {
        setIsDeleting(false)
        setWordIndex((prev) => prev + 1)
        return
      }

      setDisplayed((prev) => {
        if (isDeleting) {
          return currentWord.slice(0, prev.length - 1)
        }

        return currentWord.slice(0, prev.length + 1)
      })
    }, isComplete && !isDeleting ? holdDuration : isDeleting ? typingSpeed / 2 : typingSpeed)

    return () => window.clearTimeout(timeout)
  }, [displayed, isDeleting, wordIndex, words, typingSpeed, holdDuration])

  return displayed
}
