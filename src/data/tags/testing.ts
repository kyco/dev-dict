import type { TTermTag } from '@/types'
import { LOCALES } from '@/common'
import { SOURCES } from '@/data/term-sources'
import { TAGS } from '@/data/term-tags'
import { TYPES } from '@/data/term-types'

export default {
  id: `testing`,

  name: {
    [LOCALES.EN_US]: `Testing`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: LOCALES.EN_US,
  },
} as const satisfies TTermTag
