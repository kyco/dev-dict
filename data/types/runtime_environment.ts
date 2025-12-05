import type { TTermType } from '@/types'

import { LOCALE } from '../locales'

export default {
  id: `runtime_environment`,

  name: {
    [LOCALE.EN_US]: `Runtime Environment`,
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: `Laufzeitumgebung`,
  },
} as const satisfies TTermType
