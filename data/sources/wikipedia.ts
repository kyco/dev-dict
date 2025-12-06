import type { TTermSource } from '@/types'

import { LOCALE } from '../locales'

export default {
  id: `wikipedia`,

  name: {
    [LOCALE.EN_US]: `Wikipedia`,
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: `Wikipedia`,
  },
} as const satisfies TTermSource
