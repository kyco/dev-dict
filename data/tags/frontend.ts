import type { TTermTag } from '@/types'

import { LOCALE } from '../locales'

export default {
  id: `frontend`,

  name: {
    [LOCALE.EN_US]: `Frontend`,
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: `Frontend`,
  },
} as const satisfies TTermTag
