import type { TTermTag } from '@/types'

import { LOCALES } from '../locales'

export default {
  id: `open_source`,

  name: {
    [LOCALES.EN_US]: `Open Source`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Open Source`,
  },
} as const satisfies TTermTag
