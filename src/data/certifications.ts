export interface Certification {
  id: string
  i18nKey: string
  year: string
  credentialUrl: string | null
}

// Organization name is translated via certifications.items.<i18nKey>.organization.
// Add credentialUrl once a real link/certificate scan is available —
// entries without one render a disabled placeholder button.
export const certifications: Certification[] = [
  {
    id: 'devup-fullstack',
    i18nKey: 'devupFullstack',
    year: '',
    credentialUrl: null,
  },
  {
    id: 'gdsc-uiux',
    i18nKey: 'gdscUiux',
    year: '',
    credentialUrl: null,
  },
]
