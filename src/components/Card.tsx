import type { PropsWithChildren } from 'react'
import { cn } from '../utils/cn'

type CardProps = PropsWithChildren<{ className?: string }>

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'glass-card transition-transform duration-200 hover:-translate-y-1 hover:shadow-glow',
        className,
      )}
    >
      {children}
    </div>
  )
}
