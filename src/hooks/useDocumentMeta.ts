import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export function useDocumentMeta() {
  const { t } = useTranslation()

  useEffect(() => {
    document.title = t('meta.title')
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', t('meta.description'))
  }, [t])
}
