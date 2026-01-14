import type { TTermType } from '@/types'

import { LOCALES } from '../locales'

export default {
  id: `standard`,

  name: {
    [LOCALES.EN_US]: `Standard`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Standard`,
  },
} as const satisfies TTermType
