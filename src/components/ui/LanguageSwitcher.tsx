import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'

const LANGUAGES = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'AR' },
]

export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const current = LANGUAGES.find((l) => l.code === i18n.language) ?? LANGUAGES[0]

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Switch language"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted hover:text-ink border border-line rounded-full px-3 py-1.5 transition-colors hover:border-line-strong"
      >
        <Globe size={14} aria-hidden="true" />
        {current.label}
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute end-0 mt-2 py-1.5 min-w-[100px] bg-bg-elev border border-line rounded-xl shadow-xl z-50"
        >
          {LANGUAGES.map((lang) => (
            <li key={lang.code}>
              <button
                type="button"
                role="option"
                aria-selected={lang.code === i18n.language}
                onClick={() => {
                  i18n.changeLanguage(lang.code)
                  setOpen(false)
                }}
                className={`w-full text-start px-4 py-2 text-sm transition-colors ${
                  lang.code === i18n.language ? 'text-accent font-semibold' : 'text-ink-muted hover:text-ink'
                } hover:bg-white/5`}
              >
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
