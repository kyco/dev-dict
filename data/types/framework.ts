import type { TTermType } from '@/types'

import { LOCALES } from '../locales'

export default {
  id: `framework`,

  name: {
    [LOCALES.EN_US]: `Framework`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Framework`,
  },
} as const satisfies TTermType
