import type { TTermSource } from '@/types'
import { LOCALES } from '@/common'
import { SOURCES } from '@/data/sources'
import { TAGS } from '@/data/term-tags'
import { TYPES } from '@/data/term-types'

export default {
  id: `official_website`,

  name: {
    [LOCALES.EN_US]: `Official Website`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Offizielle Website`,
  },
} as const satisfies TTermSource
