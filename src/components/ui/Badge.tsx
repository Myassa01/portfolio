import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  tone?: 'accent' | 'amber'
  pulse?: boolean
  className?: string
}

export function Badge({ children, tone = 'accent', pulse = false, className = '' }: BadgeProps) {
  const toneClasses =
    tone === 'accent'
      ? 'text-accent bg-accent-soft border-accent/25'
      : 'text-amber bg-amber-soft border-amber/25'

  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-xs px-3.5 py-1.5 rounded-full border ${toneClasses} ${className}`}
    >
      {pulse && <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" aria-hidden="true" />}
      {children}
    </span>
  )
}
