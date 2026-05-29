import type { TTermTag } from '@/types'
import { LOCALES } from '@/common'

export default {
  id: `security`,

  name: {
    [LOCALES.EN_US]: `Security`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Sicherheit`,
  },
} as const satisfies TTermTag
