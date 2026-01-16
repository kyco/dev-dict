import type { TTermTag } from '@/types'
import { LOCALES } from '@/data/locales'

export default {
  id: `project_management`,

  name: {
    [LOCALES.EN_US]: `Project Management`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Projektmanagement`,
  },
} as const satisfies TTermTag
