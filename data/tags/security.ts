import type { TTermTag } from '@/types'

import { LOCALE } from '../locales'

export default {
  id: `security`,

  name: {
    [LOCALE.EN_US]: `Security`,
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: `Sicherheit`,
  },
} as const satisfies TTermTag
