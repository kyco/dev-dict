import type { TTermTag } from '@/types'
import { LOCALES } from '@/data/locales'
import { SOURCES } from '@/data/sources'
import { TAGS } from '@/data/tags'
import { TYPES } from '@/data/types'

export default {
  id: `security`,

  name: {
    [LOCALES.EN_US]: `Security`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Sicherheit`,
  },
} as const satisfies TTermTag
