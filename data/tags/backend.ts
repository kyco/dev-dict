import type { TTermTag } from '@/types'

import { LOCALES } from '../locales'

export default {
  id: `backend`,

  name: {
    [LOCALES.EN_US]: `Backend`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Backend`,
  },
} as const satisfies TTermTag
