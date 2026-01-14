import type { TTermType } from '@/types'

import { LOCALES } from '../locales'

export default {
  id: `concept`,

  name: {
    [LOCALES.EN_US]: `Concept`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Konzept`,
  },
} as const satisfies TTermType
