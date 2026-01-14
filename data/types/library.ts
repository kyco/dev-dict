import type { TTermType } from '@/types'
import { LOCALES, SOURCES, TAGS, TYPES } from '@data/index'

export default {
  id: `library`,

  name: {
    [LOCALES.EN_US]: `Library`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Bibliothek`,
  },
} as const satisfies TTermType
