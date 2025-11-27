import type { TTermType } from '@/types'

import { LOCALE } from '../locales'

export default {
  id: 'framework',

  name: {
    [LOCALE.EN_US]: `Framework`,
    [LOCALE.DE_DE]: `Framework`,
  },
} as const satisfies TTermType
