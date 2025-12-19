import type { TTermTag } from '@/types'

import { LOCALE } from '../locales'

export default {
  id: `e2e`,

  name: {
    [LOCALE.EN_US]: `E2E`,
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: LOCALE.EN_US,
  },
} as const satisfies TTermTag
