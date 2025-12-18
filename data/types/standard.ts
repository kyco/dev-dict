import type { TTermType } from '@/types'

import { LOCALE } from '../locales'

export default {
  id: `standard`,

  name: {
    [LOCALE.EN_US]: `Standard`,
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: `Standard`,
  },
} as const satisfies TTermType
