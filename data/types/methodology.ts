import type { TTermType } from '@/types'
import { LOCALES, SOURCES, TAGS, TYPES } from '@data/index'

export default {
  id: `methodology`,

  name: {
    [LOCALES.EN_US]: `Methodology`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Methodik`,
  },
} as const satisfies TTermType
