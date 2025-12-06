import type { TTermSource } from '@/types'

import { LOCALE } from '../locales'

export default {
  id: `official_website`,

  name: {
    [LOCALE.EN_US]: `Official Website`,
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: `Offizielle Website`,
  },
} as const satisfies TTermSource
