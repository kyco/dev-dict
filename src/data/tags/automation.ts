import type { TTermTag } from '@/types'
import { LOCALES } from '@/data/locales'
import { SOURCES } from '@/data/sources'
import { TAGS } from '@/data/tags'
import { TYPES } from '@/data/types'

export default {
  id: `automation`,

  name: {
    [LOCALES.EN_US]: `Automation`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Automatisierung`,
  },
} as const satisfies TTermTag
