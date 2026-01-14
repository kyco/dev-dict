import type { TTermType } from '@/types'
import { LOCALES, SOURCES, TAGS, TYPES } from '@/data'

export default {
  id: `language`,

  name: {
    [LOCALES.EN_US]: `Language`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Sprache`,
  },
} as const satisfies TTermType
