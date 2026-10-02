import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { GithubIcon } from '@/components/ui/BrandIcons'
import { projects, type Project } from '@/data/projects'
import { ProjectDetailModal } from './ProjectDetailModal'

export function Projects() {
  const { t } = useTranslation()
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow={t('projects.eyebrow')}
          title={t('projects.title')}
          subtitle={t('projects.subtitle')}
        />

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project, i) => {
            const base = `projects.items.${project.i18nKey}`
            const isAccent = project.accent === 'accent'
            const highlight = project.i18nKey === 'hrAssistant' ? t(`${base}.highlight`) : null

            return (
              <Reveal key={project.id} delay={i * 70}>
                <div className="h-full flex flex-col bg-surface/40 border border-line rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:bg-surface/70 relative overflow-hidden">
                  <span
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-0 hover:opacity-100 transition-opacity"
                    style={{
                      background: `linear-gradient(90deg, transparent, var(--color-${isAccent ? 'accent' : 'amber'}), transparent)`,
                    }}
                    aria-hidden="true"
                  />
                  <span
                    className={`inline-block self-start font-mono text-xs font-medium rounded-full px-3 py-1 mb-4 ${
                      isAccent ? 'text-accent bg-accent-soft' : 'text-amber bg-amber-soft'
                    }`}
                  >
                    {t(`${base}.category`)}
                  </span>
                  <h3 className="font-display font-semibold text-xl mb-3 text-ink">{t(`${base}.title`)}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed mb-5 flex-1">{t(`${base}.description`)}</p>

                  {highlight && (
                    <p className="text-xs text-accent bg-accent-soft rounded-lg px-3 py-2 mb-5">
                      <strong className="font-semibold">{t('projects.highlight')}:</strong> {highlight}
                    </p>
                  )}

                  <ul className="flex flex-wrap gap-2 list-none p-0 mb-5">
                    {project.technologies.map((tech) => (
                      <li key={tech} className="text-xs font-mono text-ink-muted border border-line rounded-md px-2 py-1">
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2.5 pt-4 border-t border-line">
                    <button
                      type="button"
                      onClick={() => setSelected(project)}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted bg-white/5 rounded-full px-3.5 py-1.5 hover:bg-accent hover:text-white transition-colors"
                    >
                      {t('projects.viewProject')}
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </button>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted bg-white/5 rounded-full px-3.5 py-1.5 hover:bg-accent hover:text-white transition-colors"
                      >
                        <GithubIcon width={14} height={14} />
                        {t('projects.github')}
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>

      {selected && <ProjectDetailModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
