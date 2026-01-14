import type { TTermType } from '@/types'
import { LOCALES, SOURCES, TAGS, TYPES } from '@data/index'

export default {
  id: `runtime_environment`,

  name: {
    [LOCALES.EN_US]: `Runtime Environment`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Laufzeitumgebung`,
  },
} as const satisfies TTermType
