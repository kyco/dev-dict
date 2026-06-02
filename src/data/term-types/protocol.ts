import type { TTermType } from '@/types'
import { LOCALES } from '@/common'

export default {
  id: `protocol`,

  name: {
    [LOCALES.EN_US]: `Protocol`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Protokoll`,
  },
} as const satisfies TTermType
