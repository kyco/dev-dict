import type { TTermSource } from '@/types'
import { LOCALES } from '@/data/locales'
import { SOURCES } from '@/data/sources'
import { TAGS } from '@/data/tags'
import { TYPES } from '@/data/types'

export default {
  id: `ai_generated`,

  name: {
    [LOCALES.EN_US]: `AI Generated`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `KI-generiert`,
  },
} as const satisfies TTermSource
