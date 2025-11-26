import type { TTermType } from '@/types'
import { LOCALE } from '@data'

export default {
  id: 'runtime_environment',

  name: {
    [LOCALE.EN_US]: `Runtime Environment`,
    [LOCALE.DE_DE]: `Laufzeitumgebung`,
  },
} as const satisfies TTermType
