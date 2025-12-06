import type { TTermSource } from '@/types'

import { LOCALE } from '../locales'

export default {
  id: `community`,

  name: {
    [LOCALE.EN_US]: `Community Consensus`,
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: `Gemeinschaftskonsens`,
  },
} as const satisfies TTermSource
