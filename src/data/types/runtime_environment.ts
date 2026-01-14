import type { TTermType } from '@/types'
import { LOCALES } from '@/data/locales'
import { SOURCES } from '@/data/sources'
import { TAGS } from '@/data/tags'
import { TYPES } from '@/data/types'

export default {
  id: `runtime_environment`,

  name: {
    [LOCALES.EN_US]: `Runtime Environment`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Laufzeitumgebung`,
  },
} as const satisfies TTermType
