import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const terminalLines = [
  'Probably listening songs and typing code...',
  'Maybe crashing out on bugs and coffee...',
  'Most likely just procrastinating...',
]

export default function TerminalIntro() {
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [typedText, setTypedText] = useState('')
  const [completedLines, setCompletedLines] = useState<string[]>([])

  const currentLine = terminalLines[currentLineIndex] ?? ''

  useEffect(() => {
    if (currentLineIndex >= terminalLines.length) {
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
  }, [currentLine, currentLineIndex, typedText])

  const displayLines = useMemo(() => {
    const lines = [...completedLines]
    if (currentLineIndex < terminalLines.length) {
      lines.push(typedText)
    }
    return lines
  }, [completedLines, currentLineIndex, typedText])

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="rounded-3xl border border-slate-700/70 bg-slate-950/80 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.45)] backdrop-blur-xl"
    >
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.32em] text-slate-500">
        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.4)]" />
        System startup
      </div>

      <div className="mt-4 space-y-2 font-mono text-sm leading-6 text-slate-300">
        {displayLines.map((line, index) => {
          const isCurrent = index === displayLines.length - 1 && currentLineIndex < terminalLines.length
          return (
            <div key={`${line}-${index}`} className="flex gap-2">
              <span className="text-cyan-300">&gt;</span>
              <span>{line}</span>
              {isCurrent ? (
                <span className="inline-block h-4 w-1 bg-cyan-300 animate-pulse" />
              ) : null}
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}
