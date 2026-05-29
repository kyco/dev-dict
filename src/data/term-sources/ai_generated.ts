import type { TTermSource } from '@/types'
import { LOCALES } from '@/common'

export default {
  id: `ai_generated`,

  name: {
    [LOCALES.EN_US]: `AI Generated`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `KI-generiert`,
  },
} as const satisfies TTermSource
