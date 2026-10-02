import { useTranslation } from 'react-i18next'
import { Sparkles, Code2, Network, LifeBuoy, Workflow, FileText } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

const ICONS = [Sparkles, Code2, Network, LifeBuoy, Workflow, FileText]

export function Services() {
  const { t } = useTranslation()
  const items = t('services.items', { returnObjects: true }) as { title: string; description: string }[]

  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow={t('services.eyebrow')}
          title={t('services.title')}
          subtitle={t('services.subtitle')}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <Reveal key={item.title} delay={i * 60}>
                <div className="h-full bg-surface/40 border border-line rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong">
                  <div className="w-10 h-10 rounded-lg bg-accent-soft text-accent flex items-center justify-center mb-4">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-semibold text-base text-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
