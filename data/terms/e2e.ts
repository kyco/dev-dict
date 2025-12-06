import type { TTerm } from '@/types'

import { LOCALE } from '../locales'
import { TAG } from '../tags'
import { TYPE } from '../types'

export default {
  id: `e2e`,

  name: {
    [LOCALE.EN_US]: `End-to-end Testing`,
  },

  label: {
    [LOCALE.EN_US]: `Testing Methodology`,
  },

  definition: {
    [LOCALE.EN_US]: `A software testing methodology that validates the entire application flow from start to finish, simulating real user scenarios to ensure all integrated components work together correctly.`,
  },

  type: [TYPE.concept, TYPE.methodology],

  tags: [TAG.testing, TAG.automation, TAG.qa],
} as const satisfies TTerm
