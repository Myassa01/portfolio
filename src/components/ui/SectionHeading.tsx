import type { ReactNode } from 'react'
import { Badge } from './Badge'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  subtitle?: ReactNode
  center?: boolean
}

export function SectionHeading({ eyebrow, title, subtitle, center = false }: SectionHeadingProps) {
  return (
    <Reveal className={`mb-12 max-w-[60ch] ${center ? 'mx-auto text-center' : ''}`}>
      <Badge className="mb-4">{eyebrow}</Badge>
      <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight mb-3 text-ink">{title}</h2>
      {subtitle && <p className="text-ink-muted text-base sm:text-lg">{subtitle}</p>}
    </Reveal>
  )
}
