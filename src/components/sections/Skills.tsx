import { useTranslation } from 'react-i18next'
import { Code2, Server, BrainCircuit, Database, Wrench, Layers } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { skillCategories, type SkillCategory } from '@/data/skills'

const ICONS: Record<SkillCategory['icon'], typeof Code2> = {
  code: Code2,
  server: Server,
  brain: BrainCircuit,
  database: Database,
  wrench: Wrench,
  layers: Layers,
}

export function Skills() {
  const { t } = useTranslation()

  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow={t('skills.eyebrow')}
          title={t('skills.title')}
          subtitle={t('skills.subtitle')}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, i) => {
            const Icon = ICONS[cat.icon]
            const isAi = cat.key === 'ai'
            return (
              <Reveal key={cat.key} delay={i * 60}>
                <div className="h-full p-7 bg-surface/40 border border-line rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:bg-surface/70">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                      isAi ? 'bg-accent-soft text-accent' : 'bg-amber-soft text-amber'
                    }`}
                  >
                    <Icon size={19} aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-semibold text-base mb-3 text-ink">
                    {t(`skills.categories.${cat.key}`)}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono text-ink-muted border border-line rounded-md px-2 py-1"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
