import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { X, ExternalLink } from 'lucide-react'
import type { Project } from '@/data/projects'
import { GithubIcon } from '@/components/ui/BrandIcons'
import { ArchitectureDiagram } from './ArchitectureDiagram'

interface ProjectDetailModalProps {
  project: Project
  onClose: () => void
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const { t } = useTranslation()
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const base = `projects.items.${project.i18nKey}`
  const features = t(`${base}.features`, { returnObjects: true }) as string[]

  useEffect(() => {
    closeButtonRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto bg-bg-elev border border-line-strong rounded-2xl shadow-2xl">
        <div className="sticky top-0 flex items-center justify-between px-6 sm:px-8 py-5 bg-bg-elev/95 backdrop-blur border-b border-line z-10">
          <span className="font-mono text-xs text-accent bg-accent-soft rounded-full px-3 py-1">
            {t(`${base}.category`)}
          </span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label={t('projects.detail.close')}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-line text-ink-muted hover:text-ink hover:border-line-strong transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        <div className="px-6 sm:px-8 py-7 space-y-8">
          <h2 id="project-modal-title" className="font-display font-bold text-2xl sm:text-3xl text-ink">
            {t(`${base}.title`)}
          </h2>

          <section>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wide text-ink-dim mb-2">
              {t('projects.detail.overview')}
            </h3>
            <p className="text-ink-muted leading-relaxed">{t(`${base}.overview`)}</p>
          </section>

          <div className="grid sm:grid-cols-2 gap-6">
            <section>
              <h3 className="font-display font-semibold text-sm uppercase tracking-wide text-ink-dim mb-2">
                {t('projects.detail.problem')}
              </h3>
              <p className="text-ink-muted leading-relaxed text-sm">{t(`${base}.problem`)}</p>
            </section>
            <section>
              <h3 className="font-display font-semibold text-sm uppercase tracking-wide text-ink-dim mb-2">
                {t('projects.detail.solution')}
              </h3>
              <p className="text-ink-muted leading-relaxed text-sm">{t(`${base}.solution`)}</p>
            </section>
          </div>

          {project.hasArchitectureDiagram && (
            <section>
              <h3 className="font-display font-semibold text-sm uppercase tracking-wide text-ink-dim mb-4">
                {t('projects.detail.architecture')}
              </h3>
              <ArchitectureDiagram />
            </section>
          )}

          <section>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wide text-ink-dim mb-3">
              {t('projects.detail.technologies')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="text-xs font-mono text-ink-muted border border-line rounded-md px-2.5 py-1.5">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wide text-ink-dim mb-3">
              {t('projects.detail.features')}
            </h3>
            <ul className="space-y-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-muted">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <div className="grid sm:grid-cols-2 gap-6">
            <section>
              <h3 className="font-display font-semibold text-sm uppercase tracking-wide text-ink-dim mb-2">
                {t('projects.detail.challenges')}
              </h3>
              <p className="text-ink-muted leading-relaxed text-sm">{t(`${base}.challenges`)}</p>
            </section>
            <section>
              <h3 className="font-display font-semibold text-sm uppercase tracking-wide text-ink-dim mb-2">
                {t('projects.detail.results')}
              </h3>
              <p className="text-ink-muted leading-relaxed text-sm">{t(`${base}.results`)}</p>
            </section>
          </div>

          <div className="flex flex-wrap gap-3 border-t border-line pt-6">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold bg-white/5 text-ink rounded-full px-4 py-2.5 hover:bg-accent hover:text-white transition-colors"
              >
                <GithubIcon width={15} height={15} />
                {t('projects.github')}
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 text-sm font-medium text-ink-dim bg-white/5 rounded-full px-4 py-2.5 cursor-not-allowed opacity-60">
                <GithubIcon width={15} height={15} />
                {t('projects.notAvailable')}
              </span>
            )}
            {project.liveDemo ? (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold bg-white/5 text-ink rounded-full px-4 py-2.5 hover:bg-accent hover:text-white transition-colors"
              >
                <ExternalLink size={15} aria-hidden="true" />
                {t('projects.liveDemo')}
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 text-sm font-medium text-ink-dim bg-white/5 rounded-full px-4 py-2.5 cursor-not-allowed opacity-60">
                <ExternalLink size={15} aria-hidden="true" />
                {t('projects.notAvailable')}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
