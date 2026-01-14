import type { TTermType } from '@/types'
import { LOCALES, SOURCES, TAGS, TYPES } from '@/data'

export default {
  id: `cms`,

  name: {
    [LOCALES.EN_US]: `Content Management System`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Content-Management-System`,
  },
} as const satisfies TTermType
