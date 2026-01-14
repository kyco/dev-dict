import type { TTermType } from '@/types'

import { LOCALES } from '../locales'

export default {
  id: `platform`,

  name: {
    [LOCALES.EN_US]: `Platform`,
  },
} as const satisfies TTermType
