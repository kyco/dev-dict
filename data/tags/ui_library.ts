import type { TTermTag } from '@/types'

import { LOCALES } from '../locales'

export default {
  id: `ui_library`,

  name: {
    [LOCALES.EN_US]: `UI Library`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `UI-Bibliothek`,
  },
} as const satisfies TTermTag
