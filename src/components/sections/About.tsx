import { useTranslation } from 'react-i18next'
import { Check } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Reveal } from '@/components/ui/Reveal'

export function About() {
  const { t } = useTranslation()
  const interests = t('about.interests', { returnObjects: true }) as string[]
  const stats = t('about.stats', { returnObjects: true }) as { label: string }[]

  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 grid lg:grid-cols-[2fr_1fr] gap-14">
        <Reveal>
          <Badge className="mb-4">{t('about.eyebrow')}</Badge>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight mb-6 text-ink">
            {t('about.title')}
          </h2>
          <p className="text-lg text-ink-muted mb-5">{t('about.p1')}</p>
          <p className="text-lg text-ink-muted mb-7">{t('about.p2')}</p>
          <ul className="grid sm:grid-cols-2 gap-3 list-none p-0 m-0">
            {interests.map((interest) => (
              <li key={interest} className="flex items-start gap-2.5 text-sm text-ink-muted">
                <Check size={16} className="text-accent shrink-0 mt-0.5" aria-hidden="true" />
                {interest}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <ul className="flex flex-col list-none m-0 p-0 border-t border-line">
            {stats.map((stat, i) => (
              <li key={i} className="py-5 border-b border-line">
                <span className="text-ink font-semibold text-base">{stat.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
