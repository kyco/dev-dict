import type { TTermTag } from '@/types'

import { LOCALE } from '../locales'

export default {
  id: `javascript`,

  name: {
    [LOCALE.EN_US]: `JavaScript`,
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: `JavaScript`,
  },
} as const satisfies TTermTag
