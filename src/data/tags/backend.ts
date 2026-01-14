import type { TTermTag } from '@/types'
import { LOCALES, SOURCES, TAGS, TYPES } from '@/data'

export default {
  id: `backend`,

  name: {
    [LOCALES.EN_US]: `Backend`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Backend`,
  },
} as const satisfies TTermTag
