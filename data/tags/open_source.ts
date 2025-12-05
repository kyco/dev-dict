import type { TTermTag } from '@/types'

import { LOCALE } from '../locales'

export default {
  id: `open_source`,

  name: {
    [LOCALE.EN_US]: `Open Source`,
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: `Open Source`,
  },
} as const satisfies TTermTag
