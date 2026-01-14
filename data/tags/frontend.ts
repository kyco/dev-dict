import type { TTermTag } from '@/types'

import { LOCALES } from '../locales'

export default {
  id: `frontend`,

  name: {
    [LOCALES.EN_US]: `Frontend`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Frontend`,
  },
} as const satisfies TTermTag
