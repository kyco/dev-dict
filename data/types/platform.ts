import type { TTermType } from '@/types'

import { LOCALES } from '../locales'

export default {
  id: `platform`,

  name: {
    [LOCALES.EN_US]: `Platform`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Plattform`,
  },
} as const satisfies TTermType
