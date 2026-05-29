import type { TTerm } from '@/types'
import { LOCALES } from '@/common'
import { SOURCES } from '@/data/sources'
import { TAGS } from '@/data/tags'
import { TYPES } from '@/data/types'

export default {
  id: `ai`,

  name: {
    [LOCALES.EN_US]: `AI`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `KI`,
  },

  altName: {
    [LOCALES.EN_US]: `Artificial Intelligence`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Künstliche Intelligenz`,
  },

  label: {
    [LOCALES.EN_US]: `AI`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `KI`,
  },

  definition: {
    [LOCALES.EN_US]: `Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and learn like humans. It encompasses a wide range of technologies and techniques, including machine learning, natural language processing, computer vision, and robotics. AI systems can perform tasks that typically require human intelligence, such as recognizing speech, making decisions, and solving problems.`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Künstliche Intelligenz (KI) bezieht sich auf die Simulation menschlicher Intelligenz in Maschinen, die so programmiert sind, dass sie wie Menschen denken und lernen können. Sie umfasst eine Vielzahl von Technologien und Techniken, einschließlich maschinellem Lernen, natürlicher Sprachverarbeitung, Computer Vision und Robotik. KI-Systeme können Aufgaben ausführen, die typischerweise menschliche Intelligenz erfordern, wie z.B. Spracherkennung, Entscheidungsfindung und Problemlösung.`,
  },

  type: [],

  tags: [],
} as const satisfies TTerm
