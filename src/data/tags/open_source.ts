import type { TTermTag } from '@/types'
import { LOCALES } from '@/data/locales'
import { SOURCES } from '@/data/sources'
import { TAGS } from '@/data/tags'
import { TYPES } from '@/data/types'

export default {
  id: `open_source`,

  name: {
    [LOCALES.EN_US]: `Open Source`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Open Source`,
  },
} as const satisfies TTermTag
