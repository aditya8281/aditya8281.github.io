import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const terminalLines = [
  'Probably listening to songs and typing code...',
  'Maybe crashing out on bugs and coffee...',
  'Most likely just procrastinating...',
]

export default function TerminalIntro() {
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [currentLineIndex, setCurrentLineIndex] = useState(prefersReduced ? terminalLines.length : 0)
  const [typedText, setTypedText] = useState('')
  const [completedLines, setCompletedLines] = useState<string[]>([])
  const [cycleComplete, setCycleComplete] = useState(prefersReduced)

  const currentLine = terminalLines[currentLineIndex] ?? ''

  useEffect(() => {
    if (prefersReduced || currentLineIndex >= terminalLines.length) {
      setCycleComplete(true)
      return
    }

    if (typedText === currentLine) {
      const hold = window.setTimeout(() => {
        setCompletedLines((prev) => [...prev, currentLine])
        setTypedText('')
        setCurrentLineIndex((prev) => prev + 1)
      }, 1000)
      return () => window.clearTimeout(hold)
    }

    const timeout = window.setTimeout(() => {
      setTypedText(currentLine.slice(0, typedText.length + 1))
    }, 75)
    return () => window.clearTimeout(timeout)
  }, [currentLine, currentLineIndex, typedText, prefersReduced])

  const handleReplay = () => {
    setCompletedLines([])
    setTypedText('')
    setCurrentLineIndex(0)
    setCycleComplete(false)
  }

  const displayLines = useMemo(() => {
    if (prefersReduced || cycleComplete) return [...terminalLines]
    const lines = [...completedLines]
    if (currentLineIndex < terminalLines.length) lines.push(typedText)
    return lines
  }, [completedLines, currentLineIndex, typedText, prefersReduced, cycleComplete])

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className="border border-[var(--mono-surface-3)] bg-[var(--mono-surface)] p-4"
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-xs font-mono text-[var(--mono-comment)]">
          <span className="inline-block h-2 w-2 bg-[var(--mono-green)]" />
          system
        </div>
        {cycleComplete && (
          <button
            type="button"
            onClick={handleReplay}
            className="text-xs font-mono text-[var(--mono-comment)] hover:text-[var(--mono-cyan)] transition-colors"
            aria-label="Replay terminal animation"
          >
            replay
          </button>
        )}
      </div>

      <div className="mt-3 space-y-1 font-mono text-sm text-[var(--mono-text-dim)]">
        {displayLines.map((line, index) => {
          const isCurrent = !cycleComplete && index === displayLines.length - 1 && currentLineIndex < terminalLines.length
          return (
            <div key={`${line}-${index}`} className="flex gap-2">
              <span className="text-[var(--mono-cyan)]">&gt;</span>
              <span>{line}</span>
              {isCurrent && <span className="inline-block h-4 w-[2px] bg-[var(--mono-cyan)] animate-pulse" />}
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}
