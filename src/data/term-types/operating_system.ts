import type { TTermType } from '@/types'
import { LOCALES } from '@/common'

export default {
  id: `operating_system`,

  name: {
    [LOCALES.EN_US]: `Operating System`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Betriebssystem`,
  },
} as const satisfies TTermType
