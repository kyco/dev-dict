import type { TTermSource } from '@/types'

import { LOCALES } from '../locales'

export default {
  id: `wikipedia`,

  name: {
    [LOCALES.EN_US]: `Wikipedia`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Wikipedia`,
  },
} as const satisfies TTermSource
