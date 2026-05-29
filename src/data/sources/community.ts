import type { TTermSource } from '@/types'
import { LOCALES } from '@/common'
import { SOURCES } from '@/data/sources'
import { TAGS } from '@/data/tags'
import { TYPES } from '@/data/term-types'

export default {
  id: `community`,

  name: {
    [LOCALES.EN_US]: `Community`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Gemeinschaft`,
  },
} as const satisfies TTermSource
