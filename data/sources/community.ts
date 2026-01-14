import type { TTermSource } from '@/types'
import { LOCALES, SOURCES, TAGS, TYPES } from '@data/index'

export default {
  id: `community`,

  name: {
    [LOCALES.EN_US]: `Community Consensus`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Gemeinschaftskonsens`,
  },
} as const satisfies TTermSource
