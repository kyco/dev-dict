import type { TTermTag } from '@/types'
import { LOCALES } from '@/common'
import { SOURCES, TAGS, TYPES } from '@/data'

export default {
  id: `testing`,

  name: {
    [LOCALES.EN_US]: `Testing`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: LOCALES.EN_US,
  },
} as const satisfies TTermTag
