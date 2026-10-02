import { useTranslation } from 'react-i18next'
import { Download } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { LinkButton } from '@/components/ui/Button'
import { links } from '@/data/links'

export function Hero() {
  const { t } = useTranslation()

  return (
    <header id="home" className="pt-24 pb-20 sm:pt-32 sm:pb-28">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="max-w-180">
          <Badge pulse className="mb-6">
            {t('hero.badge')}
          </Badge>
          <h1 className="font-display font-bold text-4xl sm:text-6xl leading-[1.05] tracking-tight mb-4 text-ink">
            {t('hero.name')}
          </h1>
          <p className="font-mono text-base sm:text-lg text-ink-muted mb-6">{t('hero.role')}</p>
          <p className="max-w-[54ch] text-ink-muted text-base sm:text-lg mb-9">{t('hero.intro')}</p>
          <div className="flex flex-wrap gap-3.5">
            <LinkButton href="#projects" variant="primary">
              {t('hero.ctaProjects')}
            </LinkButton>
            <LinkButton href="#contact" variant="secondary">
              {t('hero.ctaContact')}
            </LinkButton>
            <LinkButton href={links.cvFile} download variant="ghost">
              <Download size={16} aria-hidden="true" />
              {t('hero.ctaCv')}
            </LinkButton>
          </div>
        </div>
      </div>
    </header>
  )
}
