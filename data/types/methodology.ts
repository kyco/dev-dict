import type { TTermType } from '@/types'

import { LOCALES } from '../locales'

export default {
  id: `methodology`,

  name: {
    [LOCALES.EN_US]: `Methodology`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Methodik`,
  },
} as const satisfies TTermType
