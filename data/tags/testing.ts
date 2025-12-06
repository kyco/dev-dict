import type { TTermTag } from '@/types'

import { LOCALE } from '../locales'

export default {
  id: `testing`,

  name: {
    [LOCALE.EN_US]: `Testing`,
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: `Testing`,
  },
} as const satisfies TTermTag
