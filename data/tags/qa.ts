import type { TTermTag } from '@/types'

import { LOCALES } from '../locales'

export default {
  id: `qa`,

  name: {
    [LOCALES.EN_US]: `QA`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `QA`,
  },
} as const satisfies TTermTag
