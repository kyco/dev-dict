import type { TTermTag } from '@/types'
import { LOCALES } from '@/data/locales'

export default {
  id: `software_development`,

  name: {
    [LOCALES.EN_US]: `Software Development`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Softwareentwicklung`,
  },
} as const satisfies TTermTag
