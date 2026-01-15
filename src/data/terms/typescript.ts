import type { TTerm } from '@/types'
import { LOCALES } from '@/data/locales'
import { SOURCES } from '@/data/sources'
import { TAGS } from '@/data/tags'
import { TYPES } from '@/data/types'

export default {
  id: `typescript`,

  name: {
    [LOCALES.EN_US]: `TypeScript`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: LOCALES.EN_US,
  },

  label: {
    [LOCALES.EN_US]: `High-Level Programming Language`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Hochsprache`,
  },

  definition: {
    [LOCALES.EN_US]: `TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `TypeScript ist eine stark typisierte Programmiersprache, die auf JavaScript aufbaut und Ihnen bei jeder Größenordnung bessere Werkzeuge bietet.`,
  },

  type: [TYPES.language],

  tags: [TAGS.frontend, TAGS.backend, TAGS.open_source, TAGS.javascript],

  links: {
    website: `https://www.typescriptlang.org`,
  },

  sources: {
    label: [SOURCES.community],
    definition: [SOURCES.official_website],
  },
} as const satisfies TTerm
