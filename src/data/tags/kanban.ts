import type { TTermTag } from '@/types'
import { LOCALES } from '@/data/locales'

export default {
  id: `kanban`,

  name: {
    [LOCALES.EN_US]: `Kanban`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: LOCALES.EN_US,
  },
} as const satisfies TTermTag
