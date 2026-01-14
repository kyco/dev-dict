import type { TTermSource } from '@/types'
import { LOCALES } from '@/data/locales'
import { SOURCES } from '@/data/sources'
import { TAGS } from '@/data/tags'
import { TYPES } from '@/data/types'

export default {
  id: `inferred`,

  name: {
    [LOCALES.EN_US]: `Inferred from Context`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Aus dem Kontext abgeleitet`,
  },
} as const satisfies TTermSource
