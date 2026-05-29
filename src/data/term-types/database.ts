import type { TTermType } from '@/types'
import { LOCALES } from '@/common'

export default {
  id: `database`,

  name: {
    [LOCALES.EN_US]: `Database`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Datenbank`,
  },
} as const satisfies TTermType
