import type { TTermTag } from '@/types'
import { LOCALES } from '@/common'

export default {
  id: `qa`,

  name: {
    [LOCALES.EN_US]: `QA`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: LOCALES.EN_US,
  },
} as const satisfies TTermTag
