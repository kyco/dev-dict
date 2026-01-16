import type { TTerm } from '@/types'
import { LOCALES } from '@/data/locales'
import { SOURCES } from '@/data/sources'
import { TAGS } from '@/data/tags'
import { TYPES } from '@/data/types'

export default {
  id: `agile`,

  name: {
    [LOCALES.EN_US]: `Agile`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: LOCALES.EN_US,
  },

  label: {
    ...TYPES.methodology.name,
  },

  definition: {
    [LOCALES.EN_US]: `Agile is a software development methodology that emphasizes iterative progress, collaboration, and flexibility. It promotes adaptive planning, evolutionary development, early delivery, and continuous improvement, encouraging rapid and flexible response to change through cross-functional teams working in short cycles called sprints.`,
    [LOCALES.EN_GB]: `Agile is a software development methodology that emphasises iterative progress, collaboration, and flexibility. It promotes adaptive planning, evolutionary development, early delivery, and continuous improvement, encouraging rapid and flexible response to change through cross-functional teams working in short cycles called sprints.`,
    [LOCALES.DE_DE]: `Agile ist eine Softwareentwicklungsmethodik, die iterative Fortschritte, Zusammenarbeit und Flexibilität betont. Sie fördert adaptive Planung, evolutionäre Entwicklung, frühzeitige Lieferung und kontinuierliche Verbesserung und ermutigt zu einer schnellen und flexiblen Reaktion auf Veränderungen durch funktionsübergreifende Teams, die in kurzen Zyklen, sogenannten Sprints, arbeiten.`,
  },

  type: [TYPES.methodology],

  tags: [TAGS.software_development, TAGS.project_management, TAGS.scrum, TAGS.kanban],

  links: {
    website: 'https://agilemanifesto.org',
    wikipedia: 'https://en.wikipedia.org/wiki/Agile_software_development',
  },

  sources: {
    label: [SOURCES.community],
    definition: [SOURCES.ai_generated],
  },
} as const satisfies TTerm
