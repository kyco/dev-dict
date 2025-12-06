import type { TTermType } from '@/types'

import { LOCALE } from '../locales'

export default {
  id: `concept`,

  name: {
    [LOCALE.EN_US]: `Concept`,
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: `Konzept`,
  },
} as const satisfies TTermType
