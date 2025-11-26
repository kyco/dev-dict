import type { TTerm } from '@/types'
import { LOCALE, TAG, TYPE } from '@data'

export default {
  id: 'typescript',

  name: 'TypeScript',

  type: [TYPE.language],

  label: {
    [LOCALE.EN_US]: `High-Level Programming Language`,
    [LOCALE.DE_DE]: `Hochsprache`,
  },

  definition: {
    [LOCALE.EN_US]: `TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.`,
    [LOCALE.DE_DE]: `TypeScript ist eine stark typisierte Programmiersprache, die auf JavaScript aufbaut und Ihnen bei jeder Größenordnung bessere Werkzeuge bietet.`,
  },

  tags: [TAG.frontend, TAG.backend, TAG.open_source],

  links: {
    website: 'https://www.typescriptlang.org',
  },
} as const satisfies TTerm
