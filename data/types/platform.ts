import type { TTermType } from '@/types'

import { LOCALE } from '../locales'

export default {
  id: `platform`,

  name: {
    [LOCALE.EN_US]: `Platform`,
  },
} as const satisfies TTermType
