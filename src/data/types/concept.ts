import type { TTermType } from '@/types'
import { LOCALES } from '@/data/locales'
import { SOURCES } from '@/data/sources'
import { TAGS } from '@/data/tags'
import { TYPES } from '@/data/types'

export default {
  id: `concept`,

  name: {
    [LOCALES.EN_US]: `Concept`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Konzept`,
  },
} as const satisfies TTermType
