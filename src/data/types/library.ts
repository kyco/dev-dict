import type { TTermType } from '@/types'
import { LOCALES } from '@/data/locales'

export default {
  id: `library`,

  name: {
    [LOCALES.EN_US]: `Library`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Bibliothek`,
  },
} as const satisfies TTermType
