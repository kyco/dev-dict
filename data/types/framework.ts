import type { TTermType } from '@/types'
import { LOCALES, SOURCES, TAGS, TYPES } from '@data/index'

export default {
  id: `framework`,

  name: {
    [LOCALES.EN_US]: `Framework`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Framework`,
  },
} as const satisfies TTermType
