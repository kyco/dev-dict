import type { TTerm } from '@/types'

import { LOCALE } from '../locales'
import { TAG } from '../tags'
import { TYPE } from '../types'

export default {
  id: `e2e`,

  name: {
    [LOCALE.EN_US]: `End-to-end Testing`,
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: `Ende-zu-Ende-Tests`,
  },

  altName: {
    [LOCALE.EN_US]: `E2E Testing`,
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: `E2E-Tests`,
  },

  label: {
    [LOCALE.EN_US]: `Testing Methodology`,
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: `Testmethodik`,
  },

  definition: {
    [LOCALE.EN_US]: `A software testing methodology that validates the entire application flow from start to finish, simulating real user scenarios to ensure all integrated components work together correctly.`,
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: `Eine Software-Testmethodik, die den gesamten Anwendungsablauf von Anfang bis Ende validiert und reale Benutzerszenarien simuliert, um sicherzustellen, dass alle integrierten Komponenten korrekt zusammenarbeiten.`,
  },

  type: [TYPE.concept, TYPE.methodology],

  tags: [TAG.testing, TAG.automation, TAG.qa, TAG.e2e],
} as const satisfies TTerm
