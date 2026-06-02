import type { TTermType } from '@/types'
import { LOCALES } from '@/common'

export default {
  id: `service`,

  name: {
    [LOCALES.EN_US]: `Service`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Dienst`,
  },
} as const satisfies TTermType
