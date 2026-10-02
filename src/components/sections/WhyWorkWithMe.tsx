import { useTranslation } from 'react-i18next'
import { Puzzle, BookOpen, Compass, MessageSquare } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

const ICONS = [Puzzle, BookOpen, Compass, MessageSquare]

export function WhyWorkWithMe() {
  const { t } = useTranslation()
  const items = t('why.items', { returnObjects: true }) as { title: string; description: string }[]

  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow={t('why.eyebrow')} title={t('why.title')} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <Reveal key={item.title} delay={i * 60}>
                <div className="h-full text-center sm:text-start">
                  <div className="w-11 h-11 rounded-full bg-amber-soft text-amber flex items-center justify-center mb-4 mx-auto sm:mx-0">
                    <Icon size={19} aria-hidden="true" />
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
