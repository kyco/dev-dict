import type { TTermTag } from '@/types'

import { LOCALES } from '../locales'

export default {
  id: `testing`,

  name: {
    [LOCALES.EN_US]: `Testing`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Testing`,
  },
} as const satisfies TTermTag
