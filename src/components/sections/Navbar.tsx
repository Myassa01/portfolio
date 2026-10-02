import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X, Download } from 'lucide-react'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { useActiveSection } from '@/hooks/useActiveSection'
import { links } from '@/data/links'

const SECTION_IDS = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'certifications', 'contact']

export function Navbar() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const navItems: { id: string; label: string }[] = [
    { id: 'about', label: t('nav.about') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'education', label: t('nav.education') },
    { id: 'certifications', label: t('nav.certifications') },
    { id: 'contact', label: t('nav.contact') },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-bg/75 backdrop-blur-xl border-b border-line">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 h-[68px] flex items-center justify-between">
        <a href="#home" className="font-display font-semibold text-base text-ink no-underline">
          Myassa<span className="text-accent">.</span>dev
        </a>

        <ul className="hidden lg:flex items-center gap-1 list-none m-0 p-0">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`text-sm font-medium px-3.5 py-2 rounded-full transition-colors no-underline ${
                  active === item.id ? 'text-ink bg-white/5' : 'text-ink-muted hover:text-ink hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <LanguageSwitcher />
          <a
            href={links.cvFile}
            download
            className="inline-flex items-center gap-2 text-sm font-semibold bg-accent text-white rounded-lg px-4 py-2.5 hover:-translate-y-0.5 transition-transform"
          >
            <Download size={14} aria-hidden="true" />
            {t('nav.downloadCv')}
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-line text-ink"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="lg:hidden border-t border-line bg-bg-elev px-5 sm:px-8 py-4">
          <ul className="list-none m-0 p-0 flex flex-col">
            {navItems.map((item) => (
              <li key={item.id} className="border-b border-line last:border-b-0">
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`block py-3.5 text-sm font-medium no-underline ${
                    active === item.id ? 'text-accent' : 'text-ink-muted'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-line">
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
            <a
              href={links.cvFile}
              download
              className="inline-flex items-center gap-2 text-sm font-semibold bg-accent text-white rounded-lg px-4 py-2.5"
            >
              <Download size={14} aria-hidden="true" />
              {t('nav.downloadCv')}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
