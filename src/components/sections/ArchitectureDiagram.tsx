import { useTranslation } from 'react-i18next'
import { ArrowDown } from 'lucide-react'

export function ArchitectureDiagram() {
  const { t } = useTranslation()
  const steps = t('projects.architectureDiagram', { returnObjects: true }) as string[]

  return (
    <div className="flex flex-col items-center gap-1.5 py-2">
      {steps.map((step, i) => (
        <div key={step} className="flex flex-col items-center gap-1.5">
          <div className="px-4 py-2.5 rounded-lg border border-line-strong bg-surface text-sm font-mono text-ink text-center min-w-[180px]">
            {step}
          </div>
          {i < steps.length - 1 && <ArrowDown size={16} className="text-accent" aria-hidden="true" />}
        </div>
      ))}
    </div>
  )
}
