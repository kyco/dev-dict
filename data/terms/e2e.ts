import type { TTerm } from '@/types'
import { LOCALES, SOURCES, TAGS, TYPES } from '@data/index'

export default {
  id: `e2e`,

  name: {
    [LOCALES.EN_US]: `End-to-end Testing`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Ende-zu-Ende-Tests`,
  },

  altName: {
    [LOCALES.EN_US]: `E2E Testing`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `E2E-Tests`,
  },

  label: {
    [LOCALES.EN_US]: `Testing Methodology`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Testmethodik`,
  },

  definition: {
    [LOCALES.EN_US]: `A software testing methodology that validates the entire application flow from start to finish, simulating real user scenarios to ensure all integrated components work together correctly.`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Eine Software-Testmethodik, die den gesamten Anwendungsablauf von Anfang bis Ende validiert und reale Benutzerszenarien simuliert, um sicherzustellen, dass alle integrierten Komponenten korrekt zusammenarbeiten.`,
  },

  type: [TYPES.concept, TYPES.methodology],

  tags: [TAGS.testing, TAGS.automation, TAGS.qa, TAGS.e2e],
} as const satisfies TTerm
