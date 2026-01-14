import type { TTermSource } from '@/types'
import { LOCALES, SOURCES, TAGS, TYPES } from '@data/index'

export default {
  id: `official_website`,

  name: {
    [LOCALES.EN_US]: `Official Website`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Offizielle Website`,
  },
} as const satisfies TTermSource
