import { useTranslation } from 'react-i18next'
import { Award, ExternalLink } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { certifications } from '@/data/certifications'

export function Certifications() {
  const { t } = useTranslation()

  return (
    <section id="certifications" className="py-20 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow={t('certifications.eyebrow')}
          title={t('certifications.title')}
          subtitle={t('certifications.subtitle')}
        />

        {certifications.length === 0 ? (
          <Reveal>
            <div className="border border-dashed border-line rounded-2xl p-10 text-center">
              <Award className="mx-auto mb-3 text-ink-dim" size={28} aria-hidden="true" />
              <p className="text-ink-muted text-sm">{t('certifications.empty')}</p>
            </div>
          </Reveal>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, i) => (
              <Reveal key={cert.id} delay={i * 60}>
                <div className="h-full flex flex-col bg-surface/40 border border-line rounded-2xl p-6">
                  <Award className="text-accent mb-4" size={22} aria-hidden="true" />
                  <h3 className="font-display font-semibold text-base text-ink mb-1">
                    {t(`certifications.items.${cert.i18nKey}.title`)}
                  </h3>
                  <p className="text-sm text-ink-muted mb-4">
                    {t(`certifications.items.${cert.i18nKey}.organization`)}
                  </p>
                  {cert.year && <p className="text-xs font-mono text-ink-dim -mt-3 mb-4">{cert.year}</p>}
                  <div className="mt-auto">
                    {cert.credentialUrl ? (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent"
                      >
                        {t('certifications.viewCredential')}
                        <ExternalLink size={13} aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-dim opacity-60 cursor-not-allowed">
                        {t('certifications.notAvailable')}
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
