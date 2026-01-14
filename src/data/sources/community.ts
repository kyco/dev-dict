import type { TTermSource } from '@/types'
import { LOCALES } from '@/data/locales'
import { SOURCES } from '@/data/sources'
import { TAGS } from '@/data/tags'
import { TYPES } from '@/data/types'

export default {
  id: `community`,

  name: {
    [LOCALES.EN_US]: `Community Consensus`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Gemeinschaftskonsens`,
  },
} as const satisfies TTermSource
