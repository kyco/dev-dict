import type { TTermTag } from '@/types'
import { LOCALES, SOURCES, TAGS, TYPES } from '@data/index'

export default {
  id: `javascript`,

  name: {
    [LOCALES.EN_US]: `JavaScript`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `JavaScript`,
  },
} as const satisfies TTermTag
