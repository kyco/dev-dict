import type { TTermType } from '@/types'

import { LOCALE } from '../locales'

export default {
  id: `methodology`,

  name: {
    [LOCALE.EN_US]: `Methodology`,
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: `Methodik`,
  },
} as const satisfies TTermType
