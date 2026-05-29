import type { TTerm } from '@/types'
import { LOCALES } from '@/common'
import { SOURCES } from '@/data/sources'
import { TAGS } from '@/data/tags'
import { TYPES } from '@/data/term-types'

export default {
  id: `golang`,

  name: {
    [LOCALES.EN_US]: `Go`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: LOCALES.EN_US,
  },

  altName: {
    [LOCALES.EN_US]: `Golang`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: LOCALES.EN_US,
  },

  label: {
    [LOCALES.EN_US]: `High-Level Programming Language`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Hochsprache`,
  },

  definition: {
    [LOCALES.EN_US]: `Go, also known as Golang, is a statically typed, compiled programming language designed at Google. It emphasizes simplicity, concurrency, and performance, making it ideal for building scalable and efficient software applications.`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Go, auch bekannt als Golang, ist eine statisch typisierte, kompilierte Programmiersprache, die bei Google entwickelt wurde. Sie legt Wert auf Einfachheit, Nebenläufigkeit und Leistung, was sie ideal für den Aufbau skalierbarer und effizienter Softwareanwendungen macht.`,
  },

  type: [TYPES.language],

  tags: [TAGS.backend, TAGS.open_source],

  links: {
    official_website: `https://go.dev/`,
    wikipedia: `https://en.wikipedia.org/wiki/Go_(programming_language)`,
  },

  sources: {
    label: [SOURCES.ai_generated],
    definition: [SOURCES.ai_generated],
  },
} as const satisfies TTerm
