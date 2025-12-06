import type { TTermTag } from '@/types'

import { LOCALE } from '../locales'

export default {
  id: `ui_library`,

  name: {
    [LOCALE.EN_US]: `UI Library`,
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: `UI-Bibliothek`,
  },
} as const satisfies TTermTag
