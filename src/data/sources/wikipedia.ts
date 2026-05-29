import type { TTermSource } from '@/types'
import { LOCALES } from '@/common'
import { SOURCES } from '@/data/term-sources'
import { TAGS } from '@/data/term-tags'
import { TYPES } from '@/data/term-types'

export default {
  id: `wikipedia`,

  name: {
    [LOCALES.EN_US]: `Wikipedia`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Wikipedia`,
  },
} as const satisfies TTermSource
