import type { TTermTag } from '@/types'
import { LOCALES } from '@/data/locales'
import { SOURCES } from '@/data/sources'
import { TAGS } from '@/data/tags'
import { TYPES } from '@/data/types'

export default {
  id: `cryptography`,

  name: {
    [LOCALES.EN_US]: `Cryptography`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Kryptografie`,
  },
} as const satisfies TTermTag
