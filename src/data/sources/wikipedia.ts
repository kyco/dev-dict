import type { TTermSource } from '@/types'
import { LOCALES } from '@/data/locales'
import { SOURCES } from '@/data/sources'
import { TAGS } from '@/data/tags'
import { TYPES } from '@/data/types'

export default {
  id: `wikipedia`,

  name: {
    [LOCALES.EN_US]: `Wikipedia`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Wikipedia`,
  },
} as const satisfies TTermSource
