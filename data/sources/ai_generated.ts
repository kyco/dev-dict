import type { TTermSource } from '@/types'

import { LOCALE } from '../locales'

export default {
  id: `ai_generated`,

  name: {
    [LOCALE.EN_US]: `AI Generated`,
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: `KI-generiert`,
  },
} as const satisfies TTermSource
