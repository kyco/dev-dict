import type { TTermTag } from '@/types'

import { LOCALE } from '../locales'

export default {
  id: `backend`,

  name: {
    [LOCALE.EN_US]: `Backend`,
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: `Backend`,
  },
} as const satisfies TTermTag
