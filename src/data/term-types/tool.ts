import type { TTermType } from '@/types'
import { LOCALES } from '@/common'

export default {
  id: `tool`,

  name: {
    [LOCALES.EN_US]: `Tool`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Werkzeug`,
  },
} as const satisfies TTermType
