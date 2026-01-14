import type { TTermSource } from '@/types'
import { LOCALES, SOURCES, TAGS, TYPES } from '@data/index'

export default {
  id: `inferred`,

  name: {
    [LOCALES.EN_US]: `Inferred from Context`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Aus dem Kontext abgeleitet`,
  },
} as const satisfies TTermSource
