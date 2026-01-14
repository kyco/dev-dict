import type { TTermType } from '@/types'
import { LOCALES } from '@/data/locales'
import { SOURCES } from '@/data/sources'
import { TAGS } from '@/data/tags'
import { TYPES } from '@/data/types'

export default {
  id: `cms`,

  name: {
    [LOCALES.EN_US]: `Content Management System`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Content-Management-System`,
  },
} as const satisfies TTermType
