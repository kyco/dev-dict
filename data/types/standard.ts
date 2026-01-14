import type { TTermType } from '@/types'
import { LOCALES, SOURCES, TAGS, TYPES } from '@data/index'

export default {
  id: `standard`,

  name: {
    [LOCALES.EN_US]: `Standard`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Standard`,
  },
} as const satisfies TTermType
