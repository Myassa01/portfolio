import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Mail, ArrowUp } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'
import { links } from '@/data/links'

export function Footer() {
  const { t } = useTranslation()
  const [year] = useState(() => new Date().getFullYear())

  return (
    <footer className="border-t border-line py-10">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="font-display font-semibold text-ink">Myassa Maallem</p>
            <p className="text-sm text-ink-muted">{t('footer.role')}</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${links.email}`}
              aria-label="Email"
              className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-ink-muted hover:text-accent hover:border-accent transition-colors"
            >
              <Mail size={15} aria-hidden="true" />
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-ink-muted hover:text-accent hover:border-accent transition-colors"
            >
              <GithubIcon width={15} height={15} />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-ink-muted hover:text-accent hover:border-accent transition-colors"
            >
              <LinkedinIcon width={15} height={15} />
            </a>
            <a
              href="#home"
              aria-label={t('footer.backToTop')}
              className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-ink-muted hover:text-accent hover:border-accent transition-colors"
            >
              <ArrowUp size={15} aria-hidden="true" />
            </a>
          </div>
        </div>

        <p className="text-xs text-ink-dim mt-8">
          © {year} Myassa Maallem. {t('footer.rights')}
        </p>
      </div>
    </footer>
  )
}
