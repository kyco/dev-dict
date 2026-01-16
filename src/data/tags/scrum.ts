import type { TTermTag } from '@/types'
import { LOCALES } from '@/data/locales'

export default {
  id: `scrum`,

  name: {
    [LOCALES.EN_US]: `Scrum`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: LOCALES.EN_US,
  },
} as const satisfies TTermTag
