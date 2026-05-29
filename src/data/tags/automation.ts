import type { TTermTag } from '@/types'
import { LOCALES } from '@/common'
import { SOURCES } from '@/data/term-sources'
import { TAGS } from '@/data/term-tags'
import { TYPES } from '@/data/term-types'

export default {
  id: `automation`,

  name: {
    [LOCALES.EN_US]: `Automation`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Automatisierung`,
  },
} as const satisfies TTermTag
