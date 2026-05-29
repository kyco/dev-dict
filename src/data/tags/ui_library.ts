import type { TTermTag } from '@/types'
import { LOCALES } from '@/common'
import { SOURCES } from '@/data/term-sources'
import { TAGS } from '@/data/term-tags'
import { TYPES } from '@/data/term-types'

export default {
  id: `ui_library`,

  name: {
    [LOCALES.EN_US]: `UI Library`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `UI-Bibliothek`,
  },
} as const satisfies TTermTag
