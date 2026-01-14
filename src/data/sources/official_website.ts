import type { TTermSource } from '@/types'
import { LOCALES } from '@/data/locales'
import { SOURCES } from '@/data/sources'
import { TAGS } from '@/data/tags'
import { TYPES } from '@/data/types'

export default {
  id: `official_website`,

  name: {
    [LOCALES.EN_US]: `Official Website`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Offizielle Website`,
  },
} as const satisfies TTermSource
