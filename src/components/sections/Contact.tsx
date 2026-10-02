import { useTranslation } from 'react-i18next'
import { MapPin } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Reveal } from '@/components/ui/Reveal'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'
import { links } from '@/data/links'

export function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="bg-linear-to-br from-surface/60 to-accent-soft border border-line rounded-3xl px-8 py-16 sm:px-14 sm:py-20 text-center">
            <Badge className="mb-5">{t('contact.eyebrow')}</Badge>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4 text-ink">
              {t('contact.title')}
            </h2>
            <p className="text-ink-muted text-base sm:text-lg mb-9 max-w-[52ch] mx-auto">{t('contact.subtitle')}</p>

            <a
              href={`mailto:${links.email}`}
              className="inline-block font-display font-semibold text-2xl sm:text-4xl text-ink no-underline mb-8 wrap-break-word hover:text-accent transition-colors"
            >
              {links.email}
            </a>

            <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-ink-muted text-sm sm:text-base">
              <span className="inline-flex items-center gap-2">
                <MapPin size={16} aria-hidden="true" />
                {t('contact.locationValue')}
              </span>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ink-muted hover:text-accent transition-colors no-underline"
              >
                <LinkedinIcon width={16} height={16} />
                {t('contact.linkedin')}
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ink-muted hover:text-accent transition-colors no-underline"
              >
                <GithubIcon width={16} height={16} />
                {t('contact.github')}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
