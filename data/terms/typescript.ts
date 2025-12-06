import type { TTerm } from '@/types'

import { LOCALE } from '../locales'
import { TAG } from '../tags'
import { TYPE } from '../types'

export default {
  id: `typescript`,

  name: {
    [LOCALE.EN_US]: `TypeScript`,
  },

  label: {
    [LOCALE.EN_US]: `High-Level Programming Language`,
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: `Hochsprache`,
  },

  definition: {
    [LOCALE.EN_US]: `TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.`,
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: `TypeScript ist eine stark typisierte Programmiersprache, die auf JavaScript aufbaut und Ihnen bei jeder Größenordnung bessere Werkzeuge bietet.`,
  },

  type: [TYPE.language],

  tags: [TAG.frontend, TAG.backend, TAG.open_source, TAG.javascript],

  links: {
    website: `https://www.typescriptlang.org`,
  },

  sources: {
    label: {
      [LOCALE.EN_US]: `Community`,
      [LOCALE.DE_DE]: `AI translation from en-US`,
    },
    definition: {
      [LOCALE.EN_US]: `https://www.typescriptlang.org`,
      [LOCALE.DE_DE]: `AI translation from en-US`,
    },
  },
} as const satisfies TTerm
