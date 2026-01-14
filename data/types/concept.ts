import type { TTermType } from '@/types'
import { LOCALES, SOURCES, TAGS, TYPES } from '@data/index'

export default {
  id: `concept`,

  name: {
    [LOCALES.EN_US]: `Concept`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Konzept`,
  },
} as const satisfies TTermType
