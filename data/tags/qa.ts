import type { TTermTag } from '@/types'

import { LOCALE } from '../locales'

export default {
  id: `qa`,

  name: {
    [LOCALE.EN_US]: `QA`,
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: `QA`,
  },
} as const satisfies TTermTag
