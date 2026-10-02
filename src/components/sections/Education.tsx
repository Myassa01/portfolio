import { useTranslation } from 'react-i18next'
import { GraduationCap } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

export function Education() {
  const { t } = useTranslation()
  const areas = t('education.areas', { returnObjects: true }) as string[]

  return (
    <section id="education" className="py-20 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow={t('education.eyebrow')}
          title={t('education.title')}
          subtitle={t('education.subtitle')}
        />

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6">
          <Reveal>
            <div className="h-full bg-surface/40 border border-line rounded-2xl p-7 sm:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-11 h-11 rounded-lg bg-accent-soft text-accent flex items-center justify-center shrink-0">
                  <GraduationCap size={20} aria-hidden="true" />
                </div>
                <div>
                  <span className="font-mono text-xs text-accent">{t('education.date')}</span>
                  <h3 className="font-display font-semibold text-lg text-ink mt-1">{t('education.degree')}</h3>
                  <p className="text-sm text-ink-muted">{t('education.school')}</p>
                </div>
              </div>
              <h4 className="font-display font-semibold text-sm text-ink-dim uppercase tracking-wide mb-3">
                {t('education.areasTitle')}
              </h4>
              <div className="flex flex-wrap gap-2">
                {areas.map((area) => (
                  <span key={area} className="text-xs font-mono text-ink-muted border border-line rounded-md px-2.5 py-1.5">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full bg-surface/40 border border-line rounded-2xl p-7 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-amber-soft text-amber flex items-center justify-center shrink-0">
                  <GraduationCap size={20} aria-hidden="true" />
                </div>
                <div>
                  <span className="font-mono text-xs text-amber">{t('education.bachelor.date')}</span>
                  <h3 className="font-display font-semibold text-lg text-ink mt-1">
                    {t('education.bachelor.degree')}
                  </h3>
                  <p className="text-sm text-ink-muted">{t('education.bachelor.school')}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
