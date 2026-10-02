import { useTranslation } from 'react-i18next'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

interface ExperienceItem {
  date: string
  title: string
  org: string
  description: string
}

export function Experience() {
  const { t } = useTranslation()
  const items = t('experience.items', { returnObjects: true }) as ExperienceItem[]

  return (
    <section id="experience" className="py-20 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow={t('experience.eyebrow')}
          title={t('experience.title')}
          subtitle={t('experience.subtitle')}
        />
        <ol className="list-none m-0 p-0 border-s-2 border-line relative">
          {items.map((item, i) => (
            <Reveal key={i} as="li" delay={i * 80} className="relative ps-9 pb-10 last:pb-0">
              <span
                className="absolute -start-[7px] top-1 w-3 h-3 rounded-full bg-bg border-2 border-accent"
                style={{ boxShadow: '0 0 0 4px var(--color-bg), 0 0 12px var(--color-accent-soft)' }}
                aria-hidden="true"
              />
              <span className="inline-block font-mono text-xs font-medium text-accent bg-accent-soft rounded-full px-2.5 py-1 mb-2.5">
                {item.date}
              </span>
              <h3 className="font-display font-semibold text-lg mt-1 mb-1.5 text-ink">{item.title}</h3>
              <p className="text-sm font-medium text-ink-muted mb-1">{item.org}</p>
              <p className="text-sm text-ink-muted max-w-[65ch]">{item.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
